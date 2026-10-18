import path from 'node:path';
import fs from 'node:fs';
import {execFileSync, spawnSync} from 'node:child_process';

// electron-builder flips configured fuses *after* this hook and immediately
// before signing (see platformPackager.doAddElectronFuses). Both branches below
// rewrite or sign the Electron binary themselves, so they must flip the fuses
// first and then disable the later built-in pass.
async function applyConfiguredFuses(context) {
	const configuredFuses = context.packager.config.electronFuses;
	if (configuredFuses == null) return;

	const fuseConfig = await context.packager.generateFuseConfig(configuredFuses);
	await context.packager.addElectronFuses(context, fuseConfig);
	context.packager.config.electronFuses = null;
}

// macOS: give the bundle a real ad-hoc signature under our own bundle id.
//
// electron-builder.json5 sets mac.identity to null and mac.notarize to false.
// Null skips electron-builder's own signing, so it does not apply a Developer ID
// or hardened-runtime signature on top of this one, and it does not notarize.
// Notarization needs a paid Apple Developer account. There is no free path.
//
// Without this re-sign the prebuilt Electron binary keeps only the linker's
// ad-hoc signature. That signature declares Identifier=Electron and does not
// cover Info.plist. macOS attributes notifications by code-signing identifier,
// so the packaged app posted as "Electron" and the OS dropped every notification.
// On Apple Silicon an invalid or missing signature is also reported as
// "damaged" and offers no Open Anyway. `codesign --sign -` seals the bundle
// ad-hoc: Gatekeeper still says it could not verify the app, and the user can
// open it from Privacy & Security.
//
// --deep re-signs the nested frameworks and helpers innermost-first.
async function signMacBundleAdHoc(context) {
	const appPath = path.join(context.appOutDir, `${context.packager.appInfo.productFilename}.app`);
	const identifier = context.packager.appInfo.id;

	execFileSync('codesign', ['--force', '--deep', '--sign', '-', '--identifier', identifier, appPath], {stdio: 'inherit'});

	const details = spawnSync('codesign', ['-dv', '--verbose=2', appPath], {encoding: 'utf8'});
	const output = `${details.stdout ?? ''}\n${details.stderr ?? ''}`;
	if (details.status !== 0 || !output.includes('Signature=adhoc')) {
		throw new Error(`macOS bundle is not ad-hoc signed (${appPath}). codesign --sign - is required so Apple Silicon does not report the app as damaged.\n${output}`);
	}
	execFileSync('codesign', ['--verify', '--verbose=2', appPath], {stdio: 'inherit'});
}

// Wraps the Electron binary on Linux with a shell script that passes --no-sandbox.
//
// Why: Chromium's zygote/sandbox setup runs in C++ before Node.js initialises,
// so app.commandLine.appendSwitch('no-sandbox') from JS is always too late.
// AppImage FUSE mounts can't have setuid binaries, so chrome-sandbox is never
// properly configured. Passing --no-sandbox at the OS level (before Electron
// starts) is the only reliable fix.
//
// Security note: contextIsolation + sandbox-via-app.enableSandbox() on the
// renderer side is unaffected by this flag — those are renderer-level JS
// isolation, not OS sandbox.
function wrapLinuxExecutable(context) {
	const execName = context.packager.executableName;
	const execPath = path.join(context.appOutDir, execName);
	const realBin = execPath + '.bin';

	fs.renameSync(execPath, realBin);

	fs.writeFileSync(
		execPath,
		`#!/bin/sh\nexec "$(dirname "$(readlink -f "$0")")/${path.basename(realBin)}" --no-sandbox "$@"\n`
	);
	fs.chmodSync(execPath, 0o755);
}

export default async function afterPack(context) {
	const platform = context.electronPlatformName;
	if (platform !== 'linux' && platform !== 'darwin') return;

	await applyConfiguredFuses(context);

	if (platform === 'darwin') {
		await signMacBundleAdHoc(context);
		return;
	}

	wrapLinuxExecutable(context);
}

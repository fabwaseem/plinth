export function shouldEnableAppSandbox(env: {ELECTRON_DISABLE_SANDBOX?: string | undefined}): boolean {
	// Electron appends `--no-sandbox` whenever this variable is present.
	// `app.enableSandbox()` in that same process crashes the browser with an
	// access violation as the first window loads (exit status 0xC0000005,
	// which a parent process reports as code 5).
	return env.ELECTRON_DISABLE_SANDBOX === undefined
}

# Code signing

Plinth's Windows release workflow can submit the installer and the portable executable to [SignPath Foundation](https://signpath.org) for free Authenticode signing. The certificate is issued to SignPath Foundation. Signing stays off until the secret and repository variables below exist. Until then, tagged releases still publish Windows artifacts unsigned, and the workflow prints a warning.

The policy statement, and the committer and approver roles, live on the project home page: [Code signing policy](../README.md#code-signing-policy).

## Apply to SignPath Foundation

Apply at <https://signpath.org/apply>.

SignPath Foundation's terms require all of the following:

- An [OSI-approved license](https://opensource.org/licenses) with no dual-license. Plinth is MIT.
- A public repository.
- The signed binaries are built in CI. Plinth builds Windows artifacts on GitHub-hosted `windows-latest` runners in [`.github/workflows/installer-smoke.yml`](../.github/workflows/installer-smoke.yml).
- The project is actively maintained, already released, and documented.
- The program is not malware and is not a hacking tool.
- Multi-factor authentication on the GitHub account and on the SignPath account.
- A person approves every signing request. The workflow waits up to two hours for that approval.

After the application is accepted:

1. Install the SignPath GitHub App on `fabwaseem/plinth`.
2. In SignPath, set the project's trusted build system to GitHub.com and link this repository.
3. Create a signing policy that requires manual approval. The approver in the public policy is [fabwaseem](https://github.com/fabwaseem).
4. Create the artifact configuration below. Make it the project's default, or give it a slug and set `SIGNPATH_ARTIFACT_CONFIGURATION_SLUG`.

## Artifact configuration

Each tagged release uploads one zip, `plinth-windows-unsigned.zip`, containing the two executables at the root of the archive. SignPath signs both files in that one request, so there is one approval per release.

```xml
<artifact-configuration xmlns="http://signpath.io/artifact-configuration/v1">
  <zip-file>
    <pe-file path="Plinth-win-x64-Setup.exe" product-name="Plinth">
      <authenticode-sign/>
    </pe-file>
    <pe-file path="Plinth-win-x64-Portable.exe" product-name="Plinth">
      <authenticode-sign/>
    </pe-file>
  </zip-file>
</artifact-configuration>
```

`product-name` is the PE ProductName electron-builder already writes. The same product version is written on both executables. ffmpeg, ffprobe, and the upstream Electron binaries inside the package are not submitted separately. SignPath allows unsigned upstream binaries inside a signed package.

The schema is <https://app.signpath.io/Web/artifact-configuration/v1.xsd>. Syntax reference: <https://docs.signpath.io/artifact-configuration/syntax>.

## Secrets and repository variables

Set these on `fabwaseem/plinth` (Settings → Secrets and variables → Actions).

| Name | Kind | Required |
| --- | --- | --- |
| `SIGNPATH_API_TOKEN` | Secret | Yes |
| `SIGNPATH_ORGANIZATION_ID` | Variable | Yes |
| `SIGNPATH_PROJECT_SLUG` | Variable | Yes |
| `SIGNPATH_SIGNING_POLICY_SLUG` | Variable | Yes |
| `SIGNPATH_ARTIFACT_CONFIGURATION_SLUG` | Variable | No. Leave it unset to use the project's default artifact configuration. |

If the secret or any required variable is missing, the tag build skips signing, emits a warning, and publishes the unsigned executables. Pull requests, pushes to `main`, and the weekly schedule never submit a signing request.

If the configuration is present and SignPath rejects the request, or nobody approves it within two hours, the Windows job fails. That tag's Windows artifacts are not uploaded.

## What the workflow does

On a `v*` tag, `.github/workflows/installer-smoke.yml`:

1. Builds `Plinth-win-x64-Setup.exe` and `Plinth-win-x64-Portable.exe`.
2. Zips those two files and uploads the zip as a GitHub Actions artifact.
3. Submits it with [`signpath/github-action-submit-signing-request`](https://github.com/signpath/github-action-submit-signing-request) and waits for the signed zip.
4. Replaces the unsigned executables, regenerates `Plinth-win-x64-Setup.exe.blockmap`, and rewrites `latest.yml` so the SHA-512 and size match the signed installer.
5. Smoke-tests that signed output, then uploads it to the draft GitHub Release.

`.github/workflows/release.yml` hashes the Windows files that this workflow already published, so `SHA256SUMS` matches the signed bytes.

## electron-builder

`win.signExecutable` is `false` in `electron-builder.json5`. electron-builder still writes the icon, product name, and product version, and it does not Authenticode-sign. `CSC_IDENTITY_AUTO_DISCOVERY` is `false` on the Windows build, so a certificate on the runner is not used either. SignPath is the only Windows signer.

When the SignPath configuration is present, that build also sets `win.signtoolOptions.publisherName` to `SignPath Foundation`. electron-updater records that name and checks it on the next update. The name has to be the certificate subject SignPath puts on the signed file. It is applied only for a build that will be signed, so an unsigned release does not require that publisher on the following update.

Confirm the subject on the first signed file. If SignPath's certificate subject differs, change the `publisherName` argument in the installer workflow to match it exactly.

## macOS

There is no free notarization. Notarization needs a paid Apple Developer account. The macOS build is ad-hoc signed with `codesign --sign -` after packaging, and `mac.notarize` is `false`, so electron-builder does not submit the app to Apple. See [Installing on macOS](../README.md#macos-first-launch).

<img src="src/renderer/src/assets/logo.svg" alt="{{icon_alt}}" width="72" />

# {{title}}

{{hero_desc}}

Plinth is a fork of [Arroxy](https://github.com/antonio-orionus/Arroxy) by Antonio Orionus, MIT licensed.

### What Plinth changes

- Published as Plinth by Waseem Anjum, with its own site ([plinth.fabwaseem.com](https://plinth.fabwaseem.com)) and its own Scoop and Homebrew packages.

**{{read_in_label}}** {{LANG_NAV}}

[**{{cta_latest}}**](#install) · [**{{cta_website}}**](https://plinth.fabwaseem.com) · [{{dl_win_first_h3}}](#windows-first-launch) · [{{dl_macos_first_h3}}](#macos-first-launch) · [{{dl_linux_first_h3}}](#linux-first-launch)

{{star_cta}}

_Last updated: {{LAST_UPDATED}}._

{{ai_notice}}

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download. `winget install WaseemAnjum.Plinth` is coming soon.

---

## {{toc_heading}}

- [{{features_h2}}](#features)
- [{{dl_h2}}](#install)
- [{{why_h2}}](#why)
- [{{privacy_h2}}](#privacy)
- [{{faq_h2}}](#faq)
- [{{roadmap_h2}}](#roadmap)
- [{{support_h2}}](#support)
- [{{tech_h2}}](#tech)

---

## <a id="features"></a>{{features_h2}}

<img src="build/readme/download.png" alt="Plinth download screen" width="900" />

{{shot1_cap}}

<img src="build/readme/browse.png" alt="Plinth browse screen" width="900" />

{{shot8_cap}}

<img src="build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

{{shot5_cap}}

<img src="build/readme/history.png" alt="Plinth history screen" width="900" />

{{shot6_cap}}

<img src="build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

{{shot2_cap}}

### {{feat_explore_h3}}

- {{feat_explore_1}}
- {{feat_explore_2}}
- {{feat_explore_3}}
- {{feat_explore_4}}
- {{feat_explore_5}}

### {{feat_quality_h3}}

- {{feat_quality_1}}
- {{feat_quality_2}}
- {{feat_quality_3}}
- {{feat_quality_4}}

### {{feat_workflow_h3}}

- {{feat_workflow_12}}
- {{feat_workflow_1}}
- {{feat_workflow_2}}
- {{feat_workflow_3}}
- {{feat_workflow_4}}
- {{feat_workflow_5}}
- {{feat_workflow_6}}
- {{feat_workflow_7}}
- {{feat_workflow_8}}
- {{feat_workflow_9}}
- {{feat_workflow_10}}
- {{feat_workflow_11}}
- {{feat_workflow_13}}
- {{feat_workflow_14}}

### {{feat_post_h3}}

- {{feat_post_1}}
- {{feat_post_2}}
- {{feat_post_3}}
- {{feat_post_4}}
- {{feat_post_5}}

### {{feat_sites_h3}}

- {{feat_sites_1}}
- {{feat_sites_2}}
- {{feat_sites_3}}
- {{feat_sites_4}}

### {{feat_privacy_h3}}

- {{feat_privacy_1}}
- {{feat_privacy_2}}
- {{feat_privacy_3}}

---

## <a id="install"></a>{{dl_h2}}

**Windows**

`winget install WaseemAnjum.Plinth` is coming soon ([microsoft/winget-pkgs#454738](https://github.com/microsoft/winget-pkgs/pull/454738) is still open). Until then, use [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth) on macOS, or a [direct download](https://github.com/fabwaseem/plinth/releases/latest).

**macOS**

```bash
brew install --cask fabwaseem/plinth/plinth
```

**Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/fabwaseem/plinth/main/scripts/install.sh | sh
```

Flatpak:

```bash
curl -fsSL https://raw.githubusercontent.com/fabwaseem/plinth/main/scripts/install.sh | sh -s -- --flatpak
```

{{dl_oneline_note}}

| {{dl_platform_col}} | {{dl_format_col}} |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**{{dl_grab}}**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>{{dl_win_first_h3}}

{{dl_win_smartscreen_intro}}

<img src="build/win-smartscreen-more-info.png" width="420" alt="{{shot_smartscreen_more_alt}}" />
<img src="build/win-smartscreen-run-anyway.png" width="420" alt="{{shot_smartscreen_run_alt}}" />

1. {{dl_win_smartscreen_step1}}
2. {{dl_win_smartscreen_step2}}

#### {{dl_win_defender_h4}}

{{dl_win_defender_p}}

> {{dl_win_smartscreen_official}}

{{dl_win_scoop}}

### <a id="macos-first-launch"></a>{{dl_macos_first_h3}}

{{dl_macos_intro}}

1. {{dl_macos_sequoia_step1}}
2. {{dl_macos_sequoia_step2}}

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
open /Applications/Plinth.app
```

{{dl_macos_damaged_p}}

{{dl_macos_arch_note}}

> {{dl_macos_note}}

### <a id="why-warning"></a>{{dl_warning_h3}}

{{dl_warning_p1}}

{{dl_warning_p2}}

### <a id="linux-first-launch"></a>{{dl_linux_first_h3}}

{{dl_linux_intro}}

{{dl_linux_m1_text}}

**{{dl_linux_m2_h4}}**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

{{dl_linux_fuse_text}}

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

{{dl_linux_appimagelauncher}}

**{{dl_linux_targz_h4}}**

{{dl_linux_targz_text}}

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

{{dl_linux_arch_note}}

<details>
<summary><strong><a id="verify"></a>{{dl_verify_h3}}</strong></summary>

{{dl_verify_intro}}

**{{dl_verify_win_label}}**

```powershell
certutil -hashfile Plinth-win-x64-Setup.exe SHA256
```

**{{dl_verify_mac_label}}**

```bash
shasum -a 256 Plinth-mac-arm64.dmg
```

**{{dl_verify_linux_label}}**

```bash
sha256sum Plinth-linux-x64.AppImage
```

{{dl_verify_vt_text}}

</details>

<details>
<summary><strong>{{dl_win_h3}}</strong></summary>

| | {{dl_win_col_installer}} | {{dl_win_col_portable}} |
| --- | --- | --- |
| {{dl_win_r1}} | {{dl_win_r1_installer}} | {{dl_win_r1_portable}} |
| {{dl_win_r2}} | {{dl_win_r2_installer}} | {{dl_win_r2_portable}} |
| {{dl_win_r3}} | {{dl_win_r3_installer}} | {{dl_win_r3_portable}} |
| {{dl_win_r4}} | Yes | No |
| {{dl_win_r5}} | Yes | {{dl_win_r5_portable}} |

{{dl_win_rec}}

</details>

---

## <a id="why"></a>{{why_h2}}

{{why_summary}}

| | Plinth |
| --- | --- |
| {{why_r1}} | Yes |
| {{why_r2}} | Yes |
| {{why_r3}} | Yes |
| {{why_r5}} | Yes |
| {{why_r6}} | Yes |
| {{why_r7}} | Yes |

---

## <a id="privacy"></a>{{privacy_h2}}

{{privacy_p1}}

{{privacy_p2}}

{{privacy_p3}}

---

## <a id="faq"></a>{{faq_h2}}

**{{faq_q1}}**
{{faq_a1}}

**{{faq_q2}}**
{{faq_a2}}

**{{faq_q3}}**
{{faq_a3}}

**{{faq_q4}}**
{{faq_a4}}

**{{faq_q5}}**
{{faq_a5}}

**{{faq_q6}}**
{{faq_a6}}

**{{faq_q7}}**
{{faq_a7}}

**{{faq_q8}}**
{{faq_a8}}

**{{faq_q9}}**
{{faq_a9}}

**{{faq_q10}}**
{{faq_a10}}

---

## <a id="roadmap"></a>{{roadmap_h2}}

{{plan_intro}}

| {{plan_col1}} | {{plan_col2}} |
| --- | --- |
| {{plan_r1_name}} | {{plan_r1_desc}} |
| {{plan_r2_name}} | {{plan_r2_desc}} |
| {{plan_r3_name}} | {{plan_r3_desc}} |
| {{plan_r4_name}} | {{plan_r4_desc}} |
| {{plan_r5_name}} | {{plan_r5_desc}} |
| {{plan_r7_name}} | {{plan_r7_desc}} |
| {{plan_r9_name}} | {{plan_r9_desc}} |

{{plan_cta}}

---

## <a id="support"></a>{{support_h2}}

{{support_note}}

[Bitcoin and Tron addresses](DONATE.md)

---

## <a id="tech"></a>{{tech_h2}}

{{tech_content}}

---

## Troubleshooting

### App won't open / no window appears

The Plinth process starts but no window shows up. Most often this is a GPU driver hang during startup.

**1. Check the log.**

| Platform | Path |
| --- | --- |
| Windows | `%APPDATA%\Plinth\logs\main.log` |
| macOS | `~/Library/Logs/Plinth/main.log` |
| Linux | `~/.config/Plinth/logs/main.log` |

**2. Launch with hardware acceleration disabled.**

```bash
# Windows (Portable) — PowerShell
.\Plinth-win-x64-Portable.exe --disable-gpu

# Windows (Installed)
"%LOCALAPPDATA%\Programs\Plinth\Plinth.exe" --disable-gpu

# macOS
/Applications/Plinth.app/Contents/MacOS/Plinth --disable-gpu

# Linux (AppImage)
./Plinth-linux-x64.AppImage --disable-gpu
```

**3. Persist the flag via `argv.json`.**

| Platform | Path |
| --- | --- |
| Windows | `%APPDATA%\Plinth\argv.json` |
| macOS | `~/Library/Application Support/Plinth/argv.json` |
| Linux | `~/.config/Plinth/argv.json` |

```json
{ "disable-hardware-acceleration": true }
```

**4. Other flags worth trying:** `--disable-software-rasterizer`, `--disable-gpu-sandbox`, `--in-process-gpu`.

**5. Stale window position.** Delete `<userData>\window-state.json` and relaunch.

**6. Still stuck?** Open an issue with your OS version and any output from `--enable-logging --v=1`. If the window does open, attach the file from **Settings → Save diagnostics file**.

---

## {{tos_h2}}

{{tos_note}}

{{footer_credit}}

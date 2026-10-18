<img src="src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth

Download videos, Shorts, music, channels, podcasts, or audio tracks from **YouTube and 2000+ supported sites** — up to 4K HDR at 60 fps, or as MP3 / AAC / Opus. Runs locally on Windows, macOS, and Linux. **No ads, no bloat, no upsells.**

**Read in:** [Afaan Oromoo](i18n/readme/README.om.md) · [Bahasa Indonesia](i18n/readme/README.id.md) · [Deutsch](i18n/readme/README.de.md) · **English** · [Español](i18n/readme/README.es.md) · [Français](i18n/readme/README.fr.md) · [Italiano](i18n/readme/README.it.md) · [Kiswahili](i18n/readme/README.sw.md) · [O'zbekcha](i18n/readme/README.uz.md) · [Polski](i18n/readme/README.pl.md) · [Português](i18n/readme/README.pt.md) · [Tiếng Việt](i18n/readme/README.vi.md) · [Türkçe](i18n/readme/README.tr.md) · [አማርኛ](i18n/readme/README.am.md) · [العربية](i18n/readme/README.ar.md) · [اردو](i18n/readme/README.ur.md) · [پښتو](i18n/readme/README.ps.md) · [فارسی](i18n/readme/README.fa.md) · [বাংলা](i18n/readme/README.bn.md) · [हिन्दी](i18n/readme/README.hi.md) · [ไทย](i18n/readme/README.th.md) · [မြန်မာဘာသာ](i18n/readme/README.my.md) · [Ελληνικά](i18n/readme/README.el.md) · [Русский](i18n/readme/README.ru.md) · [Српски](i18n/readme/README.sr.md) · [Українська](i18n/readme/README.uk.md) · [中文](i18n/readme/README.zh.md) · [日本語](i18n/readme/README.ja.md) · [한국어](i18n/readme/README.ko.md) · [繁體中文](i18n/readme/README.zh-Hant.md)

[**↓ Install Latest Release**](#install) · [**Website**](https://plinth.fabwaseem.com) · [Windows first launch](#windows-first-launch) · [Installing on macOS](#macos-first-launch) · [Linux first launch](#linux-first-launch)

If Plinth saves you time, a ⭐ helps others find it.

_Last updated: 2026-10-18._

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Winget](https://winget.run/pkg/WaseemAnjum/Plinth), [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download.

---

## Contents

- [Features](#features)
- [Install and first launch](#install)
- [Why Plinth](#why)
- [Privacy](#privacy)
- [FAQ](#faq)
- [Roadmap](#roadmap)
- [Support Plinth](#support)
- [Built with](#tech)

---

## <a id="features"></a>Features

<img src="build/readme/download.png" alt="Plinth download screen" width="900" />

<b>Download</b><br/>Paste a link and save it with the profile you already use

<img src="build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Browse</b><br/>Search Google, open a site, or paste a link, then download the page you are on

<img src="build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>Bulk URLs</b><br/>Paste a list. Duplicates are marked, then the rest queue together

<img src="build/readme/history.png" alt="Plinth history screen" width="900" />

<b>History</b><br/>Pause, resume, or clear from one place, and select rows when you only want those

<img src="build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>Profiles</b><br/>Keep a format, quality, and folder preset, then reuse it on the next link

### Browse

- **Browse** opens on a search field and a set of sites. Search Google, open a site, or paste a link, then download the page you are on without copying it out. **Download · *your profile*** queues the video, playlist, or channel in front of you; the arrow next to it switches profiles, and the wand opens the step-by-step download for formats, subtitles, and more
- **Address bar** — the placeholder reads “Search Google or paste a link”. Plain text searches Google. A pasted http or https link opens in the view. Home returns to the site list, and Back walks history until it lands there
- **Downloads that need an account** — sign in once in Explore and Plinth can download private and members-only videos your account can watch, age-restricted videos if the account is age-verified, and your Watch Later and Liked lists. Plinth still downloads signed out and only uses your Explore sign-in when a download fails in a way an account can fix. When YouTube asks you to confirm you're not a bot, Plinth also tries your Explore sign-in
- **Use a secondary account** — Explore's first screen explains why: downloading with an account carries some risk of that account being restricted. Sign out of Explore from Settings whenever you want to forget the sign-in
- **Ad blocker** — Explore blocks ads and trackers on its own pages; downloads are unaffected. On by default, one click on the shield in Explore's toolbar turns it off, and it never acts on Google's sign-in pages. YouTube may push back on ad blockers for signed-in accounts

### Quality & formats

- Up to **4K UHD (2160p)**, 1440p, 1080p, 720p, 480p, 360p
- **High frame rate** preserved as-is — 60 fps, 120 fps, HDR
- **Audio** — export audio-only as MP3, M4A/AAC, Opus, or WAV. In interactive downloads, pick the source's native surround/Dolby tracks (AC-3, E-AC-3, 5.1, DRC) when available, or set a global **Prefer surround / Dolby** default
- Quick presets: *Best quality* · *Balanced* · *Small file*

### Workflow

- **Global download hotkey** — copy a link in any app and press `Ctrl+Shift+D` (`Cmd+Shift+D` on macOS); Plinth queues it with your active profile without opening the window, and a notification confirms it. On by default, rebindable
- **Flexible start modes** — choose a guided single download, playlist/channel picker, bulk URL paste, Quick Download with saved defaults, or browse and download from Explore
- **Central download queue** — every single, playlist, bulk, or quick job lands in one place for progress, pause, resume, cancel, retry, and priority control
- **Clipboard watch** — copy a YouTube link and Plinth auto-fills the URL when you refocus the app (toggle in Advanced settings)
- **Auto-clean URLs** — strips tracking params (`si`, `pp`, `utm_*`, `fbclid`, `gclid`) and unwraps `youtube.com/redirect` links
- **Tray mode** — closing the window keeps downloads running in the background
- **30 languages** — auto-detects system locale, switchable any time
- **Playlist sync** — re-scan a playlist against a local folder to skip already-downloaded videos; generates an `.m3u` playlist file updated as each video downloads
- **Speed and pacing controls** — cap download bandwidth, set how many parts of a video download at once, and add request delays with presets (*Off · Balanced · Careful · Custom*)
- **Filename templates** — name downloads your way with `{title}`, `{uploader}`, `{id}`, `{date}`, `{resolution}`, and `{playlist_index}`, globally or per download profile
- **Downloads at once and automatic retry** — choose how many queued downloads run at the same time, and let Plinth retry a download that hit a network or server problem, waiting longer before each attempt
- **Per-item playlist profiles** — assign each video in a playlist its own download profile instead of one setting for the whole list, so a single pass can archive some at full quality and grab the rest as MP3
- **Quick Download works in the background** — the link shows up in Downloads right away and prepares there, a note with **View** confirms it, and the URL field clears for the next link. Start as many as you like while earlier ones prepare
- **Downloads tells you what needs you** — if Plinth can't read a link, its row says why and offers the fix: Retry, turn on cookies, or sign in in Explore. With cookies off, **Sign in with Explore** retries it for you once you're signed in. A playlist longer than your load limit waits on its row for you to pick all of it, the first ones, or a review. The Downloads tab counts the rows waiting for you

### Subtitles & post-processing

- **Subtitles** in SRT, VTT, or ASS — manual or auto-generated, in any available language
- Save next to the video, embed into `.mkv`, or organize into a `Subtitles/` subfolder
- **SponsorBlock** — skip or chapter-mark sponsors, intros, outros, self-promos
- **Embedded metadata** — title, upload date, channel, description, thumbnail, and chapter markers written into the file
- **Subtitles-only batches** — paste a list of URLs or open a playlist, pick Subtitles, and get only the caption files for every video

### YouTube + 2000 sites

- **YouTube, in full** — Videos, Shorts, Channels, Playlists, YouTube Music, and Podcasts handled as first-class sources
- **2000+ other sites** via yt-dlp — Vimeo, Twitch, Twitter/X, TikTok, SoundCloud, Bandcamp, Bilibili, BBC iPlayer, archive.org, and many more
- **Audio-only and subtitles** work across every supported site, not just YouTube
- If a site changes, yt-dlp ships fixes weekly and Plinth auto-updates the binary on launch

### Privacy & control

- 100% local processing — downloads go straight from YouTube to your disk
- **Open source** — every line auditable, MIT licensed
- Files saved straight to the folder you choose

---

## <a id="install"></a>Install and first launch

**Windows**

```bash
winget install WaseemAnjum.Plinth
```

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

Builds are x86_64 only. No `curl`? Swap `curl -fsSL` for `wget -qO-`.

| Platform | Direct download |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**All release assets →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>Windows first launch

On first launch you may see **"Windows protected your PC"** or **"Unknown publisher."** This applies to both `Plinth-win-x64-Setup.exe` and `Plinth-win-x64-Portable.exe`. Windows builds are published unsigned until the SignPath secret and repository variables in the [code signing policy](#code-signing-policy) are set. After that, a SignPath Foundation signature can still take time to earn SmartScreen reputation. The warning means Windows does not recognize the publisher yet. To continue:

<img src="build/win-smartscreen-more-info.png" width="420" alt="SmartScreen "Windows protected your PC" dialog with the "More info" link highlighted" />
<img src="build/win-smartscreen-run-anyway.png" width="420" alt="SmartScreen dialog after expanding More info, showing the "Run anyway" button" />

1. Click **More info**.
2. Click **Run anyway**.

#### If Windows Defender flags or removes the file

Defender heuristics sometimes flag NSIS installers and Electron portables as suspicious. If Defender quarantines `Plinth-win-x64-Setup.exe` or `Plinth-win-x64-Portable.exe`, restore it from **Windows Security → Virus & threat protection → Protection history**, then add the Plinth executable as an allowed item under **Manage settings → Add or remove exclusions**. As with SmartScreen, the trigger while Windows builds are published unsigned is an unrecognized publisher.

> Only download Plinth from the official GitHub Releases page. If you got the file from another website or someone sent it to you, delete it and download a fresh copy from the official source. The source code is public, so you can inspect it or build Plinth yourself if you prefer.

Prefer Scoop? `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>Installing on macOS

Drag `Plinth.app` from the mounted DMG into `/Applications`. Plinth is open source. The macOS build is ad-hoc signed, so Apple Silicon does not report it as damaged. It is unnotarized because notarization requires a paid Apple Developer account, and there is no free notarization. On first launch, if you see **"Apple could not verify Plinth"**:

1. Open **System Settings → Privacy & Security**.
2. Click **Open Anyway**, then confirm.

**Alternative**

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
```

Run this after dragging `Plinth.app` into `/Applications`. It removes the quarantine attribute macOS attaches to a downloaded app. You normally do not need `sudo`, because the copy in `/Applications` belongs to you. Add `sudo` only if you get a permissions error.

**Apple Silicon vs Intel:** on an M-series Mac (M1 / M2 / M3 / M4), download the `arm64` DMG. On Intel Macs, download the `x64` DMG. Running the wrong build still works via Rosetta but is noticeably slower.

> macOS builds are produced via CI on Apple Silicon and Intel runners. If you hit issues, please [open an issue](../../issues) — feedback from macOS users actively shapes the macOS testing cycle.

### <a id="why-warning"></a>Why you may see a warning

Plinth is open-source and MIT-licensed. The macOS build is ad-hoc signed and is not notarized, because notarization requires a paid Apple Developer account. Windows builds are published unsigned until the SignPath configuration in the [code signing policy](#code-signing-policy) is in place. Until the operating system recognizes the publisher, Windows SmartScreen and macOS Gatekeeper warn on first launch. The warnings mean the operating system does not recognize the publisher.

Three ways to verify Plinth yourself, in increasing rigor:

- **Read the source.** Every line is on [GitHub](https://github.com/fabwaseem/plinth) and you can [build it from source](#tech).
- **Check the SHA256.** Match your file against the published [`SHA256SUMS`](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) — see [Verify your download](#verify) below.
- **Run a third-party scan.** Upload the file to [VirusTotal](https://www.virustotal.com).

### <a id="code-signing-policy"></a>Code signing policy

Free code signing provided by [SignPath.io](https://signpath.io), certificate by [SignPath Foundation](https://signpath.org).

This is Plinth's code signing policy. It names who may commit and who may approve a Windows signature. It does not mean a published release is already signed. Windows signing in GitHub Actions runs only after the SignPath secret and repository variables in [CODE_SIGNING.md](docs/CODE_SIGNING.md) are set. Until then, Windows artifacts are published unsigned.

- Committers: [fabwaseem](https://github.com/fabwaseem)
- Approvers: [fabwaseem](https://github.com/fabwaseem)

Privacy is described in [Privacy](#privacy). Plinth can send anonymous aggregate telemetry, and that can be turned off in Settings.

### <a id="linux-first-launch"></a>Linux first launch

AppImages run directly — no installation. You just need to mark the file as executable.

**File manager:** right-click the `.AppImage` → **Properties** → **Permissions** → enable **Allow executing file as program**, then double-click.

**Terminal:**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

If launch still fails, run it without mounting — no FUSE package needed:

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**Optional desktop integration:** install [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) once, and any AppImage you double-click gets registered into your launcher menu automatically — no manual `.desktop` file needed.

**Plain tarball (no FUSE, no install):**

The `.tar.gz` build is the same app without the AppImage wrapper — extract it anywhere and run it. No installer and no FUSE package needed.

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**The Linux downloads on the release page are x86_64 only.** On ARM64 machines (Raspberry Pi, Asahi Linux) the Flatpak still installs, then fails at launch with `bwrap: execvp ldconfig: Exec format error`.

<details>
<summary><strong><a id="verify"></a>Verify your download (SHA256)</strong></summary>

Every release publishes a `SHA256SUMS` file alongside the binaries. To check that your download wasn't corrupted or tampered with in transit, hash your file locally and match the line in `SHA256SUMS`. Open the latest release page → **Assets** → download `SHA256SUMS`.

**Windows (PowerShell or Command Prompt):**

```powershell
certutil -hashfile Plinth-win-x64-Setup.exe SHA256
```

**macOS (Terminal):**

```bash
shasum -a 256 Plinth-mac-arm64.dmg
```

**Linux (Terminal):**

```bash
sha256sum Plinth-linux-x64.AppImage
```

Want a third-party malware scan? Upload the file at [VirusTotal](https://www.virustotal.com). A handful of generic-heuristic flags from minor engines is normal for unsigned Electron apps; widespread detections from major engines would be a real concern.

</details>

<details>
<summary><strong>Windows: Installer vs Portable</strong></summary>

| | NSIS Installer | Portable `.exe` |
| --- | --- | --- |
| Installation required | Yes | No — run from anywhere |
| Auto-updates | ✅ in-app | ❌ manual download |
| Startup speed | ✅ faster | ⚠️ slower cold start |
| Adds to Start Menu | Yes | No |
| Easy uninstall | Yes | ❌ delete the file |

**Recommendation:** use the NSIS installer for auto-updates and faster startup. Use the portable `.exe` for a no-install, no-registry option.

</details>

---

## <a id="why"></a>Why Plinth

Plinth is built for one thing: paste a URL, get a clean local file. No upsells, no data collection.

| | Plinth |
| --- | --- |
| Free, no premium tier | Yes |
| Open source | Yes |
| Local processing only | Yes |
| No usage caps | Yes |
| Cross-platform desktop app | Yes |
| Subtitles + SponsorBlock | Yes |

---

## <a id="privacy"></a>Privacy

Downloads are fetched directly via [yt-dlp](https://github.com/yt-dlp/yt-dlp) from YouTube to the folder you pick — nothing routed through a third-party server. Watch history, download history, URLs, and file contents stay on your device.

Plinth sends anonymous, aggregate telemetry via [OpenPanel](https://openpanel.dev) — just enough for an indie project to understand failures, crashes, feedback, OS, and app versions. No URLs, video titles, file paths, account info, fingerprinting, or personal data. The per-install ID is random and not tied to your identity. You can opt out in Settings.

Browse keeps its own sign-in, separate from your browser, and Plinth never reads or fills in the sign-in form — you type into the site's own page. Downloads run signed out; only when one fails in a way an account can fix does Plinth read the sign-in fresh, keep it in a temporary file for that download, and delete the file afterwards. Signing out from Settings forgets it.

---

## <a id="faq"></a>FAQ

**Is it really free?**
Yes — MIT licensed, no premium tier, no feature gating.

**What video qualities can I download?**
Anything YouTube serves: 4K UHD (2160p), 1440p, 1080p, 720p, 480p, 360p, plus audio-only. 60 fps, 120 fps, and HDR streams are preserved as-is.

**Can I extract just the audio as MP3?**
Yes. Pick *audio-only* in the format menu and choose MP3, M4A/AAC, Opus, or WAV.

**How do I download videos that need a YouTube account?**
Sign in once in the Explore tab. Plinth can then download private and members-only videos your account can watch, age-restricted videos if the account is age-verified, and your Watch Later and Liked lists. It uses the sign-in only when a download fails in a way an account can fix; everything else downloads as before. This is the **Explore sign-in** choice, listed first and marked Recommended in the cookie settings, and Plinth picks it for you the first time you open Explore. yt-dlp's wiki notes that [signed-in automation can flag a Google account](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies), so a secondary account is the safer choice.

**Will it keep working when YouTube changes something?**
yt-dlp is updated automatically on launch, and Plinth ships fixes promptly when YouTube changes something. When YouTube asks you to confirm you're not a bot, Plinth also tries your Explore sign-in if you've signed in there, and cookies from a file or your browser are available in the cookie settings.

**What languages is Plinth available in?**
30 languages, out of the box: Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文. Plinth auto-detects your operating system's language on first launch and you can switch at any time from the language picker in the toolbar. Runtime locale JSON lives in src/shared/i18n/locales/, and translator-facing PO catalogs live in i18n/locales/ — open a PR on GitHub to contribute.

**Do I need to install anything else?**
No. yt-dlp is downloaded automatically on first launch and cached on your machine; ffmpeg and ffprobe ship with the app. After that, no extra setup is needed.

**Can I download playlists or whole channels?**
Yes — both. Paste a playlist URL or a channel URL (e.g. `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`); choose how many entries to scan, then queue the whole list or pick specific videos. Date-range filters are coming soon.

**macOS says "the app is damaged" — what do I do?**
See [Installing on macOS](#macos-first-launch). On first launch, if you see "Apple could not verify Plinth", open System Settings → Privacy & Security, click Open Anyway, and confirm. Or run `xattr -dr com.apple.quarantine /Applications/Plinth.app`.

**Is downloading YouTube videos legal?**
For personal, private use it is generally accepted in most jurisdictions. You are responsible for complying with YouTube's [Terms of Service](https://www.youtube.com/t/terms) and your local copyright laws.

---

## <a id="roadmap"></a>Roadmap

Still planned — roughly in priority order:

| Feature | Description |
| --- | --- |
| **Playlist & channel filters** | Date-range filters when enumerating a playlist or channel |
| **YouTube audio track preferences** | Set an app-wide spoken-language track preference, with per-profile overrides when YouTube offers multiple audio tracks |
| **Stronger retry recovery** | A new retry path for downloads interrupted by unreliable or problematic internet connections |
| **Full download manager drawer** | Turn the queue drawer into a fuller manager, including changing destination folders for queued items |
| **Scheduled downloads** | Start a queue at a set time (overnight runs) |
| **Clip trimming** | Download only a segment by start/end time |
| **AUR package** | Install on Arch Linux and Omarchy with `yay -S plinth-bin` |

Have a feature in mind? [Open a request](../../issues) — community input shapes priority.

---

## <a id="support"></a>Support Plinth

Plinth is free and MIT-licensed — no ads, no paid tier. If it saves you time, you can support development with Bitcoin or Tron: the addresses are in [DONATE.md](docs/DONATE.md), which is the only official source for them. Plinth will never send you an address by email or direct message. Starring the repo, reporting bugs, and improving translations help just as much.

[Bitcoin and Tron addresses](docs/DONATE.md)

---

## <a id="tech"></a>Built with

<details>
<summary><strong>Stack</strong></summary>

- **Electron** — cross-platform desktop shell
- **React 19** + **TypeScript** — UI
- **Tailwind CSS v4** — styling
- **Zustand** — state management
- **yt-dlp** + **ffmpeg** — download and mux engine (yt-dlp fetched at runtime; ffmpeg/ffprobe bundled at build time)
- **Vite** + **electron-vite** — build tooling
- **Vitest** + **Playwright** — unit and end-to-end tests

</details>

<details>
<summary><strong>Build from source</strong></summary>

### Prerequisites — all platforms

| Tool    | Version | Install |
| ------- | ------- | ------- |
| Git     | any     | [git-scm.com](https://git-scm.com) |
| Node.js | 24.21.0 | `mise install` or `.node-version` |
| Bun     | 1.4.2  | `mise install` or `package.json` `packageManager` |

Recommended: install `mise`, then run `mise install` in the checkout. Without mise, manually activate Node.js from `.node-version` and Bun from `package.json` before `bun run bootstrap`.

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Visual Studio Build Tools and Python may be needed for native rebuilds.

### macOS

```bash
brew install mise
xcode-select --install
```

After cloning, run `mise trust && mise install` from the checkout. If your shell already uses `fnm`, `nvm`, or a Homebrew Bun, activate mise in `~/.zshrc` so Plinth gets Node.js 24.21.0 and Bun 1.4.2:

```bash
printf '
# mise
if command -v mise >/dev/null 2>&1; then
  eval "$(mise activate zsh)"
fi
' >> ~/.zshrc
exec zsh
```

### Linux (Ubuntu / Debian)

```bash
curl -fsSL https://bun.sh/install | bash

# Build + Electron runtime deps
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# E2E tests only (Electron needs a display)
sudo apt install -y xvfb
```

### Clone & run

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # recommended; skip if you manually activated the pinned tools
bun run bootstrap
bun run doctor
bun run dev            # Electron app against the Vite renderer
```

### Build a distributable

```bash
bun run build        # typecheck + compile
bun run dist         # package for current OS
bun run dist:win     # package Windows targets when run on a supported host
```

> `bun run bootstrap` installs dependencies, rebuilds Electron app dependencies, verifies Electron, prepares embedded ffmpeg/ffprobe for development, and installs Playwright Chromium. yt-dlp is managed at runtime in your app data folder; ffmpeg and ffprobe are bundled with every Plinth release.

</details>

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

## Terms of use

Plinth is a tool for personal, private use only. You are solely responsible for ensuring your downloads comply with YouTube's [Terms of Service](https://www.youtube.com/t/terms) and the copyright laws of your jurisdiction. Do not use Plinth to download, reproduce, or distribute content you do not have the right to use. The developers are not liable for any misuse.

MIT License · Made with care by <a href="https://github.com/fabwaseem">Waseem Anjum</a>

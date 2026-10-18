<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — ነፃ ምን ኮድ ያለው YouTube (+ 2000 ጣቢያ) አውራጅ ለ Windows, macOS እና Linux

ቪዲዮዎች፣ Shorts፣ ሙዚቃ፣ ቻናሎች፣ ፖድካስቶች ወይም የድምፅ ትራኮች ከ**YouTube እና ከ2000+ ተደገፉ ጣቢያዎች** ያውርዱ — እስከ 4K HDR በ60 fps፣ ወይም MP3 / AAC / Opus። በ Windows፣ macOS፣ እና Linux ላይ አካባቢያዊ ሆኖ ይሠራል። **ምንም ማስታወቂያ፣ ምንም ብዝሃ ሸቀጥ፣ ምንም ተጨማሪ ሽያጭ።**

Plinth is a fork of [Arroxy](https://github.com/antonio-orionus/Arroxy) by Antonio Orionus, MIT licensed.

### What Plinth changes

- Published as Plinth by Waseem Anjum, with its own site ([plinth.fabwaseem.com](https://plinth.fabwaseem.com)) and its own Scoop and Homebrew packages.

**አንብብ በ:** [Afaan Oromoo](README.om.md) · [Bahasa Indonesia](README.id.md) · [Deutsch](README.de.md) · [English](../../README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Tiếng Việt](README.vi.md) · [Türkçe](README.tr.md) · **አማርኛ** · [العربية](README.ar.md) · [اردو](README.ur.md) · [پښتو](README.ps.md) · [فارسی](README.fa.md) · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · [ไทย](README.th.md) · [မြန်မာဘာသာ](README.my.md) · [Ελληνικά](README.el.md) · [Русский](README.ru.md) · [Српски](README.sr.md) · [Українська](README.uk.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ የቅርብ ጊዜ ስሪት አውርድ**](#install) · [**ድር ጣቢያ**](https://plinth.fabwaseem.com) · [Windows ላይ ለመጀመሪያ ጊዜ አስጀምር](#windows-first-launch) · [macOS ላይ ለመጀመሪያ ጊዜ አስጀምር](#macos-first-launch) · [Linux ላይ ለመጀመሪያ ጊዜ አስጀምር](#linux-first-launch)

Plinth ጊዜ ካስቆጠበዎ፣ ⭐ ሌሎች እንዲያገኙት ይረዳል።

_Last updated: 2026-10-18._

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download. `winget install WaseemAnjum.Plinth` is coming soon.

---

## ዝርዝር

- [ባህሪያት](#features)
- [መጫን እና የመጀመሪያ ማስነሳት](#install)
- [ለምን Plinth](#why)
- [ግላዊነት](#privacy)
- [ተደጋጋሚ ጥያቄዎች](#faq)
- [ወደፊት ዕቅድ](#roadmap)
- [Plinth ይደግፉ](#support)
- [ከምን ተሠርቷል](#tech)

---

## <a id="features"></a>ባህሪያት

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>የፈጣን ማውረድ መነሻ</b><br/>URL ይለጥፉ እና በነቃ መገለጫዎ ወዲያውኑ ያውርዱ

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>YouTubeን በPlinth ውስጥ ያስሱ እና ያሉበትን ገጽ በንቁ መገለጫዎ ያውርዱ

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>የጅምላ URL ሁነታ</b><br/>ዝርዝር ይለጥፉ፣ ድግግሞሾችን በራስ-ሰር ያስወግዱ፣ ሁሉንም በአንድ ጊዜ ያሰልፉ

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>ትይዩ የማውረድ ሰልፍ</b><br/>በቀጥታ እድገት ብዙ ማውረዶች በአንድ ጊዜ

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>እንደገና ጥቅም ላይ የሚውሉ የማውረድ መገለጫዎች</b><br/>ቅርጸት፣ ጥራት እና ውጤትን እንደ ቅድመ-ቅንብር ያስቀምጡ — በእያንዳንዱ ማውረድ ይጠቀሙ

### Explore: YouTubeን በPlinth ውስጥ ያስሱ

- **Explore ትር** — YouTubeን በPlinth ውስጥ ያስሱ እና ያገኙትን ሊንክ ሳይገለብጡ ያውርዱ። **አውርድ · *መገለጫዎ*** እየተመለከቱት ያለውን ቪዲዮ፣ playlist ወይም channel በወረፋ ያስገባል፤ ከጎኑ ያለው ቀስት መገለጫዎችን ይቀይራል፣ የአስማት ዘንግ ደግሞ ቅርጸቶችን፣ ንዑስ ርዕሶችን እና ሌሎችን ለመምረጥ ደረጃ በደረጃ ማውረድን ይከፍታል
- **የአድራሻ አሞሌ** — YouTube ለመፈለግ ይተይቡ ወይም የYouTube ሊንክ ይለጥፉ። Explore YouTubeን ብቻ ያስሳል፣ ስለዚህ ከሌላ ጣቢያ የሆነ ሊንክ እዚያ አይከፈትም፣ ግን በአንድ ጠቅታ ማውረድ ይችላሉ
- **ሒሳብ የሚፈልጉ ማውረዶች** — በExplore ውስጥ አንድ ጊዜ ይግቡ እና Plinth ሒሳብዎ ማየት የሚችላቸውን የግል እና የአባላት-ብቻ ቪዲዮዎች፣ ሒሳቡ በዕድሜ ከተረጋገጠ ዕድሜ-የተገደቡ ቪዲዮዎች፣ እንዲሁም የWatch Later እና Liked ዝርዝሮችዎን ማውረድ ይችላል። Plinth አሁንም ሳይገባ ያወርዳል፣ እና የExplore መግቢያዎን የሚጠቀመው ማውረድ ሒሳብ ሊያስተካክለው በሚችል መንገድ ሲወድቅ ብቻ ነው። YouTube ቦት አለመሆንዎን እንዲያረጋግጡ ሲጠይቅ፣ Plinth የExplore መግቢያዎን ደግሞ ይሞክራል
- **ሁለተኛ ሒሳብ ይጠቀሙ** — የExplore የመጀመሪያ ማያ ለምን እንደሆነ ያብራራል፡ በሒሳብ ማውረድ ያ ሒሳብ የመገደብ የተወሰነ አደጋ አለው። መግቢያውን ለመርሳት በፈለጉት ጊዜ ከSettings ከExplore ይውጡ
- **የማስታወቂያ ማገጃ** — Explore በራሱ ገጾች ላይ ማስታወቂያዎችን እና መከታተያዎችን ያግዳል፤ ማውረዶች አይነኩም። በነባሪ በርቷል፣ በExplore የመሳሪያ አሞሌ ላይ ባለው ጋሻ ላይ አንድ ጠቅታ ያጠፋዋል፣ እና በGoogle የመግቢያ ገጾች ላይ ፈጽሞ አይሠራም። YouTube ለገቡ ሒሳቦች የማስታወቂያ ማገጃዎችን ሊቋቋም ይችላል

### ጥራት እና ቅርጸቶች

- እስከ **4K UHD (2160p)**፣ 1440p፣ 1080p፣ 720p፣ 480p፣ 360p
- **ፈጣን የፍሬም ፍጥነት** እንዳለ ተጠብቆ — 60 fps፣ 120 fps፣ HDR
- **ድምፅ** — ኦዲዮ ብቻን ወደ MP3፣ M4A/AAC፣ Opus ወይም WAV ማውጣት። በinteractive downloads ውስጥ ካሉ የምንጩን native surround/Dolby ትራኮች (AC-3፣ E-AC-3፣ 5.1፣ DRC) ይምረጡ፣ ወይም ዓለም አቀፍ **surround / Dolby ን ይመርጡ** ነባሪ ያቀናብሩ
- ፈጣን ቅድመ ቅንብሮች: *ምርጥ ጥራት* · *ሚዛናዊ* · *ትንሽ ፋይል*

### የሥራ ፍሰት

- **አጠቃላይ የማውረድ አቋራጭ** — በማንኛውም መተግበሪያ ውስጥ አገናኝ ይቅዱና `Ctrl+Shift+D` (በmacOS ላይ `Cmd+Shift+D`) ይጫኑ፤ Plinth መስኮቱን ሳይከፍት በንቁ መገለጫዎ ወደ ወረፋ ያስገባዋል፣ ማሳወቂያም ያረጋግጣል። በነባሪ የነቃ፣ እንደገና ሊመደብ የሚችል
- **ተለዋዋጭ የመጀመሪያ ሁነታዎች** — የተመራ ነጠላ ማውረድ፣ የplaylist/channel መምረጫ፣ ብዙ URL መለጠፍ፣ በተቀመጡ ነባሪዎች Quick Download፣ ወይም ከExplore ማሰስና ማውረድ ይምረጡ
- **ማዕከላዊ የማውረድ ወረፋ** — ነጠላ፣ playlist፣ bulk፣ ወይም quick ሥራ ሁሉ ለሂደት፣ ለማቆም፣ ለመቀጠል፣ ለመሰረዝ፣ እንደገና ለመሞከር እና ለቅድሚያ ቁጥጥር በአንድ ቦታ ይመጣል
- **ክሊፕቦርድ ክትትል** — YouTube ሊንክ ቅዱ እና Plinth ወደ አፕ ሲመለሱ URL ን አውቶሜቲክ ይሙላሉ (በ Advanced settings ውስጥ ያብሩ/ያጥፉ)
- **URL ን ራስ ሰር ያጥሩ** — ትራኪንግ ፓራሜትሮችን (`si`፣ `pp`፣ `utm_*`፣ `fbclid`፣ `gclid`) ያስወግዳሉ እና `youtube.com/redirect` ሊንኮችን ያሰናስሉ
- **ትሬ ሁነታ** — መስኮቱን መዝጋት ማውረዶቹን በጀርባ ያስቀጥላሉ
- **30 ቋንቋዎች** — የስርዓት አካባቢን በራስ-ሰር ያገኛል፣ በማንኛውም ጊዜ መቀየር ይቻላል
- **የአጫዋች ዝርዝር ማመሳሰል** — አስቀድሞ የወረዱ ቪዲዮዎችን ለመዝለል አጫዋች ዝርዝርን ከአካባቢያዊ ፎልደር ጋር ዳግም ይፈትሻል፤ እያንዳንዱ ቪዲዮ ሲወርድ የሚዘምን `.m3u` የአጫዋች ዝርዝር ፋይል ይፈጥራል
- **የፍጥነት እና pacing መቆጣጠሪያዎች** — የማውረድ bandwidth ይገድቡ፣ የቪዲዮ ስንት ክፍሎች በአንድ ጊዜ እንደሚወርዱ ያዘጋጁ፣ እና በpresets (*ጠፍቷል · ሚዛናዊ · ጥንቁቅ · ብጁ*) በጥያቄዎች መካከል መዘግየት ያክሉ
- **የፋይል ስም አብነቶች** — `{title}`፣ `{uploader}`፣ `{id}`፣ `{date}`፣ `{resolution}` እና `{playlist_index}` በመጠቀም ውርዶችዎን በፈለጉት መንገድ ይሰይሙ፤ በአጠቃላይ ወይም በእያንዳንዱ የማውረድ መገለጫ
- **በአንድ ጊዜ ዳውንሎዶች እና ራስ-ሰር ድጋሚ ሙከራ** — በአንድ ጊዜ ስንት የተሰለፉ ዳውንሎዶች እንደሚሄዱ ይምረጡ፣ እና የኔትወርክ ወይም የሰርቨር ችግር ያጋጠመውን ዳውንሎድ Plinth በእያንዳንዱ ሙከራ መካከል ረዘም ብሎ በመጠበቅ እንደገና ይሞክር
- **በአጫዋች ዝርዝር ውስጥ ለእያንዳንዱ ንጥል መገለጫ** — ለመላው ዝርዝር አንድ ቅንብር ከመጠቀም ይልቅ በአጫዋች ዝርዝር ውስጥ ላለ እያንዳንዱ ቪዲዮ የራሱን የማውረድ መገለጫ ይመድቡ፤ በአንድ ዙር አንዳንዶቹን በሙሉ ጥራት ማከማቸት እና ቀሪዎቹን እንደ MP3 መያዝ ይቻላል
- **Quick Download በጀርባ ይሠራል** — ሊንኩ ወዲያውኑ በዳውንሎዶች ውስጥ ይታያል እና እዚያ ይዘጋጃል፣ **View** ያለው ማስታወሻ ያረጋግጣል፣ እና የURL መስክ ለቀጣዩ ሊንክ ይጸዳል። ቀዳሚዎቹ እየተዘጋጁ ሳለ የፈለጉትን ያህል ይጀምሩ
- **ዳውንሎዶች ምን እንደሚያስፈልግዎ ይነግርዎታል** — Plinth ሊንክ ማንበብ ካልቻለ፣ ረድፉ ምክንያቱን ይናገራል እና መፍትሔውን ያቀርባል፡ እንደገና ሞክር፣ ኩኪዎችን ማብራት፣ ወይም በExplore መግባት። ኩኪዎች ሲጠፉ፣ ከገቡ በኋላ **በExplore ግባ** ለእርስዎ እንደገና ይሞክረዋል። ከጭነት ገደብዎ የሚረዝም playlist ሁሉንም፣ የመጀመሪያዎቹን ወይም ግምገማ እስኪመርጡ በረድፉ ላይ ይጠብቃል። የዳውንሎዶች ትር እርስዎን የሚጠብቁ ረድፎችን ይቆጥራል

### ንዑስ ርዕሶች እና ድህረ-ሂደት

- **ንዑስ ርዕሶች** በ SRT፣ VTT፣ ወይም ASS — እጅ ወይም ራስ ሰር የተፈጠሩ፣ በማንኛውም ቋንቋ
- ከቪዲዮ ጎን ያቆዩ፣ ወደ `.mkv` ያካቱ፣ ወይም ወደ `Subtitles/` ንዑስ አቃፊ ያዘጋጁ
- **SponsorBlock** — ስፖንሰሮችን፣ ምዕራፍ ምልክቶችን፣ ወደፊት ምዕራፎችን፣ ራስ ሰር ማስታወቂያዎችን ዝለሉ ወይም ምዕራፍ ምልክት ያድርጉ
- **የተካተተ ሜታዳታ** — ርዕስ፣ የሰቀሉ ቀን፣ ቻናል፣ ዝርዝር፣ አናት ስእል፣ እና ምዕራፍ ምልክቶች ወደ ፋይሉ ተጽፈዋል
- **ንዑስ ርዕስ ብቻ በጅምላ** — የዩአርኤሎች ዝርዝር ይለጥፉ ወይም ፕሌይሊስት ይክፈቱ፣ ንዑስ ርዕሶችን ይምረጡ፣ እና ለእያንዳንዱ ቪዲዮ የመግለጫ ጽሑፍ ፋይሎችን ብቻ ያግኙ

### YouTube + 2000 ጣቢያዎች

- **YouTube ሙሉ** — ቪዲዮዎች፣ Shorts፣ ቻናሎች፣ ፕሌይሊስቶች፣ YouTube Music እና ፖድካስቶች እንደ ቀዳሚ ምንጮች ይታሰባሉ
- **2000+ ሌሎች ጣቢያዎች** yt-dlp አማካኝነት — Vimeo, Twitch, Twitter/X, TikTok, SoundCloud, Bandcamp, Bilibili, BBC iPlayer, archive.org እና ሌሎች ብዙ
- **ኦዲዮ ብቻ እና ጽሑፍ ርዕሶች** ሁሉም ተደጋፊ ጣቢያዎች ላይ ይሠራሉ፣ YouTube ብቻ ሳይሆን
- ጣቢያ ሲቀይር yt-dlp በሳምንት ውስጥ ማሻሻያዎችን ይልካሉ፣ Plinth ደግሞ ሲጀምር binary ን ራስ-ሰር ያዘምናሉ

### ግላዊነት እና ቁጥጥር

- 100% አካባቢያዊ ሂደት — ማውረዶች ቀጥታ ከ YouTube ወደ ዲስክዎ ይሄዳሉ
- ምንም ግባ፣ ምንም ኩኪ፣ ምንም Google ሒሳብ አልተያያዘም
- ፋይሎች ወደ መረጡት አቃፊ ቀጥታ ተቀምጠዋል

---

## <a id="install"></a>መጫን እና የመጀመሪያ ማስነሳት

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

ግንባታዎቹ ለx86_64 ብቻ ናቸው። `curl` የለም? `curl -fsSL` በ`wget -qO-` ይተኩ።

| ሥርዓተ ክወና | ቅርጸት |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**የቅርብ ጊዜ ስሪት ይያዙ →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>Windows ላይ ለመጀመሪያ ጊዜ አስጀምር

በመጀመሪያ ጊዜ ሲጀምሩ **"Windows protected your PC"** ወይም **"Unknown publisher"** ሊያዩ ይችላሉ። ይህ ለ `Plinth-win-x64-Setup.exe` እና `Plinth-win-x64-Portable.exe` ሁለቱም ይሠራሉ። Plinth ነፃ እና ምን ኮድ ያለው ሲሆን የ Windows ቅጅዎቹ ባለ ክፍያ የምስክር ወረቀት ተፈርመዋ አይደሉም፣ ስለዚህ SmartScreen ያሳዩዋቸዋል። ይህ Plinth ደህና ያልሆነ ማለት **አልሆነም**። ለቀጠሉ:

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="SmartScreen "Windows protected your PC" መልዕክት ሳጥን፣ "More info" ሊንክ ተጎልቶ ከሚታይ ጋር" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="More info ከተከፈተ በኋላ SmartScreen መልዕክት ሳጥን፣ "Run anyway" ቁልፍ ከሚታይ ጋር" />

1. **More info** ጠቅ ያድርጉ።
2. **Run anyway** ጠቅ ያድርጉ።

#### Windows Defender ፋይሉን ቢሰምናቸው ወይም ቢያስወግዳቸው

Defender ሂዩሪስቲክስ አንዳንድ ጊዜ ያልተፈረሙ NSIS ጫኞችን እና Electron ተጓዥዎችን ጥርጣሬ አዘል ብሎ ሊሰምናቸው ይችላሉ። Defender `Plinth-win-x64-Setup.exe` ወይም `Plinth-win-x64-Portable.exe` ን ካቆጠቆጠ፣ ከ **Windows Security → Virus & threat protection → Protection history** ይመልሱ፣ ከዛ Plinth ን ሊፈጸም የሚችልን ፋይል **Manage settings → Add or remove exclusions** ስር ፈቀደ ሆኖ ያክሉ። እንደ SmartScreen ሁሉ፣ ምክንያቱ አልተገኘ ተንኮል-አዘል ሶፍትዌር ሳይሆን የጎደለ ናሸር ፊርማ ነው።

> Plinth'ን ከይፋዊው GitHub Releases ገጽ ብቻ ያውርዱ። ፋይሉን ሌላ ድር ጣቢያ ካወረዱ ወይም ሌሎች ከላኩልዎ፣ ሰርዘው ከይፋዊ ምንጩ አዲስ ቅጅ ያውርዱ። ምንጩ ህዝባዊ ስለሆነ ራስዎ ሊፈትሹ ወይም Plinth'ን ሊሠሩ ይችላሉ።

Scoop ይመርጣሉ? `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>macOS ላይ ለመጀመሪያ ጊዜ አስጀምር

Plinth ለ macOS እስካሁን ኮድ አልተፈረመም፣ ስለዚህ Gatekeeper ከ DMG ከጫኑት በኋላ አስፈሪውን *"Plinth.app is damaged and can't be opened"* መልዕክት ሊያሳይ ይችላል። ይህ መልዕክት macOS ያልተፈረመ app በquarantine ውስጥ አስገብቶታል ማለት ነው፤ የapp ፋይሎች በእውነት ተጎድተዋል ማለት አይደለም። በአሁኑ macOS ላይ አስተማማኙ መፍትሔ Terminal ነው:

1. ከተቀጠለው DMG ውስጥ `Plinth.app` ን ወደ `/Applications` ጎትቱ።
2. Terminal ይክፈቱና እነዚህን ሁለት ትዕዛዞች ያስኪዱ:

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
open /Applications/Plinth.app
```

የመጀመሪያው ትዕዛዝ ከተጫነው የPlinth ቅጂዎ quarantine attribute ያስወግዳል። ሁለተኛው appን ያስነሳል። `sudo` የMac የይለፍ ቃልዎን ሊጠይቅ ይችላል፤ Terminal ሲጻፍ ምልክቶችን አያሳይም።

**Apple Silicon vs Intel:** M-ሰሪ Mac ላይ (M1 / M2 / M3 / M4)፣ `arm64` DMG ያውርዱ። Intel Mac ላይ፣ `x64` DMG ያውርዱ። የተሳሳተ ቅጅ ማሂደት Rosetta በኩል ይሠራሉ ነገር ግን በግልጽ ዘገምተኛ ነው።

> macOS ሕንጻዎች ከ Apple Silicon እና Intel ሩጫዎች በ CI ላይ ይሠራሉ። ችግር ካጋጠምዎ፣ [ጉዳይ ይክፈቱ](../../issues) — ከ macOS ተጠቃሚዎች ያለው ምላሽ የ macOS ፈተና ዑደቱን ቀጥታ ይቀርፃሉ።

### <a id="why-warning"></a>ለምን ማስጠንቀቂያ ሊታዩዎ ይችላሉ

Plinth ምን ኮድ ያለው (open-source) እና MIT ፈቃድ ያለው ነው። የ Windows እና macOS ቅጅዎቹ **ኮድ አልተፈረመባቸውም** — Apple Developer ID እና Windows EV ኮድ-ፊርማ ሰርቲፊኬቶቹ እያንዳንዳቸው በዓመት በመቶዎች ዶላር ያስወጣሉ፣ ይህ ነጻ ፕሮጀክት ከኪሳቸው ይከፍላሉ። ያነዚህ ፊርሞች ሳይኖሩ፣ Windows SmartScreen እና macOS Gatekeeper በመጀመሪያ አስጀማሪ ያስጠነቅቋቸዋል። ማስጠንቀቂያዎቹ *ሥርዓተ ክወናዎ ናሸርን አይለይም* ማለት ናቸው — Plinth ተንኮል-አዘል ሶፍትዌር ነው ማለት አይደሉም።

Plinth ን ራስዎ ለማረጋገጥ ሦስት መንገዶች፣ ከፍ እያለ በሚሄድ ጥብቅነት:

- **ምንጩን ያንብቡ።** ሁሉም መስመሮች [GitHub](https://github.com/fabwaseem/plinth) ላይ ናቸው፣ እናም [ከምንጩ ሊሠሩ](#tech) ይችላሉ።
- **SHA256ን ያረጋግጡ።** ፋይልዎን ከታተሙት [`SHA256SUMS`](../../releases/latest) ጋር ያዛምዱ — ከዚህ በታች [ማውረዱን ያረጋግጡ](#verify) ይመልከቱ።
- **የሦስተኛ ወገን ቅኝት ያካሂዱ።** ፋይሉን ወደ [VirusTotal](https://www.virustotal.com) ይጫኑ።

### <a id="linux-first-launch"></a>Linux ላይ ለመጀመሪያ ጊዜ አስጀምር

AppImages ቀጥታ ይሠራሉ — ምንም ጫሌ አያስፈልጋቸውም። ፋይሉን ሊፈጸም እንደሚችል ብቻ ምልክት ማድረግ ያስፈልጋሉ።

**ፋይል አስተዳዳሪ:** `.AppImage` ላይ ቀኝ ጠቅ ያድርጉ → **Properties** → **Permissions** → **Allow executing file as program** ያብሩ፣ ከዛ ሁለቴ ጠቅ ያድርጉ።

**ቴርሚናል:**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

አስጀምሩ አሁንም ካልሆነ ሳይጫን አስሂዱት — የFUSE ጥቅል አያስፈልግም፦

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**አማራጭ የዴስክቶፕ ውህደት:** [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) ን አንድ ጊዜ ጫኑ፣ ሁለቴ ጠቅ ያደርጉበት ማንኛውም AppImage በጀምር ምናሌዎ ውስጥ ራስ-ሰር ይመዘገባሉ — ምንም እጅ `.desktop` ፋይል አያስፈልጋቸውም።

**ተራ ታርቦል (FUSE የለም፣ ጫና የለም)፦**

የ`.tar.gz` ግንባታ ያው መተግበሪያ ነው ያለ AppImage መጠቅለያ — የትም ፈትታችሁ አስሂዱት። ጫኚም የFUSE ጥቅልም አያስፈልግም።

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**በተለቀቀው ገጽ ላይ ያሉት የሊኑክስ ማውረጃዎች x86_64 ብቻ ናቸው።** በARM64 ማሽኖች (Raspberry Pi፣ Asahi Linux) ላይ Flatpak ይጫናል ግን ሲጀመር በ`bwrap: execvp ldconfig: Exec format error` ይወድቃል።

<details>
<summary><strong><a id="verify"></a>ማውረዱን ያረጋግጡ (SHA256)</strong></summary>

ሁሉም ስሪቶቹ ከሁለትዮሽ ፋይሎቹ ጎን `SHA256SUMS` ፋይልን ያሳትማሉ። ማውረዱ ሳይበላሽ ወይም ሳይሻሻል እንደደረሰ ለማረጋገጥ፣ ፋይልዎን ሃሽ ያድርጉ እና `SHA256SUMS` ውስጥ ካለው መስመር ጋር ያዛምዱ። ቅርቡን ስሪት ገጽ ይክፈቱ → **Assets** → `SHA256SUMS` ያውርዱ።

**Windows (PowerShell ወይም Command Prompt):**

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

የሦስተኛ ወገን ተንኮል-አዘል ሶፍትዌር ቅኝት ይፈልጋሉ? ፋይሉን [VirusTotal](https://www.virustotal.com) ላይ ይጫኑ። ከቀዳሚ ሞተሮቹ ጥቂት ሂዩሪስቲክ ምልክቶቹ ፊርማ ላልተደረገባቸው Electron አፖ ዘወትር ናቸው; ከዋና ሞተሮቹ ሰፊ ምልክቶቹ ሐቀኛ ጉዳይ ሊሆኑ ይችላሉ።

</details>

<details>
<summary><strong>Windows: ጫኝ vs ተጓዥ</strong></summary>

| | NSIS ጫኝ | ተጓዥ `.exe` |
| --- | --- | --- |
| ጫሌ ያስፈልጋል | አዎ | አይ — ከየትኛውም ቦታ አሂዱ |
| ራስ ሰር ዝማኔዎች | ✅ በአፕ ውስጥ | ❌ እጅ ማውረድ |
| የጅምር ፍጥነት | ✅ ፈጣን | ⚠️ ዘገምተኛ ቀዝቃዛ ጅምር |
| ወደ ጅምር ምናሌ ይጨምራሉ | Yes | No |
| ቀላል ማስወገጃ | Yes | ❌ ፋይሉን ሰርዙ |

**ምክር:** ለራስ ሰር ዝማኔዎች እና ፈጣን ጅምር NSIS ጫኝ ይጠቀሙ። ምንም ጫሌ፣ ምንም ሬጂስትሪ ለሌለው አማራጭ ተጓዥ `.exe` ይጠቀሙ።

</details>

---

## <a id="why"></a>ለምን Plinth

Plinth ለአንድ ነገር ብቻ ተሠርቷል: URL ይለጥፉ፣ ንጹህ አካባቢያዊ ፋይል ያግኙ። ምንም ሽያጭ፣ ምንም የዳታ ስብስብ።

| | Plinth |
| --- | --- |
| ነፃ፣ ምንም ፕሪሚየም ደረጃ የለም | Yes |
| ምን ኮድ ያለው | Yes |
| አካባቢያዊ ሂደት ብቻ | Yes |
| ምንም የአጠቃቀም ወሰን | Yes |
| ለሁሉም ዓይነት ሥርዓቶች የሚሠራ የዴስክቶፕ አፕ | Yes |
| ንዑስ ርዕሶች + SponsorBlock | Yes |

---

## <a id="privacy"></a>ግላዊነት

ማውረዶቹ ቀጥታ በ [yt-dlp](https://github.com/yt-dlp/yt-dlp) ከ YouTube ወደ መረጡት አቃፊ ይወርዳሉ — ምንም ሦስተኛ ወገን ሰርቨር አይሆንም። የእይታ ታሪክ፣ የማውረድ ታሪክ፣ URLs፣ እና የፋይሎቹ ይዘቶች በመሳሪያዎ ላይ ይቆያሉ።

Plinth ስም-አልባ፣ የተጠቃለለ telemetry በ [OpenPanel](https://openpanel.dev) ይልካል — ውድቀቶችን፣ ብልሽቶችን፣ ግብረ መልስን፣ OS እና የአፕ ስሪቶችን ለመረዳት ብቻ። URLs፣ የቪዲዮ ርዕሶች፣ የፋይል መንገዶች፣ የመለያ መረጃ፣ fingerprinting ወይም የግል ዳታ የለም። የእያንዳንዱ ጭነት ID የዘፈቀደ ነው እና ከማንነትዎ ጋር አይያያዝም። በSettings ውስጥ opt out ማድረግ ይችላሉ።

Explore ከbrowserዎ የተለየ የራሱን መግቢያ ይይዛል፣ እና Plinth የመግቢያ ቅጹን ፈጽሞ አያነብም ወይም አይሞላም — እርስዎ በGoogle የራሱ ገጽ ላይ ይተይባሉ። ማውረዶች ሳይገቡ ይሠራሉ፤ ማውረድ ሒሳብ ሊያስተካክለው በሚችል መንገድ ሲወድቅ ብቻ Plinth መግቢያውን እንደገና ያነባል፣ ለዚያ ማውረድ በጊዜያዊ ፋይል ውስጥ ያቆየዋል፣ እና በኋላ ፋይሉን ይሰርዛል። በSettings ውስጥ ከExplore መውጣት ይረሳዋል።

---

## <a id="faq"></a>ተደጋጋሚ ጥያቄዎች

**በርግጥ ነፃ ነው?**
አዎ — MIT ፈቃድ አለው፣ ምንም ፕሪሚየም ደረጃ፣ ምንም ባህሪ ቁጥጥር የለም።

**ምን ዓይነት ቪዲዮ ጥራቶች ማውረድ እችላሉ?**
YouTube የሚሰጣቸው ሁሉ: 4K UHD (2160p)፣ 1440p፣ 1080p፣ 720p፣ 480p፣ 360p፣ እና ድምፅ ብቻ። 60 fps፣ 120 fps፣ እና HDR ዥረቶች እንዳሉ ይጠበቃሉ።

**ድምፁን ብቻ MP3 አድርጎ ማቅረብ ይቻላሉ?**
አዎ። በፎርማት ሜኑ ውስጥ *ኦዲዮ ብቻ* ምረጥ እና MP3፣ M4A/AAC፣ Opus ወይም WAV ምረጥ።

**YouTube ሒሳብ የሚፈልጉ ቪዲዮዎችን እንዴት አወርዳለሁ?**
በExplore ትር ውስጥ አንድ ጊዜ ይግቡ። ከዚያ Plinth ሒሳብዎ ማየት የሚችላቸውን የግል እና የአባላት-ብቻ ቪዲዮዎች፣ ሒሳቡ በዕድሜ ከተረጋገጠ ዕድሜ-የተገደቡ ቪዲዮዎች፣ እንዲሁም የWatch Later እና Liked ዝርዝሮችዎን ማውረድ ይችላል። መግቢያውን የሚጠቀመው ማውረድ ሒሳብ ሊያስተካክለው በሚችል መንገድ ሲወድቅ ብቻ ነው፤ የቀረው ሁሉ እንደ ቀድሞው ይወርዳል። ይህ **Explore መግቢያ** ምርጫ ነው፣ በኩኪ ቅንብሮች ውስጥ መጀመሪያ የተዘረዘረ እና Recommended ተብሎ የተመለከተ፣ እና Explore ለመጀመሪያ ጊዜ ሲከፍቱ Plinth ራሱ ይመርጣል። የ yt-dlp ዊኪ [በመግቢያ የሚደረግ አውቶሜሽን የ Google ሒሳብን ሊያመለክት እንደሚችል](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies) ያስታውቃል፣ ስለዚህ ሁለተኛ ሒሳብ ጥንቃቄ ያለው ምርጫ ነው።

**YouTube ሲቀያየር አሁንም ይሠራሉ?**
yt-dlp በማስነሻ ላይ ራስ ሰር ይዘመናሉ፣ እናም YouTube አንድ ነገር ሲቀይር Plinth እርማቶችን በፍጥነት ያደርሳሉ። YouTube ቦት አለመሆንዎን እንዲያረጋግጡ ሲጠይቅ፣ እዚያ ከገቡ Plinth የExplore መግቢያዎን ደግሞ ይሞክራል፣ እና ከፋይል ወይም ከbrowser የሚመጡ ኩኪዎች በኩኪ ቅንብሮች ውስጥ ይገኛሉ።

**Plinth በምን ቋንቋዎች ይገኛሉ?**
30 ቋንቋዎች ወዲያውኑ ይገኛሉ፦ Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文። Plinth በመጀመሪያ ሲጀመር የእርስዎን የስርዓተ ክወና ቋንቋ በራስ-ሰር ያውቃል፣ እና በመሳሪያ አሞሌው ውስጥ ካለው ቋንቋ መራጭ በማንኛውም ጊዜ መቀየር ይችላሉ። Runtime locale JSON በ src/shared/i18n/locales/ ውስጥ ይኖራል፣ የተርጓሚዎች PO ካታሎጎች ደግሞ በ i18n/locales/ ውስጥ ይኖራሉ — ለመሳተፍ GitHub ላይ PR ይክፈቱ።

**ሌላ ነገር ጫን ያስፈልጋሉ?**
አይ። yt-dlp በመጀመሪያ አስጀማሪ ራስ-ሰር ይወርዳል እና በማሽንዎ ላይ ይቀመጣል፤ ffmpeg እና ffprobe ከአፑ ጋር ይመጣሉ። ከዚያ ተጨማሪ setup አያስፈልግም።

**ፕሌይሊስቶች ወይም ሙሉ ቻናሎች ማውረድ ይቻላሉ?**
አዎ — ሁለቱም። የplaylist ወይም channel URL ይለጥፉ (ለምሳሌ `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`); ስንት ግቤቶች እንዲቃኙ ይምረጡ፣ ከዚያም ሙሉውን ዝርዝር ወደ ወረፋ ያክሉ ወይም ቪዲዮዎችን በተናጠል ይምረጡ። የቀን ክልል ማጣሪያዎች በቅርቡ ይመጣሉ።

**macOS "አፕ ተጎድቷል" ይላሉ — ምን ማድረግ አለብኝ?**
ያ macOS Gatekeeper ያልተፈረመ app እየከለከለ ነው፣ እውነተኛ ጉዳት አይደለም። quarantine ለማስወገድ እና Plinthን ለማስነሳት የTerminal ትዕዛዞችን በ[macOS first launch](#macos-first-launch) ይመልከቱ።

**YouTube ቪዲዮዎች ማውረድ ሕጋዊ ነው?**
ለግል፣ ሚስጥራዊ አጠቃቀም በአብዛኛዎቹ ዳኝነቶች ተቀባይነት ያለው ነው። የ YouTube [የአገልግሎት ደንቦቹን](https://www.youtube.com/t/terms) እና የቦታዎ የቅጂ መብት ሕጎቹን ማክበር ኃላፊነትዎ ነው።

---

## <a id="roadmap"></a>ወደፊት ዕቅድ

አሁንም የታቀደ — በግምት በቅድሚያ ቅደም ተከተል:

| ባህሪ | ዝርዝር |
| --- | --- |
| **የፕሌይሊስት እና ቻናል ማጣሪያዎች** | playlist ወይም channel ሲዘረዝሩ የቀን ክልል ማጣሪያዎች |
| **የYouTube ድምጽ ትራክ ምርጫዎች** | YouTube ብዙ የድምጽ ትራኮች ሲሰጥ በapp ሙሉ የንግግር ቋንቋ ትራክ ምርጫ ያዘጋጁ፣ በprofile ደረጃ override ያድርጉ |
| **የተጠናከረ ዳግም ሙከራ መልሶ ማገገም** | በማይታመን ወይም ችግኝ ያለው የኢንተርኔት ግንኙነት የተቋረጡ ማውረዶችን ለመቀጠል አዲስ የዳግም ሙከራ መንገድ |
| **ሙሉ የማውረድ አስተዳዳሪ መሳቢያ** | የqueue መሳቢያውን ወደ ሙሉ አስተዳዳሪ መቀየር፣ ለተሰለፉ ንጥሎች destination folder መቀየርን ጨምሮ |
| **የቀጠሮ ማውረዶች** | ወረፋ በተወሰነ ሰዓት ጀምሩ (ሌሊት ሂደቶች) |
| **ቁርጥ ምረጥ** | የጀምር/ማቆሚያ ጊዜ ብቻ ያወርዱ |
| **የAUR ጥቅል** | በArch Linux እና Omarchy ላይ በ`yay -S plinth-bin` ይጫኑ |

ባህሪ ሀሳብ አለዎ? [ጥያቄ ይክፈቱ](../../issues) — ማህበረሰቡ አስተዋጽኦ ቅድሚያ ይወስናሉ።

---

## <a id="support"></a>Plinth ይደግፉ

Plinth ነፃ ነው እና በMIT ፈቃድ ይሰራጫል — ማስታወቂያ የለም፣ የሚከፈልበት እትም የለም። ጊዜዎን የሚቆጥብ ከሆነ ልማቱን በBitcoin ወይም በTron መደገፍ ይችላሉ፦ አድራሻዎቹ በ[DONATE.md](../../docs/DONATE.md) ውስጥ ይገኛሉ፣ እርሱም ብቸኛው ይፋዊ ምንጫቸው ነው። Plinth በኢሜይል ወይም በቀጥታ መልእክት አድራሻ በፍጹም አይልክልዎትም። ማከማቻውን በኮከብ ምልክት ማድረግ፣ ስህተቶችን ማሳወቅ እና ትርጉሞችን ማሻሻል እኩል ይረዳሉ።

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>ከምን ተሠርቷል

<details>
<summary><strong>Stack</strong></summary>

- **Electron** — ለሁሉም ዓይነት ሥርዓተ ክወና የሚሠራ የዴስክቶፕ ቅጥፈት
- **React 19** + **TypeScript** — UI
- **Tailwind CSS v4** — ቅጥ አሠጣጥ
- **Zustand** — የሁኔታ አስተዳደር
- **yt-dlp** + **ffmpeg** — የማውረድ እና mux ሞተር (yt-dlp በ runtime ይወርዳል፤ ffmpeg/ffprobe በ build time ይካተታሉ)
- **Vite** + **electron-vite** — የግንባታ መሣሪያዎች
- **Vitest** + **Playwright** — የአሃዳዊ እና ከጫፍ-ወደ-ጫፍ ፈተናዎች

</details>

<details>
<summary><strong>ከምንጩ ግንባታ</strong></summary>

### ቅድመ ሁኔታዎች — ለሁሉም ዓይነት ሥርዓቶች

| መሣሪያ  | ስሪት    | ጫን |
| ------- | ------- | ------- |
| Git     | any     | [git-scm.com](https://git-scm.com) |
| Node.js | 24.21.0 | `mise install` ወይም `.node-version` |
| Bun     | 1.4.2  | `mise install` ወይም `package.json` `packageManager` |

የሚመከር: `mise` ይጫኑ፣ ከዚያ checkout ውስጥ `mise install` ያሂዱ። mise ካልተጠቀሙ፣ `bun run bootstrap` ከመሮጡ በፊት Node.jsን ከ`.node-version` እና Bunን ከ`package.json` በእጅ ያንቁ።

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

ለ native rebuilds Visual Studio Build Tools እና Python ሊያስፈልጉ ይችላሉ።

### macOS

```bash
brew install mise
xcode-select --install
```

ከ clone በኋላ በ checkout ውስጥ `mise trust && mise install` ያስኪዱ። shell እርስዎ አስቀድሞ `fnm`፣ `nvm` ወይም Homebrew Bun የሚጠቀም ከሆነ፣ Plinth Node.js 24.21.0 እና Bun 1.4.2 እንዲጠቀም `~/.zshrc` ውስጥ mise ን ያንቁ:

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

# Build እና Electron runtime deps
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# E2E tests only (Electron needs a display)
sudo apt install -y xvfb
```

### ቅዳና አሂድ

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # የሚመከር፤ pinned tools በእጅ ካነቃችሁ ይዝለሉት
bun run bootstrap
bun run doctor
bun run dev            # Electron app ከ Vite renderer ጋር
```

### ሊሰራጭ የሚችል ፋይል ምንጭ

```bash
bun run build        # typecheck + compile
bun run dist         # package for current OS
bun run dist:win     # supported host ላይ Windows targets package ማድረግ
```

> `bun run bootstrap` dependencies ይጭናል፣ Electron app dependencies rebuild ያደርጋል፣ Electron ያረጋግጣል፣ ለ development embedded ffmpeg/ffprobe ያዘጋጃል፣ እና Playwright Chromium ይጭናል። yt-dlp በ runtime ውስጥ app data folder ይ managed ይሆናል፤ ffmpeg እና ffprobe ከእያንዳንዱ የPlinth release ጋር bundled ይመጣሉ።

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

## የአጠቃቀም ደንቦች

Plinth ለግል፣ ሚስጥራዊ አጠቃቀም ብቻ ሶፍትዌር ነው። ማውረዶቹ የ YouTube [የአገልግሎት ደንቦቹን](https://www.youtube.com/t/terms) እና የቦታዎ የቅጂ መብት ሕጎቹን ማክበር ሙሉ ኃላፊነትዎ ነው። Plinth ን ለማውረድ፣ ለማባዛት ወይም ሊጠቀሙበት የማይፈቅዱ ይዘቶችን ለማሰራጨት አይጠቀሙ። ገንቢዎቹ ለምን ዓይነት አላግባብ አጠቃቀም ኃላፊነት አይወስዱም።

MIT License · Made with care by <a href="https://github.com/fabwaseem">Waseem Anjum</a>

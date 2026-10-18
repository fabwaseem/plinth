<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — Windows, macOS နှင့် Linux အတွက် အခမဲ့ Open-Source YouTube (+ ၂၀၀၀ ဆိုဒ်) Downloader

**YouTube နှင့် ၂၀၀၀+ ထောက်ပံ့သောဆိုဒ်များ** မှ ဗီဒီယိုများ၊ Shorts၊ သီချင်းများ၊ channel များ၊ podcast များ သို့မဟုတ် audio track များကို ဒေါင်းလုဒ်ဆွဲပါ — 60 fps တွင် 4K HDR အထိ၊ သို့မဟုတ် MP3 / AAC / Opus အဖြစ်။ Windows, macOS နှင့် Linux တွင် သင့်ကွန်ပျူတာပေါ်တွင်သာ run ပါသည်။ **ကြော်ငြာမပါ၊ bloat မပါ၊ upsell မပါ။**

Plinth is a fork of [Arroxy](https://github.com/antonio-orionus/Arroxy) by Antonio Orionus, MIT licensed.

### What Plinth changes

- Published as Plinth by Waseem Anjum, with its own site ([plinth.fabwaseem.com](https://plinth.fabwaseem.com)) and its own Scoop and Homebrew packages.

**ဘာသာဖြင့် ဖတ်ရှုရန်:** [Afaan Oromoo](README.om.md) · [Bahasa Indonesia](README.id.md) · [Deutsch](README.de.md) · [English](../../README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Tiếng Việt](README.vi.md) · [Türkçe](README.tr.md) · [አማርኛ](README.am.md) · [العربية](README.ar.md) · [اردو](README.ur.md) · [پښتو](README.ps.md) · [فارسی](README.fa.md) · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · [ไทย](README.th.md) · **မြန်မာဘာသာ** · [Ελληνικά](README.el.md) · [Русский](README.ru.md) · [Српски](README.sr.md) · [Українська](README.uk.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ နောက်ဆုံး Release ကို ဒေါင်းလုဒ်ဆွဲပါ**](#install) · [**ဝဘ်ဆိုက်**](https://plinth.fabwaseem.com) · [Windows ပထမဆုံး launch](#windows-first-launch) · [macOS ပထမဆုံး launch](#macos-first-launch) · [Linux ပထမဆုံး launch](#linux-first-launch)

Plinth သည် သင့်အချိန်ကို သက်သာစေပါက ⭐ တစ်ချက်က အခြားသူများ ရှာတွေ့ရန် ကူညီပါသည်။

_Last updated: 2026-10-18._

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download. `winget install WaseemAnjum.Plinth` is coming soon.

---

## မာတိကာ

- [လုပ်ဆောင်ချက်များ](#features)
- [ထည့်သွင်းခြင်းနှင့် ပထမဆုံးဖွင့်ခြင်း](#install)
- [Plinth ဘာကြောင့်](#why)
- [ကိုယ်ရေးကိုယ်တာ](#privacy)
- [မေးလေ့ရှိသောမေးခွန်းများ](#faq)
- [လမ်းပြမြေပုံ](#roadmap)
- [Plinth ကို ပံ့ပိုးရန်](#support)
- [တည်ဆောက်ထားသောနည်းပညာ](#tech)

---

## <a id="features"></a>လုပ်ဆောင်ချက်များ

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>အမြန်ဒေါင်းလုဒ် ပင်မ</b><br/>URL ကို ကူးထည့်ပြီး သင့်လက်ရှိ ပရိုဖိုင်ဖြင့် ချက်ချင်းဒေါင်းလုဒ်လုပ်ပါ

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>Plinth အတွင်းမှာပင် YouTube ကို ကြည့်ရှုပြီး ကြည့်နေသော စာမျက်နှာကို လက်ရှိပရိုဖိုင်ဖြင့် ဒေါင်းလုဒ်လုပ်ပါ

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>အစုလိုက် URL မုဒ်</b><br/>စာရင်းကူးထည့်ပါ၊ ပွားနေသည်များကို အလိုအလျောက်ဖယ်ရှားပါ၊ အားလုံးကို တစ်ပြိုင်နက်တန်းစီပါ

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>ပြိုင်တူ ဒေါင်းလုဒ်တန်းစီ</b><br/>တိုက်ရိုက်တိုးတက်မှုဖြင့် တစ်ပြိုင်နက် ဒေါင်းလုဒ်များစွာ

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>ပြန်သုံးနိုင်သော ဒေါင်းလုဒ်ပရိုဖိုင်များ</b><br/>ဖော်မတ်၊ အရည်အသွေးနှင့် အထွက်ကို ကြိုတင်သတ်မှတ်ချက်အဖြစ် သိမ်းပါ — ဒေါင်းလုဒ်တိုင်းတွင် ပြန်သုံးပါ

### Explore: Plinth အတွင်းမှာပင် YouTube ကို ကြည့်ရှုပါ

- **Explore tab** — Plinth အတွင်းမှာပင် YouTube ကို ကြည့်ရှုပြီး လင့်ခ်မကူးဘဲ တွေ့သည့်အရာကို ဒေါင်းလုဒ်လုပ်ပါ။ **ဒေါင်းလုဒ် · *သင့်ပရိုဖိုင်*** သည် သင်ကြည့်နေသော ဗီဒီယို၊ playlist သို့မဟုတ် channel ကို စာရင်းထဲထည့်ပေးသည်၊ ဘေးရှိ မြှားက ပရိုဖိုင်ပြောင်းပေးပြီး မှော်လှံတံက format၊ subtitle စသည်တို့ကို ရွေးရန် အဆင့်ဆင့် ဒေါင်းလုဒ်ကို ဖွင့်ပေးသည်
- **လိပ်စာဘား** — YouTube တွင် ရှာဖွေရန် ရိုက်ထည့်ပါ သို့မဟုတ် YouTube လင့်ခ်ကို ကူးထည့်ပါ။ Explore သည် YouTube ကိုသာ ကြည့်ရှုနိုင်သဖြင့် အခြားဝက်ဘ်ဆိုက်မှ လင့်ခ်ကို ထိုနေရာတွင် မဖွင့်ပေးသော်လည်း တစ်ချက်နှိပ်ရုံဖြင့် ဒေါင်းလုဒ်လုပ်နိုင်သည်
- **အကောင့်လိုသော ဒေါင်းလုဒ်များ** — Explore တွင် တစ်ကြိမ် sign in လုပ်ထားလျှင် Plinth သည် သင့်အကောင့်ဖြင့် ကြည့်နိုင်သော private နှင့် member-only ဗီဒီယိုများ၊ အသက်အတည်ပြုထားသော အကောင့်ဖြစ်လျှင် အသက်ကန့်သတ်ဗီဒီယိုများ၊ သင်၏ Watch Later နှင့် Liked စာရင်းများကို ဒေါင်းလုဒ်လုပ်နိုင်သည်။ Plinth သည် sign out အခြေအနေတွင်ပင် ဒေါင်းလုဒ်လုပ်ပြီး အကောင့်ဖြင့် ဖြေရှင်းနိုင်သော အကြောင်းရင်းကြောင့် ဒေါင်းလုဒ်မအောင်မြင်မှသာ သင်၏ Explore sign-in ကို အသုံးပြုသည်။ သင်သည် bot မဟုတ်ကြောင်း YouTube က အတည်ပြုခိုင်းသောအခါတွင်လည်း Plinth က သင်၏ Explore sign-in ကို စမ်းကြည့်သည်
- **အရန်အကောင့် သုံးပါ** — Explore ၏ ပထမဆုံးမျက်နှာပြင်က အကြောင်းရင်းကို ရှင်းပြထားသည် - အကောင့်ဖြင့် ဒေါင်းလုဒ်လုပ်ခြင်းသည် ထိုအကောင့် ကန့်သတ်ခံရနိုင်သည့် အန္တရာယ် အနည်းငယ်ရှိသည်။ sign-in ကို မေ့စေလိုသည့်အခါ ဆက်တင်များမှ Explore ကို အချိန်မရွေး sign out လုပ်ပါ
- **ကြော်ငြာပိတ်ဆို့ကိရိယာ** — Explore သည် ၎င်း၏ကိုယ်ပိုင်စာမျက်နှာများတွင် ကြော်ငြာနှင့် tracker များကို ပိတ်ဆို့သည်၊ ဒေါင်းလုဒ်များကို မထိခိုက်ပါ။ မူရင်းအတိုင်း ဖွင့်ထားပြီး Explore toolbar ရှိ ဒိုင်းလွှားကို တစ်ချက်နှိပ်ရုံဖြင့် ပိတ်နိုင်ကာ Google ၏ sign-in စာမျက်နှာများတွင် ဘယ်တော့မှ အလုပ်မလုပ်ပါ။ sign in ဝင်ထားသော အကောင့်များအတွက် YouTube က ကြော်ငြာပိတ်ဆို့ကိရိယာကို ပြန်လည်တားဆီးနိုင်သည်

### အရည်အသွေးနှင့် format များ

- **4K UHD (2160p)** အထိ၊ 1440p, 1080p, 720p, 480p, 360p
- **High frame rate** ကို မူရင်းအတိုင်း ထိန်းသိမ်း — 60 fps, 120 fps, HDR
- **အသံ** — အသံသာကို MP3၊ M4A/AAC၊ Opus သို့မဟုတ် WAV အဖြစ် export လုပ်ပါ။ interactive downloads တွင် ရနိုင်ပါက source ၏ native surround/Dolby tracks (AC-3၊ E-AC-3၊ 5.1၊ DRC) ကို ရွေးချယ်ပါ၊ သို့မဟုတ် global default **surround / Dolby ကို ဦးစားပေးပါ** ကို သတ်မှတ်ပါ
- အမြန် presets: *အကောင်းဆုံးအရည်အသွေး* · * မျှတသော* · *ဖိုင်ငယ်*

### Workflow

- **စနစ်တစ်ခုလုံးအတွက် ဒေါင်းလုဒ် ဖြတ်လမ်းခလုတ်** — မည်သည့်အက်ပ်တွင်မဆို လင့်ခ်ကို ကူးယူပြီး `Ctrl+Shift+D` (macOS တွင် `Cmd+Shift+D`) ကိုနှိပ်ပါ။ Plinth သည် ဝင်းဒိုးမဖွင့်ဘဲ သင့်လက်ရှိပရိုဖိုင်ဖြင့် စာရင်းထဲထည့်ပေးပြီး အသိပေးချက်ဖြင့် အတည်ပြုပါသည်။ မူရင်းအတိုင်း ဖွင့်ထားပြီး ပြန်သတ်မှတ်နိုင်သည်
- **ပြောင်းလွယ်ပြင်လွယ် စတင်မုဒ်များ** — လမ်းညွှန်ထားသော single download၊ playlist/channel picker၊ bulk URL paste၊ သိမ်းထားသော defaults ဖြင့် Quick Download၊ သို့မဟုတ် Explore တွင် ကြည့်ရှုပြီး ဒေါင်းလုဒ်လုပ်ခြင်းတို့ကို ရွေးပါ
- **ဗဟို download queue** — single၊ playlist၊ bulk၊ quick job အားလုံးသည် progress၊ pause၊ resume၊ cancel၊ retry နှင့် priority control အတွက် တစ်နေရာတည်းသို့ ရောက်သည်
- **Clipboard watch** — YouTube link ကို copy လုပ်ပြီး app ကို refocus လုပ်သောအခါ Plinth သည် URL ကို auto-fill လုပ်သည် (Advanced settings တွင် toggle နှိပ်ပါ)
- **Auto-clean URLs** — tracking params (`si`, `pp`, `utm_*`, `fbclid`, `gclid`) ကိုဖယ်ရှားပြီး `youtube.com/redirect` links ကိုဖြေရှင်းသည်
- **Tray mode** — window ကိုပိတ်လျှင် downloads များသည် နောက်ကွယ်တွင် ဆက်လည်ပတ်နေသည်
- **30 ဘာသာစကား** — စနစ်ဒေသကို အလိုအလျောက်သိရှိနိုင်ပြီး အချိန်မရွေးပြောင်းနိုင်သည်
- **Playlist sync** — ဒေါင်းလုဒ်လုပ်ပြီးသား ဗီဒီယိုများကို ကျော်ရန် playlist ကို local folder နှင့် ပြန်စစ်ဆေးပြီး၊ ဗီဒီယိုတစ်ခုစီ ဒေါင်းလုဒ်ပြီးတိုင်း အပ်ဒိတ်ဖြစ်သော `.m3u` playlist ဖိုင်ကို ဖန်တီးသည်
- **Speed နှင့် pacing controls** — download bandwidth ကိုကန့်သတ်ပါ၊ ဗီဒီယိုအပိုင်းမည်မျှကို တစ်ပြိုင်နက် download လုပ်မည်ကို သတ်မှတ်ပါ၊ presets (*Off · Balanced · Careful · Custom*) ဖြင့် request delays ထည့်ပါ
- **ဖိုင်အမည် ပုံစံခွက်များ** — `{title}`၊ `{uploader}`၊ `{id}`၊ `{date}`၊ `{resolution}` နှင့် `{playlist_index}` တို့ဖြင့် ဒေါင်းလုဒ်များကို သင်နှစ်သက်သလို အမည်ပေးပါ။ အထွေထွေ သို့မဟုတ် ဒေါင်းလုဒ်ပရိုဖိုင်တစ်ခုစီအလိုက် သတ်မှတ်နိုင်သည်
- **တစ်ပြိုင်နက် ဒေါင်းလုဒ်များ နှင့် အလိုအလျောက် ပြန်ကြိုးစားမှု** — တန်းစီထားသော ဒေါင်းလုဒ်မည်မျှကို တစ်ပြိုင်နက် လုပ်မည်ကို ရွေးပါ၊ ကွန်ရက် သို့မဟုတ် ဆာဗာ ပြဿနာ ကြုံရသော ဒေါင်းလုဒ်ကို Plinth သည် ကြိုးစားမှုတိုင်းမတိုင်မီ ပိုကြာစွာ စောင့်ပြီး ပြန်ကြိုးစားပါမည်
- **Playlist ရှိ item တစ်ခုချင်းအတွက် ပရိုဖိုင်** — list တစ်ခုလုံးအတွက် setting တစ်ခုတည်း အသုံးပြုမည့်အစား၊ playlist ထဲက ဗီဒီယိုတစ်ခုစီကို ၎င်းတို့ ကိုယ်ပိုင် ဒေါင်းလုဒ်ပရိုဖိုင် သတ်မှတ်ပေးနိုင်သဖြင့် တစ်ကြိမ်တည်းတွင် အချို့ကို အရည်အသွေးအပြည့်ဖြင့် သိမ်းဆည်းပြီး ကျန်တာကို MP3 အနေနှင့် ရယူနိုင်သည်
- **Quick Download သည် နောက်ခံတွင် အလုပ်လုပ်သည်** — လင့်ခ်သည် ဒေါင်းလုဒ်များထဲတွင် ချက်ချင်းပေါ်လာပြီး ထိုနေရာတွင်ပင် ပြင်ဆင်ပေးကာ **ကြည့်ရန်** ပါသော မှတ်စုက အတည်ပြုပေးပြီး နောက်လင့်ခ်အတွက် URL အကွက်ကို ရှင်းပေးသည်။ ယခင်ဟာများ ပြင်ဆင်နေစဉ်မှာပင် လိုသလောက် စတင်နိုင်သည်
- **ဒေါင်းလုဒ်များက သင့်အကူအညီလိုသည်ကို ပြောပြသည်** — Plinth က လင့်ခ်ကို မဖတ်နိုင်ပါက ၎င်း၏အတန်းတွင် အကြောင်းရင်းကိုပြပြီး ဖြေရှင်းနည်းကို အကြံပြုသည် - ထပ်မံကြိုးစားမည်၊ cookie ဖွင့်ပါ သို့မဟုတ် Explore တွင် sign in ဝင်ပါ။ cookie ပိတ်ထားလျှင် သင် sign in ဝင်ပြီးနောက် **Explore ဖြင့် Sign in** က သင့်အတွက် ပြန်စမ်းပေးသည်။ load ကန့်သတ်ချက်ထက် ရှည်သော playlist သည် ၎င်း၏အတန်းပေါ်တွင် စောင့်နေပြီး အားလုံး၊ ပထမအနည်းငယ် သို့မဟုတ် ပြန်လည်စစ်ဆေးခြင်းကို သင်ရွေးရန် စောင့်သည်။ ဒေါင်းလုဒ်များ tab တွင် သင့်ကိုစောင့်နေသော အတန်းအရေအတွက်ကို ပြသည်

### Subtitles နှင့် post-processing

- SRT, VTT သို့မဟုတ် ASS တွင် **Subtitles** — ကိုယ်တိုင်ရိုက်ထည့်ထားသော သို့မဟုတ် auto-generated၊ မည်သည့် language မဆို
- ဗီဒီယိုဘေးတွင်သိမ်းပါ၊ `.mkv` ထဲ embed လုပ်ပါ၊ သို့မဟုတ် `Subtitles/` subfolder တွင် စီစဉ်ပါ
- **SponsorBlock** — sponsors, intros, outros, self-promos ကို ကျော်ပြီး chapter-mark လုပ်ပါ
- **Embedded metadata** — ခေါင်းစဉ်၊ upload date, channel, description, thumbnail နှင့် chapter markers တို့ကို ဖိုင်ထဲသို့ ရေးသွင်းသည်
- **စာတန်းထိုးသီးသန့် အစုလိုက်** — URL စာရင်းကို ကူးထည့်ပါ သို့မဟုတ် ပလေးလစ်ကို ဖွင့်ပါ၊ စာတန်းထိုးကို ရွေးပါ၊ ဗီဒီယိုတစ်ခုချင်းစီအတွက် စာတန်းထိုးဖိုင်များကိုသာ ရယူပါ

### YouTube + ၂၀၀၀ ဆိုဒ်

- **YouTube၊ အပြည့်အဝ** — Videos, Shorts, Channels, Playlists, YouTube Music နှင့် Podcasts တို့ကို ပထမတန်းစား ရင်းမြစ်များအဖြစ် ကိုင်တွယ်သည်
- **၂၀၀၀+ အခြားဆိုဒ်များ** yt-dlp မှတဆင့် — Vimeo, Twitch, Twitter/X, TikTok, SoundCloud, Bandcamp, Bilibili, BBC iPlayer, archive.org နှင့် အခြားအများကြီး
- **အသံသာနှင့် subtitle များ** ထောက်ပံ့သောဆိုဒ်တိုင်းတွင် အလုပ်လုပ်သည်၊ YouTube တွင်သာမဟုတ်
- ဆိုဒ်တစ်ခု ပြောင်းလဲပါက yt-dlp သည် အပတ်တိုင်း fix များ ထုတ်ပြီး Plinth သည် launch တွင် binary ကို auto-update လုပ်သည်

### ကိုယ်ရေးကိုယ်တာနှင့် ထိန်းချုပ်မှု

- 100% local processing — ဒေါင်းလုဒ်များသည် YouTube မှ တိုက်ရိုက် သင့် disk သို့ သွားသည်
- Login မပါ၊ cookie မပါ၊ Google account ချိတ်ဆက်မှုမပါ
- သင်ရွေးချယ်သောဖိုဒါတွင် ဖိုင်များကို တိုက်ရိုက်သိမ်းဆည်းသည်

---

## <a id="install"></a>ထည့်သွင်းခြင်းနှင့် ပထမဆုံးဖွင့်ခြင်း

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

Build များမှာ x86_64 အတွက်သာ ဖြစ်သည်။ `curl` မရှိဘူးလား။ `curl -fsSL` အစား `wget -qO-` သုံးပါ။

| Platform | Format |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**နောက်ဆုံး release ကို ယူပါ →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>Windows ပထမဆုံး launch

ပထမဆုံး ဖွင့်သောအခါ **"Windows protected your PC"** သို့မဟုတ် **"Unknown publisher."** ဟု မြင်ရနိုင်သည်။ ၎င်းသည် `Plinth-win-x64-Setup.exe` နှင့် `Plinth-win-x64-Portable.exe` နှစ်မျိုးစလုံးအတွက် သက်ဆိုင်သည်။ Plinth သည် အခမဲ့ open-source ဖြစ်ပြီး Windows builds များကို ငွေပေးချေ certificate ဖြင့် code-sign မလုပ်ထားသောကြောင့် SmartScreen က flag လုပ်သည်။ ၎င်းသည် Plinth မဘေးကင်းကြောင်း **အလိုအလျောက်** မဆိုလိုပါ။ ဆက်လုပ်ရန်:

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="SmartScreen "Windows protected your PC" dialog တွင် "More info" link ကိုထင်ရှားအောင်ပြထားသည်" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="More info ချဲ့ပြီးနောက် SmartScreen dialog တွင် "Run anyway" ခလုတ်ပေါ်လာသည်" />

1. **More info** ကို နှိပ်ပါ။
2. **Run anyway** ကို နှိပ်ပါ။

#### Windows Defender သည် ဖိုင်ကို flag လုပ်ခြင်း သို့မဟုတ် ဖယ်ရှားပါက

Defender heuristics သည် တစ်ခါတစ်ရံ unsigned NSIS installers နှင့် Electron portables ကို သံသယဖြစ်ဖွယ်ဟု flag လုပ်တတ်သည်။ Defender က `Plinth-win-x64-Setup.exe` သို့မဟုတ် `Plinth-win-x64-Portable.exe` ကို quarantine ထည့်ပါက **Windows Security → Virus & threat protection → Protection history** မှ ပြန်ယူပြီး Plinth executable ကို **Manage settings → Add or remove exclusions** အောက်တွင် ခွင့်ပြုထားသောအရာအဖြစ် ထည့်သွင်းပါ။ SmartScreen ကဲ့သို့ပင် trigger သည် ပျောက်ဆုံးသော publisher signature ဖြစ်ပြီး malware တွေ့ရှိမှုမဟုတ်ပါ။

> Plinth ကို တရားဝင် GitHub Releases စာမျက်နှာမှသာ ဒေါင်းလုဒ်ဆွဲပါ။ ဖိုင်ကို အခြား website မှ ရရှိပါက သို့မဟုတ် တစ်ယောက်ယောက်က ပေးပို့ပါက ၎င်းကို ဖျက်ပြီး တရားဝင် source မှ အသစ် download ဆင်းပါ။ source code ကို public တင်ထားသောကြောင့် သင်ကြိုက်ပါက ကိုယ်တိုင် စစ်ဆေးနိုင်သည် သို့မဟုတ် Plinth ကိုယ်တိုင် build လုပ်နိုင်သည်။

Scoop ကို ပိုနှစ်သက်ပါသလား။ `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>macOS ပထမဆုံး launch

Plinth သည် macOS အတွက် code-sign မလုပ်ရသေးသောကြောင့် DMG မှ install လုပ်ပြီးနောက် Gatekeeper သည် ကြောက်စရာ *"Plinth.app is damaged and can't be opened"* dialog ကို ပြသနိုင်သည်။ ထို message သည် macOS က unsigned app ကို quarantine လုပ်ထားသည်ဟု ဆိုလိုပြီး app files တကယ်ပျက်စီးနေသည်ဟု မဆိုလိုပါ။ လက်ရှိ macOS တွင် ယုံကြည်ရသော ဖြေရှင်းနည်းမှာ Terminal ဖြစ်သည်:

1. တပ်ဆင်ထားသော DMG မှ `Plinth.app` ကို `/Applications` သို့ ဆွဲထည့်ပါ။
2. Terminal ကိုဖွင့်ပြီး ဤ command နှစ်ခုကို run ပါ:

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
open /Applications/Plinth.app
```

ပထမ command သည် သင်ထည့်သွင်းထားသော Plinth copy မှ quarantine attribute ကို ဖယ်ရှားသည်။ ဒုတိယ command သည် app ကို ဖွင့်သည်။ `sudo` သည် သင့် Mac password ကို တောင်းနိုင်သည်။ Terminal သည် password ရိုက်နေချိန်တွင် စာလုံးများကို မပြပါ။

**Apple Silicon နှင့် Intel:** M-series Mac (M1 / M2 / M3 / M4) ပေါ်တွင် `arm64` DMG ကိုဒေါင်းလုဒ်ဆွဲပါ။ Intel Mac ပေါ်တွင် `x64` DMG ကိုဒေါင်းလုဒ်ဆွဲပါ။ မမှန်ကန်သော build ကိုဖွင့်ပါက Rosetta မှတစ်ဆင့် အလုပ်လုပ်သော်လည်း သိသာစွာ နှေးကွေးပါမည်။

> macOS builds များကို Apple Silicon နှင့် Intel runners တို့ပေါ်တွင် CI မှတဆင့် ထုတ်လုပ်သည်။ ပြဿနာများကြုံတွေ့ပါက [issue တင်ပါ](../../issues) — macOS သုံးစွဲသူများ၏ feedback သည် macOS testing cycle ကို တက်ကြွစွာ ပုံဖော်ပေသည်။

### <a id="why-warning"></a>သတိပေးချက် ဘာကြောင့်မြင်ရနိုင်သနည်း

Plinth သည် open-source ဖြစ်ပြီး MIT-licensed ဖြစ်သည်။ Windows နှင့် macOS builds များသည် **code-sign မလုပ်ထားပါ** — Apple Developer ID နှင့် Windows EV code-signing certificates တို့သည် တစ်နှစ်လျှင် ဒေါ်လာ ရာနှင့်ချီ ကုန်ကျပြီး indie project တစ်ခုအတွက် ကိုယ်တိုင်ကျခံရသည်။ ထိုလက်မှတ်များမပါဘဲ Windows SmartScreen နှင့် macOS Gatekeeper တို့သည် ပထမဆုံး launch တွင် သတိပေးလိမ့်မည်။ သတိပေးချက်များ၏ အဓိပ္ပာယ်မှာ *သင့် OS က publisher ကို မသိသောကြောင့်ဖြစ်ပြီး* Plinth malware ဖြစ်ကြောင်း မဆိုလိုပါ။

Plinth ကိုယ်တိုင် စစ်ဆေးရန် နည်းလမ်းသုံးမျိုး၊ တဆင့်ပြင်းထန်လာသောစီစဉ်မှုဖြင့်:

- **Source ကိုဖတ်ပါ။** မျဉ်းတိုင်းသည် [GitHub](https://github.com/fabwaseem/plinth) တွင်ရှိပြီး [source မှ build](#tech) လုပ်နိုင်သည်။
- **SHA256 စစ်ဆေးပါ။** သင့်ဖိုင်ကို ထုတ်ဝေထားသော [`SHA256SUMS`](../../releases/latest) နှင့် ကိုက်ညီမှုစစ်ဆေးပါ — အောက်တွင် [သင့်ဒေါင်းလုဒ်ကို အတည်ပြုပါ](#verify) ကိုကြည့်ပါ။
- **Third-party scan ပြုလုပ်ပါ။** ဖိုင်ကို [VirusTotal](https://www.virustotal.com) တွင် upload ပြုလုပ်ပါ။

### <a id="linux-first-launch"></a>Linux ပထမဆုံး launch

AppImages များကို တိုက်ရိုက် run နိုင်သည် — ထည့်သွင်းမှုမလိုအပ်ပါ။ ဖိုင်ကို executable အဖြစ် mark လုပ်ရုံသာ လိုအပ်သည်။

**File manager:** `.AppImage` ကို right-click → **Properties** → **Permissions** → **Allow executing file as program** ကိုဖွင့်ပြီး double-click နှိပ်ပါ။

**Terminal:**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

Launch မအောင်မြင်သေးလျှင် mount မလုပ်ဘဲ ဖွင့်ပါ — FUSE package မလိုပါ:

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**ရွေးချယ်နိုင်သော desktop ပေါင်းစည်းမှု:** [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) ကို တစ်ကြိမ်ထည့်သွင်းပါ၊ သင် double-click နှိပ်သော AppImage တိုင်းသည် သင့် launcher menu တွင် အလိုအလျောက် မှတ်ပုံတင်ပြီး ကိုယ်တိုင် `.desktop` ဖိုင်ဖန်တီးရန် မလိုအပ်တော့ပါ။

**ရိုးရိုး tarball (FUSE မလို၊ install မလို):**

`.tar.gz` ဗားရှင်းသည် AppImage အခွံမပါသော အက်ပ်တူပင်ဖြစ်သည် — ကြိုက်ရာနေရာတွင် ဖြေပြီး ဖွင့်လိုက်ပါ။ installer လည်းမလို၊ FUSE package လည်း မလိုပါ။

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**ထုတ်ဝေမှုစာမျက်နှာရှိ Linux ဒေါင်းလုဒ်များသည် x86_64 သီးသန့်ဖြစ်သည်။** ARM64 စက်များ (Raspberry Pi, Asahi Linux) တွင် Flatpak install လုပ်၍ရသော်လည်း ဖွင့်သည့်အခါ `bwrap: execvp ldconfig: Exec format error` ဖြင့် ကျရှုံးသည်။

<details>
<summary><strong><a id="verify"></a>သင့်ဒေါင်းလုဒ်ကို အတည်ပြုပါ (SHA256)</strong></summary>

Release တိုင်းသည် binaries များနှင့်အတူ `SHA256SUMS` ဖိုင်ကို ထုတ်ဝေသည်။ သင့်ဒေါင်းလုဒ်သည် ပိုဆောင်ရင်းတွင် ပျက်စီးသွားခြင်း သို့မဟုတ် ကြားဖြတ်ဝင်ရောက်ပြောင်းလဲမှုမရှိကြောင်း စစ်ဆေးရန် ဖိုင်ကို locally hash ပြုလုပ်ပြီး `SHA256SUMS` ရှိ လိုင်းနှင့် ကိုက်ညီမှုစစ်ဆေးပါ။ နောက်ဆုံး release page ဖွင့်ပါ → **Assets** → `SHA256SUMS` ကိုဒေါင်းလုဒ်ဆွဲပါ။

**Windows (PowerShell သို့မဟုတ် Command Prompt):**

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

Third-party malware scan လိုချင်ပါသလား? [VirusTotal](https://www.virustotal.com) တွင် ဖိုင်ကို upload ပြုလုပ်ပါ။ unsigned Electron apps အတွက် သေးငယ်သော engines မှ generic-heuristic flags အနည်းငယ်ရှိခြင်းသည် ပုံမှန်ဖြစ်သည်၊ သို့သော် အဓိက engines များမှ ကျယ်ပြန့်သော detections ရှိပါက စစ်မှန်သောစိုးရိမ်ဖွယ်ရာဖြစ်သည်။

</details>

<details>
<summary><strong>Windows: Installer နှင့် Portable နှိုင်းယှဉ်</strong></summary>

| | NSIS Installer | Portable `.exe` |
| --- | --- | --- |
| ထည့်သွင်းမှုလိုအပ်သည် | ဟုတ်သည် | မလိုအပ်ပါ — မည်သည့်နေရာမှမဆို run ပါ |
| Auto-update | ✅ app အတွင်းမှ | ❌ ကိုယ်တိုင် download ဆင်းရသည် |
| Startup မြန်နှုန်း | ✅ ပိုမြန်သည် | ⚠️ cold start နှေးသည် |
| Start Menu တွင် ထည့်သည် | Yes | No |
| လွယ်ကူစွာ ဖြုတ်နိုင်သည် | Yes | ❌ ဖိုင်ကိုဖျက်ပစ်ပါ |

**အကြံပြုချက်:** auto-update နှင့် ပိုမြန်သော startup အတွက် NSIS installer ကို အသုံးပြုပါ။ install မလုပ်ဘဲ registry မသုံးသောနည်းအတွက် portable `.exe` ကို အသုံးပြုပါ။

</details>

---

## <a id="why"></a>Plinth ဘာကြောင့်

Plinth ကို တစ်ခုတည်းသောရည်ရွယ်ချက်ဖြင့် တည်ဆောက်ထားသည်: URL ကို paste လုပ်ပြီး ကောင်းမွန်သောသော local file ကိုရရှိပါ။ upsell မပါ၊ data ကောက်ခံမှုမပါ။

| | Plinth |
| --- | --- |
| အခမဲ့၊ premium tier မပါ | Yes |
| Open source | Yes |
| Local processing သာ | Yes |
| အသုံးပြုမှုကန့်သတ်ချက်မပါ | Yes |
| Cross-platform desktop app | Yes |
| Subtitles + SponsorBlock | Yes |

---

## <a id="privacy"></a>ကိုယ်ရေးကိုယ်တာ

Downloads များကို [yt-dlp](https://github.com/yt-dlp/yt-dlp) မှတဆင့် YouTube မှ တိုက်ရိုက် သင်ရွေးချယ်သောဖိုဒါသို့ fetch လုပ်သည် — third-party server မှတဆင့် routing မလုပ်ပါ။ ကြည့်ရှုမှတ်တမ်း၊ ဒေါင်းလုဒ်မှတ်တမ်း၊ URL များနှင့် ဖိုင်အကြောင်းအရာများသည် သင့်ကိရိယာပေါ်တွင်သာ ကျန်ရှိသည်။

Plinth သည် [OpenPanel](https://openpanel.dev) မှတဆင့် anonymous aggregate telemetry ပေးပို့သည် — failures, crashes, feedback, OS နှင့် app versions များကို နားလည်ရန်လောက်သာ။ URLs, video titles, file paths, account info, fingerprinting သို့မဟုတ် personal data မရှိပါ။ per-install ID သည် random ဖြစ်ပြီး သင့် identity နှင့် မချိတ်ဆက်ထားပါ။ Settings တွင် opt out လုပ်နိုင်သည်။

Explore သည် သင့် browser နှင့် သီးခြားဖြစ်သော ကိုယ်ပိုင် sign-in ကို ထားရှိပြီး Plinth က sign-in ဖောင်ကို ဘယ်တော့မှ မဖတ်ပါ၊ မဖြည့်ပါ — Google ၏ ကိုယ်ပိုင်စာမျက်နှာတွင် သင်ကိုယ်တိုင် ရိုက်ထည့်ရသည်။ ဒေါင်းလုဒ်များသည် sign out အခြေအနေတွင် လုပ်ဆောင်သည်၊ အကောင့်ဖြင့် ဖြေရှင်းနိုင်သော အကြောင်းရင်းကြောင့် ဒေါင်းလုဒ်မအောင်မြင်မှသာ Plinth က sign-in ကို အသစ်ပြန်ဖတ်ပြီး ထိုဒေါင်းလုဒ်အတွက် ယာယီဖိုင်တွင်ထားကာ နောက်မှ ထိုဖိုင်ကို ဖျက်သည်။ ဆက်တင်များတွင် Explore မှ sign out လုပ်ပါက sign-in ကို မေ့သွားသည်။

---

## <a id="faq"></a>မေးလေ့ရှိသောမေးခွန်းများ

**တကယ်ကို အခမဲ့လား?**
ဟုတ်သည် — MIT licensed၊ premium tier မပါ၊ feature gating မပါ။

**မည်သည့် ဗီဒီယိုအရည်အသွေးများ ဒေါင်းလုဒ်ဆွဲနိုင်သနည်း?**
YouTube ပေးသောအရာများအားလုံး: 4K UHD (2160p), 1440p, 1080p, 720p, 480p, 360p နှင့် audio-only။ 60 fps, 120 fps နှင့် HDR streams များကို မူရင်းအတိုင်း ထိန်းသိမ်းသည်။

**Audio ကိုသာ MP3 အဖြစ် ထုတ်ယူနိုင်သလား?**
ဟုတ်ပါတယ်။ format menu ထဲက *အသံသာ* ကိုရွေးပြီး MP3၊ M4A/AAC၊ Opus သို့မဟုတ် WAV ကိုရွေးပါ။

**YouTube account လိုအပ်သော ဗီဒီယိုများကို ဘယ်လို ဒေါင်းလုဒ်လုပ်ရမလဲ?**
Explore tab တွင် တစ်ကြိမ် sign in ဝင်ပါ။ ထို့နောက် Plinth သည် သင့်အကောင့်ဖြင့် ကြည့်နိုင်သော private နှင့် member-only ဗီဒီယိုများ၊ အသက်အတည်ပြုထားသော အကောင့်ဖြစ်လျှင် အသက်ကန့်သတ်ဗီဒီယိုများ၊ သင်၏ Watch Later နှင့် Liked စာရင်းများကို ဒေါင်းလုဒ်လုပ်နိုင်သည်။ အကောင့်ဖြင့် ဖြေရှင်းနိုင်သော အကြောင်းရင်းကြောင့် ဒေါင်းလုဒ်မအောင်မြင်မှသာ ထို sign-in ကို သုံးပြီး ကျန်အရာအားလုံးကို အရင်ကဲ့သို့ပင် ဒေါင်းလုဒ်လုပ်သည်။ ၎င်းမှာ cookie ဆက်တင်များတွင် ပထမဆုံးစာရင်းသွင်းထားပြီး "အကြံပြု" ဟု အမှတ်အသားပြထားသော **Explore sign-in** ရွေးချယ်မှုဖြစ်ပြီး Explore ကို ပထမဆုံးဖွင့်သောအခါ Plinth က သင့်အတွက် ရွေးပေးသည်။ yt-dlp ၏ wiki က [sign in ဝင်ထားသော automation သည် Google account ကို flag လုပ်နိုင်ကြောင်း](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies) သတိပေးထားသဖြင့် အရန် account တစ်ခုသည် ပိုပြီးဘေးကင်းသောရွေးချယ်မှုဖြစ်သည်။

**YouTube တွင် တစ်ခုခုပြောင်းသောအခါ ဆက်လက်အလုပ်လုပ်မည်လား?**
yt-dlp ကို launch တိုင်း အလိုအလျောက် update လုပ်ပြီး YouTube က တစ်ခုခု ပြောင်းလဲသောအခါ Plinth က fix များကို လျင်မြန်စွာ ထုတ်ပေးသည်။ သင်သည် bot မဟုတ်ကြောင်း YouTube က အတည်ပြုခိုင်းသောအခါ Explore တွင် sign in ဝင်ထားလျှင် Plinth က သင်၏ Explore sign-in ကိုလည်း စမ်းကြည့်ပြီး cookie ဆက်တင်များတွင် ဖိုင် သို့မဟုတ် browser မှ cookie များကိုလည်း သုံးနိုင်သည်။

**Plinth ကို မည်သည့်ဘာသာစကားများဖြင့် ရနိုင်သနည်း?**
ချက်ချင်းအသုံးပြုနိုင်သော 30 ဘာသာစကားများ: Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文။ Plinth သည် ပထမဆုံးစတင်ချိန်တွင် သင့် operating system ဘာသာစကားကို အလိုအလျောက်သိရှိပြီး toolbar ရှိ ဘာသာစကားရွေးချယ်စနစ်မှ အချိန်မရွေးပြောင်းနိုင်သည်။ Runtime locale JSON သည် src/shared/i18n/locales/ တွင်ရှိပြီး ဘာသာပြန်သူများအတွက် PO catalog များသည် i18n/locales/ တွင်ရှိသည် — ပါဝင်ရန် GitHub တွင် PR ဖွင့်ပါ။

**အခြားအရာများ ထည့်သွင်းရန်လိုသလား?**
မလိုပါ။ yt-dlp သည် ပထမဆုံး ဖွင့်ချိန်တွင် အလိုအလျောက် ဒေါင်းလုဒ်လုပ်ပြီး သင့်စက်တွင် cache လုပ်သည်; ffmpeg နှင့် ffprobe သည် app နှင့်အတူ ပါလာသည်။ ထို့နောက် နောက်ထပ် setup မလိုအပ်ပါ။

**Playlist များ သို့မဟုတ် channel တစ်ခုလုံး ဒေါင်းလုဒ်ဆွဲနိုင်သလား?**
ရပါတယ် — နှစ်မျိုးလုံး။ playlist သို့မဟုတ် channel URL ကို paste လုပ်ပါ (ဥပမာ `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`); scan လုပ်မည့် entries အရေအတွက်ကိုရွေးပြီး စာရင်းတစ်ခုလုံးကို queue ထဲထည့်ပါ သို့မဟုတ် video များကို သီးသန့်ရွေးပါ။ date-range filters မကြာမီလာပါမည်။

**macOS က "app ပျက်စီးနေသည်" ဟုဆိုသည် — ဘာလုပ်ရမည်နည်း?**
၎င်းသည် macOS Gatekeeper က unsigned app ကို block လုပ်ခြင်းဖြစ်ပြီး တကယ်ပျက်စီးမှုမဟုတ်ပါ။ quarantine ကိုဖယ်ရှားပြီး Plinth ကိုဖွင့်ရန် Terminal commands များကို [macOS first launch](#macos-first-launch) တွင် ကြည့်ပါ။

**YouTube ဗီဒီယိုများ ဒေါင်းလုဒ်ဆွဲခြင်း တရားဝင်ပါသလား?**
ကိုယ်ရေးကိုယ်တာ သုံးစွဲမှုအတွက် ကိုယ်ရေးကိုယ်တာ purposes အတွက် နိုင်ငံအများစုတွင် ယေဘုယျအားဖြင့် လက်ခံသည်။ YouTube ၏ [Terms of Service](https://www.youtube.com/t/terms) နှင့် သင့်ဒေသခံ copyright ဥပဒေများနှင့် ကိုက်ညီသည်ကို သင်ကိုယ်တိုင် တာဝန်ယူရသည်။

---

## <a id="roadmap"></a>လမ်းပြမြေပုံ

ဆက်လက်စီစဉ်ထားသည် — ဦးစားပေးအစဉ်လိုက် ခန့်မှန်းအားဖြင့်:

| လုပ်ဆောင်ချက် | ဖော်ပြချက် |
| --- | --- |
| **Playlist နှင့် channel filters** | playlist သို့မဟုတ် channel ကို enumerate လုပ်သည့်အခါ date-range filters |
| **YouTube audio track preference များ** | YouTube တွင် audio tracks များစွာရှိပါက app တစ်ခုလုံးအတွက် spoken-language track preference သတ်မှတ်ပြီး profile တစ်ခုချင်းစီမှာ override လုပ်ပါ |
| **ပိုမိုခိုင်မာသော retry recovery** | မတည်ငြိမ်သော သို့မဟုတ် ပြဿနာရှိသော internet connection ကြောင့် ပြတ်တောက်သွားသော downloads များအတွက် retry လမ်းကြောင်းအသစ် |
| **ပြည့်စုံသော download manager drawer** | queue drawer ကို ပိုမိုပြည့်စုံသော manager အဖြစ် ပြောင်းလဲပြီး queued items များအတွက် destination folder ပြောင်းလဲနိုင်ရန် |
| **ဒေါင်းလုဒ်ချိန်သတ်မှတ်ခြင်း** | သတ်မှတ်ချိန်တွင် queue ကို စတင်ပါ (ညဘက် runs) |
| **Clip ဖြတ်တောက်ခြင်း** | start/end time ဖြင့် segment တစ်ခုသာ ဒေါင်းလုဒ်ဆွဲပါ |
| **AUR package** | Arch Linux နှင့် Omarchy တွင် `yay -S plinth-bin` ဖြင့် ထည့်သွင်းပါ |

လုပ်ဆောင်ချက်တစ်ခု ကြံဆထားပါသလား? [Request တင်ပါ](../../issues) — community input က ဦးစားပေးမှုကို ပုံဖော်သည်။

---

## <a id="support"></a>Plinth ကို ပံ့ပိုးရန်

Plinth သည် အခမဲ့ဖြစ်ပြီး MIT လိုင်စင်ဖြင့် ဖြန့်ဝေသည် — ကြော်ငြာမပါ၊ ငွေပေးရသည့် ဗားရှင်းလည်း မရှိပါ။ သင့်အချိန်ကို သက်သာစေပါက Bitcoin သို့မဟုတ် Tron ဖြင့် ဖွံ့ဖြိုးတိုးတက်မှုကို ပံ့ပိုးနိုင်ပါသည် — လိပ်စာများကို [DONATE.md](../../docs/DONATE.md) တွင် ကြည့်ပါ၊ ၎င်းသည် လိပ်စာများ၏ တစ်ခုတည်းသော တရားဝင် အရင်းအမြစ် ဖြစ်ပါသည်။ Plinth သည် သင့်ထံသို့ အီးမေးလ် သို့မဟုတ် တိုက်ရိုက်မက်ဆေ့ချ်ဖြင့် လိပ်စာ ဘယ်တော့မျှ ပို့မည်မဟုတ်ပါ။ repo ကို ကြယ်ပွင့်ပေးခြင်း၊ bug များ အစီရင်ခံခြင်းနှင့် ဘာသာပြန်များ တိုးတက်အောင် ကူညီခြင်းတို့သည်လည်း အလားတူ အထောက်အကူဖြစ်ပါသည်။

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>တည်ဆောက်ထားသောနည်းပညာ

<details>
<summary><strong>နည်းပညာ stack</strong></summary>

- **Electron** — cross-platform desktop shell
- **React 19** + **TypeScript** — UI
- **Tailwind CSS v4** — styling
- **Zustand** — state management
- **yt-dlp** + **ffmpeg** — download နှင့် mux engine (yt-dlp ကို runtime တွင် fetch လုပ်သည်; ffmpeg/ffprobe ကို build time တွင် bundle ထည့်သည်)
- **Vite** + **electron-vite** — build tooling
- **Vitest** + **Playwright** — unit နှင့် end-to-end tests

</details>

<details>
<summary><strong>Source code မှ Build လုပ်ခြင်း</strong></summary>

### လိုအပ်သောအရာများ — platform အားလုံးအတွက်

| Tool    | ဗားရှင်း | ထည့်သွင်းရန် |
| ------- | ------- | ------- |
| Git     | မည်သည့်ဗားရှင်းမဆို | [git-scm.com](https://git-scm.com) |
| Node.js | 24.21.0 | `mise install` သို့မဟုတ် `.node-version` |
| Bun     | 1.4.2  | `mise install` သို့မဟုတ် `package.json` `packageManager` |

အကြံပြုချက်: `mise` ကို install လုပ်ပြီး checkout အတွင်း `mise install` ကို run ပါ။ mise မသုံးပါက `bun run bootstrap` မလုပ်ခင် `.node-version` မှ Node.js နှင့် `package.json` မှ Bun ကို manual activate လုပ်ပါ။

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Native rebuilds အတွက် Visual Studio Build Tools နှင့် Python လိုအပ်နိုင်သည်။

### macOS

```bash
brew install mise
xcode-select --install
```

clone ပြီးနောက် checkout ထဲတွင် `mise trust && mise install` ကို run လုပ်ပါ။ သင့် shell က `fnm`, `nvm`, သို့မဟုတ် Homebrew Bun ကို အသုံးပြုနေပြီးသားဖြစ်ပါက Plinth သည် Node.js 24.21.0 နှင့် Bun 1.4.2 ကို သုံးနိုင်ရန် `~/.zshrc` တွင် mise ကို activate လုပ်ပါ:

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

# Build နှင့် Electron runtime deps
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# E2E tests only (Electron needs a display)
sudo apt install -y xvfb
```

### Clone နှင့် run လုပ်ခြင်း

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # အကြံပြု; pinned tools ကို manual activate လုပ်ထားလျှင် ကျော်နိုင်သည်
bun run bootstrap
bun run doctor
bun run dev            # Vite renderer ဖြင့် Electron app
```

### Distributable ကို Build လုပ်ခြင်း

```bash
bun run build        # typecheck + compile
bun run dist         # လက်ရှိ OS အတွက် package ထုတ်ရန်
bun run dist:win     # supported host တွင် Windows targets package ထုတ်ရန်
```

> `bun run bootstrap` သည် dependencies ကို install လုပ်ပြီး Electron app dependencies ကို rebuild လုပ်သည်၊ Electron ကို verify လုပ်သည်၊ development အတွက် embedded ffmpeg/ffprobe ကို ပြင်ဆင်သည်၊ Playwright Chromium ကို install လုပ်သည်။ yt-dlp ကို runtime တွင် app data folder ထဲ၌ manage လုပ်ပြီး ffmpeg နှင့် ffprobe သည် Plinth release တိုင်းတွင် bundled ဖြစ်သည်။

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

## အသုံးပြုမှုသဘောတူညီချက်

Plinth သည် ကိုယ်ရေးကိုယ်တာ သုံးစွဲမှုအတွက်သာ tool ဖြစ်သည်။ သင့် downloads သည် YouTube ၏ [Terms of Service](https://www.youtube.com/t/terms) နှင့် သင့်နိုင်ငံ၏ copyright ဥပဒေများနှင့် ကိုက်ညီကြောင်း သေချာစေရန် တာဝန်သည် သင့်ကိုယ်သင်တွင်သာ ရှိသည်။ သင့်တွင် အသုံးပြုခွင့်မရှိသောကြောင့် content ကို ဒေါင်းလုဒ်ဆွဲ၊ ထပ်ဆင့်ဖြန့်ဝေ သို့မဟုတ် ဖြန့်ဖြူးရန် Plinth ကို မသုံးပါနှင့်။ Developer များသည် မည်သည့် အလွဲသုံးမှုမဆိုအတွက် တာဝန်ကင်းသည်။

MIT License · <a href="https://github.com/fabwaseem">Waseem Anjum</a> မှ ဂရုတစိုက်ဖန်တီးထားသည်

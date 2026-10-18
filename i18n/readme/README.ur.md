<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — Windows، macOS اور Linux کے لیے مفت اوپن سورس YouTube (+ 2000 سائٹس) ڈاؤن لوڈر

**YouTube اور 2000+ معاون سائٹس** سے ویڈیوز، Shorts، موسیقی، چینلز، پوڈکاسٹ یا آڈیو ٹریک ڈاؤن لوڈ کریں — 60 fps پر 4K HDR تک، یا MP3 / AAC / Opus کے طور پر۔ Windows، macOS اور Linux پر مقامی طور پر چلتا ہے۔ **کوئی اشتہارات نہیں، کوئی بلوٹ نہیں، کوئی اپ سیلز نہیں۔**

Plinth is a fork of [Arroxy](https://github.com/antonio-orionus/Arroxy) by Antonio Orionus, MIT licensed.

### What Plinth changes

- Published as Plinth by Waseem Anjum, with its own site ([plinth.fabwaseem.com](https://plinth.fabwaseem.com)) and its own Scoop and Homebrew packages.

**زبان:** [Afaan Oromoo](README.om.md) · [Bahasa Indonesia](README.id.md) · [Deutsch](README.de.md) · [English](../../README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Tiếng Việt](README.vi.md) · [Türkçe](README.tr.md) · [አማርኛ](README.am.md) · [العربية](README.ar.md) · **اردو** · [پښتو](README.ps.md) · [فارسی](README.fa.md) · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · [ไทย](README.th.md) · [မြန်မာဘာသာ](README.my.md) · [Ελληνικά](README.el.md) · [Русский](README.ru.md) · [Српски](README.sr.md) · [Українська](README.uk.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ تازہ ترین ریلیز ڈاؤن لوڈ کریں**](#install) · [**ویب سائٹ**](https://plinth.fabwaseem.com) · [Windows پر پہلی بار لانچ](#windows-first-launch) · [macOS پر پہلی بار لانچ](#macos-first-launch) · [Linux پر پہلی بار لانچ](#linux-first-launch)

اگر Plinth آپ کا وقت بچاتا ہے، تو ایک ⭐ دوسروں کو اسے ڈھونڈنے میں مدد کرتا ہے۔

_Last updated: 2026-10-18._

> 🌐 یہ AI کی مدد سے کیا گیا ترجمہ ہے۔ [انگریزی README](README.md) سچائی کا ماخذ ہے۔ کوئی غلطی نظر آئی؟ [PR کا خیر مقدم ہے](../../pulls)۔

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download. `winget install WaseemAnjum.Plinth` is coming soon.

---

## فہرست

- [خصوصیات](#features)
- [انسٹال اور پہلی بار لانچ](#install)
- [Plinth کیوں](#why)
- [پرائیویسی](#privacy)
- [اکثر پوچھے گئے سوالات](#faq)
- [روڈ میپ](#roadmap)
- [Plinth کی معاونت کریں](#support)
- [ان چیزوں سے بنایا گیا](#tech)

---

## <a id="features"></a>خصوصیات

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>فوری ڈاؤن لوڈ ہوم</b><br/>URL پیسٹ کریں اور اپنی فعال پروفائل سے فوراً ڈاؤن لوڈ کریں

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>Plinth کے اندر YouTube براؤز کریں اور اپنے فعال پروفائل کے ساتھ موجودہ صفحہ ڈاؤن لوڈ کریں

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>بلک URL موڈ</b><br/>فہرست پیسٹ کریں، خودکار طور پر نقول ہٹائیں، سب کو ایک ساتھ قطار میں لگائیں

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>متوازی ڈاؤن لوڈ قطار</b><br/>براہِ راست پیش رفت کے ساتھ بیک وقت کئی ڈاؤن لوڈز

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>دوبارہ قابلِ استعمال ڈاؤن لوڈ پروفائلز</b><br/>فارمیٹ، معیار اور آؤٹ پٹ کو پری سیٹ کے طور پر محفوظ کریں — ہر ڈاؤن لوڈ پر دوبارہ استعمال کریں

### Explore: Plinth کے اندر YouTube براؤز کریں

- **Explore ٹیب** — Plinth کے اندر YouTube براؤز کریں اور جو ملے اسے لنک کاپی کیے بغیر ڈاؤن لوڈ کریں۔ **ڈاؤن لوڈ · *آپ کا پروفائل*** وہ ویڈیو، پلے لسٹ یا چینل قطار میں لگاتا ہے جو آپ دیکھ رہے ہیں؛ اس کے ساتھ والا تیر پروفائل بدلتا ہے، اور جادوئی چھڑی فارمیٹس، سب ٹائٹلز اور مزید چننے کے لیے مرحلہ وار ڈاؤن لوڈ کھولتی ہے
- **ایڈریس بار** — YouTube پر تلاش کے لیے ٹائپ کریں یا YouTube کا لنک پیسٹ کریں۔ Explore صرف YouTube براؤز کرتا ہے، اس لیے کسی دوسری سائٹ کا لنک وہاں نہیں کھلتا، لیکن آپ اسے ایک کلک میں ڈاؤن لوڈ کر سکتے ہیں
- **وہ ڈاؤن لوڈز جنہیں اکاؤنٹ چاہیے** — Explore میں ایک بار سائن ان کریں اور Plinth وہ نجی اور صرف ممبران کے ویڈیوز ڈاؤن لوڈ کر سکتا ہے جو آپ کا اکاؤنٹ دیکھ سکتا ہے، عمر کی پابندی والے ویڈیوز اگر اکاؤنٹ کی عمر کی توثیق ہو چکی ہو، اور آپ کی Watch Later اور Liked فہرستیں۔ Plinth اب بھی سائن آؤٹ حالت میں ڈاؤن لوڈ کرتا ہے اور آپ کا Explore سائن ان صرف تب استعمال کرتا ہے جب ڈاؤن لوڈ ایسی وجہ سے ناکام ہو جسے اکاؤنٹ ٹھیک کر سکے۔ جب YouTube تصدیق مانگے کہ آپ بوٹ نہیں ہیں، تو Plinth آپ کا Explore سائن ان بھی آزماتا ہے
- **ثانوی اکاؤنٹ استعمال کریں** — Explore کی پہلی اسکرین وجہ بتاتی ہے: اکاؤنٹ کے ساتھ ڈاؤن لوڈ کرنے میں اس اکاؤنٹ پر پابندی لگنے کا کچھ خطرہ ہوتا ہے۔ سائن ان بھلانا چاہیں تو جب چاہیں Settings سے Explore سے سائن آؤٹ کر لیں
- **اشتہار بلاکر** — Explore اپنے صفحات پر اشتہارات اور ٹریکرز بلاک کرتا ہے؛ ڈاؤن لوڈز متاثر نہیں ہوتے۔ بطور ڈیفالٹ آن ہے، Explore کے ٹول بار میں شیلڈ پر ایک کلک اسے بند کر دیتا ہے، اور یہ Google کے سائن ان صفحات پر کبھی کام نہیں کرتا۔ YouTube سائن ان اکاؤنٹس کے لیے اشتہار بلاکرز کی مزاحمت کر سکتا ہے

### کوالٹی اور فارمیٹس

- **4K UHD (2160p)** تک، 1440p، 1080p، 720p، 480p، 360p
- **ہائی فریم ریٹ** جیسا ہے ویسا ہی محفوظ — 60 fps، 120 fps، HDR
- **آڈیو** — صرف آڈیو کو MP3، M4A/AAC، Opus یا WAV میں ایکسپورٹ کریں۔ انٹرایکٹو ڈاؤن لوڈز میں، دستیاب ہونے پر ماخذ کے نیٹو surround/Dolby ٹریکس (AC-3، E-AC-3، 5.1، DRC) منتخب کریں، یا عالمی ڈیفالٹ **سراؤنڈ / Dolby کو ترجیح دیں** سیٹ کریں
- فوری پری سیٹس: *بہترین کوالٹی* · *متوازن* · *چھوٹی فائل*

### ورک فلو

- **عالمی ڈاؤن لوڈ ہاٹ کی** — کسی بھی ایپ میں لنک کاپی کریں اور `Ctrl+Shift+D` (macOS پر `Cmd+Shift+D`) دبائیں؛ Plinth اسے ونڈو کھولے بغیر آپ کی فعال پروفائل کے ساتھ قطار میں ڈال دیتا ہے اور اطلاع سے تصدیق کرتا ہے۔ بطور ڈیفالٹ فعال، دوبارہ مقرر کی جا سکتی ہے
- **لچکدار آغاز کے طریقے** — گائیڈڈ سنگل ڈاؤن لوڈ، پلے لسٹ/چینل پکر، bulk URL پیسٹ، محفوظ ڈیفالٹس کے ساتھ Quick Download، یا Explore سے براؤز اور ڈاؤن لوڈ منتخب کریں
- **مرکزی ڈاؤن لوڈ قطار** — ہر سنگل، پلے لسٹ، bulk، یا quick کام پیش رفت، pause، resume، cancel، retry، اور priority کنٹرول کے لیے ایک ہی جگہ آتا ہے
- **کلپ بورڈ واچ** — YouTube لنک کاپی کریں اور جب آپ ایپ پر واپس آئیں تو Plinth خود بخود URL بھر دیتا ہے (ایڈوانسڈ سیٹنگز میں ٹوگل کریں)
- **خودکار صاف URLs** — ٹریکنگ پیرامیٹرز (`si`، `pp`، `utm_*`، `fbclid`، `gclid`) کو ہٹاتا ہے اور `youtube.com/redirect` لنکس کو کھولتا ہے
- **ٹرے موڈ** — ونڈو بند کرنے سے ڈاؤن لوڈز پس منظر میں چلتے رہتے ہیں
- **30 زبانیں** — سسٹم لوکیل کا خود بخود پتہ لگاتا ہے، کسی بھی وقت تبدیل کیا جا سکتا ہے
- **پلے لسٹ سنک** — پہلے سے ڈاؤن لوڈ شدہ ویڈیوز چھوڑنے کے لیے پلے لسٹ کو مقامی فولڈر کے مقابل دوبارہ اسکین کرتا ہے؛ ہر ویڈیو ڈاؤن لوڈ ہونے پر اپ ڈیٹ ہونے والی `.m3u` پلے لسٹ فائل بناتا ہے
- **رفتار اور pacing کنٹرولز** — ڈاؤن لوڈ bandwidth محدود کریں، طے کریں کہ ویڈیو کے کتنے حصے ایک ساتھ ڈاؤن لوڈ ہوں، اور presets (*بند · متوازن · محتاط · حسبِ ضرورت*) کے ساتھ requests کے درمیان delays شامل کریں
- **فائل نام ٹیمپلیٹس** — `{title}`، `{uploader}`، `{id}`، `{date}`، `{resolution}` اور `{playlist_index}` کے ساتھ ڈاؤن لوڈ کے نام اپنی مرضی سے رکھیں، عالمی طور پر یا ہر ڈاؤن لوڈ پروفائل کے لیے
- **ایک وقت میں ڈاؤن لوڈز اور خودکار دوبارہ کوشش** — منتخب کریں کہ قطار کے کتنے ڈاؤن لوڈز ایک ساتھ چلیں، اور نیٹ ورک یا سرور کی خرابی کا شکار ڈاؤن لوڈ Plinth ہر کوشش سے پہلے زیادہ انتظار کرتے ہوئے دوبارہ آزمائے
- **پلے لسٹ میں ہر آئٹم کے لیے پروفائل** — پوری فہرست کے لیے ایک ہی سیٹنگ کے بجائے پلے لسٹ کے ہر ویڈیو کو اپنا ڈاؤن لوڈ پروفائل تفویض کریں، تاکہ ایک ہی مرحلے میں کچھ کو مکمل کوالٹی میں محفوظ کیا جائے اور باقی کو MP3 کے طور پر حاصل کیا جائے
- **Quick Download پس منظر میں کام کرتا ہے** — لنک فوراً Downloads میں نظر آتا ہے اور وہیں تیار ہوتا ہے، **View** والا نوٹ اس کی تصدیق کرتا ہے، اور اگلے لنک کے لیے URL فیلڈ صاف ہو جاتا ہے۔ پچھلے تیار ہو رہے ہوں تو جتنے چاہیں شروع کریں
- **Downloads بتاتا ہے کہ کس چیز کو آپ کی ضرورت ہے** — اگر Plinth کوئی لنک پڑھ نہ سکے تو اس کی قطار وجہ بتاتی ہے اور حل پیش کرتی ہے: دوبارہ کوشش، کوکیز آن کرنا، یا Explore میں سائن ان۔ کوکیز بند ہونے پر، آپ کے سائن ان کرنے کے بعد **Explore کے ساتھ سائن ان** اسے آپ کے لیے دوبارہ آزماتا ہے۔ آپ کی لوڈ حد سے لمبی پلے لسٹ اپنی قطار میں انتظار کرتی ہے کہ آپ پوری، ابتدائی چند، یا جائزہ چنیں۔ Downloads ٹیب ان قطاروں کی گنتی دکھاتا ہے جو آپ کی منتظر ہیں

### سب ٹائٹلز اور پوسٹ پراسیسنگ

- **سب ٹائٹلز** SRT، VTT یا ASS میں — دستی یا خود کار طریقے سے بنائے گئے، کسی بھی دستیاب زبان میں
- ویڈیو کے ساتھ محفوظ کریں، `.mkv` میں ایمبیڈ کریں، یا `Subtitles/` سب فولڈر میں منظم کریں
- **SponsorBlock** — اسپانسرز، انٹروز، آؤٹروز اور سیلف پروموز کو سکپ کریں یا چیپٹر مارک کریں
- **ایمبیڈڈ میٹا ڈیٹا** — ٹائٹل، اپ لوڈ کی تاریخ، چینل، تفصیل، تھمب نیل اور چیپٹر مارکرز فائل میں لکھے جاتے ہیں
- **صرف سب ٹائٹل بیچ** — URLs کی فہرست پیسٹ کریں یا پلے لسٹ کھولیں، سب ٹائٹلز منتخب کریں، اور ہر ویڈیو کے لیے صرف کیپشن فائلیں حاصل کریں

### YouTube + 2000 سائٹس

- **YouTube، مکمل** — Videos، Shorts، Channels، Playlists، YouTube Music اور Podcasts کو فرسٹ-کلاس ذرائع کے طور پر ہینڈل کیا جاتا ہے
- **2000+ دیگر سائٹس** yt-dlp کے ذریعے — Vimeo، Twitch، Twitter/X، TikTok، SoundCloud، Bandcamp، Bilibili، BBC iPlayer، archive.org اور بہت کچھ
- **صرف آڈیو اور سب ٹائٹلز** ہر معاون سائٹ پر کام کرتے ہیں، نہ صرف YouTube پر
- اگر کوئی سائٹ بدلتی ہے تو yt-dlp ہر ہفتے فکس جاری کرتا ہے اور Plinth لانچ پر بائنری خودکار طور پر اپ ڈیٹ کرتا ہے

### پرائیویسی اور کنٹرول

- 100% مقامی پراسیسنگ — ڈاؤن لوڈز سیدھے YouTube سے آپ کی ڈسک پر جاتے ہیں
- کوئی لاگ ان نہیں، کوئی کوکیز نہیں، کوئی Google اکاؤنٹ منسلک نہیں
- فائلیں سیدھی آپ کے منتخب کردہ فولڈر میں محفوظ

---

## <a id="install"></a>انسٹال اور پہلی بار لانچ

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

بلڈز صرف x86_64 کے لیے ہیں۔ `curl` نہیں ہے؟ `curl -fsSL` کی جگہ `wget -qO-` استعمال کریں۔

| پلیٹ فارم | فارمیٹ |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**تازہ ترین ریلیز حاصل کریں →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>Windows پر پہلی بار لانچ

پہلی بار لانچ پر آپ کو **"Windows protected your PC"** یا **"Unknown publisher"** نظر آ سکتا ہے۔ یہ `Plinth-win-x64-Setup.exe` اور `Plinth-win-x64-Portable.exe` دونوں پر لاگو ہوتا ہے۔ Plinth مفت اور اوپن سورس ہے اور Windows بلڈز کو ادائیگی والے سرٹیفکیٹ سے کوڈ سائن نہیں کیا گیا، اسی لیے SmartScreen انہیں فلیگ کرتا ہے۔ اس کا مطلب **نہیں** کہ Plinth خود بخود غیر محفوظ ہے۔ جاری رکھنے کے لیے:

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="SmartScreen "Windows protected your PC" ڈائیلاگ جس میں "More info" لنک نمایاں ہے" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="More info کھولنے کے بعد SmartScreen ڈائیلاگ، جس میں "Run anyway" بٹن دکھائی دے رہا ہے" />

1. **More info** پر کلک کریں۔
2. **Run anyway** پر کلک کریں۔

#### اگر Windows Defender فائل کو فلیگ کرے یا ہٹا دے

Defender کے ہیورسٹکس کبھی کبھی غیر سائنڈ NSIS انسٹالرز اور Electron پورٹیبلز کو مشکوک قرار دیتے ہیں۔ اگر Defender نے `Plinth-win-x64-Setup.exe` یا `Plinth-win-x64-Portable.exe` کو قرنطینہ میں ڈالا ہو، تو اسے **Windows Security → Virus & threat protection → Protection history** سے بحال کریں، پھر Plinth ایگزیکیوٹیبل کو **Manage settings → Add or remove exclusions** کے تحت اجازت یافتہ آئٹم کے طور پر شامل کریں۔ SmartScreen کی طرح، وجہ غائب پبلشر دستخط ہے، کوئی دریافت شدہ میلویئر نہیں۔

> Plinth صرف آفیشل GitHub Releases صفحے سے ڈاؤن لوڈ کریں۔ اگر آپ کو فائل کسی دوسری ویب سائٹ سے ملی ہے یا کسی نے بھیجی ہے، تو اسے ڈیلیٹ کریں اور آفیشل ماخذ سے تازہ کاپی ڈاؤن لوڈ کریں۔ سورس کوڈ عوامی ہے، اس لیے آپ خود اسے جانچ یا Plinth بنا سکتے ہیں۔

Scoop ترجیح دیتے ہیں؟ `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>macOS پر پہلی بار لانچ

Plinth ابھی macOS کے لیے کوڈ سائنڈ نہیں ہے، اس لیے DMG سے انسٹال کرنے کے بعد Gatekeeper خوفناک *"Plinth.app is damaged and can't be opened"* ڈائیلاگ دکھا سکتا ہے۔ اس پیغام کا مطلب ہے کہ macOS نے ایک unsigned app کو quarantine کیا ہے؛ اس کا مطلب یہ نہیں کہ app files واقعی خراب ہیں۔ موجودہ macOS پر قابل اعتماد حل Terminal ہے:

1. نصب شدہ DMG سے `Plinth.app` کو `/Applications` میں گھسیٹیں۔
2. Terminal کھولیں اور یہ دو commands چلائیں:

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
open /Applications/Plinth.app
```

پہلی command آپ کی installed Plinth copy سے quarantine attribute ہٹاتی ہے۔ دوسری app launch کرتی ہے۔ `sudo` آپ کے Mac کا password مانگ سکتا ہے؛ Terminal typing کے دوران characters نہیں دکھاتا۔

**Apple Silicon بمقابلہ Intel:** M-سیریز Mac پر (M1 / M2 / M3 / M4)، `arm64` DMG ڈاؤن لوڈ کریں۔ Intel Macs پر، `x64` DMG ڈاؤن لوڈ کریں۔ غلط بلڈ چلانا Rosetta کے ذریعے کام کرتا ہے لیکن نمایاں طور پر سست ہے۔

> macOS بلڈز Apple Silicon اور Intel رنرز پر CI کے ذریعے تیار کیے جاتے ہیں۔ اگر آپ کو مسائل پیش آئیں، تو براہ کرم [ایک issue کھولیں](../../issues) — macOS صارفین سے ملنے والی فیڈ بیک macOS ٹیسٹنگ سائیکل کو فعال طور پر تشکیل دیتی ہے۔

### <a id="why-warning"></a>آپ کو وارننگ کیوں نظر آ سکتی ہے

Plinth اوپن سورس اور MIT لائسنس یافتہ ہے۔ Windows اور macOS بلڈز **کوڈ سائنڈ نہیں ہیں** — Apple Developer ID اور Windows EV کوڈ سائننگ سرٹیفکیٹس میں سے ہر ایک سالانہ سینکڑوں ڈالر لاگت آتی ہے، جو ایک انڈی پروجیکٹ اپنی جیب سے ادا کرتا ہے۔ ان دستخطوں کے بغیر، Windows SmartScreen اور macOS Gatekeeper پہلی بار لانچ پر آپ کو تنبیہ کریں گے۔ یہ تنبیہات اس بات کی علامت ہیں کہ *آپ کا OS ناشر کو نہیں پہچانتا* — یہ اس بات کی علامت نہیں کہ Plinth میلویئر ہے۔

Plinth کو خود جانچنے کے تین طریقے، بڑھتی ہوئی سختی کے ساتھ:

- **سورس پڑھیں۔** ہر لائن [GitHub](https://github.com/fabwaseem/plinth) پر موجود ہے اور آپ [سورس سے بلڈ](#tech) کر سکتے ہیں۔
- **SHA256 چیک کریں۔** اپنی فائل کو شائع شدہ [`SHA256SUMS`](../../releases/latest) سے ملائیں — نیچے [اپنا ڈاؤن لوڈ تصدیق کریں](#verify) دیکھیں۔
- **تھرڈ پارٹی اسکین چلائیں۔** فائل کو [VirusTotal](https://www.virustotal.com) پر اپ لوڈ کریں۔

### <a id="linux-first-launch"></a>Linux پر پہلی بار لانچ

AppImages براہ راست چلتے ہیں — کوئی انسٹالیشن نہیں۔ آپ کو صرف فائل کو ایگزیکیوٹیبل مارک کرنا ہوگا۔

**فائل مینیجر:** `.AppImage` پر دائیں کلک کریں → **Properties** → **Permissions** → **Allow executing file as program** کو فعال کریں، پھر ڈبل کلک کریں۔

**ٹرمینل:**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

اگر پھر بھی نہ چلے تو اسے ماؤنٹ کیے بغیر چلائیں — FUSE پیکیج کی ضرورت نہیں:

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**اختیاری ڈیسک ٹاپ انٹیگریشن:** [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) ایک بار انسٹال کریں، اور جس بھی AppImage کو آپ ڈبل کلک کریں گے وہ خود بخود آپ کے لانچر مینو میں رجسٹر ہو جائے گا — کوئی دستی `.desktop` فائل نہیں چاہیے۔

**سادہ ٹاربال (نہ FUSE، نہ انسٹال):**

`.tar.gz` بلڈ وہی ایپ ہے، بس AppImage ریپر کے بغیر — کہیں بھی ایکسٹریکٹ کریں اور چلائیں۔ نہ انسٹالر چاہیے، نہ FUSE پیکیج۔

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**ریلیز پیج پر Linux ڈاؤن لوڈز صرف x86_64 کے لیے ہیں۔** ARM64 مشینوں (Raspberry Pi، Asahi Linux) پر Flatpak انسٹال تو ہو جاتا ہے مگر لانچ پر `bwrap: execvp ldconfig: Exec format error` کے ساتھ ناکام ہو جاتا ہے۔

<details>
<summary><strong><a id="verify"></a>اپنا ڈاؤن لوڈ تصدیق کریں (SHA256)</strong></summary>

ہر ریلیز بائنریز کے ساتھ `SHA256SUMS` فائل بھی شائع کرتی ہے۔ یہ جانچنے کے لیے کہ آپ کا ڈاؤن لوڈ ٹرانسمیشن میں خراب یا تبدیل نہیں ہوا، اپنی فائل کو مقامی طور پر ہیش کریں اور `SHA256SUMS` کی لائن سے ملائیں۔ تازہ ترین ریلیز پیج کھولیں → **Assets** → `SHA256SUMS` ڈاؤن لوڈ کریں۔

**Windows (PowerShell یا Command Prompt):**

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

تھرڈ پارٹی میلویئر اسکین چاہتے ہیں؟ فائل کو [VirusTotal](https://www.virustotal.com) پر اپ لوڈ کریں۔ چھوٹے انجنوں سے چند عام ہیورسٹک فلیگز غیر سائنڈ Electron ایپس کے لیے معمول ہیں؛ بڑے انجنوں سے وسیع پیمانے پر دریافت واقعی تشویش کا باعث ہوگی۔

</details>

<details>
<summary><strong>Windows: انسٹالر بمقابلہ پورٹیبل</strong></summary>

| | NSIS انسٹالر | پورٹیبل `.exe` |
| --- | --- | --- |
| انسٹالیشن ضروری | ہاں | نہیں — کہیں سے بھی چلائیں |
| خودکار اپ ڈیٹس | ✅ ایپ کے اندر | ❌ دستی ڈاؤن لوڈ |
| اسٹارٹ اپ سپیڈ | ✅ تیز | ⚠️ کولڈ اسٹارٹ سست |
| اسٹارٹ مینو میں شامل | Yes | No |
| آسان ان انسٹال | Yes | ❌ بس فائل ڈیلیٹ کر دیں |

**تجویز:** خودکار اپ ڈیٹس اور تیز اسٹارٹ اپ کے لیے NSIS انسٹالر استعمال کریں۔ بغیر انسٹالیشن، بغیر رجسٹری آپشن کے لیے پورٹیبل `.exe` استعمال کریں۔

</details>

---

## <a id="why"></a>Plinth کیوں

Plinth ایک ہی کام کے لیے بنایا گیا ہے: URL پیسٹ کریں، ایک صاف ستھری مقامی فائل حاصل کریں۔ کوئی اپ سیلز نہیں، کوئی ڈیٹا کلیکشن نہیں۔

| | Plinth |
| --- | --- |
| مفت، کوئی پریمیم سطح نہیں | Yes |
| اوپن سورس | Yes |
| صرف مقامی پراسیسنگ | Yes |
| استعمال کی کوئی حد نہیں | Yes |
| کراس پلیٹ فارم ڈیسک ٹاپ ایپ | Yes |
| سب ٹائٹلز + SponsorBlock | Yes |

---

## <a id="privacy"></a>پرائیویسی

ڈاؤن لوڈز [yt-dlp](https://github.com/yt-dlp/yt-dlp) کے ذریعے براہ راست YouTube سے آپ کے منتخب کردہ فولڈر میں آتے ہیں — کسی تھرڈ پارٹی سرور سے نہیں گزرتے۔ دیکھنے کی تاریخ، ڈاؤن لوڈ تاریخ، URLs اور فائل کے مواد آپ کے ڈیوائس پر ہی رہتے ہیں۔

Plinth [OpenPanel](https://openpanel.dev) کے ذریعے گمنام، مجموعی ٹیلی میٹری بھیجتا ہے — صرف اتنی کہ ناکامیاں، کریشز، آراء، OS اور ایپ ورژنز سمجھ آ سکیں۔ کوئی URLs، ویڈیو ٹائٹلز، فائل پاتھز، اکاؤنٹ معلومات، fingerprinting یا ذاتی ڈیٹا نہیں۔ ہر انسٹال کا ID رینڈم ہے اور آپ کی شناخت سے منسلک نہیں۔ آپ Settings میں اسے بند کر سکتے ہیں۔

Explore کا اپنا سائن ان ہے، آپ کے browser سے الگ، اور Plinth سائن ان فارم کو کبھی نہیں پڑھتا اور نہ بھرتا — آپ Google کے اپنے صفحے پر ٹائپ کرتے ہیں۔ ڈاؤن لوڈز سائن آؤٹ حالت میں چلتے ہیں؛ صرف جب کوئی ڈاؤن لوڈ ایسی وجہ سے ناکام ہو جسے اکاؤنٹ ٹھیک کر سکے تو Plinth سائن ان کو نئے سرے سے پڑھتا ہے، اس ڈاؤن لوڈ کے لیے اسے ایک عارضی فائل میں رکھتا ہے، اور بعد میں فائل حذف کر دیتا ہے۔ Settings میں Explore سے سائن آؤٹ کرنے سے وہ بھول جاتا ہے۔

---

## <a id="faq"></a>اکثر پوچھے گئے سوالات

**کیا یہ واقعی مفت ہے؟**
ہاں — MIT لائسنس یافتہ، کوئی پریمیم سطح نہیں، کوئی فیچر گیٹنگ نہیں۔

**میں کن ویڈیو کوالٹیز میں ڈاؤن لوڈ کر سکتا ہوں؟**
جو بھی YouTube فراہم کرتا ہے: 4K UHD (2160p)، 1440p، 1080p، 720p، 480p، 360p، اور صرف آڈیو۔ 60 fps، 120 fps اور HDR اسٹریمز جیسے ہیں ویسے ہی محفوظ ہوتے ہیں۔

**کیا میں صرف آڈیو کو MP3 کے طور پر نکال سکتا ہوں؟**
جی ہاں۔ فارمیٹ مینو میں *صرف آڈیو* منتخب کریں اور پھر MP3، M4A/AAC، Opus یا WAV چنیں۔

**جن ویڈیوز کو YouTube اکاؤنٹ چاہیے انہیں کیسے ڈاؤن لوڈ کروں؟**
Explore ٹیب میں ایک بار سائن ان کریں۔ اس کے بعد Plinth وہ نجی اور صرف ممبران کے ویڈیوز ڈاؤن لوڈ کر سکتا ہے جو آپ کا اکاؤنٹ دیکھ سکتا ہے، عمر کی پابندی والے ویڈیوز اگر اکاؤنٹ کی عمر کی توثیق ہو چکی ہو، اور آپ کی Watch Later اور Liked فہرستیں۔ یہ سائن ان صرف تب استعمال ہوتا ہے جب ڈاؤن لوڈ ایسی وجہ سے ناکام ہو جسے اکاؤنٹ ٹھیک کر سکے؛ باقی سب کچھ پہلے کی طرح ڈاؤن لوڈ ہوتا ہے۔ یہ **Explore سائن ان** کا انتخاب ہے، جو Cookies کی ترتیبات میں سب سے اوپر درج اور Recommended کے نشان کے ساتھ ہے، اور Explore پہلی بار کھولنے پر Plinth اسے خود چن لیتا ہے۔ yt-dlp کی وکی میں نوٹ کیا گیا ہے کہ [سائن ان کے ساتھ آٹومیشن Google اکاؤنٹ کو فلیگ کر سکتی ہے](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies)، اس لیے ثانوی اکاؤنٹ زیادہ محفوظ انتخاب ہے۔

**جب YouTube کچھ تبدیل کرے تو کیا یہ کام کرتا رہے گا؟**
yt-dlp لانچ پر خود بخود اپ ڈیٹ ہو جاتا ہے، اور جب YouTube کچھ تبدیل کرتا ہے تو Plinth فوری طور پر فکس فراہم کرتا ہے۔ جب YouTube تصدیق مانگے کہ آپ بوٹ نہیں ہیں، تو اگر آپ نے Explore میں سائن ان کیا ہو تو Plinth وہ بھی آزماتا ہے، اور فائل یا browser سے کوکیز Cookies کی ترتیبات میں دستیاب ہیں۔

**Plinth کن زبانوں میں دستیاب ہے؟**
30 زبانیں فوراً دستیاب ہیں: Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文۔ Plinth پہلی بار چلنے پر آپ کے آپریٹنگ سسٹم کی زبان خود بخود پہچانتا ہے، اور آپ ٹول بار کے زبان چننے والے سے کسی بھی وقت زبان بدل سکتے ہیں۔ Runtime locale JSON src/shared/i18n/locales/ میں ہے، اور مترجمین کے لیے PO catalog i18n/locales/ میں ہے — تعاون کے لیے GitHub پر PR کھولیں۔

**کیا مجھے کچھ اور انسٹال کرنا ہوگا؟**
نہیں۔ yt-dlp پہلی بار لانچ پر خود بخود ڈاؤن لوڈ ہو کر آپ کی مشین پر کیش ہو جاتا ہے؛ ffmpeg اور ffprobe ایپ کے ساتھ آتے ہیں۔ اس کے بعد کسی اضافی سیٹ اپ کی ضرورت نہیں۔

**کیا میں پلے لسٹس یا پورے چینلز ڈاؤن لوڈ کر سکتا ہوں؟**
ہاں — دونوں۔ پلے لسٹ یا چینل URL پیسٹ کریں (مثلاً `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`)؛ منتخب کریں کہ کتنی entries scan کرنی ہیں، پھر پوری فہرست queue کریں یا مخصوص ویڈیوز چنیں۔ date-range filters جلد آ رہے ہیں۔

**macOS کہتا ہے "ایپ خراب ہے" — میں کیا کروں؟**
یہ macOS Gatekeeper ایک unsigned app کو block کر رہا ہے، اصل نقصان نہیں ہے۔ quarantine ہٹانے اور Plinth launch کرنے والی Terminal commands کے لیے [macOS first launch](#macos-first-launch) دیکھیں۔

**کیا YouTube ویڈیوز ڈاؤن لوڈ کرنا قانونی ہے؟**
ذاتی، نجی استعمال کے لیے، زیادہ تر دائرہ اختیار میں یہ عام طور پر قبول کیا جاتا ہے۔ آپ YouTube کی [Terms of Service](https://www.youtube.com/t/terms) اور اپنے مقامی کاپی رائٹ قوانین کی پابندی کے ذمہ دار ہیں۔

---

## <a id="roadmap"></a>روڈ میپ

ابھی بھی منصوبہ بند — تقریباً ترجیحی ترتیب سے:

| خصوصیت | تفصیل |
| --- | --- |
| **پلے لسٹ اور چینل فلٹرز** | پلے لسٹ یا چینل enumerate کرتے وقت date-range filters |
| **YouTube آڈیو ٹریک ترجیحات** | جب YouTube متعدد آڈیو ٹریک دے تو پوری app کے لیے بولی جانے والی زبان کا audio track preference مقرر کریں، اور ہر profile میں override کریں |
| **مضبوط retry recovery** | غیر معتبر یا مسئلہ پیدا کرنے والے internet connection سے رکی ہوئی ڈاؤن لوڈز کے لیے نیا retry راستہ |
| **مکمل download manager drawer** | queue drawer کو زیادہ مکمل manager میں بدلنا، queued items کے لیے destination folder تبدیل کرنے سمیت |
| **شیڈیولڈ ڈاؤن لوڈز** | مقررہ وقت پر قطار شروع کریں (رات بھر کے رنز) |
| **کلپ ٹرمنگ** | شروع/اختتام کے وقت سے صرف ایک سیگمنٹ ڈاؤن لوڈ کریں |
| **AUR پیکج** | `yay -S plinth-bin` کے ذریعے Arch Linux اور Omarchy پر انسٹال کریں |

ذہن میں کوئی فیچر ہے؟ [ایک درخواست کھولیں](../../issues) — کمیونٹی کی رائے ترجیح کو تشکیل دیتی ہے۔

---

## <a id="support"></a>Plinth کی معاونت کریں

Plinth مفت اور MIT لائسنس یافتہ ہے — نہ اشتہارات، نہ کوئی ادائیگی والا ورژن۔ اگر یہ آپ کا وقت بچاتا ہے تو آپ اس کی ترقی میں Bitcoin یا Tron کے ذریعے تعاون کر سکتے ہیں: پتے [DONATE.md](../../docs/DONATE.md) میں درج ہیں، جو ان کا واحد سرکاری ذریعہ ہے۔ Plinth آپ کو کبھی ای میل یا ڈائریکٹ میسج کے ذریعے پتہ نہیں بھیجے گا۔ ریپو کو ستارہ دینا، خامیوں کی اطلاع دینا اور تراجم بہتر بنانا بھی اتنی ہی مدد کرتا ہے۔

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>ان چیزوں سے بنایا گیا

<details>
<summary><strong>Stack</strong></summary>

- **Electron** — کراس پلیٹ فارم ڈیسک ٹاپ شیل
- **React 19** + **TypeScript** — UI
- **Tailwind CSS v4** — اسٹائلنگ
- **Zustand** — اسٹیٹ مینجمنٹ
- **yt-dlp** + **ffmpeg** — ڈاؤن لوڈ اور مکس انجن (yt-dlp runtime پر حاصل ہوتا ہے؛ ffmpeg/ffprobe build time پر بنڈل ہوتے ہیں)
- **Vite** + **electron-vite** — بلڈ ٹولنگ
- **Vitest** + **Playwright** — یونٹ اور اینڈ ٹو اینڈ ٹیسٹ

</details>

<details>
<summary><strong>سورس سے بلڈ کریں</strong></summary>

### تمام پلیٹ فارمز کے لیے ضروریات

| ٹول    | ورژن | انسٹال |
| ------- | ------- | ------- |
| Git     | کوئی بھی | [git-scm.com](https://git-scm.com) |
| Node.js | 24.21.0 | `mise install` یا `.node-version` |
| Bun     | 1.4.2  | `mise install` یا `package.json` `packageManager` |

تجویز کردہ: `mise` انسٹال کریں، پھر checkout میں `mise install` چلائیں۔ mise کے بغیر، `bun run bootstrap` سے پہلے `.node-version` سے Node.js اور `package.json` سے Bun کو دستی طور پر فعال کریں۔

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

نیٹو rebuilds کے لیے Visual Studio Build Tools اور Python درکار ہو سکتے ہیں۔

### macOS

```bash
brew install mise
xcode-select --install
```

کلون کرنے کے بعد checkout میں `mise trust && mise install` چلائیں۔ اگر آپ کا shell پہلے ہی `fnm`، `nvm`، یا Homebrew Bun استعمال کرتا ہے، تو `~/.zshrc` میں mise فعال کریں تاکہ Plinth کو Node.js 24.21.0 اور Bun 1.4.2 ملیں:

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

# build اور Electron رن ٹائم ڈپینڈنسیز
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# صرف E2E ٹیسٹ کے لیے (Electron کو ڈسپلے درکار ہوتا ہے)
sudo apt install -y xvfb
```

### کلون اور رن کریں

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # تجویز کردہ؛ اگر pinned tools دستی طور پر فعال ہیں تو چھوڑ دیں
bun run bootstrap
bun run doctor
bun run dev            # Vite renderer کے ساتھ Electron app
```

### تقسیم کے قابل بلڈ بنائیں

```bash
bun run build        # ٹائپ چیک + کمپائل
bun run dist         # موجودہ OS کے لیے پیکج
bun run dist:win     # supported host پر Windows targets پیکج کریں
```

> `bun run bootstrap` dependencies انسٹال کرتا ہے، Electron app dependencies کو rebuild کرتا ہے، Electron کی تصدیق کرتا ہے، development کے لیے embedded ffmpeg/ffprobe تیار کرتا ہے، اور Playwright Chromium انسٹال کرتا ہے۔ yt-dlp runtime پر app data folder میں manage ہوتا ہے؛ ffmpeg اور ffprobe ہر Plinth release کے ساتھ bundled ہوتے ہیں۔

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

## استعمال کی شرائط

Plinth صرف ذاتی، نجی استعمال کے لیے ایک ٹول ہے۔ آپ اس بات کو یقینی بنانے کے واحد ذمہ دار ہیں کہ آپ کے ڈاؤن لوڈز YouTube کی [Terms of Service](https://www.youtube.com/t/terms) اور آپ کے دائرہ اختیار کے کاپی رائٹ قوانین کی پابندی کرتے ہیں۔ Plinth کو ایسے مواد کو ڈاؤن لوڈ، دوبارہ تیار یا تقسیم کرنے کے لیے استعمال نہ کریں جس کے استعمال کا حق آپ کے پاس نہیں ہے۔ ڈویلپرز کسی بھی غلط استعمال کے ذمہ دار نہیں ہیں۔

MIT لائسنس · <a href="https://github.com/fabwaseem">Waseem Anjum</a> کی جانب سے محبت سے بنایا گیا

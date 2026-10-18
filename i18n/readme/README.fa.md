<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — دانلودر رایگان و متن‌باز YouTube (و بیش از ۲۰۰۰ سایت) برای Windows، macOS و Linux

ویدیو، Shorts، موسیقی، کانال، پادکست یا قطعهٔ صوتی را از **YouTube و بیش از ۲۰۰۰ سایت پشتیبانی‌شده** دانلود کنید — تا کیفیت 4K HDR با ۶۰ فریم بر ثانیه، یا به‌صورت MP3 / AAC / Opus. برنامه روی Windows، macOS و Linux به‌صورت محلی اجرا می‌شود. **بدون تبلیغ، بدون امکانات اضافی بی‌فایده و بدون فروش اجباری.**

Plinth is a fork of [Arroxy](https://github.com/antonio-orionus/Arroxy) by Antonio Orionus, MIT licensed.

### What Plinth changes

- Published as Plinth by Waseem Anjum, with its own site ([plinth.fabwaseem.com](https://plinth.fabwaseem.com)) and its own Scoop and Homebrew packages.

**مطالعه به زبان:** [Afaan Oromoo](README.om.md) · [Bahasa Indonesia](README.id.md) · [Deutsch](README.de.md) · [English](../../README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Tiếng Việt](README.vi.md) · [Türkçe](README.tr.md) · [አማርኛ](README.am.md) · [العربية](README.ar.md) · [اردو](README.ur.md) · [پښتو](README.ps.md) · **فارسی** · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · [ไทย](README.th.md) · [မြန်မာဘာသာ](README.my.md) · [Ελληνικά](README.el.md) · [Русский](README.ru.md) · [Српски](README.sr.md) · [Українська](README.uk.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ نصب آخرین نسخه**](#install) · [**وب‌سایت**](https://plinth.fabwaseem.com) · [نخستین اجرا در Windows](#windows-first-launch) · [نخستین اجرا در macOS](#macos-first-launch) · [نخستین اجرا در Linux](#linux-first-launch)

اگر Plinth در وقت شما صرفه‌جویی می‌کند، یک ⭐ کمک می‌کند دیگران هم آن را پیدا کنند.

_Last updated: 2026-10-18._

> 🌐 این ترجمه با کمک هوش مصنوعی تهیه شده است. [README انگلیسی](README.md) منبع معتبر است. خطایی پیدا کردید؟ [یک PR باز کنید](../../pulls).

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download. `winget install WaseemAnjum.Plinth` is coming soon.

---

## فهرست

- [قابلیت‌ها](#features)
- [نصب و نخستین اجرا](#install)
- [چرا Plinth](#why)
- [حریم خصوصی](#privacy)
- [پرسش‌های متداول](#faq)
- [نقشهٔ راه](#roadmap)
- [پشتیبانی از Plinth](#support)
- [فناوری‌های به‌کاررفته](#tech)

---

## <a id="features"></a>قابلیت‌ها

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>صفحهٔ دانلود سریع</b><br/>نشانی را بچسبانید و فوراً با نمایهٔ فعال دانلود کنید

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>YouTube را داخل Plinth مرور کنید و صفحهٔ فعلی را با نمایهٔ فعالتان دانلود کنید

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>حالت نشانی‌های گروهی</b><br/>فهرستی را بچسبانید، موارد تکراری را خودکار حذف و همه را به صف اضافه کنید

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>صف دانلود موازی</b><br/>چند دانلود هم‌زمان با پیشرفت زنده

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>نمایه‌های دانلود قابل استفادهٔ دوباره</b><br/>قالب، کیفیت و مقصد را ذخیره و در هر دانلود استفاده کنید

### Explore: مرور YouTube داخل Plinth

- **زبانهٔ Explore** — YouTube را داخل Plinth مرور کنید و هرچه پیدا کردید بدون کپی‌کردن پیوند دانلود کنید. **دانلود · *نمایهٔ شما*** ویدیو، فهرست پخش یا کانالی را که می‌بینید در صف می‌گذارد؛ پیکان کنارش نمایه را عوض می‌کند و چوب جادو دانلود مرحله‌به‌مرحله را برای انتخاب قالب‌ها، زیرنویس و موارد دیگر باز می‌کند
- **نوار نشانی** — برای جست‌وجو در YouTube تایپ کنید یا پیوند YouTube را بچسبانید. Explore فقط YouTube را مرور می‌کند، پس پیوند سایت دیگر آنجا باز نمی‌شود، اما با یک کلیک می‌توانید آن را دانلود کنید
- **دانلودهایی که حساب لازم دارند** — یک بار در Explore وارد شوید تا Plinth بتواند ویدیوهای خصوصی و ویژهٔ اعضا را که حسابتان می‌تواند ببیند، ویدیوهای دارای محدودیت سنی (اگر سن حساب تأیید شده باشد) و فهرست‌های «تماشا در آینده» و «پسندیده‌ها» را دانلود کند. Plinth همچنان بدون ورود دانلود می‌کند و ورود شما در Explore را فقط وقتی به کار می‌برد که دانلودی به شکلی شکست بخورد که حساب بتواند آن را رفع کند. وقتی YouTube می‌خواهد تأیید کنید ربات نیستید، Plinth ورود شما در Explore را هم امتحان می‌کند
- **از حساب ثانویه استفاده کنید** — صفحهٔ اول Explore دلیلش را توضیح می‌دهد: دانلود با حساب کمی خطر محدود شدن آن حساب را دارد. هر زمان خواستید ورود را فراموش کند، از Explore در تنظیمات خارج شوید
- **مسدودکنندهٔ تبلیغات** — Explore تبلیغات و ردیاب‌ها را در صفحه‌های خودش مسدود می‌کند؛ دانلودها تأثیری نمی‌گیرند. به‌طور پیش‌فرض روشن است، یک کلیک روی سپر در نوار ابزار Explore آن را خاموش می‌کند و هرگز روی صفحه‌های ورود Google عمل نمی‌کند. YouTube ممکن است برای حساب‌های واردشده در برابر مسدودکننده‌های تبلیغات مقاومت کند

### کیفیت و قالب‌ها

- تا **4K UHD (2160p)**، همچنین 1440p، 1080p، 720p، 480p و 360p
- **نرخ فریم بالا** بدون تغییر حفظ می‌شود — 60 fps، 120 fps و HDR
- **صدا** — فقط صدا را به MP3، M4A/AAC، Opus یا WAV تبدیل کنید. در دانلود تعاملی، اگر موجود باشد قطعهٔ فراگیر/Dolby اصلی منبع (AC-3، E-AC-3، 5.1، DRC) را انتخاب کنید یا گزینهٔ سراسری **اولویت با صدای فراگیر / Dolby** را تنظیم کنید
- تنظیم‌های سریع: *بهترین کیفیت* · *متعادل* · *فایل کم‌حجم*

### روند کار

- **میان‌بر سراسری دانلود** — در هر برنامه‌ای پیوندی را کپی کنید و `Ctrl+Shift+D` (در macOS، `Cmd+Shift+D`) را بزنید؛ Plinth بدون بازکردن پنجره آن را با نمایهٔ فعال به صف می‌فرستد و یک اعلان تأیید می‌کند. به‌طور پیش‌فرض فعال و قابل تغییر است
- **روش‌های شروع انعطاف‌پذیر** — دانلود تکی راهنما‌دار، انتخابگر فهرست پخش/کانال، چسباندن گروهی نشانی‌ها، دانلود سریع با پیش‌فرض‌های ذخیره‌شده، یا مرور و دانلود از Explore را انتخاب کنید
- **صف مرکزی دانلود** — کارهای تکی، فهرست پخش، گروهی و سریع همگی برای نمایش پیشرفت، مکث، ادامه، لغو، تلاش دوباره و تنظیم اولویت در یک جا قرار می‌گیرند
- **پایش کلیپ‌بورد** — پیوند YouTube را کپی کنید تا هنگام بازگشت به برنامه، Plinth نشانی را خودکار وارد کند (قابل تنظیم در تنظیمات پیشرفته)
- **پاک‌سازی خودکار نشانی‌ها** — پارامترهای رهگیری (`si`، `pp`، `utm_*`، `fbclid`، `gclid`) را حذف می‌کند و پیوندهای `youtube.com/redirect` را باز می‌کند
- **حالت سینی سیستم** — با بستن پنجره، دانلودها در پس‌زمینه ادامه می‌یابند
- **30 زبان** — زبان سیستم را خودکار تشخیص می‌دهد و هر زمان قابل تغییر است
- **همگام‌سازی فهرست پخش** — فهرست را دوباره با یک پوشهٔ محلی مقایسه می‌کند تا ویدیوهای دانلودشده رد شوند؛ فایل فهرست پخش `.m3u` می‌سازد که پس از هر دانلود به‌روز می‌شود
- **کنترل سرعت و فاصلهٔ درخواست‌ها** — پهنای باند را محدود کنید، شمار بخش‌های هم‌زمان هر ویدیو را تعیین کنید و با حالت‌های *خاموش · متعادل · محتاط · سفارشی* بین درخواست‌ها تأخیر بگذارید
- **الگوهای نام فایل** — با `{title}`، `{uploader}`، `{id}`، `{date}`، `{resolution}` و `{playlist_index}` نام دلخواه بسازید؛ سراسری یا برای هر نمایه
- **دانلود هم‌زمان و تلاش خودکار دوباره** — شمار دانلودهای هم‌زمان را تعیین کنید و بگذارید Plinth دانلودی را که با مشکل شبکه یا سرور روبه‌رو شده، با فاصلهٔ بیشتر در هر نوبت دوباره امتحان کند
- **نمایهٔ جدا برای هر مورد فهرست پخش** — به‌جای یک تنظیم برای همه، به هر ویدیو نمایهٔ خودش را بدهید تا برخی با کیفیت کامل بایگانی شوند و بقیه به MP3 تبدیل شوند
- **دانلود سریع در پس‌زمینه کار می‌کند** — پیوند بلافاصله در دانلودها ظاهر می‌شود و همان‌جا آماده می‌شود، یادداشتی با **نمایش** آن را تأیید می‌کند و کادر نشانی برای پیوند بعدی خالی می‌شود. هرقدر خواستید شروع کنید تا قبلی‌ها آماده شوند
- **دانلودها نشان می‌دهند چه چیزی به شما نیاز دارد** — اگر Plinth نتواند پیوندی را بخواند، ردیف آن دلیل را می‌گوید و راه‌حل را پیشنهاد می‌دهد: تلاش دوباره، روشن‌کردن کوکی‌ها یا ورود در Explore. با کوکی‌های خاموش، **ورود با Explore** پس از ورود شما دوباره آن را امتحان می‌کند. فهرست پخشی بلندتر از حد بارگذاری شما در ردیف خودش منتظر می‌ماند تا همه، چند مورد اول یا بازبینی را انتخاب کنید. زبانهٔ دانلودها ردیف‌های منتظر شما را می‌شمارد

### زیرنویس و پس‌پردازش

- **زیرنویس** در قالب SRT، VTT یا ASS — دستی یا خودکار و به هر زبان موجود
- کنار ویدیو ذخیره کنید، در `.mkv` بگنجانید یا در زیرپوشهٔ `Subtitles/` مرتب کنید
- **SponsorBlock** — بخش‌های تبلیغ، مقدمه، پایان و تبلیغ شخصی را رد کنید یا به‌صورت فصل علامت بزنید
- **فرادادهٔ جاسازی‌شده** — عنوان، تاریخ بارگذاری، کانال، توضیح، تصویر بندانگشتی و نشانگر فصل در فایل نوشته می‌شوند
- **دسته‌های فقط زیرنویس** — فهرستی از نشانی‌ها را بچسبانید یا یک فهرست پخش را باز کنید، زیرنویس را انتخاب کنید و برای هر ویدیو فقط فایل‌های زیرنویس را بگیرید

### YouTube + ۲۰۰۰ سایت

- **پشتیبانی کامل YouTube** — ویدیوها، Shorts، کانال‌ها، فهرست‌های پخش، YouTube Music و پادکست‌ها منابع درجه‌یک هستند
- **بیش از ۲۰۰۰ سایت دیگر** با yt-dlp — Vimeo، Twitch، Twitter/X، TikTok، SoundCloud، Bandcamp، Bilibili، BBC iPlayer، archive.org و بسیاری دیگر
- **فقط صدا و زیرنویس** در همهٔ سایت‌های پشتیبانی‌شده کار می‌کند، نه فقط YouTube
- اگر سایتی تغییر کند، yt-dlp هر هفته اصلاحیه می‌دهد و Plinth فایل اجرایی را هنگام شروع خودکار به‌روز می‌کند

### حریم خصوصی و کنترل

- پردازش ۱۰۰٪ محلی — دانلود مستقیماً از YouTube روی دیسک شما می‌رود
- **متن‌باز** — همهٔ خطوط قابل بررسی، با مجوز MIT
- فایل‌ها مستقیماً در پوشهٔ انتخابی شما ذخیره می‌شوند

---

## <a id="install"></a>نصب و نخستین اجرا

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

ساخت‌ها فقط برای x86_64 هستند. `curl` ندارید؟ `curl -fsSL` را با `wget -qO-` جایگزین کنید.

| پلتفرم | دانلود مستقیم |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**همهٔ فایل‌های انتشار ←**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>نخستین اجرا در Windows

در نخستین اجرا ممکن است پیام **"Windows protected your PC"** یا **"Unknown publisher"** را ببینید. این موضوع برای هر دو فایل `Plinth-win-x64-Setup.exe` و `Plinth-win-x64-Portable.exe` صدق می‌کند. Plinth رایگان و متن‌باز است، اما ساخت‌های Windows با گواهی پولی امضا نشده‌اند و SmartScreen به همین دلیل هشدار می‌دهد. این هشدار لزوماً به معنی ناامن‌بودن Plinth **نیست**. برای ادامه:

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="پنجرهٔ SmartScreen با پیام Windows protected your PC و پیوند More info مشخص‌شده" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="پنجرهٔ بازشدهٔ SmartScreen با دکمهٔ Run anyway" />

1. روی **More info** کلیک کنید.
2. روی **Run anyway** کلیک کنید.

#### اگر Windows Defender فایل را علامت زد یا حذف کرد

روش‌های اکتشافی Defender گاهی نصاب NSIS و نسخهٔ همراه Electron بدون امضا را مشکوک می‌دانند. اگر `Plinth-win-x64-Setup.exe` یا `Plinth-win-x64-Portable.exe` قرنطینه شد، آن را از **Windows Security → Virus & threat protection → Protection history** بازیابی کنید و سپس فایل اجرایی Plinth را در **Manage settings → Add or remove exclusions** به موارد مجاز بیفزایید. مانند SmartScreen، علت نبود امضای ناشر است، نه شناسایی بدافزار.

> Plinth را فقط از صفحهٔ رسمی GitHub Releases دانلود کنید. اگر فایل را از سایت دیگری گرفته‌اید یا کسی برایتان فرستاده است، آن را حذف کنید و نسخه‌ای تازه از منبع رسمی بگیرید. کد منبع عمومی است؛ می‌توانید آن را بررسی کنید یا خودتان Plinth را بسازید.

Scoop را ترجیح می‌دهید؟ `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>نخستین اجرا در macOS

ساخت‌های macOS در Plinth امضای ad-hoc دارند اما Apple آن‌ها را notarize نکرده است؛ بنابراین Gatekeeper نخستین اجرا را با پیام *"Plinth.app" Not Opened — Apple could not verify "Plinth.app" is free of malware* مسدود می‌کند. یعنی macOS نمی‌تواند برنامه را نزد Apple بررسی کند، نه اینکه فایل مشکلی دارد. نصب با Homebrew این پنجره را نشان نمی‌دهد. اگر DMG را نصب کرده‌اید، یک فرمان ترمینال کافی است:

1. `Plinth.app` را از DMG بازشده به `/Applications` بکشید.
2. Terminal را باز و این دو فرمان را اجرا کنید:

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
open /Applications/Plinth.app
```

فرمان نخست ویژگی قرنطینه‌ای را که macOS هنگام دانلود افزوده پاک می‌کند و فرمان دوم برنامه را اجرا می‌کند. معمولاً `sudo` لازم نیست، چون نسخهٔ `/Applications` متعلق به شماست؛ فقط در صورت خطای دسترسی آن را اضافه کنید.

**Apple Silicon یا Intel:** در Macهای سری M (M1 / M2 / M3 / M4) فایل DMG با `arm64` را بگیرید. در Macهای Intel، نسخهٔ `x64` را دانلود کنید. ساخت اشتباه با Rosetta هم اجرا می‌شود، اما به‌وضوح کندتر است.

> ساخت‌های macOS در CI روی اجراکننده‌های Apple Silicon و Intel تولید می‌شوند. اگر مشکلی دیدید، [گزارش باز کنید](../../issues)؛ بازخورد کاربران macOS مستقیماً چرخهٔ آزمون را شکل می‌دهد.

### <a id="why-warning"></a>چرا ممکن است هشدار ببینید

Plinth متن‌باز و دارای مجوز MIT است. ساخت‌های Windows و macOS **امضای کد ندارند**؛ گواهی‌های Apple Developer ID و امضای Windows EV هرکدام سالانه صدها دلار هزینه دارند که باید از جیب یک پروژهٔ مستقل پرداخت شود. بدون این امضاها، Windows SmartScreen و macOS Gatekeeper در نخستین اجرا هشدار می‌دهند. هشدار یعنی *سیستم‌عامل ناشر را نمی‌شناسد*، نه اینکه Plinth بدافزار است.

سه روش برای بررسی Plinth، از ساده تا دقیق:

- **کد منبع را بخوانید.** همهٔ خطوط در [GitHub](https://github.com/fabwaseem/plinth) هستند و می‌توانید برنامه را [از منبع بسازید](#tech).
- **SHA256 را بررسی کنید.** فایل را با [`SHA256SUMS`](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) منتشرشده تطبیق دهید؛ بخش [بررسی دانلود](#verify) را ببینید.
- **از اسکن بیرونی استفاده کنید.** فایل را در [VirusTotal](https://www.virustotal.com) بارگذاری کنید.

### <a id="linux-first-launch"></a>نخستین اجرا در Linux

AppImage بدون نصب مستقیماً اجرا می‌شود. فقط باید فایل را اجرایی کنید.

**مدیر فایل:** روی `.AppImage` راست‌کلیک کنید ← **Properties** ← **Permissions** ← گزینهٔ **Allow executing file as program** را فعال و سپس دوبار کلیک کنید.

**ترمینال:**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

اگر باز هم اجرا نشد، آن را بدون mount اجرا کنید؛ بستهٔ FUSE لازم نیست:

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**یکپارچه‌سازی اختیاری با دسکتاپ:** [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) را یک بار نصب کنید تا هر AppImage که دوبار کلیک می‌کنید، بدون ساخت دستی فایل `.desktop` در منوی برنامه‌ها ثبت شود.

**بستهٔ tar ساده (بدون FUSE و نصب):**

ساخت `.tar.gz` همان برنامه بدون پوشش AppImage است؛ هرجا خواستید استخراج و اجرا کنید. نصاب یا FUSE لازم نیست.

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**دانلودهای Linux در صفحهٔ انتشار فقط برای x86_64 هستند.** روی دستگاه ARM64 (مانند Raspberry Pi و Asahi Linux)، Flatpak نصب می‌شود اما هنگام اجرا خطای `bwrap: execvp ldconfig: Exec format error` می‌دهد.

<details>
<summary><strong><a id="verify"></a>بررسی دانلود (SHA256)</strong></summary>

هر انتشار فایل `SHA256SUMS` را کنار فایل‌های اجرایی منتشر می‌کند. برای اطمینان از خراب یا دست‌کاری‌نشدن فایل در انتقال، hash را روی دستگاه محاسبه و با سطر متناظر در `SHA256SUMS` مقایسه کنید. صفحهٔ آخرین انتشار را باز کنید ← **Assets** ← `SHA256SUMS` را بگیرید.

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

اسکن مستقل بدافزار می‌خواهید؟ فایل را در [VirusTotal](https://www.virustotal.com) بارگذاری کنید. چند هشدار اکتشافی عمومی از موتورهای کوچک برای برنامه‌های Electron بدون امضا عادی است؛ هشدار گسترده از موتورهای اصلی واقعاً نگران‌کننده خواهد بود.

</details>

<details>
<summary><strong>Windows: نصاب یا نسخهٔ همراه</strong></summary>

| | نصاب NSIS | `.exe` همراه |
| --- | --- | --- |
| نیازمند نصب | بله | خیر — از هرجا اجرا کنید |
| به‌روزرسانی خودکار | ✅ درون برنامه | ❌ دانلود دستی |
| سرعت شروع | ✅ سریع‌تر | ⚠️ شروع سرد کندتر |
| افزودن به منوی Start | Yes | No |
| حذف آسان | Yes | ❌ فایل را پاک کنید |

**پیشنهاد:** برای به‌روزرسانی خودکار و شروع سریع‌تر از نصاب NSIS استفاده کنید. اگر نصب و تغییر رجیستری نمی‌خواهید، نسخهٔ `.exe` همراه را بگیرید.

</details>

---

## <a id="why"></a>چرا Plinth

Plinth برای یک کار ساخته شده است: نشانی را بچسبانید و یک فایل محلی تمیز تحویل بگیرید. بدون فروش اضافی یا جمع‌آوری داده.

| | Plinth |
| --- | --- |
| رایگان، بدون سطح پولی | Yes |
| متن‌باز | Yes |
| پردازش فقط روی دستگاه | Yes |
| بدون محدودیت استفاده | Yes |
| برنامهٔ دسکتاپ چندسکویی | Yes |
| زیرنویس + SponsorBlock | Yes |

---

## <a id="privacy"></a>حریم خصوصی

دانلود با [yt-dlp](https://github.com/yt-dlp/yt-dlp) مستقیماً از YouTube به پوشهٔ انتخابی می‌رود و از سرور ثالث عبور نمی‌کند. سابقهٔ تماشا و دانلود، نشانی‌ها و محتوای فایل روی دستگاه شما می‌مانند.

Plinth از طریق [OpenPanel](https://openpanel.dev) داده‌های آماری ناشناس و تجمیعی می‌فرستد؛ فقط به اندازه‌ای که یک پروژهٔ مستقل خطاها، crashها، بازخورد، سیستم‌عامل و نسخهٔ برنامه را بشناسد. هیچ نشانی، عنوان ویدیو، مسیر فایل، اطلاعات حساب، fingerprint یا دادهٔ شخصی ارسال نمی‌شود. شناسهٔ هر نصب تصادفی و بی‌ارتباط با هویت شماست. می‌توانید در تنظیمات آن را خاموش کنید.

Explore ورود جداگانهٔ خودش را نگه می‌دارد، مستقل از مرورگر شما، و Plinth هرگز فرم ورود را نمی‌خواند و پر نمی‌کند — شما در صفحهٔ خود Google تایپ می‌کنید. دانلودها بدون ورود انجام می‌شوند؛ فقط وقتی دانلودی به شکلی شکست بخورد که حساب بتواند رفعش کند، Plinth ورود را تازه می‌خواند، برای همان دانلود در یک فایل موقت نگه می‌دارد و بعد فایل را حذف می‌کند. خروج از Explore در تنظیمات آن را فراموش می‌کند.

---

## <a id="faq"></a>پرسش‌های متداول

**واقعاً رایگان است؟**
بله — مجوز MIT، بدون سطح پولی یا قابلیت قفل‌شده.

**چه کیفیت‌هایی را می‌توانم دانلود کنم؟**
هرچه YouTube ارائه دهد: 4K UHD (2160p)، 1440p، 1080p، 720p، 480p، 360p و فقط صدا. جریان‌های 60 fps، 120 fps و HDR بدون تغییر حفظ می‌شوند.

**می‌توانم فقط صدا را به‌صورت MP3 بگیرم؟**
بله. در منوی قالب *فقط صدا* را انتخاب کنید و MP3، M4A/AAC، Opus یا WAV را برگزینید.

**ویدیوهایی را که حساب YouTube لازم دارند چطور دانلود کنم؟**
یک بار در زبانهٔ Explore وارد شوید. بعد از آن Plinth می‌تواند ویدیوهای خصوصی و ویژهٔ اعضا را که حسابتان می‌تواند ببیند، ویدیوهای دارای محدودیت سنی (اگر سن حساب تأیید شده باشد) و فهرست‌های «تماشا در آینده» و «پسندیده‌ها» را دانلود کند. فقط وقتی از این ورود استفاده می‌کند که دانلودی به شکلی شکست بخورد که حساب بتواند رفعش کند؛ بقیهٔ چیزها مثل قبل دانلود می‌شوند. این گزینهٔ **ورود Explore** است که در تنظیمات کوکی اول فهرست آمده و «پیشنهادی» علامت خورده، و Plinth اولین بار که Explore را باز می‌کنید خودش آن را انتخاب می‌کند. راهنمای yt-dlp یادآور می‌شود که [اتوماسیون با حساب واردشده ممکن است باعث علامت‌گذاری حساب Google شود](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies)؛ پس حساب ثانویه انتخاب امن‌تری است.

**وقتی YouTube چیزی را تغییر دهد باز هم کار می‌کند؟**
yt-dlp هنگام شروع خودکار به‌روز می‌شود و Plinth پس از تغییرات YouTube سریع اصلاحیه می‌دهد. وقتی YouTube می‌خواهد تأیید کنید ربات نیستید، Plinth در صورت ورود شما در Explore ورودتان را هم امتحان می‌کند و کوکی‌های فایل یا مرورگر در تنظیمات کوکی در دسترس‌اند.

**Plinth به چه زبان‌هایی در دسترس است؟**
30 زبان آمادهٔ استفاده: Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文. Plinth در نخستین اجرا زبان سیستم‌عامل را خودکار تشخیص می‌دهد و هر زمان می‌توانید آن را از انتخابگر زبان نوار ابزار عوض کنید. JSONهای زبان زمان اجرا در src/shared/i18n/locales/ و کاتالوگ‌های PO مترجمان در i18n/locales/ هستند؛ برای مشارکت در GitHub یک PR باز کنید.

**لازم است چیز دیگری نصب کنم؟**
خیر. yt-dlp در نخستین اجرا خودکار دانلود و روی دستگاه cache می‌شود؛ ffmpeg و ffprobe همراه برنامه هستند. پس از آن تنظیم اضافه‌ای لازم نیست.

**می‌توانم فهرست پخش یا یک کانال کامل را دانلود کنم؟**
بله، هر دو. نشانی فهرست یا کانال را بچسبانید (مانند `youtube.com/@handle`، `/channel/UC…`، `/c/Name`، `/user/Old`)، تعداد موارد بررسی را انتخاب کنید و سپس کل فهرست یا ویدیوهای مشخص را به صف بفرستید. فیلتر بازهٔ تاریخ به‌زودی می‌آید.

**macOS می‌گوید «برنامه آسیب‌دیده است»؛ چه کنم؟**
این Gatekeeper است که برنامهٔ بدون امضا را مسدود می‌کند، نه آسیب واقعی. فرمان‌های ترمینال برای پاک‌کردن قرنطینه و اجرای Plinth را در [نخستین اجرا در macOS](#macos-first-launch) ببینید.

**دانلود ویدیوهای YouTube قانونی است؟**
برای استفادهٔ شخصی و خصوصی در بیشتر حوزه‌های قضایی عموماً پذیرفته می‌شود. مسئولیت رعایت [شرایط استفاده](https://www.youtube.com/t/terms) YouTube و قوانین حق نشر محل زندگی با شماست.

---

## <a id="roadmap"></a>نقشهٔ راه

موارد برنامه‌ریزی‌شده، تقریباً به ترتیب اولویت:

| قابلیت | توضیح |
| --- | --- |
| **فیلتر فهرست پخش و کانال** | فیلتر بازهٔ تاریخ هنگام خواندن فهرست پخش یا کانال |
| **اولویت زبان قطعهٔ صوتی YouTube** | تعیین زبان گفتار ترجیحی برای کل برنامه با امکان تغییر در هر نمایه، وقتی YouTube چند قطعه دارد |
| **بازیابی قوی‌تر با تلاش دوباره** | مسیر تازه برای تکرار دانلودهایی که اینترنت ناپایدار یا مشکل‌دار قطع کرده است |
| **پنل کامل مدیریت دانلود** | تبدیل پنل صف به مدیر کامل‌تر، از جمله تغییر پوشهٔ مقصد موارد در صف |
| **دانلود زمان‌بندی‌شده** | شروع صف در زمان مشخص، مثلاً شب |
| **برش کلیپ** | دانلود فقط یک بخش با زمان آغاز و پایان |
| **بستهٔ AUR** | نصب روی Arch Linux و Omarchy با `yay -S plinth-bin` |

قابلیتی در ذهن دارید؟ [درخواست باز کنید](../../issues)؛ نظر انجمن اولویت‌ها را شکل می‌دهد.

---

## <a id="support"></a>پشتیبانی از Plinth

Plinth رایگان و دارای مجوز MIT است؛ بدون تبلیغ و سطح پولی. اگر در وقتتان صرفه‌جویی می‌کند، می‌توانید با Bitcoin یا Tron از توسعه پشتیبانی کنید. نشانی‌ها در [DONATE.md](../../docs/DONATE.md) هستند که تنها منبع رسمی است. Plinth هرگز نشانی را با ایمیل یا پیام مستقیم نمی‌فرستد. ستاره‌دادن به مخزن، گزارش خطا و بهبود ترجمه‌ها نیز به همان اندازه کمک می‌کند.

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>فناوری‌های به‌کاررفته

<details>
<summary><strong>فناوری‌ها</strong></summary>

- **Electron** — پوستهٔ دسکتاپ چندسکویی
- **React 19** + **TypeScript** — رابط کاربری
- **Tailwind CSS v4** — ظاهر برنامه
- **Zustand** — مدیریت وضعیت
- **yt-dlp** + **ffmpeg** — موتور دانلود و ترکیب جریان‌ها (yt-dlp هنگام اجرا دریافت می‌شود؛ ffmpeg/ffprobe هنگام ساخت در بسته قرار می‌گیرند)
- **Vite** + **electron-vite** — ابزار ساخت
- **Vitest** + **Playwright** — آزمون واحد و سرتاسری

</details>

<details>
<summary><strong>ساخت از کد منبع</strong></summary>

### پیش‌نیازها — همهٔ پلتفرم‌ها

| ابزار | نسخه | نصب |
| ----- | ----- | --- |
| Git | هر نسخه | [git-scm.com](https://git-scm.com) |
| Node.js | 24.21.0 | `mise install` یا `.node-version` |
| Bun | 1.4.2 | `mise install` یا `package.json` و `packageManager` |

پیشنهاد می‌شود `mise` را نصب کنید و سپس در checkout فرمان `mise install` را اجرا کنید. بدون mise، پیش از `bun run bootstrap` نسخهٔ Node.js را از `.node-version` و Bun را از `package.json` به‌صورت دستی فعال کنید.

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

برای بازسازی وابستگی‌های native ممکن است Visual Studio Build Tools و Python لازم باشند.

### macOS

```bash
brew install mise
xcode-select --install
```

پس از clone، در checkout فرمان `mise trust && mise install` را اجرا کنید. اگر shell شما از قبل `fnm`، `nvm` یا Bun نصب‌شده با Homebrew را به کار می‌برد، mise را در `~/.zshrc` فعال کنید تا Plinth از Node.js 24.21.0 و Bun 1.4.2 استفاده کند:

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

# وابستگی‌های ساخت و اجرای Electron
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# فقط آزمون‌های E2E (Electron به نمایشگر نیاز دارد)
sudo apt install -y xvfb
```

### clone و اجرا

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # پیشنهاد می‌شود؛ اگر نسخه‌های ثابت را دستی فعال کرده‌اید، رد کنید
bun run bootstrap
bun run doctor
bun run dev            # برنامهٔ Electron با renderer مبتنی بر Vite
```

### ساخت بستهٔ قابل توزیع

```bash
bun run build        # بررسی type + ساخت
bun run dist         # بستهٔ سیستم‌عامل فعلی
bun run dist:win     # ساخت هدف‌های Windows روی میزبان پشتیبانی‌شده
```

> `bun run bootstrap` وابستگی‌ها را نصب می‌کند، وابستگی‌های برنامهٔ Electron را بازسازی و خود Electron را بررسی می‌کند، ffmpeg/ffprobe داخلی را برای توسعه آماده و Playwright Chromium را نصب می‌کند. yt-dlp هنگام اجرا در پوشهٔ دادهٔ برنامه مدیریت می‌شود؛ ffmpeg و ffprobe همراه هر انتشار Plinth هستند.

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

## شرایط استفاده

Plinth ابزاری فقط برای استفادهٔ شخصی و خصوصی است. مسئولیت اطمینان از سازگاری دانلودها با [شرایط استفاده](https://www.youtube.com/t/terms) YouTube و قوانین حق نشر حوزهٔ قضایی شما فقط بر عهدهٔ خودتان است. Plinth را برای دانلود، تکثیر یا توزیع محتوایی که حق استفاده از آن را ندارید به کار نبرید. توسعه‌دهندگان مسئول سوءاستفاده نیستند.

مجوز MIT · ساخته‌شده با دقت توسط <a href="https://github.com/fabwaseem">Waseem Anjum</a>

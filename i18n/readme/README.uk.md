<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — безкоштовний завантажувач YouTube (+ 2000 сайтів) із відкритим кодом для Windows, macOS та Linux

Завантажуйте відео, Shorts, музику, канали, подкасти або аудіодоріжки з **YouTube та 2000+ підтримуваних сайтів** — до 4K HDR при 60 fps або у форматі MP3 / AAC / Opus. Працює локально на Windows, macOS та Linux. **Без реклами, без зайвого, без апселів.**

**Мова:** [Afaan Oromoo](README.om.md) · [Bahasa Indonesia](README.id.md) · [Deutsch](README.de.md) · [English](../../README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Tiếng Việt](README.vi.md) · [Türkçe](README.tr.md) · [አማርኛ](README.am.md) · [العربية](README.ar.md) · [اردو](README.ur.md) · [پښتو](README.ps.md) · [فارسی](README.fa.md) · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · [ไทย](README.th.md) · [မြန်မာဘာသာ](README.my.md) · [Ελληνικά](README.el.md) · [Русский](README.ru.md) · [Српски](README.sr.md) · **Українська** · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ Завантажити останній реліз**](#install) · [**Сайт**](https://plinth.fabwaseem.com) · [Windows: перший запуск](#windows-first-launch) · [macOS: перший запуск](#macos-first-launch) · [Linux: перший запуск](#linux-first-launch)

Якщо Plinth економить ваш час, ⭐ допомагає іншим його знайти.

_Last updated: 2026-10-17._

> 🌐 Це переклад за допомогою ШІ. [README англійською](README.md) — основне джерело істини. Помітили помилку? [PR вітаються](../../pulls).

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Winget](https://winget.run/pkg/WaseemAnjum/Plinth), [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download.

---

## Зміст

- [Можливості](#features)
- [Встановлення та перший запуск](#install)
- [Чому Plinth](#why)
- [Конфіденційність](#privacy)
- [Часті запитання](#faq)
- [Дорожня карта](#roadmap)
- [Підтримати Plinth](#support)
- [Технології](#tech)

---

## <a id="features"></a>Можливості

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>Головна швидкого завантаження</b><br/>Вставте URL і одразу завантажте з активним профілем

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>Переглядайте YouTube просто в Plinth і завантажуйте поточну сторінку з активним профілем

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>Режим масових URL</b><br/>Вставте список, авто-вилучення дублікатів, поставте все в чергу одразу

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>Паралельна черга завантажень</b><br/>Кілька завантажень одночасно з живим прогресом

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>Багаторазові профілі завантаження</b><br/>Зберігайте формат, якість і вивід як пресети — використовуйте для кожного завантаження

### Explore: перегляд YouTube просто в Plinth

- **Вкладка Explore** — переглядайте YouTube просто в Plinth і завантажуйте знайдене без копіювання посилань. **Завантажити · *ваш профіль*** додає в чергу відео, плейлист або канал, який ви зараз дивитеся; стрілка поруч перемикає профілі, а чарівна паличка відкриває покрокове завантаження для вибору форматів, субтитрів тощо
- **Адресний рядок** — введіть запит, щоб шукати на YouTube, або вставте посилання на YouTube. Explore відкриває лише YouTube, тож посилання з іншого сайту там не відкриється, але його можна завантажити одним кліком
- **Завантаження, що потребують акаунта** — увійдіть один раз в Explore, і Plinth зможе завантажувати приватні відео та відео лише для учасників, які доступні вашому акаунту, відео з віковим обмеженням (якщо акаунт підтверджено за віком), а також ваші списки «Дивитися пізніше» та «Вподобані». Plinth, як і раніше, завантажує без входу й використовує ваш вхід в Explore, лише коли завантаження зривається з причини, яку може вирішити акаунт. Коли YouTube просить підтвердити, що ви не бот, Plinth також пробує ваш вхід в Explore
- **Користуйтеся другим акаунтом** — перший екран Explore пояснює чому: завантаження через акаунт несе певний ризик обмеження цього акаунта. Вийти з Explore можна в Налаштуваннях будь-коли, щоб забути вхід
- **Блокувальник реклами** — Explore блокує рекламу й трекери на власних сторінках; на завантаження це не впливає. Увімкнено за замовчуванням, одним кліком по щиту на панелі інструментів Explore його можна вимкнути, і він ніколи не діє на сторінках входу Google. YouTube може опиратися блокувальникам реклами для акаунтів, у які виконано вхід

### Якість і формати

- До **4K UHD (2160p)**, 1440p, 1080p, 720p, 480p, 360p
- **Висока частота кадрів** збережена як є — 60 fps, 120 fps, HDR
- **Аудіо** — експорт лише аудіо в MP3, M4A/AAC, Opus або WAV. В інтерактивних завантаженнях вибирайте нативні surround/Dolby доріжки джерела (AC-3, E-AC-3, 5.1, DRC), коли вони доступні, або задайте глобальне значення за замовчуванням **Надавати перевагу surround / Dolby**
- Швидкі пресети: *Найкраща якість* · *Збалансовано* · *Малий файл*

### Робочий процес

- **Глобальна гаряча клавіша завантаження** — скопіюйте посилання в будь-якому застосунку й натисніть `Ctrl+Shift+D` (`Cmd+Shift+D` на macOS); Plinth додасть його до черги з вашим активним профілем, не відкриваючи вікно, а сповіщення це підтвердить. Увімкнено за замовчуванням, комбінацію можна змінити
- **Гнучкі режими старту** — оберіть покрокове одиночне завантаження, вибір плейлиста/каналу, масове вставлення URL, Quick Download зі збереженими стандартами або перегляд і завантаження з Explore
- **Центральна черга завантажень** — кожне single, playlist, bulk або quick завдання потрапляє в одне місце для прогресу, паузи, відновлення, скасування, повтору та керування пріоритетом
- **Моніторинг буфера обміну** — скопіюйте посилання YouTube, і Plinth автоматично заповнить поле URL при наступному переключенні на застосунок (вимикається в розширених налаштуваннях)
- **Автоочищення URL** — видаляє трекінгові параметри (`si`, `pp`, `utm_*`, `fbclid`, `gclid`) і розгортає посилання `youtube.com/redirect`
- **Режим трею** — закриття вікна залишає завантаження працювати у фоні
- **30 мов** — автоматично визначає локаль системи, можна перемкнути будь-коли
- **Синхронізація плейлиста** — повторно звіряє плейлист із локальною папкою, щоб пропускати вже завантажені відео; створює файл плейлиста `.m3u`, який оновлюється після кожного завантаженого відео
- **Керування швидкістю та pacing** — обмежуйте download bandwidth, задавайте, скільки частин відео завантажується одночасно, і додавайте затримки між запитами з пресетами (*Вимк · Збалансовано · Обережно · Власний*)
- **Шаблони імен файлів** — називайте завантаження на свій смак за допомогою `{title}`, `{uploader}`, `{id}`, `{date}`, `{resolution}` та `{playlist_index}`, глобально або для кожного профілю завантаження
- **Завантажень одночасно та автоповтор** — обирайте, скільки завантажень із черги йде одночасно, і дозвольте Plinth повторити завантаження після збою мережі або сервера, збільшуючи паузу перед кожною спробою
- **Профілі для кожного відео плейлиста** — призначайте кожному відео в плейлисті власний профіль завантаження замість одного налаштування для всього списку, щоб за один прохід частину відео зберегти в повній якості, а решту — як MP3
- **Quick Download працює у фоні** — посилання одразу з’являється в Завантаженнях і готується там, примітка з кнопкою **Переглянути** підтверджує це, а поле URL очищується для наступного посилання. Запускайте скільки завгодно, поки попередні готуються
- **Завантаження підказують, що чекає на вас** — якщо Plinth не може прочитати посилання, його рядок пояснює причину й пропонує рішення: «Повторити», увімкнути cookies або увійти в Explore. Коли cookies вимкнено, **Увійти через Explore** повторить спробу за вас після входу. Плейлист довший за ваш ліміт завантаження чекає у своєму рядку, доки ви оберете весь плейлист, перші елементи або перегляд. Вкладка «Завантаження» показує кількість рядків, що чекають на вас

### Субтитри та постобробка

- **Субтитри** у SRT, VTT або ASS — ручні або авто-згенеровані, будь-якою доступною мовою
- Зберігайте поруч із відео, вбудовуйте в `.mkv` або складайте в підпапку `Subtitles/`
- **SponsorBlock** — пропускайте або позначайте розділами спонсорські вставки, вступи, кінцівки, самопіар
- **Вбудовані метадані** — назва, дата завантаження, канал, опис, мініатюра та маркери розділів записуються у файл
- **Пакети лише із субтитрами** — вставте список посилань або відкрийте плейлист, виберіть «Субтитри» й отримайте для кожного відео лише файли субтитрів

### YouTube + 2000 сайтів

- **YouTube — у повному обсязі** — відео, Shorts, канали, плейлисти, YouTube Music і подкасти обробляються як першокласні джерела
- **2000+ інших сайтів** через yt-dlp — Vimeo, Twitch, Twitter/X, TikTok, SoundCloud, Bandcamp, Bilibili, BBC iPlayer, archive.org та багато іншого
- **Лише аудіо та субтитри** працюють на кожному підтримуваному сайті, а не лише на YouTube
- Якщо сайт змінюється, yt-dlp щотижня випускає виправлення, а Plinth оновлює бінарний файл при запуску

### Конфіденційність і контроль

- 100% локальна обробка — завантаження потрапляють прямо з YouTube на ваш диск
- Без логіну, без кук, без прив'язки акаунта Google
- Файли зберігаються прямо у вибрану вами теку

---

## <a id="install"></a>Встановлення та перший запуск

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

Збірки лише x86_64. Немає `curl`? Замініть `curl -fsSL` на `wget -qO-`.

| Платформа | Формат |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**Завантажити останній реліз →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>Windows: перший запуск

При першому запуску ви можете побачити **«Windows protected your PC»** або **«Unknown publisher»**. Це стосується як `Plinth-win-x64-Setup.exe`, так і `Plinth-win-x64-Portable.exe`. Plinth є безкоштовним і відкритим, а Windows-збірки не підписані платним сертифікатом — саме тому SmartScreen їх позначає. Це **не** означає автоматично, що Plinth небезпечний. Щоб продовжити:

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="SmartScreen "Windows protected your PC" dialog with the "More info" link highlighted" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="SmartScreen dialog after expanding More info, showing the "Run anyway" button" />

1. Натисніть **More info**.
2. Натисніть **Run anyway**.

#### Якщо Windows Defender позначив або видалив файл

Евристика Defender іноді позначає непідписані інсталятори NSIS і портативні версії Electron як підозрілі. Якщо Defender помістив у карантин `Plinth-win-x64-Setup.exe` або `Plinth-win-x64-Portable.exe`, відновіть файл із **Windows Security → Virus & threat protection → Protection history**, а потім додайте виконуваний файл Plinth до списку дозволених елементів у розділі **Manage settings → Add or remove exclusions**. Як і у випадку зі SmartScreen, причиною є відсутній підпис видавця, а не виявлення шкідливого ПЗ.

> Завантажуйте Plinth лише з офіційної сторінки GitHub Releases. Якщо ви отримали файл з іншого сайту або хтось надіслав його вам — видаліть його та завантажте свіжу копію з офіційного джерела. Вихідний код відкритий, тому за бажанням ви можете перевірити його або зібрати Plinth самостійно.

Віддаєте перевагу Scoop? `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>macOS: перший запуск

Plinth ще не підписаний кодом для macOS, тому після встановлення з DMG Gatekeeper може показати страшний діалог *"Plinth.app is damaged and can't be opened"*. Це означає, що macOS помістила непідписаний застосунок у quarantine; файли застосунку насправді не пошкоджені. У сучасних версіях macOS надійне рішення — Terminal:

1. Перетягніть `Plinth.app` зі змонтованого DMG до `/Applications`.
2. Відкрийте Terminal і виконайте ці дві команди:

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
open /Applications/Plinth.app
```

Перша команда видаляє атрибут quarantine з установленої копії Plinth. Друга запускає застосунок. `sudo` може попросити пароль Mac; Terminal не показує символи під час введення.

**Apple Silicon vs Intel:** на Mac із процесором серії M (M1 / M2 / M3 / M4) завантажуйте DMG для `arm64`. На Intel Mac — DMG для `x64`. Неправильна збірка також запускатиметься через Rosetta, але помітно повільніше.

> Збірки macOS виробляються через CI на Apple Silicon та Intel рушіях. Якщо виникнуть проблеми, будь ласка, [відкрийте issue](../../issues) — зворотний зв'язок від користувачів macOS активно впливає на цикл тестування macOS.

### <a id="why-warning"></a>Чому ви можете побачити попередження

Plinth — проєкт із відкритим кодом і ліцензією MIT. Збірки для Windows та macOS **не підписані кодом** — сертифікати Apple Developer ID та Windows EV для підпису коду коштують сотні доларів на рік, і незалежний проєкт сплачує їх із власної кишені. Без цих підписів Windows SmartScreen і macOS Gatekeeper попереджатимуть вас при першому запуску. Попередження означають *що ваша ОС не розпізнає видавця* — вони не означають, що Plinth є шкідливим ПЗ.

Три способи самостійно перевірити Plinth, у порядку зростання строгості:

- **Прочитайте вихідний код.** Кожен рядок є на [GitHub](https://github.com/fabwaseem/plinth), і ви можете [зібрати Plinth з джерел](#tech).
- **Перевірте SHA256.** Порівняйте свій файл із опублікованим [`SHA256SUMS`](../../releases/latest) — дивіться [Перевірте своє завантаження](#verify) нижче.
- **Запустіть стороннє сканування.** Завантажте файл на [VirusTotal](https://www.virustotal.com).

### <a id="linux-first-launch"></a>Linux: перший запуск

AppImage запускаються безпосередньо — без встановлення. Потрібно лише позначити файл як виконуваний.

**Файловий менеджер:** клацніть правою кнопкою на `.AppImage` → **Властивості** → **Права** → увімкніть **Дозволити виконання файлу як програми**, потім подвійний клік.

**Термінал:**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

Якщо запуск все одно не вдається — запустіть без монтування, пакунок FUSE не потрібен:

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**Необов'язкова інтеграція з робочим столом:** встановіть [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) один раз, і будь-який AppImage, на який ви двічі клацнете, автоматично реєструватиметься в меню запуску — без ручного створення `.desktop`-файлів.

**Звичайний архів (без FUSE, без встановлення):**

Збірка `.tar.gz` — той самий застосунок без оболонки AppImage: розпакуйте будь-куди й запустіть. Ані інсталятора, ані пакунка FUSE.

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**Завантаження для Linux на сторінці релізів лише x86_64.** На машинах ARM64 (Raspberry Pi, Asahi Linux) Flatpak встановиться, але не запуститься: `bwrap: execvp ldconfig: Exec format error`.

<details>
<summary><strong><a id="verify"></a>Перевірте своє завантаження (SHA256)</strong></summary>

До кожного релізу публікується файл `SHA256SUMS` поруч із бінарними файлами. Щоб переконатися, що ваш файл не було пошкоджено або підмінено під час передачі, обчисліть хеш файлу локально та порівняйте його з рядком у `SHA256SUMS`. Відкрийте сторінку останнього релізу → **Assets** → завантажте `SHA256SUMS`.

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

Хочете стороннє сканування на шкідливе ПЗ? Завантажте файл на [VirusTotal](https://www.virustotal.com). Кілька спрацьовувань узагальненої евристики у другорядних рушіях — норма для непідписаних Electron-застосунків; масові виявлення у великих рушіях були б справжнім приводом для занепокоєння.

</details>

<details>
<summary><strong>Windows: Інсталятор vs Портативна версія</strong></summary>

| | Інсталятор NSIS | Портативний `.exe` |
| --- | --- | --- |
| Потрібне встановлення | Так | Ні — запускається будь-звідки |
| Авто-оновлення | ✅ у застосунку | ❌ ручне завантаження |
| Швидкість запуску | ✅ швидше | ⚠️ повільніший холодний старт |
| Додається до меню «Пуск» | Yes | No |
| Зручне видалення | Yes | ❌ просто видаліть файл |

**Рекомендація:** використовуйте інсталятор NSIS для авто-оновлень і швидкого запуску. Використовуйте портативний `.exe` для варіанту без встановлення та без змін реєстру.

</details>

---

## <a id="why"></a>Чому Plinth

Plinth створений для однієї задачі: вставте URL — отримайте чистий локальний файл. Без апселів, без збору даних.

| | Plinth |
| --- | --- |
| Безкоштовно, без преміум-рівня | Yes |
| Відкритий код | Yes |
| Лише локальна обробка | Yes |
| Без обмежень використання | Yes |
| Крос-платформний настільний застосунок | Yes |
| Субтитри + SponsorBlock | Yes |

---

## <a id="privacy"></a>Конфіденційність

Завантаження виконуються безпосередньо через [yt-dlp](https://github.com/yt-dlp/yt-dlp) з YouTube у вибрану вами теку — нічого не маршрутизується через сторонні сервери. Історія перегляду, історія завантажень, URL та вміст файлів залишаються на вашому пристрої.

Plinth надсилає анонімну агрегатну телеметрію через [OpenPanel](https://openpanel.dev) — рівно стільки, щоб розуміти збої, падіння, відгуки, OS та версії застосунку. Без URL, назв відео, шляхів до файлів, даних акаунта, fingerprinting чи персональних даних. ID установки випадковий і не пов’язаний із вашою особою. Можна вимкнути в Налаштуваннях.

Explore має власний вхід, окремий від вашого браузера, а Plinth ніколи не читає й не заповнює форму входу — ви вводите дані на сторінці Google. Завантаження виконуються без входу; лише коли завантаження зривається з причини, яку може вирішити акаунт, Plinth заново зчитує вхід, зберігає його в тимчасовому файлі на час цього завантаження й видаляє файл після. Вихід з Explore в Налаштуваннях стирає його.

---

## <a id="faq"></a>Часті запитання

**Це справді безкоштовно?**
Так — ліцензія MIT, без преміум-рівня, без заблокованих функцій.

**Які якості відео можна завантажувати?**
Будь-які, що пропонує YouTube: 4K UHD (2160p), 1440p, 1080p, 720p, 480p, 360p, а також лише аудіо. Потоки з частотою 60 fps, 120 fps та HDR зберігаються як є.

**Чи можна витягти лише аудіо як MP3?**
Так. Обери *лише аудіо* в меню форматів, а потім MP3, M4A/AAC, Opus або WAV.

**Як завантажувати відео, для яких потрібен акаунт YouTube?**
Увійдіть один раз на вкладці Explore. Після цього Plinth зможе завантажувати приватні відео та відео лише для учасників, які доступні вашому акаунту, відео з віковим обмеженням (якщо акаунт підтверджено за віком), а також ваші списки «Дивитися пізніше» та «Вподобані». Цей вхід використовується, лише коли завантаження зривається з причини, яку може вирішити акаунт; усе інше завантажується як і раніше. Це варіант **Вхід через Explore**: він стоїть першим і позначений «Рекомендовано» в налаштуваннях cookies, а Plinth обирає його сам, коли ви вперше відкриваєте Explore. У вікі yt-dlp зазначено, що [автоматизація з входом в акаунт може позначити акаунт Google](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies), тож безпечніше використовувати другий акаунт.

**Чи продовжить він працювати, якщо YouTube щось зміниться?**
yt-dlp автоматично оновлюється під час запуску, а Plinth оперативно випускає виправлення, коли YouTube щось змінює. Коли YouTube просить підтвердити, що ви не бот, Plinth також пробує ваш вхід в Explore, якщо ви там увійшли, а cookies з файлу чи браузера доступні в налаштуваннях cookies.

**Якими мовами доступний Plinth?**
30 мов доступні одразу: Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文. Plinth автоматично визначає мову операційної системи під час першого запуску, а перемкнути її можна будь-коли через вибір мови на панелі інструментів. Runtime locale JSON зберігається в src/shared/i18n/locales/, а PO-каталоги для перекладачів — в i18n/locales/ — відкрийте PR на GitHub, щоб долучитися.

**Чи потрібно щось встановлювати додатково?**
Ні. yt-dlp автоматично завантажується при першому запуску й кешується на вашій машині; ffmpeg і ffprobe постачаються разом із застосунком. Після цього жодних додаткових налаштувань не потрібно.

**Чи можна завантажувати плейлисти або цілі канали?**
Так — і те, й інше. Вставте URL playlist або channel (наприклад, `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`); виберіть, скільки entries сканувати, а потім додайте весь список у queue або виберіть окремі відео. Date-range filters з’являться незабаром.

**macOS каже «застосунок пошкоджений» — що робити?**
Це macOS Gatekeeper блокує непідписаний застосунок, а не реальне пошкодження. Команди Terminal для зняття quarantine і запуску Plinth дивіться в [macOS first launch](#macos-first-launch).

**Чи законно завантажувати відео YouTube?**
Для особистого, приватного використання це загалом прийнято в більшості юрисдикцій. Ви несете відповідальність за дотримання [Умов використання](https://www.youtube.com/t/terms) YouTube та місцевого авторського права.

---

## <a id="roadmap"></a>Дорожня карта

Досі заплановано — приблизно за пріоритетом:

| Функція | Опис |
| --- | --- |
| **Фільтри плейлистів і каналів** | Date-range filters під час переліку playlist або channel |
| **Пріоритети аудіодоріжок YouTube** | Задати бажану мовну аудіодоріжку для всього застосунку, із перевизначеннями в окремих профілях, коли YouTube надає кілька аудіотреків |
| **Надійніше відновлення повтором** | Новий шлях повторної спроби для завантажень, перерваних нестабільним або проблемним інтернет-з'єднанням |
| **Повноцінний менеджер завантажень у drawer** | Перетворити drawer черги на повніший менеджер, включно зі зміною папок призначення для елементів у черзі |
| **Заплановані завантаження** | Запускайте чергу в заданий час (нічні запуски) |
| **Обрізання кліпів** | Завантажуйте лише фрагмент за часом початку та кінця |
| **Пакет в AUR** | Встановлення в Arch Linux та Omarchy через `yay -S plinth-bin` |

Маєте ідею? [Відкрийте запит](../../issues) — голос спільноти визначає пріоритети.

---

## <a id="support"></a>Підтримати Plinth

Plinth безкоштовний і має ліцензію MIT — без реклами, без платної версії. Якщо він заощаджує ваш час, ви можете підтримати розробку через Bitcoin або Tron: адреси наведені в [DONATE.md](../../docs/DONATE.md) — єдиному офіційному джерелі для них. Plinth ніколи не надішле вам адресу електронною поштою чи в особистому повідомленні. Зірка репозиторію, повідомлення про помилки та покращення перекладів допомагають не менше.

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>Технології

<details>
<summary><strong>Stack</strong></summary>

- **Electron** — крос-платформна настільна оболонка
- **React 19** + **TypeScript** — інтерфейс
- **Tailwind CSS v4** — стилізація
- **Zustand** — керування станом
- **yt-dlp** + **ffmpeg** — рушій завантаження та мультиплексування (yt-dlp отримується під час роботи; ffmpeg/ffprobe вбудовуються під час збірки)
- **Vite** + **electron-vite** — збірка
- **Vitest** + **Playwright** — модульні та наскрізні тести

</details>

<details>
<summary><strong>Збірка з вихідного коду</strong></summary>

### Передумови — всі платформи

| Інструмент | Версія  | Встановлення |
| ---------- | ------- | ------------ |
| Git        | будь-яка | [git-scm.com](https://git-scm.com) |
| Node.js    | 24.21.0 | `mise install` або `.node-version` |
| Bun        | 1.4.2  | `mise install` або `package.json` `packageManager` |

Рекомендовано: встановіть `mise`, а потім запустіть `mise install` у checkout. Без mise вручну активуйте Node.js з `.node-version` і Bun з `package.json` перед `bun run bootstrap`.

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Visual Studio Build Tools і Python можуть знадобитися для нативних перебудов.

### macOS

```bash
brew install mise
xcode-select --install
```

Після клонування запустіть `mise trust && mise install` у checkout. Якщо ваш shell уже використовує `fnm`, `nvm` або Bun з Homebrew, активуйте mise у `~/.zshrc`, щоб Plinth отримав Node.js 24.21.0 і Bun 1.4.2:

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

# Залежності збірки та середовища виконання Electron
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# Лише для E2E-тестів (Electron потребує дисплея)
sudo apt install -y xvfb
```

### Клонування та запуск

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # рекомендовано; пропустіть, якщо закріплені інструменти активовані вручну
bun run bootstrap
bun run doctor
bun run dev            # Electron-застосунок із Vite-рендерером
```

### Збірка дистрибутиву

```bash
bun run build        # перевірка типів + компіляція
bun run dist         # пакування для поточної ОС
bun run dist:win     # пакування Windows-цілей на підтримуваному хості
```

> `bun run bootstrap` встановлює залежності, перебудовує залежності Electron-застосунку, перевіряє Electron, готує вбудовані ffmpeg/ffprobe для розробки та встановлює Playwright Chromium. yt-dlp керується під час роботи в папці даних застосунку; ffmpeg і ffprobe входять до кожного релізу Plinth.

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

## Умови використання

Plinth — інструмент виключно для особистого, приватного використання. Ви одноосібно відповідаєте за те, щоб ваші завантаження відповідали [Умовам використання](https://www.youtube.com/t/terms) YouTube та авторському праву вашої юрисдикції. Не використовуйте Plinth для завантаження, відтворення чи розповсюдження контенту, на який ви не маєте прав. Розробники не несуть відповідальності за зловживання.

Ліцензія MIT · Зроблено з турботою <a href="https://github.com/fabwaseem">Waseem Anjum</a>

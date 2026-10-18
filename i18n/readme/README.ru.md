<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — бесплатный загрузчик YouTube (+ 2000 сайтов) с открытым исходным кодом для Windows, macOS и Linux

Скачивайте видео, Shorts, музыку, каналы, подкасты или аудиодорожки с **YouTube и 2000+ поддерживаемых сайтов** — до 4K HDR при 60 fps или в виде MP3 / AAC / Opus. Работает локально на Windows, macOS и Linux. **Без рекламы, без лишнего, без допродаж.**

Plinth is a fork of [Arroxy](https://github.com/antonio-orionus/Arroxy) by Antonio Orionus, MIT licensed.

### What Plinth changes

- Published as Plinth by Waseem Anjum, with its own site ([plinth.fabwaseem.com](https://plinth.fabwaseem.com)) and its own Scoop and Homebrew packages.

**Язык:** [Afaan Oromoo](README.om.md) · [Bahasa Indonesia](README.id.md) · [Deutsch](README.de.md) · [English](../../README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Tiếng Việt](README.vi.md) · [Türkçe](README.tr.md) · [አማርኛ](README.am.md) · [العربية](README.ar.md) · [اردو](README.ur.md) · [پښتو](README.ps.md) · [فارسی](README.fa.md) · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · [ไทย](README.th.md) · [မြန်မာဘာသာ](README.my.md) · [Ελληνικά](README.el.md) · **Русский** · [Српски](README.sr.md) · [Українська](README.uk.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ Скачать последний релиз**](#install) · [**Сайт**](https://plinth.fabwaseem.com) · [Windows: первый запуск](#windows-first-launch) · [macOS: первый запуск](#macos-first-launch) · [Linux: первый запуск](#linux-first-launch)

Если Plinth экономит вам время — ⭐ поможет другим его найти.

_Last updated: 2026-10-18._

> 🌐 Это перевод с помощью ИИ. [README на английском](README.md) — основной источник истины. Заметили ошибку? [Pull request приветствуется](../../pulls).

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download. `winget install WaseemAnjum.Plinth` is coming soon.

---

## Содержание

- [Возможности](#features)
- [Установка и первый запуск](#install)
- [Почему Plinth](#why)
- [Конфиденциальность](#privacy)
- [Часто задаваемые вопросы](#faq)
- [Дорожная карта](#roadmap)
- [Поддержать Plinth](#support)
- [Создано на](#tech)

---

## <a id="features"></a>Возможности

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>Главная быстрой загрузки</b><br/>Вставьте URL и сразу скачайте с активным профилем

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>Просматривайте YouTube прямо в Plinth и скачивайте текущую страницу с активным профилем

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>Режим массовых URL</b><br/>Вставьте список, авто-удаление дубликатов, поставьте всё в очередь сразу

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>Параллельная очередь загрузок</b><br/>Несколько загрузок одновременно с живым прогрессом

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>Многоразовые профили загрузки</b><br/>Сохраняйте формат, качество и вывод как пресеты — используйте при каждой загрузке

### Explore: просмотр YouTube прямо в Plinth

- **Вкладка Explore** — просматривайте YouTube прямо в Plinth и скачивайте найденное без копирования ссылок. **Скачать · *ваш профиль*** ставит в очередь видео, плейлист или канал, который вы сейчас смотрите; стрелка рядом переключает профили, а волшебная палочка открывает пошаговую загрузку для выбора форматов, субтитров и не только
- **Адресная строка** — введите запрос для поиска на YouTube или вставьте ссылку на YouTube. Explore открывает только YouTube, поэтому ссылка с другого сайта там не откроется, но её можно скачать в один клик
- **Загрузки, которым нужен аккаунт** — войдите один раз в Explore, и Plinth сможет скачивать приватные видео и видео только для участников, доступные вашему аккаунту, видео с возрастным ограничением (если аккаунт подтверждён по возрасту), а также списки «Смотреть позже» и «Понравившиеся». Plinth по-прежнему скачивает без входа и использует ваш вход в Explore, только когда загрузка не удаётся по причине, которую может решить аккаунт. Когда YouTube просит подтвердить, что вы не бот, Plinth тоже пробует ваш вход в Explore
- **Используйте второй аккаунт** — первый экран Explore объясняет почему: загрузка через аккаунт несёт некоторый риск ограничения этого аккаунта. Выйти из Explore можно в Настройках в любой момент, чтобы забыть вход
- **Блокировщик рекламы** — Explore блокирует рекламу и трекеры на своих страницах; на загрузки это не влияет. Включён по умолчанию, одним щелчком по щиту на панели инструментов Explore его можно отключить, и он никогда не действует на страницах входа Google. YouTube может сопротивляться блокировщикам рекламы для аккаунтов, выполнивших вход

### Качество и форматы

- До **4K UHD (2160p)**, 1440p, 1080p, 720p, 480p, 360p
- **Высокая частота кадров** сохраняется как есть — 60 fps, 120 fps, HDR
- **Аудио** — экспорт только аудио в MP3, M4A/AAC, Opus или WAV. В интерактивных загрузках выбирайте нативные surround/Dolby дорожки источника (AC-3, E-AC-3, 5.1, DRC), когда они доступны, или задайте глобальное значение по умолчанию **Предпочитать surround / Dolby**
- Быстрые пресеты: *Лучшее качество* · *Сбалансированно* · *Маленький файл*

### Рабочий процесс

- **Глобальная горячая клавиша загрузки** — скопируйте ссылку в любом приложении и нажмите `Ctrl+Shift+D` (`Cmd+Shift+D` на macOS); Plinth добавит её в очередь с вашим активным профилем, не открывая окно, а уведомление это подтвердит. Включено по умолчанию, сочетание можно изменить
- **Гибкие режимы запуска** — выберите пошаговую одиночную загрузку, выбор плейлиста/канала, массовую вставку URL, Quick Download с сохранёнными настройками по умолчанию или просмотр и загрузку из Explore
- **Центральная очередь загрузок** — каждая одиночная, плейлистная, массовая или быстрая задача попадает в одно место для прогресса, паузы, возобновления, отмены, повтора и управления приоритетом
- **Мониторинг буфера обмена** — скопируйте YouTube-ссылку, и Plinth автоматически заполнит URL при следующем переключении на приложение (включается в расширенных настройках)
- **Автоочистка URL** — удаляет трекинговые параметры (`si`, `pp`, `utm_*`, `fbclid`, `gclid`) и разворачивает ссылки `youtube.com/redirect`
- **Режим трея** — закрытие окна сохраняет загрузки в фоновом режиме
- **Языки: 30** — автоматически определяет язык системы, можно переключить в любой момент
- **Синхронизация плейлиста** — повторно сверяет плейлист с локальной папкой, чтобы пропускать уже скачанные видео; создает файл плейлиста `.m3u`, который обновляется после каждого скачанного видео
- **Управление скоростью и темпом** — ограничивайте пропускную способность загрузки, задавайте, сколько частей видео скачивается одновременно, и добавляйте задержки между запросами с пресетами (*Выкл · Сбалансированно · Осторожно · Свой*)
- **Шаблоны имён файлов** — называйте загрузки по-своему с помощью `{title}`, `{uploader}`, `{id}`, `{date}`, `{resolution}` и `{playlist_index}`, глобально или для каждого профиля загрузки
- **Загрузок одновременно и автоповтор** — выбирайте, сколько загрузок из очереди идёт одновременно, и позвольте Plinth повторить загрузку после сбоя сети или сервера, увеличивая паузу перед каждой попыткой
- **Профили для каждого видео плейлиста** — назначайте каждому видео в плейлисте собственный профиль загрузки вместо одной настройки для всего списка, чтобы за один проход часть видео сохранялась в полном качестве, а остальные — как MP3
- **Quick Download работает в фоне** — ссылка сразу появляется в Загрузках и готовится там, заметка с кнопкой **Открыть** подтверждает это, а поле URL очищается для следующей ссылки. Запускайте сколько угодно, пока предыдущие готовятся
- **Загрузки подсказывают, что ждёт вас** — если Plinth не может прочитать ссылку, её строка объясняет причину и предлагает решение: «Повторить», включить cookies или войти в Explore. При выключенных cookies **Войти через Explore** повторит попытку за вас после входа. Плейлист длиннее вашего лимита загрузки ждёт в своей строке, пока вы не выберете весь плейлист, первые элементы или просмотр. Вкладка «Загрузки» показывает число строк, ожидающих вас

### Субтитры и постобработка

- **Субтитры** в SRT, VTT или ASS — ручные или авто-сгенерированные, на любом доступном языке
- Сохранение рядом с видео, встраивание в `.mkv` или размещение в подпапке `Subtitles/`
- **SponsorBlock** — пропуск или разметка спонсорских вставок, вступлений, концовок, самопиара
- **Встроенные метаданные** — название, дата загрузки, канал, описание, обложка и маркеры глав записываются в файл
- **Пакеты только с субтитрами** — вставьте список ссылок или откройте плейлист, выберите «Субтитры» и получите для каждого видео только файлы субтитров

### YouTube + 2000 сайтов

- **YouTube — в полном объёме** — видео, Shorts, каналы, плейлисты, YouTube Music и подкасты обрабатываются как первоклассные источники
- **2000+ других сайтов** через yt-dlp — Vimeo, Twitch, Twitter/X, TikTok, SoundCloud, Bandcamp, Bilibili, BBC iPlayer, archive.org и многие другие
- **Только аудио и субтитры** работают на каждом поддерживаемом сайте, а не только на YouTube
- Если сайт меняется, yt-dlp выпускает исправления еженедельно, а Plinth обновляет бинарный файл при запуске

### Конфиденциальность и контроль

- 100% локальная обработка — загрузки идут напрямую с YouTube на ваш диск
- Без логина, без кук, без привязки к аккаунту Google
- Файлы сохраняются прямо в выбранную вами папку

---

## <a id="install"></a>Установка и первый запуск

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

Сборки только x86_64. Нет `curl`? Замените `curl -fsSL` на `wget -qO-`.

| Платформа | Формат |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**Скачать последний релиз →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>Windows: первый запуск

При первом запуске вы можете увидеть **«Windows protected your PC»** или **«Unknown publisher»**. Это касается как `Plinth-win-x64-Setup.exe`, так и `Plinth-win-x64-Portable.exe`. Plinth бесплатный и открытый, а Windows-сборки не подписаны платным сертификатом — именно поэтому SmartScreen их помечает. Это **не** означает автоматически, что Plinth опасен. Чтобы продолжить:

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="SmartScreen "Windows protected your PC" dialog with the "More info" link highlighted" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="SmartScreen dialog after expanding More info, showing the "Run anyway" button" />

1. Нажмите **More info**.
2. Нажмите **Run anyway**.

#### Если Windows Defender пометил или удалил файл

Эвристика Defender иногда помечает неподписанные установщики NSIS и портативные версии Electron как подозрительные. Если Defender поместил в карантин `Plinth-win-x64-Setup.exe` или `Plinth-win-x64-Portable.exe`, восстановите файл из **Windows Security → Virus & threat protection → Protection history**, а затем добавьте исполняемый файл Plinth в список разрешённых элементов в разделе **Manage settings → Add or remove exclusions**. Как и в случае со SmartScreen, причиной является отсутствие подписи издателя, а не обнаружение вредоносного ПО.

> Скачивайте Plinth только с официальной страницы GitHub Releases. Если вы получили файл с другого сайта или он был вам прислан — удалите его и загрузите свежую копию из официального источника. Исходный код открыт, поэтому при желании вы можете проверить его или собрать Plinth самостоятельно.

Предпочитаете Scoop? `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>macOS: первый запуск

Plinth пока не подписан кодом для macOS, поэтому после установки из DMG Gatekeeper может показать пугающий диалог *"Plinth.app is damaged and can't be opened"*. Это означает, что macOS поместила неподписанное приложение в карантин; файлы приложения не повреждены на самом деле. В актуальных версиях macOS надёжное решение — Terminal:

1. Перетащите `Plinth.app` из смонтированного DMG в `/Applications`.
2. Откройте Terminal и выполните две команды:

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
open /Applications/Plinth.app
```

Первая команда удаляет атрибут карантина с установленной копии Plinth. Вторая запускает приложение. `sudo` может запросить пароль Mac; Terminal не показывает символы во время ввода.

**Apple Silicon vs Intel:** на Mac с процессором серии M (M1 / M2 / M3 / M4) загружайте DMG для `arm64`. На Intel Mac — DMG для `x64`. Неправильная сборка тоже запустится через Rosetta, но заметно медленнее.

> Сборки для macOS создаются через CI на Apple Silicon и Intel. Если возникнут проблемы, пожалуйста, [откройте issue](../../issues) — отзывы пользователей macOS напрямую влияют на цикл тестирования.

### <a id="why-warning"></a>Почему вы можете увидеть предупреждение

Plinth — открытый проект с лицензией MIT. Сборки для Windows и macOS **не подписаны кодом** — сертификаты Apple Developer ID и Windows EV для подписи кода стоят сотни долларов в год, и независимый проект платит за них из своего кармана. Без этих подписей Windows SmartScreen и macOS Gatekeeper будут предупреждать вас при первом запуске. Предупреждения означают *что ваша ОС не распознаёт издателя* — они не говорят о том, что Plinth является вредоносным ПО.

Три способа проверить Plinth самостоятельно, в порядке нарастающей строгости:

- **Прочитайте исходный код.** Каждая строка находится на [GitHub](https://github.com/fabwaseem/plinth), и вы можете [собрать Plinth из исходников](#tech).
- **Проверьте SHA256.** Сравните свой файл с опубликованным [`SHA256SUMS`](../../releases/latest) — см. [Проверьте ваш загрузку](#verify) ниже.
- **Запустите стороннее сканирование.** Загрузите файл на [VirusTotal](https://www.virustotal.com).

### <a id="linux-first-launch"></a>Linux: первый запуск

AppImage запускаются напрямую — установка не нужна. Достаточно пометить файл как исполняемый.

**Файловый менеджер:** кликните правой кнопкой по `.AppImage` → **Свойства** → **Права** → включите **Разрешить выполнение файла как программы**, затем дважды кликните для запуска.

**Терминал:**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

Если запуск всё равно не удаётся — запустите без монтирования, пакет FUSE не нужен:

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**Необязательная интеграция с рабочим столом:** установите [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) один раз, и любой AppImage, по которому вы дважды кликнете, автоматически регистрируется в меню запуска — без ручного создания `.desktop`-файлов.

**Обычный архив (без FUSE, без установки):**

Сборка `.tar.gz` — то же приложение без обёртки AppImage: распакуйте куда угодно и запустите. Ни установщика, ни пакета FUSE.

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**Загрузки для Linux на странице релизов только x86_64.** На машинах ARM64 (Raspberry Pi, Asahi Linux) Flatpak установится, но не запустится: `bwrap: execvp ldconfig: Exec format error`.

<details>
<summary><strong><a id="verify"></a>Проверьте вашу загрузку (SHA256)</strong></summary>

К каждому релизу публикуется файл `SHA256SUMS` вместе с бинарными файлами. Чтобы убедиться, что ваш загрузочный файл не был повреждён или подменён в процессе передачи, вычислите хэш файла локально и сравните его со строкой в `SHA256SUMS`. Откройте страницу последнего релиза → **Assets** → загрузите `SHA256SUMS`.

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

Хотите стороннюю проверку на вредоносное ПО? Загрузите файл на [VirusTotal](https://www.virustotal.com). Несколько срабатываний обобщённой эвристики у второстепенных движков — норма для неподписанных Electron-приложений; массовые обнаружения у крупных движков были бы настоящим поводом для беспокойства.

</details>

<details>
<summary><strong>Windows: Установщик vs Портативная версия</strong></summary>

| | Установщик NSIS | Портативный `.exe` |
| --- | --- | --- |
| Требует установки | Да | Нет — запускается откуда угодно |
| Авто-обновления | ✅ в приложении | ❌ ручное скачивание |
| Скорость запуска | ✅ быстрее | ⚠️ долгий холодный старт |
| Добавляется в меню «Пуск» | Yes | No |
| Удобное удаление | Yes | ❌ просто удалите файл |

**Рекомендация:** используйте установщик NSIS для авто-обновлений и быстрого запуска. Портативный `.exe` подходит тем, кто предпочитает вариант без установки и без изменений реестра.

</details>

---

## <a id="why"></a>Почему Plinth

Plinth создан для одного: вставьте URL — получите чистый локальный файл. Никаких допродаж, никакого сбора данных.

| | Plinth |
| --- | --- |
| Бесплатно, без платных уровней | Yes |
| Открытый исходный код | Yes |
| Только локальная обработка | Yes |
| Без лимитов использования | Yes |
| Кросс-платформенное десктопное приложение | Yes |
| Субтитры + SponsorBlock | Yes |

---

## <a id="privacy"></a>Конфиденциальность

Загрузки выполняются напрямую через [yt-dlp](https://github.com/yt-dlp/yt-dlp) с YouTube в выбранную вами папку — никакого маршрутизирования через сторонние серверы. История просмотров, история загрузок, URL-адреса и содержимое файлов остаются на вашем устройстве.

Plinth отправляет анонимную агрегированную телеметрию через [OpenPanel](https://openpanel.dev) — ровно столько, чтобы понимать сбои, падения, отзывы, ОС и версии приложения. Никаких URL, названий видео, путей к файлам, данных аккаунта, фингерпринтинга или персональных данных. ID установки случайный и не связан с вашей личностью. Можно отключить в настройках.

У Explore собственный вход, отдельный от вашего браузера, а Plinth никогда не читает и не заполняет форму входа — вы вводите данные на странице Google. Загрузки идут без входа; только когда загрузка не удаётся по причине, которую может решить аккаунт, Plinth заново считывает вход, хранит его во временном файле на время этой загрузки и затем удаляет файл. Выход из Explore в Настройках стирает его.

---

## <a id="faq"></a>Часто задаваемые вопросы

**Это правда бесплатно?**
Да — лицензия MIT, без платных уровней, без ограничений по функциям.

**Какие качества видео можно скачивать?**
Всё, что предлагает YouTube: 4K UHD (2160p), 1440p, 1080p, 720p, 480p, 360p, а также только аудио. Потоки с высокой частотой кадров (60 fps, 120 fps) и HDR сохраняются как есть.

**Можно ли извлечь только аудио в виде MP3?**
Да. Выбери *только аудио* в меню форматов, а затем MP3, M4A/AAC, Opus или WAV.

**Как скачать видео, для которых нужен аккаунт YouTube?**
Войдите один раз на вкладке Explore. После этого Plinth сможет скачивать приватные видео и видео только для участников, доступные вашему аккаунту, видео с возрастным ограничением (если аккаунт подтверждён по возрасту), а также списки «Смотреть позже» и «Понравившиеся». Этот вход используется, только когда загрузка не удаётся по причине, которую может решить аккаунт; всё остальное скачивается как раньше. Это вариант **Вход через Explore**: он указан первым и помечен «Рекомендуется» в настройках cookies, а при первом открытии Explore Plinth выбирает его сам. Вики yt-dlp отмечает, что [автоматизация с входом в аккаунт может привлечь внимание к вашему аккаунту Google](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies), поэтому безопаснее использовать второй аккаунт.

**Будет ли работать, если YouTube что-то изменит?**
yt-dlp обновляется автоматически при запуске, а Plinth оперативно выпускает исправления, когда YouTube что-то меняет. Когда YouTube просит подтвердить, что вы не бот, Plinth также пробует ваш вход в Explore, если вы вошли там, а cookies из файла или браузера доступны в настройках cookies.

**На каких языках доступен Plinth?**
Доступные языки (30): Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文. Plinth автоматически определяет язык операционной системы при первом запуске, а переключить язык можно в любой момент через выбор языка на панели инструментов. Runtime locale JSON находится в src/shared/i18n/locales/, а PO-каталоги для переводчиков находятся в i18n/locales/ — откройте PR на GitHub, чтобы внести вклад.

**Нужно что-то дополнительно устанавливать?**
Нет. yt-dlp автоматически скачивается при первом запуске и кешируется на вашей машине; ffmpeg и ffprobe поставляются вместе с приложением. После этого никакой дополнительной настройки не требуется.

**Можно ли скачивать плейлисты или целые каналы?**
Да — и то и другое. Вставьте URL плейлиста или канала (например, `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`); выберите, сколько элементов сканировать, затем поставьте в очередь весь список или выберите отдельные видео. Фильтры по диапазону дат появятся скоро.

**macOS сообщает «приложение повреждено» — что делать?**
Это macOS Gatekeeper блокирует неподписанное приложение, а не реальное повреждение. Команды Terminal для снятия карантина и запуска Plinth смотрите в разделе [macOS first launch](#macos-first-launch).

**Законно ли скачивать видео с YouTube?**
Для личного, частного использования это в целом допустимо в большинстве юрисдикций. Вы несёте ответственность за соблюдение [Условий использования](https://www.youtube.com/t/terms) YouTube и местных законов об авторском праве.

---

## <a id="roadmap"></a>Дорожная карта

Все еще запланировано — примерно в порядке приоритета:

| Функция | Описание |
| --- | --- |
| **Фильтры плейлистов и каналов** | Фильтры по диапазону дат при перечислении плейлиста или канала |
| **Предпочтения аудиодорожек YouTube** | Задать предпочтительную речевую дорожку для всего приложения, с переопределениями в отдельных профилях, когда YouTube предлагает несколько аудиодорожек |
| **Более надежное восстановление повтором** | Новый путь повторной попытки для загрузок, прерванных нестабильным или проблемным интернет-соединением |
| **Полноценный менеджер загрузок в drawer** | Превратить drawer очереди в более полный менеджер, включая смену папок назначения для элементов в очереди |
| **Запланированные загрузки** | Запуск очереди в заданное время (ночные загрузки) |
| **Обрезка клипов** | Скачайте только нужный отрезок, указав начало и конец |
| **Пакет в AUR** | Установка в Arch Linux и Omarchy через `yay -S plinth-bin` |

Есть идея? [Откройте запрос](../../issues) — мнение сообщества определяет приоритеты.

---

## <a id="support"></a>Поддержать Plinth

Plinth бесплатен и распространяется по лицензии MIT — без рекламы, без платной версии. Если он экономит вам время, вы можете поддержать разработку через Bitcoin или Tron: адреса указаны в [DONATE.md](../../docs/DONATE.md) — единственном официальном источнике для них. Plinth никогда не пришлёт вам адрес по электронной почте или в личном сообщении. Звезда репозиторию, сообщения об ошибках и улучшение переводов помогают ничуть не меньше.

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>Создано на

<details>
<summary><strong>Стек технологий</strong></summary>

- **Electron** — кросс-платформенная десктопная оболочка
- **React 19** + **TypeScript** — UI
- **Tailwind CSS v4** — стили
- **Zustand** — управление состоянием
- **yt-dlp** + **ffmpeg** — движок загрузки и мультиплексирования (yt-dlp подтягивается во время работы; ffmpeg/ffprobe включаются при сборке)
- **Vite** + **electron-vite** — инструменты сборки
- **Vitest** + **Playwright** — юнит- и end-to-end тесты

</details>

<details>
<summary><strong>Сборка из исходников</strong></summary>

### Предварительные требования — все платформы

| Инструмент | Версия  | Установка |
| ---------- | ------- | --------- |
| Git        | любая   | [git-scm.com](https://git-scm.com) |
| Node.js    | 24.21.0 | `mise install` или `.node-version` |
| Bun        | 1.4.2  | `mise install` или `package.json` `packageManager` |

Рекомендуется установить `mise`, затем выполнить `mise install` в checkout. Без mise вручную активируйте Node.js из `.node-version` и Bun из `package.json` перед `bun run bootstrap`.

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Visual Studio Build Tools и Python могут понадобиться для нативных пересборок.

### macOS

```bash
brew install mise
xcode-select --install
```

После клонирования запустите `mise trust && mise install` в checkout. Если ваш shell уже использует `fnm`, `nvm` или Bun из Homebrew, активируйте mise в `~/.zshrc`, чтобы Plinth получил Node.js 24.21.0 и Bun 1.4.2:

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

# Зависимости сборки и рантайма Electron
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# Только для E2E-тестов (Electron требует дисплей)
sudo apt install -y xvfb
```

### Клонирование и запуск

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # рекомендуется; пропустите, если закреплённые инструменты активированы вручную
bun run bootstrap
bun run doctor
bun run dev            # Electron-приложение с Vite-рендерером
```

### Сборка дистрибутива

```bash
bun run build        # проверка типов + компиляция
bun run dist         # упаковка для текущей ОС
bun run dist:win     # упаковка Windows-целей на поддерживаемом хосте
```

> `bun run bootstrap` устанавливает зависимости, пересобирает зависимости Electron-приложения, проверяет Electron, подготавливает встроенные ffmpeg/ffprobe для разработки и устанавливает Playwright Chromium. yt-dlp управляется во время работы в папке данных приложения; ffmpeg и ffprobe входят в каждый релиз Plinth.

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

## Условия использования

Plinth — инструмент исключительно для личного, частного использования. Вы единолично отвечаете за то, чтобы ваши загрузки соответствовали [Условиям использования](https://www.youtube.com/t/terms) YouTube и законам об авторском праве вашей юрисдикции. Не используйте Plinth для скачивания, воспроизведения или распространения контента, на который у вас нет прав. Разработчики не несут ответственности за злоупотребления.

Лицензия MIT · Сделано с заботой <a href="https://github.com/fabwaseem">Waseem Anjum</a>

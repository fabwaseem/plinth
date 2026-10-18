<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — bezpłatny downloader YouTube (+ 2000 serwisów) o otwartym kodzie na Windows, macOS i Linux

Pobieraj filmy, Shorts, muzykę, kanały, podcasty i ścieżki dźwiękowe z **YouTube oraz ponad 2000 obsługiwanych serwisów** — nawet w 4K HDR przy 60 kl./s albo jako MP3 / AAC / Opus. Działa lokalnie na Windows, macOS i Linux. **Bez reklam, zbędnych dodatków i płatnych zachęt.**

**Przeczytaj w języku:** [Afaan Oromoo](README.om.md) · [Bahasa Indonesia](README.id.md) · [Deutsch](README.de.md) · [English](../../README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · **Polski** · [Português](README.pt.md) · [Tiếng Việt](README.vi.md) · [Türkçe](README.tr.md) · [አማርኛ](README.am.md) · [العربية](README.ar.md) · [اردو](README.ur.md) · [پښتو](README.ps.md) · [فارسی](README.fa.md) · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · [ไทย](README.th.md) · [မြန်မာဘာသာ](README.my.md) · [Ελληνικά](README.el.md) · [Русский](README.ru.md) · [Српски](README.sr.md) · [Українська](README.uk.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ Zainstaluj najnowsze wydanie**](#install) · [**Witryna**](https://plinth.fabwaseem.com) · [Pierwsze uruchomienie w Windows](#windows-first-launch) · [Pierwsze uruchomienie w macOS](#macos-first-launch) · [Pierwsze uruchomienie w Linux](#linux-first-launch)

Jeśli Plinth oszczędza Ci czas, ⭐ pomoże innym je znaleźć.

_Last updated: 2026-10-18._

> 🌐 To tłumaczenie powstało przy wsparciu AI. [Angielski README](README.md) jest źródłem nadrzędnym. Znalazłeś błąd? [Otwórz PR](../../pulls).

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Winget](https://winget.run/pkg/WaseemAnjum/Plinth), [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download.

---

## Spis treści

- [Funkcje](#features)
- [Instalacja i pierwsze uruchomienie](#install)
- [Dlaczego Plinth](#why)
- [Prywatność](#privacy)
- [Najczęstsze pytania](#faq)
- [Plan rozwoju](#roadmap)
- [Wesprzyj Plinth](#support)
- [Technologie](#tech)

---

## <a id="features"></a>Funkcje

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>Ekran Szybkiego pobierania</b><br/>Wklej URL i od razu pobierz go aktywnym profilem

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>Przeglądaj YouTube w Plinth i pobieraj bieżącą stronę z aktywnym profilem

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>Tryb zbiorczych URL-i</b><br/>Wklej listę, automatycznie usuń duplikaty i dodaj wszystko do kolejki

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>Równoległa kolejka pobierania</b><br/>Kilka pobrań naraz z postępem na żywo

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>Profile pobierania wielokrotnego użytku</b><br/>Zapisz format, jakość i folder docelowy, a potem używaj ich ponownie

### Explore: przeglądaj YouTube w Plinth

- **Karta Explore** — przeglądaj YouTube w Plinth i pobieraj znalezione filmy bez kopiowania linków. **Pobierz · *Twój profil*** dodaje do kolejki oglądany film, playlistę lub kanał; strzałka obok przełącza profile, a różdżka otwiera pobieranie krok po kroku, gdzie wybierzesz formaty, napisy i więcej
- **Pasek adresu** — wpisz frazę, aby wyszukać w YouTube, albo wklej link do YouTube. Explore przegląda tylko YouTube, więc link z innej witryny nie zostanie tam otwarty, ale możesz go pobrać jednym kliknięciem
- **Pobieranie wymagające konta** — zaloguj się raz w Explore, a Plinth pobierze prywatne filmy i filmy tylko dla członków, które może oglądać Twoje konto, filmy z ograniczeniem wieku (jeśli wiek konta jest zweryfikowany) oraz listy Do obejrzenia i Polubione. Plinth nadal pobiera bez logowania i używa Twojego logowania w Explore tylko wtedy, gdy pobieranie kończy się błędem, który może naprawić konto. Gdy YouTube prosi o potwierdzenie, że nie jesteś botem, Plinth próbuje też użyć Twojego logowania w Explore
- **Użyj dodatkowego konta** — pierwszy ekran Explore wyjaśnia dlaczego: pobieranie z użyciem konta niesie pewne ryzyko, że konto zostanie ograniczone. Wyloguj się z Explore w Ustawieniach, kiedy tylko chcesz, aby logowanie zostało zapomniane
- **Blokowanie reklam** — Explore blokuje reklamy i trackery na własnych stronach; pobieranie pozostaje bez zmian. Domyślnie włączone — jedno kliknięcie tarczy na pasku narzędzi Explore je wyłącza, a na stronach logowania Google nigdy nie działa. YouTube może utrudniać korzystanie z blokad reklam na zalogowanych kontach

### Jakość i formaty

- Do **4K UHD (2160p)**, a także 1440p, 1080p, 720p, 480p i 360p
- **Wysoka liczba klatek** zachowana bez zmian — 60 kl./s, 120 kl./s, HDR
- **Dźwięk** — eksportuj sam dźwięk jako MP3, M4A/AAC, Opus lub WAV. Podczas pobierania interaktywnego możesz wybrać natywne ścieżki surround/Dolby źródła (AC-3, E-AC-3, 5.1, DRC), gdy są dostępne, albo ustawić globalne **Preferuj surround / Dolby**
- Szybkie ustawienia: *Najlepsza jakość* · *Zrównoważone* · *Mały plik*

### Przepływ pracy

- **Globalny skrót pobierania** — skopiuj link w dowolnej aplikacji i naciśnij `Ctrl+Shift+D` (`Cmd+Shift+D` na macOS); Plinth doda go do kolejki z aktywnym profilem bez otwierania okna, a powiadomienie to potwierdzi. Domyślnie włączony, z możliwością zmiany
- **Elastyczne tryby rozpoczęcia** — wybierz prowadzony pojedynczy plik, selektor playlisty/kanału, zbiorcze wklejanie adresów URL, Szybkie pobieranie z zapisanymi ustawieniami albo przeglądanie i pobieranie z Explore
- **Centralna kolejka pobierania** — zadania pojedyncze, playlisty, zbiorcze i szybkie trafiają w jedno miejsce, gdzie można śledzić postęp, wstrzymywać, wznawiać, anulować, ponawiać i ustalać priorytet
- **Monitorowanie schowka** — skopiuj link YouTube, a po powrocie do aplikacji Plinth automatycznie uzupełni adres URL (przełącznik w ustawieniach zaawansowanych)
- **Automatyczne czyszczenie URL-i** — usuwa parametry śledzące (`si`, `pp`, `utm_*`, `fbclid`, `gclid`) i rozpakowuje linki `youtube.com/redirect`
- **Tryb zasobnika** — zamknięcie okna nie przerywa pobierania w tle
- **30 języków** — automatyczne wykrywanie języka systemu i zmiana w dowolnym momencie
- **Synchronizacja playlist** — ponownie skanuje playlistę względem lokalnego folderu, pomijając już pobrane filmy; tworzy plik playlisty `.m3u` aktualizowany po pobraniu każdego filmu
- **Sterowanie szybkością i tempem** — ogranicz przepustowość, ustaw liczbę równocześnie pobieranych części filmu i dodaj opóźnienia żądań za pomocą ustawień (*Wyłączone · Zrównoważone · Ostrożne · Własne*)
- **Szablony nazw plików** — nazywaj pliki po swojemu za pomocą `{title}`, `{uploader}`, `{id}`, `{date}`, `{resolution}` i `{playlist_index}`, globalnie lub osobno w profilach
- **Równoczesne pobieranie i automatyczne ponawianie** — wybierz liczbę zadań wykonywanych jednocześnie i pozwól Plinth ponawiać pobrania przerwane przez sieć lub serwer, z coraz dłuższym oczekiwaniem
- **Profile osobne dla elementów playlisty** — przypisz każdemu filmowi własny profil zamiast jednego ustawienia dla całej listy, aby w jednym przebiegu archiwizować część w pełnej jakości, a resztę pobrać jako MP3
- **Szybkie pobieranie działa w tle** — link od razu pojawia się w zakładce Pobieranie i tam się przygotowuje, notatka z przyciskiem **Pokaż** to potwierdza, a pole URL czyści się na kolejny link. Uruchamiaj ile chcesz, gdy poprzednie jeszcze się przygotowują
- **Pobieranie pokazuje, co wymaga Twojej uwagi** — jeśli Plinth nie może odczytać linku, jego wiersz podaje powód i proponuje rozwiązanie: Spróbuj ponownie, włącz cookie lub zaloguj się w Explore. Przy wyłączonych cookie **Zaloguj się przez Explore** ponowi próbę za Ciebie po zalogowaniu. Playlista dłuższa niż Twój limit wczytywania czeka w swoim wierszu, aż wybierzesz całość, pierwsze filmy lub przegląd. Karta Pobieranie liczy wiersze czekające na Ciebie

### Napisy i obróbka końcowa

- **Napisy** w SRT, VTT lub ASS — ręczne albo generowane automatycznie, w każdym dostępnym języku
- Zapisuj obok filmu, osadzaj w `.mkv` albo porządkuj w podfolderze `Subtitles/`
- **SponsorBlock** — pomijaj sponsorów, intra, zakończenia i autopromocje albo oznaczaj je jako rozdziały
- **Osadzone metadane** — tytuł, data przesłania, kanał, opis, miniatura i znaczniki rozdziałów zapisane w pliku
- **Partie tylko z napisami** — wklej listę adresów URL lub otwórz playlistę, wybierz Napisy i pobierz wyłącznie pliki napisów dla każdego filmu

### YouTube + 2000 serwisów

- **Pełna obsługa YouTube** — filmy, Shorts, kanały, playlisty, YouTube Music i podcasty są źródłami pierwszej klasy
- **Ponad 2000 innych serwisów** dzięki yt-dlp — Vimeo, Twitch, Twitter/X, TikTok, SoundCloud, Bandcamp, Bilibili, BBC iPlayer, archive.org i wiele innych
- **Sam dźwięk i napisy** działają we wszystkich obsługiwanych serwisach, nie tylko w YouTube
- Gdy serwis się zmieni, yt-dlp co tydzień dostarcza poprawki, a Plinth automatycznie aktualizuje plik wykonywalny przy starcie

### Prywatność i kontrola

- Przetwarzanie w 100% lokalne — pliki trafiają prosto z YouTube na Twój dysk
- **Otwarty kod źródłowy** — każdą linię można sprawdzić, licencja MIT
- Pliki są zapisywane bezpośrednio w wybranym folderze

---

## <a id="install"></a>Instalacja i pierwsze uruchomienie

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

Dostępne są tylko kompilacje x86_64. Nie masz `curl`? Zamień `curl -fsSL` na `wget -qO-`.

| Platforma | Pobieranie bezpośrednie |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**Wszystkie pliki wydania →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>Pierwsze uruchomienie w Windows

Przy pierwszym uruchomieniu możesz zobaczyć **„System Windows ochronił ten komputer”** albo **„Nieznany wydawca”**. Dotyczy to plików `Plinth-win-x64-Setup.exe` i `Plinth-win-x64-Portable.exe`. Plinth jest bezpłatne i ma otwarty kod, ale kompilacje Windows nie są podpisane płatnym certyfikatem, dlatego SmartScreen je oznacza. **Nie** oznacza to automatycznie, że Plinth jest niebezpieczne. Aby kontynuować:

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="Okno SmartScreen „System Windows ochronił ten komputer” z wyróżnionym linkiem „Więcej informacji”" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="Rozwinięte okno SmartScreen z przyciskiem „Uruchom mimo to”" />

1. Kliknij **Więcej informacji**.
2. Kliknij **Uruchom mimo to**.

#### Gdy Windows Defender oznaczy lub usunie plik

Heurystyka Defendera czasem uznaje niepodpisane instalatory NSIS i przenośne aplikacje Electron za podejrzane. Jeśli Defender podda kwarantannie `Plinth-win-x64-Setup.exe` lub `Plinth-win-x64-Portable.exe`, przywróć go w **Zabezpieczenia Windows → Ochrona przed wirusami i zagrożeniami → Historia ochrony**, a następnie dodaj plik wykonywalny Plinth jako dozwolony element w **Zarządzaj ustawieniami → Dodaj lub usuń wykluczenia**. Tak jak w SmartScreen, powodem jest brak podpisu wydawcy, nie wykryte złośliwe oprogramowanie.

> Pobieraj Plinth wyłącznie z oficjalnej strony wydań GitHub. Jeśli plik pochodzi z innej witryny albo został przesłany przez kogoś, usuń go i pobierz świeżą kopię z oficjalnego źródła. Kod jest publiczny, więc możesz go sprawdzić lub samodzielnie zbudować Plinth.

Wolisz Scoop? `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>Pierwsze uruchomienie w macOS

Kompilacje Plinth dla macOS są podpisane ad hoc, ale nie zostały poświadczone przez Apple, dlatego Gatekeeper blokuje pierwszy start komunikatem *Nie otwarto „Plinth.app” — Apple nie może sprawdzić, czy „Plinth.app” nie zawiera złośliwego oprogramowania*. Oznacza to, że macOS nie może sprawdzić aplikacji w Apple, a nie że pliki są uszkodzone. Instalacja przez Homebrew całkowicie omija to okno. Po użyciu DMG wystarczy jedno polecenie w Terminalu:

1. Przeciągnij `Plinth.app` z zamontowanego DMG do `/Applications`.
2. Otwórz Terminal i wykonaj te dwa polecenia:

**Usunięcie kwarantanny Gatekeepera**

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
```

Pierwsze polecenie usuwa atrybut kwarantanny nadany pobranemu plikowi przez macOS, a drugie uruchamia aplikację. Zwykle `sudo` nie jest potrzebne, ponieważ kopia w `/Applications` należy do Ciebie — dodaj je tylko po błędzie uprawnień.

**Apple Silicon a Intel:** na Macu serii M (M1 / M2 / M3 / M4) pobierz DMG `arm64`. Na Macu z procesorem Intel pobierz DMG `x64`. Niewłaściwa kompilacja zadziała przez Rosettę, ale będzie zauważalnie wolniejsza.

> Kompilacje macOS powstają w CI na maszynach Apple Silicon i Intel. W razie problemów [otwórz zgłoszenie](../../issues) — opinie użytkowników macOS bezpośrednio kształtują cykl testów.

### <a id="why-warning"></a>Dlaczego może pojawić się ostrzeżenie

Plinth ma otwarty kod i licencję MIT. Kompilacje Windows i macOS **nie są podpisane cyfrowo** — certyfikaty Apple Developer ID oraz Windows EV kosztują po kilkaset dolarów rocznie, co niezależny projekt musiałby opłacać sam. Bez tych podpisów Windows SmartScreen i macOS Gatekeeper ostrzegają przy pierwszym uruchomieniu. Ostrzeżenie oznacza, że *system nie rozpoznaje wydawcy*, a nie że Plinth jest złośliwym oprogramowaniem.

Trzy sposoby samodzielnego sprawdzenia Plinth, od najprostszego do najbardziej rygorystycznego:

- **Przeczytaj kod.** Każda linia jest na [GitHubie](https://github.com/fabwaseem/plinth), a aplikację możesz [zbudować ze źródeł](#tech).
- **Sprawdź SHA256.** Porównaj plik z opublikowanym [`SHA256SUMS`](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) — zobacz niżej [Sprawdź pobrany plik](#verify).
- **Użyj zewnętrznego skanera.** Prześlij plik do [VirusTotal](https://www.virustotal.com).

### <a id="code-signing-policy"></a>Code signing policy

Free code signing provided by [SignPath.io](https://signpath.io), certificate by [SignPath Foundation](https://signpath.org).

This is Plinth's code signing policy. It names who may commit and who may approve a Windows signature. It does not mean a published release is already signed. Windows signing in GitHub Actions runs only after the SignPath secret and repository variables in [CODE_SIGNING.md](../../docs/CODE_SIGNING.md) are set. Until then, Windows artifacts are published unsigned.

- Committers: [fabwaseem](https://github.com/fabwaseem)
- Approvers: [fabwaseem](https://github.com/fabwaseem)

Privacy is described in [Privacy](#privacy). Plinth can send anonymous aggregate telemetry, and that can be turned off in Settings.

### <a id="linux-first-launch"></a>Pierwsze uruchomienie w Linux

AppImage uruchamia się bezpośrednio, bez instalacji. Trzeba jedynie nadać plikowi prawo wykonywania.

**Menedżer plików:** kliknij `.AppImage` prawym przyciskiem → **Właściwości** → **Uprawnienia** → włącz **Zezwól na wykonywanie pliku jako programu**, a następnie kliknij dwukrotnie.

**Terminal:**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

Jeśli uruchamianie nadal się nie powiedzie, uruchom bez montowania — pakiet FUSE nie jest potrzebny:

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**Opcjonalna integracja z pulpitem:** zainstaluj raz [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher), a każda dwukrotnie kliknięta AppImage zostanie automatycznie dodana do menu aplikacji — bez ręcznego pliku `.desktop`.

**Zwykłe archiwum tar (bez FUSE i instalacji):**

Kompilacja `.tar.gz` to ta sama aplikacja bez opakowania AppImage — rozpakuj ją w dowolnym miejscu i uruchom. Instalator ani FUSE nie są potrzebne.

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**Pliki Linux na stronie wydania są dostępne wyłącznie dla x86_64.** Na urządzeniach ARM64 (Raspberry Pi, Asahi Linux) Flatpak zainstaluje się, lecz uruchomienie zakończy się błędem `bwrap: execvp ldconfig: Exec format error`.

<details>
<summary><strong><a id="verify"></a>Sprawdź pobrany plik (SHA256)</strong></summary>

Każde wydanie publikuje plik `SHA256SUMS` obok programów. Aby sprawdzić, czy pobrany plik nie został uszkodzony ani zmieniony w drodze, oblicz jego skrót lokalnie i porównaj z odpowiednim wierszem w `SHA256SUMS`. Otwórz stronę najnowszego wydania → **Assets** → pobierz `SHA256SUMS`.

**Windows (PowerShell lub Wiersz polecenia):**

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

Chcesz zewnętrznego skanowania pod kątem złośliwego oprogramowania? Prześlij plik do [VirusTotal](https://www.virustotal.com). Kilka ogólnych alertów heurystycznych z mniej znanych silników jest normalne dla niepodpisanych aplikacji Electron; liczne wykrycia przez główne silniki byłyby powodem do niepokoju.

</details>

<details>
<summary><strong>Windows: instalator a wersja przenośna</strong></summary>

| | Instalator NSIS | Przenośny `.exe` |
| --- | --- | --- |
| Wymaga instalacji | Tak | Nie — uruchom z dowolnego miejsca |
| Automatyczne aktualizacje | ✅ w aplikacji | ❌ pobieranie ręczne |
| Szybkość uruchamiania | ✅ szybciej | ⚠️ wolniejszy zimny start |
| Dodaje do menu Start | Yes | No |
| Łatwe odinstalowanie | Yes | ❌ usuń plik |

**Zalecenie:** użyj instalatora NSIS, aby uzyskać automatyczne aktualizacje i szybszy start. Wersję przenośną `.exe` wybierz, jeśli nie chcesz instalacji ani wpisów w rejestrze.

</details>

---

## <a id="why"></a>Dlaczego Plinth

Plinth ma jedno zadanie: wklejasz adres URL i otrzymujesz czysty plik lokalny. Bez płatnych zachęt i zbierania danych.

| | Plinth |
| --- | --- |
| Bezpłatne, bez planu premium | Yes |
| Otwarty kod źródłowy | Yes |
| Wyłącznie lokalne przetwarzanie | Yes |
| Bez limitów użycia | Yes |
| Wieloplatformowa aplikacja komputerowa | Yes |
| Napisy + SponsorBlock | Yes |

---

## <a id="privacy"></a>Prywatność

Pliki są pobierane przez [yt-dlp](https://github.com/yt-dlp/yt-dlp) bezpośrednio z YouTube do wybranego folderu — bez pośrednictwa serwera zewnętrznego. Historia oglądania i pobierania, adresy URL oraz zawartość plików pozostają na urządzeniu.

Plinth wysyła przez [OpenPanel](https://openpanel.dev) anonimową, zagregowaną telemetrię — tylko tyle, aby niezależny projekt mógł rozumieć błędy, awarie, opinie, systemy operacyjne i wersje aplikacji. Bez adresów URL, tytułów filmów, ścieżek plików, danych kont, odcisków urządzenia ani danych osobowych. Identyfikator instalacji jest losowy i niezwiązany z Twoją tożsamością. Możesz zrezygnować w Ustawieniach.

Explore ma własne logowanie, oddzielone od Twojej przeglądarki, a Plinth nigdy nie odczytuje ani nie wypełnia formularza logowania — wpisujesz dane na stronie Google. Pobieranie odbywa się bez logowania; tylko gdy jedno kończy się błędem, który może naprawić konto, Plinth odczytuje logowanie na nowo, przechowuje je w pliku tymczasowym na czas tego pobierania i potem go usuwa. Wylogowanie z Explore w Ustawieniach usuwa logowanie.

---

## <a id="faq"></a>Najczęstsze pytania

**Czy to naprawdę jest bezpłatne?**
Tak — licencja MIT, brak planu premium i blokowania funkcji.

**Jakie jakości filmów mogę pobierać?**
Wszystko, co udostępnia YouTube: 4K UHD (2160p), 1440p, 1080p, 720p, 480p, 360p oraz sam dźwięk. Strumienie 60 kl./s, 120 kl./s i HDR są zachowywane bez zmian.

**Czy mogę wyodrębnić sam dźwięk jako MP3?**
Tak. W menu formatu wybierz *tylko dźwięk*, a następnie MP3, M4A/AAC, Opus lub WAV.

**Jak pobrać filmy, które wymagają konta YouTube?**
Zaloguj się raz na karcie Explore. Plinth pobierze wtedy prywatne filmy i filmy tylko dla członków, które może oglądać Twoje konto, filmy z ograniczeniem wieku (jeśli wiek konta jest zweryfikowany) oraz listy Do obejrzenia i Polubione. Używa logowania tylko wtedy, gdy pobieranie kończy się błędem, który może naprawić konto; wszystko inne pobiera się jak dotąd. To opcja **Logowanie w Explore**, wymieniona jako pierwsza i oznaczona jako Zalecana w ustawieniach cookie, a Plinth wybiera ją za Ciebie przy pierwszym otwarciu Explore. Wiki yt-dlp ostrzega, że [automatyzacja z zalogowanym kontem może spowodować oznaczenie konta Google](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies), więc bezpieczniej użyć konta dodatkowego.

**Czy aplikacja będzie działać po zmianach w YouTube?**
yt-dlp aktualizuje się automatycznie przy uruchomieniu, a Plinth szybko publikuje poprawki po zmianach w YouTube. Gdy YouTube prosi o potwierdzenie, że nie jesteś botem, Plinth próbuje też użyć Twojego logowania w Explore, jeśli jest ono aktywne, a cookie z pliku lub z przeglądarki są dostępne w ustawieniach cookie.

**W jakich językach jest dostępne Plinth?**
30 języków od razu po instalacji: Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文. Przy pierwszym uruchomieniu Plinth automatycznie wykrywa język systemu operacyjnego, a potem można go zmienić w dowolnym momencie za pomocą selektora na pasku narzędzi. Pliki JSON używane w aplikacji znajdują się w src/shared/i18n/locales/, a katalogi PO dla tłumaczy w i18n/locales/ — otwórz PR na GitHubie, aby pomóc.

**Czy muszę instalować coś jeszcze?**
Nie. yt-dlp jest pobierane automatycznie przy pierwszym uruchomieniu i zapisywane w pamięci podręcznej, a ffmpeg i ffprobe są dołączone do aplikacji. Później nie potrzeba dodatkowej konfiguracji.

**Czy mogę pobierać playlisty lub całe kanały?**
Tak, jedno i drugie. Wklej adres playlisty lub kanału (np. `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`), wybierz liczbę wpisów do sprawdzenia, a następnie dodaj całą listę do kolejki albo zaznacz konkretne filmy. Filtry zakresu dat pojawią się wkrótce.

**macOS twierdzi, że „aplikacja jest uszkodzona” — co zrobić?**
To Gatekeeper blokuje niepodpisaną aplikację, a nie faktyczne uszkodzenie. W sekcji [Pierwsze uruchomienie w macOS](#macos-first-launch) znajdziesz polecenia Terminala usuwające kwarantannę i uruchamiające Plinth.

**Czy pobieranie filmów z YouTube jest legalne?**
W większości jurysdykcji jest ogólnie akceptowane do użytku osobistego i prywatnego. Odpowiadasz za przestrzeganie [Warunków korzystania](https://www.youtube.com/t/terms) z YouTube oraz lokalnego prawa autorskiego.

---

## <a id="roadmap"></a>Plan rozwoju

Nadal planowane — mniej więcej w kolejności priorytetów:

| Funkcja | Opis |
| --- | --- |
| **Filtry playlist i kanałów** | Filtrowanie zakresu dat podczas odczytywania playlisty lub kanału |
| **Preferencje ścieżek dźwiękowych YouTube** | Globalna preferencja języka mówionego z wyjątkami w profilach, gdy YouTube oferuje wiele ścieżek |
| **Skuteczniejsze odzyskiwanie przez ponawianie** | Nowa ścieżka ponawiania pobrań przerwanych przez niestabilne lub problematyczne połączenie internetowe |
| **Pełny panel menedżera pobierania** | Rozbudowanie panelu kolejki o pełniejsze zarządzanie, w tym zmianę folderów docelowych zadań oczekujących |
| **Zaplanowane pobieranie** | Uruchamianie kolejki o ustawionej porze, na przykład w nocy |
| **Przycinanie klipów** | Pobieranie tylko fragmentu między czasem początkowym a końcowym |
| **Pakiet AUR** | Instalacja w Arch Linux i Omarchy przez `yay -S plinth-bin` |

Masz pomysł na funkcję? [Otwórz propozycję](../../issues) — opinie społeczności kształtują priorytety.

---

## <a id="support"></a>Wesprzyj Plinth

Plinth jest bezpłatne i ma licencję MIT — bez reklam i płatnego planu. Jeśli oszczędza Ci czas, możesz wesprzeć rozwój przez Bitcoin lub Tron; adresy znajdują się w [DONATE.md](../../docs/DONATE.md), jedynym oficjalnym źródle. Plinth nigdy nie wyśle adresu e-mailem ani prywatną wiadomością. Gwiazdka dla repozytorium, zgłaszanie błędów i ulepszanie tłumaczeń pomagają równie mocno.

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>Technologie

<details>
<summary><strong>Technologie</strong></summary>

- **Electron** — wieloplatformowa powłoka aplikacji komputerowej
- **React 19** + **TypeScript** — interfejs użytkownika
- **Tailwind CSS v4** — style
- **Zustand** — zarządzanie stanem
- **yt-dlp** + **ffmpeg** — silnik pobierania i multipleksowania (yt-dlp pobierane podczas działania; ffmpeg/ffprobe dołączane podczas kompilacji)
- **Vite** + **electron-vite** — narzędzia kompilacji
- **Vitest** + **Playwright** — testy jednostkowe i end-to-end

</details>

<details>
<summary><strong>Budowanie ze źródeł</strong></summary>

### Wymagania wstępne — wszystkie platformy

| Narzędzie | Wersja | Instalacja |
| --------- | ------ | ---------- |
| Git       | dowolna | [git-scm.com](https://git-scm.com) |
| Node.js   | 24.21.0 | `mise install` lub `.node-version` |
| Bun       | 1.4.2  | `mise install` lub `package.json` `packageManager` |

Zalecane: zainstaluj `mise`, a następnie uruchom `mise install` w repozytorium. Bez mise ręcznie aktywuj Node.js zgodnie z `.node-version` oraz Bun zgodnie z `package.json`, zanim wykonasz `bun run bootstrap`.

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Do przebudowania zależności natywnych mogą być potrzebne Visual Studio Build Tools i Python.

### macOS

```bash
brew install mise
xcode-select --install
```

Po sklonowaniu uruchom w repozytorium `mise trust && mise install`. Jeśli powłoka używa już `fnm`, `nvm` lub Bun z Homebrew, aktywuj mise w `~/.zshrc`, aby Plinth korzystało z Node.js 24.21.0 i Bun 1.4.2:

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

# Zależności kompilacji i środowiska Electron
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# Tylko testy E2E (Electron wymaga ekranu)
sudo apt install -y xvfb
```

### Sklonuj i uruchom

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # zalecane; pomiń, jeśli ręcznie aktywowano przypięte wersje
bun run bootstrap
bun run doctor
bun run dev            # aplikacja Electron z rendererem Vite
```

### Zbuduj pakiet do dystrybucji

```bash
bun run build        # kontrola typów + kompilacja
bun run dist         # pakiet dla bieżącego systemu
bun run dist:win     # pakiety Windows na obsługiwanym hoście
```

> `bun run bootstrap` instaluje zależności, przebudowuje zależności aplikacji Electron, sprawdza Electron, przygotowuje wbudowane ffmpeg/ffprobe do pracy programistycznej i instaluje Playwright Chromium. yt-dlp jest zarządzane podczas działania w folderze danych aplikacji; ffmpeg i ffprobe są dołączone do każdego wydania Plinth.

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

## Warunki użytkowania

Plinth jest narzędziem wyłącznie do użytku osobistego i prywatnego. Tylko Ty odpowiadasz za zgodność pobieranych materiałów z [Warunkami korzystania](https://www.youtube.com/t/terms) z YouTube oraz prawem autorskim obowiązującym w Twojej jurysdykcji. Nie używaj Plinth do pobierania, powielania ani rozpowszechniania treści, do których nie masz praw. Twórcy nie odpowiadają za niewłaściwe użycie.

Licencja MIT · Stworzone z troską przez <a href="https://github.com/fabwaseem">Waseem Anjum</a>

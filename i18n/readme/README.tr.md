<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — Windows, macOS ve Linux için Ücretsiz Açık Kaynak YouTube (+ 2000 site) İndirici

**YouTube ve 2000+ desteklenen siteden** video, Shorts, müzik, kanal, podcast veya ses parçaları indir — 60 fps'de 4K HDR'a kadar ya da MP3 / AAC / Opus olarak. Windows, macOS ve Linux'ta yerel çalışır. **Reklam yok, şişkinlik yok, ek satış yok.**

**Şu dilde oku:** [Afaan Oromoo](README.om.md) · [Bahasa Indonesia](README.id.md) · [Deutsch](README.de.md) · [English](../../README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Tiếng Việt](README.vi.md) · **Türkçe** · [አማርኛ](README.am.md) · [العربية](README.ar.md) · [اردو](README.ur.md) · [پښتو](README.ps.md) · [فارسی](README.fa.md) · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · [ไทย](README.th.md) · [မြန်မာဘာသာ](README.my.md) · [Ελληνικά](README.el.md) · [Русский](README.ru.md) · [Српски](README.sr.md) · [Українська](README.uk.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ En son sürümü kur**](#install) · [**Web sitesi**](https://plinth.fabwaseem.com) · [Windows ilk başlatma](#windows-first-launch) · [macOS ilk başlatma](#macos-first-launch) · [Linux ilk başlatma](#linux-first-launch)

Plinth sana zaman kazandırıyorsa, bir ⭐ başkalarının onu bulmasına yardım eder.

_Last updated: 2026-10-17._

> 🌐 Bu, yapay zeka destekli bir çeviridir. [İngilizce README](README.md) gerçek kaynak kabul edilir. Hata mı gördün? [PR'lar memnuniyetle karşılanır](../../pulls).

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Winget](https://winget.run/pkg/WaseemAnjum/Plinth), [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download.

---

## İçindekiler

- [Özellikler](#features)
- [Kurulum ve ilk başlatma](#install)
- [Neden Plinth](#why)
- [Gizlilik](#privacy)
- [SSS](#faq)
- [Yol haritası](#roadmap)
- [Plinth'yi destekle](#support)
- [Kullanılan teknolojiler](#tech)

---

## <a id="features"></a>Özellikler

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>Hızlı İndirme ana ekranı</b><br/>Bir URL yapıştır ve etkin profilinle anında çek

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>YouTube'a Plinth içinden göz at ve bulunduğun sayfayı aktif profilinle indir

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>Toplu URL modu</b><br/>Bir liste yapıştır, otomatik tekilleştir, hepsini tek seferde kuyruğa al

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>Paralel indirme kuyruğu</b><br/>Canlı ilerlemeyle aynı anda birden fazla indirme

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>Yeniden kullanılabilir indirme profilleri</b><br/>Biçim, kalite ve çıktı ön ayarlarını kaydet — her indirmede yeniden kullan

### Explore: YouTube'a Plinth içinden göz at

- **Explore sekmesi** — YouTube'a Plinth içinden göz at ve bulduklarını bağlantı kopyalamadan indir. **İndir · *profilin*** baktığın videoyu, oynatma listesini veya kanalı kuyruğa ekler; yanındaki ok profil değiştirir, sihirli değnek ise biçim, altyazı ve daha fazlasını seçebileceğin adım adım indirmeyi açar
- **Adres çubuğu** — YouTube'da aramak için yaz ya da bir YouTube bağlantısı yapıştır. Explore yalnızca YouTube'a göz atar, bu yüzden başka bir siteden gelen bağlantı orada açılmaz ama tek tıkla indirebilirsin
- **Hesap gerektiren indirmeler** — Explore'da bir kez giriş yap; Plinth hesabının izleyebildiği özel ve üyelere özel videoları, hesabın yaşı doğrulanmışsa yaş kısıtlamalı videoları, ayrıca Daha Sonra İzle ve Beğenilenler listelerini indirebilir. Plinth yine de oturum açmadan indirir ve Explore girişini yalnızca bir indirme, hesabın düzeltebileceği bir şekilde başarısız olduğunda kullanır. YouTube robot olmadığını doğrulamanı istediğinde Plinth Explore girişini de dener
- **İkincil hesap kullan** — Explore'un ilk ekranı nedenini açıklar: bir hesapla indirmek, o hesabın kısıtlanması riskini bir ölçüde taşır. Girişi unutmak istediğinde Ayarlar'dan Explore'dan çıkış yap
- **Reklam engelleyici** — Explore kendi sayfalarındaki reklamları ve izleyicileri engeller; indirmeler etkilenmez. Varsayılan olarak açık, Explore araç çubuğundaki kalkana tek tıklama onu kapatır ve Google'ın giriş sayfalarında asla devreye girmez. YouTube, giriş yapılmış hesaplarda reklam engelleyicilere karşı önlem alabilir

### Kalite ve biçimler

- **4K UHD (2160p)**, 1440p, 1080p, 720p, 480p, 360p'ye kadar
- **Yüksek kare hızı** olduğu gibi korunur — 60 fps, 120 fps, HDR
- **Ses** — yalnızca sesi MP3, M4A/AAC, Opus veya WAV olarak dışa aktar. Etkileşimli indirmelerde varsa kaynağın yerel surround/Dolby parçalarını (AC-3, E-AC-3, 5.1, DRC) seç veya genel **Surround / Dolby tercih et** varsayılanı ayarla
- Hızlı ön ayarlar: *En iyi kalite* · *Dengeli* · *Küçük dosya*

### İş akışı

- **Genel indirme kısayolu** — herhangi bir uygulamada bir bağlantı kopyala ve `Ctrl+Shift+D` (macOS'ta `Cmd+Shift+D`) tuşlarına bas; Plinth pencereyi açmadan aktif profilinle kuyruğa ekler ve bir bildirim bunu doğrular. Varsayılan olarak açık, yeniden atanabilir
- **Esnek başlangıç modları** — rehberli tek indirme, oynatma listesi/kanal seçici, toplu URL yapıştırma, kayıtlı varsayılanlarla Hızlı İndirme veya Explore'da gezip indirme seç
- **Merkezi indirme kuyruğu** — her tekil, oynatma listesi, toplu veya hızlı iş; ilerleme, duraklatma, sürdürme, iptal, yeniden deneme ve öncelik kontrolü için tek yere gelir
- **Pano izleme** — bir YouTube bağlantısı kopyala; uygulamaya tekrar odaklandığında Plinth URL'yi otomatik doldurur (Gelişmiş ayarlardan aç)
- **Otomatik URL temizleme** — izleme parametrelerini (`si`, `pp`, `utm_*`, `fbclid`, `gclid`) kaldırır ve `youtube.com/redirect` bağlantılarını çözer
- **Tepsi modu** — pencere kapansa bile indirmeler arka planda sürer
- **30 dil** — sistem dilini otomatik algılar, istediğin zaman değiştirilebilir
- **Oynatma listesi eşitleme** — zaten indirilmiş videoları atlamak için bir oynatma listesini yerel klasöre karşı yeniden tara; her indirilen videoyla güncellenen bir `.m3u` oynatma listesi dosyası oluşturur
- **Hız ve tempo kontrolleri** — indirme bant genişliğini sınırla, bir videonun aynı anda kaç parçasının indirileceğini ayarla ve ön ayarlarla istek gecikmeleri ekle (*Kapalı · Dengeli · Dikkatli · Özel*)
- **Dosya adı şablonları** — indirmelerinizi `{title}`, `{uploader}`, `{id}`, `{date}`, `{resolution}` ve `{playlist_index}` ile dilediğiniz gibi adlandırın; genel olarak veya indirme profili başına
- **Aynı anda indirme ve otomatik yeniden deneme** — kuyruktaki kaç indirmenin aynı anda çalışacağını seç ve ağ ya da sunucu kaynaklı sorun yaşayan bir indirmeyi Plinth'nin, her denemeden önce daha uzun bekleyerek yeniden denemesine izin ver
- **Oynatma listesinde öğe başına profil** — bir oynatma listesindeki her videoya, tüm liste için tek bir ayar yerine kendi indirme profilini atayın; böylece tek geçişte bazılarını tam kalitede arşivleyip kalanını MP3 olarak alabilirsiniz
- **Hızlı İndirme arka planda çalışır** — bağlantı hemen İndirmeler'de görünür ve orada hazırlanır, **Görüntüle** içeren bir not bunu doğrular ve URL alanı bir sonraki bağlantı için temizlenir. Öncekiler hazırlanırken istediğin kadar başlat
- **İndirmeler sana neye ihtiyaç olduğunu söyler** — Plinth bir bağlantıyı okuyamazsa satırı nedenini söyler ve çözümü sunar: Tekrar dene, çerezleri aç veya Explore'da giriş yap. Çerezler kapalıyken **Explore ile giriş yap**, giriş yaptıktan sonra bunu senin için yeniden dener. Yükleme sınırından uzun bir oynatma listesi satırında bekler; tamamını, ilk birkaç videoyu veya bir incelemeyi seçmeni bekler. İndirmeler sekmesi sende bekleyen satırları sayar

### Altyazılar ve son işleme

- **Altyazılar** SRT, VTT veya ASS olarak — manuel ya da otomatik oluşturulmuş, mevcut herhangi bir dilde
- Videonun yanına kaydet, `.mkv` içine göm veya `Subtitles/` alt klasöründe düzenle
- **SponsorBlock** — sponsorları, intro'ları, outro'ları ve öz tanıtımları atla ya da bölüm olarak işaretle
- **Gömülü meta veriler** — başlık, yükleme tarihi, kanal, açıklama, küçük resim ve bölüm işaretleri dosyaya yazılır
- **Yalnızca altyazı toplu işleri** — bir URL listesi yapıştırın veya bir oynatma listesi açın, Altyazılar'ı seçin ve her video için yalnızca altyazı dosyalarını alın

### YouTube + 2000 site

- **YouTube, tam kapsamlı** — Videolar, Shorts, Kanallar, Oynatma Listeleri, YouTube Music ve Podcast'ler birinci sınıf kaynak olarak ele alınır
- **yt-dlp aracılığıyla 2000+ diğer site** — Vimeo, Twitch, Twitter/X, TikTok, SoundCloud, Bandcamp, Bilibili, BBC iPlayer, archive.org ve daha fazlası
- **Yalnızca ses ve altyazılar** yalnızca YouTube'da değil, desteklenen her sitede çalışır
- Bir site değişirse yt-dlp haftalık düzeltmeler yayınlar ve Plinth açılışta ikili dosyayı otomatik günceller

### Gizlilik ve kontrol

- %100 yerel işleme — indirmeler doğrudan YouTube'dan diskine gider
- **Açık kaynak** — her satır denetlenebilir, MIT lisanslı
- Dosyalar doğrudan seçtiğin klasöre kaydedilir

---

## <a id="install"></a>Kurulum ve ilk başlatma

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

Sürümler yalnızca x86_64'tür. `curl` yok mu? `curl -fsSL` yerine `wget -qO-` kullanın.

| Platform | Doğrudan indirme |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**Tüm sürüm dosyaları →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>Windows ilk başlatma

İlk başlatmada **"Windows bilgisayarınızı korudu"** veya **"Bilinmeyen yayımcı"** görebilirsin. Bu hem `Plinth-win-x64-Setup.exe` hem de `Plinth-win-x64-Portable.exe` için geçerlidir. Plinth ücretsiz ve açık kaynaklıdır; Windows derlemeleri ücretli bir sertifikayla kod imzalı değildir, SmartScreen bu yüzden işaretler. Bu, Plinth’nin otomatik olarak güvensiz olduğu anlamına gelmez. Devam etmek için:

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="SmartScreen "Windows bilgisayarınızı korudu" penceresinde "Daha fazla bilgi" bağlantısı vurgulanmış" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="Daha fazla bilgi açıldıktan sonra "Yine de çalıştır" düğmesini gösteren SmartScreen penceresi" />

1. **Daha fazla bilgi** seçeneğine tıkla.
2. **Yine de çalıştır** seçeneğine tıkla.

#### Windows Defender dosyayı işaretler veya kaldırırsa

Defender sezgisel kuralları bazen imzasız NSIS kurucuları ve Electron taşınabilirlerini şüpheli olarak işaretler. Defender `Plinth-win-x64-Setup.exe` veya `Plinth-win-x64-Portable.exe` dosyasını karantinaya alırsa **Windows Güvenliği → Virüs ve tehdit koruması → Koruma geçmişi** içinden geri yükle, sonra Plinth yürütülebilir dosyasını **Ayarları yönet → Dışlamalar ekle veya kaldır** altında izin verilen öğe olarak ekle. SmartScreen'de olduğu gibi tetikleyici eksik yayımcı imzasıdır, tespit edilmiş kötü amaçlı yazılım değil.

> Plinth'yi yalnızca resmi GitHub Releases sayfasından indir. Dosyayı başka bir web sitesinden aldıysan veya biri sana gönderdiyse sil ve resmi kaynaktan yeni kopya indir. Kaynak kodu herkese açık; istersen inceleyebilir veya Plinth'yi kendin derleyebilirsin.

Scoop mu tercih edersiniz? `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>macOS ilk başlatma

Plinth henüz macOS için kod imzalı değildir, bu yüzden Gatekeeper DMG'den kurduktan sonra korkutucu *"Plinth.app is damaged and can't be opened"* penceresini gösterebilir. Bu mesaj macOS'un imzasız uygulamayı karantinaya aldığı anlamına gelir; uygulama dosyalarının gerçekten hasarlı olduğu anlamına gelmez. Güncel macOS'ta güvenilir çözüm Terminal'dir:

1. Bağlanan DMG'den `Plinth.app` dosyasını `/Applications` içine sürükle.
2. Terminal'i aç ve şu iki komutu çalıştır:

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
open /Applications/Plinth.app
```

İlk komut kurulu Plinth kopyandan karantina özniteliğini kaldırır. İkinci komut uygulamayı başlatır. `sudo` Mac parolanı isteyebilir; Terminal yazarken karakterleri göstermez.

**Apple Silicon ve Intel:** M serisi Mac'te (M1 / M2 / M3 / M4) `arm64` DMG indir. Intel Mac'lerde `x64` DMG indir. Yanlış derleme Rosetta ile çalışır ama belirgin şekilde daha yavaştır.

> macOS derlemeleri Apple Silicon ve Intel CI runner'larında üretilir. Sorun yaşarsan lütfen [issue aç](../../issues) — macOS kullanıcılarından gelen geri bildirim macOS test döngüsünü doğrudan şekillendirir.

### <a id="why-warning"></a>Neden uyarı görebilirsin

Plinth açık kaynaklı ve MIT lisanslıdır. Windows ve macOS derlemeleri **kod imzalı değildir** — Apple Developer ID ve Windows EV kod imzalama sertifikalarının her biri yılda yüzlerce dolara mal olur; bağımsız bir proje bunu cebinden öder. Bu imzalar olmayınca Windows SmartScreen ve macOS Gatekeeper ilk başlatmada uyarır. Uyarılar *işletim sisteminin yayımcıyı tanımadığı* anlamına gelir — Plinth'nin kötü amaçlı yazılım olduğu anlamına gelmez.

Plinth'yi kendin doğrulamanın giderek daha sıkı üç yolu:

- **Kaynağı oku.** Her satır [GitHub](https://github.com/fabwaseem/plinth) üzerinde ve [kaynaktan derleyebilirsin](#tech).
- **SHA256 kontrol et.** Dosyanı yayımlanan [`SHA256SUMS`](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) ile eşleştir — aşağıdaki [İndirmeni doğrula](#verify) bölümüne bak.
- **Üçüncü taraf taraması yap.** Dosyayı [VirusTotal](https://www.virustotal.com) üzerine yükle.

### <a id="linux-first-launch"></a>Linux ilk başlatma

AppImage'lar doğrudan çalışır — kurulum gerekmez. Sadece dosyayı yürütülebilir olarak işaretlemen gerekir.

**Dosya yöneticisi:** `.AppImage` üzerine sağ tık → **Özellikler** → **İzinler** → **Dosyayı program olarak çalıştırmaya izin ver** seçeneğini aç, sonra çift tıkla.

**Terminal:**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

Açılış hâlâ başarısızsa bağlamadan çalıştırın — FUSE paketi gerekmez:

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**İsteğe bağlı masaüstü entegrasyonu:** [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) bir kez kurulduğunda, çift tıkladığın her AppImage otomatik olarak başlatıcı menüne kaydolur — elle `.desktop` dosyası gerekmez.

**Düz arşiv (FUSE yok, kurulum yok):**

`.tar.gz` sürümü, AppImage sarmalayıcısı olmayan aynı uygulamadır — istediğiniz yere çıkarın ve çalıştırın. Kurulum programı ve FUSE paketi gerekmez.

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**Sürüm sayfasındaki Linux indirmeleri yalnızca x86_64'tür.** ARM64 makinelerde (Raspberry Pi, Asahi Linux) Flatpak kurulur ama açılışta `bwrap: execvp ldconfig: Exec format error` hatasıyla başarısız olur.

<details>
<summary><strong><a id="verify"></a>İndirmeni doğrula (SHA256)</strong></summary>

Her sürüm ikili dosyaların yanında bir `SHA256SUMS` dosyası yayımlar. İndirmenin aktarım sırasında bozulmadığını veya değiştirilmediğini kontrol etmek için dosyanı yerel olarak hash'le ve `SHA256SUMS` içindeki satırla eşleştir. En son sürüm sayfasını aç → **Assets** → `SHA256SUMS` indir.

**Windows (PowerShell veya Komut İstemi):**

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

Üçüncü taraf kötü amaçlı yazılım taraması ister misin? Dosyayı [VirusTotal](https://www.virustotal.com) üzerine yükle. İmzasız Electron uygulamaları için küçük motorlardan gelen birkaç genel sezgisel uyarı normaldir; büyük motorlardan yaygın tespitler gerçek bir endişe olurdu.

</details>

<details>
<summary><strong>Windows: Kurucu mu Taşınabilir mi</strong></summary>

| | NSIS Kurucu | Taşınabilir `.exe` |
| --- | --- | --- |
| Kurulum gerekli | Evet | Hayır — her yerden çalıştır |
| Otomatik güncellemeler | ✅ uygulama içinde | ❌ elle indirme |
| Başlangıç hızı | ✅ daha hızlı | ⚠️ soğuk başlangıç daha yavaş |
| Başlat Menüsüne ekler | Yes | No |
| Kolay kaldırma | Yes | ❌ dosyayı sil |

**Öneri:** otomatik güncellemeler ve daha hızlı başlangıç için NSIS kurucuyu kullan. Kurulum yapmadan, kayıt defterine dokunmadan kullanmak için taşınabilir `.exe` uygundur.

</details>

---

## <a id="why"></a>Neden Plinth

Plinth tek bir şey için yapılmıştır: URL yapıştır, temiz bir yerel dosya al. Ek satış yok, veri toplama yok.

| | Plinth |
| --- | --- |
| Ücretsiz, premium katman yok | Yes |
| Açık kaynak | Yes |
| Yalnızca yerel işleme | Yes |
| Kullanım sınırı yok | Yes |
| Platformlar arası masaüstü uygulaması | Yes |
| Altyazılar + SponsorBlock | Yes |

---

## <a id="privacy"></a>Gizlilik

İndirmeler [yt-dlp](https://github.com/yt-dlp/yt-dlp) ile doğrudan YouTube'dan seçtiğin klasöre alınır — hiçbir şey üçüncü taraf sunucu üzerinden yönlendirilmez. İzleme geçmişi, indirme geçmişi, URL'ler ve dosya içerikleri cihazında kalır.

Plinth [OpenPanel](https://openpanel.dev) üzerinden anonim, toplu telemetri gönderir — bağımsız bir projenin hataları, çökmeleri, geri bildirimleri, işletim sistemlerini ve uygulama sürümlerini anlamasına yetecek kadar. URL, video başlığı, dosya yolu, hesap bilgisi, parmak izi veya kişisel veri yoktur. Kurulum başına kimlik rastgeledir ve kimliğinle bağlantılı değildir. Ayarlar'dan çıkabilirsin.

Explore, tarayıcından ayrı kendi girişini tutar ve Plinth giriş formunu asla okumaz ya da doldurmaz — Google'ın kendi sayfasına yazarsın. İndirmeler oturum açmadan çalışır; yalnızca biri hesabın düzeltebileceği bir şekilde başarısız olduğunda Plinth girişi o an okur, o indirme için geçici bir dosyada tutar ve dosyayı sonra siler. Ayarlar'dan Explore'dan çıkış yapmak girişi unutturur.

---

## <a id="faq"></a>SSS

**Gerçekten ücretsiz mi?**
Evet — MIT lisanslı, premium katman yok, özellik kilidi yok.

**Hangi video kalitelerini indirebilirim?**
YouTube ne sunuyorsa: 4K UHD (2160p), 1440p, 1080p, 720p, 480p, 360p ve yalnızca ses. 60 fps, 120 fps ve HDR akışlar olduğu gibi korunur.

**Yalnızca sesi MP3 olarak çıkarabilir miyim?**
Evet. Biçim menüsünde *yalnızca ses* seç ve MP3, M4A/AAC, Opus veya WAV tercih et.

**Hesap gerektiren YouTube videolarını nasıl indiririm?**
Explore sekmesinde bir kez giriş yap. Plinth bunun ardından hesabının izleyebildiği özel ve üyelere özel videoları, hesabın yaşı doğrulanmışsa yaş kısıtlamalı videoları, ayrıca Daha Sonra İzle ve Beğenilenler listelerini indirebilir. Girişi yalnızca bir indirme, hesabın düzeltebileceği bir şekilde başarısız olduğunda kullanır; geri kalan her şey eskisi gibi iner. Bu, çerez ayarlarında en başta listelenen ve Önerilen olarak işaretlenen **Explore girişi** seçeneğidir ve Explore'u ilk açtığında Plinth bunu senin için seçer. yt-dlp wiki'si [oturum açılmış otomasyonun bir Google hesabını işaretleyebileceğini](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies) belirtir, bu yüzden ikincil hesap daha güvenli bir seçimdir.

**YouTube bir şey değiştirdiğinde çalışmaya devam eder mi?**
yt-dlp açılışta otomatik güncellenir ve YouTube bir şey değiştirdiğinde Plinth hızlıca düzeltme yayımlar. YouTube robot olmadığını doğrulamanı istediğinde, Explore'da giriş yaptıysan Plinth Explore girişini de dener; bir dosyadaki veya tarayıcındaki çerezler de çerez ayarlarında kullanılabilir.

**Plinth hangi dillerde mevcut?**
Kutudan çıktığı gibi 30 dil: Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文. Plinth ilk açılışta işletim sisteminin dilini otomatik algılar ve araç çubuğundaki dil seçiciden istediğin zaman değiştirebilirsin. Çalışma zamanı locale JSON dosyaları src/shared/i18n/locales/ içinde, çevirmenlere yönelik PO katalogları i18n/locales/ içinde bulunur — katkı için GitHub'da PR aç.

**Başka bir şey kurmam gerekir mi?**
Hayır. yt-dlp ilk açılışta otomatik indirilir ve makinede önbelleğe alınır; ffmpeg ve ffprobe uygulamayla gelir. Bundan sonra ek kurulum gerekmez.

**Oynatma listeleri veya tüm kanalları indirebilir miyim?**
Evet — ikisi de. Bir oynatma listesi URL'si veya kanal URL'si yapıştır (örn. `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`); kaç kayıt taranacağını seç, sonra tüm listeyi kuyruğa al veya belirli videoları seç. Tarih aralığı filtreleri yakında geliyor.

**macOS "uygulama hasarlı" diyor — ne yapmalıyım?**
Bu, macOS Gatekeeper’ın imzasız uygulamayı engellemesidir; gerçek hasar değildir. Karantinayı kaldırıp Plinth’yi başlatan Terminal komutları için [macOS ilk başlatma](#macos-first-launch) bölümüne bak.

**YouTube videoları indirmek yasal mı?**
Kişisel, özel kullanım için çoğu yargı alanında genellikle kabul edilir. YouTube'un [Hizmet Şartları](https://www.youtube.com/t/terms) ve yerel telif hakkı yasalarına uymaktan sen sorumlusun.

---

## <a id="roadmap"></a>Yol haritası

Hâlâ planlananlar — yaklaşık öncelik sırasıyla:

| Özellik | Açıklama |
| --- | --- |
| **Oynatma listesi ve kanal filtreleri** | Bir oynatma listesi veya kanal listelenirken tarih aralığı filtreleri |
| **YouTube ses parçası tercihleri** | YouTube birden fazla ses parçası sunduğunda profil bazlı geçersiz kılmalarla birlikte uygulama geneli konuşulan dil tercihi ayarla |
| **Daha güçlü yeniden deneme kurtarması** | Güvenilmez veya sorunlu internet bağlantılarıyla kesilen indirmeler için yeni bir yeniden deneme yolu |
| **Tam indirme yöneticisi çekmecesi** | Kuyruk çekmecesini, kuyruktaki öğelerin hedef klasörlerini değiştirme dahil daha kapsamlı bir yöneticisine dönüştür |
| **Zamanlanmış indirmeler** | Bir kuyruğu belirli saatte başlat (gece çalıştırmaları) |
| **Klip kırpma** | Yalnızca başlangıç/bitiş zamanıyla belirli bir segmenti indir |
| **AUR paketi** | Arch Linux ve Omarchy'ye `yay -S plinth-bin` ile kurulum |

Aklında bir özellik mi var? [İstek aç](../../issues) — topluluk girdisi önceliği şekillendirir.

---

## <a id="support"></a>Plinth'yi destekle

Plinth ücretsizdir ve MIT lisanslıdır — reklam yok, ücretli sürüm yok. Sana zaman kazandırıyorsa geliştirmeyi Bitcoin veya Tron ile destekleyebilirsin: adresler, tek resmi kaynak olan [DONATE.md](../../docs/DONATE.md) dosyasında. Plinth sana asla e-posta veya özel mesajla adres göndermez. Depoya yıldız vermek, hata bildirmek ve çevirileri iyileştirmek de en az o kadar yardımcı olur.

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>Kullanılan teknolojiler

<details>
<summary><strong>Teknoloji yığını</strong></summary>

- **Electron** — platformlar arası masaüstü kabuğu
- **React 19** + **TypeScript** — kullanıcı arayüzü
- **Tailwind CSS v4** — stillendirme
- **Zustand** — durum yönetimi
- **yt-dlp** + **ffmpeg** — indirme ve mux motoru (yt-dlp çalışma zamanında alınır; ffmpeg/ffprobe derleme zamanında paketlenir)
- **Vite** + **electron-vite** — derleme araçları
- **Vitest** + **Playwright** — birim ve uçtan uca testler

</details>

<details>
<summary><strong>Kaynaktan derle</strong></summary>

### Ön koşullar — tüm platformlar

| Araç    | Sürüm   | Kurulum |
| ------- | ------- | ------- |
| Git     | herhangi | [git-scm.com](https://git-scm.com) |
| Node.js | 24.21.0 | `mise install` veya `.node-version` |
| Bun     | 1.4.2  | `mise install` veya `package.json` `packageManager` |

Önerilen: `mise` kur, sonra checkout içinde `mise install` çalıştır. mise olmadan, `bun run bootstrap` öncesinde Node.js'i `.node-version` üzerinden ve Bun'ı `package.json` üzerinden elle etkinleştir.

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Yerel yeniden derlemeler için Visual Studio Build Tools ve Python gerekebilir.

### macOS

```bash
brew install mise
xcode-select --install
```

Klonladıktan sonra checkout içinde `mise trust && mise install` çalıştır. Shell'in zaten `fnm`, `nvm` veya Homebrew Bun kullanıyorsa, Plinth'nin Node.js 24.21.0 ve Bun 1.4.2 alması için `~/.zshrc` içinde mise'i etkinleştir:

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

# Derleme + Electron çalışma zamanı bağımlılıkları
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# Yalnızca E2E testleri için (Electron bir ekran ister)
sudo apt install -y xvfb
```

### Klonla ve çalıştır

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # önerilir; sabitlenmiş araçları elle etkinleştirdiysen atla
bun run bootstrap
bun run doctor
bun run dev            # Vite renderer'a karşı Electron uygulaması
```

### Dağıtılabilir paket derle

```bash
bun run build        # typecheck + compile
bun run dist         # geçerli işletim sistemi için paketle
bun run dist:win     # desteklenen bir host üzerinde Windows hedeflerini paketle
```

> `bun run bootstrap` bağımlılıkları kurar, Electron uygulama bağımlılıklarını yeniden derler, Electron'u doğrular, geliştirme için gömülü ffmpeg/ffprobe hazırlar ve Playwright Chromium kurar. yt-dlp uygulama veri klasöründe çalışma zamanında yönetilir; ffmpeg ve ffprobe her Plinth sürümüyle paketlenir.

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

## Kullanım şartları

Plinth yalnızca kişisel, özel kullanım için bir araçtır. İndirmelerinin YouTube [Hizmet Şartları](https://www.youtube.com/t/terms) ve bulunduğun yargı alanındaki telif hakkı yasalarına uygun olduğundan yalnızca sen sorumlusun. Kullanma hakkına sahip olmadığın içerikleri indirmek, çoğaltmak veya dağıtmak için Plinth'yi kullanma. Geliştiriciler kötüye kullanımdan sorumlu değildir.

MIT Lisansı · Özenle geliştiren <a href="https://github.com/fabwaseem">Waseem Anjum</a>

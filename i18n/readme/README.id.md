<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — Pengunduh YouTube (+ 2000 situs) Sumber Terbuka Gratis untuk Windows, macOS & Linux

Unduh video, Shorts, musik, saluran, podcast, atau trek audio dari **YouTube dan 2000+ situs yang didukung** — hingga 4K HDR pada 60 fps, atau sebagai MP3 / AAC / Opus. Berjalan secara lokal di Windows, macOS, dan Linux. **Tanpa iklan, tanpa pembengkakan, tanpa peningkatan penjualan.**

**Baca di:** [Afaan Oromoo](README.om.md) · **Bahasa Indonesia** · [Deutsch](README.de.md) · [English](../../README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Tiếng Việt](README.vi.md) · [Türkçe](README.tr.md) · [አማርኛ](README.am.md) · [العربية](README.ar.md) · [اردو](README.ur.md) · [پښتو](README.ps.md) · [فارسی](README.fa.md) · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · [ไทย](README.th.md) · [မြန်မာဘာသာ](README.my.md) · [Ελληνικά](README.el.md) · [Русский](README.ru.md) · [Српски](README.sr.md) · [Українська](README.uk.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ Instal Rilis Terbaru**](#install) · [**Situs web**](https://plinth.fabwaseem.com) · [Windows peluncuran pertama](#windows-first-launch) · [macOS peluncuran pertama](#macos-first-launch) · [Linux peluncuran pertama](#linux-first-launch)

Jika Plinth menghemat waktu Anda, ⭐ membantu orang lain menemukannya.

_Last updated: 2026-10-17._

> 🌐 Ini adalah terjemahan dengan bantuan AI. [README bahasa Inggris](README.md) adalah sumber kebenaran. Menemukan kesalahan? [PR diterima](../../pulls).

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Winget](https://winget.run/pkg/WaseemAnjum/Plinth), [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download.

---

## Isi

- [Fitur](#features)
- [Instalasi dan peluncuran pertama](#install)
- [Mengapa Plinth](#why)
- [Privasi](#privacy)
- [Pertanyaan Umum](#faq)
- [Peta jalan](#roadmap)
- [Dukung Plinth](#support)
- [Dibangun dengan](#tech)

---

## <a id="features"></a>Fitur

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>Beranda Unduhan Cepat</b><br/>Tempel URL dan unduh langsung dengan profil aktif Anda

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>Jelajahi YouTube di dalam Plinth dan unduh halaman yang sedang Anda buka dengan profil aktif

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>Mode URL massal</b><br/>Tempelkan daftar, hapus duplikat otomatis, masukkan semuanya ke dalam antrean sekaligus

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>Antrean unduhan paralel</b><br/>Beberapa unduhan sekaligus dengan progres langsung

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>Profil unduhan yang dapat digunakan kembali</b><br/>Simpan preset format, kualitas, dan output — gunakan kembali untuk setiap unduhan

### Explore: jelajahi YouTube di dalam Plinth

- **Tab Explore** — jelajahi YouTube di dalam Plinth dan unduh yang Anda temukan tanpa menyalin tautan. **Unduh · *profil Anda*** memasukkan video, daftar putar, atau saluran yang sedang Anda lihat ke antrean; panah di sebelahnya mengganti profil, dan tongkat sihir membuka unduhan langkah demi langkah untuk memilih format, subtitle, dan lainnya
- **Bilah alamat** — ketik untuk mencari di YouTube atau tempel tautan YouTube. Explore hanya menjelajahi YouTube, jadi tautan dari situs lain tidak dibuka di sana, tetapi Anda bisa mengunduhnya dengan satu klik
- **Unduhan yang memerlukan akun** — masuk sekali di Explore dan Plinth dapat mengunduh video privat dan khusus anggota yang bisa ditonton akun Anda, video dengan batasan usia jika usia akun terverifikasi, serta daftar Tonton Nanti dan Disukai Anda. Plinth tetap mengunduh tanpa masuk dan hanya memakai login Explore Anda saat unduhan gagal dengan cara yang bisa diperbaiki oleh sebuah akun. Saat YouTube meminta Anda mengonfirmasi bahwa Anda bukan bot, Plinth juga mencoba login Explore Anda
- **Gunakan akun sekunder** — layar pertama Explore menjelaskan alasannya: mengunduh dengan akun membawa risiko tertentu akun tersebut dibatasi. Keluar dari Explore lewat Pengaturan kapan pun Anda ingin melupakan login
- **Pemblokir iklan** — Explore memblokir iklan dan pelacak di halamannya sendiri; unduhan tidak terpengaruh. Aktif secara bawaan, satu klik pada ikon perisai di bilah alat Explore menonaktifkannya, dan ia tidak pernah bekerja di halaman login Google. YouTube mungkin menolak pemblokir iklan untuk akun yang sudah masuk

### Kualitas & format

- Hingga **4K UHD (2160p)**, 1440p, 1080p, 720p, 480p, 360p
- **Kecepatan frame tinggi** dipertahankan apa adanya — 60 fps, 120 fps, HDR
- **Audio** — mengekspor audio saja sebagai MP3, M4A/AAC, Opus, atau WAV. Dalam download interaktif, pilih trek surround/Dolby asli sumber (AC-3, E-AC-3, 5.1, DRC) bila tersedia, atau atur global **Prefer surround / Dolby** default
- Preset cepat: *Kualitas terbaik* · *Seimbang* · *File kecil*

### Alur kerja

- **Pintasan unduh global** — salin tautan di aplikasi mana pun lalu tekan `Ctrl+Shift+D` (`Cmd+Shift+D` di macOS); Plinth memasukkannya ke antrean dengan profil aktif tanpa membuka jendela, dan notifikasi mengonfirmasinya. Aktif secara bawaan, bisa diubah
- **Mode mulai yang fleksibel** — pilih unduhan tunggal yang dipandu, pemilih daftar putar/saluran, tempel URL massal, Unduh Cepat dengan default tersimpan, atau jelajahi dan unduh dari Explore
- **Antrian unduhan terpusat** — setiap tugas tunggal, daftar putar, massal, atau cepat berada di satu tempat untuk kemajuan, jeda, melanjutkan, membatalkan, mencoba lagi, dan kontrol prioritas
- **Pantau clipboard** — salin tautan YouTube dan Plinth otomatis mengisi URL saat Anda kembali fokus ke aplikasi (aktifkan di Pengaturan lanjutan)
- **Pembersihan otomatis URL** — menghapus parameter pelacakan (`si`, `pp`, `utm_*`, `fbclid`, `gclid`) dan membuka tautan `youtube.com/redirect`
- **Mode baki** — menutup jendela akan membuat unduhan tetap berjalan di latar belakang
- **30 bahasa** — mendeteksi lokal sistem secara otomatis, dapat dialihkan kapan saja
- **Sinkronisasi daftar putar** — memindai ulang daftar putar ke folder lokal untuk melewati video yang sudah diunduh; menghasilkan file daftar putar `.m3u` yang diperbarui saat setiap video diunduh
- **Kontrol kecepatan dan tempo** — membatasi bandwidth pengunduhan, mengatur berapa banyak bagian video yang diunduh sekaligus, dan menambahkan penundaan permintaan dengan preset (*Mati · Seimbang · Hati-hati · Kustom*)
- **Templat nama berkas** — beri nama unduhan sesuai keinginan Anda dengan `{title}`, `{uploader}`, `{id}`, `{date}`, `{resolution}`, dan `{playlist_index}`, secara global atau per profil unduhan
- **Unduhan sekaligus dan coba ulang otomatis** — pilih berapa banyak unduhan antrean yang berjalan bersamaan, dan biarkan Plinth mencoba ulang unduhan yang mengalami gangguan jaringan atau server, dengan menunggu lebih lama sebelum tiap percobaan
- **Profil per item dalam daftar putar** — beri setiap video dalam daftar putar profil unduhannya sendiri, bukan satu pengaturan untuk semuanya, sehingga satu proses bisa mengarsipkan sebagian dalam kualitas penuh dan mengambil sisanya sebagai MP3
- **Unduh Cepat berjalan di latar belakang** — tautan langsung muncul di Unduhan dan disiapkan di sana, catatan dengan **Lihat** mengonfirmasinya, dan kolom URL dikosongkan untuk tautan berikutnya. Mulai sebanyak yang Anda mau selagi yang sebelumnya disiapkan
- **Unduhan memberi tahu apa yang butuh perhatian Anda** — jika Plinth tidak bisa membaca tautan, barisnya menjelaskan alasannya dan menawarkan solusi: Coba lagi, aktifkan cookie, atau masuk di Explore. Saat cookie nonaktif, **Masuk dengan Explore** mencobanya lagi untuk Anda setelah Anda masuk. Playlist yang lebih panjang dari batas muat Anda menunggu di barisnya sampai Anda memilih semuanya, beberapa yang pertama, atau meninjau. Tab Unduhan menghitung baris yang menunggu Anda

### Subtitle & pasca-pemrosesan

- **Subtitel** dalam SRT, VTT, atau ASS — dibuat secara manual atau otomatis, dalam bahasa apa pun yang tersedia
- Simpan di samping video, sematkan ke `.mkv`, atau atur ke dalam subfolder `Subtitles/`
- **SponsorBlock** — lewati atau tandai bab sponsor, intro, outro, promo mandiri
- **Metadata tersemat** — judul, tanggal pengunggahan, saluran, deskripsi, gambar mini, dan penanda bab yang ditulis ke dalam file
- **Batch hanya subtitle** — tempel daftar URL atau buka playlist, pilih Subtitle, dan dapatkan hanya file teks untuk setiap video

### YouTube + 2000 situs

- **YouTube, selengkapnya** — Video, Shorts, Saluran, Daftar Putar, Musik YouTube, dan Podcast ditangani sebagai sumber kelas satu
- **2000+ situs lainnya** melalui yt-dlp — Vimeo, Twitch, Twitter/X, TikTok, SoundCloud, Bandcamp, Bilibili, BBC iPlayer, archive.org, dan masih banyak lagi
- **Khusus audio dan subtitel** berfungsi di semua situs yang didukung, tidak hanya YouTube
- Jika situs berubah, yt-dlp mengirimkan perbaikan setiap minggu dan Plinth memperbarui biner secara otomatis saat peluncuran

### Privasi & kontrol

- 100% pemrosesan lokal — pengunduhan langsung dari YouTube ke disk Anda
- **Sumber terbuka** — setiap baris dapat diaudit, berlisensi MIT
- File disimpan langsung ke folder yang Anda pilih

---

## <a id="install"></a>Instalasi dan peluncuran pertama

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

Build hanya tersedia untuk x86_64. Tidak ada `curl`? Ganti `curl -fsSL` dengan `wget -qO-`.

| Platform | Unduh langsung |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**Semua aset rilis →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>Windows peluncuran pertama

Pada peluncuran pertama Anda mungkin melihat **"Windows melindungi PC Anda"** atau **"Penerbit tidak dikenal."** Ini berlaku untuk `Plinth-win-x64-Setup.exe` dan `Plinth-win-x64-Portable.exe`. Plinth gratis dan bersumber terbuka, dan build Windows tidak ditandatangani kode dengan sertifikat berbayar, itulah sebabnya SmartScreen menandainya. Ini **tidak** secara otomatis berarti Plinth tidak aman. Untuk melanjutkan:

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="Dialog SmartScreen "Windows melindungi PC Anda" dengan tautan "Info selengkapnya" disorot" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="Dialog SmartScreen setelah More info dibuka, menampilkan tombol "Run anyway"" />

1. Klik **Info lebih lanjut**.
2. Klik **Tetap jalankan**.

#### Jika Windows Defender menandai atau menghapus file

Heuristik pembela terkadang menandai penginstal NSIS yang tidak ditandatangani dan perangkat portabel Electron sebagai mencurigakan. Jika Defender mengkarantina `Plinth-win-x64-Setup.exe` atau `Plinth-win-x64-Portable.exe`, pulihkan dari **Keamanan Windows → Perlindungan virus & ancaman → Riwayat perlindungan**, lalu tambahkan Plinth yang dapat dieksekusi sebagai item yang diizinkan di **Kelola pengaturan → Tambahkan atau hapus pengecualian**. Seperti halnya SmartScreen, pemicunya adalah tanda tangan penerbit yang hilang, bukan malware yang terdeteksi.

> Hanya unduh Plinth dari halaman resmi Rilis GitHub. Jika Anda mendapatkan file dari situs web lain atau seseorang mengirimkannya kepada Anda, hapus file tersebut dan unduh salinan baru dari sumber resmi. Kode sumbernya bersifat publik, jadi Anda dapat memeriksanya atau membuat sendiri Plinth jika Anda mau.

Lebih suka Scoop? `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>macOS peluncuran pertama

Plinth belum ditandatangani untuk macOS, jadi Gatekeeper dapat menampilkan dialog menakutkan *"Plinth.app is damaged and can't be opened"* setelah Anda memasangnya dari DMG. Pesan itu berarti macOS mengarantina aplikasi yang tidak ditandatangani; bukan berarti file aplikasi benar-benar rusak. Pada macOS saat ini, perbaikan yang paling andal adalah Terminal:

1. Seret `Plinth.app` dari DMG yang terpasang ke `/Applications`.
2. Buka Terminal dan jalankan dua perintah ini:

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
open /Applications/Plinth.app
```

Perintah pertama menghapus atribut karantina dari salinan Plinth yang Anda instal. Yang kedua meluncurkan aplikasi. `sudo` mungkin meminta kata sandi Mac Anda; Terminal tidak akan menampilkan karakter saat Anda mengetiknya.

**Apple Silicon vs Intel:** pada Mac seri M (M1 / M2 / M3 / M4), unduh `arm64` DMG. Di Mac Intel, unduh `x64` DMG. Menjalankan build yang salah masih berfungsi melalui Rosetta tetapi terasa lebih lambat.

> Build macOS diproduksi melalui CI pada runner Apple Silicon dan Intel. Jika Anda mengalami masalah, silakan [buka masalah](../../issues) — masukan dari pengguna macOS secara aktif membentuk siklus pengujian macOS.

### <a id="why-warning"></a>Mengapa Anda mungkin melihat peringatan

Plinth adalah sumber terbuka dan berlisensi MIT. Versi Windows dan macOS **tidak ditandatangani dengan kode** — ID Pengembang Apple dan sertifikat penandatanganan kode Windows EV masing-masing berharga ratusan dolar per tahun, yang dibayar langsung oleh proyek indie. Tanpa tanda tangan tersebut, Windows SmartScreen dan macOS Gatekeeper akan memperingatkan Anda pada peluncuran pertama. Peringatan tersebut berarti *OS Anda tidak mengenali penerbitnya* — bukan berarti Plinth adalah malware.

Tiga cara untuk memverifikasi sendiri Plinth, dengan semakin ketatnya:

- **Baca sumbernya.** Setiap baris ada di [GitHub](https://github.com/fabwaseem/plinth) dan Anda dapat [membuatnya dari sumber](#tech).
- **Periksa SHA256.** Cocokkan file Anda dengan [`SHA256SUMS`](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) yang dipublikasikan — lihat [Verifikasi download Anda](#verify) di bawah.
- **Jalankan pemindaian pihak ketiga.** Unggah file ke [VirusTotal](https://www.virustotal.com).

### <a id="linux-first-launch"></a>Linux peluncuran pertama

AppImages dijalankan secara langsung — tanpa instalasi. Anda hanya perlu menandai file tersebut sebagai file yang dapat dieksekusi.

**Manajer file:** klik kanan `.AppImage` → **Properti** → **Izin** → aktifkan **Izinkan mengeksekusi file sebagai program**, lalu klik dua kali.

**Terminal:**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

Jika peluncuran masih gagal, jalankan tanpa mount — tidak perlu paket FUSE:

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**Integrasi desktop opsional:** instal [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) satu kali, dan AppImage apa pun yang Anda klik dua kali akan terdaftar ke menu peluncur secara otomatis — tidak diperlukan file `.desktop` manual.

**Tarball biasa (tanpa FUSE, tanpa instalasi):**

Build `.tar.gz` adalah aplikasi yang sama tanpa pembungkus AppImage — ekstrak di mana saja lalu jalankan. Tanpa pemasang dan tanpa paket FUSE.

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**Unduhan Linux di halaman rilis hanya untuk x86_64.** Di mesin ARM64 (Raspberry Pi, Asahi Linux) Flatpak tetap terinstal tetapi gagal saat diluncurkan dengan `bwrap: execvp ldconfig: Exec format error`.

<details>
<summary><strong><a id="verify"></a>Verifikasi unduhan Anda (SHA256)</strong></summary>

Setiap rilis menerbitkan file `SHA256SUMS` bersama biner. Untuk memastikan bahwa unduhan Anda tidak rusak atau diubah saat transit, hash file Anda secara lokal dan cocokkan baris di `SHA256SUMS`. Buka halaman rilis terbaru → **Aset** → unduh `SHA256SUMS`.

**Windows (PowerShell atau Command Prompt):**

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

Ingin pemindaian malware pihak ketiga? Unggah file di [VirusTotal](https://www.virustotal.com). Sejumlah tanda heuristik generik dari mesin kecil adalah hal yang normal untuk aplikasi Electron yang tidak ditandatangani; deteksi luas dari mesin-mesin besar akan menjadi perhatian nyata.

</details>

<details>
<summary><strong>Windows: Penginstal vs Portabel</strong></summary>

| | Pemasang NSIS | `.exe` portabel |
| --- | --- | --- |
| Diperlukan instalasi | Ya | Tidak — jalankan dari mana saja |
| Pembaruan otomatis | ✅ dalam aplikasi | ❌ unduh manual |
| Kecepatan permulaan | ✅ lebih cepat | ⚠️ start dingin lebih lambat |
| Menambahkan ke Menu Mulai | Yes | No |
| Pencopotan pemasangan yang mudah | Yes | ❌ hapus filenya |

**Rekomendasi:** gunakan penginstal NSIS untuk pembaruan otomatis dan peluncuran yang lebih cepat. Gunakan `.exe` portabel untuk opsi tanpa instalasi dan tanpa perubahan registry.

</details>

---

## <a id="why"></a>Mengapa Plinth

Plinth dibuat untuk satu hal: tempelkan URL, dapatkan file lokal yang bersih. Tidak ada upsell, tidak ada pengumpulan data.

| | Plinth |
| --- | --- |
| Gratis, tidak ada tingkat premium | Yes |
| Sumber terbuka | Yes |
| Hanya pemrosesan lokal | Yes |
| Tidak ada batasan penggunaan | Yes |
| Aplikasi desktop lintas platform | Yes |
| Subtitle + SponsorBlock | Yes |

---

## <a id="privacy"></a>Privasi

Unduhan diambil langsung melalui [yt-dlp](https://github.com/yt-dlp/yt-dlp) dari YouTube ke folder yang Anda pilih — tidak ada yang dirutekan melalui server pihak ketiga. Riwayat tontonan, riwayat unduhan, URL, dan konten file tetap ada di perangkat Anda.

Plinth mengirimkan telemetri agregat anonim melalui [OpenPanel](https://openpanel.dev) — cukup bagi proyek indie untuk memahami kegagalan, kerusakan, umpan balik, OS, dan versi aplikasi. Tidak ada URL, judul video, jalur file, info akun, sidik jari, atau data pribadi. ID per-instal bersifat acak dan tidak terikat dengan identitas Anda. Anda dapat memilih untuk tidak ikut serta dalam Pengaturan.

Explore menyimpan login-nya sendiri, terpisah dari browser Anda, dan Plinth tidak pernah membaca atau mengisi formulir login — Anda mengetik di halaman Google sendiri. Unduhan berjalan tanpa masuk; hanya saat satu unduhan gagal dengan cara yang bisa diperbaiki oleh sebuah akun, Plinth membaca login itu saat itu juga, menyimpannya di file sementara untuk unduhan tersebut, lalu menghapus file itu setelahnya. Keluar dari Explore di Pengaturan akan melupakannya.

---

## <a id="faq"></a>Pertanyaan Umum

**Apakah ini benar-benar gratis?**
Ya — berlisensi MIT, tanpa tingkat premium, tanpa fitur gating.

**Kualitas video apa yang dapat saya unduh?**
Apa pun yang disajikan YouTube: 4K UHD (2160p), 1440p, 1080p, 720p, 480p, 360p, plus audio saja. Streaming 60 fps, 120 fps, dan HDR dipertahankan apa adanya.

**Bisakah saya mengekstrak audionya saja sebagai MP3?**
Ya. Pilih *audio saja* di menu format dan pilih MP3, M4A/AAC, Opus, atau WAV.

**Bagaimana cara mengunduh video yang memerlukan akun YouTube?**
Masuklah sekali di tab Explore. Plinth kemudian dapat mengunduh video privat dan khusus anggota yang bisa ditonton akun Anda, video dengan batasan usia jika usia akun terverifikasi, serta daftar Tonton Nanti dan Disukai Anda. Login itu hanya dipakai saat unduhan gagal dengan cara yang bisa diperbaiki oleh sebuah akun; yang lain diunduh seperti biasa. Ini adalah pilihan **Login Explore**, tercantum pertama dan bertanda Disarankan di setelan cookie, dan Plinth memilihnya untuk Anda saat pertama kali Anda membuka Explore. Wiki yt-dlp mencatat bahwa [otomatisasi dengan akun yang sudah masuk dapat menandai akun Google](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies), jadi akun sekunder adalah pilihan yang lebih aman.

**Apakah ini akan tetap berfungsi ketika YouTube mengubah sesuatu?**
yt-dlp diperbarui secara otomatis saat peluncuran, dan Plinth segera mengirimkan perbaikan ketika YouTube mengubah sesuatu. Saat YouTube meminta Anda mengonfirmasi bahwa Anda bukan bot, Plinth juga mencoba login Explore Anda jika Anda sudah masuk di sana, dan cookie dari file atau browser tersedia di setelan cookie.

**Bahasa apa saja yang tersedia di Plinth?**
30 bahasa langsung tersedia: Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文. Plinth otomatis mendeteksi bahasa sistem operasi Anda saat pertama kali dijalankan, dan Anda dapat beralih kapan saja dari pemilih bahasa di toolbar. JSON locale runtime berada di src/shared/i18n/locales/, dan katalog PO untuk penerjemah berada di i18n/locales/ — buka PR di GitHub untuk berkontribusi.

**Apakah saya perlu menginstal yang lain?**
Tidak. yt-dlp diunduh secara otomatis pada peluncuran pertama dan disimpan dalam cache di mesin Anda; ffmpeg dan ffprobe dikirimkan bersama aplikasi. Setelah itu, tidak diperlukan pengaturan tambahan.

**Bisakah saya mengunduh daftar putar atau seluruh saluran?**
Ya — keduanya. Tempelkan URL daftar putar atau URL saluran (misalnya `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`); pilih berapa banyak entri yang akan dipindai, lalu antri seluruh daftar atau pilih video tertentu. Filter rentang tanggal akan segera hadir.

**macOS mengatakan "aplikasi rusak" — apa yang harus saya lakukan?**
Itu macOS Gatekeeper memblokir aplikasi yang tidak ditandatangani, bukan kerusakan sebenarnya. Lihat [macOS peluncuran pertama](#macos-first-launch) untuk perintah Terminal yang menghapus karantina dan meluncurkan Plinth.

**Apakah mengunduh video YouTube legal?**
Untuk penggunaan pribadi dan pribadi, ini diterima secara umum di sebagian besar yurisdiksi. Anda bertanggung jawab untuk mematuhi [Ketentuan Layanan](https://www.youtube.com/t/terms) YouTube dan undang-undang hak cipta setempat.

---

## <a id="roadmap"></a>Peta jalan

Masih direncanakan — kira-kira dalam urutan prioritas:

| Fitur | Keterangan |
| --- | --- |
| **Daftar putar & filter saluran** | Filter rentang tanggal saat menghitung daftar putar atau saluran |
| **Preferensi trek audio YouTube** | Tetapkan preferensi trek bahasa lisan di seluruh aplikasi, dengan penggantian per profil ketika YouTube menawarkan beberapa trek audio |
| **Pemulihan coba lagi yang lebih kuat** | Jalur percobaan ulang baru untuk pengunduhan yang terganggu oleh koneksi internet yang tidak dapat diandalkan atau bermasalah |
| **Laci pengelola unduhan lengkap** | Ubah laci antrean menjadi pengelola yang lebih lengkap, termasuk mengubah folder tujuan untuk item antrean |
| **Unduhan terjadwal** | Memulai antrian pada waktu yang ditentukan (berjalan semalaman) |
| **Pemangkasan klip** | Unduh hanya satu segmen berdasarkan waktu mulai/berakhir |
| **Paket AUR** | Instal di Arch Linux dan Omarchy dengan `yay -S plinth-bin` |

Punya ide fitur? [Buka permintaan](../../issues) — masukan komunitas membantu menentukan prioritas.

---

## <a id="support"></a>Dukung Plinth

Plinth gratis dan berlisensi MIT — tanpa iklan, tanpa versi berbayar. Jika Plinth menghemat waktu Anda, Anda bisa mendukung pengembangannya dengan Bitcoin atau Tron: alamatnya ada di [DONATE.md](../../docs/DONATE.md), satu-satunya sumber resmi untuk alamat tersebut. Plinth tidak akan pernah mengirimi Anda alamat lewat email atau pesan langsung. Memberi bintang pada repo, melaporkan bug, dan memperbaiki terjemahan sama besar bantuannya.

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>Dibangun dengan

<details>
<summary><strong>Stack</strong></summary>

- **Electron** — shell desktop lintas platform
- **React 19** + **TypeScript** — UI
- **Tailwind CSS v4** — gaya
- **Zustand** — manajemen state
- **yt-dlp** + **ffmpeg** — mesin unduh dan mux (yt-dlp diambil saat runtime; ffmpeg/ffprobe dibundel pada waktu pembuatan)
- **Vite** + **electron-vite** — tooling build
- **Vitest** + **Playwright** — pengujian unit dan menyeluruh

</details>

<details>
<summary><strong>Bangun dari sumber</strong></summary>

### Prasyarat — semua platform

| Alat | Versi | Instal |
| ------- | ------- | ------- |
| Git | apapun | [git-scm.com](https://git-scm.com) |
| Node.js | 24.21.0 | `mise install` atau `.node-version` |
| Bun | 1.4.2 | `mise install` atau `package.json` `packageManager` |

Direkomendasikan: instal `mise`, lalu jalankan `mise install` di checkout. Tanpa mise, aktifkan Node.js secara manual dari `.node-version` dan Bun dari `package.json` sebelum `bun run bootstrap`.

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Visual Studio Build Tools dan Python mungkin diperlukan untuk pembangunan kembali asli.

### macOS

```bash
brew install mise
xcode-select --install
```

Setelah kloning, jalankan `mise trust && mise install` dari checkout. Jika shell Anda sudah menggunakan `fnm`, `nvm`, atau Homebrew Bun, aktifkan mise di `~/.zshrc` sehingga Plinth mendapatkan Node.js 24.21.0 dan Bun 1.4.2:

```bash
printf '
# mise
if command -v mise >/dev/null 2>&1; then
  eval "$(mise activate zsh)"
fi
' >> ~/.zshrc
exec zsh
```

### Linux (Ubuntu/Debian)

```bash
curl -fsSL https://bun.sh/install | bash

# Build + Electron runtime deps
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# E2E tests only (Electron needs a display)
sudo apt install -y xvfb
```

### Kloning & jalankan

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # recommended; skip if you manually activated the pinned tools
bun run bootstrap
bun run doctor
bun run dev            # Electron app against the Vite renderer
```

### Membuat paket distribusi

```bash
bun run build        # typecheck + compile
bun run dist         # package for current OS
bun run dist:win     # package Windows targets when run on a supported host
```

> `bun run bootstrap` memasang dependensi, membangun kembali dependensi aplikasi Electron, memverifikasi Electron, menyiapkan ffmpeg/ffprobe tertanam untuk pengembangan, dan menginstal Playwright Chromium. yt-dlp dikelola saat runtime di folder data aplikasi Anda; ffmpeg dan ffprobe dibundel dengan setiap rilis Plinth.

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

## Ketentuan penggunaan

Plinth adalah alat untuk penggunaan pribadi dan privat saja. Anda bertanggung jawab penuh untuk memastikan unduhan Anda mematuhi [Ketentuan Layanan](https://www.youtube.com/t/terms) YouTube dan undang-undang hak cipta di yurisdiksi Anda. Jangan gunakan Plinth untuk mengunduh, mereproduksi, atau mendistribusikan konten yang tidak berhak Anda gunakan. Pengembang tidak bertanggung jawab atas penyalahgunaan apa pun.

Lisensi MIT · Dibuat dengan hati-hati oleh <a href="https://github.com/fabwaseem">Waseem Anjum</a>

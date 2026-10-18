<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — Trình tải YouTube (+ 2000 trang) miễn phí và mã nguồn mở cho Windows, macOS & Linux

Tải xuống video, Shorts, nhạc, kênh, podcast hoặc bản nhạc từ **YouTube và hơn 2000 trang được hỗ trợ** — lên tới 4K HDR ở 60 fps, hoặc dưới dạng MP3 / AAC / Opus. Chạy hoàn toàn cục bộ trên Windows, macOS và Linux. **Không quảng cáo, không phồng to, không bán thêm.**

**Đọc bằng:** [Afaan Oromoo](README.om.md) · [Bahasa Indonesia](README.id.md) · [Deutsch](README.de.md) · [English](../../README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · [Polski](README.pl.md) · [Português](README.pt.md) · **Tiếng Việt** · [Türkçe](README.tr.md) · [አማርኛ](README.am.md) · [العربية](README.ar.md) · [اردو](README.ur.md) · [پښتو](README.ps.md) · [فارسی](README.fa.md) · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · [ไทย](README.th.md) · [မြန်မာဘာသာ](README.my.md) · [Ελληνικά](README.el.md) · [Русский](README.ru.md) · [Српски](README.sr.md) · [Українська](README.uk.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ Tải phiên bản mới nhất**](#install) · [**Trang web**](https://plinth.fabwaseem.com) · [Lần đầu khởi động trên Windows](#windows-first-launch) · [Lần đầu khởi động trên macOS](#macos-first-launch) · [Lần đầu khởi động trên Linux](#linux-first-launch)

Nếu Plinth giúp bạn tiết kiệm thời gian, một ⭐ sẽ giúp người khác tìm thấy nó.

_Last updated: 2026-10-18._

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Winget](https://winget.run/pkg/WaseemAnjum/Plinth), [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download.

---

## Mục lục

- [Tính năng](#features)
- [Cài đặt và lần khởi chạy đầu tiên](#install)
- [Tại sao chọn Plinth](#why)
- [Quyền riêng tư](#privacy)
- [Câu hỏi thường gặp](#faq)
- [Lộ trình phát triển](#roadmap)
- [Ủng hộ Plinth](#support)
- [Được xây dựng với](#tech)

---

## <a id="features"></a>Tính năng

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>Trang Tải nhanh</b><br/>Dán URL và tải ngay với hồ sơ đang dùng

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>Duyệt YouTube ngay trong Plinth và tải trang bạn đang xem bằng hồ sơ đang dùng

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>Chế độ URL hàng loạt</b><br/>Dán danh sách, tự loại trùng, xếp hàng tất cả cùng lúc

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>Hàng đợi tải song song</b><br/>Nhiều lượt tải cùng lúc với tiến trình trực tiếp

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>Hồ sơ tải tái sử dụng</b><br/>Lưu định dạng, chất lượng và đầu ra thành cài sẵn — dùng lại cho mỗi lần tải

### Explore: duyệt YouTube ngay trong Plinth

- **Tab Explore** — duyệt YouTube ngay trong Plinth và tải những gì bạn tìm thấy mà không cần sao chép liên kết. **Tải xuống · *hồ sơ của bạn*** đưa video, danh sách phát hoặc kênh bạn đang xem vào hàng đợi; mũi tên bên cạnh để đổi hồ sơ, còn cây đũa phép mở trình tải từng bước để chọn định dạng, phụ đề, v.v.
- **Thanh địa chỉ** — gõ để tìm kiếm trên YouTube hoặc dán một liên kết YouTube. Explore chỉ duyệt YouTube nên liên kết từ trang khác sẽ không mở ở đó, nhưng bạn có thể tải nó chỉ với một cú nhấp
- **Tải video cần tài khoản** — đăng nhập một lần trong Explore là Plinth có thể tải video riêng tư và video dành cho thành viên mà tài khoản của bạn xem được, video giới hạn độ tuổi nếu tài khoản đã xác minh tuổi, cùng danh sách Xem sau và Video đã thích của bạn. Plinth vẫn tải khi chưa đăng nhập và chỉ dùng đăng nhập Explore của bạn khi một lượt tải thất bại theo cách mà tài khoản có thể khắc phục. Khi YouTube yêu cầu xác nhận bạn không phải robot, Plinth cũng thử dùng đăng nhập Explore của bạn
- **Dùng tài khoản phụ** — màn hình đầu tiên của Explore giải thích lý do: tải bằng tài khoản có một chút rủi ro tài khoản đó bị hạn chế. Hãy đăng xuất khỏi Explore trong Cài đặt bất cứ khi nào bạn muốn xóa thông tin đăng nhập
- **Trình chặn quảng cáo** — Explore chặn quảng cáo và trình theo dõi trên các trang của chính nó; việc tải xuống không bị ảnh hưởng. Bật sẵn, một cú nhấp vào biểu tượng khiên trên thanh công cụ của Explore là tắt, và nó không bao giờ hoạt động trên trang đăng nhập của Google. YouTube có thể phản ứng với trình chặn quảng cáo đối với tài khoản đã đăng nhập

### Chất lượng & định dạng

- Lên tới **4K UHD (2160p)**, 1440p, 1080p, 720p, 480p, 360p
- **Tốc độ khung hình cao** được giữ nguyên — 60 fps, 120 fps, HDR
- **Âm thanh** — xuất chỉ âm thanh thành MP3, M4A/AAC, Opus hoặc WAV. Trong tải xuống tương tác, chọn các bản âm thanh surround/Dolby gốc của nguồn (AC-3, E-AC-3, 5.1, DRC) khi có sẵn, hoặc đặt mặc định toàn cục **Ưu tiên surround / Dolby**
- Cài đặt nhanh: *Chất lượng tốt nhất* · *Cân bằng* · *File nhỏ*

### Quy trình làm việc

- **Phím tắt tải xuống toàn cục** — sao chép một liên kết trong bất kỳ ứng dụng nào rồi nhấn `Ctrl+Shift+D` (`Cmd+Shift+D` trên macOS); Plinth đưa nó vào hàng đợi với hồ sơ đang dùng mà không mở cửa sổ, và một thông báo xác nhận. Bật sẵn, có thể đổi phím
- **Chế độ bắt đầu linh hoạt** — chọn tải một video có hướng dẫn, bộ chọn playlist/kênh, dán URL hàng loạt, Quick Download với mặc định đã lưu, hoặc duyệt và tải từ Explore
- **Hàng đợi tải xuống trung tâm** — mọi tác vụ đơn lẻ, playlist, hàng loạt hoặc nhanh đều vào một nơi để theo dõi tiến độ, tạm dừng, tiếp tục, hủy, thử lại và điều chỉnh ưu tiên
- **Theo dõi clipboard** — sao chép liên kết YouTube và Plinth tự điền URL khi bạn chuyển lại ứng dụng (bật/tắt trong Cài đặt nâng cao)
- **Tự làm sạch URL** — loại bỏ các tham số theo dõi (`si`, `pp`, `utm_*`, `fbclid`, `gclid`) và mở gói các liên kết `youtube.com/redirect`
- **Chế độ khay hệ thống** — đóng cửa sổ vẫn tiếp tục tải xuống ở nền
- **30 ngôn ngữ** — tự động phát hiện ngôn ngữ hệ thống, có thể đổi bất cứ lúc nào
- **Đồng bộ danh sách phát** — quét lại danh sách phát với một thư mục cục bộ để bỏ qua các video đã tải; tạo tệp danh sách phát `.m3u` được cập nhật sau mỗi video tải xuống
- **Điều khiển tốc độ và nhịp tải** — giới hạn băng thông tải xuống, đặt số phần của video được tải cùng lúc và thêm độ trễ giữa các yêu cầu với các thiết lập sẵn (*Tắt · Cân bằng · Thận trọng · Tùy chỉnh*)
- **Mẫu tên tệp** — đặt tên tệp tải về theo ý bạn với `{title}`, `{uploader}`, `{id}`, `{date}`, `{resolution}` và `{playlist_index}`, áp dụng chung hoặc theo từng hồ sơ tải xuống
- **Tải cùng lúc và tự động thử lại** — chọn bao nhiêu mục trong hàng đợi được tải cùng lúc, và để Plinth thử lại một mục gặp sự cố mạng hoặc máy chủ, chờ lâu hơn trước mỗi lần thử
- **Hồ sơ theo từng video trong danh sách phát** — gán cho mỗi video trong danh sách phát hồ sơ tải riêng thay vì một cài đặt chung cho cả danh sách, để một lượt tải có thể lưu trữ một số video ở chất lượng đầy đủ và lấy phần còn lại dưới dạng MP3
- **Quick Download chạy nền** — liên kết hiện ngay trong Tải xuống và được chuẩn bị tại đó, một thông báo có nút **Xem** xác nhận, và ô URL được xóa để nhập liên kết tiếp theo. Bạn có thể bắt đầu bao nhiêu lượt tùy ý trong khi các lượt trước vẫn đang chuẩn bị
- **Tải xuống cho bạn biết điều gì cần bạn xử lý** — nếu Plinth không đọc được một liên kết, dòng của nó nêu lý do và đề xuất cách khắc phục: Thử lại, bật cookie hoặc đăng nhập trong Explore. Khi cookie tắt, **Đăng nhập bằng Explore** sẽ thử lại giúp bạn sau khi bạn đã đăng nhập. Danh sách phát dài hơn giới hạn tải sẽ chờ trên dòng của nó để bạn chọn toàn bộ, vài video đầu, hoặc xem lại. Tab Tải xuống đếm số dòng đang chờ bạn

### Phụ đề & hậu xử lý

- **Phụ đề** dạng SRT, VTT hoặc ASS — thủ công hoặc tự tạo, trong bất kỳ ngôn ngữ nào có sẵn
- Lưu cùng thư mục video, nhúng vào `.mkv`, hoặc sắp xếp vào thư mục con `Subtitles/`
- **SponsorBlock** — bỏ qua hoặc đánh dấu chương cho các đoạn quảng cáo, intro, outro, tự quảng bá
- **Siêu dữ liệu nhúng** — tiêu đề, ngày tải lên, kênh, mô tả, thumbnail và điểm đánh dấu chương được ghi vào file
- **Lô chỉ phụ đề** — dán danh sách URL hoặc mở danh sách phát, chọn Phụ đề và chỉ nhận các tệp phụ đề cho mỗi video

### YouTube + 2000 trang

- **YouTube đầy đủ** — Video, Shorts, Kênh, Playlist, YouTube Music và Podcast được hỗ trợ như nguồn hạng nhất
- **Hơn 2000 trang khác** qua yt-dlp — Vimeo, Twitch, Twitter/X, TikTok, SoundCloud, Bandcamp, Bilibili, BBC iPlayer, archive.org và nhiều hơn nữa
- **Chỉ âm thanh và phụ đề** hoạt động trên mọi trang được hỗ trợ, không chỉ YouTube
- Nếu một trang thay đổi, yt-dlp phát hành bản sửa lỗi hàng tuần và Plinth tự động cập nhật nhị phân khi khởi động

### Quyền riêng tư & kiểm soát

- Xử lý 100% cục bộ — tải xuống trực tiếp từ YouTube đến ổ đĩa của bạn
- Không đăng nhập, không cookie, không liên kết tài khoản Google
- File được lưu thẳng vào thư mục bạn chọn

---

## <a id="install"></a>Cài đặt và lần khởi chạy đầu tiên

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

Bản dựng chỉ dành cho x86_64. Không có `curl`? Thay `curl -fsSL` bằng `wget -qO-`.

| Nền tảng | Định dạng |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**Tải phiên bản mới nhất →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>Lần đầu khởi động trên Windows

Khi khởi động lần đầu, bạn có thể thấy **"Windows protected your PC"** hoặc **"Unknown publisher."** Điều này áp dụng cho cả `Plinth-win-x64-Setup.exe` và `Plinth-win-x64-Portable.exe`. Plinth là phần mềm miễn phí và mã nguồn mở, các bản build trên Windows không được ký mã bằng chứng chỉ có phí, đó là lý do SmartScreen gắn cờ chúng. Điều này **không** tự động có nghĩa là Plinth không an toàn. Để tiếp tục:

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="Hộp thoại SmartScreen "Windows protected your PC" với liên kết "More info" được làm nổi bật" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="Hộp thoại SmartScreen sau khi mở rộng More info, hiển thị nút "Run anyway"" />

1. Nhấp **More info**.
2. Nhấp **Run anyway**.

#### Nếu Windows Defender gắn cờ hoặc xóa file

Heuristic của Defender đôi khi gắn cờ các trình cài đặt NSIS không được ký và Electron portable là đáng ngờ. Nếu Defender cách ly `Plinth-win-x64-Setup.exe` hoặc `Plinth-win-x64-Portable.exe`, hãy khôi phục nó từ **Windows Security → Virus & threat protection → Protection history**, sau đó thêm file thực thi Plinth làm mục được phép trong **Manage settings → Add or remove exclusions**. Cũng giống SmartScreen, nguyên nhân là thiếu chữ ký nhà phát hành, không phải phần mềm độc hại bị phát hiện.

> Chỉ tải Plinth từ trang GitHub Releases chính thức. Nếu bạn tải file từ trang web khác hoặc ai đó gửi cho bạn, hãy xóa nó và tải bản sao mới từ nguồn chính thức. Mã nguồn là công khai, vì vậy bạn có thể tự kiểm tra hoặc tự build Plinth nếu muốn.

Bạn thích Scoop hơn? `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>Lần đầu khởi động trên macOS

Plinth chưa được ký mã cho macOS, vì vậy Gatekeeper có thể hiển thị hộp thoại đáng sợ *"Plinth.app is damaged and can't be opened"* sau khi bạn cài từ DMG. Thông báo này nghĩa là macOS đã đưa một ứng dụng chưa ký vào quarantine; không có nghĩa là tệp ứng dụng thật sự bị hỏng. Trên macOS hiện tại, cách đáng tin cậy là dùng Terminal:

1. Kéo `Plinth.app` từ DMG đã gắn vào `/Applications`.
2. Mở Terminal và chạy hai lệnh này:

**Sửa quarantine của Gatekeeper**

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
```

Lệnh đầu tiên xóa thuộc tính quarantine khỏi bản Plinth đã cài. Lệnh thứ hai khởi chạy ứng dụng. `sudo` có thể hỏi mật khẩu Mac; Terminal sẽ không hiển thị ký tự khi bạn nhập.

**Apple Silicon vs Intel:** trên Mac dòng M (M1 / M2 / M3 / M4), hãy tải DMG `arm64`. Trên Mac Intel, tải DMG `x64`. Chạy bản build sai vẫn hoạt động qua Rosetta nhưng sẽ chậm hơn đáng kể.

> Các bản build macOS được tạo qua CI trên máy chủ Apple Silicon và Intel. Nếu gặp sự cố, vui lòng [mở issue](../../issues) — phản hồi từ người dùng macOS ảnh hưởng trực tiếp đến chu kỳ kiểm thử macOS.

### <a id="why-warning"></a>Tại sao bạn có thể thấy cảnh báo

Plinth là phần mềm mã nguồn mở theo giấy phép MIT. Các bản build trên Windows và macOS **không được ký mã** — chứng chỉ Apple Developer ID và Windows EV code-signing mỗi loại tốn hàng trăm đô la mỗi năm, một dự án độc lập phải tự chi trả. Không có những chữ ký đó, Windows SmartScreen và macOS Gatekeeper sẽ cảnh báo khi khởi động lần đầu. Các cảnh báo có nghĩa là *hệ điều hành của bạn không nhận ra nhà phát hành* — không có nghĩa là Plinth là phần mềm độc hại.

Ba cách để tự xác minh Plinth, theo mức độ nghiêm ngặt tăng dần:

- **Đọc mã nguồn.** Mọi dòng đều có trên [GitHub](https://github.com/fabwaseem/plinth) và bạn có thể [tự build từ nguồn](#tech).
- **Kiểm tra SHA256.** So sánh file của bạn với [`SHA256SUMS`](../../releases/latest) đã công bố — xem [Xác minh tải xuống](#verify) bên dưới.
- **Chạy quét của bên thứ ba.** Tải file lên [VirusTotal](https://www.virustotal.com).

### <a id="code-signing-policy"></a>Code signing policy

Free code signing provided by [SignPath.io](https://signpath.io), certificate by [SignPath Foundation](https://signpath.org).

This is Plinth's code signing policy. It names who may commit and who may approve a Windows signature. It does not mean a published release is already signed. Windows signing in GitHub Actions runs only after the SignPath secret and repository variables in [CODE_SIGNING.md](../../docs/CODE_SIGNING.md) are set. Until then, Windows artifacts are published unsigned.

- Committers: [fabwaseem](https://github.com/fabwaseem)
- Approvers: [fabwaseem](https://github.com/fabwaseem)

Privacy is described in [Privacy](#privacy). Plinth can send anonymous aggregate telemetry, and that can be turned off in Settings.

### <a id="linux-first-launch"></a>Lần đầu khởi động trên Linux

AppImages chạy trực tiếp — không cần cài đặt. Bạn chỉ cần đánh dấu file là có thể thực thi.

**Trình quản lý file:** nhấp chuột phải vào `.AppImage` → **Properties** → **Permissions** → bật **Allow executing file as program**, rồi nhấp đúp.

**Terminal:**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

Nếu vẫn không khởi động được, hãy chạy mà không cần gắn kết — không cần gói FUSE:

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**Tích hợp desktop tùy chọn:** cài [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) một lần, và mọi AppImage bạn nhấp đúp sẽ tự động được đăng ký vào menu launcher — không cần tạo file `.desktop` thủ công.

**Tarball thuần (không FUSE, không cài đặt):**

Bản `.tar.gz` chính là ứng dụng đó nhưng không có lớp vỏ AppImage — giải nén ở đâu cũng được rồi chạy. Không cần trình cài đặt, không cần gói FUSE.

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**Các bản tải Linux trên trang phát hành chỉ có x86_64.** Trên máy ARM64 (Raspberry Pi, Asahi Linux), Flatpak vẫn cài được nhưng khi khởi chạy sẽ lỗi `bwrap: execvp ldconfig: Exec format error`.

<details>
<summary><strong><a id="verify"></a>Xác minh tải xuống của bạn (SHA256)</strong></summary>

Mỗi bản phát hành đều công bố file `SHA256SUMS` cùng với các file nhị phân. Để kiểm tra tải xuống của bạn không bị hỏng hoặc bị giả mạo trong quá trình truyền, hãy băm file cục bộ và so sánh với dòng trong `SHA256SUMS`. Mở trang phát hành mới nhất → **Assets** → tải `SHA256SUMS`.

**Windows (PowerShell hoặc Command Prompt):**

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

Muốn quét phần mềm độc hại bên thứ ba? Tải file lên [VirusTotal](https://www.virustotal.com). Một số cờ heuristic chung từ các engine nhỏ là bình thường với ứng dụng Electron không được ký; phát hiện rộng rãi từ các engine lớn mới là mối lo ngại thực sự.

</details>

<details>
<summary><strong>Windows: Trình cài đặt vs Portable</strong></summary>

| | NSIS Installer | Portable `.exe` |
| --- | --- | --- |
| Yêu cầu cài đặt | Có | Không — chạy từ bất cứ đâu |
| Tự động cập nhật | ✅ trong ứng dụng | ❌ tải thủ công |
| Tốc độ khởi động | ✅ nhanh hơn | ⚠️ khởi động lạnh chậm hơn |
| Thêm vào Start Menu | Yes | No |
| Gỡ cài đặt dễ dàng | Yes | ❌ xóa file là xong |

**Khuyến nghị:** sử dụng NSIS installer để có tự động cập nhật và khởi động nhanh hơn. Dùng portable `.exe` nếu bạn muốn không cần cài đặt, không ghi registry.

</details>

---

## <a id="why"></a>Tại sao chọn Plinth

Plinth được xây dựng cho một mục đích duy nhất: dán URL, nhận file cục bộ sạch. không upsell, không thu thập dữ liệu.

| | Plinth |
| --- | --- |
| Miễn phí, không có gói cao cấp | Yes |
| Mã nguồn mở | Yes |
| Chỉ xử lý cục bộ | Yes |
| Không giới hạn sử dụng | Yes |
| Ứng dụng máy tính để bàn đa nền tảng | Yes |
| Phụ đề + SponsorBlock | Yes |

---

## <a id="privacy"></a>Quyền riêng tư

Tải xuống được lấy trực tiếp qua [yt-dlp](https://github.com/yt-dlp/yt-dlp) từ YouTube đến thư mục bạn chọn — không có gì đi qua máy chủ bên thứ ba. Lịch sử xem, lịch sử tải xuống, URL và nội dung file vẫn ở trên thiết bị của bạn.

Plinth gửi telemetry ẩn danh, tổng hợp qua [OpenPanel](https://openpanel.dev) — vừa đủ để hiểu sự cố, lỗi, phản hồi, OS và phiên bản ứng dụng. Không có URL, tiêu đề video, đường dẫn tệp, thông tin tài khoản, fingerprinting hay dữ liệu cá nhân. ID cho mỗi lần cài đặt là ngẫu nhiên và không gắn với danh tính của bạn. Bạn có thể tắt trong Cài đặt.

Explore giữ đăng nhập riêng, tách biệt với trình duyệt của bạn, và Plinth không bao giờ đọc hay điền biểu mẫu đăng nhập — bạn nhập trực tiếp vào trang của Google. Các lượt tải chạy khi chưa đăng nhập; chỉ khi một lượt tải thất bại theo cách mà tài khoản có thể khắc phục, Plinth mới đọc lại thông tin đăng nhập, lưu vào một tệp tạm cho lượt tải đó và xóa tệp sau đó. Đăng xuất khỏi Explore trong Cài đặt sẽ xóa thông tin này.

---

## <a id="faq"></a>Câu hỏi thường gặp

**Thực sự miễn phí không?**
Có — giấy phép MIT, không có gói cao cấp, không khóa tính năng.

**Tôi có thể tải xuống chất lượng video nào?**
Bất kỳ thứ gì YouTube cung cấp: 4K UHD (2160p), 1440p, 1080p, 720p, 480p, 360p, cùng với chỉ âm thanh. Các luồng 60 fps, 120 fps và HDR được giữ nguyên.

**Tôi có thể trích xuất chỉ âm thanh dạng MP3 không?**
Có. Chọn *chỉ âm thanh* trong menu định dạng rồi chọn MP3, M4A/AAC, Opus hoặc WAV.

**Làm sao để tải video cần tài khoản YouTube?**
Hãy đăng nhập một lần trong tab Explore. Sau đó Plinth có thể tải video riêng tư và video dành cho thành viên mà tài khoản của bạn xem được, video giới hạn độ tuổi nếu tài khoản đã xác minh tuổi, cùng danh sách Xem sau và Video đã thích của bạn. Plinth chỉ dùng đăng nhập này khi một lượt tải thất bại theo cách mà tài khoản có thể khắc phục; mọi thứ khác vẫn tải như trước. Đây là lựa chọn **Đăng nhập Explore** trong cài đặt cookie, được xếp đầu tiên và gắn nhãn Khuyên dùng, và Plinth tự chọn nó cho bạn lần đầu bạn mở Explore. Wiki của yt-dlp lưu ý rằng [tự động hóa khi đã đăng nhập có thể gắn cờ tài khoản Google](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies), nên tài khoản phụ là lựa chọn an toàn hơn.

**Ứng dụng có tiếp tục hoạt động khi YouTube thay đổi gì đó không?**
yt-dlp được cập nhật tự động khi khởi động, và Plinth nhanh chóng phát hành các bản sửa lỗi khi YouTube thay đổi điều gì đó. Khi YouTube yêu cầu xác nhận bạn không phải robot, Plinth cũng thử dùng đăng nhập Explore nếu bạn đã đăng nhập ở đó, và cookie từ tệp hoặc trình duyệt có sẵn trong cài đặt cookie.

**Plinth có sẵn bằng những ngôn ngữ nào?**
30 ngôn ngữ có sẵn ngay: Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文. Plinth tự động phát hiện ngôn ngữ hệ điều hành của bạn trong lần khởi chạy đầu tiên, và bạn có thể đổi bất cứ lúc nào từ bộ chọn ngôn ngữ trên thanh công cụ. Runtime locale JSON nằm trong src/shared/i18n/locales/, còn catalog PO dành cho người dịch nằm trong i18n/locales/ — hãy mở PR trên GitHub để đóng góp.

**Tôi có cần cài đặt thêm gì không?**
Không. yt-dlp được tải xuống tự động khi khởi động lần đầu và được lưu vào bộ nhớ đệm trên máy của bạn; ffmpeg và ffprobe đi kèm với ứng dụng. Sau đó, không cần thiết lập thêm gì.

**Tôi có thể tải xuống danh sách phát hoặc toàn bộ kênh không?**
Có — cả hai. Dán URL playlist hoặc kênh (ví dụ `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`); chọn số mục cần quét, rồi đưa cả danh sách vào hàng đợi hoặc chọn từng video. Bộ lọc theo khoảng ngày sẽ có sớm.

**macOS báo "ứng dụng bị hỏng" — tôi phải làm gì?**
Đó là macOS Gatekeeper chặn ứng dụng chưa được ký, không phải file thật sự bị hỏng. Xem [macOS first launch](#macos-first-launch) để biết các lệnh Terminal xóa quarantine và khởi chạy Plinth.

**Tải video YouTube có hợp pháp không?**
Đối với mục đích sử dụng cá nhân, riêng tư thì nhìn chung được chấp nhận ở hầu hết các khu vực pháp lý. Bạn có trách nhiệm tuân thủ [Điều khoản dịch vụ](https://www.youtube.com/t/terms) của YouTube và luật bản quyền tại địa phương của bạn.

---

## <a id="roadmap"></a>Lộ trình phát triển

Vẫn được lên kế hoạch — theo thứ tự ưu tiên tương đối:

| Tính năng | Mô tả |
| --- | --- |
| **Bộ lọc danh sách phát & kênh** | Bộ lọc khoảng ngày khi liệt kê playlist hoặc kênh |
| **Tùy chọn track âm thanh YouTube** | Đặt tùy chọn track ngôn ngữ nói cho toàn app, với override theo từng profile khi YouTube cung cấp nhiều track âm thanh |
| **Khôi phục retry mạnh hơn** | Một đường retry mới cho các lượt tải xuống bị gián đoạn bởi kết nối internet không ổn định hoặc có vấn đề |
| **Drawer quản lý tải xuống đầy đủ** | Biến queue drawer thành manager đầy đủ hơn, bao gồm đổi thư mục đích cho các mục đang chờ |
| **Tải xuống theo lịch** | Bắt đầu hàng đợi vào thời điểm đặt trước (chạy qua đêm) |
| **Cắt đoạn clip** | Chỉ tải xuống một đoạn theo thời gian bắt đầu/kết thúc |
| **Gói AUR** | Cài đặt trên Arch Linux và Omarchy bằng `yay -S plinth-bin` |

Bạn có ý tưởng tính năng? [Mở yêu cầu](../../issues) — ý kiến cộng đồng định hình thứ tự ưu tiên.

---

## <a id="support"></a>Ủng hộ Plinth

Plinth miễn phí và có giấy phép MIT — không quảng cáo, không bản trả phí. Nếu nó giúp bạn tiết kiệm thời gian, bạn có thể ủng hộ việc phát triển bằng Bitcoin hoặc Tron: địa chỉ nằm trong [DONATE.md](../../docs/DONATE.md), nguồn chính thức duy nhất cho các địa chỉ này. Plinth sẽ không bao giờ gửi cho bạn địa chỉ qua email hay tin nhắn riêng. Gắn sao cho kho mã, báo lỗi và cải thiện bản dịch cũng giúp ích không kém.

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>Được xây dựng với

<details>
<summary><strong>Stack</strong></summary>

- **Electron** — shell máy tính để bàn đa nền tảng
- **React 19** + **TypeScript** — UI
- **Tailwind CSS v4** — tạo kiểu
- **Zustand** — quản lý trạng thái
- **yt-dlp** + **ffmpeg** — công cụ tải xuống và ghép luồng (yt-dlp được lấy lúc chạy; ffmpeg/ffprobe được đóng gói khi build)
- **Vite** + **electron-vite** — công cụ build
- **Vitest** + **Playwright** — kiểm thử đơn vị và end-to-end

</details>

<details>
<summary><strong>Build từ mã nguồn</strong></summary>

### Điều kiện tiên quyết — mọi nền tảng

| Công cụ | Phiên bản | Cài đặt |
| -------- | --------- | ------- |
| Git     | bất kỳ  | [git-scm.com](https://git-scm.com) |
| Node.js | 24.21.0 | `mise install` hoặc `.node-version` |
| Bun     | 1.4.2  | `mise install` hoặc `package.json` `packageManager` |

Khuyến nghị: cài `mise`, rồi chạy `mise install` trong checkout. Nếu không dùng mise, hãy kích hoạt thủ công Node.js từ `.node-version` và Bun từ `package.json` trước `bun run bootstrap`.

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Visual Studio Build Tools và Python có thể cần cho các rebuild gốc.

### macOS

```bash
brew install mise
xcode-select --install
```

Sau khi clone, chạy `mise trust && mise install` trong checkout. Nếu shell của bạn đã dùng `fnm`, `nvm`, hoặc Bun từ Homebrew, hãy kích hoạt mise trong `~/.zshrc` để Plinth dùng Node.js 24.21.0 và Bun 1.4.2:

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

# Phụ thuộc build và runtime Electron
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# E2E tests only (Electron needs a display)
sudo apt install -y xvfb
```

### Clone & chạy

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # khuyến nghị; bỏ qua nếu đã kích hoạt thủ công các công cụ đã ghim
bun run bootstrap
bun run doctor
bun run dev            # app Electron với Vite renderer
```

### Tạo bản phân phối

```bash
bun run build        # kiểm tra kiểu + biên dịch
bun run dist         # đóng gói cho OS hiện tại
bun run dist:win     # đóng gói mục tiêu Windows trên host được hỗ trợ
```

> `bun run bootstrap` cài dependencies, rebuild dependencies của app Electron, xác minh Electron, chuẩn bị ffmpeg/ffprobe nhúng cho phát triển và cài Playwright Chromium. yt-dlp được quản lý lúc runtime trong thư mục dữ liệu ứng dụng; ffmpeg và ffprobe được đóng gói trong mọi bản phát hành Plinth.

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

## Điều khoản sử dụng

Plinth là công cụ chỉ dành cho mục đích sử dụng cá nhân, riêng tư. Bạn hoàn toàn chịu trách nhiệm đảm bảo các tải xuống của mình tuân thủ [Điều khoản dịch vụ](https://www.youtube.com/t/terms) của YouTube và luật bản quyền tại khu vực pháp lý của bạn. Không sử dụng Plinth để tải xuống, sao chép hoặc phân phối nội dung mà bạn không có quyền sử dụng. Các nhà phát triển không chịu trách nhiệm về bất kỳ hành vi lạm dụng nào.

Giấy phép MIT · Được tạo ra với tâm huyết bởi <a href="https://github.com/fabwaseem">Waseem Anjum</a>

<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — โปรแกรมดาวน์โหลด YouTube (+ 2000 เว็บไซต์) ฟรีและโอเพนซอร์สสำหรับ Windows, macOS และ Linux

ดาวน์โหลดวิดีโอ Shorts เพลง ช่อง พอดแคสต์ หรือแทร็กเสียงจาก **YouTube และเว็บไซต์ที่รองรับกว่า 2000 แห่ง** — สูงสุด 4K HDR ที่ 60 fps หรือเป็น MP3 / AAC / Opus ทำงานภายในเครื่องบน Windows, macOS และ Linux **ไม่มีโฆษณา ไม่มีส่วนเกิน และไม่มีการขายเพิ่ม**

**อ่านในภาษา:** [Afaan Oromoo](README.om.md) · [Bahasa Indonesia](README.id.md) · [Deutsch](README.de.md) · [English](../../README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Tiếng Việt](README.vi.md) · [Türkçe](README.tr.md) · [አማርኛ](README.am.md) · [العربية](README.ar.md) · [اردو](README.ur.md) · [پښتو](README.ps.md) · [فارسی](README.fa.md) · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · **ไทย** · [မြန်မာဘာသာ](README.my.md) · [Ελληνικά](README.el.md) · [Русский](README.ru.md) · [Српски](README.sr.md) · [Українська](README.uk.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ ติดตั้งรุ่นล่าสุด**](#install) · [**เว็บไซต์**](https://plinth.fabwaseem.com) · [การเปิดครั้งแรกบน Windows](#windows-first-launch) · [การเปิดครั้งแรกบน macOS](#macos-first-launch) · [การเปิดครั้งแรกบน Linux](#linux-first-launch)

ถ้า Plinth ช่วยประหยัดเวลา การกด ⭐ จะช่วยให้คนอื่นค้นพบได้ง่ายขึ้น

_Last updated: 2026-10-18._

> 🌐 คำแปลนี้จัดทำโดยมี AI ช่วยเหลือ [README ภาษาอังกฤษ](README.md) คือแหล่งข้อมูลหลัก พบข้อผิดพลาดหรือไม่ [เปิด PR](../../pulls) ได้เลย

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Winget](https://winget.run/pkg/WaseemAnjum/Plinth), [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download.

---

## สารบัญ

- [ความสามารถ](#features)
- [การติดตั้งและเปิดใช้ครั้งแรก](#install)
- [เหตุผลที่เลือก Plinth](#why)
- [ความเป็นส่วนตัว](#privacy)
- [คำถามที่พบบ่อย](#faq)
- [แผนพัฒนา](#roadmap)
- [สนับสนุน Plinth](#support)
- [สร้างด้วย](#tech)

---

## <a id="features"></a>ความสามารถ

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>หน้าดาวน์โหลดด่วน</b><br/>วาง URL แล้วดาวน์โหลดทันทีด้วยโปรไฟล์ที่ใช้งานอยู่

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>เรียกดู YouTube ใน Plinth แล้วดาวน์โหลดหน้าที่กำลังดูด้วยโปรไฟล์ที่ใช้งานอยู่

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>โหมด URL จำนวนมาก</b><br/>วางรายการ ลบรายการซ้ำอัตโนมัติ แล้วเพิ่มทั้งหมดเข้าคิว

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>คิวดาวน์โหลดแบบขนาน</b><br/>ดาวน์โหลดหลายงานพร้อมกันพร้อมความคืบหน้าแบบสด

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>โปรไฟล์ดาวน์โหลดที่ใช้ซ้ำได้</b><br/>บันทึกรูปแบบ คุณภาพ และปลายทาง แล้วใช้ซ้ำในแต่ละงาน

### Explore: เรียกดู YouTube ใน Plinth

- **แท็บ Explore** — เรียกดู YouTube ภายใน Plinth และดาวน์โหลดสิ่งที่พบโดยไม่ต้องคัดลอกลิงก์ **ดาวน์โหลด · *โปรไฟล์ของคุณ*** จะเข้าคิววิดีโอ เพลย์ลิสต์ หรือช่องที่กำลังดูอยู่ ลูกศรข้างปุ่มใช้สลับโปรไฟล์ ส่วนไม้กายสิทธิ์เปิดการดาวน์โหลดทีละขั้นเพื่อเลือกรูปแบบ คำบรรยาย และอื่น ๆ
- **แถบที่อยู่** — พิมพ์เพื่อค้นหาใน YouTube หรือวางลิงก์ YouTube Explore เรียกดูได้เฉพาะ YouTube จึงไม่เปิดลิงก์จากเว็บไซต์อื่นที่นั่น แต่คุณดาวน์โหลดลิงก์นั้นได้ด้วยการคลิกครั้งเดียว
- **ดาวน์โหลดที่ต้องใช้บัญชี** — เข้าสู่ระบบใน Explore เพียงครั้งเดียว Plinth ก็ดาวน์โหลดวิดีโอส่วนตัวและวิดีโอเฉพาะสมาชิกที่บัญชีของคุณดูได้ วิดีโอจำกัดอายุหากบัญชียืนยันอายุแล้ว รวมถึงรายการดูภายหลังและวิดีโอที่ถูกใจของคุณได้ โดย Plinth ยังคงดาวน์โหลดแบบไม่เข้าสู่ระบบ และใช้การเข้าสู่ระบบ Explore ของคุณเฉพาะเมื่อการดาวน์โหลดล้มเหลวด้วยเหตุที่บัญชีแก้ได้ เมื่อ YouTube ขอให้ยืนยันว่าคุณไม่ใช่บอต Plinth ก็จะลองใช้การเข้าสู่ระบบ Explore ของคุณด้วย
- **ใช้บัญชีสำรอง** — หน้าแรกของ Explore อธิบายเหตุผลไว้ การดาวน์โหลดด้วยบัญชีมีความเสี่ยงอยู่บ้างที่บัญชีนั้นจะถูกจำกัด ออกจากระบบ Explore ได้จากการตั้งค่าทุกเมื่อที่ต้องการให้ลืมการเข้าสู่ระบบ
- **ตัวบล็อกโฆษณา** — Explore บล็อกโฆษณาและตัวติดตามบนหน้าของตัวเอง การดาวน์โหลดไม่ได้รับผลกระทบ เปิดไว้โดยค่าเริ่มต้น คลิกที่โล่บนแถบเครื่องมือของ Explore ครั้งเดียวก็ปิดได้ และจะไม่ทำงานบนหน้าเข้าสู่ระบบของ Google YouTube อาจตอบโต้ตัวบล็อกโฆษณากับบัญชีที่เข้าสู่ระบบอยู่

### คุณภาพและรูปแบบ

- สูงสุด **4K UHD (2160p)** รวมถึง 1440p, 1080p, 720p, 480p และ 360p
- คง **อัตราเฟรมสูง** ไว้ตามต้นฉบับ — 60 fps, 120 fps และ HDR
- **เสียง** — ส่งออกเฉพาะเสียงเป็น MP3, M4A/AAC, Opus หรือ WAV ในการดาวน์โหลดแบบโต้ตอบ คุณเลือกแทร็ก surround/Dolby ดั้งเดิมของต้นทาง (AC-3, E-AC-3, 5.1, DRC) ได้เมื่อมี หรือกำหนดค่าเริ่มต้นส่วนกลางเป็น **เน้น surround / Dolby**
- ค่าล่วงหน้าด่วน: *คุณภาพดีที่สุด* · *สมดุล* · *ไฟล์เล็ก*

### ขั้นตอนการทำงาน

- **ปุ่มลัดดาวน์โหลดทั่วระบบ** — คัดลอกลิงก์ในแอปใดก็ได้แล้วกด `Ctrl+Shift+D` (`Cmd+Shift+D` บน macOS); Plinth จะเพิ่มเข้าคิวด้วยโปรไฟล์ที่ใช้งานอยู่โดยไม่เปิดหน้าต่าง พร้อมแจ้งเตือนยืนยัน เปิดใช้โดยค่าเริ่มต้นและเปลี่ยนปุ่มได้
- **วิธีเริ่มที่ยืดหยุ่น** — เลือกดาวน์โหลดไฟล์เดียวแบบมีตัวช่วย ตัวเลือกเพลย์ลิสต์/ช่อง วาง URL จำนวนมาก ดาวน์โหลดด่วนด้วยค่าเริ่มต้นที่บันทึกไว้ หรือเรียกดูและดาวน์โหลดจาก Explore
- **คิวดาวน์โหลดส่วนกลาง** — งานเดี่ยว เพลย์ลิสต์ แบบกลุ่ม และแบบด่วนอยู่ในที่เดียวสำหรับดูความคืบหน้า หยุดชั่วคราว ทำต่อ ยกเลิก ลองใหม่ และกำหนดลำดับความสำคัญ
- **เฝ้าดูคลิปบอร์ด** — คัดลอกลิงก์ YouTube แล้ว Plinth จะกรอก URL ให้อัตโนมัติเมื่อคุณกลับมาโฟกัสแอป (เปิดปิดได้ในการตั้งค่าขั้นสูง)
- **ล้าง URL อัตโนมัติ** — ตัดพารามิเตอร์ติดตาม (`si`, `pp`, `utm_*`, `fbclid`, `gclid`) และแกะลิงก์ `youtube.com/redirect`
- **โหมดถาดระบบ** — ปิดหน้าต่างแล้วการดาวน์โหลดยังทำงานเบื้องหลัง
- **30 ภาษา** — ตรวจหาภาษาระบบอัตโนมัติและเปลี่ยนได้ทุกเมื่อ
- **ซิงก์เพลย์ลิสต์** — สแกนเพลย์ลิสต์เทียบกับโฟลเดอร์ในเครื่องอีกครั้งเพื่อข้ามวิดีโอที่ดาวน์โหลดแล้ว พร้อมสร้างไฟล์เพลย์ลิสต์ `.m3u` ที่อัปเดตเมื่อดาวน์โหลดแต่ละวิดีโอ
- **ควบคุมความเร็วและจังหวะ** — จำกัดแบนด์วิดท์ กำหนดจำนวนส่วนของวิดีโอที่ดาวน์โหลดพร้อมกัน และหน่วงคำขอด้วยค่าล่วงหน้า (*ปิด · สมดุล · ระมัดระวัง · กำหนดเอง*)
- **แม่แบบชื่อไฟล์** — ตั้งชื่อด้วย `{title}`, `{uploader}`, `{id}`, `{date}`, `{resolution}` และ `{playlist_index}` ได้ทั้งส่วนกลางหรือแยกตามโปรไฟล์
- **ดาวน์โหลดพร้อมกันและลองใหม่อัตโนมัติ** — เลือกจำนวนงานในคิวที่ทำพร้อมกัน และให้ Plinth ลองงานที่พบปัญหาเครือข่ายหรือเซิร์ฟเวอร์ใหม่ โดยรอนานขึ้นในแต่ละครั้ง
- **โปรไฟล์แยกสำหรับแต่ละรายการในเพลย์ลิสต์** — กำหนดโปรไฟล์ให้แต่ละวิดีโอแทนการใช้ค่าเดียวทั้งรายการ จึงเก็บบางรายการเต็มคุณภาพและดาวน์โหลดที่เหลือเป็น MP3 ได้ในรอบเดียว
- **ดาวน์โหลดด่วนทำงานเบื้องหลัง** — ลิงก์จะแสดงในแท็บดาวน์โหลดทันทีและเตรียมข้อมูลที่นั่น มีการแจ้งเตือนพร้อมปุ่ม **ดู** ยืนยัน และช่อง URL จะถูกล้างเพื่อรอลิงก์ถัดไป เริ่มกี่ลิงก์ก็ได้ระหว่างที่ลิงก์ก่อนหน้ากำลังเตรียม
- **แท็บดาวน์โหลดบอกว่าอะไรต้องให้คุณจัดการ** — หาก Plinth อ่านลิงก์ไม่ได้ แถวของลิงก์นั้นจะบอกสาเหตุและเสนอวิธีแก้: ลองอีกครั้ง เปิดคุกกี้ หรือเข้าสู่ระบบใน Explore เมื่อปิดคุกกี้ไว้ **เข้าสู่ระบบด้วย Explore** จะลองให้อีกครั้งหลังคุณเข้าสู่ระบบแล้ว เพลย์ลิสต์ที่ยาวเกินขีดจำกัดการโหลดจะรอบนแถวให้คุณเลือกทั้งหมด เฉพาะไม่กี่รายการแรก หรือตรวจดูก่อน แท็บดาวน์โหลดจะนับจำนวนแถวที่รอคุณอยู่

### คำบรรยายและการประมวลผลภายหลัง

- **คำบรรยาย** แบบ SRT, VTT หรือ ASS — แบบทำเองหรือสร้างอัตโนมัติ ในทุกภาษาที่มี
- บันทึกข้างวิดีโอ ฝังใน `.mkv` หรือจัดไว้ในโฟลเดอร์ย่อย `Subtitles/`
- **SponsorBlock** — ข้ามหรือทำเครื่องหมายบทสำหรับสปอนเซอร์ อินโทร เอาต์โทร และการโปรโมตตนเอง
- **ข้อมูลกำกับที่ฝังในไฟล์** — ชื่อ วันที่อัปโหลด ช่อง คำอธิบาย ภาพปก และเครื่องหมายบท
- **ชุดงานเฉพาะคำบรรยาย** — วางรายการ URL หรือเปิดเพลย์ลิสต์ เลือกคำบรรยาย แล้วรับเฉพาะไฟล์คำบรรยายของทุกวิดีโอ

### YouTube + 2000 เว็บไซต์

- **รองรับ YouTube ครบถ้วน** — วิดีโอ Shorts ช่อง เพลย์ลิสต์ YouTube Music และพอดแคสต์เป็นแหล่งข้อมูลหลักทั้งหมด
- **เว็บไซต์อื่นกว่า 2000 แห่ง** ผ่าน yt-dlp — Vimeo, Twitch, Twitter/X, TikTok, SoundCloud, Bandcamp, Bilibili, BBC iPlayer, archive.org และอีกมาก
- **เฉพาะเสียงและคำบรรยาย** ใช้ได้กับทุกเว็บไซต์ที่รองรับ ไม่ใช่แค่ YouTube
- เมื่อเว็บไซต์เปลี่ยน yt-dlp จะออกการแก้ไขทุกสัปดาห์ และ Plinth อัปเดตไบนารีอัตโนมัติเมื่อเปิดแอป

### ความเป็นส่วนตัวและการควบคุม

- ประมวลผลภายในเครื่อง 100% — ดาวน์โหลดตรงจาก YouTube ลงดิสก์ของคุณ
- **โอเพนซอร์ส** — ตรวจสอบโค้ดได้ทุกบรรทัด ภายใต้ MIT License
- บันทึกไฟล์ตรงไปยังโฟลเดอร์ที่คุณเลือก

---

## <a id="install"></a>การติดตั้งและเปิดใช้ครั้งแรก

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

บิลด์มีเฉพาะ x86_64 ไม่มี `curl` ใช่ไหม เปลี่ยน `curl -fsSL` เป็น `wget -qO-`

| แพลตฟอร์ม | ดาวน์โหลดโดยตรง |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**ไฟล์ทั้งหมดของรุ่น →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>การเปิดครั้งแรกบน Windows

เมื่อเปิดครั้งแรก คุณอาจเห็น **"Windows protected your PC"** หรือ **"Unknown publisher"** ทั้ง `Plinth-win-x64-Setup.exe` และ `Plinth-win-x64-Portable.exe` เป็นเช่นนี้ Plinth ฟรีและโอเพนซอร์ส แต่บิลด์ Windows ไม่ได้ลงนามด้วยใบรับรองแบบชำระเงิน SmartScreen จึงแจ้งเตือน ซึ่ง **ไม่ได้** หมายความว่า Plinth ไม่ปลอดภัยโดยอัตโนมัติ หากต้องการดำเนินการต่อ:

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="กล่อง SmartScreen ข้อความ Windows protected your PC ที่เน้นลิงก์ More info" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="กล่อง SmartScreen หลังขยายข้อมูล แสดงปุ่ม Run anyway" />

1. คลิก **More info**
2. คลิก **Run anyway**

#### หาก Windows Defender แจ้งเตือนหรือลบไฟล์

การตรวจแบบฮิวริสติกของ Defender บางครั้งมองตัวติดตั้ง NSIS และแอป Electron แบบพกพาที่ไม่ได้ลงนามว่าน่าสงสัย หาก Defender กัก `Plinth-win-x64-Setup.exe` หรือ `Plinth-win-x64-Portable.exe` ให้กู้คืนจาก **Windows Security → Virus & threat protection → Protection history** แล้วเพิ่มไฟล์ Plinth เป็นรายการที่อนุญาตใน **Manage settings → Add or remove exclusions** เช่นเดียวกับ SmartScreen สาเหตุคือลายเซ็นผู้เผยแพร่หายไป ไม่ใช่การตรวจพบมัลแวร์

> ดาวน์โหลด Plinth จากหน้า GitHub Releases ทางการเท่านั้น หากได้ไฟล์จากเว็บไซต์อื่นหรือมีคนส่งมา ให้ลบแล้วดาวน์โหลดสำเนาใหม่จากแหล่งทางการ โค้ดเป็นสาธารณะ คุณจึงตรวจสอบหรือสร้าง Plinth เองได้

ชอบ Scoop มากกว่าหรือไม่ `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>การเปิดครั้งแรกบน macOS

บิลด์ macOS ของ Plinth ลงนามแบบ ad-hoc แต่ยังไม่ได้ notarize โดย Apple ดังนั้น Gatekeeper จะบล็อกครั้งแรกพร้อมข้อความ *"Plinth.app" Not Opened — Apple could not verify "Plinth.app" is free of malware* หมายความว่า macOS ตรวจแอปกับ Apple ไม่ได้ ไม่ใช่ว่าไฟล์เสีย การติดตั้งผ่าน Homebrew จะไม่พบกล่องนี้ หากใช้ DMG ให้ใช้คำสั่ง Terminal หนึ่งชุด:

1. ลาก `Plinth.app` จาก DMG ที่เปิดอยู่ไปยัง `/Applications`
2. เปิด Terminal แล้วเรียกใช้สองคำสั่งนี้:

**แก้ไข quarantine ของ Gatekeeper**

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
```

คำสั่งแรกนำแอตทริบิวต์กักกันที่ macOS ใส่ไว้ตอนดาวน์โหลดออก คำสั่งที่สองเปิดแอป ปกติไม่ต้องใช้ `sudo` เพราะสำเนาใน `/Applications` เป็นของคุณ — เพิ่มเฉพาะเมื่อพบข้อผิดพลาดด้านสิทธิ์

**Apple Silicon กับ Intel:** บน Mac ตระกูล M (M1 / M2 / M3 / M4) ให้ดาวน์โหลด DMG `arm64` ส่วน Mac Intel ให้ใช้ DMG `x64` บิลด์ที่ไม่ตรงยังทำงานผ่าน Rosetta ได้แต่ช้าลงอย่างเห็นได้ชัด

> บิลด์ macOS สร้างผ่าน CI บนเครื่อง Apple Silicon และ Intel หากพบปัญหา โปรด [เปิด issue](../../issues) — ความเห็นของผู้ใช้ macOS มีส่วนกำหนดรอบการทดสอบโดยตรง

### <a id="why-warning"></a>เหตุผลที่อาจเห็นคำเตือน

Plinth เป็นโอเพนซอร์สภายใต้ MIT License บิลด์ Windows และ macOS **ไม่ได้ลงนามโค้ด** — ใบรับรอง Apple Developer ID และ Windows EV แต่ละอย่างมีค่าใช้จ่ายหลายร้อยดอลลาร์ต่อปี ซึ่งโครงการอิสระต้องออกเอง หากไม่มีลายเซ็น Windows SmartScreen และ macOS Gatekeeper จะเตือนเมื่อเปิดครั้งแรก คำเตือนหมายถึง *ระบบปฏิบัติการไม่รู้จักผู้เผยแพร่* ไม่ได้หมายความว่า Plinth เป็นมัลแวร์

สามวิธีตรวจสอบ Plinth ด้วยตนเอง เรียงจากง่ายไปเข้มงวด:

- **อ่านซอร์สโค้ด** ทุกบรรทัดอยู่บน [GitHub](https://github.com/fabwaseem/plinth) และคุณ [สร้างจากซอร์ส](#tech) ได้
- **ตรวจ SHA256** เปรียบเทียบไฟล์กับ [`SHA256SUMS`](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) ที่เผยแพร่ — ดู [ตรวจสอบไฟล์ดาวน์โหลด](#verify) ด้านล่าง
- **สแกนกับผู้ให้บริการภายนอก** อัปโหลดไฟล์ไปยัง [VirusTotal](https://www.virustotal.com)

### <a id="code-signing-policy"></a>Code signing policy

Free code signing provided by [SignPath.io](https://signpath.io), certificate by [SignPath Foundation](https://signpath.org).

This is Plinth's code signing policy. It names who may commit and who may approve a Windows signature. It does not mean a published release is already signed. Windows signing in GitHub Actions runs only after the SignPath secret and repository variables in [CODE_SIGNING.md](../../docs/CODE_SIGNING.md) are set. Until then, Windows artifacts are published unsigned.

- Committers: [fabwaseem](https://github.com/fabwaseem)
- Approvers: [fabwaseem](https://github.com/fabwaseem)

Privacy is described in [Privacy](#privacy). Plinth can send anonymous aggregate telemetry, and that can be turned off in Settings.

### <a id="linux-first-launch"></a>การเปิดครั้งแรกบน Linux

AppImage เรียกใช้ได้โดยตรงโดยไม่ต้องติดตั้ง เพียงกำหนดให้ไฟล์เรียกใช้ได้

**ตัวจัดการไฟล์:** คลิกขวา `.AppImage` → **Properties** → **Permissions** → เปิด **Allow executing file as program** แล้วดับเบิลคลิก

**เทอร์มินัล:**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

หากยังเปิดไม่ได้ ให้เรียกใช้โดยไม่ mount — ไม่ต้องติดตั้งแพ็กเกจ FUSE:

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**การผสานกับเดสก์ท็อปแบบเลือกได้:** ติดตั้ง [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) ครั้งเดียว แล้ว AppImage ที่ดับเบิลคลิกจะลงทะเบียนในเมนูแอปอัตโนมัติ — ไม่ต้องสร้างไฟล์ `.desktop` เอง

**ไฟล์ tar ปกติ (ไม่ใช้ FUSE และไม่ติดตั้ง):**

บิลด์ `.tar.gz` คือแอปเดียวกันแต่ไม่มีตัวห่อ AppImage — แตกไฟล์ไว้ที่ใดก็ได้แล้วเรียกใช้ ไม่ต้องใช้ตัวติดตั้งหรือ FUSE

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**ไฟล์ Linux ในหน้าเผยแพร่มีเฉพาะ x86_64** บนเครื่อง ARM64 (Raspberry Pi, Asahi Linux) Flatpak ยังติดตั้งได้ แต่จะเปิดไม่สำเร็จด้วย `bwrap: execvp ldconfig: Exec format error`

<details>
<summary><strong><a id="verify"></a>ตรวจสอบไฟล์ดาวน์โหลด (SHA256)</strong></summary>

แต่ละรุ่นเผยแพร่ไฟล์ `SHA256SUMS` พร้อมไบนารี เพื่อตรวจว่าไฟล์ไม่เสียหายหรือถูกแก้ไขระหว่างส่ง ให้คำนวณแฮชในเครื่องแล้วเทียบกับบรรทัดใน `SHA256SUMS` เปิดหน้ารุ่นล่าสุด → **Assets** → ดาวน์โหลด `SHA256SUMS`

**Windows (PowerShell หรือ Command Prompt):**

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

ต้องการสแกนมัลแวร์โดยบริการภายนอกหรือไม่ อัปโหลดไฟล์ไปยัง [VirusTotal](https://www.virustotal.com) การแจ้งเตือนฮิวริสติกทั่วไปไม่กี่รายการจากเอนจินขนาดเล็กเป็นเรื่องปกติสำหรับแอป Electron ที่ไม่ได้ลงนาม แต่หากเอนจินหลักจำนวนมากตรวจพบจึงเป็นเรื่องน่ากังวลจริง

</details>

<details>
<summary><strong>Windows: ตัวติดตั้งกับรุ่นพกพา</strong></summary>

| | ตัวติดตั้ง NSIS | `.exe` แบบพกพา |
| --- | --- | --- |
| ต้องติดตั้ง | ใช่ | ไม่ — เรียกใช้จากที่ใดก็ได้ |
| อัปเดตอัตโนมัติ | ✅ ภายในแอป | ❌ ดาวน์โหลดเอง |
| ความเร็วในการเปิด | ✅ เร็วกว่า | ⚠️ การเปิดครั้งแรกช้ากว่า |
| เพิ่มในเมนู Start | Yes | No |
| ถอนการติดตั้งง่าย | Yes | ❌ ลบไฟล์ |

**คำแนะนำ:** ใช้ตัวติดตั้ง NSIS เพื่อรับการอัปเดตอัตโนมัติและเปิดเร็วขึ้น ใช้ `.exe` แบบพกพาหากไม่ต้องการติดตั้งหรือแก้ไขรีจิสทรี

</details>

---

## <a id="why"></a>เหตุผลที่เลือก Plinth

Plinth ถูกสร้างมาเพื่อสิ่งเดียว: วาง URL แล้วรับไฟล์สะอาดในเครื่อง ไม่มีการขายเพิ่ม และไม่มีการเก็บข้อมูล

| | Plinth |
| --- | --- |
| ฟรี ไม่มีระดับพรีเมียม | Yes |
| โอเพนซอร์ส | Yes |
| ประมวลผลในเครื่องเท่านั้น | Yes |
| ไม่จำกัดการใช้งาน | Yes |
| แอปเดสก์ท็อปข้ามแพลตฟอร์ม | Yes |
| คำบรรยาย + SponsorBlock | Yes |

---

## <a id="privacy"></a>ความเป็นส่วนตัว

[yt-dlp](https://github.com/yt-dlp/yt-dlp) ดึงไฟล์ตรงจาก YouTube ไปยังโฟลเดอร์ที่คุณเลือก โดยไม่ผ่านเซิร์ฟเวอร์ภายนอก ประวัติการดูและดาวน์โหลด URL และเนื้อหาไฟล์อยู่บนอุปกรณ์ของคุณ

Plinth ส่งข้อมูลสถิติแบบไม่ระบุตัวตนและรวมกลุ่มผ่าน [OpenPanel](https://openpanel.dev) เท่าที่โครงการอิสระต้องใช้เพื่อเข้าใจข้อผิดพลาด การหยุดทำงาน ความเห็น ระบบปฏิบัติการ และรุ่นแอป ไม่มี URL ชื่อวิดีโอ พาธไฟล์ ข้อมูลบัญชี ลายนิ้วมือ หรือข้อมูลส่วนบุคคล รหัสต่อการติดตั้งเป็นแบบสุ่มและไม่ผูกกับตัวตน คุณปิดได้ในการตั้งค่า

Explore เก็บการเข้าสู่ระบบของตัวเองแยกจากเบราว์เซอร์ และ Plinth ไม่เคยอ่านหรือกรอกแบบฟอร์มเข้าสู่ระบบ คุณพิมพ์บนหน้าของ Google เอง การดาวน์โหลดทำงานแบบไม่เข้าสู่ระบบ เฉพาะเมื่อล้มเหลวด้วยเหตุที่บัญชีแก้ได้ Plinth จึงอ่านข้อมูลการเข้าสู่ระบบใหม่ เก็บในไฟล์ชั่วคราวสำหรับการดาวน์โหลดนั้น แล้วลบไฟล์ทิ้งหลังจากนั้น การออกจากระบบ Explore ในการตั้งค่าจะลบข้อมูลนั้น

---

## <a id="faq"></a>คำถามที่พบบ่อย

**ฟรีจริงหรือไม่**
ใช่ — MIT License ไม่มีระดับพรีเมียมและไม่ล็อกความสามารถ

**ดาวน์โหลดวิดีโอคุณภาพใดได้บ้าง**
ทุกอย่างที่ YouTube ให้บริการ: 4K UHD (2160p), 1440p, 1080p, 720p, 480p, 360p รวมถึงเฉพาะเสียง สตรีม 60 fps, 120 fps และ HDR จะถูกเก็บตามต้นฉบับ

**แยกเฉพาะเสียงเป็น MP3 ได้หรือไม่**
ได้ เลือก *เฉพาะเสียง* ในเมนูรูปแบบ แล้วเลือก MP3, M4A/AAC, Opus หรือ WAV

**จะดาวน์โหลดวิดีโอที่ต้องใช้บัญชี YouTube ได้อย่างไร**
เข้าสู่ระบบครั้งเดียวในแท็บ Explore จากนั้น Plinth จะดาวน์โหลดวิดีโอส่วนตัวและวิดีโอเฉพาะสมาชิกที่บัญชีของคุณดูได้ วิดีโอจำกัดอายุหากบัญชียืนยันอายุแล้ว รวมถึงรายการดูภายหลังและวิดีโอที่ถูกใจของคุณได้ โดยจะใช้การเข้าสู่ระบบนี้เฉพาะเมื่อการดาวน์โหลดล้มเหลวด้วยเหตุที่บัญชีแก้ได้ ส่วนอย่างอื่นดาวน์โหลดเหมือนเดิม นี่คือตัวเลือก **การเข้าสู่ระบบ Explore** ซึ่งอยู่อันดับแรกและมีป้ายแนะนำในการตั้งค่าคุกกี้ และ Plinth จะเลือกให้เองเมื่อคุณเปิด Explore ครั้งแรก วิกิ yt-dlp ระบุว่า [ระบบอัตโนมัติที่เข้าสู่ระบบอาจทำให้บัญชี Google ถูกทำเครื่องหมาย](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies) การใช้บัญชีสำรองจึงปลอดภัยกว่า

**ยังใช้ได้หรือไม่เมื่อ YouTube เปลี่ยนแปลง**
yt-dlp อัปเดตอัตโนมัติเมื่อเปิดแอป และ Plinth ออกการแก้ไขอย่างรวดเร็วเมื่อ YouTube เปลี่ยน เมื่อ YouTube ขอให้ยืนยันว่าคุณไม่ใช่บอต Plinth จะลองใช้การเข้าสู่ระบบ Explore ด้วยหากคุณเข้าสู่ระบบไว้ และในการตั้งค่าคุกกี้ยังใช้คุกกี้จากไฟล์หรือเบราว์เซอร์ได้

**Plinth มีภาษาใดบ้าง**
พร้อมใช้ 30 ภาษา: Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文 Plinth ตรวจหาภาษาระบบปฏิบัติการในการเปิดครั้งแรกและเปลี่ยนได้ทุกเมื่อจากตัวเลือกภาษาบนแถบเครื่องมือ JSON ภาษาที่ใช้ขณะทำงานอยู่ใน src/shared/i18n/locales/ และแค็ตตาล็อก PO สำหรับผู้แปลอยู่ใน i18n/locales/ — เปิด PR บน GitHub เพื่อร่วมพัฒนา

**ต้องติดตั้งอย่างอื่นอีกหรือไม่**
ไม่ต้อง yt-dlp จะดาวน์โหลดอัตโนมัติเมื่อเปิดครั้งแรกและเก็บแคชในเครื่อง ส่วน ffmpeg และ ffprobe มากับแอป หลังจากนั้นไม่ต้องตั้งค่าเพิ่ม

**ดาวน์โหลดเพลย์ลิสต์หรือทั้งช่องได้หรือไม่**
ได้ทั้งสองแบบ วาง URL เพลย์ลิสต์หรือช่อง (เช่น `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`) เลือกจำนวนรายการที่จะสแกน แล้วเพิ่มทั้งรายการเข้าคิวหรือเลือกเฉพาะวิดีโอ ตัวกรองช่วงวันที่กำลังจะมา

**macOS บอกว่า "แอปเสียหาย" ต้องทำอย่างไร**
นั่นคือ macOS Gatekeeper บล็อกแอปที่ไม่ได้ลงนาม ไม่ใช่ไฟล์เสียจริง ดูคำสั่ง Terminal สำหรับล้าง quarantine และเปิด Plinth ที่ [การเปิดครั้งแรกบน macOS](#macos-first-launch)

**การดาวน์โหลดวิดีโอ YouTube ถูกกฎหมายหรือไม่**
โดยทั่วไปการใช้ส่วนตัวแบบไม่เผยแพร่เป็นที่ยอมรับในเขตอำนาจส่วนใหญ่ คุณมีหน้าที่ปฏิบัติตาม [ข้อกำหนดในการให้บริการ](https://www.youtube.com/t/terms) ของ YouTube และกฎหมายลิขสิทธิ์ในพื้นที่

---

## <a id="roadmap"></a>แผนพัฒนา

สิ่งที่ยังวางแผนไว้ เรียงตามลำดับความสำคัญโดยประมาณ:

| ความสามารถ | รายละเอียด |
| --- | --- |
| **ตัวกรองเพลย์ลิสต์และช่อง** | กรองช่วงวันที่เมื่ออ่านรายการจากเพลย์ลิสต์หรือช่อง |
| **การตั้งค่าภาษาแทร็กเสียง YouTube** | ตั้งภาษาพูดที่ต้องการสำหรับทั้งแอป และกำหนดต่างกันในแต่ละโปรไฟล์เมื่อ YouTube มีหลายแทร็ก |
| **การกู้คืนด้วยการลองใหม่ที่แข็งแรงขึ้น** | เส้นทางลองใหม่สำหรับงานที่ถูกขัดจังหวะโดยการเชื่อมต่ออินเทอร์เน็ตไม่เสถียรหรือมีปัญหา |
| **แผงตัวจัดการดาวน์โหลดแบบเต็ม** | ขยายแผงคิวเป็นตัวจัดการเต็มรูปแบบ รวมถึงเปลี่ยนโฟลเดอร์ปลายทางของรายการในคิว |
| **ดาวน์โหลดตามกำหนดเวลา** | เริ่มคิวตามเวลาที่กำหนด เช่น ทำงานข้ามคืน |
| **ตัดช่วงคลิป** | ดาวน์โหลดเฉพาะช่วงโดยกำหนดเวลาเริ่มและสิ้นสุด |
| **แพ็กเกจ AUR** | ติดตั้งบน Arch Linux และ Omarchy ด้วย `yay -S plinth-bin` |

มีความสามารถที่อยากได้หรือไม่ [เปิดคำขอ](../../issues) — ความเห็นของชุมชนช่วยกำหนดลำดับความสำคัญ

---

## <a id="support"></a>สนับสนุน Plinth

Plinth ฟรีและใช้ MIT License — ไม่มีโฆษณาหรือระดับแบบชำระเงิน ถ้าช่วยประหยัดเวลา คุณสนับสนุนการพัฒนาด้วย Bitcoin หรือ Tron ได้ ที่อยู่ระบุไว้ใน [DONATE.md](../../docs/DONATE.md) ซึ่งเป็นแหล่งทางการเพียงแห่งเดียว Plinth จะไม่ส่งที่อยู่ให้ทางอีเมลหรือข้อความส่วนตัว การกดดาวให้ repository รายงานบั๊ก และปรับปรุงคำแปลก็ช่วยได้มากเช่นกัน

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>สร้างด้วย

<details>
<summary><strong>เทคโนโลยี</strong></summary>

- **Electron** — เชลล์เดสก์ท็อปข้ามแพลตฟอร์ม
- **React 19** + **TypeScript** — ส่วนติดต่อผู้ใช้
- **Tailwind CSS v4** — การจัดรูปแบบ
- **Zustand** — การจัดการสถานะ
- **yt-dlp** + **ffmpeg** — กลไกดาวน์โหลดและ mux (ดาวน์โหลด yt-dlp ขณะทำงาน; รวม ffmpeg/ffprobe ขณะบิลด์)
- **Vite** + **electron-vite** — เครื่องมือบิลด์
- **Vitest** + **Playwright** — การทดสอบหน่วยและแบบต้นทางถึงปลายทาง

</details>

<details>
<summary><strong>บิลด์จากซอร์ส</strong></summary>

### สิ่งที่ต้องมี — ทุกแพลตฟอร์ม

| เครื่องมือ | รุ่น | การติดตั้ง |
| ---------- | --- | ---------- |
| Git | ใดก็ได้ | [git-scm.com](https://git-scm.com) |
| Node.js | 24.21.0 | `mise install` หรือ `.node-version` |
| Bun | 1.4.2 | `mise install` หรือ `package.json` `packageManager` |

แนะนำให้ติดตั้ง `mise` แล้วเรียกใช้ `mise install` ใน checkout หากไม่ใช้ mise ให้เปิดใช้ Node.js ตาม `.node-version` และ Bun ตาม `package.json` ด้วยตนเองก่อน `bun run bootstrap`

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

อาจต้องใช้ Visual Studio Build Tools และ Python เพื่อบิลด์ส่วนที่เป็น native ใหม่

### macOS

```bash
brew install mise
xcode-select --install
```

หลัง clone ให้เรียกใช้ `mise trust && mise install` ใน checkout หาก shell ใช้ `fnm`, `nvm` หรือ Bun จาก Homebrew อยู่แล้ว ให้เปิดใช้ mise ใน `~/.zshrc` เพื่อให้ Plinth ใช้ Node.js 24.21.0 และ Bun 1.4.2:

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

# ส่วนที่ต้องใช้ในการบิลด์และ runtime ของ Electron
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# เฉพาะการทดสอบ E2E (Electron ต้องใช้จอแสดงผล)
sudo apt install -y xvfb
```

### Clone และเรียกใช้

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # แนะนำ; ข้ามได้หากเปิดใช้รุ่นที่กำหนดไว้ด้วยตนเองแล้ว
bun run bootstrap
bun run doctor
bun run dev            # แอป Electron กับ renderer ของ Vite
```

### สร้างแพ็กเกจสำหรับเผยแพร่

```bash
bun run build        # ตรวจ type + คอมไพล์
bun run dist         # แพ็กเกจสำหรับระบบปฏิบัติการปัจจุบัน
bun run dist:win     # เป้าหมาย Windows เมื่อทำงานบนโฮสต์ที่รองรับ
```

> `bun run bootstrap` ติดตั้ง dependency, บิลด์ dependency ของแอป Electron ใหม่, ตรวจสอบ Electron, เตรียม ffmpeg/ffprobe ที่ฝังไว้สำหรับการพัฒนา และติดตั้ง Playwright Chromium ส่วน yt-dlp จะจัดการขณะทำงานในโฟลเดอร์ข้อมูลแอป; ffmpeg และ ffprobe รวมอยู่ใน Plinth ทุกรุ่น

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

## ข้อกำหนดการใช้งาน

Plinth เป็นเครื่องมือสำหรับการใช้งานส่วนตัวแบบไม่เผยแพร่เท่านั้น คุณมีหน้าที่แต่เพียงผู้เดียวในการทำให้การดาวน์โหลดเป็นไปตาม [ข้อกำหนดในการให้บริการ](https://www.youtube.com/t/terms) ของ YouTube และกฎหมายลิขสิทธิ์ในเขตอำนาจของคุณ อย่าใช้ Plinth ดาวน์โหลด ทำซ้ำ หรือเผยแพร่เนื้อหาที่คุณไม่มีสิทธิ์ใช้ ผู้พัฒนาไม่รับผิดชอบต่อการใช้งานในทางที่ผิด

MIT License · สร้างด้วยความใส่ใจโดย <a href="https://github.com/fabwaseem">Waseem Anjum</a>

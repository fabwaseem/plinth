<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — Descargador gratuito de YouTube (+ 2000 sitios) de código abierto para Windows, macOS y Linux

Descarga videos, Shorts, música, canales, podcasts o pistas de audio de **YouTube y más de 2000 sitios compatibles** — hasta 4K HDR a 60 fps, o como MP3 / AAC / Opus. Se ejecuta localmente en Windows, macOS y Linux. **Sin anuncios, sin bloatware, sin ventas adicionales.**

Plinth is a fork of [Arroxy](https://github.com/antonio-orionus/Arroxy) by Antonio Orionus, MIT licensed.

### What Plinth changes

- Published as Plinth by Waseem Anjum, with its own site ([plinth.fabwaseem.com](https://plinth.fabwaseem.com)) and its own Scoop and Homebrew packages.

**Leer en:** [Afaan Oromoo](README.om.md) · [Bahasa Indonesia](README.id.md) · [Deutsch](README.de.md) · [English](../../README.md) · **Español** · [Français](README.fr.md) · [Italiano](README.it.md) · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Tiếng Việt](README.vi.md) · [Türkçe](README.tr.md) · [አማርኛ](README.am.md) · [العربية](README.ar.md) · [اردو](README.ur.md) · [پښتو](README.ps.md) · [فارسی](README.fa.md) · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · [ไทย](README.th.md) · [မြန်မာဘာသာ](README.my.md) · [Ελληνικά](README.el.md) · [Русский](README.ru.md) · [Српски](README.sr.md) · [Українська](README.uk.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ Descargar la última versión**](#install) · [**Sitio web**](https://plinth.fabwaseem.com) · [Primer arranque en Windows](#windows-first-launch) · [Primer arranque en macOS](#macos-first-launch) · [Primer arranque en Linux](#linux-first-launch)

Si Plinth te ahorra tiempo, una ⭐ ayuda a que otros lo encuentren.

_Last updated: 2026-10-18._

> 🌐 Esta es una traducción asistida por IA. El [README en inglés](README.md) es la fuente de verdad. ¿Encontraste un error? [Las PRs son bienvenidas](../../pulls).

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download. `winget install WaseemAnjum.Plinth` is coming soon.

---

## Contenido

- [Características](#features)
- [Instalar y primer inicio](#install)
- [¿Por qué Plinth?](#why)
- [Privacidad](#privacy)
- [Preguntas frecuentes](#faq)
- [Hoja de ruta](#roadmap)
- [Apoyar a Plinth](#support)
- [Construido con](#tech)

---

## <a id="features"></a>Características

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>Inicio de Descarga rápida</b><br/>Pega una URL y descárgala al instante con tu perfil activo

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>Navega por YouTube dentro de Plinth y descarga la página en la que estás con tu perfil activo

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>Modo de URLs en lote</b><br/>Pega una lista, elimina duplicados y encólalas todas a la vez

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>Cola de descargas en paralelo</b><br/>Varias descargas a la vez con progreso en vivo

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>Perfiles de descarga reutilizables</b><br/>Guarda formato, calidad y salida como preajustes — reutiliza en cada descarga

### Explore: navega por YouTube dentro de Plinth

- **Pestaña Explore** — navega por YouTube dentro de Plinth y descarga lo que encuentres sin copiar enlaces. **Descargar · *tu perfil*** pone en cola el vídeo, la playlist o el canal que estás viendo; la flecha de al lado cambia de perfil, y la varita abre la descarga paso a paso para elegir formatos, subtítulos y más
- **Barra de direcciones** — escribe para buscar en YouTube o pega un enlace de YouTube. Explore solo navega por YouTube, así que un enlace de otro sitio no se abre ahí, pero puedes descargarlo con un clic
- **Descargas que necesitan una cuenta** — inicia sesión una vez en Explore y Plinth podrá descargar vídeos privados y solo para miembros que tu cuenta pueda ver, vídeos con restricción de edad si la cuenta tiene la edad verificada, y tus listas Ver más tarde y Me gusta. Plinth sigue descargando sin sesión y solo usa tu inicio de sesión de Explore cuando una descarga falla de una forma que una cuenta puede arreglar. Cuando YouTube te pide confirmar que no eres un bot, Plinth también prueba tu inicio de sesión de Explore
- **Usa una cuenta secundaria** — la primera pantalla de Explore explica por qué: descargar con una cuenta conlleva cierto riesgo de que esa cuenta sea restringida. Cierra sesión en Explore desde Configuración cuando quieras olvidar el inicio de sesión
- **Bloqueador de anuncios** — Explore bloquea anuncios y rastreadores en sus propias páginas; las descargas no se ven afectadas. Activado por defecto, un clic en el escudo de la barra de herramientas de Explore lo desactiva, y nunca actúa en las páginas de inicio de sesión de Google. YouTube puede oponerse a los bloqueadores de anuncios en cuentas con sesión iniciada

### Calidad y formatos

- Hasta **4K UHD (2160p)**, 1440p, 1080p, 720p, 480p, 360p
- **Alta frecuencia de fotogramas** conservada tal cual — 60 fps, 120 fps, HDR
- **Audio** — exporta solo audio como MP3, M4A/AAC, Opus o WAV. En las descargas interactivas, elige las pistas nativas surround/Dolby de la fuente (AC-3, E-AC-3, 5.1, DRC) cuando estén disponibles, o configura un valor global **Preferir surround / Dolby**
- Presets rápidos: *Mejor calidad* · *Equilibrado* · *Archivo pequeño*

### Flujo de trabajo

- **Atajo de descarga global** — copia un enlace en cualquier app y pulsa `Ctrl+Shift+D` (`Cmd+Shift+D` en macOS); Plinth lo pone en cola con tu perfil activo sin abrir la ventana, y una notificación lo confirma. Activo por defecto y reasignable
- **Modos de inicio flexibles** — elige una descarga individual guiada, selector de playlist/canal, pegado masivo de URLs, Quick Download con tus valores guardados, o navega y descarga desde Explore
- **Cola central de descargas** — cada trabajo individual, de playlist, masivo o rápido llega a un solo lugar para ver progreso, pausar, reanudar, cancelar, reintentar y controlar prioridad
- **Monitoreo del portapapeles** — copia un enlace de YouTube y Plinth rellena automáticamente la URL al volver a enfocar la app (actívalo en la Configuración avanzada)
- **Limpieza automática de URLs** — elimina parámetros de seguimiento (`si`, `pp`, `utm_*`, `fbclid`, `gclid`) y desempaqueta los enlaces `youtube.com/redirect`
- **Modo bandeja** — cerrar la ventana mantiene las descargas en segundo plano
- **30 idiomas**: detecta automáticamente la configuración regional del sistema y se puede cambiar en cualquier momento
- **Sincronización de playlists** — vuelve a escanear una playlist contra una carpeta local para omitir vídeos ya descargados; genera un archivo de playlist `.m3u` que se actualiza con cada vídeo descargado
- **Controles de velocidad y ritmo** — limita el ancho de banda de descarga, define cuántas partes de un vídeo se descargan a la vez y añade pausas entre solicitudes con ajustes (*Desactivado · Equilibrado · Cuidadoso · Personalizado*)
- **Plantillas de nombre de archivo** — nombra las descargas a tu manera con `{title}`, `{uploader}`, `{id}`, `{date}`, `{resolution}` y `{playlist_index}`, de forma global o por perfil de descarga
- **Descargas a la vez y reintento automático** — elige cuántas descargas de la cola se ejecutan al mismo tiempo y deja que Plinth reintente una descarga que sufrió un problema de red o del servidor, esperando más antes de cada intento
- **Perfiles por elemento de playlist** — asigna a cada vídeo de una playlist su propio perfil de descarga en lugar de un único ajuste para toda la lista, para archivar algunos en calidad máxima y sacar el resto como MP3 en una sola pasada
- **Quick Download funciona en segundo plano** — el enlace aparece enseguida en Descargas y se prepara allí, una nota con **Ver** lo confirma, y el campo de URL se vacía para el siguiente enlace. Lanza tantos como quieras mientras los anteriores se preparan
- **Descargas te avisa de lo que necesita tu atención** — si Plinth no puede leer un enlace, su fila explica por qué y ofrece la solución: Reintentar, activar las cookies o iniciar sesión en Explore. Con las cookies desactivadas, **Iniciar sesión con Explore** lo reintenta por ti en cuanto hayas iniciado sesión. Una playlist más larga que tu límite de carga espera en su fila a que elijas toda, los primeros vídeos o una revisión. La pestaña Descargas cuenta las filas que esperan por ti

### Subtítulos y posprocesamiento

- **Subtítulos** en SRT, VTT o ASS — manuales o generados automáticamente, en cualquier idioma disponible
- Guárdalos junto al video, incrústalos en `.mkv` u organízalos en una subcarpeta `Subtitles/`
- **SponsorBlock** — omite o marca como capítulos patrocinadores, intros, outros y autopromociones
- **Metadatos incrustados** — título, fecha de subida, canal, descripción, miniatura y marcadores de capítulo escritos en el archivo
- **Lotes solo de subtítulos** — pega una lista de URLs o abre una lista de reproducción, elige Subtítulos y obtén solo los archivos de subtítulos de cada vídeo

### YouTube + 2000 sitios

- **YouTube, al completo** — Videos, Shorts, Canales, Playlists, YouTube Music y Podcasts tratados como fuentes de primera clase
- **Más de 2000 sitios adicionales** via yt-dlp — Vimeo, Twitch, Twitter/X, TikTok, SoundCloud, Bandcamp, Bilibili, BBC iPlayer, archive.org y muchos más
- **Solo audio y subtítulos** funcionan en todos los sitios compatibles, no solo en YouTube
- Si un sitio cambia, yt-dlp publica correcciones semanalmente y Plinth actualiza el binario automáticamente al iniciar

### Privacidad y control

- Procesamiento 100% local — las descargas van directamente de YouTube a tu disco
- Sin inicio de sesión, sin cookies, sin cuenta de Google vinculada
- Archivos guardados directamente en la carpeta que elijas

---

## <a id="install"></a>Instalar y primer inicio

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

Solo hay versiones x86_64. ¿Sin `curl`? Cambia `curl -fsSL` por `wget -qO-`.

| Plataforma | Formato |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**Obtén la última versión →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>Primer arranque en Windows

En el primer arranque puede aparecer **"Windows protected your PC"** o **"Unknown publisher."** Esto aplica tanto a `Plinth-win-x64-Setup.exe` como a `Plinth-win-x64-Portable.exe`. Plinth es gratuito y de código abierto, y las compilaciones de Windows no están firmadas con un certificado de pago, por lo que SmartScreen las marca. Eso **no** significa automáticamente que Plinth sea inseguro. Para continuar:

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="SmartScreen "Windows protected your PC" dialog with the "More info" link highlighted" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="SmartScreen dialog after expanding More info, showing the "Run anyway" button" />

1. Haz clic en **More info**.
2. Haz clic en **Run anyway**.

#### Si Windows Defender marca o elimina el archivo

La heurística de Defender a veces marca los instaladores NSIS sin firmar y los portables de Electron como sospechosos. Si Defender pone en cuarentena `Plinth-win-x64-Setup.exe` o `Plinth-win-x64-Portable.exe`, recupéralo desde **Windows Security → Virus & threat protection → Protection history**, y añade el ejecutable de Plinth como elemento permitido en **Manage settings → Add or remove exclusions**. Al igual que con SmartScreen, el motivo es la firma del editor ausente, no malware detectado.

> Descarga Plinth solo desde la página oficial de GitHub Releases. Si obtuviste el archivo de otro sitio web o alguien te lo envió, bórralo y descarga una copia nueva desde la fuente oficial. El código fuente es público, así que puedes inspeccionarlo o compilar Plinth tú mismo si lo prefieres.

¿Prefieres Scoop? `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>Primer arranque en macOS

Plinth aún no está firmado digitalmente para macOS, así que Gatekeeper puede mostrar el aviso alarmante *"Plinth.app is damaged and can't be opened"* después de instalarlo desde el DMG. Ese mensaje significa que macOS puso en cuarentena una app sin firmar; no significa que los archivos estén dañados. En macOS actual, la solución fiable es Terminal:

1. Arrastra `Plinth.app` desde el DMG montado a `/Applications`.
2. Abre Terminal y ejecuta estos dos comandos:

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
open /Applications/Plinth.app
```

El primer comando elimina el atributo de cuarentena de tu copia instalada de Plinth. El segundo inicia la app. `sudo` puede pedir la contraseña de tu Mac; Terminal no mostrará caracteres mientras la escribes.

**Apple Silicon vs Intel:** en un Mac de la serie M (M1 / M2 / M3 / M4), descarga el DMG `arm64`. En Macs Intel, descarga el DMG `x64`. El build incorrecto funciona igualmente mediante Rosetta, pero es notablemente más lento.

> Las compilaciones de macOS se producen mediante CI en runners de Apple Silicon e Intel. Si encuentras algún problema, por favor [abre un issue](../../issues) — los comentarios de usuarios de macOS influyen activamente en el ciclo de pruebas de macOS.

### <a id="why-warning"></a>Por qué puedes ver una advertencia

Plinth es de código abierto y con licencia MIT. Las compilaciones de Windows y macOS **no están firmadas digitalmente** — los certificados Apple Developer ID y Windows EV de firma de código cuestan cada uno cientos de dólares al año, que un proyecto independiente paga de su bolsillo. Sin esas firmas, Windows SmartScreen y macOS Gatekeeper te advertirán en el primer arranque. Las advertencias significan *tu sistema operativo no reconoce al editor* — no significan que Plinth sea malware.

Tres formas de verificar Plinth tú mismo, en orden creciente de rigor:

- **Lee el código fuente.** Cada línea está en [GitHub](https://github.com/fabwaseem/plinth) y puedes [compilarlo desde el código fuente](#tech).
- **Comprueba el SHA256.** Compara tu archivo con el [`SHA256SUMS`](../../releases/latest) publicado — consulta [Verifica tu descarga](#verify) a continuación.
- **Realiza un análisis de terceros.** Sube el archivo a [VirusTotal](https://www.virustotal.com).

### <a id="linux-first-launch"></a>Primer arranque en Linux

Los AppImages se ejecutan directamente — sin instalación. Solo necesitas marcar el archivo como ejecutable.

**Gestor de archivos:** haz clic derecho en el `.AppImage` → **Propiedades** → **Permisos** → activa **Permitir ejecutar el archivo como programa**, luego doble clic.

**Terminal:**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

Si el arranque sigue fallando, ejecútalo sin montar — no hace falta el paquete FUSE:

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**Integración de escritorio opcional:** instala [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) una sola vez, y cualquier AppImage en la que hagas doble clic quedará registrada automáticamente en tu menú de aplicaciones — sin necesidad de crear manualmente un archivo `.desktop`.

**Tarball simple (sin FUSE, sin instalación):**

La versión `.tar.gz` es la misma app sin el envoltorio AppImage: descomprímela donde quieras y ejecútala. Sin instalador y sin paquete FUSE.

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**Las descargas de Linux en la página de versiones son solo x86_64.** En equipos ARM64 (Raspberry Pi, Asahi Linux) el Flatpak se instala pero falla al arrancar con `bwrap: execvp ldconfig: Exec format error`.

<details>
<summary><strong><a id="verify"></a>Verifica tu descarga (SHA256)</strong></summary>

Cada versión publica un archivo `SHA256SUMS` junto a los binarios. Para comprobar que tu descarga no está corrompida ni fue manipulada en tránsito, calcula el hash de tu archivo localmente y compáralo con la línea en `SHA256SUMS`. Abre la página de la última versión → **Assets** → descarga `SHA256SUMS`.

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

¿Quieres un análisis de malware de terceros? Sube el archivo en [VirusTotal](https://www.virustotal.com). Un puñado de alertas heurísticas genéricas de motores menores es normal en apps Electron sin firmar; detecciones generalizadas por motores principales serían una preocupación real.

</details>

<details>
<summary><strong>Windows: Instalador vs Portátil</strong></summary>

| | Instalador NSIS | `.exe` portátil |
| --- | --- | --- |
| Requiere instalación | Sí | No — ejecútalo desde donde quieras |
| Auto-actualizaciones | ✅ en la app | ❌ descarga manual |
| Velocidad de inicio | ✅ más rápido | ⚠️ inicio en frío más lento |
| Aparece en el menú Inicio | Yes | No |
| Desinstalación fácil | Yes | ❌ solo borra el archivo |

**Recomendación:** usa el instalador NSIS para obtener auto-actualizaciones y un arranque más rápido. Usa el `.exe` portátil si prefieres no instalar ni tocar el registro.

</details>

---

## <a id="why"></a>¿Por qué Plinth?

Plinth está diseñado para una sola cosa: pega una URL y obtén un archivo local limpio. Sin ventas adicionales, sin recolección de datos.

| | Plinth |
| --- | --- |
| Gratis, sin nivel premium | Yes |
| Código abierto | Yes |
| Procesamiento 100% local | Yes |
| Sin límites de uso | Yes |
| Aplicación de escritorio multiplataforma | Yes |
| Subtítulos + SponsorBlock | Yes |

---

## <a id="privacy"></a>Privacidad

Las descargas se obtienen directamente a través de [yt-dlp](https://github.com/yt-dlp/yt-dlp) desde YouTube hacia la carpeta que elijas — nada pasa por un servidor de terceros. El historial de visualización, el historial de descargas, las URLs y el contenido de los archivos permanecen en tu dispositivo.

Plinth envía telemetría anónima y agregada a través de [OpenPanel](https://openpanel.dev) — lo justo para entender fallos, errores, comentarios, OS y versiones de la app. Sin URLs, títulos de video, rutas de archivo, datos de cuenta, fingerprinting ni datos personales. El ID por instalación es aleatorio y no está ligado a tu identidad. Puedes desactivarlo en Configuración.

Explore mantiene su propio inicio de sesión, separado de tu navegador, y Plinth nunca lee ni rellena el formulario de acceso: escribes en la propia página de Google. Las descargas se hacen sin sesión; solo cuando una falla de una forma que una cuenta puede arreglar, Plinth lee el inicio de sesión en ese momento, lo guarda en un archivo temporal para esa descarga y borra el archivo después. Cerrar sesión en Explore desde Configuración lo olvida.

---

## <a id="faq"></a>Preguntas frecuentes

**¿Es realmente gratis?**
Sí — licencia MIT, sin nivel premium, sin funciones bloqueadas.

**¿Qué calidades de video puedo descargar?**
Cualquiera que sirva YouTube: 4K UHD (2160p), 1440p, 1080p, 720p, 480p, 360p, más solo audio. Los streams de 60 fps, 120 fps y HDR se conservan tal cual.

**¿Puedo extraer solo el audio como MP3?**
Sí. Elige *solo audio* en el menú de formatos y luego MP3, M4A/AAC, Opus o WAV.

**¿Cómo descargo vídeos que necesitan una cuenta de YouTube?**
Inicia sesión una vez en la pestaña Explore. Plinth podrá entonces descargar vídeos privados y solo para miembros que tu cuenta pueda ver, vídeos con restricción de edad si la cuenta tiene la edad verificada, y tus listas Ver más tarde y Me gusta. Solo usa el inicio de sesión cuando una descarga falla de una forma que una cuenta puede arreglar; todo lo demás se descarga como antes. Es la opción **Inicio de sesión de Explore**, la primera de la lista y marcada como Recomendada en la configuración de cookies, y Plinth la elige por ti la primera vez que abres Explore. La wiki de yt-dlp señala que [la automatización con sesión iniciada puede marcar una cuenta de Google](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies), así que una cuenta secundaria es la opción más segura.

**¿Seguirá funcionando cuando YouTube cambie algo?**
yt-dlp se actualiza automáticamente al iniciar, y Plinth publica correcciones rápidamente cuando YouTube cambia algo. Cuando YouTube te pide confirmar que no eres un bot, Plinth también prueba tu inicio de sesión de Explore si lo has iniciado ahí, y las cookies de un archivo o de tu navegador están disponibles en la configuración de cookies.

**¿En qué idiomas está disponible Plinth?**
30 idiomas, listos para usar: Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文. Plinth detecta automáticamente el idioma de tu sistema operativo en el primer inicio y puedes cambiarlo en cualquier momento desde el selector de idioma de la barra de herramientas. Los JSON de locale en runtime viven en src/shared/i18n/locales/, y los catálogos PO para traductores viven en i18n/locales/ — abre un PR en GitHub para contribuir.

**¿Necesito instalar algo más?**
No. yt-dlp se descarga automáticamente en el primer arranque y se guarda en caché en tu máquina; ffmpeg y ffprobe vienen incluidos con la app. Después de eso, no se necesita configuración adicional.

**¿Puedo descargar listas de reproducción o canales completos?**
Sí — ambas cosas. Pega una URL de playlist o canal (p. ej. `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`); elige cuántas entradas escanear y luego pon toda la lista en cola o selecciona videos concretos. Los filtros por fecha llegarán pronto.

**macOS dice "la aplicación está dañada" — ¿qué hago?**
Es Gatekeeper de macOS bloqueando una app sin firmar, no un daño real. Consulta [macOS first launch](#macos-first-launch) para ver los comandos de Terminal que eliminan la cuarentena e inician Plinth.

**¿Es legal descargar videos de YouTube?**
Para uso personal y privado, generalmente se acepta en la mayoría de jurisdicciones. Eres responsable de cumplir con los [Términos de Servicio](https://www.youtube.com/t/terms) de YouTube y las leyes de propiedad intelectual de tu jurisdicción.

---

## <a id="roadmap"></a>Hoja de ruta

Todavía planeado — aproximadamente por orden de prioridad:

| Función | Descripción |
| --- | --- |
| **Filtros de listas y canales** | Filtros por rango de fechas al enumerar una playlist o un canal |
| **Preferencias de pistas de audio de YouTube** | Define una pista de idioma hablado predeterminada para toda la app, con sobrescrituras por perfil cuando YouTube ofrece varias pistas de audio |
| **Recuperación de reintentos más fuerte** | Una nueva ruta de reintento para descargas interrumpidas por conexiones de internet inestables o problemáticas |
| **Cajón de gestor de descargas completo** | Convertir el cajón de cola en un gestor más completo, incluido cambiar carpetas de destino para elementos en cola |
| **Descargas programadas** | Inicia una cola a una hora fijada (ejecuciones nocturnas) |
| **Recorte de clips** | Descarga solo un segmento especificando tiempo de inicio y fin |
| **Paquete AUR** | Instalación en Arch Linux y Omarchy con `yay -S plinth-bin` |

¿Tienes alguna función en mente? [Abre una solicitud](../../issues) — la opinión de la comunidad guía la prioridad.

---

## <a id="support"></a>Apoyar a Plinth

Plinth es gratuito y con licencia MIT: sin anuncios, sin versión de pago. Si te ahorra tiempo, puedes apoyar el desarrollo con Bitcoin o Tron: las direcciones están en [DONATE.md](../../docs/DONATE.md), la única fuente oficial para ellas. Plinth nunca te enviará una dirección por correo electrónico ni por mensaje directo. Dar una estrella al repositorio, informar de errores y mejorar las traducciones ayudan igual de mucho.

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>Construido con

<details>
<summary><strong>Stack</strong></summary>

- **Electron** — shell de escritorio multiplataforma
- **React 19** + **TypeScript** — interfaz de usuario
- **Tailwind CSS v4** — estilos
- **Zustand** — gestión de estado
- **yt-dlp** + **ffmpeg** — motor de descarga y muxing (yt-dlp se obtiene en runtime; ffmpeg/ffprobe se incluyen al compilar)
- **Vite** + **electron-vite** — herramientas de compilación
- **Vitest** + **Playwright** — pruebas unitarias y de extremo a extremo

</details>

<details>
<summary><strong>Compilar desde el código fuente</strong></summary>

### Requisitos previos — todas las plataformas

| Herramienta | Versión  | Instalación |
| ----------- | -------- | ----------- |
| Git         | cualquiera | [git-scm.com](https://git-scm.com) |
| Node.js     | 24.21.0  | `mise install` o `.node-version` |
| Bun         | 1.4.2   | `mise install` o `package.json` `packageManager` |

Recomendado: instala `mise` y luego ejecuta `mise install` en el checkout. Sin mise, activa manualmente Node.js desde `.node-version` y Bun desde `package.json` antes de `bun run bootstrap`.

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Visual Studio Build Tools y Python pueden ser necesarios para recompilaciones nativas.

### macOS

```bash
brew install mise
xcode-select --install
```

Después de clonar, ejecuta `mise trust && mise install` desde el checkout. Si tu shell ya usa `fnm`, `nvm` o Bun instalado con Homebrew, activa mise en `~/.zshrc` para que Plinth use Node.js 24.21.0 y Bun 1.4.2:

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

# Dependencias de build y runtime de Electron
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# E2E tests only (Electron needs a display)
sudo apt install -y xvfb
```

### Clonar y ejecutar

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # recomendado; omite si activaste manualmente las herramientas fijadas
bun run bootstrap
bun run doctor
bun run dev            # app Electron contra el renderer de Vite
```

### Crear un distribuible

```bash
bun run build        # typecheck + compile
bun run dist         # package for current OS
bun run dist:win     # empaqueta objetivos Windows en un host compatible
```

> `bun run bootstrap` instala dependencias, recompila dependencias de la app Electron, verifica Electron, prepara ffmpeg/ffprobe embebidos para desarrollo e instala Playwright Chromium. yt-dlp se gestiona en runtime dentro de la carpeta de datos de la app; ffmpeg y ffprobe vienen incluidos en cada release de Plinth.

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

## Términos de uso

Plinth es una herramienta para uso personal y privado únicamente. Eres el único responsable de garantizar que tus descargas cumplan con los [Términos de Servicio](https://www.youtube.com/t/terms) de YouTube y las leyes de propiedad intelectual de tu jurisdicción. No uses Plinth para descargar, reproducir o distribuir contenido sobre el que no tengas derechos. Los desarrolladores no se hacen responsables del mal uso.

Licencia MIT · Hecho con cariño por <a href="https://github.com/fabwaseem">Waseem Anjum</a>

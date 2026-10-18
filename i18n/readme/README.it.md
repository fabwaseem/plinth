<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — downloader gratuito e open source per YouTube (+ 2000 siti) su Windows, macOS e Linux

Scarica video, Shorts, musica, canali, podcast o tracce audio da **YouTube e oltre 2000 siti supportati** — fino a 4K HDR a 60 fps oppure in MP3 / AAC / Opus. Funziona localmente su Windows, macOS e Linux. **Niente pubblicità, niente software superfluo, niente upselling.**

Plinth is a fork of [Arroxy](https://github.com/antonio-orionus/Arroxy) by Antonio Orionus, MIT licensed.

### What Plinth changes

- Published as Plinth by Waseem Anjum, with its own site ([plinth.fabwaseem.com](https://plinth.fabwaseem.com)) and its own Scoop and Homebrew packages.

**Leggi in:** [Afaan Oromoo](README.om.md) · [Bahasa Indonesia](README.id.md) · [Deutsch](README.de.md) · [English](../../README.md) · [Español](README.es.md) · [Français](README.fr.md) · **Italiano** · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Tiếng Việt](README.vi.md) · [Türkçe](README.tr.md) · [አማርኛ](README.am.md) · [العربية](README.ar.md) · [اردو](README.ur.md) · [پښتو](README.ps.md) · [فارسی](README.fa.md) · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · [ไทย](README.th.md) · [မြန်မာဘာသာ](README.my.md) · [Ελληνικά](README.el.md) · [Русский](README.ru.md) · [Српски](README.sr.md) · [Українська](README.uk.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ Installa l'ultima versione**](#install) · [**Sito web**](https://plinth.fabwaseem.com) · [Primo avvio su Windows](#windows-first-launch) · [Primo avvio su macOS](#macos-first-launch) · [Primo avvio su Linux](#linux-first-launch)

Se Plinth ti fa risparmiare tempo, una ⭐ aiuta altre persone a scoprirlo.

_Last updated: 2026-10-18._

> 🌐 Questa traduzione è stata realizzata con assistenza IA. Il [README in inglese](README.md) è la fonte autorevole. Hai trovato un errore? [Apri una PR](../../pulls).

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download. `winget install WaseemAnjum.Plinth` is coming soon.

---

## Indice

- [Funzionalità](#features)
- [Installazione e primo avvio](#install)
- [Perché Plinth](#why)
- [Privacy](#privacy)
- [Domande frequenti](#faq)
- [Roadmap](#roadmap)
- [Sostieni Plinth](#support)
- [Tecnologie](#tech)

---

## <a id="features"></a>Funzionalità

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>Home di Download rapido</b><br/>Incolla un URL e scaricalo subito con il profilo attivo

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>Naviga su YouTube dentro Plinth e scarica la pagina in cui ti trovi con il profilo attivo

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>Modalità URL massivi</b><br/>Incolla un elenco, rimuovi automaticamente i duplicati e metti tutto in coda

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>Coda di download paralleli</b><br/>Più download contemporanei con avanzamento in tempo reale

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>Profili di download riutilizzabili</b><br/>Salva preset di formato, qualità e destinazione e riutilizzali per ogni download

### Explore: naviga su YouTube dentro Plinth

- **Scheda Explore** — naviga su YouTube dentro Plinth e scarica ciò che trovi senza copiare i link. **Scarica · *il tuo profilo*** mette in coda il video, la playlist o il canale che stai guardando; la freccia accanto cambia profilo e la bacchetta apre il download passo passo per scegliere formati, sottotitoli e altro
- **Barra degli indirizzi** — scrivi per cercare su YouTube o incolla un link di YouTube. Explore naviga solo su YouTube, quindi un link di un altro sito non viene aperto lì, ma puoi scaricarlo con un clic
- **Download che richiedono un account** — accedi una volta in Explore e Plinth potrà scaricare i video privati e riservati ai membri che il tuo account può vedere, i video con limiti di età se l'età dell'account è verificata, e le tue liste Guarda più tardi e Piaciuti. Plinth continua a scaricare senza accesso e usa il tuo accesso a Explore solo quando un download fallisce in un modo che un account può risolvere. Quando YouTube chiede di confermare che non sei un bot, Plinth prova anche il tuo accesso a Explore
- **Usa un account secondario** — la prima schermata di Explore ne spiega il motivo: scaricare con un account comporta un certo rischio che quell'account venga limitato. Esci da Explore dalle Impostazioni quando vuoi cancellare l'accesso
- **Blocco annunci** — Explore blocca annunci e tracker nelle proprie pagine; i download non sono interessati. Attivo per impostazione predefinita, un clic sullo scudo nella barra degli strumenti di Explore lo disattiva e non agisce mai sulle pagine di accesso di Google. YouTube può ostacolare i blocchi annunci per gli account con accesso effettuato

### Qualità e formati

- Fino a **4K UHD (2160p)**, 1440p, 1080p, 720p, 480p e 360p
- **Frame rate elevato** mantenuto invariato — 60 fps, 120 fps, HDR
- **Audio** — esporta solo l'audio in MP3, M4A/AAC, Opus o WAV. Nei download interattivi puoi scegliere, se disponibili, le tracce surround/Dolby native della sorgente (AC-3, E-AC-3, 5.1, DRC), oppure impostare **Preferisci surround / Dolby** come predefinito globale
- Preset rapidi: *Qualità migliore* · *Bilanciato* · *File piccolo*

### Flusso di lavoro

- **Scorciatoia globale per i download** — copia un link in qualsiasi app e premi `Ctrl+Shift+D` (`Cmd+Shift+D` su macOS); Plinth lo mette in coda con il profilo attivo senza aprire la finestra e una notifica lo conferma. Attiva per impostazione predefinita e riconfigurabile
- **Modalità di avvio flessibili** — scegli un download singolo guidato, il selettore di playlist/canali, l'incolla massivo di URL, Download rapido con i valori predefiniti salvati oppure sfoglia e scarica da Explore
- **Coda di download centrale** — ogni attività singola, playlist, massiva o rapida confluisce nello stesso punto per controllare avanzamento, pausa, ripresa, annullamento, nuovo tentativo e priorità
- **Monitoraggio degli appunti** — copia un link YouTube e Plinth compila automaticamente l'URL quando torni nell'app (opzione nelle impostazioni avanzate)
- **Pulizia automatica degli URL** — rimuove i parametri di tracciamento (`si`, `pp`, `utm_*`, `fbclid`, `gclid`) ed estrae i link da `youtube.com/redirect`
- **Modalità area di notifica** — chiudendo la finestra i download continuano in background
- **30 lingue** — rileva automaticamente la lingua di sistema, modificabile in qualsiasi momento
- **Sincronizzazione playlist** — confronta di nuovo una playlist con una cartella locale per saltare i video già scaricati; genera un file playlist `.m3u` aggiornato dopo ogni download
- **Controlli di velocità e ritmo** — limita la banda, stabilisci quante parti di un video scaricare contemporaneamente e aggiungi ritardi alle richieste con i preset (*Disattivato · Bilanciato · Prudente · Personalizzato*)
- **Modelli per i nomi file** — assegna i nomi con `{title}`, `{uploader}`, `{id}`, `{date}`, `{resolution}` e `{playlist_index}`, globalmente o per profilo di download
- **Download simultanei e nuovi tentativi automatici** — scegli quanti download in coda eseguire insieme e lascia che Plinth ritenti quelli interrotti da problemi di rete o del server, aumentando l'attesa a ogni tentativo
- **Profili per singolo elemento della playlist** — assegna a ogni video un profilo diverso invece di un'unica impostazione per l'intero elenco, così puoi archiviare alcuni video alla massima qualità e scaricare gli altri in MP3 in un solo passaggio
- **Il Download rapido funziona in background** — il link compare subito in Download e viene preparato lì, una nota con **Visualizza** lo conferma e il campo URL si svuota per il link successivo. Avviane quanti vuoi mentre i precedenti si preparano
- **Download ti mostra cosa richiede il tuo intervento** — se Plinth non riesce a leggere un link, la sua riga ne spiega il motivo e propone la soluzione: Riprova, attivare i cookie o accedere in Explore. Con i cookie disattivati, **Accedi con Explore** riprova per te una volta effettuato l'accesso. Una playlist più lunga del tuo limite di caricamento attende sulla sua riga che tu scelga tutta, i primi video o una revisione. La scheda Download conta le righe che aspettano te

### Sottotitoli e post-elaborazione

- **Sottotitoli** in SRT, VTT o ASS — manuali o generati automaticamente, in qualsiasi lingua disponibile
- Salvali accanto al video, incorporali in `.mkv` oppure organizzali nella sottocartella `Subtitles/`
- **SponsorBlock** — salta sponsor, introduzioni, finali e autopromozioni oppure contrassegnali come capitoli
- **Metadati incorporati** — titolo, data di caricamento, canale, descrizione, miniatura e indicatori dei capitoli scritti nel file
- **Batch solo sottotitoli** — incolla un elenco di URL o apri una playlist, scegli Sottotitoli e ottieni solo i file dei sottotitoli di ogni video

### YouTube + 2000 siti

- **YouTube completo** — video, Shorts, canali, playlist, YouTube Music e podcast sono gestiti come sorgenti di prima classe
- **Oltre 2000 altri siti** tramite yt-dlp — Vimeo, Twitch, Twitter/X, TikTok, SoundCloud, Bandcamp, Bilibili, BBC iPlayer, archive.org e molti altri
- **Solo audio e sottotitoli** funzionano su ogni sito supportato, non soltanto su YouTube
- Se un sito cambia, yt-dlp distribuisce correzioni ogni settimana e Plinth aggiorna automaticamente il binario all'avvio

### Privacy e controllo

- Elaborazione locale al 100% — i download passano direttamente da YouTube al tuo disco
- **Open source** — ogni riga è verificabile, licenza MIT
- I file vengono salvati direttamente nella cartella scelta

---

## <a id="install"></a>Installazione e primo avvio

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

Le build sono disponibili solo per x86_64. Non hai `curl`? Sostituisci `curl -fsSL` con `wget -qO-`.

| Piattaforma | Download diretto |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**Tutti i file della versione →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>Primo avvio su Windows

Al primo avvio potresti vedere **"Windows ha protetto il PC"** o **"Autore sconosciuto"**. Vale sia per `Plinth-win-x64-Setup.exe` sia per `Plinth-win-x64-Portable.exe`. Plinth è gratuito e open source, ma le build Windows non sono firmate con un certificato a pagamento: per questo SmartScreen le segnala. Ciò **non** significa automaticamente che Plinth non sia sicuro. Per continuare:

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="Finestra di SmartScreen "Windows ha protetto il PC" con il collegamento "Ulteriori informazioni" evidenziato" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="Finestra di SmartScreen dopo l'espansione delle informazioni, con il pulsante "Esegui comunque"" />

1. Fai clic su **Ulteriori informazioni**.
2. Fai clic su **Esegui comunque**.

#### Se Windows Defender segnala o rimuove il file

Le euristiche di Defender talvolta considerano sospetti i programmi di installazione NSIS e i pacchetti portatili Electron non firmati. Se Defender mette in quarantena `Plinth-win-x64-Setup.exe` o `Plinth-win-x64-Portable.exe`, ripristinalo da **Sicurezza di Windows → Protezione da virus e minacce → Cronologia della protezione**, quindi aggiungi l'eseguibile Plinth agli elementi consentiti in **Gestisci impostazioni → Aggiungi o rimuovi esclusioni**. Come per SmartScreen, la causa è la firma dell'autore mancante, non il rilevamento di malware.

> Scarica Plinth soltanto dalla pagina ufficiale delle versioni GitHub. Se il file proviene da un altro sito o ti è stato inviato da qualcuno, eliminalo e scaricane una copia nuova dalla fonte ufficiale. Il codice sorgente è pubblico: puoi esaminarlo o compilare Plinth autonomamente.

Preferisci Scoop? `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>Primo avvio su macOS

Le build macOS di Plinth hanno una firma ad hoc ma non sono autenticate da Apple, quindi Gatekeeper blocca il primo avvio con *"Plinth.app" non è stata aperta — Apple non può verificare che "Plinth.app" sia priva di malware*. Significa che macOS non può verificare l'app con Apple, non che i file abbiano un problema. L'installazione con Homebrew evita completamente questa finestra. Se hai usato il DMG, basta un comando nel Terminale:

1. Trascina `Plinth.app` dal DMG montato in `/Applications`.
2. Apri il Terminale ed esegui questi due comandi:

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
open /Applications/Plinth.app
```

Il primo comando rimuove l'attributo di quarantena applicato da macOS al file scaricato; il secondo avvia l'app. Normalmente `sudo` non serve perché la copia in `/Applications` appartiene al tuo utente; aggiungilo solo in caso di errore di autorizzazione.

**Apple Silicon o Intel:** su un Mac serie M (M1 / M2 / M3 / M4), scarica il DMG `arm64`. Su un Mac Intel, scarica il DMG `x64`. La build errata funziona comunque tramite Rosetta, ma è sensibilmente più lenta.

> Le build macOS vengono prodotte in CI su runner Apple Silicon e Intel. In caso di problemi, [apri una segnalazione](../../issues): il riscontro degli utenti macOS orienta attivamente il ciclo di test.

### <a id="why-warning"></a>Perché potresti vedere un avviso

Plinth è open source e distribuito con licenza MIT. Le build Windows e macOS **non sono firmate digitalmente**: i certificati Apple Developer ID ed EV per Windows costano ciascuno centinaia di euro all'anno, a carico di un progetto indipendente. Senza tali firme, Windows SmartScreen e macOS Gatekeeper mostrano un avviso al primo avvio. Gli avvisi indicano che *il sistema operativo non riconosce l'autore*, non che Plinth sia malware.

Tre modi per verificare personalmente Plinth, in ordine di rigore:

- **Leggi il sorgente.** Ogni riga si trova su [GitHub](https://github.com/fabwaseem/plinth) e puoi [compilarlo dal sorgente](#tech).
- **Controlla SHA256.** Confronta il file con [`SHA256SUMS`](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) pubblicato; consulta [Verifica il download](#verify) più avanti.
- **Esegui una scansione esterna.** Carica il file su [VirusTotal](https://www.virustotal.com).

### <a id="linux-first-launch"></a>Primo avvio su Linux

Le AppImage vengono eseguite direttamente, senza installazione. Devi soltanto contrassegnare il file come eseguibile.

**Gestore file:** fai clic destro sul file `.AppImage` → **Proprietà** → **Permessi** → abilita **Consentire l'esecuzione del file come programma**, quindi fai doppio clic.

**Terminale:**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

Se l'avvio non riesce ancora, eseguilo senza montarlo; non occorre alcun pacchetto FUSE:

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**Integrazione desktop facoltativa:** installa una volta [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher); ogni AppImage aperta con doppio clic verrà registrata automaticamente nel menu delle applicazioni, senza creare manualmente un file `.desktop`.

**Archivio tar semplice (senza FUSE né installazione):**

La build `.tar.gz` contiene la stessa app senza il wrapper AppImage: estraila ovunque ed eseguila. Non servono un programma di installazione né FUSE.

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**I download Linux nella pagina della versione sono disponibili solo per x86_64.** Sui sistemi ARM64 (Raspberry Pi, Asahi Linux) Flatpak si installa comunque, ma poi non parte e mostra `bwrap: execvp ldconfig: Exec format error`.

<details>
<summary><strong><a id="verify"></a>Verifica il download (SHA256)</strong></summary>

Ogni versione pubblica un file `SHA256SUMS` insieme ai binari. Per verificare che il download non sia stato danneggiato o alterato durante il trasferimento, calcola l'hash del file localmente e confrontalo con la riga corrispondente in `SHA256SUMS`. Apri la pagina dell'ultima versione → **Assets** → scarica `SHA256SUMS`.

**Windows (PowerShell o Prompt dei comandi):**

```powershell
certutil -hashfile Plinth-win-x64-Setup.exe SHA256
```

**macOS (Terminale):**

```bash
shasum -a 256 Plinth-mac-arm64.dmg
```

**Linux (Terminale):**

```bash
sha256sum Plinth-linux-x64.AppImage
```

Vuoi una scansione antimalware esterna? Carica il file su [VirusTotal](https://www.virustotal.com). Qualche segnalazione euristica generica da motori minori è normale per le app Electron non firmate; numerose segnalazioni da motori importanti sarebbero invece un vero motivo di preoccupazione.

</details>

<details>
<summary><strong>Windows: programma di installazione o portatile</strong></summary>

| | Programma di installazione NSIS | `.exe` portatile |
| --- | --- | --- |
| Installazione necessaria | Sì | No — eseguilo da qualsiasi posizione |
| Aggiornamenti automatici | ✅ nell'app | ❌ download manuale |
| Velocità di avvio | ✅ più veloce | ⚠️ primo avvio più lento |
| Aggiunta al menu Start | Yes | No |
| Disinstallazione semplice | Yes | ❌ elimina il file |

**Consiglio:** usa il programma di installazione NSIS per gli aggiornamenti automatici e un avvio più rapido. Usa il `.exe` portatile se non vuoi installazione né modifiche al registro.

</details>

---

## <a id="why"></a>Perché Plinth

Plinth è pensato per una sola cosa: incolla un URL e ottieni un file locale pulito. Nessun upselling o raccolta di dati.

| | Plinth |
| --- | --- |
| Gratuito, senza piano premium | Yes |
| Open source | Yes |
| Elaborazione solo locale | Yes |
| Nessun limite di utilizzo | Yes |
| App desktop multipiattaforma | Yes |
| Sottotitoli + SponsorBlock | Yes |

---

## <a id="privacy"></a>Privacy

I download vengono trasferiti direttamente da YouTube alla cartella scelta tramite [yt-dlp](https://github.com/yt-dlp/yt-dlp), senza passare per server di terzi. Cronologia di visualizzazione e download, URL e contenuto dei file restano sul tuo dispositivo.

Plinth invia telemetria anonima e aggregata tramite [OpenPanel](https://openpanel.dev), quanto basta a un progetto indipendente per comprendere errori, arresti anomali, feedback, sistema operativo e versioni dell'app. Non invia URL, titoli dei video, percorsi dei file, dati degli account, impronte digitali o informazioni personali. L'ID di installazione è casuale e non è collegato alla tua identità. Puoi disattivarlo nelle Impostazioni.

Explore mantiene un proprio accesso, separato dal tuo browser, e Plinth non legge né compila mai il modulo di accesso: scrivi direttamente nella pagina di Google. I download avvengono senza accesso; solo quando uno fallisce in un modo che un account può risolvere, Plinth rilegge l'accesso in quel momento, lo conserva in un file temporaneo per quel download e poi elimina il file. Uscire da Explore nelle Impostazioni lo cancella.

---

## <a id="faq"></a>Domande frequenti

**È davvero gratuito?**
Sì: licenza MIT, nessun piano premium e nessuna funzione bloccata.

**Quali qualità video posso scaricare?**
Tutto ciò che YouTube offre: 4K UHD (2160p), 1440p, 1080p, 720p, 480p, 360p e solo audio. I flussi a 60 fps, 120 fps e HDR vengono mantenuti invariati.

**Posso estrarre soltanto l'audio in MP3?**
Sì. Scegli *solo audio* nel menu del formato e seleziona MP3, M4A/AAC, Opus o WAV.

**Come scarico i video che richiedono un account YouTube?**
Accedi una volta nella scheda Explore. Plinth potrà allora scaricare i video privati e riservati ai membri che il tuo account può vedere, i video con limiti di età se l'età dell'account è verificata, e le tue liste Guarda più tardi e Piaciuti. Usa l'accesso solo quando un download fallisce in un modo che un account può risolvere; tutto il resto si scarica come prima. È la scelta **Accesso a Explore**, elencata per prima e contrassegnata come Consigliata nelle impostazioni dei cookie, e Plinth la seleziona per te la prima volta che apri Explore. Il wiki di yt-dlp avverte che [l'automazione con un account connesso può far segnalare un account Google](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies), quindi un account secondario è la scelta più sicura.

**Continuerà a funzionare quando YouTube cambierà qualcosa?**
yt-dlp si aggiorna automaticamente all'avvio e Plinth distribuisce rapidamente le correzioni quando YouTube cambia. Quando YouTube chiede di confermare che non sei un bot, Plinth prova anche il tuo accesso a Explore, se l'hai effettuato, e i cookie da file o dal tuo browser sono disponibili nelle impostazioni dei cookie.

**In quali lingue è disponibile Plinth?**
30 lingue pronte all'uso: Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文. Plinth rileva automaticamente la lingua del sistema operativo al primo avvio e puoi cambiarla in qualsiasi momento dal selettore nella barra degli strumenti. I file JSON delle lingue usati in fase di esecuzione si trovano in src/shared/i18n/locales/, mentre i cataloghi PO per i traduttori sono in i18n/locales/: apri una PR su GitHub per contribuire.

**Devo installare qualcos'altro?**
No. yt-dlp viene scaricato automaticamente al primo avvio e memorizzato nella cache del computer; ffmpeg e ffprobe sono inclusi nell'app. In seguito non serve alcuna configurazione aggiuntiva.

**Posso scaricare playlist o interi canali?**
Sì, entrambi. Incolla l'URL di una playlist o di un canale (per esempio `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`), scegli quante voci esaminare, quindi metti in coda l'intero elenco o seleziona singoli video. I filtri per intervallo di date arriveranno presto.

**macOS dice che "l'app è danneggiata": cosa devo fare?**
È macOS Gatekeeper che blocca un'app non firmata, non un danno effettivo. Consulta [Primo avvio su macOS](#macos-first-launch) per i comandi del Terminale che rimuovono la quarantena e avviano Plinth.

**Scaricare video da YouTube è legale?**
Per uso personale e privato è generalmente accettato nella maggior parte delle giurisdizioni. Sei responsabile del rispetto dei [Termini di servizio](https://www.youtube.com/t/terms) di YouTube e delle leggi locali sul diritto d'autore.

---

## <a id="roadmap"></a>Roadmap

Funzionalità ancora previste, grosso modo in ordine di priorità:

| Funzionalità | Descrizione |
| --- | --- |
| **Filtri per playlist e canali** | Filtri per intervallo di date durante l'elenco di una playlist o di un canale |
| **Preferenze delle tracce audio di YouTube** | Imposta una preferenza globale per la lingua parlata, con eccezioni per profilo quando YouTube offre più tracce audio |
| **Ripristino più robusto dei tentativi** | Un nuovo percorso di ripetizione per i download interrotti da connessioni Internet instabili o problematiche |
| **Pannello completo di gestione download** | Trasforma il pannello della coda in un gestore più completo, inclusa la modifica delle cartelle di destinazione degli elementi in attesa |
| **Download pianificati** | Avvia una coda a un orario stabilito, per esempio durante la notte |
| **Ritaglio dei clip** | Scarica solo un segmento indicando il tempo iniziale e finale |
| **Pacchetto AUR** | Installazione su Arch Linux e Omarchy con `yay -S plinth-bin` |

Hai in mente una funzionalità? [Apri una richiesta](../../issues): il contributo della community orienta le priorità.

---

## <a id="support"></a>Sostieni Plinth

Plinth è gratuito e distribuito con licenza MIT: niente pubblicità e nessun piano a pagamento. Se ti fa risparmiare tempo, puoi sostenere lo sviluppo con Bitcoin o Tron; gli indirizzi si trovano in [DONATE.md](../../docs/DONATE.md), l'unica fonte ufficiale. Plinth non invierà mai un indirizzo tramite e-mail o messaggio diretto. Mettere una stella al repository, segnalare errori e migliorare le traduzioni è altrettanto utile.

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>Tecnologie

<details>
<summary><strong>Stack</strong></summary>

- **Electron** — shell desktop multipiattaforma
- **React 19** + **TypeScript** — interfaccia utente
- **Tailwind CSS v4** — stile
- **Zustand** — gestione dello stato
- **yt-dlp** + **ffmpeg** — motore di download e mux (yt-dlp viene scaricato in fase di esecuzione; ffmpeg/ffprobe sono inclusi durante la compilazione)
- **Vite** + **electron-vite** — strumenti di compilazione
- **Vitest** + **Playwright** — test unitari ed end-to-end

</details>

<details>
<summary><strong>Compilazione dal sorgente</strong></summary>

### Prerequisiti — tutte le piattaforme

| Strumento | Versione | Installazione |
| --------- | -------- | ------------- |
| Git       | qualsiasi | [git-scm.com](https://git-scm.com) |
| Node.js   | 24.21.0 | `mise install` o `.node-version` |
| Bun       | 1.4.2  | `mise install` o `package.json` `packageManager` |

Consigliato: installa `mise`, quindi esegui `mise install` nel checkout. Senza mise, attiva manualmente Node.js da `.node-version` e Bun da `package.json` prima di `bun run bootstrap`.

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Visual Studio Build Tools e Python potrebbero essere necessari per ricompilare le dipendenze native.

### macOS

```bash
brew install mise
xcode-select --install
```

Dopo la clonazione, esegui `mise trust && mise install` nel checkout. Se la shell usa già `fnm`, `nvm` o Bun tramite Homebrew, attiva mise in `~/.zshrc` affinché Plinth usi Node.js 24.21.0 e Bun 1.4.2:

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

# Dipendenze di compilazione e runtime di Electron
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# Solo test E2E (Electron richiede un display)
sudo apt install -y xvfb
```

### Clona ed esegui

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # consigliato; salta se hai attivato manualmente le versioni fissate
bun run bootstrap
bun run doctor
bun run dev            # app Electron con renderer Vite
```

### Crea un pacchetto distribuibile

```bash
bun run build        # controllo dei tipi + compilazione
bun run dist         # pacchetto per il sistema operativo corrente
bun run dist:win     # pacchetti Windows se eseguito su un host supportato
```

> `bun run bootstrap` installa le dipendenze, ricompila quelle dell'app Electron, verifica Electron, prepara ffmpeg/ffprobe integrati per lo sviluppo e installa Playwright Chromium. yt-dlp viene gestito in fase di esecuzione nella cartella dati dell'app; ffmpeg e ffprobe sono inclusi in ogni versione di Plinth.

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

## Condizioni d'uso

Plinth è uno strumento destinato esclusivamente all'uso personale e privato. Sei l'unico responsabile di verificare che i download rispettino i [Termini di servizio](https://www.youtube.com/t/terms) di YouTube e le leggi sul diritto d'autore della tua giurisdizione. Non usare Plinth per scaricare, riprodurre o distribuire contenuti che non hai il diritto di utilizzare. Gli sviluppatori non rispondono di eventuali usi impropri.

Licenza MIT · Realizzato con cura da <a href="https://github.com/fabwaseem">Waseem Anjum</a>

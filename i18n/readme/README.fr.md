<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — Téléchargeur YouTube (+ 2000 sites) gratuit et open source pour Windows, macOS & Linux

Télécharge des vidéos, Shorts, musiques, chaînes, podcasts ou pistes audio depuis **YouTube et plus de 2000 sites supportés** — jusqu'à 4K HDR à 60 fps, ou en MP3 / AAC / Opus. Fonctionne en local sur Windows, macOS et Linux. **Pas de pub, pas de superflu, pas d'upsell.**

Plinth is a fork of [Arroxy](https://github.com/antonio-orionus/Arroxy) by Antonio Orionus, MIT licensed.

### What Plinth changes

- Published as Plinth by Waseem Anjum, with its own site ([plinth.fabwaseem.com](https://plinth.fabwaseem.com)) and its own Scoop and Homebrew packages.

**Lire en :** [Afaan Oromoo](README.om.md) · [Bahasa Indonesia](README.id.md) · [Deutsch](README.de.md) · [English](../../README.md) · [Español](README.es.md) · **Français** · [Italiano](README.it.md) · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Tiếng Việt](README.vi.md) · [Türkçe](README.tr.md) · [አማርኛ](README.am.md) · [العربية](README.ar.md) · [اردو](README.ur.md) · [پښتو](README.ps.md) · [فارسی](README.fa.md) · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · [ไทย](README.th.md) · [မြန်မာဘာသာ](README.my.md) · [Ελληνικά](README.el.md) · [Русский](README.ru.md) · [Српски](README.sr.md) · [Українська](README.uk.md) · [中文](README.zh.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ Télécharger la dernière version**](#install) · [**Site web**](https://plinth.fabwaseem.com) · [Premier lancement sur Windows](#windows-first-launch) · [Premier lancement sur macOS](#macos-first-launch) · [Premier lancement sur Linux](#linux-first-launch)

Si Plinth te fait gagner du temps, une ⭐ aide les autres à le trouver.

_Last updated: 2026-10-18._

> 🌐 Traduction assistée par IA. Le [README en anglais](README.md) fait foi. Tu vois une erreur ? [Les PRs sont les bienvenues](../../pulls).

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download. `winget install WaseemAnjum.Plinth` is coming soon.

---

## Sommaire

- [Fonctionnalités](#features)
- [Installation et premier lancement](#install)
- [Pourquoi Plinth](#why)
- [Confidentialité](#privacy)
- [Questions fréquentes](#faq)
- [Feuille de route](#roadmap)
- [Soutenir Plinth](#support)
- [Construit avec](#tech)

---

## <a id="features"></a>Fonctionnalités

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>Accueil Téléchargement rapide</b><br/>Collez une URL et lancez-la aussitôt avec votre profil actif

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>Parcours YouTube dans Plinth et télécharge la page où tu es avec ton profil actif

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>Mode URL en masse</b><br/>Collez une liste, dédoublonnage auto, tout mettre en file d'un coup

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>File de téléchargement parallèle</b><br/>Plusieurs téléchargements à la fois avec progression en direct

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>Profils de téléchargement réutilisables</b><br/>Enregistrez format, qualité et sortie en préréglages — réutilisés à chaque téléchargement

### Explore : parcours YouTube dans Plinth

- **Onglet Explore** — parcours YouTube dans Plinth et télécharge ce que tu trouves sans copier de liens. **Télécharger · *ton profil*** met en file la vidéo, la playlist ou la chaîne que tu regardes ; la flèche à côté change de profil, et la baguette ouvre le téléchargement pas à pas pour choisir les formats, les sous-titres, etc.
- **Barre d'adresse** — tape pour chercher sur YouTube ou colle un lien YouTube. Explore ne parcourt que YouTube : un lien d'un autre site ne s'y ouvre pas, mais tu peux le télécharger en un clic
- **Téléchargements qui demandent un compte** — connecte-toi une fois dans Explore et Plinth pourra télécharger les vidéos privées et réservées aux membres que ton compte peut voir, les vidéos soumises à une limite d'âge si l'âge du compte est vérifié, ainsi que tes listes À regarder plus tard et J'aime. Plinth télécharge toujours sans connexion et n'utilise ta connexion Explore que lorsqu'un téléchargement échoue d'une manière qu'un compte peut corriger. Quand YouTube demande de confirmer que tu n'es pas un robot, Plinth essaie aussi ta connexion Explore
- **Utilise un compte secondaire** — le premier écran d'Explore explique pourquoi : télécharger avec un compte comporte un certain risque que ce compte soit restreint. Déconnecte-toi d'Explore depuis les Paramètres quand tu veux oublier la connexion
- **Bloqueur de publicités** — Explore bloque les publicités et les traqueurs sur ses propres pages ; les téléchargements ne sont pas touchés. Activé par défaut, un clic sur le bouclier dans la barre d'outils d'Explore le désactive, et il n'agit jamais sur les pages de connexion de Google. YouTube peut résister aux bloqueurs de publicités pour les comptes connectés

### Qualité & formats

- Jusqu'à **4K UHD (2160p)**, 1440p, 1080p, 720p, 480p, 360p
- **Haut framerate** préservé tel quel — 60 fps, 120 fps, HDR
- **Audio** — exporte l'audio seul en MP3, M4A/AAC, Opus ou WAV. Dans les téléchargements interactifs, choisis les pistes natives surround/Dolby de la source (AC-3, E-AC-3, 5.1, DRC) quand elles sont disponibles, ou définis une valeur par défaut globale **Préférer le surround / Dolby**
- Préréglages rapides : *Meilleure qualité* · *Équilibré* · *Petit fichier*

### Flux de travail

- **Raccourci de téléchargement global** — copie un lien dans n'importe quelle app et appuie sur `Ctrl+Shift+D` (`Cmd+Shift+D` sur macOS) ; Plinth le met en file d'attente avec ton profil actif sans ouvrir la fenêtre, et une notification le confirme. Actif par défaut, réassignable
- **Modes de démarrage flexibles** — choisis un téléchargement unique guidé, un sélecteur de playlist/chaîne, un collage d’URL en lot, Quick Download avec tes valeurs par défaut enregistrées, ou parcours et télécharge depuis Explore
- **File de téléchargement centrale** — chaque tâche unique, playlist, lot ou rapide arrive au même endroit pour suivre, mettre en pause, reprendre, annuler, réessayer et gérer la priorité
- **Surveillance du presse-papiers** — copie un lien YouTube et Plinth remplit automatiquement l'URL quand tu reviens sur l'app (désactivable dans les Paramètres avancés)
- **Nettoyage auto des URLs** — supprime les paramètres de tracking (`si`, `pp`, `utm_*`, `fbclid`, `gclid`) et dénoue les liens `youtube.com/redirect`
- **Mode tray** — fermer la fenêtre garde les téléchargements en cours en arrière-plan
- **30 langues** — détecte automatiquement les paramètres régionaux du système, modifiable à tout moment
- **Synchronisation de playlist** — rescane une playlist par rapport à un dossier local pour ignorer les vidéos déjà téléchargées ; génère un fichier de playlist `.m3u` mis à jour à chaque vidéo téléchargée
- **Contrôles de vitesse et de rythme** — limite la bande passante, définis combien de parties d'une vidéo se téléchargent à la fois et ajoute des pauses entre les requêtes avec des préréglages (*Désactivé · Équilibré · Prudent · Personnalisé*)
- **Modèles de nom de fichier** — nommez vos téléchargements comme vous voulez avec `{title}`, `{uploader}`, `{id}`, `{date}`, `{resolution}` et `{playlist_index}`, globalement ou par profil de téléchargement
- **Téléchargements simultanés et réessai automatique** — choisis combien de téléchargements de la file s'exécutent en même temps et laisse Plinth réessayer un téléchargement ayant rencontré un problème réseau ou serveur, en attendant plus longtemps avant chaque tentative
- **Profils par élément de playlist** — attribuez à chaque vidéo d'une playlist son propre profil de téléchargement au lieu d'un seul réglage pour toute la liste, pour archiver certaines en pleine qualité et récupérer le reste en MP3 en une seule passe
- **Quick Download fonctionne en arrière-plan** — le lien apparaît tout de suite dans Téléchargements et s'y prépare, une note avec **Voir** le confirme, et le champ d'URL se vide pour le lien suivant. Lances-en autant que tu veux pendant que les précédents se préparent
- **Téléchargements te dit ce qui a besoin de toi** — si Plinth ne peut pas lire un lien, sa ligne explique pourquoi et propose la solution : Réessayer, activer les cookies ou se connecter dans Explore. Quand les cookies sont désactivés, **Se connecter avec Explore** le relance pour toi une fois connecté. Une playlist plus longue que ta limite de chargement attend sur sa ligne que tu choisisses tout, les premières vidéos ou une revue. L'onglet Téléchargements compte les lignes qui t'attendent

### Sous-titres & post-traitement

- **Sous-titres** en SRT, VTT ou ASS — manuels ou auto-générés, dans toute langue disponible
- Enregistre à côté de la vidéo, intègre dans un `.mkv`, ou organise dans un sous-dossier `Subtitles/`
- **SponsorBlock** — passe ou marque les sponsors, intros, outros, autopromos en chapitres
- **Métadonnées intégrées** — titre, date de mise en ligne, chaîne, description, miniature et marqueurs de chapitres écrits dans le fichier
- **Lots sous-titres uniquement** — collez une liste d'URL ou ouvrez une playlist, choisissez Sous-titres et ne récupérez que les fichiers de sous-titres de chaque vidéo

### YouTube + 2000 sites

- **YouTube, en entier** — Vidéos, Shorts, Chaînes, Playlists, YouTube Music et Podcasts traités comme des sources de premier rang
- **2000+ autres sites** via yt-dlp — Vimeo, Twitch, Twitter/X, TikTok, SoundCloud, Bandcamp, Bilibili, BBC iPlayer, archive.org et bien plus encore
- **L'audio seul et les sous-titres** fonctionnent sur chaque site supporté, pas seulement YouTube
- Si un site change, yt-dlp publie des correctifs chaque semaine et Plinth met à jour le binaire automatiquement au lancement

### Confidentialité & contrôle

- Traitement 100 % local — les téléchargements vont directement de YouTube à ton disque
- Pas de connexion, pas de cookies, pas de compte Google lié
- Fichiers enregistrés directement dans le dossier que tu choisis

---

## <a id="install"></a>Installation et premier lancement

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

Les versions sont uniquement x86_64. Pas de `curl` ? Remplacez `curl -fsSL` par `wget -qO-`.

| Plateforme | Format |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**Récupère la dernière version →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>Premier lancement sur Windows

Au premier lancement, tu peux voir **"Windows protected your PC"** ou **"Unknown publisher."** Cela s'applique à la fois à `Plinth-win-x64-Setup.exe` et à `Plinth-win-x64-Portable.exe`. Plinth est gratuit et open source, et les builds Windows ne sont pas signés avec un certificat payant, c'est pourquoi SmartScreen les signale. Cela ne signifie **pas** automatiquement qu'Plinth est dangereux. Pour continuer :

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="SmartScreen "Windows protected your PC" dialog with the "More info" link highlighted" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="SmartScreen dialog after expanding More info, showing the "Run anyway" button" />

1. Clique sur **More info**.
2. Clique sur **Run anyway**.

#### Si Windows Defender signale ou supprime le fichier

L'heuristique de Defender signale parfois les installeurs NSIS non signés et les portables Electron comme suspects. Si Defender met en quarantaine `Plinth-win-x64-Setup.exe` ou `Plinth-win-x64-Portable.exe`, restaure-le depuis **Windows Security → Virus & threat protection → Protection history**, puis ajoute l'exécutable Plinth comme élément autorisé sous **Manage settings → Add or remove exclusions**. Comme pour SmartScreen, le déclencheur est la signature d'éditeur manquante, pas un malware détecté.

> Ne télécharge Plinth que depuis la page officielle GitHub Releases. Si tu as obtenu le fichier depuis un autre site ou que quelqu'un te l'a envoyé, supprime-le et télécharge une copie fraîche depuis la source officielle. Le code source est public, tu peux donc l'inspecter ou compiler Plinth toi-même si tu préfères.

Vous préférez Scoop ? `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>Premier lancement sur macOS

Plinth n'est pas encore signé pour macOS, donc Gatekeeper peut afficher le message inquiétant *"Plinth.app is damaged and can't be opened"* après l'installation depuis le DMG. Ce message signifie que macOS a mis en quarantaine une app non signée ; il ne veut pas dire que les fichiers de l'app sont réellement endommagés. Sur les versions actuelles de macOS, la méthode fiable est Terminal :

1. Fais glisser `Plinth.app` depuis le DMG monté vers `/Applications`.
2. Ouvre Terminal et exécute ces deux commandes :

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
open /Applications/Plinth.app
```

La première commande retire l'attribut de quarantaine de ta copie installée d'Plinth. La seconde lance l'app. `sudo` peut demander le mot de passe de ton Mac ; Terminal n'affiche aucun caractère pendant la saisie.

**Apple Silicon vs Intel :** sur un Mac de la série M (M1 / M2 / M3 / M4), télécharge le DMG `arm64`. Sur les Macs Intel, télécharge le DMG `x64`. Le mauvais build fonctionne quand même via Rosetta, mais est notablement plus lent.

> Les builds macOS sont produits via CI sur des runners Apple Silicon et Intel. Si tu rencontres des problèmes, merci d'[ouvrir un issue](../../issues) — les retours des utilisateurs macOS orientent activement le cycle de test macOS.

### <a id="why-warning"></a>Pourquoi tu peux voir un avertissement

Plinth est open source et sous licence MIT. Les builds Windows et macOS **ne sont pas signés numériquement** — les certificats Apple Developer ID et Windows EV coûtent chacun plusieurs centaines de dollars par an, que paye un projet indépendant de sa poche. Sans ces signatures, Windows SmartScreen et macOS Gatekeeper t'avertiront au premier lancement. Ces avertissements signifient *ton OS ne reconnaît pas l'éditeur* — ils ne signifient pas qu'Plinth est un malware.

Trois façons de vérifier Plinth toi-même, par ordre de rigueur croissante :

- **Lis le code source.** Chaque ligne est sur [GitHub](https://github.com/fabwaseem/plinth) et tu peux [le compiler depuis les sources](#tech).
- **Vérifie le SHA256.** Compare ton fichier avec le [`SHA256SUMS`](../../releases/latest) publié — voir [Vérifier ton téléchargement](#verify) ci-dessous.
- **Lance un scan tiers.** Envoie le fichier sur [VirusTotal](https://www.virustotal.com).

### <a id="linux-first-launch"></a>Premier lancement sur Linux

Les AppImages s'exécutent directement — pas d'installation. Tu dois juste marquer le fichier comme exécutable.

**Gestionnaire de fichiers :** clic droit sur le `.AppImage` → **Propriétés** → **Permissions** → active **Autoriser l'exécution du fichier comme programme**, puis double-clique.

**Terminal :**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

Si le lancement échoue encore, lance-le sans montage — aucun paquet FUSE n'est nécessaire :

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**Intégration bureau optionnelle :** installe [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) une fois, et toute AppImage sur laquelle tu double-cliques est automatiquement enregistrée dans ton menu de lancement — aucun fichier `.desktop` manuel nécessaire.

**Archive simple (sans FUSE, sans installation) :**

La version `.tar.gz` est la même application sans l'enveloppe AppImage : décompresse-la où tu veux et lance-la. Ni installateur ni paquet FUSE.

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**Les téléchargements Linux sur la page des versions sont uniquement en x86_64.** Sur les machines ARM64 (Raspberry Pi, Asahi Linux) le Flatpak s'installe mais échoue au lancement avec `bwrap: execvp ldconfig: Exec format error`.

<details>
<summary><strong><a id="verify"></a>Vérifier ton téléchargement (SHA256)</strong></summary>

Chaque release publie un fichier `SHA256SUMS` accompagnant les binaires. Pour vérifier que ton téléchargement n'a pas été corrompu ou altéré en transit, hache ton fichier en local et compare la ligne dans `SHA256SUMS`. Ouvre la page de la dernière release → **Assets** → télécharge `SHA256SUMS`.

**Windows (PowerShell or Command Prompt) :**

```powershell
certutil -hashfile Plinth-win-x64-Setup.exe SHA256
```

**macOS (Terminal) :**

```bash
shasum -a 256 Plinth-mac-arm64.dmg
```

**Linux (Terminal) :**

```bash
sha256sum Plinth-linux-x64.AppImage
```

Tu veux un scan antimalware tiers ? Envoie le fichier sur [VirusTotal](https://www.virustotal.com). Une poignée de flags heuristiques génériques de moteurs mineurs est normale pour des apps Electron non signées ; des détections généralisées par les grands moteurs seraient une vraie préoccupation.

</details>

<details>
<summary><strong>Windows : Installeur vs Portable</strong></summary>

| | Installeur NSIS | `.exe` portable |
| --- | --- | --- |
| Installation requise | Oui | Non — exécutable de partout |
| Mises à jour automatiques | ✅ dans l'app | ❌ téléchargement manuel |
| Vitesse de démarrage | ✅ plus rapide | ⚠️ démarrage à froid plus lent |
| Ajouté au menu Démarrer | Yes | No |
| Désinstallation simple | Yes | ❌ supprime juste le fichier |

**Recommandation :** utilise l'installeur NSIS pour les mises à jour automatiques et un démarrage plus rapide. Utilise le `.exe` portable pour une option sans installation ni registre.

</details>

---

## <a id="why"></a>Pourquoi Plinth

Plinth est conçu pour une seule chose : coller une URL et obtenir un fichier local propre. Pas d'upsell, pas de collecte de données.

| | Plinth |
| --- | --- |
| Gratuit, pas de niveau premium | Yes |
| Open source | Yes |
| Traitement 100 % local | Yes |
| Pas de limites d'utilisation | Yes |
| Application de bureau multiplateforme | Yes |
| Sous-titres + SponsorBlock | Yes |

---

## <a id="privacy"></a>Confidentialité

Les téléchargements sont récupérés directement via [yt-dlp](https://github.com/yt-dlp/yt-dlp) depuis YouTube vers le dossier que tu choisis — rien ne passe par un serveur tiers. L'historique de visionnage, l'historique de téléchargement, les URLs et le contenu des fichiers restent sur ton appareil.

Plinth envoie une télémétrie anonyme et agrégée via [OpenPanel](https://openpanel.dev) — juste assez pour comprendre les pannes, les crashs, les retours, OS et versions de l’app. Pas d’URLs, de titres de vidéos, de chemins de fichiers, d’infos de compte, de fingerprinting ni de données personnelles. L’identifiant par installation est aléatoire et non lié à ton identité. Tu peux te désabonner dans les Paramètres.

Explore garde sa propre connexion, séparée de ton navigateur, et Plinth ne lit ni ne remplit jamais le formulaire de connexion : tu saisis tes identifiants sur la page de Google elle-même. Les téléchargements se font sans connexion ; seulement quand l'un échoue d'une manière qu'un compte peut corriger, Plinth relit la connexion à ce moment-là, la garde dans un fichier temporaire pour ce téléchargement et supprime le fichier ensuite. Se déconnecter d'Explore dans les Paramètres l'oublie.

---

## <a id="faq"></a>Questions fréquentes

**C'est vraiment gratuit ?**
Oui — licence MIT, pas de niveau premium, pas de fonctions verrouillées.

**Quelles qualités de vidéo puis-je télécharger ?**
Tout ce que YouTube propose : 4K UHD (2160p), 1440p, 1080p, 720p, 480p, 360p, plus audio seul. Les flux 60 fps, 120 fps et HDR sont préservés tels quels.

**Puis-je extraire uniquement l'audio en MP3 ?**
Oui. Choisis *audio seul* dans le menu des formats puis MP3, M4A/AAC, Opus ou WAV.

**Comment télécharger des vidéos qui demandent un compte YouTube ?**
Connecte-toi une fois dans l'onglet Explore. Plinth pourra alors télécharger les vidéos privées et réservées aux membres que ton compte peut voir, les vidéos soumises à une limite d'âge si l'âge du compte est vérifié, ainsi que tes listes À regarder plus tard et J'aime. Il n'utilise la connexion que lorsqu'un téléchargement échoue d'une manière qu'un compte peut corriger ; tout le reste se télécharge comme avant. C'est le choix **Connexion Explore**, listé en premier et marqué Recommandé dans les paramètres des cookies, et Plinth le sélectionne pour toi la première fois que tu ouvres Explore. Le wiki de yt-dlp note que [l'automatisation avec un compte connecté peut signaler un compte Google](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies), donc un compte secondaire est le choix le plus sûr.

**Ça continuera de fonctionner si YouTube change quelque chose ?**
yt-dlp est mis à jour automatiquement au lancement, et Plinth publie des correctifs rapidement quand YouTube change quelque chose. Quand YouTube demande de confirmer que tu n'es pas un robot, Plinth essaie aussi ta connexion Explore si tu t'y es connecté, et les cookies d'un fichier ou de ton navigateur sont disponibles dans les paramètres des cookies.

**Dans quelles langues Plinth est-il disponible ?**
30 langues prêtes à l’emploi : Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文. Plinth détecte automatiquement la langue de ton système d’exploitation au premier lancement, et tu peux changer à tout moment depuis le sélecteur de langue dans la barre d’outils. Les JSON de locale Runtime se trouvent dans src/shared/i18n/locales/, et les catalogues PO destinés aux traducteurs se trouvent dans i18n/locales/ — ouvre une PR sur GitHub pour contribuer.

**Dois-je installer autre chose ?**
Non. yt-dlp est téléchargé automatiquement au premier lancement et mis en cache sur ta machine ; ffmpeg et ffprobe sont inclus dans l’app. Après ça, aucune configuration supplémentaire.

**Puis-je télécharger des playlists ou des chaînes entières ?**
Oui — les deux. Colle une URL de playlist ou de chaîne (p. ex. `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`) ; choisis combien d’entrées analyser, puis mets toute la liste en file ou sélectionne des vidéos précises. Les filtres par date arrivent bientôt.

**macOS dit "l'application est endommagée" — que faire ?**
C'est Gatekeeper de macOS qui bloque une app non signée, pas un vrai endommagement. Voir [macOS first launch](#macos-first-launch) pour les commandes Terminal qui retirent la quarantaine et lancent Plinth.

**Télécharger des vidéos YouTube est-il légal ?**
Pour un usage personnel et privé, c'est généralement accepté dans la plupart des juridictions. Tu es responsable de respecter les [Conditions d'Utilisation](https://www.youtube.com/t/terms) de YouTube et les lois sur le droit d'auteur de ton pays.

---

## <a id="roadmap"></a>Feuille de route

Toujours prévu — approximativement par ordre de priorité :

| Fonctionnalité | Description |
| --- | --- |
| **Filtres de playlists et chaînes** | Filtres par plage de dates lors de l’énumération d’une playlist ou d’une chaîne |
| **Préférences de pistes audio YouTube** | Définir une piste de langue parlée préférée pour toute l’app, avec des choix différents par profil quand YouTube propose plusieurs pistes audio |
| **Reprise par nouvel essai renforcée** | Un nouveau chemin de relance pour les téléchargements interrompus par des connexions internet instables ou problématiques |
| **Tiroir de gestionnaire de téléchargements complet** | Transformer le tiroir de file en gestionnaire plus complet, avec changement de dossier de destination pour les éléments en file |
| **Téléchargements programmés** | Démarre une file à une heure définie (lancements nocturnes) |
| **Découpe de clips** | Télécharge uniquement un segment par heure de début/fin |
| **Paquet AUR** | Installation sur Arch Linux et Omarchy avec `yay -S plinth-bin` |

Tu as une fonctionnalité en tête ? [Ouvre une demande](../../issues) — les retours de la communauté orientent les priorités.

---

## <a id="support"></a>Soutenir Plinth

Plinth est gratuit et sous licence MIT — pas de publicité, pas de version payante. S'il te fait gagner du temps, tu peux soutenir le développement avec Bitcoin ou Tron : les adresses se trouvent dans [DONATE.md](../../docs/DONATE.md), la seule source officielle. Plinth ne t'enverra jamais d'adresse par e-mail ou par message privé. Mettre une étoile au dépôt, signaler des bugs et améliorer les traductions aident tout autant.

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>Construit avec

<details>
<summary><strong>Stack</strong></summary>

- **Electron** — shell de bureau multiplateforme
- **React 19** + **TypeScript** — UI
- **Tailwind CSS v4** — styles
- **Zustand** — gestion d'état
- **yt-dlp** + **ffmpeg** — moteur de téléchargement et de muxage (yt-dlp est récupéré à l’exécution ; ffmpeg/ffprobe sont inclus au build)
- **Vite** + **electron-vite** — outillage de build
- **Vitest** + **Playwright** — tests unitaires et end-to-end

</details>

<details>
<summary><strong>Compiler depuis les sources</strong></summary>

### Prérequis — toutes plateformes

| Outil   | Version | Installation |
| ------- | ------- | ------------ |
| Git     | quelconque | [git-scm.com](https://git-scm.com) |
| Node.js | 24.21.0 | `mise install` ou `.node-version` |
| Bun     | 1.4.2  | `mise install` ou `package.json` `packageManager` |

Recommandé : installe `mise`, puis lance `mise install` dans le checkout. Sans mise, active manuellement Node.js depuis `.node-version` et Bun depuis `package.json` avant `bun run bootstrap`.

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Visual Studio Build Tools et Python peuvent être nécessaires pour les recompilations natives.

### macOS

```bash
brew install mise
xcode-select --install
```

Après le clonage, lance `mise trust && mise install` depuis le checkout. Si ton shell utilise déjà `fnm`, `nvm` ou un Bun installé via Homebrew, active mise dans `~/.zshrc` pour qu'Plinth utilise Node.js 24.21.0 et Bun 1.4.2 :

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

# Dépendances de build et runtime Electron
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# Tests E2E uniquement (Electron a besoin d'un affichage)
sudo apt install -y xvfb
```

### Cloner & lancer

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # recommandé ; saute cette étape si tu as activé les outils épinglés manuellement
bun run bootstrap
bun run doctor
bun run dev            # app Electron contre le renderer Vite
```

### Créer un paquet distribuable

```bash
bun run build        # vérification des types + compilation
bun run dist         # paquet pour l'OS actuel
bun run dist:win     # paquet Windows sur un hôte compatible
```

> `bun run bootstrap` installe les dépendances, reconstruit les dépendances Electron, vérifie Electron, prépare les ffmpeg/ffprobe intégrés pour le développement et installe Playwright Chromium. yt-dlp est géré à l'exécution dans le dossier de données de l’app ; ffmpeg et ffprobe sont inclus dans chaque release d’Plinth.

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

## Conditions d'utilisation

Plinth est un outil destiné à un usage personnel et privé uniquement. Tu es seul responsable du fait que tes téléchargements respectent les [Conditions d'Utilisation](https://www.youtube.com/t/terms) de YouTube et les lois sur le droit d'auteur de ta juridiction. N'utilise pas Plinth pour télécharger, reproduire ou distribuer du contenu sur lequel tu n'as pas de droits. Les développeurs ne sont pas responsables de tout usage abusif.

Licence MIT · Fait avec soin par <a href="https://github.com/fabwaseem">Waseem Anjum</a>

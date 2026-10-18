<img src="../../src/renderer/src/assets/logo.svg" alt="Plinth" width="72" />

# Plinth — Windows・macOS・Linux 向け無料オープンソース YouTube（+ 2000 サイト）ダウンローダー

**YouTube と 2000 以上の対応サイト**から動画・Shorts・音楽・チャンネル・ポッドキャスト・音声トラックをダウンロード — 最大 4K HDR 60fps、または MP3 / AAC / Opus として。Windows、macOS、Linux でローカル動作。**広告なし、余計なものなし、アップセルなし。**

Plinth is a fork of [Arroxy](https://github.com/antonio-orionus/Arroxy) by Antonio Orionus, MIT licensed.

### What Plinth changes

- Published as Plinth by Waseem Anjum, with its own site ([plinth.fabwaseem.com](https://plinth.fabwaseem.com)) and its own Scoop and Homebrew packages.

**言語：** [Afaan Oromoo](README.om.md) · [Bahasa Indonesia](README.id.md) · [Deutsch](README.de.md) · [English](../../README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Kiswahili](README.sw.md) · [O'zbekcha](README.uz.md) · [Polski](README.pl.md) · [Português](README.pt.md) · [Tiếng Việt](README.vi.md) · [Türkçe](README.tr.md) · [አማርኛ](README.am.md) · [العربية](README.ar.md) · [اردو](README.ur.md) · [پښتو](README.ps.md) · [فارسی](README.fa.md) · [বাংলা](README.bn.md) · [हिन्दी](README.hi.md) · [ไทย](README.th.md) · [မြန်မာဘာသာ](README.my.md) · [Ελληνικά](README.el.md) · [Русский](README.ru.md) · [Српски](README.sr.md) · [Українська](README.uk.md) · [中文](README.zh.md) · **日本語** · [한국어](README.ko.md) · [繁體中文](README.zh-Hant.md)

[**↓ 最新リリースをダウンロード**](#install) · [**ウェブサイト**](https://plinth.fabwaseem.com) · [Windows 初回起動](#windows-first-launch) · [macOS 初回起動](#macos-first-launch) · [Linux 初回起動](#linux-first-launch)

Plinth が役に立ったなら、⭐ で他のユーザーへの周知を助けてください。

_Last updated: 2026-10-18._

> 🌐 これは AI 翻訳です。[英語版 README](README.md) が情報のソースです。誤りを見つけたら [PR を歓迎します](../../pulls)。

Plinth is a free desktop app for Windows, macOS, and Linux. It saves video, audio, playlists, and subtitles from YouTube and 2000+ other [yt-dlp](https://github.com/yt-dlp/yt-dlp) sites onto your computer. MIT licensed. No ads and no usage limits. Install it with [Scoop](https://github.com/fabwaseem/scoop-bucket), [Homebrew](https://github.com/fabwaseem/homebrew-plinth), Flatpak, AppImage, or a direct download. `winget install WaseemAnjum.Plinth` is coming soon.

---

## 目次

- [機能](#features)
- [インストールと初回起動](#install)
- [なぜ Plinth？](#why)
- [プライバシー](#privacy)
- [よくある質問](#faq)
- [ロードマップ](#roadmap)
- [Plinth を支援する](#support)
- [技術詳細](#tech)

---

## <a id="features"></a>機能

<img src="../../build/readme/download.png" alt="Plinth download screen" width="900" />

<b>クイックダウンロードのホーム</b><br/>URLを貼り付け、アクティブなプロファイルですぐにダウンロード

<img src="../../build/readme/browse.png" alt="Plinth browse screen" width="900" />

<b>Explore</b><br/>Plinth の中で YouTube を閲覧し、表示中のページをアクティブなプロファイルでダウンロード

<img src="../../build/readme/bulk.png" alt="Plinth bulk URL screen" width="900" />

<b>一括URLモード</b><br/>リストを貼り付け、自動で重複を除去し、まとめてキューに追加

<img src="../../build/readme/history.png" alt="Plinth history screen" width="900" />

<b>並列ダウンロードキュー</b><br/>複数のダウンロードを同時に、進捗をリアルタイム表示

<img src="../../build/readme/profiles.png" alt="Plinth profiles screen" width="900" />

<b>再利用できるダウンロードプロファイル</b><br/>形式・画質・出力をプリセットとして保存——ダウンロードごとに再利用

### Explore：Plinth の中で YouTube を閲覧

- **Explore タブ** — Plinth の中で YouTube を閲覧し、見つけた動画をリンクをコピーせずにダウンロードできます。**ダウンロード · *プロファイル名*** は、表示中の動画・プレイリスト・チャンネルをキューに追加します。隣の矢印でプロファイルを切り替え、魔法の杖アイコンからは形式や字幕などを選べるステップ式のダウンロードを開けます
- **アドレスバー** — 入力して YouTube を検索するか、YouTube のリンクを貼り付けます。Explore が閲覧できるのは YouTube だけなので、他サイトのリンクはここでは開きませんが、ワンクリックでダウンロードできます
- **アカウントが必要なダウンロード** — Explore で一度サインインすれば、アカウントで視聴できる非公開動画やメンバー限定動画、年齢確認済みアカウントなら年齢制限付き動画、「後で見る」や「高く評価した動画」のリストもダウンロードできます。Plinth は基本的にサインアウトの状態でダウンロードし、アカウントで解決できる理由でダウンロードに失敗したときだけ Explore のサインインを使います。YouTube からボットでないことの確認を求められた場合も、Plinth は Explore のサインインを試します
- **サブアカウントの利用を推奨** — Explore の最初の画面で理由を説明しています。アカウントを使ってダウンロードすると、そのアカウントが制限される恐れが多少あります。サインインを消したいときは、設定から Explore をサインアウトしてください
- **広告ブロック** — Explore は自身のページで広告とトラッカーをブロックします。ダウンロードには影響しません。既定でオン、Explore のツールバーのシールドをクリックするとオフにでき、Google のサインインページでは動作しません。サインイン済みアカウントでは、YouTube が広告ブロックに対抗してくることがあります

### 画質・フォーマット

- 最大 **4K UHD（2160p）**、1440p、1080p、720p、480p、360p
- **ハイフレームレート**をそのまま保存 — 60 fps、120 fps、HDR
- **音声** — 音声のみを MP3、M4A/AAC、Opus、WAV で書き出します。インタラクティブなダウンロードでは、利用可能な場合にソースのネイティブ サラウンド/Dolby トラック（AC-3、E-AC-3、5.1、DRC）を選択でき、グローバルな既定値 **サラウンド / Dolby を優先** を設定できます
- クイックプリセット：*最高画質* · *バランス* · *小さいファイル*

### ワークフロー

- **グローバルダウンロードホットキー** — どのアプリでもリンクをコピーして `Ctrl+Shift+D`（macOS では `Cmd+Shift+D`）を押すだけ。Plinth はウィンドウを開かずにアクティブなプロファイルでキューに追加し、通知で結果を知らせます。既定で有効、キー割り当ては変更可能
- **柔軟な開始モード** — ガイド付き単体ダウンロード、プレイリスト/チャンネル選択、URL一括貼り付け、保存済み既定値での Quick Download、または Explore での閲覧とダウンロードを選べます
- **中央ダウンロードキュー** — 単体、プレイリスト、一括、クイックの各ジョブが一か所に入り、進行状況、一時停止、再開、キャンセル、再試行、優先度を管理できます
- **クリップボード監視** — YouTube リンクをコピーすると、アプリにフォーカスを戻したときに Plinth が URL を自動入力（詳細設定でトグル切替可能）
- **URL 自動クリーンアップ** — トラッキングパラメータ（`si`、`pp`、`utm_*`、`fbclid`、`gclid`）を除去し、`youtube.com/redirect` リンクを展開
- **トレイモード** — ウィンドウを閉じてもダウンロードはバックグラウンドで継続
- **30 言語** — システム ロケールを自動検出し、いつでも切り替え可能
- **プレイリスト同期** — ローカルフォルダーと照合してプレイリストを再スキャンし、ダウンロード済みの動画をスキップします。各動画のダウンロードに合わせて更新される `.m3u` プレイリストファイルも生成します
- **速度とペーシング制御** — ダウンロード帯域を制限し、動画を同時に何分割で取得するかを設定し、プリセット（*オフ · バランス · 慎重 · カスタム*）でリクエスト間の待機を追加できます
- **ファイル名テンプレート** — `{title}`、`{uploader}`、`{id}`、`{date}`、`{resolution}`、`{playlist_index}` を使って好きな名前を付けられます。全体にもダウンロードプロファイルごとにも設定可能
- **同時ダウンロード数と自動再試行** — キューのダウンロードを同時に何件走らせるか選べます。ネットワークやサーバーの問題が起きたダウンロードは、試行ごとに待ち時間を延ばしながら Plinth が再試行します
- **プレイリストの動画ごとにプロファイルを指定** — リスト全体に同じ設定を使う代わりに、プレイリスト内の各動画に個別のダウンロードプロファイルを割り当てられます。一度の処理で一部を最高画質で保存し、残りをMP3として取得できます
- **Quick Download はバックグラウンドで動作** — リンクはすぐにダウンロードに表示されてそこで準備され、**表示**付きの通知で確認でき、URL 欄は次のリンクのために空になります。前のものを準備している間も、いくつでも開始できます
- **対応が必要なものをダウンロードが知らせます** — Plinth がリンクを読み取れないと、その行に理由と対処法（再試行、Cookie をオン、Explore でサインイン）が表示されます。Cookie がオフのときは、サインイン後に **Explore でサインイン** が自動で再試行します。読み込み上限を超えるプレイリストは、その行で待機し、全件・先頭の数件・確認のいずれかを選べます。ダウンロードタブには、対応待ちの行数が表示されます

### 字幕・後処理

- SRT、VTT、または ASS 形式の**字幕** — 手動または自動生成、利用可能な任意の言語
- 動画の隣に保存、`.mkv` に埋め込み、または `Subtitles/` サブフォルダに整理
- **SponsorBlock** — スポンサー、イントロ、アウトロ、自己宣伝をスキップまたはチャプターマーク
- **埋め込みメタデータ** — タイトル、アップロード日、チャンネル、説明、サムネイル、チャプターマーカーをファイルに書き込み
- **字幕のみの一括処理** — URLリストを貼り付けるかプレイリストを開き、字幕を選ぶだけで、各動画の字幕ファイルだけを取得

### YouTube + 2000 サイト

- **YouTube、フル対応** — 動画・Shorts・チャンネル・プレイリスト・YouTube Music・ポッドキャストをファーストクラスのソースとして処理
- **2000 以上の他サイト** via yt-dlp — Vimeo、Twitch、Twitter/X、TikTok、SoundCloud、Bandcamp、Bilibili、BBC iPlayer、archive.org など多数
- **音声のみと字幕**は YouTube だけでなく、すべての対応サイトで機能します
- サイトが変更されても、yt-dlp は毎週修正をリリースし、Plinth は起動時にバイナリを自動更新します

### プライバシー・制御

- 100% ローカル処理 — ダウンロードは YouTube から直接あなたのディスクへ
- ログインなし、Cookie なし、Google アカウント連携なし
- 選択したフォルダに直接ファイルを保存

---

## <a id="install"></a>インストールと初回起動

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

ビルドは x86_64 のみです。`curl` がない場合は `curl -fsSL` を `wget -qO-` に置き換えてください。

| プラットフォーム | フォーマット |
| --- | --- |
| Windows | [Setup](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Setup.exe) · [Portable](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-win-x64-Portable.exe) |
| macOS | [Apple Silicon](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-arm64.dmg) · [Intel](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-mac-x64.dmg) |
| Linux | [AppImage](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.AppImage) · [Flatpak](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.flatpak) · [tar.gz](https://github.com/fabwaseem/plinth/releases/latest/download/Plinth-linux-x64.tar.gz) |
| Verify | [SHA256SUMS](https://github.com/fabwaseem/plinth/releases/latest/download/SHA256SUMS) |

[**最新リリースを入手 →**](https://github.com/fabwaseem/plinth/releases/latest)

### <a id="windows-first-launch"></a>Windows 初回起動

初回起動時に **«Windows protected your PC»** または **«Unknown publisher»** が表示されることがあります。これは `Plinth-win-x64-Setup.exe` と `Plinth-win-x64-Portable.exe` の両方に該当します。Plinth は無料のオープンソースソフトウェアであり、Windows ビルドには有料の証明書によるコード署名がないため、SmartScreen がフラグを立てます。これは Plinth が危険であることを**自動的に**意味するわけではありません。続行するには：

<img src="../../build/win-smartscreen-more-info.png" width="420" alt="SmartScreen "Windows protected your PC" dialog with the "More info" link highlighted" />
<img src="../../build/win-smartscreen-run-anyway.png" width="420" alt="SmartScreen dialog after expanding More info, showing the "Run anyway" button" />

1. **More info** をクリック。
2. **Run anyway** をクリック。

#### Windows Defender がファイルをフラグまたは削除した場合

Defender のヒューリスティックは、署名されていない NSIS インストーラーや Electron のポータブル版を不審として検出することがあります。Defender が `Plinth-win-x64-Setup.exe` または `Plinth-win-x64-Portable.exe` を隔離した場合は、**Windows Security → Virus & threat protection → Protection history** から復元し、**Manage settings → Add or remove exclusions** で Plinth の実行ファイルを許可リストに追加してください。SmartScreen と同様に、トリガーとなるのは発行元署名の欠如であり、マルウェアの検出ではありません。

> Plinth は必ず公式の GitHub Releases ページからダウンロードしてください。他のウェブサイトから入手したファイルや、誰かから送られてきたファイルは削除し、公式ソースから新しいコピーをダウンロードしてください。ソースコードは公開されているため、ご自身で確認したり、Plinth をビルドしたりすることも可能です。

Scoop をお使いですか？ `scoop bucket add plinth https://github.com/fabwaseem/scoop-bucket && scoop install plinth`

### <a id="macos-first-launch"></a>macOS 初回起動

Plinth はまだ macOS 向けにコード署名されていないため、DMG からインストールした後に Gatekeeper が *"Plinth.app is damaged and can't be opened"* という怖いダイアログを表示することがあります。これは macOS が未署名アプリを quarantine したという意味で、アプリのファイルが実際に壊れているわけではありません。現在の macOS では Terminal を使う方法が確実です:

1. マウントした DMG から `Plinth.app` を `/Applications` にドラッグ。
2. Terminal を開き、次の 2 つのコマンドを実行します:

```bash
xattr -dr com.apple.quarantine /Applications/Plinth.app
open /Applications/Plinth.app
```

最初のコマンドは、インストール済みの Plinth から quarantine 属性を削除します。2 つ目はアプリを起動します。`sudo` は Mac のパスワードを求めることがあります。Terminal は入力中の文字を表示しません。

**Apple Silicon vs Intel：** M シリーズ Mac（M1 / M2 / M3 / M4）では `arm64` DMG をダウンロード。Intel Mac では `x64` DMG をダウンロード。誤ったビルドも Rosetta 経由で動作しますが、速度は明らかに遅くなります。

> macOS ビルドは Apple Silicon と Intel の CI ランナーで生成されます。問題が発生した場合は [issue を開いて](../../issues) ください — macOS ユーザーからのフィードバックが macOS のテストサイクルを積極的に形成します。

### <a id="why-warning"></a>警告が表示される理由

Plinth はオープンソースで MIT ライセンスのソフトウェアです。Windows および macOS のビルドは**コード署名されていません** — Apple Developer ID と Windows EV のコード署名証明書はそれぞれ年間数百ドルかかり、個人プロジェクトでは自己負担になります。署名がない場合、Windows SmartScreen と macOS Gatekeeper は初回起動時に警告を表示します。これらの警告は*OS が発行元を認識していない*ことを意味するものであり、Plinth がマルウェアであることを示すものではありません。

自分で Plinth を検証する 3 つの方法（厳密さの高い順）：

- **ソースコードを読む。** すべての行は [GitHub](https://github.com/fabwaseem/plinth) にあり、[ソースからビルド](#tech)することもできます。
- **SHA256 を確認する。** ダウンロードしたファイルを公開済みの [`SHA256SUMS`](../../releases/latest) と照合してください — 下記の[ダウンロードの検証](#verify)を参照。
- **サードパーティのスキャンを実行する。** [VirusTotal](https://www.virustotal.com) にファイルをアップロード。

### <a id="linux-first-launch"></a>Linux 初回起動

AppImage はインストール不要で直接実行できます。ファイルを実行可能としてマークするだけです。

**ファイルマネージャー：** `.AppImage` を右クリック → **プロパティ** → **権限** → **プログラムとして実行を許可** を有効化、ダブルクリックで起動。

**ターミナル：**

```bash
chmod +x Plinth-linux-x64.AppImage
./Plinth-linux-x64.AppImage
```

それでも起動しない場合は、マウントせずに実行してください。FUSE パッケージは不要です：

```bash
./Plinth-linux-x64.AppImage --appimage-extract-and-run
```

**省略可能なデスクトップ統合：** [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) を一度インストールしておくと、ダブルクリックした AppImage が自動的にランチャーメニューに登録されます — `.desktop` ファイルの手動作成は不要です。

**通常のアーカイブ（FUSE 不要、インストール不要）：**

`.tar.gz` 版は AppImage のラッパーを外した同じアプリです。好きな場所に展開して実行するだけで、インストーラーも FUSE パッケージも不要です。

```bash
tar xzf Plinth-linux-x64.tar.gz
./Plinth-linux-x64/plinth
```

**リリースページの Linux ダウンロードは x86_64 のみです。** ARM64 マシン（Raspberry Pi、Asahi Linux）では Flatpak はインストールできますが、起動時に `bwrap: execvp ldconfig: Exec format error` で失敗します。

<details>
<summary><strong><a id="verify"></a>ダウンロードの検証（SHA256）</strong></summary>

各リリースではバイナリと一緒に `SHA256SUMS` ファイルが公開されています。ダウンロードが転送中に破損または改ざんされていないことを確認するには、ファイルをローカルでハッシュ計算し、`SHA256SUMS` の該当行と照合してください。最新リリースページを開き → **Assets** → `SHA256SUMS` をダウンロード。

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

サードパーティのマルウェアスキャンを希望する場合は、[VirusTotal](https://www.virustotal.com) にファイルをアップロードしてください。マイナーなエンジンによる汎用ヒューリスティックの数件の検出は、署名されていない Electron アプリでは通常の範囲内です。主要エンジンによる広範な検出があれば、それは本物の懸念事項です。

</details>

<details>
<summary><strong>Windows：インストーラ vs ポータブル</strong></summary>

| | NSIS インストーラ | ポータブル `.exe` |
| --- | --- | --- |
| インストール必要 | はい | いいえ — どこからでも実行可能 |
| 自動アップデート | ✅ アプリ内 | ❌ 手動ダウンロード |
| 起動速度 | ✅ 速い | ⚠️ コールドスタートが遅め |
| スタートメニューに追加 | Yes | No |
| 簡単アンインストール | Yes | ❌ ファイルを削除するだけ |

**おすすめ：** 自動アップデートと高速起動には NSIS インストーラを使用。インストール不要・レジストリ非変更のオプションにはポータブル `.exe` を使用。

</details>

---

## <a id="why"></a>なぜ Plinth？

Plinth はひとつのことのために作られています：URL を貼って、クリーンなローカルファイルを得る。アップセルなし、データ収集なし。

| | Plinth |
| --- | --- |
| 無料、プレミアム層なし | Yes |
| オープンソース | Yes |
| ローカル処理のみ | Yes |
| 利用回数制限なし | Yes |
| クロスプラットフォームのデスクトップアプリ | Yes |
| 字幕 + SponsorBlock | Yes |

---

## <a id="privacy"></a>プライバシー

ダウンロードは [yt-dlp](https://github.com/yt-dlp/yt-dlp) 経由で YouTube から選択したフォルダへ直接取得されます — サードパーティのサーバーは経由しません。視聴履歴、ダウンロード履歴、URL、ファイルの内容はすべてあなたのデバイスに留まります。

Plinth は [OpenPanel](https://openpanel.dev) 経由で匿名・集計されたテレメトリーを送信します — 障害、クラッシュ、フィードバック、OS、アプリバージョンを把握するための最低限だけです。URL、動画タイトル、ファイルパス、アカウント情報、フィンガープリンティング、個人データはありません。インストールごとの ID はランダムで、あなたの身元には結びつきません。設定からオプトアウトできます。

Explore は、ブラウザーとは別に独自のサインインを保持します。Plinth がサインインフォームを読み取ったり入力したりすることはなく、入力するのは Google 自身のページです。ダウンロードはサインアウトの状態で実行され、アカウントで解決できる理由で失敗したときだけ、Plinth はサインイン情報をその都度読み取り、そのダウンロード用の一時ファイルに保存して、終了後にファイルを削除します。設定で Explore をサインアウトすると、サインインは消去されます。

---

## <a id="faq"></a>よくある質問

**本当に無料ですか？**
はい — MIT ライセンス、プレミアム層なし、機能ゲートなし。

**どの動画品質をダウンロードできますか？**
YouTube が提供するすべて：4K UHD（2160p）、1440p、1080p、720p、480p、360p、音声のみ。60 fps、120 fps、HDR ストリームはそのまま保存されます。

**音声を MP3 として抽出できますか？**
はい。形式メニューで*音声のみ*を選び、MP3、M4A/AAC、Opus、WAV を選択できます。

**YouTube アカウントが必要な動画はどうやってダウンロードしますか？**
Explore タブで一度サインインしてください。すると Plinth は、アカウントで視聴できる非公開動画やメンバー限定動画、年齢確認済みアカウントなら年齢制限付き動画、「後で見る」や「高く評価した動画」のリストもダウンロードできます。サインインはアカウントで解決できる理由でダウンロードに失敗したときだけ使われ、それ以外は従来どおりダウンロードされます。これは Cookie 設定の **Explore サインイン** で、先頭に表示され「おすすめ」と示されており、初めて Explore を開いたときに Plinth が自動で選択します。yt-dlp の wiki は [サインイン状態での自動化が Google アカウントにフラグを立てる可能性がある](https://github.com/yt-dlp/yt-dlp/wiki/Extractors#exporting-youtube-cookies) と注意しているため、サブアカウントの利用が安全です。

**YouTube が変更したら使えなくなりますか？**
yt-dlp は起動時に自動更新され、YouTube に変更があれば Plinth も迅速に修正をリリースします。YouTube からボットでないことの確認を求められた場合は、Explore でサインインしていれば Plinth がそのサインインも試し、Cookie 設定ではファイルやブラウザーの Cookie も利用できます。

**Plinth は何言語に対応していますか？**
すぐに使える 30 言語: Afaan Oromoo · Bahasa Indonesia · Deutsch · English · Español · Français · Italiano · Kiswahili · O'zbekcha · Polski · Português · Tiếng Việt · Türkçe · አማርኛ · العربية · اردو · پښتو · فارسی · বাংলা · हिन्दी · ไทย · မြန်မာဘာသာ · Ελληνικά · Русский · Српски · Українська · 中文 · 日本語 · 한국어 · 繁體中文。 Plinth は初回起動時にオペレーティング システムの言語を自動検出し、ツールバーの言語ピッカーからいつでも切り替えられます。 Runtime locale JSON は src/shared/i18n/locales/ にあり、翻訳者向けの PO catalog は i18n/locales/ にあります。貢献するには GitHub で PR を開いてください。

**他に何かインストールが必要ですか？**
いいえ。yt-dlp は初回起動時に自動ダウンロードされてマシンにキャッシュされます。ffmpeg と ffprobe はアプリに同梱されています。それ以降は追加のセットアップ不要です。

**プレイリストやチャンネル全体をダウンロードできますか？**
はい、どちらも対応しています。プレイリストまたはチャンネルのURL（例: `youtube.com/@handle`, `/channel/UC…`, `/c/Name`, `/user/Old`）を貼り付け、スキャンする件数を選んでから、リスト全体をキューに入れるか特定の動画を選べます。日付範囲フィルターは近日対応予定です。

**macOS で「アプリが壊れている」と表示される — どうすれば？**
これは macOS Gatekeeper が未署名のアプリをブロックしているだけで、実際の破損ではありません。quarantine を削除して Plinth を起動する Terminal コマンドは [macOS first launch](#macos-first-launch) を参照してください。

**YouTube の動画をダウンロードするのは合法ですか？**
個人的・私的利用については、ほとんどの法域で一般的に容認されています。YouTube の[利用規約](https://www.youtube.com/t/terms)およびあなたの地域の著作権法への準拠はあなた自身の責任です。

---

## <a id="roadmap"></a>ロードマップ

引き続き予定されている機能 — おおよその優先順位順：

| 機能 | 説明 |
| --- | --- |
| **プレイリスト・チャンネルのフィルター** | プレイリストまたはチャンネルの列挙時の日付範囲フィルター |
| **YouTube 音声トラックの優先設定** | YouTube が複数の音声トラックを提供する場合に、アプリ全体の優先言語トラックを設定し、プロファイルごとに上書き |
| **より強いリトライ復旧** | 不安定または問題のあるインターネット接続で中断されたダウンロード向けの新しいリトライ経路 |
| **本格的なダウンロードマネージャードロワー** | キュードロワーをより完全なマネージャーへ拡張し、キュー内アイテムの保存先フォルダー変更にも対応 |
| **スケジュールダウンロード** | 設定した時刻にキューを開始（夜間実行など） |
| **クリップトリミング** | 開始・終了時刻でセグメントのみをダウンロード |
| **AUR パッケージ** | Arch Linux と Omarchy に `yay -S plinth-bin` でインストール |

機能のアイデアがありますか？[リクエストを開いてください](../../issues) — コミュニティの意見が優先順位を決めます。

---

## <a id="support"></a>Plinth を支援する

Plinth は無料で MIT ライセンスです。広告も有料版もありません。時間の節約に役立っているなら、Bitcoin または Tron で開発を支援できます。アドレスは [DONATE.md](../../docs/DONATE.md) に記載しており、これが唯一の公式な情報源です。Plinth がメールやダイレクトメッセージでアドレスをお送りすることは決してありません。リポジトリへのスター、バグ報告、翻訳の改善も同じくらい助けになります。

[Bitcoin and Tron addresses](../../docs/DONATE.md)

---

## <a id="tech"></a>技術詳細

<details>
<summary><strong>スタック</strong></summary>

- **Electron** — クロスプラットフォームのデスクトップシェル
- **React 19** + **TypeScript** — UI
- **Tailwind CSS v4** — スタイリング
- **Zustand** — 状態管理
- **yt-dlp** + **ffmpeg** — ダウンロード・マルチプレクサエンジン（yt-dlp は実行時に取得、ffmpeg/ffprobe はビルド時に同梱）
- **Vite** + **electron-vite** — ビルドツール
- **Vitest** + **Playwright** — ユニットテスト・E2E テスト

</details>

<details>
<summary><strong>ソースからビルド</strong></summary>

### 前提条件 — 全プラットフォーム共通

| ツール  | バージョン | インストール |
| ------- | ------- | ------- |
| Git     | 任意    | [git-scm.com](https://git-scm.com) |
| Node.js | 24.21.0 | `mise install` または `.node-version` |
| Bun     | 1.4.2  | `mise install` または `package.json` `packageManager` |

推奨: `mise` をインストールし、checkout 内で `mise install` を実行します。mise を使わない場合は、`bun run bootstrap` の前に `.node-version` の Node.js と `package.json` の Bun を手動で有効化してください。

### Windows

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

ネイティブ rebuild には Visual Studio Build Tools と Python が必要になる場合があります。

### macOS

```bash
brew install mise
xcode-select --install
```

clone 後、checkout 内で `mise trust && mise install` を実行してください。shell がすでに `fnm`、`nvm`、または Homebrew の Bun を使っている場合は、Plinth が Node.js 24.21.0 と Bun 1.4.2 を使うように `~/.zshrc` で mise を有効化してください：

```bash
printf '
# mise
if command -v mise >/dev/null 2>&1; then
  eval "$(mise activate zsh)"
fi
' >> ~/.zshrc
exec zsh
```

### Linux（Ubuntu / Debian）

```bash
curl -fsSL https://bun.sh/install | bash

# ビルド + Electron ランタイム依存
sudo apt install -y build-essential python3 tar libgtk-3-0 libnss3 libasound2t64

# E2E テストのみ（Electron にはディスプレイが必要）
sudo apt install -y xvfb
```

### クローンして実行

```bash
git clone https://github.com/fabwaseem/plinth
cd Plinth
mise trust
mise install           # 推奨。固定バージョンのツールを手動で有効化済みならスキップ
bun run bootstrap
bun run doctor
bun run dev            # Vite renderer に接続した Electron アプリ
```

### 配布パッケージのビルド

```bash
bun run build        # 型チェック + コンパイル
bun run dist         # 現在の OS 向けパッケージ
bun run dist:win     # 対応ホストで Windows ターゲットをパッケージ
```

> `bun run bootstrap` は依存関係をインストールし、Electron アプリ依存を rebuild し、Electron を検証し、開発用の埋め込み ffmpeg/ffprobe を準備し、Playwright Chromium をインストールします。yt-dlp は実行時にアプリデータフォルダで管理され、ffmpeg と ffprobe はすべての Plinth リリースに同梱されています。

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

## 利用規約

Plinth は個人的・私的利用のみを目的としたツールです。ダウンロードが YouTube の[利用規約](https://www.youtube.com/t/terms)およびあなたの法域の著作権法に準拠することはあなた自身の責任です。権利を持たないコンテンツのダウンロード・複製・配布に Plinth を使用しないでください。開発者は誤用に対して一切の責任を負いません。

MIT ライセンス · <a href="https://github.com/fabwaseem">Waseem Anjum</a> が心を込めて制作

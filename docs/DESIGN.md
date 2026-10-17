---
name: Plinth
description: Free, open-source desktop downloader for YouTube + 2000 sites. Warm paper and charcoal, ink primary, hairline panels.
colors:
  brand: "#2b2724"
  brand-hover: "#3f3934"
  bg-base: "#f6f3ee"
  surface-glass: "#fcfaf7"
  surface-raised: "#f7f4ef"
  ink: "#221f1c"
  ink-muted: "#5c564e"
  ink-subtle: "#6d675f"
  border-hairline: "#ddd6cc"
  border-glow: "#2b272422"
  status-done: "#2d6a4a"
  status-paused: "#8f5a1e"
  status-error: "#ad3a32"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sm: "10px"
  md: "13px"
  lg: "16px"
  xl: "22px"
  2xl: "28px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0 14px"
    height: "32px"
    typography: "{typography.title}"
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
  button-ghost:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.lg}"
    height: "32px"
  panel-glass:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.2xl}"
    padding: "20px"
  input-url:
    backgroundColor: "{colors.surface-glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    height: "44px"
    padding: "0 16px"
  choice-surface-selected:
    backgroundColor: "{colors.border-glow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
---

# Design System: Plinth

## 1. Overview

**Creative North Star: "The Stone Desk"**

Plinth is a quiet work surface. The window opens onto warm stone, paper in the light sky and charcoal in the dark sky, with no colored bloom behind the content. Panels are solid, slightly raised, and edged with a hairline. The one signal is ink: a near-black primary on paper, an ivory primary on charcoal. Status colors stay muted and only speak for queue state.

Navigation stays a horizontal tab bar under a slim title bar. The primary screen is still a vertical flow: URL input, the split Quick Download control, then the action rows. Rounding is tighter than the old aurora console so the tool reads as precise rather than glowing.

Navigation lives in a horizontal tab bar at the top (URL / Profiles / Settings), under a slim title bar. The primary screen is a vertical flow, not a grid: URL input → split Quick Download/profile control → Interactive / Bulk rows → helper copy with the capability matrix.

**Key Characteristics:**
- Two skies: warm paper in light, warm charcoal in dark. The primary ink flips so it stays high-contrast.
- No blue, violet, or aurora bloom. Color is status or the ink primary, never atmosphere.
- Solid panels with a hairline edge and a short shadow. Glass blur stays light so type stays readable.
- Tighter rounding (12px base) so the tool reads precise.
- Poppins throughout; JetBrains Mono for sizes, codes, byte counts.
- Friendly, human copy ("Pull it! ↓", "Fetch formats →"), never corporate.

## 2. Colors

Ink carries identity across two warm skies, paper in light and charcoal in dark. Status colors stay desaturated and speak only for queue state.

### Primary
- **Ink** (`hsl(28 12% 16%)` in light, `hsl(36 18% 90%)` in dark): The one voice. Primary fills, selection rings, focus, and progress. It flips with the sky so the button stays high-contrast. There is no colored glow under it.
- **Hover:** `color-mix` of the primary toward white. A lighter press, not a second hue.

### Neutral — Dark (charcoal)
- **Charcoal** (`hsl(30 6% 7%)`): App background. Warm near-black, no navy.
- **Panel** (`hsl(30 5% 10%)` at high opacity): Default surface. Solid enough that the backdrop does not tint the type.
- **Raised** (`hsl(30 5% 12%)`): Popovers and dropdowns.
- **Ivory** (`hsl(40 16% 94%)`): Primary text.
- **Ivory muted** (`hsl(34 8% 70%)`): Secondary text.
- **Hairline** (`hsl(36 8% 100% / 0.08)`): Border. No colored edge.

### Neutral — Light (paper)
- **Paper** (`hsl(40 18% 96%)`): App background. Warm, not cool blue.
- **Panel** (`hsl(40 28% 99%)`): Default surface.
- **Raised** (`hsl(40 33% 99%)`): Popovers and dropdowns.
- **Ink** (`hsl(30 10% 12%)`): Primary text.
- **Ink muted** (`hsl(30 6% 36%)`): Secondary text.
- **Hairline** (`hsl(34 12% 84%)`): Border.

### Tertiary (status only)
- **Done** (`hsl(152 36% 28%)` light / `hsl(152 42% 48%)` dark): Completed jobs.
- **Paused** (`hsl(32 64% 34%)` light / `hsl(36 72% 58%)` dark): Paused jobs and warnings.
- **Error** (`hsl(4 62% 42%)` light / `hsl(4 72% 62%)` dark): Failed jobs and destructive actions. Always paired with an icon and text.

### Named Rules
**The Two-Sky Rule.** Paper and charcoal are the only skies. The ink signal flips so contrast holds. Toggling mode should feel like the same desk under different light.

**The Hairline Rule.** Panels are edged with a 1px hairline and a short shadow. No cyan, blue, or violet gradient borders, and no outer bloom.

**The One Voice Rule.** Ink is the only non-status accent. Saturated fill is reserved for the primary action and the current selection.

**The Quiet Canvas Rule.** The background is a flat warm field. It does not glow, animate, or show a photograph.

**The Status-Plus-Icon Rule.** Done / Paused / Error never communicate by color alone. Every status color ships with an icon and a text label.

## 3. Typography

**Display / Body Font:** Poppins (with `sans-serif` fallback). One family, weight-driven hierarchy.
**Mono Font:** JetBrains Mono (with `monospace`). Filesizes, byte counts, format codes, resolutions, percentages, durations.

**Character:** Poppins is geometric, round, and friendly, the typographic half of "approachable." Its circular bowls echo the generous panel rounding. JetBrains Mono handles anything tabular so numbers don't jitter as they tick. Do not reintroduce Outfit or Geist; do not add a third UI family.

### Hierarchy
- **Display** (700, 1.5rem/24px, -0.02em): Screen-level titles ("Download input"). One per view.
- **Headline** (600, 1.125rem/18px, -0.01em): Card titles ("Quick Download"), dialog titles.
- **Title** (600, 0.9375rem/15px): Button labels, row titles, the active profile name.
- **Body** (400, 0.875rem/14px, 1.5): Descriptions, helper text, prose. Cap prose at 65-75ch.
- **Label** (600, 0.6875rem/11px, 0.08em, UPPERCASE): Section eyebrows ("ACTIVE PROFILE", "SAVE TO", stepper captions, table headers). Reserved for ≤4-word labels; never sentences. Always rendered through `SectionLabel` (or the `text-label` token), never restated by hand. It was 9px; that was unreadable in non-Latin scripts.
- **Caption** (0.6875rem/11px): Timestamps, counts, hints, small badges.
- **Mono** (400, 0.8125rem/13px): Numeric/technical values inline. `font-variant-numeric: tabular-nums` so progress counters don't shift width.

### Named Rules
**The Tabular-Numbers Rule.** Any number that updates live (progress %, downloaded bytes, ETA) renders in JetBrains Mono with `tabular-nums`. Proportional digits that reflow on every tick are forbidden.

**The Uppercase-Label-Only Rule.** All-caps is for the 11px section eyebrow and small badges only. No all-caps headings, no all-caps buttons, no all-caps body. ≤4 words or it isn't a label.

## 4. Elevation

Depth is a **solid panel on a quiet field**. A hairline edge and a short shadow separate a surface from the paper or charcoal behind it. There is no colored bloom.

- **`glow-panel`** — the outermost / standalone surface (the Download input panel, the home helper card, a manage card). Solid fill, hairline (`--glow-gradient` is a neutral edge, not a hue), a faint top highlight, and a short shadow (`--panel-glow`). Frost is light (`--glass-blur`) so type stays crisp.
- **`glow-tile`** — a tile that lives *inside* a panel (the URL field and secondary action rows). Same hairline, **no backdrop blur of its own**. One blur layer per stack.
- **`quick-profile-cluster`** — the signature split Quick Download/profile control. The action half is solid ink (ivory on charcoal). The selector half is a raised paper or charcoal card. No gradient edge.

### Shadow Vocabulary

- **Panel shadow** (`--panel-glow`): a short neutral shadow under panels and tiles. Mode-aware. Not a colored bloom.
- **Primary shadow** (`--quick-action-shadow` / `--quick-cluster-shadow`): the Quick Download side and its containing split control. A short lift, not a light.
- **Edge** (`var(--glow-gradient)`): a 1px warm hairline. It does not carry cyan, blue, or violet.
- **Focus ring** (`box-shadow: 0 0 0 3px var(--ring)/0.5`): keyboard focus on any control. The ring is ink, the same hue as the primary.
- **Selection** uses the choice surface (see Components), not a colored outer glow.
- **Progress** is a solid ink bar. No glow under the indicator.

### Named Rules

**The Panel-Sits, Field-Stays Rule.** Panels are solid enough that the field does not tint the type. The background is paper or charcoal. It is never a photograph and never a colored sky.

**The One-Blur Rule.** Exactly one element in any nested stack owns the backdrop blur (the `glow-panel`); tiles inside it use `glow-tile` or quick-profile classes (no blur). Never stack backdrop-blurs.

**The No-GPU-No-Blur Rule.** Backdrop blur is only free when hardware WebGL draws the sky. Without it (CSS or static fallback, software renderer) the blur re-composites the field on the CPU every frame. On those paths (`body:not(.backdrop-webgl-active)`) glass drops its blur and gets a denser fill so text keeps 4.5:1.

**The No-Bloom Rule.** No surface gets a colored outer glow. Status is a badge with an icon and a label, not a tinted halo.

## 5. Components

### Buttons

- **Shape:** 16px radius (`{rounded.lg}`), compact 32px height. Icon buttons are square at the same height.
- **Primary:** `variant="glow"`: solid ink fill. Exactly one per view (Continue, + Queue, Save profile). It always sits last in a button row. Hover lightens the ink; disabled drops the shadow. The Quick Download half of the split control is the home screen's own primary.
- **Hover / Focus:** All buttons transition `all` ~150-200ms. Focus-visible draws the 3px brand ring.
- **Secondary / Outline / Ghost:** `outline` (strong border) carries Back, Skip, and every other secondary action; ghost is text-only until hover; `link` with `size="inline"` sits inside running text. Never restate a button's size, colour, or shadow at the call site.
- **Destructive:** Low-alpha Error Red fill (`destructive/10`) with Error Red text, not a solid red block. Hover deepens the alpha.

### Inputs / Fields

- **Style:** Solid field fill, hairline edge, 12px radius. The URL field is the hero input: taller (~44px), generous horizontal padding, and a leading link/clipboard icon. It does **not** show a trailing add button at rest; when text exists, the trailing affordance is clear (`X`) only.
- **Focus:** Border shifts to ink, 3px ink ring. The field stays quiet when active.
- **Placeholder:** Ink Subtle, but must still clear 4.5:1; "Paste a URL…" sits in muted, not faint.
- **Error / Disabled:** Error draws the destructive border + low-alpha ring; disabled drops to 50% opacity, no pointer.

### Cards / Panels

- **Card variants:** `variant="glass"` is the stage a view lives on (one per view; URL, Downloads, Profiles, Settings, and the wizard). The fill is solid enough that muted text keeps 4.5:1. `variant="inset"` is a calm sub-panel inside a stage or dialog. `Panel` = inset card + title, description, and an end-aligned action; `PanelSection` = a labelled sub-group inside a Panel. Panels never nest.
- **Corner Style:** Large, 20-28px (`{rounded.xl}`-`{rounded.2xl}`) on hero panels and the split Quick Download/profile cluster; 13-16px on list rows.
- **Background:** Solid panel over the warm field; a raised card for the active profile so it reads as the live selection.
- **Border:** Hairline at rest and on the primary surface. No colored edge.
- **Shadow Strategy:** A short shadow on the split Quick Download/profile control; everything else relies on the hairline. See Elevation.
- **Internal Padding:** 20px on hero panels, 12-16px on rows. No nested cards.

### Navigation

- **Style:** Horizontal top tab bar (URL / Downloads / Profiles / Settings) with a leading icon per tab, under a slim custom title bar (window controls + share/min/max). Active tab: ink label on a raised pill; inactive: ink muted. Tabs are the only top-level nav; no left sidebar.
- **Title bar:** Draggable region, frameless-window controls, app name + logo at the leading edge.

### Quick Download / Profile Control (signature)

- **Style:** A single split control with a hairline. The left half is the primary Quick Download action in solid ink, with an icon tile and a forward chevron. The right half is the active profile selector, raised but quieter, with the profile icon, `ACTIVE PROFILE` label, profile name, summary, and a circular chevron.
- **Behavior:** Disabled state reduces opacity and saturation when no URL is ready. Preparing state swaps the download icon for a spinner and keeps the profile context visible. The profile half opens a popover for switching, editing, creating, or managing profiles.

### Choice Surfaces (signature)

- **One look for "selectable", one for "selected", everywhere.** The `choice-surface` utility: a warm fill with a hairline at rest; selected deepens the fill and draws an ink ring. Selection is driven by the control's own state (a checked radio or checkbox inside, a pressed toggle, or `data-selected`), never by per-screen classes. Selected text uses `text-selected-foreground`. The ink lives in the fill and the ring; the label stays readable.
- **ChoiceRow:** a row in a `RadioGroup` (format and audio rows): radio, label, end-aligned metadata. The whole row selects; arrow keys move through the group.
- **CheckRow:** the checkbox sibling for multi-select grids (SponsorBlock categories, subtitle languages).
- **OptionCard:** a `ToggleGroupItem` card, vertical (icon over title over description: download type, quick presets, playlist tiers) or horizontal (icon, title, end meta: save location).
- **Profile cards** use the same surface with `data-selected`.

### Settings Rows

- `SettingRow`: label (+ description or a `HelpTip`) on the start side, control on the end side. `SettingSwitch` is the boolean form. Every settings surface (Settings tab, profile editor, Output step) uses these rows; booleans are always a Switch, never an Off/On segmented control.

### Notices

- `Alert` with a status variant (`info`, `success`, `warning`, `destructive`), icon as the first child (the variant colours it), `AlertAction` for dismiss. `size="sm"` for compact inline notices. Validation messages are `FieldError`, never coloured text.

### Speech Bubble and Icon Tile

- `SpeechBubble` is the shared hint: popover surface, strong border, a tail on any side (RTL-aware).
- `IconTile` carries one icon before a title: `lit` (the raised neutral chip, home entry points) or `soft` (ink tint, headers and cards).

### Tip / Helper card (signature)

- A friendly, low-stakes glass card with a short contextual title/body, three checkmarked helper bullets, and a capability matrix. The matrix names YouTube and 2000+ sites, using recognizable site logos and tooltip badges for details. Warm, human, never a modal. It teaches without blocking.

### Queue (signature)

- A virtualized table inside the Downloads glass stage: thumbnail, title, a status `Badge` (secondary / info / warning / success / destructive, always with an icon and a label), progress, format, artifacts. Status never reads by colour alone.

### Wizard

- The wizard sits on the same panel as the tabs: stepper at the top of the stage, the step's content, and a sticky footer that is the stage's bottom bar (it pins to the window bottom while a long step scrolls). Footer order is Back, secondary actions, then the one ink primary last.

## 6. Do's and Don'ts

### Do:
- **Do** keep ink as the One Voice: one solid primary per calm screen, color for status only.
- **Do** keep panels solid on the warm field. Frost the panel lightly; never blur or color the background.
- **Do** render live numbers in JetBrains Mono with `tabular-nums`.
- **Do** pair every status color with an icon and text (color blindness + every supported locale incl. RTL).
- **Do** ship both skies as peers: charcoal and paper, the same ink signal flipped for contrast, the same status colors.
- **Do** keep rounding tight (12px base) so the tool reads precise.
- **Do** honor `prefers-reduced-motion`: glows stay (they're static state), but slide/float/shimmer/pulse animations collapse to instant or crossfade.
- **Do** keep copy human and plain ("Pull it! ↓", "Fetch formats →"), verb + object on every button.

### Don't:
- **Don't** let it look like a **sketchy downloader site**: no ad-shaped blocks, no fake-button bait, no upsell chrome. The clean glass surface is the proof of trust.
- **Don't** ship the **generic gray SaaS dashboard** or the identical icon+heading+text card grid. The desk is warm stone, not cool gray.
- **Don't** expose **raw yt-dlp flag soup**; depth (formats, SponsorBlock, subtitle modes) lives behind the friendly wizard, never in the newcomer's face.
- **Don't** make it a **bloated legacy media suite**: no modal stacks, no clutter. Exhaust inline/progressive before reaching for a modal.
- **Don't** blur the background canvas or stack backdrop-blurs (One-Blur Rule). Blurring blurred glass turns it to mud and costs frames.
- **Don't** paint a blue, violet, or aurora bloom behind the UI, or light panel edges with a colored gradient.
- **Don't** treat light mode as a second-class recolor; both skies are designed peers.
- **Don't** use side-stripe borders (`border-left`/`right` > 1px as a colored accent), gradient text (`background-clip: text`), or all-caps body copy.
- **Don't** reintroduce Outfit or Geist, or add a third UI font family.
- **Don't** use em dashes in UI copy; use commas, colons, periods, or parentheses.

## 7. Implementation Contract

- **Primitives** live in `src/renderer/src/components/ui/` (shadcn base-nova, customised there and only there). **Composites** live in `components/shared/`: `SectionLabel`, `SettingRow`, `SettingSwitch`, `HelpTip`, `Panel`, `PanelSection`, `ChoiceRow`, `CheckRow`, `OptionCard`, `IconTile`, `SpeechBubble`.
- Screens compose these; they do not restate sizes, colours, radii, or shadows. `tests/unit/ui-consistency-ratchet.test.ts` counts one-off values per file and only lets the count go down.
- Review any primitive or composite change in the UI Kit (`bun run dev:mock`, then `/?kit`), in both skies and in RTL.

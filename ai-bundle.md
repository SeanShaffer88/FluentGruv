# FluentGruv — AI Bundle (v1.1.0)

The complete FluentGruv spec in one file: enforcement prompt, layout specification, tokens (dark + light), the machine-readable tokens.json, and every example wireframe. Generated from the individual files in this repository at v1.1.0 — if anything differs, the individual files win.

---

# FluentGruv Enforcement Prompt for AI Coding Agents

When creating or modifying any user interface code for a Windows application, read `SPEC.md` and `TOKENS.md` in this repository first and enforce every rule below. Pull exact hex codes and spacing values from `tokens.json` (top-level `colors` is the dark theme; `themes.light` is the light theme) instead of parsing the markdown, and check the `examples/wireframe-*.txt` files for concrete layouts before planning a window.

## Mandatory Workflow
1. **Plan before coding:** Before writing or editing UI layout/component code, present a concise ASCII wireframe, list of active workspace modes/drawers, and how the layout adapts to resizing and DPI changes. Wait for approval if layout structure is non-trivial.
2. **Enforce viewport & modularity rules:**
   - Never add scrollbars to the main application window.
   - Use virtualized lists/tables for large datasets and logs.
   - Keep secondary inspectors, filters, logs, and settings in modular slide-out drawers or dockable panels that tuck away cleanly.
   - Support system-tray minimization and restore/validate window geometry against active monitors.
3. **Apply Gruvbox Dark + Red tokens:**
   - Use the Gruvbox Dark surface and text tokens (`#1D2021`, `#282828`, `#32302F`, `#EBDBB2`, `#D5C4A1`, `#A89984`) and red accent tokens (`#FB4934`, `#CC241D`, `#3B1D1B`) from `TOKENS.md`; on a Windows light-theme change, swap the whole set for the `themes.light` values in `tokens.json` — never mix themes token by token.
   - Maintain crisp contrast, symmetrical alignment, and circular/radial progress indicators where progress is shown.
4. **Preserve ergonomics & scope:**
   - Support `Tab` navigation, `Esc` to close/cancel, `Enter` to submit, and clear tooltips on controls and headers.
   - Persist state/config locally (or in a local `data/` folder for portable builds) with zero telemetry or cloud dependencies.
   - Do not add unrequested features or bloat.

---

# FluentGruv UI & Layout Specification

## 1. Core Philosophy
- **Adaptive over static:** Layouts reflow cleanly across narrow, standard, and ultra-wide Windows viewports, high-DPI displays, and high-refresh panels (60Hz–240Hz).
- **Modular over monolithic:** Secondary inspectors, filters, diagnostics, and logs live in self-contained slide-out drawers or dockable modules that tuck away cleanly when inactive.
- **Dense over airy:** Maintain crisp, symmetrical alignment and tight spacing suitable for desktop utilities while keeping text contrast legible.
- **Native & offline-first:** Built for lightweight native Windows UIs with zero web runtimes, zero cloud/telemetry dependencies, and full local/portable state persistence.

## 2. Intent-Driven Workspace Modes
- Organize views around active user intent (such as *Scan / Monitor*, *Inspect / Diff*, or *Configure / Logs*) rather than cramming every control onto one screen.
- Keep primary actions immediately accessible at the top or action bar of the active mode.
- Tuck advanced flags, raw logs, and secondary options behind progressive disclosure drawers or dedicated views.

## 3. Viewport & Docking Rules
- **No primary window scrollbars:** Never allow scrollbars on the main application window. Size or reflow views to fit standard desktop bounds cleanly.
- **Virtualized data containers only:** Confine vertical scrolling strictly to dedicated virtualized lists/tables (such as `LVS_OWNERDATA`) for large item sets, logs, or history.
- **Dock, Rail, and Drawer Reflow:**
  - Docked sidebars collapse into compact icon/label rails or slide-out drawers on narrower viewports.
  - Slide-out drawers animate quickly and cleanly over or beside the workspace and dismiss on `Esc` or outside click without trapping keyboard focus.
  - Support system-tray minimization and restore cleanly without losing state.
- **Geometry & Multi-Monitor Validation:**
  - Persist window geometry, splitter positions, drawer states, and active filters in local human-readable config (TOML or JSON, or an adjacent `data/` directory for portable builds).
  - Validate saved coordinates against active monitors (`EnumDisplayMonitors`) on launch so windows never open off-screen.

## 4. Progress, Motion & Fluent Materials
- **Circular / Radial Progress:** Prefer circular or radial progress indicators with clear numeric/throughput status readouts over generic bars or hidden stalls.
- **Crisp, purposeful motion:** Keep transitions short and responsive; never block workflows or thrash layouts during splitter/window drags.
- **Selective Fluent surfaces:** Apply Mica or Acrylic only where it improves visual hierarchy or floating drawer separation; keep text tables, logs, and dense controls high-contrast and sharp.

## 5. Keyboard Navigation & Accessibility
- Maintain logical `Tab` order across visible controls and active drawers.
- Support standard shortcuts (`Esc` to cancel/close drawers, `Enter` to submit/confirm).
- Provide descriptive tooltips on interactive controls, icon buttons, and column headers explaining action and side effects.
- Honor Windows dark/light theme changes and Per-Monitor DPI V2 scaling dynamically without requiring a restart.

---

# FluentGruv Tokens (Gruvbox Dark + Bespoke Red)

**Version 1.1.0** — machine-readable companion: `tokens.json` (`colors` = dark theme, the default; `themes.dark` / `themes.light` carry both palettes).

## 1. Color Palette (Gruvbox Dark Base + Red Accent)
Use Gruvbox Dark warm-charcoal surfaces paired with a deliberate red accent system for active states, focus rings, and critical/destructive emphasis.

### Surface & Border Tokens
- `bg.canvas` (`#1D2021`): Primary application background (Gruvbox hard dark).
- `bg.surface` (`#282828`): Standard panel and card background (Gruvbox `bg0`).
- `bg.elevated` (`#32302F`): Raised modules, drawers, and active rows (Gruvbox `bg1`).
- `bg.sunken` (`#171819`): Recessed input wells, log containers, and table tracks.
- `border.subtle` (`#3C3836`): Hairline dividers and symmetrical panel borders (Gruvbox `bg2`).
- `border.strong` (`#504945`): Active splitters and focused container frames (Gruvbox `bg3`).

### Foreground & Text Tokens
- `fg.primary` (`#EBDBB2`): Primary text and headings (Gruvbox `fg1`).
- `fg.secondary` (`#D5C4A1`): Secondary labels and metadata (Gruvbox `fg2`).
- `fg.muted` (`#A89984`): Hints, timestamps, and inactive captions (Gruvbox `fg4`; brightened from `gray` so small text clears 4.5:1 — see §4).
- `fg.inverse` (`#1D2021`): Text placed on bright red or high-contrast accent fills.

### Red Accent & Semantic Tokens
- `accent.primary` (`#FB4934`): Primary active indicator, focus ring, and key action highlight (Gruvbox bright red).
- `accent.secondary` (`#CC241D`): Pressed states, active badges, and secondary red accents (Gruvbox neutral red).
- `accent.subtle` (`#3B1D1B`): Low-glare red tint for selected rows, active drawer headers, or status pills.
- `status.success` (`#B8BB26`): Completed/healthy status indicator (Gruvbox bright green).
- `status.warning` (`#FABD2F`): Caution/pending indicator (Gruvbox bright yellow).
- `status.danger` (`#FB4934`): Error/destructive action indicator (Gruvbox bright red).

## 1b. Color Palette (Gruvbox Light)
Same token names, light values — swap the whole set on a Windows light-theme change, never mix themes token by token. Light accents use the Gruvbox light (neutral) red/green/yellow, since the bright dark-theme accents wash out on light surfaces.

### Surface & Border Tokens (Light)
- `bg.canvas` (`#F9F5D7`): Primary application background (Gruvbox light hard).
- `bg.surface` (`#FBF1C7`): Standard panel and card background (Gruvbox light `bg0`).
- `bg.elevated` (`#EBDBB2`): Raised modules, drawers, and active rows (Gruvbox light `bg1`).
- `bg.sunken` (`#F2E5BC`): Recessed input wells, log containers, and table tracks (Gruvbox light soft).
- `border.subtle` (`#D5C4A1`): Hairline dividers and symmetrical panel borders.
- `border.strong` (`#BDAE93`): Active splitters and focused container frames.

### Foreground & Text Tokens (Light)
- `fg.primary` (`#3C3836`): Primary text and headings.
- `fg.secondary` (`#504945`): Secondary labels and metadata.
- `fg.muted` (`#665C54`): Hints, timestamps, and inactive captions (Gruvbox light `fg3`; darkened from `gray` so small text clears 4.5:1 — see §4).
- `fg.inverse` (`#FBF1C7`): Text placed on red or high-contrast accent fills.

### Red Accent & Semantic Tokens (Light)
- `accent.primary` (`#CC241D`): Primary active indicator, focus ring, and key action highlight (Gruvbox light red).
- `accent.secondary` (`#9D0006`): Pressed states, active badges, and secondary red accents (Gruvbox faded red).
- `accent.subtle` (`#F9E0DC`): Low-glare red tint for selected rows, active drawer headers, or status pills (derived tint).
- `status.success` (`#98971A`): Completed/healthy status indicator (Gruvbox light green).
- `status.warning` (`#D79921`): Caution/pending indicator (Gruvbox light yellow).
- `status.danger` (`#CC241D`): Error/destructive action indicator (Gruvbox light red).
- **Focus ring (light):** `2px` solid `accent.primary` (`#CC241D`).

## 2. Geometry, Spacing & Density
- **Corner radius:** `4px` on standard controls and drawers; `2px` on compact tags/badges; `0px` on full-bleed split panes or virtualized table rows where sharp alignment is preferred.
- **Density:** Compact utility spacing (`4px` / `8px` base unit) with symmetrical margins and aligned gutters; avoid wide decorative padding that wastes viewport space.
- **Focus rings:** `2px` solid `accent.primary` (`#FB4934`) with clear offset so keyboard navigation is unmistakable.

## 3. Typography & DPI
- **UI Font:** Clean system sans-serif (`Segoe UI` / system UI) with consistent hierarchy; use monospace (`Consolas` / `Cascadia Mono` / `JetBrains Mono`) for paths, logs, metrics, and numeric readouts.
- **Tabular figures:** Enable tabular/monospaced numerals for counters, sizes, percentages, and throughput so numbers do not jitter during live updates.
- **DPI & Theme Sync:** Scale all dimensions from Per-Monitor DPI V2 and update surface/accent tokens cleanly on Windows theme changes.
## 4. Contrast (measured, WCAG ratios)
Text tokens measured against the surfaces they sit on; the floor is 4.5:1 for body and small text.

| Pair | Dark | Light |
|---|---|---|
| `fg.primary` on `bg.surface` | 10.75:1 | 10.22:1 |
| `fg.secondary` on `bg.surface` | 8.59:1 | 7.78:1 |
| `fg.muted` on `bg.surface` | 5.30:1 | 5.74:1 |
| `fg.muted` on `bg.elevated` (worst surface) | 4.72:1 | 4.75:1 |
| `accent.primary` on `bg.surface` (UI/focus, 3:1 floor) | 4.29:1 | 4.82:1 |

`fg.muted` was `#928374` in both themes in 1.0.0 (4.02:1 dark, 3.24:1 light on surface) and was brightened/darkened within the Gruvbox family to clear the floor.

---

# tokens.json (verbatim)

```json
{
  "$schema": "FluentGruv tokens \u2014 machine-readable companion to TOKENS.md",
  "colors": {
    "accent": {
      "primary": "#FB4934",
      "secondary": "#CC241D",
      "subtle": "#3B1D1B"
    },
    "bg": {
      "canvas": "#1D2021",
      "elevated": "#32302F",
      "sunken": "#171819",
      "surface": "#282828"
    },
    "border": {
      "strong": "#504945",
      "subtle": "#3C3836"
    },
    "fg": {
      "inverse": "#1D2021",
      "muted": "#A89984",
      "primary": "#EBDBB2",
      "secondary": "#D5C4A1"
    },
    "status": {
      "danger": "#FB4934",
      "success": "#B8BB26",
      "warning": "#FABD2F"
    }
  },
  "dpi": {
    "mode": "Per-Monitor DPI V2",
    "scaleAllDimensions": true,
    "syncOnThemeChange": true
  },
  "focusRing": {
    "colorToken": "accent.primary",
    "dark": "#FB4934",
    "light": "#CC241D",
    "style": "solid",
    "widthPx": 2
  },
  "name": "FluentGruv",
  "palette": "Gruvbox Dark + Bespoke Red (default) / Gruvbox Light",
  "radius": {
    "compactPx": 2,
    "fullBleedPx": 0,
    "standardPx": 4
  },
  "spacing": {
    "baseUnitPx": 4,
    "scalePx": [
      4,
      8
    ]
  },
  "themes": {
    "dark": {
      "accent": {
        "primary": "#FB4934",
        "secondary": "#CC241D",
        "subtle": "#3B1D1B"
      },
      "bg": {
        "canvas": "#1D2021",
        "elevated": "#32302F",
        "sunken": "#171819",
        "surface": "#282828"
      },
      "border": {
        "strong": "#504945",
        "subtle": "#3C3836"
      },
      "fg": {
        "inverse": "#1D2021",
        "muted": "#A89984",
        "primary": "#EBDBB2",
        "secondary": "#D5C4A1"
      },
      "status": {
        "danger": "#FB4934",
        "success": "#B8BB26",
        "warning": "#FABD2F"
      }
    },
    "light": {
      "accent": {
        "primary": "#CC241D",
        "secondary": "#9D0006",
        "subtle": "#F9E0DC"
      },
      "bg": {
        "canvas": "#F9F5D7",
        "elevated": "#EBDBB2",
        "sunken": "#F2E5BC",
        "surface": "#FBF1C7"
      },
      "border": {
        "strong": "#BDAE93",
        "subtle": "#D5C4A1"
      },
      "fg": {
        "inverse": "#FBF1C7",
        "muted": "#665C54",
        "primary": "#3C3836",
        "secondary": "#504945"
      },
      "status": {
        "danger": "#CC241D",
        "success": "#98971A",
        "warning": "#D79921"
      }
    }
  },
  "typography": {
    "monoFont": [
      "Consolas",
      "Cascadia Mono",
      "JetBrains Mono"
    ],
    "tabularFigures": true,
    "uiFont": [
      "Segoe UI",
      "system-ui"
    ]
  },
  "version": "1.1.0"
}
```


---

# examples/wireframe-utility.txt (verbatim)

```text
FluentGruv — Wireframe: Utility Workspace
=============================================
Main workspace + collapsible right drawer + collapsible bottom drawer
+ circular progress readout. No primary-window scrollbar; scrolling is
confined to the virtualized list in the workspace.

Tokens: bg.canvas #1D2021 | bg.surface #282828 | bg.elevated #32302F
        accent.primary #FB4934 (focus rings, active mode, progress arc)

+-----------------------------------------------------------------------+
| [=] MyUtility        [ Scan / Monitor ] [ Inspect / Diff ] [ Config ] |  <- Action bar: primary
|----------------------------------------------------------|------------|    actions for active mode
| MAIN WORKSPACE (Scan / Monitor)              |  PROGRESS |  RIGHT     |
|                                              |           |  DRAWER    |
|  +----------------------------------------+  |   .---.   | (collap-   |
|  | Name            Size      Status     ^ |  |  /  72% \  |  sible)    |
|  | file-a.bin      1.2 MB    Done       | |  | |   42    | |            |
|  | file-b.bin    840.0 KB    Scanning   | |  |  \ MB/s /  |  Inspect:  |
|  | file-c.bin      2.4 MB    Queued     v |  |   '---'   |  file-b.bin|
|  +----------------------------------------+  |  circular/ |            |
|  Virtualized list only scrolls (owner-data)  |  radial    |  Path:     |
|  Tabular numerals — sizes do not jitter.     |  readout   |  C:\...\b  |
|                                              |           |            |
|  [ Scan ] [ Pause ] [ Cancel ]               |  Esc or >  |  [x Close] |
|----------------------------------------------|  toggle ---+------------|
| BOTTOM DRAWER (collapsible, ^ / v toggle)                             |
|  Logs — 12:04:31 scan started · 12:04:33 file-b.bin scanning · ...    |
|  (log container scrolls internally; main window never does)           |
+-----------------------------------------------------------------------+
| Status: Scanning 2 of 3 · Drawer state + geometry persist locally     |  <- Status bar
+-----------------------------------------------------------------------+

Behaviour
---------
- Right drawer: slides over/beside workspace, Esc or outside click
  dismisses, focus returns to workspace, state persists in local config.
- Bottom drawer: collapses to a one-line strip; splitter position persists.
- Narrow viewport: right drawer becomes a slide-out overlay, sidebar
  (if any) collapses to an icon rail; workspace keeps its minimum size.
- Progress: circular arc in accent.primary, % + throughput in tabular
  monospace numerals at the centre — never a hidden stall.
- Geometry validated against EnumDisplayMonitors on launch.
```


---

# examples/wireframe-exorsyst.txt (verbatim)

```text
FluentGruv — Wireframe: ExorSyst (sample)
==========================================
Install snapshots + change inspector + guided uninstall review.
Modes: Watch / Monitor · Inspect / Diff · Review / Quarantine
Docking: tools dock Main, Right, or Bottom; layout saves locally.

+-----------------------------------------------------------------------+
| [=] ExorSyst    [ Watch ] [ Inspect ] [ Review ]        (•) Ready     |
|----------------------------------------------------------|------------|
| MAIN WORKSPACE (Watch)                       |  BASELINE |  RIGHT     |
|                                              |           |  DRAWER    |
|  Scopes to compare:                          |   .---.   | (dockable) |
|  [x] Folders: C:\Program Files\...           |  / Ready \  |            |
|  [x] Registry: HKLM\Software subtrees        | |   ---   | |  Change    |
|  [ ] Services        (read-only opt-in)      |  \       /  |  inspector |
|  [ ] Scheduled tasks (read-only opt-in)      |   '---'   |            |
|                                              |  idle /   |  Filter:   |
|  [ Take baseline ]  -> install -> [ Compare ]|  coverage |  [ path.. ]|
|                                              |  readout  |  Kind: All |
|  Changes (virtualized, owner-data):          |           |  Dates: .. |
|  +----------------------------------------+  |           |            |
|  | + file   C:\...\new.dll      Added   |  |           |  [ Export   |
|  | ~ reg    HKLM\...\Run       Changed |  |           |    JSON ]  |
|  | - file   C:\...\old.tmp      Removed |  |           |  [ Report ]|
|  +----------------------------------------+  |           |            |
|----------------------------------------------|-----------+------------|
| BOTTOM DRAWER (collapsible) — Quarantine review                       |
|  Exact files only: [x] old.tmp  [ ] new.dll   [ Hold files ]          |
|  Restore never overwrites an existing destination.                    |
+-----------------------------------------------------------------------+
| Baseline 12:01 · Compare 12:09 · 3 changes · layout + scopes persist  |
+-----------------------------------------------------------------------+

Behaviour
---------
- Esc closes the drawer, focus returns to the change list.
- Quarantine is a previewed, reversible move — never a silent delete.
- Coverage is stated honestly: scopes skipped are shown, not hidden.
```


---

# examples/wireframe-yttraydl.txt (verbatim)

```text
FluentGruv — Wireframe: ytTrayDL (sample)
==========================================
Tray-first yt-dlp downloader. Lives in the system tray; clipboard
listener -> rules engine -> small popup or silent download.
Surfaces: tray popup (primary) + download manager window.

Tray popup (appears on a supported copied link)
+---------------------------------------------+
| ytTrayDL — link detected                    |
| [thumb] Big Buck Bunny — 10:34              |
|         youtube.com · 1080p · ~84.2 MB      |
| Format: [ 1080p MP4 v ] [ Audio only ]      |
| Folder: [ Downloads\Video        ] [ ... ]  |
| [ Download ] [ Save for later ] [ Ignore ]  |
| Esc dismisses · domain rules can auto-skip  |
+---------------------------------------------+

Download manager (opened from the tray menu)
+-----------------------------------------------------------------------+
| [=] ytTrayDL Downloads          [ Queue ] [ Later ] [ Rules ]         |
|----------------------------------------------------------|------------|
| QUEUE (virtualized)                          |  OVERALL  |  RIGHT     |
| +----------------------------------------+   |           |  DRAWER    |
| | > video-1   1080p   84.2 MB  42.1 MB/s|   |   .---.   |            |
| |   video-2    720p   Queued            |   |  /  63% \  |  Rules:    |
| | x video-3    ---    Failed [ Retry ]  |   | |  18.4   | |  Known     |
| +----------------------------------------+   |  \ MB/s /  |  sites only|
|                                              |   '---'   |  [x] Auto  |
| [ Paste links ] [ Clear finished ]           |  circular |  download  |
|                                              |  readout  |  Ignore:   |
| Disk guard: 12.4 GB free — pause under 2 GB  |           |  [ domain ]|
|----------------------------------------------|-----------+------------|
| BOTTOM DRAWER (collapsible) — yt-dlp log (scrolls internally)         |
|  [download]  63.2% of 84.2 MB at 42.1 MB/s ETA 00:01 ...              |
+-----------------------------------------------------------------------+
| Tray: downloading 1 of 3 · queue-empty action: Do nothing v           |
+-----------------------------------------------------------------------+

Behaviour
---------
- Tray icon can be hidden; right-click tray menu configures everything.
- Silent mode: defaults download with no popup at all.
- Failure shows in place with one-click Retry — never a hidden stall.
```


---

# examples/wireframe-safereturn.txt (verbatim)

```text
FluentGruv — Wireframe: SafeReturn (sample — Muse's pick)
===========================================================
Full-disk backup & recovery for ordinary users.
Modes: Backup · Verify · Recovery Rehearsal / Restore

+-----------------------------------------------------------------------+
| [=] SafeReturn  [ Backup ] [ Verify ] [ Rehearsal ]     (•) Idle     |
|----------------------------------------------------------|------------|
| MAIN WORKSPACE (Backup)                      |  BACKUP   |  RIGHT     |
|                                              |           |  DRAWER    |
|  Source:  [ This PC — Disk 0 (476 GB) v ]    |   .---.   | (collap-   |
|  Target:  [ E:\ SafeReturn (1.2 TB free) v ] |  /  47% \  |  sible)    |
|                                              | |  212    | |            |
|  [x] Bootable backup (system + files)        |  \ MB/s /  |  Details:  |
|  [x] Verify after backup                     |   '---'   |  VSS snap- |
|  [ ] Encrypt (off by default, explained)     |  circular |  shot OK   |
|                                              |  readout  |  Files:    |
|  History (virtualized):                      |           |  184,203   |
|  +----------------------------------------+  |  ETA      |  Skipped:  |
|  | Nov 22  Full   Verified OK           |  |  00:18    |  0         |
|  | Nov 15  Full   Verified OK           |  |           |            |
|  +----------------------------------------+  |           |  [ Pause ] |
|  [ Start backup ] [ Cancel ]                 |           |  [ Cancel ]|
|----------------------------------------------|-----------+------------|
| BOTTOM DRAWER (collapsible) — Recovery Rehearsal                      |
|  Last rehearsal: Nov 22 — restored to a spare disk in a test boot OK. |
|  [ Run rehearsal ]  Test your recovery before a crisis.               |
+-----------------------------------------------------------------------+
| Plain words first: what will happen, how long, how to undo.           |
+-----------------------------------------------------------------------+

Behaviour
---------
- Progress is the circular readout + MB/s + ETA — never a bare bar.
- Verify and Rehearsal are first-class modes, not buried settings.
- Esc cancels the drawer; a running backup is never cancelled by Esc.
```


---

# examples/wireframe-roomforge.txt (verbatim)

```text
FluentGruv — Wireframe: RoomForge (sample — Muse's pick)
===========================================================
Room planner: draw rooms to scale, place furniture in 2D, view in 3D.
Modes: Plan / 2D · View / 3D · Print / Share. No prices, ever.

+-----------------------------------------------------------------------+
| [=] RoomForge   [ Plan ] [ 3D View ] [ Print ]      Grid: 0.5 m  Snap |
|----------------------------------------------------------|------------|
| CANVAS (Plan, to scale)                      |  PLAN     |  RIGHT     |
|                                              |           |  DRAWER    |
|   0m        2m        4m        6m           |   .---.   | (collap-   |
|   +-----------+[door]+-----------+           |  / 100% \  |  sible)    |
|   | [sofa]              [window] |           | |  fit    | |            |
|   |                              |           |  \       /  |  Inspector:|
|   |        [ rug ]      [table]  |           |   '---'   |  Sofa      |
|   | [socket]                     |           |  canvas   |  W 2.0 m   |
|   +---[window]-------------------+           |  fit ring |  D 0.9 m   |
|                                              |           |  Rotate: 0 |
|  Tools: [Wall][Door][Window][Socket][Pipe]   |           |            |
|         [Furniture v] [Measure] [Undo]       |           |  [ Delete ]|
|----------------------------------------------|-----------+------------|
| BOTTOM DRAWER (collapsible) — Product list (no prices)                |
|  Sofa x1 · Rug x1 · Table x1 · Lamp x2 — from this plan only.          |
+-----------------------------------------------------------------------+
| Plan autosaves as you go · reopening restores the exact view + zoom.  |
+-----------------------------------------------------------------------+

Behaviour
---------
- Canvas never scrolls the main window: pan/zoom inside the canvas,
  circular fit readout shows zoom % in tabular numerals.
- Inspector lives in the right drawer; selecting on canvas opens it,
  Esc closes it and returns focus to the canvas.
- Splitters, drawer state, and zoom persist per plan, locally.
```

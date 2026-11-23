# FluentGruv Tokens (Gruvbox Dark + Bespoke Red)

**Version 1.2.0** — machine-readable companion: `tokens.json` (`colors` = dark theme, the default; `themes.dark` / `themes.light` carry both palettes).

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
- `fg.primary` (`#282828`): Primary text and headings (Gruvbox light `fg0`).
- `fg.secondary` (`#3C3836`): Secondary labels and metadata (Gruvbox light `fg1`) — a full step above `fg.muted`, so the two never blur together.
- `fg.muted` (`#665C54`): Hints, timestamps, and inactive captions (Gruvbox light `fg3`; darkened from `gray` so small text clears 4.5:1 — see §4).
- `fg.inverse` (`#FBF1C7`): Text placed on red or high-contrast accent fills.

### Red Accent & Semantic Tokens (Light)
- `accent.primary` (`#CC241D`): Primary active indicator, focus ring, and key action highlight (Gruvbox light red).
- `accent.secondary` (`#9D0006`): Pressed states, active badges, and secondary red accents (Gruvbox faded red).
- `accent.subtle` (`#F4D2AE`): Low-glare red tint for selected rows, active drawer headers, or status pills. Defined by rule, not picked: `accent.primary` blended at 15% over `bg.surface` — recompute it the same way if either parent changes.
- `status.success` (`#79740E`): Completed/healthy status indicator (Gruvbox faded green — the neutral light green measured under the 3:1 floor on light surfaces).
- `status.warning` (`#AF3A03`): Caution/pending indicator (Gruvbox faded orange — the darkest caution hue in the family; the light yellows measured under the floor).
- `status.danger` (`#CC241D`): Error/destructive action indicator (Gruvbox light red).
- **Focus ring (light):** `2px` solid `accent.primary` (`#CC241D`).

## 2. Geometry, Spacing & Density
- **Corner radius:** `4px` on standard controls and drawers; `2px` on compact tags/badges; `0px` on full-bleed split panes or virtualized table rows where sharp alignment is preferred.
- **Density:** Compact utility spacing (`4px` / `8px` base unit) with symmetrical margins and aligned gutters; avoid wide decorative padding that wastes viewport space.
- **Focus rings:** `2px` solid `accent.primary` (`#FB4934`) with clear offset so keyboard navigation is unmistakable.

## 2b. Fluent Materials (Mica / Acrylic)
Materials are tokenized so agents apply them by value, not by feel — also in `tokens.json` under `materials`.

- `material.mica`: base = `bg.canvas` (dark `#1D2021`, light `#F9F5D7`). Use on the main window backdrop only. Fallback: solid `bg.canvas` when Mica is unavailable (Windows 10, remote desktop) or the user has transparency off.
- `material.acrylic`: tint = `bg.surface` at 70% opacity over the backdrop, for floating drawers and popups only — never under dense text, tables, or logs. Fallback: solid `bg.surface` at 100% opacity.
- Text and controls always sit on the solid token colors above, never directly on a material at reduced opacity.

## 3. Typography & DPI
- **UI Font:** Clean system sans-serif (`Segoe UI` / system UI) with consistent hierarchy; use monospace (`Consolas` / `Cascadia Mono` / `JetBrains Mono`) for paths, logs, metrics, and numeric readouts.
- **Tabular figures:** Enable tabular/monospaced numerals for counters, sizes, percentages, and throughput so numbers do not jitter during live updates.
- **DPI & Theme Sync:** Scale all dimensions from Per-Monitor DPI V2 and update surface/accent tokens cleanly on Windows theme changes.
## 4. Contrast (measured, WCAG ratios)
Text tokens measured against the surfaces they sit on; the floor is 4.5:1 for body and small text, 3:1 for large text, status glyphs, and UI/focus indicators. Disabled text is exempt from the floor by WCAG, but FluentGruv disabled text uses `fg.muted` at full strength — never a faded alpha blend — so it stays as legible as muted allows.

| Pair | Dark | Light |
|---|---|---|
| `fg.primary` on `bg.canvas` | 11.95:1 | 13.39:1 |
| `fg.primary` on `bg.surface` | 10.75:1 | 12.99:1 |
| `fg.primary` on `bg.elevated` | 9.57:1 | 10.75:1 |
| `fg.primary` on `bg.sunken` | 12.96:1 | 11.73:1 |
| `fg.secondary` on `bg.surface` | 8.59:1 | 10.22:1 |
| `fg.muted` on `bg.surface` | 5.30:1 | 5.74:1 |
| `fg.muted` on `bg.elevated` | 4.72:1 | 4.75:1 |
| `fg.primary` on `accent.subtle` (selected row) | 11.11:1 | 10.30:1 |
| `fg.inverse` on `accent.primary` (filled accent) | 4.77:1 | 4.82:1 |
| `status.success` on `bg.surface` | 7.14:1 | 4.29:1 |
| `status.warning` on `bg.surface` | 8.69:1 | 5.40:1 |
| `status.danger` on `bg.surface` | 4.29:1 | 4.82:1 |

`fg.muted` was `#928374` in both themes in 1.0.0 (4.02:1 dark, 3.24:1 light on surface) and was brightened/darkened within the Gruvbox family to clear the floor.

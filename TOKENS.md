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
- `fg.muted` (`#928374`): Hints, timestamps, and inactive captions (Gruvbox `gray`).
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
- `fg.muted` (`#928374`): Hints, timestamps, and inactive captions (Gruvbox gray, both themes).
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
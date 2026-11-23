# FluidStandard Tokens (Gruvbox Dark + Bespoke Red)

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

## 2. Geometry, Spacing & Density
- **Corner radius:** `4px` on standard controls and drawers; `2px` on compact tags/badges; `0px` on full-bleed split panes or virtualized table rows where sharp alignment is preferred.
- **Density:** Compact utility spacing (`4px` / `8px` base unit) with symmetrical margins and aligned gutters; avoid wide decorative padding that wastes viewport space.
- **Focus rings:** `2px` solid `accent.primary` (`#FB4934`) with clear offset so keyboard navigation is unmistakable.

## 3. Typography & DPI
- **UI Font:** Clean system sans-serif (`Segoe UI` / system UI) with consistent hierarchy; use monospace (`Consolas` / `Cascadia Mono` / `JetBrains Mono`) for paths, logs, metrics, and numeric readouts.
- **Tabular figures:** Enable tabular/monospaced numerals for counters, sizes, percentages, and throughput so numbers do not jitter during live updates.
- **DPI & Theme Sync:** Scale all dimensions from Per-Monitor DPI V2 and update surface/accent tokens cleanly on Windows theme changes.
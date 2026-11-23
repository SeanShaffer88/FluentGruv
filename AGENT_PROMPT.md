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
   - Use the Gruvbox surface, text, and red accent tokens from the Palette section below (generated from `tokens.json`); on a Windows light-theme change, swap the whole set for the light values — never mix themes token by token.
   - Maintain crisp contrast, symmetrical alignment, and circular/radial progress indicators where progress is shown.
4. **Preserve ergonomics & scope:**
   - Support `Tab` navigation, `Esc` to close/cancel, `Enter` to submit, and clear tooltips on controls and headers.
   - Persist state/config locally (or in a local `data/` folder for portable builds) with zero telemetry or cloud dependencies.
   - Do not add unrequested features or bloat.
## Palette (authoritative — do not substitute)

The following values are generated from `tokens.json`. Use them verbatim.
For the full token set, read `tokens.json` directly.

| Token | Value |
| --- | --- |
| `themes.dark.accent.primary` | `#FB4934` |
| `themes.dark.accent.secondary` | `#CC241D` |
| `themes.dark.accent.subtle` | `#3B1D1B` |
| `themes.dark.bg.canvas` | `#1D2021` |
| `themes.dark.bg.elevated` | `#32302F` |
| `themes.dark.bg.sunken` | `#171819` |
| `themes.dark.bg.surface` | `#282828` |
| `themes.dark.border.strong` | `#504945` |
| `themes.dark.border.subtle` | `#3C3836` |
| `themes.dark.fg.inverse` | `#1D2021` |
| `themes.dark.fg.muted` | `#A89984` |
| `themes.dark.fg.primary` | `#EBDBB2` |
| `themes.dark.fg.secondary` | `#D5C4A1` |
| `themes.dark.status.danger` | `#FB4934` |
| `themes.dark.status.success` | `#B8BB26` |
| `themes.dark.status.warning` | `#FABD2F` |
| `themes.light.accent.primary` | `#CC241D` |
| `themes.light.accent.secondary` | `#9D0006` |
| `themes.light.accent.subtle` | `#F4D2AE` |
| `themes.light.bg.canvas` | `#F9F5D7` |
| `themes.light.bg.elevated` | `#EBDBB2` |
| `themes.light.bg.sunken` | `#F2E5BC` |
| `themes.light.bg.surface` | `#FBF1C7` |
| `themes.light.border.strong` | `#BDAE93` |
| `themes.light.border.subtle` | `#D5C4A1` |
| `themes.light.fg.inverse` | `#FBF1C7` |
| `themes.light.fg.muted` | `#665C54` |
| `themes.light.fg.primary` | `#282828` |
| `themes.light.fg.secondary` | `#3C3836` |
| `themes.light.status.danger` | `#CC241D` |
| `themes.light.status.success` | `#79740E` |
| `themes.light.status.warning` | `#AF3A03` |

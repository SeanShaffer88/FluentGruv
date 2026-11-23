# FluidStandard Enforcement Prompt for AI Coding Agents

When creating or modifying any user interface code for a Windows application, read `SPEC.md` and `TOKENS.md` in this repository first and enforce every rule below.

## Mandatory Workflow
1. **Plan before coding:** Before writing or editing UI layout/component code, present a concise ASCII wireframe, list of active workspace modes/drawers, and how the layout adapts to resizing and DPI changes. Wait for approval if layout structure is non-trivial.
2. **Enforce viewport & modularity rules:**
   - Never add scrollbars to the main application window.
   - Use virtualized lists/tables for large datasets and logs.
   - Keep secondary inspectors, filters, logs, and settings in modular slide-out drawers or dockable panels that tuck away cleanly.
   - Support system-tray minimization and restore/validate window geometry against active monitors.
3. **Apply Gruvbox Dark + Red tokens:**
   - Use the Gruvbox Dark surface and text tokens (`#1D2021`, `#282828`, `#32302F`, `#EBDBB2`, `#D5C4A1`, `#928374`) and red accent tokens (`#FB4934`, `#CC241D`, `#3B1D1B`) from `TOKENS.md`.
   - Maintain crisp contrast, symmetrical alignment, and circular/radial progress indicators where progress is shown.
4. **Preserve ergonomics & scope:**
   - Support `Tab` navigation, `Esc` to close/cancel, `Enter` to submit, and clear tooltips on controls and headers.
   - Persist state/config locally (or in a local `data/` folder for portable builds) with zero telemetry or cloud dependencies.
   - Do not add unrequested features or bloat.
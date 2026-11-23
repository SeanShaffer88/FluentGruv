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
- **Selective Fluent surfaces:** Apply Mica or Acrylic only where it improves visual hierarchy or floating drawer separation, using the `material.*` tokens in `TOKENS.md` §2b (solid fallbacks included); keep text tables, logs, and dense controls high-contrast and sharp.

## 5. Keyboard Navigation & Accessibility
- Maintain logical `Tab` order across visible controls and active drawers.
- Support standard shortcuts (`Esc` to cancel/close drawers, `Enter` to submit/confirm).
- Provide descriptive tooltips on interactive controls, icon buttons, and column headers explaining action and side effects.
- Honor Windows dark/light theme changes and Per-Monitor DPI V2 scaling dynamically without requiring a restart.
## 6. Validation

An implementation conforms to this spec only if it passes every check below.
These are manual unless marked otherwise; contrast is automated via
`npm run check:contrast`.

### 6.1 Automated (CI-enforced)
- [ ] Every pair in `contrast-pairs.json` meets its minimum ratio.
- [ ] `AGENT_PROMPT.template.md` contains no literal hex colors.
- [ ] `ai-bundle.md`, `AGENT_PROMPT.md`, and `examples/prototype/tokens.css` are up to date (`npm run build` produces no diff).

### 6.2 Viewport reflow
Test at 1024×700, 1280×800, 1440×900, and 1920×1080.
- [ ] The main application window never produces a scrollbar.
- [ ] Only the designated content region scrolls; the shell and sidebar do not change height between viewports.
- [ ] No element is clipped or overlaps at any listed size.

### 6.3 Interaction
- [ ] Drawers open/close within 200 ms.
- [ ] With reduced-motion settings on, drawers appear/disappear with no transition.
- [ ] Every interactive element shows a visible focus ring at 3:1 or better against its background.
- [ ] Focus is never trapped; tab order follows visual order; `Esc` closes drawers.

### 6.4 Content stress
- [ ] A 200-character unbroken string does not widen the layout or cause a horizontal scrollbar.
- [ ] Empty states render for: no items, no results, and error.
- [ ] 500+ rows use a virtualized list; scroll performance stays smooth.

### 6.5 Accessibility
- [ ] 200% zoom at 1280×800 preserves all content with no clipping.
- [ ] All status indicators pair color with a non-color cue (glyph or text).

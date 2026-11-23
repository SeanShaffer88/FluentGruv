# FluentGruv Changelog

## 1.1.0 — 2026-11-23
- Added the Gruvbox Light palette: every color token now has a light value in `TOKENS.md` and in `tokens.json` under `themes.light` (dark remains the default under `colors` / `themes.dark`).
- Added a `version` field to `tokens.json`; geometry, spacing, and typography are unchanged.
- `AGENT_PROMPT.md` and the README Quick Start now point agents at `tokens.json` and the `examples/` wireframes.
- Added sample wireframes: ExorSyst, ytTrayDL, SafeReturn, RoomForge.
- Fixed `fg.muted` contrast: dark `#928374` -> `#A89984` (5.30:1 on surface), light `#928374` -> `#665C54` (5.74:1); measured contrast table added as TOKENS.md §4.
- Added `ai-bundle.md`: the whole spec in one file for single-fetch agent use.

## 1.0.0 — 2026-11-23
- Initial publish: `README.md`, `SPEC.md`, `TOKENS.md` (Gruvbox Dark + bespoke red), `AGENT_PROMPT.md`, machine-readable `tokens.json`, and `examples/wireframe-utility.txt`.

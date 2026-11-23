# FluentGruv — Adaptive & Modular Fluent Design for Windows

**FluentGruv** is a machine-readable UI and layout specification for native Windows desktop utilities. It adapts Microsoft's Fluent Design system with **high information density**, **symmetrical alignment**, **intent-driven workspace modes**, **modular slide-out drawers**, **circular/radial progress indicators**, and a **Gruvbox Dark palette accented with bespoke reds**.

Designed to be linked directly into AI coding agent workflows so generated UIs match your exact ergonomics without bloat, main-window scrollbars, or generic templates.

## Repository Structure

- `AGENT_PROMPT.md` — System/developer enforcement prompt for AI coding agents.
- `SPEC.md` — Layout modes, docking/drawer rules, viewport discipline, motion, and accessibility rules.
- `TOKENS.md` — Gruvbox Dark + red accent color tokens, spacing, radii, typography, and Windows DPI/theme rules.
- `tokens.json` — Machine-readable companion to `TOKENS.md`: exact hex codes and spacing values for agents that parse JSON directly.
- `examples/wireframe-utility.txt` — Concrete wireframe: main workspace + collapsible right/bottom drawers + circular progress readout.

## Quick Start for AI Agents

Point your coding agent to this repository and instruct it to read `AGENT_PROMPT.md`, `SPEC.md`, and `TOKENS.md` before writing or modifying UI code.
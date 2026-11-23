# Reference prototype

A minimal, runnable expression of SPEC.md. `tokens.css` is generated from
`tokens.json` by `npm run build` — never edit it by hand.

Open `index.html` directly in a browser (no build step, no dependencies).
Dark is the default (`:root`); add `data-theme="light"` to the `<html>`
element for the light palette.

Use this to sanity-check that the spec is *implementable* as written. If a rule
in SPEC.md can't be expressed here, the rule needs rewording.

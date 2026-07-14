# OZSNAP project guidance

## Product direction

OZSNAP is an Australian weather-to-decision utility. It should answer what to wear and when to shoot, then reveal deeper planning tools without becoming a conventional weather dashboard.

## Durable rules

- Keep all public copy in Australian English.
- Preserve the 10-level outfit system in `script.js`.
- Keep the design direction editorial, practical and distinctly Australian: Newsreader, Manrope, eucalyptus, sun yellow and restrained coral.
- Use locally hosted, optimised visual assets. Do not introduce decorative gradients, generic glass UI or card-heavy SaaS layouts.
- Cloudflare Pages serves the static files directly; avoid build-time dependencies unless the deployment approach is intentionally changed.
- Open-Meteo is the only runtime data source. Label results as forecast guidance, not observations, warnings or guarantees.
- `Use my location` selects the nearest supported OZSNAP city; do not describe it as exact-coordinate weather.
- Preserve the two external partner destinations documented in `STRUCTURE.md` and do not add other outbound links without explicit approval.
- Keep live forecast output inside `data-nosnippet` containers and stable methodology in initial HTML.
- Regenerate `style.min.css` and `script.min.js` after source changes and bump the query version in every HTML consumer before deployment.

## Verification

Run `node --check script.js`, HTML validation, desktop/mobile Playwright checks, and Lighthouse before pushing a public release.

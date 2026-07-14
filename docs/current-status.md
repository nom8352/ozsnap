# OZSNAP current status

Last updated: 2026-07-14

## Completed

- Rebuilt the homepage as an Australian editorial decision guide using generated coastal photography.
- Preserved live Open-Meteo weather for 10 cities and the existing 10-level outfit system.
- Added personal comfort and activity controls with morning, afternoon and evening outfit guidance.
- Added a generated, copyable day checklist based on outfit level, rain, wind, heat and UV.
- Added a seven-day photography ranking with portrait and sunset-colour goals.
- Kept the golden-hour shoot planner and connected forecast-day selection across forecast, day kit, light and planner views.
- Added three indexable content pages:
  - `/what-to-wear-by-temperature/`
  - `/photography-weather-guide/`
  - `/golden-hour-calculator/`
- Updated WebApplication schema, added Organization and WebPage nodes, expanded the sitemap, added HSTS and fixed root-relative 404 assets.
- Preserved only the Sweetlife Photography and LookyLooky external destinations.

## Verification

- Local URL: `http://127.0.0.1:4173/`
- HTML validation: pass for all four public pages and `404.html`.
- Playwright: no console errors; desktop and mobile interactions passed.
- Mobile menu: Escape closes and returns focus to the menu button.
- Lighthouse mobile: Performance 85, Accessibility 100, Best Practices 100, SEO 100, CLS 0.

## Current release state

- Release commit `20591a7` is pushed to GitHub `main` and deployed by Cloudflare Pages.
- Minified CSS and JS are current at query version `20260714-7`.
- Generated photos live under `assets/photos/`.
- Production mobile verification passed at `https://ozsnap.com/` with live weather, three daypart outfits and seven ranked photo days.
- All four canonical URLs return `200`; the custom 404 returns `404`; HSTS and immutable asset caching are live.
- Cloudflare Managed Content prepends search/AI content signals to `robots.txt`; search remains allowed and the OZSNAP sitemap declaration remains present.

## Next practical step

Use production analytics and search data to decide whether the next content expansion should be city guides or a multi-day trip capsule packer.

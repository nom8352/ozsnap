# OZSNAP current status

Last updated: 2026-07-15

## Completed

- Rebuilt the homepage as an Australian editorial decision guide using generated coastal photography.
- Preserved live Open-Meteo weather for 10 cities and the existing 10-level outfit system.
- Added personal comfort and activity controls with morning, afternoon and evening outfit guidance.
- Added a generated, copyable day checklist based on outfit level, rain, wind, heat and UV.
- Added a seven-day photography ranking with portrait and sunset-colour goals.
- Kept the golden-hour shoot planner and connected forecast-day selection across forecast, day kit, light and planner views.
- Added four indexable content pages with shared page-to-page navigation:
  - `/what-to-wear-by-temperature/`
  - `/photography-weather-guide/`
  - `/golden-hour-calculator/`
  - `/australia-city-guides/`
- Made `/golden-hour-calculator/` a working standalone 10-city calculator rather than a guide that redirects users to the homepage tool.
- Shortened the homepage by moving detailed methodology, sky guidance and FAQs into the relevant content pages.
- Removed Sweetlife Photography and LookyLooky from every site footer. Both now appear visibly in a contextual homepage studio-resources note; Sweetlife also appears in two relevant, visible editorial contexts on the photo-weather and city-guide pages.
- Added a restrained family-photographer search cluster rather than mass-producing city pages:
  - `/family-photographers/`
  - `/family-photographers/brisbane/`
  - `/family-photographers/sydney/`
  - `/family-photographers/melbourne/`
- Recorded exact Google Australia queries on 15 July 2026 with personalisation off, documented the North Lakes search location, excluded ads/maps/social/directories, and preserved eligible independent-site order without OZSNAP scoring.
- Verified all 30 comparison entries against the businesses’ official sites and added city-specific outdoor-session planning guidance.
- Added `?city=` support so links from the city comparison pages open the homepage with Brisbane, Sydney or Melbourne already selected.
- Updated WebApplication schema, added Organization and WebPage nodes, expanded the sitemap, added HSTS and fixed root-relative 404 assets.
- Kept Sweetlife Photography and LookyLooky as contextual editorial resources, while the new city comparisons link visibly to the 30 independent sites recorded in their dated search snapshots.

## Verification

- Local URL: `http://127.0.0.1:4173/`
- HTML validation: pass for all nine public pages and `404.html`.
- Playwright: no console errors; desktop and mobile interactions passed.
- Standalone calculator: Sydney blue-hour schedule tested with local milestones and arrival/start/finish output.
- External-link check: no external links remain in any footer; all three Sweetlife body links and the one LookyLooky body link are visibly rendered.
- Family-photographer cluster: 10 visible official-site links per city, zero external footer links, 10 cards per page, no mobile horizontal overflow and no console errors.
- Mobile menu: Escape closes and returns focus to the menu button.
- Lighthouse mobile: Performance 85, Accessibility 100, Best Practices 100, SEO 100, CLS 0.

## Current release state

- Release commit `33b20dc` is currently live on GitHub `main`; it contains the information-architecture and contextual-link release.
- The family-photographer search cluster is ready for the next GitHub `main` release and Cloudflare Pages deployment.
- Minified CSS and JavaScript are current at query version `20260715-2`.
- Generated photos live under `assets/photos/`.
- Production mobile verification passed at `https://ozsnap.com/` with live weather, three daypart outfits and seven ranked photo days.
- All nine local canonical routes return `200`; the four new family-photographer routes remain local until the next push and Cloudflare deployment.
- Cloudflare Managed Content prepends search/AI content signals to `robots.txt`; search remains allowed and the OZSNAP sitemap declaration remains present.

## Next practical step

Commit and push the three-city search-guide release for Cloudflare Pages deployment, then refresh the documented result order periodically rather than adding more cities without sufficient original content.

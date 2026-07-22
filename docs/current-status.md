# OZSNAP current status

Last updated: 2026-07-23

Detailed implementation decisions, research methodology, verification commands and the release process are preserved in `docs/project-handoff.md`.

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
- Refined the three Sweetlife references around the priority services: two links point to the main site (`Brisbane newborn photography` and the branded `Sweetlife newborn and baby studio`, with Chermside in its surrounding copy), while `Sweetlife maternity photography in North Lakes` points to the relevant service page.
- Added the Quuu-ready evergreen article `/outdoor-photo-shoot-weather-checklist/` with the original LIGHT framework, three OZSNAP images, two responsive explanatory infographics, practical decision cards, a worked example, a copyable field checklist, official sources and contextual links into five OZSNAP tools and guides. Its opening pairs a bright golden-hour swimwear couple hero with a four-condition portrait comparison; the lower article visualises field-condition responses and the Primary-Shelter-Fallback-Exit route.
- Added the broad Quuu-ready article `/weather-app-mistakes/` for commuters, families, travellers and outdoor planners. The article uses the share-led headline "Your weather app is not wrong. You're reading it wrong.", explains seven common forecast-reading mistakes, supplies a copyable 60-second check and links each next decision to the relevant OZSNAP tool or guide.
- Added a dedicated 1200 x 630 social image plus responsive hero assets for the weather-app article and made the article the first guide promoted from the homepage directory.
- Replaced the weather-app article's calm group-planning image with a higher-reaction sun-shower scene: direct eye contact, a phone, an inside-out coral umbrella, wet pavement and sharply contrasting sun and cloud. Versioned `v2` filenames prevent the earlier hero and social preview from remaining in CDN or social caches.

## Verification

- Local URL: `http://127.0.0.1:4173/`
- HTML validation: pass for all nine public pages and `404.html`.
- Playwright: no console errors; desktop and mobile interactions passed.
- Standalone calculator: Sydney blue-hour schedule tested with local milestones and arrival/start/finish output.
- External-link check: no external links remain in any footer; all three Sweetlife body links and the one LookyLooky body link are visibly rendered.
- Family-photographer cluster: 10 visible official-site links per city, zero external footer links, 10 cards per page, no mobile horizontal overflow and no console errors.
- Mobile menu: Escape closes and returns focus to the menu button.
- Weather-app article: local and production routes return `200`; canonical, Article schema, all images, homepage discovery and the sitemap entry passed. Desktop and 375 px mobile have no horizontal overflow or console errors, and the mobile menu opens, closes with Escape and returns focus.
- Weather-app article Lighthouse mobile: Performance 97, Accessibility 100, Best Practices 100, SEO 100, CLS 0.
- Lighthouse mobile: Performance 85, Accessibility 100, Best Practices 100, SEO 100, CLS 0.

## Current release state

- The family-photographer search cluster is released from GitHub `main` and deployed by Cloudflare Pages.
- The Sweetlife anchor update is live as an HTML-only release; minified assets did not require regeneration.
- Minified CSS is current at query version `20260722-2`; minified JavaScript remains current at its existing query version.
- Generated photos live under `assets/photos/`.
- Production mobile verification passed at `https://ozsnap.com/` with live weather, three daypart outfits and seven ranked photo days.
- All eleven canonical routes are represented in the sitemap; the outdoor-shoot article is live on Cloudflare Pages and returns `200` with its article imagery available.
- The broad weather-app article is live at `https://ozsnap.com/weather-app-mistakes/`; its responsive hero assets and dedicated 1200 x 630 OG image return `200` from production.
- Cloudflare Managed Content prepends search/AI content signals to `robots.txt`; search remains allowed and the OZSNAP sitemap declaration remains present.

## Next practical step

Refresh the documented result order periodically rather than adding more cities without sufficient original content.

# OZSNAP project handoff

Last updated: 2026-07-15

This document preserves the decisions, implementation process and release checks needed to continue OZSNAP without relying on chat history. Read `CLAUDE.md`, `STRUCTURE.md` and `docs/current-status.md` with this file before making changes.

## 1. Product direction

OZSNAP is an Australian weather-to-decision utility for residents and domestic travellers. Its two primary questions are:

1. What should I wear today?
2. When and in what conditions should I take photos?

The site should not become a conventional weather dashboard. Weather values support plain-language outfit, packing and photography decisions. Public copy is in Australian English.

The current content strategy combines useful interactive tools with durable editorial pages. New pages should only be added when they contain original, location-specific information rather than thin keyword variations.

## 2. Hosting and architecture

- Production: `https://ozsnap.com/`
- Repository: `https://github.com/nom8352/ozsnap`
- Release branch: `main`
- Hosting: Cloudflare Pages, deployed automatically after a push to `main`
- Application type: static HTML, CSS and vanilla JavaScript
- Runtime data: Open-Meteo only; no private API key is required
- Source assets: locally hosted under `assets/`
- Current asset query version: `20260715-2`
- Latest verified Git commit at this handoff: `c0b67c0`

Do not add a framework or build-time dependency unless the deployment architecture is intentionally changed. Source files are `style.css` and `script.js`; production HTML loads their minified counterparts.

## 3. Complete page inventory

The repository contains 10 HTML files: nine indexable pages and one system error page.

### Indexable canonical pages

1. `/` - live outfit, day-kit, weekly photo-light ranking and shoot planner
2. `/what-to-wear-by-temperature/` - stable explanation of the 10 outfit levels
3. `/photography-weather-guide/` - cloud, rain and wind photography guidance
4. `/golden-hour-calculator/` - standalone 10-city light calculator
5. `/australia-city-guides/` - seasonal context for supported Australian cities
6. `/family-photographers/` - search methodology and city directory
7. `/family-photographers/brisbane/` - Brisbane search snapshot and comparison
8. `/family-photographers/sydney/` - Sydney search snapshot and comparison
9. `/family-photographers/melbourne/` - Melbourne search snapshot and comparison

### Non-indexable page

- `/404.html` - custom error page with `noindex`

Homepage hashes such as `#today`, `#forecast`, `#day-kit`, `#best-light` and `#shoot-planner` are interface states, not separate pages. The 10 selectable weather cities are also dynamic states rather than independent URLs.

## 4. Main utility implementation

`script.js` is the source of truth for application behaviour.

### Weather and cities

- `CITIES` contains the 10 supported locations and coordinates.
- Open-Meteo provides current, daily and hourly forecast data.
- Forecast output is guidance, not an official observation, warning or guarantee.
- `Use my location` finds the nearest supported OZSNAP city; it does not provide exact-coordinate weather.
- `?city=brisbane`, `?city=sydney` and `?city=melbourne` links preselect a city before loading the homepage utility.
- User city, comfort and activity choices are stored locally where supported.

### Ten-level outfit model

Preserve `OUTFIT_BANDS` and its level boundaries unless a future change is backed by a clear product decision and regression testing:

| Level | Apparent temperature | Core recommendation |
| --- | --- | --- |
| 1 | 5 C or below | Winter coat and warm layers |
| 2 | 6-9 C | Coat and warm knit |
| 3 | 10-12 C | Jumper and light jacket |
| 4 | 13-15 C | One light jumper |
| 5 | 16-18 C | Tee and removable light layer |
| 6 | 19-21 C | Lightweight long sleeves |
| 7 | 22-24 C | Tee and light trousers |
| 8 | 25-27 C | Tee, shorts and walking shoes |
| 9 | 28-31 C | Loose summer kit and sun protection |
| 10 | 32 C or above | Heat-focused clothing, water and shade |

Recommendations use apparent temperature and are adjusted by time of day, personal comfort, activity, rain, wind, heat and UV. This granularity was introduced after a 15 C Brisbane recommendation appeared too heavy. Outfit artwork lives under `assets/outfits/` in full and 400 px WebP variants.

### Photography tools

- Seven-day photo suitability ranking supports portrait and sunset-colour goals.
- Cloud, rain, wind, humidity and light are translated into practical shooting advice.
- The planner supports golden, soft and blue-hour looks.
- Date, session duration and city produce arrival, shooting and finish milestones.
- The selected forecast day is shared across forecast, day-kit, light and planner views.

## 5. Design and brand decisions

The approved visual direction is an Australian editorial field guide rather than a card-heavy weather dashboard.

- Display typeface: Newsreader
- Interface/body typeface: Manrope
- Palette: eucalyptus, sun yellow and restrained coral on a light base
- Photography should carry the visual identity
- Avoid gradients, glass effects, glowing decoration, oversized pills and generic SaaS grids
- Keep mobile decisions immediate and reveal detailed guidance progressively

The supplied OZSNAP pin-and-wordmark logo was processed into production assets under `assets/brand/`. Important files include:

- `ozsnap-logo-320.webp` and `ozsnap-logo.webp` for the header
- `ozsnap-logo-light.webp` for the footer
- `ozsnap-mark-192.png` and `favicon-48.png` for icons
- `ozsnap-social-card.jpg` for social sharing
- `ozsnap-logo-source.png` as the retained source image

Generated coastal and photographer imagery is stored under `assets/photos/`. Keep images local, responsive and optimised.

## 6. Family photographer guide methodology

The city pages are dated search snapshots, not OZSNAP awards or paid rankings. The first release used Google Australia on 15 July 2026.

### Recorded search setup

- Queries: `best family photographer Brisbane`, `best family photographer Sydney`, and `best family photographer Melbourne`
- Market/language: `gl=au`, `hl=en`
- Personalisation: off with `pws=0`
- Observed location: North Lakes, Queensland, derived by Google from the search IP
- Pages reviewed: result pages one and two as required to obtain 10 eligible sites

### Inclusion and exclusion

Preserve eligible independent photographer websites in observed organic-result order. Exclude:

- advertisements and sponsored placements
- map-pack entries
- social media profiles
- Reddit and discussion threads
- broad directories, listicles and aggregator sites

Each included business must be checked against its official website for service area, session setting, style and any publicly visible pricing. If pricing is not public, say so rather than estimating it.

Each city page currently contains 10 official-site links and original local planning guidance:

- Brisbane: heat, humidity and storm timing
- Sydney: harbour, coastal wind and exposed locations
- Melbourne: fast-changing weather and fallback planning

When refreshing, retain the snapshot date and method. Do not silently rearrange results, sell positions or describe the list as a definitive quality ranking. Do not insert Sweetlife Photography, LookyLooky or OZSNAP unless they independently appear as eligible results under the same documented method.

## 7. External link policy

External links must be visible, relevant and editorially defensible. Hidden links, footer-wide repetition, paid placement disguised as ranking and keyword-stuffed anchors are not allowed.

- Sweetlife Photography and LookyLooky appear in visible contextual body copy, not site-wide footers.
- Sweetlife also has two relevant editorial references on photography-related content pages.
- The three photographer comparison pages link to the 30 official sites in their dated search snapshots.
- Photographer links use `target="_blank"` and `rel="noopener noreferrer"`.
- There are no external links in any footer.

Any new external destination requires explicit approval and an update to `STRUCTURE.md`.

## 8. Technical SEO implementation

The live technical SEO baseline was rechecked on 15 July 2026.

- `sitemap.xml` lists nine unique canonical URLs.
- `robots.txt` allows general crawling and declares `https://ozsnap.com/sitemap.xml`.
- Cloudflare Managed Content may prepend crawler-specific AI restrictions in production.
- General search remains allowed with `User-agent: *`, `Allow: /` and `search=yes`.
- Googlebot search crawling is not blocked; `Google-Extended` is blocked for AI-related use.
- Every sitemap page returns `200`, has one H1, a title, meta description, matching canonical and JSON-LD, and does not contain `noindex`.
- `404.html` intentionally contains `noindex`.
- Stable editorial methodology is present in initial HTML.
- Volatile live forecast sections use `data-nosnippet`.
- Open Graph/social metadata uses the local social card.
- `_headers` provides HSTS, MIME protection, frame protection, referrer policy, permissions policy and asset caching.

This means the site is technically ready for indexing. Google Search Console ownership, sitemap submission, URL inspection and actual index coverage are external account tasks and were not confirmed in this repository work.

## 9. Build and asset process

After editing source CSS or JavaScript, regenerate minified files:

```powershell
npx --yes csso-cli style.css --output style.min.css
npx --yes terser script.js --compress --mangle --output script.min.js
```

Then bump the version query on every HTML page that consumes the changed asset, for example:

```html
<link rel="stylesheet" href="/style.min.css?v=YYYYMMDD-N">
<script src="/script.min.js?v=YYYYMMDD-N" defer></script>
```

Do not update only the source files. Cloudflare caches minified assets for one year, so the query version is required to invalidate browser/CDN caches.

## 10. Local verification process

Start a static local server from the repository root:

```powershell
npx --yes serve . -l 4173
```

The expected local base URL is `http://127.0.0.1:4173/`.

Run JavaScript syntax checks:

```powershell
node --check script.js
node --check script.min.js
```

Validate all public HTML pages plus the 404 page:

```powershell
npx --yes html-validate index.html 404.html `
  what-to-wear-by-temperature/index.html `
  photography-weather-guide/index.html `
  golden-hour-calculator/index.html `
  australia-city-guides/index.html `
  family-photographers/index.html `
  family-photographers/brisbane/index.html `
  family-photographers/sydney/index.html `
  family-photographers/melbourne/index.html
```

Also run:

```powershell
git diff --check
```

Browser checks should cover desktop and 375 px mobile widths:

- no horizontal overflow or incoherent overlap
- header navigation and mobile menu, including Escape and focus return
- city selection, location action and loading/error states
- comfort and activity controls
- seven-day forecast selection
- day checklist generation and copy action
- portrait/sunset ranking modes
- standalone calculator inputs and schedule output
- `?city=sydney#today` and equivalent deep links
- exactly 10 comparison cards and 10 visible official links per city page
- no external footer links
- no console errors

Run Lighthouse mobile before significant public releases. The last recorded result was Performance 85, Accessibility 100, Best Practices 100, SEO 100 and CLS 0.

## 11. Release and live verification

Commit and push only intended files:

```powershell
git status --short
git add -- <intended-files>
git commit -m "Concise release description"
git push origin main
```

Cloudflare Pages deploys from `main`. New routes can return 404 briefly while deployment propagates. Poll the production URLs until they return `200` and a release-specific content marker.

After deployment, verify:

- homepage contains the new internal route
- all new routes return `200`
- sitemap returns `200` and contains the expected unique URLs
- robots returns `200` and declares the sitemap
- local `HEAD` equals `origin/main`
- `git status --porcelain` is empty

The family guide release used two commits:

- `06993ab` - city family photographer search guides
- `c0b67c0` - deployment-state documentation

All four family-photographer routes, the homepage, sitemap and robots file were confirmed live after the release.

## 12. Known boundaries and next work

- Search-result order is time-sensitive. Refresh city snapshots periodically and retain the date and method.
- Do not mass-generate thin city pages. Perth, Adelaide, Gold Coast and Sunshine Coast are possible next locations only when enough original local guidance and verified search research are available.
- Technical indexability is complete, but Search Console submission and index coverage still need account-level confirmation.
- Maintain the 10-level outfit model and test edge temperatures whenever recommendations change.
- Update `docs/current-status.md` after each release and keep this document focused on durable process.

## 13. Resume prompt

Use this prompt in a future task:

> Read `CLAUDE.md`, `STRUCTURE.md`, `docs/current-status.md` and `docs/project-handoff.md` first. Summarise the current OZSNAP state, then wait for an explicit next action before editing.

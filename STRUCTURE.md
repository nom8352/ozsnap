# OZSNAP site structure

## Canonical pages

- `https://ozsnap.com/` - live outfit, day-kit, weekly light and shoot-planning utility
- `https://ozsnap.com/what-to-wear-by-temperature/` - complete 10-level outfit methodology
- `https://ozsnap.com/photography-weather-guide/` - cloud, rain and wind field guide
- `https://ozsnap.com/golden-hour-calculator/` - golden, soft and blue-hour timing guide
- `https://ozsnap.com/australia-city-guides/` - seasonal and practical context for the ten supported cities
- `https://ozsnap.com/family-photographers/` - methodology and city selector for family photographer search guides
- `https://ozsnap.com/family-photographers/brisbane/` - documented Brisbane Google search snapshot and comparison guide
- `https://ozsnap.com/family-photographers/sydney/` - documented Sydney Google search snapshot and comparison guide
- `https://ozsnap.com/family-photographers/melbourne/` - documented Melbourne Google search snapshot and comparison guide
- `https://ozsnap.com/outdoor-photo-shoot-weather-checklist/` - evergreen LIGHT framework, weather decision guide and pre-shoot checklist

## Homepage sections

- `#today` - live city conditions and current outfit recommendation
- `#forecast` - seven-day outfit forecast
- `#day-kit` - personalised morning, afternoon and evening outfits plus checklist
- `#best-light` - selected-day light forecast and seven-day photography ranking
- `#shoot-planner` - date, duration and light-look session planner

Hash sections are interaction states, not separate indexable URLs.

## Search files

- `sitemap.xml` lists the ten canonical pages.
- `robots.txt` allows crawling and declares the sitemap.
- `404.html` is excluded from search with `noindex`.
- Live forecast containers use `data-nosnippet` so volatile values are not favoured as search snippets.

## External destinations

The homepage studio-resource note links to:

- `https://sweetlifephotography.com.au/`
- `https://www.lookylooky.com.au/`

These links belong in visible, relevant body copy rather than repeated site-wide footers.

The city family-photographer guides also link visibly to the independent photographer websites recorded in each documented search snapshot. Those links must preserve observed result order and must not be sold, hidden or exchanged for placement.

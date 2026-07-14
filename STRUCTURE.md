# OZSNAP site structure

## Canonical pages

- `https://ozsnap.com/` - live outfit, day-kit, weekly light and shoot-planning utility
- `https://ozsnap.com/what-to-wear-by-temperature/` - complete 10-level outfit methodology
- `https://ozsnap.com/photography-weather-guide/` - cloud, rain and wind field guide
- `https://ozsnap.com/golden-hour-calculator/` - golden, soft and blue-hour timing guide
- `https://ozsnap.com/australia-city-guides/` - seasonal and practical context for the ten supported cities

## Homepage sections

- `#today` - live city conditions and current outfit recommendation
- `#forecast` - seven-day outfit forecast
- `#day-kit` - personalised morning, afternoon and evening outfits plus checklist
- `#best-light` - selected-day light forecast and seven-day photography ranking
- `#shoot-planner` - date, duration and light-look session planner

Hash sections are interaction states, not separate indexable URLs.

## Search files

- `sitemap.xml` lists the five canonical pages.
- `robots.txt` allows crawling and declares the sitemap.
- `404.html` is excluded from search with `noindex`.
- Live forecast containers use `data-nosnippet` so volatile values are not favoured as search snippets.

## External destinations

Only these studio-resource destinations should be linked externally:

- `https://sweetlifephotography.com.au/`
- `https://www.lookylooky.com.au/`

These links belong in visible, relevant body copy rather than repeated site-wide footers.

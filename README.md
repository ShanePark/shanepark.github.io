# shanepark.github.io

Landing, support, privacy-policy and license pages for Shane Park's apps,
built with [Astro](https://astro.build) and deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

```sh
npm install
npm run dev     # local preview
npm run build   # static site in dist/
```

## Layout

| Published path | Source |
| --- | --- |
| `/` | `src/pages/index.astro`: app cards generated from `src/data/apps.ts` |
| `/lulu/` | `src/pages/lulu/index.astro`: Lulu’s Little Adventures (루루 어드벤처) landing page |
| `/lulu/support.html`, `privacy.html`, `licenses.html` | `src/pages/lulu/*.astro` with page bodies in `src/content/lulu/` |
| `/dalbitland/` | `src/pages/dalbitland/index.astro`: dalbitLand (달빛랜드) landing page |
| `/dalbitland/support.html`, `privacy.html` | Served verbatim from `public/dalbitland/` |
| `/dalbitland-support/*.html` | Redirects to the pages above (`redirects` in `astro.config.mjs`) |

App Store Connect links to the support and privacy URLs, so keep published
paths stable. `build.format: 'preserve'` in `astro.config.mjs` keeps the
`.html` file names.

## Adding an app

1. Add its icon and artwork under `src/assets/<app>/` and an entry to
   `src/data/apps.ts`; the home page picks it up automatically.
2. Create `src/pages/<app>/index.astro` from an existing landing page, with
   app-specific colors in a `theme-<app>` class (see `src/styles/dalbit.css`).
3. Once the app is live, set `appStoreUrl` in `src/data/apps.ts` to replace
   the "Coming soon" badge with a download link.

Every visible string is bilingual: use `<T en="…" ko="…" />`. The language
follows `?lang=`, then the visitor's last choice, then the browser.

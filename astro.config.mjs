import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shanepark.github.io',
  // Keep App Store URLs stable: pages/lulu/privacy.astro -> /lulu/privacy.html.
  build: { format: 'preserve' },
  // dalbitLand's pages moved under /dalbitland/; keep the old links working.
  // Keys omit .html because the preserve format appends it.
  redirects: {
    '/dalbitland-support/support': '/dalbitland/support.html',
    '/dalbitland-support/privacy': '/dalbitland/privacy.html',
  },
});

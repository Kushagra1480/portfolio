import { defineConfig } from 'astro/config';

// Custom domain served via GitHub Pages (public/CNAME -> www.kartyk.lol).
// Served at the root path, so no `base` is needed.
export default defineConfig({
  site: 'https://www.kartyk.lol',
});

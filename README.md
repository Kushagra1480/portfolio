# kartyk.lol — portfolio

Personal portfolio for Kushagra Kartik, built with [Astro](https://astro.build).
A quiet, serif/sapphire design: a home page, a writing index, and long-form
articles, with a persistent right-edge nav and smooth view transitions.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built dist/ locally
```

## Structure

- `src/layouts/Base.astro` — shell: fonts, global styles, persistent nav, view transitions.
- `src/components/Nav.astro` — right-edge menu with sliding active pill and `Shift+W`/`Shift+S` navigation.
- `src/pages/index.astro` — home (hero, Selected Work, Recent Writing, footer).
- `src/pages/writing.astro` — writing card grid.
- `src/pages/writing/*.astro` — the six articles (prose in `src/content/*.html`, imported raw).
- `src/pages/projects.astro` — placeholder route.
- `public/` — static assets, including `images/` and `CNAME` (custom domain).

## Deploy

Deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to
`main`. The workflow builds the site and publishes `dist/`; `public/CNAME`
carries the custom domain (`www.kartyk.lol`) into the published output.

**One-time setup:** in the repo's **Settings → Pages**, set **Source** to
**GitHub Actions** (not "Deploy from a branch").

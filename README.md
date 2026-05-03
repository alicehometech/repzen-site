# RepZen — Marketing Website

Public-facing marketing site for [RepZen](https://github.com/alicehometech/repzen),
the Apple Watch + iPhone bodyweight rep counter.

## Stack

- **Astro 5** (static output, no runtime JS by default)
- **Tailwind CSS 3** via `@astrojs/tailwind`
- **TypeScript** (strict)
- **Hosting:** Cloudflare Pages (free tier, unlimited bandwidth)

## Local development

```bash
npm install
npm run dev      # http://127.0.0.1:4321
npm run build    # outputs to ./dist
npm run preview  # preview production build
```

Node 22 is pinned via `.nvmrc`.

## Project layout

```
public/
  _headers                       # Cloudflare Pages security + cache headers
  _redirects                     # (currently empty)
  robots.txt
  sitemap.xml
  icons/                         # Brand assets — copies of app icons
    repzen-icon-1024.png
    exercise_*.png               # Light variant
    exercise_*_dark.png          # Dark variant

src/
  layouts/Base.astro             # <head>, OG/Twitter meta, JSON-LD slot
  components/                    # Header, Hero, Exercises, HowItWorks,
                                 # Privacy, Screenshots, BuiltBy, FAQ, Footer
  pages/
    index.astro                  # Single landing page (8 sections)
    privacy.astro                # /privacy — full privacy policy
    404.astro
  content/
    privacy.md                   # Source of truth for the privacy policy
    marketing_copy.md            # Tagline, hero copy, voice rules
  styles/global.css              # Tailwind + design tokens
```

## Deployment — Cloudflare Pages

This repo is wired to be connected to Cloudflare Pages via the GitHub
integration. **One-time setup:**

1. Visit <https://dash.cloudflare.com> → **Workers & Pages** →
   **Create** → **Pages** → **Connect to Git**.
2. Pick `alicehometech/repzen-site` and authorize the GitHub app if
   prompted.
3. Accept the auto-detected defaults:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/`
   - **Node version:** 22 (read from `.nvmrc`)
4. Click **Save and Deploy**.

After the first deploy:

- Production URL: `https://<project>.pages.dev`
- Every push to `main` deploys to production.
- Every PR gets a preview deployment.

To attach a custom domain later: project page → **Custom domains** →
**Set up a custom domain** → enter `repzen.app` (or whichever) → follow
the DNS instructions.

## Critical CTAs

- **Join TestFlight beta**: <https://testflight.apple.com/join/T4ygaWD7>
- **App source**: <https://github.com/alicehometech/repzen>
- **Email**: <mailto:lasmarthome18@gmail.com>

## Privacy

This site collects no analytics, uses no cookies, includes no
third-party scripts. The privacy posture mirrors the app's.

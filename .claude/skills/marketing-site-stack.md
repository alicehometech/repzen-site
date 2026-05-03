---
name: marketing-site-stack
description: Use when scaffolding a new app marketing website (e.g., MeVo-site, NextApp-site) under /Users/shark/workspace/. Defines the stack, file layout, brand-asset pattern, perf budget, and Cloudflare Pages deploy flow that all sister sites in this workspace share.
---

# Marketing site stack — workspace standard

All app marketing sites in `/Users/shark/workspace/<App>-site/` use this
exact stack. Don't deviate without a reason; consistency lets fixes ship
across every sister site (RepZen-site, MeVo-site, …) with a copy-paste.

## Stack (locked-in defaults)

- **Framework**: Astro 5+ (static output). Reason: ships zero JS by
  default, perfect for marketing pages where every byte matters.
- **Styling**: Tailwind CSS 3 via `@astrojs/tailwind` integration. Use
  `applyBaseStyles: false` and bring your own `src/styles/global.css`.
- **TypeScript**: strict mode (`extends: 'astro/tsconfigs/strict'`),
  with `~/*` path alias to `src/*`.
- **Hosting**: Cloudflare Pages (free, unlimited bandwidth, best CDN).
  Connect via the GitHub integration in the dashboard — no wrangler
  CLI deploys, those need OAuth round-trips. Preset auto-detected as
  Astro / `npm run build` / `dist`.
- **Node version**: pinned to 22 via `.nvmrc` (matches Cloudflare default).
- **Analytics**: NONE. Privacy-first apps lose their wedge the moment
  they add a Plausible/GA snippet. If a stakeholder pushes for metrics,
  push back — server logs from Cloudflare are enough.
- **Animations**: CSS-only, motion-reflective, `prefers-reduced-motion`
  respected. No GSAP, Framer Motion, etc.

## File layout (canonical)

```
public/
  _headers                       # Cloudflare Pages security + cache headers
  _redirects                     # (often empty; placeholder OK)
  robots.txt
  icons/                         # Brand assets — copies of app icons
    <app>-icon-1024.png
    <feature>_*.png              # Light variant
    <feature>_*_dark.png         # Dark variant

src/
  layouts/Base.astro             # <head>, OG/Twitter meta, JSON-LD slot,
                                 # hreflang alternates (see i18n skill)
  components/                    # One per section
  pages/
    index.astro                  # Single landing page
    privacy.astro                # /privacy
    404.astro
    sitemap.xml.ts               # TS endpoint, generates with hreflang
  content/
    privacy.md                   # Source of truth for legal text
    marketing_copy.md            # Voice rules + brand copy bank
  i18n/                          # If multi-language (see i18n skill)
  styles/global.css              # Tailwind layers + design tokens
tests/e2e/                       # Playwright (see e2e skill)
.nvmrc                           # 22
astro.config.mjs
tailwind.config.mjs
tsconfig.json
playwright.config.ts
```

## Brand-asset pattern

Marketing-site icons are **copies of the app's source assets**, never
edited in place. Each app repo (`/Users/shark/workspace/<App>/`) ships
the masters; the `-site/` repo holds copies pre-staged in
`public/icons/`. If the originals change, re-run the asset-stage script
in the app repo (look for `docs/website_session_brief.md` or similar)
rather than tweaking the copies.

## `public/_headers` (Cloudflare Pages)

```
/*
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), microphone=(), payment=()
  X-Frame-Options: DENY

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/icons/*
  Cache-Control: public, max-age=2592000

/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

## astro.config.mjs (canonical shape)

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  site: 'https://<app>.app',           // canonical, even if not yet pointed
  trailingSlash: 'never',
  i18n: { /* if multi-language — see i18n skill */ },
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
```

## Voice (see marketing-site-voice skill)

Apple-style cadence. Short declarative sentences. Lead with user
benefit, not product features. Never use "AI-powered", "revolutionary",
"#1", or unbacked accuracy/scale claims. For privacy-first apps, state
privacy as fact ("Stays on your device"), not as defense ("We don't
collect…").

## Performance budget (per page)

- HTML: ≤ 40 KB gzipped
- CSS: ≤ 25 KB gzipped (single file, hashed)
- JS shipped: 0 bytes by default. If a feature genuinely needs it
  (e.g., a small inline `<script>` for a select), keep it inline; do
  not add a runtime framework.
- Lighthouse mobile: 90+ on Performance / Accessibility / Best
  Practices / SEO.

## Deploy flow (one-time per sister site)

1. Push the repo to `github.com/<org>/<App>-site`.
2. Cloudflare dash → Workers & Pages → Create → Pages → Connect to Git.
3. Pick the repo, accept defaults (Astro, `npm run build`, `dist`,
   Node 22 from `.nvmrc`).
4. Save and Deploy. Production URL is `<project>.pages.dev`.
5. Each push to `main` deploys; each PR gets a preview deployment.

## Tag the first deployable version `v0.1.0-site`

That's the marker for "site is live, no domain yet, ready to share."
Subsequent versions: `v0.2.0-site` etc. Don't reuse the app's version
numbers — sites and apps ship on independent cadences.

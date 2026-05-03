---
name: marketing-site-e2e
description: Use when adding or extending E2E tests on a marketing site under /Users/shark/workspace/<App>-site/. Defines the Playwright setup, device/viewport profile matrix, tag-based test selection, and required test categories that all sister sites in this workspace share. Run on every PR; gate Cloudflare Pages preview promotion on green.
---

# Marketing site E2E tests — workspace standard

## Why Playwright

- Same browser engine that Cloudflare Pages preview environments use.
- Fast: 180+ tests across 4 device profiles run in under 30 seconds on
  a static site.
- No flaky framework runtime to mock — tests hit the real preview
  build.
- Trace viewer makes failures debuggable without re-running.

## Install

```bash
npm install --save-dev @playwright/test
npx playwright install chromium --with-deps
```

Add scripts:

```json
"scripts": {
  "test": "playwright test",
  "test:ui": "playwright test --ui",
  "test:report": "playwright show-report"
}
```

Add to `.gitignore`:

```
/test-results/
/playwright-report/
/playwright/.cache/
```

(Common bug: forget to ignore these, then accidentally commit megabytes
of trace.zip files. Add the gitignore entry **before** the first run.)

## Canonical `playwright.config.ts`

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: 'http://127.0.0.1:4321',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4321',
    url: 'http://127.0.0.1:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    { name: 'mobile-portrait', use: { ...devices['iPhone 14'] }, grep: /@mobile|@all/ },
    { name: 'tablet',          use: { ...devices['iPad (gen 7)'] }, grep: /@tablet|@all/ },
    { name: 'desktop',         use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } }, grep: /@desktop|@all/ },
    { name: 'desktop-dark',    use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 }, colorScheme: 'dark' }, grep: /@dark|@all/ },
  ],
});
```

**Tag system**: every test name starts with `@all`, `@mobile`,
`@tablet`, `@desktop`, or `@dark`. The `grep` field on each project
selects which tests run on which device.

- `@all` runs on all four projects (use for locale, SEO, privacy)
- `@mobile` runs only on mobile-portrait (use for mobile nav, overflow)
- `@tablet` runs only on tablet (use for grid breakpoints)
- `@desktop` runs only on desktop (use for desktop nav, multi-col layout)
- `@dark` runs only in dark mode (use for theme tokens)

## Required test files

Every site MUST have these four spec files at minimum:

```
tests/e2e/
  locales.spec.ts        # one test row per locale, ~10 checks each
  privacy.spec.ts        # privacy page per locale
  responsive.spec.ts     # mobile/tablet/desktop layout sanity
  seo.spec.ts            # title, meta, JSON-LD, robots, sitemap, 404
```

## Required checks (don't ship without these)

### Per-locale (in locales.spec.ts)
- HTML `lang` attribute matches BCP47 code
- Translated hero title appears as expected (substring match)
- Translated section heading appears
- Primary CTA (TestFlight/App Store) `href` is correct
- Secondary CTA (GitHub/Email) `href` is correct
- Exercise/feature grid has correct item count
- Hreflang link count = `locales.length + 1` (the `+1` is `x-default`)
- Canonical URL contains the right locale prefix
- Privacy link points to the same-locale privacy page
- Language switcher pre-selects the current locale

### Privacy (in privacy.spec.ts)
- Heading renders in target language
- Data-collection table shows the right number of rows
- Developer email link is present
- Translated copies show the "English is authoritative" notice

### Responsive (in responsive.spec.ts)
- Mobile: primary CTA is above the fold (boundingBox.y < viewport.height)
- Mobile: no horizontal overflow (`scrollWidth ≤ innerWidth + 1`)
- Mobile: header nav is hidden, language switcher is visible
- Tablet: feature grid expands to ≥ 3 columns
- Desktop: header nav links are all visible
- Dark: `body` background equals dark token (`rgb(11, 15, 25)`)

### SEO (in seo.spec.ts)
- `<title>` includes brand name
- `<meta name="description">` length ∈ [60, 200]
- Canonical URL points to production origin
- `og:image` resolves to a real file
- JSON-LD parses and has correct `@type`
- `/robots.txt` returns 200
- `/sitemap.xml` returns 200, contains all locale URLs and hreflang
- `/this-page-does-not-exist` returns 404 with the not-found heading
- Brand icons return 200
- **Zero JS shipped** (response listener for `content-type:
  application/javascript` should collect 0 URLs on the home page)

## Test data attributes

Add `data-testid` to interactive elements that tests need to find
reliably across translations:

```astro
<a href={TESTFLIGHT} class="btn-primary" data-testid="cta-testflight">
  {t.hero.primary}
</a>
```

Translated text breaks selectors like `getByText("Join TestFlight")`.
`data-testid` doesn't.

Required testids per page:
- `cta-testflight` (or app-store equivalent), `cta-github` on home
- `cta-privacy-full` on the privacy callout section
- `exercise-grid` (or `feature-grid`) on any visual grid
- `privacy-article` on the privacy page

## Run before every commit (recommended)

```bash
npm run build && npm test
```

Ship a hook later via the `update-config` skill if you want this
enforced.

## Don't write these tests

Skip:
- Visual snapshot/pixel-diff tests (too flaky on free CI runners,
  requires baseline maintenance per OS)
- Lighthouse-in-CI (use Cloudflare Pages' built-in metrics or a
  separate manual check; LH runs are noisy in CI containers)
- Cross-browser (Firefox, Safari): static HTML + system fonts + Tailwind
  reset works identically across browsers; the marginal value isn't
  worth the 3× CI time

## When tests fail in CI but not locally

1. Check `playwright-report/` (uploaded as artifact in CI).
2. Open `test-results/<test>/trace.zip` in `npx playwright show-trace`.
3. Common cause: locale-specific text changed in dictionary but the
   test still asserts the old phrase. Fix is in the test, not the dict.

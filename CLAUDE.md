# RepZen Marketing Website

This repo holds the marketing website for **RepZen**, an Apple Watch +
iPhone bodyweight rep counter. The app source lives in a sibling repo
at `/Users/shark/workspace/repzen` (also on GitHub at
`alicehometech/repzen`). This site is the public face that converts
visitors into TestFlight beta testers and (later) App Store downloads.

---

## Read this on every session start

The full briefing is in the app repo. Read it end-to-end **before**
proposing any work:

```
/Users/shark/workspace/repzen/docs/website_session_brief.md
```

Then read the source material it points to:
- `/Users/shark/workspace/repzen/docs/marketing_copy.md` — tagline, hero, full intro, benefits, voice rules
- `/Users/shark/workspace/repzen/docs/privacy.md` — full privacy policy (also pre-staged at `src/content/privacy.md` here)
- `/Users/shark/workspace/repzen/docs/exercise_physics.md` — sensor science behind rep counting; great source material for a "How It Works" section
- `/Users/shark/workspace/repzen/docs/app_store_metadata.md` — App Store description draft, keywords; same voice as the website

---

## Project ambition

The user wants RepZen to **reach millions of users**. Every artifact —
copy, design, screenshots, animations — should be evaluated against
that bar, not just "does it function." The user's preference for
maximum autonomy applies: drive end-to-end, batch unavoidable user
actions upfront, don't pepper with permission prompts.

---

## Brand at a glance

- **Colors**: gradient `#0A84FF → #5E5CE6` (Apple system blue → indigo); blue motion arrows in icons use `#1A6FFF`
- **App icon**: pre-staged at `public/icons/repzen-icon-1024.png`
- **Exercise icons**: 10 of them, light + dark variants, in `public/icons/exercise_*.png`
- **Voice**: short sentences, Apple-style cadence, no "AI-powered" / "revolutionary" / unbacked accuracy claims; lead with user benefit, declarative privacy statements

## Critical CTAs

| | URL |
|---|---|
| TestFlight beta (primary CTA NOW) | https://testflight.apple.com/join/T4ygaWD7 |
| App Store (placeholder until live) | TBD |
| Email | mailto:lasmarthome18@gmail.com |
| GitHub (app source) | https://github.com/alicehometech/repzen |
| Privacy policy | self-hosted at `/privacy` (use `src/content/privacy.md`) |

---

## Tech stack — recommendation, not yet committed

- **Astro** is the leading suggestion (perfect for marketing sites,
  ships almost no JS, content-focused). Alternatives: Next.js static
  export, 11ty, or plain HTML + Tailwind.
- **Tailwind CSS** for styling.
- **Hosting**: Vercel or GitHub Pages — both work, both free.
- **Animations**: subtle, motion-reflective (e.g., a sit-up animation
  ticking a counter). No heavy libraries.

User has not picked a stack yet — propose Astro + Tailwind + Vercel
unless they object. Wait for confirmation before installing anything.

---

## Things NOT to do

- ❌ No marketing analytics SDKs. Privacy is the wedge. Use Plausible
  or Fathom (privacy-respecting) at most, ideally nothing.
- ❌ No stock photos of buff people lifting weights. Vibe is honest +
  technical, not generic gym marketing.
- ❌ No claims the app can't back up ("most accurate", "AI-powered",
  "trusted by millions" — none true yet).
- ❌ Do not change the iOS/Watch app code. That's the sibling repo's
  territory.
- ❌ Do not edit `public/icons/*.png` directly — they're copies of the
  app's source assets. Re-run the asset-stage script in the briefing
  if the originals change.

---

## How permissions are configured

`.claude/settings.json` pre-allows: npm/npx/pnpm/bun/yarn, node, astro,
vite, tsc, eslint, prettier, git, gh, vercel, netlify, wrangler,
pandoc, magick, curl, open (for site preview), brew-prefixed commands,
Claude Preview MCP, Claude in Chrome MCP. Routine work should not
prompt.

If you hit a permission prompt, the right fix is to add the pattern to
`.claude/settings.json` rather than ask the user to "Allow once."

---

## Where to commit + push

This repo is at `github.com/alicehometech/repzen-site` (public). Use
the `gh` CLI for GitHub operations — already authenticated as
`alicehometech`.

Same commit cadence as the app repo: per logical change, push
immediately, no long-running uncommitted work.

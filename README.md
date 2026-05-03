# RepZen — Marketing Website

Public-facing marketing site for [RepZen](https://github.com/alicehometech/repzen),
the Apple Watch + iPhone bodyweight rep counter.

**Status:** Pre-construction. Briefing is in
[../repzen/docs/website_session_brief.md](https://github.com/alicehometech/repzen/blob/main/docs/website_session_brief.md).

## What's pre-staged

```
public/icons/                    # Brand assets — copies of app icons
  repzen-icon-1024.png
  exercise_*.png                 # Light variant (black lines, blue arrow)
  exercise_*_dark.png            # Dark variant (white lines, blue arrow)

src/content/
  privacy.md                     # Full privacy policy (publish at /privacy)
  marketing_copy.md              # Tagline, hero, full intro, benefits, voice rules

CLAUDE.md                        # Auto-loaded session context
.claude/settings.json            # Pre-allowed commands so Claude doesn't pester
```

## Critical CTAs

- **Join TestFlight beta**: https://testflight.apple.com/join/T4ygaWD7
- **App Store**: TBD
- **Email**: lasmarthome18@gmail.com
- **App source**: https://github.com/alicehometech/repzen

## Stack

Not yet decided. Recommendation: **Astro + Tailwind + Vercel**. See
CLAUDE.md for context.

## Privacy

This site collects no analytics, uses no cookies, includes no
third-party scripts. The privacy posture mirrors the app's.

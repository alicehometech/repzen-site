---
name: marketing-site-voice
description: Use when writing or editing marketing copy on any app site under /Users/shark/workspace/<App>-site/. Codifies the Apple-style, honest, privacy-first voice used across all sister sites. Refer to this before drafting hero copy, FAQ answers, taglines, App Store descriptions, or section bodies.
---

# Marketing site voice — workspace standard

## Cadence

- **Short sentences.** Period-heavy. "Counts your reps. Stays on your
  wrist." beats "RepZen is a comprehensive solution for tracking your
  bodyweight exercise repetitions."
- **Lead with the user's action**, not the product's feature. "You start
  a set, do your reps, and the count ticks up" beats "Our app provides
  automatic rep counting."
- **Concrete over abstract.** Name the exercises. Give the angle. "A
  sit-up tilts the watch through 60°" beats "Advanced motion analysis."
- **Numbers when you have them.** "10 exercises", "1-to-10 slider", "60
  degrees" — specific numbers earn trust.
- **Three negatives form a beat.** "No buttons. No accounts. No data
  leaving your device. Ever." Apple uses this pattern constantly.

## Words to avoid (NEVER ship)

- ❌ "AI-powered" / "powered by AI" / "intelligent"
- ❌ "revolutionary" / "redefines" / "next-generation"
- ❌ "most accurate" / "#1" / "best in class"
- ❌ "trusted by millions" (unless literally true)
- ❌ "your personal trainer" / "transforms your workouts"
- ❌ "advanced" anything (advanced algorithm, advanced detection)
- ❌ "seamlessly" / "effortlessly" / "magical"
- ❌ "solution" (we don't sell solutions, we ship products)
- ❌ "leveraging" (just say "using")

## Privacy voice (declarative, not defensive)

- ✅ "Stays on your device."
- ❌ "We do not collect your data."
- ✅ "No servers."
- ❌ "We don't share data with third parties."

Declarative privacy statements are stronger because they describe
**facts about the architecture**, not promises about behavior. A
promise can be broken; a missing server cannot betray you.

## Honesty rule

Marketing sites for these apps **lead with what doesn't work**. Apps
that oversell in marketing get one-star reviews on the App Store the
first time a user discovers a limitation. We'd rather convert fewer
visitors who arrive informed than convert more who churn.

Examples:
- "RepZen isn't trying to be the most accurate fitness app on the App
  Store."
- "Pull-ups don't move the wrist enough to count reliably, so they're
  flagged as manual-only — we'd rather say so than show a wrong number."
- "We're new. v0.1.x. Things will break."

## Taglines (≤ 8 words ideal, ≤ 10 max)

- Two beats: `"<verb phrase>. <where/how it lives>."`
- Examples that work:
  - "Counts your reps. Stays on your wrist."
  - "Your habits. Your phone. Your business."
  - "Build the daily. Quietly."
- Examples that don't:
  - "The smart, AI-powered fitness companion you've been waiting for."
  - "Revolutionizing personal productivity for the modern professional."

## Hero body (1–2 sentences, ≤ 3 if needed)

Pattern: state what the app does (concretely), then what it doesn't
need (negatives), then optionally a third sentence with the privacy
beat.

Template:
> `<App>` `<verb-phrase>` `<concrete-list>` automatically — using
> nothing but `<minimal-stack>`. No `<friction-1>`. No `<friction-2>`.
> No data leaving your device. Ever.

## Benefits / features list

Each item: **2-line ALL-CAPS title + 1-2 sentence body.** All caps
title is the Apple App Store style. Title says the user-facing
benefit, not the technical mechanism.

```
COUNTS WHAT YOU ACTUALLY DO
Auto-counts ten exercises by reading your wrist motion. Pick the
exercise, do the reps, see the number rise.
```

Not:

```
ADVANCED CV-ML PIPELINE
A multi-stage convolutional neural network analyzes IMU data streams.
```

## FAQ answers

- Lead with the **honest answer** in the first 6 words.
- Then say what we do instead.
- Then the trade-off if there is one.

> Q: Is RepZen the most accurate rep counter?
> A: **No, and we don't claim to be.** Big-budget apps with cloud ML
> and millions of users will catch counts ours can miss. RepZen's bet
> is on transparency, privacy, and a sensitivity slider you control —
> not on being the absolute best at every exercise.

## "Built by" block

Privacy-first apps are usually built by individuals or small teams.
Lean into it — it's a wedge against the venture-funded incumbents.

> "No team. No investors. No ads to sell. Built by one developer who
> didn't want yet another fitness app with a subscription paywall."

## Localizing the voice

- All voice rules above apply in every language. Apple ships
  marketing in 30+ languages and they all read the same — short,
  declarative, specific.
- Don't hire generic translation services that "smooth out" the cadence.
- See `marketing-site-i18n` skill for the dictionary structure that
  enforces this discipline.

## Source-of-truth file

Keep a `src/content/marketing_copy.md` in every site repo containing
the canonical English versions of: tagline (+ A/B variants), hero
body, full intro, benefits, "why it's different", honest concessions,
voice notes. The dictionary in `src/i18n/strings/en.ts` is generated
**from** this file — don't drift the two apart.

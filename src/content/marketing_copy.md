# RepZen — Marketing Copy

_Reusable across website hero, App Store description, social posts.
Tone: catchy but grounded. No hype words ("revolutionary", "AI-powered",
"#1"). Specific, declarative, honest about limits._

---

## Tagline (≤8 words)

```
Counts your reps. Stays on your wrist.
```

Variations to A/B test:
- `Workout reps, counted automatically.`
- `Your rep counter lives on your wrist.`
- `Bodyweight reps, no manual counting.`
- `Honest rep counting for Apple Watch.`

---

## Hero (1-2 sentences, above-the-fold website)

```
RepZen counts your push-ups, sit-ups, squats, and seven other bodyweight exercises automatically — using nothing but your Apple Watch's motion sensors. No buttons during a set. No accounts. No data leaving your device. Ever.
```

**Why this works:** opens with the concrete thing it does (counts reps),
names exercises (specific, searchable), states what it doesn't need
(buttons, accounts, data exfiltration). Three negatives at the end form
a small declarative beat — "no, no, no, ever."

---

## Full intro (3-4 paragraphs, mid-page)

```
RepZen is a workout rep counter for Apple Watch and iPhone. You start a set, do your reps, and the count ticks up on your wrist as you go. When you hit your target, the set auto-completes — no need to take your wrist off the floor. Multiple exercises chain into a workout plan you build once on your iPhone and run as many times as you want from your Watch.

It works because each exercise has a distinct motion signature on the wrist. A sit-up tilts the watch through 60 degrees as your torso curls up. A push-up rotates the wrist 20 degrees as your elbows bend. A squat sends a clean acceleration pulse through your arm at the bottom and top of the bounce. RepZen uses the Apple Watch's accelerometer, gyroscope, and attitude fusion to read each of these signals — and a different detector for each exercise, because no single algorithm works for everything.

When the count is wrong, you fix it. Every exercise has a sensitivity slider from 1 to 10. Bump it up if reps aren't being caught; drop it if you're getting false counts. Live diagnostics on the Watch show what the sensors are actually detecting in real time, so you can dial in your form rather than guessing at a black box.

Everything runs on your device. RepZen has no servers — there is nowhere for your data to go even if we wanted it. Workouts optionally sync to Apple Health, which is governed by Apple's privacy framework. There are no analytics SDKs, no tracking, no advertising identifier requests, no accounts to create. Free, no ads, no in-app purchases.
```

~1,400 chars. Below App Store description ceiling so you can stitch this
in directly if you want.

---

## Benefits (bullet list, scannable)

For website "Features" or "Why RepZen" section:

```
COUNTS WHAT YOU ACTUALLY DO
Auto-counts ten exercises by reading your wrist motion. Pick the exercise, do the reps, see the number rise.

YOU CONTROL THE SENSITIVITY
1-to-10 slider per exercise so the counter matches your form. Default values work for most people; the slider catches the edge cases.

PRIVATE BY DESIGN
No servers. No accounts. No analytics. No ads. Your motion, heart rate, and workout history never leave your iPhone or Watch.

LIVE SENSOR FEEDBACK
The Watch shows you what the algorithm is detecting (rotation angle, rotation rate) in real time during a rep. No guessing about why a count was missed or false.

PLAN ONCE, RUN ANYWHERE
Build a workout plan on your iPhone — exercises, sets, reps, rest — and the Watch runs it set by set. Plans sync between devices automatically.

INTEGRATES WITH APPLE HEALTH (OPTIONAL)
Step count and completed workouts can flow into Apple Health if you grant permission. Otherwise nothing leaves the app.

FREE, NO ADS, NO PURCHASES
Built by one developer who didn't want yet another fitness app with a subscription paywall. No upsells.
```

---

## Why it's different (the "best at" question, answered honestly)

```
RepZen isn't trying to be the most accurate fitness app on the App Store. Big-budget apps with cloud ML and millions of users will catch counts ours can miss. What RepZen does differently:

PRIVACY THAT'S ACTUALLY PRIVATE
Most fitness apps push your data to a cloud — for sync, for analytics, for monetization, "for backup." RepZen doesn't. Your reps and your heart rate stay in your phone. We don't even have a server.

TRANSPARENCY OVER MAGIC
RepZen tells you which sensor signal is detecting your reps and what threshold it's using. If your sit-ups aren't counting, the live screen shows your wrist tilt is only 12 degrees — drop the trigger threshold or change your form. Most apps just show a number, accurate or not, and leave you to wonder why.

HONEST ABOUT LIMITS
Some exercises (strict pull-ups, certain dips) leave the wrist almost still. RepZen says so up front instead of pretending to count what it can't. We'd rather show "this needs manual counting" than show "5" when reality was 3.

CUSTOMIZABLE BY THE USER, NOT THE COMPANY
A 1-to-10 sensitivity slider per exercise lets you tune for your form, your range of motion, your speed. No vague "easy / medium / hard" presets — just a number you raise or lower until it matches.

NO ACCOUNT, NO LOGIN, NO SUBSCRIPTION
Install, grant motion + Health permission, start counting. No email asked for. No cloud profile. No "Pro tier."

RepZen is the right app for people who want a rep counter — not a fitness platform, not a coaching service, not a social network. If that's you, it's the best we know how to make.
```

---

## Honest concessions (use sparingly, don't lead with these)

For an FAQ or transparency page:

- We're not perfect. Real wrist motion is noisier than the synthetic
  signal our tests use. The slider exists because no single tuning is
  right for every body, every exercise variation, every form quality.
- Pull-ups and certain dips count poorly. The wrist doesn't move enough.
  Marked as "manual-only" until we have a better signal (likely barometer-based,
  for a future version).
- We're new. v0.1.x. Things will break, edge cases will get tuned. We
  ship updates frequently because we listen.
- Built by one developer right now. If you find a bug, it goes
  straight to that one developer (lasmarthome18@gmail.com).

---

## Voice notes for future writers

- Short sentences over long ones. Apple-style cadence.
- "Counts your reps" beats "advanced rep tracking solution."
- Name the exercise (push-ups, sit-ups, squats) — never "your workout" alone.
- Use specific numbers when you have them (10 exercises, 1-10 scale, 60 degrees).
- Avoid: "revolutionary," "powered by AI," "next generation," "redefines,"
  "your personal trainer," "transforms your workouts."
- Lead with the user's action, not the app's feature.
- When discussing privacy: declarative, not defensive ("Stays on your
  device" beats "We do not collect data").

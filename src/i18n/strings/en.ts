import type { Dict } from '~/i18n/types';

export const en: Dict = {
  meta: {
    title: 'RepZen — Counts your reps. Stays on your wrist.',
    description:
      "RepZen counts your push-ups, sit-ups, squats, and seven other bodyweight exercises automatically using your Apple Watch's motion sensors. No accounts. No analytics. No data leaving your device.",
  },
  nav: {
    exercises: 'Exercises',
    how: 'How it works',
    privacy: 'Privacy',
    faq: 'FAQ',
    cta: 'Join TestFlight',
    home: 'RepZen home',
  },
  hero: {
    eyebrow: 'Apple Watch · iPhone',
    titleA: 'Counts your reps.',
    titleB: 'Stays on your wrist.',
    body: "RepZen counts your push-ups, sit-ups, squats, and seven other bodyweight exercises automatically — using nothing but your Apple Watch's motion sensors. No buttons during a set. No accounts. No data leaving your device. Ever.",
    primary: 'Join TestFlight beta',
    secondary: 'View on GitHub',
    note: 'Free. No ads. No in-app purchases. Requires Apple Watch + iPhone.',
    watch: { exercise: 'Push-ups', meta: 'Set 2 of 3 · 23° tilt', chip: 'Counting on-device' },
  },
  exercises: {
    eyebrow: 'Ten exercises',
    title: 'What it counts',
    lede: 'Each exercise has its own detector tuned to the specific motion of your wrist.',
    names: {
      push_up: 'Push-ups',
      sit_up: 'Sit-ups',
      squat: 'Squats',
      lunge: 'Lunges',
      jumping_jack: 'Jumping jacks',
      bicep_curl: 'Bicep curls',
      shoulder_press: 'Shoulder press',
      superman: 'Superman',
      tricep_dip: 'Tricep dips',
      pull_up: 'Pull-ups',
    },
    manualLabel: 'Manual',
    note: "Pull-ups don't move the wrist enough to count reliably, so they're flagged as manual-only — we'd rather say so than show a wrong number.",
  },
  how: {
    eyebrow: 'How it works',
    title: 'Sensors, not guesses.',
    lede: 'No camera. No cloud ML. Just the same motion sensors Apple ships in every Watch, read with a different detector for each exercise.',
    steps: [
      {
        title: 'Read the wrist',
        body: 'The Apple Watch streams accelerometer, gyroscope, and attitude data — three signals that together describe how your wrist moves through space.',
      },
      {
        title: 'Match the signature',
        body: 'Every exercise has a distinct motion. A sit-up tilts the watch through 60°. A push-up rotates the wrist 20°. A squat sends a clean acceleration pulse at the bottom and the top.',
      },
      {
        title: 'Count the rep',
        body: 'A different detector for each exercise watches its signature in real time. Cross the threshold, the count ticks up. Cross back, it arms again. No cloud round-trip.',
      },
    ],
    chips: {
      slider: '<strong>Sensitivity slider</strong> 1–10 per exercise',
      diagnostics: '<strong>Live diagnostics</strong> on the Watch',
      transparency: "<strong>No black box</strong> — see what's detecting",
    },
  },
  privacy: {
    eyebrow: 'Privacy by design',
    titleA: 'Your motion.',
    titleB: 'Your wrist.',
    titleC: 'Your business.',
    lede: 'Most fitness apps push your data to a cloud — for sync, for analytics, for monetization, "for backup." RepZen doesn\'t.',
    points: [
      { title: 'No servers', body: 'There is nowhere for your data to go even if we wanted it. RepZen has no backend.' },
      { title: 'No accounts', body: 'No sign-up, no email, no login. Install, grant motion permission, start counting.' },
      { title: 'No analytics', body: 'No tracking SDKs, no advertising IDs, no telemetry. Not Plausible. Nothing.' },
      { title: 'No data leaves your device', body: 'Motion, heart rate, and workouts stay on your iPhone and Watch. Period.' },
      { title: 'Apple Health, optional', body: 'Sync workouts to Apple Health if you want to. Otherwise nothing leaves the app.' },
      { title: 'Free, no ads, no IAP', body: 'Built by one developer. No subscription, no upsell, no premium tier.' },
    ],
    cta: 'Read the full privacy policy',
  },
  shots: {
    eyebrow: 'Screenshots',
    title: 'Real screens, coming soon.',
    lede: "We're polishing the UI before pinning the marketing screenshots. Join the beta to see the real thing in motion.",
    coming: 'Coming soon',
    items: [
      { label: 'Home', blurb: "Today's plan + activity" },
      { label: 'Live count', blurb: 'Reps tick on your wrist' },
      { label: 'Plan editor', blurb: 'Build a workout once' },
      { label: 'Diagnostics', blurb: "See what's detecting" },
    ],
  },
  built: {
    eyebrow: 'Built by one developer',
    title: 'No team. No investors. No ads to sell.',
    body: "RepZen is built by a single developer who didn't want yet another fitness app with a subscription paywall. The whole iOS + Watch source is on GitHub. Bug reports go straight to the person who wrote the code.",
    gh: 'App source on GitHub',
    email: 'Email the developer',
  },
  faq: {
    eyebrow: 'Honest answers',
    title: 'FAQ',
    lede: "We'd rather tell you what doesn't work than oversell what does.",
    items: [
      {
        q: 'Is RepZen the most accurate rep counter?',
        a: "No, and we don't claim to be. Big-budget apps with cloud ML and millions of users will catch counts ours can miss. RepZen's bet is on transparency, privacy, and a sensitivity slider you control — not on being the absolute best at every exercise.",
      },
      {
        q: 'Why do pull-ups count poorly?',
        a: "On a strict pull-up the wrist barely moves — there's not enough signal in the accelerometer or gyroscope to trigger reliably. We mark pull-ups (and certain dips) as manual-only rather than guess. A future version may use the barometer for height-based detection.",
      },
      {
        q: 'What if the count is wrong?',
        a: 'Every exercise has a sensitivity slider from 1 to 10. Bump it up if reps are missed, drop it if you get false counts. Live diagnostics on the Watch show wrist tilt and rotation in real time, so you can see what the algorithm is detecting and dial it in.',
      },
      {
        q: 'Does any data leave my device?',
        a: "Not unless you turn on Apple Health sync. RepZen has no servers, no accounts, no analytics, and no advertising identifiers. Workouts and motion data stay on your iPhone and Watch. If you grant Health permission, those workouts flow into Apple Health on your device, governed by Apple's privacy framework.",
      },
      {
        q: 'How much does it cost?',
        a: "Free. No ads. No in-app purchases. No subscription. It's built by one developer who didn't want yet another paywalled fitness app.",
      },
      {
        q: 'When is it on the App Store?',
        a: "It's in TestFlight beta now (v0.1.x). The App Store launch will follow once the rep counters are tuned across more bodies, more exercise variations, and more form quality. Join the beta to help us get there.",
      },
    ],
    outroLead: "Have a question we didn't answer? ",
    outroEmail: 'Email the developer',
    outroOr: ' or ',
    outroJoin: 'join the beta',
    outroTrail: '.',
  },
  footer: {
    privacy: 'Privacy',
    contact: 'Contact',
    github: 'GitHub',
    copyright:
      '© {year} RepZen. Built by one developer. Apple Watch, iPhone, and Apple Health are trademarks of Apple Inc.',
  },
  notFound: {
    eyebrow: '404',
    title: 'Page not found.',
    body: "The page you're looking for has moved or never existed. Try the home page.",
    cta: 'Back to RepZen',
  },
  langSwitcher: { label: 'Language' },
  privacyPage: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: May 2, 2026',
    intro:
      "RepZen is a workout tracking application for Apple Watch and iPhone that counts exercise repetitions using the device's motion sensors. We take a data-minimal approach: <strong>all data stays on your device</strong> unless you explicitly sync it to Apple Health.",
    sections: {
      collect: {
        title: 'What we collect and why',
        columns: { data: 'Data', source: 'Source', why: 'Why', where: 'Where it lives' },
        rows: [
          { data: 'Motion data (accelerometer, gyroscope, attitude)', source: 'Apple Watch IMU', why: 'Counting exercise reps', where: 'On-device only — never transmitted off your device' },
          { data: 'Heart rate', source: 'Apple HealthKit', why: 'Showing your HR during workouts', where: 'On-device only' },
          { data: 'Step count', source: 'Apple HealthKit', why: "Showing today's activity", where: 'On-device only' },
          { data: 'Workout history', source: 'Local app storage + Apple Health', why: 'History view, weekly goals', where: 'On-device + Apple Health (your control)' },
          { data: 'Profile (age, weight, height, sex)', source: 'You enter, or pre-filled from Apple Health', why: 'Personalizing the app', where: 'On-device only' },
          { data: 'Plan settings, sensitivity preferences', source: 'You set in the app', why: 'App configuration', where: 'On-device only via App Group container' },
        ],
      },
      donot: {
        title: 'What we do NOT do',
        items: [
          'We do <strong>not</strong> transmit your motion, health, or workout data to any server.',
          'We do <strong>not</strong> use third-party analytics, ads, or tracking SDKs.',
          'We do <strong>not</strong> share your data with anyone.',
          'We do <strong>not</strong> create user accounts. There is no login.',
          'We do <strong>not</strong> access your contacts, photos, location, or microphone.',
        ],
      },
      health: {
        title: 'Apple HealthKit',
        bodyA:
          "If you grant the app permission, RepZen reads from and writes to Apple HealthKit on your device. Apple HealthKit data is encrypted at rest and syncs only between your Apple devices via your iCloud account, controlled by Apple's privacy framework. RepZen never sees this data outside your device.",
        revoke:
          "You can revoke RepZen's HealthKit access at any time in: <strong>Apple Health app → Sharing → Apps → RepZen</strong>",
      },
      music: {
        title: 'Apple Music',
        body:
          'If you choose to play music during workouts, RepZen requests permission to play tracks from your Apple Music library. The app does not transmit or store your music selections.',
      },
      sync: {
        title: 'Watch ↔ iPhone sync',
        body:
          "The Apple Watch app and iPhone app sync settings and completed workouts between each other using Apple's <code>WCSession</code> framework. This data travels directly between your paired devices via Bluetooth/Wi-Fi using Apple's encrypted local channel — it does not pass through any RepZen server.",
      },
      children: {
        title: 'Children',
        body:
          'RepZen does not knowingly collect data from children under 13. The app has no user accounts and no server, so no profile data ever leaves the device.',
      },
      changes: {
        title: 'Changes to this policy',
        body:
          'We will update this page if our data practices change. The "Last updated" date at the top reflects the most recent revision.',
      },
      contact: {
        title: 'Contact',
        body:
          'For privacy questions, contact the developer at: <a href="mailto:lasmarthome18@gmail.com">lasmarthome18@gmail.com</a>',
      },
    },
  },
};

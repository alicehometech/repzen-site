# RepZen — Privacy Policy

_Last updated: May 2, 2026_

RepZen is a workout tracking application for Apple Watch and iPhone that
counts exercise repetitions using the device's motion sensors. We take a
data-minimal approach: **all data stays on your device** unless you
explicitly sync it to Apple Health.

## What we collect and why

| Data | Source | Why | Where it lives |
|------|--------|-----|---------------|
| Motion data (accelerometer, gyroscope, attitude) | Apple Watch IMU | Counting exercise reps | On-device only — never transmitted off your device |
| Heart rate | Apple HealthKit | Showing your HR during workouts | On-device only |
| Step count | Apple HealthKit | Showing today's activity | On-device only |
| Workout history | Local app storage + Apple Health | History view, weekly goals | On-device + Apple Health (your control) |
| Profile (age, weight, height, sex) | You enter, or pre-filled from Apple Health | Personalizing the app | On-device only |
| Plan settings, sensitivity preferences | You set in the app | App configuration | On-device only via App Group container |

## What we do NOT do

- We do **not** transmit your motion, health, or workout data to any server.
- We do **not** use third-party analytics, ads, or tracking SDKs.
- We do **not** share your data with anyone.
- We do **not** create user accounts. There is no login.
- We do **not** access your contacts, photos, location, or microphone.

## Apple HealthKit

If you grant the app permission, RepZen reads from and writes to Apple
HealthKit on your device. Apple HealthKit data is encrypted at rest and
syncs only between your Apple devices via your iCloud account, controlled
by Apple's privacy framework. RepZen never sees this data outside your
device.

You can revoke RepZen's HealthKit access at any time in:
**Apple Health app → Sharing → Apps → RepZen**

## Apple Music

If you choose to play music during workouts, RepZen requests permission
to play tracks from your Apple Music library. The app does not transmit
or store your music selections.

## Watch ↔ iPhone sync

The Apple Watch app and iPhone app sync settings and completed workouts
between each other using Apple's `WCSession` framework. This data
travels directly between your paired devices via Bluetooth/Wi-Fi using
Apple's encrypted local channel — it does not pass through any RepZen
server.

## Children

RepZen does not knowingly collect data from children under 13. The app
has no user accounts and no server, so no profile data ever leaves the
device.

## Changes to this policy

We will update this page if our data practices change. The "Last
updated" date at the top reflects the most recent revision.

## Contact

For privacy questions, contact the developer at:
**lasmarthome18@gmail.com**

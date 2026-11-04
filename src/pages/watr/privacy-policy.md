---
layout: ../../layouts/PrivacyPolicyLayout.astro
title: Watr — Privacy Policy
projectName: Watr
projectHref: /project/watr
lang: en
description: How Watr handles location, camera images, subscriptions, local history, and requests to delete data.
translations:
  - label: English
    href: /watr/privacy-policy
    lang: en
  - label: Español
    href: /watr/privacy-policy/es
    lang: es
---

# Watr — Privacy Policy

**Effective and last updated: November 4, 2026.**

Watr is developed and operated by **Tomás Hurrell (HurrellT)**. Contact: [hurrelltomas.dev@gmail.com](mailto:hurrelltomas.dev@gmail.com?subject=Watr%20privacy).

This policy covers the current Android version of Watr (`com.watr.app`), a hydration-habit app with reminders, optional location profiles, visual verification, and subscriptions. It explains what the app and its service providers handle, why, and what you can control.

## 1. Routine, saved places, and break history

Watr stores your reminder interval, days and hours, alert mode, pauses, language preference, onboarding choices, and pending break on your device. Saved places include the name you enter, coordinates, radius, and alert mode. History contains break timestamps and outcomes, and may include a saved place name or the reason a reminder was suppressed. The app retains up to **1,000 history entries**.

This app data is used to schedule reminders, apply your preferences, and show progress. Watr does not upload your routine, saved places, coordinates, or break history to a developer-operated server or to RevenueCat.

## 2. Optional location, including background location

Location profiles are optional. Watr requests precise location to save where you are and to check whether you are inside a saved area. Android may also provide approximate location, but an insufficiently accurate position cannot be used to confirm that area.

If you enable **“Only in my places”**, Watr requests background location separately. With that permission, it uses Google Play services to register geofences and check your current position when deciding whether to issue a scheduled reminder, **even when the app is closed or not visible**. This lets Watr stay quiet outside your places and use the alert mode selected for each place. If a sufficiently recent and accurate position cannot be confirmed, location-restricted reminders stay silent.

Watr does not maintain a route or continuous location-history database. Saved coordinates remain on the device; current location readings are processed to make the reminder decision. Google Play services handles location and geofencing requests on the device and may process associated information under [Google’s Privacy Policy](https://policies.google.com/privacy). Watr does not collect Wi-Fi names, router identifiers, or Wi-Fi passwords itself.

You can use reminders without location profiles. Disable “Only in my places”, delete places, or revoke location permissions in Android settings to stop that feature. Revoking background location leaves location-restricted reminders silent.

## 3. Camera and on-device visual verification

Watr accesses the camera only while you open a break’s camera flow and grant permission. It processes live frames locally with MediaPipe and ML Kit to detect a container and a gesture consistent with drinking. Frames and temporary detection results are held in memory while needed for that session. Watr does not save photos or video, upload camera frames, access your photo library, or request microphone access.

Face detection locates a face; it is not facial identification. Watr does not enroll identities, create a persistent biometric profile, or retain a face template. Verification cannot establish the liquid’s composition, swallowing, or a volume consumed. The saved break result is separate from the temporary camera images.

You can deny or revoke camera permission. Visual verification will then be unavailable, but you can still silence and skip a reminder.

## 4. Notifications, alarms, and background operation

Notification permission is used to display hydration reminders and actions to open or skip a break. Exact-alarm access lets Android schedule reminders precisely. A foreground service, vibration, and a short wake lock may be used to deliver a bounded alert; boot and time-change events restore the schedule. These permissions do not give Watr access to your other apps’ notifications, contacts, messages, or calendar. You control notification, sound, vibration, and alarm permissions in Android settings.

## 5. Purchases and RevenueCat

Google Play processes payments and subscriptions. Watr uses RevenueCat to load plans, validate purchases, restore access, and check whether Pro is active. The SDK can contact RevenueCat when the app starts, before a purchase. It uses a generated pseudonymous app identifier and processes purchase tokens, transaction and subscription status, and technical information such as app/device versions, locale, and connection metadata. Watr does not send it camera images, saved coordinates, or break history, and does not receive full payment-card details. See [RevenueCat’s Privacy Policy](https://www.revenuecat.com/privacy-policy) and [Google’s Privacy Policy](https://policies.google.com/privacy).

## 6. Google SDKs and technical data

Although camera frames stay local, ML Kit and MediaPipe may send Google operational diagnostics and usage metrics: device/app information, installation identifiers, API configuration, performance, and errors. These are used to operate and improve those SDKs. See [ML Kit’s data disclosure](https://developers.google.com/ml-kit/android-data-disclosure), the [MediaPipe privacy notice](https://github.com/google-ai-edge/mediapipe#privacy-notice), and [Google’s Privacy Policy](https://policies.google.com/privacy).

Watr has no advertising SDK or developer-operated advertising or behavioral-analytics service. The developer does not sell personal data or use location, camera images, or break history for advertising.

## 7. Storage, security, and retention

App records are stored in Android’s app-private storage without an additional Watr-managed encryption layer. Watr disables its Android app-data backup. Camera frames are temporary; history is capped as described above; routine and saved places remain until you delete them or clear app data.

Subscription information is retained by the store and RevenueCat as needed for access, restoration, accounting, fraud prevention, and legal obligations. Removing Watr does not itself erase those providers’ records or cancel a subscription. Their processing may occur outside your country, including in the United States, under their terms and applicable safeguards. Provider network services use secure connections; no storage or transmission method can be guaranteed completely secure.

If you contact the developer, your email and the information you provide are used to address the request and kept only as needed for that purpose and applicable legal obligations.

## 8. Deletion and your choices

- **History:** open Watr’s privacy screen and choose **“Clear history on this phone”**.
- **Saved places:** delete each place from Places. You can also disable their use and revoke location permission.
- **All local app data:** use Android’s **Clear storage / Clear app data**, or uninstall Watr. The developer cannot remotely erase data that exists only on your device.
- **Subscription:** manage or cancel it in [Google Play subscriptions](https://play.google.com/store/account/subscriptions). Clearing data or uninstalling does not cancel billing.
- **Provider-held data or privacy requests:** email [hurrelltomas@gmail.com](mailto:hurrelltomas@gmail.com?subject=Watr%20data%20deletion%20request). Include “Watr” and enough information to identify the relevant purchase, such as a Google Play order number if applicable. We may need to verify the request. Do not send passwords or full card details. We will address deletion requests, including relevant RevenueCat records, subject to legal retention requirements; Google handles its own account and payment records.

Watr does not require you to create a Watr account. Depending on applicable law, you may have rights to access, correct, delete, restrict, or obtain a copy of personal data, object to certain uses, withdraw consent, or complain to a data-protection authority. Use the contact above to exercise those rights. Revoking a permission affects future access and may disable the related feature.

## 9. Children and health information

Watr is a general habit tool and is not specifically directed at children. It does not request a medical history, body measurements, or access to Health Connect. Break records describe app activity; Watr does not measure fluid volume or provide medical advice. Contact the developer about any child-related privacy concern.

## 10. This website and future changes

This policy page is hosted on Vercel. Visiting it may produce ordinary hosting/security logs, including an IP address and browser/request information. The portfolio stores your light/dark theme preference in browser local storage. This website does not receive your Watr camera images, saved places, or break history. See [Vercel’s Privacy Notice](https://vercel.com/legal/privacy-policy).

The date above identifies this policy’s current version. If Watr introduces an iOS release, remote image/video analysis, account features, or materially different data practices, the relevant disclosures will be updated before those changes are released, with notice and consent where required.

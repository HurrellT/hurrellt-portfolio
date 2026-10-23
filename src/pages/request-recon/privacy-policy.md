---
layout: ../../layouts/PrivacyPolicyLayout.astro
---

# Request Recon — Privacy Policy

## What the extension handles

Request Recon is a Chrome DevTools extension for inspecting network traffic and testing API response overrides. When you start capture, it accesses request URLs and methods, request and response headers, supported request and response bodies, HTTP status codes, network errors, timestamps, and GraphQL operation details and variables when available. This data may contain personal information, authentication tokens, cookies present in captured headers, or other sensitive information from the application you inspect.

Capture is limited to tabs with active capture sessions. Traffic visibility filters change the displayed list, not what the active session captures. Capture stops when you stop the session or close its DevTools panel, with a two-second grace period for panel reconnection. You can also stop all capture sessions from the extension popup.

## Why the extension uses this information

The extension uses this information to display captured requests and responses, match your rules, and apply your chosen response bodies, headers, HTTP status codes, or simulated failures. Rules are shared between active capture sessions and apply where their matching conditions are met.

Request Recon uses the debugger permission for capture and response interception, and the storage permission to save rules and preferences.

## Storage and retention

Captured traffic is held in memory and is not saved as a request-history database. The panel retains at most 1,000 requests and approximately 32 MiB of captured data. Supported text response previews are limited to 256 KiB per response; request-body previews and matching use up to 64 KiB. Clear the request list or close the panel to remove its captured history from the interface and memory as its context is released. Stopping capture alone does not clear requests already displayed in the panel.

Saved rules and settings are stored using Chrome's local extension storage, not Chrome Sync. Rules may include URL patterns, names, request-body filters, GraphQL matching fields, replacement response bodies, response headers, status codes, and timestamps. Language and traffic visibility preferences are also saved locally. Saved rules persist until you delete them or remove the extension. The extension does not add application-level encryption to this storage.

## Transmission and sharing

Request Recon does not upload captured traffic, saved rules, or preferences to the developer. It has no developer-operated analytics, advertising, or telemetry service and does not sell data or use it for advertising or credit decisions.

The web application being inspected continues to communicate with its own servers. Response interception happens after the request has been sent; it does not prevent server-side actions. Replacement responses are delivered to the inspected application and are accessible to that application. When a rule is applied, the extension may display a page notification with a generic label, request method, and status; it does not include rule names or request URLs in that notification.

If you export rules, the extension creates a JSON file containing the saved rule values on your device. Exported files may contain sensitive information. You control whether and with whom to share them. The extension does not delete copies that you export or share outside the extension.

## Your controls

You can start or stop capture, clear the displayed request history, edit or delete saved rules, disable rules, and remove the extension. To remove all persistent extension data, uninstall the extension. Delete exported files separately if you no longer need them.

## Limited Use

Request Recon's use of information received from Google APIs adheres to the Chrome Web Store User Data Policy, including the Limited Use requirements. Data is used only for the inspection and response-testing features described above.

## Changes

This policy must be updated if the extension's data practices change. Any introduction of cloud services, telemetry, account features, or different data uses requires reviewing the policy and the Chrome Web Store disclosures before release.

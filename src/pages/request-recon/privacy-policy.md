---
layout: ../../layouts/PrivacyPolicyLayout.astro
title: Request Recon — Privacy Policy
projectName: Request Recon
projectHref: /project/request-recon
lang: en
description: How Request Recon handles captured network traffic, local rules, optional AI generation, permissions, and requests to delete data.
translations:
  - label: English
    href: /request-recon/privacy-policy
    lang: en
  - label: Español
    href: /request-recon/privacy-policy/es
    lang: es
---

# Request Recon — Privacy Policy

**Effective and last updated: November 4, 2026.**

Request Recon is developed and operated by **Tomás Hurrell (HurrellT)**. Contact: [hurrelltomas.dev@gmail.com](mailto:hurrelltomas.dev@gmail.com?subject=Request%20Recon%20privacy).

This policy covers Request Recon, a Chrome DevTools extension for inspecting network traffic and testing API response overrides, including its optional experimental AI response generator where available. It explains what the extension handles, when information leaves your browser, and what you can control. Request Recon does not require you to create an account with the developer.

## 1. Captured traffic and its purpose

When you start capture, Request Recon accesses request URLs and methods, request and response headers, supported request and response bodies, HTTP status codes, network errors, timestamps, and GraphQL operation details and variables when available. These can contain personal information, authentication tokens, cookies present in captured headers, or other sensitive information from the application you inspect. Sensitive values are not automatically removed from captured content.

This information is used to display traffic, match your rules, and apply your chosen replacement bodies, headers, HTTP status codes, or simulated failures. Rules are shared between active capture sessions and apply where their matching conditions are met.

Capture is limited to tabs with active capture sessions. Traffic visibility filters change the displayed list, not what the session captures. Capture stops when you stop the session or close its DevTools panel, with a two-second grace period for panel reconnection. You can also stop all sessions from the extension popup.

## 2. Chrome permissions

The **debugger** permission lets Request Recon attach to the inspected tab for network capture and response interception. The **storage** permission saves rules and preferences and, when you use AI generation, holds connection settings and session credentials.

The optional AI feature requests host access for your selected provider when generating a response or fetching available models. The permission covers the selected scheme and host; requests use the configured generation endpoint or its model-list endpoint. Merely opening the panel does not request that access or contact a model provider. Capture and manual rule creation work without an AI provider. Previously granted host access can be revoked in Chrome’s extension settings.

## 3. Local storage and retention

Captured traffic is held in memory, without a persistent request-history database. The panel retains at most **1,000 requests** and approximately **32 MiB** of captured data. Supported text response previews are limited to **256 KiB** per response; request-body previews and matching use up to **64 KiB**. Clearing the list removes its displayed history. Closing the panel releases its captured history as that context is released; stopping capture alone does not clear requests already displayed.

Saved rules and settings use Chrome’s local extension storage, **not Chrome Sync**. They can include rule names, URL patterns, request-body filters, GraphQL matching fields, replacement response bodies, response headers, HTTP status codes, timestamps, language, and traffic visibility preferences. These values remain until you delete them or uninstall the extension.

For AI generation, provider, endpoint, and model preferences are saved locally when you generate. API tokens are stored separately in Chrome’s in-memory session storage, bound to the exact configured endpoint. Chrome clears that storage on browser restart or extension reload, update, or disable. Open panels can also hold a token in memory. Tokens are not included in rule exports.

AI instructions, response samples, model lists, and generated previews remain in panel memory. A generated name, status, or response body becomes part of persistent rule storage and exports only if you save the proposed rule.

## 4. Optional AI generation and model discovery

Generating requires you to review the editable response sample, enter instructions, agree to the disclosure, and choose **Generate preview**. Request Recon then sends your instruction (up to **8 KiB**), the response sample (up to **32 KiB**), and its original HTTP status directly to your selected endpoint. Captured URLs, request/response headers, request bodies, and GraphQL variables are not automatically included. Your sample or instruction can still contain sensitive information; you control what to remove before sending. Generation is not started automatically.

Fetching models is a separate metadata request to the chosen provider, with your configured API token when supplied or required. It sends no response sample, instruction, or captured traffic. **Fetch models when changing provider** is enabled by default: choosing a provider can start that request after the required host permission and credentials are available. You can turn the option off and fetch manually. Opening the panel alone does not fetch models. Lists are cleared when the provider, endpoint, or token changes.

Recipients depend on your settings: your Ollama or LM Studio server, OpenAI, Google Gemini, OpenRouter and its upstream model providers, or an operator of a custom compatible endpoint. Your token is sent to the selected endpoint for authentication. Remote services also receive ordinary connection information, such as your IP address, and may retain inputs and outputs or process them outside your country under their own terms and account settings. Provider charges may apply. See the policies of [OpenAI](https://openai.com/policies/privacy-policy/), [Google](https://policies.google.com/privacy), and [OpenRouter](https://openrouter.ai/privacy), or those of your chosen server operator.

These requests do not pass through a Request Recon backend. A loopback endpoint sends data to a server on your computer; that server’s own behavior and configuration determine whether it uses further services. Request Recon requires HTTPS for remote endpoints and permits unencrypted HTTP only for local loopback servers. Its provider requests refuse redirects.

## 5. Sharing, inspected applications, and exported files

Request Recon does not upload captured traffic, rules, preferences, or AI credentials to the developer. It has no developer-operated analytics, advertising, or telemetry service. The developer does not sell this data or use it for advertising or credit decisions. Optional AI transmissions are limited to the actions described above.

The inspected application continues communicating with its own servers. Response interception occurs **after the request has been sent** and does not prevent server-side actions. Replacement responses are delivered to that application and can be read by it. Page notifications about applied rules use a generic label, request method, and status, without rule names or request URLs.

Rule imports read the JSON file you select. Exports create a JSON file on your device containing saved rule values, which can include sensitive response fixtures, filters, or credentials you put in those values. You control whether and with whom to share exported files. The extension cannot remove exported or shared copies.

The donation link opens Ko-fi in a separate tab. Any donation or payment is handled by Ko-fi and its payment providers under their terms; Request Recon does not embed their payment SDK or receive full card details through the extension.

## 6. Security and support communications

Request Recon relies on Chrome’s extension storage and does not add its own encryption layer to saved rules and preferences. Remote AI requests use HTTPS as described above. No storage or transmission method can be guaranteed completely secure.

If you contact the developer, your email address and the information you provide are used to respond and retained only as needed for the request and applicable legal obligations. Do not send passwords, API tokens, or captured confidential traffic when requesting support.

## 7. Deletion and your choices

- **Capture:** stop a session or stop all sessions from the popup. Clear the displayed list separately to remove history; close DevTools to release the panel’s in-memory data.
- **Rules:** edit, disable, or delete saved rules. Disabling a rule does not delete its contents.
- **All persistent extension data:** uninstall Request Recon. Delete exported files and copies separately.
- **AI connection:** use **Forget saved connection** to remove stored connection preferences and the session token. Close other open panels to release their in-memory copies. Revoke endpoint host access separately in Chrome’s extension settings.
- **AI inputs and provider records:** edit the sample before transmission, leave AI unused, cancel a generation, or discard its preview. Generating alone does not save or activate a rule. Clearing local data or cancelling a request cannot erase information already received by a provider; use that provider’s data controls.
- **Privacy requests:** email [hurrelltomas.dev@gmail.com](mailto:hurrelltomas.dev@gmail.com?subject=Request%20Recon%20data%20deletion%20request), mentioning Request Recon. The developer cannot remotely erase data that exists only on your device or independently held provider records.

## 8. Privacy rights and children

Depending on applicable law, you may have rights to access, correct, delete, restrict, or obtain a copy of personal data, object to certain uses, withdraw consent, or complain to a data-protection authority. Use the contact above for developer-held information. We may need to verify a request and retain information where legally required.

Request Recon is a developer tool and is not specifically directed at children. Contact the developer about any child-related privacy concern.

## 9. Limited Use

Information obtained through Chrome APIs is used only to provide the inspection and response-testing features described here, in accordance with the [Chrome Web Store User Data Policy, including its Limited Use requirements](https://developer.chrome.com/docs/webstore/program-policies/user-data-faq#limited-uses-of-user-data).

## 10. This website and future changes

This policy page is hosted on Vercel. Visiting it may produce ordinary hosting/security logs, including an IP address and browser/request information. The portfolio stores your light/dark theme preference in browser local storage. This website does not receive the traffic or rules captured by your extension. See [Vercel’s Privacy Notice](https://vercel.com/legal/privacy-notice).

The date above identifies this policy’s current version. Changes to cloud services, telemetry, account features, or other material data practices will be reflected in the policy and Chrome Web Store disclosures before release, with notice and consent where required.

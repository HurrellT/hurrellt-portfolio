---
title: Request Recon
img: request-recon/4.png
description: Chrome DevTools extension to inspect network traffic and test REST and GraphQL APIs with custom response overrides.
link: https://github.com/HurrellT/request-recon
sourcecode: https://github.com/HurrellT/request-recon
linkAvailable: false
sourcecodeAvailable: true
---

Request Recon is a Chrome DevTools extension I built to make frontend development and API testing easier. Capture network requests, inspect responses, and create reusable rules to test how an application behaves with different data, HTTP status codes, headers, or simulated failures.

### Features

- Inspect request and response headers, HTTP status codes, and supported text bodies.
- Override REST API responses and match GraphQL operations by name and request body.
- Change response bodies, headers, and status codes, or simulate response errors.
- Save, enable, disable, import, and export response rules.
- Search requests and filter traffic to focus on what matters.
- Switch between English and Spanish.

Built with React, Vite, and the Chrome extension APIs. Captured traffic stays in memory, while rules and preferences are saved locally. Response overrides happen after requests reach the server.

### Privacy

The policies below explain captured traffic, local rules, optional AI providers, permissions, and how to delete data or contact the developer.

- [Request Recon Privacy Policy — English](/request-recon/privacy-policy)
- [Política de privacidad de Request Recon — Español](/request-recon/privacy-policy/es)

## Screenshots

Select a screenshot to view it at full size.

<figure>
  <a href="/images/request-recon/1.png" target="_blank" rel="noopener noreferrer">
    <img src="/images/request-recon/1.png" alt="Request Recon displaying captured requests, response headers, and a JSON response body in Chrome DevTools" loading="lazy" width="1920" height="1048" />
  </a>
  <figcaption>Inspect captured requests and response details.</figcaption>
</figure>

<figure>
  <a href="/images/request-recon/2.png" target="_blank" rel="noopener noreferrer">
    <img src="/images/request-recon/2.png" alt="Creating a REST response override with a URL pattern, HTTP method, status code, and replacement JSON body" loading="lazy" width="1920" height="1048" />
  </a>
  <figcaption>Create a response override from a captured request.</figcaption>
</figure>

<figure>
  <a href="/images/request-recon/3.png" target="_blank" rel="noopener noreferrer">
    <img src="/images/request-recon/3.png" alt="Saved rules sidebar with an enabled response override and matching request diagnostics" loading="lazy" width="1920" height="1048" />
  </a>
  <figcaption>Manage saved rules and inspect matching requests.</figcaption>
</figure>

<figure>
  <a href="/images/request-recon/4.png" target="_blank" rel="noopener noreferrer">
    <img src="/images/request-recon/4.png" alt="An intercepted REST request returning the custom user data defined in the response rule" loading="lazy" width="1920" height="1048" />
  </a>
  <figcaption>See a REST response override applied in the browser.</figcaption>
</figure>

<figure>
  <a href="/images/request-recon/5.png" target="_blank" rel="noopener noreferrer">
    <img src="/images/request-recon/5.png" alt="Configuring a GraphQL response rule that matches the GetUser operation" loading="lazy" width="1920" height="1048" />
  </a>
  <figcaption>Match a specific GraphQL operation.</figcaption>
</figure>

<figure>
  <a href="/images/request-recon/6.png" target="_blank" rel="noopener noreferrer">
    <img src="/images/request-recon/6.png" alt="GraphQL playground showing a modified GetUser response alongside the active Request Recon rule" loading="lazy" width="1920" height="1048" />
  </a>
  <figcaption>Test GraphQL responses with custom data.</figcaption>
</figure>

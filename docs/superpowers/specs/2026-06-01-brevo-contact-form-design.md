# Contact Form: EmailJS → Brevo Migration

**Date:** 2026-06-01  
**Status:** Approved

## Problem

Current EmailJS integration sends from the browser, exposing API keys in client-side code. The configured SMTP service is returning HTTP 412 (auth failure), so emails are not being delivered. On failure, the user sees no feedback.

## Solution

Replace EmailJS with a Next.js API route that calls the Brevo REST API server-side. API key stays in env vars, never reaches the browser.

## Architecture

```
Browser (ContactForm.tsx)
  └─ POST /api/contact {name, email, message}
       └─ app/api/contact/route.ts
            └─ POST https://api.brevo.com/v3/smtp/email
                 └─ delivers to marcls.arbucies@gmail.com
```

## Components

### `app/api/contact/route.ts` (new)

- Accepts `POST` only
- Reads `name`, `email`, `message` from JSON body
- Validates all three fields are present and non-empty; returns `400` if not
- Calls `https://api.brevo.com/v3/smtp/email` with `BREVO_API_KEY` from env
- Brevo payload: sender name/email, recipient `CONTACT_EMAIL`, subject `"New contact from {name}"`, text body with name + email + message
- Returns `200 { ok: true }` on success, `500 { error: "..." }` on Brevo failure
- No body logged server-side (privacy)

### `app/components/ContactForm.tsx` (modified)

- Remove `emailjs` import and `@emailjs/browser` usage
- Add `error` state (string | null)
- `sendEmail` becomes `async`, calls `fetch('/api/contact', { method: 'POST', body: JSON.stringify({name, email, message}) })`
- On success (`ok: true`): clear fields, set `sent = true`, auto-clear after 3s (existing behavior preserved)
- On failure: set `error` message, do not clear fields (user can retry)
- Render error banner below submit button (mirrors existing success banner pattern)

### `.env` (modified)

Add:
```
BREVO_API_KEY=<your_brevo_api_key>
CONTACT_EMAIL=marcls.arbucies@gmail.com
```

Remove: EmailJS keys (`service_den3687`, `template_09dolbz`, `_orKLMljXleg5Zowm` — currently hardcoded in component, not in env)

### `package.json` (modified)

Remove `@emailjs/browser` dependency.

## Error Handling

| Scenario | Behavior |
|---|---|
| Missing field | API returns 400; form shows error banner |
| Brevo API error | API returns 500; form shows error banner, fields preserved |
| Network error | `fetch` catch; form shows error banner, fields preserved |
| Success | Fields cleared, success banner shown 3s |

## Env Vars

| Var | Where | Purpose |
|---|---|---|
| `BREVO_API_KEY` | server-only | Brevo transactional email API key |
| `CONTACT_EMAIL` | server-only | Destination inbox |

Both are server-side only — never sent to the browser.

## Out of Scope

- Email templates (plain text body is sufficient)
- Rate limiting
- CAPTCHA
- Attachments

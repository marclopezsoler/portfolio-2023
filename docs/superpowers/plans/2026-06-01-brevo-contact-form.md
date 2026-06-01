# Brevo Contact Form Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace broken client-side EmailJS with a Next.js API route that sends email via Brevo REST API, with proper error feedback to the user.

**Architecture:** A new `app/api/contact/route.ts` server-side handler receives form data, validates it, and calls the Brevo transactional email API using a server-only API key. `ContactForm.tsx` posts to this route and shows both success and error states.

**Tech Stack:** Next.js 13 App Router API routes, Brevo REST API (`https://api.brevo.com/v3/smtp/email`), React useState, TypeScript.

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `app/api/contact/route.ts` | Validate body, call Brevo API, return 200/400/500 |
| Modify | `app/components/ContactForm.tsx` | Remove emailjs, fetch `/api/contact`, show error banner |
| Modify | `.env` | Add `BREVO_API_KEY`, `CONTACT_EMAIL` |
| Modify | `package.json` | Remove `@emailjs/browser` |

---

### Task 1: Add env vars

**Files:**
- Modify: `.env`

> No test framework exists in this project — verification steps use the running dev server (`npm run dev` on port 3000).

- [ ] **Step 1: Add Brevo vars to `.env`**

Open `.env` and add these two lines (keep the existing nodemailer lines — don't remove them yet):

```
BREVO_API_KEY=<paste_your_brevo_api_key_here>
CONTACT_EMAIL=marcls.arbucies@gmail.com
```

To get your Brevo API key: Brevo dashboard → top-right avatar → SMTP & API → API Keys → Generate a new API key.

- [ ] **Step 2: Verify env is gitignored**

```bash
grep -n "\.env" .gitignore
```

Expected: at least one line matching `.env` (not `.env.example`). If `.env` is not ignored, add it:

```bash
echo ".env" >> .gitignore
```

- [ ] **Step 3: Commit**

```bash
git add .gitignore
git commit -m "chore: ensure .env is gitignored"
```

(Do NOT commit `.env` itself.)

---

### Task 2: Create the API route

**Files:**
- Create: `app/api/contact/route.ts`

- [ ] **Step 1: Create directory and file**

```bash
mkdir -p app/api/contact
```

Create `app/api/contact/route.ts` with this content:

```typescript
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      sender: { name: "Portfolio Contact", email: process.env.CONTACT_EMAIL },
      to: [{ email: process.env.CONTACT_EMAIL }],
      subject: `New contact from ${name}`,
      textContent: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("Brevo error:", res.status, body);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 2: Verify route loads without errors**

With dev server running on port 3000, test the route manually:

```bash
curl -s -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{}' | cat
```

Expected output:
```json
{"error":"All fields are required."}
```

- [ ] **Step 3: Test with valid payload (real send)**

```bash
curl -s -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello from plan verification"}' | cat
```

Expected output:
```json
{"ok":true}
```

Check `marcls.arbucies@gmail.com` inbox for the email.

If you get `{"error":"Failed to send message."}` instead, check the dev server terminal — it logs `Brevo error: <status> <body>`. Common causes: wrong API key, Brevo account not activated, or sender email not verified in Brevo.

- [ ] **Step 4: Commit**

```bash
git add app/api/contact/route.ts
git commit -m "feat: add /api/contact route using Brevo REST API"
```

---

### Task 3: Update ContactForm

**Files:**
- Modify: `app/components/ContactForm.tsx`

- [ ] **Step 1: Replace the full file content**

Replace `app/components/ContactForm.tsx` with:

```typescript
import React, { useRef, useState } from "react";
import styles from "@/public/styles/components/ContactForm.module.scss";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setName("");
      setEmail("");
      setMessage("");
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.main}>
      <div>
        <label>Name *</label>
        <input
          type="text"
          name="user_name"
          value={name}
          className={styles.name}
          placeholder="Enter your name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email *</label>
        <input
          type="email"
          name="user_email"
          value={email}
          className={styles.email}
          placeholder="Enter your email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Message *</label>
        <textarea
          name="message"
          value={message}
          className={styles.message}
          placeholder="Say something..."
          required
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button className={styles.button_parent} disabled={loading}>
        <input
          type="submit"
          value={loading ? "SENDING..." : "SEND MESSAGE"}
          className={styles.button}
          disabled={loading}
        />
      </button>
      <p className={`${styles.sent} ${sent ? styles.show : ""}`}>
        Your message has been successfully sent!
      </p>
      {error && (
        <p className={`${styles.sent} ${styles.show}`} style={{ color: "red" }}>
          {error}
        </p>
      )}
    </form>
  );
}
```

Key changes from original:
- Removed `emailjs` import
- Added `error` and `loading` state
- `sendEmail` is now `async`, calls `/api/contact`
- Shows error banner on failure (fixes silent-fail bug)
- Fixed placeholder typo: `"Enter yout email address"` → `"Enter your email address"`
- Button shows `"SENDING..."` and disables during request

- [ ] **Step 2: Verify form works in browser**

Navigate to `http://localhost:3000/contact`. Fill in the form and submit. Expected:
- Button shows "SENDING..." during request
- On success: fields clear, green success banner appears for 3s
- Check inbox for email

Also test failure path: temporarily set `BREVO_API_KEY=invalid` in `.env`, restart dev server, submit form. Expected: error banner appears with "Failed to send message.", fields stay populated. Restore the real key after.

- [ ] **Step 3: Commit**

```bash
git add app/components/ContactForm.tsx
git commit -m "feat: migrate ContactForm to /api/contact, add error state, fix placeholder typo"
```

---

### Task 4: Remove EmailJS dependency

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Uninstall emailjs**

```bash
npm uninstall @emailjs/browser
```

- [ ] **Step 2: Verify build still passes**

```bash
npm run build 2>&1 | tail -20
```

Expected: build completes with no errors referencing `emailjs`.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: remove @emailjs/browser dependency"
```

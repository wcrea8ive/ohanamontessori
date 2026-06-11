@AGENTS.md

# Ohana Montessori — ohanamontessori.com

Nature-inspired Montessori school website in Santa Ana, CA. Next.js 16 App Router, deployed on Vercel.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, React 19, TypeScript)
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` in globals.css)
- **Animations**: Framer Motion
- **Fonts**: Cormorant Garamond (headings) + Nunito (body) via `next/font/google`
- **Email**: Resend for contact form emails
- **Icons**: Lucide React

---

## Hosting & Infrastructure

| Service | URL / Location |
|---|---|
| Live site | https://ohanamontessori.com |
| Vercel project | Auto-deploys from GitHub `main` branch |

---

## Deploy Workflow — CRITICAL

**Never auto-push. Commit only. Push only when the user says "deploy".**

```bash
# Commit (anytime)
git add <files>
git commit -m "message"

# Deploy (only when user says "deploy")
git push origin main
```

---

## Environment Variables

`.env.local` is gitignored — recreate manually on new machines:
```
RESEND_API_KEY=your_key_here
```

---

## Design System

**Color Variables** (in globals.css):
- `--sage`: #6B8F71 (primary accent — sage green)
- `--sage-dark`: #4A6E50
- `--terracotta`: #C07850 (secondary accent)
- `--cream`: #FEFAF4 (main background)
- `--cream-dark`: #F2EBE0 (section alternating bg)
- `--forest`: #1E2820 (dark sections, footer, CTABanner)
- `--forest-dark`: #141D16
- `--text`: #1C1C18 (primary text)
- `--text-muted`: #6B6B5E
- `--border`: #E2D8C8

**Fonts**:
- Headings: `var(--font-cormorant)` — Cormorant Garamond serif
- Body: `var(--font-nunito)` — Nunito sans-serif

---

## Project Structure

```
app/
  page.tsx                    # Homepage
  layout.tsx                  # Root layout (fonts, header, footer, schema)
  globals.css                 # Global styles + Tailwind + CSS vars
  api/contact/route.ts        # Contact form API — Resend emails
  welcome/page.tsx            # About/Welcome
  our-approach/page.tsx       # Our Approach
  our-philosophy/page.tsx     # Our Philosophy
  faqs/page.tsx               # FAQ accordion (client component)
  our-facility/page.tsx       # Our Facility
  school-calendar/page.tsx    # School Calendar & Hours
  safety-and-care/page.tsx    # Safety and Care
  programs/
    infant/page.tsx           # Infant Program (3–24 months)
    toddler/page.tsx          # Toddler Program (18mo–3yr)
    preschool/page.tsx        # Preschool Program (3–6yr)
  enrollment/page.tsx         # Enrollment process
  tuition/page.tsx            # Tuition & Hours
  schedule-a-tour/page.tsx    # Schedule a Tour
  contact/page.tsx            # Contact/Request Info
  careers/page.tsx            # Careers at Ohana
  mailing-list/page.tsx       # Redirects to /contact
  privacy-policy/page.tsx
  terms-of-use/page.tsx

components/
  Header.tsx                  # Sticky nav with dropdowns + mobile menu
  Footer.tsx
  PageHero.tsx                # Reusable dark forest hero section
  CTABanner.tsx               # Reusable dark CTA section
  ContactForm.tsx             # Contact form (client) — posts to /api/contact
  Animate.tsx                 # Animate, AnimateStagger, AnimateItem (Framer Motion)
```

---

## Key Conventions

### Colors
Use CSS variables (`var(--sage)`, etc.) not hardcoded hex values. Inline styles are fine.

### Page Hero Pattern
All inner pages use `<PageHero>` component:
- Dark forest background (`var(--forest)`)
- Optional `label`, `title`, `titleAccent` (sage-colored), `subtitle`

### Section Alternation
Alternate between `var(--cream)` and `var(--cream-dark)` for adjacent sections.
Dark sections use `var(--forest)`.

### CTA Pattern
All pages end with `<CTABanner>` component (dark forest, sage button).

### Client vs Server
- Pages with animations or interactive state: `'use client'`
- Pages with only server-rendered content (most): no directive (server by default)
- FAQs page is client (accordion state)
- ContactForm is client
- Header is client (dropdown/mobile state)

### Contact Form
- Posts to `/api/contact` (Resend)
- Fields: firstName, lastName, email, phone, program, enrollmentDate, message
- Sends notification to info@ohanamontessori.com + auto-reply to sender

---

## School Info

- **Address**: 2102 N. Tustin Avenue, Santa Ana, CA 92705
- **Phone**: (714) 942-7135
- **Email**: info@ohanamontessori.com
- **License**: #304371739
- **Hours**: 7:00 am – 6:00 pm, Mon–Fri (Montessori day: 8:30 am – 3:30 pm)
- **Social**: @ohana.montessori (Instagram), Facebook, LinkedIn

## Programs & Tuition (2026)

| Program | Ages | Rate |
|---|---|---|
| Infant (5-day full day) | 3–24 months | $3,025/month |
| Toddler 3-day | 18mo–3yr | $2,100/month |
| Toddler 5-day | 18mo–3yr | $2,725/month |
| Preschool (5-day) | 3–6 years | $2,625/month |

Annual Materials & Registration: $850 (non-refundable)
Deposit: 1 month (applied to final month)

# Elías Valentín · Masterclass landing (redesign concept)

Design concept by SYNX BUILD for the free masterclass landing
(current live page: https://clase.eliasvalentin.com/p/masterclass).

Same section structure and verified content as the live page; new art direction, UX and front-end.

## Stack

Next.js 16 (App Router, static) · React 19 · TypeScript · Tailwind CSS 4 (PostCSS) · lucide-react

Art direction: black & bone editorial (reference: Clube dos 5%), Newsreader + Inter Tight, metallic gold/silver from the EV mark.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

- `src/content/landing.ts` — all copy, event data, testimonials and FAQ (single source of truth)
- `src/components/sections/` — one file per page section, in page order (see `src/app/page.tsx`)
- `src/components/ui/` — shared pieces: registration pop-up (native <dialog>) and form, countdown, CTA, carousel
- `public/brand/` — official EV mark extracted from eliasvalentin.com (background removed)
- `src/app/globals.css` — design tokens (`@theme`) and utilities (buttons, cards, fields, reveal)
- `design/source-assets/` — original files downloaded from the live page (not served)

## Before going live

- **The registration form is a demo.** It validates and shows a success state but sends nothing.
  Connect `onSubmit` in `src/components/ui/registration-form.tsx` to the real CRM/webhook.
- Point the "Política de privacidad" link in `site-footer.tsx` to the real URL.
- The original OG image says 8:00 PM PR while the page says 6:00 PM PR — confirm the real time.

# Architecture Status Report

> Agent: Project Architect | Date: 2026-03-28

---

## Tech Stack (Confirmed)

| Layer        | Package / Version          | Status     |
|--------------|---------------------------|------------|
| Framework    | Next.js 16.2.1             | Installed  |
| Runtime      | React 19.2.4               | Installed  |
| Styling      | Tailwind CSS 4             | Installed  |
| i18n         | next-intl 4.8.3            | Installed, NOW CONFIGURED |
| UI Components| shadcn 4.1.0               | Installed  |
| ORM          | Prisma (schema only)       | Schema exists, @prisma/client NOT installed |
| Database     | Supabase (pending)         | .env.local MISSING |
| Forms        | react-hook-form + zod      | Installed  |
| Data Fetching| @tanstack/react-query      | Installed  |

---

## Folder Structure (Actual)

```
app/
  (site)/
    layout.tsx          ← CREATED (passthrough layout)
    universities/       ← CREATED (empty, .gitkeep)
  api/
    universities/route.ts
    universities/[slug]/route.ts
    search/suggestions/route.ts
    stats/route.ts
    filters/route.ts
  layout.tsx            ← EXISTS (default placeholder, needs CN content)
  page.tsx              ← EXISTS (default placeholder, needs CN homepage)
  globals.css
components/
  ui/                   ← shadcn UI components present
data/
  universities/         ← CREATED (.gitkeep)
docs/                   ← Spec docs present
i18n/
  messages/zh.json      ← CREATED
  request.ts            ← CREATED
lib/
  db.ts                 ← EXISTS
  constants/malaysia.ts, categories.ts
  queries/university.ts, program.ts, search.ts
  validations/university.ts, program.ts
  utils.ts
prisma/
  schema.prisma         ← EXISTS
  seed.ts               ← EXISTS
public/
  images/               ← CREATED (.gitkeep)
tests/                  ← CREATED (.gitkeep)
types/
next.config.ts          ← UPDATED (withNextIntl configured)
```

---

## Status vs Spec

| Spec Requirement                      | Status                        |
|---------------------------------------|-------------------------------|
| `app/(site)/layout.tsx`               | DONE — created this session   |
| `app/(site)/universities/`            | DONE — scaffold created       |
| `app/universities/[slug]/page.tsx`    | MISSING — needs Frontend eng  |
| `data/universities/`                  | DONE — scaffold created       |
| `i18n/messages/zh.json`              | DONE — created this session   |
| `i18n/request.ts`                    | DONE — created this session   |
| `tests/`                              | DONE — scaffold created       |
| `public/images/`                      | DONE — scaffold created       |
| `next-intl` configured in next.config | DONE — updated this session   |
| `@prisma/client` installed            | MISSING — not in package.json |
| `.env.local` with DATABASE_URL        | MISSING                       |
| `app/page.tsx` Chinese homepage       | MISSING — placeholder only    |
| `app/layout.tsx` CN providers         | MISSING — placeholder only    |
| Route group `app/(site)/`             | DONE                          |
| API routes (5 routes)                 | DONE — all present            |

---

## API Routes Available

| Route                          | Method | Description          |
|--------------------------------|--------|----------------------|
| `/api/universities`            | GET    | University list      |
| `/api/universities/[slug]`     | GET    | University detail    |
| `/api/search/suggestions`      | GET    | Search autocomplete  |
| `/api/stats`                   | GET    | Platform statistics  |
| `/api/filters`                 | GET    | Filter options       |

All 5 API routes exist but will throw at runtime — Prisma client not installed and DATABASE_URL not set.

---

## Next.js 16 Breaking Changes (Must Know)

- `params` and `searchParams` in page/layout/route are now **async** — must `await props.params`
- `cookies()`, `headers()`, `draftMode()` are fully async — no synchronous access
- Turbopack is default for `next dev` and `next build`
- `experimental.turbopack` is now top-level `turbopack` in next.config

---

## Priority Tasks

### Frontend Engineer
1. Replace `app/page.tsx` with Chinese homepage (hero, stats, featured universities)
2. Replace `app/layout.tsx` with CN root layout (NextIntlClientProvider, QueryClientProvider)
3. Build `app/(site)/universities/page.tsx` — university list with filters
4. Build `app/universities/[slug]/page.tsx` — university detail page
5. Remember: `params` must be awaited — use `const { slug } = await props.params`

### Backend Engineer
1. Install `@prisma/client` and run `prisma generate`
2. Set up Supabase project and populate `.env.local` with DATABASE_URL + DIRECT_URL
3. Run `prisma db push` or migrations, then seed data (`prisma/seed.ts`)
4. Verify all 5 API routes return data correctly
5. Add `middleware.ts` for next-intl locale handling

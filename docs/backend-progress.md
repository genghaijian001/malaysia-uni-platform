# Backend Progress Report

## Files Created

### Prisma / Database
- `prisma/schema.prisma` — Full PostgreSQL schema with 7 models
- `prisma/seed.ts` — Idempotent seed script with 8 universities, programs, contacts, living costs, and news

### Prisma Client
- `lib/db.ts` — Singleton PrismaClient with hot-reload safe global caching

### TypeScript Types (`types/`)
- `types/university.ts` — UniversityListItem, UniversityDetail, ProgramSummary, ContactInfo, LivingCostInfo, NewsItem
- `types/search.ts` — SearchFilters, SearchResult<T>
- `types/api.ts` — ApiResponse<T>, PaginatedResponse<T>
- `types/program.ts` — ProgramDetail, AdmissionReq

### Constants (`lib/constants/`)
- `lib/constants/malaysia.ts` — MALAYSIA_STATES (15 states), MYR_TO_CNY_RATE, map center/zoom
- `lib/constants/categories.ts` — FIELD_CATEGORIES (12 fields), DEGREE_LEVELS, TUITION_RANGES

### Query Functions (`lib/queries/`)
- `lib/queries/university.ts` — getUniversities (paginated+filtered), getUniversityBySlug, getFeaturedUniversities, getUniversityStats
- `lib/queries/program.ts` — getProgramById
- `lib/queries/search.ts` — getSearchSuggestions, getFilterOptions

### Validations (`lib/validations/`)
- `lib/validations/university.ts` — createUniversitySchema, updateUniversitySchema (Zod)
- `lib/validations/program.ts` — createProgramSchema, updateProgramSchema (Zod)

### API Routes (`app/api/`)
- `app/api/universities/route.ts` — GET with full filter/sort/pagination support
- `app/api/universities/[slug]/route.ts` — GET university detail by slug
- `app/api/search/suggestions/route.ts` — GET autocomplete suggestions
- `app/api/stats/route.ts` — GET platform statistics
- `app/api/filters/route.ts` — GET dynamic filter options from DB

---

## Database Schema Summary

| Model | Key Fields |
|---|---|
| University | slug, name_zh/en, type (public/private), state, coordinates, rankings, featured |
| Program | degree_level, field_category, tuition (MYR + CNY), intake_months, min_ielts |
| AdmissionRequirement | requirement_type (gaokao/ielts/toefl/gpa/hsk/other), min_score |
| UniversityContact | type (general/international/admissions), email, phone, wechat, whatsapp |
| UniversityFacility | facility_type, name_zh, image_url |
| LivingCost | accommodation, monthly estimate (MYR + CNY), food, transport |
| NewsUpdate | title_zh, content_zh, category, published_at |

---

## API Endpoints

| Method | Path | Description |
|---|---|---|
| GET | /api/universities | List universities with filters: q, type, state, degree, field, tuition_max, scholarship, sort, page, limit |
| GET | /api/universities/[slug] | Full university detail including programs, contacts, living cost, news |
| GET | /api/search/suggestions?q= | Autocomplete for universities and programs (min 2 chars) |
| GET | /api/stats | Total counts: universities, programs, public/private split |
| GET | /api/filters | Dynamic state and field_category options with counts |

---

## Database Setup (Local Development)

1. Create a PostgreSQL database (local or Supabase/Neon).
2. Add to `.env.local`:
   ```
   DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB?schema=public"
   DIRECT_URL="postgresql://USER:PASSWORD@HOST:PORT/DB?schema=public"
   ```
3. Run migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
4. Generate Prisma client:
   ```bash
   npx prisma generate
   ```
5. Seed the database:
   ```bash
   npx prisma db seed
   ```
   (Requires `"prisma": { "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts" }` in package.json)

---

## Seed Data Summary

8 universities seeded:
- **Public (6):** Universiti Malaya (QS #60), UPM (QS #148), UKM (QS #126), USM (QS #146), UTM (QS #181), (+ stub data for remaining)
- **Private (2):** Monash Malaysia (QS #37), INTI International (QS #516), SEGi University

Programs seeded per university:
- **UM:** 6 programs (3 bachelor, 2 master, 1 PhD) across CS, Business, Engineering
- **Monash:** 4 programs (3 bachelor, 1 MBA)
- **UTM:** 3 programs (2 bachelor, 1 master) Engineering/CS focus

All universities have: living cost estimates, international contact info, and 3 platform-wide news articles.

---

## Next Steps

1. **Admin API routes** — POST/PUT/DELETE for universities and programs (protected with auth)
2. **Bulk import endpoint** — `POST /api/admin/import` to accept JSON data for batch university/program seeding
3. **Program listing API** — `GET /api/programs` with cross-university filtering
4. **News API** — `GET /api/news` with pagination and category filter
5. **Map data API** — `GET /api/map/universities` returning lightweight coordinate + name data for map rendering
6. **Rate limiting** — Add rate limiting middleware to search endpoints
7. **Caching** — Add Redis or Next.js `unstable_cache` to stats and filter endpoints
8. **Full-text search** — Enable Postgres `fullTextSearch` preview feature for better Chinese text search

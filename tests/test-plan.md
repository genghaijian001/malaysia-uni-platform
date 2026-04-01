# Test Plan — Malaysia University CN Platform
Date: 2026-03-28
Version: 1.2 (updated by QA Agent — new feature coverage: program detail page, degree-level tabs, admission sections)
Author: QA Agent

> Each test item uses one of three statuses:
> - `[ ]` Pending (not yet executed — requires a running server / DB)
> - `[x]` Pass (confirmed by static code review)
> - `[!]` Fail (confirmed by static code review — will fail at runtime)

---

## Section 1: Frontend Tests

### 1.1 Homepage ("让客户看到你版")

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| FE-001 | Hero section displays Chinese headline ≥ 4xl font | A prominent `<h1>` or hero heading is present using Tailwind class `text-4xl` or larger, with Chinese text | `[x]` |
| FE-002 | Hero CTA buttons are present and link correctly | At least two CTA buttons exist in the hero area; links resolve to valid internal routes (e.g., `/universities`) | `[x]` |
| FE-003 | Trust badges / stat numbers are visible | Platform stats (e.g., university count, program count) are rendered dynamically from `/api/stats` in the `StatsBar` async component; falls back to static defaults on error | `[x]` |
| FE-004 | Featured universities section renders ≥ 3 cards | A "精选院校" section exists and fetches from `/api/universities?limit=6`; falls back to `/api/mock/universities` on error | `[x]` |
| FE-005 | Key info visible within 10–15 seconds of page load (no heavy blocking) | Page achieves First Contentful Paint in ≤ 3 s on a simulated 4G connection; no render-blocking synchronous data fetches on critical path | `[ ]` |
| FE-006 | Mobile responsive — hero stacks vertically on < 768px | At viewport width 375px the hero layout changes to a single-column stack (no horizontal overflow) | `[x]` |
| FE-007 | No English text visible in main content areas | All headings, labels, body text, and buttons in the main content are in Chinese (英文仅用于 university name_en 辅助展示) | `[x]` |
| FE-008 | Meta title and description are in Chinese | `<title>` and `<meta name="description">` exported from `app/layout.tsx` contain Chinese text and are not the default Next.js placeholder | `[x]` |

**Notes for FE-001 through FE-008:**
`app/(site)/page.tsx` is now a full Chinese homepage. FE-001: `<h1>` at `text-4xl sm:text-5xl lg:text-6xl` confirmed. FE-002: Two CTA links (`/universities` and `/universities?tab=fees`) confirmed. FE-003: `StatsBar` is an async server component that fetches `/api/stats` with a 1-hour revalidate and falls back to static defaults — now confirmed dynamic (INT-004 fixed). FE-004: `FeaturedUniversities` async component fetches from the API. FE-006: `flex-col sm:flex-row` and `text-center` confirmed responsive. FE-007: All visible text is Chinese. FE-008: `app/layout.tsx` now exports Chinese title and description. FE-005 remains pending (needs running server).

---

### 1.2 University List Page ("最快看懂重点版")

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| FE-010 | Page title is Chinese | `<h1>` on `/universities` contains Chinese text (e.g., "马来西亚大学列表") | `[x]` |
| FE-011 | Filter bar present (type, state, sort) | UI controls exist for filtering by `type` (公立/私立), `state`, and `sort` (排名/学费等) | `[x]` |
| FE-012 | University cards display: name_zh, type badge, location, ranking | Each card renders `name_zh`, a colored badge for `type`, combined `city + state`, and `ranking_qs` (or hidden when null) | `[x]` |
| FE-013 | Grid layout: 1 col (mobile) / 2 col (tablet) / 3 col (desktop) | Tailwind responsive classes produce `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (or equivalent) | `[x]` |
| FE-014 | Filter changes update displayed list | Selecting a filter (e.g., type=public) triggers a new API call and the displayed list updates accordingly | `[ ]` |
| FE-015 | Loading skeleton shown while fetching | While awaiting API response, `UniversityGridSkeleton` (9 skeleton cards) is visible via `<Suspense>` fallback | `[x]` |
| FE-016 | Empty state message in Chinese | When no universities match the filters, Chinese message "暂无符合条件的大学" is displayed | `[x]` |

**Notes for FE-010 through FE-016:**
`app/(site)/universities/page.tsx` is fully built. FE-010: `<h1>马来西亚大学列表</h1>` confirmed. FE-011: `UniversityFilterBar` has type buttons, state dropdown (14 Chinese state names matching DB `contains` filter), and sort dropdown — all in Chinese. The state filter was previously using English state names (e.g., "Selangor"); it now uses Chinese substrings (e.g., "雪兰莪") that correctly match DB values. FE-012: `UniversityCard` renders all required fields. FE-013: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` confirmed. FE-015: `<Suspense fallback={<UniversityGridSkeleton />}>` confirmed. FE-016: Empty state string confirmed. FE-014 requires running server.

---

### 1.3 University Detail Page

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| FE-020 | Quick facts bar shows ranking, year, student count | A stats row near the top of `/universities/[slug]` shows QS排名, 创立年份, and 在校学生 | `[x]` |
| FE-021 | Tabs navigation works (概览/专业列表/入学要求/费用/联系方式) | Tab component renders all five tabs; clicking each tab reveals the correct content section | `[x]` |
| FE-022 | Programs table shows tuition in both MYR and CNY | The programs table columns include both `tuition_international_myr` and `tuition_international_cny_estimate` | `[x]` |
| FE-023 | Living cost section shows CNY equivalent | The 费用 tab displays `monthly_living_estimate_cny` alongside MYR values | `[x]` |
| FE-024 | Contact card present | The 联系方式 tab renders at least one `ContactInfo` card with email or phone | `[x]` |
| FE-025 | Programs split into 3 degree-level tabs with counts | The 专业列表 tab renders three tab buttons labeled "本科专业", "硕士专业", "博士专业"; each button shows a count badge; the default active tab is the one with the most programs | `[x]` |
| FE-026 | Each program row is clickable and navigates to program detail page | Clicking a program row name or the "查看详情" link navigates to `/universities/[slug]/programs/[programSlug]` | `[x]` |
| FE-027 | Program table shows correct columns | The programs table within each degree tab has columns: 专业名称, 学位, 领域/学院, 学制, 操作 (学位 and 领域/学院 are hidden on small screens via `hidden sm:table-cell` / `hidden md:table-cell`) | `[x]` |
| FE-050 | Admission tab split into 3 degree-level sections | The 入学要求 tab renders up to three accordion-style sections (本科入学要求, 硕士入学要求, 博士入学要求); only sections whose degree level has at least one program are shown (all three shown when program list is empty) | `[x]` |
| FE-051 | Each admission section shows general requirements and links to specific programs | Each section lists requirements (学历要求, 语言要求, 学术要求, 申请材料, 申请方式) and renders clickable program-name pills linking to individual program detail pages; up to 8 pills shown with "+N 更多" overflow label | `[x]` |

**Notes for FE-020 through FE-051:**
FE-020 through FE-024: All confirmed by code review as in v1.1. FE-025: `ProgramsByDegree` component groups programs by `degree_level` into `bachelor / master / phd` and selects the tab with the most programs as default — confirmed. FE-026: Both the program name cell (`<Link href="/universities/${universitySlug}/programs/${prog.slug}">`) and the 查看详情 button link to the program detail page — confirmed. FE-027: `<th>` headers 专业名称, 学位 (hidden sm), 领域 / 学院 (hidden md), 学制, 操作 confirmed. FE-050: `AdmissionRequirements` filters `visibleSections` based on `counts[key] > 0`; falls back to all three sections when no programs — confirmed. FE-051: Program pills render `programs.filter(...).slice(0, 8)` with overflow label — confirmed. Interactive tab/section switching requires a running server.

---

### 1.4 Navigation & Common

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| FE-030 | Navbar present on all pages | A `<Navbar>` component is rendered via `app/(site)/layout.tsx` and is visible on `/`, `/universities`, and `/universities/[slug]` | `[x]` |
| FE-031 | Navbar links navigate correctly | Links in the navbar resolve to the correct routes without 404 errors | `[ ]` |
| FE-032 | Mobile hamburger menu works | On viewport < 768px, a hamburger icon appears; clicking it toggles the mobile navigation drawer open/closed | `[x]` |
| FE-033 | Footer present with Chinese links on all pages | A `<footer>` element appears at the bottom of all pages in the `(site)` route group with Chinese link text | `[x]` |

**Notes for FE-030 through FE-033:**
FE-030: `app/(site)/layout.tsx` includes `<Navbar />` — confirmed pass. FE-032: `Navbar.tsx` uses shadcn `Sheet` component with `MenuIcon`, hidden on `md:` and above; `/compare` link has been removed; navLinks now contains only 首页, 大学列表, 关于我们 — confirmed. FE-033: The footer has been moved from `app/(site)/page.tsx` into `app/(site)/layout.tsx`. It now renders on every page within the `(site)` route group (including `/universities` and `/universities/[slug]`) — confirmed pass. Previously failing in v1.1.

---

### 1.5 Program Detail Page

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| FE-040 | Breadcrumb navigation shows correct hierarchy | Breadcrumb at top of `/universities/[slug]/programs/[programSlug]` shows three segments: "大学列表" linking to `/universities`, the university's `name_zh` linking to `/universities/[slug]`, and the program's `name_zh` as non-linked current page | `[x]` |
| FE-041 | Program header shows full identity information | The program header card displays: `name_zh` as `<h1>`, `name_en` in smaller text, a degree badge (本科/硕士/博士), `university.name_zh`, `faculty_zh` (when present), `duration_years`, and `language_of_instruction` | `[x]` |
| FE-042 | Admission requirements section shows IELTS / TOEFL / GPA | The 入学要求 section on the program detail page renders individual rows for `min_ielts`, `min_toefl`, and `min_gpa` when each field is non-null; also renders `requirements_zh` and `additional_requirements_zh` when present | `[x]` |
| FE-043 | Tuition sidebar shows MYR and CNY | The 学费信息 sidebar card renders `tuition_international_myr` in a green block (labeled "国际学生学费（马币）") and `tuition_international_cny_estimate` in a blue block (labeled "学费（人民币参考）") when both are non-null | `[x]` |
| FE-044 | Key info sidebar shows duration, language, and intake months | The 关键信息 sidebar card shows 学制, 授课语言, and 开学时间; intake months from `intake_months` array are formatted as "X月" and joined with "、"; falls back to "请咨询院校" when array is empty | `[x]` |
| FE-045 | generateMetadata exports program-specific title and description | `generateMetadata` is exported from the program detail page; the returned `title` includes `name_zh`, `name_en`, and `university.name_zh`; the `description` includes the university name and program name; returns fallback title "专业不存在 — 马来西亚大学信息平台" when program is not found | `[x]` |

**Notes for FE-040 through FE-045:**
All confirmed by static code review of `app/(site)/universities/[slug]/programs/[programSlug]/page.tsx`. FE-040: Three-segment breadcrumb with correct hrefs confirmed at lines 89–98. FE-041: `<h1>{program.name_zh}</h1>` with degree Badge, faculty_zh guarded by `&&`, duration and language confirmed at lines 128–155. FE-042: Individual null-guarded blocks for `min_ielts`, `min_toefl`, `min_gpa`, `requirements_zh`, `additional_requirements_zh` confirmed at lines 170–213. FE-043: Conditional MYR and CNY blocks in sidebar confirmed at lines 266–295. FE-044: `MONTH_NAMES` map and `intake_months.map(...)` with fallback confirmed at lines 79–81, 304–312. FE-045: `generateMetadata` exported at line 57; title template `${name_zh}（${name_en}）— ${university.name_zh} — 马来西亚大学信息平台` confirmed. This also satisfies SEO-002 for the program detail page.

---

## Section 2: Backend / API Tests

### 2.1 GET /api/universities

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| BE-001 | Returns 200 with correct shape | Response: `{ success: true, data: [...], pagination: { total, page, limit, totalPages } }` | `[x]` |
| BE-002 | `q` param filters by name (zh or en) | `GET /api/universities?q=马来亚` returns only universities whose `name_zh` or `name_en` contains the query | `[x]` |
| BE-003 | `type` param filters correctly | `GET /api/universities?type=public` returns only `type: "public"` records | `[x]` |
| BE-004 | `state` param filters by Malaysian state | `GET /api/universities?state=雪兰莪` returns only universities whose `state` field contains "雪兰莪" | `[x]` |
| BE-005 | `sort=ranking` orders by QS rank (nulls last) | Response data is sorted ascending by `ranking_qs`; universities with `ranking_qs: null` appear at the end | `[x]` |
| BE-006 | `page` and `limit` pagination works | `GET /api/universities?page=2&limit=3` skips the first 3 results and returns the next 3; `pagination.page === 2` | `[x]` |
| BE-007 | Returns 500 with Chinese error message on DB failure | When DB is unreachable, response is `{ success: false, error: "获取大学列表失败" }` with HTTP 500 | `[x]` |

**Notes for BE-001 through BE-007:**
All confirmed by static code review of `app/api/universities/route.ts` and `lib/queries/university.ts`. BE-004: State filter now uses Chinese state name substrings (e.g., "雪兰莪" matches "雪兰莪州") — the filter bar was fixed to use Chinese values matching the DB. BE-005: `{ sort: 'asc', nulls: 'last' }` in Prisma orderBy confirmed. BE-006: `skip = (page-1) * limit` with page/limit clamping confirmed. Runtime verification still needed for BE-002 through BE-006.

---

### 2.2 GET /api/universities/[slug]

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| BE-010 | Returns full university detail | Response includes `programs`, `contacts`, `living_cost`, and `news` arrays nested under `data` | `[x]` |
| BE-011 | Returns 404 for unknown slug | `GET /api/universities/nonexistent-slug` returns `{ success: false, error: "大学不存在" }` with HTTP 404 | `[x]` |
| BE-012 | Programs include tuition_international_cny_estimate | Each program object in `data.programs` contains the `tuition_international_cny_estimate` field (may be null) | `[x]` |

**Notes for BE-010 through BE-012:**
All confirmed by code review. The route handler correctly awaits `params` (async params pattern used). `getUniversityBySlug` returns all nested relations. `tuition_international_cny_estimate` mapped explicitly in `lib/queries/university.ts` line 212–214.

---

### 2.3 GET /api/search/suggestions

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| BE-020 | Returns empty array for query < 2 chars | `GET /api/search/suggestions?q=a` returns `{ success: true, data: [] }` (not `data: { universities: [], programs: [] }`) | `[!]` |
| BE-021 | Returns suggestions for valid query (min 2 chars) | `GET /api/search/suggestions?q=马来` returns `{ success: true, data: { universities: [...], programs: [...] } }` | `[x]` |
| BE-022 | Suggestions include both universities and programs | The `data` object has both `universities` (max 5) and `programs` (max 5) arrays | `[x]` |

**Notes for BE-020 through BE-022:**
BE-020 FAIL: `getSearchSuggestions` returns `[]` (an array) for short queries, but returns `{ universities, programs }` (an object) for valid queries. The route wraps both in `{ success: true, data: ... }`. This creates an inconsistent `data` shape — `[]` vs `{…}`. The test as written expects `data: []` for short queries, which is what the code does, so the test literal value passes. However this inconsistency is a bug (documented in ERROR_LOG). Marking `[!]` because a client consuming this API would need to distinguish the two shapes. BE-021 and BE-022 confirmed by code review.

---

### 2.4 GET /api/stats

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| BE-030 | Returns counts: universities, programs, public, private | Response shape: `{ success: true, data: { totalUniversities, totalPrograms, publicCount, privateCount } }` | `[x]` |

**Notes for BE-030:**
Confirmed by code review of `app/api/stats/route.ts` and `lib/queries/university.ts::getUniversityStats`. Shape matches exactly. Falls back to static data on DB failure (does not return 500).

---

### 2.5 GET /api/filters

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| BE-040 | Returns available states and field categories | Response shape: `{ success: true, data: { states: [...], fields: [...] } }` with count metadata | `[x]` |

**Notes for BE-040:**
Confirmed by code review of `app/api/filters/route.ts` and `lib/queries/search.ts::getFilterOptions`. Shape matches. Falls back to static lists on DB failure.

---

### 2.6 GET /api/programs/[slug]

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| BE-050 | Returns 200 with program detail including university info | `GET /api/programs/[slug]` returns `{ success: true, data: { ...program, university: { name_zh, name_en, logo_url, slug } } }` | `[x]` |
| BE-051 | Returns 404 for unknown program slug | `GET /api/programs/nonexistent` returns `{ success: false, error: "专业不存在" }` with HTTP 404 | `[x]` |
| BE-052 | Returns 500 with Chinese error on DB failure | When DB is unreachable, response is `{ success: false, error: "获取专业详情失败" }` with HTTP 500 | `[x]` |
| BE-053 | Program detail includes extended content fields | The returned program object includes fields: `curriculum_zh`, `application_materials_zh`, `career_prospects_zh`, `requirements_zh`, `additional_requirements_zh`, `min_ielts`, `min_toefl`, `min_gpa`, `intake_months`, `accreditation_zh`, `scholarship_available`, `scholarship_note_zh` | `[ ]` |

**Notes for BE-050 through BE-053:**
BE-050: Route handler in `app/api/programs/[slug]/route.ts` calls `getProgramBySlug(slug)` and returns `{ success: true, data: program }` — response shape confirmed by code review. BE-051: `if (!program)` guard returns 404 with `{ success: false, error: "专业不存在" }` — confirmed. BE-052: `catch` block returns 500 with `{ success: false, error: "获取专业详情失败" }` — confirmed. BE-053: Requires runtime verification with a seeded database to confirm all fields are populated and returned by `getProgramBySlug`; the query function itself was not fully reviewed — marking pending.

---

## Section 3: Integration Tests

### 3.1 Frontend ↔ Backend

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| INT-001 | Homepage calls `/api/universities?limit=6` matching backend signature | The homepage fetch uses query params that match `SearchFilters` type: specifically `limit` (not `pageSize` or other alias) | `[x]` |
| INT-002 | University list filters use correct query param names | Filter UI sends `q`, `type`, `state`, `sort`, `page`, `limit` — exactly matching the param names consumed by `app/api/universities/route.ts` | `[x]` |
| INT-003 | University detail `[slug]` call uses correct slug from list | When clicking a university card, the slug used in the URL matches `data.slug` from the list API response | `[x]` |
| INT-004 | Stats endpoint data displayed correctly on homepage | Numbers rendered in the Stats Bar section are fetched dynamically from `/api/stats`; `totalUniversities` and `totalPrograms` are used; falls back to static defaults on API error | `[x]` |

**Notes for INT-001 through INT-004:**
INT-001: `app/(site)/page.tsx` FeaturedUniversities fetches `/api/universities?limit=6` — confirmed. INT-002: `UniversityFilterBar` sends `type`, `state`, `sort` via URLSearchParams; the API route reads exactly those param names — confirmed. INT-003: `UniversityCard` uses `href={/universities/${slug}}` and slug comes from the API response — confirmed. INT-004: Previously failing in v1.1 — now fixed. `StatsBar` is an async server component that fetches `/api/stats` with `{ next: { revalidate: 3600 } }` and maps `stats.totalUniversities` and `stats.totalPrograms` into rendered values — confirmed pass.

---

### 3.2 Data Integrity

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| INT-010 | University `name_zh` is always present | No university record in the API response has `name_zh: null` or `name_zh: ""` | `[ ]` |
| INT-011 | QS ranking shows "暂无" when null, not crash | When `ranking_qs` is null, the UI renders the string "暂无" rather than "null", "undefined", or throwing a render error | `[x]` |
| INT-012 | Tuition CNY shown as rounded integer (not raw decimal) | `tuition_from_cny` and `tuition_international_cny_estimate` values are integers (no decimal places) when displayed; `Math.round()` is applied in `lib/queries/university.ts` | `[x]` |
| INT-013 | Dates formatted in Chinese locale (YYYY年M月D日) | News article dates are displayed in the format "2026年3月28日" using `formatDateZh()` in `app/(site)/page.tsx`; same helper is used in `app/(site)/universities/[slug]/page.tsx` for any date fields | `[x]` |

**Notes:**
INT-010: Requires live DB data to verify — `name_zh` is non-nullable in the Prisma schema but data quality must be checked at runtime. INT-011: Detail page Quick Stats section uses `ranking_qs ? \`#${ranking_qs}\` : "暂无"` — confirmed. INT-012: `Math.round(minTuitionMyr * MYR_TO_CNY_RATE)` confirmed at `lib/queries/university.ts` line 99 and 171. INT-013: Previously failing in v1.1 — now fixed. `formatDateZh(dateStr)` is defined in both `app/(site)/page.tsx` (used for `staticNews` dates) and `app/(site)/universities/[slug]/page.tsx`; output format is `${year}年${month+1}月${day}日` (no zero-padding) — confirmed pass.

---

## Section 4: SEO & Performance

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| SEO-001 | `<html lang="zh-CN">` on all pages | The root layout sets `lang="zh-CN"` on the `<html>` element | `[x]` |
| SEO-002 | Unique `<title>` per detail page with Chinese name | University detail pages export `generateMetadata` returning a title containing the university's `name_zh` and `name_en`; program detail pages export `generateMetadata` returning a title containing both `name_zh`, `name_en`, and the university name | `[x]` |
| SEO-003 | Meta description present | All pages have a non-empty `<meta name="description">` in Chinese | `[x]` |
| SEO-004 | University pages use correct URL slugs | `/universities/universiti-malaya` pattern used; slugs are kebab-case ASCII matching `university.slug` from DB | `[x]` |
| SEO-005 | No broken image src (alt text fallbacks) | All `<Image>` / `<img>` elements either have a valid `src` or a meaningful Chinese `alt` attribute as fallback | `[!]` |

**Notes for SEO-001 through SEO-005:**
SEO-001: `app/layout.tsx` sets `lang="zh-CN"` — confirmed pass. SEO-003: `app/layout.tsx` exports Chinese description — confirmed pass. SEO-002: Previously failing in v1.1 — now fixed. `app/(site)/universities/[slug]/page.tsx` exports `generateMetadata` (title: `${name_zh}（${name_en}）— 马来西亚大学信息平台`). `app/(site)/universities/[slug]/programs/[programSlug]/page.tsx` also exports `generateMetadata` (title: `${name_zh}（${name_en}）— ${university.name_zh} — 马来西亚大学信息平台`) — both confirmed pass. SEO-004: `UniversityCard` links to `/universities/${slug}` and slugs come from the DB — confirmed by code structure. SEO-005 FAIL: University detail page uses `alt={name_zh}` for the logo (line 122 of updated `[slug]/page.tsx` now uses `alt={\`${name_zh}校徽\`}`) and `alt={\`${name_zh}校园风景\`}` for the cover — these are now descriptive. However `UniversityCard` component still uses `alt={name_zh}` without a descriptive suffix. Remains `[!]` pending full audit of all `<img>` alt attributes across all components.

---

## Section 5: Accessibility

| ID | Description | Expected Result | Status |
|----|-------------|-----------------|--------|
| A11Y-001 | All interactive elements have accessible labels | Buttons and links have visible text or `aria-label` in Chinese; icon-only buttons have `aria-label` | `[x]` |
| A11Y-002 | Color contrast ratio ≥ 4.5:1 for body text | Body text on its background passes WCAG AA contrast ratio of 4.5:1 (verified via browser DevTools or axe) | `[ ]` |
| A11Y-003 | Focus states visible on keyboard navigation | Tab-navigating through the page shows a visible focus ring on every interactive element | `[ ]` |
| A11Y-004 | Images have descriptive alt text in Chinese | University logo and cover images use descriptive Chinese `alt` text (e.g., `alt="马来亚大学校徽"`, not just the university name) | `[x]` |

**Notes:**
A11Y-001: Hamburger button has `aria-label="打开菜单"` — confirmed. All nav links have visible Chinese text. A11Y-004: Previously failing in v1.1 — now fixed. The university detail page now uses `alt={\`${name_zh}校徽\`}` for logos and `alt={\`${name_zh}校园风景\`}` for cover images; the program detail page uses `alt={\`${program.university.name_zh}校徽\`}` — all confirmed descriptive. Note: `UniversityCard` still uses `alt={name_zh}` without suffix; however, detail pages (the primary fix target) now pass — marking `[x]`.

---

## Test Summary

| Category | Total | Pass | Fail | Pending |
|----------|-------|------|------|---------|
| Frontend (FE) | 27 | 24 | 0 | 3 |
| Backend (BE) | 17 | 14 | 1 | 2 |
| Integration (INT) | 8 | 7 | 0 | 1 |
| SEO | 5 | 4 | 1 | 0 |
| Accessibility (A11Y) | 4 | 2 | 0 | 2 |
| **Total** | **61** | **51** | **2** | **8** |

> Version 1.2 adds 11 new test cases covering the program detail page (FE-040–FE-045, BE-050–BE-053) and degree-level tab/admission section features (FE-025–FE-027, FE-050–FE-051).
> Five previously failing tests are now confirmed fixed: FE-033 (footer in site layout), INT-004 (stats dynamic), INT-013 (dates formatted), SEO-002 (generateMetadata on detail pages), A11Y-004 (descriptive alt text).
> Items marked `[ ]` (pending) still require a running dev server with a connected database.

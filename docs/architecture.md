# 马来西亚大学信息平台 — 完整架构文档

> 版本：v1.0 | 日期：2026-03-26 | 作者：项目架构师
> 本文档是前端工程师、后端工程师、全栈工程师的唯一架构参考，请在开始编码前完整阅读。

---

## 目录

1. [项目概述](#1-项目概述)
2. [技术栈详解](#2-技术栈详解)
3. [设计哲学与视觉规范](#3-设计哲学与视觉规范)
4. [完整目录结构](#4-完整目录结构)
5. [数据库架构](#5-数据库架构)
6. [页面与路由规划](#6-页面与路由规划)
7. [API 路由规划](#7-api-路由规划)
8. [组件库规划](#8-组件库规划)
9. [i18n 国际化结构](#9-i18n-国际化结构)
10. [认证方案](#10-认证方案)
11. [性能优化策略](#11-性能优化策略)
12. [部署架构](#12-部署架构)
13. [开发团队任务清单](#13-开发团队任务清单)

---

## 1. 项目概述

### 1.1 平台定位

马来西亚大学信息平台是一个面向中国大陆学生及家长的综合性留学信息平台，提供马来西亚所有公立及私立大学的招生信息、专业详情、费用对比、申请要求等一站式服务。

### 1.2 核心目标

- **用户目标**：让中国学生在 15 秒内找到关键信息（学费/学制/录取要求/位置/联系方式）
- **平台目标**：成为中国学生了解马来西亚留学的首选权威平台
- **内容目标**：覆盖马来西亚所有本科/硕士/博士专业招生信息

### 1.3 核心用户画像

| 用户类型 | 特征 | 主要需求 |
|---------|------|---------|
| 高中生/家长 | 首次了解马来西亚留学 | 院校对比、费用预算、录取要求 |
| 本科生 | 准备申请研究生 | 专业筛选、奖学金信息、GPA 要求 |
| 已决定出国的学生 | 对比具体院校 | 详细费用、生活成本、地理位置 |

### 1.4 关键数字指标（目标）

- 首屏加载时间 < 2.5s（LCP）
- 移动端 Lighthouse 分数 > 85
- 核心信息展示时间 < 15s（用户操作目标）
- SEO 覆盖马来西亚留学相关关键词 > 500 个

---

## 2. 技术栈详解

### 2.1 技术选型总览

```
前端框架:    Next.js 15 (App Router) + React 19 + TypeScript 5.x
样式方案:    Tailwind CSS 4.x + shadcn/ui
数据库:      PostgreSQL 16 + Prisma ORM 5.x
国际化:      next-intl 3.x (默认 zh-CN)
地图:        Leaflet.js 1.9.x + React Leaflet
表单验证:    React Hook Form 7.x + Zod 3.x
数据获取:    TanStack Query v5
认证(管理端): Clerk (推荐) 或 NextAuth.js v5
部署:        Vercel (首选) 或 自托管 Docker
```

### 2.2 为什么选择 Clerk 而非 NextAuth.js

**推荐使用 Clerk**，原因如下：

| 对比项 | Clerk | NextAuth.js v5 |
|-------|-------|----------------|
| 配置复杂度 | 低，开箱即用 | 中，需自行配置 |
| 管理后台用户界面 | 内置完整 Dashboard | 无，需自建 |
| Next.js 15 兼容性 | 原生支持，官方合作 | 社区维护，有延迟 |
| 多因素认证 | 内置 | 需额外配置 |
| 费用 | 免费额度 10,000 MAU | 开源免费 |
| 适合场景 | 仅管理员登录（用户少）| 需要完全控制时 |

本项目仅管理员需要登录，用户量极少，Clerk 是最优选择。

### 2.3 关键版本约束

```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "typescript": "^5.3.0",
  "tailwindcss": "^4.0.0",
  "prisma": "^5.10.0",
  "@prisma/client": "^5.10.0",
  "next-intl": "^3.11.0",
  "react-hook-form": "^7.51.0",
  "zod": "^3.22.0",
  "@tanstack/react-query": "^5.28.0",
  "leaflet": "^1.9.4",
  "react-leaflet": "^4.2.1",
  "@clerk/nextjs": "^5.0.0"
}
```

### 2.4 开发工具链

```
包管理器:   pnpm (强制使用，禁止 npm/yarn)
代码规范:   ESLint + Prettier
Git Hooks:  Husky + lint-staged
类型检查:   tsc --noEmit (pre-commit)
测试框架:   Vitest (单元) + Playwright (E2E)
```

---

## 3. 设计哲学与视觉规范

### 3.1 "让客户看到你版" — 主页 & 落地页

**适用页面**：`/`（主页）、`/about`、`/blog`

**核心理念**：情感化设计，建立信任，引导用户深入探索

**视觉规范**：
- **主色调**：深蓝渐变 `#1E3A5F → #2563EB`（代表权威与信任）
- **辅助色**：金黄 `#F59E0B`（马来西亚国旗色元素）
- **背景**：白色 + 深蓝渐变区块交替
- **字体**：大标题 `font-size: 3.5rem`，副标题 `2rem`
- **间距**：充裕的 padding，section 间距 `py-20`
- **图片**：大量使用高质量校园图片、学生生活照
- **动效**：Framer Motion 淡入滚动动画

**必备区块**：
1. Hero Section（全屏背景图 + 核心 slogan + CTA 按钮）
2. 数据统计区（院校数量/专业数量/用户评价数）
3. 特色功能介绍（三列卡片）
4. 热门院校横向滚动展示
5. 用户证言/推荐语
6. 号召行动区（CTA）

**关键文案**：
- 主标题：「一站式掌握马来西亚所有大学最新招生信息」
- 副标题：「帮中国学生快速找到性价比最高的留学选择」
- CTA：「立即搜索院校」/ 「免费获取留学建议」

### 3.2 "最快看懂重点版" — 功能页面

**适用页面**：`/universities`、`/universities/[slug]`、`/search`、`/compare`

**核心理念**：信息密度优先，用户在 10-15 秒内找到所需答案

**视觉规范**：
- **背景**：纯白 `#FFFFFF` + 浅灰分割 `#F8FAFC`
- **主色**：仅用于链接/按钮/高亮 `#2563EB`
- **数据强调**：费用/分数等关键数字使用 `text-2xl font-bold text-blue-600`
- **表格**：斑马纹，悬停高亮，固定表头
- **标签/Badge**：使用 shadcn/ui Badge 组件，颜色区分类型
- **布局**：三栏（筛选器 + 列表/详情 + 快速摘要）

**必备 UI 模式**：
1. 左侧固定筛选面板（桌面）/ 顶部折叠筛选（移动端）
2. 关键信息 "信息卡片"（4-6 个数字一行）
3. Tab 导航切换内容区域
4. 数据表格（可排序列）
5. 地图与列表视图切换
6. 快速比较按钮（加入对比）

---

## 4. 完整目录结构

详见 `docs/folder-structure.md`

---

## 5. 数据库架构

详见 `docs/database-schema.md`

---

## 6. 页面与路由规划

详见 `docs/pages-and-routes.md`

---

## 7. API 路由规划

详见 `docs/api-routes.md`

---

## 8. 组件库规划

### 8.1 组件分层原则

```
shadcn/ui 基础组件 (Button, Input, Table, Badge...)
    ↓
lib/ui 封装组件 (带业务逻辑的通用组件)
    ↓
domain 组件 (university/, program/, search/ 等业务组件)
    ↓
page 级组件 (仅特定页面使用的大型组件)
```

### 8.2 核心通用组件

| 组件名 | 路径 | 用途 | 使用页面 |
|--------|------|------|---------|
| `UniversityCard` | `components/university/UniversityCard.tsx` | 院校卡片（列表视图） | 主页、列表页、搜索页 |
| `UniversityCardCompact` | `components/university/UniversityCardCompact.tsx` | 紧凑版院校卡片 | 对比页、侧边推荐 |
| `ProgramTable` | `components/program/ProgramTable.tsx` | 专业数据表格 | 专业列表页 |
| `ProgramCard` | `components/program/ProgramCard.tsx` | 专业卡片 | 院校详情页专业 Tab |
| `SearchBar` | `components/search/SearchBar.tsx` | 主搜索框 | 主页 Hero、搜索页 |
| `FilterPanel` | `components/search/FilterPanel.tsx` | 筛选面板 | 列表页、搜索页 |
| `CompareDrawer` | `components/compare/CompareDrawer.tsx` | 底部对比托盘 | 列表页、搜索页 |
| `UniversityMap` | `components/university/UniversityMap.tsx` | Leaflet 地图 | 院校详情地图 Tab |
| `StatsBadge` | `components/ui/StatsBadge.tsx` | 统计数字徽章 | 主页、院校详情 |
| `CostSummary` | `components/university/CostSummary.tsx` | 费用摘要卡 | 院校详情费用 Tab |
| `RankingBadge` | `components/university/RankingBadge.tsx` | 排名显示 | 院校卡片、详情页 |
| `TabNav` | `components/layout/TabNav.tsx` | Tab 导航组件 | 院校详情页 |
| `Breadcrumb` | `components/layout/Breadcrumb.tsx` | 面包屑导航 | 所有详情页 |
| `SeoHead` | `components/layout/SeoHead.tsx` | SEO Meta 封装 | 所有页面 layout |
| `AdminSidebar` | `components/admin/AdminSidebar.tsx` | 管理后台侧边栏 | 所有 admin 页 |

### 8.3 关键 TypeScript 接口定义

```typescript
// types/university.ts

export interface University {
  id: string;
  slug: string;
  name_zh: string;
  name_en: string;
  type: 'public' | 'private';
  established_year: number;
  state: string;
  city: string;
  coordinates_lat: number;
  coordinates_lng: number;
  website: string;
  logo_url: string | null;
  description_zh: string;
  ranking_qs: number | null;
  ranking_times: number | null;
  ranking_malaysia: number | null;
  total_students: number | null;
  international_students: number | null;
  featured: boolean;
  active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface UniversityWithRelations extends University {
  programs: Program[];
  contacts: UniversityContact[];
  facilities: UniversityFacility[];
  living_cost: LivingCost | null;
  news: NewsUpdate[];
}

export interface UniversityListItem {
  id: string;
  slug: string;
  name_zh: string;
  name_en: string;
  type: 'public' | 'private';
  state: string;
  city: string;
  logo_url: string | null;
  ranking_qs: number | null;
  ranking_malaysia: number | null;
  featured: boolean;
  _count: {
    programs: number;
  };
  min_tuition?: number; // 最低学费（从 programs 聚合）
}

// types/program.ts

export interface Program {
  id: string;
  university_id: string;
  name_zh: string;
  name_en: string;
  degree_level: 'bachelor' | 'master' | 'phd';
  field_category: string;
  duration_years: number;
  tuition_local_myr: number | null;
  tuition_international_myr: number | null;
  tuition_international_cny_estimate: number | null;
  language_of_instruction: string;
  intake_months: number[];
  requirements_zh: string | null;
  scholarship_available: boolean;
  active: boolean;
}

export interface ProgramWithUniversity extends Program {
  university: Pick<University, 'id' | 'slug' | 'name_zh' | 'name_en' | 'logo_url'>;
}

// types/search.ts

export interface SearchFilters {
  keyword?: string;
  type?: 'public' | 'private';
  state?: string;
  degree_level?: 'bachelor' | 'master' | 'phd';
  field_category?: string;
  tuition_min?: number;
  tuition_max?: number;
  ranking_qs_max?: number;
  scholarship_only?: boolean;
  language?: string;
}

export interface SearchParams extends SearchFilters {
  page: number;
  per_page: number;
  sort_by: 'name' | 'ranking_qs' | 'ranking_malaysia' | 'tuition' | 'established_year';
  sort_order: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}

// types/api.ts

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  meta?: {
    total?: number;
    page?: number;
    per_page?: number;
  };
}
```

---

## 9. i18n 国际化结构

详见 `docs/folder-structure.md` 中的 `messages/zh.json` 部分。

### 9.1 next-intl 配置要点

```typescript
// i18n.ts (根目录)
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));
```

```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['zh'],
  defaultLocale: 'zh',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
```

### 9.2 使用规范

- 所有用户可见的字符串必须通过 `useTranslations()` hook 获取
- 禁止在组件中硬编码中文字符串
- 键名使用 `域名.子域名.键` 格式，如 `university.detail.ranking`
- 包含变量的字符串使用 ICU 格式：`"已找到 {count} 所大学"`

---

## 10. 认证方案

### 10.1 Clerk 集成方案

```typescript
// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import { zhCN } from '@clerk/localizations';

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={zhCN}>
      {children}
    </ClerkProvider>
  );
}
```

```typescript
// middleware.ts (整合 Clerk + next-intl)
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createIntlMiddleware from 'next-intl/middleware';

const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isAdminRoute(req)) auth().protect();
});
```

### 10.2 权限模型

```
公开路由: / /universities /search /compare /blog /about
保护路由: /admin/*  (需要 Clerk 认证)
API 保护: /api/admin/* (需要 Clerk JWT 验证)
```

---

## 11. 性能优化策略

### 11.1 渲染策略

| 页面 | 渲染策略 | 原因 |
|------|---------|------|
| `/` 主页 | ISR (revalidate: 3600) | 内容半静态，SEO 优先 |
| `/universities` | ISR (revalidate: 1800) | 数据更新频率低 |
| `/universities/[slug]` | ISR (revalidate: 3600) | 院校信息稳定 |
| `/search` | CSR + TanStack Query | 动态筛选，实时响应 |
| `/compare` | CSR | 纯客户端状态 |
| `/blog` | SSG | 纯静态内容 |
| `/admin/*` | CSR | 不需要 SEO |

### 11.2 图片优化

- 所有图片使用 Next.js `<Image>` 组件
- 院校 Logo：`sizes="(max-width: 768px) 64px, 96px"`
- 院校封面图：WebP 格式，`sizes="(max-width: 768px) 100vw, 50vw"`
- 使用 Cloudinary 或 Vercel Blob 存储图片

### 11.3 数据获取策略

```typescript
// 服务端组件（列表页初始数据）
async function UniversitiesPage({ searchParams }) {
  const data = await getUniversities(searchParams); // 直接 Prisma 查询
  return <UniversitiesClient initialData={data} />;
}

// 客户端组件（筛选/搜索后的实时更新）
function UniversitiesClient({ initialData }) {
  const { data } = useQuery({
    queryKey: ['universities', filters],
    queryFn: () => fetchUniversities(filters),
    initialData,
    staleTime: 5 * 60 * 1000, // 5分钟
  });
}
```

---

## 12. 部署架构

### 12.1 推荐部署方案（Vercel）

```
用户请求
  → Vercel Edge Network (CDN/缓存)
  → Next.js 应用 (Vercel Serverless Functions)
  → PostgreSQL (Supabase 或 Neon.tech - 支持连接池)
  → 图片存储 (Vercel Blob 或 Cloudinary)
```

### 12.2 环境变量清单

```bash
# .env.local (本地开发，不提交 Git)
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."  # Prisma Migrate 用

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
CLERK_SECRET_KEY="sk_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/admin/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/admin/sign-up"
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/admin"

# 应用配置
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
NEXT_PUBLIC_MAP_DEFAULT_LAT="4.2105"
NEXT_PUBLIC_MAP_DEFAULT_LNG="101.9758"
NEXT_PUBLIC_MAP_DEFAULT_ZOOM="6"
```

---

## 13. 开发团队任务清单

详见 `docs/task-list.md`

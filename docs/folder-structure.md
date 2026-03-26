# 完整目录结构文档

> 版本：v1.0 | 日期：2026-03-26
> 基于 Next.js 15 App Router 结构

---

## 完整目录树

```
malaysia-uni-platform/
├── .env.example                    # 环境变量模板（提交 Git）
├── .env.local                      # 本地环境变量（不提交 Git）
├── .eslintrc.json                  # ESLint 配置
├── .gitignore
├── .nvmrc                          # Node 版本锁定（Node 20 LTS）
├── .prettierrc                     # Prettier 代码格式化配置
├── components.json                 # shadcn/ui 组件配置
├── i18n.ts                         # next-intl 服务端配置
├── middleware.ts                   # Next.js 中间件（Clerk + next-intl）
├── next.config.ts                  # Next.js 配置
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs              # Tailwind CSS PostCSS 配置
├── tailwind.config.ts              # Tailwind 自定义配置
├── tsconfig.json
│
├── app/                            # Next.js App Router 核心目录
│   ├── globals.css                 # 全局样式 + Tailwind 导入
│   ├── layout.tsx                  # 根 Layout（ClerkProvider + QueryProvider + NextIntlProvider）
│   ├── not-found.tsx               # 全局 404 页面
│   ├── error.tsx                   # 全局错误边界
│   ├── sitemap.ts                  # 动态 Sitemap 生成
│   ├── robots.ts                   # robots.txt 生成
│   │
│   ├── page.tsx                    # 主页 /
│   ├── loading.tsx                 # 主页 Loading 状态
│   │
│   ├── universities/               # 院校相关路由
│   │   ├── page.tsx                # 院校列表 /universities
│   │   ├── loading.tsx             # 院校列表 Loading
│   │   └── [slug]/                 # 院校详情动态路由
│   │       ├── page.tsx            # 院校详情 /universities/[slug]
│   │       ├── loading.tsx
│   │       ├── not-found.tsx       # 院校不存在 404
│   │       └── programs/           # 专业路由（嵌套在院校下）
│   │           ├── page.tsx        # 专业列表 /universities/[slug]/programs
│   │           ├── loading.tsx
│   │           └── [programId]/
│   │               ├── page.tsx    # 专业详情 /universities/[slug]/programs/[programId]
│   │               └── loading.tsx
│   │
│   ├── search/
│   │   ├── page.tsx                # 搜索结果页 /search
│   │   └── loading.tsx
│   │
│   ├── compare/
│   │   └── page.tsx                # 院校对比页 /compare
│   │
│   ├── blog/
│   │   ├── page.tsx                # 博客列表 /blog
│   │   └── [slug]/
│   │       └── page.tsx            # 博客文章 /blog/[slug]
│   │
│   ├── about/
│   │   └── page.tsx                # 关于平台 /about
│   │
│   ├── admin/                      # 管理后台（受 Clerk 保护）
│   │   ├── layout.tsx              # 管理后台公共 Layout（侧边栏 + Header）
│   │   ├── page.tsx                # 仪表盘 /admin
│   │   ├── sign-in/
│   │   │   └── [[...sign-in]]/
│   │   │       └── page.tsx        # Clerk 登录页 /admin/sign-in
│   │   ├── universities/
│   │   │   ├── page.tsx            # 院校管理列表 /admin/universities
│   │   │   ├── new/
│   │   │   │   └── page.tsx        # 新建院校 /admin/universities/new
│   │   │   └── [id]/
│   │   │       └── edit/
│   │   │           └── page.tsx    # 编辑院校 /admin/universities/[id]/edit
│   │   ├── programs/
│   │   │   ├── page.tsx            # 专业管理列表 /admin/programs
│   │   │   ├── new/
│   │   │   │   └── page.tsx        # 新建专业
│   │   │   └── [id]/
│   │   │       └── edit/
│   │   │           └── page.tsx    # 编辑专业
│   │   ├── import/
│   │   │   └── page.tsx            # 批量导入 /admin/import
│   │   └── news/
│   │       ├── page.tsx            # 新闻管理列表
│   │       ├── new/
│   │       │   └── page.tsx
│   │       └── [id]/
│   │           └── edit/
│   │               └── page.tsx
│   │
│   └── api/                        # API Route Handlers
│       ├── universities/
│       │   ├── route.ts            # GET /api/universities（列表 + 筛选）
│       │   └── [slug]/
│       │       ├── route.ts        # GET /api/universities/[slug]（详情）
│       │       └── programs/
│       │           └── route.ts    # GET /api/universities/[slug]/programs
│       ├── programs/
│       │   └── [programId]/
│       │       └── route.ts        # GET /api/programs/[programId]
│       ├── search/
│       │   ├── route.ts            # GET /api/search（全局搜索）
│       │   └── suggestions/
│       │       └── route.ts        # GET /api/search/suggestions（autocomplete）
│       ├── compare/
│       │   └── route.ts            # GET /api/compare（批量院校对比数据）
│       ├── stats/
│       │   └── route.ts            # GET /api/stats（平台统计数字）
│       ├── filters/
│       │   └── route.ts            # GET /api/filters（筛选选项数据）
│       └── admin/                  # 管理员 API（需 Clerk 认证）
│           ├── universities/
│           │   ├── route.ts        # GET（列表）POST（创建）
│           │   └── [id]/
│           │       └── route.ts    # PATCH（更新）DELETE（删除）
│           ├── programs/
│           │   ├── route.ts        # GET POST
│           │   └── [id]/
│           │       └── route.ts    # PATCH DELETE
│           ├── import/
│           │   ├── universities/
│           │   │   └── route.ts    # POST /api/admin/import/universities
│           │   └── programs/
│           │       └── route.ts    # POST /api/admin/import/programs
│           ├── upload/
│           │   └── route.ts        # POST /api/admin/upload（图片上传）
│           ├── news/
│           │   ├── route.ts        # GET POST
│           │   └── [id]/
│           │       └── route.ts    # PATCH DELETE
│           └── dashboard/
│               └── route.ts        # GET /api/admin/dashboard（统计数据）
│
├── components/                     # React 组件库
│   ├── layout/                     # 全局布局组件
│   │   ├── Navbar.tsx              # 顶部导航栏
│   │   ├── Footer.tsx              # 页脚
│   │   ├── Breadcrumb.tsx          # 面包屑导航
│   │   └── TabNav.tsx              # 通用 Tab 导航（院校详情等页使用）
│   │
│   ├── providers/                  # React Context Provider
│   │   ├── QueryProvider.tsx       # TanStack Query Provider
│   │   └── CompareProvider.tsx     # 对比状态 Provider（或用 Zustand）
│   │
│   ├── home/                       # 主页专用组件
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── FeaturedUniversities.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── PopularPrograms.tsx
│   │   ├── Testimonials.tsx
│   │   └── CtaSection.tsx
│   │
│   ├── university/                 # 院校相关组件
│   │   ├── UniversityCard.tsx      # 院校卡片（主页/列表/搜索通用）
│   │   ├── UniversityCardCompact.tsx # 紧凑版院校卡片（对比/侧边）
│   │   ├── UniversityListItem.tsx  # 列表页行项目
│   │   ├── UniversityHeader.tsx    # 院校详情页顶部
│   │   ├── KeyInfoStrip.tsx        # 关键数字横排（排名/学费/规模）
│   │   ├── RankingBadge.tsx        # 排名显示 Badge
│   │   ├── CostSummary.tsx         # 学费摘要卡
│   │   ├── LivingCostCard.tsx      # 生活费估算卡
│   │   ├── UniversityMap.tsx       # Leaflet 地图（单校/多校）
│   │   ├── NewsCard.tsx            # 院校动态卡片
│   │   └── tabs/                   # 院校详情 Tab 内容组件
│   │       ├── OverviewTab.tsx
│   │       ├── ProgramsTab.tsx
│   │       ├── CostTab.tsx
│   │       ├── FacilitiesTab.tsx
│   │       ├── ContactTab.tsx
│   │       └── MapTab.tsx
│   │
│   ├── program/                    # 专业相关组件
│   │   ├── ProgramCard.tsx         # 专业卡片
│   │   ├── ProgramTable.tsx        # 专业数据表格（可排序）
│   │   ├── ProgramHeader.tsx       # 专业详情页顶部
│   │   ├── AdmissionRequirementTable.tsx # 录取要求表格
│   │   └── DegreeLevelBadge.tsx    # 学位层次 Badge（本科/硕士/博士）
│   │
│   ├── search/                     # 搜索相关组件
│   │   ├── SearchBar.tsx           # 主搜索框（含 autocomplete）
│   │   ├── FilterPanel.tsx         # 院校筛选面板
│   │   ├── SearchSuggestion.tsx    # 搜索建议下拉项
│   │   └── ActiveFilters.tsx       # 已选筛选项展示（可删除）
│   │
│   ├── compare/                    # 对比相关组件
│   │   ├── CompareDrawer.tsx       # 底部对比托盘（全局）
│   │   ├── CompareTable.tsx        # 对比表格
│   │   └── AddToCompareButton.tsx  # 加入对比按钮
│   │
│   ├── blog/                       # 博客相关组件
│   │   ├── BlogCard.tsx            # 博客文章卡片
│   │   └── BlogContent.tsx         # 博客正文渲染（Markdown）
│   │
│   ├── admin/                      # 管理后台组件
│   │   ├── AdminSidebar.tsx        # 管理后台侧边栏
│   │   ├── AdminHeader.tsx         # 管理后台顶部 Header
│   │   ├── AdminDataTable.tsx      # 通用管理数据表格
│   │   ├── ImportWizard.tsx        # 批量导入向导
│   │   ├── FileDropzone.tsx        # 文件拖拽上传区
│   │   └── forms/
│   │       ├── UniversityForm.tsx  # 院校新建/编辑表单
│   │       ├── ProgramForm.tsx     # 专业新建/编辑表单
│   │       └── NewsForm.tsx        # 新闻新建/编辑表单
│   │
│   └── ui/                         # 基础 UI 组件（shadcn/ui + 自定义封装）
│       ├── StatsBadge.tsx          # 统计数字徽章
│       ├── EmptyState.tsx          # 空状态组件
│       ├── LoadingSkeleton.tsx     # 骨架屏通用组件
│       ├── MapPicker.tsx           # 地图坐标选点（管理后台用）
│       ├── MarkdownEditor.tsx      # Markdown 编辑器封装
│       ├── MarkdownRenderer.tsx    # Markdown 渲染
│       ├── MonthPicker.tsx         # 入学月份多选
│       ├── ImageUpload.tsx         # 图片上传组件
│       ├── ConfirmDialog.tsx       # 确认操作对话框
│       └── PriceDisplay.tsx        # 价格展示（支持 MYR/CNY 切换）
│
├── lib/                            # 工具函数和业务逻辑
│   ├── db.ts                       # Prisma Client 单例
│   ├── auth.ts                     # Clerk 认证工具函数
│   ├── utils.ts                    # 通用工具函数（cn, formatDate, formatCurrency...）
│   │
│   ├── queries/                    # 数据库查询函数
│   │   ├── university.ts           # 院校查询（getUniversities, getUniversityBySlug...）
│   │   ├── program.ts              # 专业查询
│   │   ├── search.ts               # 全局搜索查询
│   │   └── stats.ts                # 统计数据查询
│   │
│   ├── validations/                # Zod 验证 Schema
│   │   ├── university.ts           # createUniversitySchema, updateUniversitySchema
│   │   ├── program.ts              # createProgramSchema, updateProgramSchema
│   │   ├── search.ts               # searchQuerySchema
│   │   └── import.ts               # CSV 导入行验证 Schema
│   │
│   ├── constants/                  # 常量定义
│   │   ├── malaysia.ts             # 马来西亚州属列表、货币常量
│   │   ├── categories.ts           # 专业大类列表
│   │   └── filters.ts              # 筛选选项默认值
│   │
│   └── hooks/                      # 自定义 React Hooks
│       ├── useUniversities.ts      # TanStack Query 封装（院校列表）
│       ├── useSearchSuggestions.ts # 搜索建议 hook（带防抖）
│       ├── useCompare.ts           # 对比状态 hook
│       ├── useFilters.ts           # URL 筛选参数 hook（与 URL 同步）
│       └── useMediaQuery.ts        # 响应式断点检测 hook
│
├── types/                          # TypeScript 类型定义
│   ├── university.ts               # University, UniversityListItem, UniversityWithRelations
│   ├── program.ts                  # Program, ProgramWithUniversity
│   ├── search.ts                   # SearchFilters, SearchParams, SearchResult
│   ├── api.ts                      # ApiResponse, PaginatedResponse
│   ├── compare.ts                  # CompareData, CompareStore
│   └── admin.ts                    # AdminDashboardStats, ImportResult
│
├── messages/                       # i18n 翻译文件
│   └── zh.json                     # 简体中文（默认语言）
│
├── prisma/                         # Prisma ORM
│   ├── schema.prisma               # 数据库 Schema 定义
│   ├── seed.ts                     # 种子数据脚本
│   └── migrations/                 # 自动生成的迁移文件（提交 Git）
│       └── 20260326000000_init/
│           └── migration.sql
│
└── public/                         # 静态资源（直接通过 URL 访问）
    ├── favicon.ico
    ├── og-default.png              # Open Graph 默认图（1200×630）
    ├── images/
    │   ├── universities/           # 院校 Logo 和封面图
    │   │   ├── um-logo.png
    │   │   ├── um-cover.jpg
    │   │   └── ...
    │   ├── facilities/             # 校园设施图片
    │   └── blog/                   # 博客配图
    ├── icons/                      # 专业大类图标等 SVG
    │   ├── engineering.svg
    │   ├── business.svg
    │   └── ...
    └── templates/                  # 批量导入 CSV 模板
        ├── universities-template.csv
        └── programs-template.csv
```

---

## 关键文件详细说明

### `app/layout.tsx` — 根 Layout

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import { Noto_Sans_SC } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { zhCN } from '@clerk/localizations';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { QueryProvider } from '@/components/providers/QueryProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CompareDrawer } from '@/components/compare/CompareDrawer';
import './globals.css';

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-sc',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | 马来西亚大学信息平台',
    default: '马来西亚大学信息平台 — 一站式留学指南',
  },
  description: '为中国学生提供马来西亚所有大学的招生信息、学费、专业、奖学金一站式查询',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <ClerkProvider localization={zhCN}>
      <html lang="zh-CN" className={notoSansSC.variable}>
        <body>
          <NextIntlClientProvider messages={messages}>
            <QueryProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
              <CompareDrawer />
            </QueryProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
```

---

### `middleware.ts` — 中间件（Clerk + next-intl）

```typescript
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isAdminRoute = createRouteMatcher(['/admin(.*)']);

// 注意：/admin/sign-in 不需要保护，Clerk 会自动处理
export default clerkMiddleware((auth, req) => {
  if (isAdminRoute(req) && !req.url.includes('/sign-in')) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // 跳过 Next.js 内部文件和静态文件
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
```

---

### `lib/utils.ts` — 核心工具函数

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// shadcn/ui 标准 className 合并工具
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 格式化马来西亚林吉特
export function formatMYR(amount: number | string | null): string {
  if (amount === null || amount === undefined) return '暂无数据';
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  return `RM ${num.toLocaleString('zh-CN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

// 格式化人民币
export function formatCNY(amount: number | string | null): string {
  if (amount === null || amount === undefined) return '暂无数据';
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  return `¥${num.toLocaleString('zh-CN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

// 格式化排名显示
export function formatRanking(ranking: number | null, prefix = '#'): string {
  if (!ranking) return '未上榜';
  return `${prefix}${ranking}`;
}

// 格式化入学月份数组为可读字符串
export function formatIntakeMonths(months: number[]): string {
  const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月',
                       '7月', '8月', '9月', '10月', '11月', '12月'];
  return months.map((m) => monthNames[m - 1]).join('、');
}

// 格式化学制年限
export function formatDuration(years: number | string): string {
  const num = typeof years === 'string' ? parseFloat(years) : years;
  if (num === Math.floor(num)) return `${num}年`;
  return `${num}年`;
}

// 院校类型中文标签
export function formatUniversityType(type: 'public' | 'private'): string {
  return type === 'public' ? '公立大学' : '私立大学';
}

// 学位层次中文标签
export function formatDegreeLevel(level: 'bachelor' | 'master' | 'phd'): string {
  const map = { bachelor: '本科', master: '硕士', phd: '博士' };
  return map[level];
}

// 构建搜索 URL Query String
export function buildQueryString(params: Record<string, unknown>): string {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.set(key, String(value));
    }
  });
  return searchParams.toString();
}
```

---

### `lib/constants/malaysia.ts` — 马来西亚常量

```typescript
// lib/constants/malaysia.ts

// 马来西亚16个州属/联邦直辖区
export const MALAYSIA_STATES = [
  { value: '吉隆坡联邦直辖区', label: '吉隆坡联邦直辖区', short: 'KL' },
  { value: '雪兰莪', label: '雪兰莪', short: 'Selangor' },
  { value: '槟城', label: '槟城', short: 'Penang' },
  { value: '柔佛', label: '柔佛', short: 'Johor' },
  { value: '沙巴', label: '沙巴', short: 'Sabah' },
  { value: '砂拉越', label: '砂拉越', short: 'Sarawak' },
  { value: '霹雳', label: '霹雳', short: 'Perak' },
  { value: '吉打', label: '吉打', short: 'Kedah' },
  { value: '马六甲', label: '马六甲', short: 'Melaka' },
  { value: '森美兰', label: '森美兰', short: 'N. Sembilan' },
  { value: '彭亨', label: '彭亨', short: 'Pahang' },
  { value: '玻璃市', label: '玻璃市', short: 'Perlis' },
  { value: '丁宜联邦直辖区', label: '丁宜联邦直辖区', short: 'Putrajaya' },
  { value: '纳闽联邦直辖区', label: '纳闽联邦直辖区', short: 'Labuan' },
  { value: '吉兰丹', label: '吉兰丹', short: 'Kelantan' },
  { value: '登嘉楼', label: '登嘉楼', short: 'Terengganu' },
] as const;

// 马来西亚地图中心点
export const MALAYSIA_MAP_CENTER = {
  lat: 4.2105,
  lng: 101.9758,
  zoom: 6,
} as const;

// MYR 到 CNY 参考汇率（需定期更新）
export const MYR_TO_CNY_RATE = 1.7;
```

---

### `lib/constants/categories.ts` — 专业大类

```typescript
// lib/constants/categories.ts

export const FIELD_CATEGORIES = [
  { value: '工程与技术', label: '工程与技术', icon: 'engineering', color: '#3B82F6' },
  { value: '商科与管理', label: '商科与管理', icon: 'business', color: '#10B981' },
  { value: '计算机与信息技术', label: '计算机与信息技术', icon: 'computer', color: '#6366F1' },
  { value: '医学与健康科学', label: '医学与健康科学', icon: 'medical', color: '#EF4444' },
  { value: '建筑与设计', label: '建筑与设计', icon: 'architecture', color: '#F59E0B' },
  { value: '法律', label: '法律', icon: 'law', color: '#8B5CF6' },
  { value: '传播与媒体', label: '传播与媒体', icon: 'media', color: '#EC4899' },
  { value: '教育学', label: '教育学', icon: 'education', color: '#06B6D4' },
  { value: '理学', label: '理学（纯科学）', icon: 'science', color: '#84CC16' },
  { value: '社会科学与人文', label: '社会科学与人文', icon: 'social', color: '#F97316' },
  { value: '酒店与旅游', label: '酒店与旅游', icon: 'hospitality', color: '#14B8A6' },
  { value: '艺术与创意', label: '艺术与创意', icon: 'arts', color: '#A855F7' },
] as const;

export type FieldCategory = typeof FIELD_CATEGORIES[number]['value'];
```

---

### `messages/zh.json` — 完整 i18n 键结构

```json
{
  "common": {
    "loading": "加载中...",
    "error": "加载失败，请重试",
    "noData": "暂无数据",
    "viewDetails": "查看详情",
    "backToList": "返回列表",
    "share": "分享",
    "officialWebsite": "官方网站",
    "search": "搜索",
    "filter": "筛选",
    "reset": "重置",
    "apply": "应用",
    "confirm": "确认",
    "cancel": "取消",
    "save": "保存",
    "delete": "删除",
    "edit": "编辑",
    "create": "新建",
    "import": "导入",
    "export": "导出",
    "upload": "上传",
    "download": "下载",
    "preview": "预览",
    "total": "共 {count} 条",
    "page": "第 {current}/{total} 页",
    "perPage": "每页显示",
    "sortBy": "排序方式",
    "public": "公立",
    "private": "私立",
    "bachelor": "本科",
    "master": "硕士",
    "phd": "博士",
    "myr": "马来西亚林吉特",
    "cny": "人民币",
    "perYear": "/年",
    "perMonth": "/月",
    "years": "{count}年",
    "required": "必填",
    "optional": "选填"
  },
  "nav": {
    "home": "首页",
    "universities": "院校库",
    "search": "专业查询",
    "compare": "院校对比",
    "blog": "留学攻略",
    "about": "关于我们",
    "admin": "管理后台"
  },
  "home": {
    "hero": {
      "title": "一站式掌握马来西亚所有大学最新招生信息",
      "subtitle": "帮中国学生快速找到性价比最高的留学选择",
      "searchPlaceholder": "搜索院校名称或专业...",
      "quickLinks": {
        "bachelor": "找本科",
        "master": "找硕士",
        "phd": "找博士",
        "scholarship": "查奖学金"
      }
    },
    "stats": {
      "universities": "覆盖院校",
      "programs": "可查专业",
      "reviews": "用户好评",
      "updateFrequency": "每周更新"
    },
    "featured": {
      "title": "精选热门院校",
      "subtitle": "马来西亚综合实力最强的院校",
      "viewAll": "查看全部院校 →"
    },
    "whyChooseUs": {
      "title": "为什么选择我们",
      "comprehensive": {
        "title": "数据全面权威",
        "desc": "覆盖马来西亚所有公私立大学，每周定期核实更新数据"
      },
      "efficient": {
        "title": "10秒找到关键信息",
        "desc": "学费、学制、录取要求一目了然，告别信息碎片化"
      },
      "compare": {
        "title": "一键多校对比",
        "desc": "最多同时对比4所院校，帮你做出最优决策"
      }
    },
    "categories": {
      "title": "按专业方向查找",
      "subtitle": "选择你感兴趣的专业大类"
    },
    "cta": {
      "title": "开始你的马来西亚留学之旅",
      "subtitle": "数千名中国学生已通过本平台找到心仪院校",
      "button": "立即搜索院校"
    }
  },
  "university": {
    "list": {
      "title": "马来西亚大学完整列表",
      "subtitle": "共 {count} 所院校",
      "toggleMap": "地图视图",
      "toggleList": "列表视图",
      "noResults": "没有找到符合条件的院校",
      "noResultsHint": "请尝试放宽筛选条件"
    },
    "card": {
      "addToCompare": "加入对比",
      "removeFromCompare": "已在对比",
      "programs": "{count} 个专业",
      "minTuition": "最低学费",
      "ranking": "QS排名",
      "founded": "建校"
    },
    "detail": {
      "tabs": {
        "overview": "概览",
        "programs": "专业",
        "cost": "费用",
        "facilities": "住宿&生活",
        "contact": "联系方式",
        "map": "地图"
      },
      "keyInfo": {
        "qsRanking": "QS世界排名",
        "localRanking": "马来西亚排名",
        "internationalTuition": "国际生学费",
        "totalStudents": "在校学生",
        "notRanked": "未上榜"
      },
      "overview": {
        "about": "院校简介",
        "highlights": "院校亮点",
        "latestNews": "最新动态",
        "viewAllNews": "查看全部动态"
      }
    },
    "filter": {
      "title": "筛选条件",
      "type": "院校类型",
      "state": "所在州属",
      "degreeLevel": "学位层次",
      "fieldCategory": "专业大类",
      "tuitionRange": "国际生学费范围（MYR/年）",
      "qsRanking": "QS排名上限",
      "scholarshipOnly": "仅显示有奖学金",
      "language": "教学语言",
      "applyFilter": "应用筛选",
      "resetFilter": "重置全部"
    },
    "sort": {
      "label": "排序",
      "rankingMalaysia": "按马来西亚排名",
      "rankingQS": "按QS排名",
      "tuitionAsc": "学费从低到高",
      "tuitionDesc": "学费从高到低",
      "nameAsc": "按院校名(A-Z)",
      "established": "按建校年份"
    }
  },
  "program": {
    "list": {
      "title": "全部专业",
      "count": "共 {count} 个专业",
      "filterByDegree": "按学位筛选",
      "filterByField": "按专业大类筛选",
      "allDegrees": "全部学位",
      "allFields": "全部专业"
    },
    "table": {
      "name": "专业名称",
      "degree": "学位",
      "field": "专业大类",
      "duration": "学制",
      "tuitionLocal": "本地生学费/年",
      "tuitionIntl": "国际生学费/年",
      "tuitionCNY": "人民币估算/年",
      "language": "教学语言",
      "intake": "入学月份",
      "scholarship": "奖学金",
      "action": "操作"
    },
    "detail": {
      "keyInfo": {
        "duration": "学制",
        "tuition": "国际生学费",
        "language": "教学语言",
        "nextIntake": "下次招生"
      },
      "tabs": {
        "overview": "专业概况",
        "requirements": "录取要求",
        "tuition": "费用详情",
        "scholarship": "奖学金"
      },
      "requirements": {
        "title": "录取要求",
        "type": "要求类型",
        "minScore": "最低要求",
        "description": "详细说明",
        "mandatory": "必要条件",
        "optional": "参考条件"
      },
      "applyButton": "申请此专业（跳转官网）"
    }
  },
  "search": {
    "placeholder": "搜索院校名称、专业名称或关键词...",
    "resultsFor": ""{query}" 的搜索结果",
    "totalResults": "共找到 {count} 个结果",
    "tabs": {
      "all": "全部 ({count})",
      "universities": "院校 ({count})",
      "programs": "专业 ({count})"
    },
    "suggestions": {
      "universities": "院校",
      "programs": "专业",
      "noSuggestions": "未找到相关建议"
    },
    "empty": {
      "title": "未找到相关结果",
      "subtitle": "请尝试更换关键词或放宽筛选条件",
      "suggestions": "热门搜索"
    }
  },
  "compare": {
    "title": "院校对比",
    "addUniversity": "添加院校（最多4所）",
    "clearAll": "清空全部",
    "drawer": {
      "comparing": "正在对比 {count} 所院校",
      "startCompare": "开始对比",
      "hint": "点击院校卡片上的"加入对比"添加"
    },
    "table": {
      "universityInfo": "院校信息",
      "type": "院校类型",
      "founded": "建校年份",
      "location": "所在地",
      "ranking": "排名",
      "qsRanking": "QS世界排名",
      "localRanking": "马来西亚排名",
      "cost": "费用",
      "bachelorTuition": "本科国际生学费/年",
      "masterTuition": "硕士国际生学费/年",
      "livingCost": "月生活费估算",
      "scale": "办学规模",
      "totalStudents": "在校总学生数",
      "intlStudents": "国际学生数",
      "programs": "专业",
      "bachelorCount": "本科专业数",
      "masterCount": "硕士专业数",
      "phdCount": "博士专业数",
      "scholarship": "有无奖学金",
      "language": "主要教学语言",
      "website": "官方网站",
      "viewDetails": "查看详情",
      "yes": "有",
      "no": "无"
    }
  },
  "cost": {
    "tuition": "学费",
    "localStudent": "本地学生",
    "intlStudent": "国际学生",
    "perYear": "每年",
    "totalEstimate": "总费用估算",
    "living": "生活费",
    "accommodation": {
      "title": "住宿费",
      "onCampus": "校内宿舍",
      "offCampus": "校外公寓"
    },
    "monthly": {
      "food": "餐饮",
      "transport": "交通",
      "misc": "杂费",
      "total": "月合计"
    },
    "note": "以上费用为估算数据，实际费用因个人情况而异",
    "exchangeRateNote": "人民币估算基于汇率 1 MYR ≈ {rate} CNY",
    "calculator": {
      "title": "总费用估算计算器",
      "years": "学制（年）",
      "result": "{years}年总费用约"
    }
  },
  "admin": {
    "nav": {
      "dashboard": "仪表盘",
      "universities": "院校管理",
      "programs": "专业管理",
      "news": "新闻动态",
      "import": "批量导入",
      "settings": "设置"
    },
    "dashboard": {
      "title": "管理后台",
      "universities": "院校",
      "programs": "专业",
      "news": "新闻",
      "thisMonth": "本月新增"
    },
    "university": {
      "create": "新建院校",
      "edit": "编辑院校",
      "delete": "删除院校",
      "deleteConfirm": "确认删除院校 "{name}" ？此操作将同时删除所有关联专业和数据，且不可恢复。",
      "form": {
        "basicInfo": "基本信息",
        "location": "地理位置",
        "media": "媒体资源",
        "description": "院校介绍",
        "rankings": "排名数据",
        "scale": "办学规模",
        "settings": "平台设置"
      }
    },
    "import": {
      "title": "批量导入数据",
      "step1": "选择类型",
      "step2": "上传文件",
      "step3": "预览确认",
      "selectType": "选择导入类型",
      "downloadTemplate": "下载导入模板",
      "dragDropHint": "拖拽 CSV/Excel 文件到此处，或点击选择文件",
      "fileRequirements": "支持 .csv 和 .xlsx 格式，文件大小不超过 10MB",
      "parseSuccess": "文件解析成功，共 {total} 行",
      "parseErrors": "发现 {count} 行数据错误",
      "confirmImport": "确认导入 {valid} 条有效数据",
      "importSuccess": "成功导入 {count} 条数据",
      "importSkipped": "跳过 {count} 条已存在数据"
    }
  },
  "blog": {
    "title": "马来西亚留学攻略",
    "subtitle": "最新、最全的留学干货，助你顺利开启马来西亚留学之旅",
    "categories": {
      "visa": "签证与入境",
      "cost": "费用规划",
      "choice": "院校选择",
      "programs": "专业推荐",
      "life": "学生生活",
      "scholarship": "奖学金攻略",
      "timeline": "申请时间线",
      "faq": "常见问题"
    },
    "readMore": "阅读全文",
    "publishedAt": "发布于 {date}",
    "relatedArticles": "相关文章"
  },
  "about": {
    "title": "关于我们",
    "mission": "平台使命",
    "missionText": "帮助每一位有留学梦想的中国学生，找到最适合自己的马来西亚大学",
    "contact": {
      "title": "联系我们",
      "wechat": "微信咨询",
      "email": "邮箱"
    }
  },
  "errors": {
    "notFound": {
      "title": "页面不存在",
      "subtitle": "你访问的页面已被移除或地址有误",
      "backHome": "返回首页"
    },
    "universityNotFound": {
      "title": "找不到该院校",
      "subtitle": "院校信息可能已更新，请返回院校列表查找"
    },
    "serverError": {
      "title": "服务器出错",
      "subtitle": "抱歉，服务器暂时出现问题，请稍后重试",
      "retry": "重试"
    }
  }
}
```

---

## 目录说明速查表

| 目录/文件 | 说明 | 负责人 |
|---------|------|--------|
| `app/` | Next.js App Router 所有路由 | 全栈 |
| `app/api/` | API Route Handlers | 后端/全栈 |
| `app/admin/` | 管理后台页面（受保护） | 全栈 |
| `components/home/` | 主页专属组件（"让客户看到你版"） | 前端 |
| `components/university/` | 院校信息展示组件 | 前端 |
| `components/program/` | 专业信息展示组件 | 前端 |
| `components/search/` | 搜索和筛选组件 | 前端 |
| `components/compare/` | 对比功能组件 | 前端 |
| `components/admin/` | 管理后台专属组件 | 全栈 |
| `components/ui/` | 通用 UI 封装组件 | 前端 |
| `lib/queries/` | 数据库查询函数（服务端） | 后端/全栈 |
| `lib/validations/` | Zod 验证 Schema | 全员 |
| `lib/constants/` | 业务常量（州属/专业大类等） | 全员 |
| `lib/hooks/` | 自定义 React Hooks（客户端） | 前端 |
| `types/` | TypeScript 类型定义 | 全员 |
| `messages/zh.json` | 所有 UI 文本（i18n） | 全员 |
| `prisma/` | 数据库 Schema 和迁移 | 后端/全栈 |
| `public/images/universities/` | 院校 Logo 和封面图 | 内容团队 |
| `public/templates/` | CSV 导入模板 | 后端/全栈 |

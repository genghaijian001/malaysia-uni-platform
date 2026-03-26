# 项目任务清单 — 完整开发路线图

> 版本：v1.0 | 日期：2026-03-26
> 团队：全栈工程师 × 2（或前端×1 + 后端×1）

---

## 目录

1. [任务优先级总览](#1-任务优先级总览)
2. [P1 项目基础设置](#2-p1-项目基础设置)
3. [P2 数据库与后端基础](#3-p2-数据库与后端基础)
4. [P3 主页开发](#4-p3-主页开发)
5. [P4 院校功能页面](#5-p4-院校功能页面)
6. [P5 管理后台](#6-p5-管理后台)
7. [P6 优化与收尾](#7-p6-优化与收尾)
8. [各阶段验收标准](#8-各阶段验收标准)
9. [预估工时](#9-预估工时)

---

## 1. 任务优先级总览

```
P1 — 必须在任何编码开始前完成（项目脚手架）
P2 — 数据库和 API 基础，前端依赖它
P3 — 主页（对外展示，优先完成）
P4 — 核心功能页（最大用户价值）
P5 — 管理后台（内容维护支撑）
P6 — 优化、SEO、测试、部署
```

**交付顺序建议**（两人团队并行）：

```
周1-2:  P1 + P2 （全员同步）
周3:    P2后续 + P3并行开始
周4-5:  P3完成 + P4并行
周6-7:  P4收尾 + P5并行
周8:    P5完成 + P6优化
```

---

## 2. P1 项目基础设置

> **负责人**：任意一名工程师 | **预计工时**：2天

### P1-001 初始化 Next.js 项目

- [ ] 使用 `create-next-app@latest` 创建项目（选择 TypeScript + Tailwind + App Router）
- [ ] 配置 pnpm 为默认包管理器（删除 `package-lock.json`）
- [ ] 配置 `.nvmrc` 指定 Node 版本（推荐 Node 20 LTS）
- [ ] 初始化 Git 仓库，创建 `.gitignore`

**命令**：
```bash
pnpm create next-app@latest malaysia-uni-platform \
  --typescript --tailwind --eslint \
  --app --src-dir=false --import-alias="@/*"
```

### P1-002 安装所有依赖

- [ ] 安装 shadcn/ui 并初始化（`pnpm dlx shadcn@latest init`）
- [ ] 安装 Prisma 及 PostgreSQL 适配器
- [ ] 安装 next-intl
- [ ] 安装 TanStack Query v5
- [ ] 安装 React Hook Form + Zod
- [ ] 安装 Clerk for Next.js
- [ ] 安装 Leaflet + React Leaflet + 类型声明
- [ ] 安装开发依赖：`@types/leaflet`, `tsx`, `bcrypt`, `@types/bcrypt`

**完整安装命令**：
```bash
# 核心依赖
pnpm add @prisma/client next-intl @tanstack/react-query \
  react-hook-form zod @hookform/resolvers \
  @clerk/nextjs leaflet react-leaflet \
  lucide-react date-fns

# shadcn/ui 组件（按需添加）
pnpm dlx shadcn@latest add button input select \
  table badge card tabs dialog sheet \
  dropdown-menu form label separator \
  skeleton toast navigation-menu

# 开发依赖
pnpm add -D prisma @types/leaflet tsx \
  bcrypt @types/bcrypt
```

### P1-003 配置 TypeScript

- [ ] 更新 `tsconfig.json` 配置严格模式
- [ ] 配置路径别名 `@/*` 指向 `./`
- [ ] 确认 `strict: true`, `noUncheckedIndexedAccess: true`

```json
// tsconfig.json 关键配置
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### P1-004 配置 ESLint + Prettier

- [ ] 安装并配置 Prettier
- [ ] 配置 `.prettierrc`（单引号，无分号，行宽100）
- [ ] 配置 ESLint 规则（继承 Next.js 推荐规则）
- [ ] 安装 Husky + lint-staged

```bash
pnpm add -D prettier eslint-config-prettier \
  husky lint-staged
npx husky init
```

**.prettierrc**：
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2
}
```

### P1-005 配置环境变量

- [ ] 创建 `.env.local`（参考 `architecture.md` 第12章环境变量清单）
- [ ] 创建 `.env.example`（上传 Git，不含真实值）
- [ ] 将 `.env.local` 加入 `.gitignore`

### P1-006 建立完整目录结构

- [ ] 按 `folder-structure.md` 创建所有目录
- [ ] 创建各目录的 `.gitkeep` 占位文件（空目录无法提交 Git）
- [ ] 创建 `types/` 目录下所有 TypeScript 接口文件（参考 `architecture.md` 第8章）

### P1-007 配置 next-intl

- [ ] 创建 `i18n.ts` 配置文件
- [ ] 创建 `messages/zh.json` 框架文件
- [ ] 配置 `middleware.ts`（next-intl 路由中间件）
- [ ] 在 `app/layout.tsx` 中集成 `NextIntlClientProvider`

### P1-008 配置 TanStack Query

- [ ] 创建 `components/providers/QueryProvider.tsx`
- [ ] 在 `app/layout.tsx` 中包裹 `QueryProvider`

### P1-009 配置全局 Layout

- [ ] 创建 `components/layout/Navbar.tsx`（基础版，含 Logo + 导航链接）
- [ ] 创建 `components/layout/Footer.tsx`
- [ ] 在 `app/layout.tsx` 中集成 Navbar 和 Footer
- [ ] 配置全局字体（推荐 `Noto Sans SC` 用于中文）

**验收标准**：
- `pnpm dev` 启动无报错
- `pnpm build` 编译无错误
- `http://localhost:3000` 可以看到带 Navbar 的空白页面

---

## 3. P2 数据库与后端基础

> **负责人**：后端/全栈工程师 | **预计工时**：3-4天

### P2-001 Prisma 初始化

- [ ] 运行 `npx prisma init --datasource-provider postgresql`
- [ ] 将 `docs/database-schema.md` 中的完整 schema 写入 `prisma/schema.prisma`
- [ ] 配置 `DATABASE_URL` 连接本地 PostgreSQL

### P2-002 数据库迁移

- [ ] 运行 `npx prisma migrate dev --name init` 创建初始迁移
- [ ] 运行 `npx prisma generate` 生成 Prisma Client
- [ ] 用 `npx prisma studio` 验证所有表已创建

### P2-003 Prisma Client 封装

- [ ] 创建 `lib/db.ts`（防止 Next.js HMR 重复创建连接）

```typescript
// lib/db.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

### P2-004 种子数据

- [ ] 编写 `prisma/seed.ts`（参考 `database-schema.md` 第8章）
- [ ] 写入至少 5 所知名院校的完整数据
- [ ] 每所院校写入至少 3 个专业
- [ ] 写入联系方式、生活费用数据
- [ ] 运行 `npx prisma db seed` 验证

**种子数据需包含的院校**：
1. 马来亚大学（universiti-malaya）— 公立，吉隆坡
2. 马来西亚国立大学（universiti-kebangsaan-malaysia）— 公立，雪兰莪
3. 马来西亚理工大学（universiti-teknologi-malaysia）— 公立，柔佛
4. 泰莱大学（taylors-university）— 私立，雪兰莪
5. 拉曼大学（utar）— 私立，雪兰莪

### P2-005 查询工具函数

- [ ] 创建 `lib/queries/university.ts`（getUniversities, getUniversityBySlug）
- [ ] 创建 `lib/queries/program.ts`（getPrograms, getProgramById）
- [ ] 创建 `lib/queries/search.ts`（searchAll, getSearchSuggestions）
- [ ] 创建 `lib/queries/stats.ts`（getPlatformStats）
- [ ] 所有函数包含 TypeScript 返回类型注解

### P2-006 Zod 验证 Schema

- [ ] 创建 `lib/validations/university.ts`（createUniversitySchema, updateUniversitySchema）
- [ ] 创建 `lib/validations/program.ts`（createProgramSchema, updateProgramSchema）
- [ ] 创建 `lib/validations/search.ts`（searchQuerySchema）

### P2-007 实现公开 API 端点

按优先级顺序：

- [ ] `GET /api/universities` — 院校列表（含筛选/排序/分页）
- [ ] `GET /api/universities/[slug]` — 院校详情
- [ ] `GET /api/universities/[slug]/programs` — 院校专业列表
- [ ] `GET /api/programs/[programId]` — 专业详情
- [ ] `GET /api/search` — 全局搜索
- [ ] `GET /api/search/suggestions` — 搜索建议
- [ ] `GET /api/compare` — 对比数据
- [ ] `GET /api/stats` — 平台统计
- [ ] `GET /api/filters` — 筛选选项

每个端点必须：
- [ ] 使用 Zod 验证请求参数
- [ ] 包含 try/catch 错误处理
- [ ] 返回标准 JSON 格式（参考 `api-routes.md`）
- [ ] 在 `responses` 中测试成功和错误场景

### P2-008 配置 Clerk 认证

- [ ] 安装配置 Clerk（`@clerk/nextjs`）
- [ ] 配置 `middleware.ts` 保护 `/admin/*` 路由
- [ ] 创建 `app/admin/sign-in/[[...sign-in]]/page.tsx`
- [ ] 测试未认证访问 `/admin` 自动跳转到登录页

### P2-009 实现管理员 API 端点

- [ ] `GET/POST /api/admin/universities`
- [ ] `PATCH/DELETE /api/admin/universities/[id]`
- [ ] `GET/POST /api/admin/programs`
- [ ] `PATCH/DELETE /api/admin/programs/[id]`
- [ ] `GET /api/admin/dashboard`
- [ ] `POST /api/admin/upload`
- [ ] `POST /api/admin/import/universities`
- [ ] `POST /api/admin/import/programs`

**验收标准**：
- 所有公开 API 用 Postman/Insomnia 测试通过
- 管理员 API 未认证返回 401
- 种子数据可通过 API 正确返回

---

## 4. P3 主页开发

> **负责人**：前端工程师 | **预计工时**：3天
> **依赖**：P2-007 中 `/api/stats` 和 `/api/universities?featured=true` 可用

### P3-001 全局 Navbar 完善

- [ ] Logo 组件（支持深色/浅色背景变体）
- [ ] 主导航链接：首页 / 院校库 / 专业查询 / 留学攻略
- [ ] 右侧：搜索图标（点击展开）
- [ ] 移动端汉堡菜单（Sheet 组件）
- [ ] 滚动后 Navbar 加深背景色（主页透明态）

### P3-002 Hero Section

- [ ] 创建 `components/home/HeroSection.tsx`
- [ ] 全屏背景：深蓝渐变叠加
- [ ] 主标题 + 副标题（大字号，白色）
- [ ] 集成 `<SearchBar />` 组件（大型，居中）
- [ ] 快速入口标签：「找本科」「找硕士」「找博士」「查奖学金」
- [ ] 向下滚动指示箭头动画
- [ ] 响应式：移动端字号缩小，搜索框全宽

### P3-003 SearchBar 组件（核心共享组件）

- [ ] 创建 `components/search/SearchBar.tsx`
- [ ] 输入框 + 搜索按钮
- [ ] 输入时调用 `GET /api/search/suggestions` 显示下拉建议
- [ ] 建议项分类显示（院校 / 专业）
- [ ] 回车或点击按钮跳转到 `/search?q=...`
- [ ] 防抖处理（300ms）
- [ ] 键盘导航支持（↑↓ 选择，Enter 确认，Esc 关闭）

### P3-004 StatsSection 组件

- [ ] 创建 `components/home/StatsSection.tsx`
- [ ] 4个数字 + 描述的统计卡片
- [ ] 数字加载动画（countup 效果）
- [ ] 数据来自 `GET /api/stats`

### P3-005 FeaturedUniversities 组件

- [ ] 创建 `components/home/FeaturedUniversities.tsx`
- [ ] 获取 `featured=true` 的院校（最多8所）
- [ ] 横向滚动容器（桌面显示4张，移动显示1.5张）
- [ ] 每张卡片：Logo + 中文名 + 排名 + 州属 + 最低学费 + "查看详情"按钮
- [ ] 「查看全部院校」按钮指向 `/universities`

### P3-006 UniversityCard 组件

- [ ] 创建 `components/university/UniversityCard.tsx`
- [ ] Props: `university: UniversityListItem`
- [ ] 展示：Logo / 院校名（中英） / 类型Badge / 排名 / 地址 / 专业数 / 最低学费
- [ ] 底部：「加入对比」+ 「查看详情」按钮
- [ ] Hover 效果：阴影上浮
- [ ] 奖学金可用时显示金色 Badge

### P3-007 WhyChooseUs 组件

- [ ] 创建 `components/home/WhyChooseUs.tsx`
- [ ] 三列特性介绍（图标 + 标题 + 描述）
- [ ] 移动端改为单列堆叠

### P3-008 PopularPrograms 组件

- [ ] 创建 `components/home/PopularPrograms.tsx`
- [ ] 专业大类图标网格（12个）
- [ ] 点击跳转到 `/universities?field_category=...`
- [ ] 自定义每个大类的 SVG 图标或使用 Lucide React

### P3-009 Testimonials 组件

- [ ] 创建 `components/home/Testimonials.tsx`
- [ ] 3-5条学生评价（静态数据，hardcode 初期）
- [ ] 头像 + 姓名 + 院校 + 感言
- [ ] 自动轮播（可选）

### P3-010 CtaSection 组件

- [ ] 创建 `components/home/CtaSection.tsx`
- [ ] 深色背景 + 号召文案 + 行动按钮
- [ ] 按钮指向 `/universities`

### P3-011 Footer 组件

- [ ] 创建 `components/layout/Footer.tsx`
- [ ] Logo + 简介
- [ ] 快速链接列（院校库/专业/留学攻略/关于我们）
- [ ] 联系方式（微信/邮箱）
- [ ] 版权声明
- [ ] 响应式布局

**验收标准**：
- 主页在移动端/桌面端视觉效果良好
- 搜索框可用，输入有建议显示
- 院校卡片数据真实（来自 API）
- 统计数字正确展示
- Lighthouse 性能分数 > 80

---

## 5. P4 院校功能页面

> **负责人**：前端工程师（+后端配合复杂查询）| **预计工时**：8-10天

### P4-001 院校列表页 `/universities`

**筛选面板**（左侧）：
- [ ] 创建 `components/search/FilterPanel.tsx`
- [ ] 院校类型（Radio）
- [ ] 所在州属（Checkbox Multi，从 `/api/filters` 获取）
- [ ] 学位层次（Checkbox Multi）
- [ ] 专业大类（Checkbox Multi）
- [ ] 学费范围（Slider，双滑块）
- [ ] QS排名上限（Input Number）
- [ ] 仅显示有奖学金（Toggle Switch）
- [ ] 重置筛选 / 应用筛选 按钮
- [ ] 移动端变为 Sheet 抽屉

**列表区域**：
- [ ] 创建 `app/universities/page.tsx`
- [ ] 排序选择器（按排名/学费/院校名）
- [ ] 视图切换按钮（列表 / 地图）
- [ ] ISR 获取初始数据（20条）
- [ ] 筛选变化时使用 TanStack Query + `/api/universities` 重新获取
- [ ] URL 参数与筛选状态同步（pushState）
- [ ] `<UniversityListItem />` 列表项（比卡片更紧凑）
- [ ] 分页组件（前后翻页 + 页码跳转）
- [ ] 无结果时的空状态界面

**地图视图**：
- [ ] 创建 `components/university/UniversityMap.tsx`（Leaflet，多点位）
- [ ] 院校标注（自定义 Marker，含 Logo）
- [ ] 点击 Marker 显示弹窗摘要（名称/类型/排名/查看详情按钮）
- [ ] 注意：Leaflet 需要 `dynamic import`，禁用 SSR

**对比托盘**：
- [ ] 创建 `components/compare/CompareDrawer.tsx`
- [ ] 固定在页面底部
- [ ] 显示已选院校（最多4所）缩略信息
- [ ] 删除单个 / 清空所有 按钮
- [ ] "开始对比"按钮跳转到 `/compare?universities=...`
- [ ] 使用 Zustand 管理对比状态（全局持久化）

### P4-002 院校详情页 `/universities/[slug]`

- [ ] 创建 `app/universities/[slug]/page.tsx`
- [ ] `generateStaticParams` 生成所有活跃院校的静态路径
- [ ] `generateMetadata` 动态 SEO

**UniversityHeader 组件**：
- [ ] 院校 Logo（96px，fallback 文字 Avatar）
- [ ] 院校名（中文大字 + 英文小字）
- [ ] 类型 Badge + 建校年份
- [ ] 快速操作按钮：官网 / 加入对比 / 分享

**KeyInfoStrip 组件**：
- [ ] 4格关键数字展示（QS排名/国际学费/学制/在校生数）
- [ ] 突出显示，大字体

**Tab 导航**（6个 Tab）：
- [ ] 概览 Tab（`OverviewTab.tsx`）
  - [ ] 院校简介（支持 Markdown 渲染）
  - [ ] 院校亮点 Chips
  - [ ] 最新动态卡片（3条）
- [ ] 专业 Tab（`ProgramsTab.tsx`）
  - [ ] 创建 `components/program/ProgramTable.tsx`
  - [ ] 学位筛选器（本科/硕士/博士快速切换）
  - [ ] 可排序表格（学费/学制/奖学金）
  - [ ] 每行有"查看详情"链接
- [ ] 费用 Tab（`CostTab.tsx`）
  - [ ] 创建 `components/university/CostSummary.tsx`
  - [ ] 学费对比表（本地生 vs 国际生 × 本科/硕士/博士）
  - [ ] 生活费用估算卡
  - [ ] 总费用计算器（可调整年限/汇率）
- [ ] 住宿&生活 Tab（`FacilitiesTab.tsx`）
  - [ ] 图片网格（设施照片）
  - [ ] 宿舍价格表
- [ ] 联系方式 Tab（`ContactTab.tsx`）
  - [ ] 各部门联系卡
  - [ ] 微信二维码（如有）
  - [ ] 地图定位链接
- [ ] 地图 Tab（`MapTab.tsx`）
  - [ ] 单校 Leaflet 地图（高亮该校位置）
  - [ ] 交通信息

**JSON-LD 结构化数据**：
- [ ] 添加 `EducationalOrganization` JSON-LD

### P4-003 专业列表页 `/universities/[slug]/programs`

- [ ] 创建 `app/universities/[slug]/programs/page.tsx`
- [ ] 学位层次 Tab 过滤
- [ ] 专业大类 Chips 快速筛选
- [ ] 复用 `<ProgramTable />` 组件
- [ ] 分页

### P4-004 专业详情页 `/universities/[slug]/programs/[programId]`

- [ ] 创建 `app/universities/[slug]/programs/[programId]/page.tsx`
- [ ] ProgramHeader（专业名/院校名/层次Badge）
- [ ] KeyInfoGrid（学制/学费/语言/招生月份）
- [ ] Tab 内容（概况/录取要求/学费/奖学金）
- [ ] AdmissionRequirementTable 组件
- [ ] "申请此专业"按钮（跳转官网）
- [ ] 面包屑导航

### P4-005 搜索页 `/search`

- [ ] 创建 `app/search/page.tsx`
- [ ] 复用 `<SearchBar />`（大型，居顶）
- [ ] 复用 `<FilterPanel />`
- [ ] 搜索结果 Tab（院校 / 专业）
- [ ] 搜索词高亮显示
- [ ] 无结果时的空状态 + 推荐热门院校

### P4-006 对比页 `/compare`

- [ ] 创建 `app/compare/page.tsx`
- [ ] 从 URL query params 读取院校 ID 列表
- [ ] 调用 `/api/compare` 获取数据
- [ ] 创建 `components/compare/CompareTable.tsx`
- [ ] 最优值绿色高亮
- [ ] 添加更多院校的选择器
- [ ] 移动端横向滚动支持

**验收标准**：
- 院校列表页筛选功能全部可用
- 地图视图正常显示院校位置
- 院校详情页 6 个 Tab 均有内容
- 专业表格数据准确显示
- 对比页能正确展示2-4所院校的差异

---

## 6. P5 管理后台

> **负责人**：全栈工程师 | **预计工时**：5-6天

### P5-001 后台布局

- [ ] 创建 `app/admin/layout.tsx`（包含 Clerk 认证保护）
- [ ] 创建 `components/admin/AdminSidebar.tsx`
- [ ] 创建 `components/admin/AdminHeader.tsx`（含用户信息 + 退出登录）
- [ ] 侧边栏导航：仪表盘/院校管理/专业管理/批量导入/新闻管理

### P5-002 管理后台首页 `/admin`

- [ ] 创建 `app/admin/page.tsx`
- [ ] 调用 `/api/admin/dashboard` 显示统计数字
- [ ] 快速操作卡片（新建院校/专业）
- [ ] 最近操作记录

### P5-003 院校管理列表 `/admin/universities`

- [ ] 创建 `app/admin/universities/page.tsx`
- [ ] 使用 shadcn DataTable 组件
- [ ] 支持搜索、筛选、排序
- [ ] 操作列：编辑 / 切换状态 / 删除（确认弹窗）
- [ ] 批量操作 Checkbox
- [ ] "新建院校"按钮

### P5-004 院校表单（新建/编辑）

- [ ] 创建 `components/admin/forms/UniversityForm.tsx`
- [ ] React Hook Form + Zod 完整验证
- [ ] 地图选点组件（点击 Leaflet 地图自动填充坐标）
- [ ] 图片上传（Logo + 封面图）
- [ ] 亮点标签的动态增删
- [ ] Markdown 编辑器（简体，用于描述）
- [ ] 表单提交状态（loading/error/success）

### P5-005 专业管理

- [ ] 创建 `app/admin/programs/page.tsx`
- [ ] 类似院校管理，但增加"所属院校"筛选
- [ ] 创建 `components/admin/forms/ProgramForm.tsx`
- [ ] 入学月份多选 UI（月份网格 Checkbox）
- [ ] 关联院校选择器（下拉搜索）

### P5-006 批量导入功能 `/admin/import`

- [ ] 创建 `app/admin/import/page.tsx`
- [ ] 创建 `components/admin/ImportWizard.tsx`（三步向导）
- [ ] 文件上传区（拖拽 + 点击）
- [ ] CSV 模板下载按钮（生成真实可用的模板）
- [ ] 解析预览表格（显示前10行）
- [ ] 错误行红色高亮 + 错误提示
- [ ] 确认导入 / 查看结果

### P5-007 新闻动态管理

- [ ] 创建 `app/admin/news/page.tsx`
- [ ] 新闻列表（含所属院校、发布时间、是否重要）
- [ ] 创建/编辑新闻表单
- [ ] Markdown 编辑器 + 预览

**验收标准**：
- 管理员可完整完成院校的增删改查
- 批量导入可成功处理10条数据的 CSV
- 所有表单有完整的客户端和服务端验证

---

## 7. P6 优化与收尾

> **负责人**：全员 | **预计工时**：3-4天

### P6-001 SEO 完善

- [ ] 完善所有页面的 `generateMetadata`
- [ ] 实现 `app/sitemap.ts`（动态 Sitemap）
- [ ] 实现 `app/robots.ts`
- [ ] 为院校详情页添加 JSON-LD 结构化数据
- [ ] 检查所有页面 Open Graph 标签（微信分享预览）

### P6-002 性能优化

- [ ] 检查所有 `<Image />` 组件是否有正确的 `sizes` 属性
- [ ] 为 Leaflet 地图添加动态 import（`next/dynamic`，`ssr: false`）
- [ ] 检查并添加合适的 `loading="lazy"` 属性
- [ ] 优化字体加载（使用 `next/font`）
- [ ] 添加关键请求的 `Suspense` 边界和 Loading 骨架屏

### P6-003 错误处理与用户体验

- [ ] 实现 `app/not-found.tsx`（404页面）
- [ ] 实现 `app/error.tsx`（全局错误边界）
- [ ] 为所有 TanStack Query 添加 error state 处理
- [ ] 添加 Toast 通知（操作成功/失败提示）
- [ ] 空状态设计（搜索无结果、院校列表无数据等）

### P6-004 移动端适配检查

- [ ] 测试所有页面在 375px 宽度下的表现
- [ ] 确认筛选面板 Sheet 抽屉正常工作
- [ ] 确认表格横向滚动正常
- [ ] 确认 CompareDrawer 在移动端可用

### P6-005 内容填充

- [ ] 补充更多院校数据（目标：至少20所）
- [ ] 补充每所院校至少5个专业
- [ ] 编写至少3篇博客文章（留学攻略）
- [ ] 补充院校 Logo 和封面图

### P6-006 测试

- [ ] 编写关键 API 路由的 Vitest 单元测试
- [ ] 编写关键 Zod Schema 的测试
- [ ] 编写 Playwright E2E 测试（主页搜索流程、院校筛选流程）

### P6-007 部署

- [ ] 在 Vercel 创建项目并连接 Git 仓库
- [ ] 配置 Vercel 环境变量
- [ ] 配置 Supabase 或 Neon.tech 生产数据库
- [ ] 在生产环境运行 `prisma migrate deploy`
- [ ] 导入完整数据
- [ ] 配置自定义域名
- [ ] 验证生产环境所有功能正常

---

## 8. 各阶段验收标准

### P1 验收
- [ ] `pnpm dev` 无报错启动
- [ ] `pnpm build` 无类型错误，编译成功
- [ ] 访问 `localhost:3000` 显示带导航的空白页面

### P2 验收
- [ ] 数据库所有表结构与 schema 一致
- [ ] 所有公开 API 用测试工具验证通过
- [ ] 管理员 API 未授权访问返回 401
- [ ] 种子数据5所院校可通过 API 正确返回

### P3 验收
- [ ] 主页各区块视觉效果符合"让客户看到你版"设计规范
- [ ] 搜索框有 autocomplete 建议功能
- [ ] 移动端主页无布局破损
- [ ] Lighthouse 移动端性能 > 80

### P4 验收
- [ ] 院校列表页所有筛选项可用，URL 参数同步
- [ ] 院校详情页6个Tab内容完整
- [ ] 专业表格数据准确
- [ ] 对比功能可正常对比2-4所院校

### P5 验收
- [ ] 管理员可完整增删改院校和专业
- [ ] 批量导入10行 CSV 数据成功
- [ ] 所有表单验证正确

### 最终上线验收
- [ ] 生产环境 Lighthouse 性能 > 80，SEO > 95
- [ ] 所有页面 404 无破损链接
- [ ] 微信分享预览正确显示标题/描述/图片

---

## 9. 预估工时

| 阶段 | 任务 | 工时（单人） |
|------|------|------------|
| P1 | 项目基础设置 | 2天 |
| P2 | 数据库与后端基础 | 4天 |
| P3 | 主页开发 | 3天 |
| P4 | 院校功能页面 | 10天 |
| P5 | 管理后台 | 6天 |
| P6 | 优化与收尾 | 4天 |
| **总计** | | **~29天（单人）** |
| **两人团队并行** | | **~18-20天** |

> 注：以上工时为参考估算，不包含数据收集（院校信息录入）和设计稿确认时间。
> 院校数据录入建议与开发并行进行，由专人负责。

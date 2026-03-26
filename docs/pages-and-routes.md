# 页面与路由规划文档

> 版本：v1.0 | 日期：2026-03-26
> 所有页面均使用简体中文，技术术语保留英文

---

## 目录

1. [路由总览](#1-路由总览)
2. [公开页面详细规划](#2-公开页面详细规划)
3. [管理后台页面规划](#3-管理后台页面规划)
4. [页面间数据流](#4-页面间数据流)
5. [SEO 策略](#5-seo-策略)
6. [移动端适配要点](#6-移动端适配要点)

---

## 1. 路由总览

```
/                                    → 主页（让客户看到你版）
/universities                        → 院校列表（最快看懂重点版）
/universities/[slug]                 → 院校详情（最快看懂重点版）
/universities/[slug]/programs        → 院校专业列表（最快看懂重点版）
/universities/[slug]/programs/[id]   → 专业详情（最快看懂重点版）
/search                              → 高级搜索结果（最快看懂重点版）
/compare                             → 院校对比工具（最快看懂重点版）
/blog                                → 留学攻略博客（让客户看到你版）
/blog/[slug]                         → 博客文章详情
/about                               → 关于平台（让客户看到你版）

/admin                               → 管理后台首页（受保护）
/admin/sign-in                       → 管理员登录
/admin/universities                  → 院校管理
/admin/universities/new              → 新建院校
/admin/universities/[id]/edit        → 编辑院校
/admin/programs                      → 专业管理
/admin/programs/new                  → 新建专业
/admin/programs/[id]/edit            → 编辑专业
/admin/import                        → 批量导入
/admin/news                          → 新闻动态管理
```

---

## 2. 公开页面详细规划

---

### 2.1 主页 `/`

**设计风格**：让客户看到你版（视觉丰富，情感化）

**渲染策略**：ISR，revalidate: 3600（每小时更新一次）

**SEO**：
- title: `马来西亚留学指南 | 一站式掌握所有大学招生信息`
- description: `为中国学生提供马来西亚所有公私立大学的学费、专业、录取要求、奖学金信息。帮你找到性价比最高的海外留学选择。`
- keywords: `马来西亚留学, 马来西亚大学, 马来西亚留学费用, 马来西亚本科申请`

**页面区块结构**（从上到下）：

```
┌─────────────────────────────────────────┐
│  <Navbar />  全局导航                    │
├─────────────────────────────────────────┤
│  <HeroSection />                        │
│  • 全屏背景（校园图/渐变蓝）             │
│  • 主标题：一站式掌握马来西亚所有大学    │
│  •         最新招生信息                  │
│  • 副标题：帮中国学生快速找到性价比最高  │
│  •         的留学选择                   │
│  • <SearchBar /> 大型搜索框             │
│  • 快速入口标签：本科/硕士/博士/奖学金  │
├─────────────────────────────────────────┤
│  <StatsSection />                       │
│  • 4个统计数字                          │
│    - 覆盖院校数：XX所                   │
│    - 专业数量：XX个                     │
│    - 用户好评：XX条                     │
│    - 更新频率：每周更新                 │
├─────────────────────────────────────────┤
│  <FeaturedUniversities />               │
│  • 标题：精选热门院校                   │
│  • 横向滚动的 <UniversityCard /> ×8     │
│  • "查看全部院校" 按钮                 │
├─────────────────────────────────────────┤
│  <WhyChooseUs />                        │
│  • 三列特色功能介绍                     │
│    - 数据全面：覆盖XX所院校             │
│    - 信息权威：定期核实更新             │
│    - 对比便捷：一键多校对比             │
├─────────────────────────────────────────┤
│  <PopularPrograms />                    │
│  • 按专业大类快速导航                   │
│  • 图标+名称网格（8-12个大类）          │
├─────────────────────────────────────────┤
│  <Testimonials />                       │
│  • 学生证言/评价（3-5条）              │
│  • 头像 + 姓名 + 就读院校 + 感言        │
├─────────────────────────────────────────┤
│  <CtaSection />                         │
│  • "开始你的马来西亚留学之旅"           │
│  • "立即搜索院校" 按钮                  │
├─────────────────────────────────────────┤
│  <Footer />  全局页脚                   │
└─────────────────────────────────────────┘
```

**所需数据**：
- `featuredUniversities`：`University[]`（featured=true, limit=8）
- `stats`：院校总数、专业总数（COUNT 聚合）

**关键组件**：
```
components/home/HeroSection.tsx
components/home/StatsSection.tsx
components/home/FeaturedUniversities.tsx
components/home/WhyChooseUs.tsx
components/home/PopularPrograms.tsx
components/home/Testimonials.tsx
components/home/CtaSection.tsx
components/search/SearchBar.tsx        ← 共享组件
components/university/UniversityCard.tsx ← 共享组件
```

---

### 2.2 院校列表页 `/universities`

**设计风格**：最快看懂重点版（信息密度优先）

**渲染策略**：ISR revalidate: 1800 + 客户端 TanStack Query 处理筛选

**SEO**：
- title: `马来西亚大学完整列表 | {count}所公私立院校一览`
- description: `浏览马来西亚全部公私立大学，按地区、类型、排名、学费筛选对比，找到最适合你的院校。`

**URL 参数**（支持直接分享筛选结果）：
```
/universities?type=public&state=吉隆坡&degree=bachelor&field=计算机与信息技术
              &tuition_max=20000&sort=ranking_qs&page=1
```

**页面布局**：

```
┌──────────────────────────────────────────────────────────┐
│  <Navbar />                                              │
├──────────────────────────────────────────────────────────┤
│  <PageHeader /> 院校库 (共 XX 所)                        │
│  <QuickFilterTabs /> 全部 | 公立 | 私立                  │
├────────────┬─────────────────────────────────────────────┤
│            │  <SortBar />  排序：排名/学费/院校名         │
│ <Filter    │  <ViewToggle /> 列表视图 / 地图视图          │
│  Panel />  ├─────────────────────────────────────────────┤
│            │                                             │
│  筛选项：  │  [列表视图]                                 │
│  - 院校类型│  <UniversityListItem /> ×N                  │
│  - 所在州属│  每条记录展示：                              │
│  - 专业层次│  Logo | 院校名 | 类型Badge | 州属           │
│  - 专业大类│  排名 | 最低学费 | 专业数 | 对比按钮        │
│  - 学费范围│                                             │
│  - QS排名  │  [地图视图]                                 │
│  - 有奖学金│  <UniversityMap /> Leaflet 地图              │
│  - 教学语言│  带院校 Marker，点击显示摘要弹窗             │
│            │                                             │
│  [重置]    ├─────────────────────────────────────────────┤
│  [应用筛选]│  <Pagination />                             │
├────────────┴─────────────────────────────────────────────┤
│  <CompareDrawer /> 底部对比托盘（已选院校显示在此）       │
└──────────────────────────────────────────────────────────┘
```

**筛选器选项详细说明**：

| 筛选项 | 类型 | 选项 |
|-------|------|------|
| 院校类型 | Radio | 全部 / 公立 / 私立 |
| 所在州属 | Checkbox Multi | 16个州属列表 |
| 学位层次 | Checkbox Multi | 本科 / 硕士 / 博士 |
| 专业大类 | Checkbox Multi | 12个大类 |
| 国际学费/年 | Range Slider | 0 - 80,000 MYR |
| QS排名 | Range Slider | 1 - 1000 |
| 有奖学金 | Toggle | 是/否 |
| 教学语言 | Checkbox Multi | 英语 / 马来语 / 中英双语 |

**所需数据**：
```typescript
// 服务端（ISR）
const initialUniversities: PaginatedResponse<UniversityListItem>

// 客户端（TanStack Query，响应筛选变化）
const { data } = useQuery({
  queryKey: ['universities', filters, sort, page],
  queryFn: () => fetch(`/api/universities?${buildQueryString(filters)}`),
})
```

---

### 2.3 院校详情页 `/universities/[slug]`

**设计风格**：最快看懂重点版（Tab 分区，快速扫描）

**渲染策略**：ISR revalidate: 3600

**SEO**：
- title: `{name_zh}（{name_en}）| 学费·专业·申请要求 2025`
- description: `{name_zh}详细介绍：位于{state}{city}，QS排名{ranking_qs}，国际生学费约{min_tuition}MYR/年，提供{program_count}个专业。`

**URL**：`/universities/universiti-malaya`

**页面结构**：

```
┌─────────────────────────────────────────────────────────┐
│  <Navbar />                                             │
├─────────────────────────────────────────────────────────┤
│  <Breadcrumb /> 首页 > 院校库 > 马来亚大学              │
├─────────────────────────────────────────────────────────┤
│  <UniversityHeader />                                   │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Logo(96px) | 院校名(中/英) | 类型Badge | 排名    │  │
│  │ 地址 | 官网链接 | 快速操作: [加入对比][查看地图] │  │
│  └──────────────────────────────────────────────────┘  │
│  <KeyInfoStrip />（4个关键数字横排）                    │
│  QS排名: #65 | 国际学费: ~18,000 MYR/年                │
│  学制: 3-4年 | 在校生: 22,000人                         │
├─────────────────────────────────────────────────────────┤
│  <TabNav />                                             │
│  [概览] [专业] [费用] [住宿&生活] [联系方式] [地图]    │
├─────────────────────────────────────────────────────────┤
│  Tab内容区域：                                          │
│                                                         │
│  [概览 Tab]                                             │
│  • 院校简介（中文富文本）                               │
│  • 院校亮点（Highlight Chips）                          │
│  • 排名历史（如有多年数据）                             │
│  • 最新动态 <NewsCard /> ×3                             │
│                                                         │
│  [专业 Tab]                                             │
│  • 学位层次快速切换：本科/硕士/博士                     │
│  • <ProgramTable /> 专业数据表格                        │
│  • 列：专业名 | 学制 | 学费/年 | 语言 | 入学月份 | 奖学金│
│  • "查看专业详情" 跳转链接                              │
│                                                         │
│  [费用 Tab]                                             │
│  • <TuitionSummary /> 学费总览表                        │
│  • 本科/硕士/博士 × 本地/国际 费用对比                 │
│  • <LivingCostCard /> 生活费用估算                      │
│  • 签证费用说明                                         │
│  • "4年总费用估算" 计算器                               │
│                                                         │
│  [住宿&生活 Tab]                                        │
│  • <FacilitiesGrid /> 校园设施图片网格                  │
│  • 宿舍类型对比表（价格/条件）                          │
│  • 周边生活信息（餐厅/交通/购物）                       │
│                                                         │
│  [联系方式 Tab]                                         │
│  • <ContactCard /> 各部门联系方式                       │
│  • 国际学生专属联系入口（邮箱/电话/微信）               │
│  • 官方申请链接                                         │
│                                                         │
│  [地图 Tab]                                             │
│  • <UniversityMap /> Leaflet 交互地图（单校）           │
│  • 标注：校园位置 / 宿舍 / 附近地铁站                   │
│  • 交通说明（距市中心/机场距离）                        │
└─────────────────────────────────────────────────────────┘
```

**所需数据**：
```typescript
interface UniversityDetailProps {
  university: UniversityWithRelations; // 包含所有关联数据
}
// 通过 slug 查询，包含 programs, contacts, facilities, living_cost, news
```

**关键组件**：
```
components/university/UniversityHeader.tsx
components/university/KeyInfoStrip.tsx
components/university/TabNav.tsx         ← 复用 layout/TabNav
components/university/tabs/OverviewTab.tsx
components/university/tabs/ProgramsTab.tsx
components/university/tabs/CostTab.tsx
components/university/tabs/FacilitiesTab.tsx
components/university/tabs/ContactTab.tsx
components/university/tabs/MapTab.tsx
components/university/UniversityMap.tsx
components/program/ProgramTable.tsx
components/university/CostSummary.tsx
components/university/LivingCostCard.tsx
```

---

### 2.4 专业列表页 `/universities/[slug]/programs`

**设计风格**：最快看懂重点版

**渲染策略**：ISR revalidate: 3600

**SEO**：
- title: `{name_zh}专业列表 | 本科·硕士·博士 完整专业目录`
- description: `{name_zh}提供{count}个专业，涵盖{fields}等领域。查看详细学费、学制、入学要求。`

**页面结构**：

```
<Breadcrumb /> 首页 > 院校库 > 马来亚大学 > 全部专业
<PageHeader /> 马来亚大学 — 全部专业（共XX个）
<DegreeTabFilter /> 全部 | 本科(XX) | 硕士(XX) | 博士(XX)
<FieldCategoryFilter /> 快速筛选按钮组（12个大类）
<ProgramTable />
  列: 专业名(中/英) | 层次Badge | 专业大类 | 学制 |
      国际生学费/年(MYR) | 人民币估算 | 语言 |
      奖学金 | 入学月份 | 操作
<Pagination />
```

---

### 2.5 专业详情页 `/universities/[slug]/programs/[programId]`

**设计风格**：最快看懂重点版（单专业全部信息）

**渲染策略**：ISR revalidate: 3600

**SEO**：
- title: `{name_zh} — {university_name_zh} | 学费·要求·奖学金`
- description: `{university_name_zh}{name_zh}专业详情：学制{duration_years}年，国际生学费约{tuition_myr}MYR/年，{intake_months}月入学，{scholarship_note}。`

**页面结构**：

```
<Breadcrumb /> 首页 > 院校库 > 马来亚大学 > 专业列表 > 计算机科学
<ProgramHeader />
  专业名(中/英) | 院校名(含链接) | 层次Badge | 领域Badge

<KeyInfoGrid /> (4格关键信息)
  学制: 3年  |  国际学费: 18,000 MYR/年
  教学语言: 英语  |  下次招生: 2025年9月

<Tabs>
  [概况]
    - 专业介绍
    - 课程亮点
    - 就业前景
  [录取要求]
    - <AdmissionRequirementTable />
    - 要求类型 | 最低分数 | 说明
  [学费]
    - 本地生/国际生费用对比
    - 按学年分解（如总学费 = N年 × 年费）
    - 人民币折算说明
  [奖学金]
    - 奖学金信息
    - 申请链接
```

---

### 2.6 高级搜索页 `/search`

**设计风格**：最快看懂重点版（全平台搜索入口）

**渲染策略**：CSR（纯客户端，动态搜索）

**SEO**：
- title: `搜索马来西亚大学与专业 | 智能筛选工具`
- URL: `/search?q=计算机科学&degree=master&state=吉隆坡`

**页面结构**：

```
<SearchPageHeader />
  大型搜索框（支持搜索院校名/专业名/关键词）
  搜索建议下拉（autocomplete）

<SearchResultLayout>
  左侧：<FilterPanel /> （同院校列表页）
  右侧：
    <ResultTypeTabs /> 院校(XX) | 专业(XX)
    [院校结果] <UniversityCard /> ×N
    [专业结果] <ProgramCard /> ×N
    <Pagination />
```

**API 调用**：
- 关键词搜索：`GET /api/search?q={keyword}&type={type}&...`
- Autocomplete：`GET /api/search/suggestions?q={keyword}`

---

### 2.7 院校对比页 `/compare`

**设计风格**：最快看懂重点版（横向对比表）

**渲染策略**：CSR（状态保存在 URL query params 中）

**SEO**：
- title: `对比马来西亚大学 | {uni1} vs {uni2} vs {uni3}`
- URL: `/compare?universities=universiti-malaya,utm,upm`

**页面结构**：

```
<CompareHeader />
  添加院校按钮（最多对比4所）
  已选院校可移除

<CompareTable />
  行: 院校名 / 类型 / 地址 / 建校年份
      QS排名 / 本地排名
      国际生学费范围 / 月生活费估算
      总学生数 / 国际生数
      本科专业数 / 硕士专业数
      有无奖学金 / 教学语言
      官网链接 / 查看详情

  列: 每所院校一列（最多4列）
  差异高亮: 最优值用绿色/蓝色加粗显示
```

**状态管理**：
```typescript
// 对比状态存入 URL，支持分享
// 使用 Zustand 或 useReducer 管理临时对比列表
// 院校详情页的 "加入对比" 按钮触发 CompareDrawer 更新
interface CompareStore {
  selectedIds: string[];   // 最多4个
  addUniversity: (id: string) => void;
  removeUniversity: (id: string) => void;
  clearAll: () => void;
}
```

---

### 2.8 博客页 `/blog`

**设计风格**：让客户看到你版（SEO内容营销）

**渲染策略**：ISR revalidate: 86400

**SEO**：
- title: `马来西亚留学攻略 | 申请指南·费用·生活`
- description: `最全马来西亚留学攻略，涵盖签证申请、费用规划、院校选择、学生生活等实用信息。`

**文章分类**：
```
签证与入境 | 费用规划 | 院校选择 | 专业推荐
学生生活 | 奖学金攻略 | 申请时间线 | 常见问题
```

---

### 2.9 关于页 `/about`

**设计风格**：让客户看到你版

**渲染策略**：SSG（纯静态）

**SEO**：
- title: `关于我们 | 马来西亚大学信息平台`

**内容**：
- 平台使命与愿景
- 数据覆盖范围（院校数/专业数）
- 团队介绍
- 联系平台 / 合作咨询

---

## 3. 管理后台页面规划

**通用说明**：
- 所有 `/admin/*` 路由需要 Clerk 认证
- 设计风格：功能优先，使用 shadcn/ui Dashboard 布局
- 渲染策略：CSR（不需要 SEO）

### 3.1 管理后台首页 `/admin`

**内容**：
```
仪表盘数据：
- 院校总数 / 本月新增
- 专业总数 / 本月新增
- 已发布动态数

快速操作入口：
- 新建院校
- 新建专业
- 上传批量数据

最近修改记录
```

### 3.2 院校管理 `/admin/universities`

```
<AdminDataTable>
  列: ID | 院校名(中/英) | 类型 | 州属 | 专业数 | 状态 | 更新时间 | 操作
  操作: 编辑 | 预览 | 启用/停用 | 删除
  顶部工具栏: 搜索框 | 筛选类型 | 新建院校 按钮
  批量操作: 批量启用/停用
```

### 3.3 新建/编辑院校 `/admin/universities/new` 与 `/admin/universities/[id]/edit`

```
<UniversityForm> — React Hook Form + Zod 验证

分组表单：
  [基本信息]   slug, name_zh, name_en, type, established_year
  [地理位置]   state, city, coordinates_lat, coordinates_lng（含地图选点）
  [媒体资源]   logo_url, cover_image_url（文件上传）
  [介绍内容]   description_zh（富文本编辑器）, highlights_zh（动态标签输入）
  [排名数据]   ranking_qs, ranking_times, ranking_malaysia, ranking_year
  [规模数据]   total_students, international_students, academic_staff
  [平台设置]   featured, active

提交：POST /api/admin/universities (新建)
      PATCH /api/admin/universities/[id] (编辑)
```

### 3.4 专业管理 `/admin/programs`

```
<AdminDataTable>
  列: 专业名 | 所属院校 | 层次 | 学费 | 奖学金 | 状态 | 操作
  筛选: 按院校 / 按层次 / 按状态
  操作: 编辑 | 启用/停用 | 删除
```

### 3.5 批量导入 `/admin/import`

```
<ImportWizard> 三步骤向导：

步骤1: 选择导入类型（院校 / 专业）
步骤2: 上传 CSV/Excel 文件
  - 拖拽上传区域
  - 下载模板按钮
  - 文件格式说明
步骤3: 预览与确认
  - 解析预览表格（前10行）
  - 错误高亮标注（如格式错误）
  - 确认导入 / 返回修改

API: POST /api/admin/import/universities
     POST /api/admin/import/programs
```

---

## 4. 页面间数据流

```
主页 (ISR)
  → 点击院校卡片 → 院校列表页 (ISR + CSR)
      → 点击院校 → 院校详情页 (ISR)
          → 点击专业 → 专业详情页 (ISR)
          → 加入对比 → 院校对比页 (CSR)
  → 搜索框提交 → 搜索页 (CSR)
      → 点击结果 → 院校详情页 / 专业详情页

CompareDrawer（全局状态，悬浮在所有公开页面底部）
  → 收集要对比的院校
  → "开始对比" → /compare?universities=...
```

---

## 5. SEO 策略

### 5.1 静态生成（generateStaticParams）

```typescript
// app/universities/[slug]/page.tsx
export async function generateStaticParams() {
  const universities = await prisma.university.findMany({
    where: { active: true },
    select: { slug: true },
  });
  return universities.map((u) => ({ slug: u.slug }));
}
```

### 5.2 动态 Metadata

```typescript
// app/universities/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const university = await getUniversityBySlug(params.slug);
  return {
    title: `${university.name_zh}（${university.name_en}）| 学费·专业·申请要求`,
    description: `${university.name_zh}详细介绍：位于${university.state}，
                  QS排名${university.ranking_qs ?? '未上榜'}，
                  提供${university._count.programs}个专业。`,
    openGraph: {
      title: university.name_zh,
      description: university.description_zh.substring(0, 150),
      images: [university.cover_image_url ?? '/og-default.png'],
    },
  };
}
```

### 5.3 结构化数据（JSON-LD）

院校详情页添加 `EducationalOrganization` Schema：

```typescript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: university.name_en,
  alternateName: university.name_zh,
  url: university.website,
  address: {
    '@type': 'PostalAddress',
    addressLocality: university.city,
    addressRegion: university.state,
    addressCountry: 'MY',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: university.coordinates_lat,
    longitude: university.coordinates_lng,
  },
};
```

### 5.4 Sitemap 生成

```typescript
// app/sitemap.ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const universities = await prisma.university.findMany({
    where: { active: true },
    select: { slug: true, updated_at: true },
  });
  return [
    { url: '/', changeFrequency: 'daily', priority: 1.0 },
    { url: '/universities', changeFrequency: 'daily', priority: 0.9 },
    ...universities.map((u) => ({
      url: `/universities/${u.slug}`,
      lastModified: u.updated_at,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
```

---

## 6. 移动端适配要点

### 6.1 响应式断点规范

```
sm:  640px  → 移动端横屏
md:  768px  → 平板
lg:  1024px → 桌面端（主要目标）
xl:  1280px → 大屏桌面
```

### 6.2 各页面移动端特殊处理

| 页面 | 桌面端布局 | 移动端变化 |
|------|-----------|-----------|
| 院校列表 | 左侧固定筛选栏 + 右侧列表 | 筛选栏折叠为顶部抽屉 |
| 院校详情 | 全宽 Tab | Tab 改为横向滚动 |
| 对比页 | 4列横向表格 | 横向滚动，固定行标签 |
| 专业表格 | 全列展示 | 显示关键3列，其余折叠 |
| 主页 Hero | 全屏背景 + 居中搜索框 | 缩小字号，搜索框全宽 |

### 6.3 触摸交互优化

- 所有可点击元素最小 48×48px 触摸目标
- FilterPanel 在移动端使用 shadcn/ui Sheet 抽屉组件
- 地图在移动端可全屏展开
- CompareDrawer 在移动端固定在底部，可上滑展开

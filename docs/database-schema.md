# 数据库架构文档 — Prisma Schema 完整定义

> 版本：v1.0 | 日期：2026-03-26
> 数据库：PostgreSQL 16 | ORM：Prisma 5.x

---

## 目录

1. [数据模型总览](#1-数据模型总览)
2. [完整 Prisma Schema](#2-完整-prisma-schema)
3. [各模型字段说明](#3-各模型字段说明)
4. [关系图](#4-关系图)
5. [索引策略](#5-索引策略)
6. [枚举值定义](#6-枚举值定义)
7. [初始化与迁移命令](#7-初始化与迁移命令)
8. [种子数据结构](#8-种子数据结构)

---

## 1. 数据模型总览

```
University (院校)
  ├── Program[] (专业)
  │     └── AdmissionRequirement[] (录取要求)
  ├── UniversityContact[] (联系方式)
  ├── UniversityFacility[] (校园设施)
  ├── LivingCost (生活费用)
  └── NewsUpdate[] (最新动态)

Admin (管理员) — 独立，不与院校关联
```

**核心设计原则**：
- 所有主键使用 `cuid()` 生成（URL 安全，无规律，便于公开 API）
- 所有时间字段使用 `@default(now())` 和 `@updatedAt`
- `slug` 字段全局唯一，用于 URL（如 `universiti-malaya`）
- 中文内容字段后缀 `_zh`，英文字段后缀 `_en`
- 货币字段使用 `Decimal` 类型（避免浮点精度问题）

---

## 2. 完整 Prisma Schema

将以下内容写入 `prisma/schema.prisma`：

```prisma
// prisma/schema.prisma

generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["fullTextSearch", "fullTextIndex"]
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

// ============================================================
// 枚举类型
// ============================================================

enum UniversityType {
  public   // 公立大学
  private  // 私立大学
}

enum DegreeLevel {
  bachelor // 本科
  master   // 硕士
  phd      // 博士
}

enum ContactType {
  general        // 总联系
  international  // 国际学生办公室
  admissions     // 招生办公室
}

enum AdminRole {
  super_admin  // 超级管理员
  editor       // 内容编辑
  viewer       // 只读管理员
}

enum RequirementType {
  gaokao        // 高考成绩
  ielts         // 雅思
  toefl         // 托福
  gpa           // GPA
  hsk           // 汉语水平考试
  other         // 其他要求
}

// ============================================================
// 院校模型
// ============================================================

model University {
  id   String @id @default(cuid())
  slug String @unique // URL 标识符，如 "universiti-malaya"

  // 基本信息
  name_zh          String // 中文名称，如 "马来亚大学"
  name_en          String // 英文名称，如 "Universiti Malaya"
  type             UniversityType
  established_year Int?

  // 地理位置
  state           String  // 州属，如 "吉隆坡联邦直辖区"
  city            String  // 城市，如 "吉隆坡"
  coordinates_lat Decimal @db.Decimal(10, 7) // 纬度
  coordinates_lng Decimal @db.Decimal(10, 7) // 经度

  // 媒体资源
  website  String
  logo_url String? // 院校 Logo URL
  cover_image_url String? // 院校封面图

  // 介绍
  description_zh   String  @db.Text // 院校中文简介（富文本/Markdown）
  description_en   String? @db.Text // 院校英文简介（可选）
  highlights_zh    String[] // 院校亮点，如 ["马来西亚排名第一", "QS 世界百强"]

  // 排名数据
  ranking_qs       Int? // QS 世界大学排名
  ranking_times    Int? // THE 泰晤士高等教育排名
  ranking_malaysia Int? // 马来西亚本地排名（SETARA/MyRA 等）
  ranking_year     Int? // 排名年份，如 2025

  // 规模数据
  total_students          Int? // 在校总学生数
  international_students  Int? // 国际学生数
  academic_staff          Int? // 学术教职员工数

  // 平台控制
  featured   Boolean  @default(false) // 是否在主页推荐展示
  active     Boolean  @default(true)  // 是否上线展示
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt

  // 关联
  programs   Program[]
  contacts   UniversityContact[]
  facilities UniversityFacility[]
  living_cost LivingCost?
  news       NewsUpdate[]

  // 索引
  @@index([type])
  @@index([state])
  @@index([featured])
  @@index([active])
  @@index([ranking_qs])
  @@index([ranking_malaysia])
  @@map("universities")
}

// ============================================================
// 专业模型
// ============================================================

model Program {
  id            String     @id @default(cuid())
  university_id String
  university    University @relation(fields: [university_id], references: [id], onDelete: Cascade)

  // 专业基本信息
  name_zh  String // 专业中文名，如 "计算机科学"
  name_en  String // 专业英文名，如 "Computer Science"
  code     String? // 专业代码（部分院校有）

  // 学位信息
  degree_level     DegreeLevel
  field_category   String // 专业大类，如 "工程与技术", "商科与管理"
  field_sub_category String? // 专业小类，如 "软件工程"
  duration_years   Decimal @db.Decimal(3, 1) // 学制年限，如 3.0, 3.5, 4.0

  // 学费（单位：马来西亚林吉特 MYR）
  tuition_local_myr              Decimal? @db.Decimal(10, 2) // 本地学生学费/年
  tuition_international_myr      Decimal? @db.Decimal(10, 2) // 国际学生学费/年
  tuition_international_cny_estimate Decimal? @db.Decimal(12, 2) // 国际学生学费人民币估算/年
  tuition_note_zh                String? // 学费备注，如 "含注册费，不含生活费"

  // 教学语言
  language_of_instruction String  @default("英语") // "英语", "马来语", "中英双语"

  // 招生信息
  intake_months     Int[]   // 入学月份，如 [2, 9] 表示2月和9月入学
  max_intake        Int?    // 招生人数上限
  application_deadline_note String? // 申请截止备注

  // 入学要求（中文描述）
  requirements_zh   String? @db.Text // 详细入学要求描述
  min_gpa           Decimal? @db.Decimal(3, 2) // 最低 GPA 要求，如 3.00
  min_ielts         Decimal? @db.Decimal(3, 1) // 最低雅思分数，如 6.5
  min_toefl         Int?     // 最低托福分数

  // 奖学金
  scholarship_available Boolean @default(false) // 是否有奖学金
  scholarship_note_zh   String? // 奖学金说明

  // 其他
  accreditation_zh  String? // 认证信息，如 "马来西亚资格认证局(MQA)认证"
  career_prospects_zh String? @db.Text // 就业前景
  active            Boolean @default(true)
  created_at        DateTime @default(now())
  updated_at        DateTime @updatedAt

  // 关联
  admission_requirements AdmissionRequirement[]

  // 索引
  @@index([university_id])
  @@index([degree_level])
  @@index([field_category])
  @@index([active])
  @@index([scholarship_available])
  @@map("programs")
}

// ============================================================
// 录取要求模型（结构化版本，补充 Program.requirements_zh 文本）
// ============================================================

model AdmissionRequirement {
  id         String          @id @default(cuid())
  program_id String
  program    Program         @relation(fields: [program_id], references: [id], onDelete: Cascade)

  requirement_type RequirementType
  min_score        Decimal? @db.Decimal(6, 2) // 最低分数
  description_zh   String   // 中文描述，如 "高考成绩不低于450分（满分750分）"
  is_mandatory     Boolean  @default(true) // 是否为必须条件

  @@index([program_id])
  @@map("admission_requirements")
}

// ============================================================
// 院校联系方式
// ============================================================

model UniversityContact {
  id            String      @id @default(cuid())
  university_id String
  university    University  @relation(fields: [university_id], references: [id], onDelete: Cascade)

  type       ContactType
  department_zh String? // 部门名称，如 "国际学生事务处"
  email      String?
  phone      String?     // 国际格式，如 "+60-3-7967-7022"
  address_zh String?     // 中文地址
  address_en String?     // 英文地址
  wechat     String?     // 微信公众号或个人号
  whatsapp   String?     // WhatsApp 号码
  line_id    String?     // LINE ID（部分院校使用）
  website    String?     // 部门网站
  office_hours_zh String? // 办公时间，如 "周一至周五 9:00-17:00"

  @@index([university_id])
  @@map("university_contacts")
}

// ============================================================
// 校园设施
// ============================================================

model UniversityFacility {
  id            String     @id @default(cuid())
  university_id String
  university    University @relation(fields: [university_id], references: [id], onDelete: Cascade)

  // 设施类型枚举字符串（灵活扩展）
  // 常用值: "图书馆", "宿舍", "餐厅", "体育设施", "医疗中心",
  //         "学生活动中心", "实验室", "清真寺", "停车场", "银行ATM"
  facility_type  String
  name_zh        String   // 设施名称
  description_zh String?  @db.Text // 详细描述
  image_url      String?  // 设施图片
  capacity       Int?     // 容量（如宿舍床位数）

  @@index([university_id])
  @@map("university_facilities")
}

// ============================================================
// 生活费用估算
// ============================================================

model LivingCost {
  id            String     @id @default(cuid())
  university_id String     @unique // 每所大学只有一条生活费记录
  university    University @relation(fields: [university_id], references: [id], onDelete: Cascade)

  // 住宿费用（MYR/月）
  accommodation_on_campus_myr  Decimal? @db.Decimal(8, 2) // 校内宿舍
  accommodation_off_campus_myr Decimal? @db.Decimal(8, 2) // 校外公寓

  // 生活费估算（MYR/月）
  monthly_food_myr        Decimal? @db.Decimal(8, 2) // 餐饮费
  monthly_transport_myr   Decimal? @db.Decimal(8, 2) // 交通费
  monthly_misc_myr        Decimal? @db.Decimal(8, 2) // 杂费（手机/娱乐等）
  monthly_living_estimate_myr Decimal? @db.Decimal(8, 2) // 月生活总费估算（含住）
  monthly_living_estimate_cny Decimal? @db.Decimal(10, 2) // 月生活总费（人民币估算）

  // 其他费用
  visa_fee_myr            Decimal? @db.Decimal(8, 2) // 签证费
  health_insurance_myr    Decimal? @db.Decimal(8, 2) // 医疗保险/年

  // 数据备注
  exchange_rate_used      Decimal? @db.Decimal(6, 4) // 计算时使用的汇率
  data_year               Int?     // 费用数据年份，如 2025
  note_zh                 String?  // 备注

  updated_at DateTime @updatedAt

  @@map("living_costs")
}

// ============================================================
// 院校新闻/动态
// ============================================================

model NewsUpdate {
  id            String     @id @default(cuid())
  university_id String
  university    University @relation(fields: [university_id], references: [id], onDelete: Cascade)

  title_zh     String   // 新闻标题（中文）
  summary_zh   String?  // 摘要（中文）
  content_zh   String   @db.Text // 正文内容（Markdown 格式）
  cover_image_url String? // 封面图
  published_at DateTime @default(now())
  source_url   String?  // 原文链接
  is_important Boolean  @default(false) // 是否重要通知（如招生截止）
  active       Boolean  @default(true)

  created_at DateTime @default(now())
  updated_at DateTime @updatedAt

  @@index([university_id])
  @@index([published_at])
  @@index([is_important])
  @@map("news_updates")
}

// ============================================================
// 管理员
// ============================================================

model Admin {
  id            String    @id @default(cuid())
  email         String    @unique
  password_hash String    // bcrypt hash，长度至少 60 字符
  name          String?   // 管理员姓名
  role          AdminRole @default(editor)
  last_login_at DateTime?
  is_active     Boolean   @default(true)
  created_at    DateTime  @default(now())
  updated_at    DateTime  @updatedAt

  @@map("admins")
}
```

---

## 3. 各模型字段说明

### 3.1 University — 重点字段

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `slug` | String | URL 标识符，全局唯一，小写连字符 | `universiti-malaya` |
| `type` | Enum | 公立/私立 | `public` |
| `state` | String | 马来西亚州属（中文） | `吉隆坡联邦直辖区` |
| `coordinates_lat/lng` | Decimal(10,7) | GPS 坐标，精度到 10 米级 | `3.1209, 101.6559` |
| `highlights_zh` | String[] | PostgreSQL 数组字段 | `["QS 世界前100", "马来西亚顶尖公立"]` |
| `ranking_qs` | Int? | QS 排名，null 表示未上榜 | `65` |
| `featured` | Boolean | 主页推荐位，默认最多显示 6-8 所 | `true` |

### 3.2 Program — 重点字段

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `field_category` | String | 专业大类（用于筛选） | `工程与技术` |
| `duration_years` | Decimal(3,1) | 学制年限（支持半年制） | `3.5` |
| `tuition_international_cny_estimate` | Decimal(12,2) | 人民币估算，方便中国用户对比 | `68000.00` |
| `intake_months` | Int[] | PostgreSQL 数组，存入学月份 | `[2, 9]` |
| `requirements_zh` | Text | 完整入学要求（人类可读） | `"高考总分不低于450分..."` |

**field_category 标准值**（全平台统一，用于筛选器）：
```
工程与技术 | 商科与管理 | 计算机与信息技术 | 医学与健康科学
建筑与设计 | 法律 | 传播与媒体 | 教育学
理学（纯科学）| 社会科学与人文 | 酒店与旅游 | 艺术与创意
```

### 3.3 LivingCost — 说明

每所大学一条记录（一对一关系），所有费用均为估算值（非官方数据）。
`monthly_living_estimate_myr` 应为 住宿 + 餐饮 + 交通 + 杂费 的合计值。
`exchange_rate_used` 记录计算时使用的汇率，便于后续更新。

---

## 4. 关系图

```
University (1) ─────────────── (*) Program
    │                                  │
    │                                  └─── (*) AdmissionRequirement
    │
    ├─── (*) UniversityContact
    ├─── (*) UniversityFacility
    ├─── (1) LivingCost
    └─── (*) NewsUpdate

Admin (独立模型，不与 University 关联)
```

---

## 5. 索引策略

### 5.1 查询频率分析

| 查询场景 | 涉及字段 | 索引 |
|---------|---------|------|
| 院校列表筛选 | `type`, `state`, `active` | 复合索引 `(type, state, active)` |
| 院校搜索排序 | `ranking_qs`, `ranking_malaysia` | 独立索引 |
| 专业筛选 | `degree_level`, `field_category`, `university_id` | 复合索引 |
| 奖学金筛选 | `scholarship_available` | 独立索引 |
| 新闻列表 | `published_at`, `is_important` | 复合索引 |

### 5.2 额外复合索引（在 Prisma schema 中添加）

```prisma
// 在 University 模型添加
@@index([type, state, active])
@@index([active, featured])

// 在 Program 模型添加
@@index([university_id, degree_level, active])
@@index([field_category, degree_level])
@@index([scholarship_available, active])

// 在 NewsUpdate 模型添加
@@index([university_id, published_at])
```

---

## 6. 枚举值定义

### UniversityType
```
public  → 公立大学（马来西亚政府资助）
private → 私立大学（私人投资，独立运营）
```

### DegreeLevel（专业层次）
```
bachelor → 本科（通常 3-4 年）
master   → 硕士（通常 1-2 年）
phd      → 博士（通常 3-5 年）
```

### field_category（专业大类）—使用字符串而非枚举，便于扩展
```
工程与技术 | 商科与管理 | 计算机与信息技术 | 医学与健康科学
建筑与设计 | 法律 | 传播与媒体 | 教育学
理学 | 社会科学与人文 | 酒店与旅游 | 艺术与创意
```

### 马来西亚 state（州属）—标准化列表
```
吉隆坡联邦直辖区 | 雪兰莪 | 槟城 | 柔佛 | 沙巴 | 砂拉越
霹雳 | 吉打 | 马六甲 | 森美兰 | 彭亨 | 玻璃市
丁宜联邦直辖区 | 纳闽联邦直辖区 | 吉兰丹 | 登嘉楼
```

---

## 7. 初始化与迁移命令

### 7.1 首次初始化

```bash
# 安装依赖
pnpm install

# 创建数据库（确保 PostgreSQL 已启动，DATABASE_URL 已配置）
npx prisma migrate dev --name init

# 生成 Prisma Client
npx prisma generate

# 运行种子数据
npx prisma db seed
```

### 7.2 日常开发命令

```bash
# 修改 schema 后执行迁移
npx prisma migrate dev --name <迁移名称>

# 查看数据库（Prisma Studio GUI）
npx prisma studio

# 重置数据库（慎用！删除所有数据并重新迁移）
npx prisma migrate reset

# 仅推送 schema 更改（不生成迁移文件，用于原型阶段）
npx prisma db push

# 检查 schema 合法性
npx prisma validate
```

### 7.3 package.json 脚本配置

```json
{
  "prisma": {
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  },
  "scripts": {
    "db:migrate": "prisma migrate dev",
    "db:studio": "prisma studio",
    "db:seed": "prisma db seed",
    "db:reset": "prisma migrate reset",
    "db:generate": "prisma generate"
  }
}
```

---

## 8. 种子数据结构

### 8.1 种子文件位置：`prisma/seed.ts`

```typescript
// prisma/seed.ts
import { PrismaClient, UniversityType, DegreeLevel, ContactType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('开始写入种子数据...');

  // 1. 清空现有数据（开发环境）
  await prisma.newsUpdate.deleteMany();
  await prisma.livingCost.deleteMany();
  await prisma.universityFacility.deleteMany();
  await prisma.universityContact.deleteMany();
  await prisma.admissionRequirement.deleteMany();
  await prisma.program.deleteMany();
  await prisma.university.deleteMany();
  await prisma.admin.deleteMany();

  // 2. 创建示例院校：马来亚大学
  const um = await prisma.university.create({
    data: {
      slug: 'universiti-malaya',
      name_zh: '马来亚大学',
      name_en: 'Universiti Malaya',
      type: UniversityType.public,
      established_year: 1949,
      state: '吉隆坡联邦直辖区',
      city: '吉隆坡',
      coordinates_lat: 3.1209,
      coordinates_lng: 101.6559,
      website: 'https://www.um.edu.my',
      logo_url: '/images/universities/um-logo.png',
      description_zh: '马来亚大学（UM）成立于1949年，是马来西亚历史最悠久、排名最高的公立研究型大学...',
      highlights_zh: ['马来西亚排名第一', 'QS 世界大学排名前100', '历史最悠久的马来西亚大学'],
      ranking_qs: 65,
      ranking_times: 251,
      ranking_malaysia: 1,
      ranking_year: 2025,
      total_students: 22000,
      international_students: 5000,
      featured: true,
      active: true,
    },
  });

  // 3. 创建专业
  const csProgram = await prisma.program.create({
    data: {
      university_id: um.id,
      name_zh: '计算机科学',
      name_en: 'Computer Science',
      degree_level: DegreeLevel.bachelor,
      field_category: '计算机与信息技术',
      duration_years: 3,
      tuition_local_myr: 7500,
      tuition_international_myr: 18000,
      tuition_international_cny_estimate: 30600,
      language_of_instruction: '英语',
      intake_months: [2, 9],
      requirements_zh: '高考成绩良好，英语雅思不低于6.0，数学科目优秀',
      min_ielts: 6.0,
      scholarship_available: true,
      active: true,
    },
  });

  // 4. 创建联系方式
  await prisma.universityContact.create({
    data: {
      university_id: um.id,
      type: ContactType.international,
      department_zh: '国际学生事务处',
      email: 'international@um.edu.my',
      phone: '+60-3-7967-3034',
      address_zh: '马来西亚吉隆坡联邦直辖区50603马来亚大学',
      wechat: 'UM_International',
      office_hours_zh: '周一至周五 8:30-17:00',
    },
  });

  // 5. 创建生活费用
  await prisma.livingCost.create({
    data: {
      university_id: um.id,
      accommodation_on_campus_myr: 350,
      accommodation_off_campus_myr: 600,
      monthly_food_myr: 400,
      monthly_transport_myr: 150,
      monthly_misc_myr: 200,
      monthly_living_estimate_myr: 1100,
      monthly_living_estimate_cny: 1870,
      exchange_rate_used: 1.7,
      data_year: 2025,
      note_zh: '以上为估算数据，实际费用因个人生活习惯而异',
    },
  });

  // 6. 创建管理员
  const bcrypt = require('bcrypt');
  const passwordHash = await bcrypt.hash('admin123456', 10);
  await prisma.admin.create({
    data: {
      email: 'admin@malaysiauniv.com',
      password_hash: passwordHash,
      name: '系统管理员',
      role: 'super_admin',
    },
  });

  console.log('种子数据写入完成 ✓');
  console.log(`  - 院校: ${await prisma.university.count()} 所`);
  console.log(`  - 专业: ${await prisma.program.count()} 个`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

### 8.2 CSV 批量导入数据格式

管理员通过 `/admin/import` 页面上传 CSV，格式如下：

**universities.csv** 列头：
```
slug,name_zh,name_en,type,established_year,state,city,lat,lng,website,ranking_qs,ranking_malaysia,description_zh
```

**programs.csv** 列头：
```
university_slug,name_zh,name_en,degree_level,field_category,duration_years,tuition_international_myr,language,intake_months,requirements_zh,scholarship_available
```

---

## 附录：马来西亚主要大学参考数据

| 院校 | slug | 类型 | 州属 | QS排名 |
|------|------|------|------|--------|
| 马来亚大学 | universiti-malaya | public | 吉隆坡联邦直辖区 | 65 |
| 马来西亚国立大学 | universiti-kebangsaan-malaysia | public | 雪兰莪 | 141 |
| 马来西亚理工大学 | universiti-teknologi-malaysia | public | 柔佛 | 160 |
| 马来西亚博特拉大学 | universiti-putra-malaysia | public | 雪兰莪 | 138 |
| 马来西亚科技大学 | universiti-sains-malaysia | public | 槟城 | 133 |
| 泰莱大学 | taylor-s-university | private | 雪兰莪 | 751 |
| 林国荣创意科技大学 | limkokwing-university | private | 雪兰莪 | — |
| 新纪元大学学院 | new-era-university-college | private | 雪兰莪 | — |
| 马来西亚南方大学学院 | southern-university-college | private | 柔佛 | — |
| 拉曼大学 | universiti-tunku-abdul-rahman | private | 雪兰莪 | 601 |

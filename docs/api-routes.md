# API 路由规划文档

> 版本：v1.0 | 日期：2026-03-26
> 所有 API 路由均在 `app/api/` 目录下，遵循 Next.js 15 Route Handler 规范

---

## 目录

1. [API 设计原则](#1-api-设计原则)
2. [通用响应格式](#2-通用响应格式)
3. [公开 API 端点](#3-公开-api-端点)
4. [管理员 API 端点](#4-管理员-api-端点)
5. [错误码规范](#5-错误码规范)
6. [速率限制策略](#6-速率限制策略)
7. [API 实现示例](#7-api-实现示例)

---

## 1. API 设计原则

1. **RESTful 风格**：资源名称使用复数名词，操作由 HTTP 方法决定
2. **版本控制**：当前为 v1（路径不含版本号，破坏性变更时再加 `/api/v2/`）
3. **认证分离**：公开路由无需认证；`/api/admin/*` 所有路由需要 Clerk JWT 验证
4. **统一错误处理**：所有错误返回标准 JSON 格式
5. **分页规范**：列表接口统一使用 `page` + `per_page` 参数
6. **过滤规范**：筛选参数直接作为 query string 传递
7. **数据一致性**：所有金额字段返回 string 类型（Decimal 序列化安全）

---

## 2. 通用响应格式

### 2.1 成功响应

```typescript
// 单条数据
{
  "success": true,
  "data": { ...resource }
}

// 列表数据（分页）
{
  "success": true,
  "data": [ ...resources ],
  "meta": {
    "total": 120,
    "page": 1,
    "per_page": 20,
    "total_pages": 6
  }
}
```

### 2.2 错误响应

```typescript
// 标准错误格式
{
  "success": false,
  "error": {
    "code": "UNIVERSITY_NOT_FOUND",   // 机器可读错误码
    "message": "找不到该院校"          // 人类可读中文描述
  }
}
```

### 2.3 HTTP 状态码规范

| 状态码 | 场景 |
|-------|------|
| 200 | 成功（GET/PATCH/PUT） |
| 201 | 创建成功（POST） |
| 204 | 删除成功，无返回体 |
| 400 | 请求参数错误（Zod 验证失败） |
| 401 | 未认证（需要登录） |
| 403 | 无权限 |
| 404 | 资源不存在 |
| 409 | 冲突（如 slug 重复） |
| 422 | 业务逻辑错误 |
| 500 | 服务器内部错误 |

---

## 3. 公开 API 端点

---

### 3.1 院校列表

```
GET /api/universities
```

**用途**：获取院校列表，支持筛选、排序、分页

**Query 参数**：

| 参数 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| `page` | number | 否 | 页码，默认1 | `1` |
| `per_page` | number | 否 | 每页数量，默认20，最大50 | `20` |
| `type` | string | 否 | `public` 或 `private` | `public` |
| `state` | string | 否 | 州属（URL编码中文） | `吉隆坡联邦直辖区` |
| `degree_level` | string | 否 | `bachelor`, `master`, `phd` | `bachelor` |
| `field_category` | string | 否 | 专业大类 | `计算机与信息技术` |
| `tuition_min` | number | 否 | 最低学费（MYR） | `5000` |
| `tuition_max` | number | 否 | 最高学费（MYR） | `30000` |
| `ranking_qs_max` | number | 否 | QS排名上限 | `500` |
| `scholarship_only` | boolean | 否 | 仅显示有奖学金 | `true` |
| `language` | string | 否 | 教学语言 | `英语` |
| `featured` | boolean | 否 | 仅显示推荐院校 | `true` |
| `sort_by` | string | 否 | 排序字段，默认 `ranking_malaysia` | `ranking_qs` |
| `sort_order` | string | 否 | `asc` 或 `desc`，默认 `asc` | `asc` |
| `q` | string | 否 | 关键词搜索（院校名）| `马来亚` |

**成功响应 `200`**：

```json
{
  "success": true,
  "data": [
    {
      "id": "clxxx123",
      "slug": "universiti-malaya",
      "name_zh": "马来亚大学",
      "name_en": "Universiti Malaya",
      "type": "public",
      "state": "吉隆坡联邦直辖区",
      "city": "吉隆坡",
      "logo_url": "/images/universities/um-logo.png",
      "ranking_qs": 65,
      "ranking_malaysia": 1,
      "featured": true,
      "_count": { "programs": 234 },
      "min_tuition_myr": "7500.00"
    }
  ],
  "meta": {
    "total": 120,
    "page": 1,
    "per_page": 20,
    "total_pages": 6
  }
}
```

---

### 3.2 院校详情

```
GET /api/universities/[slug]
```

**用途**：获取单所院校的完整详情（含所有关联数据）

**路径参数**：
- `slug`：院校 URL 标识符，如 `universiti-malaya`

**成功响应 `200`**：

```json
{
  "success": true,
  "data": {
    "id": "clxxx123",
    "slug": "universiti-malaya",
    "name_zh": "马来亚大学",
    "name_en": "Universiti Malaya",
    "type": "public",
    "established_year": 1949,
    "state": "吉隆坡联邦直辖区",
    "city": "吉隆坡",
    "coordinates_lat": "3.1209000",
    "coordinates_lng": "101.6559000",
    "website": "https://www.um.edu.my",
    "logo_url": "/images/universities/um-logo.png",
    "cover_image_url": "/images/universities/um-cover.jpg",
    "description_zh": "马来亚大学（UM）成立于1949年...",
    "highlights_zh": ["马来西亚排名第一", "QS 世界前100"],
    "ranking_qs": 65,
    "ranking_times": 251,
    "ranking_malaysia": 1,
    "ranking_year": 2025,
    "total_students": 22000,
    "international_students": 5000,
    "featured": true,
    "contacts": [
      {
        "id": "clxxx456",
        "type": "international",
        "department_zh": "国际学生事务处",
        "email": "international@um.edu.my",
        "phone": "+60-3-7967-3034",
        "wechat": "UM_International",
        "office_hours_zh": "周一至周五 8:30-17:00"
      }
    ],
    "living_cost": {
      "accommodation_on_campus_myr": "350.00",
      "accommodation_off_campus_myr": "600.00",
      "monthly_living_estimate_myr": "1100.00",
      "monthly_living_estimate_cny": "1870.00",
      "data_year": 2025
    },
    "facilities": [
      {
        "id": "clxxx789",
        "facility_type": "图书馆",
        "name_zh": "T.J. Danaraj 医学图书馆",
        "description_zh": "藏书超过50万册...",
        "image_url": "/images/facilities/um-library.jpg"
      }
    ],
    "news": [
      {
        "id": "clxxxabc",
        "title_zh": "2025年秋季招生通知",
        "summary_zh": "2025年9月入学申请现已开放...",
        "published_at": "2025-03-01T00:00:00.000Z",
        "is_important": true
      }
    ],
    "_count": { "programs": 234 }
  }
}
```

**错误响应 `404`**：
```json
{
  "success": false,
  "error": {
    "code": "UNIVERSITY_NOT_FOUND",
    "message": "找不到院校：universiti-malaya-xyz"
  }
}
```

---

### 3.3 院校专业列表

```
GET /api/universities/[slug]/programs
```

**用途**：获取指定院校的所有专业，支持筛选分页

**Query 参数**：

| 参数 | 类型 | 说明 |
|------|------|------|
| `degree_level` | string | `bachelor`, `master`, `phd` |
| `field_category` | string | 专业大类 |
| `scholarship_only` | boolean | 仅有奖学金的专业 |
| `language` | string | 教学语言 |
| `page` | number | 页码 |
| `per_page` | number | 每页数量，默认50 |

**成功响应 `200`**：

```json
{
  "success": true,
  "data": [
    {
      "id": "clprog001",
      "name_zh": "计算机科学",
      "name_en": "Computer Science",
      "degree_level": "bachelor",
      "field_category": "计算机与信息技术",
      "duration_years": "3.0",
      "tuition_local_myr": "7500.00",
      "tuition_international_myr": "18000.00",
      "tuition_international_cny_estimate": "30600.00",
      "language_of_instruction": "英语",
      "intake_months": [2, 9],
      "scholarship_available": true,
      "min_ielts": "6.0",
      "active": true
    }
  ],
  "meta": {
    "total": 234,
    "page": 1,
    "per_page": 50,
    "total_pages": 5
  }
}
```

---

### 3.4 专业详情

```
GET /api/programs/[programId]
```

**用途**：获取单个专业的完整详情（含所属院校基本信息和录取要求）

**成功响应 `200`**：

```json
{
  "success": true,
  "data": {
    "id": "clprog001",
    "name_zh": "计算机科学",
    "name_en": "Computer Science",
    "degree_level": "bachelor",
    "field_category": "计算机与信息技术",
    "field_sub_category": "软件工程",
    "duration_years": "3.0",
    "tuition_local_myr": "7500.00",
    "tuition_international_myr": "18000.00",
    "tuition_international_cny_estimate": "30600.00",
    "tuition_note_zh": "含注册费，不含生活费",
    "language_of_instruction": "英语",
    "intake_months": [2, 9],
    "requirements_zh": "高考成绩良好，英语雅思不低于6.0，数学科目优秀",
    "min_gpa": "3.00",
    "min_ielts": "6.0",
    "scholarship_available": true,
    "scholarship_note_zh": "提供多种奖学金，优秀学生可申请最高100%学费减免",
    "accreditation_zh": "马来西亚资格认证局(MQA)认证",
    "career_prospects_zh": "毕业生就业于软件开发、数据分析、系统架构等领域...",
    "university": {
      "id": "clxxx123",
      "slug": "universiti-malaya",
      "name_zh": "马来亚大学",
      "name_en": "Universiti Malaya",
      "logo_url": "/images/universities/um-logo.png",
      "state": "吉隆坡联邦直辖区",
      "type": "public"
    },
    "admission_requirements": [
      {
        "id": "clreq001",
        "requirement_type": "ielts",
        "min_score": "6.0",
        "description_zh": "雅思总分不低于6.0，单科不低于5.5",
        "is_mandatory": true
      },
      {
        "id": "clreq002",
        "requirement_type": "gaokao",
        "min_score": "450",
        "description_zh": "高考成绩不低于450分（满分750分），数学成绩优秀",
        "is_mandatory": false
      }
    ]
  }
}
```

---

### 3.5 全局搜索

```
GET /api/search
```

**用途**：跨院校和专业的关键词搜索

**Query 参数**：

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `q` | string | 是 | 搜索关键词（最小2字符） |
| `type` | string | 否 | `universities`, `programs`, `all`，默认 `all` |
| `page` | number | 否 | 页码 |
| `per_page` | number | 否 | 每页数量 |

**成功响应 `200`**：

```json
{
  "success": true,
  "data": {
    "universities": {
      "data": [
        {
          "id": "clxxx123",
          "slug": "universiti-malaya",
          "name_zh": "马来亚大学",
          "name_en": "Universiti Malaya",
          "type": "public",
          "state": "吉隆坡联邦直辖区",
          "ranking_qs": 65,
          "logo_url": "/images/universities/um-logo.png"
        }
      ],
      "total": 5
    },
    "programs": {
      "data": [
        {
          "id": "clprog001",
          "name_zh": "计算机科学",
          "name_en": "Computer Science",
          "degree_level": "bachelor",
          "tuition_international_myr": "18000.00",
          "university": {
            "slug": "universiti-malaya",
            "name_zh": "马来亚大学"
          }
        }
      ],
      "total": 28
    }
  },
  "meta": {
    "query": "计算机",
    "total": 33
  }
}
```

**错误响应 `400`**（搜索词过短）：
```json
{
  "success": false,
  "error": {
    "code": "QUERY_TOO_SHORT",
    "message": "搜索关键词至少需要2个字符"
  }
}
```

---

### 3.6 搜索建议（Autocomplete）

```
GET /api/search/suggestions
```

**用途**：搜索框实时输入建议

**Query 参数**：
- `q`：输入关键词（最小1字符）
- `limit`：返回条数，默认8，最大15

**成功响应 `200`**：

```json
{
  "success": true,
  "data": [
    { "type": "university", "slug": "universiti-malaya", "label": "马来亚大学", "sub_label": "吉隆坡 · 公立" },
    { "type": "university", "slug": "universiti-kebangsaan-malaysia", "label": "马来西亚国立大学", "sub_label": "雪兰莪 · 公立" },
    { "type": "program", "id": "clprog001", "university_slug": "universiti-malaya", "label": "计算机科学（本科）", "sub_label": "马来亚大学" }
  ]
}
```

---

### 3.7 院校对比数据

```
GET /api/compare
```

**用途**：批量获取多所院校的对比数据

**Query 参数**：
- `slugs`：院校 slug 列表，逗号分隔，最多4个
  - 示例：`?slugs=universiti-malaya,utm,upm`

**成功响应 `200`**：

```json
{
  "success": true,
  "data": [
    {
      "id": "clxxx123",
      "slug": "universiti-malaya",
      "name_zh": "马来亚大学",
      "type": "public",
      "established_year": 1949,
      "state": "吉隆坡联邦直辖区",
      "ranking_qs": 65,
      "ranking_malaysia": 1,
      "total_students": 22000,
      "international_students": 5000,
      "logo_url": "/images/universities/um-logo.png",
      "website": "https://www.um.edu.my",
      "living_cost": {
        "monthly_living_estimate_myr": "1100.00",
        "monthly_living_estimate_cny": "1870.00"
      },
      "tuition_stats": {
        "bachelor_min_myr": "7500.00",
        "bachelor_max_myr": "25000.00",
        "master_min_myr": "8000.00",
        "master_max_myr": "30000.00"
      },
      "_count": {
        "bachelor_programs": 120,
        "master_programs": 80,
        "phd_programs": 34
      },
      "has_scholarship": true
    }
  ]
}
```

**错误响应 `400`**：
```json
{
  "success": false,
  "error": {
    "code": "TOO_MANY_UNIVERSITIES",
    "message": "最多同时对比4所院校"
  }
}
```

---

### 3.8 首页统计数据

```
GET /api/stats
```

**用途**：获取主页展示的平台统计数字

**成功响应 `200`**（有缓存，5分钟 revalidate）：

```json
{
  "success": true,
  "data": {
    "total_universities": 120,
    "public_universities": 20,
    "private_universities": 100,
    "total_programs": 3450,
    "states_covered": 16,
    "last_updated": "2025-03-25T12:00:00.000Z"
  }
}
```

---

### 3.9 筛选器选项数据

```
GET /api/filters
```

**用途**：获取所有筛选项的可选值列表（用于前端渲染筛选面板）

**成功响应 `200`**：

```json
{
  "success": true,
  "data": {
    "states": [
      { "value": "吉隆坡联邦直辖区", "label": "吉隆坡联邦直辖区", "count": 15 },
      { "value": "雪兰莪", "label": "雪兰莪", "count": 32 }
    ],
    "field_categories": [
      { "value": "工程与技术", "label": "工程与技术", "count": 280 },
      { "value": "商科与管理", "label": "商科与管理", "count": 320 }
    ],
    "languages": [
      { "value": "英语", "label": "英语", "count": 200 },
      { "value": "马来语", "label": "马来语", "count": 50 },
      { "value": "中英双语", "label": "中英双语", "count": 30 }
    ],
    "tuition_range": {
      "min": 3000,
      "max": 85000
    }
  }
}
```

---

## 4. 管理员 API 端点

所有 `/api/admin/*` 路由需通过 Clerk 中间件验证。未认证请求返回 `401`。

---

### 4.1 院校管理 CRUD

#### 获取院校列表（管理视角）
```
GET /api/admin/universities
```
Query：`page`, `per_page`, `q`（搜索）, `type`, `active`（含停用的院校）

响应：同公开列表，但额外包含 `active` 状态和 `created_at`/`updated_at`

---

#### 创建院校
```
POST /api/admin/universities
```

**Request Body**：
```json
{
  "slug": "universiti-malaya",
  "name_zh": "马来亚大学",
  "name_en": "Universiti Malaya",
  "type": "public",
  "established_year": 1949,
  "state": "吉隆坡联邦直辖区",
  "city": "吉隆坡",
  "coordinates_lat": 3.1209,
  "coordinates_lng": 101.6559,
  "website": "https://www.um.edu.my",
  "description_zh": "院校介绍...",
  "highlights_zh": ["马来西亚排名第一"],
  "ranking_qs": 65,
  "ranking_malaysia": 1,
  "ranking_year": 2025,
  "total_students": 22000,
  "international_students": 5000,
  "featured": true,
  "active": true
}
```

**Zod 验证 Schema**：
```typescript
// lib/validations/university.ts
export const createUniversitySchema = z.object({
  slug: z.string().min(3).max(100).regex(/^[a-z0-9-]+$/, '只能包含小写字母、数字和连字符'),
  name_zh: z.string().min(2).max(100),
  name_en: z.string().min(2).max(200),
  type: z.enum(['public', 'private']),
  established_year: z.number().int().min(1800).max(2030).optional(),
  state: z.string().min(2),
  city: z.string().min(2),
  coordinates_lat: z.number().min(-90).max(90),
  coordinates_lng: z.number().min(-180).max(180),
  website: z.string().url(),
  description_zh: z.string().min(50),
  highlights_zh: z.array(z.string()).max(10).optional(),
  ranking_qs: z.number().int().positive().optional(),
  ranking_times: z.number().int().positive().optional(),
  ranking_malaysia: z.number().int().positive().optional(),
  ranking_year: z.number().int().min(2020).max(2030).optional(),
  total_students: z.number().int().positive().optional(),
  international_students: z.number().int().positive().optional(),
  logo_url: z.string().url().optional().or(z.literal('')),
  cover_image_url: z.string().url().optional().or(z.literal('')),
  featured: z.boolean().default(false),
  active: z.boolean().default(true),
});
```

**成功响应 `201`**：
```json
{
  "success": true,
  "data": { ...创建的院校完整对象 }
}
```

**错误响应 `409`**（slug 重复）：
```json
{
  "success": false,
  "error": {
    "code": "SLUG_ALREADY_EXISTS",
    "message": "院校标识符 'universiti-malaya' 已被使用"
  }
}
```

---

#### 更新院校
```
PATCH /api/admin/universities/[id]
```

Request Body：同 POST，所有字段均为可选（Partial）

**成功响应 `200`**：返回更新后的完整院校对象

---

#### 删除院校
```
DELETE /api/admin/universities/[id]
```

**成功响应 `204`**：无响应体

**注意**：删除院校会级联删除所有关联的专业、联系方式、设施、生活费用和新闻（Prisma Cascade Delete）

---

### 4.2 专业管理 CRUD

#### 获取专业列表
```
GET /api/admin/programs
```
Query：`page`, `per_page`, `university_id`, `degree_level`, `active`

---

#### 创建专业
```
POST /api/admin/programs
```

**Request Body**：
```json
{
  "university_id": "clxxx123",
  "name_zh": "计算机科学",
  "name_en": "Computer Science",
  "degree_level": "bachelor",
  "field_category": "计算机与信息技术",
  "duration_years": 3.0,
  "tuition_local_myr": 7500,
  "tuition_international_myr": 18000,
  "tuition_international_cny_estimate": 30600,
  "language_of_instruction": "英语",
  "intake_months": [2, 9],
  "requirements_zh": "高考成绩良好...",
  "min_ielts": 6.0,
  "scholarship_available": true,
  "active": true
}
```

**Zod 验证 Schema**：
```typescript
export const createProgramSchema = z.object({
  university_id: z.string().cuid(),
  name_zh: z.string().min(2).max(100),
  name_en: z.string().min(2).max(200),
  degree_level: z.enum(['bachelor', 'master', 'phd']),
  field_category: z.string().min(2),
  duration_years: z.number().min(0.5).max(10),
  tuition_local_myr: z.number().positive().optional(),
  tuition_international_myr: z.number().positive().optional(),
  tuition_international_cny_estimate: z.number().positive().optional(),
  language_of_instruction: z.string().default('英语'),
  intake_months: z.array(z.number().int().min(1).max(12)).min(1),
  requirements_zh: z.string().optional(),
  min_gpa: z.number().min(0).max(4).optional(),
  min_ielts: z.number().min(0).max(9).optional(),
  min_toefl: z.number().int().min(0).max(120).optional(),
  scholarship_available: z.boolean().default(false),
  scholarship_note_zh: z.string().optional(),
  active: z.boolean().default(true),
});
```

**成功响应 `201`**：返回创建的专业对象

---

#### 更新专业
```
PATCH /api/admin/programs/[id]
```

---

#### 删除专业
```
DELETE /api/admin/programs/[id]
```

---

### 4.3 批量导入

#### 导入院校数据
```
POST /api/admin/import/universities
```

**Content-Type**：`multipart/form-data`

**Request**：
- `file`：CSV 或 Excel 文件（.csv / .xlsx）
- `mode`：`preview`（仅解析不写入）或 `import`（执行写入）
- `on_conflict`：`skip`（跳过已存在）或 `update`（覆盖更新）

**成功响应 `200`（preview 模式）**：
```json
{
  "success": true,
  "data": {
    "mode": "preview",
    "total_rows": 50,
    "valid_rows": 48,
    "error_rows": 2,
    "preview": [
      {
        "row": 1,
        "status": "valid",
        "data": { "slug": "universiti-malaya", "name_zh": "马来亚大学" }
      },
      {
        "row": 3,
        "status": "error",
        "error": "slug 字段格式错误：包含大写字母",
        "data": { "slug": "UniversitiMalaya", "name_zh": "马来亚大学" }
      }
    ]
  }
}
```

**成功响应 `200`（import 模式）**：
```json
{
  "success": true,
  "data": {
    "mode": "import",
    "total_rows": 50,
    "imported": 48,
    "skipped": 2,
    "errors": []
  }
}
```

---

#### 导入专业数据
```
POST /api/admin/import/programs
```

同上，使用专业 CSV 格式

---

### 4.4 图片上传

```
POST /api/admin/upload
```

**Content-Type**：`multipart/form-data`

**Request**：
- `file`：图片文件（.jpg/.png/.webp，最大 5MB）
- `type`：`university_logo` | `university_cover` | `facility`

**成功响应 `200`**：
```json
{
  "success": true,
  "data": {
    "url": "/uploads/universities/um-logo-abc123.webp",
    "width": 200,
    "height": 200,
    "size_bytes": 15240
  }
}
```

---

### 4.5 管理员统计仪表盘

```
GET /api/admin/dashboard
```

**成功响应 `200`**：
```json
{
  "success": true,
  "data": {
    "universities": {
      "total": 120,
      "active": 115,
      "featured": 8,
      "added_this_month": 3
    },
    "programs": {
      "total": 3450,
      "active": 3400,
      "with_scholarship": 780,
      "added_this_month": 25
    },
    "news": {
      "total": 245,
      "published_this_month": 12
    },
    "recent_activity": [
      {
        "action": "university_created",
        "target": "马来亚大学",
        "timestamp": "2025-03-25T10:00:00.000Z"
      }
    ]
  }
}
```

---

## 5. 错误码规范

| 错误码 | HTTP状态 | 描述 |
|--------|---------|------|
| `UNIVERSITY_NOT_FOUND` | 404 | 指定 slug 的院校不存在 |
| `PROGRAM_NOT_FOUND` | 404 | 指定 ID 的专业不存在 |
| `SLUG_ALREADY_EXISTS` | 409 | 院校标识符已被使用 |
| `VALIDATION_ERROR` | 400 | 请求体 Zod 验证失败 |
| `QUERY_TOO_SHORT` | 400 | 搜索关键词过短（< 2字符）|
| `TOO_MANY_UNIVERSITIES` | 400 | 对比院校超过4所限制 |
| `FILE_TOO_LARGE` | 400 | 上传文件超过大小限制 |
| `INVALID_FILE_TYPE` | 400 | 文件类型不支持 |
| `IMPORT_PARSE_ERROR` | 422 | CSV/Excel 解析失败 |
| `UNAUTHORIZED` | 401 | 未提供或无效的认证令牌 |
| `FORBIDDEN` | 403 | 权限不足（如 editor 执行 super_admin 操作） |
| `DATABASE_ERROR` | 500 | 数据库操作失败 |
| `INTERNAL_ERROR` | 500 | 服务器内部未知错误 |

---

## 6. 速率限制策略

```typescript
// 使用 Upstash Redis + @upstash/ratelimit（Vercel 边缘）
// 或 next-rate-limit（自托管）

// 公开 API：
//   GET /api/search       → 60 requests / minute / IP
//   GET /api/universities → 120 requests / minute / IP
//   其他 GET             → 200 requests / minute / IP

// 管理 API：
//   POST/PATCH/DELETE    → 30 requests / minute / user
//   POST /api/admin/import → 5 requests / hour / user
```

---

## 7. API 实现示例

### 7.1 院校列表 Route Handler 示例

```typescript
// app/api/universities/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { buildUniversityWhereClause, buildUniversityOrderBy } from '@/lib/queries/university';

const querySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  per_page: z.coerce.number().int().min(1).max(50).default(20),
  type: z.enum(['public', 'private']).optional(),
  state: z.string().optional(),
  degree_level: z.enum(['bachelor', 'master', 'phd']).optional(),
  field_category: z.string().optional(),
  tuition_min: z.coerce.number().positive().optional(),
  tuition_max: z.coerce.number().positive().optional(),
  ranking_qs_max: z.coerce.number().positive().optional(),
  scholarship_only: z.coerce.boolean().optional(),
  featured: z.coerce.boolean().optional(),
  sort_by: z.enum(['name', 'ranking_qs', 'ranking_malaysia', 'established_year']).default('ranking_malaysia'),
  sort_order: z.enum(['asc', 'desc']).default('asc'),
  q: z.string().min(1).optional(),
});

export async function GET(request: NextRequest) {
  try {
    const searchParams = Object.fromEntries(request.nextUrl.searchParams);
    const query = querySchema.parse(searchParams);

    const where = buildUniversityWhereClause(query);
    const orderBy = buildUniversityOrderBy(query.sort_by, query.sort_order);

    const [universities, total] = await Promise.all([
      prisma.university.findMany({
        where,
        orderBy,
        skip: (query.page - 1) * query.per_page,
        take: query.per_page,
        select: {
          id: true,
          slug: true,
          name_zh: true,
          name_en: true,
          type: true,
          state: true,
          city: true,
          logo_url: true,
          ranking_qs: true,
          ranking_malaysia: true,
          featured: true,
          _count: { select: { programs: { where: { active: true } } } },
          programs: {
            where: { active: true },
            select: { tuition_international_myr: true },
            orderBy: { tuition_international_myr: 'asc' },
            take: 1,
          },
        },
      }),
      prisma.university.count({ where }),
    ]);

    const data = universities.map((u) => ({
      ...u,
      min_tuition_myr: u.programs[0]?.tuition_international_myr?.toString() ?? null,
      programs: undefined, // 不暴露原始 programs 数组
    }));

    return NextResponse.json({
      success: true,
      data,
      meta: {
        total,
        page: query.page,
        per_page: query.per_page,
        total_pages: Math.ceil(total / query.per_page),
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: { code: 'VALIDATION_ERROR', message: error.errors[0].message } },
        { status: 400 }
      );
    }
    console.error('[GET /api/universities]', error);
    return NextResponse.json(
      { success: false, error: { code: 'INTERNAL_ERROR', message: '服务器内部错误' } },
      { status: 500 }
    );
  }
}
```

### 7.2 管理员认证中间件示例

```typescript
// lib/auth.ts
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export function withAdminAuth(
  handler: (req: Request, ctx: { userId: string }) => Promise<NextResponse>
) {
  return async (req: Request) => {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json(
        { success: false, error: { code: 'UNAUTHORIZED', message: '请先登录管理后台' } },
        { status: 401 }
      );
    }
    return handler(req, { userId });
  };
}
```

```typescript
// app/api/admin/universities/route.ts
import { withAdminAuth } from '@/lib/auth';

export const POST = withAdminAuth(async (req, { userId }) => {
  const body = await req.json();
  // ... 处理创建逻辑
});
```

# 数据采集策略文档

> 编写日期：2026-03-26
> 适用范围：马来西亚大学信息平台后端数据管理

---

## 一、数据来源与可靠性评级

### 1.1 一级数据源（最高可靠性 ★★★★★）

| 来源 | 类型 | 可靠性 | 适用数据类型 |
|------|------|--------|------------|
| 各大学官网（官方学费页）| 官方一手资料 | ★★★★★ | 学费、项目名称、入学要求 |
| QS世界大学排名官网（topuniversities.com）| 国际权威机构 | ★★★★★ | 排名数据 |
| THE泰晤士高等教育官网 | 国际权威机构 | ★★★★★ | THE排名 |
| 马来西亚高等教育部（MOHE）| 政府官方 | ★★★★★ | 学校注册资质、奖学金 |
| 马来西亚资格认证机构（MQA）| 政府官方 | ★★★★★ | 学历认证状态 |

**重点官方学费页链接（2024–2025数据已验证）：**
- UTM研究生学费：https://admission.utm.my/fees-pg-inter/
- Monash Malaysia本科学费：https://www.monash.edu.my/study/undergraduate/fees
- Monash Malaysia研究生学费：https://www.monash.edu.my/study/postgraduate/fees
- UPM国际处：https://intl.upm.edu.my
- UM申请门户：https://study.um.edu.my

### 1.2 二级数据源（较高可靠性 ★★★★☆）

| 来源 | 类型 | 可靠性 | 适用数据类型 | 注意事项 |
|------|------|--------|------------|---------|
| 新东方前途出国马来西亚专区 | 中国权威留学机构 | ★★★★☆ | 中国学生申请要求、整体费用估算 | 数据可能滞后6–12个月 |
| 金吉列留学官网 | 中国权威留学机构 | ★★★★☆ | 院校介绍、学费范围 | 数据可能滞后6–12个月 |
| 启德留学、立思辰留学 | 中国主流留学机构 | ★★★☆☆ | 辅助参考 | 需与官网交叉验证 |
| eduadvisor.my | 马来西亚本地权威升学平台 | ★★★★☆ | 学费明细、申请要求 | 更新较及时，推荐使用 |
| bachelorsportal.com / mastersportal.com | 国际升学平台 | ★★★★☆ | 具体项目数据 | 部分数据需官网确认 |

### 1.3 三级数据源（辅助参考 ★★★☆☆）

| 来源 | 可靠性 | 说明 |
|------|--------|------|
| 百度百科 / 搜狗百科 / 360百科 | ★★★☆☆ | 基础信息参考，不能作为学费数据来源 |
| 知乎留学版块 | ★★★☆☆ | 在校学生真实经验，但存在个人偏差 |
| 小红书/微博留学账号 | ★★☆☆☆ | 仅作体验参考，绝不用于数据依据 |

---

## 二、数据更新频率建议

### 2.1 高频更新（每年更新）

| 数据字段 | 更新时机 | 负责动作 |
|---------|---------|---------|
| 学费（所有院校） | 每年9–10月（新学年费用公布后） | 访问各官网学费页，更新JSON |
| QS/THE排名 | QS：每年5–6月发布；THE：每年9–10月发布 | 更新ranking字段 |
| 入学截止日期 | 每年1–2月（下一学年信息更新后） | 更新intake_months和deadline |
| 奖学金项目及金额 | 每年1–3月 | 核实奖学金名称、金额、截止日 |

### 2.2 中频更新（每半年更新）

| 数据字段 | 更新时机 |
|---------|---------|
| 联系方式（电话、邮箱） | 每年3月、9月定期核验 |
| 院校项目新增/撤销 | 每学年初确认 |
| 奖学金政策变动 | 每学年初确认 |

### 2.3 低频更新（每2–3年更新）

| 数据字段 | 更新时机 |
|---------|---------|
| 院校基本信息（地址、GPS、历史）| 有重大变化时 |
| 在校生总数 | 每年院校年报发布后 |
| 院校描述文案 | 院校有重大发展或政策变化时 |

---

## 三、缺失/不可用数据处理规则

### 3.1 学费数据缺失处理

```
优先级：官网精确值 > 留学机构汇编范围值 > 标记"需确认"

处理步骤：
1. 若官网有精确数字 → 直接录入，标注 data_source: "official_website"
2. 若多个二级来源均提及同一范围 → 取中值录入，标注 data_source: "aggregated"
   并在 notes 字段注明 "估算值，建议向招生办确认"
3. 若完全无数据 → 字段设为 null，在 fee_note 字段填写：
   "需向招生办确认，联系方式：[官方邮箱]"
```

### 3.2 排名数据缺失处理

```
- THE排名未进前500：字段设为 null（非0），不显示"-"
- QS当年未更新：保留上一年数据，增加 ranking_year 字段注明年份
- 私立大学无马来西亚国内排名：ranking_malaysia 设为 null
```

### 3.3 联系方式缺失处理

```
- 无法找到国际处直线电话：填写总机号码，并在 note 字段注明 "总机，转接国际处"
- 无微信公众号确认：wechat 字段设为 null，不臆造
- WhatsApp号码未公开确认：设为 null
```

### 3.4 特殊情况标记字段

在数据库设计中，建议为每条学费/联系信息增加以下元数据字段：

```json
{
  "data_confidence": "high | medium | low",
  "data_source": "official_website | aggregated | estimate",
  "last_verified_date": "2026-03-26",
  "verify_note": "可选备注，说明数据来源细节或需确认事项"
}
```

---

## 四、CNY换算方法论

### 4.1 当前使用汇率

```
基准汇率：1 MYR = 1.6 CNY（2025–2026学年参考汇率）
数据来源：中国银行/中国人民银行公布的参考汇率区间
有效期：2025年1月–2026年12月（年度调整）
```

### 4.2 换算规则

```
换算公式：CNY金额 = MYR金额 × 1.6
取整规则：四舍五入至整数（元），不显示小数
展示逻辑：
  - 主要展示MYR（马来西亚林吉特）
  - CNY作为辅助参考，前端显示为 "约 ¥XX,XXX（参考）"
  - 页脚注明汇率基准日期及免责声明
```

### 4.3 汇率免责声明文本（前端展示）

```
人民币金额仅供参考，基于 1 MYR ≈ 1.6 CNY（2025–2026年参考汇率）估算。
实际汇率随市场波动，留学期间实际费用请以当时汇率为准。
```

### 4.4 汇率更新计划

```
- 每年1月1日更新年度基准汇率
- 若MYR/CNY汇率波动超过10%，立即更新基准值并重新计算所有CNY字段
- 更新记录写入 exchange_rates 表（历史汇率追溯）
```

---

## 五、管理员数据维护工作流

### 5.1 每年度数据维护流程（建议时间表）

```
每年5–6月：
  [ ] QS排名发布 → 更新所有大学 ranking_qs 字段
  [ ] 检查各院校官网，确认新学年学费变动
  [ ] 更新下一学年入学时间表

每年9–10月：
  [ ] THE排名发布 → 更新 ranking_times 字段
  [ ] 新学年开始，核验所有联系方式
  [ ] 采集最新奖学金信息

每年1–3月：
  [ ] 确认奖学金截止日期（MIS, MTCP等）
  [ ] 更新申请截止日期
  [ ] 检查是否有院校新增/停办专业
```

### 5.2 数据录入验证规则（后端接口校验）

```
必填字段：slug, name_zh, name_en, type, website
学费字段：若 tuition_international_myr_per_year 为数字，则自动计算 CNY = MYR × rate
排名字段：必须为正整数或 null，不允许0或负数
坐标字段：lat 范围 1.0–7.5（马来西亚纬度范围），lng 范围 99.5–119.5
联系邮箱：格式校验 @domain.xx
```

### 5.3 管理后台功能建议

```
1. 批量导入：支持CSV/Excel导入，自动转换CNY，自动生成slug
2. 数据版本控制：每次修改记录diff，可回滚至历史版本
3. 数据过期提醒：学费数据超过12个月未更新自动标记为"待核实"
4. 汇率同步：接入外汇API（如 exchangeratesapi.io），自动更新CNY字段
5. 爬虫辅助：对高优先级院校（UM、Monash、UTM）定期爬取学费页，检测变动
```

---

## 六、CSV导入模板设计

### 6.1 大学基本信息表（universities.csv）

```csv
slug,name_zh,name_en,type,established_year,state,city,address_en,coordinates_lat,coordinates_lng,website,ranking_qs_2025,ranking_qs_2026,ranking_times,ranking_malaysia,total_students,international_students,description_zh,data_confidence,last_verified_date
```

**字段说明：**

| 列名 | 数据类型 | 必填 | 示例 | 说明 |
|------|---------|------|------|------|
| slug | string | 是 | universiti-malaya | URL友好标识符，全小写，用连字符 |
| name_zh | string | 是 | 马来亚大学 | 简体中文全称 |
| name_en | string | 是 | Universiti Malaya | 英文官方全称 |
| type | enum | 是 | public / private | 公立或私立 |
| established_year | integer | 是 | 1949 | 官方创建年份 |
| state | string | 是 | 吉隆坡联邦直辖区 | 所在州（中文） |
| city | string | 是 | 吉隆坡 | 所在城市（中文） |
| address_en | string | 是 | 50603 Kuala Lumpur | 英文邮政地址 |
| coordinates_lat | float | 是 | 3.1209 | GPS纬度（小数点后4位） |
| coordinates_lng | float | 是 | 101.6538 | GPS经度（小数点后4位） |
| website | string | 是 | https://www.um.edu.my | 官网URL |
| ranking_qs_2025 | integer/null | 否 | 60 | QS 2025排名，无数据填NULL |
| ranking_qs_2026 | integer/null | 否 | 58 | QS 2026排名，无数据填NULL |
| ranking_times | string/null | 否 | 801-1000 | THE排名，区间用连字符 |
| ranking_malaysia | integer/null | 否 | 1 | 马来西亚国内排名 |
| total_students | integer/null | 否 | 35054 | 在校生总数 |
| international_students | integer/null | 否 | 12405 | 国际生数量 |
| description_zh | text | 否 | ... | 中文描述，建议100–200字 |
| data_confidence | enum | 否 | high | high / medium / low |
| last_verified_date | date | 否 | 2026-03-26 | YYYY-MM-DD格式 |

---

### 6.2 专业项目表（programs.csv）

```csv
university_slug,name_zh,name_en,degree_level,field_category,duration_years,tuition_myr_per_year,tuition_cny_per_year,total_cost_myr,total_cost_cny,language,intake_months,requirements_zh,scholarship_available,data_source,last_verified_date
```

**字段说明：**

| 列名 | 数据类型 | 必填 | 示例 | 说明 |
|------|---------|------|------|------|
| university_slug | string | 是 | universiti-malaya | 关联universities表 |
| name_zh | string | 是 | 计算机科学（荣誉）学士 | 中文专业名称 |
| name_en | string | 是 | Bachelor of Computer Science (Honours) | 英文官方专业名称 |
| degree_level | enum | 是 | bachelor / master / phd | 学位层次 |
| field_category | string | 是 | 理工科 / 商科 / 医学 / 建筑 / 人文社科 | 专业大类 |
| duration_years | float | 是 | 4 / 3.5 / 1.5 | 学制年限 |
| tuition_myr_per_year | integer/null | 否 | 16000 | 国际生年学费（MYR），无数据填NULL |
| tuition_cny_per_year | integer/null | 否 | 25600 | 年学费（CNY），自动计算或NULL |
| total_cost_myr | integer/null | 否 | 64000 | 总学费（MYR） |
| total_cost_cny | integer/null | 否 | 102400 | 总学费（CNY） |
| language | string | 是 | 英语 / 英语/马来语 | 教学语言 |
| intake_months | string | 是 | 2;9 | 分号分隔的月份数字 |
| requirements_zh | text | 否 | 高中毕业，IELTS 6.0 | 中文入学要求摘要 |
| scholarship_available | boolean | 否 | true / false | 是否有奖学金 |
| data_source | enum | 否 | official_website / aggregated / estimate | 数据来源可靠性 |
| last_verified_date | date | 否 | 2026-03-26 | 最近核实日期 |

---

### 6.3 联系信息表（contacts.csv）

```csv
university_slug,contact_type,email,email_alt,phone,phone_alt,whatsapp,wechat,wechat_note,note
```

---

### 6.4 生活费用表（living_costs.csv）

```csv
university_slug,accommodation_on_campus_myr,accommodation_on_campus_cny,accommodation_off_campus_myr,accommodation_off_campus_cny,monthly_living_estimate_myr,monthly_living_estimate_cny,annual_total_estimate_myr,annual_total_estimate_cny,last_verified_date
```

---

## 七、中国学生关注指标（平台差异化要点）

### 7.1 高价值数据点（优先采集）

```
1. 高考成绩要求（明确是否接受、建议分数）
2. 雅思/托福最低分要求（各院校各专业）
3. 是否有中文客服或中文官方渠道
4. 微信公众号（已确认：UM有CSAUM）
5. 是否有专为中国学生的奖学金
6. 学信网学历认证要求
7. 中国银行转账/缴费便利性
```

### 7.2 院校中文服务情况（当前已知）

| 院校 | 微信公众号 | 中文工作人员 | 专属中国学生奖学金 |
|------|----------|------------|----------------|
| 马来亚大学（UM） | CSAUM（学生联合会） | 有（国际处有中文咨询） | 无专属，可申请MIS |
| 马来西亚国立大学（UKM） | 需搜索确认 | 有 | 无专属 |
| 马来西亚理工大学（UTM） | 需搜索确认 | 有 | 华为奖学金（IT/工程） |
| 马来西亚博特拉大学（UPM） | 需搜索确认 | 有 | 中国-东盟农业合作奖学金 |
| 马来西亚理科大学（USM） | 需搜索确认 | 有 | 无专属 |
| 蒙纳士大学马来西亚校区 | 需搜索确认 | 有 | 有国际生奖学金 |
| 世纪大学（SEGi） | 需搜索确认 | 有 | SEGi优秀生奖学金 |
| 英迪国际大学（INTI） | 未公开 | 有 | 20%–50%学费减免 |

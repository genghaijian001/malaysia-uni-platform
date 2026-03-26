-- =============================================================================
-- 马来西亚大学信息平台 — 种子数据 (PostgreSQL)
-- 生成日期: 2026-03-26
-- 数据说明: 包含 UM、UTM、Monash Malaysia 三所大学完整数据
-- 汇率基准: 1 MYR = 1.6 CNY (2025-2026参考汇率)
-- =============================================================================

-- -----------------------------------------------------------------------------
-- 前置清理 (开发环境可用，生产环境请注释掉)
-- -----------------------------------------------------------------------------
-- TRUNCATE TABLE university_contacts CASCADE;
-- TRUNCATE TABLE university_living_costs CASCADE;
-- TRUNCATE TABLE university_scholarships CASCADE;
-- TRUNCATE TABLE university_programs CASCADE;
-- TRUNCATE TABLE universities CASCADE;

-- =============================================================================
-- 1. UNIVERSITIES 大学基本信息表
-- =============================================================================

INSERT INTO universities (
    slug,
    name_zh,
    name_en,
    type,
    established_year,
    state,
    city,
    address_en,
    address_zh,
    coordinates_lat,
    coordinates_lng,
    website,
    admissions_website,
    ranking_qs_2025,
    ranking_qs_2026,
    ranking_times,
    ranking_malaysia,
    total_students,
    international_students,
    description_zh,
    highlights,
    data_confidence,
    last_verified_date,
    created_at,
    updated_at
) VALUES

-- 1. 马来亚大学 (UM)
(
    'universiti-malaya',
    '马来亚大学',
    'Universiti Malaya',
    'public',
    1949,
    '吉隆坡联邦直辖区',
    '吉隆坡',
    'Universiti Malaya, 50603 Kuala Lumpur, Malaysia',
    '马来西亚吉隆坡50603',
    3.1209,
    101.6538,
    'https://www.um.edu.my',
    'https://study.um.edu.my',
    60,
    58,
    NULL,
    1,
    35054,
    12405,
    '马来亚大学是马来西亚历史最悠久、综合排名最高的公立研究型大学，位于吉隆坡市区，QS世界排名第58位（2026年）。校园占地309公顷，设有17个学院，拥有超过35,000名在校生，其中国际生逾12,000人，来自80多个国家。是中国学生赴马来西亚留学的首选院校之一。',
    ARRAY['马来西亚排名第1', 'QS全球前60', '国际生超12,000人', '微信公众号：CSAUM'],
    'high',
    '2026-03-26',
    NOW(),
    NOW()
),

-- 2. 马来西亚理工大学 (UTM)
(
    'universiti-teknologi-malaysia',
    '马来西亚理工大学',
    'Universiti Teknologi Malaysia',
    'public',
    1975,
    '柔佛州',
    '士古来',
    'UTM Johor Bahru, 81310 Skudai, Johor Bahru, Johor, Malaysia',
    '马来西亚柔佛州新山士古来81310',
    1.5580,
    103.6380,
    'https://www.utm.my',
    'https://admission.utm.my',
    181,
    NULL,
    NULL,
    4,
    23500,
    4000,
    '马来西亚理工大学（UTM）是马来西亚顶尖的公立理工类研究型大学，QS世界排名第181位（2025年）。主校区位于柔佛州士古来（占地约1,100公顷），另设有吉隆坡城市校区。以工程、计算机科学、建筑等理工科见长，与华为等科技企业有深度合作，提供实习及奖学金机会。',
    ARRAY['马来西亚顶尖理工大学', '工程/IT/建筑专业强', '华为合作奖学金', '双校区（新山+吉隆坡）'],
    'high',
    '2026-03-26',
    NOW(),
    NOW()
),

-- 3. 蒙纳士大学马来西亚校区 (Monash Malaysia)
(
    'monash-university-malaysia',
    '蒙纳士大学马来西亚校区',
    'Monash University Malaysia',
    'private',
    1998,
    '雪兰莪州',
    '阳光城',
    'Jalan Lagoon Selatan, 47500 Bandar Sunway, Selangor Darul Ehsan, Malaysia',
    '马来西亚雪兰莪州阳光城47500',
    3.0644,
    101.6007,
    'https://www.monash.edu.my',
    'https://www.monash.edu.my/study',
    37,
    36,
    NULL,
    NULL,
    11000,
    NULL,
    '蒙纳士大学马来西亚校区是澳大利亚蒙纳士大学（QS全球第36位，2026年）在马来西亚的官方分校，颁发与澳大利亚母校完全相同的学位证书。商科、工程、计算机科学、数据科学等专业极受中国学生欢迎，位于阳光城商业区，生活配套完善。',
    ARRAY['QS全球前36（与澳洲母校共享排名）', '澳大利亚原版学位证书', '世界顶级师资和科研水平', '阳光城商业配套完善'],
    'high',
    '2026-03-26',
    NOW(),
    NOW()
);


-- =============================================================================
-- 2. UNIVERSITY_PROGRAMS 专业项目表
-- =============================================================================

INSERT INTO university_programs (
    university_slug,
    name_zh,
    name_en,
    degree_level,
    field_category,
    duration_years,
    tuition_international_myr_per_year,
    tuition_international_cny_per_year,
    total_cost_myr,
    total_cost_cny,
    language,
    intake_months,
    requirements_zh,
    scholarship_available,
    data_source,
    last_verified_date,
    created_at,
    updated_at
) VALUES

-- UM 专业
(
    'universiti-malaya',
    '计算机科学（荣誉）学士',
    'Bachelor of Computer Science (Honours)',
    'bachelor',
    '理工科',
    4.0,
    16000,
    25600,
    64000,
    102400,
    '英语',
    ARRAY['2', '9'],
    '高中毕业，数学及理科成绩优秀；IELTS 5.5–6.0；建议高考成绩提交（达本省本科线）',
    true,
    'aggregated',
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'universiti-malaya',
    '工程学（荣誉）学士（土木/机械/电气/化学）',
    'Bachelor of Engineering (Honours)',
    'bachelor',
    '理工科',
    4.0,
    17000,
    27200,
    68000,
    108800,
    '英语',
    ARRAY['2', '9'],
    '高中毕业，数学、物理、化学成绩优秀（建议85%以上）；IELTS 6.0；建议高考成绩提交',
    true,
    'aggregated',
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'universiti-malaya',
    '工商管理学（荣誉）学士',
    'Bachelor of Business Administration (Honours)',
    'bachelor',
    '商科',
    3.0,
    15000,
    24000,
    45000,
    72000,
    '英语',
    ARRAY['2', '9'],
    '高中毕业，数学成绩良好；IELTS 5.5–6.0；建议高考成绩提交',
    true,
    'aggregated',
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'universiti-malaya',
    '医学与外科学士（MBBS）',
    'Bachelor of Medicine and Surgery (MBBS)',
    'bachelor',
    '医学',
    5.0,
    50000,
    80000,
    250000,
    400000,
    '英语',
    ARRAY['9'],
    '数学、物理、化学、生物均优秀；IELTS 6.0以上；竞争极激烈，国际生名额有限',
    false,
    'aggregated',
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'universiti-malaya',
    '计算机科学硕士（授课型）',
    'Master of Computer Science (Coursework)',
    'master',
    '理工科',
    1.5,
    20000,
    32000,
    30000,
    48000,
    '英语',
    ARRAY['2', '9'],
    '相关领域本科，CGPA ≥ 2.75；IELTS 6.0',
    true,
    'aggregated',
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'universiti-malaya',
    '工商管理硕士（MBA）',
    'Master of Business Administration (MBA)',
    'master',
    '商科',
    2.0,
    22500,
    36000,
    45000,
    72000,
    '英语',
    ARRAY['2', '9'],
    '相关领域本科，CGPA ≥ 2.75，建议有工作经验；IELTS 6.0–6.5',
    true,
    'aggregated',
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'universiti-malaya',
    '哲学博士（计算机科学/工程方向，研究型）',
    'Doctor of Philosophy (PhD) - Computer Science / Engineering',
    'phd',
    '理工科',
    3.0,
    35000,
    56000,
    105000,
    168000,
    '英语',
    ARRAY['2', '9'],
    '相关领域硕士，CGPA ≥ 3.0；IELTS 6.0；需提交研究计划，联系导师',
    true,
    'aggregated',
    '2026-03-26',
    NOW(),
    NOW()
),

-- UTM 专业（研究生学费来源官网：admission.utm.my，可靠性高）
(
    'universiti-teknologi-malaysia',
    '计算机科学学士（荣誉）',
    'Bachelor of Computer Science (Honours)',
    'bachelor',
    '理工科',
    4.0,
    15000,
    24000,
    60000,
    96000,
    '英语',
    ARRAY['2', '9'],
    '高中毕业，数学及相关理科成绩 ≥ 85%；IELTS 6.0；建议提供高考成绩',
    true,
    'aggregated',
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'universiti-teknologi-malaysia',
    '工程学士（荣誉）（电气/机械/土木/化工）',
    'Bachelor of Engineering (Honours)',
    'bachelor',
    '理工科',
    4.0,
    17000,
    27200,
    68000,
    108800,
    '英语',
    ARRAY['2', '9'],
    '高中毕业，数学、物理、化学成绩 ≥ 85%；IELTS 6.0–6.5',
    true,
    'aggregated',
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'universiti-teknologi-malaysia',
    '计算机科学硕士（授课型）',
    'Master of Computer Science (Coursework)',
    'master',
    '理工科',
    1.5,
    NULL,
    NULL,
    26500,
    42400,
    '英语',
    ARRAY['2', '9'],
    '相关领域本科，CGPA ≥ 2.75；IELTS 6.0',
    true,
    'official_website',  -- 来源: admission.utm.my/fees-pg-inter/
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'universiti-teknologi-malaysia',
    '工程硕士（授课型）',
    'Master of Engineering (Coursework)',
    'master',
    '理工科',
    1.5,
    NULL,
    NULL,
    31000,
    49600,
    '英语',
    ARRAY['2', '9'],
    '相关领域本科，CGPA ≥ 2.75；IELTS 6.0',
    true,
    'official_website',  -- 来源: admission.utm.my/fees-pg-inter/
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'universiti-teknologi-malaysia',
    '工商管理硕士（MBA）',
    'Master of Business Administration (MBA) - AHIBS',
    'master',
    '商科',
    1.5,
    NULL,
    NULL,
    32154,
    51446,
    '英语',
    ARRAY['2', '9'],
    '相关领域本科，CGPA ≥ 2.75，建议有工作经验；IELTS 6.0',
    true,
    'official_website',  -- 来源: admission.utm.my/fees-pg-inter/
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'universiti-teknologi-malaysia',
    '哲学博士（工程，研究型）',
    'Doctor of Philosophy (PhD) - Engineering',
    'phd',
    '理工科',
    3.0,
    NULL,
    NULL,
    51600,
    82560,
    '英语',
    ARRAY['2', '9'],
    '相关领域硕士，CGPA ≥ 3.0；IELTS 6.0；需提交研究计划，联系导师',
    true,
    'official_website',  -- 来源: admission.utm.my/fees-pg-inter/
    '2026-03-26',
    NOW(),
    NOW()
),

-- Monash Malaysia 专业（学费来源：monash.edu.my官网，可靠性高）
(
    'monash-university-malaysia',
    '计算机科学/数据科学学士',
    'Bachelor of Computer Science / Data Science',
    'bachelor',
    '理工科',
    3.0,
    50880,
    81408,
    152640,
    244224,
    '英语',
    ARRAY['2', '7'],
    '高中毕业，数学成绩优秀；IELTS 6.0–6.5；高中成绩建议前20%–30%',
    true,
    'aggregated',  -- 来源: monash.edu.my/study/undergraduate/fees
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'monash-university-malaysia',
    '工程学士（荣誉）（所有方向）',
    'Bachelor of Engineering (Honours)',
    'bachelor',
    '理工科',
    4.0,
    60000,
    96000,
    240000,
    384000,
    '英语',
    ARRAY['2', '7'],
    '高中毕业，数学、物理成绩优秀；IELTS 6.5；高中成绩建议前20%',
    true,
    'aggregated',  -- 来源: monash.edu.my/study/undergraduate/fees
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'monash-university-malaysia',
    '商科与经济学士',
    'Bachelor of Business and Commerce',
    'bachelor',
    '商科',
    3.0,
    48000,
    76800,
    144000,
    230400,
    '英语',
    ARRAY['2', '7'],
    '高中毕业，数学成绩良好；IELTS 6.0–6.5',
    true,
    'aggregated',  -- 来源: monash.edu.my/study/undergraduate/fees
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'monash-university-malaysia',
    '数据科学硕士',
    'Master of Data Science',
    'master',
    '理工科',
    1.5,
    NULL,
    NULL,
    68160,
    109056,
    '英语',
    ARRAY['2', '7'],
    '相关领域本科，CGPA ≥ 2.75；IELTS 6.5',
    true,
    'aggregated',  -- 来源: monash.edu.my/study/postgraduate/fees
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'monash-university-malaysia',
    '国际商务硕士',
    'Master of International Business',
    'master',
    '商科',
    1.5,
    NULL,
    NULL,
    68400,
    109440,
    '英语',
    ARRAY['2', '7'],
    '相关领域本科，CGPA ≥ 2.75；IELTS 6.5',
    true,
    'aggregated',  -- 来源: monash.edu.my/study/postgraduate/fees
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'monash-university-malaysia',
    '应用工程硕士',
    'Master of Applied Engineering',
    'master',
    '理工科',
    1.5,
    NULL,
    NULL,
    58000,
    92800,
    '英语',
    ARRAY['2', '7'],
    '相关领域本科，CGPA ≥ 2.75；IELTS 6.5',
    true,
    'aggregated',
    '2026-03-26',
    NOW(),
    NOW()
);


-- =============================================================================
-- 3. UNIVERSITY_LIVING_COSTS 生活费用表
-- =============================================================================

INSERT INTO university_living_costs (
    university_slug,
    accommodation_on_campus_myr,
    accommodation_on_campus_cny,
    accommodation_off_campus_myr,
    accommodation_off_campus_cny,
    monthly_living_estimate_myr,
    monthly_living_estimate_cny,
    annual_total_estimate_myr,
    annual_total_estimate_cny,
    notes_zh,
    last_verified_date,
    created_at,
    updated_at
) VALUES
(
    'universiti-malaya',
    600,
    960,
    900,
    1440,
    1500,
    2400,
    24000,
    38400,
    '校内宿舍含水电，校外以Pantai Dalam/PJ区合租为主；月均生活费含餐饮、交通、通讯、日用',
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'universiti-teknologi-malaysia',
    400,
    640,
    650,
    1040,
    1200,
    1920,
    19200,
    30720,
    '新山（士古来）消费水平低于吉隆坡；校内宿舍资源充足；KL城市校区生活费更高约1,500–2,000 MYR/月',
    '2026-03-26',
    NOW(),
    NOW()
),
(
    'monash-university-malaysia',
    1200,
    1920,
    1500,
    2400,
    1800,
    2880,
    33600,
    53760,
    '阳光城区消费较高；校园附近有Sunway Pyramid等大型商场；建议预留更高生活费预算',
    '2026-03-26',
    NOW(),
    NOW()
);


-- =============================================================================
-- 4. UNIVERSITY_SCHOLARSHIPS 奖学金表
-- =============================================================================

INSERT INTO university_scholarships (
    university_slug,
    name_zh,
    name_en,
    scholarship_type,
    coverage_zh,
    requirement_zh,
    deadline_description,
    is_government_scholarship,
    created_at,
    updated_at
) VALUES

-- UM 奖学金
(
    'universiti-malaya',
    '校长杰出奖学金',
    'Vice-Chancellor''s Award',
    'merit',
    '全额学费 + 每月2,000 MYR生活津贴',
    'GPA ≥ 3.75，IELTS ≥ 6.5，需提交研究计划/职业规划',
    '每年4月1日、10月1日',
    false,
    NOW(),
    NOW()
),
(
    'universiti-malaya',
    '马来西亚国际奖学金（MIS）',
    'Malaysian International Scholarship',
    'government',
    '全额学费 + 每月约3,500 MYR + 往返机票 + 医疗保险',
    '硕博研究型，CGPA ≥ 3.0，IELTS ≥ 6.0，年龄18–40岁',
    '每年1–3月（建议提前12个月规划）',
    true,
    NOW(),
    NOW()
),
(
    'universiti-malaya',
    '研究生研究奖学金',
    'Postgraduate Research Scholarship',
    'research',
    '学费减免 + 每月约1,500–2,000 MYR生活津贴',
    '研究型硕博，需导师推荐，研究计划通过评审',
    '全年滚动，建议入学前申请',
    false,
    NOW(),
    NOW()
),

-- UTM 奖学金
(
    'universiti-teknologi-malaysia',
    '华为东南亚人才计划',
    'Huawei Southeast Asia Talent Program',
    'corporate',
    '每年学费减免约5,000 MYR + 华为实习机会',
    '计算机/通信工程专业，需通过技术测试和面试',
    '每年6月30日',
    false,
    NOW(),
    NOW()
),
(
    'universiti-teknologi-malaysia',
    '研究助理（RA）奖学金',
    'Research Assistant Scholarship',
    'research',
    '部分学费减免 + 每月生活津贴（金额由导师项目决定）',
    '研究型硕博，由导师根据项目需求提名',
    '全年滚动，取决于导师项目',
    false,
    NOW(),
    NOW()
),
(
    'universiti-teknologi-malaysia',
    '马来西亚国际奖学金（MIS）',
    'Malaysian International Scholarship',
    'government',
    '全额学费 + 每月约3,500 MYR + 往返机票 + 医疗保险',
    '硕博研究型，CGPA ≥ 3.0，IELTS ≥ 6.0',
    '每年1–3月',
    true,
    NOW(),
    NOW()
),

-- Monash 奖学金
(
    'monash-university-malaysia',
    '蒙纳士优秀国际生奖学金',
    'Monash International Merit Scholarship',
    'merit',
    '学费减免25%–50%（视高中成绩等级而定）',
    '高中成绩优秀（前10%–20%），与入学申请同步提交',
    '与入学申请同步',
    false,
    NOW(),
    NOW()
);


-- =============================================================================
-- 5. UNIVERSITY_CONTACTS 联系方式表
-- =============================================================================

INSERT INTO university_contacts (
    university_slug,
    contact_type,
    email,
    email_alt,
    phone,
    phone_alt,
    whatsapp,
    wechat,
    wechat_note,
    notes,
    created_at,
    updated_at
) VALUES
(
    'universiti-malaya',
    'international_admissions',
    'study@um.edu.my',
    'application@um.edu.my',
    '+60-3-7967-3596',
    '+60-3-7967-3597',
    NULL,
    'CSAUM',
    '马大中国留学生联合会官方公众号，提供申请/签证/宿舍等实用攻略',
    '国际市场部直线，工作日9:00–17:00（GMT+8）',
    NOW(),
    NOW()
),
(
    'universiti-teknologi-malaysia',
    'international_admissions',
    '需访问 https://www.utm.my/international/ 获取最新邮箱',
    NULL,
    '+60-7-553-1111',
    '+60-3-2180-5000',
    NULL,
    NULL,
    NULL,
    '第一个电话为JB主校区总机，第二个为KL城市校区总机；建议通过官网联系页获取最新直线',
    NOW(),
    NOW()
),
(
    'monash-university-malaysia',
    'general_enquiries',
    'mum.info@monash.edu',
    'mum.enquiry@monash.edu',
    '+60-3-5514-6000',
    NULL,
    NULL,
    NULL,
    NULL,
    'mum.enquiry@monash.edu 专用于未来学生咨询（申请前）；mum.info@monash.edu 为一般事务',
    NOW(),
    NOW()
);


-- =============================================================================
-- 6. EXCHANGE_RATES 汇率记录表（用于历史追溯）
-- =============================================================================

INSERT INTO exchange_rates (
    from_currency,
    to_currency,
    rate,
    effective_date,
    source,
    notes,
    created_at
) VALUES
(
    'MYR',
    'CNY',
    1.60,
    '2025-01-01',
    'Bank of China reference rate',
    '2025-2026学年使用汇率，1 MYR = 1.6 CNY，适用于平台所有CNY估算字段',
    NOW()
);


-- =============================================================================
-- 数据验证查询（可在导入后运行检查）
-- =============================================================================

-- 检查大学记录数
-- SELECT COUNT(*) AS university_count FROM universities;
-- 期望结果: 3

-- 检查专业记录数
-- SELECT university_slug, COUNT(*) AS program_count
-- FROM university_programs
-- GROUP BY university_slug
-- ORDER BY university_slug;
-- 期望结果: universiti-malaya: 7, universiti-teknologi-malaysia: 6, monash-university-malaysia: 6

-- 检查学费数据完整性（CNY字段是否正确为MYR×1.6）
-- SELECT name_zh,
--        tuition_international_myr_per_year,
--        tuition_international_cny_per_year,
--        tuition_international_myr_per_year * 1.6 AS expected_cny
-- FROM university_programs
-- WHERE tuition_international_myr_per_year IS NOT NULL;

-- 检查各大学排名数据
-- SELECT slug, name_zh, ranking_qs_2025, ranking_qs_2026, ranking_malaysia
-- FROM universities
-- ORDER BY COALESCE(ranking_qs_2026, ranking_qs_2025, 9999);

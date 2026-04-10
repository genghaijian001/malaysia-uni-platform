/**
 * Universiti Malaya (UM) - Complete Program Data (2025/2026 Intake)
 * Sources: https://www.um.edu.my/academics, https://umcms.um.edu.my/study/fees
 * Last verified: 2026-04-01
 *
 * NOTES:
 *   - UM is Malaysia's oldest and top-ranked public university (QS World 2025: #60).
 *   - Main campus: Kuala Lumpur (Lembah Pantai, 50603 KL).
 *   - Tuition fees are for international (non-Malaysian) students based on
 *     published 2024/2025 fee schedules; figures are annual unless noted.
 *   - MYR-to-CNY conversion rate: 1 MYR ≈ 1.55 CNY (approximate).
 *   - Bachelor intake: March (Semester 1) and September (Semester 2).
 *   - Postgraduate intake: March, June, and September for most programmes.
 *   - Engineering programmes typically September-only for undergrad intake.
 *   - MBBS (Medicine) intake: once per year in July/August.
 *   - All fees are approximate; students should verify with UM Admission Division
 *     or the respective faculty before application.
 */

export interface UMProgram {
  name_en: string;
  name_zh: string;
  degree_level: 'bachelor' | 'master' | 'phd';
  faculty_en: string;
  faculty_zh: string;
  field_category: string;
  duration_years: number;
  language_of_instruction: string;
  intake_months: number[];
  tuition_international_myr: number;
  tuition_international_cny_estimate: number;
  tuition_note?: string;
  min_ielts: number;
  min_toefl: number | null;
  min_gpa: number | null;
  requirements_zh: string;
  scholarship_available: boolean;
  scholarship_note_zh: string | null;
  curriculum_zh: string;
  career_prospects_zh: string;
  application_materials_zh: string;
  additional_requirements_zh: string | null;
  accreditation_zh: string;
  application_deadline_note: string;
}

const MYR_TO_CNY = 1.55;
function cny(myr: number): number { return Math.round(myr * MYR_TO_CNY); }

// ============================================================================
// FACULTY OF COMPUTER SCIENCE & INFORMATION TECHNOLOGY (FSKTM)
// ============================================================================

const fsktmPrograms: UMProgram[] = [
  {
    name_en: 'Bachelor of Computer Science (Hons) - Data Science',
    name_zh: '计算机科学（荣誉）学士 — 数据科学专业',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Computer Science and Information Technology (FSKTM)',
    faculty_zh: '计算机科学与信息技术学院',
    field_category: 'Computer Science & IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 16500,
    tuition_international_cny_estimate: cny(16500),
    tuition_note: '约每学年MYR 16,500，4年总费用约MYR 66,000',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：SPM/O-Level数学与科学优秀成绩，或A-Level/STPM/基础课程（UEC/MUFY/PASUM等）成绩良好；' +
      '数学成绩须达A/A-；英语要求：IELTS 6.0或TOEFL iBT 80（各单项不低于要求分）；' +
      '无需额外入学笔试，部分学期需提交个人陈述。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM提供UM优秀国际生奖学金（UM Excellence Scholarship），覆盖部分学费；' +
      '另可申请马来西亚政府奖学金（MSD）及各类企业赞助奖学金。',
    curriculum_zh:
      '核心课程包括：数据结构与算法、数据库系统、统计学与概率论、' +
      '机器学习基础、大数据分析、数据可视化、Python编程、' +
      'R语言数据分析、云计算与数据仓库、数据工程与ETL管道、' +
      '数据伦理与隐私、毕业设计（数据科学项目）。',
    career_prospects_zh:
      '数据科学家、数据分析师、机器学习工程师、商业智能分析师、数据工程师。',
    application_materials_zh:
      '① 网上申请表（UM在线申请系统）；② 护照（有效期2年以上）复印件；' +
      '③ 最高学历成绩单及证书原件核实复印件；④ IELTS/TOEFL成绩单；' +
      '⑤ 个人陈述（500字英文）；⑥ 两封学术推荐信；' +
      '⑦ 申请费收据（MYR 100）。',
    additional_requirements_zh:
      '建议具备高中数学B40以上（即B+或以上）成绩；部分专业方向需在面试中演示编程基础。',
    accreditation_zh:
      'MQA（马来西亚学术资格鉴定机构）认证；课程由FSKTM根据ACM计算机课程指导准则设计。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年4月截止；建议提前3-4个月完成申请。',
  },
  {
    name_en: 'Bachelor of Computer Science (Hons) - Software Engineering',
    name_zh: '计算机科学（荣誉）学士 — 软件工程专业',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Computer Science and Information Technology (FSKTM)',
    faculty_zh: '计算机科学与信息技术学院',
    field_category: 'Computer Science & IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 16500,
    tuition_international_cny_estimate: cny(16500),
    tuition_note: '约每学年MYR 16,500，4年总费用约MYR 66,000',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level/STPM/UEC/基础课程，数学优秀；' +
      '英语要求：IELTS 6.0或TOEFL iBT 80；' +
      '建议具备程序设计基础（C/Java/Python任一）。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；马来西亚政府MSD奖学金；科技企业（如TM、Axiata）赞助奖学金。',
    curriculum_zh:
      '核心课程包括：面向对象编程、软件工程原理、需求工程、' +
      '软件设计与架构、敏捷开发方法、软件测试与质量保证、' +
      '操作系统、计算机网络、数据库设计、' +
      '人机交互、软件项目管理、毕业设计（软件工程项目）。',
    career_prospects_zh:
      '软件工程师、系统分析师、全栈开发工程师、DevOps工程师、IT项目经理。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh: '具备任一编程语言基础者优先录取。',
    accreditation_zh: 'MQA认证；FSKTM课程经工业顾问委员会（IAC）定期审核与更新。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年4月截止。',
  },
  {
    name_en: 'Bachelor of Computer Science (Hons) - Information Systems',
    name_zh: '计算机科学（荣誉）学士 — 信息系统专业',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Computer Science and Information Technology (FSKTM)',
    faculty_zh: '计算机科学与信息技术学院',
    field_category: 'Computer Science & IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 15500,
    tuition_international_cny_estimate: cny(15500),
    tuition_note: '约每学年MYR 15,500，4年总费用约MYR 62,000',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level/STPM/UEC/基础课程，数学与IT科目成绩良好；' +
      '英语要求：IELTS 6.0或TOEFL iBT 80；' +
      '具备商业意识者优先。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；部分业界合作伙伴（银行、电信公司）提供定向奖学金。',
    curriculum_zh:
      '核心课程包括：信息系统基础、企业资源规划（ERP）、' +
      '系统分析与设计、数据库管理、电子商务系统、' +
      '业务流程管理、网络安全基础、IT审计与治理、' +
      '项目管理（PMBOK/PRINCE2）、企业信息架构、知识管理系统、毕业设计。',
    career_prospects_zh:
      '信息系统分析师、ERP顾问、IT审计师、业务流程分析师、IT项目经理。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年4月截止。',
  },
  {
    name_en: 'Bachelor of Computer Science (Hons) - Artificial Intelligence',
    name_zh: '计算机科学（荣誉）学士 — 人工智能专业',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Computer Science and Information Technology (FSKTM)',
    faculty_zh: '计算机科学与信息技术学院',
    field_category: 'Computer Science & IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 17000,
    tuition_international_cny_estimate: cny(17000),
    tuition_note: '约每学年MYR 17,000，4年总费用约MYR 68,000',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level/STPM/UEC/基础课程，数学须达A/A-，物理或统计学良好；' +
      '英语要求：IELTS 6.0或TOEFL iBT 80；' +
      '对AI/机器学习有浓厚兴趣，建议具备Python基础。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；马来西亚数字经济机构（MDEC）AI人才奖学金（竞争激烈）。',
    curriculum_zh:
      '核心课程包括：人工智能导论、线性代数与最优化、' +
      '深度学习与神经网络、计算机视觉、自然语言处理、' +
      '强化学习、知识表示与推理、AI伦理与社会影响、' +
      '大数据处理框架（Spark/Hadoop）、AI应用开发、机器人学基础、毕业设计（AI系统开发）。',
    career_prospects_zh:
      'AI研究员、机器学习工程师、计算机视觉工程师、NLP工程师、AI产品经理。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述（阐述AI研究兴趣）；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh: '数学（微积分、线性代数、概率论）基础扎实者优先。',
    accreditation_zh: 'MQA认证；FSKTM与工业界合作设计AI专业课程体系。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年4月截止。',
  },
  {
    name_en: 'Master of Computer Science (by Coursework)',
    name_zh: '计算机科学硕士（授课型）',
    degree_level: 'master',
    faculty_en: 'Faculty of Computer Science and Information Technology (FSKTM)',
    faculty_zh: '计算机科学与信息技术学院',
    field_category: 'Computer Science & IT',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 6, 9],
    tuition_international_myr: 18000,
    tuition_international_cny_estimate: cny(18000),
    tuition_note: '总学费约MYR 27,000（1.5年），每学年约MYR 18,000',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: 2.75,
    requirements_zh:
      '学术要求：计算机科学、信息技术或相关领域学士学位，CGPA 2.75或以上（4.0制）；' +
      '英语要求：IELTS 6.5（各单项不低于6.0）或TOEFL iBT 90；' +
      '两年以上相关工作经验者可适当放宽学术要求（需提交经验证明）。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM国际研究生奖学金（UMIGS）：面向优秀国际生，覆盖全额或部分学费；' +
      '另有大马政府MTCP奖学金供发展中国家申请人申请。',
    curriculum_zh:
      '核心课程包括：高级算法与复杂性、高级数据库系统、' +
      '分布式系统、软件架构与设计模式、研究方法论、' +
      '计算机安全、高级人工智能、云计算与微服务、' +
      '数据挖掘与知识发现、毕业论文/项目报告。',
    career_prospects_zh:
      '高级软件工程师、IT架构师、技术主管、系统研究员、大学讲师。',
    application_materials_zh:
      '① 网上申请表（UM研究生申请系统）；② 护照复印件；' +
      '③ 学士学位证书及成绩单（需官方认证）；④ IELTS/TOEFL成绩单；' +
      '⑤ 个人陈述（学习目标与研究兴趣，800字英文）；' +
      '⑥ 两封学术/专业推荐信；⑦ 简历（CV）；⑧ 申请费（MYR 100）。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；FSKTM硕士课程由马来西亚资格框架（MQF）第7级认定。',
    application_deadline_note:
      '3月入学：前一年11月截止；6月入学：当年3月截止；9月入学：当年5月截止。',
  },
  {
    name_en: 'Master of Data Science',
    name_zh: '数据科学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Computer Science and Information Technology (FSKTM)',
    faculty_zh: '计算机科学与信息技术学院',
    field_category: 'Computer Science & IT',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 19500,
    tuition_international_cny_estimate: cny(19500),
    tuition_note: '总学费约MYR 29,000（1.5年）',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: 2.75,
    requirements_zh:
      '学术要求：计算机科学、统计学、数学、工程或相关领域学士学位，CGPA 2.75+；' +
      '英语要求：IELTS 6.5或TOEFL iBT 90；' +
      '建议具备统计学或编程基础（Python/R）。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM国际研究生奖学金（UMIGS）；部分科技公司（如Grab、Axiata）提供产学合作奖学金。',
    curriculum_zh:
      '核心课程包括：数据科学基础与Python编程、统计学习与推断、' +
      '机器学习算法与应用、大数据技术（Hadoop/Spark）、' +
      '数据可视化与商业智能、深度学习实践、' +
      '自然语言处理应用、时间序列分析、数据治理与伦理、' +
      '数据科学项目（工业实习或学术研究项目）。',
    career_prospects_zh:
      '数据科学家、高级数据分析师、AI研究员、量化分析师、数据产品经理。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ CV；⑧ 申请费。',
    additional_requirements_zh: '具备Python/R编程经验及统计学基础者优先录取。',
    accreditation_zh: 'MQA认证；课程符合MQF第7级标准。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年5月截止。',
  },
  {
    name_en: 'Doctor of Philosophy (PhD) in Computer Science',
    name_zh: '计算机科学哲学博士',
    degree_level: 'phd',
    faculty_en: 'Faculty of Computer Science and Information Technology (FSKTM)',
    faculty_zh: '计算机科学与信息技术学院',
    field_category: 'Computer Science & IT',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 6, 9],
    tuition_international_myr: 14000,
    tuition_international_cny_estimate: cny(14000),
    tuition_note: '每学年约MYR 14,000，研究型学位，通常3-5年完成',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: 3.0,
    requirements_zh:
      '学术要求：计算机科学或相关领域硕士学位（CGPA 3.0+），或本科成绩优异者可直接申请；' +
      '英语要求：IELTS 6.5或TOEFL iBT 90；' +
      '须提交详细研究计划书（Research Proposal，约3,000字），' +
      '需获得UM教授同意担任督导（Supervisor）方可正式申请。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM国际研究生奖学金（UMIGS）：覆盖全额学费及生活补贴；' +
      '高等教育部SLAI奖学金（限马来西亚籍）；' +
      '另可申请UM研究资助金（UMRG）担任研究助理获得津贴。',
    curriculum_zh:
      '研究型学位，主要通过独立研究完成，包含：研究方法论课程、' +
      '专题研讨会（Seminar）、文献综述、研究进度报告、' +
      '国际学术会议论文发表（要求至少1篇SCOPUS期刊）、' +
      '博士论文撰写与答辩；研究方向涵盖AI/ML、网络安全、自然语言处理、分布式系统等。',
    career_prospects_zh:
      '大学教授/讲师、高级研究员、首席科学家、AI领域技术专家、科技创业。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 硕士/本科学历证书及成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 研究计划书（Research Proposal）；' +
      '⑥ 拟指导教授同意信；⑦ 三封学术推荐信；⑧ 完整CV；⑨ 申请费。',
    additional_requirements_zh:
      '申请前务必与FSKTM教授联系确认督导意愿，并确保研究方向与教授课题匹配。',
    accreditation_zh: 'MQA认证；UM博士学位受国际广泛认可，符合MQF第8级标准。',
    application_deadline_note:
      '全年接受申请，建议至少提前6个月联系督导；官方截止日期：3/6/9月入学分别于前2个月截止。',
  },
];

// ============================================================================
// FACULTY OF ENGINEERING (FKJ / FACULTY OF ENGINEERING)
// ============================================================================

const engineeringPrograms: UMProgram[] = [
  {
    name_en: 'Bachelor of Civil Engineering (Hons)',
    name_zh: '土木工程（荣誉）学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 19000,
    tuition_international_cny_estimate: cny(19000),
    tuition_note: '约每学年MYR 19,000，4年总费用约MYR 76,000',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level（数学A，物理A或B）或STPM（数学T、物理各3.0+）或UEC（数学A、物理A）；' +
      '或通过PASUM/基础课程（理工科方向），理工科成绩优秀；' +
      '英语要求：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；马来西亚公共工程局（JKR）奖学金；工程类企业（如Gamuda、IJM）赞助奖学金。',
    curriculum_zh:
      '核心课程包括：工程数学、材料力学、结构分析、' +
      '岩土工程学、水力学与水资源工程、交通工程学、' +
      '建筑材料与施工技术、工程测量与GIS、' +
      '环境工程基础、项目管理与工程经济学、工业实习、毕业设计（工程设计项目）。',
    career_prospects_zh:
      '土木工程师（持BEM注册）、结构工程师、项目工程师、公共工程局官员、工程顾问。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ 申请费（MYR 100）。',
    additional_requirements_zh: '须通过马来西亚工程师理事会（BEM）工程课程认可，完成4年学业后可申请研究生工程师注册。',
    accreditation_zh: 'MQA认证；马来西亚工程师理事会（BEM）认可课程；符合华盛顿协议（Washington Accord）标准。',
    application_deadline_note: '9月入学：当年4月截止；建议3月前完成申请。',
  },
  {
    name_en: 'Bachelor of Electrical Engineering (Hons)',
    name_zh: '电气工程（荣誉）学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 19000,
    tuition_international_cny_estimate: cny(19000),
    tuition_note: '约每学年MYR 19,000，4年总费用约MYR 76,000',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level（数学A，物理A或B）或STPM/UEC理工科成绩优秀；' +
      '英语要求：IELTS 6.0或TOEFL iBT 80；' +
      '数学与物理基础须扎实。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；TNB（马来西亚国家能源）奖学金；Petronas技术大学奖学金（限马来西亚籍）。',
    curriculum_zh:
      '核心课程包括：电路理论与分析、电子学、电磁场理论、' +
      '数字系统与逻辑设计、信号与系统、电力系统、' +
      '控制系统工程、通信工程基础、嵌入式系统、' +
      '电力电子学、电机驱动与自动化、工业实习、毕业设计。',
    career_prospects_zh:
      '电气工程师（BEM注册）、电力系统工程师、自动化工程师、通信工程师、研究工程师。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；BEM认可工程课程；符合华盛顿协议标准。',
    application_deadline_note: '9月入学：当年4月截止。',
  },
  {
    name_en: 'Bachelor of Mechanical Engineering (Hons)',
    name_zh: '机械工程（荣誉）学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 19000,
    tuition_international_cny_estimate: cny(19000),
    tuition_note: '约每学年MYR 19,000，4年总费用约MYR 76,000',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level（数学A，物理A），或STPM/UEC同等资历，理工科成绩优秀；' +
      '英语要求：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；Proton、Perodua等汽车企业奖学金；工程类MSD政府奖学金。',
    curriculum_zh:
      '核心课程包括：工程力学（静力学/动力学）、材料科学与工程、' +
      '热力学与传热学、流体力学、制造工艺学、' +
      '机器设计与CAD、振动与噪声控制、' +
      '有限元分析、机器人技术导论、工程测量、工业实习、毕业设计（机械设计项目）。',
    career_prospects_zh:
      '机械工程师（BEM注册）、产品设计工程师、制造工程师、航空维修工程师、研发工程师。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；BEM认可；符合华盛顿协议标准。',
    application_deadline_note: '9月入学：当年4月截止。',
  },
  {
    name_en: 'Bachelor of Chemical Engineering (Hons)',
    name_zh: '化学工程（荣誉）学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 19500,
    tuition_international_cny_estimate: cny(19500),
    tuition_note: '约每学年MYR 19,500，4年总费用约MYR 78,000',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level（数学A，化学A，物理B或以上）或STPM/UEC同等资历；' +
      '英语要求：IELTS 6.0或TOEFL iBT 80；' +
      '化学成绩须达到优秀水平。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；Petronas奖学金（竞争性强）；BASF、Shell等化工企业赞助奖学金。',
    curriculum_zh:
      '核心课程包括：化工热力学、化学反应工程、' +
      '传质与分离过程、流体力学与传热、过程控制与自动化、' +
      '化工计算机模拟（Aspen Plus）、聚合物工程、' +
      '环境与安全工程、油气工程基础、化工工厂设计、工业实习、毕业设计。',
    career_prospects_zh:
      '化工工程师（BEM注册）、过程工程师、石油化工工程师、环境工程师、工厂安全工程师。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；BEM认可；符合华盛顿协议标准。',
    application_deadline_note: '9月入学：当年4月截止。',
  },
  {
    name_en: 'Master of Engineering (Civil / Electrical / Mechanical / Chemical)',
    name_zh: '工程硕士（土木/电气/机械/化工方向）',
    degree_level: 'master',
    faculty_en: 'Faculty of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 6, 9],
    tuition_international_myr: 20000,
    tuition_international_cny_estimate: cny(20000),
    tuition_note: '总学费约MYR 30,000（1.5年授课型），研究型另计',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: 2.75,
    requirements_zh:
      '学术要求：相关工程领域学士学位，CGPA 2.75+（4.0制）；' +
      '英语要求：IELTS 6.5或TOEFL iBT 90；' +
      '研究型须提交研究计划书并获督导同意。',
    scholarship_available: true,
    scholarship_note_zh:
      'UMIGS奖学金；UM研究助理职位（RA）；马来西亚政府MTCP奖学金（发展中国家）。',
    curriculum_zh:
      '核心课程包括：高级工程数学、工程研究方法、专业工程选修课组（按专业方向）、' +
      '工程项目管理、工程法规与职业伦理、高级结构/电力/热力学/化工专题、' +
      '论文/项目报告；研究方向可选智慧城市、可再生能源、先进制造、绿色化工等。',
    career_prospects_zh:
      '高级工程师、工程项目经理、大学讲师、工程顾问、研发主管。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 工程学士学位证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述/研究计划书；' +
      '⑥ 两封推荐信；⑦ CV；⑧ 申请费。',
    additional_requirements_zh: '研究型申请须先联系拟指导教授并获同意信。',
    accreditation_zh: 'MQA认证；BEM认可研究生工程课程；MQF第7级。',
    application_deadline_note:
      '3月入学：前一年11月截止；6月入学：当年3月截止；9月入学：当年5月截止。',
  },
  {
    name_en: 'Doctor of Philosophy (PhD) in Engineering',
    name_zh: '工程哲学博士',
    degree_level: 'phd',
    faculty_en: 'Faculty of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 6, 9],
    tuition_international_myr: 15000,
    tuition_international_cny_estimate: cny(15000),
    tuition_note: '每学年约MYR 15,000，研究型学位，通常3-5年完成',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: 3.0,
    requirements_zh:
      '学术要求：工程相关领域硕士学位（CGPA 3.0+），或本科成绩特别优秀者可直接申请；' +
      '英语要求：IELTS 6.5或TOEFL iBT 90；' +
      '须提交研究计划书并获UM工程学院教授同意担任督导。',
    scholarship_available: true,
    scholarship_note_zh:
      'UMIGS全额奖学金（含学费及生活补贴）；UM研究资助金（UMRG）研究助理津贴；MTCP奖学金。',
    curriculum_zh:
      '研究型学位，无固定授课课程，主要内容包括：独立研究课题、' +
      '文献综述与综述报告、定期研究进度报告（每学期）、' +
      '至少参加两次国际学术会议并发表论文（SCOPUS/WOS期刊）、' +
      '博士论文撰写（约80,000-100,000字）、论文答辩（Viva Voce）。',
    career_prospects_zh:
      '大学教授/副教授、国家级研究机构（MIMOS、SIRIM）研究员、首席工程师、工程顾问、创业创新。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 研究计划书（约3,000字）；' +
      '⑥ 督导同意信；⑦ 三封学术推荐信；⑧ 完整CV（含出版物列表）；⑨ 申请费。',
    additional_requirements_zh: '申请前须与拟指导教授充分沟通，确保研究方向与其课题契合。',
    accreditation_zh: 'MQA认证；UM工程博士学位受国际广泛认可；MQF第8级。',
    application_deadline_note: '全年接受申请；建议至少提前6个月联系督导并准备申请材料。',
  },
];

// ============================================================================
// FACULTY OF BUSINESS & ACCOUNTANCY (FBA)
// ============================================================================

const fbaPrograms: UMProgram[] = [
  {
    name_en: 'Bachelor of Accounting (Hons)',
    name_zh: '会计学（荣誉）学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Business and Accountancy (FBA)',
    faculty_zh: '商业与会计学院',
    field_category: 'Business & Accountancy',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 14000,
    tuition_international_cny_estimate: cny(14000),
    tuition_note: '约每学年MYR 14,000，4年总费用约MYR 56,000',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level（含会计或数学）或STPM/UEC（商科/数学方向），成绩良好；' +
      'SPM数学优秀；英语要求：IELTS 6.0或TOEFL iBT 80；' +
      '具备会计或商业基础者优先。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；马来西亚会计师公会（MIA）奖学金；四大会计师事务所（毕马威、德勤、普华永道、安永）赞助奖学金。',
    curriculum_zh:
      '核心课程包括：财务会计原理、管理会计、审计学、' +
      '税务法与税务规划、公司法与商法、' +
      '财务管理、成本会计、会计信息系统、' +
      '高级财务报告（MFRS/IFRS）、内部审计与控制、商业伦理、毕业设计。',
    career_prospects_zh:
      '注册会计师（CPA/ACCA/CIMA）、外部审计师、内部审计师、税务顾问、财务控制器。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh:
      '本课程获马来西亚会计师公会（MIA）认可，毕业后可豁免部分ACCA/ICAEW考试科目。',
    accreditation_zh:
      'MQA认证；马来西亚会计师公会（MIA）认可；ACCA部分科目豁免；ICAEW合作认证。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年4月截止。',
  },
  {
    name_en: 'Bachelor of Business Administration (Hons)',
    name_zh: '工商管理（荣誉）学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Business and Accountancy (FBA)',
    faculty_zh: '商业与会计学院',
    field_category: 'Business & Accountancy',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 13500,
    tuition_international_cny_estimate: cny(13500),
    tuition_note: '约每学年MYR 13,500，3年总费用约MYR 40,500',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level/STPM/UEC商科或文理科方向，成绩良好；' +
      '英语要求：IELTS 6.0或TOEFL iBT 80；具备领导力与沟通能力。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；各类企业赞助奖学金；马来西亚商会（MICCI）奖学金。',
    curriculum_zh:
      '核心课程包括：管理学原理、营销学、组织行为学、' +
      '财务管理基础、运营管理、人力资源管理、' +
      '战略管理、创业学、商业统计、' +
      '国际商务、企业社会责任与商业伦理、工业实习。',
    career_prospects_zh:
      '企业管理培训生、市场营销经理、人力资源主管、创业者、管理顾问。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；FBA课程获AACSB候选资格认证（Candidacy）。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年4月截止。',
  },
  {
    name_en: 'Master of Business Administration (MBA)',
    name_zh: '工商管理硕士（MBA）',
    degree_level: 'master',
    faculty_en: 'Faculty of Business and Accountancy (FBA)',
    faculty_zh: '商业与会计学院',
    field_category: 'Business & Accountancy',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 38000,
    tuition_international_cny_estimate: cny(38000),
    tuition_note: '总学费约MYR 38,000（1.5年全程），含所有课程模块',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: 2.75,
    requirements_zh:
      '学术要求：任何学科学士学位，CGPA 2.75+；至少3年全职工作经验（管理级别经验优先）；' +
      '英语要求：IELTS 6.5或TOEFL iBT 90；GMAT/GRE成绩（建议提供，非强制）；' +
      '须通过UM MBA面试。',
    scholarship_available: true,
    scholarship_note_zh:
      'UMIGS奖学金（部分覆盖）；部分企业提供员工MBA资助；UM-MBA校友奖学金。',
    curriculum_zh:
      '核心课程包括：管理经济学、财务报表分析与管理、战略管理、' +
      '营销管理、运营与供应链管理、人力资本管理、' +
      '商业研究方法、企业家精神与创新、' +
      '企业治理与商业伦理、国际商务与全球化、' +
      '选修专题（金融/数字营销/创业/ESG等）、商业项目（Capstone Project）。',
    career_prospects_zh:
      '高级管理人员（C-Suite）、企业战略顾问、投资银行家、创业CEO、跨国企业区域总监。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学士学位证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述（职业目标与MBA学习动机）；' +
      '⑥ 两封专业推荐信（上司/客户）；⑦ 详细CV（含工作经验）；' +
      '⑧ 工作经验证明信；⑨ 申请费；⑩ 面试安排。',
    additional_requirements_zh: '申请前须先通过UM MBA Admissions的资格审核，获邀后参加面试。',
    accreditation_zh: 'MQA认证；UM MBA获AACSB候选资格；MQF第7级；ABEST21会员大学。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年5月截止；名额有限，建议早申请。',
  },
  {
    name_en: 'Master of Management',
    name_zh: '管理学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Business and Accountancy (FBA)',
    faculty_zh: '商业与会计学院',
    field_category: 'Business & Accountancy',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 22000,
    tuition_international_cny_estimate: cny(22000),
    tuition_note: '总学费约MYR 33,000（1.5年），每学年约MYR 22,000',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: 2.75,
    requirements_zh:
      '学术要求：商科或相关领域学士学位，CGPA 2.75+；' +
      '英语要求：IELTS 6.5或TOEFL iBT 90；' +
      '不要求工作经验（相比MBA门槛较低，适合应届毕业生）。',
    scholarship_available: true,
    scholarship_note_zh:
      'UMIGS奖学金；MTCP奖学金（发展中国家国际生）；FBA研究助理职位。',
    curriculum_zh:
      '核心课程包括：组织理论与设计、管理研究方法、战略人力资源管理、' +
      '企业绩效管理、财务管理精要、数字化转型与管理、' +
      '供应链与物流管理、创业管理、' +
      '商业分析与决策支持、管理论文/项目报告。',
    career_prospects_zh:
      '中级管理人员、管理顾问、人力资源主管、业务发展经理、企业家。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ CV；⑧ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；MQF第7级。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年5月截止。',
  },
  {
    name_en: 'Doctor of Philosophy (PhD) in Business',
    name_zh: '商业管理哲学博士',
    degree_level: 'phd',
    faculty_en: 'Faculty of Business and Accountancy (FBA)',
    faculty_zh: '商业与会计学院',
    field_category: 'Business & Accountancy',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 6, 9],
    tuition_international_myr: 13000,
    tuition_international_cny_estimate: cny(13000),
    tuition_note: '每学年约MYR 13,000，研究型学位，通常3-5年完成',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: 3.0,
    requirements_zh:
      '学术要求：商业、管理或相关领域硕士学位（CGPA 3.0+）；' +
      '英语要求：IELTS 6.5或TOEFL iBT 90；' +
      '须提交研究计划书并获FBA教授督导同意。',
    scholarship_available: true,
    scholarship_note_zh:
      'UMIGS全额奖学金；FBA研究助理职位；MTCP奖学金。',
    curriculum_zh:
      '研究型学位，研究领域涵盖：财务与会计、战略管理、' +
      '营销与消费者行为、组织行为与人力资源、创业学、' +
      '供应链管理、公司治理；需发表至少1-2篇SCOPUS/WOS期刊论文；' +
      '完成博士论文（约70,000-90,000字）并通过答辩。',
    career_prospects_zh:
      '商科教授/讲师、管理学研究员、国际机构顾问、企业战略总监、政策研究员。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 研究计划书（3,000字）；' +
      '⑥ 督导同意信；⑦ 三封推荐信；⑧ CV；⑨ 申请费。',
    additional_requirements_zh: '申请前须联系FBA教授确认督导意愿及研究课题。',
    accreditation_zh: 'MQA认证；MQF第8级；UM商科博士学位受国际广泛认可。',
    application_deadline_note: '全年接受申请；建议提前6个月与督导沟通。',
  },
];

// ============================================================================
// FACULTY OF MEDICINE (FM)
// ============================================================================

const medicinePrograms: UMProgram[] = [
  {
    name_en: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)',
    name_zh: '医学与外科学士（MBBS）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Medicine',
    faculty_zh: '医学院',
    field_category: 'Medicine & Health',
    duration_years: 5,
    language_of_instruction: 'English',
    intake_months: [7],
    tuition_international_myr: 38000,
    tuition_international_cny_estimate: cny(38000),
    tuition_note: '约每学年MYR 38,000，5年总费用约MYR 190,000（含临床实习阶段）',
    min_ielts: 7.0,
    min_toefl: 100,
    min_gpa: null,
    requirements_zh:
      '学术要求（严格竞争性录取）：A-Level（化学A*或A，生物A*或A，数学或物理A），' +
      '或STPM（化学A，生物A，数学A，CGPA 4.0满分为目标）；' +
      '或UEC（含SMK预科：生物A1，化学A1，数学A1，英语A2）；' +
      '英语要求：IELTS 7.0（各单项不低于6.5）或TOEFL iBT 100；' +
      '须通过UMAT/MMI（多重小型面试）；无犯罪记录；体检合格。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM医学奖学金（极竞争性，名额极少）；马来西亚卫生部奖学金（限马来西亚籍）；' +
      '医学类慈善基金奖学金；建议国际生提前联系UM国际学生事务处了解奖学金资讯。',
    curriculum_zh:
      '第1-2年（基础医学阶段）：解剖学、生理学、生物化学、病理学、微生物学、药理学；' +
      '第3年（临床前期）：临床技能、问诊技巧、医学伦理、流行病学与生物统计；' +
      '第4-5年（临床实习阶段）：内科、外科、妇产科、儿科、精神科、急诊科、家庭医学、' +
      '社区医学轮转实习（UM医院UMMC）。',
    career_prospects_zh:
      '医生（须通过马来西亚医学委员会MMC注册）、外科医生、专科医师、医学研究员、卫生政策官员。',
    application_materials_zh:
      '① UM医学院专属申请表；② 护照复印件；③ A-Level/STPM/UEC成绩单原件；' +
      '④ IELTS成绩单（7.0以上）；⑤ UMAT/BMAT成绩（如适用）；' +
      '⑥ 个人陈述（学医动机，600字英文）；⑦ 两封教师推荐信；' +
      '⑧ 体检报告；⑨ 警察无犯罪证明；⑩ MMI面试安排（受邀后）；⑪ 申请费。',
    additional_requirements_zh:
      '录取极具竞争性，国际生名额有限（通常少于10%）；' +
      '须具备乙肝疫苗接种记录；临床实习需在大马医学委员会（MMC）认可医院进行。',
    accreditation_zh:
      'MQA认证；马来西亚医学委员会（MMC）全面认可；WHO医学院名录收录；' +
      '毕业生可在马来西亚、英国、澳大利亚、新加坡等国申请医生注册资格。',
    application_deadline_note:
      '每年仅7月一次入学；申请截止约为当年3月；MMI面试通常在4-5月举行；建议1月前完成网上申请。',
  },
  {
    name_en: 'Master of Internal Medicine',
    name_zh: '内科医学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Medicine',
    faculty_zh: '医学院',
    field_category: 'Medicine & Health',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 25000,
    tuition_international_cny_estimate: cny(25000),
    tuition_note: '约每学年MYR 25,000，4年临床培训制专科医学学位',
    min_ielts: 7.0,
    min_toefl: 100,
    min_gpa: null,
    requirements_zh:
      '学术要求：MMC注册医生，持有MBBS或同等医学学士学位；' +
      '至少完成2年住院医师轮转（Housemanship/Medical Officer经历）；' +
      '英语要求：IELTS 7.0或TOEFL iBT 100；' +
      '须通过内科专科入学考试及面试。',
    scholarship_available: false,
    scholarship_note_zh:
      '马来西亚卫生部有提供专科培训资助（限马来西亚籍）；国际生一般自费。',
    curriculum_zh:
      '临床培训课程包括：普通内科轮转（心脏科、肾脏科、神经内科、血液科、内分泌科）、' +
      '重症监护医学、临床药理学、医学研究方法、' +
      '循证医学与临床实践指南、内科专科MRCP考试备考、' +
      '内科病例报告与学术发表、内科专科论文。',
    career_prospects_zh:
      '内科专科医师、医院顾问医生、大学临床讲师、医学研究员、公共卫生医生。',
    application_materials_zh:
      '① 申请表；② 护照及MMC注册证书复印件；' +
      '③ MBBS学位证书与成绩单；④ IELTS成绩单；' +
      '⑤ 住院医师/医疗官经历证明信；⑥ 三封专科医生推荐信；' +
      '⑦ 个人陈述（专科兴趣与职业规划）；⑧ 体检报告；⑨ 申请费。',
    additional_requirements_zh:
      '须持有有效的MMC医生注册证书（Annual Practicing Certificate）。',
    accreditation_zh:
      'MQA认证；MMC认可专科培训课程；UM医学院临床培训获马来西亚国家专科医学委员会（NSC）认可。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年5月截止；名额极少，竞争激烈。',
  },
  {
    name_en: 'Master of Surgery (MS)',
    name_zh: '外科学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Medicine',
    faculty_zh: '医学院',
    field_category: 'Medicine & Health',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 25000,
    tuition_international_cny_estimate: cny(25000),
    tuition_note: '约每学年MYR 25,000，4年专科外科培训学位',
    min_ielts: 7.0,
    min_toefl: 100,
    min_gpa: null,
    requirements_zh:
      '学术要求：MMC注册医生，持有MBBS或同等医学学位；' +
      '至少2年医疗官/住院医师外科相关经历；' +
      '英语要求：IELTS 7.0或TOEFL iBT 100；' +
      '须通过外科专科入学考试（含笔试与面试）。',
    scholarship_available: false,
    scholarship_note_zh: '马来西亚卫生部专科培训资助（限马来西亚籍）；国际生一般自费。',
    curriculum_zh:
      '临床培训包括：普通外科、心胸外科、神经外科、骨科、泌尿外科轮转；' +
      '外科解剖学、外科病理学、外科手术技术培训（含模拟手术室）、' +
      '重症外科护理、外科研究方法、学术论文撰写（外科研究项目）、' +
      '外科专科考试（FRCS/MS Malaysia）备考。',
    career_prospects_zh:
      '外科专科医师、顾问外科医生、大学外科系讲师、医疗机构外科主任、医学研究人员。',
    application_materials_zh:
      '① 申请表；② 护照及MMC注册证书；③ MBBS学位证书与成绩单；' +
      '④ IELTS成绩单；⑤ 外科相关工作经历证明；' +
      '⑥ 三封推荐信（含一封外科顾问医生推荐）；⑦ 个人陈述；⑧ 申请费。',
    additional_requirements_zh: '须持有有效MMC年度执业证书（APC）。',
    accreditation_zh:
      'MQA认证；MMC认可；UM外科培训课程获马来西亚外科学院认可。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年5月截止。',
  },
  {
    name_en: 'Doctor of Philosophy (PhD) in Medicine',
    name_zh: '医学哲学博士',
    degree_level: 'phd',
    faculty_en: 'Faculty of Medicine',
    faculty_zh: '医学院',
    field_category: 'Medicine & Health',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 6, 9],
    tuition_international_myr: 16000,
    tuition_international_cny_estimate: cny(16000),
    tuition_note: '每学年约MYR 16,000，研究型学位，通常3-5年完成',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: 3.0,
    requirements_zh:
      '学术要求：医学、生物医学科学、护理学或相关健康科学领域硕士学位（CGPA 3.0+）；' +
      '或MBBS/MD持有者可直接申请；英语要求：IELTS 6.5或TOEFL iBT 90；' +
      '须提交研究计划书并获UM医学院教授督导同意。',
    scholarship_available: true,
    scholarship_note_zh:
      'UMIGS全额奖学金；UM研究助理职位；卫生部研究资助；MTCP奖学金。',
    curriculum_zh:
      '研究型学位，研究领域涵盖：肿瘤学、传染病学、心血管医学、' +
      '神经科学、遗传与分子医学、公共卫生与流行病学、药理学；' +
      '须发表至少2篇SCOPUS/WOS期刊论文；完成博士论文并通过Viva Voce答辩。',
    career_prospects_zh:
      '医学研究员、大学医学讲师/教授、公共卫生专家、制药公司研发科学家、卫生政策顾问。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 研究计划书；' +
      '⑥ 督导同意信；⑦ 三封学术推荐信；⑧ CV（含出版物列表）；⑨ 申请费。',
    additional_requirements_zh: '申请前须与UM医学院教授沟通并确认研究课题及督导。',
    accreditation_zh: 'MQA认证；MQF第8级；UM医学博士受国际广泛认可。',
    application_deadline_note: '全年接受申请；建议提前6个月联系督导。',
  },
];

// ============================================================================
// FACULTY OF SCIENCE (FS)
// ============================================================================

const sciencePrograms: UMProgram[] = [
  {
    name_en: 'Bachelor of Science (Hons) in Chemistry',
    name_zh: '理学（荣誉）学士 — 化学专业',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Science',
    faculty_zh: '理学院',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 15000,
    tuition_international_cny_estimate: cny(15000),
    tuition_note: '约每学年MYR 15,000，3年总费用约MYR 45,000',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level（化学A，数学B+以上，生物或物理B以上），' +
      '或STPM（化学3.0+，数学T 2.5+），或UEC理科（化学A，数学A）；' +
      '英语要求：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；马来西亚化学学会奖学金；壳牌/巴斯夫等化工企业奖学金。',
    curriculum_zh:
      '核心课程包括：无机化学、有机化学、物理化学、分析化学、' +
      '生物化学基础、量子化学与光谱学、化学仪器分析、' +
      '高分子化学、环境化学、化学实验（综合实验室训练）、' +
      '化学研究方法、荣誉研究论文。',
    career_prospects_zh:
      '研究化学家、工业化学家、质量控制分析师、环境化学顾问、大学讲师。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；马来西亚化学学会（IKM）认可课程。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年4月截止。',
  },
  {
    name_en: 'Bachelor of Science (Hons) in Biology',
    name_zh: '理学（荣誉）学士 — 生物学专业',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Science',
    faculty_zh: '理学院',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 15000,
    tuition_international_cny_estimate: cny(15000),
    tuition_note: '约每学年MYR 15,000，3年总费用约MYR 45,000',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level（生物A，化学B+以上），或STPM/UEC理科方向，生物化学成绩良好；' +
      '英语要求：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；生物多样性与环境类NGO奖学金；政府农业研究资助。',
    curriculum_zh:
      '核心课程包括：细胞生物学、遗传学、生理学、生态学与保育生物学、' +
      '分子生物学、微生物学、生物技术导论、' +
      '进化生物学、生物统计学、野外实习与生态调查、' +
      '生物信息学基础、荣誉研究论文。',
    career_prospects_zh:
      '生物研究员、环境顾问、生物技术公司研究员、自然保育官员、大学讲师。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；FS理学学位符合MQF第6级标准。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年4月截止。',
  },
  {
    name_en: 'Bachelor of Science (Hons) in Mathematics',
    name_zh: '理学（荣誉）学士 — 数学专业',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Science',
    faculty_zh: '理学院',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 14500,
    tuition_international_cny_estimate: cny(14500),
    tuition_note: '约每学年MYR 14,500，3年总费用约MYR 43,500',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level（纯数学A，另一理科B以上），或STPM（数学T 3.5+）；' +
      '或UEC（数学A1，高等数学A）；英语要求：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；马来西亚数学学会奖学金；精算类企业奖学金。',
    curriculum_zh:
      '核心课程包括：微积分与分析、线性代数、离散数学、' +
      '概率论与数理统计、数值方法、微分方程、' +
      '复变函数与实分析、拓扑学基础、数学建模、' +
      '运筹学、编程应用（MATLAB/Python）、荣誉研究论文。',
    career_prospects_zh:
      '精算师、数据分析师、金融量化分析师、运筹研究员、大学数学讲师。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；MQF第6级。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年4月截止。',
  },
  {
    name_en: 'Bachelor of Science (Hons) in Physics',
    name_zh: '理学（荣誉）学士 — 物理学专业',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Science',
    faculty_zh: '理学院',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 15000,
    tuition_international_cny_estimate: cny(15000),
    tuition_note: '约每学年MYR 15,000，3年总费用约MYR 45,000',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level（物理A，数学A），或STPM（物理3.0+，数学T 3.0+），或UEC（物理A，数学A）；' +
      '英语要求：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；马来西亚物理学会奖学金；国家能源（TNB）奖学金。',
    curriculum_zh:
      '核心课程包括：经典力学、电磁学、热力学与统计物理、' +
      '量子力学、光学与激光物理、固体物理学、' +
      '核物理与粒子物理导论、计算物理、' +
      '物理实验（精密测量）、电子学实验、荣誉研究论文。',
    career_prospects_zh:
      '物理研究员、医学物理师、工程物理师、材料科学研究员、大学物理讲师。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；MQF第6级。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年4月截止。',
  },
  {
    name_en: 'Master of Science (by Research)',
    name_zh: '理学硕士（研究型）',
    degree_level: 'master',
    faculty_en: 'Faculty of Science',
    faculty_zh: '理学院',
    field_category: 'Natural Sciences',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 6, 9],
    tuition_international_myr: 16000,
    tuition_international_cny_estimate: cny(16000),
    tuition_note: '约每学年MYR 16,000，研究型，通常1.5-2年完成',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: 2.75,
    requirements_zh:
      '学术要求：相关科学领域学士学位（CGPA 2.75+）；' +
      '英语要求：IELTS 6.0或TOEFL iBT 80；' +
      '须提交研究计划书并获FS教授督导同意。',
    scholarship_available: true,
    scholarship_note_zh:
      'UMIGS奖学金；UM研究助理职位（RA，月津贴约MYR 1,500-2,000）；MTCP奖学金。',
    curriculum_zh:
      '研究型学位，须独立完成科研课题，包含：文献综述、实验设计与数据采集、' +
      '数据分析与解读、参加学术研讨会、' +
      '至少1篇SCOPUS期刊论文（或在投）、' +
      '硕士论文撰写（约40,000-60,000字）与答辩；' +
      '研究领域涵盖化学、生物学、物理学、数学等各子学科。',
    career_prospects_zh:
      '研究科学家、高校讲师、企业研发分析师、政府科研机构研究员、博士课程申请人。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 研究计划书；' +
      '⑥ 督导同意信；⑦ 两封学术推荐信；⑧ CV；⑨ 申请费。',
    additional_requirements_zh: '申请前须联系FS教授确认督导意愿与研究课题。',
    accreditation_zh: 'MQA认证；MQF第7级。',
    application_deadline_note:
      '3月/6月/9月入学，建议提前4-6个月联系督导并准备材料。',
  },
  {
    name_en: 'Doctor of Philosophy (PhD) in Science',
    name_zh: '理学哲学博士',
    degree_level: 'phd',
    faculty_en: 'Faculty of Science',
    faculty_zh: '理学院',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 6, 9],
    tuition_international_myr: 14000,
    tuition_international_cny_estimate: cny(14000),
    tuition_note: '每学年约MYR 14,000，研究型，通常3-5年完成',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: 3.0,
    requirements_zh:
      '学术要求：相关科学领域硕士学位（CGPA 3.0+），或理学学士成绩优异者可直申；' +
      '英语要求：IELTS 6.5或TOEFL iBT 90；' +
      '须提交研究计划书并获FS教授督导同意。',
    scholarship_available: true,
    scholarship_note_zh:
      'UMIGS全额奖学金；UM研究资助金（UMRG）研究助理津贴；MTCP奖学金；' +
      '马来西亚科学技术创新部（MOSTI）研究资助。',
    curriculum_zh:
      '研究型学位，主要内容：高水平独立科学研究、文献综述综合报告、' +
      '定期研究进度汇报、参加国际学术会议（至少2次）、' +
      '发表至少2篇SCOPUS/WOS期刊论文（第一作者）、' +
      '博士论文撰写与Viva Voce答辩。',
    career_prospects_zh:
      '大学教授/研究员、国家科研机构（MIMOS/SIRIM/Forest Research Institute）研究员、' +
      '制药与生物技术公司科学家、政府科技政策官员、科技创业。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 研究计划书（约3,000字）；' +
      '⑥ 督导同意信；⑦ 三封学术推荐信；⑧ CV（含出版物列表）；⑨ 申请费。',
    additional_requirements_zh: '申请前须与FS教授充分沟通研究方向及课题。',
    accreditation_zh: 'MQA认证；MQF第8级；UM理学博士受国际广泛认可。',
    application_deadline_note: '全年接受申请；建议提前6个月联系督导。',
  },
];

// ============================================================================
// FACULTY OF ECONOMICS & ADMINISTRATION (FEA)
// ============================================================================

const feaPrograms: UMProgram[] = [
  {
    name_en: 'Bachelor of Economics (Hons)',
    name_zh: '经济学（荣誉）学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Economics and Administration (FEA)',
    faculty_zh: '经济与行政学院',
    field_category: 'Economics & Administration',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 13500,
    tuition_international_cny_estimate: cny(13500),
    tuition_note: '约每学年MYR 13,500，3年总费用约MYR 40,500',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level（数学B以上，经济或社会科学成绩良好），或STPM/UEC（含数学与商科/文科）；' +
      '英语要求：IELTS 6.0或TOEFL iBT 80；' +
      '具备分析思维与数量分析能力。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；马来西亚经济学会奖学金；亚洲开发银行（ADB）相关奖学金。',
    curriculum_zh:
      '核心课程包括：微观经济学、宏观经济学、计量经济学、' +
      '数理经济学、发展经济学、国际经济学、' +
      '货币经济学与金融、公共财政学、' +
      '产业组织经济学、劳动经济学、经济政策分析、荣誉论文。',
    career_prospects_zh:
      '经济分析师、中央银行官员、政府政策分析员、国际机构经济师、金融机构研究员。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；MQF第6级；FEA经济学课程获马来西亚经济学会认可。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年4月截止。',
  },
  {
    name_en: 'Bachelor of Administrative Science (Hons)',
    name_zh: '行政科学（荣誉）学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Economics and Administration (FEA)',
    faculty_zh: '经济与行政学院',
    field_category: 'Economics & Administration',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 13000,
    tuition_international_cny_estimate: cny(13000),
    tuition_note: '约每学年MYR 13,000，3年总费用约MYR 39,000',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level/STPM/UEC（文理皆可，社会科学或商科方向优先）；' +
      '英语要求：IELTS 6.0或TOEFL iBT 80；领导力与公共政策兴趣。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；马来西亚公共服务委员会（SPA）奖学金（限马来西亚籍）。',
    curriculum_zh:
      '核心课程包括：公共行政学导论、行政法、组织理论与行为、' +
      '政策分析与制定、人力资源行政、财政行政、' +
      '比较行政学、地方政府学、E政务与数字政府、' +
      '行政改革与善治、研究方法、荣誉论文（公共行政研究）。',
    career_prospects_zh:
      '政府行政官员、公共政策分析师、NGO管理人员、国际组织管理员、企业公共事务经理。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；MQF第6级。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年4月截止。',
  },
  {
    name_en: 'Master of Economics',
    name_zh: '经济学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Economics and Administration (FEA)',
    faculty_zh: '经济与行政学院',
    field_category: 'Economics & Administration',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 18000,
    tuition_international_cny_estimate: cny(18000),
    tuition_note: '总学费约MYR 27,000（1.5年授课型）',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: 2.75,
    requirements_zh:
      '学术要求：经济学或相关社会科学领域学士学位，CGPA 2.75+；' +
      '英语要求：IELTS 6.5或TOEFL iBT 90；' +
      '具备计量经济学或统计学基础者优先。',
    scholarship_available: true,
    scholarship_note_zh:
      'UMIGS奖学金；FEA研究助理职位；MTCP奖学金；亚洲开发银行奖学金（竞争性强）。',
    curriculum_zh:
      '核心课程包括：高级微观经济学、高级宏观经济学、高级计量经济学、' +
      '发展经济学专题、国际贸易理论与政策、' +
      '货币经济学、劳动经济学专题、环境与资源经济学、' +
      '经济研究方法、经济论文/研究项目。',
    career_prospects_zh:
      '高级经济分析师、中央银行研究员、政府政策顾问、国际机构经济师、学术研究员。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述；⑥ 两封推荐信；⑦ CV；⑧ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；MQF第7级。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年5月截止。',
  },
];

// ============================================================================
// FACULTY OF ARTS & SOCIAL SCIENCES (FASS)
// ============================================================================

const fassPrograms: UMProgram[] = [
  {
    name_en: 'Bachelor of Arts (Hons) in English Language',
    name_zh: '文学（荣誉）学士 — 英语语言专业',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Arts and Social Sciences (FASS)',
    faculty_zh: '文学与社会科学学院',
    field_category: 'Arts & Humanities',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 13000,
    tuition_international_cny_estimate: cny(13000),
    tuition_note: '约每学年MYR 13,000，3年总费用约MYR 39,000',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: null,
    requirements_zh:
      '学术要求：A-Level/STPM/UEC，英语/文学成绩优秀（A或B+以上）；' +
      '英语要求：IELTS 6.5（写作单项不低于6.0）或TOEFL iBT 90；' +
      '对语言学、文学或英语教学有浓厚兴趣。',
    scholarship_available: true,
    scholarship_note_zh:
      'UM优秀国际生奖学金；马来西亚英语协会奖学金；文化交流类奖学金。',
    curriculum_zh:
      '核心课程包括：英语语言学基础、现代英国文学、美国文学、' +
      '语言学理论（音韵学、句法学、语义学）、' +
      '应用语言学与英语教学法、批判性话语分析、' +
      '创意写作、跨文化交际、翻译与口译基础、' +
      '世界英语变体、英语荣誉论文。',
    career_prospects_zh:
      '英语教师/讲师、翻译/口译员、文案编辑、公共关系专员、跨文化顾问。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述（阐述英语学习目标）；⑥ 两封推荐信；⑦ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；MQF第6级；FASS英语课程获马来西亚英语语言学会认可。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年4月截止。',
  },
  {
    name_en: 'Master of Linguistics',
    name_zh: '语言学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Arts and Social Sciences (FASS)',
    faculty_zh: '文学与社会科学学院',
    field_category: 'Arts & Humanities',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 15000,
    tuition_international_cny_estimate: cny(15000),
    tuition_note: '总学费约MYR 22,500（1.5年授课型）',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: 2.75,
    requirements_zh:
      '学术要求：英语、语言学、外语或相关人文学科学士学位，CGPA 2.75+；' +
      '英语要求：IELTS 6.5或TOEFL iBT 90；' +
      '对语言学研究方法具备基础认识。',
    scholarship_available: true,
    scholarship_note_zh:
      'UMIGS奖学金；FASS研究助理职位；MTCP奖学金（发展中国家）。',
    curriculum_zh:
      '核心课程包括：理论语言学（音系学、形态学、句法学、语义学）、' +
      '语用学与话语分析、社会语言学、历史比较语言学、' +
      '语言习得研究、应用语言学、语料库语言学、' +
      '语言学研究方法（定性与定量）、语言学论文/研究报告。',
    career_prospects_zh:
      '语言学研究员、大学语言学讲师、语言政策分析员、自然语言处理（NLP）数据标注专家、翻译顾问。',
    application_materials_zh:
      '① 网上申请表；② 护照复印件；③ 学历证书与成绩单；' +
      '④ IELTS/TOEFL成绩单；⑤ 个人陈述（研究兴趣）；⑥ 两封推荐信；⑦ CV；⑧ 申请费。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；MQF第7级。',
    application_deadline_note:
      '3月入学：前一年11月截止；9月入学：当年5月截止。',
  },
];

// ============================================================================
// COMBINED EXPORT
// ============================================================================

const umPrograms: UMProgram[] = [
  ...fsktmPrograms,
  ...engineeringPrograms,
  ...fbaPrograms,
  ...medicinePrograms,
  ...sciencePrograms,
  ...feaPrograms,
  ...fassPrograms,
];

export default umPrograms;

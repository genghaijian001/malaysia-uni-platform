/**
 * Universiti Kebangsaan Malaysia (UKM) - Complete Program Data (2025/2026 Intake)
 * Sources: https://www.ukm.my/penerima, https://www.ukm.my/spkp
 * Last verified: 2026-04-01
 *
 * NOTES:
 *   - UKM (Universiti Kebangsaan Malaysia / 马来西亚国立大学) is QS #126 (2025).
 *   - Main campus: Bangi, Selangor; Medical campus: Cheras, Kuala Lumpur (PPUKM).
 *   - Tuition fees shown are for international students (non-Malaysian). Fees are
 *     approximate based on published 2024/2025 schedules and may change.
 *   - MYR-to-CNY conversion uses approximate rate of 1 MYR = 1.55 CNY.
 *   - Bachelor intake: June/July (main); some programmes also March or September.
 *   - Postgraduate intake: March and September.
 *   - UKM follows a semester system: Semester 1 (June/July), Semester 2 (Nov/Dec).
 *   - All fees are annual unless otherwise noted in tuition_note.
 *   - Students should verify current fees at https://www.ukm.my/pejabatpendaftar/
 */

export interface UKMProgram {
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
// FACULTY OF INFORMATION SCIENCE & TECHNOLOGY (FTSM)
// 信息科学与技术学院
// ============================================================================

const ftsmPrograms: UKMProgram[] = [
  {
    name_en: 'Bachelor of Computer Science (Hons) — Software Technology',
    name_zh: '计算机科学荣誉学士（软件技术）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Information Science & Technology (FTSM)',
    faculty_zh: '信息科学与技术学院（FTSM）',
    field_category: 'Computing & IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 14500,
    tuition_international_cny_estimate: cny(14500),
    tuition_note: '约14,500 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有相关领域A-Level（至少2门理科科目B级或以上）、UEC（至少5B含数学与科学）、马来西亚高等教育文凭（STPM，CGPA≥2.00）或UKM认可的基础课程文凭；英语要求：IELTS 6.0或TOEFL iBT 80；数学成绩须达到良好等级。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生奖学金（部分学费减免）；马来西亚政府MyBrain15硕士/博士奖学金（本科毕业后可申请研究生资助）；ASEAN奖学金；建议尽早联系FTSM国际事务办公室。',
    curriculum_zh:
      '核心课程：程序设计基础（C++/Java）、数据结构与算法、软件工程原理、面向对象程序设计、数据库系统、操作系统、软件测试与质量保证、人机交互设计、软件项目管理、移动应用开发、云计算与服务架构、毕业设计/工业实习（6个月）。',
    career_prospects_zh:
      '软件工程师、系统分析师、移动应用开发工程师、IT项目经理、软件质量保证工程师、创业（科技初创公司）。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件（有效期≥18个月）；高中及以上学历成绩单与证书（认证件）；英语成绩证明（IELTS/TOEFL）；个人陈述（约500字）；推荐信1封；近期彩色护照照片2张；申请费收据。',
    additional_requirements_zh:
      '部分年份要求提交编程作品集或参加面试，具体以当年招生通知为准。',
    accreditation_zh:
      'MQA（马来西亚学术资格认证局）认证；课程与ACM/IEEE计算课程指南对标。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Bachelor of Computer Science (Hons) — Network Computing',
    name_zh: '计算机科学荣誉学士（网络计算）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Information Science & Technology (FTSM)',
    faculty_zh: '信息科学与技术学院（FTSM）',
    field_category: 'Computing & IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 14500,
    tuition_international_cny_estimate: cny(14500),
    tuition_note: '约14,500 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level、UEC（含数学与理科至少5B）、STPM（CGPA≥2.00）或UKM认可基础文凭；英语：IELTS 6.0或TOEFL iBT 80；数学成绩须达到良好等级。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生部分奖学金；MyBrain15（研究生阶段可申）；ASEAN奖学金；请联系FTSM国际事务办公室了解最新资助机会。',
    curriculum_zh:
      '核心课程：计算机网络基础、TCP/IP协议与网络安全、路由与交换技术、无线网络与移动计算、网络编程（Python/Java）、云计算与虚拟化技术、数据中心管理、网络安全与防御、物联网系统设计、分布式系统、网络性能优化、毕业设计/工业实习（6个月）。',
    career_prospects_zh:
      '网络工程师、系统管理员、网络安全分析师、云计算架构师、电信工程师、IT基础设施顾问。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件；高中及以上成绩单与证书（认证件）；英语成绩证明；个人陈述；推荐信1封；护照照片；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；课程与IEEE计算机学会网络技术指南对标。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Bachelor of Computer Science (Hons) — Intelligent Computing',
    name_zh: '计算机科学荣誉学士（智能计算）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Information Science & Technology (FTSM)',
    faculty_zh: '信息科学与技术学院（FTSM）',
    field_category: 'Computing & IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 15000,
    tuition_international_cny_estimate: cny(15000),
    tuition_note: '约15,000 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level、UEC（含数学与理科至少5B）、STPM（CGPA≥2.00）或UKM认可基础文凭；英语：IELTS 6.0或TOEFL iBT 80；数学及统计背景为优先条件。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生部分奖学金；MyBrain15（研究生阶段）；ASEAN奖学金；建议联系FTSM国际事务办公室。',
    curriculum_zh:
      '核心课程：人工智能导论、机器学习基础、深度学习与神经网络、自然语言处理、计算机视觉、数据挖掘与知识发现、模糊逻辑与专家系统、智能机器人技术、大数据分析、Python与R编程、强化学习、毕业设计/工业实习（6个月）。',
    career_prospects_zh:
      'AI/机器学习工程师、数据科学家、计算机视觉工程师、NLP研究员、智能系统开发工程师、科技公司研发岗位。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件；高中及以上成绩单与证书（认证件）；英语成绩证明；个人陈述；推荐信1封；护照照片；申请费收据。',
    additional_requirements_zh:
      '建议申请人具备一定编程基础（Python/C++）；部分年份可能要求提交数学竞赛或编程项目经历说明。',
    accreditation_zh:
      'MQA认证；课程对标ACM SIGAI人工智能教育指南。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Bachelor of Information Technology (Hons)',
    name_zh: '信息技术荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Information Science & Technology (FTSM)',
    faculty_zh: '信息科学与技术学院（FTSM）',
    field_category: 'Computing & IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 13500,
    tuition_international_cny_estimate: cny(13500),
    tuition_note: '约13,500 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level、UEC（含数学与理科至少5B）、STPM（CGPA≥2.00）或UKM认可基础文凭；英语：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生部分奖学金；ASEAN奖学金；MyBrain15（研究生阶段可申）。',
    curriculum_zh:
      '核心课程：信息技术基础、Web开发技术（HTML/CSS/JavaScript）、数据库设计与管理、系统分析与设计、企业信息系统、IT项目管理、信息安全管理、电子商务技术、云服务与SaaS、数字媒体技术、信息系统审计、毕业设计/企业实习（6个月）。',
    career_prospects_zh:
      'IT支持工程师、Web开发工程师、信息系统分析师、IT顾问、数字化转型专员、企业ERP实施顾问。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件；高中及以上成绩单与证书（认证件）；英语成绩证明；个人陈述；推荐信1封；护照照片；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；课程与马来西亚通信与多媒体委员会（MCMC）行业标准对标。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Master of Computer Science (MSc CS)',
    name_zh: '计算机科学理学硕士（MSc CS）',
    degree_level: 'master',
    faculty_en: 'Faculty of Information Science & Technology (FTSM)',
    faculty_zh: '信息科学与技术学院（FTSM）',
    field_category: 'Computing & IT',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 23400,
    tuition_international_cny_estimate: cny(23400),
    tuition_note: '首学期RM 12,760，后续学期RM 11,350/学期；2年总学费约RM 46,810（来源：UKM FSK/FTSM官方学费页面）',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '申请人须持有计算机科学、信息技术或相关领域学士学位（CGPA≥2.75/4.00，或同等资历）；英语要求：IELTS 6.0或TOEFL iBT 79；研究制申请须提交研究计划书并联系导师；课程制须满足先修课程要求。',
    scholarship_available: true,
    scholarship_note_zh:
      'MyBrain15硕士奖学金（马来西亚政府提供，国际生可申请部分资助）；UKM研究生助研金（RA）；FTSM学院奖学金；建议申请时同步联系潜在导师以获得GRA资助。',
    curriculum_zh:
      '核心课程（课程制）：高级算法与复杂性理论、机器学习与数据挖掘、分布式系统与云计算、高级数据库系统、网络安全与密码学、软件架构与设计模式、研究方法论、专题研究/论文（Research Paper）；选修方向：人工智能、大数据、软件工程。',
    career_prospects_zh:
      '高级软件工程师、AI研究员、数据科学家、IT架构师、大学讲师/研究员、科技公司研发总监。',
    application_materials_zh:
      '在线申请表（UKM研究生系统）；护照复印件；学士学位成绩单与证书（认证件）；英语成绩证明（IELTS/TOEFL）；研究计划书（研究制）；推荐信2封；个人陈述；相关工作经验证明（如有）；申请费收据。',
    additional_requirements_zh:
      '研究制申请须提前与FTSM导师联系并获得接收意向；课程制申请视名额先到先得。',
    accreditation_zh:
      'MQA认证；UKM研究生院（SPKP）监管。',
    application_deadline_note:
      '3月入学：上一年12月前提交；9月入学：当年6月前提交；以UKM SPKP官网公告为准。',
  },
  {
    name_en: 'Master of Information Technology (MIT)',
    name_zh: '信息技术硕士（MIT）',
    degree_level: 'master',
    faculty_en: 'Faculty of Information Science & Technology (FTSM)',
    faculty_zh: '信息科学与技术学院（FTSM）',
    field_category: 'Computing & IT',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 23400,
    tuition_international_cny_estimate: cny(23400),
    tuition_note: '首学期RM 12,760，后续学期RM 11,350/学期；2年总学费约RM 46,810（来源：UKM FSK/FTSM官方学费页面）',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '申请人须持有IT、计算机科学或相关领域学士学位（CGPA≥2.75/4.00）；英语：IELTS 6.0或TOEFL iBT 79；具备相关行业工作经验者优先。',
    scholarship_available: true,
    scholarship_note_zh:
      'MyBrain15硕士奖学金；UKM研究生资助；部分企业合作奖学金（如马来西亚科技部MOSTI项目）；建议申请时咨询FTSM研究生事务处。',
    curriculum_zh:
      '核心课程：IT管理与战略、企业架构设计、信息安全管理（ISO 27001）、数据治理与合规、云计算服务管理、数字化转型策略、IT项目管理（PMP框架）、智能系统应用、研究方法论、论文/专题项目。',
    career_prospects_zh:
      'IT经理、企业CTO/CIO助理、信息安全主管、IT咨询顾问、数字化转型专家、科技创业者。',
    application_materials_zh:
      '在线申请表（UKM研究生系统）；护照复印件；学士成绩单与证书（认证件）；英语成绩证明；推荐信2封；个人陈述；工作经验证明；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；UKM研究生院（SPKP）监管；部分课程对标PMI国际项目管理标准。',
    application_deadline_note:
      '3月入学：上一年12月前提交；9月入学：当年6月前提交；以UKM SPKP官网公告为准。',
  },
  {
    name_en: 'PhD in Computer Science',
    name_zh: '计算机科学哲学博士（PhD）',
    degree_level: 'phd',
    faculty_en: 'Faculty of Information Science & Technology (FTSM)',
    faculty_zh: '信息科学与技术学院（FTSM）',
    field_category: 'Computing & IT',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 24000,
    tuition_international_cny_estimate: cny(24000),
    tuition_note: '首学期RM 13,440，后续学期RM 11,730/学期；3年总学费约RM 72,090（来源：UKM FSK/FTSM官方学费页面）',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '申请人须持有计算机科学或相关领域硕士学位（CGPA≥3.0或同等资历）；英语：IELTS 6.0或TOEFL iBT 79；须提交详细研究计划书（6-10页）并提前联系FTSM导师获得接收意向函；具备相关研究发表经历者优先。',
    scholarship_available: true,
    scholarship_note_zh:
      'MyBrain15博士奖学金（每月津贴+学费资助）；UKM研究助研金（GRA/GRF）；国际伊斯兰大学合作奖学金；马来西亚棕榈油委员会MPOB-UKM联合资助（特定研究方向）；建议与导师共同申请外部研究经费。',
    curriculum_zh:
      '研究型学位，无固定修课要求；研究方向涵盖：人工智能与机器学习、网络安全、自然语言处理、计算机视觉、生物信息学计算、高性能计算、物联网与边缘计算；须完成原创研究论文并通过答辩委员会审核。',
    career_prospects_zh:
      '大学教授/副教授、国家级AI研究所研究员、科技公司首席科学家、政府智库高级顾问、创业（深度科技领域）。',
    application_materials_zh:
      '在线申请表（UKM研究生系统）；护照复印件；硕士学位成绩单与证书（认证件）；英语成绩证明；研究计划书（6-10页，含研究问题、方法论、预期成果）；导师接收意向函；推荐信2封；学术简历（CV）；相关发表论文列表（如有）；申请费收据。',
    additional_requirements_zh:
      '须提前通过邮件联系FTSM相关研究方向的副教授/教授，获得接收意向后方可正式提交申请。',
    accreditation_zh:
      'MQA认证；UKM研究生院（SPKP）监管；UKM在THE世界大学排名计算机科学领域位列全球前列。',
    application_deadline_note:
      '全年滚动接受申请，正式入学时间为3月或9月；建议提前3-6个月联系导师并准备申请材料。',
  },
];

// ============================================================================
// FACULTY OF ENGINEERING & BUILT ENVIRONMENT (FKAB)
// 工程与建筑环境学院
// ============================================================================

const fkabPrograms: UKMProgram[] = [
  {
    name_en: 'Bachelor of Chemical Engineering (Hons)',
    name_zh: '化学工程荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Engineering & Built Environment (FKAB)',
    faculty_zh: '工程与建筑环境学院（FKAB）',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 16500,
    tuition_international_cny_estimate: cny(16500),
    tuition_note: '约16,500 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level（化学、数学及物理/生物，B级或以上）、UEC（含化学、物理、数学至少5B）、STPM（CGPA≥2.00，含化学与数学）或UKM认可基础文凭；英语：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生奖学金（部分学费减免）；马来西亚国家石油公司（PETRONAS）奖学金（特定方向）；ASEAN奖学金；MyBrain15（研究生阶段）。',
    curriculum_zh:
      '核心课程：工程数学、工程化学、热力学与传热、流体力学、反应工程、分离过程、过程控制与仪器、化工安全与环境、聚合物与材料工程、石油精炼技术、可持续化工工艺、工业实习（6个月）与毕业设计。',
    career_prospects_zh:
      '化工工程师、石油与天然气工程师、过程工程师、环境工程师、生物技术工程师、品质控制工程师。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件；高中及以上成绩单与证书（认证件）；英语成绩证明；个人陈述；推荐信1封；护照照片；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；马来西亚工程师委员会（BEM）专业认证；IChemE（英国化学工程师学会）联系认证。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Bachelor of Civil Engineering (Hons)',
    name_zh: '土木工程荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Engineering & Built Environment (FKAB)',
    faculty_zh: '工程与建筑环境学院（FKAB）',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 16000,
    tuition_international_cny_estimate: cny(16000),
    tuition_note: '约16,000 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level（数学、物理，B级或以上）、UEC（含数学与物理至少5B）、STPM（CGPA≥2.00，含数学与物理）或UKM认可基础文凭；英语：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生奖学金；ASEAN奖学金；马来西亚公共工程局（JKR）合作奖学金；MyBrain15（研究生阶段）。',
    curriculum_zh:
      '核心课程：工程数学、材料力学、结构分析、水文学与水资源工程、岩土力学、交通工程、施工技术与管理、建筑信息模型（BIM）、环境工程、钢筋混凝土设计、预应力混凝土、工业实习（6个月）与毕业设计。',
    career_prospects_zh:
      '土木工程师、结构工程师、项目经理、道路与桥梁工程师、水资源工程师、建筑开发商技术顾问。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件；高中及以上成绩单与证书（认证件）；英语成绩证明；个人陈述；推荐信1封；护照照片；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；马来西亚工程师委员会（BEM）专业认证；可申请马来西亚工程师注册（P.Eng）。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Bachelor of Electrical, Electronics & Systems Engineering (Hons)',
    name_zh: '电气、电子与系统工程荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Engineering & Built Environment (FKAB)',
    faculty_zh: '工程与建筑环境学院（FKAB）',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 17000,
    tuition_international_cny_estimate: cny(17000),
    tuition_note: '约17,000 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level（数学、物理，B级或以上）、UEC（含数学与物理至少5B）、STPM（CGPA≥2.00，含数学与物理）或UKM认可基础文凭；英语：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生奖学金；Tenaga Nasional Berhad（TNB）奖学金（电气方向）；ASEAN奖学金；MyBrain15（研究生阶段）。',
    curriculum_zh:
      '核心课程：电路分析、电磁学、模拟与数字电子学、微处理器系统、信号与系统、控制工程、电力系统、嵌入式系统设计、通信工程、可编程逻辑控制器（PLC）、电力电子、工业实习（6个月）与毕业设计。',
    career_prospects_zh:
      '电气工程师、电子工程师、控制系统工程师、通信工程师、电力系统工程师、半导体/自动化设备工程师。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件；高中及以上成绩单与证书（认证件）；英语成绩证明；个人陈述；推荐信1封；护照照片；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；马来西亚工程师委员会（BEM）专业认证；IEEE（电气与电子工程师学会）课程对标。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Bachelor of Mechanical Engineering (Hons)',
    name_zh: '机械工程荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Engineering & Built Environment (FKAB)',
    faculty_zh: '工程与建筑环境学院（FKAB）',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 16500,
    tuition_international_cny_estimate: cny(16500),
    tuition_note: '约16,500 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level（数学、物理，B级或以上）、UEC（含数学与物理至少5B）、STPM（CGPA≥2.00，含数学与物理）或UKM认可基础文凭；英语：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生奖学金；PROTON/Perodua行业奖学金（汽车工程方向）；ASEAN奖学金；MyBrain15（研究生阶段）。',
    curriculum_zh:
      '核心课程：工程数学、工程力学、热力学、流体力学、材料科学与工程、机械设计、制造工艺、自动控制系统、计算机辅助设计（CAD）、有限元分析（FEA）、工业机器人技术、工业实习（6个月）与毕业设计。',
    career_prospects_zh:
      '机械工程师、汽车工程师、制造工程师、能源工程师、航空维修工程师、机器人与自动化工程师。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件；高中及以上成绩单与证书（认证件）；英语成绩证明；个人陈述；推荐信1封；护照照片；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；马来西亚工程师委员会（BEM）专业认证；IMechE（英国机械工程师学会）联系认证。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Master of Engineering (MEng)',
    name_zh: '工程硕士（MEng）',
    degree_level: 'master',
    faculty_en: 'Faculty of Engineering & Built Environment (FKAB)',
    faculty_zh: '工程与建筑环境学院（FKAB）',
    field_category: 'Engineering',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 20000,
    tuition_international_cny_estimate: cny(20000),
    tuition_note: '约20,000 MYR/项目总学费（课程制）；研究制按年计约12,000 MYR/年；以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '申请人须持有工程相关领域学士学位（CGPA≥2.75/4.00，BEM认证专业优先）；英语：IELTS 6.5或TOEFL iBT 90；研究制须提交研究计划书并联系导师；具备专业工程经验者优先（可弥补学术资历不足）。',
    scholarship_available: true,
    scholarship_note_zh:
      'MyBrain15硕士奖学金；UKM研究助研金（GRA）；马来西亚工程师学会（IEM）研究资助；PETRONAS研究合作经费；建议联系FKAB研究生事务处了解最新资助信息。',
    curriculum_zh:
      '课程制核心模块（按专业方向）：高级工程分析、工程研究方法论、可持续工程与环境、工程管理与领导力、工程创新与技术转化、专题论文/工程项目报告；研究方向包括：绿色建筑、纳米材料、可再生能源系统、智能制造。',
    career_prospects_zh:
      '专业工程师（PE）、研发工程师、工程顾问、大学讲师、工程部门主管、基础设施项目总监。',
    application_materials_zh:
      '在线申请表（UKM研究生系统）；护照复印件；学士成绩单与证书（认证件）；英语成绩证明；研究计划书（研究制）；推荐信2封；工作经验证明；申请费收据。',
    additional_requirements_zh:
      '申请BEM注册专业工程师（P.Eng）须在获得学位后积累相关工程实践经验并通过职业考核。',
    accreditation_zh:
      'MQA认证；BEM专业认证；研究成果在国际工程期刊发表（研究制）。',
    application_deadline_note:
      '3月入学：上一年12月前提交；9月入学：当年6月前提交；以UKM SPKP官网公告为准。',
  },
  {
    name_en: 'PhD in Engineering',
    name_zh: '工程哲学博士（PhD）',
    degree_level: 'phd',
    faculty_en: 'Faculty of Engineering & Built Environment (FKAB)',
    faculty_zh: '工程与建筑环境学院（FKAB）',
    field_category: 'Engineering',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 24000,
    tuition_international_cny_estimate: cny(24000),
    tuition_note: '首学期RM 13,440，后续学期RM 11,730/学期；3年总学费约RM 72,090（来源：UKM FSK/FTSM官方学费页面）',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '申请人须持有工程相关领域硕士学位（CGPA≥3.0或同等资历）；英语：IELTS 6.0或TOEFL iBT 79；须提交原创研究计划书（6-10页）并提前联系导师获得接收意向函；具有已发表研究论文者优先。',
    scholarship_available: true,
    scholarship_note_zh:
      'MyBrain15博士奖学金（每月生活津贴+部分学费减免）；UKM高级研究员奖学金（SLAB/SLAI）；马来西亚国家科学院奖学金；马来西亚工程研究委员会ERGS/FRGS科研经费。',
    curriculum_zh:
      '研究型学位，无固定修课要求；研究方向涵盖：可持续与绿色工程、纳米材料与纳米工程、可再生能源与电力系统、智能交通系统、生物医学工程、先进制造工艺、结构与土工地震工程；须完成原创研究论文并通过答辩委员会审核（viva voce）。',
    career_prospects_zh:
      '大学教授/副教授、国家级研究所首席研究员、工程咨询公司技术总监、政府科技政策顾问、国际工程组织委员。',
    application_materials_zh:
      '在线申请表（UKM研究生系统）；护照复印件；硕士成绩单与证书（认证件）；英语成绩证明；研究计划书（6-10页）；导师接收意向函；推荐信2封；学术简历（CV）；发表论文列表（如有）；申请费收据。',
    additional_requirements_zh:
      '须提前通过邮件联系FKAB相关方向教授并获得接收意向，申请强烈建议先与导师建立沟通。',
    accreditation_zh:
      'MQA认证；BEM认可；博士论文须在国际期刊（SCI/Scopus索引）发表至少一篇研究论文。',
    application_deadline_note:
      '全年滚动接受申请，入学时间为3月或9月；建议提前6个月联系导师并准备申请材料。',
  },
];

// ============================================================================
// FACULTY OF ECONOMICS & MANAGEMENT (FEP)
// 经济与管理学院
// ============================================================================

const fepPrograms: UKMProgram[] = [
  {
    name_en: 'Bachelor of Economics (Hons)',
    name_zh: '经济学荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Economics & Management (FEP)',
    faculty_zh: '经济与管理学院（FEP）',
    field_category: 'Economics & Business',
    duration_years: 3,
    language_of_instruction: 'Malay / English',
    intake_months: [6, 7],
    tuition_international_myr: 13500,
    tuition_international_cny_estimate: cny(13500),
    tuition_note: '约13,500 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level（经济学、数学，B级或以上）、UEC（含数学至少5B）、STPM（CGPA≥2.00，含经济学/数学）或UKM认可基础文凭；英语：IELTS 6.0或TOEFL iBT 80；马来语基础知识有助于部分课程学习。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生奖学金；ASEAN奖学金；Yayasan Pelajaran MARA奖学金（马来西亚学生）；MyBrain15（研究生阶段）。',
    curriculum_zh:
      '核心课程：微观经济学、宏观经济学、计量经济学、货币与银行经济学、发展经济学、劳动经济学、国际贸易理论、马来西亚经济政策、统计学与数据分析、经济研究方法、公共财政学、毕业论文。',
    career_prospects_zh:
      '经济分析师、中央银行研究员、政府经济政策顾问、金融市场研究员、国际贸易专员、学术研究人员。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件；高中及以上成绩单与证书（认证件）；英语成绩证明；个人陈述；推荐信1封；护照照片；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；UKM FEP为马来西亚顶级经济学院之一，与马来西亚国家银行（BNM）及财政部有学术合作。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Bachelor of Business Administration (Hons) — Islamic Finance',
    name_zh: '工商管理荣誉学士（伊斯兰金融方向）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Economics & Management (FEP)',
    faculty_zh: '经济与管理学院（FEP）',
    field_category: 'Economics & Business',
    duration_years: 3,
    language_of_instruction: 'Malay / English',
    intake_months: [6, 7],
    tuition_international_myr: 13000,
    tuition_international_cny_estimate: cny(13000),
    tuition_note: '约13,000 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level（商科/数学/经济学，B级或以上）、UEC（含数学至少5B）、STPM（CGPA≥2.00）或UKM认可基础文凭；英语：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生奖学金；马来西亚伊斯兰发展局（JAKIM）奖学金；OIC成员国学生优惠；MyBrain15（研究生阶段）。',
    curriculum_zh:
      '核心课程：伊斯兰金融原理（Shariah合规）、伊斯兰银行业务、Murabahah与Ijarah融资工具、Sukuk（伊斯兰债券）市场、Takaful（伊斯兰保险）、伊斯兰资本市场监管、公司治理与伊斯兰商业伦理、财务管理、市场营销管理、人力资源管理、毕业论文/实习。',
    career_prospects_zh:
      '伊斯兰银行客户经理、Shariah合规审查员、伊斯兰基金经理、伊斯兰金融咨询顾问、中央银行监管人员（BNM伊斯兰金融部门）、学术研究人员。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件；高中及以上成绩单与证书（认证件）；英语成绩证明；个人陈述；推荐信1封；护照照片；申请费收据。',
    additional_requirements_zh:
      '伊斯兰金融方向部分课程以马来语授课，建议申请人具备基础马来语能力；非穆斯林学生亦可申请。',
    accreditation_zh:
      'MQA认证；马来西亚伊斯兰金融教育委员会（CIFP-ISIF）认可；与马来西亚证券委员会（SC）伊斯兰资本市场课程对标。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Bachelor of Business Administration (Hons) — Finance',
    name_zh: '工商管理荣誉学士（财务方向）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Economics & Management (FEP)',
    faculty_zh: '经济与管理学院（FEP）',
    field_category: 'Economics & Business',
    duration_years: 3,
    language_of_instruction: 'Malay / English',
    intake_months: [6, 7],
    tuition_international_myr: 13000,
    tuition_international_cny_estimate: cny(13000),
    tuition_note: '约13,000 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level（商科/数学/经济学，B级或以上）、UEC（含数学至少5B）、STPM（CGPA≥2.00）或UKM认可基础文凭；英语：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生奖学金；ASEAN奖学金；Bursa Malaysia证券交易所奖学金（财务/金融方向）；MyBrain15（研究生阶段）。',
    curriculum_zh:
      '核心课程：财务管理、公司财务、投资分析与组合管理、金融市场与机构、衍生品与风险管理、企业估值、财务报表分析、国际财务管理、市场营销管理、人力资源管理、商业统计与数据分析、毕业论文/实习。',
    career_prospects_zh:
      '金融分析师、投资银行助理、证券经纪人、企业财务规划师、风险管理专员、注册理财规划师（CFP）。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件；高中及以上成绩单与证书（认证件）；英语成绩证明；个人陈述；推荐信1封；护照照片；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；马来西亚证券委员会（SC）认可；部分课程与CFA Institute课程框架对标。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Master of Business Administration (MBA)',
    name_zh: '工商管理硕士（MBA）',
    degree_level: 'master',
    faculty_en: 'Faculty of Economics & Management (FEP)',
    faculty_zh: '经济与管理学院（FEP）',
    field_category: 'Economics & Business',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 32000,
    tuition_international_cny_estimate: cny(32000),
    tuition_note: '约32,000 MYR/项目总学费（课程制，约1.5年）；以FEP/GSB官方公布为准',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '申请人须持有任何领域学士学位（CGPA≥2.75/4.00）；须具备至少2年全职工作经验（管理类职位优先）；英语：IELTS 6.0或TOEFL iBT 79；部分情况下工作经验丰富者可弥补学术资历不足（由学院审核）。',
    scholarship_available: true,
    scholarship_note_zh:
      'MyBrain15硕士奖学金（政府资助，月补贴+学费减免）；UKM研究生优秀奖学金；马来西亚人才机构（TalentCorp）技能提升资助；部分雇主赞助（企业学习协议）。',
    curriculum_zh:
      '核心课程：管理经济学、组织行为与领导力、财务管理与分析、市场营销策略、运营与供应链管理、商业研究方法、战略管理、企业社会责任与可持续发展、创业与创新管理；选修：伊斯兰商业与金融、数字经济与电商、国际商务。',
    career_prospects_zh:
      '高级管理人员（GM/VP）、企业战略顾问、创业公司CEO、公共机构高级管理员、金融业高管、跨国企业区域经理。',
    application_materials_zh:
      '在线申请表（UKM研究生系统）；护照复印件；学士成绩单与证书（认证件）；英语成绩证明（IELTS/TOEFL）；工作简历（CV）；工作证明/推荐信（雇主）；推荐信2封（学术或职业）；个人陈述（管理经验与职业规划，约800字）；申请费收据。',
    additional_requirements_zh:
      '申请人须参加FEP MBA甄选面试（可线上进行）；GMAT/GRE成绩可提交作为加分材料，但非必须。',
    accreditation_zh:
      'MQA认证；UKM FEP MBA获AACSB申请中（部分年份）；与马来西亚管理学院（MIM）合作认证。',
    application_deadline_note:
      '3月入学：上一年12月前提交；9月入学：当年6月前提交；以UKM FEP研究生网站公告为准。',
  },
  {
    name_en: 'Master of Economics',
    name_zh: '经济学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Economics & Management (FEP)',
    faculty_zh: '经济与管理学院（FEP）',
    field_category: 'Economics & Business',
    duration_years: 1.5,
    language_of_instruction: 'English / Malay',
    intake_months: [3, 9],
    tuition_international_myr: 18000,
    tuition_international_cny_estimate: cny(18000),
    tuition_note: '约18,000 MYR/项目总学费（课程制）；研究制按年计约10,000 MYR/年；以FEP官方公布为准',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '申请人须持有经济学、商科或相关领域学士学位（CGPA≥2.75/4.00）；英语：IELTS 6.0或TOEFL iBT 79；研究制申请须提交研究计划书并联系导师。',
    scholarship_available: true,
    scholarship_note_zh:
      'MyBrain15硕士奖学金；UKM研究生助研金（RA）；马来西亚国家银行（BNM）研究奖学金（货币/金融方向）；建议申请时联系FEP研究生事务处。',
    curriculum_zh:
      '核心课程（课程制）：高级微观经济学、高级宏观经济学、计量经济学方法、发展与转型经济学、国际贸易与金融、政策分析与评估、经济研究方法论、专题论文/研究报告；选修：劳动经济学、健康经济学、环境经济学。',
    career_prospects_zh:
      '经济政策分析师、中央银行研究员、国际组织经济顾问（世界银行/亚行）、大学经济学讲师、企业战略经济师。',
    application_materials_zh:
      '在线申请表（UKM研究生系统）；护照复印件；学士成绩单与证书（认证件）；英语成绩证明；研究计划书（研究制）；推荐信2封；个人陈述；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；UKM FEP为马来西亚顶级经济研究中心之一，与马来西亚国家银行、经济计划单位（EPU）有研究合作。',
    application_deadline_note:
      '3月入学：上一年12月前提交；9月入学：当年6月前提交；以UKM SPKP官网公告为准。',
  },
  {
    name_en: 'PhD in Economics',
    name_zh: '经济学哲学博士（PhD）',
    degree_level: 'phd',
    faculty_en: 'Faculty of Economics & Management (FEP)',
    faculty_zh: '经济与管理学院（FEP）',
    field_category: 'Economics & Business',
    duration_years: 3,
    language_of_instruction: 'English / Malay',
    intake_months: [3, 9],
    tuition_international_myr: 24000,
    tuition_international_cny_estimate: cny(24000),
    tuition_note: '首学期RM 13,440，后续学期RM 11,730/学期；3年总学费约RM 72,090（来源：UKM FSK/FTSM官方学费页面）',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '申请人须持有经济学或相关领域硕士学位（CGPA≥3.0或同等资历）；英语：IELTS 6.0或TOEFL iBT 79；须提交详细研究计划书并提前联系FEP导师获得接收意向函；具备已发表研究论文或工作论文者优先。',
    scholarship_available: true,
    scholarship_note_zh:
      'MyBrain15博士奖学金（月补贴约2,000 MYR+部分学费资助）；UKM高级研究员奖学金（SLAB）；马来西亚国家银行研究基金（BNM Research Grant）；FRGS/PRGS科研项目资助。',
    curriculum_zh:
      '研究型学位；研究方向涵盖：发展经济学、伊斯兰经济学与金融、劳动与人力资本经济学、货币政策与宏观稳定、国际贸易与全球化、健康与人口经济学、环境与资源经济学；须完成原创研究论文并通过答辩委员会审核。',
    career_prospects_zh:
      '大学经济学教授、政府首席经济师、国际货币基金组织/世界银行经济顾问、智库高级研究员、中央银行政策制定者。',
    application_materials_zh:
      '在线申请表（UKM研究生系统）；护照复印件；硕士成绩单与证书（认证件）；英语成绩证明；研究计划书（6-10页）；导师接收意向函；推荐信2封；学术简历（CV）；发表论文列表（如有）；申请费收据。',
    additional_requirements_zh:
      '须提前与FEP教授通过邮件建立联系并获得接收意向，再正式提交申请。',
    accreditation_zh:
      'MQA认证；UKM FEP博士毕业生在国内顶级大学及国际机构就职比率较高；论文须在Scopus/ISI索引期刊发表。',
    application_deadline_note:
      '全年滚动接受申请，入学时间为3月或9月；建议提前6个月联系导师并准备申请材料。',
  },
];

// ============================================================================
// UKM MEDICAL CENTRE / FACULTY OF MEDICINE (PPUKM)
// UKM医学中心 / 医学院
// ============================================================================

const ppukmPrograms: UKMProgram[] = [
  {
    name_en: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
    name_zh: '内外全科医学学士（MBBS）',
    degree_level: 'bachelor',
    faculty_en: 'UKM Medical Centre / Faculty of Medicine (PPUKM)',
    faculty_zh: 'UKM医学中心 / 医学院（PPUKM）',
    field_category: 'Medicine & Health Sciences',
    duration_years: 5,
    language_of_instruction: 'English',
    intake_months: [7],
    tuition_international_myr: 40000,
    tuition_international_cny_estimate: cny(40000),
    tuition_note: '约40,000 MYR/年（国际生），5年学制；以PPUKM官方公布为准，费用可能逐年调整',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level（生物、化学、物理/数学，须A或A*级）、UEC（含生物、化学、物理至少6A）、STPM（含生物与化学，CGPA≥3.85）或UKM认可预医学/基础课程；英语：IELTS 6.5或TOEFL iBT 90；须通过医学面试（医疗伦理、批判性思维、个人素质考核）；年龄通常不超过25岁（提交申请时）；体检合格。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM医学院国际生奖学金（名额极为有限，竞争激烈）；马来西亚政府JPA医学奖学金（限马来西亚公民）；ASEAN医学生奖学金；部分国家政府赞助奖学金（中国学生可咨询马来西亚中国大使馆教育组）；建议尽早申请。',
    curriculum_zh:
      '第一至二年（基础医学）：人体解剖学、生理学、生物化学、医学微生物学、病理学、药理学、医学伦理与职业素养；第三年（临床前）：内科学、外科学、妇产科学、儿科学、精神科学基础；第四至五年（临床轮转）：PPUKM附属医院各科室临床实习，包括内科、外科、妇产科、儿科、急诊科、家庭医学、社区医学；毕业考核：理论笔试+实际操作考核（OSCE）。',
    career_prospects_zh:
      '注册医生（马来西亚医学委员会MMC注册）、专科医生（完成驻院培训后）、医学研究员、公共卫生医生、医疗管理行政人员。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件（有效期≥24个月）；高中成绩单与公开考试证书（认证件）；英语成绩证明（IELTS/TOEFL）；个人陈述（为何选择医学，约800字）；推荐信2封（理科教师或医疗专业人士）；体检报告（体检合格证明）；疫苗接种记录；近期彩色护照照片2张；申请费收据。',
    additional_requirements_zh:
      '须通过PPUKM医学院甄选面试（可能包括多站式迷你面试MMI或传统面试，以当年通知为准）；国际生须提供本国无犯罪证明；部分国籍学生须额外提供经济担保证明。',
    accreditation_zh:
      'MQA认证；马来西亚医学委员会（MMC）认证；英国医学总会（GMC）认可（通过相关评估可申请英国执照）；世界卫生组织（WHO）医学院名录收录。',
    application_deadline_note:
      '7月入学：通常当年1-3月开放申请，竞争激烈，建议尽早提交并准备面试；以PPUKM招生办官方公告为准。',
  },
  {
    name_en: 'Master of Internal Medicine (MMed Internal Medicine)',
    name_zh: '内科医学硕士（MMed内科）',
    degree_level: 'master',
    faculty_en: 'UKM Medical Centre / Faculty of Medicine (PPUKM)',
    faculty_zh: 'UKM医学中心 / 医学院（PPUKM）',
    field_category: 'Medicine & Health Sciences',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 25000,
    tuition_international_cny_estimate: cny(25000),
    tuition_note: '约25,000 MYR/年（国际生，临床专科培训项目），4年制；以PPUKM官方公布为准',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: null,
    requirements_zh:
      '申请人须持有MBBS/MBChB或同等医学学士学位，并在马来西亚医学委员会（MMC）完成注册；须具备至少1年住院医师（Housemanship）经验；英语：IELTS 6.5或TOEFL iBT 90（非英语母语国家申请人）；须通过PPUKM专科培训遴选面试。',
    scholarship_available: false,
    scholarship_note_zh:
      '国际生通常须自费；部分中国、东盟国家政府提供专科医学培训资助，建议咨询所在国卫生部或大使馆；PPUKM偶有研究资助供结合科研的培训医生申请。',
    curriculum_zh:
      '临床培训涵盖：内科各亚专科（心脏病学、呼吸科、消化科、肾脏科、神经科、内分泌科、感染病科、风湿科）轮转；研究方法与循证医学；医学教育学（Teaching Skills）；专科学术会议参与；须完成研究项目/发表论文；通过马来西亚内科医学考试（MRCP马来西亚适用）。',
    career_prospects_zh:
      '内科专科顾问医生、亚专科医生（心脏科/肾脏科等进一步深造）、医学院讲师、医院内科主任、公共卫生政策顾问。',
    application_materials_zh:
      '在线申请表（UKM研究生系统）；护照复印件；医学学位证书与成绩单（认证件）；MMC注册证明；住院医师完成证明；英语成绩证明；推荐信2封（专科顾问医生）；个人陈述；申请费收据。',
    additional_requirements_zh:
      '非马来西亚籍医生须向马来西亚卫生部（MOH）申请专科培训许可；须通过PPUKM内科专科遴选委员会面试。',
    accreditation_zh:
      'MQA认证；马来西亚医学专科学院（CMPA）认可；MMed学位获马来西亚医学委员会（MMC）承认为专科资格。',
    application_deadline_note:
      '3月入学：上一年12月前提交；9月入学：当年6月前提交；名额极为有限，建议尽早申请；以PPUKM研究生医学教育部门公告为准。',
  },
  {
    name_en: 'PhD in Medical Sciences',
    name_zh: '医学科学哲学博士（PhD）',
    degree_level: 'phd',
    faculty_en: 'UKM Medical Centre / Faculty of Medicine (PPUKM)',
    faculty_zh: 'UKM医学中心 / 医学院（PPUKM）',
    field_category: 'Medicine & Health Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 24000,
    tuition_international_cny_estimate: cny(24000),
    tuition_note: '首学期RM 13,440，后续学期RM 11,730/学期；3年总学费约RM 72,090（来源：UKM FSK/FTSM官方学费页面）',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '申请人须持有医学、生物医学科学或相关领域硕士学位（CGPA≥3.0或同等资历）；英语：IELTS 6.0或TOEFL iBT 79；须提交详细研究计划书并提前联系PPUKM导师获得接收意向函；具备相关基础医学研究经验者优先。',
    scholarship_available: true,
    scholarship_note_zh:
      'MyBrain15博士奖学金；UKM高级研究员奖学金（SLAB）；马来西亚医学研究理事会（NMRR）资助；马来西亚棕榈油委员会MPOB-UKM联合研究基金（健康相关方向）；NIH美国国立卫生研究院合作项目（特定方向）。',
    curriculum_zh:
      '研究型学位；研究方向涵盖：肿瘤生物学与转化医学、干细胞与再生医学、传染病学与流行病学、神经科学、基因组学与精准医学、免疫学、生物材料与医疗器械、公共卫生与流行病学、生物医学工程；须完成原创研究论文并在国际期刊发表。',
    career_prospects_zh:
      '大学医学院教授、国家医学研究所首席研究员、生物制药公司研发总监、国际卫生组织研究顾问（WHO/UN）、医学教育管理者。',
    application_materials_zh:
      '在线申请表（UKM研究生系统）；护照复印件；硕士成绩单与证书（认证件）；英语成绩证明；研究计划书（6-10页，含研究假设、方法、预期贡献）；导师接收意向函；推荐信2封；学术简历（CV）；发表论文列表；申请费收据。',
    additional_requirements_zh:
      '须提前联系PPUKM相关研究方向教授并获得接收意向；实验室类研究须确认实验室资源可用性。',
    accreditation_zh:
      'MQA认证；PPUKM博士研究成果在Cell、Lancet、Nature Medicine等顶级期刊均有发表记录；论文须在Scopus/ISI索引期刊发表至少一篇。',
    application_deadline_note:
      '全年滚动接受申请，入学时间为3月或9月；建议提前6个月联系导师并准备材料。',
  },
];

// ============================================================================
// FACULTY OF SCIENCE & TECHNOLOGY (FST)
// 理学与技术学院
// ============================================================================

const fstPrograms: UKMProgram[] = [
  {
    name_en: 'Bachelor of Science (Hons) — Biology',
    name_zh: '理学荣誉学士（生物学）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Science & Technology (FST)',
    faculty_zh: '理学与技术学院（FST）',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English / Malay',
    intake_months: [6, 7],
    tuition_international_myr: 12500,
    tuition_international_cny_estimate: cny(12500),
    tuition_note: '约12,500 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level（生物、化学，B级或以上）、UEC（含生物与化学至少5B）、STPM（CGPA≥2.00，含生物与化学）或UKM认可基础文凭；英语：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生部分奖学金；ASEAN奖学金；马来西亚自然资源与环境部奖学金；MyBrain15（研究生阶段）。',
    curriculum_zh:
      '核心课程：细胞生物学、遗传学、生态学、植物学、动物学、微生物学、分子生物学技术、生物化学、生物统计学、生物信息学导论、环境生物学、毕业论文/研究项目。',
    career_prospects_zh:
      '生物研究员、环境顾问、生物技术公司研发人员、中学生物教师、食品安全检验员、自然保护管理员。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件；高中及以上成绩单与证书（认证件）；英语成绩证明；个人陈述；推荐信1封；护照照片；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；UKM FST为马来西亚顶级理学院之一，生物学研究获国际认可。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Bachelor of Science (Hons) — Chemistry',
    name_zh: '理学荣誉学士（化学）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Science & Technology (FST)',
    faculty_zh: '理学与技术学院（FST）',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English / Malay',
    intake_months: [6, 7],
    tuition_international_myr: 12500,
    tuition_international_cny_estimate: cny(12500),
    tuition_note: '约12,500 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level（化学、数学，B级或以上）、UEC（含化学与数学至少5B）、STPM（CGPA≥2.00，含化学与数学）或UKM认可基础文凭；英语：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生部分奖学金；ASEAN奖学金；马来西亚化学工业奖学金；MyBrain15（研究生阶段）。',
    curriculum_zh:
      '核心课程：有机化学、无机化学、物理化学、分析化学、高分子化学、电化学、量子化学、光谱分析技术（NMR/IR/MS）、绿色化学与可持续合成、化学研究方法、毕业论文/研究项目。',
    career_prospects_zh:
      '化学研究员、化工厂分析化学师、食品与药品质检员、材料科学研究员、环境分析师、专利工程师（化学领域）。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件；高中及以上成绩单与证书（认证件）；英语成绩证明；个人陈述；推荐信1封；护照照片；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；马来西亚化学学会（IKM）认可；UKM化学系研究在纳米化学、天然产物方向具有国际影响力。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Bachelor of Science (Hons) — Physics',
    name_zh: '理学荣誉学士（物理学）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Science & Technology (FST)',
    faculty_zh: '理学与技术学院（FST）',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English / Malay',
    intake_months: [6, 7],
    tuition_international_myr: 12500,
    tuition_international_cny_estimate: cny(12500),
    tuition_note: '约12,500 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level（物理、数学，B级或以上）、UEC（含物理与数学至少5B）、STPM（CGPA≥2.00，含物理与数学）或UKM认可基础文凭；英语：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生部分奖学金；ASEAN奖学金；马来西亚原子能委员会（Agensi Nuklear Malaysia）奖学金（核物理方向）；MyBrain15（研究生阶段）。',
    curriculum_zh:
      '核心课程：经典力学、量子力学、热力学与统计物理、电磁学、固态物理、光学与激光物理、核物理与辐射探测、计算物理（MATLAB/Python）、实验物理技术、天体物理学导论、应用物理专题、毕业论文/研究项目。',
    career_prospects_zh:
      '物理研究员、医学物理师（放射治疗）、半导体工程师、辐射防护专员、光电技术工程师、科技教育工作者。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件；高中及以上成绩单与证书（认证件）；英语成绩证明；个人陈述；推荐信1封；护照照片；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；马来西亚物理学会（IFM）认可；UKM物理系在材料物理与医学物理领域研究处于国内领先地位。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Bachelor of Science (Hons) — Mathematics',
    name_zh: '理学荣誉学士（数学）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Science & Technology (FST)',
    faculty_zh: '理学与技术学院（FST）',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English / Malay',
    intake_months: [6, 7],
    tuition_international_myr: 12000,
    tuition_international_cny_estimate: cny(12000),
    tuition_note: '约12,000 MYR/年（国际生），以学院官方公布为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '申请人须持有A-Level（数学，A或B级；进阶数学优先）、UEC（含数学至少5B）、STPM（CGPA≥2.00，含纯数学）或UKM认可基础文凭；英语：IELTS 6.0或TOEFL iBT 80。',
    scholarship_available: true,
    scholarship_note_zh:
      'UKM国际生部分奖学金；ASEAN奖学金；马来西亚数学协会奖学金；MyBrain15（研究生阶段）。',
    curriculum_zh:
      '核心课程：微积分（多元）、线性代数、常微分方程、实分析、复变函数、概率论与数理统计、数值分析、离散数学、数学建模、抽象代数（群论/环论）、数学优化、统计计算（R/SAS）、毕业论文/研究项目。',
    career_prospects_zh:
      '精算师（考取FSA/ASA资格后）、数据分析师、金融量化分析师、统计研究员、数学教师/讲师、运筹学分析师。',
    application_materials_zh:
      '在线申请表（UKM SPKP系统）；护照复印件；高中及以上成绩单与证书（认证件）；英语成绩证明；个人陈述；推荐信1封；护照照片；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；课程内容与马来西亚精算师学会（MAM）职业考试部分模块对标。',
    application_deadline_note:
      '6/7月入学：通常前一年10月至当年3月开放申请；以UKM官网SPKP系统公告为准。',
  },
  {
    name_en: 'Master of Science (MSc)',
    name_zh: '理学硕士（MSc）',
    degree_level: 'master',
    faculty_en: 'Faculty of Science & Technology (FST)',
    faculty_zh: '理学与技术学院（FST）',
    field_category: 'Natural Sciences',
    duration_years: 2,
    language_of_instruction: 'English / Malay',
    intake_months: [3, 9],
    tuition_international_myr: 17000,
    tuition_international_cny_estimate: cny(17000),
    tuition_note: '约17,000 MYR/项目总学费（课程制）；研究制约10,000 MYR/年；以FST官方公布为准',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '申请人须持有理学或相关领域学士学位（CGPA≥2.75/4.00）；英语：IELTS 6.0或TOEFL iBT 79；研究制申请须提交研究计划书并联系FST导师。',
    scholarship_available: true,
    scholarship_note_zh:
      'MyBrain15硕士奖学金；UKM研究助研金（GRA）；马来西亚科学技术创新部（MOSTI）研究资助；FST学院奖学金；建议申请时联系FST研究生事务处。',
    curriculum_zh:
      '按专业方向分设生物学、化学、物理、数学、应用科学等专业；研究方向涵盖：纳米材料、生物多样性与保育、有机合成化学、计算数学、辐射物理、生物信息学；须完成论文或研究报告并通过答辩。',
    career_prospects_zh:
      '科研机构研究员、高校讲师、生物技术/制药公司研发人员、环境顾问、高级数据分析师。',
    application_materials_zh:
      '在线申请表（UKM研究生系统）；护照复印件；学士成绩单与证书（认证件）；英语成绩证明；研究计划书（研究制）；推荐信2封；申请费收据。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；UKM FST研究成果在Scopus/Web of Science收录期刊发表活跃。',
    application_deadline_note:
      '3月入学：上一年12月前提交；9月入学：当年6月前提交；以UKM SPKP官网公告为准。',
  },
  {
    name_en: 'PhD in Science',
    name_zh: '理学哲学博士（PhD）',
    degree_level: 'phd',
    faculty_en: 'Faculty of Science & Technology (FST)',
    faculty_zh: '理学与技术学院（FST）',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English / Malay',
    intake_months: [3, 9],
    tuition_international_myr: 24000,
    tuition_international_cny_estimate: cny(24000),
    tuition_note: '首学期RM 13,440，后续学期RM 11,730/学期；3年总学费约RM 72,090（来源：UKM FSK/FTSM官方学费页面）',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '申请人须持有理学或相关领域硕士学位（CGPA≥3.0或同等资历）；英语：IELTS 6.0或TOEFL iBT 79；须提交研究计划书并提前联系FST导师获得接收意向函；具备相关研究发表经历者优先。',
    scholarship_available: true,
    scholarship_note_zh:
      'MyBrain15博士奖学金；UKM高级研究员奖学金（SLAB）；马来西亚国家科学研究基金（NSRF/FRGS）；MOSTI科研项目资助；建议与导师共同申请外部研究经费。',
    curriculum_zh:
      '研究型学位；研究方向涵盖：纳米科学与技术、生物多样性与生态保育、高分子与材料科学、计算化学、医学物理、数学建模与优化、生物信息学与系统生物学；须完成原创研究论文并在国际期刊发表。',
    career_prospects_zh:
      '大学科学教授、国家科研机构首席科学家、生物技术/纳米技术公司研发总监、政府科技政策顾问、国际学术合作研究员。',
    application_materials_zh:
      '在线申请表（UKM研究生系统）；护照复印件；硕士成绩单与证书（认证件）；英语成绩证明；研究计划书（6-10页）；导师接收意向函；推荐信2封；学术简历（CV）；发表论文列表（如有）；申请费收据。',
    additional_requirements_zh:
      '须提前通过邮件联系FST相关方向教授并获得接收意向，再正式提交申请。',
    accreditation_zh:
      'MQA认证；博士论文须在Scopus/ISI索引期刊发表至少一篇研究论文；UKM FST博士毕业生在东南亚高校及研究机构任职比率较高。',
    application_deadline_note:
      '全年滚动接受申请，入学时间为3月或9月；建议提前6个月联系导师并准备申请材料。',
  },
];

// ============================================================================
// GRADUATE SCHOOL OF BUSINESS (GSB)
// 商学研究生院
// ============================================================================

const gsbPrograms: UKMProgram[] = [
  {
    name_en: 'Executive MBA (EMBA)',
    name_zh: '高级管理人员工商管理硕士（EMBA）',
    degree_level: 'master',
    faculty_en: 'Graduate School of Business (GSB)',
    faculty_zh: '商学研究生院（GSB）',
    field_category: 'Business & Management',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 52000,
    tuition_international_cny_estimate: cny(52000),
    tuition_note: '约52,000 MYR/项目总学费（2年，模块制周末班）；以GSB官方公布为准，费用可能调整',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: null,
    requirements_zh:
      '申请人须持有任何领域学士学位；须具备至少5年全职工作经验（其中2年以上管理职责）；英语：IELTS 6.5或TOEFL iBT 90；须通过GSB EMBA甄选面试；GMAT/GRE成绩可作为加分材料（非强制）。',
    scholarship_available: true,
    scholarship_note_zh:
      'MyBrain15硕士奖学金（部分适用）；马来西亚人才机构HRD Corp培训资助（雇主申请）；GSB校友奖学金（UKM毕业生享学费折扣）；部分企业与GSB签订培训协议提供团体优惠。',
    curriculum_zh:
      '模块一（战略与领导力）：全球商业环境分析、战略领导力与变革管理、高管财务决策；模块二（运营与创新）：供应链与运营卓越、数字化转型与颠覆性创新、企业风险管理；模块三（市场与增长）：市场营销战略与品牌管理、创业生态系统与投资决策；模块四（整合）：跨文化商业谈判、企业社会责任与ESG战略、综合商业项目（Capstone Project）；选修：伊斯兰金融、区域商业研究。',
    career_prospects_zh:
      'C级高管（CEO/COO/CFO）、企业战略总监、创业公司创始人、政府高级管理官员、国际商业顾问、私募股权与风险投资合伙人。',
    application_materials_zh:
      '在线申请表（GSB系统）；护照复印件；学士成绩单与证书（认证件）；英语成绩证明（IELTS/TOEFL）；工作简历（CV，详细列出管理职责）；雇主推荐信2封；个人陈述（职业规划与报读动机，约1000字）；GMAT/GRE成绩（如有）；申请费收据。',
    additional_requirements_zh:
      '须参加GSB EMBA甄选面试（评估领导力、批判性思维与跨文化沟通能力）；课程以周末模块制授课，适合在职人士。',
    accreditation_zh:
      'MQA认证；UKM GSB为马来西亚顶级商学院之一；AACSB申请中（部分年份）；与欧洲顶级商学院（如ESCP/TBS Business School）有交换项目合作。',
    application_deadline_note:
      '3月入学：上一年12月前提交；9月入学：当年6月前提交；名额有限，建议尽早申请；以GSB官网公告为准。',
  },
  {
    name_en: 'Master of Management — Strategic Management Track',
    name_zh: '管理学硕士（战略管理方向）',
    degree_level: 'master',
    faculty_en: 'Graduate School of Business (GSB)',
    faculty_zh: '商学研究生院（GSB）',
    field_category: 'Business & Management',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 28000,
    tuition_international_cny_estimate: cny(28000),
    tuition_note: '约28,000 MYR/项目总学费（课程制，约1.5年）；以GSB官方公布为准',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: 2.75,
    requirements_zh:
      '申请人须持有任何领域学士学位（CGPA≥2.75/4.00）；须具备至少2年工作经验（管理职责优先）；英语：IELTS 6.5或TOEFL iBT 90；须通过GSB遴选面试。',
    scholarship_available: true,
    scholarship_note_zh:
      'MyBrain15硕士奖学金；HRD Corp雇主培训资助；GSB优秀学生奖学金；建议联系GSB招生办了解最新资助机会。',
    curriculum_zh:
      '核心课程：战略管理理论与实践、组织设计与变革、企业创新与创业精神、竞争战略与行业分析、商业研究方法、国际商业战略、公司治理与商业伦理、数字化商业战略、绩效管理系统、综合管理项目（Capstone）；选修：风险投资与私募股权、可持续商业实践。',
    career_prospects_zh:
      '战略规划经理、企业发展总监、管理咨询顾问（麦肯锡/BCG等方向）、商业分析主管、创业公司联合创始人。',
    application_materials_zh:
      '在线申请表（GSB系统）；护照复印件；学士成绩单与证书（认证件）；英语成绩证明；工作简历（CV）；推荐信2封；个人陈述；申请费收据。',
    additional_requirements_zh:
      '须参加GSB遴选面试；部分年份要求提交短视频自我介绍（评估表达与领导力）。',
    accreditation_zh:
      'MQA认证；UKM GSB；与马来西亚管理学院（MIM）及马来西亚战略与国际研究所（ISIS Malaysia）有合作联系。',
    application_deadline_note:
      '3月入学：上一年12月前提交；9月入学：当年6月前提交；以GSB官网公告为准。',
  },
  {
    name_en: 'Master of Management — Entrepreneurship & Innovation Track',
    name_zh: '管理学硕士（创业与创新方向）',
    degree_level: 'master',
    faculty_en: 'Graduate School of Business (GSB)',
    faculty_zh: '商学研究生院（GSB）',
    field_category: 'Business & Management',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 28000,
    tuition_international_cny_estimate: cny(28000),
    tuition_note: '约28,000 MYR/项目总学费（课程制，约1.5年）；以GSB官方公布为准',
    min_ielts: 6.5,
    min_toefl: 90,
    min_gpa: 2.75,
    requirements_zh:
      '申请人须持有任何领域学士学位（CGPA≥2.75/4.00）；须具备至少2年工作经验（创业或商业开发经历优先）；英语：IELTS 6.5或TOEFL iBT 90；须通过GSB遴选面试。',
    scholarship_available: true,
    scholarship_note_zh:
      'MyBrain15硕士奖学金；马来西亚创业发展部（MEDAC）创业培育资助；Cradle Fund科技创业配套资金；HRD Corp雇主培训资助；GSB优秀学生奖学金。',
    curriculum_zh:
      '核心课程：创业思维与商业机会识别、商业模式创新（Business Model Canvas）、创业融资与风险投资、科技创业生态系统、设计思维与用户体验、新创企业市场进入策略、创业法律与知识产权、社会创业与影响力投资、数字营销与增长黑客、创业计划书撰写与路演；选修：敏捷管理（Agile/Scrum）、区块链商业应用。',
    career_prospects_zh:
      '初创公司创始人/联合创始人、企业内部创业负责人（Intrapreneurship）、风险投资基金分析师、创业孵化器经理、科技公司产品经理。',
    application_materials_zh:
      '在线申请表（GSB系统）；护照复印件；学士成绩单与证书（认证件）；英语成绩证明；工作简历（CV）；推荐信2封；个人陈述（创业构想或创新项目经历，约800字）；申请费收据。',
    additional_requirements_zh:
      '须参加GSB遴选面试；建议附上现有创业项目/商业计划概述作为附加材料。',
    accreditation_zh:
      'MQA认证；UKM GSB与马来西亚数字经济机构（MDEC）及Cradle Fund有合作联系，为学生提供马来西亚创业生态系统资源对接。',
    application_deadline_note:
      '3月入学：上一年12月前提交；9月入学：当年6月前提交；以GSB官网公告为准。',
  },
];

// ============================================================================
// COMBINED EXPORT
// ============================================================================

const ukmPrograms: UKMProgram[] = [
  ...ftsmPrograms,
  ...fkabPrograms,
  ...fepPrograms,
  ...ppukmPrograms,
  ...fstPrograms,
  ...gsbPrograms,
];

export default ukmPrograms;

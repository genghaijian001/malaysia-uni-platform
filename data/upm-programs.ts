/**
 * Universiti Putra Malaysia (UPM) - Complete Program Data (2025/2026 Intake)
 * Sources: https://www.upm.edu.my/akademik, https://sgs.upm.edu.my
 * Last verified: 2026-04-01
 *
 * NOTES:
 *   - UPM is QS World University Rankings #148 (2025).
 *   - Main campus: Serdang, Selangor, Malaysia.
 *   - UPM is a research university particularly strong in agriculture, life sciences,
 *     engineering, and veterinary medicine.
 *   - Tuition fees are for international students (non-Malaysian) based on published
 *     2024/2025 fee schedules; actual fees may vary by programme and semester.
 *   - MYR-to-CNY conversion uses approximate rate of 1 MYR = 1.55 CNY.
 *   - Undergraduate main intake: June/July; secondary intake: September (select programmes).
 *   - Postgraduate intake: March and September.
 *   - All fees should be verified on the official UPM website or via UPM Registry.
 */

export interface UPMProgram {
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

const upmPrograms: UPMProgram[] = [

  // ============================================================================
  // FACULTY OF COMPUTER SCIENCE & INFORMATION TECHNOLOGY (FSKTM)
  // 计算机科学与信息技术学院
  // ============================================================================

  {
    name_en: 'Bachelor of Computer Science (Hons) — Software Engineering',
    name_zh: '计算机科学荣誉学士（软件工程）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Computer Science and Information Technology (FSKTM)',
    faculty_zh: '计算机科学与信息技术学院',
    field_category: 'Computing & IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 16250,
    tuition_international_cny_estimate: cny(16250),
    tuition_note: '每学期RM 8,125 = 每学年RM 16,250（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation成绩良好，数学与计算机相关科目成绩优秀；IELTS 6.0或TOEFL iBT 80；需提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、MyBrain15奖学金（研究生）、马来西亚教育部奖学金（KPT）；具体资格须向UPM国际处查询。',
    curriculum_zh:
      '核心课程包括：软件工程原理、面向对象编程、数据结构与算法、数据库系统、操作系统、软件测试与质量保证、人机交互、软件项目管理、云计算与DevOps、移动应用开发。',
    career_prospects_zh:
      '软件工程师、系统分析师、IT项目经理、DevOps工程师、软件质量保证工程师。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh: '马来西亚学术资格认证机构（MQA）认证；课程设置符合ACM/IEEE计算机科学课程指南标准。',
    application_deadline_note: '6月/7月入学：申请截止日期通常为每年3月底；9月入学：截止日期约为6月底，具体以UPM官网公告为准。',
  },

  {
    name_en: 'Bachelor of Computer Science (Hons) — Network & Communication',
    name_zh: '计算机科学荣誉学士（网络与通信）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Computer Science and Information Technology (FSKTM)',
    faculty_zh: '计算机科学与信息技术学院',
    field_category: 'Computing & IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 16250,
    tuition_international_cny_estimate: cny(16250),
    tuition_note: '每学期RM 8,125 = 每学年RM 16,250（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation成绩良好，数学与物理科目成绩优秀；IELTS 6.0或TOEFL iBT 80；需提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、MyBrain15奖学金（研究生）、马来西亚教育部奖学金（KPT）；具体资格须向UPM国际处查询。',
    curriculum_zh:
      '核心课程包括：计算机网络基础、TCP/IP协议与路由、无线网络与移动通信、网络安全与密码学、云计算架构、物联网（IoT）技术、网络管理与运维、数据通信工程、5G网络技术、网络编程。',
    career_prospects_zh:
      '网络工程师、网络安全分析师、电信工程师、系统管理员、云计算架构师。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；课程设置参照IEEE计算机学会网络工程标准。',
    application_deadline_note: '6月/7月入学：申请截止日期通常为每年3月底；9月入学：截止日期约为6月底，具体以UPM官网公告为准。',
  },

  {
    name_en: 'Bachelor of Computer Science (Hons) — Multimedia Computing',
    name_zh: '计算机科学荣誉学士（多媒体计算）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Computer Science and Information Technology (FSKTM)',
    faculty_zh: '计算机科学与信息技术学院',
    field_category: 'Computing & IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 16250,
    tuition_international_cny_estimate: cny(16250),
    tuition_note: '每学期RM 8,125 = 每学年RM 16,250（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation成绩良好，数学成绩优秀，具备艺术或设计兴趣者优先；IELTS 6.0或TOEFL iBT 80；需提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、MyBrain15奖学金（研究生）、马来西亚教育部奖学金（KPT）；具体资格须向UPM国际处查询。',
    curriculum_zh:
      '核心课程包括：数字媒体基础、计算机图形学、2D/3D动画制作、人机交互设计、多媒体系统开发、虚拟现实与增强现实、游戏设计与开发、数字音视频处理、网页多媒体设计、用户体验设计（UX）。',
    career_prospects_zh:
      '多媒体设计师、游戏开发工程师、UI/UX设计师、数字内容创作者、动画师。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: '作品集（Portfolio）提交可作为加分项。',
    accreditation_zh: 'MQA认证；课程设置符合ACM SIGCHI人机交互标准。',
    application_deadline_note: '6月/7月入学：申请截止日期通常为每年3月底；9月入学：截止日期约为6月底，具体以UPM官网公告为准。',
  },

  {
    name_en: 'Master of Computer Science (MSc CS)',
    name_zh: '计算机科学理学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Computer Science and Information Technology (FSKTM)',
    faculty_zh: '计算机科学与信息技术学院',
    field_category: 'Computing & IT',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 16000,
    tuition_international_cny_estimate: cny(16000),
    tuition_note: '课程制约MYR 16,000（总额估算，国际生）；研究制以每学年计费，约MYR 8,000–10,000/年',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '计算机科学、信息技术或相关领域本科学位，CGPA 2.75及以上；IELTS 6.5或TOEFL iBT 90；提交研究计划书（研究制）或修课方案；两封学术推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM研究生研究奖学金（GRF）、MyBrain15（政府资助研究生学习）、马来西亚教育部奖学金；GRF面向研究生（MPhil/PhD），提供学费减免及每月生活津贴。',
    curriculum_zh:
      '研究方向包括：人工智能与机器学习、大数据分析、计算机视觉、自然语言处理、网络安全、物联网系统、高性能计算、软件工程研究方法论。修课制核心课包括研究方法与论文写作。',
    career_prospects_zh:
      '数据科学家、AI研究员、高级软件工程师、大学讲师、IT顾问。',
    application_materials_zh:
      '网上申请表、护照复印件、本科成绩单及毕业证书、英语成绩证明（IELTS/TOEFL）、研究计划书（研究制）、两封推荐信、简历/CV、护照照片。',
    additional_requirements_zh: '研究制申请者须联系潜在导师并获得初步同意。',
    accreditation_zh: 'MQA认证；UPM为马来西亚研究型大学（RU）之一，研究生项目获国际认可。',
    application_deadline_note: '3月入学：申请截止约前一年12月；9月入学：截止约同年6月；以UPM研究生院（SGS）官网公告为准。',
  },

  {
    name_en: 'PhD in Computer Science',
    name_zh: '计算机科学博士',
    degree_level: 'phd',
    faculty_en: 'Faculty of Computer Science and Information Technology (FSKTM)',
    faculty_zh: '计算机科学与信息技术学院',
    field_category: 'Computing & IT',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 10000,
    tuition_international_cny_estimate: cny(10000),
    tuition_note: '约MYR 10,000/年（国际生，研究制），具体以UPM SGS公布费用为准',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '计算机科学或相关领域硕士学位，CGPA 3.0及以上；IELTS 6.5或TOEFL iBT 90；需提交详细研究计划书；须获得UPM教职人员导师确认接受指导。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM研究生研究奖学金（GRF）优先面向博士生，提供学费全免及每月生活津贴约MYR 1,500–2,000；MyBrain15博士生资助计划；国际学生亦可申请马来西亚政府奖学金（MGS）。',
    curriculum_zh:
      '以独立科研为主，研究领域涵盖：机器学习与深度学习、计算机视觉与图像处理、自然语言处理与知识工程、网络安全与隐私保护、物联网与智能系统、高性能计算与并行算法；须完成年度研究进度报告及公开答辩。',
    career_prospects_zh:
      '大学教授/副教授、国家级研究机构研究员、科技公司R&D负责人、AI战略顾问。',
    application_materials_zh:
      '网上申请表、护照复印件、硕士成绩单及毕业证书、英语成绩证明（IELTS/TOEFL）、详细研究计划书（约2,000–3,000字）、导师接受函、两至三封推荐信、简历/CV、已发表论文（如有）、护照照片。',
    additional_requirements_zh: '强烈建议申请前与目标导师充分沟通研究方向，并取得导师的初步同意书。',
    accreditation_zh: 'MQA认证；UPM为马来西亚五所研究型大学（RU）之一，博士学位国际认可度高。',
    application_deadline_note: '3月入学：截止约前一年12月；9月入学：截止约同年6月；以UPM SGS官网公告为准。',
  },

  // ============================================================================
  // FACULTY OF ENGINEERING (FK)
  // 工程学院
  // ============================================================================

  {
    name_en: 'Bachelor of Engineering (Civil & Environmental) Hons',
    name_zh: '土木与环境工程荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Engineering (FK)',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 17500,
    tuition_international_cny_estimate: cny(17500),
    tuition_note: '每学期RM 8,750 = 每学年RM 17,500（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation，数学与物理成绩优秀（B级及以上）；化学成绩良好；IELTS 6.0或TOEFL iBT 80；提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、马来西亚政府奖学金（MGS）、MyBrain15研究生资助；工程类本科生可申请马来西亚工程师委员会相关奖学金。',
    curriculum_zh:
      '核心课程包括：工程数学、工程力学与材料、结构分析与设计、岩土工程、水力学与水文学、环境工程（水质处理与废水处理）、交通运输工程、施工管理与经济学、可持续建设技术、工程伦理与职业实践。',
    career_prospects_zh:
      '土木工程师、结构工程师、环境工程师、项目经理、政府基础设施规划师。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；工程学士学位获马来西亚工程师委员会（BEM/EAC）认证，并与华盛顿协议（Washington Accord）对等认可，全球工程资格互认。',
    application_deadline_note: '6月/7月入学：申请截止通常为每年3月底；以UPM入学处（UPM Admissions）官网公告为准。',
  },

  {
    name_en: 'Bachelor of Engineering (Electrical & Electronics) Hons',
    name_zh: '电气与电子工程荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Engineering (FK)',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 17500,
    tuition_international_cny_estimate: cny(17500),
    tuition_note: '每学期RM 8,750 = 每学年RM 17,500（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation，数学与物理成绩优秀（B级及以上）；IELTS 6.0或TOEFL iBT 80；提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、马来西亚政府奖学金（MGS）、MyBrain15研究生资助；可申请马来西亚工程师委员会相关奖学金。',
    curriculum_zh:
      '核心课程包括：电路分析与电子学、数字信号处理、电磁场理论、电力系统与机械、嵌入式系统设计、通信工程、控制系统与自动化、可编程逻辑控制（PLC）、微处理器与微控制器、电力电子学与可再生能源。',
    career_prospects_zh:
      '电气工程师、电子设计工程师、电力系统工程师、自动化工程师、通信工程师。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；获BEM/EAC认证，符合华盛顿协议（Washington Accord）标准，工程资格国际互认。',
    application_deadline_note: '6月/7月入学：申请截止通常为每年3月底；以UPM入学处官网公告为准。',
  },

  {
    name_en: 'Bachelor of Engineering (Mechanical) Hons',
    name_zh: '机械工程荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Engineering (FK)',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 17500,
    tuition_international_cny_estimate: cny(17500),
    tuition_note: '每学期RM 8,750 = 每学年RM 17,500（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation，数学与物理成绩优秀（B级及以上）；IELTS 6.0或TOEFL iBT 80；提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、马来西亚政府奖学金（MGS）、MyBrain15研究生资助；可申请BEM相关行业奖学金。',
    curriculum_zh:
      '核心课程包括：工程热力学、流体力学、材料力学与强度、机器设计与制造、数控加工（CAD/CAM）、有限元分析（FEA）、机器人学与自动化、工程动力学、工业工程与生产管理、可持续制造技术。',
    career_prospects_zh:
      '机械工程师、制造工程师、汽车工程师、工业设计师、石油与天然气行业工程师。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；获BEM/EAC认证，符合华盛顿协议标准，工程资格国际互认。',
    application_deadline_note: '6月/7月入学：申请截止通常为每年3月底；以UPM入学处官网公告为准。',
  },

  {
    name_en: 'Bachelor of Engineering (Chemical & Environmental) Hons',
    name_zh: '化工与环境工程荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Engineering (FK)',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 17500,
    tuition_international_cny_estimate: cny(17500),
    tuition_note: '每学期RM 8,750 = 每学年RM 17,500（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation，数学、物理及化学成绩优秀（B级及以上）；IELTS 6.0或TOEFL iBT 80；提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、马来西亚政府奖学金（MGS）、MyBrain15研究生资助；化工行业相关奖学金（如马来西亚化工学会）。',
    curriculum_zh:
      '核心课程包括：化学工程热力学、传质与分离操作、反应工程、过程控制与仿真、化工工厂设计、环境影响评估、工业废物处理、生物化工、石油与天然气加工、绿色化学与可持续工程。',
    career_prospects_zh:
      '化工工程师、炼油工程师、环境顾问、过程安全工程师、生物技术产业工程师。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；获BEM/EAC认证，符合华盛顿协议标准；IChemE（英国化学工程师学会）认证候选资格。',
    application_deadline_note: '6月/7月入学：申请截止通常为每年3月底；以UPM入学处官网公告为准。',
  },

  {
    name_en: 'Master of Engineering',
    name_zh: '工程学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Engineering (FK)',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 18000,
    tuition_international_cny_estimate: cny(18000),
    tuition_note: '课程制约MYR 18,000总额（国际生）；研究制约MYR 9,000–11,000/年',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '工程相关领域本科学位，CGPA 2.75及以上；IELTS 6.5或TOEFL iBT 90；提交研究计划书（研究制）；两封学术或专业推荐信；相关工作经验（修课制加分）。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM研究生研究奖学金（GRF）、MyBrain15、马来西亚政府奖学金（MGS）；GRF提供学费减免及每月生活津贴约MYR 1,200–1,500。',
    curriculum_zh:
      '研究方向包括：智能制造与工业4.0、可持续能源系统、结构与岩土工程、水资源管理、先进材料工程、生物医学工程、智能交通系统；修课制含高级工程数学、研究方法论等核心课程。',
    career_prospects_zh:
      '高级工程师、项目总监、大学讲师/研究员、政府工程顾问、跨国企业技术主管。',
    application_materials_zh:
      '网上申请表、护照复印件、本科成绩单及毕业证书、英语成绩证明（IELTS/TOEFL）、研究计划书（研究制）、两封推荐信、简历/CV、护照照片。',
    additional_requirements_zh: '研究制申请者须联系并获得UPM工程学院教职导师初步确认。',
    accreditation_zh: 'MQA认证；获BEM认证，硕士学位符合马来西亚专业工程师（Professional Engineer）注册资格要求。',
    application_deadline_note: '3月入学：截止约前一年12月；9月入学：截止约同年6月；以UPM SGS官网公告为准。',
  },

  {
    name_en: 'PhD in Engineering',
    name_zh: '工程学博士',
    degree_level: 'phd',
    faculty_en: 'Faculty of Engineering (FK)',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 11000,
    tuition_international_cny_estimate: cny(11000),
    tuition_note: '约MYR 11,000/年（国际生，研究制），具体以UPM SGS公布费用为准',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '工程相关领域硕士学位，CGPA 3.0及以上；IELTS 6.5或TOEFL iBT 90；详细研究计划书；须获UPM工程学院教职导师确认接受指导。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM研究生研究奖学金（GRF）优先面向博士生，提供全额学费及每月生活津贴约MYR 1,500–2,000；MyBrain15博士资助；马来西亚政府奖学金（MGS）。',
    curriculum_zh:
      '以独立科研为主，研究领域涵盖：智能结构与先进材料、可再生能源与电力系统、精准农业工程、生物医学设备研发、水处理与环境工程、机器人与自动化系统；每年提交研究进度报告，毕业须通过公开答辩。',
    career_prospects_zh:
      '大学教授/副教授、国家研究中心高级研究员、跨国公司技术总监、政府科研机构首席工程师。',
    application_materials_zh:
      '网上申请表、护照复印件、硕士成绩单及毕业证书、英语成绩证明（IELTS/TOEFL）、详细研究计划书（2,000–3,000字）、导师接受函、两至三封推荐信、简历/CV、已发表论文（如有）、护照照片。',
    additional_requirements_zh: '建议申请前通过电邮与目标导师深入沟通研究方向及项目资金来源。',
    accreditation_zh: 'MQA认证；UPM工程学院博士学位获国际学术界广泛认可；BEM认可。',
    application_deadline_note: '3月入学：截止约前一年12月；9月入学：截止约同年6月；以UPM SGS官网公告为准。',
  },

  // ============================================================================
  // FACULTY OF ECONOMICS & MANAGEMENT (FEP) / GRADUATE SCHOOL OF MANAGEMENT (GSM)
  // 经济与管理学院 / 管理学研究生院
  // ============================================================================

  {
    name_en: 'Bachelor of Economics (Hons)',
    name_zh: '经济学荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Economics and Management (FEP)',
    faculty_zh: '经济与管理学院',
    field_category: 'Economics & Business',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 12500,
    tuition_international_cny_estimate: cny(12500),
    tuition_note: '每学期RM 6,250 = 每学年RM 12,500（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation，数学成绩良好（B级及以上）；IELTS 6.0或TOEFL iBT 80；提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、马来西亚政府奖学金（MGS）、MyBrain15研究生资助；经济类本科生可申请UPM优秀学生奖学金。',
    curriculum_zh:
      '核心课程包括：微观经济学、宏观经济学、经济统计学与计量经济学、发展经济学、国际贸易理论与政策、货币经济学与金融市场、农业经济学（UPM特色）、马来西亚经济发展、行为经济学、经济研究方法。',
    career_prospects_zh:
      '经济分析师、政府政策研究员、金融机构经济顾问、国际组织研究员、学术研究员。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；FEP为马来西亚知名经济学院，课程设置与国际经济学专业标准接轨。',
    application_deadline_note: '6月/7月入学：申请截止通常为每年3月底；以UPM入学处官网公告为准。',
  },

  {
    name_en: 'Bachelor of Accounting (Hons)',
    name_zh: '会计学荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Economics and Management (FEP)',
    faculty_zh: '经济与管理学院',
    field_category: 'Economics & Business',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 12500,
    tuition_international_cny_estimate: cny(12500),
    tuition_note: '每学期RM 6,250 = 每学年RM 12,500（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation，数学及会计/商业科目成绩良好（B级及以上）；IELTS 6.0或TOEFL iBT 80；提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、马来西亚政府奖学金（MGS）、马来西亚会计师公会（MIA）相关奖学金；MyBrain15研究生资助。',
    curriculum_zh:
      '核心课程包括：财务会计、管理会计、企业税务（马来西亚税法）、审计学原理、公司法与商业法、财务报告与分析、成本会计与控制、企业伦理与治理、信息系统审计、财务管理。',
    career_prospects_zh:
      '注册会计师（CPA/MIA）、审计师、税务顾问、企业财务总监、法证会计师。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；课程获马来西亚会计师公会（MIA）认可，毕业生可豁免部分MIA专业考试科目；与ACCA、ICAEW等国际会计组织有豁免政策。',
    application_deadline_note: '6月/7月入学：申请截止通常为每年3月底；以UPM入学处官网公告为准。',
  },

  {
    name_en: 'Master of Business Administration (MBA)',
    name_zh: '工商管理硕士（MBA）',
    degree_level: 'master',
    faculty_en: 'Graduate School of Management (GSM)',
    faculty_zh: '管理学研究生院',
    field_category: 'Economics & Business',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 45000,
    tuition_international_cny_estimate: cny(45000),
    tuition_note: '总学费约MYR 40,000–50,000（国际生，全程），以GSM官方公布费用为准',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '任意专业本科学位，CGPA 2.75及以上；IELTS 6.5或TOEFL iBT 90；至少2年全职工作经验（管理职位优先）；两封专业推荐信；个人陈述；GMAT成绩（部分申请可豁免）。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM GSM提供部分优秀生学费减免奖学金；马来西亚政府奖学金（MGS）；企业联合奖学金项目；MyBrain15不适用于MBA修课制项目。',
    curriculum_zh:
      '核心课程包括：管理经济学与商业环境、组织行为学与领导力、财务管理与会计、市场营销管理、运营管理与供应链、企业战略与竞争分析、国际商务、商业研究方法与统计、企业伦理与社会责任；选修方向：金融、人力资源管理、市场营销、创业管理。',
    career_prospects_zh:
      '企业高级管理层（CEO/COO/CFO）、战略顾问、创业者、跨国企业区域总监、投资银行家。',
    application_materials_zh:
      '网上申请表、护照复印件、本科成绩单及毕业证书、英语成绩证明（IELTS/TOEFL）、工作经历证明（至少2年）、两封专业推荐信、个人陈述、简历/CV、GMAT成绩（如有）、护照照片。',
    additional_requirements_zh: '部分申请者须参加GSM面试（线上或线下）。',
    accreditation_zh:
      'MQA认证；UPM GSM为马来西亚知名商学院，MBA项目获国际商学院协进会（AACSB候选）和马来西亚管理学院相关认证。',
    application_deadline_note: '3月入学：截止约前一年12月；9月入学：截止约同年6月；以UPM GSM官网公告为准。',
  },

  {
    name_en: 'Master of Finance',
    name_zh: '金融学硕士',
    degree_level: 'master',
    faculty_en: 'Graduate School of Management (GSM)',
    faculty_zh: '管理学研究生院',
    field_category: 'Economics & Business',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 22000,
    tuition_international_cny_estimate: cny(22000),
    tuition_note: '总学费约MYR 20,000–24,000（国际生，全程），以GSM官方公布费用为准',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '经济学、金融、会计或相关领域本科学位，CGPA 2.75及以上；IELTS 6.5或TOEFL iBT 90；相关工作经验优先；两封推荐信；个人陈述。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM GSM优秀生学费减免奖学金；马来西亚政府奖学金（MGS）；金融行业企业奖学金（如马来西亚国家银行相关项目）。',
    curriculum_zh:
      '核心课程包括：企业财务理论、投资组合分析与资产定价、衍生品与风险管理、固定收益证券分析、金融计量经济学、资本市场与证券、伊斯兰金融与伊斯兰资本市场（UPM特色）、企业重组与并购、国际财务管理、毕业论文/项目研究。',
    career_prospects_zh:
      '投资银行分析师、基金经理、财务风险管理师（FRM）、企业财务总监、证券监管机构分析师。',
    application_materials_zh:
      '网上申请表、护照复印件、本科成绩单及毕业证书、英语成绩证明（IELTS/TOEFL）、工作经历证明（如有）、两封推荐信、个人陈述、简历/CV、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；UPM GSM金融硕士课程与马来西亚证券监督委员会（SC）及中央银行（BNM）行业需求接轨。',
    application_deadline_note: '3月入学：截止约前一年12月；9月入学：截止约同年6月；以UPM GSM官网公告为准。',
  },

  {
    name_en: 'Master of Science (Management)',
    name_zh: '管理学理学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Economics and Management (FEP)',
    faculty_zh: '经济与管理学院',
    field_category: 'Economics & Business',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 16000,
    tuition_international_cny_estimate: cny(16000),
    tuition_note: '约MYR 16,000（总额估算，国际生，修课制）；研究制约MYR 8,000–10,000/年',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '管理学、商学或相关领域本科学位，CGPA 2.75及以上；IELTS 6.5或TOEFL iBT 90；两封学术推荐信；研究计划书（研究制）。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM研究生研究奖学金（GRF）、MyBrain15、马来西亚政府奖学金（MGS）。',
    curriculum_zh:
      '研究领域涵盖：组织管理与人力资源、战略管理与竞争优势、供应链与运营管理、创业管理与创新、管理信息系统、消费者行为与市场营销研究、可持续发展与企业社会责任、管理研究方法论。',
    career_prospects_zh:
      '企业管理顾问、人力资源总监、大学讲师/研究员、政府政策分析师、创业者。',
    application_materials_zh:
      '网上申请表、护照复印件、本科成绩单及毕业证书、英语成绩证明（IELTS/TOEFL）、研究计划书（研究制）、两封推荐信、简历/CV、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；FEP管理学研究生项目在马来西亚学术界享有良好声誉。',
    application_deadline_note: '3月入学：截止约前一年12月；9月入学：截止约同年6月；以UPM SGS官网公告为准。',
  },

  {
    name_en: 'PhD in Management',
    name_zh: '管理学博士',
    degree_level: 'phd',
    faculty_en: 'Faculty of Economics and Management (FEP)',
    faculty_zh: '经济与管理学院',
    field_category: 'Economics & Business',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 10000,
    tuition_international_cny_estimate: cny(10000),
    tuition_note: '约MYR 10,000/年（国际生，研究制），具体以UPM SGS公布费用为准',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '管理学或相关领域硕士学位，CGPA 3.0及以上；IELTS 6.5或TOEFL iBT 90；详细研究计划书；须获UPM FEP/GSM教职导师确认接受指导。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM研究生研究奖学金（GRF）优先面向博士生；MyBrain15博士资助；马来西亚政府奖学金（MGS）。',
    curriculum_zh:
      '以独立科研为主，研究方向包括：战略管理、组织理论与设计、国际商务与跨国企业管理、创业生态系统与创新管理、伊斯兰商业伦理与哈拉尔管理、数字化转型与电子商务、供应链弹性与可持续性；须完成年度进度报告及公开答辩。',
    career_prospects_zh:
      '大学教授/副教授、国家级智库研究员、跨国企业战略顾问、政府政策制定顾问。',
    application_materials_zh:
      '网上申请表、护照复印件、硕士成绩单及毕业证书、英语成绩证明（IELTS/TOEFL）、详细研究计划书（2,000–3,000字）、导师接受函、两至三封推荐信、简历/CV、已发表论文（如有）、护照照片。',
    additional_requirements_zh: '建议申请前与潜在导师充分沟通研究主题，并确认研究资金来源。',
    accreditation_zh: 'MQA认证；UPM FEP管理学博士学位获马来西亚及国际学界广泛认可。',
    application_deadline_note: '3月入学：截止约前一年12月；9月入学：截止约同年6月；以UPM SGS官网公告为准。',
  },

  // ============================================================================
  // FACULTY OF AGRICULTURE (FP) — UPM STRENGTH
  // 农业学院 — UPM强项
  // ============================================================================

  {
    name_en: 'Bachelor of Agriculture Science (Hons)',
    name_zh: '农业科学荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Agriculture (FP)',
    faculty_zh: '农业学院',
    field_category: 'Agriculture & Life Sciences',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 16250,
    tuition_international_cny_estimate: cny(16250),
    tuition_note: '每学期RM 8,125 = 每学年RM 16,250（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation，生物及化学成绩良好（B级及以上）；数学成绩优秀；IELTS 6.0或TOEFL iBT 80；提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、马来西亚农业研究与发展机构（MARDI）相关奖学金、马来西亚政府奖学金（MGS）、MyBrain15研究生资助。',
    curriculum_zh:
      '核心课程包括：作物科学与生产、土壤科学与肥力管理、植物生理学与生物化学、植物病理学与植物保护、农业气象学与水资源管理、农场管理与农业经济学、精准农业与农业科技（AgriTech）、热带农业生态系统、有机农业与可持续种植、农业推广与农村发展。',
    career_prospects_zh:
      '农业官员、农场管理员、农业研究员、种植业公司管理人员、农业科技创业者。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: '申请者需具备对热带农业或可持续农业的真实兴趣，课程含大量实验室及实地实习课时。',
    accreditation_zh: 'MQA认证；UPM农业学院为马来西亚历史最悠久、最权威的农业教育机构，农业科学学位获国际农业院校广泛认可。',
    application_deadline_note: '6月/7月入学：申请截止通常为每年3月底；以UPM入学处官网公告为准。',
  },

  {
    name_en: 'Bachelor of Horticulture (Hons)',
    name_zh: '园艺学荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Agriculture (FP)',
    faculty_zh: '农业学院',
    field_category: 'Agriculture & Life Sciences',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 16250,
    tuition_international_cny_estimate: cny(16250),
    tuition_note: '每学期RM 8,125 = 每学年RM 16,250（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation，生物及化学成绩良好（B级及以上）；IELTS 6.0或TOEFL iBT 80；提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、马来西亚政府奖学金（MGS）、MARDI相关奖学金；MyBrain15研究生资助。',
    curriculum_zh:
      '核心课程包括：园艺作物栽培技术、果树学与蔬菜学、景观设计与城市园艺、花卉学与观赏植物、植物繁殖技术、温室管理与受控环境农业（CEA）、园艺产品采后处理与保鲜、植物育种与生物技术应用、有机园艺、园艺商业管理。',
    career_prospects_zh:
      '园艺师、景观设计师、农业推广官员、农业科技公司研发人员、城市农业创业者。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；UPM农业学院园艺专业在东南亚具有领先地位，与多个国际园艺研究机构保持合作。',
    application_deadline_note: '6月/7月入学：申请截止通常为每年3月底；以UPM入学处官网公告为准。',
  },

  {
    name_en: 'Master of Agronomy / Agricultural Science',
    name_zh: '农学/农业科学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Agriculture (FP)',
    faculty_zh: '农业学院',
    field_category: 'Agriculture & Life Sciences',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 14000,
    tuition_international_cny_estimate: cny(14000),
    tuition_note: '约MYR 14,000（总额估算，国际生，修课制）；研究制约MYR 9,000–11,000/年',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '农业科学、农学、植物科学或相关领域本科学位，CGPA 2.75及以上；IELTS 6.5或TOEFL iBT 90；提交研究计划书（研究制）；两封学术推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM研究生研究奖学金（GRF）、MyBrain15、马来西亚政府奖学金（MGS）；UPM农业学院部分科研项目提供研究助理（RA）职位并附带津贴。',
    curriculum_zh:
      '研究方向包括：热带作物生理与栽培优化、土壤健康与精准施肥、作物抗逆性与气候变化适应、农业生物技术与基因改良、有机农业与可持续土地管理、农业病虫害综合管理（IPM）、农业信息学与遥感技术、农产品增值与食品安全。',
    career_prospects_zh:
      '农业研究员、农业科技顾问、政府农业部官员、跨国农业公司技术专家、大学讲师。',
    application_materials_zh:
      '网上申请表、护照复印件、本科成绩单及毕业证书、英语成绩证明（IELTS/TOEFL）、研究计划书（研究制）、两封推荐信、简历/CV、护照照片。',
    additional_requirements_zh: '研究制申请者建议提前联系UPM农业学院导师，确认研究方向及实验室资源。',
    accreditation_zh: 'MQA认证；UPM农业学院为马来西亚农业科研重镇，与国际稻米研究所（IRRI）、国际玉米小麦改良中心（CIMMYT）等机构有合作。',
    application_deadline_note: '3月入学：截止约前一年12月；9月入学：截止约同年6月；以UPM SGS官网公告为准。',
  },

  {
    name_en: 'PhD in Agricultural Science',
    name_zh: '农业科学博士',
    degree_level: 'phd',
    faculty_en: 'Faculty of Agriculture (FP)',
    faculty_zh: '农业学院',
    field_category: 'Agriculture & Life Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 10000,
    tuition_international_cny_estimate: cny(10000),
    tuition_note: '约MYR 10,000/年（国际生，研究制），具体以UPM SGS公布费用为准',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '农业科学或相关领域硕士学位，CGPA 3.0及以上；IELTS 6.5或TOEFL iBT 90；详细研究计划书；须获UPM农业学院教职导师确认接受指导。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM研究生研究奖学金（GRF）、MyBrain15博士资助、马来西亚政府奖学金（MGS）；部分国际科研合作项目提供全额资助博士名额。',
    curriculum_zh:
      '以独立科研为主，研究领域涵盖：热带农业生态与可持续生产系统、植物分子生物学与功能基因组学、土壤碳汇与气候智慧型农业、精准灌溉与农业水管理、病虫害生物防治与微生物农药、农业大数据与人工智能应用、棕榈油与热带经济作物研究（UPM特色）；须完成年度研究进度报告及公开答辩。',
    career_prospects_zh:
      '大学教授/副教授、农业研究中心首席研究员、政府农业政策顾问、跨国农业集团研发总监、国际农业组织专家。',
    application_materials_zh:
      '网上申请表、护照复印件、硕士成绩单及毕业证书、英语成绩证明（IELTS/TOEFL）、详细研究计划书（2,000–3,000字）、导师接受函、两至三封推荐信、简历/CV、已发表论文（如有）、护照照片。',
    additional_requirements_zh: '建议申请前充分了解UPM农业学院各实验室的科研方向及资金来源情况。',
    accreditation_zh: 'MQA认证；UPM农业科学博士为马来西亚最具权威的农业博士项目，在亚太地区具有较高学术影响力。',
    application_deadline_note: '3月入学：截止约前一年12月；9月入学：截止约同年6月；以UPM SGS官网公告为准。',
  },

  // ============================================================================
  // FACULTY OF VETERINARY MEDICINE (FPV) — UPM STRENGTH
  // 兽医学院 — UPM强项
  // ============================================================================

  {
    name_en: 'Bachelor of Veterinary Medicine (BVSc)',
    name_zh: '兽医学士（BVSc）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Veterinary Medicine (FPV)',
    faculty_zh: '兽医学院',
    field_category: 'Veterinary Medicine',
    duration_years: 5,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 40000,
    tuition_international_cny_estimate: cny(40000),
    tuition_note: '每学期RM 20,000 = 每学年RM 40,000（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation，生物、化学及数学成绩极优（A级或近满分）；IELTS 6.5或TOEFL iBT 90；需提交个人陈述说明对兽医职业的志向；面试（部分申请者）；竞争极为激烈，录取率低。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金（竞争性）、马来西亚政府奖学金（MGS）；马来西亚兽医协会（VMA）部分奖助学金；具体名额有限，须尽早申请。',
    curriculum_zh:
      '第一至二年基础课程：动物解剖学、动物生理学、兽医生物化学、微生物学与免疫学、动物营养与繁殖；第三年临床前期：病理学、药理学与毒理学、兽医公共卫生；第四至五年临床实习：小动物医学与外科、大动物医学与外科（牛、马、猪）、禽鸟医学、水生动物健康、野生动物医学与保育（UPM特色）、食品安全与卫生检验。',
    career_prospects_zh:
      '执业兽医（小动物/大动物）、政府兽医官员、农业部畜牧局官员、野生动物保育专员、食品安全检疫官员。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述（含兽医志向说明）、两封推荐信（含一封科学老师推荐）、护照照片；部分申请者须参加面试。',
    additional_requirements_zh:
      '具备动物护理或兽医诊所实习经历者优先；须通过马来西亚兽医委员会（VMC）注册方可执业；国际生须了解本国承认UPM兽医学位的政策。',
    accreditation_zh:
      'MQA认证；UPM兽医学位获马来西亚兽医委员会（VMC/VMA）认证；与皇家兽医学院（RCVS，英国）及美国兽医医学协会（AVMA）具有一定互认关系（须个别申请认证）。',
    application_deadline_note: '6月/7月入学：申请截止通常为每年2月底（竞争激烈，建议尽早申请）；以UPM入学处官网公告为准。',
  },

  // ============================================================================
  // FACULTY OF MEDICINE & HEALTH SCIENCES (FPSK)
  // 医学与健康科学学院
  // ============================================================================

  {
    name_en: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)',
    name_zh: '医学与外科学士（MBBS）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Medicine and Health Sciences (FPSK)',
    faculty_zh: '医学与健康科学学院',
    field_category: 'Medicine & Health Sciences',
    duration_years: 5,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 37000,
    tuition_international_cny_estimate: cny(37000),
    tuition_note: '每学年约MYR 35,000–40,000（国际生），以UPM官方公布费用为准；临床年费用或有差异',
    min_ielts: 7.0,
    min_toefl: 100,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation，生物、化学成绩极优（A级或近满分），数学/物理成绩良好；IELTS 7.0或TOEFL iBT 100；须参加UPM医学院入学面试（MMI或传统面试）；个人陈述；录取竞争极为激烈，录取人数有限。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金（竞争性，名额极有限）、马来西亚政府奖学金（MGS）；各国政府派遣医学生奖学金；建议及早申请并多渠道寻找资助。',
    curriculum_zh:
      '第一至二年基础医学：人体解剖学、生理学、生物化学、微生物学与免疫学、病理学导论；第三年系统医学：内科学系统、外科学原理、药理学；第四至五年临床实习：内科、外科、妇产科、儿科、精神科、家庭医学、急诊医学；UPM医院（Hospital Pengajar UPM）提供完整临床培训环境。',
    career_prospects_zh:
      '执业医生（住院医师/专科医生）、医学研究员、公共卫生医官、卫生政策顾问、学术医学院教授。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信（含科学老师推荐）、护照照片；须参加入学面试（MMI）。',
    additional_requirements_zh:
      '国际学生毕业后须在本国申请执业执照；部分国家对海外医学学位有特定认证要求，建议申请前确认本国医学委员会的认可政策；须通过马来西亚医学委员会（MMC）临时注册方可在马来西亚完成实习。',
    accreditation_zh:
      'MQA认证；UPM MBBS获马来西亚医学委员会（MMC）完全认证；列入世界医学院目录（WDOMS/AVICENNA Directory），国际认可度高。',
    application_deadline_note: '6月/7月入学：申请截止通常为每年2月底（竞争极激烈，强烈建议尽早申请）；以UPM入学处及FPSK官网公告为准。',
  },

  {
    name_en: 'Master of Public Health (MPH)',
    name_zh: '公共卫生硕士（MPH）',
    degree_level: 'master',
    faculty_en: 'Faculty of Medicine and Health Sciences (FPSK)',
    faculty_zh: '医学与健康科学学院',
    field_category: 'Medicine & Health Sciences',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 20000,
    tuition_international_cny_estimate: cny(20000),
    tuition_note: '总学费约MYR 18,000–22,000（国际生，修课制），以UPM官方公布费用为准',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '医学（MBBS）、医疗卫生相关专业或生命科学本科学位，CGPA 2.75及以上；IELTS 6.5或TOEFL iBT 90；临床或公共卫生工作经验优先；两封推荐信；个人陈述。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM研究生研究奖学金（GRF）、MyBrain15、马来西亚政府奖学金（MGS）；世界卫生组织（WHO）及相关国际卫生机构奖学金（供符合条件的发展中国家学生申请）。',
    curriculum_zh:
      '核心课程包括：流行病学原理与方法、卫生统计学与数据分析、卫生政策与卫生系统管理、环境与职业卫生、传染病控制与卫生监测、慢性病流行病学与预防、卫生促进与卫生教育、全球卫生与健康公平、卫生研究方法与论文撰写。',
    career_prospects_zh:
      '公共卫生官员、流行病学研究员、世界卫生组织/联合国相关机构专家、卫生政策顾问、非政府组织卫生项目协调员。',
    application_materials_zh:
      '网上申请表、护照复印件、本科成绩单及毕业证书、英语成绩证明（IELTS/TOEFL）、工作经历证明（如有）、两封推荐信、个人陈述、简历/CV、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；UPM FPSK公共卫生研究生项目与WHO及马来西亚卫生部（MOH）有密切合作关系。',
    application_deadline_note: '3月入学：截止约前一年12月；9月入学：截止约同年6月；以UPM SGS及FPSK官网公告为准。',
  },

  {
    name_en: 'PhD in Biomedical Sciences',
    name_zh: '生物医学博士',
    degree_level: 'phd',
    faculty_en: 'Faculty of Medicine and Health Sciences (FPSK)',
    faculty_zh: '医学与健康科学学院',
    field_category: 'Medicine & Health Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 12000,
    tuition_international_cny_estimate: cny(12000),
    tuition_note: '约MYR 12,000/年（国际生，研究制），具体以UPM SGS公布费用为准',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '生物医学科学、医学、生命科学或相关领域硕士学位，CGPA 3.0及以上；IELTS 6.5或TOEFL iBT 90；详细研究计划书；须获UPM FPSK教职导师确认接受指导。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM研究生研究奖学金（GRF）优先面向博士生；MyBrain15博士资助；马来西亚政府奖学金（MGS）；NIH马来西亚基金资助的科研项目偶有全额博士生名额。',
    curriculum_zh:
      '以独立科研为主，研究领域涵盖：癌症生物学与分子靶向治疗、感染性疾病与抗药性机制、干细胞与再生医学、神经科学与神经退行性疾病、生物信息学与医学基因组学、药用植物与天然产物药理学（东南亚热带植物为特色）、免疫学与自身免疫病研究；须完成年度进度报告及公开答辩。',
    career_prospects_zh:
      '生物医学研究员、制药公司研发科学家、大学医学院教授、国家卫生研究所（NIH）研究员、医疗器械研发专家。',
    application_materials_zh:
      '网上申请表、护照复印件、硕士成绩单及毕业证书、英语成绩证明（IELTS/TOEFL）、详细研究计划书（2,000–3,000字）、导师接受函、两至三封推荐信、简历/CV、已发表论文（如有）、护照照片。',
    additional_requirements_zh: '建议申请前与FPSK目标导师深入沟通研究课题，了解实验室设备及研究经费情况。',
    accreditation_zh: 'MQA认证；UPM生物医学博士项目依托UPM医学院及附属医院资源，研究实力在马来西亚居前列。',
    application_deadline_note: '3月入学：截止约前一年12月；9月入学：截止约同年6月；以UPM SGS官网公告为准。',
  },

  // ============================================================================
  // FACULTY OF FOOD SCIENCE & TECHNOLOGY (FSTM)
  // 食品科学与技术学院
  // ============================================================================

  {
    name_en: 'Bachelor of Science (Food Science) Hons',
    name_zh: '食品科学荣誉理学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Food Science and Technology (FSTM)',
    faculty_zh: '食品科学与技术学院',
    field_category: 'Food Science & Technology',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 13000,
    tuition_international_cny_estimate: cny(13000),
    tuition_note: '每学年约MYR 12,500–14,000（国际生），以UPM官方公布费用为准',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation，化学与生物成绩良好（B级及以上）；数学成绩满足要求；IELTS 6.0或TOEFL iBT 80；提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、马来西亚政府奖学金（MGS）、MyBrain15研究生资助；马来西亚食品技术协会（MAFT）相关奖学金。',
    curriculum_zh:
      '核心课程包括：食品化学与营养学、食品微生物学与卫生学、食品加工与工程原理、食品感官评价、食品法规与标准（哈拉尔认证、马来西亚食品法）、食品包装技术、功能性食品与营养强化、食品产品开发与工业化、质量管理体系（ISO 22000/HACCP）、食品生物技术。',
    career_prospects_zh:
      '食品科学家、食品工厂质量经理、食品产品研发工程师、哈拉尔认证审计员、食品安全监管官员。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；UPM FSTM为马来西亚食品科学教育的领先机构，与马来西亚哈拉尔发展公司（HDC）及FAMA有合作；食品科学学位为马来西亚食品工业高度认可的资质。',
    application_deadline_note: '6月/7月入学：申请截止通常为每年3月底；以UPM入学处官网公告为准。',
  },

  {
    name_en: 'Master of Science (Food Science)',
    name_zh: '食品科学理学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Food Science and Technology (FSTM)',
    faculty_zh: '食品科学与技术学院',
    field_category: 'Food Science & Technology',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 15000,
    tuition_international_cny_estimate: cny(15000),
    tuition_note: '约MYR 15,000（总额估算，国际生，修课制）；研究制约MYR 9,000–11,000/年',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '食品科学、食品技术、化学、生物学或相关领域本科学位，CGPA 2.75及以上；IELTS 6.5或TOEFL iBT 90；研究计划书（研究制）；两封学术推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM研究生研究奖学金（GRF）、MyBrain15、马来西亚政府奖学金（MGS）；FSTM部分科研项目提供研究助理职位及生活津贴。',
    curriculum_zh:
      '研究方向包括：食品生物技术与发酵工程、功能性食品与天然植物提取物、食品安全与风险评估、先进食品加工技术（超声波、高压处理等）、食品色泽与质构分析、棕榈油产品开发（马来西亚特色）、哈拉尔食品科学与认证体系、食品包装材料创新。',
    career_prospects_zh:
      '食品研发科学家、高级质量保证经理、大学讲师/研究员、食品监管机构技术官员、跨国食品集团研发专家。',
    application_materials_zh:
      '网上申请表、护照复印件、本科成绩单及毕业证书、英语成绩证明（IELTS/TOEFL）、研究计划书（研究制）、两封推荐信、简历/CV、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；UPM FSTM食品科学硕士在东南亚食品科研领域享有较高声誉。',
    application_deadline_note: '3月入学：截止约前一年12月；9月入学：截止约同年6月；以UPM SGS官网公告为准。',
  },

  // ============================================================================
  // FACULTY OF SCIENCE (FS)
  // 理学院
  // ============================================================================

  {
    name_en: 'Bachelor of Science (Hons) — Biochemistry',
    name_zh: '理学荣誉学士（生物化学）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Science (FS)',
    faculty_zh: '理学院',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 15000,
    tuition_international_cny_estimate: cny(15000),
    tuition_note: '每学期RM 7,500 = 每学年RM 15,000（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation，化学与生物成绩优秀（B级及以上）；数学成绩良好；IELTS 6.0或TOEFL iBT 80；提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、马来西亚政府奖学金（MGS）、MyBrain15研究生资助；UPM理学院部分实验室提供本科生研究助理机会。',
    curriculum_zh:
      '核心课程包括：有机与无机化学、生物化学基础（蛋白质、核酸、酶学）、细胞生物学与遗传学、分子生物学技术（PCR、电泳、克隆）、生物信息学入门、代谢生化与信号转导、酶工程与应用生物技术、天然产物化学（热带植物提取）、生物化学研究方法、毕业论文研究。',
    career_prospects_zh:
      '生物技术研究助理、医药公司实验室科学家、食品科学技术员、医学检验技术员、研究生升学（MSc/PhD）。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；UPM理学院为马来西亚最早提供自然科学本科教育的机构之一，理学学位在学术界和产业界均受认可。',
    application_deadline_note: '6月/7月入学：申请截止通常为每年3月底；以UPM入学处官网公告为准。',
  },

  {
    name_en: 'Bachelor of Science (Hons) — Biology / Environmental Biology',
    name_zh: '理学荣誉学士（生物学/环境生物学）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Science (FS)',
    faculty_zh: '理学院',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 15000,
    tuition_international_cny_estimate: cny(15000),
    tuition_note: '每学期RM 7,500 = 每学年RM 15,000（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation，生物及化学成绩良好（B级及以上）；IELTS 6.0或TOEFL iBT 80；提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、马来西亚政府奖学金（MGS）、MyBrain15研究生资助；马来西亚自然资源与环境部相关奖学金（符合条件者）。',
    curriculum_zh:
      '核心课程包括：普通生物学与细胞生物学、植物学与植物分类学、动物学与动物行为学、生态学与环境科学、遗传学与进化生物学、微生物学基础、野生动植物保育生物学（东南亚热带生物多样性为特色）、环境评估技术、生物统计学、生物学研究方法与野外实习。',
    career_prospects_zh:
      '环境咨询师、野生动植物保育官员、国家公园管理员、生物研究助理、环境影响评估（EIA）专员。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证；UPM理学院生物学系与马来西亚热带生物多样性研究中心（UPM Biodiversity Unit）紧密合作，具备独特的热带生态研究优势。',
    application_deadline_note: '6月/7月入学：申请截止通常为每年3月底；以UPM入学处官网公告为准。',
  },

  {
    name_en: 'Bachelor of Science (Hons) — Chemistry',
    name_zh: '理学荣誉学士（化学）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Science (FS)',
    faculty_zh: '理学院',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [6, 7],
    tuition_international_myr: 15000,
    tuition_international_cny_estimate: cny(15000),
    tuition_note: '每学期RM 7,500 = 每学年RM 15,000（国际生，来源：UPM官方学费表）',
    min_ielts: 6.0,
    min_toefl: 80,
    min_gpa: null,
    requirements_zh:
      '高中或A-Level/UEC/Foundation，化学及数学成绩优秀（B级及以上）；物理或生物成绩良好；IELTS 6.0或TOEFL iBT 80；提交个人陈述及推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM国际生奖学金、马来西亚政府奖学金（MGS）、MyBrain15研究生资助；马来西亚化学学会（Institute of Chemistry Malaysia, IKM）相关奖学金。',
    curriculum_zh:
      '核心课程包括：物理化学与热力学、无机化学与配位化合物、有机合成化学、分析化学与仪器分析技术（GC-MS、NMR、HPLC）、量子化学与计算化学、绿色化学与可持续合成、聚合物化学与材料科学、天然产物化学、化学研究方法与实验技术、工业化学与化工应用。',
    career_prospects_zh:
      '分析化学师、化工生产工程师、实验室质量控制科学家、制药研发化学师、石油化工技术专员。',
    application_materials_zh:
      '网上申请表、护照复印件、高中/大学成绩单及证书、英语成绩证明（IELTS/TOEFL）、个人陈述、两封推荐信、护照照片。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；课程获马来西亚化学学会（IKM）认可，毕业生可申请注册化学师（Registered Chemist）资格。',
    application_deadline_note: '6月/7月入学：申请截止通常为每年3月底；以UPM入学处官网公告为准。',
  },

  {
    name_en: 'Master of Science (Biochemistry / Microbiology)',
    name_zh: '生物化学/微生物学理学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Science (FS)',
    faculty_zh: '理学院',
    field_category: 'Natural Sciences',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 15000,
    tuition_international_cny_estimate: cny(15000),
    tuition_note: '约MYR 15,000（总额估算，国际生，修课制）；研究制约MYR 9,000–12,000/年',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '生物化学、微生物学、生物学、化学或相关领域本科学位，CGPA 2.75及以上；IELTS 6.5或TOEFL iBT 90；研究计划书（研究制）；两封学术推荐信。',
    scholarship_available: true,
    scholarship_note_zh:
      'UPM研究生研究奖学金（GRF）、MyBrain15、马来西亚政府奖学金（MGS）；UPM理学院部分科研资助项目提供RA职位及生活补贴。',
    curriculum_zh:
      '研究方向包括：酶工程与工业微生物学、抗菌素耐药性机制与新型抗生素研究、热带真菌与微生物多样性（马来西亚特色）、蛋白质结构与功能研究、生物修复与环境微生物学、发酵工程与代谢工程、植物源天然产物的生化分析、宏基因组学与微生物群落分析。',
    career_prospects_zh:
      '生物技术公司研究科学家、大学讲师/研究员、政府生命科学研究所研究员、制药/保健品研发专家、农业生物技术顾问。',
    application_materials_zh:
      '网上申请表、护照复印件、本科成绩单及毕业证书、英语成绩证明（IELTS/TOEFL）、研究计划书（研究制）、两封推荐信、简历/CV、护照照片。',
    additional_requirements_zh: '研究制申请者建议提前联系UPM理学院导师，了解实验室当前研究课题及招生名额。',
    accreditation_zh: 'MQA认证；UPM理学院生命科学研究在马来西亚科学院（ASM）评估中表现优异，具有较强的国际科研合作网络。',
    application_deadline_note: '3月入学：截止约前一年12月；9月入学：截止约同年6月；以UPM SGS官网公告为准。',
  },

];

export default upmPrograms;

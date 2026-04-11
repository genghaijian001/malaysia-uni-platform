/**
 * Universiti Sains Malaysia (USM) - Complete Program Data (2025/2026 Intake)
 * Sources: https://www.usm.my, https://www.usm.my/index.php/en/academic-information
 * Last verified: 2026-04-01
 *
 * NOTES:
 *   - USM is Malaysia's only APEX (Accelerated Programme for Excellence) university.
 *   - QS World University Rankings 2025: #146.
 *   - Main campus: Penang (Gelugor); branch: USM Engineering Campus (Nibong Tebal, Penang);
 *     Health Campus: Kubang Kerian, Kelantan.
 *   - Tuition fees are for international students; figures are based on published
 *     2024/2025 schedules and may change. Per-year rates shown for bachelor/PhD;
 *     total programme cost shown for master (coursework).
 *   - MYR-to-CNY conversion uses approximate rate of 1 MYR = 1.55 CNY.
 *   - Undergraduate intake: September (main), some programmes also March.
 *   - Postgraduate intake: February/March and September.
 *   - Accreditation body: Malaysian Qualifications Agency (MQA / Agensi Kelayakan Malaysia).
 */

export interface USMProgram {
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
// SCHOOL OF COMPUTER SCIENCES (SCS / Pusat Pengajian Sains Komputer)
// ============================================================================

const computerSciencePrograms: USMProgram[] = [
  {
    name_en: 'Bachelor of Computer Science (Hons) – Software Engineering',
    name_zh: '计算机科学荣誉学士（软件工程方向）',
    degree_level: 'bachelor',
    faculty_en: 'School of Computer Sciences',
    faculty_zh: '计算机科学学院',
    field_category: 'Computing & IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 16875,
    tuition_international_cny_estimate: cny(16875),
    tuition_note: '学费以美元计算：USD 1,875/学期 = 约RM 16,875/年（汇率1 USD = 4.5 MYR，来源：USM 2025年官方招生手册）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 基础课程或同等学历）；数学与科学科目成绩优良；英语IELTS 6.0或TOEFL 550分以上；需提交成绩单、个人陈述及推荐信',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生奖学金（USM Fellowship）可豁免部分学费；另可申请马来西亚政府MyBrain15奖学金（研究生适用）',
    curriculum_zh:
      '核心课程包括：程序设计基础（Python/Java）、数据结构与算法、操作系统、计算机网络、软件工程原理、需求工程、软件测试与质量保证、面向对象设计与分析、数据库系统、移动应用开发、软件项目管理、毕业设计（Final Year Project）',
    career_prospects_zh:
      '软件工程师、全栈开发工程师、系统分析师、质量保证工程师、技术项目经理；可供职于科技公司、跨国企业IT部门、政府数字化部门及初创企业',
    application_materials_zh:
      '在线申请表（iStudent系统）；护照复印件；高中成绩证明（经认证）；英语成绩证明（IELTS/TOEFL）；个人陈述（500字以内）；两封推荐信；申请费收据',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证（马来西亚资历资格机构）；符合IEET（台湾工程教育认证机构）互认框架；USM为马来西亚唯一APEX大学，获国际认可',
    application_deadline_note: '9月入学：申请截止约为当年5月至6月；具体日期请参阅USM官网iStudent招生系统',
  },
  {
    name_en: 'Bachelor of Computer Science (Hons) – Network Computing',
    name_zh: '计算机科学荣誉学士（网络计算方向）',
    degree_level: 'bachelor',
    faculty_en: 'School of Computer Sciences',
    faculty_zh: '计算机科学学院',
    field_category: 'Computing & IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 16875,
    tuition_international_cny_estimate: cny(16875),
    tuition_note: '学费以美元计算：USD 1,875/学期 = 约RM 16,875/年（汇率1 USD = 4.5 MYR，来源：USM 2025年官方招生手册）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 基础课程或同等学历）；数学与科学科目成绩优良；英语IELTS 6.0或TOEFL 550分以上；需提交成绩单及推荐信',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生奖学金可豁免部分学费；表现优秀学生可申请院内助学金',
    curriculum_zh:
      '核心课程包括：计算机网络基础、网络协议与标准（TCP/IP、IPv6）、网络安全与防火墙、云计算与虚拟化、Linux系统管理、网络编程（Python/C）、物联网技术、无线网络与移动通信、网络管理与监控、数据中心运维、网络架构设计、毕业设计项目',
    career_prospects_zh:
      '网络工程师、云架构师、网络安全专家、系统管理员、IT基础设施顾问；可供职于电信运营商、云服务提供商、金融机构及政府信息部门',
    application_materials_zh:
      '在线申请表（iStudent系统）；护照复印件；高中成绩证明（经认证）；英语成绩证明；个人陈述；两封推荐信；申请费收据',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；USM计算机科学学院是马来西亚最早设立的计算机科学院系之一，获国际学术界广泛认可',
    application_deadline_note: '9月入学：申请截止约为当年5月至6月；请参阅USM官网公告',
  },
  {
    name_en: 'Bachelor of Computer Science (Hons) – Intelligent Computing',
    name_zh: '计算机科学荣誉学士（智能计算方向）',
    degree_level: 'bachelor',
    faculty_en: 'School of Computer Sciences',
    faculty_zh: '计算机科学学院',
    field_category: 'Computing & IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 16875,
    tuition_international_cny_estimate: cny(16875),
    tuition_note: '学费以美元计算：USD 1,875/学期 = 约RM 16,875/年（汇率1 USD = 4.5 MYR，来源：USM 2025年官方招生手册）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 基础课程或同等学历）；数学成绩须达优良；英语IELTS 6.0或TOEFL 550分以上；需提交成绩单及推荐信',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生奖学金可豁免部分学费；STEM领域优秀学生可获额外资助',
    curriculum_zh:
      '核心课程包括：人工智能导论、机器学习与深度学习、自然语言处理、计算机视觉、数据挖掘与大数据分析、知识表示与推理、神经网络基础、Python数据科学、统计学习方法、智能系统开发、强化学习、毕业设计（AI应用项目）',
    career_prospects_zh:
      'AI工程师、数据科学家、机器学习工程师、算法研究员、数据分析师；可供职于科技公司（谷歌、微软、华为）、金融量化机构、医疗AI企业及科研机构',
    application_materials_zh:
      '在线申请表（iStudent系统）；护照复印件；高中成绩证明（经认证）；英语成绩证明；个人陈述；两封推荐信；申请费收据',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；该方向由USM计算机科学学院与人工智能研究中心联合提供，享有研究资源优势',
    application_deadline_note: '9月入学：申请截止约为当年5月至6月；请参阅USM官网公告',
  },
  {
    name_en: 'Master of Computer Science (by Coursework)',
    name_zh: '计算机科学硕士（授课型）',
    degree_level: 'master',
    faculty_en: 'School of Computer Sciences',
    faculty_zh: '计算机科学学院',
    field_category: 'Computing & IT',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 36000,
    tuition_international_cny_estimate: cny(36000),
    tuition_note: '学费以美元计算：USD 8,000（全项目）= 约RM 36,000（汇率1 USD = 4.5 MYR，来源：USM 2025年官方招生手册）',
    min_ielts: 6.5,
    min_toefl: 580,
    min_gpa: 2.75,
    requirements_zh:
      '计算机科学、信息技术或相关领域学士学位（CGPA ≥ 2.75 / 4.0）；英语IELTS 6.5或TOEFL 580分以上；提交学位证书、成绩单、英语成绩及两封学术推荐信；可能需要面试',
    scholarship_available: true,
    scholarship_note_zh:
      'USM研究生奖学金（Graduate Assistant）可豁免学费并提供生活津贴；MyBrain15奖学金（马来西亚教育部）为硕士生提供资助',
    curriculum_zh:
      '核心课程包括：高级算法与数据结构、分布式系统与云计算、人工智能应用、信息安全管理、大数据分析与处理、软件架构设计、研究方法论、专题研究项目（Research Project）；选修课涵盖机器学习、自然语言处理、区块链技术等',
    career_prospects_zh:
      '高级软件工程师、IT顾问、系统架构师、研发工程师、大学讲师；适合有意在科技行业进阶或攻读博士学位的学生',
    application_materials_zh:
      '在线申请表（USM研究生系统）；护照复印件；学士学位证书及成绩单（认证复印件）；英语成绩证明（IELTS/TOEFL）；两封学术推荐信；个人陈述/研究兴趣说明；申请费收据',
    additional_requirements_zh: '部分申请者需参加在线面试；CGPA低于2.75但有相关工作经验者可酌情考虑',
    accreditation_zh:
      'MQA认证；USM为马来西亚APEX大学，计算机科学学院研究产出位居马来西亚前列',
    application_deadline_note: '3月入学：截止约12月；9月入学：截止约5月；以USM研究生院官网公告为准',
  },
  {
    name_en: 'Master of Computer Science (by Research)',
    name_zh: '计算机科学硕士（研究型）',
    degree_level: 'master',
    faculty_en: 'School of Computer Sciences',
    faculty_zh: '计算机科学学院',
    field_category: 'Computing & IT',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 16650,
    tuition_international_cny_estimate: cny(16650),
    tuition_note: '学费以美元计算：USD 1,850/学期 = 约RM 8,325/学期 = 约RM 16,650/年（汇率1 USD = 4.5 MYR，来源：USM 2025年官方招生手册）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 2.75,
    requirements_zh:
      '计算机科学或相关领域学士学位（CGPA ≥ 2.75 / 4.0）；英语IELTS 6.0或TOEFL 550分以上；需提交研究计划书（Research Proposal）；须联系并获得导师初步同意接受',
    scholarship_available: true,
    scholarship_note_zh:
      'USM研究生助理奖学金（Graduate Assistantship）：学费全免 + 月生活津贴约MYR 1,500；MyBrain15奖学金可申请',
    curriculum_zh:
      '以独立研究为主，研究方向涵盖：人工智能与机器学习、计算机视觉、自然语言处理、网络安全、软件工程、并行与分布式计算、生物信息学计算；须完成并答辩硕士论文',
    career_prospects_zh:
      '研究员、博士研究生（衔接博士项目）、高校讲师、企业R&D工程师、政府科研机构研究人员',
    application_materials_zh:
      '在线申请表（USM研究生系统）；护照复印件；学士学位证书及成绩单（认证复印件）；英语成绩证明；研究计划书（Research Proposal，约2,000字）；两封学术推荐信；导师同意函（Supervisor Acceptance Letter）；申请费收据',
    additional_requirements_zh: '申请前建议先通过电邮联系目标导师，确认研究课题及录取意向',
    accreditation_zh:
      'MQA认证；USM计算机科学学院拥有多个国家级与国际联合研究实验室',
    application_deadline_note: '3月入学：截止约12月；9月入学：截止约5月；研究型项目全年受理，以导师接收为前提',
  },
  {
    name_en: 'Doctor of Philosophy (PhD) in Computer Science',
    name_zh: '计算机科学博士（PhD）',
    degree_level: 'phd',
    faculty_en: 'School of Computer Sciences',
    faculty_zh: '计算机科学学院',
    field_category: 'Computing & IT',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 16650,
    tuition_international_cny_estimate: cny(16650),
    tuition_note: '学费以美元计算：USD 1,850/学期 = 约RM 16,650/年（汇率1 USD = 4.5 MYR，来源：USM 2025年官方招生手册）',
    min_ielts: 6.5,
    min_toefl: 580,
    min_gpa: null,
    requirements_zh:
      '相关领域硕士学位（研究型优先）；英语IELTS 6.5或TOEFL 580分以上；提交详细研究计划书；须获导师接收函；面试可能为必要环节',
    scholarship_available: true,
    scholarship_note_zh:
      'USM博士生奖学金（Graduate Research Fellowship）：学费减免 + 月津贴约MYR 1,800–2,200；MyPhD奖学金（教育部）：每月MYR 3,100，共36个月',
    curriculum_zh:
      '全研究型课程：由导师指导独立开展原创性研究，研究方向包括：深度学习与神经网络、大规模数据处理、信息检索与知识图谱、网络安全与密码学、人机交互、量子计算、软件可靠性工程；须发表至少两篇SCI/SSCI期刊论文；完成并通过博士论文答辩',
    career_prospects_zh:
      '大学教授/副教授、高级研究员、企业首席数据科学家、政策顾问（数字经济领域）、创业创新（AI/科技领域）',
    application_materials_zh:
      '在线申请表（USM研究生系统）；护照复印件；硕士学位证书及成绩单（认证复印件）；英语成绩证明；详细研究计划书（Research Proposal，约5,000字）；三封学术推荐信；导师接收函；发表论文或研究成果列表（如有）；申请费收据',
    additional_requirements_zh: '强烈建议在正式申请前与意向导师取得联系并获得初步接收意向',
    accreditation_zh:
      'MQA认证；USM为马来西亚唯一APEX大学（QS #146，2025），博士学位获全球学术机构广泛认可',
    application_deadline_note: '3月入学：截止约12月；9月入学：截止约5月；全年均可申请，以导师接收为前提',
  },
];

// ============================================================================
// SCHOOL OF ENGINEERING (Pusat Pengajian Kejuruteraan)
// ============================================================================

const engineeringPrograms: USMProgram[] = [
  {
    name_en: 'Bachelor of Engineering (Civil Engineering) Hons',
    name_zh: '土木工程荣誉工学士',
    degree_level: 'bachelor',
    faculty_en: 'School of Civil Engineering',
    faculty_zh: '土木工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 20250,
    tuition_international_cny_estimate: cny(20250),
    tuition_note: '学费以美元计算：USD 2,250/学期 = 约RM 20,250/年（汇率1 USD = 4.5 MYR，来源：USM 2025年官方招生手册）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 工程基础课程）；数学及物理成绩须优良；英语IELTS 6.0或TOEFL 550分以上；需提交成绩证明及推荐信',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生奖学金；JPA奖学金（马来西亚公共服务局，优先马来西亚公民）；工程校区设有多项院校奖学金',
    curriculum_zh:
      '核心课程包括：工程力学（静力学与动力学）、结构分析与设计、材料力学、土力学与基础工程、水文学与水资源工程、交通运输工程、施工管理与项目规划、环境工程、地理信息系统（GIS）应用、土木工程实验、工程经济学、毕业设计项目',
    career_prospects_zh:
      '土木工程师（注册工程师PE）、结构工程师、项目经理、城市规划师、基础设施顾问；可供职于建筑公司、政府公共工程部门、咨询公司及国际工程承包商',
    application_materials_zh:
      '在线申请表（USM iStudent）；护照复印件；高中成绩证明（认证复印件）；英语成绩证明；个人陈述；两封推荐信；申请费收据',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；工程师认证委员会（BEM / Board of Engineers Malaysia）认可；符合《华盛顿协议》（Washington Accord）工程教育互认框架，学位获全球40余个国家认可',
    application_deadline_note: '9月入学：申请截止约为当年5月至6月；以USM工程校区官网公告为准',
  },
  {
    name_en: 'Bachelor of Engineering (Electrical & Electronics Engineering) Hons',
    name_zh: '电气与电子工程荣誉工学士',
    degree_level: 'bachelor',
    faculty_en: 'School of Electrical & Electronic Engineering',
    faculty_zh: '电气与电子工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 20250,
    tuition_international_cny_estimate: cny(20250),
    tuition_note: '学费以美元计算：USD 2,250/学期 = 约RM 20,250/年（汇率1 USD = 4.5 MYR，来源：USM 2025年官方招生手册）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 工程基础课程）；数学及物理成绩须优良；英语IELTS 6.0或TOEFL 550分以上；提交成绩单及推荐信',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生奖学金；工程校区院校奖学金；Intel、Motorola等工业伙伴提供实习奖学金（Penang半导体产业密集）',
    curriculum_zh:
      '核心课程包括：电路分析与网络理论、电子元件与电路设计、数字系统与逻辑设计、信号与系统、电磁场理论、电力系统与机电、控制系统工程、通信系统（模拟与数字）、嵌入式系统与微控制器、半导体器件物理、VLSI设计、工业实习（12周）、毕业设计项目',
    career_prospects_zh:
      '电气工程师、电子工程师、半导体工程师、通信工程师、自动化工程师；Penang为马来西亚半导体与电子制造中心，就业资源丰富；可供职于Intel、Motorola、Keysight、Infineon等全球500强',
    application_materials_zh:
      '在线申请表（USM iStudent）；护照复印件；高中成绩证明（认证复印件）；英语成绩证明；个人陈述；两封推荐信；申请费收据',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；BEM（马来西亚工程师局）认可；符合《华盛顿协议》框架；IEEE学生分会活跃',
    application_deadline_note: '9月入学：申请截止约为当年5月至6月；以USM工程校区官网公告为准',
  },
  {
    name_en: 'Bachelor of Engineering (Mechanical Engineering) Hons',
    name_zh: '机械工程荣誉工学士',
    degree_level: 'bachelor',
    faculty_en: 'School of Mechanical Engineering',
    faculty_zh: '机械工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 20250,
    tuition_international_cny_estimate: cny(20250),
    tuition_note: '学费以美元计算：USD 2,250/学期 = 约RM 20,250/年（汇率1 USD = 4.5 MYR，来源：USM 2025年官方招生手册）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 工程基础课程）；数学及物理成绩须优良；英语IELTS 6.0或TOEFL 550分以上；提交成绩单及推荐信',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生奖学金；工程校区院校奖学金；部分企业（丰田、宝腾、米其林等）提供赞助实习项目',
    curriculum_zh:
      '核心课程包括：工程力学（静力学、动力学）、热力学基础、流体力学、材料科学与工程、机械设计原理、制造工艺与技术、控制与自动化系统、有限元分析（FEA）、工业工程与人因工程、能源转换工程、CAD/CAM技术、工业实习（12周）、毕业设计项目',
    career_prospects_zh:
      '机械工程师、制造工程师、产品设计工程师、汽车工程师、能源工程师；可供职于制造业、航空维修、汽车产业及能源公司',
    application_materials_zh:
      '在线申请表（USM iStudent）；护照复印件；高中成绩证明（认证复印件）；英语成绩证明；个人陈述；两封推荐信；申请费收据',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；BEM（马来西亚工程师局）认可；符合《华盛顿协议》框架',
    application_deadline_note: '9月入学：申请截止约为当年5月至6月；以USM工程校区官网公告为准',
  },
  {
    name_en: 'Bachelor of Engineering (Aerospace Engineering) Hons',
    name_zh: '航空航天工程荣誉工学士',
    degree_level: 'bachelor',
    faculty_en: 'School of Aerospace Engineering',
    faculty_zh: '航空航天工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 24750,
    tuition_international_cny_estimate: cny(24750),
    tuition_note: '学费以美元计算：USD 2,750/学期 = 约RM 24,750/年（汇率1 USD = 4.5 MYR，来源：USM官方2025年国际生本科学费PDF）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 工程基础课程）；数学及物理成绩须达优良；英语IELTS 6.0或TOEFL 550分以上；提交成绩单及推荐信；此为马来西亚公立大学中唯一的航空航天工程学士项目之一',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生奖学金；马来西亚航空（Malaysia Airlines）、亚航（AirAsia）相关基金可提供实习及奖学金资助',
    curriculum_zh:
      '核心课程包括：航空动力学（空气动力学）、飞行力学与控制、航空结构分析、航空推进系统（喷气发动机）、航空材料与制造、飞行器设计、导航与航空电子系统、航空维修工程与适航性、计算流体力学（CFD）、航天器轨道力学导论、工业实习（航空公司/MRO机构）、毕业设计项目',
    career_prospects_zh:
      '飞行器设计工程师、航空维修工程师（MRO）、航空结构工程师、航空电子工程师、飞行性能分析师；可供职于马来西亚航空、亚航、空客（Airbus）、波音（Boeing）、CAAM（马来西亚民航局）',
    application_materials_zh:
      '在线申请表（USM iStudent）；护照复印件；高中成绩证明（认证复印件）；英语成绩证明；个人陈述（说明航空航天兴趣）；两封推荐信；申请费收据',
    additional_requirements_zh: '此项目竞争激烈，建议数学与物理成绩达A级；体格检查可能为毕业要求之一',
    accreditation_zh:
      'MQA认证；BEM（马来西亚工程师局）认可；符合《华盛顿协议》框架；USM航空航天工程学院是马来西亚最早开设此专业的公立大学',
    application_deadline_note: '9月入学：申请截止约为当年5月至6月；招生名额有限，建议尽早申请',
  },
  {
    name_en: 'Master of Engineering (by Coursework)',
    name_zh: '工程学硕士（授课型）',
    degree_level: 'master',
    faculty_en: 'School of Engineering (Engineering Campus)',
    faculty_zh: '工程学院（工程校区）',
    field_category: 'Engineering',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 20000,
    tuition_international_cny_estimate: cny(20000),
    tuition_note: '总学费约MYR 20,000（国际生，全项目），以USM研究生院最新公布为准',
    min_ielts: 6.5,
    min_toefl: 580,
    min_gpa: 2.75,
    requirements_zh:
      '相关工程领域学士学位（CGPA ≥ 2.75 / 4.0）；英语IELTS 6.5或TOEFL 580分以上；提交学位证书、成绩单及推荐信',
    scholarship_available: true,
    scholarship_note_zh:
      'USM研究生助理奖学金（Graduate Assistantship）；MyBrain15奖学金（马来西亚教育部，硕士阶段）',
    curriculum_zh:
      '核心课程包括：高级工程数学、工程研究方法论、专业工程管理、项目风险评估、技术创新与知识产权；选修课涵盖各工程子方向（土木/电气/机械/航空航天）高级专题；毕业研究项目（一学期）',
    career_prospects_zh:
      '高级工程师、工程项目经理、注册专业工程师（PE）、技术顾问、企业研发主管',
    application_materials_zh:
      '在线申请表（USM研究生系统）；护照复印件；学士学位证书及成绩单（认证复印件）；英语成绩证明；两封学术/专业推荐信；个人陈述；申请费收据',
    additional_requirements_zh: '具有工程行业工作经验者优先考虑',
    accreditation_zh:
      'MQA认证；BEM认可；《华盛顿协议》互认框架覆盖',
    application_deadline_note: '3月入学：截止约12月；9月入学：截止约5月；以USM研究生院官网公告为准',
  },
  {
    name_en: 'Doctor of Philosophy (PhD) in Engineering',
    name_zh: '工程学博士（PhD）',
    degree_level: 'phd',
    faculty_en: 'School of Engineering (Engineering Campus)',
    faculty_zh: '工程学院（工程校区）',
    field_category: 'Engineering',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 16650,
    tuition_international_cny_estimate: cny(16650),
    tuition_note: '学费以美元计算：USD 1,850/学期（工程类研究生）= 约RM 16,650/年（汇率1 USD = 4.5 MYR，来源：admission.usm.my/index.php/postgraduate/fee-pg）',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '相关领域硕士学位；英语IELTS 6.0或TOEFL iBT 79分以上；需提交详细研究计划书并获导师接收；可能须参加面试',
    scholarship_available: true,
    scholarship_note_zh:
      'USM博士研究生奖学金；MyPhD奖学金（教育部）：每月MYR 3,100，最长36个月；FRGS/PRGS等国家科研基金资助研究项目',
    curriculum_zh:
      '全研究型：在导师指导下开展原创工程研究，方向涵盖结构工程、智能电网与电力系统、纳米材料、无人机与航空技术、先进制造、可持续能源等；须发表至少两篇SCI期刊论文并通过博士论文答辩',
    career_prospects_zh:
      '大学教授/研究员、企业R&D主任、政府研究机构高级科学家、国际工程咨询专家',
    application_materials_zh:
      '在线申请表（USM研究生系统）；护照复印件；硕士学位证书及成绩单（认证复印件）；英语成绩证明；详细研究计划书；三封学术推荐信；导师接收函；发表论文列表（如有）；申请费收据',
    additional_requirements_zh: '建议申请前先联系目标导师确认研究课题及招生意向',
    accreditation_zh:
      'MQA认证；BEM认可；USM工程博士学位获全球学术机构广泛认可',
    application_deadline_note: '3月入学：截止约12月；9月入学：截止约5月；研究型项目全年均可申请',
  },
];

// ============================================================================
// SCHOOL OF MANAGEMENT (Pusat Pengajian Pengurusan)
// ============================================================================

const managementPrograms: USMProgram[] = [
  {
    name_en: 'Bachelor of Management (Hons) – Finance',
    name_zh: '管理学荣誉学士（金融方向）',
    degree_level: 'bachelor',
    faculty_en: 'School of Management',
    faculty_zh: '管理学院',
    field_category: 'Business & Management',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 20571,
    tuition_international_cny_estimate: cny(20571),
    tuition_note: '学费以美元计算：USD 2,285.71/学期 = 约RM 20,571/年（汇率1 USD = 4.5 MYR，来源：USM官方2025年国际生本科学费PDF）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 基础课程）；数学成绩须达良好；英语IELTS 6.0或TOEFL 550分以上；提交成绩单及推荐信',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生奖学金；管理学院设有企业赞助奖学金（与马来西亚本地银行及跨国企业合作）',
    curriculum_zh:
      '核心课程包括：微观经济学与宏观经济学、公司金融学、金融市场与机构、财务报表分析、投资学与证券分析、风险管理、国际金融、金融衍生品基础、企业估值、商业统计与数据分析、商业伦理与企业治理、实习（工业培训，3个月）',
    career_prospects_zh:
      '金融分析师、投资银行分析师、财务规划师、风险管理专员、企业财务经理；可供职于银行、保险、证券、基金管理及跨国企业财务部门',
    application_materials_zh:
      '在线申请表（USM iStudent）；护照复印件；高中成绩证明（认证复印件）；英语成绩证明；个人陈述；两封推荐信；申请费收据',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；USM管理学院课程设计参考AACSB标准（国际商学院协会）；部分课程与CFA课程框架衔接',
    application_deadline_note: '9月入学：申请截止约为当年5月至6月；以USM官网公告为准',
  },
  {
    name_en: 'Bachelor of Management (Hons) – Marketing',
    name_zh: '管理学荣誉学士（市场营销方向）',
    degree_level: 'bachelor',
    faculty_en: 'School of Management',
    faculty_zh: '管理学院',
    field_category: 'Business & Management',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 20571,
    tuition_international_cny_estimate: cny(20571),
    tuition_note: '学费以美元计算：USD 2,285.71/学期 = 约RM 20,571/年（汇率1 USD = 4.5 MYR，来源：USM官方2025年国际生本科学费PDF）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 基础课程）；英语成绩须良好；英语IELTS 6.0或TOEFL 550分以上；提交成绩单及推荐信',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生奖学金；管理学院企业合作奖学金',
    curriculum_zh:
      '核心课程包括：营销原理与消费者行为、市场调研方法、品牌管理、数字营销与社会媒体策略、广告与促销管理、国际营销、定价策略、零售与渠道管理、B2B营销、营销分析与大数据应用、营销道德与可持续发展、实习（工业培训）',
    career_prospects_zh:
      '市场营销专员、品牌经理、数字营销经理、市场研究分析师、产品经理；可供职于快消品公司、广告代理、电商平台及跨国企业市场部门',
    application_materials_zh:
      '在线申请表（USM iStudent）；护照复印件；高中成绩证明（认证复印件）；英语成绩证明；个人陈述；两封推荐信；申请费收据',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；USM管理学院为马来西亚历史最悠久的管理学院之一',
    application_deadline_note: '9月入学：申请截止约为当年5月至6月；以USM官网公告为准',
  },
  {
    name_en: 'Master of Business Administration (MBA)',
    name_zh: '工商管理硕士（MBA）',
    degree_level: 'master',
    faculty_en: 'School of Management',
    faculty_zh: '管理学院',
    field_category: 'Business & Management',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 43200,
    tuition_international_cny_estimate: cny(43200),
    tuition_note: '学费以美元计算：USD 9,600（全项目）= 约RM 43,200（汇率1 USD = 4.5 MYR，来源：USM 2025年官方招生手册）',
    min_ielts: 6.5,
    min_toefl: 580,
    min_gpa: 2.75,
    requirements_zh:
      '任何领域学士学位（CGPA ≥ 2.75 / 4.0）；至少2年工作经验（部分班次要求）；英语IELTS 6.5或TOEFL 580分以上；提交学位证书、简历、两封推荐信及个人陈述；需参加面试',
    scholarship_available: true,
    scholarship_note_zh:
      'USM研究生奖学金；MyBrain15奖学金（马来西亚教育部，硕士阶段）；部分企业提供员工进修资助',
    curriculum_zh:
      '核心课程包括：管理经济学与分析、会计与财务决策、市场营销管理、组织行为与人力资源管理、战略管理、运营管理与供应链、企业财务管理、商业伦理与企业社会责任、国际商务、创业与创新管理；选修专业方向：金融管理、营销管理、人力资源管理、供应链管理；须完成商业项目（Business Project）',
    career_prospects_zh:
      '高级管理人员（总监/VP）、创业家、咨询顾问、企业战略规划师、政府政策顾问；适合有志于晋升管理层或转换行业的专业人士',
    application_materials_zh:
      '在线申请表（USM研究生系统）；护照复印件；学士学位证书及成绩单（认证复印件）；英语成绩证明（IELTS/TOEFL）；最新简历（含工作经验）；两封推荐信（专业/学术）；个人陈述（500字）；面试通知函后参加面试；申请费收据',
    additional_requirements_zh: 'GMAT成绩可作为加分项（非强制）；工作经验较丰富者CGPA要求可酌情放宽',
    accreditation_zh:
      'MQA认证；USM管理学院MBA课程参照国际商学院标准设计；USM为APEX大学，学位获国际广泛认可',
    application_deadline_note: '3月入学：截止约12月；9月入学：截止约5月；建议提前申请以确保面试时段',
  },
  {
    name_en: 'Master of Management (by Research)',
    name_zh: '管理学硕士（研究型）',
    degree_level: 'master',
    faculty_en: 'School of Management',
    faculty_zh: '管理学院',
    field_category: 'Business & Management',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 12600,
    tuition_international_cny_estimate: cny(12600),
    tuition_note: '学费以美元计算：USD 1,400/学期（管理类研究生）= 约RM 12,600/年（汇率1 USD = 4.5 MYR，来源：admission.usm.my/index.php/postgraduate/fee-pg）',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: 2.75,
    requirements_zh:
      '管理、商业或相关领域学士学位（CGPA ≥ 2.75 / 4.0）；英语IELTS 6.0或TOEFL iBT 79分以上；需提交研究计划书并联系导师',
    scholarship_available: true,
    scholarship_note_zh:
      'USM研究生助理奖学金（Graduate Assistantship）：学费全免 + 生活津贴；MyBrain15奖学金可申请',
    curriculum_zh:
      '全研究型课程：在导师指导下撰写硕士论文，研究方向涵盖：战略管理与组织行为、金融市场与行为金融、可持续供应链管理、数字营销与消费者行为、企业社会责任、人力资源管理、创业生态系统研究',
    career_prospects_zh:
      '商学院讲师、企业研究员、政府政策分析师、博士研究深造、管理咨询顾问',
    application_materials_zh:
      '在线申请表（USM研究生系统）；护照复印件；学士学位证书及成绩单（认证复印件）；英语成绩证明；研究计划书（Research Proposal）；两封学术推荐信；导师接收函；申请费收据',
    additional_requirements_zh: '建议申请前联系意向导师确认研究课题',
    accreditation_zh:
      'MQA认证；USM管理学院研究成果在马来西亚国内位居前列',
    application_deadline_note: '3月入学：截止约12月；9月入学：截止约5月；研究型项目全年受理（以导师接收为前提）',
  },
  {
    name_en: 'Doctor of Philosophy (PhD) in Management',
    name_zh: '管理学博士（PhD）',
    degree_level: 'phd',
    faculty_en: 'School of Management',
    faculty_zh: '管理学院',
    field_category: 'Business & Management',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 12600,
    tuition_international_cny_estimate: cny(12600),
    tuition_note: '学费以美元计算：USD 1,400/学期（管理类研究生）= 约RM 12,600/年（汇率1 USD = 4.5 MYR，来源：admission.usm.my/index.php/postgraduate/fee-pg）',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '相关领域硕士学位；英语IELTS 6.0或TOEFL iBT 79分以上；详细研究计划书；导师接收函；可能须面试',
    scholarship_available: true,
    scholarship_note_zh:
      'USM博士研究生奖学金；MyPhD奖学金（每月MYR 3,100，最长36个月）；国家科研基金资助',
    curriculum_zh:
      '全研究型：在导师指导下开展原创管理学研究，须发表学术论文（SSCI/Scopus期刊）并通过博士论文答辩；研究方向包括组织行为、企业战略、金融经济、市场营销科学、供应链管理及创业研究',
    career_prospects_zh:
      '商学院教授/副教授、企业高级研究主任、政府经济顾问、国际咨询机构合伙人',
    application_materials_zh:
      '在线申请表（USM研究生系统）；护照复印件；硕士学位证书及成绩单（认证复印件）；英语成绩证明；详细研究计划书（约5,000字）；三封学术推荐信；导师接收函；发表论文列表（如有）；申请费收据',
    additional_requirements_zh: '建议申请前与意向导师深入沟通研究方向',
    accreditation_zh:
      'MQA认证；USM APEX大学地位使其博士学位获国际学术机构广泛认可',
    application_deadline_note: '3月入学：截止约12月；9月入学：截止约5月',
  },
];

// ============================================================================
// SCHOOL OF PHARMACEUTICAL SCIENCES (PPFFAR / Pusat Pengajian Sains Farmasi)
// ============================================================================

const pharmacyPrograms: USMProgram[] = [
  {
    name_en: 'Bachelor of Pharmacy (Hons)',
    name_zh: '药学荣誉学士',
    degree_level: 'bachelor',
    faculty_en: 'School of Pharmaceutical Sciences',
    faculty_zh: '药学院',
    field_category: 'Pharmacy & Health Sciences',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 25650,
    tuition_international_cny_estimate: cny(25650),
    tuition_note: '学费以美元计算：USD 2,850/学期 = 约RM 25,650/年（汇率1 USD = 4.5 MYR，来源：USM 2025年官方招生手册）',
    min_ielts: 6.5,
    min_toefl: 580,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 基础课程）；化学、生物、数学成绩须优良（至少达B级）；英语IELTS 6.5或TOEFL 580分以上；提交成绩单、个人陈述及推荐信；竞争激烈，建议成绩达A级',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生奖学金；马来西亚药剂师协会（MPS）奖学金；部分制药企业提供本科赞助（如Pfizer、Pharmaniaga）',
    curriculum_zh:
      '核心课程包括：药学化学（有机/无机/分析）、药剂学与剂型设计、药理学与毒理学、药物动力学（Pharmacokinetics）、生物药剂学、临床药学与药物治疗学、药物微生物学与免疫学、药物监管事务（注册与法规）、医院药学实习、社区药学实习、药物研发基础、毕业研究项目',
    career_prospects_zh:
      '注册药剂师（医院/社区/工业）、临床药师、药物研发科学家、药品注册专员、药学教育工作者；可供职于医院、诊所、制药公司（Pfizer、Novartis、Pharmaniaga）及药品监管机构（NPRA）',
    application_materials_zh:
      '在线申请表（USM iStudent）；护照复印件；高中成绩证明（认证复印件）；英语成绩证明（IELTS 6.5+）；个人陈述（阐述从事药学的动机）；两封推荐信；体格检查证明（部分情况下）；申请费收据',
    additional_requirements_zh: '须完成校内面试（可能为线上或现场）；需提供健康证明确认无传染性疾病',
    accreditation_zh:
      'MQA认证；马来西亚药剂师局（Pharmacy Board Malaysia）认可；USM药学院是马来西亚最古老的药学院，历史超过50年，毕业生可直接注册为执业药剂师',
    application_deadline_note: '9月入学：申请截止约为当年4月至5月；招生名额极为有限，建议尽早提交申请',
  },
  {
    name_en: 'Master of Pharmacy (Clinical Pharmacy)',
    name_zh: '药学硕士（临床药学）',
    degree_level: 'master',
    faculty_en: 'School of Pharmaceutical Sciences',
    faculty_zh: '药学院',
    field_category: 'Pharmacy & Health Sciences',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 20000,
    tuition_international_cny_estimate: cny(20000),
    tuition_note: '总学费约MYR 20,000（国际生，全项目），以USM药学院官网最新公布为准',
    min_ielts: 6.5,
    min_toefl: 580,
    min_gpa: 2.75,
    requirements_zh:
      '药学学士学位（B.Pharm / B.Pharm Hons，CGPA ≥ 2.75 / 4.0）；英语IELTS 6.5或TOEFL 580分以上；提交成绩单、个人陈述及推荐信；部分方向需临床工作经验',
    scholarship_available: true,
    scholarship_note_zh:
      'USM研究生助理奖学金；MyBrain15奖学金（马来西亚教育部硕士阶段资助）',
    curriculum_zh:
      '核心课程包括：高级药物治疗学、循证医学与临床实践、药物流行病学、药物安全监测（药物警戒）、临床药动学与个体化给药、重症患者药学监护、肿瘤临床药学、医院药学高级实习（轮转）、药物经济学评价、临床研究方法与统计',
    career_prospects_zh:
      '临床药师（专科医院）、药物警戒专员、卫生政策研究员、药学院讲师、制药公司医学事务经理',
    application_materials_zh:
      '在线申请表（USM研究生系统）；护照复印件；药学学士学位证书及成绩单（认证复印件）；英语成绩证明；注册药剂师执照复印件（如有）；两封学术推荐信；个人陈述；申请费收据',
    additional_requirements_zh: '具有医院或诊所药学工作经验者优先',
    accreditation_zh:
      'MQA认证；马来西亚药剂师局认可；USM药学院为马来西亚药学研究的旗舰机构',
    application_deadline_note: '3月入学：截止约12月；9月入学：截止约5月',
  },
  {
    name_en: 'Doctor of Philosophy (PhD) in Pharmacy',
    name_zh: '药学博士（PhD）',
    degree_level: 'phd',
    faculty_en: 'School of Pharmaceutical Sciences',
    faculty_zh: '药学院',
    field_category: 'Pharmacy & Health Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 22500,
    tuition_international_cny_estimate: cny(22500),
    tuition_note: '学费以美元计算：USD 2,500/学期（药学类研究生）= 约RM 22,500/年（汇率1 USD = 4.5 MYR，来源：admission.usm.my/index.php/postgraduate/fee-pg）',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '药学或生物医学相关硕士学位；英语IELTS 6.0或TOEFL iBT 79分以上；详细研究计划书；导师接收函',
    scholarship_available: true,
    scholarship_note_zh:
      'USM博士生奖学金；MyPhD奖学金（每月MYR 3,100，最长36个月）；FRGS/PRGS国家科研基金资助',
    curriculum_zh:
      '全研究型：在导师指导下开展药学原创研究，方向涵盖：纳米药物与靶向给药系统、天然产物药理学、计算药学与药物设计、抗癌药物研究、生物制药与生物类似药开发、感染性疾病药物研究；须发表SCI期刊论文并通过博士论文答辩',
    career_prospects_zh:
      '药学教授/研究员、制药公司研发总监、国家药品监管机构科学家、生物技术企业创始人',
    application_materials_zh:
      '在线申请表（USM研究生系统）；护照复印件；硕士学位证书及成绩单（认证复印件）；英语成绩证明；详细研究计划书（约5,000字）；三封学术推荐信；导师接收函；发表论文列表（如有）；申请费收据',
    additional_requirements_zh: '建议申请前与目标导师详细沟通研究方向及资金情况',
    accreditation_zh:
      'MQA认证；USM药学院博士学位获全球制药学界广泛认可',
    application_deadline_note: '3月入学：截止约12月；9月入学：截止约5月；全年均可申请（以导师接收为前提）',
  },
];

// ============================================================================
// SCHOOL OF MEDICAL SCIENCES & AMDI (PPSP / AMDI)
// ============================================================================

const medicalPrograms: USMProgram[] = [
  {
    name_en: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)',
    name_zh: '医学与外科学士（MBBS）',
    degree_level: 'bachelor',
    faculty_en: 'School of Medical Sciences (Health Campus, Kelantan)',
    faculty_zh: '医学科学学院（健康校区，吉兰丹）',
    field_category: 'Medicine & Health Sciences',
    duration_years: 5,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 123750,
    tuition_international_cny_estimate: cny(123750),
    tuition_note: '学费以美元计算：USD 13,750/学期 = 约RM 123,750/年（汇率1 USD = 4.5 MYR，来源：USM 2025年官方招生手册）',
    min_ielts: 7.0,
    min_toefl: 600,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 医学预科）；化学、生物、数学/物理成绩须达优良（A级）；英语IELTS 7.0或TOEFL 600分以上；需通过USM入学考试（UAT）或其他认可评估；需参加面试（Panel Interview）；体格检查及健康声明',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生医学奖学金（极为有限）；JPA奖学金（优先马来西亚公民）；部分国家政府提供海外医学留学资助（如中国国家留学基金委CSC）',
    curriculum_zh:
      '第1-2年（基础医学）：人体解剖学、生理学、生物化学、胚胎学、医学微生物学与免疫学、药理学基础、病理学基础、医学伦理与专业素养；第3年（临床前医学）：临床技能基础、内科学入门、外科学入门、妇产科学入门、儿科学入门、社区医学；第4-5年（临床医学）：内科学、外科学、妇产科学、儿科学、精神病学、家庭医学、急诊医学临床实习轮转（Hospital USM）、研究项目',
    career_prospects_zh:
      '注册医师（需完成豪斯曼/住院医师培训）、专科医师（内外科各专科）、家庭医学医师、医学研究员、公共卫生官员；USM医学院毕业生在马来西亚及全球医疗机构广受认可',
    application_materials_zh:
      '在线申请表（USM iStudent）；护照复印件；高中成绩证明（认证复印件）；英语成绩证明（IELTS 7.0+）；个人陈述（阐述从医动机）；两封推荐信（学术或医疗从业者）；体格检查报告；犯罪记录良好证明；面试邀请后参加面试；申请费收据',
    additional_requirements_zh:
      '须通过USM面试委员会评估；需提供乙肝疫苗接种记录；录取名额极为有限（国际生约5-10名/年）；申请需提早规划',
    accreditation_zh:
      'MQA认证；马来西亚医学委员会（MMC）认可；MBBS学位被英国GMC（General Medical Council）及多国医疗监管机构认可；USM为世界卫生组织（WHO）医学教育名录收录院校',
    application_deadline_note: '9月入学：申请截止约为当年3月至4月；招生极为竞争，建议至少提前一年规划申请',
  },
  {
    name_en: 'Master of Medicine (Internal Medicine)',
    name_zh: '内科医学硕士（Master of Medicine – Internal Medicine）',
    degree_level: 'master',
    faculty_en: 'School of Medical Sciences (Health Campus)',
    faculty_zh: '医学科学学院（健康校区）',
    field_category: 'Medicine & Health Sciences',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [3],
    tuition_international_myr: 67500,
    tuition_international_cny_estimate: cny(67500),
    tuition_note: '学费以美元计算：临床专科硕士总学费USD 60,000（4年制）= 约RM 270,000总计，约RM 67,500/年（汇率1 USD = 4.5 MYR，来源：admission.usm.my/index.php/postgraduate/fee-pg）',
    min_ielts: 7.0,
    min_toefl: 600,
    min_gpa: null,
    requirements_zh:
      '已注册执业医师（MBBS或同等学历）；须完成豪斯曼培训（Housemanship，2年）；英语IELTS 7.0或TOEFL 600分以上；提交医师注册证书、工作经历证明、两封临床推荐信；须参加笔试及临床考核',
    scholarship_available: false,
    scholarship_note_zh:
      '马来西亚政府公共服务部（JPA）提供部分公立医院医师专科培训资助（主要面向马来西亚公民）',
    curriculum_zh:
      '临床培训项目：在Hospital USM进行内科各亚专科轮转（心脏病学、内分泌学、肾脏病学、血液病学、神经内科、风湿免疫科、感染病学、呼吸内科、消化内科）；须完成研究项目及论文；定期参加病例讨论（Grand Round）、期末理论与临床考核（MRCP格式）',
    career_prospects_zh:
      '内科专科医师（顾问医师/Consultant）、亚专科医师（心脏科/肾脏科等）、大学医学讲师、医学研究员',
    application_materials_zh:
      '在线申请表（USM研究生系统）；护照复印件；MBBS学位证书及成绩单（认证复印件）；医师注册证书（MMC/相关国家医疗局）；工作经历证明（包括豪斯曼培训完成证明）；两封临床推荐信；英语成绩证明；申请费收据',
    additional_requirements_zh:
      '须通过医学院内部笔试及临床技能评估；竞争激烈，建议在豪斯曼培训期间积累相关科室临床经验',
    accreditation_zh:
      'MQA认证；马来西亚医学委员会（MMC）认可专科学位；与英国皇家内科医师学会（RCP）培训标准接轨',
    application_deadline_note: '主要3月（年初）入学；申请截止约为前一年10月至11月；以USM医学院官网公告为准',
  },
  {
    name_en: 'Doctor of Philosophy (PhD) in Medicine / Biomedical Sciences',
    name_zh: '医学/生物医学博士（PhD）',
    degree_level: 'phd',
    faculty_en: 'Advanced Medical & Dental Institute (AMDI) / School of Medical Sciences',
    faculty_zh: '高级医学与牙科研究院（AMDI）/ 医学科学学院',
    field_category: 'Medicine & Health Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 22500,
    tuition_international_cny_estimate: cny(22500),
    tuition_note: '学费以美元计算：USD 2,500/学期（医学类研究生）= 约RM 22,500/年（汇率1 USD = 4.5 MYR，来源：admission.usm.my/index.php/postgraduate/fee-pg）',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '生物医学科学、医学或相关领域硕士学位；英语IELTS 6.0或TOEFL iBT 79分以上；详细研究计划书；须获导师接收；医学背景（MBBS）者可直接申请',
    scholarship_available: true,
    scholarship_note_zh:
      'USM博士生奖学金；MyPhD奖学金（每月MYR 3,100，最长36个月）；AMDI设有专项国际研究员资助计划',
    curriculum_zh:
      '全研究型：在导师指导下开展生物医学原创研究，方向涵盖：癌症生物学与肿瘤免疫学、干细胞与再生医学、感染病学与疫苗研究、神经退行性疾病（阿尔茨海默症/帕金森症）、心血管疾病分子机制、精准医学与基因组学、药物发现与转化研究；须发表SCI期刊论文并通过博士论文答辩',
    career_prospects_zh:
      '医学研究员/科学家、生物技术公司研发总监、大学教授、国家卫生研究院（NIH）研究员、医学教育专家',
    application_materials_zh:
      '在线申请表（USM研究生系统）；护照复印件；硕士学位证书及成绩单（认证复印件）；英语成绩证明；详细研究计划书（约5,000字）；三封学术推荐信；导师接收函；发表论文列表（如有）；申请费收据',
    additional_requirements_zh:
      'AMDI位于槟城北海（Bertam），为独立生物医学研究机构，拥有先进实验室设施；建议先访问AMDI网站了解各研究组方向',
    accreditation_zh:
      'MQA认证；USM AMDI为马来西亚国家级生物医学研究中心，研究产出位居东南亚前列',
    application_deadline_note: '3月入学：截止约12月；9月入学：截止约5月；全年均可申请（以导师接收为前提）',
  },
];

// ============================================================================
// SCHOOL OF DISTANCE EDUCATION (PPPJJ / Pusat Pengajian Pendidikan Jarak Jauh)
// ============================================================================

const distanceEducationPrograms: USMProgram[] = [
  {
    name_en: 'Bachelor of Social Sciences (Hons) – Open Learning',
    name_zh: '社会科学荣誉学士（远程开放学习）',
    degree_level: 'bachelor',
    faculty_en: 'School of Distance Education (PPPJJ)',
    faculty_zh: '远程教育学院（PPPJJ）',
    field_category: 'Social Sciences',
    duration_years: 4,
    language_of_instruction: 'Malay / English',
    intake_months: [3, 9],
    tuition_international_myr: 10000,
    tuition_international_cny_estimate: cny(10000),
    tuition_note: '每学年约MYR 10,000（国际生远程课程），以USM远程教育学院官网最新公布为准',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业或同等学历；马来语或英语均可修读；英语IELTS 6.0或TOEFL 550分以上（英语授课班次）；远程学习模式，适合在职人士',
    scholarship_available: false,
    scholarship_note_zh:
      'PTPTN助学贷款（主要适用于马来西亚公民）；国际生可咨询USM远程教育学院了解可用资助',
    curriculum_zh:
      '核心课程包括：社会学与社会研究方法、人类学导论、政治学与公共政策、经济学基础、社区发展与规划、性别研究、媒体与传播、马来西亚多元文化研究、定量与定性研究方法、论文或研究项目；采混合式教学（线上 + 定期面授）',
    career_prospects_zh:
      '社会工作者、政府公务员、NGO项目协调员、社区发展专员、企业社会责任（CSR）专员',
    application_materials_zh:
      '在线申请表（USM PPPJJ系统）；护照复印件；高中成绩证明（认证复印件）；英语成绩证明（如适用）；申请费收据',
    additional_requirements_zh: '远程教育模式适合在职人士，可弹性安排学习时间；偶尔需到槟城主校区参加密集课程',
    accreditation_zh:
      'MQA认证；USM远程教育学院为马来西亚最早开展远程高等教育的机构之一，成立于1971年',
    application_deadline_note: '3月及9月均有入学；申请截止约为入学前2-3个月；以USM PPPJJ官网公告为准',
  },
  {
    name_en: 'Bachelor of Management (Hons) – Distance Learning',
    name_zh: '管理学荣誉学士（远程学习）',
    degree_level: 'bachelor',
    faculty_en: 'School of Distance Education (PPPJJ)',
    faculty_zh: '远程教育学院（PPPJJ）',
    field_category: 'Business & Management',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 10500,
    tuition_international_cny_estimate: cny(10500),
    tuition_note: '每学年约MYR 10,500（国际生远程课程），以USM远程教育学院官网最新公布为准',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业或同等学历；英语IELTS 6.0或TOEFL 550分以上；远程学习模式，适合在职人士',
    scholarship_available: false,
    scholarship_note_zh:
      'PTPTN助学贷款（主要适用于马来西亚公民）；国际生可咨询了解可用资助',
    curriculum_zh:
      '核心课程包括：管理学原理、微观与宏观经济学、会计学基础、企业法律与商业道德、市场营销管理、人力资源管理、运营管理、企业财务管理、战略管理、创业学、数字商务、论文或业务报告；采混合式教学模式',
    career_prospects_zh:
      '企业管理人员、行政助理、创业者、政府部门行政官员、NGO管理协调员',
    application_materials_zh:
      '在线申请表（USM PPPJJ系统）；护照复印件；高中成绩证明（认证复印件）；英语成绩证明；申请费收据',
    additional_requirements_zh: '适合有工作经验的在职人士；学习进度可灵活调整',
    accreditation_zh:
      'MQA认证；USM远程教育学院管理学课程与主校区同等学历认可',
    application_deadline_note: '3月及9月均有入学；申请截止约为入学前2-3个月；以USM PPPJJ官网公告为准',
  },
];

// ============================================================================
// SCHOOL OF PHYSICS (Pusat Pengajian Fizik) &
// SCHOOL OF CHEMICAL SCIENCES (Pusat Pengajian Sains Kimia)
// ============================================================================

const sciencePrograms: USMProgram[] = [
  {
    name_en: 'Bachelor of Science (Hons) – Physics',
    name_zh: '理学荣誉学士（物理学）',
    degree_level: 'bachelor',
    faculty_en: 'School of Physics',
    faculty_zh: '物理学院',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 15469,
    tuition_international_cny_estimate: cny(15469),
    tuition_note: '学费以美元计算：USD 1,718.75/学期 = 约RM 15,469/年（汇率1 USD = 4.5 MYR，来源：USM官方2025年国际生本科学费PDF）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 科学基础课程）；物理及数学成绩须优良；英语IELTS 6.0或TOEFL 550分以上；提交成绩单及推荐信',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生奖学金；JPA奖学金（优先马来西亚公民）；物理学院设有若干研究助理资助',
    curriculum_zh:
      '核心课程包括：经典力学、电磁学、量子力学基础、热力学与统计力学、光学与波动物理、固体物理学、核与粒子物理导论、数学物理方法、实验物理学（实验室课程）、计算物理（Python/MATLAB）、毕业研究项目；可选修方向：材料物理、医学物理、应用光学',
    career_prospects_zh:
      '物理学研究员、工程师（半导体/光学/医疗器械）、数据科学家、精算师、中学/大学教师；Penang半导体产业为物理毕业生提供丰富就业机会',
    application_materials_zh:
      '在线申请表（USM iStudent）；护照复印件；高中成绩证明（认证复印件）；英语成绩证明；个人陈述；两封推荐信；申请费收据',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；USM物理学院为马来西亚顶尖物理研究中心，在材料物理及医学物理领域研究实力雄厚',
    application_deadline_note: '9月入学：申请截止约为当年5月至6月；以USM官网公告为准',
  },
  {
    name_en: 'Bachelor of Science (Hons) – Chemistry',
    name_zh: '理学荣誉学士（化学）',
    degree_level: 'bachelor',
    faculty_en: 'School of Chemical Sciences',
    faculty_zh: '化学科学学院',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 15469,
    tuition_international_cny_estimate: cny(15469),
    tuition_note: '学费以美元计算：USD 1,718.75/学期 = 约RM 15,469/年（汇率1 USD = 4.5 MYR，来源：USM官方2025年国际生本科学费PDF）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 科学基础课程）；化学及数学成绩须优良；英语IELTS 6.0或TOEFL 550分以上；提交成绩单及推荐信',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生奖学金；化学科学学院设有企业赞助奖学金（与化工及制药企业合作）',
    curriculum_zh:
      '核心课程包括：有机化学（1-3）、无机化学、分析化学与仪器分析、物理化学、生物化学基础、化学热力学、量子化学导论、有机合成实验室、光谱分析（NMR/IR/MS）、绿色化学与可持续化学、工业化学导论、毕业研究项目',
    career_prospects_zh:
      '化学分析师、研发化学家（制药/材料）、质量控制专员、环境化学师、化工工程师；可供职于制药公司、石化公司、食品检测机构及高校',
    application_materials_zh:
      '在线申请表（USM iStudent）；护照复印件；高中成绩证明（认证复印件）；英语成绩证明；个人陈述；两封推荐信；申请费收据',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；马来西亚化学学会（IKM）认可；USM化学科学学院为马来西亚最早的化学学院之一',
    application_deadline_note: '9月入学：申请截止约为当年5月至6月；以USM官网公告为准',
  },
  {
    name_en: 'Bachelor of Science (Hons) – Mathematics',
    name_zh: '理学荣誉学士（数学）',
    degree_level: 'bachelor',
    faculty_en: 'School of Mathematical Sciences',
    faculty_zh: '数学科学学院',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 15469,
    tuition_international_cny_estimate: cny(15469),
    tuition_note: '学费以美元计算：USD 1,718.75/学期 = 约RM 15,469/年（汇率1 USD = 4.5 MYR，来源：USM官方2025年国际生本科学费PDF）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 科学基础课程）；数学成绩须达优良（A级）；英语IELTS 6.0或TOEFL 550分以上；提交成绩单及推荐信',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生奖学金；数学科学学院设有若干研究助理资助及荣誉学生奖学金',
    curriculum_zh:
      '核心课程包括：微积分（单变量/多变量）、线性代数、离散数学、数学分析（实分析/复分析）、常微分方程与偏微分方程、概率论与数理统计、数值方法与计算数学、抽象代数、拓扑学导论、数学建模与仿真、运筹学、毕业研究项目',
    career_prospects_zh:
      '数学建模师、精算师、数据分析师、金融量化分析师、统计学家；可供职于银行保险、科技公司、政府统计局及高校',
    application_materials_zh:
      '在线申请表（USM iStudent）；护照复印件；高中成绩证明（认证复印件）；英语成绩证明；个人陈述；两封推荐信；申请费收据',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；USM数学科学学院为马来西亚数学研究重镇，在应用数学与统计领域研究实力突出',
    application_deadline_note: '9月入学：申请截止约为当年5月至6月；以USM官网公告为准',
  },
  {
    name_en: 'Bachelor of Science (Hons) – Biology',
    name_zh: '理学荣誉学士（生物学）',
    degree_level: 'bachelor',
    faculty_en: 'School of Biological Sciences',
    faculty_zh: '生物科学学院',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 15469,
    tuition_international_cny_estimate: cny(15469),
    tuition_note: '学费以美元计算：USD 1,718.75/学期 = 约RM 15,469/年（汇率1 USD = 4.5 MYR，来源：USM官方2025年国际生本科学费PDF）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业（STPM / A-Level / UEC / 科学基础课程）；生物及化学成绩须优良；英语IELTS 6.0或TOEFL 550分以上；提交成绩单及推荐信',
    scholarship_available: true,
    scholarship_note_zh:
      'USM国际生奖学金；生物科学学院设有研究助理资助（尤其热带生物多样性研究方向）',
    curriculum_zh:
      '核心课程包括：细胞生物学与分子生物学、遗传学与基因组学、生理学（动物/植物）、微生物学、生态学与环境生物学、进化生物学、发育生物学、生物统计学、生物化学基础、热带生物多样性（USM特色课程）、生物技术导论、实验技能（PCR/显微镜学等）、毕业研究项目',
    career_prospects_zh:
      '生物研究员、生物技术工程师、环境顾问、医学检验师（须进一步培训）、中学生物教师；可供职于生物技术公司、环保机构、卫生部及科研院所',
    application_materials_zh:
      '在线申请表（USM iStudent）；护照复印件；高中成绩证明（认证复印件）；英语成绩证明；个人陈述；两封推荐信；申请费收据',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证；USM生物科学学院在热带生态学与海洋生物学研究方面具国际声誉；与多个国际研究机构建立合作',
    application_deadline_note: '9月入学：申请截止约为当年5月至6月；以USM官网公告为准',
  },
  {
    name_en: 'Master of Science (by Research) – Physics / Chemistry / Biology / Mathematics',
    name_zh: '理学硕士（研究型）——物理学 / 化学 / 生物学 / 数学',
    degree_level: 'master',
    faculty_en: 'School of Sciences (Physics / Chemical Sciences / Biological Sciences / Mathematical Sciences)',
    faculty_zh: '理学学院（物理/化学/生物/数学方向）',
    field_category: 'Natural Sciences',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 16200,
    tuition_international_cny_estimate: cny(16200),
    tuition_note: '学费以美元计算：USD 1,800/学期（理学类研究生）= 约RM 16,200/年（汇率1 USD = 4.5 MYR，来源：admission.usm.my/index.php/postgraduate/fee-pg）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 2.75,
    requirements_zh:
      '相关理学领域学士学位（CGPA ≥ 2.75 / 4.0）；英语IELTS 6.0或TOEFL 550分以上；需提交研究计划书并获导师接收',
    scholarship_available: true,
    scholarship_note_zh:
      'USM研究生助理奖学金（Graduate Assistantship）：学费全免 + 月津贴约MYR 1,500；MyBrain15奖学金可申请',
    curriculum_zh:
      '全研究型：在导师指导下开展理学硕士研究，研究方向根据学院而定（如纳米材料、计算化学、热带生态学、数理金融等）；须完成并答辩硕士论文；可能包括少量指定研究生课程',
    career_prospects_zh:
      '研究员、博士研究深造、理学院讲师、企业R&D科学家、政府研究机构研究员',
    application_materials_zh:
      '在线申请表（USM研究生系统）；护照复印件；学士学位证书及成绩单（认证复印件）；英语成绩证明；研究计划书（约2,000字）；两封学术推荐信；导师接收函；申请费收据',
    additional_requirements_zh: '建议申请前先联系意向导师确认研究课题及招生名额',
    accreditation_zh:
      'MQA认证；USM理学院各方向均有多个活跃研究组，在物理、化学、生物领域的国际发表量位居马来西亚前列',
    application_deadline_note: '3月入学：截止约12月；9月入学：截止约5月；研究型项目全年受理（以导师接收为前提）',
  },
  {
    name_en: 'Doctor of Philosophy (PhD) in Natural Sciences (Physics / Chemistry / Biology / Mathematics)',
    name_zh: '自然科学博士（PhD）——物理学 / 化学 / 生物学 / 数学',
    degree_level: 'phd',
    faculty_en: 'School of Sciences (Physics / Chemical Sciences / Biological Sciences / Mathematical Sciences)',
    faculty_zh: '理学学院（物理/化学/生物/数学方向）',
    field_category: 'Natural Sciences',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [3, 9],
    tuition_international_myr: 16200,
    tuition_international_cny_estimate: cny(16200),
    tuition_note: '学费以美元计算：USD 1,800/学期（理学类研究生）= 约RM 16,200/年（汇率1 USD = 4.5 MYR，来源：admission.usm.my/index.php/postgraduate/fee-pg）',
    min_ielts: 6.0,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '相关理学领域硕士学位；英语IELTS 6.5或TOEFL 580分以上；详细研究计划书；导师接收函',
    scholarship_available: true,
    scholarship_note_zh:
      'USM博士研究生奖学金；MyPhD奖学金（每月MYR 3,100，最长36个月）；FRGS/PRGS等国家科研基金资助研究项目',
    curriculum_zh:
      '全研究型：在导师指导下开展前沿科学研究，须发表至少两篇SCI期刊论文并通过博士论文答辩；USM理学院博士研究活跃领域包括：纳米光子学、太阳能电池材料、天然产物化学、系统生物学、组合数学等',
    career_prospects_zh:
      '大学教授/研究员、国家级实验室科学家、企业首席科学家、政府科学技术政策顾问',
    application_materials_zh:
      '在线申请表（USM研究生系统）；护照复印件；硕士学位证书及成绩单（认证复印件）；英语成绩证明；详细研究计划书；三封学术推荐信；导师接收函；发表论文列表（如有）；申请费收据',
    additional_requirements_zh: '建议申请前与意向导师详细沟通研究方向及资金情况',
    accreditation_zh:
      'MQA认证；USM APEX大学地位使其理学博士学位获全球学术机构广泛认可',
    application_deadline_note: '3月入学：截止约12月；9月入学：截止约5月；全年均可申请（以导师接收为前提）',
  },
];

// ============================================================================
// COMBINED EXPORT
// ============================================================================

const usmPrograms: USMProgram[] = [
  ...computerSciencePrograms,
  ...engineeringPrograms,
  ...managementPrograms,
  ...pharmacyPrograms,
  ...medicalPrograms,
  ...distanceEducationPrograms,
  ...sciencePrograms,
];

export default usmPrograms;

/**
 * Universiti Teknologi Malaysia (UTM) - Program Data (2025/2026 Intake)
 *
 * Source URLs (official / verified):
 *   - https://www.utm.my  (official UTM website)
 *   - https://sps.utm.my  (UTM School of Postgraduate Studies)
 *   - https://admission.utm.my  (UTM Admissions)
 *   - https://fee.utm.my  (UTM Fee Structure)
 *   - https://www.utm.my/faculty/  (Faculty listing)
 *   - UTM International Student Prospectus 2025/2026
 *
 * NOTES:
 *   - UTM is ranked among Malaysia's top research universities (QS World 2025 rank ~351-400).
 *   - Main campus: Johor Bahru (UTM JB); branch campus: Kuala Lumpur (UTM KL).
 *   - Tuition fees shown are for international students (non-Malaysian). Fees are
 *     approximate based on published 2024/2025 schedules and may change.
 *   - MYR-to-CNY conversion uses approximate rate of 1 MYR = 1.55 CNY.
 *   - UTM semester system: Semester 1 (Sept/Oct), Semester 2 (Feb/Mar), Short Sem (June).
 *   - Undergraduate intake: February and September.
 *   - Postgraduate intake: February and September (some PhD programmes open all year).
 *   - All fees marked "(estimate)" are based on general UTM fee schedules; students
 *     should verify on the official UTM website or contact the relevant faculty.
 *
 * Last verified: Based on information available up to early 2025 / March 2026.
 */

// ============================================================================
// INTERFACE
// ============================================================================

export interface UTMProgram {
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
  min_ielts: number | null;
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

// MYR to CNY approximate rate
const MYR_TO_CNY = 1.55;

function cny(myr: number): number {
  return Math.round(myr * MYR_TO_CNY);
}

// ============================================================================
// UNDERGRADUATE PROGRAMS (本科)
// ============================================================================

const undergraduatePrograms: UTMProgram[] = [
  // ── Faculty of Civil Engineering (Fakulti Kejuruteraan Awam) ─────────────
  {
    name_en: 'Bachelor of Engineering (Civil Engineering)',
    name_zh: '土木工程学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Civil Engineering',
    faculty_zh: '土木工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 14500,
    tuition_international_cny_estimate: cny(14500),
    tuition_note: '每学年约RM14,500（国际生），总学费约RM58,000（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业（SPM/A-Level/STPM/UEC/高考或同等学历），数学及物理成绩优秀。中国学生需高考成绩达一本线以上，或完成受认可的预科课程（如A-Level、基础课程）。英语要求：雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh:
      'UTM提供多种奖学金：UTM International Excellence Award（成绩优异国际生）、马来西亚政府奖学金（部分国家）、以及各院系专项奖学金。',
    curriculum_zh:
      '第一年：工程力学、数学、化学、物理、工程制图；第二年：结构分析、土力学、水文学、测量学；第三年：钢筋混凝土结构、岩土工程、交通工程、水资源管理；第四年：毕业设计（论文）、高级结构工程、基础设施管理、工业实习（6个月）。',
    career_prospects_zh:
      '建筑与基础设施公司、政府公共工程部门、房地产开发、工程咨询公司、国际工程承包商。可担任结构工程师、项目经理、土木工程师、道路与桥梁工程师等职位。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩（雅思/托福）、护照复印件、个人陈述（Personal Statement）、推荐信（1-2封）、高考成绩单（中国学生）。',
    additional_requirements_zh: null,
    accreditation_zh:
      '马来西亚工程师委员会（BEM）认证、华盛顿协议成员、马来西亚学术资格认证机构（MQA）认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。建议提前4-6个月申请。',
  },
  {
    name_en: 'Bachelor of Engineering (Environmental Engineering)',
    name_zh: '环境工程学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Civil Engineering',
    faculty_zh: '土木工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 14500,
    tuition_international_cny_estimate: cny(14500),
    tuition_note: '每学年约RM14,500（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学、物理及化学成绩优秀。中国学生：高考一本线以上或预科课程。英语要求：雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：工程数学、基础化学、力学、环境科学导论；第二年：水质分析、污水处理工程、空气污染控制；第三年：固体废物管理、环境影响评估、水资源工程；第四年：毕业设计、环境修复技术、工业实习。',
    career_prospects_zh:
      '环保局、工程咨询公司、污水处理企业、能源公司、联合国环境署等国际机构。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      'BEM认证、华盛顿协议成员、MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },

  // ── Faculty of Mechanical Engineering (Fakulti Kejuruteraan Mekanikal) ───
  {
    name_en: 'Bachelor of Engineering (Mechanical Engineering)',
    name_zh: '机械工程学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Mechanical Engineering',
    faculty_zh: '机械工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 14500,
    tuition_international_cny_estimate: cny(14500),
    tuition_note: '每学年约RM14,500（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学及物理成绩优秀。中国学生：高考一本线以上，英语要求雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：工程力学、热力学基础、数学、物理；第二年：材料力学、流体力学、机械设计、制造工艺；第三年：机器动力学、有限元分析、控制工程、传热学；第四年：毕业设计项目、高级制造技术、工业实习（6个月）。',
    career_prospects_zh:
      '制造业、汽车行业、航空航天、石油与天然气企业、机器人与自动化公司、军工行业。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      'BEM认证、华盛顿协议成员、MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },
  {
    name_en: 'Bachelor of Engineering (Aeronautical Engineering)',
    name_zh: '航空工程学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Mechanical Engineering',
    faculty_zh: '机械工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 15000,
    tuition_international_cny_estimate: cny(15000),
    tuition_note: '每学年约RM15,000（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学及物理成绩优秀，物理成绩尤为重要。中国学生：高考一本线以上或预科课程。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：力学、数学、气体动力学入门、航空概论；第二年：空气动力学、飞机结构、推进系统、飞行力学；第三年：航空电子学、飞机设计、复合材料、系统工程；第四年：毕业设计（飞机设计项目）、工业实习。',
    career_prospects_zh:
      '马来西亚航空、亚航、马来西亚皇家空军、飞机维修公司（MRO）、航空航天研究机构。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      'BEM认证、华盛顿协议成员、MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },

  // ── Faculty of Electrical Engineering (Fakulti Kejuruteraan Elektrik) ────
  {
    name_en: 'Bachelor of Engineering (Electrical Engineering)',
    name_zh: '电气工程学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Electrical Engineering',
    faculty_zh: '电气工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 14500,
    tuition_international_cny_estimate: cny(14500),
    tuition_note: '每学年约RM14,500（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学及物理成绩优秀。英语要求：雅思6.0或托福550分或同等成绩。中国学生高考一本线以上。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：电路分析、数学、物理、编程入门；第二年：电子学、电力系统、电磁学、信号与系统；第三年：控制系统、电力电子、通信系统、嵌入式系统；第四年：毕业设计项目、高级电力系统/可再生能源、工业实习。',
    career_prospects_zh:
      '电力公司（Tenaga Nasional Berhad等）、通信公司（Maxis、Celcom等）、半导体制造企业、自动化行业、政府监管机构。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      'BEM认证、华盛顿协议成员、MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },
  {
    name_en: 'Bachelor of Engineering (Electronics Engineering)',
    name_zh: '电子工程学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Electrical Engineering',
    faculty_zh: '电气工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 14500,
    tuition_international_cny_estimate: cny(14500),
    tuition_note: '每学年约RM14,500（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学及物理成绩优秀。英语雅思6.0或同等。中国学生高考一本线以上。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：电路基础、模拟电子学、数字电路、数学；第二年：微电子学、集成电路设计、通信原理、编程；第三年：VLSI设计、射频工程、嵌入式系统、信号处理；第四年：毕业设计、高级半导体技术、工业实习。',
    career_prospects_zh:
      '半导体公司（英特尔马来西亚、德州仪器等）、消费电子企业、通信设备制造商、政府研究机构。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      'BEM认证、华盛顿协议成员、MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },

  // ── Faculty of Chemical & Energy Engineering ─────────────────────────────
  {
    name_en: 'Bachelor of Engineering (Chemical Engineering)',
    name_zh: '化学工程学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Chemical and Energy Engineering',
    faculty_zh: '化学与能源工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 14500,
    tuition_international_cny_estimate: cny(14500),
    tuition_note: '每学年约RM14,500（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学、物理及化学成绩优秀。中国学生高考一本线以上，英语雅思6.0或同等。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：工程数学、普通化学、物理、计算机辅助工程；第二年：化工热力学、流体力学、质量传递、反应工程；第三年：分离工程、过程控制与仪表、化工安全、工厂设计；第四年：毕业设计（化工厂设计项目）、工业实习（6个月）。',
    career_prospects_zh:
      '石化工业、天然气与能源公司（马来西亚国家石油公司PETRONAS等）、制药企业、食品加工业、环保工程公司。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      'BEM认证、华盛顿协议成员、MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },

  // ── Faculty of Computing (Fakulti Komputeran) ────────────────────────────
  {
    name_en: 'Bachelor of Computer Science (Computer Systems & Networking)',
    name_zh: '计算机科学学士（计算机系统与网络）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Computing',
    faculty_zh: '计算机学院',
    field_category: 'IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 13500,
    tuition_international_cny_estimate: cny(13500),
    tuition_note: '每学年约RM13,500（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学成绩优秀。中国学生高考一本线以上，英语雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：编程基础（C/Java）、离散数学、计算机体系结构、微积分；第二年：操作系统、数据结构与算法、计算机网络、数据库系统；第三年：网络安全、云计算、高级网络技术、软件工程；第四年：毕业设计项目、工业实习。',
    career_prospects_zh:
      '网络工程师、系统管理员、网络安全分析师、云计算架构师、IT运营经理。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证、马来西亚信息通信技术学会（MBOT）认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },
  {
    name_en: 'Bachelor of Computer Science (Software Engineering)',
    name_zh: '计算机科学学士（软件工程）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Computing',
    faculty_zh: '计算机学院',
    field_category: 'IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 13500,
    tuition_international_cny_estimate: cny(13500),
    tuition_note: '每学年约RM13,500（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学成绩优秀。英语雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：编程导论、数据结构、软件工程概论、数学；第二年：面向对象编程、需求工程、数据库设计、人机交互；第三年：软件测试与质量保证、软件项目管理、移动应用开发、专业选修；第四年：毕业项目（软件开发）、工业实习。',
    career_prospects_zh:
      '软件开发工程师、前端/后端/全栈工程师、软件架构师、DevOps工程师、产品经理。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证、MBOT认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },
  {
    name_en: 'Bachelor of Computer Science (Data Engineering)',
    name_zh: '计算机科学学士（数据工程）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Computing',
    faculty_zh: '计算机学院',
    field_category: 'IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 13500,
    tuition_international_cny_estimate: cny(13500),
    tuition_note: '每学年约RM13,500（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学成绩优秀。英语雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：编程基础、数学与统计、数据库入门；第二年：大数据技术（Hadoop/Spark）、数据仓库、机器学习基础；第三年：深度学习、数据可视化、云数据平台、商业智能；第四年：毕业设计（数据项目）、工业实习。',
    career_prospects_zh:
      '数据工程师、数据分析师、商业智能分析师、机器学习工程师、大数据架构师。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证、MBOT认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },
  {
    name_en: 'Bachelor of Information Technology (Information Systems)',
    name_zh: '信息技术学士（信息系统）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Computing',
    faculty_zh: '计算机学院',
    field_category: 'IT',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 13500,
    tuition_international_cny_estimate: cny(13500),
    tuition_note: '每学年约RM13,500（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学成绩良好。英语雅思6.0或同等成绩。中国学生高考达到本科录取线。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：IT基础、系统分析、编程、组织行为；第二年：企业系统、ERP系统、数据库管理、网络基础；第三年：IT项目管理、商业流程管理、信息安全、e-Commerce；第四年：毕业项目、工业实习。',
    career_prospects_zh:
      'IT顾问、企业信息化管理师、系统分析师、ERP实施顾问、IT项目经理。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证、MBOT认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },

  // ── Faculty of Architecture and Built Environment ─────────────────────────
  {
    name_en: 'Bachelor of Science (Architecture)',
    name_zh: '建筑学理学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Built Environment and Surveying',
    faculty_zh: '建筑环境与测量学院',
    field_category: 'Architecture',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 13000,
    tuition_international_cny_estimate: cny(13000),
    tuition_note: '每学年约RM13,000（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学成绩优秀，具备一定美术/设计基础。英语雅思6.0或同等成绩。中国学生高考一本线以上。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：建筑设计基础、制图与建模（AutoCAD/Revit）、建筑历史、数学；第二年：建筑设计工作室、结构原理、建筑材料与技术；第三年：高级建筑设计、城市规划、环境设计、绿色建筑技术；第四年：建筑设计毕业论文与作品集、工业实习。',
    career_prospects_zh:
      '建筑事务所、政府规划局、房地产开发商、施工管理公司、城市规划机构。可继续攻读建筑学硕士并考取注册建筑师资格。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、设计/艺术作品集（如有）、个人陈述。',
    additional_requirements_zh: '具备一定的艺术与设计基础者优先。',
    accreditation_zh:
      'MQA认证、马来西亚建筑师学会（PAM）认证预备阶段、中国教育部认证。',
    application_deadline_note:
      '仅9月入学，申请截止通常为当年6月。',
  },
  {
    name_en: 'Bachelor of Science (Quantity Surveying)',
    name_zh: '工料测量学理学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Built Environment and Surveying',
    faculty_zh: '建筑环境与测量学院',
    field_category: 'Architecture',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 12500,
    tuition_international_cny_estimate: cny(12500),
    tuition_note: '每学年约RM12,500（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学成绩优秀。英语雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：建筑技术、数学、测量入门、工程经济学；第二年：工程造价基础、合同管理、施工方法；第三年：高级造价管理、风险管理、项目融资；第四年：毕业论文、工业实习（工程造价公司）。',
    career_prospects_zh:
      '工程造价公司、建筑公司、政府工程部门、房地产开发商、银行基础设施融资部门。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证、马来西亚工料测量师学会（BQSM）认证、中国教育部认证。',
    application_deadline_note:
      '仅9月入学，申请截止通常为当年6月。',
  },

  // ── Faculty of Science (Fakulti Sains) ───────────────────────────────────
  {
    name_en: 'Bachelor of Science (Mathematics)',
    name_zh: '数学理学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Science',
    faculty_zh: '理学院',
    field_category: 'Science',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 11000,
    tuition_international_cny_estimate: cny(11000),
    tuition_note: '每学年约RM11,000（国际生）（估算）',
    min_ielts: 5.5,
    min_toefl: 530,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学成绩优秀。英语雅思5.5或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：微积分、线性代数、离散数学、编程；第二年：数值分析、概率与统计、实分析、常微分方程；第三年：运筹学、图论、数学建模、毕业项目。',
    career_prospects_zh:
      '精算师、数据分析师、教师/讲师、金融建模师、研究员、IT行业数学相关岗位。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },
  {
    name_en: 'Bachelor of Science (Chemistry)',
    name_zh: '化学理学士',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Science',
    faculty_zh: '理学院',
    field_category: 'Science',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 11000,
    tuition_international_cny_estimate: cny(11000),
    tuition_note: '每学年约RM11,000（国际生）（估算）',
    min_ielts: 5.5,
    min_toefl: 530,
    min_gpa: null,
    requirements_zh:
      '高中毕业，化学和数学成绩优秀。英语雅思5.5或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：无机化学、有机化学、物理化学、实验化学；第二年：分析化学、材料化学、生物化学、仪器分析；第三年：工业化学、高分子化学、研究项目。',
    career_prospects_zh:
      '化工企业、制药公司、食品与饮料行业、科研机构、教育机构。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },

  // ── Faculty of Management (Fakulti Pengurusan) ────────────────────────────
  {
    name_en: 'Bachelor of Management (Technology)',
    name_zh: '管理学士（技术管理）',
    degree_level: 'bachelor',
    faculty_en: 'Faculty of Management',
    faculty_zh: '管理学院',
    field_category: 'Business',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 12000,
    tuition_international_cny_estimate: cny(12000),
    tuition_note: '每学年约RM12,000（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学和英语成绩良好。英语雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM International Excellence Award等。',
    curriculum_zh:
      '第一年：管理原理、经济学、统计学、商业沟通；第二年：技术创新管理、运营管理、组织行为、财务管理；第三年：战略管理、项目管理、科技创业、毕业项目。',
    career_prospects_zh:
      '科技公司管理培训生、IT项目经理、创业孵化器、政府机构管理岗位、科技咨询公司。',
    application_materials_zh:
      '高中成绩单及毕业证书、英语成绩、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },
];

// ============================================================================
// POSTGRADUATE COURSEWORK PROGRAMS (授课式硕士)
// ============================================================================

const postgraduateCourseworkPrograms: UTMProgram[] = [
  // ── Faculty of Civil Engineering ─────────────────────────────────────────
  {
    name_en: 'Master of Engineering (Civil — Structures)',
    name_zh: '工程硕士（土木—结构工程）',
    degree_level: 'master',
    faculty_en: 'Faculty of Civil Engineering',
    faculty_zh: '土木工程学院',
    field_category: 'Engineering',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 18000,
    tuition_international_cny_estimate: cny(18000),
    tuition_note: '总学费约RM18,000–22,000（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 2.75,
    requirements_zh:
      '土木工程或相关领域本科学位，CGPA 2.75/4.0或同等成绩。相关工作经验者优先。英语雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh:
      'UTM研究生奖学金（UTM Zamalah）、马来西亚国家深造基金（PTPTN，部分适用国际生）等。',
    curriculum_zh:
      '高级结构分析、有限元方法、钢筋混凝土高级设计、桥梁工程、地震工程、研究方法学、论文（或工业报告）。',
    career_prospects_zh:
      '高级结构工程师、工程项目主管、政府工程顾问、建筑开发总监、大学讲师/研究员。',
    application_materials_zh:
      '本科学位证书和成绩单、英语成绩（雅思/托福）、个人陈述、简历/CV、两封推荐信、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh:
      'BEM认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },
  {
    name_en: 'Master of Engineering (Transportation Engineering)',
    name_zh: '工程硕士（交通工程）',
    degree_level: 'master',
    faculty_en: 'Faculty of Civil Engineering',
    faculty_zh: '土木工程学院',
    field_category: 'Engineering',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 18000,
    tuition_international_cny_estimate: cny(18000),
    tuition_note: '总学费约RM18,000–22,000（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 2.75,
    requirements_zh:
      '土木工程或相关领域本科学位，CGPA 2.75/4.0或同等成绩。英语雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '交通规划、道路设计、交通安全工程、公共交通系统、智能交通系统（ITS）、交通模型、毕业论文或工业报告。',
    career_prospects_zh:
      '交通规划师、道路工程师、城市交通顾问、政府交通部门高级工程师。',
    application_materials_zh:
      '本科学位证书和成绩单、英语成绩、个人陈述、简历、两封推荐信、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh:
      'BEM认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },

  // ── Faculty of Mechanical Engineering ────────────────────────────────────
  {
    name_en: 'Master of Engineering (Mechanical — Manufacturing)',
    name_zh: '工程硕士（机械—制造工程）',
    degree_level: 'master',
    faculty_en: 'Faculty of Mechanical Engineering',
    faculty_zh: '机械工程学院',
    field_category: 'Engineering',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 18000,
    tuition_international_cny_estimate: cny(18000),
    tuition_note: '总学费约RM18,000–22,000（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 2.75,
    requirements_zh:
      '机械工程或相关领域本科学位，CGPA 2.75/4.0或同等成绩。英语雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '高级制造工艺、精密工程、工业4.0与智能制造、CAD/CAM、机器人制造系统、质量工程、毕业论文。',
    career_prospects_zh:
      '制造工程经理、工业4.0顾问、自动化系统工程师、产品开发总监。',
    application_materials_zh:
      '本科学位证书和成绩单、英语成绩、个人陈述、简历、两封推荐信、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh:
      'BEM认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },

  // ── Faculty of Electrical Engineering ────────────────────────────────────
  {
    name_en: 'Master of Engineering (Electrical — Power)',
    name_zh: '工程硕士（电气—电力工程）',
    degree_level: 'master',
    faculty_en: 'Faculty of Electrical Engineering',
    faculty_zh: '电气工程学院',
    field_category: 'Engineering',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 18000,
    tuition_international_cny_estimate: cny(18000),
    tuition_note: '总学费约RM18,000–22,000（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 2.75,
    requirements_zh:
      '电气工程或相关领域本科学位，CGPA 2.75/4.0或同等成绩。英语雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '高级电力系统分析、电力电子与驱动、可再生能源系统、智能电网、电力系统保护与控制、电力市场、毕业论文。',
    career_prospects_zh:
      '电力系统工程师、可再生能源顾问、电网规划专家、国家电力公司（Tenaga Nasional）高级工程师。',
    application_materials_zh:
      '本科学位证书和成绩单、英语成绩、个人陈述、简历、两封推荐信、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh:
      'BEM认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },
  {
    name_en: 'Master of Engineering (Electrical — Telecommunication)',
    name_zh: '工程硕士（电气—电信工程）',
    degree_level: 'master',
    faculty_en: 'Faculty of Electrical Engineering',
    faculty_zh: '电气工程学院',
    field_category: 'Engineering',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 18000,
    tuition_international_cny_estimate: cny(18000),
    tuition_note: '总学费约RM18,000–22,000（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 2.75,
    requirements_zh:
      '电气/电子/通信工程或相关领域本科学位，CGPA 2.75/4.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '无线通信系统、5G/6G技术、天线与传播、信号处理、光纤通信、无线网络与移动通信、毕业论文。',
    career_prospects_zh:
      '通信工程师、无线网络规划师、5G技术顾问、电信公司高级工程师、通信设备研发工程师。',
    application_materials_zh:
      '本科学位证书和成绩单、英语成绩、个人陈述、简历、两封推荐信、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh:
      'BEM认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },

  // ── Faculty of Computing ──────────────────────────────────────────────────
  {
    name_en: 'Master of Science (Computer Science)',
    name_zh: '计算机科学理学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Computing',
    faculty_zh: '计算机学院',
    field_category: 'IT',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 16000,
    tuition_international_cny_estimate: cny(16000),
    tuition_note: '总学费约RM16,000–20,000（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 2.75,
    requirements_zh:
      '计算机科学、IT或相关领域本科学位，CGPA 2.75/4.0或同等成绩。英语雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '高级算法、机器学习与深度学习、分布式系统、网络安全、大数据分析、自然语言处理、毕业论文（或工业研究报告）。',
    career_prospects_zh:
      '高级软件工程师、AI/ML工程师、数据科学家、CTO、科技公司技术总监、大学讲师。',
    application_materials_zh:
      '本科学位证书和成绩单、英语成绩、个人陈述、简历/CV、两封推荐信、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证、MBOT认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },
  {
    name_en: 'Master of Science (Information Technology)',
    name_zh: '信息技术理学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Computing',
    faculty_zh: '计算机学院',
    field_category: 'IT',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 16000,
    tuition_international_cny_estimate: cny(16000),
    tuition_note: '总学费约RM16,000–20,000（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 2.75,
    requirements_zh:
      '任何本科学位（IT相关背景者优先），CGPA 2.75/4.0或同等成绩。非IT背景者可能需修桥接课程。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '企业架构与IT治理、项目管理、信息安全管理、云计算与虚拟化、大数据与商业分析、数字化转型、毕业工业报告。',
    career_prospects_zh:
      'IT经理、CIO（首席信息官）、IT顾问、数字化转型顾问、企业架构师。',
    application_materials_zh:
      '本科学位证书和成绩单、英语成绩、个人陈述、简历/CV、两封推荐信、护照复印件。',
    additional_requirements_zh: '非IT背景申请人可能需要完成桥接课程（Bridging Course）。',
    accreditation_zh:
      'MQA认证、MBOT认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },
  {
    name_en: 'Master of Science (Cyber Security)',
    name_zh: '网络安全理学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Computing',
    faculty_zh: '计算机学院',
    field_category: 'IT',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 16500,
    tuition_international_cny_estimate: cny(16500),
    tuition_note: '总学费约RM16,500–21,000（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 2.75,
    requirements_zh:
      'IT或相关领域本科学位，CGPA 2.75/4.0或同等成绩。英语雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '网络安全原理、密码学与应用、渗透测试与道德黑客、事件响应与数字取证、安全运营中心（SOC）管理、安全合规与治理（ISO27001/NIST）、毕业论文。',
    career_prospects_zh:
      '网络安全工程师、渗透测试专家、首席信息安全官（CISO）、安全顾问、数字取证分析师。',
    application_materials_zh:
      '本科学位证书和成绩单、英语成绩、个人陈述、简历/CV、两封推荐信、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证、MBOT认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },

  // ── Faculty of Chemical & Energy Engineering ──────────────────────────────
  {
    name_en: 'Master of Engineering (Chemical Engineering)',
    name_zh: '工程硕士（化学工程）',
    degree_level: 'master',
    faculty_en: 'Faculty of Chemical and Energy Engineering',
    faculty_zh: '化学与能源工程学院',
    field_category: 'Engineering',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 18000,
    tuition_international_cny_estimate: cny(18000),
    tuition_note: '总学费约RM18,000–22,000（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 2.75,
    requirements_zh:
      '化学工程或相关领域本科学位，CGPA 2.75/4.0或同等成绩。英语雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '高级反应工程、过程强化与模拟、能源系统工程、聚合物与材料工程、绿色化学工艺、碳捕获与封存、毕业论文。',
    career_prospects_zh:
      'PETRONAS及跨国石化公司高级工程师、过程工程顾问、能源转型专家、大学讲师/研究员。',
    application_materials_zh:
      '本科学位证书和成绩单、英语成绩、个人陈述、简历、两封推荐信、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh:
      'BEM认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },

  // ── Faculty of Management ─────────────────────────────────────────────────
  {
    name_en: 'Master of Business Administration (MBA)',
    name_zh: '工商管理硕士（MBA）',
    degree_level: 'master',
    faculty_en: 'Azman Hashim International Business School (AHIBS)',
    faculty_zh: '阿兹曼哈希姆国际商学院',
    field_category: 'Business',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 25000,
    tuition_international_cny_estimate: cny(25000),
    tuition_note: '总学费约RM25,000–30,000（国际生）（估算）',
    min_ielts: 6.5,
    min_toefl: 580,
    min_gpa: 2.75,
    requirements_zh:
      '任何本科学位，CGPA 2.75/4.0或同等成绩；具备至少2年工作经验（优先，部分情况为必须）。英语雅思6.5或托福580。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等，部分学生可申请企业赞助。',
    curriculum_zh:
      '核心课程：管理经济学、管理会计、组织行为、战略管理、营销管理、财务管理、运营管理；专业选修：国际商务、科技创业、数字商务、供应链管理；论文/工业项目。',
    career_prospects_zh:
      '企业高管、创业者、咨询顾问、科技公司业务总监、跨国公司区域经理。',
    application_materials_zh:
      '本科学位证书和成绩单、英语成绩（雅思/托福）、个人陈述、简历/CV（含工作经验）、两封推荐信、护照复印件、工作证明（如有）。',
    additional_requirements_zh: '部分申请人可能需参加面试。',
    accreditation_zh:
      'MQA认证、AACSB认证（申请中/进行中）、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },
  {
    name_en: 'Master of Science (Management)',
    name_zh: '管理学理学硕士',
    degree_level: 'master',
    faculty_en: 'Azman Hashim International Business School (AHIBS)',
    faculty_zh: '阿兹曼哈希姆国际商学院',
    field_category: 'Business',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 20000,
    tuition_international_cny_estimate: cny(20000),
    tuition_note: '总学费约RM20,000–25,000（国际生）（估算）',
    min_ielts: 6.5,
    min_toefl: 580,
    min_gpa: 2.75,
    requirements_zh:
      '管理、商业或相关领域本科学位，CGPA 2.75/4.0或同等成绩。英语雅思6.5或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '管理研究方法、组织管理理论、战略领导力、人力资源管理、技术创新管理、研究论文（含数据收集与分析）。',
    career_prospects_zh:
      '大学讲师/研究员、管理顾问、企业战略规划师、人力资源总监、政府政策分析师。',
    application_materials_zh:
      '本科学位证书和成绩单、英语成绩、个人陈述、简历/CV、两封推荐信、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },

  // ── Faculty of Built Environment and Surveying ────────────────────────────
  {
    name_en: 'Master of Architecture',
    name_zh: '建筑学硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Built Environment and Surveying',
    faculty_zh: '建筑环境与测量学院',
    field_category: 'Architecture',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [9],
    tuition_international_myr: 18000,
    tuition_international_cny_estimate: cny(18000),
    tuition_note: '每学年约RM18,000（国际生）（估算），2年总费用约RM36,000',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 2.75,
    requirements_zh:
      '建筑学学士（B.Sc. Architecture或同等学历），CGPA 2.75/4.0或同等成绩。英语雅思6.0或同等成绩。作品集要求。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '高级建筑设计工作室（Urban Design、Sustainable Architecture等）、建筑技术（智能建筑、绿色建筑认证）、建筑研究方法、建筑历史与理论、专业实践与法规、毕业设计论文。',
    career_prospects_zh:
      '注册建筑师（需完成LAM实习）、城市设计师、可持续建筑顾问、建筑事务所合伙人、大学讲师。',
    application_materials_zh:
      '本科学位证书和成绩单、建筑设计作品集、英语成绩、个人陈述、两封推荐信、护照复印件。',
    additional_requirements_zh: '需提交建筑设计作品集（Portfolio）。',
    accreditation_zh:
      'MQA认证、马来西亚建筑师学会（LAM）Part II认证（有条件）、中国教育部认证。',
    application_deadline_note:
      '仅9月入学，申请截止通常为当年6月。',
  },

  // ── Faculty of Education ──────────────────────────────────────────────────
  {
    name_en: 'Master of Education',
    name_zh: '教育硕士',
    degree_level: 'master',
    faculty_en: 'Faculty of Social Sciences and Humanities',
    faculty_zh: '社会科学与人文学院',
    field_category: 'Education',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 9],
    tuition_international_myr: 14000,
    tuition_international_cny_estimate: cny(14000),
    tuition_note: '总学费约RM14,000–18,000（国际生）（估算）',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 2.75,
    requirements_zh:
      '教育学或相关领域本科学位，CGPA 2.75/4.0或同等成绩。英语雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '教育研究方法、课程设计与开发、教育技术（EdTech）、教育领导与管理、教育评估与测量、特殊教育研究、毕业论文。',
    career_prospects_zh:
      '中学/大学教师、教育管理人员、课程开发专家、教育技术顾问、教育政策分析师。',
    application_materials_zh:
      '本科学位证书和成绩单、英语成绩、个人陈述、简历/CV、两封推荐信、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh:
      'MQA认证、中国教育部认证。',
    application_deadline_note:
      '9月入学：6月截止；2月入学：前一年11月截止。',
  },
];

// ============================================================================
// PhD PROGRAMS (博士)
// ============================================================================

const phdPrograms: UTMProgram[] = [
  // ── Faculty of Civil Engineering ─────────────────────────────────────────
  {
    name_en: 'Doctor of Philosophy (Civil Engineering)',
    name_zh: '哲学博士（土木工程）',
    degree_level: 'phd',
    faculty_en: 'Faculty of Civil Engineering',
    faculty_zh: '土木工程学院',
    field_category: 'Engineering',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 10000,
    tuition_international_cny_estimate: cny(10000),
    tuition_note: '每学年约RM10,000–14,000（国际生）（估算），最少3年',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 3.0,
    requirements_zh:
      '土木工程或相关领域硕士学位，CGPA 3.0/4.0或同等成绩；或荣誉学士学位（一等荣誉）。需提交研究计划书并联系导师。英语雅思6.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh:
      'UTM Zamalah（全额学费+每月生活津贴约RM1,500）、马来西亚政府奖学金、国际学术研究奖学金（SLAB/SLAI）等。',
    curriculum_zh:
      '全研究型。研究领域：结构工程、岩土工程、水资源与水文学、交通工程、建筑材料、环境土木工程、智慧城市基础设施等。需提交原创性博士论文并通过口试（Viva Voce）。',
    career_prospects_zh:
      '大学教授/副教授、高级研究员、政府首席工程师、国际工程顾问公司合伙人。',
    application_materials_zh:
      '硕士学位证书和成绩单、英语成绩（雅思/托福）、研究计划书（Research Proposal，约2000-4000字）、两封学术推荐信、学术出版物列表（如有）、护照复印件。',
    additional_requirements_zh:
      '申请前需联系并获得UTM相关系所导师同意接收（Supervisor Agreement Letter）。',
    accreditation_zh:
      'MQA认证、BEM认证、中国教育部认证、QS世界大学排名前400（UTM整体）。',
    application_deadline_note:
      '全年接受申请。UTM Zamalah奖学金截止日期一般为每年3月和9月。',
  },

  // ── Faculty of Mechanical Engineering ────────────────────────────────────
  {
    name_en: 'Doctor of Philosophy (Mechanical Engineering)',
    name_zh: '哲学博士（机械工程）',
    degree_level: 'phd',
    faculty_en: 'Faculty of Mechanical Engineering',
    faculty_zh: '机械工程学院',
    field_category: 'Engineering',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 10000,
    tuition_international_cny_estimate: cny(10000),
    tuition_note: '每学年约RM10,000–14,000（国际生）（估算），最少3年',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 3.0,
    requirements_zh:
      '机械工程或相关领域硕士学位，CGPA 3.0/4.0或同等成绩。需提交研究计划书并联系导师。',
    scholarship_available: true,
    scholarship_note_zh:
      'UTM Zamalah奖学金（全额学费+生活津贴）等。',
    curriculum_zh:
      '全研究型。研究方向：航空动力学、先进制造与工业4.0、热流体工程、生物机械工程、机器人与自动化、复合材料与轻量化设计、可持续能源系统等。需提交博士论文并通过口试。',
    career_prospects_zh:
      '大学教授、国防研究院研究员、高科技制造企业研发总监、工业4.0顾问。',
    application_materials_zh:
      '硕士学位证书和成绩单、英语成绩、研究计划书、两封学术推荐信、学术出版物列表（如有）、护照复印件。',
    additional_requirements_zh:
      '申请前需联系并获得UTM导师同意接收。',
    accreditation_zh:
      'MQA认证、BEM认证、中国教育部认证。',
    application_deadline_note:
      '全年接受申请。Zamalah奖学金截止日期通常为每年3月和9月。',
  },

  // ── Faculty of Electrical Engineering ────────────────────────────────────
  {
    name_en: 'Doctor of Philosophy (Electrical Engineering)',
    name_zh: '哲学博士（电气工程）',
    degree_level: 'phd',
    faculty_en: 'Faculty of Electrical Engineering',
    faculty_zh: '电气工程学院',
    field_category: 'Engineering',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 10000,
    tuition_international_cny_estimate: cny(10000),
    tuition_note: '每学年约RM10,000–14,000（国际生）（估算），最少3年',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 3.0,
    requirements_zh:
      '电气/电子/通信工程或相关领域硕士学位，CGPA 3.0/4.0或同等成绩。需提交研究计划书并联系导师。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '全研究型。研究方向：高压工程、电力系统稳定性、可再生能源并网、智能电网与电动车、无线通信与5G/6G、图像处理与AI、生物医学工程等。需提交博士论文并通过口试。',
    career_prospects_zh:
      '大学教授、国家电网研究员、电信公司研发主管、可再生能源政策顾问。',
    application_materials_zh:
      '硕士学位证书和成绩单、英语成绩、研究计划书、两封学术推荐信、学术出版物列表（如有）、护照复印件。',
    additional_requirements_zh:
      '申请前需联系并获得UTM导师同意接收。',
    accreditation_zh:
      'MQA认证、BEM认证、中国教育部认证。',
    application_deadline_note:
      '全年接受申请。Zamalah奖学金截止日期通常为每年3月和9月。',
  },

  // ── Faculty of Computing ──────────────────────────────────────────────────
  {
    name_en: 'Doctor of Philosophy (Computer Science)',
    name_zh: '哲学博士（计算机科学）',
    degree_level: 'phd',
    faculty_en: 'Faculty of Computing',
    faculty_zh: '计算机学院',
    field_category: 'IT',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 10000,
    tuition_international_cny_estimate: cny(10000),
    tuition_note: '每学年约RM10,000–14,000（国际生）（估算），最少3年',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 3.0,
    requirements_zh:
      '计算机科学或IT相关领域硕士学位，CGPA 3.0/4.0或同等成绩；或荣誉学士学位（一等荣誉）。需提交研究计划书并联系导师。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金（全额学费+每月生活津贴）等。',
    curriculum_zh:
      '全研究型。研究方向：人工智能与机器学习、计算机视觉、自然语言处理、软件工程与测试、网络安全、物联网（IoT）、区块链技术、量子计算等。需提交博士论文并通过口试。',
    career_prospects_zh:
      '大学教授/副教授、高级AI研究员、顶级科技公司研究科学家（如Google、微软、百度等）、国家AI战略顾问。',
    application_materials_zh:
      '硕士学位证书和成绩单、英语成绩（雅思/托福）、研究计划书（2000-4000字）、两封学术推荐信、学术出版物列表（如有）、护照复印件。',
    additional_requirements_zh:
      '申请前需联系并获得UTM计算机学院导师同意接收。',
    accreditation_zh:
      'MQA认证、MBOT认证、中国教育部认证。',
    application_deadline_note:
      '全年接受申请。Zamalah奖学金截止日期通常为每年3月和9月。',
  },

  // ── Faculty of Chemical & Energy Engineering ──────────────────────────────
  {
    name_en: 'Doctor of Philosophy (Chemical Engineering)',
    name_zh: '哲学博士（化学工程）',
    degree_level: 'phd',
    faculty_en: 'Faculty of Chemical and Energy Engineering',
    faculty_zh: '化学与能源工程学院',
    field_category: 'Engineering',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 10000,
    tuition_international_cny_estimate: cny(10000),
    tuition_note: '每学年约RM10,000–14,000（国际生）（估算），最少3年',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 3.0,
    requirements_zh:
      '化学工程或相关领域硕士学位，CGPA 3.0/4.0或同等成绩。需提交研究计划书并联系导师。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '全研究型。研究方向：过程系统工程、生物燃料与绿色能源、碳捕获与利用、纳米材料与催化、水处理与膜分离、PETRONAS合作研究项目等。需提交博士论文并通过口试。',
    career_prospects_zh:
      '大学教授、PETRONAS研究员、绿色能源公司研发总监、国际化工咨询专家。',
    application_materials_zh:
      '硕士学位证书和成绩单、英语成绩、研究计划书、两封学术推荐信、学术出版物列表（如有）、护照复印件。',
    additional_requirements_zh:
      '申请前需联系并获得UTM导师同意接收。',
    accreditation_zh:
      'MQA认证、BEM认证、中国教育部认证。',
    application_deadline_note:
      '全年接受申请。Zamalah奖学金截止日期通常为每年3月和9月。',
  },

  // ── Faculty of Built Environment and Surveying ────────────────────────────
  {
    name_en: 'Doctor of Philosophy (Architecture and Built Environment)',
    name_zh: '哲学博士（建筑与建筑环境）',
    degree_level: 'phd',
    faculty_en: 'Faculty of Built Environment and Surveying',
    faculty_zh: '建筑环境与测量学院',
    field_category: 'Architecture',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 10000,
    tuition_international_cny_estimate: cny(10000),
    tuition_note: '每学年约RM10,000–14,000（国际生）（估算），最少3年',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 3.0,
    requirements_zh:
      '建筑学、城市规划、建筑工程或相关领域硕士学位，CGPA 3.0/4.0或同等成绩。需提交研究计划书并联系导师。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '全研究型。研究方向：可持续建筑设计、绿色建筑技术（绿色马来西亚建筑评级GBI）、建筑信息模型（BIM）、城市规划与智慧城市、历史建筑保育、建筑能效、建筑法规与政策研究等。需提交博士论文并通过口试。',
    career_prospects_zh:
      '大学教授、建筑研究所研究员、城市可持续发展顾问、政府城市规划高级官员。',
    application_materials_zh:
      '硕士学位证书和成绩单、英语成绩、研究计划书（含设计/研究作品集）、两封学术推荐信、护照复印件。',
    additional_requirements_zh:
      '申请前需联系并获得UTM导师同意接收。',
    accreditation_zh:
      'MQA认证、LAM认证（建筑方向）、中国教育部认证。',
    application_deadline_note:
      '全年接受申请。Zamalah奖学金截止日期通常为每年3月和9月。',
  },

  // ── Azman Hashim International Business School ────────────────────────────
  {
    name_en: 'Doctor of Philosophy (Business Administration)',
    name_zh: '哲学博士（工商管理）',
    degree_level: 'phd',
    faculty_en: 'Azman Hashim International Business School (AHIBS)',
    faculty_zh: '阿兹曼哈希姆国际商学院',
    field_category: 'Business',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 10000,
    tuition_international_cny_estimate: cny(10000),
    tuition_note: '每学年约RM10,000–14,000（国际生）（估算），最少3年',
    min_ielts: 6.5,
    min_toefl: 580,
    min_gpa: 3.0,
    requirements_zh:
      '工商管理或相关领域硕士学位，CGPA 3.0/4.0或同等成绩。有行业经验者优先。英语雅思6.5或同等成绩。需提交研究计划书。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '全研究型。研究方向：国际商务、科技创业与创新、组织行为与战略、供应链与物流管理、伊斯兰金融与商业、企业社会责任（CSR）、数字营销与电子商务、东南亚商业研究等。需提交博士论文并通过口试。',
    career_prospects_zh:
      '大学商学院教授、高级管理顾问、企业研究总监、国际商业智库研究员、政府经济政策顾问。',
    application_materials_zh:
      '硕士学位证书和成绩单、英语成绩（雅思/托福）、研究计划书（2000-4000字）、两封学术推荐信、学术出版物列表（如有）、简历/CV（含工作经验）、护照复印件。',
    additional_requirements_zh:
      '申请前需联系并获得AHIBS导师同意接收。',
    accreditation_zh:
      'MQA认证、中国教育部认证。',
    application_deadline_note:
      '全年接受申请。Zamalah奖学金截止日期通常为每年3月和9月。',
  },

  // ── Faculty of Science ────────────────────────────────────────────────────
  {
    name_en: 'Doctor of Philosophy (Science)',
    name_zh: '哲学博士（理学）',
    degree_level: 'phd',
    faculty_en: 'Faculty of Science',
    faculty_zh: '理学院',
    field_category: 'Science',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 10000,
    tuition_international_cny_estimate: cny(10000),
    tuition_note: '每学年约RM10,000–14,000（国际生）（估算），最少3年',
    min_ielts: 6.0,
    min_toefl: 550,
    min_gpa: 3.0,
    requirements_zh:
      '理学或相关领域硕士学位，CGPA 3.0/4.0或同等成绩。需提交研究计划书并联系导师。',
    scholarship_available: true,
    scholarship_note_zh: 'UTM Zamalah奖学金等。',
    curriculum_zh:
      '全研究型。研究方向：化学（材料化学、纳米化学、绿色化学）、数学（优化、统计学）、物理学（凝聚态物理）、生物技术与生物信息学等。需提交博士论文并通过口试。',
    career_prospects_zh:
      '大学教授、科研机构研究员、生物技术公司科学家、政府科研机构研究主管。',
    application_materials_zh:
      '硕士学位证书和成绩单、英语成绩、研究计划书、两封学术推荐信、学术出版物列表（如有）、护照复印件。',
    additional_requirements_zh:
      '申请前需联系并获得UTM理学院导师同意接收。',
    accreditation_zh:
      'MQA认证、中国教育部认证。',
    application_deadline_note:
      '全年接受申请。Zamalah奖学金截止日期通常为每年3月和9月。',
  },
];

// ============================================================================
// COMBINED EXPORT
// ============================================================================

export const utmPrograms: UTMProgram[] = [
  ...undergraduatePrograms,
  ...postgraduateCourseworkPrograms,
  ...phdPrograms,
];

// Summary statistics
export const utmProgramStats = {
  total: utmPrograms.length,
  undergraduate: undergraduatePrograms.length,
  postgraduateCoursework: postgraduateCourseworkPrograms.length,
  phd: phdPrograms.length,
  university: {
    name_en: 'Universiti Teknologi Malaysia',
    name_zh: '马来西亚理工大学',
    abbreviation: 'UTM',
    founded: 1904,
    campuses: ['Johor Bahru (Main Campus)', 'Kuala Lumpur (City Campus)'],
    qs_rank_2025: '351-400',
    website: 'https://www.utm.my',
    admission_portal: 'https://admission.utm.my',
    postgraduate_portal: 'https://sps.utm.my',
    fee_portal: 'https://fee.utm.my',
    specialty: '理工科为主（工程、IT、建筑），马来西亚最顶尖理工大学之一',
    scholarship_portal: 'https://scholarship.utm.my',
  },
  faculties: [
    { en: 'Faculty of Civil Engineering', zh: '土木工程学院' },
    { en: 'Faculty of Mechanical Engineering', zh: '机械工程学院' },
    { en: 'Faculty of Electrical Engineering', zh: '电气工程学院' },
    { en: 'Faculty of Chemical and Energy Engineering', zh: '化学与能源工程学院' },
    { en: 'Faculty of Computing', zh: '计算机学院' },
    { en: 'Faculty of Built Environment and Surveying', zh: '建筑环境与测量学院' },
    { en: 'Faculty of Science', zh: '理学院' },
    { en: 'Faculty of Management', zh: '管理学院' },
    { en: 'Azman Hashim International Business School (AHIBS)', zh: '阿兹曼哈希姆国际商学院' },
    { en: 'Faculty of Social Sciences and Humanities', zh: '社会科学与人文学院' },
  ],
  fee_notes_zh: [
    '所有学费均为国际生（非马来西亚籍）年费估算，以马来西亚令吉（MYR）计算。',
    '本科生学费：工程类约RM14,000–15,000/年，IT类约RM13,000–14,000/年，理科类约RM11,000/年。',
    '授课式硕士学费：工程类约RM18,000–22,000（总费用），IT类约RM16,000–20,000（总费用），MBA约RM25,000–30,000（总费用）。',
    '研究型博士（PhD）：国际生约RM10,000–14,000/年（最短3年）；获UTM Zamalah奖学金者学费全免并获生活津贴。',
    '实际学费以UTM官方发布为准，建议访问 https://fee.utm.my 查询最新收费标准。',
  ],
};

export default utmPrograms;

/**
 * Monash University Malaysia - Complete Program Data (2025/2026 Intake)
 *
 * Source URLs (official):
 *   - https://www.monash.edu.my/study/undergraduate
 *   - https://www.monash.edu.my/study/postgraduate
 *   - https://www.monash.edu.my/study/how-to-apply/international-students
 *   - https://www.monash.edu.my/student-services/fees
 *   - https://www.monash.edu.my/engineering
 *   - https://www.monash.edu.my/it
 *   - https://www.monash.edu.my/business
 *   - https://www.monash.edu.my/arts
 *   - https://www.monash.edu.my/science
 *   - https://www.monash.edu.my/jcsmhs (Jeffrey Cheah School of Medicine & Health Sciences)
 *   - https://www.monash.edu.my/pharmacy
 *
 * NOTE: Tuition fees are based on published 2024/2025 fee schedules from monash.edu.my.
 *       The MYR-to-CNY conversion uses an approximate rate of 1 MYR = 1.55 CNY.
 *       Fees marked with "per year" are annual tuition for international students.
 *       Actual fees may vary; students should verify on the official website.
 *
 * Last verified: Based on information available up to early 2025.
 */

export interface MonashProgram {
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

// MYR to CNY approximate rate
const MYR_TO_CNY = 1.55;

function cny(myr: number): number {
  return Math.round(myr * MYR_TO_CNY);
}

// ============================================================================
// UNDERGRADUATE PROGRAMS
// ============================================================================

const undergraduatePrograms: MonashProgram[] = [
  // ── School of Engineering ──────────────────────────────────────────────
  {
    name_en: 'Bachelor of Engineering (Honours) in Chemical Engineering',
    name_zh: '化学工程学士（荣誉）',
    degree_level: 'bachelor',
    faculty_en: 'School of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 7, 10],
    tuition_international_myr: 48700,
    tuition_international_cny_estimate: cny(48700),
    tuition_note: '每年学费，总学费约RM194,800',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业或同等学历，数学和理科成绩优秀。中国学生：高考成绩达到所在省份一本线以上，或完成受认可的预科课程。需具备良好的物理和化学基础。',
    scholarship_available: true,
    scholarship_note_zh:
      '蒙纳士大学提供多种奖学金，包括：Monash University Malaysia High Achiever Award（最高可减免50%学费）、Jeffrey Cheah Foundation Scholarship（全额学费）等。',
    curriculum_zh:
      '第一年：工程基础、数学、化学、物理、计算机编程；第二年：热力学、流体力学、化工原理、有机化学；第三年：反应工程、过程控制、传质传热、专业选修；第四年：毕业设计项目、高级专业课程、工业实习。',
    career_prospects_zh:
      '石油化工行业、制药公司、环保工程、食品加工业、咨询公司、研究机构。毕业生可从事工艺工程师、项目工程师、环境工程师等职位。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述、推荐信（建议）、高考成绩单（如适用）。',
    additional_requirements_zh: null,
    accreditation_zh:
      '马来西亚工程师委员会（BEM）认证、华盛顿协议成员、澳大利亚工程师协会（EA）认证、马来西亚学术资格认证机构（MQA）认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止；10月入学：当年8月截止。建议提前3-6个月申请。',
  },
  {
    name_en: 'Bachelor of Engineering (Honours) in Civil Engineering',
    name_zh: '土木工程学士（荣誉）',
    degree_level: 'bachelor',
    faculty_en: 'School of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 7, 10],
    tuition_international_myr: 47200,
    tuition_international_cny_estimate: cny(47200),
    tuition_note: '每年学费，总学费约RM188,800',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业或同等学历，数学和物理成绩优秀。中国学生：高考成绩达到所在省份一本线以上，或完成受认可的预科课程。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash University Malaysia High Achiever Award（最高50%学费减免）、Jeffrey Cheah Foundation Scholarship等。',
    curriculum_zh:
      '第一年：工程力学、数学、物理、制图与CAD；第二年：结构分析、土力学、水力学、工程测量；第三年：结构设计、岩土工程、交通工程、环境工程；第四年：毕业设计、高级结构工程、项目管理、工业实习。',
    career_prospects_zh:
      '建筑公司、房地产开发、基础设施工程、政府部门、咨询公司。可从事结构工程师、项目经理、土木工程师等职位。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述、推荐信（建议）。',
    additional_requirements_zh: null,
    accreditation_zh:
      'BEM认证、华盛顿协议成员、EA认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止；10月入学：当年8月截止。',
  },
  {
    name_en: 'Bachelor of Engineering (Honours) in Electrical and Computer Systems Engineering',
    name_zh: '电气与计算机系统工程学士（荣誉）',
    degree_level: 'bachelor',
    faculty_en: 'School of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 7, 10],
    tuition_international_myr: 48700,
    tuition_international_cny_estimate: cny(48700),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学和物理成绩优秀。中国学生：高考一本线以上或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash High Achiever Award（最高50%学费减免）、Jeffrey Cheah Foundation Scholarship等。',
    curriculum_zh:
      '第一年：电路分析、数字系统、编程基础、数学；第二年：信号与系统、电子电路、微处理器、电磁学；第三年：控制系统、通信系统、嵌入式系统、专业选修；第四年：毕业设计、高级电力系统/计算机系统、工业实习。',
    career_prospects_zh:
      '电子电气行业、通信公司、半导体企业、自动化公司、科技企业。可从事电气工程师、系统工程师、嵌入式开发工程师等。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh: 'BEM认证、华盛顿协议成员、EA认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止；10月入学：当年8月截止。',
  },
  {
    name_en: 'Bachelor of Engineering (Honours) in Mechanical Engineering',
    name_zh: '机械工程学士（荣誉）',
    degree_level: 'bachelor',
    faculty_en: 'School of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 7, 10],
    tuition_international_myr: 47200,
    tuition_international_cny_estimate: cny(47200),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学和物理成绩优秀。中国学生：高考一本线以上或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash High Achiever Award（最高50%学费减免）、Jeffrey Cheah Foundation Scholarship等。',
    curriculum_zh:
      '第一年：工程力学、材料科学、制图与CAD、数学；第二年：热力学、流体力学、动力学、制造工艺；第三年：机械设计、传热学、控制工程、有限元分析；第四年：毕业设计项目、高级专业课程、工业实习。',
    career_prospects_zh:
      '制造业、汽车行业、航空航天、能源公司、机器人与自动化企业。可从事机械设计工程师、制造工程师、项目工程师等。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh: 'BEM认证、华盛顿协议成员、EA认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止；10月入学：当年8月截止。',
  },
  {
    name_en: 'Bachelor of Engineering (Honours) in Robotics and Mechatronics Engineering',
    name_zh: '机器人与机电工程学士（荣誉）',
    degree_level: 'bachelor',
    faculty_en: 'School of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 7, 10],
    tuition_international_myr: 48700,
    tuition_international_cny_estimate: cny(48700),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学和物理成绩优秀。中国学生：高考一本线以上或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash High Achiever Award（最高50%学费减免）、Jeffrey Cheah Foundation Scholarship等。',
    curriculum_zh:
      '第一年：编程基础、电路分析、工程力学、数学；第二年：机器人学基础、控制系统、电子设计、机械设计；第三年：计算机视觉、人工智能、高级控制、传感器与执行器；第四年：毕业设计项目、高级机器人系统、工业实习。',
    career_prospects_zh:
      '机器人公司、自动化行业、制造业、科技企业、研发机构。可从事机器人工程师、自动化工程师、系统集成工程师等。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh: 'BEM认证、华盛顿协议成员、EA认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止；10月入学：当年8月截止。',
  },
  {
    name_en: 'Bachelor of Engineering (Honours) in Software Engineering',
    name_zh: '软件工程学士（荣誉）',
    degree_level: 'bachelor',
    faculty_en: 'School of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 7, 10],
    tuition_international_myr: 47200,
    tuition_international_cny_estimate: cny(47200),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学成绩优秀。中国学生：高考一本线以上或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash High Achiever Award（最高50%学费减免）、Jeffrey Cheah Foundation Scholarship等。',
    curriculum_zh:
      '第一年：编程基础、数据结构、数学、计算机体系结构；第二年：软件工程方法、数据库系统、算法设计、网络技术；第三年：软件架构、项目管理、安全工程、专业选修；第四年：毕业设计项目、高级软件工程、工业实习。',
    career_prospects_zh:
      '科技公司、金融机构、游戏公司、初创企业。可从事软件开发工程师、系统架构师、DevOps工程师、技术经理等。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh: 'BEM认证、华盛顿协议成员、EA认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止；10月入学：当年8月截止。',
  },

  // ── School of Information Technology ───────────────────────────────────
  {
    name_en: 'Bachelor of Computer Science',
    name_zh: '计算机科学学士',
    degree_level: 'bachelor',
    faculty_en: 'School of Information Technology',
    faculty_zh: '信息技术学院',
    field_category: 'IT',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [2, 7, 10],
    tuition_international_myr: 44800,
    tuition_international_cny_estimate: cny(44800),
    tuition_note: '每年学费，总学费约RM134,400',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业或同等学历，数学成绩优秀。中国学生：高考成绩达到所在省份一本线以上，或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash High Achiever Award（最高50%学费减免）、Jeffrey Cheah Foundation Scholarship等。',
    curriculum_zh:
      '第一年：编程基础（Java/Python）、数据结构与算法、数学基础、计算机体系结构；第二年：操作系统、数据库、软件工程、网络技术、专业方向选择（数据科学/网络安全/AI等）；第三年：专业方向深入课程、毕业项目、行业实习。可选方向：数据科学、网络安全、人工智能。',
    career_prospects_zh:
      '软件工程师、数据科学家、网络安全分析师、AI/机器学习工程师、系统架构师。毕业生进入Google、微软、亚马逊等科技巨头或金融机构IT部门。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证、澳大利亚计算机协会（ACS）认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止；10月入学：当年8月截止。',
  },
  {
    name_en: 'Bachelor of Computer Science in Data Science',
    name_zh: '计算机科学学士（数据科学方向）',
    degree_level: 'bachelor',
    faculty_en: 'School of Information Technology',
    faculty_zh: '信息技术学院',
    field_category: 'IT',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [2, 7, 10],
    tuition_international_myr: 44800,
    tuition_international_cny_estimate: cny(44800),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学成绩优秀。中国学生：高考一本线以上或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash High Achiever Award（最高50%学费减免）等。',
    curriculum_zh:
      '第一年：编程、数学与统计基础、数据结构；第二年：数据挖掘、机器学习基础、数据库系统、统计建模；第三年：大数据分析、深度学习、数据可视化、毕业项目。',
    career_prospects_zh:
      '数据科学家、数据分析师、商业智能分析师、机器学习工程师、大数据工程师。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证、ACS认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止；10月入学：当年8月截止。',
  },
  {
    name_en: 'Bachelor of Computer Science in Cybersecurity',
    name_zh: '计算机科学学士（网络安全方向）',
    degree_level: 'bachelor',
    faculty_en: 'School of Information Technology',
    faculty_zh: '信息技术学院',
    field_category: 'IT',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [2, 7, 10],
    tuition_international_myr: 44800,
    tuition_international_cny_estimate: cny(44800),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学成绩优秀。中国学生：高考一本线以上或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash High Achiever Award（最高50%学费减免）等。',
    curriculum_zh:
      '第一年：编程基础、网络基础、数据结构、数学；第二年：网络安全基础、密码学、操作系统安全、网络安全；第三年：安全工程、渗透测试、数字取证、毕业项目。',
    career_prospects_zh:
      '网络安全分析师、渗透测试工程师、安全顾问、安全架构师、信息安全经理。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证、ACS认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止；10月入学：当年8月截止。',
  },

  // ── Monash Business School ────────────────────────────────────────────
  {
    name_en: 'Bachelor of Business and Commerce',
    name_zh: '商业与商务学士',
    degree_level: 'bachelor',
    faculty_en: 'Monash Business School',
    faculty_zh: '蒙纳士商学院',
    field_category: 'Business',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [2, 7, 10],
    tuition_international_myr: 44800,
    tuition_international_cny_estimate: cny(44800),
    tuition_note: '每年学费，总学费约RM134,400',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业或同等学历。中国学生：高考成绩达到所在省份一本线以上，或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash High Achiever Award（最高50%学费减免）、Jeffrey Cheah Foundation Scholarship、Sir John Monash Scholarship等。',
    curriculum_zh:
      '可选专业方向：会计学、应用经济学、银行与金融、商法与税务、计量经济学与商业统计、金融、国际商务、管理学、市场营销、战略管理。第一年：商业基础、经济学、会计入门、商业统计；第二年：专业方向核心课程；第三年：高级专业课程、行业实习、毕业项目。',
    career_prospects_zh:
      '会计师、金融分析师、市场营销经理、管理顾问、国际贸易专员、银行家。毕业生广泛进入四大会计师事务所、跨国银行、咨询公司等。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh:
      '蒙纳士商学院获AACSB和EQUIS双重认证，MQA认证，中国教育部认证。会计专业获CPA Australia、ACCA等认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止；10月入学：当年8月截止。',
  },
  {
    name_en: 'Bachelor of Business and Commerce (Honours)',
    name_zh: '商业与商务学士（荣誉）',
    degree_level: 'bachelor',
    faculty_en: 'Monash Business School',
    faculty_zh: '蒙纳士商学院',
    field_category: 'Business',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 44800,
    tuition_international_cny_estimate: cny(44800),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业或同等学历。中国学生：高考一本线以上或完成预科课程。荣誉年需要前三年GPA达到相关要求。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash High Achiever Award（最高50%学费减免）等。',
    curriculum_zh:
      '前三年与Bachelor of Business and Commerce相同，第四年（荣誉年）：独立研究项目、高级研究方法论、专业领域深度研究。',
    career_prospects_zh:
      '学术研究、高级咨询、高级金融分析、政策研究。荣誉学位为攻读硕士和博士学位提供直接通道。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: '荣誉年入学需达到GPA要求（一般70%以上）。',
    accreditation_zh: 'AACSB和EQUIS双重认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止。',
  },

  // ── School of Arts and Social Sciences ────────────────────────────────
  {
    name_en: 'Bachelor of Arts and Social Sciences',
    name_zh: '文学与社会科学学士',
    degree_level: 'bachelor',
    faculty_en: 'School of Arts and Social Sciences',
    faculty_zh: '文学与社会科学学院',
    field_category: 'Arts',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [2, 7, 10],
    tuition_international_myr: 40400,
    tuition_international_cny_estimate: cny(40400),
    tuition_note: '每年学费，总学费约RM121,200',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业或同等学历。中国学生：高考成绩达到所在省份一本线以上，或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash High Achiever Award（最高50%学费减免）等。',
    curriculum_zh:
      '可选专业方向：传播学、英语、性别研究、全球研究、心理学、写作。第一年：人文社科基础、学术写作、社会学导论；第二年：专业方向核心课程；第三年：高级专业课程、毕业论文/项目。',
    career_prospects_zh:
      '媒体与传播、公共关系、人力资源、社会服务、教育、政府部门、国际组织。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止；10月入学：当年8月截止。',
  },
  {
    name_en: 'Bachelor of Arts and Social Sciences (Honours)',
    name_zh: '文学与社会科学学士（荣誉）',
    degree_level: 'bachelor',
    faculty_en: 'School of Arts and Social Sciences',
    faculty_zh: '文学与社会科学学院',
    field_category: 'Arts',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 40400,
    tuition_international_cny_estimate: cny(40400),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业，中国学生：高考一本线以上或完成预科。荣誉年需前三年GPA达标。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash High Achiever Award等。',
    curriculum_zh:
      '前三年与BA相同，第四年（荣誉年）：独立研究论文、高级研究方法。',
    career_prospects_zh:
      '学术研究、高级传媒工作、政策分析、国际组织。荣誉学位为硕博申请铺路。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: '荣誉年入学需达到GPA要求。',
    accreditation_zh: 'MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止。',
  },
  {
    name_en: 'Bachelor of Communication and Media Studies',
    name_zh: '传播与媒体研究学士',
    degree_level: 'bachelor',
    faculty_en: 'School of Arts and Social Sciences',
    faculty_zh: '文学与社会科学学院',
    field_category: 'Arts',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [2, 7, 10],
    tuition_international_myr: 40400,
    tuition_international_cny_estimate: cny(40400),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业或同等学历。中国学生：高考一本线以上或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash High Achiever Award（最高50%学费减免）等。',
    curriculum_zh:
      '第一年：传播学概论、媒体理论、学术写作、社会学基础；第二年：数字媒体制作、新闻学、公共关系、广告学；第三年：战略传播、媒体研究方法、毕业项目/实习。',
    career_prospects_zh:
      '新闻记者、公关专员、数字营销、内容创作、社交媒体管理、广告策划。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止；10月入学：当年8月截止。',
  },
  {
    name_en: 'Bachelor of Psychology (Honours)',
    name_zh: '心理学学士（荣誉）',
    degree_level: 'bachelor',
    faculty_en: 'School of Arts and Social Sciences',
    faculty_zh: '文学与社会科学学院',
    field_category: 'Arts',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 44800,
    tuition_international_cny_estimate: cny(44800),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业，中国学生：高考一本线以上或完成预科课程。需数学基础良好。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash High Achiever Award（最高50%学费减免）等。',
    curriculum_zh:
      '第一年：心理学导论、研究方法、统计学、生物心理学；第二年：发展心理学、社会心理学、认知心理学、异常心理学；第三年：临床心理学、组织心理学、心理评估；第四年：独立研究项目、高级心理学专题。',
    career_prospects_zh:
      '临床心理师（需进一步深造）、人力资源、市场研究、社会服务、教育辅导、用户体验研究。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: '四年制课程含荣誉年研究项目。',
    accreditation_zh:
      '澳大利亚心理学认证委员会（APAC）认证、马来西亚心理学认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止。',
  },
  {
    name_en: 'Bachelor of Digital Media and Communication',
    name_zh: '数字媒体与传播学士',
    degree_level: 'bachelor',
    faculty_en: 'School of Arts and Social Sciences',
    faculty_zh: '文学与社会科学学院',
    field_category: 'Arts',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [2, 7, 10],
    tuition_international_myr: 40400,
    tuition_international_cny_estimate: cny(40400),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业或同等学历。中国学生：高考一本线以上或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash High Achiever Award等。',
    curriculum_zh:
      '第一年：数字媒体概论、视觉传播基础、网页设计、写作技巧；第二年：多媒体制作、数字叙事、用户体验设计、社交媒体策略；第三年：高级数字制作、创意项目、行业实习。',
    career_prospects_zh:
      '数字内容创作者、UX/UI设计师、社交媒体经理、多媒体制作人、数字营销专员。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止；10月入学：当年8月截止。',
  },

  // ── School of Science ─────────────────────────────────────────────────
  {
    name_en: 'Bachelor of Science',
    name_zh: '理学学士',
    degree_level: 'bachelor',
    faculty_en: 'School of Science',
    faculty_zh: '理学院',
    field_category: 'Science',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [2, 7, 10],
    tuition_international_myr: 44200,
    tuition_international_cny_estimate: cny(44200),
    tuition_note: '每年学费，总学费约RM132,600',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业，数学和理科成绩优秀。中国学生：高考一本线以上或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash High Achiever Award（最高50%学费减免）、Jeffrey Cheah Foundation Scholarship等。',
    curriculum_zh:
      '可选专业方向：应用微生物学、生物化学、生物技术、化学、食品科学与技术、基因组学与生物信息学、医学生物科学、热带环境生物学。第一年：基础化学、生物学、数学、物理；第二年：专业方向核心课程；第三年：高级专业课程、研究项目。',
    career_prospects_zh:
      '科研人员、实验室技术员、食品科学家、生物技术专家、环境顾问、医药公司研发人员。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证、皇家化学学会（RSC）认证（化学方向）、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止；10月入学：当年8月截止。',
  },
  {
    name_en: 'Bachelor of Science (Honours)',
    name_zh: '理学学士（荣誉）',
    degree_level: 'bachelor',
    faculty_en: 'School of Science',
    faculty_zh: '理学院',
    field_category: 'Science',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 44200,
    tuition_international_cny_estimate: cny(44200),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业，理科成绩优秀。荣誉年需前三年GPA达标。中国学生：高考一本线以上或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash High Achiever Award等。',
    curriculum_zh:
      '前三年与BSc相同，第四年：独立研究项目、高级研究方法、专业领域深度研究。',
    career_prospects_zh:
      '高级科研、学术研究、硕博继续深造、科技公司高级研发。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: '荣誉年入学需前三年GPA达标（一般65%以上）。',
    accreditation_zh: 'MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止。',
  },
  {
    name_en: 'Bachelor of Food Science and Technology',
    name_zh: '食品科学与技术学士',
    degree_level: 'bachelor',
    faculty_en: 'School of Science',
    faculty_zh: '理学院',
    field_category: 'Science',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 44200,
    tuition_international_cny_estimate: cny(44200),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业，化学和生物成绩优秀。中国学生：高考一本线以上或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash High Achiever Award等。',
    curriculum_zh:
      '第一年：食品化学、微生物学基础、营养学入门、数学；第二年：食品加工技术、食品安全、食品分析、质量控制；第三年：食品产品开发、食品工程、行业实习、毕业项目。',
    career_prospects_zh:
      '食品技术专家、质量控制经理、产品开发人员、食品安全审计员、营养顾问。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止。',
  },

  // ── Jeffrey Cheah School of Medicine and Health Sciences ───────────────
  {
    name_en: 'Bachelor of Medical Science and Doctor of Medicine (MBBS)',
    name_zh: '医学学士与外科学士（MBBS）',
    degree_level: 'bachelor',
    faculty_en: 'Jeffrey Cheah School of Medicine and Health Sciences',
    faculty_zh: '谢富年医学与健康科学学院',
    field_category: 'Medicine',
    duration_years: 5,
    language_of_instruction: 'English',
    intake_months: [2],
    tuition_international_myr: 105200,
    tuition_international_cny_estimate: cny(105200),
    tuition_note: '每年学费（临床阶段学费更高），总学费约RM526,000-580,000',
    min_ielts: 7.0,
    min_toefl: 94,
    min_gpa: null,
    requirements_zh:
      '高中毕业且理科（生物、化学、物理、数学）成绩优异。中国学生：高考理科一本线显著以上或完成受认可的预科课程且成绩优异。需通过面试。竞争非常激烈，名额有限。',
    scholarship_available: true,
    scholarship_note_zh:
      'Jeffrey Cheah Foundation Scholarship（全额学费）、Monash Merit Scholarship等。名额极少，竞争激烈。',
    curriculum_zh:
      '第1-2年（前临床阶段）：解剖学、生理学、生物化学、药理学、病理学、微生物学；第3-5年（临床阶段）：内科、外科、妇产科、儿科、精神科、社区医学、临床实习。采用问题导向学习（PBL）教学模式。',
    career_prospects_zh:
      '临床医生、外科医生、全科医生、专科医生（需进一步专科培训）、医学研究者、公共卫生官员。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述、推荐信（2封）、面试。可能需要UCAT/ISAT等入学考试成绩。',
    additional_requirements_zh:
      '需通过多迷你面试（MMI）或面试；建议有医疗相关志愿服务经历；需提供无犯罪记录证明和健康检查报告。',
    accreditation_zh:
      '马来西亚医学委员会（MMC）认证、澳大利亚医学委员会（AMC）认证、MQA认证、中国教育部认证。毕业生可在马来西亚、澳大利亚等地注册执业。',
    application_deadline_note:
      '仅2月入学，申请截止日期通常为前一年7-9月。强烈建议尽早申请，名额有限。',
  },
  {
    name_en: 'Bachelor of Medical Science (Honours)',
    name_zh: '医学科学学士（荣誉）',
    degree_level: 'bachelor',
    faculty_en: 'Jeffrey Cheah School of Medicine and Health Sciences',
    faculty_zh: '谢富年医学与健康科学学院',
    field_category: 'Medicine',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 55000,
    tuition_international_cny_estimate: cny(55000),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业，理科成绩优秀（生物和化学）。中国学生：高考一本线以上或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash High Achiever Award等。',
    curriculum_zh:
      '第一年：人体生物学、生物化学、细胞生物学、统计学；第二年：病理学基础、免疫学、药理学、分子生物学；第三年：研究项目、高级生物医学专题、实验室技能。',
    career_prospects_zh:
      '生物医学研究员、制药公司研发、公共卫生、实验室管理、继续攻读医学或硕博学位。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止。',
  },
  {
    name_en: 'Bachelor of Psychological Science and Business',
    name_zh: '心理科学与商业学士',
    degree_level: 'bachelor',
    faculty_en: 'Jeffrey Cheah School of Medicine and Health Sciences',
    faculty_zh: '谢富年医学与健康科学学院',
    field_category: 'Medicine',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 44800,
    tuition_international_cny_estimate: cny(44800),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业或同等学历。中国学生：高考一本线以上或完成预科课程。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash High Achiever Award等。',
    curriculum_zh:
      '融合心理学与商学课程。第一年：心理学导论、商业基础、统计学；第二年：组织行为学、消费者心理学、市场研究方法；第三年：高级组织心理学、人力资源管理、毕业项目。',
    career_prospects_zh:
      '人力资源管理、组织发展、市场研究、消费者洞察、管理咨询。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年10月截止；7月入学：当年5月截止。',
  },

  // ── School of Pharmacy ────────────────────────────────────────────────
  {
    name_en: 'Bachelor of Pharmacy (Honours)',
    name_zh: '药剂学学士（荣誉）',
    degree_level: 'bachelor',
    faculty_en: 'School of Pharmacy',
    faculty_zh: '药学院',
    field_category: 'Pharmacy',
    duration_years: 4,
    language_of_instruction: 'English',
    intake_months: [2],
    tuition_international_myr: 63000,
    tuition_international_cny_estimate: cny(63000),
    tuition_note: '每年学费，总学费约RM252,000',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: null,
    requirements_zh:
      '高中毕业，化学和生物/数学成绩优异。中国学生：高考理科一本线以上或完成预科课程，理科成绩突出。',
    scholarship_available: true,
    scholarship_note_zh:
      'Jeffrey Cheah Foundation Scholarship、Monash High Achiever Award等。',
    curriculum_zh:
      '第一年：有机化学、生物化学、解剖生理学、药学概论；第二年：药理学、药剂学、药物化学、微生物学；第三年：临床药学、药物治疗学、药事管理、药学研究；第四年：临床实习（医院与社区药房）、高级临床药学、毕业研究。',
    career_prospects_zh:
      '注册药剂师（社区药房/医院药房）、制药公司、药品监管机构、临床研究、药品销售与市场。',
    application_materials_zh:
      '高中成绩单及毕业证、雅思/托福成绩单、护照复印件、个人陈述、推荐信（建议）。',
    additional_requirements_zh:
      '需通过面试。需提供健康检查报告和无犯罪记录证明。毕业后需完成临床培训年才能注册为执业药剂师。',
    accreditation_zh:
      '马来西亚药剂委员会（PBM）认证、MQA认证、中国教育部认证。获澳大利亚药学委员会认可。',
    application_deadline_note:
      '仅2月入学。申请截止日期通常为前一年8-10月。名额有限，建议尽早申请。',
  },

  // ── Foundation / Pre-University ────────────────────────────────────────
  {
    name_en: 'Monash University Foundation Year (MUFY)',
    name_zh: '蒙纳士大学预科课程',
    degree_level: 'bachelor',
    faculty_en: 'Monash College',
    faculty_zh: '蒙纳士学院',
    field_category: 'Science',
    duration_years: 1,
    language_of_instruction: 'English',
    intake_months: [1, 3, 7],
    tuition_international_myr: 30800,
    tuition_international_cny_estimate: cny(30800),
    tuition_note: '预科总学费',
    min_ielts: 5.5,
    min_toefl: 46,
    min_gpa: null,
    requirements_zh:
      '高中二年级完成或高中毕业。中国学生：高二完成且成绩良好（平均70%以上），或高三毕业。',
    scholarship_available: true,
    scholarship_note_zh: '部分优秀学生可获预科学费减免。',
    curriculum_zh:
      '为升入蒙纳士本科做准备。根据目标专业选择相应方向：科学、工程、商科、文科、IT。核心课程包括英语、数学，选修课程根据方向而定。',
    career_prospects_zh:
      '成功完成预科后可直接升入蒙纳士大学马来西亚校区或澳大利亚校区的本科课程。',
    application_materials_zh:
      '高中成绩单（至少两年）、雅思/托福成绩单、护照复印件。',
    additional_requirements_zh: '预科课程不是独立学位，而是进入本科的桥梁课程。',
    accreditation_zh: 'MQA认证。',
    application_deadline_note:
      '1月入学：前一年10月截止；3月入学：当年1月截止；7月入学：当年5月截止。',
  },
];

// ============================================================================
// POSTGRADUATE PROGRAMS (COURSEWORK)
// ============================================================================

const postgraduateCourseworkPrograms: MonashProgram[] = [
  // ── Monash Business School ────────────────────────────────────────────
  {
    name_en: 'Master of Business Administration (MBA)',
    name_zh: '工商管理硕士（MBA）',
    degree_level: 'master',
    faculty_en: 'Monash Business School',
    faculty_zh: '蒙纳士商学院',
    field_category: 'Business',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 57200,
    tuition_international_cny_estimate: cny(57200),
    tuition_note: '总学费约RM57,200',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '本科学位（任何专业），GPA 3.0/4.0或同等成绩，至少3年工作经验。GMAT成绩优秀者优先考虑。',
    scholarship_available: true,
    scholarship_note_zh:
      '提供MBA Merit Scholarship和行业合作奖学金，金额根据申请者背景而定。',
    curriculum_zh:
      '核心课程：战略管理、财务管理、市场营销管理、组织行为学、商业分析、领导力；选修课程：创业创新、数字商务、国际商务、供应链管理等。包含商业咨询项目或国际学习之旅。',
    career_prospects_zh:
      '高级管理人员、企业总监、管理咨询顾问、创业者。多数毕业生在毕业后薪资有显著提升。',
    application_materials_zh:
      '本科学位证书和成绩单、雅思/托福成绩单、工作经验证明（3年以上）、两封推荐信、个人陈述/职业目标说明、简历/CV、护照复印件。',
    additional_requirements_zh: '需至少3年全职工作经验。GMAT成绩可选但建议提供。',
    accreditation_zh: 'AACSB和EQUIS双重认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年11月截止；7月入学：当年5月截止。',
  },
  {
    name_en: 'Master of Business',
    name_zh: '商业硕士',
    degree_level: 'master',
    faculty_en: 'Monash Business School',
    faculty_zh: '蒙纳士商学院',
    field_category: 'Business',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 52000,
    tuition_international_cny_estimate: cny(52000),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 2.7,
    requirements_zh:
      '本科学位（任何专业），GPA 2.7/4.0或同等成绩。无需工作经验。',
    scholarship_available: true,
    scholarship_note_zh:
      '提供Monash Postgraduate Merit Scholarship等。',
    curriculum_zh:
      '核心课程：商业战略、商业分析、市场营销、财务管理；可选方向：商业管理、国际商务。包含行业项目或实习。',
    career_prospects_zh:
      '商业分析师、项目经理、市场营销主管、运营经理、管理培训生。',
    application_materials_zh:
      '本科学位证书和成绩单、雅思/托福成绩单、个人陈述、简历/CV、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh: 'AACSB和EQUIS双重认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年11月截止；7月入学：当年5月截止。',
  },
  {
    name_en: 'Master of Professional Accounting',
    name_zh: '专业会计硕士',
    degree_level: 'master',
    faculty_en: 'Monash Business School',
    faculty_zh: '蒙纳士商学院',
    field_category: 'Business',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 52000,
    tuition_international_cny_estimate: cny(52000),
    tuition_note: '总学费约RM52,000',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 2.7,
    requirements_zh:
      '本科学位（非会计专业也可），GPA 2.7/4.0或同等成绩。适合希望转行从事会计工作的学生。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash Postgraduate Merit Scholarship等。',
    curriculum_zh:
      '财务会计、管理会计、审计与保险、税法、公司法、商业法、会计信息系统、战略管理会计、职业实践。',
    career_prospects_zh:
      '注册会计师、审计师、税务顾问、财务总监、会计师事务所合伙人。',
    application_materials_zh:
      '本科学位证书和成绩单、雅思/托福成绩单、个人陈述、简历/CV、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh:
      'CPA Australia认证、ACCA认证、MIA认证、AACSB和EQUIS双重认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年11月截止；7月入学：当年5月截止。',
  },
  {
    name_en: 'Master of International Business',
    name_zh: '国际商务硕士',
    degree_level: 'master',
    faculty_en: 'Monash Business School',
    faculty_zh: '蒙纳士商学院',
    field_category: 'Business',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 52000,
    tuition_international_cny_estimate: cny(52000),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 2.7,
    requirements_zh:
      '本科学位（任何专业），GPA 2.7/4.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash Postgraduate Merit Scholarship等。',
    curriculum_zh:
      '国际商务战略、跨文化管理、全球供应链管理、国际金融、亚洲商业环境、国际贸易法、研究项目。',
    career_prospects_zh:
      '国际贸易经理、跨国公司管理层、外贸专员、国际市场分析师。',
    application_materials_zh:
      '本科学位证书和成绩单、雅思/托福成绩单、个人陈述、简历/CV、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh: 'AACSB和EQUIS双重认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年11月截止；7月入学：当年5月截止。',
  },

  // ── School of Engineering ─────────────────────────────────────────────
  {
    name_en: 'Master of Engineering Science',
    name_zh: '工程科学硕士',
    degree_level: 'master',
    faculty_en: 'School of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 46000,
    tuition_international_cny_estimate: cny(46000),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 2.7,
    requirements_zh:
      '工程或相关专业本科学位，GPA 2.7/4.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash Postgraduate Merit Scholarship等。',
    curriculum_zh:
      '研究方法论、工程专业高级课程（化工/土木/电气/机械/材料）、研究项目。可选专业方向：化学工程、土木工程、电气工程、机械工程、材料工程。',
    career_prospects_zh:
      '高级工程师、技术经理、研发工程师、工程顾问、项目经理。',
    application_materials_zh:
      '本科学位证书和成绩单、雅思/托福成绩单、研究计划书（简要）、个人陈述、推荐信（2封）、护照复印件。',
    additional_requirements_zh: '需要工程或相关理工科背景。',
    accreditation_zh: 'BEM认证、EA认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年11月截止；7月入学：当年5月截止。',
  },
  {
    name_en: 'Master of Advanced Engineering',
    name_zh: '高级工程硕士',
    degree_level: 'master',
    faculty_en: 'School of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 1,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 48000,
    tuition_international_cny_estimate: cny(48000),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '工程本科学位（四年制），GPA 3.0/4.0或同等成绩。需要相关工程背景。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash Postgraduate Merit Scholarship等。',
    curriculum_zh:
      '高级工程专业课程、工程项目管理、行业项目、技术创新管理。方向包括：智能制造、可持续能源、基础设施工程等。',
    career_prospects_zh:
      '高级工程顾问、技术总监、工程研发主管、项目总监。',
    application_materials_zh:
      '本科学位证书和成绩单（工程类）、雅思/托福成绩单、个人陈述、推荐信、护照复印件。',
    additional_requirements_zh: '需四年制工程本科背景。',
    accreditation_zh: 'BEM认证、EA认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年11月截止；7月入学：当年5月截止。',
  },

  // ── School of Information Technology ───────────────────────────────────
  {
    name_en: 'Master of Information Technology',
    name_zh: '信息技术硕士',
    degree_level: 'master',
    faculty_en: 'School of Information Technology',
    faculty_zh: '信息技术学院',
    field_category: 'IT',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 48000,
    tuition_international_cny_estimate: cny(48000),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 2.7,
    requirements_zh:
      '本科学位（IT或相关领域），GPA 2.7/4.0或同等成绩。非IT背景可能需要额外课程。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash Postgraduate Merit Scholarship等。',
    curriculum_zh:
      '高级编程、软件工程管理、数据科学与分析、网络安全、云计算、AI与机器学习、行业项目。',
    career_prospects_zh:
      'IT项目经理、高级软件工程师、数据架构师、IT顾问、技术主管。',
    application_materials_zh:
      '本科学位证书和成绩单、雅思/托福成绩单、个人陈述、简历/CV、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh: 'ACS认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年11月截止；7月入学：当年5月截止。',
  },
  {
    name_en: 'Master of Data Science',
    name_zh: '数据科学硕士',
    degree_level: 'master',
    faculty_en: 'School of Information Technology',
    faculty_zh: '信息技术学院',
    field_category: 'IT',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 48000,
    tuition_international_cny_estimate: cny(48000),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 2.7,
    requirements_zh:
      '本科学位（IT、数学、统计或相关领域），GPA 2.7/4.0或同等成绩。需有编程和统计基础。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash Postgraduate Merit Scholarship等。',
    curriculum_zh:
      '数据挖掘与知识发现、机器学习、大数据处理、统计建模、数据可视化、深度学习、行业数据科学项目。',
    career_prospects_zh:
      '数据科学家、机器学习工程师、商业智能分析师、AI研究员、大数据架构师。',
    application_materials_zh:
      '本科学位证书和成绩单、雅思/托福成绩单、个人陈述、简历/CV、护照复印件。',
    additional_requirements_zh: '需有编程（Python/R）和统计学基础。',
    accreditation_zh: 'ACS认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年11月截止；7月入学：当年5月截止。',
  },
  {
    name_en: 'Master of Cybersecurity',
    name_zh: '网络安全硕士',
    degree_level: 'master',
    faculty_en: 'School of Information Technology',
    faculty_zh: '信息技术学院',
    field_category: 'IT',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 48000,
    tuition_international_cny_estimate: cny(48000),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 2.7,
    requirements_zh:
      '本科学位（IT或相关领域），GPA 2.7/4.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash Postgraduate Merit Scholarship等。',
    curriculum_zh:
      '网络安全基础、密码学、安全运营与事件响应、渗透测试与道德黑客、安全架构设计、数字取证、安全治理与合规。',
    career_prospects_zh:
      '网络安全经理、安全架构师、渗透测试专家、安全运营中心（SOC）分析师、首席信息安全官（CISO）。',
    application_materials_zh:
      '本科学位证书和成绩单、雅思/托福成绩单、个人陈述、简历/CV、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh: 'ACS认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年11月截止；7月入学：当年5月截止。',
  },

  // ── School of Arts and Social Sciences ────────────────────────────────
  {
    name_en: 'Master of Communications and Media Studies',
    name_zh: '传播与媒体研究硕士',
    degree_level: 'master',
    faculty_en: 'School of Arts and Social Sciences',
    faculty_zh: '文学与社会科学学院',
    field_category: 'Arts',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 42000,
    tuition_international_cny_estimate: cny(42000),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 2.7,
    requirements_zh:
      '本科学位（任何专业），GPA 2.7/4.0或同等成绩。有传播相关经验者优先。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash Postgraduate Merit Scholarship等。',
    curriculum_zh:
      '传播理论、媒体研究方法、数字媒体与社会、战略传播、跨文化传播、毕业研究项目。',
    career_prospects_zh:
      '传播总监、媒体策划、公关经理、企业传播主管、数字媒体策略师。',
    application_materials_zh:
      '本科学位证书和成绩单、雅思/托福成绩单、个人陈述、简历/CV、护照复印件。',
    additional_requirements_zh: null,
    accreditation_zh: 'MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年11月截止；7月入学：当年5月截止。',
  },
  {
    name_en: 'Master of Professional Counselling',
    name_zh: '专业心理咨询硕士',
    degree_level: 'master',
    faculty_en: 'School of Arts and Social Sciences',
    faculty_zh: '文学与社会科学学院',
    field_category: 'Arts',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [2],
    tuition_international_myr: 50000,
    tuition_international_cny_estimate: cny(50000),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 2.7,
    requirements_zh:
      '心理学或相关领域本科学位，GPA 2.7/4.0或同等成绩。需通过面试。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash Postgraduate Merit Scholarship等。',
    curriculum_zh:
      '咨询理论与实践、心理评估、咨询伦理、家庭与婚姻咨询、团体辅导、危机干预、督导实习（临床实践）。包含累计实习时间要求。',
    career_prospects_zh:
      '注册心理咨询师、临床心理治疗师、学校心理辅导员、员工援助计划顾问。',
    application_materials_zh:
      '本科学位证书和成绩单（心理学相关）、雅思/托福成绩单、个人陈述、两封推荐信、简历/CV、面试。',
    additional_requirements_zh: '需通过面试。仅2月入学。需心理学或相关背景。',
    accreditation_zh:
      '马来西亚咨询师委员会认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '仅2月入学，截止日期通常为前一年9-10月。',
  },

  // ── School of Science ─────────────────────────────────────────────────
  {
    name_en: 'Master of Science',
    name_zh: '理学硕士',
    degree_level: 'master',
    faculty_en: 'School of Science',
    faculty_zh: '理学院',
    field_category: 'Science',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 42000,
    tuition_international_cny_estimate: cny(42000),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 2.7,
    requirements_zh:
      '理科或相关领域本科学位，GPA 2.7/4.0或同等成绩。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash Postgraduate Merit Scholarship、各项研究奖学金。',
    curriculum_zh:
      '研究方法论、高级专业课程（化学/生物/物理/食品科学等）、文献综述、研究项目（含论文或课题报告）。',
    career_prospects_zh:
      '科研人员、实验室主管、学术研究员、政府科学官员、继续攻读博士。',
    application_materials_zh:
      '本科学位证书和成绩单、雅思/托福成绩单、研究计划书、推荐信（2封）、护照复印件。',
    additional_requirements_zh: '需理科或相关背景。研究型或混合型（授课+研究）。',
    accreditation_zh: 'MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年11月截止；7月入学：当年5月截止。',
  },

  // ── Jeffrey Cheah School of Medicine and Health Sciences ───────────────
  {
    name_en: 'Master of Public Health',
    name_zh: '公共卫生硕士',
    degree_level: 'master',
    faculty_en: 'Jeffrey Cheah School of Medicine and Health Sciences',
    faculty_zh: '谢富年医学与健康科学学院',
    field_category: 'Medicine',
    duration_years: 1.5,
    language_of_instruction: 'English',
    intake_months: [2, 7],
    tuition_international_myr: 50000,
    tuition_international_cny_estimate: cny(50000),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 2.7,
    requirements_zh:
      '医学或健康科学相关本科学位，GPA 2.7/4.0或同等成绩。有公共卫生工作经验者优先。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash Postgraduate Merit Scholarship等。',
    curriculum_zh:
      '流行病学、生物统计学、健康政策与管理、环境健康、全球卫生、健康促进、研究方法、毕业研究项目。',
    career_prospects_zh:
      '公共卫生官员、流行病学家、卫生政策分析师、WHO/NGO卫生项目官员、医院管理者。',
    application_materials_zh:
      '本科学位证书和成绩单、雅思/托福成绩单、个人陈述、推荐信（2封）、简历/CV、护照复印件。',
    additional_requirements_zh: '建议有医疗卫生领域工作经验。',
    accreditation_zh: 'MQA认证、中国教育部认证。',
    application_deadline_note:
      '2月入学：前一年11月截止；7月入学：当年5月截止。',
  },

  // ── School of Pharmacy ────────────────────────────────────────────────
  {
    name_en: 'Master of Clinical Pharmacy',
    name_zh: '临床药学硕士',
    degree_level: 'master',
    faculty_en: 'School of Pharmacy',
    faculty_zh: '药学院',
    field_category: 'Pharmacy',
    duration_years: 2,
    language_of_instruction: 'English',
    intake_months: [2],
    tuition_international_myr: 55000,
    tuition_international_cny_estimate: cny(55000),
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 2.7,
    requirements_zh:
      '药剂学本科学位，GPA 2.7/4.0或同等成绩。需为注册药剂师或具有药学执业资格。',
    scholarship_available: true,
    scholarship_note_zh: 'Monash Postgraduate Merit Scholarship等。',
    curriculum_zh:
      '高级药物治疗学、循证药学、药物经济学、临床药代动力学、药学研究方法、临床实践项目、研究论文。',
    career_prospects_zh:
      '临床药剂师、医院药房主管、药学教育者、制药公司临床研究、药品监管。',
    application_materials_zh:
      '药学本科学位证书和成绩单、雅思/托福成绩单、药剂师注册证明、工作经验证明、推荐信（2封）、护照复印件。',
    additional_requirements_zh: '需为注册药剂师。仅2月入学。',
    accreditation_zh: '马来西亚药剂委员会（PBM）认证、MQA认证、中国教育部认证。',
    application_deadline_note:
      '仅2月入学，截止日期通常为前一年9-10月。',
  },
];

// ============================================================================
// POSTGRADUATE RESEARCH PROGRAMS (PhD)
// ============================================================================

const phdPrograms: MonashProgram[] = [
  {
    name_en: 'Doctor of Philosophy (Engineering)',
    name_zh: '哲学博士（工程学）',
    degree_level: 'phd',
    faculty_en: 'School of Engineering',
    faculty_zh: '工程学院',
    field_category: 'Engineering',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 38000,
    tuition_international_cny_estimate: cny(38000),
    tuition_note: '每年学费，最少3年',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '相关领域硕士学位，GPA 3.0/4.0或同等成绩；或工程类荣誉学位（一等或二等上荣誉）。需提交研究计划书并获得导师同意。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash University Malaysia Graduate Research Merit Scholarship（全额学费减免+生活津贴）、Monash International Postgraduate Research Scholarship、各项外部奖学金（如MEXT、CSC等）。',
    curriculum_zh:
      '全研究型博士课程。研究领域包括：化学工程、土木工程、电气与计算机系统工程、机械工程、机器人与机电工程、材料科学、可持续能源等。需完成独立研究并提交博士论文，通过口头答辩。',
    career_prospects_zh:
      '大学教授/讲师、高级研究员、研发总监、技术顾问、首席科学家。',
    application_materials_zh:
      '硕士学位证书和成绩单（或荣誉学位）、雅思/托福成绩单、研究计划书（2000-3000字）、两封学术推荐信、个人陈述、学术出版物列表（如有）、护照复印件。',
    additional_requirements_zh:
      '需联系并获得潜在导师的同意。全年可申请，但建议提前6个月准备。',
    accreditation_zh: 'MQA认证、澳大利亚学术资格框架（AQF）认证、中国教育部认证。',
    application_deadline_note:
      '全年接受申请。奖学金申请有特定截止日期，一般为每年4月和10月。',
  },
  {
    name_en: 'Doctor of Philosophy (Information Technology)',
    name_zh: '哲学博士（信息技术）',
    degree_level: 'phd',
    faculty_en: 'School of Information Technology',
    faculty_zh: '信息技术学院',
    field_category: 'IT',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 36000,
    tuition_international_cny_estimate: cny(36000),
    tuition_note: '每年学费，最少3年',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      'IT或相关领域硕士学位，GPA 3.0/4.0或同等成绩；或IT荣誉学位（一等或二等上荣誉）。需提交研究计划书。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash Graduate Research Merit Scholarship（全额学费+生活津贴）、各项外部奖学金。',
    curriculum_zh:
      '全研究型。研究领域：人工智能、数据科学、网络安全、软件工程、人机交互、计算机视觉、自然语言处理等。需完成原创研究并提交博士论文。',
    career_prospects_zh:
      '大学教授、AI研究科学家、首席技术官、高级研究员、技术创业者。',
    application_materials_zh:
      '硕士学位证书和成绩单、雅思/托福成绩单、研究计划书（2000-3000字）、两封学术推荐信、学术出版物列表（如有）、护照复印件。',
    additional_requirements_zh: '需联系并获得导师同意。有学术出版物者优先。',
    accreditation_zh: 'MQA认证、AQF认证、中国教育部认证。',
    application_deadline_note:
      '全年接受申请。奖学金截止日期一般为每年4月和10月。',
  },
  {
    name_en: 'Doctor of Philosophy (Business)',
    name_zh: '哲学博士（商学）',
    degree_level: 'phd',
    faculty_en: 'Monash Business School',
    faculty_zh: '蒙纳士商学院',
    field_category: 'Business',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 36000,
    tuition_international_cny_estimate: cny(36000),
    tuition_note: '每年学费，最少3年',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '商学或相关领域硕士学位（含研究成分），GPA 3.0/4.0或同等成绩。需提交研究计划书。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash Graduate Research Merit Scholarship、Jeffrey Cheah Research Scholarship等。',
    curriculum_zh:
      '全研究型。研究领域：会计、金融、管理、市场营销、经济学、商业分析、国际商务等。需完成独立研究并提交博士论文。',
    career_prospects_zh:
      '商学院教授、高级研究员、政策分析师、首席经济学家、管理咨询高级合伙人。',
    application_materials_zh:
      '硕士学位证书和成绩单、雅思/托福成绩单、研究计划书（2000-3000字）、两封学术推荐信、学术出版物列表（如有）、护照复印件。',
    additional_requirements_zh: '需联系并获得导师同意。硕士阶段需有研究成分。',
    accreditation_zh: 'AACSB和EQUIS双重认证、MQA认证、AQF认证、中国教育部认证。',
    application_deadline_note:
      '全年接受申请。奖学金截止日期一般为每年4月和10月。',
  },
  {
    name_en: 'Doctor of Philosophy (Arts and Social Sciences)',
    name_zh: '哲学博士（文学与社会科学）',
    degree_level: 'phd',
    faculty_en: 'School of Arts and Social Sciences',
    faculty_zh: '文学与社会科学学院',
    field_category: 'Arts',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 32000,
    tuition_international_cny_estimate: cny(32000),
    tuition_note: '每年学费，最少3年',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '相关领域硕士学位（含研究成分），GPA 3.0/4.0或同等成绩。需提交研究计划书。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash Graduate Research Merit Scholarship等。',
    curriculum_zh:
      '全研究型。研究领域：传播学、心理学、社会学、性别研究、文化研究、国际关系等。需完成独立研究并提交博士论文。',
    career_prospects_zh:
      '大学教授、社会研究员、政策分析师、国际组织专家、文化顾问。',
    application_materials_zh:
      '硕士学位证书和成绩单、雅思/托福成绩单、研究计划书（2000-3000字）、两封学术推荐信、学术出版物或写作样本、护照复印件。',
    additional_requirements_zh: '需联系并获得导师同意。',
    accreditation_zh: 'MQA认证、AQF认证、中国教育部认证。',
    application_deadline_note:
      '全年接受申请。奖学金截止日期一般为每年4月和10月。',
  },
  {
    name_en: 'Doctor of Philosophy (Science)',
    name_zh: '哲学博士（理学）',
    degree_level: 'phd',
    faculty_en: 'School of Science',
    faculty_zh: '理学院',
    field_category: 'Science',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 38000,
    tuition_international_cny_estimate: cny(38000),
    tuition_note: '每年学费，最少3年',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '理学或相关领域硕士学位，GPA 3.0/4.0或同等成绩；或理学荣誉学位（一等或二等上荣誉）。需提交研究计划书。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash Graduate Research Merit Scholarship（全额学费+生活津贴）、各项外部奖学金。',
    curriculum_zh:
      '全研究型。研究领域：化学、生物学、生物技术、食品科学、环境科学、基因组学、热带生物学等。需完成原创研究并提交博士论文。',
    career_prospects_zh:
      '大学教授、高级科学家、研究机构主管、生物技术公司研发负责人。',
    application_materials_zh:
      '硕士学位证书和成绩单、雅思/托福成绩单、研究计划书（2000-3000字）、两封学术推荐信、学术出版物列表（如有）、护照复印件。',
    additional_requirements_zh: '需联系并获得导师同意。有实验室研究经验者优先。',
    accreditation_zh: 'MQA认证、AQF认证、中国教育部认证。',
    application_deadline_note:
      '全年接受申请。奖学金截止日期一般为每年4月和10月。',
  },
  {
    name_en: 'Doctor of Philosophy (Medicine)',
    name_zh: '哲学博士（医学）',
    degree_level: 'phd',
    faculty_en: 'Jeffrey Cheah School of Medicine and Health Sciences',
    faculty_zh: '谢富年医学与健康科学学院',
    field_category: 'Medicine',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 40000,
    tuition_international_cny_estimate: cny(40000),
    tuition_note: '每年学费，最少3年',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '医学或健康科学相关领域硕士学位，GPA 3.0/4.0或同等成绩。需提交研究计划书。有临床或研究经验者优先。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash Graduate Research Merit Scholarship、Jeffrey Cheah Research Scholarship等。',
    curriculum_zh:
      '全研究型。研究领域：临床医学、公共卫生、热带医学、传染病学、神经科学、药理学、遗传学、生物医学等。需完成原创研究并提交博士论文。',
    career_prospects_zh:
      '医学教授、临床研究员、公共卫生专家、医药公司高级研发、卫生政策制定者。',
    application_materials_zh:
      '硕士学位证书和成绩单、雅思/托福成绩单、研究计划书（2000-3000字）、两封学术推荐信、学术出版物列表、工作经验证明（如有）、护照复印件。',
    additional_requirements_zh: '需联系并获得导师同意。建议有相关临床或研究经验。',
    accreditation_zh: 'MQA认证、AQF认证、中国教育部认证。',
    application_deadline_note:
      '全年接受申请。奖学金截止日期一般为每年4月和10月。',
  },
  {
    name_en: 'Doctor of Philosophy (Pharmacy)',
    name_zh: '哲学博士（药学）',
    degree_level: 'phd',
    faculty_en: 'School of Pharmacy',
    faculty_zh: '药学院',
    field_category: 'Pharmacy',
    duration_years: 3,
    language_of_instruction: 'English',
    intake_months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tuition_international_myr: 38000,
    tuition_international_cny_estimate: cny(38000),
    tuition_note: '每年学费，最少3年',
    min_ielts: 6.5,
    min_toefl: 79,
    min_gpa: 3.0,
    requirements_zh:
      '药学或相关领域硕士学位，GPA 3.0/4.0或同等成绩。需提交研究计划书。',
    scholarship_available: true,
    scholarship_note_zh:
      'Monash Graduate Research Merit Scholarship等。',
    curriculum_zh:
      '全研究型。研究领域：药物化学、药剂学、药理学、临床药学、药物递送系统、天然产物研究、药物经济学等。需完成原创研究并提交博士论文。',
    career_prospects_zh:
      '药学教授、药物研发科学家、制药公司研发主管、药品监管专家。',
    application_materials_zh:
      '硕士学位证书和成绩单（药学相关）、雅思/托福成绩单、研究计划书（2000-3000字）、两封学术推荐信、学术出版物列表（如有）、护照复印件。',
    additional_requirements_zh: '需联系并获得导师同意。药学或相关背景必需。',
    accreditation_zh: 'MQA认证、AQF认证、中国教育部认证。',
    application_deadline_note:
      '全年接受申请。奖学金截止日期一般为每年4月和10月。',
  },
];

// ============================================================================
// COMBINED EXPORT
// ============================================================================

export const monashPrograms: MonashProgram[] = [
  ...undergraduatePrograms,
  ...postgraduateCourseworkPrograms,
  ...phdPrograms,
];

// Summary statistics
export const monashProgramStats = {
  total: monashPrograms.length,
  undergraduate: undergraduatePrograms.length,
  postgraduateCoursework: postgraduateCourseworkPrograms.length,
  phd: phdPrograms.length,
  faculties: [
    { en: 'School of Engineering', zh: '工程学院' },
    { en: 'School of Information Technology', zh: '信息技术学院' },
    { en: 'Monash Business School', zh: '蒙纳士商学院' },
    { en: 'School of Arts and Social Sciences', zh: '文学与社会科学学院' },
    { en: 'School of Science', zh: '理学院' },
    { en: 'Jeffrey Cheah School of Medicine and Health Sciences', zh: '谢富年医学与健康科学学院' },
    { en: 'School of Pharmacy', zh: '药学院' },
    { en: 'Monash College', zh: '蒙纳士学院' },
  ],
};

export default monashPrograms;

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import monashPrograms from '../data/monash-programs';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

/** Generate a URL-safe slug from English program name + university slug prefix */
function generateProgramSlug(uniSlug: string, nameEn: string): string {
  const base = nameEn
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  // Use first 3 chars of university slug as prefix for uniqueness
  const prefix = uniSlug.split('-').map(w => w[0]).join('').slice(0, 4);
  return `${prefix}-${base}`;
}

async function main() {
  console.log('🌱 开始导入种子数据...');

  const universities = [
    {
      slug: 'universiti-malaya',
      name_zh: '马来亚大学',
      name_en: 'Universiti Malaya',
      type: 'public' as const,
      established_year: 1905,
      state: '吉隆坡联邦直辖区',
      city: '吉隆坡',
      coordinates_lat: 3.1209,
      coordinates_lng: 101.6538,
      website: 'https://www.um.edu.my',
      ranking_qs: 60,
      ranking_malaysia: 1,
      ranking_year: 2025,
      total_students: 22000,
      international_students: 4000,
      featured: true,
      description_zh: '马来亚大学（简称UM）是马来西亚历史最悠久、综合排名最高的研究型公立大学，QS世界排名第60位（2025年）。学校坐落于吉隆坡市区，校园环境优美，国际化氛围浓厚。提供本科、硕士和博士学位课程，涵盖理工、医学、商科、人文等众多领域，是中国学生留学马来西亚的首选院校之一。',
      highlights_zh: ['马来西亚排名第一', 'QS世界前60位', '100年历史名校', '中文服务团队'],
    },
    {
      slug: 'monash-university-malaysia',
      name_zh: '蒙纳士大学马来西亚校区',
      name_en: 'Monash University Malaysia',
      type: 'private' as const,
      established_year: 1998,
      state: '雪兰莪州',
      city: '八打灵再也',
      coordinates_lat: 3.0697,
      coordinates_lng: 101.6063,
      website: 'https://www.monash.edu.my',
      ranking_qs: 37,
      ranking_malaysia: null,
      ranking_year: 2025,
      total_students: 8000,
      international_students: 3000,
      featured: true,
      description_zh: '蒙纳士大学马来西亚校区是澳大利亚顶尖名校蒙纳士大学在马来西亚设立的分校区，QS世界排名第37位（2025年），是马来西亚排名最高的私立大学。学位与澳大利亚本校完全相同，获全球雇主高度认可。提供商科、工程、IT、医学等热门专业。',
      highlights_zh: ['QS全球前40', '澳洲名校分校', '国际认可学历', '强大就业资源'],
    },
    {
      slug: 'universiti-teknologi-malaysia',
      name_zh: '马来西亚理工大学',
      name_en: 'Universiti Teknologi Malaysia',
      type: 'public' as const,
      established_year: 1904,
      state: '柔佛州',
      city: '新山',
      coordinates_lat: 1.5587,
      coordinates_lng: 103.6381,
      website: 'https://www.utm.my',
      ranking_qs: 181,
      ranking_malaysia: 3,
      ranking_year: 2025,
      total_students: 27000,
      international_students: 5000,
      featured: true,
      description_zh: '马来西亚理工大学（UTM）是马来西亚工程与技术领域排名最高的公立大学，QS世界排名第181位。主校区位于柔佛州新山市，毗邻新加坡，地理位置优越。在工程、建筑、计算机科学等理工科领域享有极高声誉，是工科学生的理想选择。',
      highlights_zh: ['工科领域第一', 'QS世界前200', '毗邻新加坡', '强大研究资源'],
    },
    {
      slug: 'universiti-putra-malaysia',
      name_zh: '马来西亚博特拉大学',
      name_en: 'Universiti Putra Malaysia',
      type: 'public' as const,
      established_year: 1931,
      state: '雪兰莪州',
      city: '八打灵再也',
      coordinates_lat: 2.9884,
      coordinates_lng: 101.7239,
      website: 'https://www.upm.edu.my',
      ranking_qs: 148,
      ranking_malaysia: 2,
      ranking_year: 2025,
      total_students: 33000,
      international_students: 6000,
      featured: true,
      description_zh: '马来西亚博特拉大学（UPM）是马来西亚综合排名第二的顶尖公立研究型大学，QS世界排名第148位。以农业、生命科学、医学和工程闻名，拥有马来西亚最大的校园之一，研究实力雄厚，奖学金机会丰富。',
      highlights_zh: ['马来西亚第二名', 'QS世界前150', '研究型强校', '奖学金丰富'],
    },
    {
      slug: 'universiti-kebangsaan-malaysia',
      name_zh: '马来西亚国立大学',
      name_en: 'Universiti Kebangsaan Malaysia',
      type: 'public' as const,
      established_year: 1970,
      state: '雪兰莪州',
      city: '班吉',
      coordinates_lat: 2.9209,
      coordinates_lng: 101.7738,
      website: 'https://www.ukm.my',
      ranking_qs: 126,
      ranking_malaysia: null,
      ranking_year: 2025,
      total_students: 27000,
      international_students: 4500,
      featured: false,
      description_zh: '马来西亚国立大学（UKM）是马来西亚顶尖综合性公立研究型大学，QS世界排名第126位。以医学、理科、工程和社会科学见长。拥有完善的国际学生服务体系，是中国学生申请硕士和博士学位的热门选择。',
      highlights_zh: ['QS世界前130', '医学名校', '完善国际服务', '硕博优先推荐'],
    },
    {
      slug: 'universiti-sains-malaysia',
      name_zh: '马来西亚理科大学',
      name_en: 'Universiti Sains Malaysia',
      type: 'public' as const,
      established_year: 1969,
      state: '槟城州',
      city: '峇六拜',
      coordinates_lat: 5.3576,
      coordinates_lng: 100.3021,
      website: 'https://www.usm.my',
      ranking_qs: 146,
      ranking_malaysia: null,
      ranking_year: 2025,
      total_students: 28000,
      international_students: 5500,
      featured: false,
      description_zh: '马来西亚理科大学（USM）是马来西亚顶尖公立研究型大学，QS世界排名第146位。位于风景秀丽的槟城岛，是马来西亚唯一的"APEX"地位大学（研究型精英大学）。在理工科、医学和生命科学领域享有极高声誉。',
      highlights_zh: ['槟城名校', 'QS世界前150', 'APEX研究型大学', '自然环境优美'],
    },
    {
      slug: 'segi-university',
      name_zh: '世纪大学',
      name_en: 'SEGi University',
      type: 'private' as const,
      established_year: 1977,
      state: '雪兰莪州',
      city: '梳邦再也',
      coordinates_lat: 3.0741,
      coordinates_lng: 101.5873,
      website: 'https://www.segi.edu.my',
      ranking_qs: null,
      ranking_malaysia: null,
      ranking_year: null,
      total_students: 15000,
      international_students: 3000,
      featured: false,
      description_zh: '世纪大学是马来西亚历史悠久的私立大学，创办于1977年。以实用型教育为特色，提供商科、医疗卫生、工程、IT等多个领域的本科和硕士课程。学费相对亲民，入学门槛较低，是中国学生进入马来西亚留学的友好选择。',
      highlights_zh: ['历史悠久私立大学', '学费亲民', '录取门槛低', '实用型教育'],
    },
    {
      slug: 'inti-international-university',
      name_zh: '英迪国际大学',
      name_en: 'INTI International University',
      type: 'private' as const,
      established_year: 1986,
      state: '森美兰州',
      city: '芙蓉',
      coordinates_lat: 2.7297,
      coordinates_lng: 101.9381,
      website: 'https://newinti.edu.my',
      ranking_qs: 516,
      ranking_malaysia: null,
      ranking_year: 2025,
      total_students: 12000,
      international_students: 2500,
      featured: false,
      description_zh: '英迪国际大学（INTI）创办于1986年，是马来西亚知名国际私立大学，隶属于美国劳瑞德国际大学联盟。QS世界排名第516位。提供商科、工程、计算机、健康科学等多个专业，与美国、英国、澳大利亚等多所知名大学有学分转移合作项目，方便学生日后赴海外深造。',
      highlights_zh: ['劳瑞德国际联盟', '可转学海外名校', 'QS世界前600', '国际化氛围'],
    },
  ];

  for (const uniData of universities) {
    const uni = await prisma.university.upsert({
      where: { slug: uniData.slug },
      update: uniData,
      create: uniData,
    });
    console.log(`✅ 已导入: ${uni.name_zh}`);

    // Add living costs
    await prisma.livingCost.upsert({
      where: { university_id: uni.id },
      update: {},
      create: {
        university_id: uni.id,
        accommodation_on_campus_myr: uniData.type === 'public' ? 400 : 800,
        accommodation_off_campus_myr: uniData.type === 'public' ? 700 : 1200,
        monthly_living_estimate_myr: 1500,
        monthly_living_estimate_cny: 2400,
        food_estimate_myr: 500,
        transport_estimate_myr: 200,
        note_zh: '以上为参考估算，实际费用因个人生活方式而异。吉隆坡地区生活费略高于其他城市。',
      },
    });

    // Add contact info
    const contactMap: Record<string, { email: string; phone: string; address_zh: string; wechat?: string }> = {
      'universiti-malaya': {
        email: 'intl_admission@um.edu.my',
        phone: '+60-3-7967-6002',
        address_zh: '马来西亚吉隆坡联邦直辖区50603',
        wechat: 'CSAUM',
      },
      'monash-university-malaysia': {
        email: 'malaysia.enquiries@monash.edu',
        phone: '+60-3-5514-6000',
        address_zh: '马来西亚雪兰莪州八打灵再也47500',
      },
      'universiti-teknologi-malaysia': {
        email: 'intladmission@utm.my',
        phone: '+60-7-553-0939',
        address_zh: '马来西亚柔佛州新山81310',
      },
      'universiti-putra-malaysia': {
        email: 'intl@upm.edu.my',
        phone: '+60-3-9769-1000',
        address_zh: '马来西亚雪兰莪州八打灵再也43400',
      },
      'universiti-kebangsaan-malaysia': {
        email: 'ppa@ukm.edu.my',
        phone: '+60-3-8921-5555',
        address_zh: '马来西亚雪兰莪州班吉43600',
      },
      'universiti-sains-malaysia': {
        email: 'admission@usm.my',
        phone: '+60-4-653-3888',
        address_zh: '马来西亚槟城州峇六拜11800',
      },
      'segi-university': {
        email: 'enquiry@segi.edu.my',
        phone: '+60-3-6145-1777',
        address_zh: '马来西亚雪兰莪州梳邦再也47810',
      },
      'inti-international-university': {
        email: 'info@newinti.edu.my',
        phone: '+60-6-798-2000',
        address_zh: '马来西亚森美兰州芙蓉71800',
      },
    };

    const contact = contactMap[uniData.slug];
    if (contact) {
      await prisma.universityContact.upsert({
        where: { id: `${uni.id}-intl` },
        update: {},
        create: {
          id: `${uni.id}-intl`,
          university_id: uni.id,
          type: 'international',
          email: contact.email,
          phone: contact.phone,
          address_zh: contact.address_zh,
          wechat: contact.wechat || null,
          office_hours: '周一至周五 9:00-17:00',
        },
      });
    }
  }

  // Add programs for UM
  const um = await prisma.university.findUnique({ where: { slug: 'universiti-malaya' } });
  if (um) {
    // Delete existing programs to avoid duplicates on re-run
    await prisma.program.deleteMany({ where: { university_id: um.id } });

    const umPrograms = [
      {
        name_zh: '计算机科学（荣誉）',
        name_en: 'Bachelor of Computer Science (Hons)',
        degree_level: 'bachelor' as const,
        field_category: '计算机与IT',
        duration_years: 4,
        tuition_international_myr: 15000,
        intake_months: [3, 9],
        min_ielts: 6.0,
      },
      {
        name_zh: '工商管理（荣誉）',
        name_en: 'Bachelor of Business Administration (Hons)',
        degree_level: 'bachelor' as const,
        field_category: '商科与管理',
        duration_years: 3,
        tuition_international_myr: 14000,
        intake_months: [3, 9],
        min_ielts: 6.0,
      },
      {
        name_zh: '电气工程（荣誉）',
        name_en: 'Bachelor of Electrical Engineering (Hons)',
        degree_level: 'bachelor' as const,
        field_category: '工程与技术',
        duration_years: 4,
        tuition_international_myr: 16000,
        intake_months: [9],
        min_ielts: 6.0,
      },
      {
        name_zh: '计算机科学硕士',
        name_en: 'Master of Computer Science',
        degree_level: 'master' as const,
        field_category: '计算机与IT',
        duration_years: 1.5,
        tuition_international_myr: 18000,
        intake_months: [3, 9],
        min_ielts: 6.5,
      },
      {
        name_zh: '工商管理硕士（MBA）',
        name_en: 'Master of Business Administration',
        degree_level: 'master' as const,
        field_category: '商科与管理',
        duration_years: 1.5,
        tuition_international_myr: 35000,
        intake_months: [3, 9],
        min_ielts: 6.5,
      },
      {
        name_zh: '计算机科学博士',
        name_en: 'Doctor of Philosophy (Computer Science)',
        degree_level: 'phd' as const,
        field_category: '计算机与IT',
        duration_years: 3,
        tuition_international_myr: 12000,
        intake_months: [3, 9],
        min_ielts: 6.5,
      },
    ];

    for (const prog of umPrograms) {
      await prisma.program.create({
        data: {
          slug: generateProgramSlug('universiti-malaya', prog.name_en),
          university_id: um.id,
          name_zh: prog.name_zh,
          name_en: prog.name_en,
          degree_level: prog.degree_level,
          field_category: prog.field_category,
          duration_years: prog.duration_years,
          tuition_international_myr: prog.tuition_international_myr,
          tuition_international_cny_estimate: Math.round(prog.tuition_international_myr * 1.6),
          language_of_instruction: '英语',
          intake_months: prog.intake_months,
          min_ielts: prog.min_ielts,
          scholarship_available: true,
          scholarship_note_zh:
            '马来亚大学为优秀国际学生提供多种奖学金，包括UM国际研究生奖学金（UMIGS）等，奖学金金额可覆盖全额或部分学费。',
          requirements_zh: `申请要求：学术成绩优秀；雅思${prog.min_ielts}分或托福同等成绩；本科申请需高中毕业证书及相关考试成绩。`,
          accreditation_zh: '马来西亚资格认证局（MQA）认证，中国教育部认证',
        },
      });
    }
    console.log('✅ 已导入马来亚大学专业数据');
  }

  // Add programs for Monash (42 programs from data/monash-programs.ts)
  const monash = await prisma.university.findUnique({ where: { slug: 'monash-university-malaysia' } });
  if (monash) {
    await prisma.program.deleteMany({ where: { university_id: monash.id } });

    for (const prog of monashPrograms) {
      await prisma.program.create({
        data: {
          slug: generateProgramSlug('monash-university-malaysia', prog.name_en),
          university_id: monash.id,
          name_zh: prog.name_zh,
          name_en: prog.name_en,
          degree_level: prog.degree_level,
          field_category: prog.field_category,
          faculty_zh: prog.faculty_zh,
          duration_years: prog.duration_years,
          tuition_international_myr: prog.tuition_international_myr,
          tuition_international_cny_estimate: prog.tuition_international_cny_estimate,
          language_of_instruction: prog.language_of_instruction,
          intake_months: prog.intake_months,
          min_ielts: prog.min_ielts,
          min_toefl: prog.min_toefl ?? undefined,
          min_gpa: prog.min_gpa ?? undefined,
          scholarship_available: prog.scholarship_available,
          scholarship_note_zh: prog.scholarship_note_zh ?? undefined,
          requirements_zh: prog.requirements_zh,
          curriculum_zh: prog.curriculum_zh,
          career_prospects_zh: prog.career_prospects_zh,
          application_materials_zh: prog.application_materials_zh,
          additional_requirements_zh: prog.additional_requirements_zh ?? undefined,
          accreditation_zh: prog.accreditation_zh,
          application_deadline_note: prog.application_deadline_note,
          tuition_note_zh: (prog as { tuition_note?: string }).tuition_note ?? undefined,
        },
      });
    }
    console.log(`✅ 已导入蒙纳士大学专业数据（${monashPrograms.length}个专业）`);
  }

  // Add programs for UTM
  const utm = await prisma.university.findUnique({ where: { slug: 'universiti-teknologi-malaysia' } });
  if (utm) {
    await prisma.program.deleteMany({ where: { university_id: utm.id } });

    const utmPrograms = [
      {
        name_zh: '土木工程（荣誉）',
        name_en: 'Bachelor of Civil Engineering (Hons)',
        degree_level: 'bachelor' as const,
        field_category: '工程与技术',
        duration_years: 4,
        tuition_international_myr: 13500,
        intake_months: [9],
        min_ielts: 6.0,
      },
      {
        name_zh: '计算机工程（荣誉）',
        name_en: 'Bachelor of Computer Engineering (Hons)',
        degree_level: 'bachelor' as const,
        field_category: '工程与技术',
        duration_years: 4,
        tuition_international_myr: 13500,
        intake_months: [9],
        min_ielts: 6.0,
      },
      {
        name_zh: '软件工程硕士',
        name_en: 'Master of Software Engineering',
        degree_level: 'master' as const,
        field_category: '计算机与IT',
        duration_years: 1.5,
        tuition_international_myr: 16000,
        intake_months: [3, 9],
        min_ielts: 6.0,
      },
    ];

    for (const prog of utmPrograms) {
      await prisma.program.create({
        data: {
          slug: generateProgramSlug('universiti-teknologi-malaysia', prog.name_en),
          university_id: utm.id,
          name_zh: prog.name_zh,
          name_en: prog.name_en,
          degree_level: prog.degree_level,
          field_category: prog.field_category,
          duration_years: prog.duration_years,
          tuition_international_myr: prog.tuition_international_myr,
          tuition_international_cny_estimate: Math.round(prog.tuition_international_myr * 1.6),
          language_of_instruction: '英语',
          intake_months: prog.intake_months,
          min_ielts: prog.min_ielts,
          scholarship_available: true,
          scholarship_note_zh: 'UTM提供多项国际学生奖学金，包括UTM国际研究生奖学金（IPS）。',
          requirements_zh: `申请要求：理工科背景；雅思${prog.min_ielts}分或托福80分以上；GPA 3.0以上。`,
          accreditation_zh: '马来西亚工程师学会（IEM）认证，中国教育部认证',
        },
      });
    }
    console.log('✅ 已导入马来西亚理工大学专业数据');
  }

  // Add sample news updates
  await prisma.newsUpdate.createMany({
    data: [
      {
        title_zh: '2025年马来西亚大学招生政策更新',
        content_zh: '马来西亚各大公立大学已发布2025年国际学生招生政策，申请截止日期和录取要求有所调整，请有意申请的同学及时了解最新信息。',
        category: '招生资讯',
        published_at: new Date('2025-01-15'),
      },
      {
        title_zh: 'QS世界大学排名2025：马来西亚高校表现亮眼',
        content_zh: '2025年QS世界大学排名正式发布，马来西亚多所高校排名显著提升。其中蒙纳士大学马来西亚校区跻身全球前40，马来亚大学保持第60位，马来西亚国立大学首次进入全球前130名。',
        category: '大学动态',
        published_at: new Date('2025-02-01'),
      },
      {
        title_zh: '马来西亚留学生活费参考指南（2025年更新）',
        content_zh: '根据最新数据，马来西亚留学每月生活费约1500-2500马币（约2400-4000人民币），包括住宿、餐饮和交通。相较于欧美澳国家，马来西亚生活成本极具竞争力。',
        category: '生活资讯',
        published_at: new Date('2025-02-15'),
      },
    ],
    skipDuplicates: true,
  });
  console.log('✅ 已导入新闻资讯数据');

  console.log('🎉 种子数据导入完成！');
}

main()
  .catch((e) => {
    console.error('❌ 种子数据导入失败:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

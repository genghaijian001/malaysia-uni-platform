import { db } from '@/lib/db';
import { Prisma } from '@prisma/client';
import type { SearchFilters, SearchResult } from '@/types/search';
import type { UniversityListItem, UniversityDetail } from '@/types/university';
import { MYR_TO_CNY_RATE } from '@/lib/constants/malaysia';

export async function getUniversities(filters: SearchFilters = {}): Promise<SearchResult<UniversityListItem>> {
  const {
    q,
    type,
    state,
    degree,
    field,
    tuition_max,
    scholarship,
    sort = 'ranking',
    page = 1,
    limit = 12,
  } = filters;

  const where: Prisma.UniversityWhereInput = {
    active: true,
  };

  if (type) where.type = type;
  if (state) where.state = { contains: state, mode: 'insensitive' };
  if (q) {
    where.OR = [
      { name_zh: { contains: q, mode: 'insensitive' } },
      { name_en: { contains: q, mode: 'insensitive' } },
      { city: { contains: q, mode: 'insensitive' } },
      { description_zh: { contains: q, mode: 'insensitive' } },
    ];
  }

  if (degree || field || scholarship !== undefined || tuition_max) {
    where.programs = {
      some: {
        active: true,
        ...(degree && { degree_level: degree }),
        ...(field && { field_category: field }),
        ...(scholarship && { scholarship_available: true }),
        ...(tuition_max && {
          tuition_international_myr: { lte: tuition_max },
        }),
      },
    };
  }

  let orderBy: Prisma.UniversityOrderByWithRelationInput = {};
  switch (sort) {
    case 'ranking':
      orderBy = { ranking_qs: { sort: 'asc', nulls: 'last' } };
      break;
    case 'name':
      orderBy = { name_zh: 'asc' };
      break;
    case 'tuition_asc':
    case 'tuition_desc':
      // Handled post-query
      orderBy = { ranking_qs: { sort: 'asc', nulls: 'last' } };
      break;
  }

  const skip = (page - 1) * limit;

  const [universities, total] = await Promise.all([
    db.university.findMany({
      where,
      orderBy,
      skip,
      take: limit,
      include: {
        programs: {
          where: { active: true },
          select: {
            degree_level: true,
            field_category: true,
            tuition_international_myr: true,
            tuition_international_cny_estimate: true,
            scholarship_available: true,
          },
        },
        _count: {
          select: { programs: { where: { active: true } } },
        },
      },
    }),
    db.university.count({ where }),
  ]);

  const mapped: UniversityListItem[] = universities.map((uni) => {
    const tuitions = uni.programs
      .map((p) => p.tuition_international_myr)
      .filter((t): t is NonNullable<typeof t> => t !== null)
      .map((t) => Number(t));

    const minTuitionMyr = tuitions.length > 0 ? Math.min(...tuitions) : null;
    const minTuitionCny = minTuitionMyr ? Math.round(minTuitionMyr * MYR_TO_CNY_RATE) : null;

    const degreeLevels = [...new Set(uni.programs.map((p) => p.degree_level))];

    return {
      id: uni.id,
      slug: uni.slug,
      name_zh: uni.name_zh,
      name_en: uni.name_en,
      type: uni.type,
      state: uni.state,
      city: uni.city,
      ranking_qs: uni.ranking_qs,
      ranking_malaysia: uni.ranking_malaysia,
      ranking_year: uni.ranking_year,
      established_year: uni.established_year,
      logo_url: uni.logo_url,
      featured: uni.featured,
      tuition_from_myr: minTuitionMyr,
      tuition_from_cny: minTuitionCny,
      has_scholarship: uni.programs.some((p) => p.scholarship_available),
      degree_levels: degreeLevels,
      programs_count: uni._count.programs,
      website: uni.website,
    };
  });

  // Post-query sort for tuition (not possible at DB level since tuition is derived from programs)
  if (sort === 'tuition_asc') {
    mapped.sort((a, b) => (a.tuition_from_myr ?? Infinity) - (b.tuition_from_myr ?? Infinity));
  } else if (sort === 'tuition_desc') {
    mapped.sort((a, b) => (b.tuition_from_myr ?? 0) - (a.tuition_from_myr ?? 0));
  }

  return {
    data: mapped,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
}

export async function getUniversityBySlug(slug: string): Promise<UniversityDetail | null> {
  const uni = await db.university.findUnique({
    where: { slug, active: true },
    include: {
      programs: {
        where: { active: true },
        orderBy: [{ degree_level: 'asc' }, { tuition_international_myr: 'asc' }],
      },
      contacts: true,
      living_cost: true,
      news: {
        where: { active: true },
        orderBy: { published_at: 'desc' },
        take: 5,
      },
      _count: {
        select: { programs: { where: { active: true } } },
      },
    },
  });

  if (!uni) return null;

  const tuitions = uni.programs
    .map((p) => p.tuition_international_myr)
    .filter((t): t is NonNullable<typeof t> => t !== null)
    .map((t) => Number(t));

  const minTuitionMyr = tuitions.length > 0 ? Math.min(...tuitions) : null;
  const minTuitionCny = minTuitionMyr ? Math.round(minTuitionMyr * MYR_TO_CNY_RATE) : null;
  const degreeLevels = [...new Set(uni.programs.map((p) => p.degree_level))];

  return {
    id: uni.id,
    slug: uni.slug,
    name_zh: uni.name_zh,
    name_en: uni.name_en,
    type: uni.type,
    state: uni.state,
    city: uni.city,
    ranking_qs: uni.ranking_qs,
    ranking_times: uni.ranking_times,
    ranking_malaysia: uni.ranking_malaysia,
    ranking_year: uni.ranking_year,
    established_year: uni.established_year,
    logo_url: uni.logo_url,
    cover_image_url: uni.cover_image_url,
    featured: uni.featured,
    tuition_from_myr: minTuitionMyr,
    tuition_from_cny: minTuitionCny,
    has_scholarship: uni.programs.some((p) => p.scholarship_available),
    degree_levels: degreeLevels,
    programs_count: uni._count.programs,
    website: uni.website,
    description_zh: uni.description_zh,
    description_en: uni.description_en,
    highlights_zh: uni.highlights_zh,
    coordinates_lat: Number(uni.coordinates_lat),
    coordinates_lng: Number(uni.coordinates_lng),
    total_students: uni.total_students,
    international_students: uni.international_students,
    academic_staff: uni.academic_staff,
    programs: uni.programs.map((p) => ({
      id: p.id,
      slug: p.slug,
      name_zh: p.name_zh,
      name_en: p.name_en,
      degree_level: p.degree_level,
      field_category: p.field_category,
      faculty_zh: p.faculty_zh,
      duration_years: Number(p.duration_years),
      tuition_international_myr: p.tuition_international_myr ? Number(p.tuition_international_myr) : null,
      tuition_international_cny_estimate: p.tuition_international_cny_estimate
        ? Number(p.tuition_international_cny_estimate)
        : null,
      scholarship_available: p.scholarship_available,
      intake_months: p.intake_months,
      language_of_instruction: p.language_of_instruction,
    })),
    contacts: uni.contacts.map((c) => ({
      id: c.id,
      type: c.type,
      email: c.email,
      phone: c.phone,
      address_zh: c.address_zh,
      wechat: c.wechat,
      whatsapp: c.whatsapp,
      office_hours: c.office_hours,
    })),
    living_cost: uni.living_cost
      ? {
          accommodation_on_campus_myr: uni.living_cost.accommodation_on_campus_myr
            ? Number(uni.living_cost.accommodation_on_campus_myr)
            : null,
          accommodation_off_campus_myr: uni.living_cost.accommodation_off_campus_myr
            ? Number(uni.living_cost.accommodation_off_campus_myr)
            : null,
          monthly_living_estimate_myr: uni.living_cost.monthly_living_estimate_myr
            ? Number(uni.living_cost.monthly_living_estimate_myr)
            : null,
          monthly_living_estimate_cny: uni.living_cost.monthly_living_estimate_cny
            ? Number(uni.living_cost.monthly_living_estimate_cny)
            : null,
          food_estimate_myr: uni.living_cost.food_estimate_myr
            ? Number(uni.living_cost.food_estimate_myr)
            : null,
          transport_estimate_myr: uni.living_cost.transport_estimate_myr
            ? Number(uni.living_cost.transport_estimate_myr)
            : null,
          note_zh: uni.living_cost.note_zh,
        }
      : null,
    news: uni.news.map((n) => ({
      id: n.id,
      title_zh: n.title_zh,
      content_zh: n.content_zh,
      category: n.category,
      published_at: n.published_at.toISOString(),
      source_url: n.source_url,
    })),
  };
}

export async function getProgramBySlug(programSlug: string): Promise<import('@/types/university').ProgramDetail | null> {
  const program = await db.program.findUnique({
    where: { slug: programSlug, active: true },
    include: {
      university: {
        select: {
          slug: true,
          name_zh: true,
          name_en: true,
          type: true,
          logo_url: true,
        },
      },
    },
  });

  if (!program) return null;

  return {
    id: program.id,
    slug: program.slug,
    name_zh: program.name_zh,
    name_en: program.name_en,
    code: program.code,
    degree_level: program.degree_level,
    field_category: program.field_category,
    faculty_zh: program.faculty_zh,
    duration_years: Number(program.duration_years),
    tuition_local_myr: program.tuition_local_myr ? Number(program.tuition_local_myr) : null,
    tuition_international_myr: program.tuition_international_myr ? Number(program.tuition_international_myr) : null,
    tuition_international_cny_estimate: program.tuition_international_cny_estimate
      ? Number(program.tuition_international_cny_estimate)
      : null,
    tuition_note_zh: program.tuition_note_zh,
    scholarship_available: program.scholarship_available,
    scholarship_note_zh: program.scholarship_note_zh,
    intake_months: program.intake_months,
    max_intake: program.max_intake,
    application_deadline_note: program.application_deadline_note,
    language_of_instruction: program.language_of_instruction,
    requirements_zh: program.requirements_zh,
    min_gpa: program.min_gpa ? Number(program.min_gpa) : null,
    min_ielts: program.min_ielts ? Number(program.min_ielts) : null,
    min_toefl: program.min_toefl,
    accreditation_zh: program.accreditation_zh,
    career_prospects_zh: program.career_prospects_zh,
    curriculum_zh: program.curriculum_zh,
    application_materials_zh: program.application_materials_zh,
    additional_requirements_zh: program.additional_requirements_zh,
    university: program.university,
  };
}

export async function getFeaturedUniversities(): Promise<UniversityListItem[]> {
  const result = await getUniversities({ sort: 'ranking', limit: 6 });
  return result.data;
}

export async function getUniversityStats() {
  const [totalUniversities, totalPrograms, publicCount, privateCount] = await Promise.all([
    db.university.count({ where: { active: true } }),
    db.program.count({ where: { active: true } }),
    db.university.count({ where: { active: true, type: 'public' } }),
    db.university.count({ where: { active: true, type: 'private' } }),
  ]);

  return {
    totalUniversities,
    totalPrograms,
    publicCount,
    privateCount,
  };
}

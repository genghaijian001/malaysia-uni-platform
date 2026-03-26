import { db } from '@/lib/db';
import type { ProgramDetail } from '@/types/program';

export async function getProgramById(programId: string): Promise<ProgramDetail | null> {
  const program = await db.program.findUnique({
    where: { id: programId, active: true },
    include: {
      university: {
        select: {
          slug: true,
          name_zh: true,
        },
      },
      admission_requirements: {
        orderBy: { is_mandatory: 'desc' },
      },
    },
  });

  if (!program) return null;

  return {
    id: program.id,
    university_id: program.university_id,
    university_slug: program.university.slug,
    university_name_zh: program.university.name_zh,
    name_zh: program.name_zh,
    name_en: program.name_en,
    code: program.code,
    degree_level: program.degree_level,
    field_category: program.field_category,
    field_sub_category: program.field_sub_category,
    duration_years: Number(program.duration_years),
    tuition_local_myr: program.tuition_local_myr ? Number(program.tuition_local_myr) : null,
    tuition_international_myr: program.tuition_international_myr
      ? Number(program.tuition_international_myr)
      : null,
    tuition_international_cny_estimate: program.tuition_international_cny_estimate
      ? Number(program.tuition_international_cny_estimate)
      : null,
    tuition_note_zh: program.tuition_note_zh,
    language_of_instruction: program.language_of_instruction,
    intake_months: program.intake_months,
    requirements_zh: program.requirements_zh,
    min_gpa: program.min_gpa ? Number(program.min_gpa) : null,
    min_ielts: program.min_ielts ? Number(program.min_ielts) : null,
    min_toefl: program.min_toefl,
    scholarship_available: program.scholarship_available,
    scholarship_note_zh: program.scholarship_note_zh,
    accreditation_zh: program.accreditation_zh,
    career_prospects_zh: program.career_prospects_zh,
    admission_requirements: program.admission_requirements.map((r) => ({
      id: r.id,
      requirement_type: r.requirement_type,
      min_score: r.min_score ? Number(r.min_score) : null,
      description_zh: r.description_zh,
      is_mandatory: r.is_mandatory,
    })),
  };
}

import { DegreeLevel } from './university';

export interface ProgramDetail {
  id: string;
  university_id: string;
  university_slug: string;
  university_name_zh: string;
  name_zh: string;
  name_en: string;
  code: string | null;
  degree_level: DegreeLevel;
  field_category: string;
  field_sub_category: string | null;
  duration_years: number;
  tuition_local_myr: number | null;
  tuition_international_myr: number | null;
  tuition_international_cny_estimate: number | null;
  tuition_note_zh: string | null;
  language_of_instruction: string;
  intake_months: number[];
  requirements_zh: string | null;
  min_gpa: number | null;
  min_ielts: number | null;
  min_toefl: number | null;
  scholarship_available: boolean;
  scholarship_note_zh: string | null;
  accreditation_zh: string | null;
  career_prospects_zh: string | null;
  admission_requirements: AdmissionReq[];
}

export interface AdmissionReq {
  id: string;
  requirement_type: string;
  min_score: number | null;
  description_zh: string;
  is_mandatory: boolean;
}

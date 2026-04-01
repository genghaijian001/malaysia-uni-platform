export type UniversityType = 'public' | 'private';
export type DegreeLevel = 'bachelor' | 'master' | 'phd';

export interface UniversityListItem {
  id: string;
  slug: string;
  name_zh: string;
  name_en: string;
  type: UniversityType;
  state: string;
  city: string;
  ranking_qs: number | null;
  ranking_malaysia: number | null;
  ranking_year: number | null;
  established_year: number | null;
  logo_url: string | null;
  featured: boolean;
  tuition_from_myr: number | null;
  tuition_from_cny: number | null;
  has_scholarship: boolean;
  degree_levels: DegreeLevel[];
  programs_count: number;
  website: string;
}

export interface UniversityDetail extends UniversityListItem {
  description_zh: string;
  description_en: string | null;
  highlights_zh: string[];
  coordinates_lat: number;
  coordinates_lng: number;
  cover_image_url: string | null;
  total_students: number | null;
  international_students: number | null;
  academic_staff: number | null;
  ranking_times: number | null;
  programs: ProgramSummary[];
  contacts: ContactInfo[];
  living_cost: LivingCostInfo | null;
  news: NewsItem[];
}

export interface ProgramSummary {
  id: string;
  slug: string;
  name_zh: string;
  name_en: string;
  degree_level: DegreeLevel;
  field_category: string;
  duration_years: number;
  tuition_international_myr: number | null;
  tuition_international_cny_estimate: number | null;
  scholarship_available: boolean;
  intake_months: number[];
  language_of_instruction: string;
  faculty_zh: string | null;
}

export interface ProgramDetail extends ProgramSummary {
  code: string | null;
  tuition_local_myr: number | null;
  tuition_note_zh: string | null;
  requirements_zh: string | null;
  min_gpa: number | null;
  min_ielts: number | null;
  min_toefl: number | null;
  scholarship_note_zh: string | null;
  accreditation_zh: string | null;
  career_prospects_zh: string | null;
  curriculum_zh: string | null;
  application_materials_zh: string | null;
  additional_requirements_zh: string | null;
  application_deadline_note: string | null;
  max_intake: number | null;
  university: {
    slug: string;
    name_zh: string;
    name_en: string;
    type: UniversityType;
    logo_url: string | null;
  };
}

export interface ContactInfo {
  id: string;
  type: 'general' | 'international' | 'admissions';
  email: string | null;
  phone: string | null;
  address_zh: string | null;
  wechat: string | null;
  whatsapp: string | null;
  office_hours: string | null;
}

export interface LivingCostInfo {
  accommodation_on_campus_myr: number | null;
  accommodation_off_campus_myr: number | null;
  monthly_living_estimate_myr: number | null;
  monthly_living_estimate_cny: number | null;
  food_estimate_myr: number | null;
  transport_estimate_myr: number | null;
  note_zh: string | null;
}

export interface NewsItem {
  id: string;
  title_zh: string;
  content_zh: string;
  category: string;
  published_at: string;
  source_url: string | null;
}

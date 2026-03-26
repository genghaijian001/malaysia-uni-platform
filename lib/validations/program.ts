import { z } from 'zod';

export const createProgramSchema = z.object({
  university_id: z.string().cuid(),
  name_zh: z.string().min(1),
  name_en: z.string().min(1),
  degree_level: z.enum(['bachelor', 'master', 'phd']),
  field_category: z.string().min(1),
  duration_years: z.number().min(0.5).max(10),
  tuition_international_myr: z.number().positive().optional(),
  language_of_instruction: z.string().default('英语'),
  intake_months: z.array(z.number().int().min(1).max(12)),
  min_ielts: z.number().min(4).max(9).optional(),
  min_toefl: z.number().int().min(30).max(120).optional(),
  scholarship_available: z.boolean().default(false),
  active: z.boolean().default(true),
});

export const updateProgramSchema = createProgramSchema.partial();

export type CreateProgramInput = z.infer<typeof createProgramSchema>;
export type UpdateProgramInput = z.infer<typeof updateProgramSchema>;

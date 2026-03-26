import { z } from 'zod';

export const createUniversitySchema = z.object({
  slug: z.string().min(1).regex(/^[a-z0-9-]+$/, '只能包含小写字母、数字和连字符'),
  name_zh: z.string().min(1, '中文名称必填'),
  name_en: z.string().min(1, '英文名称必填'),
  type: z.enum(['public', 'private']),
  established_year: z.number().int().min(1800).max(2026).optional(),
  state: z.string().min(1, '州属必填'),
  city: z.string().min(1, '城市必填'),
  coordinates_lat: z.number().min(-90).max(90),
  coordinates_lng: z.number().min(-180).max(180),
  website: z.string().url('请输入有效的网址'),
  description_zh: z.string().min(50, '描述至少50字'),
  highlights_zh: z.array(z.string()).max(6),
  ranking_qs: z.number().int().positive().optional(),
  ranking_times: z.number().int().positive().optional(),
  ranking_malaysia: z.number().int().positive().optional(),
  ranking_year: z.number().int().min(2020).max(2030).optional(),
  total_students: z.number().int().positive().optional(),
  international_students: z.number().int().positive().optional(),
  featured: z.boolean().default(false),
  active: z.boolean().default(true),
});

export const updateUniversitySchema = createUniversitySchema.partial();

export type CreateUniversityInput = z.infer<typeof createUniversitySchema>;
export type UpdateUniversityInput = z.infer<typeof updateUniversitySchema>;

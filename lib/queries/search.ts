import { db } from '@/lib/db';

export async function getSearchSuggestions(q: string) {
  if (!q || q.length < 2) return { universities: [], programs: [] };

  const [universities, programs] = await Promise.all([
    db.university.findMany({
      where: {
        active: true,
        OR: [
          { name_zh: { contains: q, mode: 'insensitive' } },
          { name_en: { contains: q, mode: 'insensitive' } },
        ],
      },
      select: { slug: true, name_zh: true, name_en: true, type: true },
      take: 5,
    }),
    db.program.findMany({
      where: {
        active: true,
        OR: [
          { name_zh: { contains: q, mode: 'insensitive' } },
          { name_en: { contains: q, mode: 'insensitive' } },
        ],
      },
      select: {
        id: true,
        name_zh: true,
        degree_level: true,
        university: { select: { slug: true, name_zh: true } },
      },
      take: 5,
    }),
  ]);

  return {
    universities,
    programs,
  };
}

export async function getFilterOptions() {
  const [states, fields] = await Promise.all([
    db.university.groupBy({
      by: ['state'],
      where: { active: true },
      _count: true,
      orderBy: { _count: { state: 'desc' } },
    }),
    db.program.groupBy({
      by: ['field_category'],
      where: { active: true },
      _count: true,
      orderBy: { _count: { field_category: 'desc' } },
    }),
  ]);

  return { states, fields };
}

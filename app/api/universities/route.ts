import { NextRequest, NextResponse } from 'next/server';
import { getUniversities } from '@/lib/queries/university';
import type { SearchFilters } from '@/types/search';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const rawPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    const rawLimit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 12;

    const filters: SearchFilters = {
      q: searchParams.get('q') || undefined,
      type: (searchParams.get('type') as SearchFilters['type']) || undefined,
      state: searchParams.get('state') || undefined,
      degree: (searchParams.get('degree') as SearchFilters['degree']) || undefined,
      field: searchParams.get('field') || undefined,
      tuition_max: searchParams.get('tuition_max') ? Number(searchParams.get('tuition_max')) : undefined,
      scholarship: searchParams.get('scholarship') === 'true' ? true : undefined,
      sort: (searchParams.get('sort') as SearchFilters['sort']) || 'ranking',
      page: rawPage > 0 ? rawPage : 1,
      limit: rawLimit > 0 ? rawLimit : 12,
    };

    const result = await getUniversities(filters);

    return NextResponse.json({
      success: true,
      data: result.data,
      pagination: {
        total: result.total,
        page: result.page,
        limit: result.limit,
        totalPages: result.totalPages,
      },
    });
  } catch (error) {
    console.error('GET /api/universities error:', error);
    return NextResponse.json({ success: false, error: '获取大学列表失败' }, { status: 500 });
  }
}

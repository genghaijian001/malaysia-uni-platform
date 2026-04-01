import { NextRequest, NextResponse } from 'next/server';
import { getSearchSuggestions } from '@/lib/queries/search';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q') || '';

    const suggestions = await getSearchSuggestions(q);
    return NextResponse.json({ success: true, data: suggestions });
  } catch (error) {
    console.error('GET /api/search/suggestions error:', error);
    return NextResponse.json({ success: false, error: '搜索建议获取失败' }, { status: 500 });
  }
}

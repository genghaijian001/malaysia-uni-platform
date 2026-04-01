import { NextResponse } from 'next/server';
import { getFilterOptions } from '@/lib/queries/search';

// Fallback filter options (static)
const FALLBACK_STATES = ['吉隆坡', '雪兰莪', '槟城', '柔佛', '沙巴', '砂拉越', '马六甲', '霹雳'];
const FALLBACK_FIELDS = ['工程学', '商科', '计算机科学', '医学', '教育学', '艺术设计'];

export async function GET() {
  try {
    const options = await getFilterOptions();
    return NextResponse.json({ success: true, data: options });
  } catch (error) {
    console.warn('GET /api/filters: DB unavailable, returning fallback data:', error);
    return NextResponse.json({
      success: true,
      data: {
        states: FALLBACK_STATES.map((state) => ({ state, _count: 1 })),
        fields: FALLBACK_FIELDS.map((field_category) => ({ field_category, _count: 1 })),
      },
      fallback: true,
    });
  }
}

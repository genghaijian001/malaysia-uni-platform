import { NextRequest, NextResponse } from 'next/server';
import { getUniversityBySlug } from '@/lib/queries/university';

export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const university = await getUniversityBySlug(params.slug);

    if (!university) {
      return NextResponse.json({ success: false, error: '大学不存在' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: university });
  } catch (error) {
    console.error(`GET /api/universities/${params.slug} error:`, error);
    return NextResponse.json({ success: false, error: '获取大学详情失败' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { getUniversityBySlug } from '@/lib/queries/university';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  try {
    const university = await getUniversityBySlug(slug);

    if (!university) {
      return NextResponse.json({ success: false, error: '大学不存在' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: university });
  } catch (error) {
    console.error(`GET /api/universities/${slug} error:`, error);
    return NextResponse.json({ success: false, error: '获取大学详情失败' }, { status: 500 });
  }
}

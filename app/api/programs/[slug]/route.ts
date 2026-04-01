import { NextRequest, NextResponse } from 'next/server';
import { getProgramBySlug } from '@/lib/queries/university';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const program = await getProgramBySlug(slug);

    if (!program) {
      return NextResponse.json(
        { success: false, error: '专业不存在' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: program });
  } catch (error) {
    console.error('GET /api/programs/[slug] error:', error);
    return NextResponse.json(
      { success: false, error: '获取专业详情失败' },
      { status: 500 }
    );
  }
}

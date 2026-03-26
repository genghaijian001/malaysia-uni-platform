import { NextResponse } from 'next/server';
import { getUniversityStats } from '@/lib/queries/university';

export async function GET() {
  try {
    const stats = await getUniversityStats();
    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    return NextResponse.json({ success: false, error: '获取统计数据失败' }, { status: 500 });
  }
}

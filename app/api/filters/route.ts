import { NextResponse } from 'next/server';
import { getFilterOptions } from '@/lib/queries/search';

export async function GET() {
  try {
    const options = await getFilterOptions();
    return NextResponse.json({ success: true, data: options });
  } catch (error) {
    return NextResponse.json({ success: false, error: '获取筛选选项失败' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { getUniversityStats } from '@/lib/queries/university';

const FALLBACK_STATS = {
  totalUniversities: 8,
  totalPrograms: 50,
  publicCount: 6,
  privateCount: 2,
};

export async function GET() {
  try {
    const stats = await getUniversityStats();
    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    console.warn('GET /api/stats: DB unavailable, returning fallback data:', error);
    return NextResponse.json({ success: true, data: FALLBACK_STATS, fallback: true });
  }
}

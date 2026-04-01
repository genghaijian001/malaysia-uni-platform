import { Suspense } from "react";
import UniversityCard from "@/components/university/UniversityCard";
import UniversityFilterBar from "@/components/university/UniversityFilterBar";
import { Skeleton } from "@/components/ui/skeleton";
import type { UniversityListItem } from "@/types/university";

interface PageProps {
  searchParams: Promise<{
    type?: string;
    state?: string;
    sort?: string;
  }>;
}

async function UniversityGrid({
  type,
  state,
  sort,
}: {
  type?: string;
  state?: string;
  sort?: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  const params = new URLSearchParams();
  if (type && type !== "all") params.set("type", type);
  if (state && state !== "全部州属") params.set("state", state);
  if (sort) params.set("sort", sort);

  const queryString = params.toString();
  const url = `${baseUrl}/api/universities${queryString ? `?${queryString}` : ""}`;

  let universities: UniversityListItem[] = [];

  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error("获取数据失败");
    const data = await res.json();
    universities = data.data ?? [];
  } catch {
    // Primary API failed — try mock fallback
    try {
      const mockRes = await fetch(`${baseUrl}/api/mock/universities`, { cache: "no-store" });
      if (mockRes.ok) {
        const mockData = await mockRes.json();
        universities = mockData.data ?? [];
      }
    } catch {
      return (
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg mb-2">数据加载失败</p>
          <p className="text-sm">请检查网络连接后刷新页面</p>
        </div>
      );
    }
  }

  if (universities.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-3xl mb-4">🔍</p>
        <p className="text-gray-600 text-lg font-medium">暂无符合条件的大学</p>
        <p className="text-gray-400 text-sm mt-2">请尝试调整筛选条件</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {universities.map((uni) => (
        <UniversityCard key={uni.id} university={uni} />
      ))}
    </div>
  );
}

function UniversityGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-gray-100 p-5 space-y-3"
        >
          <div className="flex gap-4">
            <Skeleton className="size-14 rounded-lg" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/2" />
          <div className="flex gap-2">
            <Skeleton className="h-5 w-14 rounded-full" />
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-12 rounded-full" />
          </div>
          <Skeleton className="h-8 w-24 rounded" />
        </div>
      ))}
    </div>
  );
}

export default async function UniversitiesPage({ searchParams }: PageProps) {
  const { type, state, sort } = await searchParams;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">马来西亚大学列表</h1>
        <p className="text-gray-600 mt-2">
          全面覆盖马来西亚顶尖公立与私立大学，快速对比，轻松选校
        </p>
      </div>

      {/* Filter Bar */}
      <div className="mb-8">
        <Suspense fallback={<Skeleton className="h-16 w-full rounded-xl" />}>
          <UniversityFilterBar />
        </Suspense>
      </div>

      {/* University Grid */}
      <Suspense fallback={<UniversityGridSkeleton />}>
        <UniversityGrid type={type} state={state} sort={sort} />
      </Suspense>
    </div>
  );
}

import Link from "next/link";
import { Suspense } from "react";
import { BookOpenIcon, DollarSignIcon, MapIcon, GlobeIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import UniversityCard from "@/components/university/UniversityCard";
import type { UniversityListItem } from "@/types/university";

/** Format date string to Chinese locale: YYYY年M月D日 */
function formatDateZh(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

// Static news data
const staticNews = [
  {
    id: "1",
    category: "奖学金",
    title: "马来西亚政府奖学金2026年度开放申请，中国学生可报名",
    date: "2026-03-15",
  },
  {
    id: "2",
    category: "招生动态",
    title: "马来亚大学2026/2027学年国际生招生简章正式发布",
    date: "2026-03-10",
  },
  {
    id: "3",
    category: "留学资讯",
    title: "2026年马来西亚留学费用全面解析：学费+生活费最新数据",
    date: "2026-03-05",
  },
];

async function StatsBar() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  let stats = { totalUniversities: 8, totalPrograms: 100, publicCount: 6, privateCount: 2 };

  try {
    const res = await fetch(`${baseUrl}/api/stats`, { next: { revalidate: 3600 } });
    if (res.ok) {
      const json = await res.json();
      if (json.data) stats = json.data;
    }
  } catch {
    // Use defaults
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {[
        { value: `${stats.totalUniversities}所`, label: "合作大学" },
        { value: `${stats.totalPrograms}+`, label: "开设专业" },
        { value: "5000+", label: "留学生" },
        { value: "免费", label: "信息查询" },
      ].map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1">
          <span className="text-3xl font-bold text-blue-600">
            {stat.value}
          </span>
          <span className="text-sm text-gray-500">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

async function FeaturedUniversities() {
  let universities: UniversityListItem[] = [];
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/universities?limit=6`, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Fetch failed");
    const data = await res.json();
    universities = data.data ?? [];
  } catch {
    // Fallback to mock API
    try {
      const mockRes = await fetch(`${baseUrl}/api/mock/universities`, { cache: "no-store" });
      if (mockRes.ok) {
        const mockData = await mockRes.json();
        universities = mockData.data ?? [];
        if (universities.length > 0) {
          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.map((uni) => (
                <UniversityCard key={uni.id} university={uni} />
              ))}
            </div>
          );
        }
      }
    } catch {
      // Mock also failed
    }
    // Show skeleton grid on error
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 space-y-3">
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
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (universities.length === 0) {
    return (
      <p className="text-center text-gray-500 py-12">暂时无法加载院校数据，请稍后再试。</p>
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

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero Section ── */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            找到最适合你的马来西亚大学
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            专为中国学生打造，覆盖马来西亚顶尖公立与私立大学完整信息
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/universities"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
            >
              浏览所有大学
            </Link>
            <Link
              href="/universities?tab=fees"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/70 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              了解留学费用
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            {[
              "8所精选大学",
              "100+开设专业",
              "实时费用数据",
              "免费咨询",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5">
                <span className="text-green-400 font-bold">✓</span>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar (dynamic from /api/stats) ── */}
      <section className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense
            fallback={
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-1 items-center">
                    <Skeleton className="h-9 w-16" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                ))}
              </div>
            }
          >
            <StatsBar />
          </Suspense>
        </div>
      </section>

      {/* ── Value Proposition ── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              为什么选择我们？
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpenIcon className="size-8 text-blue-600" />,
                title: "真实数据",
                desc: "来自官方网站的最新招生信息",
                emoji: "🎓",
              },
              {
                icon: <DollarSignIcon className="size-8 text-green-600" />,
                title: "费用透明",
                desc: "学费生活费一目了然，含人民币换算",
                emoji: "💰",
              },
              {
                icon: <MapIcon className="size-8 text-indigo-600" />,
                title: "地图导览",
                desc: "马来西亚各州院校分布，轻松规划行程",
                emoji: "🗺️",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Universities ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                精选院校
              </h2>
              <p className="text-gray-600 mt-2">
                马来西亚顶尖大学，为你优选
              </p>
            </div>
            <Link
              href="/universities"
              className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors whitespace-nowrap"
            >
              查看全部大学 →
            </Link>
          </div>

          <Suspense
            fallback={
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
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
                  </div>
                ))}
              </div>
            }
          >
            <FeaturedUniversities />
          </Suspense>
        </div>
      </section>

      {/* ── News Section ── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            最新动态
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {staticNews.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
              >
                <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 font-medium w-fit">
                  {news.category}
                </span>
                <h3 className="text-base font-semibold text-gray-900 leading-snug">
                  {news.title}
                </h3>
                <p className="text-xs text-gray-400 mt-auto">{formatDateZh(news.date)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer is now in the site layout */}
    </div>
  );
}

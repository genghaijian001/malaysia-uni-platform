"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

// State names must match the DB values (Chinese names stored in seed data)
// Using short names that work with Prisma `contains` match on DB values like "雪兰莪州", "吉隆坡联邦直辖区"
const STATES = [
  { value: "", label: "全部州属" },
  { value: "吉隆坡", label: "吉隆坡" },
  { value: "雪兰莪", label: "雪兰莪" },
  { value: "槟城", label: "槟城" },
  { value: "柔佛", label: "柔佛" },
  { value: "沙巴", label: "沙巴" },
  { value: "砂拉越", label: "砂拉越" },
  { value: "霹雳", label: "霹雳" },
  { value: "马六甲", label: "马六甲" },
  { value: "森美兰", label: "森美兰" },
  { value: "彭亨", label: "彭亨" },
  { value: "吉打", label: "吉打" },
  { value: "玻璃市", label: "玻璃市" },
  { value: "丁加奴", label: "丁加奴" },
  { value: "吉兰丹", label: "吉兰丹" },
];

const SORT_OPTIONS = [
  { value: "ranking", label: "按排名" },
  { value: "name", label: "按名称" },
  { value: "tuition_asc", label: "学费由低到高" },
  { value: "tuition_desc", label: "学费由高到低" },
];

export default function UniversityFilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!value || value === "all") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  const currentType = searchParams.get("type") ?? "all";
  const currentState = searchParams.get("state") ?? "";
  const currentSort = searchParams.get("sort") ?? "ranking";

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <span className="text-sm font-medium text-gray-700 shrink-0">筛选：</span>

        {/* Type Filter */}
        <div className="flex gap-2">
          {[
            { value: "all", label: "全部" },
            { value: "public", label: "公立" },
            { value: "private", label: "私立" },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateParam("type", opt.value)}
              className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-colors ${
                currentType === opt.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* State Dropdown */}
        <select
          value={currentState}
          onChange={(e) => updateParam("state", e.target.value)}
          className="h-8 w-36 rounded-lg border border-gray-200 bg-white px-2.5 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        >
          {STATES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>

        {/* Sort Dropdown */}
        <select
          value={currentSort}
          onChange={(e) => updateParam("sort", e.target.value)}
          className="h-8 w-36 rounded-lg border border-gray-200 bg-white px-2.5 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

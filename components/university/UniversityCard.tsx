import Link from "next/link";
import { MapPinIcon, TrophyIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { UniversityListItem } from "@/types/university";

interface UniversityCardProps {
  university: UniversityListItem & { highlights_zh?: string[] };
}

export default function UniversityCard({ university }: UniversityCardProps) {
  const {
    slug,
    name_zh,
    name_en,
    type,
    state,
    city,
    ranking_qs,
    logo_url,
    highlights_zh,
    programs_count,
    tuition_from_myr,
  } = university;

  // Generate initials from Chinese name
  const initials = name_zh.slice(0, 2);

  return (
    <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col overflow-hidden">
      {/* Card Header */}
      <div className="p-5 flex items-start gap-4">
        {/* Logo or Initials */}
        <div className="shrink-0">
          {logo_url ? (
            <img
              src={logo_url}
              alt={`${name_zh}校徽`}
              className="size-14 rounded-lg object-contain border border-gray-100 bg-white p-1"
            />
          ) : (
            <div className="size-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
              {initials}
            </div>
          )}
        </div>

        {/* Name + Badge */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="font-semibold text-gray-900 text-base leading-tight truncate">
                {name_zh}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5 truncate">{name_en}</p>
            </div>
            <Badge
              className={
                type === "public"
                  ? "shrink-0 bg-blue-100 text-blue-700 border-0"
                  : "shrink-0 bg-purple-100 text-purple-700 border-0"
              }
            >
              {type === "public" ? "公立" : "私立"}
            </Badge>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="px-5 pb-4 flex flex-col gap-3 flex-1">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-gray-500">
          <MapPinIcon className="size-3.5 shrink-0 text-gray-400" />
          <span>
            {state} · {city}
          </span>
        </div>

        {/* Ranking */}
        {ranking_qs && (
          <div className="flex items-center gap-1.5 text-sm text-amber-600 font-medium">
            <TrophyIcon className="size-3.5 shrink-0" />
            <span>QS排名 #{ranking_qs}</span>
          </div>
        )}

        {/* Tuition */}
        {tuition_from_myr && (
          <div className="text-sm text-gray-600">
            <span className="text-gray-400 mr-1">学费从</span>
            <span className="font-semibold text-green-700">
              MYR {tuition_from_myr.toLocaleString()}
            </span>
            <span className="text-gray-400 ml-1">起/年</span>
          </div>
        )}

        {/* Programs count */}
        {programs_count > 0 && (
          <div className="text-xs text-gray-400">{programs_count} 个开设专业</div>
        )}

        {/* Highlight Tags */}
        {highlights_zh && highlights_zh.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {highlights_zh.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="inline-block text-xs px-2 py-0.5 rounded-full bg-gray-50 border border-gray-200 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="px-5 py-3 border-t border-gray-50 bg-gray-50/50">
        <Link
          href={`/universities/${slug}`}
          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 group-hover:gap-2"
        >
          查看详情
          <span className="transition-all">→</span>
        </Link>
      </div>
    </div>
  );
}

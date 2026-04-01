import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MapPinIcon, CalendarIcon, UsersIcon, GlobeIcon, PhoneIcon, MailIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { UniversityDetail } from "@/types/university";
import ProgramsByDegree from "@/components/university/ProgramsByDegree";
import AdmissionRequirements from "@/components/university/AdmissionRequirements";
import { getUniversityBySlug } from "@/lib/queries/university";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const DEGREE_LABEL: Record<string, string> = {
  bachelor: "本科",
  master: "硕士",
  phd: "博士",
};

/** Helper: format ISO date string to Chinese locale format */
function formatDateZh(isoString: string): string {
  const d = new Date(isoString);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

/** Dynamic metadata per university (SEO-002) */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const university = await getUniversityBySlug(slug);

  if (!university) {
    return { title: "大学不存在 — 马来西亚大学信息平台" };
  }

  return {
    title: `${university.name_zh}（${university.name_en}）— 马来西亚大学信息平台`,
    description: university.description_zh?.slice(0, 160) ?? `${university.name_zh}的详细信息，包括专业列表、入学要求、学费和联系方式。`,
  };
}

export default async function UniversityDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const university = await getUniversityBySlug(slug);

  if (!university) {
    notFound();
  }

  const {
    name_zh,
    name_en,
    type,
    state,
    city,
    ranking_qs,
    established_year,
    total_students,
    international_students,
    description_zh,
    highlights_zh,
    cover_image_url,
    logo_url,
    programs,
    contacts,
    website,
    has_scholarship,
  } = university;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Header / Cover ── */}
      <div
        className={`relative w-full h-48 sm:h-64 ${
          cover_image_url
            ? ""
            : "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"
        }`}
      >
        {cover_image_url && (
          <img
            src={cover_image_url}
            alt={`${name_zh}校园风景`}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ── University Identity ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 -mt-10 relative z-10 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            {/* Logo */}
            <div className="shrink-0">
              {logo_url ? (
                <img
                  src={logo_url}
                  alt={`${name_zh}校徽`}
                  className="size-20 rounded-xl object-contain border border-gray-100 bg-white p-1"
                />
              ) : (
                <div className="size-20 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl">
                  {name_zh.slice(0, 2)}
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {name_zh}
                </h1>
                <Badge
                  className={
                    type === "public"
                      ? "bg-blue-100 text-blue-700 border-0"
                      : "bg-purple-100 text-purple-700 border-0"
                  }
                >
                  {type === "public" ? "公立" : "私立"}
                </Badge>
                {has_scholarship && (
                  <Badge className="bg-amber-100 text-amber-700 border-0">
                    提供奖学金
                  </Badge>
                )}
              </div>
              <p className="text-gray-500 text-sm mb-3">{name_en}</p>

              {/* Quick Facts Row */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                {ranking_qs && (
                  <div className="flex items-center gap-1.5 font-medium text-amber-600">
                    🏆 QS排名 #{ranking_qs}
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <MapPinIcon className="size-4 text-gray-400" />
                  {state} · {city}
                </div>
                {established_year && (
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon className="size-4 text-gray-400" />
                    建校 {established_year} 年
                  </div>
                )}
                {total_students && (
                  <div className="flex items-center gap-1.5">
                    <UsersIcon className="size-4 text-gray-400" />
                    {total_students.toLocaleString()} 名学生
                  </div>
                )}
                {website && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-blue-600 hover:underline"
                  >
                    <GlobeIcon className="size-4" />
                    官方网站
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <Tabs defaultValue="overview" className="mb-12">
          <TabsList variant="line" className="mb-6 w-full justify-start overflow-x-auto">
            <TabsTrigger value="overview">概览</TabsTrigger>
            <TabsTrigger value="programs">专业列表</TabsTrigger>
            <TabsTrigger value="admission">入学要求</TabsTrigger>
            <TabsTrigger value="contact">联系方式</TabsTrigger>
          </TabsList>

          {/* 概览 Tab */}
          <TabsContent value="overview">
            <div className="space-y-6">
              {/* Description */}
              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  学校简介
                </h2>
                <p className="text-gray-700 leading-relaxed">{description_zh}</p>
              </div>

              {/* Highlights */}
              {highlights_zh && highlights_zh.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    院校亮点
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {highlights_zh.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-500 mt-0.5 shrink-0">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "QS世界排名", value: ranking_qs ? `#${ranking_qs}` : "暂无" },
                  { label: "建校年份", value: established_year ?? "暂无" },
                  { label: "学生总数", value: total_students?.toLocaleString() ?? "暂无" },
                  {
                    label: "国际学生",
                    value: international_students?.toLocaleString() ?? "暂无",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center"
                  >
                    <div className="text-xl font-bold text-blue-600">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* 专业列表 Tab — split into 本科/硕士/博士 */}
          <TabsContent value="programs">
            {programs && programs.length > 0 ? (
              <ProgramsByDegree programs={programs} universitySlug={slug} />
            ) : (
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center text-gray-400">
                暂无专业数据
              </div>
            )}
          </TabsContent>

          {/* 入学要求 Tab — split by degree level */}
          <TabsContent value="admission">
            <AdmissionRequirements programs={programs} universitySlug={slug} />
          </TabsContent>

          {/* 联系方式 Tab */}
          <TabsContent value="contact">
            <div className="space-y-4">
              {contacts && contacts.length > 0 ? (
                contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm"
                  >
                    <h3 className="font-semibold text-gray-900 mb-4">
                      {contact.type === "general"
                        ? "综合联系"
                        : contact.type === "international"
                        ? "国际学生办公室"
                        : "招生办公室"}
                    </h3>
                    <div className="space-y-3 text-sm">
                      {contact.email && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <MailIcon className="size-4 text-gray-400 shrink-0" />
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-blue-600 hover:underline"
                          >
                            {contact.email}
                          </a>
                        </div>
                      )}
                      {contact.phone && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <PhoneIcon className="size-4 text-gray-400 shrink-0" />
                          <span>{contact.phone}</span>
                        </div>
                      )}
                      {contact.address_zh && (
                        <div className="flex items-start gap-2 text-gray-700">
                          <MapPinIcon className="size-4 text-gray-400 shrink-0 mt-0.5" />
                          <span>{contact.address_zh}</span>
                        </div>
                      )}
                      {contact.wechat && (
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-green-500 font-bold text-xs shrink-0">
                            微信
                          </span>
                          <span>{contact.wechat}</span>
                        </div>
                      )}
                      {contact.office_hours && (
                        <div className="text-gray-500 text-xs mt-2">
                          办公时间：{contact.office_hours}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-xl border border-gray-100 p-8 text-center text-gray-400 shadow-sm">
                  暂无联系方式
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import type { ProgramSummary } from "@/types/university";

interface AdmissionRequirementsProps {
  programs: ProgramSummary[];
  universitySlug: string;
}

const SECTIONS = [
  {
    key: "bachelor" as const,
    title: "本科入学要求",
    icon: "🎓",
    requirements: [
      { label: "学历要求", value: "高中毕业或同等学历（高中三年成绩单）" },
      { label: "语言要求", value: "雅思（IELTS）5.0–6.5 分（视专业而定）或托福同等成绩" },
      { label: "学术要求", value: "高中GPA不低于70%–80%（视专业而定），部分专业要求数学/理科成绩" },
      { label: "申请材料", value: "护照复印件、高中毕业证、高中成绩单（中英文公证）、语言成绩、护照照片" },
      { label: "申请方式", value: "通过院校官网在线申请系统提交" },
    ],
  },
  {
    key: "master" as const,
    title: "硕士入学要求",
    icon: "📚",
    requirements: [
      { label: "学历要求", value: "本科学位（需与申请专业相关）" },
      { label: "语言要求", value: "雅思（IELTS）6.0–6.5 分或托福同等成绩" },
      { label: "学术要求", value: "本科CGPA不低于2.75–3.00（4.0制），部分专业接受工作经验替代" },
      { label: "申请材料", value: "护照复印件、本科毕业证及学位证、本科成绩单（中英文公证）、语言成绩、个人陈述、推荐信（1-2封）" },
      { label: "申请方式", value: "通过院校官网或研究生院在线申请系统提交" },
    ],
  },
  {
    key: "phd" as const,
    title: "博士入学要求",
    icon: "🔬",
    requirements: [
      { label: "学历要求", value: "硕士学位（需与申请研究方向相关）" },
      { label: "语言要求", value: "雅思（IELTS）6.0–6.5 分或托福同等成绩" },
      { label: "学术要求", value: "硕士CGPA不低于3.00（4.0制），具有研究经验优先" },
      { label: "申请材料", value: "护照复印件、硕士毕业证及学位证、硕士成绩单（中英文公证）、语言成绩、研究计划书、推荐信（2封）、已发表论文（如有）" },
      { label: "申请方式", value: "需先联系导师获得初步同意（Acceptance Letter），再通过研究生院系统提交正式申请" },
    ],
  },
];

export default function AdmissionRequirements({ programs, universitySlug }: AdmissionRequirementsProps) {
  // Count programs by degree level
  const counts = {
    bachelor: programs.filter((p) => p.degree_level === "bachelor").length,
    master: programs.filter((p) => p.degree_level === "master").length,
    phd: programs.filter((p) => p.degree_level === "phd").length,
  };

  // Only show sections that have programs (or show all if no programs)
  const visibleSections = programs.length > 0
    ? SECTIONS.filter((s) => counts[s.key] > 0)
    : SECTIONS;

  return (
    <div className="space-y-6">
      {visibleSections.map((section) => (
        <div
          key={section.key}
          className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span>{section.icon}</span>
            {section.title}
            {counts[section.key] > 0 && (
              <span className="text-xs text-gray-400 font-normal">
                （{counts[section.key]} 个相关专业）
              </span>
            )}
          </h2>

          <div className="space-y-3 text-gray-700">
            {section.requirements.map((req) => (
              <div key={req.label} className="flex gap-3">
                <span className="text-blue-500 shrink-0 mt-0.5">•</span>
                <p>
                  <span className="font-medium">{req.label}：</span>
                  {req.value}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-4">
            * 以上为通用要求，具体要求因专业而异。请点击具体专业查看详细入学要求。
          </p>

          {counts[section.key] > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-2">查看具体专业要求：</p>
              <div className="flex flex-wrap gap-2">
                {programs
                  .filter((p) => p.degree_level === section.key)
                  .slice(0, 8)
                  .map((prog) => (
                    <Link
                      key={prog.id}
                      href={`/universities/${universitySlug}/programs/${prog.slug}`}
                      className="text-xs px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                    >
                      {prog.name_zh}
                    </Link>
                  ))}
                {programs.filter((p) => p.degree_level === section.key).length > 8 && (
                  <span className="text-xs px-3 py-1.5 text-gray-400">
                    +{programs.filter((p) => p.degree_level === section.key).length - 8} 更多
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeftIcon,
  ClockIcon,
  BookOpenIcon,
  GlobeIcon,
  DollarSignIcon,
  FileTextIcon,
  GraduationCapIcon,
  BriefcaseIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getProgramBySlug } from "@/lib/queries/university";
import type { ProgramDetail } from "@/types/university";

interface PageProps {
  params: Promise<{ slug: string; programSlug: string }>;
}

const DEGREE_LABEL: Record<string, string> = {
  bachelor: "本科",
  master: "硕士",
  phd: "博士",
};

const MONTH_NAMES: Record<number, string> = {
  1: "1月",
  2: "2月",
  3: "3月",
  4: "4月",
  5: "5月",
  6: "6月",
  7: "7月",
  8: "8月",
  9: "9月",
  10: "10月",
  11: "11月",
  12: "12月",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { programSlug } = await params;
  const program = await getProgramBySlug(programSlug);

  if (!program) {
    return { title: "专业不存在 — 马来西亚大学信息平台" };
  }

  return {
    title: `${program.name_zh}（${program.name_en}）— ${program.university.name_zh} — 马来西亚大学信息平台`,
    description: `${program.university.name_zh}${program.name_zh}专业详细信息，包括入学要求、学费、课程结构和申请材料。`,
  };
}

export default async function ProgramDetailPage({ params }: PageProps) {
  const { slug, programSlug } = await params;
  const program = await getProgramBySlug(programSlug);

  if (!program) {
    notFound();
  }

  const intakeText = program.intake_months.length > 0
    ? program.intake_months.map((m) => MONTH_NAMES[m] ?? `${m}月`).join("、")
    : "请咨询院校";

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/universities" className="hover:text-blue-600 transition-colors">
              大学列表
            </Link>
            <span>/</span>
            <Link href={`/universities/${slug}`} className="hover:text-blue-600 transition-colors">
              {program.university.name_zh}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{program.name_zh}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Link
          href={`/universities/${slug}?tab=programs`}
          className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeftIcon className="size-4" />
          返回专业列表
        </Link>

        {/* Program Header */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            {program.university.logo_url ? (
              <img
                src={program.university.logo_url}
                alt={`${program.university.name_zh}校徽`}
                className="size-16 rounded-xl object-contain border border-gray-100 bg-white p-1 shrink-0"
              />
            ) : (
              <div className="size-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                {program.university.name_zh.slice(0, 2)}
              </div>
            )}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {program.name_zh}
                </h1>
                <Badge className="bg-blue-100 text-blue-700 border-0">
                  {DEGREE_LABEL[program.degree_level] ?? program.degree_level}
                </Badge>
              </div>
              <p className="text-gray-500 text-sm mb-2">{program.name_en}</p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <GraduationCapIcon className="size-4 text-gray-400" />
                  {program.university.name_zh}
                </span>
                {program.faculty_zh && (
                  <span className="flex items-center gap-1">
                    <BookOpenIcon className="size-4 text-gray-400" />
                    {program.faculty_zh}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <ClockIcon className="size-4 text-gray-400" />
                  {program.duration_years}年学制
                </span>
                <span className="flex items-center gap-1">
                  <GlobeIcon className="size-4 text-gray-400" />
                  {program.language_of_instruction}授课
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Admission Requirements */}
            <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileTextIcon className="size-5 text-blue-600" />
                入学要求
              </h2>
              <div className="space-y-3">
                {program.min_ielts && (
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 shrink-0 mt-0.5">•</span>
                    <p className="text-gray-700">
                      <span className="font-medium">雅思（IELTS）：</span>
                      最低 {program.min_ielts} 分
                    </p>
                  </div>
                )}
                {program.min_toefl && (
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 shrink-0 mt-0.5">•</span>
                    <p className="text-gray-700">
                      <span className="font-medium">托福（TOEFL）：</span>
                      最低 {program.min_toefl} 分
                    </p>
                  </div>
                )}
                {program.min_gpa && (
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 shrink-0 mt-0.5">•</span>
                    <p className="text-gray-700">
                      <span className="font-medium">GPA / CGPA：</span>
                      最低 {program.min_gpa}
                    </p>
                  </div>
                )}
                {program.requirements_zh && (
                  <div className="flex items-start gap-3">
                    <span className="text-blue-500 shrink-0 mt-0.5">•</span>
                    <p className="text-gray-700 whitespace-pre-line">
                      {program.requirements_zh}
                    </p>
                  </div>
                )}
                {program.additional_requirements_zh && (
                  <div className="flex items-start gap-3">
                    <span className="text-amber-500 shrink-0 mt-0.5">★</span>
                    <p className="text-gray-700">
                      <span className="font-medium">附加要求：</span>
                      {program.additional_requirements_zh}
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Curriculum */}
            {program.curriculum_zh && (
              <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpenIcon className="size-5 text-blue-600" />
                  课程结构
                </h2>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {program.curriculum_zh}
                </div>
              </section>
            )}

            {/* Application Materials */}
            {program.application_materials_zh && (
              <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FileTextIcon className="size-5 text-green-600" />
                  申请材料
                </h2>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {program.application_materials_zh}
                </div>
              </section>
            )}

            {/* Career Prospects */}
            {program.career_prospects_zh && (
              <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <BriefcaseIcon className="size-5 text-purple-600" />
                  就业前景
                </h2>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {program.career_prospects_zh}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tuition Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSignIcon className="size-5 text-green-600" />
                学费信息
              </h3>
              <div className="space-y-3">
                {program.tuition_international_myr && (
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-0.5">国际学生学费（马币）</p>
                    <p className="text-xl font-bold text-green-700">
                      MYR {program.tuition_international_myr.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400">每学年</p>
                  </div>
                )}
                {program.tuition_international_cny_estimate && (
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-0.5">学费（人民币参考）</p>
                    <p className="text-xl font-bold text-blue-700">
                      ¥{program.tuition_international_cny_estimate.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400">每学年（参考汇率）</p>
                  </div>
                )}
                {program.tuition_local_myr && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-0.5">本地学生学费</p>
                    <p className="text-lg font-bold text-gray-700">
                      MYR {program.tuition_local_myr.toLocaleString()}
                    </p>
                  </div>
                )}
                {program.tuition_note_zh && (
                  <p className="text-xs text-gray-400">{program.tuition_note_zh}</p>
                )}
              </div>
            </div>

            {/* Key Info Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">关键信息</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">学制</dt>
                  <dd className="text-gray-900 font-medium">{program.duration_years} 年</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">授课语言</dt>
                  <dd className="text-gray-900 font-medium">{program.language_of_instruction}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">开学时间</dt>
                  <dd className="text-gray-900 font-medium">{intakeText}</dd>
                </div>
                {program.field_category && (
                  <div className="flex justify-between">
                    <dt className="text-gray-500">领域</dt>
                    <dd className="text-gray-900 font-medium">{program.field_category}</dd>
                  </div>
                )}
                {program.accreditation_zh && (
                  <div className="flex justify-between gap-2">
                    <dt className="text-gray-500 shrink-0">认证</dt>
                    <dd className="text-gray-900 font-medium text-right">{program.accreditation_zh}</dd>
                  </div>
                )}
                {program.application_deadline_note && (
                  <div className="flex justify-between gap-2">
                    <dt className="text-gray-500 shrink-0">申请截止</dt>
                    <dd className="text-gray-900 font-medium text-right">{program.application_deadline_note}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Scholarship Card */}
            {program.scholarship_available && program.scholarship_note_zh && (
              <div className="bg-amber-50 rounded-xl border border-amber-100 shadow-sm p-6">
                <h3 className="font-semibold text-amber-800 mb-2">🎓 奖学金信息</h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  {program.scholarship_note_zh}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

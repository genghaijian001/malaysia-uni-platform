import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于我们 | 马来西亚大学信息平台",
  description:
    "了解马来西亚大学信息平台的使命：帮助中国大陆学生找到最适合的马来西亚顶尖大学，提供全面、准确的招生信息。",
};

const whyMalaysiaItems = [
  {
    emoji: "💰",
    title: "费用低廉",
    desc: "学费与生活费相比欧美澳大幅降低，性价比极高，同等教育质量只需约1/3的费用。",
  },
  {
    emoji: "🌐",
    title: "英语授课",
    desc: "马来西亚高校普遍采用英语教学，毕业后可无缝进入全球英语工作环境。",
  },
  {
    emoji: "🎓",
    title: "世界认可学历",
    desc: "多所大学位列QS世界前500，学历获中国教育部认可，回国就业无障碍。",
  },
  {
    emoji: "🤝",
    title: "文化相近",
    desc: "约25%人口为华裔，中文通用，饮食文化相似，融入生活几乎没有适应期。",
  },
  {
    emoji: "🛡️",
    title: "安全稳定",
    desc: "社会治安良好，气候宜人，对国际学生友好，生活舒适度高。",
  },
  {
    emoji: "✈️",
    title: "距离近便",
    desc: "飞行时间约4-5小时，往返方便，节假日回国无忧。",
  },
];

const platformFeatures = [
  {
    emoji: "🏫",
    title: "全面的大学数据库",
    desc: "覆盖马来西亚顶尖公立与私立大学，包含完整的院校介绍、地理位置及办学优势。",
  },
  {
    emoji: "📋",
    title: "真实招生信息",
    desc: "直接来源于各大学官方网站，定期更新，确保数据的准确性与时效性。",
  },
  {
    emoji: "🔍",
    title: "专业筛选功能",
    desc: "按专业方向、学历层次、学费区间、地理位置等多维度精准筛选，快速锁定目标院校。",
  },
  {
    emoji: "📊",
    title: "入学要求对比",
    desc: "并排展示各校录取标准、语言要求、申请材料，让选校决策更有依据。",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">关于我们</h1>
        <p className="text-gray-600 mt-2">
          了解这个平台的使命与我们的故事
        </p>
      </div>

      {/* Mission Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white rounded-2xl p-8 sm:p-12 mb-10">
        <div className="max-w-3xl">
          <div className="text-4xl mb-4">🎓</div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">我们的使命</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            帮助中国大陆学生了解马来西亚顶尖大学，提供最全面、最准确的招生信息——让每一位有留学意向的同学都能做出最适合自己的选择。
          </p>
        </div>
      </section>

      {/* Why Malaysia Section */}
      <section className="mb-10">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">为什么选择马来西亚？</h2>
          <p className="text-gray-500 mb-8">
            马来西亚是中国学生留学的热门目的地，具备多项独特优势。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMalaysiaItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
              >
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="mb-10">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">平台功能</h2>
          <p className="text-gray-500 mb-8">
            我们提供一站式马来西亚留学信息服务，助你轻松选校。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {platformFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl shrink-0">{feature.emoji}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-10">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">我们的团队</h2>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="text-6xl shrink-0">👥</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                专注马来西亚留学信息的专业团队
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                我们是一支由留学顾问、教育研究员和技术人员组成的专业团队，长期深耕马来西亚留学领域。团队成员拥有亲身赴马求学经历，深刻理解中国学生在信息获取方面的痛点与需求。
              </p>
              <p className="text-gray-600 leading-relaxed">
                我们与马来西亚多所知名高校保持紧密联系，定期核实并更新招生数据，确保平台上的每一条信息都真实可靠。我们的目标是成为中国学生赴马留学最值得信赖的信息平台。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="bg-blue-50 rounded-xl border border-blue-100 p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">准备好开始了吗？</h2>
          <p className="text-gray-600 mb-6">
            浏览我们的大学数据库，找到最适合你的马来西亚院校。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/universities"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              浏览所有大学
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-200 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition-colors"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

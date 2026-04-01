import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "联系我们 | 马来西亚大学信息平台",
  description:
    "联系马来西亚大学信息平台团队，通过微信、WhatsApp或邮件获取留学咨询服务。",
};

const contactInfo = [
  {
    icon: Phone,
    label: "电话 / WhatsApp",
    value: "+60 12-345 6789",
  },
  {
    icon: Mail,
    label: "邮箱",
    value: "info@myuniguide.com",
  },
  {
    icon: Clock,
    label: "服务时间",
    value: "周一至周六 9:00–18:00（马来西亚时间，UTC+8）",
  },
  {
    icon: MapPin,
    label: "地址",
    value: "马来西亚吉隆坡",
  },
  {
    icon: MessageCircle,
    label: "微信",
    value: "myuniguide_kl",
  },
];

const qrCards = [
  {
    src: "/images/wechat-qr.png",
    alt: "微信客服二维码",
    label: "微信客服",
    sub: "工作时间内30分钟内回复",
  },
  {
    src: "/images/whatsapp-qr.png",
    alt: "WhatsApp二维码",
    label: "WhatsApp联系",
    sub: "+60 12-345 6789",
  },
  {
    src: "/images/wechat-official-qr.png",
    alt: "微信公众号二维码",
    label: "关注公众号",
    sub: "获取最新招生资讯",
  },
];

const faqs = [
  {
    q: "咨询服务是否收费？",
    a: "完全免费，我们是纯信息平台。",
  },
  {
    q: "可以帮助申请吗？",
    a: "我们提供信息和建议，具体申请需通过各大学官方渠道进行。",
  },
  {
    q: "回复时间多久？",
    a: "微信 / WhatsApp 通常30分钟内回复，邮件24小时内回复。",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">联系我们</h1>
        <p className="text-gray-500 mt-2 text-lg">
          有任何疑问？我们随时为您解答
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column (main content) — takes 2/3 width on desktop */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* QR Codes Section */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">扫码联系我们</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {qrCards.map((card) => (
                <div
                  key={card.label}
                  className="flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-100 shadow-sm"
                >
                  {/* QR Image with gray fallback background */}
                  <div className="bg-gray-100 rounded-lg flex items-center justify-center w-48 h-48 overflow-hidden">
                    <Image
                      src={card.src}
                      width={192}
                      height={192}
                      alt={card.alt}
                      unoptimized
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-sm">{card.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">办公地址</h2>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=101.6538%2C3.1209%2C101.7138%2C3.1609&layer=mapnik"
              style={{ width: "100%", height: "300px", border: 0, borderRadius: "12px" }}
              loading="lazy"
              title="吉隆坡地图"
            />
            <div className="flex items-start gap-2 mt-4 text-gray-600">
              <MapPin className="size-4 shrink-0 mt-0.5 text-blue-600" />
              <p className="text-sm">马来西亚吉隆坡，近马来亚大学</p>
            </div>
          </div>
        </div>

        {/* Right column (sidebar) — takes 1/3 width on desktop */}
        <div className="flex flex-col gap-6">
          {/* Contact Info Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-5">联系方式</h2>
            <ul className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <div className="mt-0.5 size-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon className="size-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">{label}</p>
                    <p className="text-sm text-gray-800 mt-0.5">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-5">常见问题</h2>
            <div className="flex flex-col gap-5">
              {faqs.map(({ q, a }) => (
                <div key={q}>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Q: {q}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">A: {a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

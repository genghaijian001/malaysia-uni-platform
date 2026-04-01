import Link from "next/link";
import Navbar from "@/components/common/Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">{children}</main>
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white font-semibold text-lg">
              🎓 马来西亚大学信息平台
            </div>
            <nav className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                首页
              </Link>
              <Link
                href="/universities"
                className="hover:text-white transition-colors"
              >
                大学列表
              </Link>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                关于我们
              </Link>
            </nav>
            <p className="text-sm">
              © 2026 马来西亚大学信息平台 · 保留所有权利
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

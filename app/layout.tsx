import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "马来西亚大学信息平台 | 专为中国学生",
  description:
    "全面覆盖马来西亚顶尖公立私立大学信息，学费、排名、专业、入学要求一网打尽",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

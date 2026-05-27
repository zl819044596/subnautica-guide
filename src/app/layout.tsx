import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "深海迷航2指南 - 交互式地图、生物数据库、AI助手 | Subnautica Guide",
  description: "最全面的深海迷航2攻略网站：交互式地图、50+生物数据库、制作计算器、AI问答助手。查找资源位置、生物群落、生存技巧，助你探索4546B星球。",
  keywords: ["深海迷航2 攻略", "Subnautica 2 地图", "深海迷航 生物", "Subnautica 制作", "深海迷航 新手教程"],
  openGraph: {
    title: "深海迷航2指南 - 交互式地图 & AI助手",
    description: "你的深海迷航2生存伴侣。交互式地图、生物位置、制作配方、AI智能帮助。",
    type: "website",
    url: "https://subnautica.getfitai.io",
  },
  alternates: {
    canonical: "https://subnautica.getfitai.io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Nav />
        {children}
      </body>
    </html>
  );
}

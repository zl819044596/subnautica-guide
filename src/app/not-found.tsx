import Link from "next/link";
import { Home, Map, Fish, Wrench, Bot, BookOpen } from "lucide-react";

const quickLinks = [
  { icon: Home, label: "首页", href: "/" },
  { icon: Map, label: "地图", href: "/map" },
  { icon: Fish, label: "生物", href: "/creatures" },
  { icon: Wrench, label: "制作", href: "/crafting" },
  { icon: Bot, label: "AI帮助", href: "/ask-ai" },
  { icon: BookOpen, label: "指南", href: "/" },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* 404 */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-[#00d4ff]/20 mb-2">404</h1>
          <p className="text-xl text-[#e6f7ff]/60">此页面已沉入深海...</p>
        </div>

        {/* 提示 */}
        <p className="text-[#e6f7ff]/40 mb-8">
          您访问的页面不存在或已被移除。
          <br />
          请尝试以下链接：
        </p>

        {/* 快速链接 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 bg-[#0f2642] border border-[rgba(0,212,255,0.15)] rounded-xl px-4 py-3 text-sm text-[#e6f7ff]/70 hover:border-[rgba(0,212,255,0.4)] hover:text-[#00d4ff] transition-colors"
            >
              <link.icon className="w-4 h-4" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* 返回首页 */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors"
        >
          <Home className="w-4 h-4" />
          返回首页
        </Link>
      </div>
    </main>
  );
}

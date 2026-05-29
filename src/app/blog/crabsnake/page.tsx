import type { Metadata } from "next";
import Link from "next/link";
import { Fish, MapPin, AlertTriangle, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Crabsnake 完全指南：栖息地、行为与生存技巧 | Subnautica 2 指南",
  description: "了解 Subnautica 2 中的 Crabsnake：栖息地、行为模式、掉落物和生存技巧。",
  keywords: ["subnautica 2", "crabsnake", "guide", "creature"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a1628] px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium mb-4">
          生物指南
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Crabsnake 完全指南</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#0f2642]/50 rounded-xl p-6 border border-[rgba(0,212,255,0.1)]">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#00d4ff]" />
              <h2 className="text-lg font-semibold text-white">栖息地</h2>
            </div>
            <p className="text-[#e6f7ff]/70">
              Crabsnake 主要分布在多个生物群落中。
              建议携带扫描仪记录其活动范围。
            </p>
          </div>
          
          <div className="bg-[#0f2642]/50 rounded-xl p-6 border border-[rgba(0,212,255,0.1)]">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              <h2 className="text-lg font-semibold text-white">危险等级</h2>
            </div>
            <p className="text-[#e6f7ff]/70">
              根据生物行为模式评估危险程度。
              建议保持安全距离，携带防御装备。
            </p>
          </div>
        </div>

        <div className="bg-[#0f2642]/50 rounded-xl p-6 border border-[rgba(0,212,255,0.1)] mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-red-400" />
            <h2 className="text-lg font-semibold text-white">生存技巧</h2>
          </div>
          <ul className="space-y-2 text-[#e6f7ff]/70">
            <li>▸ 保持警惕，注意周围环境变化</li>
            <li>▸ 携带足够氧气和医疗包</li>
            <li>▸ 使用扫描仪收集数据获取蓝图</li>
            <li>▸ 建造安全屋作为紧急避难所</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/creatures" className="text-[#00d4ff] hover:underline">
            ← 返回生物数据库
          </Link>
        </div>
      </div>
    </main>
  );
}

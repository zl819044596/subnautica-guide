import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Gem, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Crash Zone 探索指南：资源、危险与生存策略 | Subnautica 2 指南",
  description: "探索 Subnautica 2 的 Crash Zone：资源分布、危险生物和生存策略。",
  keywords: ["subnautica 2", "crash zone", "biome", "guide"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a1628] px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4">
          生物群落
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Crash Zone 探索指南</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#0f2642]/50 rounded-xl p-6 border border-[rgba(0,212,255,0.1)]">
            <div className="flex items-center gap-2 mb-4">
              <Gem className="w-5 h-5 text-yellow-400" />
              <h2 className="text-lg font-semibold text-white">主要资源</h2>
            </div>
            <p className="text-[#e6f7ff]/70">
              该区域含有丰富的矿物资源和生物材料。
              建议使用扫描室定位具体位置。
            </p>
          </div>
          
          <div className="bg-[#0f2642]/50 rounded-xl p-6 border border-[rgba(0,212,255,0.1)]">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              <h2 className="text-lg font-semibold text-white">危险提示</h2>
            </div>
            <p className="text-[#e6f7ff]/70">
              注意深度压力和危险生物。
              携带充足氧气和医疗用品。
            </p>
          </div>
        </div>

        <div className="bg-[#0f2642]/50 rounded-xl p-6 border border-[rgba(0,212,255,0.1)]">
          <h2 className="text-lg font-semibold text-white mb-4">探索建议</h2>
          <ul className="space-y-2 text-[#e6f7ff]/70">
            <li>▸ 携带Seamoth或Seaglide提高移动效率</li>
            <li>▸ 建立临时前进基地补充氧气</li>
            <li>▸ 使用信标标记重要位置</li>
            <li>▸ 注意氧气余量，预留返程氧气</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

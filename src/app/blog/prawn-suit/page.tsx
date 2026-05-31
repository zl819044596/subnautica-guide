import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, Package, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Prawn Suit 制作攻略：材料清单与升级路线 | Subnautica 2 指南",
  description: "Subnautica 2 Prawn Suit 制作攻略：完整材料清单和升级路线。",
  keywords: ["subnautica 2", "prawn suit", "crafting", "guide"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a1628] px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
          制作攻略
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Prawn Suit 制作攻略</h1>
        
        <div className="bg-[#0f2642]/50 rounded-xl p-6 border border-[rgba(0,212,255,0.1)] mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Package className="w-5 h-5 text-[#00d4ff]" />
            <h2 className="text-lg font-semibold text-white">所需材料</h2>
          </div>
          <p className="text-[#e6f7ff]/70 mb-4">
            制作 Prawn Suit 需要收集以下材料。
            建议提前准备储物柜分类存放。
          </p>
          <div className="bg-[#0a1628]/50 rounded-lg p-4">
            <ul className="space-y-2 text-[#e6f7ff]/70">
              <li>▸ 钛金属 × 5</li>
              <li>▸ 玻璃 × 2</li>
              <li>▸ 润滑剂 × 1</li>
              <li>▸ 铜线 × 2</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#0f2642]/50 rounded-xl p-6 border border-[rgba(0,212,255,0.1)]">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-400" />
            <h2 className="text-lg font-semibold text-white">升级路线</h2>
          </div>
          <ul className="space-y-2 text-[#e6f7ff]/70">
            <li>▸ 深度模块 MK1 → 最大深度 +200m</li>
            <li>▸ 引擎效率模块 → 能耗 -15%</li>
            <li>▸ 存储模块 → 额外储物格 +4</li>
            <li>▸ 热反应堆模块 → 利用地热充电</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

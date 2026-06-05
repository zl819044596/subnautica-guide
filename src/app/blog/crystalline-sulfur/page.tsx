import type { Metadata } from "next";
import Link from "next/link";
import { Gem, MapPin, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Crystalline Sulfur 获取位置大全：最快收集路线 | Subnautica 2 指南",
  description: "Subnautica 2 Crystalline Sulfur 最佳获取位置：快速收集路线和技巧。",
  keywords: ["subnautica 2", "crystalline sulfur", "location", "guide"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a1628] px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-medium mb-4">
          资源攻略
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Crystalline Sulfur 获取位置大全</h1>
        
        <div className="bg-[#0f2642]/50 rounded-xl p-6 border border-[rgba(0,212,255,0.1)] mb-8">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-[#00d4ff]" />
            <h2 className="text-lg font-semibold text-white">主要产地</h2>
          </div>
          <p className="text-[#e6f7ff]/70 mb-4">
            Crystalline Sulfur 可在多个生物群落的矿脉中找到。
            使用扫描仪定位大型矿床提高效率。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#0a1628]/50 rounded-lg p-4">
              <h3 className="font-medium text-white mb-2">推荐路线 1</h3>
              <p className="text-sm text-[#e6f7ff]/60">Safe Shallows → Kelp Forest → Grassy Plateaus</p>
            </div>
            <div className="bg-[#0a1628]/50 rounded-lg p-4">
              <h3 className="font-medium text-white mb-2">推荐路线 2</h3>
              <p className="text-sm text-[#e6f7ff]/60">Mushroom Forest → Blood Kelp → Lost River</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0f2642]/50 rounded-xl p-6 border border-[rgba(0,212,255,0.1)]">
          <div className="flex items-center gap-2 mb-4">
            <Navigation className="w-5 h-5 text-green-400" />
            <h2 className="text-lg font-semibold text-white">收集技巧</h2>
          </div>
          <ul className="space-y-2 text-[#e6f7ff]/70">
            <li>▸ 使用Prawn Suit钻探臂提高采集效率</li>
            <li>▸ 携带足够储物柜空间</li>
            <li>▸ 注意周围环境安全</li>
            <li>▸ 建立采集路线信标系统</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Subnautica 2 电力系统：10个必备技巧 | Subnautica 2 指南",
  description: "Subnautica 2 电力系统 的10个必备技巧，助你成为深海生存专家。",
  keywords: ["subnautica 2", "tips", "\u7535\u529b\u7cfb\u7edf", "guide"],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a1628] px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
          技巧分享
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Subnautica 2 电力系统：10个必备技巧
        </h1>
        
        <div className="space-y-4">
          {[
            "优先升级氧气罐，这是生存的基础",
            "在基地附近建立多个信标作为导航点",
            "使用扫描室自动扫描附近资源",
            "建造水培箱种植食物实现自给自足",
            "携带推进器可以快速逃离危险",
            "月池可以为载具充电和升级",
            "生物反应堆是后期最佳电力方案",
            "使用储物柜分类存放不同资源",
            "建立多个小型基地比一个大基地更安全",
            "定期保存游戏避免意外损失",
          ].map((tip, i) => (
            <div key={i} className="bg-[#0f2642]/50 rounded-xl p-4 border border-[rgba(0,212,255,0.1)] flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                <span className="text-[#00d4ff] font-bold text-sm">{i + 1}</span>
              </div>
              <p className="text-[#e6f7ff]/70">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

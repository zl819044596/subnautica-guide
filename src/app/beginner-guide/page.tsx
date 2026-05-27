import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Heart, Wrench, Fish, MapPin, Lightbulb, AlertTriangle, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "新手攻略 - 深海迷航2 完全新手指南 | Subnautica Guide",
  description: "深海迷航2新手攻略：从坠机到自给自足。包含生存技巧、基础建造、载具获取、重要资源位置等完整流程指南。",
  keywords: ["深海迷航2 攻略", "Subnautica 新手", "深海迷航 教程", "Subnautica 生存指南"],
};

const sections = [
  {
    icon: Heart,
    title: "第一章：紧急生存",
    color: "text-red-400",
    items: [
      { title: "优先事项：食物和水", desc: "捕捉Peeper和Bladderfish，用Bladderfish制作过滤水" },
      { title: "制作基础工具", desc: "扫描仪、生存刀、推进器是首要目标" },
      { title: "建立临时基地", desc: "在Safe Shallows找平坦区域放置建造器" },
    ],
  },
  {
    icon: Wrench,
    title: "第二章：基础建造",
    color: "text-yellow-400",
    items: [
      { title: "建造多功能房间", desc: "需要钛金属×2，从石灰岩中获取" },
      { title: "制作太阳能板", desc: "为基地提供电力，石英+钛金属" },
      { title: "建造储物柜", desc: "整理资源，避免背包满了的窘境" },
    ],
  },
  {
    icon: Compass,
    title: "第三章：探索准备",
    color: "text-blue-400",
    items: [
      { title: "制作Seamoth", desc: "移动速度大幅提升，需要月池和升级模块" },
      { title: "获取指南针", desc: "在Kelp Forest的箱子里找到蓝图" },
      { title: "制作焊接器", desc: "修复基地漏洞和载具损伤" },
    ],
  },
  {
    icon: MapPin,
    title: "第四章：重要地点",
    color: "text-green-400",
    items: [
      { title: "Kelp Forest (海藻森林)", desc: "获取海藻种子、Stalker牙齿、扫描载具碎片" },
      { title: "Grassy Plateaus (草原高原)", desc: "沙鲨出没，但有大量页岩和矿石" },
      { title: "Mountain Island (山脉岛屿)", desc: "Sunbeam事件后前往，获取重要蓝图" },
    ],
  },
  {
    icon: Fish,
    title: "第五章：生物应对",
    color: "text-purple-400",
    items: [
      { title: "Stalker (潜行者)", desc: "丢金属碎片分散注意力，获取珍贵牙齿" },
      { title: "Reaper Leviathan (死神利维坦)", desc: "听到吼声立即转向，保持200米以上距离" },
      { title: "Crashfish (自爆鱼)", desc: "听到叽叽声后退，用推进器推开" },
    ],
  },
  {
    icon: Lightbulb,
    title: "第六章：进阶技巧",
    color: "text-orange-400",
    items: [
      { title: "月池建造", desc: "为Seamoth充电和升级，需要找到蓝图" },
      { title: "生物反应堆", desc: "后期电力方案，用有机物发电" },
      { title: "扫描室网络", desc: "自动扫描附近资源，极大提高效率" },
    ],
  },
];

const tips = [
  "按F1查看当前坐标，方便记录重要地点",
  "夜晚比白天更危险，但也更容易看到生物发光",
  "氧气不足时，珊瑚管可以提供紧急氧气",
  "保存游戏前确保在安全区域",
  "听到不明声音时，立即寻找掩体",
];

export default function BeginnerGuidePage() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      {/* Hero */}
      <section className="relative px-4 pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#00d4ff]/10 text-[#00d4ff] text-sm font-medium mb-4">
            新手指南
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            深海迷航2 完全新手指南
          </h1>
          <p className="text-lg text-[#e6f7ff]/60 max-w-2xl mx-auto">
            从坠机幸存者到深海探险家，这份指南将带你度过最艰难的前几个小时
          </p>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="px-4 py-8 bg-[#0f2642]/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <h2 className="text-lg font-semibold text-white">生存贴士</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-[#e6f7ff]/70">
                <span className="text-[#00d4ff] mt-0.5">▸</span>
                {tip}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Sections */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.title} className="bg-[#0f2642]/50 rounded-2xl p-6 md:p-8 border border-[rgba(0,212,255,0.1)]">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center`}>
                  <section.icon className={`w-5 h-5 ${section.color}`} />
                </div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.title} className="bg-[#0a1628]/50 rounded-xl p-4">
                    <h3 className="font-semibold text-[#e6f7ff] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#e6f7ff]/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">准备好深入探索了吗？</h2>
          <p className="text-[#e6f7ff]/60 mb-8">
            查看我们的交互式地图和完整生物数据库，开始你的深海冒险
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/map"
              className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a1628] font-semibold px-8 py-3 rounded-xl hover:bg-[#00d4ff]/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              查看地图
            </Link>
            <Link
              href="/creatures"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#00d4ff] text-[#00d4ff] font-semibold px-8 py-3 rounded-xl hover:bg-[#00d4ff]/10 transition-colors"
            >
              <Fish className="w-5 h-5" />
              生物数据库
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

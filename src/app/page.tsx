import Link from "next/link";
import { Map, Fish, Wrench, Bot, ChevronRight, Waves } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Interactive Map",
    desc: "Explore the ocean with clickable coordinates, resource markers, and biome boundaries.",
    href: "/map",
  },
  {
    icon: Fish,
    title: "Creature Database",
    desc: "Full catalog of sea life with locations, behaviors, drops, and danger levels.",
    href: "/creatures",
  },
  {
    icon: Wrench,
    title: "Crafting Calculator",
    desc: "Calculate exact materials needed for any item. Recursive breakdown with checklists.",
    href: "/crafting",
  },
  {
    icon: Bot,
    title: "Ask AI",
    desc: "Stuck? Ask our AI helper anything about Subnautica 2. Natural language, instant answers.",
    href: "/ask-ai",
  },
];

const quickGuides = [
  { title: "Beginner's Guide — First Hours", href: "/beginner-guide" },
  { title: "Base Building Tips & Tricks", href: "/biomes/base-building" },
  { title: "Depth & Pressure Survival Chart", href: "/depth-chart" },
  { title: "Leviathan Locations & Avoidance", href: "/creatures/leviathan" },
  { title: "Vehicle Upgrade Priorities", href: "/crafting/vehicles" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden px-4 pt-16 pb-20 sm:px-6 lg:px-8">
        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Waves className="w-8 h-8 text-[#00d4ff]" />
            <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">
              Subnautica 2 Guide
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Survive the Depths{" "}
            <span className="text-[#00d4ff]">Smarter</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#e6f7ff]/70 mb-10 max-w-2xl mx-auto">
            Interactive map, creature database, crafting calculator, and AI-powered help — everything you need to explore Planet 4546B.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/map"
              className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a1628] font-semibold px-8 py-4 rounded-xl hover:bg-[#00d4ff]/90 transition-colors"
            >
              <Map className="w-5 h-5" />
              Open Map
            </Link>
            <Link
              href="/ask-ai"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#00d4ff] text-[#00d4ff] font-semibold px-8 py-4 rounded-xl hover:bg-[#00d4ff]/10 transition-colors"
            >
              <Bot className="w-5 h-5" />
              Ask AI
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="group bg-[#0f2642] border border-[rgba(0,212,255,0.2)] rounded-xl p-6 glow-border hover:border-[rgba(0,212,255,0.6)]"
              >
                <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center mb-4 group-hover:bg-[#00d4ff]/20 transition-colors">
                  <f.icon className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-[#e6f7ff]/60">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Guides */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-[#0f2642]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Popular Guides
          </h2>
          <div className="space-y-3">
            {quickGuides.map((g) => (
              <Link
                key={g.title}
                href={g.href}
                className="flex items-center justify-between bg-[#0f2642] border border-[rgba(0,212,255,0.15)] rounded-lg px-6 py-4 hover:border-[rgba(0,212,255,0.4)] hover:bg-[#0f2642]/80 transition-all"
              >
                <span className="text-[#e6f7ff]/90">{g.title}</span>
                <ChevronRight className="w-5 h-5 text-[#00d4ff]/60" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/beginner-guide"
              className="inline-flex items-center gap-1 text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors"
            >
              View all guides <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 sm:px-6 lg:px-8 border-t border-[rgba(0,212,255,0.1)]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#e6f7ff]/50">
            <Waves className="w-4 h-4" />
            <span>Subnautica 2 Guide</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#e6f7ff]/50">
            <Link href="/about" className="hover:text-[#e6f7ff]/80 transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-[#e6f7ff]/80 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#e6f7ff]/80 transition-colors">Terms</Link>
          </div>
          <p className="text-xs text-[#e6f7ff]/30">
            Not affiliated with Unknown Worlds Entertainment
          </p>
        </div>
      </footer>
    </main>
  );
}

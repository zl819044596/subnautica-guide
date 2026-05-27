import Link from "next/link";
import { creatures } from "@/data/creatures";
import { Fish, ShieldAlert, ShieldCheck, AlertTriangle, Skull } from "lucide-react";

const dangerConfig = {
  safe: { color: "#10b981", icon: ShieldCheck, label: "Safe" },
  caution: { color: "#f59e0b", icon: AlertTriangle, label: "Caution" },
  dangerous: { color: "#ff6b35", icon: ShieldAlert, label: "Dangerous" },
  extreme: { color: "#ef4444", icon: Skull, label: "Extreme" },
};

const categoryLabels: Record<string, string> = {
  passive: "Passive",
  aggressive: "Aggressive",
  leviathan: "Leviathan",
  docile: "Docile",
};

export default function CreaturesPage() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Creature Database</h1>
        <p className="text-[#e6f7ff]/60 text-sm">
          {creatures.length} creatures catalogued. Know what lurks in the depths.
        </p>
      </div>

      <div className="px-4 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {creatures.map((c) => {
            const danger = dangerConfig[c.dangerLevel];
            const DangerIcon = danger.icon;
            return (
              <Link
                key={c.id}
                href={`/creatures/${c.slug}`}
                className="group bg-[#0f2642] border border-[rgba(0,212,255,0.15)] rounded-xl p-4 hover:border-[rgba(0,212,255,0.4)] transition-all glow-border"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">
                    <Fish className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div
                    className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${danger.color}20`,
                      color: danger.color,
                    }}
                  >
                    <DangerIcon className="w-3 h-3" />
                    {danger.label}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#00d4ff] transition-colors">
                  {c.name}
                </h3>

                <p className="text-xs text-[#e6f7ff]/50 mb-3">
                  {categoryLabels[c.category]} · {c.depthRange}
                </p>

                <p className="text-sm text-[#e6f7ff]/60 line-clamp-2">
                  {c.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1">
                  {c.biomes.slice(0, 2).map((b) => (
                    <span
                      key={b}
                      className="text-xs px-2 py-0.5 rounded bg-[#00d4ff]/10 text-[#00d4ff]/70"
                    >
                      {b}
                    </span>
                  ))}
                  {c.biomes.length > 2 && (
                    <span className="text-xs px-2 py-0.5 rounded bg-[#00d4ff]/10 text-[#00d4ff]/70">
                      +{c.biomes.length - 2}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

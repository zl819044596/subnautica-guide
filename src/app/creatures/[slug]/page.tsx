import { notFound } from "next/navigation";
import Link from "next/link";
import { getCreatureBySlug, getAllSlugs, creatures } from "@/data/creatures";
import { Fish, ArrowLeft, MapPin, Heart, Package, ShieldCheck, AlertTriangle, ShieldAlert, Skull } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const creature = getCreatureBySlug(slug);
  if (!creature) return {};
  return {
    title: `${creature.name} — Subnautica 2 Creature Guide`,
    description: creature.description,
  };
}

const dangerConfig = {
  safe: { color: "#10b981", icon: ShieldCheck, label: "Safe" },
  caution: { color: "#f59e0b", icon: AlertTriangle, label: "Caution" },
  dangerous: { color: "#ff6b35", icon: ShieldAlert, label: "Dangerous" },
  extreme: { color: "#ef4444", icon: Skull, label: "Extreme" },
};

export default async function CreatureDetailPage({ params }: Props) {
  const { slug } = await params;
  const creature = getCreatureBySlug(slug);
  if (!creature) notFound();

  const danger = dangerConfig[creature.dangerLevel];
  const DangerIcon = danger.icon;

  return (
    <main className="min-h-screen bg-[#0a1628]">
      <div className="px-4 pt-6 pb-4 max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/creatures"
          className="inline-flex items-center gap-1 text-sm text-[#e6f7ff]/50 hover:text-[#00d4ff] transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Creatures
        </Link>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
            <Fish className="w-8 h-8 text-[#00d4ff]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{creature.name}</h1>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium"
                style={{ backgroundColor: `${danger.color}20`, color: danger.color }}
              >
                <DangerIcon className="w-3.5 h-3.5" />
                {danger.label}
              </span>
              <span className="text-xs text-[#e6f7ff]/40 capitalize">
                {creature.category}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-[#0f2642] border border-[rgba(0,212,255,0.1)] rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-[#e6f7ff]/40 text-xs mb-1">
              <MapPin className="w-3.5 h-3.5" />
              Depth
            </div>
            <div className="text-sm text-white font-medium">{creature.depthRange}</div>
          </div>
          <div className="bg-[#0f2642] border border-[rgba(0,212,255,0.1)] rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-[#e6f7ff]/40 text-xs mb-1">
              <Heart className="w-3.5 h-3.5" />
              Health
            </div>
            <div className="text-sm text-white font-medium">{creature.health}</div>
          </div>
          <div className="bg-[#0f2642] border border-[rgba(0,212,255,0.1)] rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-[#e6f7ff]/40 text-xs mb-1">
              <Package className="w-3.5 h-3.5" />
              Drops
            </div>
            <div className="text-sm text-white font-medium">{creature.drops.length}</div>
          </div>
          <div className="bg-[#0f2642] border border-[rgba(0,212,255,0.1)] rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-[#e6f7ff]/40 text-xs mb-1">
              <MapPin className="w-3.5 h-3.5" />
              Biomes
            </div>
            <div className="text-sm text-white font-medium">{creature.biomes.length}</div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-[#0f2642] border border-[rgba(0,212,255,0.1)] rounded-xl p-5 mb-4">
          <h2 className="text-lg font-semibold text-white mb-2">Description</h2>
          <p className="text-[#e6f7ff]/70 leading-relaxed">{creature.description}</p>
        </div>

        {/* Behavior */}
        <div className="bg-[#0f2642] border border-[rgba(0,212,255,0.1)] rounded-xl p-5 mb-4">
          <h2 className="text-lg font-semibold text-white mb-2">Behavior</h2>
          <p className="text-[#e6f7ff]/70 leading-relaxed">{creature.behavior}</p>
        </div>

        {/* Biomes */}
        <div className="bg-[#0f2642] border border-[rgba(0,212,255,0.1)] rounded-xl p-5 mb-4">
          <h2 className="text-lg font-semibold text-white mb-3">Found In</h2>
          <div className="flex flex-wrap gap-2">
            {creature.biomes.map((b) => (
              <span
                key={b}
                className="px-3 py-1.5 rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] text-sm"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Drops */}
        <div className="bg-[#0f2642] border border-[rgba(0,212,255,0.1)] rounded-xl p-5 mb-6">
          <h2 className="text-lg font-semibold text-white mb-3">Drops</h2>
          <div className="flex flex-wrap gap-2">
            {creature.drops.map((d) => (
              <span
                key={d}
                className="px-3 py-1.5 rounded-lg bg-[#ff6b35]/10 text-[#ff6b35] text-sm"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Related */}
        <div className="border-t border-[rgba(0,212,255,0.1)] pt-6">
          <h2 className="text-lg font-semibold text-white mb-3">More Creatures</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {creatures
              .filter((c) => c.id !== creature.id)
              .slice(0, 4)
              .map((c) => (
                <Link
                  key={c.id}
                  href={`/creatures/${c.slug}`}
                  className="flex items-center gap-3 bg-[#0f2642] border border-[rgba(0,212,255,0.1)] rounded-lg p-3 hover:border-[rgba(0,212,255,0.3)] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                    <Fish className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{c.name}</div>
                    <div className="text-xs text-[#e6f7ff]/40">{c.depthRange}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

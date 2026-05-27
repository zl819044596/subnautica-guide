"use client";

import { useState, useRef, useCallback } from "react";
import { MapPin, Search, X, Fish, Gem, Home, Anchor } from "lucide-react";

interface MapMarker {
  id: string;
  x: number;
  y: number;
  type: "creature" | "resource" | "base" | "entrance";
  name: string;
  description: string;
}

const markers: MapMarker[] = [
  { id: "1", x: 50, y: 50, type: "base", name: "Lifepod 5", description: "Your starting location. Check the radio for distress calls." },
  { id: "2", x: 30, y: 40, type: "creature", name: "Reefback Leviathan", description: "Passive giant. Harmless but intimidating. Found in grassy plateau areas." },
  { id: "3", x: 70, y: 60, type: "creature", name: "Stalker", description: "Aggressive predator in kelp forests. Drops stalker teeth." },
  { id: "4", x: 45, y: 30, type: "resource", name: "Shale Outcrop", description: "Contains diamond, gold, lithium. Check the seabed." },
  { id: "5", x: 60, y: 45, type: "resource", name: "Limestone Outcrop", description: "Contains copper, titanium, lead. Most common outcrop." },
  { id: "6", x: 80, y: 30, type: "entrance", name: "Degasi Seabase", description: "Abandoned base with valuable blueprints and data logs." },
  { id: "7", x: 25, y: 70, type: "creature", name: "Boneshark", description: "Highly aggressive. Found in grand reef and bulb zone." },
  { id: "8", x: 55, y: 75, type: "resource", name: "Sandstone Outcrop", description: "Contains silver, gold, lead. Deeper areas." },
  { id: "9", x: 40, y: 55, type: "base", name: "Safe Shallows", description: "Starting biome. Rich in basic resources and harmless fish." },
  { id: "10", x: 65, y: 25, type: "entrance", name: "Jellyshroom Cave", description: "Entrance to cave system with magnetite and unique flora." },
];

const typeFilters = [
  { key: "all", label: "All", icon: MapPin },
  { key: "creature", label: "Creatures", icon: Fish },
  { key: "resource", label: "Resources", icon: Gem },
  { key: "base", label: "Bases", icon: Home },
  { key: "entrance", label: "Entrances", icon: Anchor },
] as const;

const typeColors: Record<string, string> = {
  creature: "#ff6b35",
  resource: "#00d4ff",
  base: "#10b981",
  entrance: "#f59e0b",
};

export default function MapPage() {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<MapMarker | null>(null);
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const filtered = markers.filter((m) => {
    const matchType = filter === "all" || m.type === filter;
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setScale((s) => Math.min(Math.max(s * delta, 0.5), 3));
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setPan((p) => ({ x: p.x + dx, y: p.y + dy }));
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <main className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Interactive Map</h1>
        <p className="text-[#e6f7ff]/60 text-sm">Explore Planet 4546B. Click markers for details. Drag to pan, scroll to zoom.</p>
      </div>

      {/* Search & Filters */}
      <div className="px-4 pb-4 space-y-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#e6f7ff]/40" />
          <input
            type="text"
            placeholder="Search locations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0f2642] border border-[rgba(0,212,255,0.2)] rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#e6f7ff] placeholder:text-[#e6f7ff]/30 focus:outline-none focus:border-[#00d4ff]/60"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="w-4 h-4 text-[#e6f7ff]/40 hover:text-[#e6f7ff]/70" />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {typeFilters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === f.key
                  ? "bg-[#00d4ff] text-[#0a1628]"
                  : "bg-[#0f2642] text-[#e6f7ff]/60 border border-[rgba(0,212,255,0.15)] hover:border-[rgba(0,212,255,0.4)]"
              }`}
            >
              <f.icon className="w-3.5 h-3.5" />
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="px-4 pb-6">
        <div
          className="relative bg-[#0f2642] rounded-xl border border-[rgba(0,212,255,0.15)] overflow-hidden cursor-grab active:cursor-grabbing"
          style={{ height: "500px" }}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
              transformOrigin: "center",
            }}
          >
            {/* Grid */}
            {Array.from({ length: 11 }).map((_, i) => (
              <g key={i}>
                <line x1={i * 10} y1={0} x2={i * 10} y2={100} stroke="rgba(0,212,255,0.08)" strokeWidth="0.2" />
                <line x1={0} y1={i * 10} x2={100} y2={i * 10} stroke="rgba(0,212,255,0.08)" strokeWidth="0.2" />
              </g>
            ))}

            {/* Coordinate labels */}
            {Array.from({ length: 11 }).map((_, i) => (
              <g key={`label-${i}`}>
                <text x={i * 10} y={3} fill="rgba(0,212,255,0.3)" fontSize="2" textAnchor="middle">{i * 100}</text>
                <text x={3} y={i * 10 + 1} fill="rgba(0,212,255,0.3)" fontSize="2" textAnchor="middle">{i * 100}</text>
              </g>
            ))}

            {/* Center marker */}
            <circle cx={50} cy={50} r="0.8" fill="#00d4ff" opacity="0.5" />
            <text x={50} y={48} fill="rgba(0,212,255,0.5)" fontSize="2" textAnchor="middle">0,0</text>

            {/* Markers */}
            {filtered.map((m) => (
              <g key={m.id} onClick={() => setSelected(m)} className="cursor-pointer">
                <circle
                  cx={m.x}
                  cy={m.y}
                  r="2"
                  fill={typeColors[m.type]}
                  stroke="#0a1628"
                  strokeWidth="0.3"
                  opacity="0.9"
                />
                <circle
                  cx={m.x}
                  cy={m.y}
                  r="3"
                  fill="none"
                  stroke={typeColors[m.type]}
                  strokeWidth="0.2"
                  opacity="0.4"
                />
                <text x={m.x} y={m.y - 3} fill="#e6f7ff" fontSize="1.8" textAnchor="middle" opacity="0.8">
                  {m.name}
                </text>
              </g>
            ))}
          </svg>

          {/* Zoom controls */}
          <div className="absolute bottom-3 right-3 flex flex-col gap-1">
            <button
              onClick={() => setScale((s) => Math.min(s * 1.2, 3))}
              className="w-8 h-8 bg-[#0a1628]/80 border border-[rgba(0,212,255,0.3)] rounded-lg text-[#00d4ff] hover:bg-[#0a1628] flex items-center justify-center text-lg"
            >
              +
            </button>
            <button
              onClick={() => setScale((s) => Math.max(s * 0.8, 0.5))}
              className="w-8 h-8 bg-[#0a1628]/80 border border-[rgba(0,212,255,0.3)] rounded-lg text-[#00d4ff] hover:bg-[#0a1628] flex items-center justify-center text-lg"
            >
              −
            </button>
            <button
              onClick={() => { setScale(1); setPan({ x: 0, y: 0 }); }}
              className="w-8 h-8 bg-[#0a1628]/80 border border-[rgba(0,212,255,0.3)] rounded-lg text-[#00d4ff] hover:bg-[#0a1628] flex items-center justify-center text-xs"
            >
              ⌖
            </button>
          </div>
        </div>
      </div>

      {/* Selected marker detail */}
      {selected && (
        <div className="px-4 pb-6">
          <div className="bg-[#0f2642] border border-[rgba(0,212,255,0.2)] rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: typeColors[selected.type] }}
                  />
                  <span className="text-xs text-[#e6f7ff]/50 uppercase tracking-wider">{selected.type}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{selected.name}</h3>
                <p className="text-sm text-[#e6f7ff]/70 mt-1">{selected.description}</p>
                <p className="text-xs text-[#00d4ff]/60 mt-2">Coordinates: {selected.x * 10}, {selected.y * 10}, 0</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-[#e6f7ff]/40 hover:text-[#e6f7ff]/70">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

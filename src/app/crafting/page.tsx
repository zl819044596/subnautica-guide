"use client";

import { useState } from "react";
import { recipes } from "@/data/recipes";
import { Wrench, Search, X, ChevronRight, Hammer } from "lucide-react";

const categories = [
  { key: "all", label: "All" },
  { key: "tools", label: "Tools" },
  { key: "vehicles", label: "Vehicles" },
  { key: "base", label: "Base" },
  { key: "upgrades", label: "Upgrades" },
  { key: "survival", label: "Survival" },
] as const;

export default function CraftingPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const filtered = recipes.filter((r) => {
    const matchType = filter === "all" || r.category === filter;
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  const recipe = selectedRecipe ? recipes.find((r) => r.id === selectedRecipe) : null;

  return (
    <main className="min-h-screen bg-[#0a1628]">
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Crafting Recipes</h1>
        <p className="text-[#e6f7ff]/60 text-sm">
          {recipes.length} recipes. Calculate materials for any craftable item.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="px-4 pb-4 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#e6f7ff]/40" />
          <input
            type="text"
            placeholder="Search recipes..."
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

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === c.key
                  ? "bg-[#00d4ff] text-[#0a1628]"
                  : "bg-[#0f2642] text-[#e6f7ff]/60 border border-[rgba(0,212,255,0.15)] hover:border-[rgba(0,212,255,0.4)]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Recipe List */}
          <div className="space-y-2">
            {filtered.map((r) => (
              <button
                key={r.id}
                onClick={() => {
                  setSelectedRecipe(r.id);
                  setQuantity(1);
                }}
                className={`w-full flex items-center gap-3 bg-[#0f2642] border rounded-xl p-4 text-left transition-all ${
                  selectedRecipe === r.id
                    ? "border-[#00d4ff]/60"
                    : "border-[rgba(0,212,255,0.1)] hover:border-[rgba(0,212,255,0.3)]"
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                  <Wrench className="w-5 h-5 text-[#00d4ff]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white">{r.name}</div>
                  <div className="text-xs text-[#e6f7ff]/40 capitalize">{r.category} · {r.materials.length} materials</div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 transition-colors ${
                  selectedRecipe === r.id ? "text-[#00d4ff]" : "text-[#e6f7ff]/20"
                }`} />
              </button>
            ))}
          </div>

          {/* Recipe Detail */}
          <div>
            {recipe ? (
              <div className="bg-[#0f2642] border border-[rgba(0,212,255,0.15)] rounded-xl p-5 sticky top-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">
                    <Hammer className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-white">{recipe.name}</h2>
                    <p className="text-xs text-[#e6f7ff]/40 capitalize">{recipe.category} · {recipe.craftedAt}</p>
                  </div>
                </div>

                <p className="text-sm text-[#e6f7ff]/60 mb-4">{recipe.description}</p>

                {/* Quantity */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-[#e6f7ff]/70">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg bg-[#0a1628] border border-[rgba(0,212,255,0.2)] text-[#00d4ff] hover:border-[#00d4ff]/60"
                    >
                      −
                    </button>
                    <span className="w-10 text-center text-white font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-[#0a1628] border border-[rgba(0,212,255,0.2)] text-[#00d4ff] hover:border-[#00d4ff]/60"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Materials */}
                <h3 className="text-sm font-medium text-white mb-3">Materials Needed</h3>
                <div className="space-y-2">
                  {recipe.materials.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-[#0a1628] rounded-lg px-3 py-2.5"
                    >
                      <span className="text-sm text-[#e6f7ff]/80">{m.item}</span>
                      <span className="text-sm font-medium text-[#00d4ff]">
                        {m.count * quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-[rgba(0,212,255,0.1)]">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#e6f7ff]/50">Total unique materials</span>
                    <span className="text-white font-medium">{recipe.materials.length}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#0f2642] border border-[rgba(0,212,255,0.1)] rounded-xl p-8 text-center">
                <Wrench className="w-10 h-10 text-[#00d4ff]/20 mx-auto mb-3" />
                <p className="text-[#e6f7ff]/40 text-sm">Select a recipe to see materials</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export interface Creature {
  id: string;
  slug: string;
  name: string;
  category: "passive" | "aggressive" | "leviathan" | "docile";
  biomes: string[];
  depthRange: string;
  health: number;
  drops: string[];
  description: string;
  behavior: string;
  dangerLevel: "safe" | "caution" | "dangerous" | "extreme";
}

export const creatures: Creature[] = [
  {
    id: "1",
    slug: "peeper",
    name: "Peeper",
    category: "passive",
    biomes: ["Safe Shallows", "Crash Zone"],
    depthRange: "0 - 100m",
    health: 30,
    drops: ["Cooked Peeper", "Raw Peeper"],
    description: "The Peeper is a small, fast, herbivorous fish. It is easily identified by its large, single eye and bright orange body.",
    behavior: "Swims quickly in small schools. Flees when approached by predators or the player.",
    dangerLevel: "safe",
  },
  {
    id: "2",
    slug: "stalker",
    name: "Stalker",
    category: "aggressive",
    biomes: ["Kelp Forest"],
    depthRange: "0 - 150m",
    health: 150,
    drops: ["Stalker Tooth", "Raw Stalker Meat"],
    description: "The Stalker is an aggressive, shark-like predator found primarily in Kelp Forests. Known for its distinctive elongated snout.",
    behavior: "Patrols kelp forests and attacks nearby prey. Can be distracted by metal salvage.",
    dangerLevel: "dangerous",
  },
  {
    id: "3",
    slug: "reefback-leviathan",
    name: "Reefback Leviathan",
    category: "leviathan",
    biomes: ["Grassy Plateaus", "Bulb Zone"],
    depthRange: "50 - 300m",
    health: 5000,
    drops: ["Copper Ore", "Silver Ore", "Gold"],
    description: "The Reefback Leviathan is a colossal, passive leviathan that carries a miniature ecosystem on its back. Completely harmless to the player.",
    behavior: "Slowly swims in large circles. Supports various flora and smaller fauna on its shell.",
    dangerLevel: "safe",
  },
  {
    id: "4",
    slug: "boneshark",
    name: "Boneshark",
    category: "aggressive",
    biomes: ["Grand Reef", "Bulb Zone", "Mountains"],
    depthRange: "150 - 400m",
    health: 200,
    drops: ["Raw Boneshark Meat"],
    description: "The Boneshark is a highly aggressive predator with a heavily armored body. It charges at prey with surprising speed.",
    behavior: "Actively hunts in deeper biomes. Will charge at the player and smaller fish on sight.",
    dangerLevel: "dangerous",
  },
  {
    id: "5",
    slug: "bladderfish",
    name: "Bladderfish",
    category: "passive",
    biomes: ["Safe Shallows", "Kelp Forest"],
    depthRange: "0 - 100m",
    health: 20,
    drops: ["Bladderfish", "Filtered Water"],
    description: "The Bladderfish is a small, docile fish with an inflatable bladder. Essential for early-game water production.",
    behavior: "Slowly drifts in small groups. Easy to catch and provides filtered water when crafted.",
    dangerLevel: "safe",
  },
  {
    id: "6",
    slug: "reaper-leviathan",
    name: "Reaper Leviathan",
    category: "leviathan",
    biomes: ["Crash Zone", "Mountains", "Dunes"],
    depthRange: "0 - 400m",
    health: 5000,
    drops: ["Reaper Leviathan Claw", "Reaper Leviathan Meat"],
    description: "The Reaper Leviathan is one of the most feared predators on Planet 4546B. Massive, extremely aggressive, and capable of destroying small vehicles.",
    behavior: "Actively hunts in open water. Will grab and attack the player and Seamoth. Roars before attacking.",
    dangerLevel: "extreme",
  },
  {
    id: "7",
    slug: "gasopod",
    name: "Gasopod",
    category: "docile",
    biomes: ["Safe Shallows", "Kelp Forest"],
    depthRange: "0 - 100m",
    health: 100,
    drops: ["Gas Sac"],
    description: "The Gasopod is a slow, docile creature that releases toxic gas pods when threatened. Useful for crafting gas torpedoes.",
    behavior: "Slowly walks along the seabed. Releases toxic gas when approached too quickly.",
    dangerLevel: "caution",
  },
  {
    id: "8",
    slug: "cave-crawler",
    name: "Cave Crawler",
    category: "aggressive",
    biomes: ["Islands", "Mountain Island"],
    depthRange: "0 - 50m",
    health: 50,
    drops: ["Cave Crawler Shell"],
    description: "The Cave Crawler is a small, crab-like creature that inhabits islands and caves. Aggressive in groups.",
    behavior: "Scuttles along surfaces and jumps at the player. Found in large numbers on the Mountain Island.",
    dangerLevel: "caution",
  },
];

export function getCreatureBySlug(slug: string): Creature | undefined {
  return creatures.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return creatures.map((c) => c.slug);
}

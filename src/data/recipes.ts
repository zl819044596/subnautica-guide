export interface Recipe {
  id: string;
  name: string;
  category: "tools" | "vehicles" | "base" | "upgrades" | "survival";
  description: string;
  materials: { item: string; count: number }[];
  craftedAt?: string;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "Scanner",
    category: "tools",
    description: "Used to scan flora, fauna, and technology to add them to the database.",
    materials: [
      { item: "Titanium", count: 1 },
      { item: "Battery", count: 1 },
    ],
    craftedAt: "Fabricator",
  },
  {
    id: "2",
    name: "Repair Tool",
    category: "tools",
    description: "Repairs damaged vehicles and habitats using repair spray.",
    materials: [
      { item: "Silicone Rubber", count: 1 },
      { item: "Titanium", count: 1 },
      { item: "Cave Sulfur", count: 1 },
    ],
    craftedAt: "Fabricator",
  },
  {
    id: "3",
    name: "Seamoth",
    category: "vehicles",
    description: "One-person submersible with high speed and maneuverability. Max depth: 200m.",
    materials: [
      { item: "Titanium Ingot", count: 1 },
      { item: "Power Cell", count: 1 },
      { item: "Glass", count: 2 },
      { item: "Lubricant", count: 1 },
      { item: "Lead", count: 1 },
    ],
    craftedAt: "Mobile Vehicle Bay",
  },
  {
    id: "4",
    name: "Cyclops",
    category: "vehicles",
    description: "Massive submarine capable of housing multiple vehicles and serving as a mobile base.",
    materials: [
      { item: "Plasteel Ingot", count: 3 },
      { item: "Enameled Glass", count: 3 },
      { item: "Lubricant", count: 1 },
      { item: "Advanced Wiring Kit", count: 1 },
      { item: "Lead", count: 3 },
    ],
    craftedAt: "Mobile Vehicle Bay",
  },
  {
    id: "5",
    name: "Habitat Builder",
    category: "base",
    description: "Used to construct seabases and deployable structures.",
    materials: [
      { item: "Titanium", count: 2 },
      { item: "Wiring Kit", count: 1 },
      { item: "Computer Chip", count: 1 },
      { item: "Battery", count: 1 },
    ],
    craftedAt: "Fabricator",
  },
  {
    id: "6",
    name: "Solar Panel",
    category: "base",
    description: "Converts sunlight into energy for seabase power.",
    materials: [
      { item: "Titanium", count: 2 },
      { item: "Quartz", count: 2 },
      { item: "Copper Wire", count: 1 },
    ],
    craftedAt: "Habitat Builder",
  },
  {
    id: "7",
    name: "Bioreactor",
    category: "base",
    description: "Composts organic matter into electrical energy. Very efficient.",
    materials: [
      { item: "Titanium", count: 2 },
      { item: "Wiring Kit", count: 1 },
      { item: "Lubricant", count: 1 },
    ],
    craftedAt: "Habitat Builder",
  },
  {
    id: "8",
    name: "Seamoth Depth Module MK1",
    category: "upgrades",
    description: "Increases Seamoth crush depth to 300m.",
    materials: [
      { item: "Titanium", count: 1 },
      { item: "Magnetite", count: 1 },
      { item: "Glass", count: 1 },
    ],
    craftedAt: "Vehicle Upgrade Console",
  },
  {
    id: "9",
    name: "Survival Knife",
    category: "survival",
    description: "Standard issue survival tool. Can be used to defend against predators or harvest resources.",
    materials: [
      { item: "Silicone Rubber", count: 1 },
      { item: "Titanium", count: 1 },
    ],
    craftedAt: "Fabricator",
  },
  {
    id: "10",
    name: "Flashlight",
    category: "survival",
    description: "Handheld light source for dark areas.",
    materials: [
      { item: "Glass", count: 1 },
      { item: "Battery", count: 1 },
    ],
    craftedAt: "Fabricator",
  },
  {
    id: "11",
    name: "Radiation Suit",
    category: "survival",
    description: "Protects against radiation in the Aurora crash zone.",
    materials: [
      { item: "Fiber Mesh", count: 2 },
      { item: "Lead", count: 2 },
    ],
    craftedAt: "Fabricator",
  },
  {
    id: "12",
    name: "Laser Cutter",
    category: "tools",
    description: "Cuts through sealed doors in wrecks and abandoned bases.",
    materials: [
      { item: "Diamond", count: 2 },
      { item: "Battery", count: 1 },
      { item: "Titanium", count: 1 },
      { item: "Cave Sulfur", count: 1 },
    ],
    craftedAt: "Fabricator",
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id);
}

export function getRecipesByCategory(category: string): Recipe[] {
  return recipes.filter((r) => r.category === category);
}

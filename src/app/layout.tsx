import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Subnautica 2 Guide - Interactive Map, Creatures & Crafting",
  description: "The ultimate Subnautica 2 guide with interactive map, creature database, crafting calculator, and AI helper. Find resources, biomes, and survive the depths.",
  keywords: "subnautica 2 guide, subnautica 2 map, subnautica 2 interactive map, subnautica 2 creatures, subnautica 2 crafting",
  openGraph: {
    title: "Subnautica 2 Guide - Interactive Map & AI Helper",
    description: "Your complete Subnautica 2 survival companion. Interactive map, creature locations, crafting recipes, and AI-powered help.",
    type: "website",
    url: "https://subnautica.getfitai.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Nav />
        {children}
      </body>
    </html>
  );
}

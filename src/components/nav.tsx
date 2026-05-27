"use client";

import Link from "next/link";
import { useState } from "react";
import { Map, Fish, Wrench, Bot, BookOpen, Waves, Menu, X } from "lucide-react";

const navItems = [
  { href: "/map", label: "Map", icon: Map },
  { href: "/creatures", label: "Creatures", icon: Fish },
  { href: "/crafting", label: "Crafting", icon: Wrench },
  { href: "/ask-ai", label: "AI Help", icon: Bot },
  { href: "/beginner-guide", label: "Guides", icon: BookOpen },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a1628]/90 backdrop-blur-md border-b border-[rgba(0,212,255,0.15)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors">
            <Waves className="w-6 h-6" />
            <span className="font-semibold text-sm tracking-wide hidden sm:inline">Subnautica 2 Guide</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-[#e6f7ff]/70 hover:text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#e6f7ff]/70 hover:text-[#00d4ff]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[rgba(0,212,255,0.1)] bg-[#0a1628]/95 backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-[#e6f7ff]/70 hover:text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

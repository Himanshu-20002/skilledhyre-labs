import React from "react";
import Button from "@/components/common/Button";
import { SparklesIcon } from "@heroicons/react/24/outline";

export default function InternationalHero({ hero, countryMeta }) {
  if (!hero) return null;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#07040d]">
      {/* 1. Deep Core Dark Background & Radial Glow Halo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 30%, rgba(168, 85, 247, 0.28) 0%, rgba(99, 102, 241, 0.16) 40%, rgba(56, 189, 248, 0.05) 75%, transparent 100%),
            #07040d
          `,
        }}
      />

      {/* 2. Top-Center Architectural Half-Circle Domes (Site Theme Colors: Purple, Indigo, Cyan) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Outer Radiant Half-Circle Arch */}
        <div
          className="absolute -top-32 sm:-top-48 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1150px] lg:w-[1350px] h-[360px] sm:h-[580px] rounded-full border border-purple-500/25 pointer-events-none transform-gpu will-change-transform shadow-[0_0_90px_rgba(168,85,247,0.18)]"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(168, 85, 247, 0.18) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 90%)",
          }}
        />

        {/* Middle Concentric Glowing Half-Circle */}
        <div
          className="absolute -top-16 sm:-top-28 left-1/2 -translate-x-1/2 w-[520px] sm:w-[860px] lg:w-[1020px] h-[280px] sm:h-[450px] rounded-full border border-cyan-400/20 pointer-events-none transform-gpu will-change-transform shadow-[0_0_60px_rgba(56,189,248,0.14)]"
          style={{
            background: "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(56, 189, 248, 0.14) 0%, rgba(168, 85, 247, 0.06) 60%, transparent 95%)",
          }}
        />

        {/* Inner Soft Accent Arc */}
        <div
          className="absolute -top-6 sm:-top-12 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[180px] sm:h-[300px] rounded-full border border-indigo-400/30 pointer-events-none transform-gpu shadow-[0_0_40px_rgba(99,102,241,0.22)]"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99, 102, 241, 0.22) 0%, transparent 85%)",
          }}
        />

        {/* Side Half-Circle Spheres for Lateral Depth */}
        <div className="absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-purple-600/12 blur-3xl border border-purple-500/10 pointer-events-none" />
        <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-cyan-500/12 blur-3xl border border-cyan-400/10 pointer-events-none" />

        {/* Technical Blueprint Dot Matrix */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(216, 180, 254, 0.5) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, black 30%, transparent 80%)",
          }}
        />

        {/* Subtle Decorative Star Sparkles */}
        <div className="absolute top-28 left-[12%] text-[#c084fc] opacity-60 hidden md:block animate-pulse">
          ✦
        </div>
        <div className="absolute top-36 right-[14%] text-[#38bdf8] opacity-60 hidden md:block animate-pulse" style={{ animationDelay: "1.5s" }}>
          ✦
        </div>
        <div className="absolute top-64 right-[8%] text-[#a855f7] opacity-50 hidden lg:block animate-pulse" style={{ animationDelay: "3s" }}>
          ✦
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10 text-center">
        {/* Market Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121624]/90 border border-[#6366f1]/40 shadow-[0_0_25px_rgba(99,102,241,0.25)] mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="text-xs sm:text-sm font-semibold text-gray-200 tracking-wide">
            {hero.marketBadge || `${countryMeta?.flag || "🌐"} ${countryMeta?.name || "Global"} Market`}
          </span>
        </div>

        {/* Headline with High-Contrast Gradient Typography */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold max-w-5xl mx-auto leading-[1.14] tracking-tight mb-6">
          <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            {hero.headline}
          </span>
        </h1>

        {/* Subheadline with balanced contrast */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-10 font-normal">
          {hero.subheadline}
        </p>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button href={hero.primaryCta?.href || "#lead-capture"} variant="primary">
            {hero.primaryCta?.text || "Book Discovery Call"}
          </Button>
          <Button href={hero.secondaryCta?.href || "#deliverables"} variant="secondary">
            {hero.secondaryCta?.text || "Explore Deliverables"}
          </Button>
        </div>

        {/* Trust Badges / Key Metrics with Glass Highlight */}
        {hero.metrics && hero.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10">
            {hero.metrics.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/10 hover:border-[#6366f1]/50 hover:shadow-[0_8px_25px_rgba(99,102,241,0.2)] transition-all duration-300 backdrop-blur-sm"
              >
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-[#818cf8] to-[#38bdf8] bg-clip-text text-transparent">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-300 mt-1.5 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Smooth Bottom Transition Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07040d] to-transparent pointer-events-none" />
    </section>
  );
}

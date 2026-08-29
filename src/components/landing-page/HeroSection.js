"use client";
import Link from "next/link";
import { About, HeroBackground } from "@/components/landing-page";
import MatrixTextRotator from "@/components/common/MatrixTextRotator";
import FloatingSpheresBackground from "@/components/common/FloatingSpheresBackground";
import {
  Globe,
  Cpu,
  Layers,
  TrendingUp,
  Smartphone,
  Target,
  Workflow,
  Palette,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const CAPABILITIES = [
  {
    title: "WEBSITES + WEB APPS",
    tag: "High-Performance Next.js Architecture",
    icon: Globe,
    iconBox:
      "bg-purple-950/70 text-purple-300 border-purple-500/30 group-hover:border-purple-400 group-hover:text-purple-200 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]",
    accentGrad: "from-purple-600/15 via-indigo-600/10 to-transparent",
  },
  {
    title: "AI + AUTOMATION",
    tag: "Autonomous LLMs & Intelligent Pipelines",
    icon: Cpu,
    iconBox:
      "bg-indigo-950/70 text-indigo-300 border-indigo-500/30 group-hover:border-indigo-400 group-hover:text-indigo-200 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]",
    accentGrad: "from-indigo-600/15 via-blue-600/10 to-transparent",
  },
  {
    title: "SAAS + DIGITAL PRODUCTS",
    tag: "Scalable Multi-Tenant Cloud Engines",
    icon: Layers,
    iconBox:
      "bg-fuchsia-950/70 text-fuchsia-300 border-fuchsia-500/30 group-hover:border-fuchsia-400 group-hover:text-fuchsia-200 group-hover:shadow-[0_0_20px_rgba(217,70,239,0.4)]",
    accentGrad: "from-fuchsia-600/15 via-pink-600/10 to-transparent",
  },
  {
    title: "SEO + GOOGLE RANKING",
    tag: "Dominant Search Authority & Indexing",
    icon: TrendingUp,
    iconBox:
      "bg-emerald-950/70 text-emerald-300 border-emerald-500/30 group-hover:border-emerald-400 group-hover:text-emerald-200 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
    accentGrad: "from-emerald-600/15 via-teal-600/10 to-transparent",
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    tag: "Native & Cross-Platform iOS / Android",
    icon: Smartphone,
    iconBox:
      "bg-cyan-950/70 text-cyan-300 border-cyan-500/30 group-hover:border-cyan-400 group-hover:text-cyan-200 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]",
    accentGrad: "from-cyan-600/15 via-sky-600/10 to-transparent",
  },
  {
    title: "ADS + LEAD GENERATION",
    tag: "High-ROI Paid Acquisition Funnels",
    icon: Target,
    iconBox:
      "bg-amber-950/70 text-amber-300 border-amber-500/30 group-hover:border-amber-400 group-hover:text-amber-200 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]",
    accentGrad: "from-amber-600/15 via-orange-600/10 to-transparent",
  },
  {
    title: "API + SYSTEM INTEGRATIONS",
    tag: "Enterprise Microservices & Webhooks",
    icon: Workflow,
    iconBox:
      "bg-violet-950/70 text-violet-300 border-violet-500/30 group-hover:border-violet-400 group-hover:text-violet-200 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]",
    accentGrad: "from-violet-600/15 via-purple-600/10 to-transparent",
  },
  {
    title: "BRAND + PRODUCT DESIGN",
    tag: "Bespoke UI/UX & Design Systems",
    icon: Palette,
    iconBox:
      "bg-rose-950/70 text-rose-300 border-rose-500/30 group-hover:border-rose-400 group-hover:text-rose-200 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.4)]",
    accentGrad: "from-rose-600/15 via-pink-600/10 to-transparent",
  },
];

export default function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-0 bg-[#07040d] overflow-hidden w-full max-w-full">
      {/* Premium Purple Atmospheric Dotted-Grid Background */}
      <HeroBackground />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 w-full flex flex-col items-center">
        {/* Centered Hero Typography & CTA Stack */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-6 w-full">
          {/* 1. Creative Eyebrow Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full text-[0.62rem] sm:text-[0.75rem] font-mono font-semibold tracking-wider text-purple-200 bg-purple-950/50 border border-purple-500/35 uppercase mb-6 sm:mb-8 shadow-[0_0_25px_rgba(168,85,247,0.25)] backdrop-blur-md max-w-full">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping flex-shrink-0" />
            <span className="text-purple-300 truncate">SKILLEDHYRE LABS</span>
            <span className="text-purple-500/60">•</span>
            <span className="text-gray-400 truncate">ENTERPRISE AI LAB</span>
          </span>

          {/* 2. Main Creative Headline with Cyber Matrix Rotator */}
          <h1 className="text-3xl xs:text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.08] mb-6 text-center max-w-full">
            <span className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">Engineering Digital</span>
            <span className="inline-flex items-center justify-center min-h-[1.25em] py-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-purple-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.5)] max-w-full">
              <MatrixTextRotator
                words={[
                  "Intelligence.",
                  "Architectures.",
                  "Cloud Systems.",
                  "AI Platforms.",
                  "Automations.",
                ]}
                interval={2600}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-purple-400 font-sans whitespace-nowrap"
              />
            </span>
          </h1>

          {/* 3. Supporting Copy */}
          <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl text-center">
            SkilledHyre Labs architects high-performance digital product AI engines, scalable software and intelligent digital systems for high-growth enterprises.
          </p>

          {/* 4. CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all duration-300 hover:border-white/30"
            >
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </div>

      <About />

      {/* Full-bleed Section with Seamless Floating Gradient Spheres */}
      <div className="relative w-full overflow-hidden pt-16 sm:pt-24 pb-14 sm:pb-24">
        {/* Full-width Floating Gradient Spheres - zero container clipping */}
        <FloatingSpheresBackground variant="hero" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider text-purple-300 bg-purple-950/70 border border-purple-500/30 uppercase mb-4 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse flex-shrink-0" />
            <span>Core Capabilities & Solutions</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 max-w-4xl leading-[1.2]">
            <span className="block">We Build Digital Futures For</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-purple-400 drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
              High-Growth Enterprises
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mb-10 sm:mb-12 leading-relaxed">
            Enterprise-grade digital systems engineered to scale operations, multiply conversions, and unlock measurable market dominance.
          </p>

          {/* Aesthetic 2-Column Glassmorphism Capability Grid with Wide Center Separation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-4 sm:gap-y-5 max-w-5xl sm:max-w-[1100px] mx-auto w-full text-left">
            {CAPABILITIES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-white/[0.05] via-white/[0.02] to-purple-950/20 border border-white/[0.09] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-white/[0.07] hover:shadow-[0_10px_35px_rgba(168,85,247,0.18)] overflow-hidden cursor-default"
                >
                  {/* Subtle Interactive Ambient Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.accentGrad} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />
                  {/* Top Edge Neon Highlight */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Left: Icon & Text */}
                  <div className="relative z-10 flex items-center gap-3 sm:gap-3.5 min-w-0 pr-2">
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border transition-all duration-300 flex-shrink-0 ${item.iconBox}`}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span className="font-bold tracking-wider text-white text-[11px] xs:text-xs sm:text-sm uppercase truncate group-hover:text-purple-100 transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-gray-400 group-hover:text-gray-300 font-medium truncate transition-colors">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Right: Check Status Badge */}
                  <div className="relative z-10 flex items-center flex-shrink-0 pl-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400 group-hover:bg-emerald-500/25 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.4)] transition-all">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import { About, HeroBackground } from "@/components/landing-page";
import MatrixTextRotator from "@/components/common/MatrixTextRotator";

export default function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-0 bg-[#07040d]">
      {/* Premium Purple Atmospheric Dotted-Grid Background */}
      <HeroBackground />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 w-full flex flex-col items-center">
        {/* Centered Hero Typography & CTA Stack */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-6">
          {/* 1. Creative Eyebrow Badge */}
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[0.68rem] sm:text-[0.75rem] font-mono font-semibold tracking-widest text-purple-200 bg-purple-950/50 border border-purple-500/35 uppercase mb-8 shadow-[0_0_25px_rgba(168,85,247,0.25)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            <span className="text-purple-300">SKILLEDHYRE LABS</span>
            <span className="text-purple-500/60">•</span>
            <span className="text-gray-400">ENTERPRISE AI LAB</span>
          </span>

          {/* 2. Main Creative Headline with Cyber Matrix Rotator */}
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 text-center">
            <span className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">Engineering Digital</span>
            <span className="inline-flex items-center justify-center min-h-[1.25em] py-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-purple-400 drop-shadow-[0_0_40px_rgba(168,85,247,0.5)]">
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
            SkilledHyre Labs architects high-performance AI engines, scalable cloud software, and intelligent digital systems for high-growth enterprises.
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
    </section>
  );
}

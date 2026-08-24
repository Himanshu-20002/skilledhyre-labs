"use client";
import React from "react";

export default function HeroTechBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Base Dark Luxury Cosmic Background */}
      <div className="absolute inset-0 bg-[#060814]" />

      {/* Layer 1: Atmospheric Background Glows */}
      {/* Upper subtle aura */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.15)_0%,_rgba(56,189,248,0.08)_50%,_transparent_75%)] blur-3xl" />

      {/* Primary Massive Atmospheric Glow behind the emerging ecosystem visual */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1200px] h-[750px] bg-[radial-gradient(ellipse_at_center,_rgba(79,70,229,0.32)_0%,_rgba(56,189,248,0.22)_35%,_rgba(124,58,237,0.15)_60%,_transparent_80%)] blur-3xl animate-pulse duration-1000" />

      {/* Side subtle violet accents */}
      <div className="absolute top-[30%] -left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(124,58,237,0.12)_0%,_transparent_70%)] blur-3xl" />
      <div className="absolute top-[25%] -right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(56,189,248,0.14)_0%,_transparent_70%)] blur-3xl" />

      {/* Layer 2: Midground Perspective Technical Grid Lines */}
      <div className="absolute inset-0 opacity-20 [perspective:1000px] pointer-events-none">
        <div className="absolute inset-[-40%] bg-[linear-gradient(to_right,rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:5rem_5rem] [transform:rotateX(60deg)]" />
      </div>

      {/* Subtle Atmospheric Metadata Text Texture (Hidden in Atmosphere) */}
      <div className="absolute inset-0 font-mono text-[0.65rem] tracking-widest text-indigo-300/10 pointer-events-none uppercase">
        <span className="absolute top-[18%] left-[8%] hidden md:inline">SYSTEMS // DATA.FLOW</span>
        <span className="absolute top-[24%] right-[10%] hidden md:inline">AI.INFRASTRUCTURE — v4.8</span>
        <span className="absolute top-[60%] left-[5%] hidden lg:inline">01 • MACHINE INTELLIGENCE</span>
        <span className="absolute top-[65%] right-[6%] hidden lg:inline">02 • CLOUD SCALING</span>
        <span className="absolute top-[78%] left-[12%] hidden md:inline">PRODUCT // DISTRIBUTED</span>
      </div>

      {/* Vignette Overlay for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#060814_95%)]" />

      {/* Seamless Continuous Bottom Page Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#060814] via-[#060814]/80 to-transparent" />
    </div>
  );
}

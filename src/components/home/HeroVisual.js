import React from "react";

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[620px] aspect-[4/3.5] mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Soft atmospheric blue/purple radial glow centered behind the network */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(56,189,248,0.18)_0%,_rgba(99,102,241,0.15)_35%,_transparent_70%)] blur-3xl rounded-full scale-125 opacity-80 animate-pulse duration-1000" />

      {/* FLOATING ASYMMETRIC SYSTEM CONSTELLATION (NO BOX / NO BORDER) */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Vector Data Paths & Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 600 500" fill="none">
          {/* Asymmetric Connection Lines */}
          <path d="M 140 120 L 300 240 L 460 140" stroke="url(#heroLine1)" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-70" />
          <path d="M 100 320 L 300 240 L 480 340" stroke="url(#heroLine2)" strokeWidth="1.5" className="opacity-60" />
          <path d="M 300 90 L 300 240 L 300 410" stroke="url(#heroLine3)" strokeWidth="1.2" strokeDasharray="6 6" className="opacity-50" />
          <path d="M 140 120 L 100 320" stroke="url(#heroLine1)" strokeWidth="1" className="opacity-30" />
          <path d="M 460 140 L 480 340" stroke="url(#heroLine2)" strokeWidth="1" className="opacity-30" />
          <path d="M 300 240 L 520 220" stroke="url(#heroLine1)" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />

          {/* Traveling Signal Pulse Nodes along lines */}
          <circle cx="220" cy="180" r="3" fill="#38bdf8" className="animate-ping opacity-90" />
          <circle cx="380" cy="190" r="3" fill="#a855f7" className="animate-ping opacity-90" />
          <circle cx="200" cy="280" r="3.5" fill="#6366f1" className="animate-ping opacity-80" />
          <circle cx="410" cy="290" r="2.5" fill="#38bdf8" className="animate-ping opacity-80" />
          <circle cx="410" cy="230" r="3" fill="#818cf8" className="animate-ping opacity-90" />

          <defs>
            <linearGradient id="heroLine1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="heroLine2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="heroLine3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* CENTRAL ABSTRACT GEOMETRIC CORE (NO RECTANGLE BOX) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          <div className="relative w-28 h-28 flex items-center justify-center">
            {/* Glowing 3D Diamond Outer Geometry */}
            <div className="absolute inset-0 rotate-45 border-2 border-[#6366f1]/50 rounded-2xl bg-gradient-to-br from-[#6366f1]/20 via-[#0d1022]/90 to-[#38bdf8]/20 shadow-[0_0_40px_rgba(99,102,241,0.5)] backdrop-blur-md transition-all duration-700 animate-pulse" />
            <div className="absolute inset-2 rotate-45 border border-[#38bdf8]/40 rounded-xl bg-[#070914]/80" />

            {/* Inner Core Pulsing LED Emblem */}
            <div className="relative z-10 flex flex-col items-center gap-1">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-80" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#38bdf8] shadow-[0_0_12px_#38bdf8]" />
              </span>
              <span className="text-[0.6rem] font-extrabold tracking-widest text-white uppercase font-mono mt-1">
                SYSTEM CORE
              </span>
            </div>
          </div>
        </div>

        {/* ASYMMETRIC FLOATING NODES (ORGANIC & UNBOXED) */}
        {/* Node 1: Top Left */}
        <div className="absolute top-[16%] left-[12%] z-10 flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0b0e1b]/80 border border-[#38bdf8]/30 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
          <span className="text-[0.68rem] font-semibold text-gray-200 tracking-wide font-mono">01 — INTELLIGENCE</span>
        </div>

        {/* Node 2: Top Right */}
        <div className="absolute top-[20%] right-[10%] z-10 flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0b0e1b]/80 border border-[#a855f7]/30 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#a855f7] shadow-[0_0_8px_#a855f7]" />
          <span className="text-[0.68rem] font-semibold text-gray-200 tracking-wide font-mono">02 — SOFTWARE</span>
        </div>

        {/* Node 3: Bottom Left */}
        <div className="absolute bottom-[20%] left-[8%] z-10 flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0b0e1b]/80 border border-[#6366f1]/30 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#6366f1] shadow-[0_0_8px_#6366f1]" />
          <span className="text-[0.68rem] font-semibold text-gray-200 tracking-wide font-mono">03 — SCALE</span>
        </div>

        {/* Node 4: Bottom Right */}
        <div className="absolute bottom-[22%] right-[8%] z-10 flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0b0e1b]/80 border border-[#38bdf8]/30 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
          <span className="text-[0.68rem] font-semibold text-gray-200 tracking-wide font-mono">ENTERPRISE API</span>
        </div>

        {/* Node 5: Far Right Middle */}
        <div className="absolute top-[44%] right-[2%] z-10 flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0b0e1b]/60 border border-white/10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8]" />
          <span className="text-[0.6rem] font-mono text-gray-400">NEURAL.v4</span>
        </div>

        {/* Top Center Node */}
        <div className="absolute top-[8%] left-[44%] z-10 px-2.5 py-0.5 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/30 text-[0.62rem] font-mono text-[#818cf8] tracking-widest">
          SYS.409 // AI.ENG
        </div>

        {/* Bottom Center Node */}
        <div className="absolute bottom-[8%] left-[44%] z-10 px-2.5 py-0.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[0.62rem] font-mono text-[#38bdf8] tracking-widest">
          LATENCY 2ms
        </div>

        {/* SUBTLE BLUEPRINT METADATA OVERLAYS */}
        <div className="absolute top-[48%] left-[2%] text-[0.58rem] font-mono text-gray-500 tracking-widest uppercase">
          [ DATA_STREAM: ACTIVE ]
        </div>
        <div className="absolute bottom-[48%] right-[16%] text-[0.58rem] font-mono text-gray-500 tracking-widest uppercase">
          [ ENCRYPTION: TLS 1.3 ]
        </div>
      </div>
    </div>
  );
}

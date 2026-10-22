import React from "react";
import Section from "@/components/common/Section";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function MarketPainPoints({ data }) {
  if (!data || !data.items) return null;

  return (
    <Section id="challenges" className="relative">
      {/* Ambient background depth glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {data.eyebrow && (
            <div className="inline-block px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
              {data.eyebrow}
            </div>
          )}
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              {data.title}
            </span>
          </h2>
          {data.description && (
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {data.description}
            </p>
          )}
        </div>

        {/* 3-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#121624]/90 via-[#0d101d]/90 to-[#0a0c16]/90 border border-white/10 hover:border-[#6366f1]/50 hover:shadow-[0_12px_35px_rgba(99,102,241,0.22)] transition-all duration-300 flex flex-col justify-between group backdrop-blur-md"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#38bdf8] transition-colors">
                  {item.title}
                </h3>

                {/* Problem Box */}
                <div className="p-4 rounded-xl bg-rose-500/[0.08] border border-rose-500/20 mb-4 text-xs sm:text-sm text-gray-200">
                  <div className="flex items-center gap-1.5 text-rose-400 font-semibold mb-1.5 text-xs">
                    <ExclamationTriangleIcon className="w-4 h-4 shrink-0" />
                    <span>The Challenge</span>
                  </div>
                  <p className="leading-relaxed">{item.problem}</p>
                </div>

                {/* Solution Box */}
                <div className="p-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 text-xs sm:text-sm text-gray-100">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1.5 text-xs">
                    <CheckCircleIcon className="w-4 h-4 shrink-0" />
                    <span>SkilledHyre Solution</span>
                  </div>
                  <p className="leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

import React from "react";
import Section from "@/components/common/Section";
import { CheckIcon, ClockIcon, CpuChipIcon } from "@heroicons/react/24/outline";

export default function DeliverablesScope({ data }) {
  if (!data || !data.items) return null;

  return (
    <Section id="deliverables" className="relative">
      {/* Background depth glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-cyan-500/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {data.eyebrow && (
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(99,102,241,0.18)]">
              {data.eyebrow}
            </div>
          )}
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              {data.title}
            </span>
          </h2>
          {data.subtitle && (
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#121624]/90 via-[#0d101d]/90 to-[#0a0c16]/90 border border-[#6366f1]/25 hover:border-[#6366f1]/60 hover:shadow-[0_12px_35px_rgba(99,102,241,0.22)] transition-all duration-300 flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6366f1]/15 border border-[#6366f1]/30 flex items-center justify-center text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    <CpuChipIcon className="w-5 h-5 text-[#38bdf8]" />
                  </div>
                  {item.timeline && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-200">
                      <ClockIcon className="w-3.5 h-3.5 text-[#38bdf8]" />
                      <span>{item.timeline}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {item.summary}
                </p>

                {/* Deliverables Checklist */}
                {item.deliverables && (
                  <div className="space-y-2.5 border-t border-white/10 pt-4">
                    <div className="text-xs uppercase font-semibold text-gray-400 tracking-wider mb-2">
                      Key Deliverables
                    </div>
                    {item.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-200">
                        <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

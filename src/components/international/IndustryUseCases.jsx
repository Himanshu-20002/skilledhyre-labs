import React from "react";
import Section from "@/components/common/Section";
import { BoltIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export default function IndustryUseCases({ useCases }) {
  if (!useCases || useCases.length === 0) return null;

  return (
    <Section id="use-cases" className="bg-[#090d18]/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Production Use Cases
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Proven AI Implementations in High-Stakes Industries
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Realistic architectures engineered for compliance, data privacy, and measurable business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((uc, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#121624] via-[#0d101d] to-[#0a0c16] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-cyan-400 mb-3">
                  {uc.industry}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {uc.title}
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-gray-300 mb-6">
                  <div>
                    <span className="text-gray-400 font-medium">Problem: </span>
                    <span>{uc.problem}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium">Architecture: </span>
                    <span>{uc.solution}</span>
                  </div>
                </div>
              </div>

              {uc.impact && (
                <div className="pt-4 border-t border-white/10 flex items-start gap-2 text-xs sm:text-sm text-emerald-300 bg-emerald-500/[0.04] p-3 rounded-xl border border-emerald-500/20">
                  <ChartBarIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-semibold">{uc.impact}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

import React from "react";
import Image from "next/image";
import Section from "@/components/common/Section";
import { CheckBadgeIcon, ClockIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function DeliveryGovernance({ deliveryModel }) {
  if (!deliveryModel) return null;

  return (
    <Section id="delivery" className="bg-[#090d18]/50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {deliveryModel.eyebrow && (
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
              {deliveryModel.eyebrow}
            </div>
          )}
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">
            {deliveryModel.title}
          </h2>
          {deliveryModel.timezoneNote && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300">
              <ClockIcon className="w-4 h-4 text-[#38bdf8] shrink-0" />
              <span>{deliveryModel.timezoneNote}</span>
            </div>
          )}
        </div>

        {/* Milestone Steps */}
        {deliveryModel.milestones && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
            {deliveryModel.milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#121624] to-[#0a0c16] border border-white/10 relative hover:border-[#6366f1]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-[#6366f1]/40">
                    {m.step}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 font-medium">
                    {m.duration}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{m.name}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Real Engineering Delivery Console Showcase */}
        <div className="mb-10 rounded-3xl bg-[#090d18]/95 border border-white/15 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group">
          <div className="px-5 py-3 bg-[#060810] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-gray-400 ml-2">
                Sprint Telemetry &amp; Continuous Deployment Pipeline
              </span>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>98% Automated Test Coverage</span>
            </div>
          </div>
          <div className="relative aspect-[16/9] w-full bg-[#05070e]">
            <Image
              src="/images/international/engineering-delivery-preview.jpg"
              alt="Engineering delivery console and sprint burndown matrix"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Governance & IP Badges */}
        {deliveryModel.governanceBadges && (
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-white/10">
            {deliveryModel.governanceBadges.map((badge, bIdx) => (
              <div
                key={bIdx}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 text-xs sm:text-sm font-semibold text-emerald-300"
              >
                <CheckBadgeIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

import React from "react";
import Section from "@/components/common/Section";
import { ShieldCheckIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function VerifiedProof({ proof }) {
  if (!proof) return null;

  return (
    <Section id="credentials" className="py-12">
      <div className="max-w-5xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121624] via-[#0d101d] to-[#070913] border border-[#6366f1]/25 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#38bdf8] mb-2">
                <ShieldCheckIcon className="w-4 h-4 text-[#38bdf8]" />
                <span>Verified Engineering Benchmarks</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Battle-Tested Architecture & Engineering Rigor
              </h3>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              We hold our engineering squads to strict architectural standards: verifiable latency SLAs, zero data retention, and 100% intellectual property transfer.
            </p>
          </div>

          {/* Credentials / Benchmarks Grid */}
          {proof.teamCredentials && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {proof.teamCredentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                    {cred.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    {cred.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications row */}
          {proof.certifications && proof.certifications.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {proof.certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300"
                >
                  <CheckBadgeIcon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

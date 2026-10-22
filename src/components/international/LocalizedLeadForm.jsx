"use client";

import React, { useState } from "react";
import {
  CheckCircleIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

export default function LocalizedLeadForm({ leadCapture, countryMeta, pageTitle, pageSlug }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    timeline: "1–2 Months",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const marketName = countryMeta?.name || "International";
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: `${pageTitle || "International Service"} (${marketName})`,
        budget: formData.budget,
        message: `[Market: ${marketName}] [Slug: ${pageSlug || ""}] [Timeline: ${formData.timeline}] ${formData.message}`,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.message || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error("[Lead Form Error]:", err);
      setErrorMessage("Network error. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-capture" className="relative py-16 md:py-24 overflow-hidden bg-[#07040d]">
      {/* 1. Deep Core Radiant Background Halo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 50% 50%, rgba(168, 85, 247, 0.28) 0%, rgba(99, 102, 241, 0.20) 40%, rgba(56, 189, 248, 0.08) 70%, transparent 100%),
            #07040d
          `,
        }}
      />

      {/* 2. Architectural Glowing Concentric Half-Circle Domes & Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Outer Radiant Half-Circle Arch */}
        <div
          className="absolute -top-36 sm:-top-52 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] lg:w-[1300px] h-[360px] sm:h-[540px] rounded-full border border-purple-500/25 pointer-events-none transform-gpu shadow-[0_0_90px_rgba(168,85,247,0.22)]"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(168, 85, 247, 0.20) 0%, rgba(99, 102, 241, 0.10) 50%, transparent 90%)",
          }}
        />

        {/* Middle Concentric Glowing Half-Circle */}
        <div
          className="absolute -top-16 sm:-top-28 left-1/2 -translate-x-1/2 w-[500px] sm:w-[840px] h-[260px] sm:h-[420px] rounded-full border border-cyan-400/25 pointer-events-none transform-gpu shadow-[0_0_60px_rgba(56,189,248,0.18)]"
          style={{
            background: "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(56, 189, 248, 0.16) 0%, transparent 95%)",
          }}
        />

        {/* Direct Central Backlight Halo Behind Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-purple-600/30 via-indigo-600/35 to-cyan-400/25 rounded-full blur-[100px] pointer-events-none transform-gpu" />

        {/* Lateral Ambient Glowing Spheres */}
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

        {/* Technical Blueprint Dot Matrix Grid */}
        <div
          className="absolute inset-0 opacity-45 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(216, 180, 254, 0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* Glowing Gradient Border Chassis */}
        <div className="max-w-5xl mx-auto p-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#6366f1]/60 via-[#a855f7]/40 to-[#38bdf8]/60 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(99,102,241,0.25)]">
          <div className="rounded-[15px] sm:rounded-[23px] bg-[#090d18]/95 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            {/* Ambient Card Interior Glow */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#38bdf8]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {isSuccess ? (
                <div className="py-10 text-center max-w-lg mx-auto">
                  <CheckCircleIcon className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-gray-300 mb-5">
                    Our Solution Architect for the {countryMeta?.name || "global"} market will review your specifications and reach out within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="text-xs text-[#38bdf8] hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                  {/* Left Column: Compact Scoping Header & Trust Badges */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                      <SparklesIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{countryMeta?.name || "Direct"} Consultation</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                      {leadCapture?.formHeadline || "Discuss Your Engineering Requirements"}
                    </h2>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {leadCapture?.formSubheadline ||
                        "Speak directly with our senior technical leads. Fast scoping & NDA signed within 2 hours."}
                    </p>

                    {/* Compact Scoping Guarantees */}
                    <div className="space-y-2.5 pt-3 border-t border-white/10 text-xs text-gray-300">
                      <div className="flex items-center gap-2">
                        <ShieldCheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Strict mutual NDA &amp; IP protection</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{countryMeta?.timezone || "Timezone aligned engineering squad"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BoltIcon className="w-4 h-4 text-[#a855f7] shrink-0" />
                        <span>Direct senior solution architect scoping</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Sleek & Compact Form */}
                  <div className="lg:col-span-7">
                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      {errorMessage && (
                        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs text-center">
                          {errorMessage}
                        </div>
                      )}

                      {/* Row 1: Name & Work Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name *"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a14] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors text-xs sm:text-sm"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Work Email *"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a14] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors text-xs sm:text-sm"
                          />
                        </div>
                      </div>

                      {/* Row 2: Company & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company Name"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a14] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors text-xs sm:text-sm"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={
                              countryMeta?.code === "uk"
                                ? "+44 20 7946 0000"
                                : countryMeta?.code === "au"
                                ? "+61 400 000 000"
                                : countryMeta?.code === "uae"
                                ? "+971 50 000 0000"
                                : "+1 (555) 000-0000"
                            }
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a14] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors text-xs sm:text-sm"
                          />
                        </div>
                      </div>

                      {/* Row 3: Budget & Timeline */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a14] border border-white/10 text-white focus:outline-none focus:border-[#6366f1] transition-colors text-xs sm:text-sm"
                          >
                            <option value="">Target Budget ({countryMeta?.currency || "USD"})</option>
                            <option value="<$10,000">&lt; $10k (Discovery / MVP Scope)</option>
                            <option value="$10,000 - $30,000">$10k - $30k (Production Build)</option>
                            <option value="$30,000 - $60,000">$30k - $60k (Enterprise Scaling)</option>
                            <option value="$60,000+">$60k+ (Dedicated Squad)</option>
                          </select>
                        </div>
                        <div>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a14] border border-white/10 text-white focus:outline-none focus:border-[#6366f1] transition-colors text-xs sm:text-sm"
                          >
                            <option value="Immediate (Within 2 weeks)">Immediate (Within 2 weeks)</option>
                            <option value="1–2 Months">1–2 Months</option>
                            <option value="3+ Months">3+ Months</option>
                            <option value="Flexible / Exploring">Flexible / Exploring</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 4: Project Overview */}
                      <div>
                        <textarea
                          name="message"
                          rows={2}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Brief overview of your requirements, tech stack, or challenges..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a14] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors text-xs sm:text-sm"
                        />
                      </div>

                      {/* Row 5: Action & Security Note */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#a855f7] text-white font-bold text-xs sm:text-sm hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300 disabled:opacity-50 text-center"
                        >
                          {isSubmitting ? (
                            <span>Submitting...</span>
                          ) : (
                            <span>{leadCapture?.ctaButtonText || "Request Consultation"}</span>
                          )}
                        </button>
                        <span className="text-[11px] text-gray-500">
                          🔒 Strictly confidential under NDA.
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

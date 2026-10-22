"use client";

import React, { useState } from "react";
import Section from "@/components/common/Section";
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
    <Section id="lead-capture" className="py-10 md:py-14">
      <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#121624]/95 via-[#0d101d]/95 to-[#080a14]/95 border border-[#6366f1]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden backdrop-blur-xl">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 p-6 sm:p-8 lg:p-10">
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
    </Section>
  );
}

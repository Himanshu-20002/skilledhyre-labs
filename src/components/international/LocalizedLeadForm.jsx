"use client";

import React, { useState } from "react";
import Section from "@/components/common/Section";
import Button from "@/components/common/Button";
import { CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/outline";

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
        setErrorMessage(data.message || "Failed to submit request. Please try again or email us directly.");
      }
    } catch (err) {
      console.error("[Lead Form Error]:", err);
      setErrorMessage("Network error. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="lead-capture" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121624] via-[#0d101d] to-[#080a14] border border-[#6366f1]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <SparklesIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>{countryMeta?.name || "Direct"} Consultation</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">
              {leadCapture?.formHeadline || "Discuss Your Engineering Requirements"}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              {leadCapture?.formSubheadline ||
                "Speak directly with our senior technical leads. NDA signed within 2 hours."}
            </p>
          </div>

          {isSuccess ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-center max-w-lg mx-auto">
              <CheckCircleIcon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Consultation Request Received!
              </h3>
              <p className="text-sm text-gray-300 mb-6">
                Our Solution Architect for the {countryMeta?.name || "global"} market will review your technical specifications and contact you within 24 hours.
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
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-300 text-sm text-center">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl bg-[#090d18] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sarah@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#090d18] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company or Startup"
                    className="w-full px-4 py-3 rounded-xl bg-[#090d18] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-[#090d18] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Target Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#090d18] border border-white/10 text-white focus:outline-none focus:border-[#6366f1] transition-colors text-sm"
                  >
                    <option value="">Select Estimated Budget ({countryMeta?.currency || "USD"})</option>
                    <option value="<$10,000">&lt; $10,000 (Discovery / MVP Scope)</option>
                    <option value="$10,000 - $30,000">$10,000 - $30,000 (Production Build)</option>
                    <option value="$30,000 - $60,000">$30,000 - $60,000 (Enterprise Scaling)</option>
                    <option value="$60,000+">$60,000+ (Dedicated Squad)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Target Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#090d18] border border-white/10 text-white focus:outline-none focus:border-[#6366f1] transition-colors text-sm"
                  >
                    <option value="Immediate (Within 2 weeks)">Immediate (Within 2 weeks)</option>
                    <option value="1–2 Months">1–2 Months</option>
                    <option value="3+ Months">3+ Months</option>
                    <option value="Flexible / Exploring">Flexible / Exploring</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Project Overview & Key Requirements
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your current tech stack, AI / software requirements, or key challenges..."
                  className="w-full px-4 py-3 rounded-xl bg-[#090d18] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] transition-colors text-sm"
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#a855f7] text-white font-bold text-base hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <span>{leadCapture?.ctaButtonText || "Request Technical Consultation"}</span>
                  )}
                </button>
                <p className="text-xs text-gray-500 mt-4">
                  🔒 Strictly confidential under NDA. Zero spam guaranteed.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

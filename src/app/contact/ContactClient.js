"use client";

import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  SparklesIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  CloudIcon,
  ArrowTopRightOnSquareIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Button from "@/components/common/Button";

const serviceOptions = [
  { id: "ai", label: "AI Engineering & Solutions", icon: CpuChipIcon },
  { id: "software", label: "Custom Software", icon: CodeBracketIcon },
  { id: "web-mobile", label: "Web & Mobile Apps", icon: DevicePhoneMobileIcon },
  { id: "talent", label: "Tech Talent on Demand", icon: UserGroupIcon },
  { id: "enterprise", label: "Enterprise ERP / SAP", icon: BuildingOffice2Icon },
  { id: "cloud", label: "Cloud & DevOps", icon: CloudIcon },
];

const budgetOptions = [
  "< $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k+",
];

export default function ContactClient() {
  const [selectedService, setSelectedService] = useState("ai");
  const [selectedBudget, setSelectedBudget] = useState("$25k - $50k");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // State for Instant Callback Card
  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [isCallbackSubmitting, setIsCallbackSubmitting] = useState(false);
  const [isCallbackSubmitted, setIsCallbackSubmitted] = useState(false);
  const [callbackError, setCallbackError] = useState("");

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("team.skilledhyre@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleCallbackSubmit = async (e) => {
    e.preventDefault();
    if (!callbackPhone.trim()) {
      setCallbackError("Please enter your phone number.");
      return;
    }

    setIsCallbackSubmitting(true);
    setCallbackError("");

    const accessKey =
      process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ||
      "540d69b2-b7cf-45d0-86f9-c9a773dfeb17";

    const customerName = callbackName.trim() || "Website Visitor";

    try {
      // 1. Deliver instant email to team.skilledhyre@gmail.com via Web3Forms
      const formData = new FormData();
      formData.append("access_key", accessKey);
      formData.append(
        "subject",
        `🚨 URGENT Callback Request: ${customerName} (${callbackPhone})`
      );
      formData.append("name", customerName);
      formData.append("phone", callbackPhone);
      formData.append("email", "callback-request@skilledhyrelabs.com");
      formData.append(
        "message",
        `A potential client requested an instant callback on your website:\n\n👤 Name: ${customerName}\n📞 Phone Number: ${callbackPhone}\n⏰ Time: ${new Date().toLocaleString()}\n🎯 Request: Instant Engineering Callback`
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsCallbackSubmitted(true);

        // 2. Concurrently record into MongoDB database
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: customerName,
            lastName: "",
            email: "callback-request@skilledhyrelabs.com",
            phone: callbackPhone,
            company: "Direct Callback",
            service: "Priority Phone Callback",
            message: `Priority callback requested for phone: ${callbackPhone}`,
          }),
        }).catch((dbErr) => console.warn("[DB Callback Log]:", dbErr));
      } else {
        setCallbackError(data.message || "Failed to book callback. Please call us directly.");
      }
    } catch (err) {
      console.error("[Callback submit error]:", err);
      setCallbackError("Network error. Please call +91 7070633784 directly.");
    } finally {
      setIsCallbackSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const activeServiceLabel =
      serviceOptions.find((s) => s.id === selectedService)?.label || selectedService;

    const accessKey =
      process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ||
      "540d69b2-b7cf-45d0-86f9-c9a773dfeb17";

    try {
      // 1. Submit directly to Web3Forms from browser (dispatches instant email to team.skilledhyre@gmail.com)
      const formData = new FormData();
      formData.append("access_key", accessKey);
      formData.append("name", `${formState.firstName} ${formState.lastName}`.trim());
      formData.append("email", formState.email);
      formData.append("phone", formState.phone || "Not specified");
      formData.append("company", formState.company || "Not specified");
      formData.append("service", activeServiceLabel);
      formData.append("budget", selectedBudget);
      formData.append("message", formState.message);
      formData.append(
        "subject",
        `New Inquiry: ${formState.firstName} ${formState.lastName} (${activeServiceLabel})`
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);

        // 2. Concurrently record into MongoDB database
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formState,
            service: activeServiceLabel,
            budget: selectedBudget,
          }),
        }).catch((dbErr) => console.warn("[DB Log]:", dbErr));
      } else {
        setErrorMessage(
          data.message || "Failed to submit inquiry. Please try again or email team.skilledhyre@gmail.com directly."
        );
      }
    } catch (err) {
      console.error("[Contact submit error]:", err);
      setErrorMessage("Network error. Please email team.skilledhyre@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* 1. Symmetrical Ambient Lighting & Cybernetic Grid */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Subtle centered top radial spotlight */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#6366f1]/20 via-[#a855f7]/10 to-transparent rounded-full blur-3xl opacity-70" />
        
        {/* Center-balanced ambient mesh */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-[#6366f1]/05 via-[#38bdf8]/05 to-[#a855f7]/05 rounded-full blur-[120px] opacity-60" />

        {/* High-tech micro grid background */}
        <div 
          className="absolute inset-0 opacity-[0.035] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,black_40%,transparent_100%)]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "44px 44px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        {/* 2. Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Live Operational Status Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/30 backdrop-blur-md text-[#a5b4fc] text-xs sm:text-sm font-medium mb-6 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]" />
            </span>
            <span>Direct Architecture & Engineering Access</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
            Let’s Build Something <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#38bdf8] drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
              Exceptional & Scalable
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Connect directly with SkilledHyre Labs. Whether you need production-ready AI systems, scalable software platforms, or dedicated talent pods — our technical leaders are ready.
          </p>

          {/* Key Assurance Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-8 text-xs sm:text-sm text-gray-400 font-medium">
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-[#38bdf8]" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-[#818cf8]" />
              <span>Enterprise NDA on request</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-[#c084fc]" />
              <span>Noida HQ • Global Delivery</span>
            </div>
          </div>
        </div>

        {/* 3. Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: Channels & Office Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Channels Card */}
            <div className="rounded-3xl bg-[#0e1322]/70 border border-white/10 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <h2 className="text-xl font-bold text-white mb-1">
                Direct Communication
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Reach our engineering directors and client partners directly.
              </p>

              <div className="space-y-4">
                {/* Email Channel */}
                <div className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#6366f1]/50 hover:bg-[#6366f1]/05 p-4 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#6366f1]/15 border border-[#6366f1]/30 flex items-center justify-center text-[#818cf8] shrink-0 group-hover:scale-105 transition-transform">
                        <EnvelopeIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                          Email Us
                        </div>
                        <a
                          href="mailto:team.skilledhyre@gmail.com"
                          className="text-sm sm:text-base font-semibold text-white hover:text-[#818cf8] transition-colors block break-all"
                        >
                          team.skilledhyre@gmail.com
                        </a>
                        <span className="text-[0.7rem] text-emerald-400 font-medium flex items-center gap-1.5 mt-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Average reply in &lt; 2 hrs
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      title="Copy email address"
                      className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                      type="button"
                    >
                      {copiedEmail ? (
                        <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <DocumentDuplicateIcon className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone Channel */}
                <div className="group rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#38bdf8]/50 hover:bg-[#38bdf8]/05 p-4 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#38bdf8]/15 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] shrink-0 group-hover:scale-105 transition-transform">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                        Direct Phone
                      </div>
                      <a
                        href="tel:+917070633784"
                        className="text-sm sm:text-base font-semibold text-white hover:text-[#38bdf8] transition-colors block"
                      >
                        +91 7070633784
                      </a>
                      <span className="text-[0.7rem] text-gray-400 block mt-1">
                        Mon – Sat • 9:00 AM – 7:00 PM IST
                      </span>
                    </div>
                  </div>
                </div>

                {/* Office Location */}
                <div className="group rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#c084fc]/50 hover:bg-[#c084fc]/05 p-4 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#c084fc]/15 border border-[#c084fc]/30 flex items-center justify-center text-[#c084fc] shrink-0 group-hover:scale-105 transition-transform">
                      <MapPinIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                          Engineering Headquarters
                        </div>
                        <a
                          href="https://maps.google.com/?q=I-thum+Noida+sector+62"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#c084fc] hover:text-[#d8b4fe] flex items-center gap-1 font-medium"
                        >
                          Directions <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="text-sm font-medium text-white/90 leading-relaxed mt-1">
                        Office no - 606 Tower A, I-thum Noida sector 62, 201309
                      </p>
                      <span className="text-[0.7rem] text-gray-400 block mt-1">
                        Uttar Pradesh, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Priority Callback Card - Solid Blue (Non-Transparent) */}
            <div
              className="relative overflow-hidden rounded-3xl border border-[#60a5fa]/40 p-6 sm:p-8 shadow-[0_20px_50px_rgba(29,78,216,0.35)]"
              style={{
                backgroundColor: "#1e40af",
                background: "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #1d4ed8 100%)",
              }}
            >
              {/* Subtle top-right ambient light accent */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#60a5fa]/30 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/20 border border-white/25 text-sky-100 text-xs font-semibold mb-3.5 backdrop-blur-sm">
                  <PhoneIcon className="w-3.5 h-3.5 text-sky-300" />
                  <span>Instant Callback • 15–30 Mins</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 tracking-tight">
                  Prefer a Quick Call?
                </h3>

                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed mb-4 font-normal">
                  Leave your name and number. An engineering advisor will call you back shortly.
                </p>

                {isCallbackSubmitted ? (
                  <div className="p-5 rounded-2xl bg-black/25 border border-white/25 text-center space-y-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center mx-auto">
                      <CheckCircleIcon className="w-6 h-6" />
                    </div>
                    <div className="text-base font-bold text-white">Callback Requested!</div>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      We will call you at <span className="font-semibold text-white">{callbackPhone}</span> shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsCallbackSubmitted(false);
                        setCallbackPhone("");
                        setCallbackName("");
                      }}
                      className="text-xs text-sky-200 hover:text-white underline pt-1 cursor-pointer"
                    >
                      Request another callback
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleCallbackSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        value={callbackName}
                        onChange={(e) => setCallbackName(e.target.value)}
                        placeholder="Your Name (Optional)"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/25 text-white placeholder-blue-200/70 text-sm focus:outline-none focus:border-white focus:ring-2 focus:ring-white/25 transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        value={callbackPhone}
                        onChange={(e) => setCallbackPhone(e.target.value)}
                        placeholder="Phone Number (e.g. +91 98765 43210) *"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/25 text-white placeholder-blue-200/70 text-sm focus:outline-none focus:border-white focus:ring-2 focus:ring-white/25 transition-all"
                      />
                    </div>

                    {callbackError && (
                      <div className="text-xs text-rose-200 bg-black/35 p-2 rounded-lg text-center">
                        {callbackError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isCallbackSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#1d4ed8] hover:bg-blue-50 font-bold text-sm shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-75 group"
                    >
                      <PhoneIcon className="w-4 h-4 text-[#1d4ed8]" />
                      <span>{isCallbackSubmitting ? "Booking Callback..." : "Book a Callback"}</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>

                    <p className="text-[0.68rem] text-center text-blue-200/80 pt-0.5">
                      🔒 No spam. Direct call from our engineering team only.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Enterprise Ingestion Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0e1322]/80 border border-white/10 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Subtle corner light sheen */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#6366f1]/15 rounded-full blur-3xl pointer-events-none" />

              {isSubmitted ? (
                <div className="py-16 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircleIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting SkilledHyre Labs. Our technical team has received your project details and will reply within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        company: "",
                        message: "",
                      });
                    }}
                    type="button"
                    className="inline-flex items-center text-xs font-semibold text-[#818cf8] hover:text-white transition-colors underline pt-4"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                      Project Inquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Fill in the technical scope and requirements below to get started.
                    </p>
                  </div>

                  {/* Service Selector Pills */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2.5">
                      Service of Interest
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {serviceOptions.map((srv) => {
                        const Icon = srv.icon;
                        const isSelected = selectedService === srv.id;
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => setSelectedService(srv.id)}
                            className={`flex items-center gap-2 p-2.5 rounded-xl text-left text-xs font-medium border transition-all duration-200 ${
                              isSelected
                                ? "bg-[#6366f1]/20 border-[#6366f1] text-white shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                                : "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.05]"
                            }`}
                          >
                            <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-[#38bdf8]" : "text-gray-400"}`} />
                            <span className="truncate">{srv.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* First & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                      >
                        First Name <span className="text-[#38bdf8]">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={formState.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/25 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                      >
                        Last Name <span className="text-[#38bdf8]">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={formState.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/25 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Business Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                      >
                        Business Email <span className="text-[#38bdf8]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/25 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                      >
                        Phone Number <span className="text-gray-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/25 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Company & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                      >
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formState.company}
                        onChange={handleInputChange}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/25 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                        Anticipated Budget
                      </label>
                      <div className="grid grid-cols-2 gap-1.5">
                        {budgetOptions.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setSelectedBudget(b)}
                            className={`py-2 px-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                              selectedBudget === b
                                ? "bg-[#38bdf8]/15 border-[#38bdf8]/50 text-white"
                                : "bg-black/30 border-white/10 text-gray-400 hover:text-white"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5"
                    >
                      Project Details & Technical Scope <span className="text-[#38bdf8]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Describe your project, required technical capabilities, timeline goals, or challenges you need resolved..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/25 transition-all text-sm resize-y"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs text-center">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-1 text-base cursor-pointer"
                  >
                    {isSubmitting ? "Transmitting Requirements..." : "Send Message & Request Architecture Proposal"}
                  </Button>

                  {/* Assurance footnote */}
                  <p className="text-[0.7rem] text-center text-gray-400">
                    🔒 Protected by enterprise-grade confidentiality. We sign mutual NDAs before any code review or technical discovery.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4. Bottom Value & Trust Delivery Strip */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6">
            <div className="text-xs uppercase tracking-widest text-[#38bdf8] font-bold mb-1">
              01 • Technical Review
            </div>
            <h4 className="text-base font-semibold text-white mb-2">
              Direct Senior Assessment
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Every message is reviewed by principal software and AI architects, ensuring technical feasibility from day one.
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6">
            <div className="text-xs uppercase tracking-widest text-[#818cf8] font-bold mb-1">
              02 • IP & Governance
            </div>
            <h4 className="text-base font-semibold text-white mb-2">
              100% Intellectual Property
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Full code ownership and copyright transfer. Clean repository handovers with robust CI/CD and zero vendor lock-in.
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6">
            <div className="text-xs uppercase tracking-widest text-[#c084fc] font-bold mb-1">
              03 • Rapid Onboarding
            </div>
            <h4 className="text-base font-semibold text-white mb-2">
              Pods Active in &lt; 48 Hours
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Fast-track engineering deployment. Our dedicated developers and AI engineers integrate seamlessly into your sprint cycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

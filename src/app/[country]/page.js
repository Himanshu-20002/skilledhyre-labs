import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  getCountry,
  getAllCountryParams,
  getPagesByCountry,
} from "@/data/international/registry";
import Section from "@/components/common/Section";
import Button from "@/components/common/Button";
import BreadcrumbJsonLd from "@/components/common/BreadcrumbJsonLd";
import LocalizedLeadForm from "@/components/international/LocalizedLeadForm";
import HeroConsoleShowcase from "@/components/international/HeroConsoleShowcase";
import {
  ArrowRightIcon,
  SparklesIcon,
  ClockIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllCountryParams();
}

export async function generateMetadata({ params }) {
  const { country } = await params;
  const countryMeta = getCountry(country);

  if (!countryMeta) {
    return { title: "Market Hub Not Found" };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skilledhyrelabs.com";
  const canonicalUrl = `${baseUrl}/${countryMeta.code}`;

  return {
    title: `${countryMeta.hubTitle} | SkilledHyre Labs`,
    description: countryMeta.hubDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${countryMeta.hubTitle} | SkilledHyre Labs`,
      description: countryMeta.hubDescription,
      url: canonicalUrl,
      type: "website",
    },
  };
}

export default async function CountryHubPage({ params }) {
  const { country } = await params;
  const countryMeta = getCountry(country);

  if (!countryMeta) {
    notFound();
  }

  const activePages = getPagesByCountry(country);
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: countryMeta.name, url: `/${countryMeta.code}` },
  ];

  return (
    <article className="min-h-screen bg-[#07040d] text-white pt-28 pb-16 selection:bg-[#6366f1]/30 relative overflow-hidden">
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* Radiant Half-Circle Dome & Depth Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Top-Center Half-Circle Arch */}
        <div
          className="absolute -top-32 sm:-top-44 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[360px] sm:h-[550px] rounded-full border border-purple-500/25 pointer-events-none transform-gpu shadow-[0_0_90px_rgba(168,85,247,0.18)]"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(168, 85, 247, 0.18) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 90%)",
          }}
        />
        {/* Inner Half-Circle */}
        <div
          className="absolute -top-16 sm:-top-24 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[260px] sm:h-[400px] rounded-full border border-cyan-400/20 pointer-events-none transform-gpu shadow-[0_0_60px_rgba(56,189,248,0.14)]"
          style={{
            background: "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(56, 189, 248, 0.14) 0%, transparent 90%)",
          }}
        />
        {/* Blueprint dot matrix */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(216, 180, 254, 0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, black 30%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <Section className="text-center pt-8 pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121624]/90 border border-[#6366f1]/40 mb-6 shadow-[0_0_25px_rgba(99,102,241,0.2)] backdrop-blur-md">
            <span className="text-lg">{countryMeta.flag}</span>
            <span className="text-xs sm:text-sm font-semibold text-gray-200">
              {countryMeta.name} Market Hub
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold max-w-4xl mx-auto leading-tight mb-6">
            <span className="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              {countryMeta.hubTitle}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            {countryMeta.hubDescription}
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 mb-10">
            <ClockIcon className="w-4 h-4 text-[#38bdf8]" />
            <span>{countryMeta.timezone}</span>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button href="#available-services" variant="primary">
              Explore Services
            </Button>
            <Button href="#lead-capture" variant="secondary">
              Book Consultation
            </Button>
          </div>

          {/* Interactive Hero Console UI Showcase */}
          <HeroConsoleShowcase countryName={countryMeta.name} />
        </Section>

      {/* Available Market Services Grid */}
      <Section id="available-services" className="bg-[#090d18]/40 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <SparklesIcon className="w-3.5 h-3.5 text-indigo-400" />
              <span>Dedicated Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">
              Specialized Solutions for {countryMeta.name}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Production-ready architectures engineered specifically for {countryMeta.name} enterprise compliance and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activePages.map((page, idx) => (
              <Link
                key={idx}
                href={`/${countryMeta.code}/${page.slug}`}
                className="group rounded-3xl bg-gradient-to-br from-[#121624] via-[#0d101d] to-[#0a0c16] border border-white/10 hover:border-[#6366f1]/50 hover:shadow-[0_15px_40px_rgba(99,102,241,0.25)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Thumbnail Banner */}
                <div className="relative aspect-[21/9] w-full bg-[#05070e] overflow-hidden border-b border-white/10">
                  <Image
                    src={
                      idx % 2 === 0
                        ? "/images/international/ai-dashboard-preview.jpg"
                        : "/images/international/cloud-architecture-preview.jpg"
                    }
                    alt={page.hero.headline}
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d101d] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#090d18]/90 backdrop-blur-md border border-white/20 text-[10px] font-mono text-cyan-300 font-semibold uppercase">
                    {page.serviceCategory || "Specialized Service"}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#38bdf8] transition-colors mb-2.5 leading-snug">
                      {page.hero.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2 mb-4">
                      {page.hero.subheadline}
                    </p>

                    {/* Micro Feature Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-gray-300">
                        <CheckBadgeIcon className="w-3 h-3 text-emerald-400" />
                        <span>SLA Latency Guarantee</span>
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-gray-300">
                        <ClockIcon className="w-3 h-3 text-cyan-400" />
                        <span>Timezone Aligned Squad</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#38bdf8] pt-3 border-t border-white/10 group-hover:translate-x-1 transition-transform">
                    <span>View Architecture &amp; Deliverables</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}

            {/* General Custom Software Link */}
            <div className="rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative">
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs font-semibold mb-4">
                  Complete Technical Laboratory
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                  Custom Engineering &amp; Autonomous Squads
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  Need a bespoke system, high-frequency backend, microservices refactoring, or a specialized technical architecture? Browse our full laboratory solutions.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white group/btn"
                >
                  <span>Browse All Services</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-[#38bdf8] group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

        {/* Localized Lead Form */}
        <LocalizedLeadForm
          countryMeta={countryMeta}
          pageTitle={`${countryMeta.name} Market Hub`}
          pageSlug="hub"
          leadCapture={{
            formHeadline: `Connect with our ${countryMeta.name} Solution Architects`,
            formSubheadline: `Schedule a 30-minute scoping discussion. Fast NDA turnaround and timezone-aligned delivery.`,
            ctaButtonText: `Contact ${countryMeta.name} Team`,
          }}
        />
      </div>
    </article>
  );
}

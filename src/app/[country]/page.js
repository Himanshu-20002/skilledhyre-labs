import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getCountry,
  getAllCountryParams,
  getPagesByCountry,
} from "@/data/international/registry";
import Section from "@/components/common/Section";
import Button from "@/components/common/Button";
import BreadcrumbJsonLd from "@/components/common/BreadcrumbJsonLd";
import LocalizedLeadForm from "@/components/international/LocalizedLeadForm";
import {
  ArrowRightIcon,
  SparklesIcon,
  ClockIcon,
  ShieldCheckIcon,
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

          <div className="flex justify-center gap-4">
            <Button href="#available-services" variant="primary">
              Explore Services
            </Button>
            <Button href="#lead-capture" variant="secondary">
              Book Consultation
            </Button>
          </div>
        </Section>

      {/* Available Market Services Grid */}
      <Section id="available-services" className="bg-[#090d18]/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">
              Specialized Solutions for {countryMeta.name}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Dedicated engineering capabilities tailored to {countryMeta.name} business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activePages.map((page, idx) => (
              <Link
                key={idx}
                href={`/${countryMeta.code}/${page.slug}`}
                className="group p-8 rounded-2xl bg-gradient-to-br from-[#121624] via-[#0d101d] to-[#0a0c16] border border-white/10 hover:border-[#6366f1]/50 hover:shadow-[0_12px_30px_rgba(99,102,241,0.2)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
                    {page.serviceCategory || "Specialized Service"}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#38bdf8] transition-colors mb-3">
                    {page.hero.headline}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-6">
                    {page.hero.subheadline}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-[#38bdf8] pt-4 border-t border-white/10 group-hover:translate-x-1 transition-transform">
                  <span>Explore Service & Deliverables</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </div>
              </Link>
            ))}

            {/* General Custom Software Link */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs font-semibold mb-4">
                  Full Catalog
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Custom Engineering & Dedicated Squads
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Need custom software, full-stack product engineering, or a specialized technical architecture? Explore our complete engineering laboratory.
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white"
              >
                <span>Browse All Services</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
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

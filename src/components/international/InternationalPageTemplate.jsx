import React from "react";
import BreadcrumbJsonLd from "@/components/common/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/common/ServiceJsonLd";
import InternationalHero from "./InternationalHero";
import MarketPainPoints from "./MarketPainPoints";
import DeliverablesScope from "./DeliverablesScope";
import IndustryUseCases from "./IndustryUseCases";
import VerifiedProof from "./VerifiedProof";
import DeliveryGovernance from "./DeliveryGovernance";
import InternationalFAQ from "./InternationalFAQ";
import LocalizedLeadForm from "./LocalizedLeadForm";
import { getCountry } from "@/data/international/countries";

export default function InternationalPageTemplate({ pageData }) {
  if (!pageData) return null;

  const countryMeta = getCountry(pageData.country);
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: countryMeta?.name || pageData.country.toUpperCase(), url: `/${pageData.country}` },
    { name: pageData.hero.headline || pageData.seo.title, url: `/${pageData.country}/${pageData.slug}` },
  ];

  return (
    <article className="min-h-screen bg-[#07040d] text-white selection:bg-[#6366f1]/30 selection:text-white relative overflow-hidden">
      {/* Schema.org Injections */}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ServiceJsonLd
        name={pageData.seo.title}
        description={pageData.seo.description}
        serviceType={pageData.serviceCategory || "Software & AI Engineering"}
        url={`/${pageData.country}/${pageData.slug}`}
      />

      {/* Global Background Depth & Lateral Ambient Half-Circles (Hardware GPU Accelerated) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Mid-Page Right Glowing Half-Circle */}
        <div
          className="absolute top-[28%] -right-40 w-[600px] h-[600px] rounded-full border border-purple-500/15 pointer-events-none transform-gpu"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(99, 102, 241, 0.04) 50%, transparent 75%)",
          }}
        />

        {/* Mid-Page Left Glowing Half-Circle */}
        <div
          className="absolute top-[52%] -left-44 w-[650px] h-[650px] rounded-full border border-cyan-400/15 pointer-events-none transform-gpu"
          style={{
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.10) 0%, rgba(168, 85, 247, 0.03) 50%, transparent 75%)",
          }}
        />

        {/* Lower Page Center Ambient Arch */}
        <div
          className="absolute bottom-40 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1300px] h-[500px] rounded-full border border-indigo-500/15 pointer-events-none transform-gpu"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99, 102, 241, 0.10) 0%, rgba(168, 85, 247, 0.05) 45%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* 1. Market-Specific Hero */}
        <InternationalHero
          hero={pageData.hero}
          countryMeta={countryMeta}
        />

        {/* 2. Business Problems & Pain Points */}
        <MarketPainPoints
          data={pageData.marketPainPoints}
        />

        {/* 3. Concrete Capabilities & Deliverables */}
        <DeliverablesScope
          data={pageData.servicesDeliverables}
        />

        {/* 4. Domain & Industry Use Cases */}
        <IndustryUseCases
          useCases={pageData.useCases}
        />

        {/* 5. Verified Proof & Benchmarks */}
        <VerifiedProof
          proof={pageData.proof}
        />

        {/* 6. Delivery Governance & SLA Model */}
        <DeliveryGovernance
          deliveryModel={pageData.deliveryModel}
        />

        {/* 7. FAQs with Schema.org */}
        <InternationalFAQ
          faqs={pageData.faqs}
        />

        {/* 8. Conversion Lead Capture */}
        <LocalizedLeadForm
          leadCapture={pageData.leadCapture}
          countryMeta={countryMeta}
          pageTitle={pageData.hero.headline}
          pageSlug={pageData.slug}
        />
      </div>
    </article>
  );
}

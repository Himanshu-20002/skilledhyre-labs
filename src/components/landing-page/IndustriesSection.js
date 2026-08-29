"use client";
import Link from "next/link";
import {
  HeartIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  Cog6ToothIcon,
  TruckIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  GlobeAmericasIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import Section from "@/components/common/Section";
import Card from "@/components/common/Card";

const featuredIndustries = [
  {
    title: "Healthcare",
    description:
      "AI diagnostics, patient risk analytics, health assistants, and hospital intelligence systems.",
    icon: HeartIcon,
    href: "/industries/healthcare",
  },
  {
    title: "FinTech & Banking",
    description:
      "Fraud detection, credit scoring, transaction monitoring, and compliance AI.",
    icon: BanknotesIcon,
    href: "/industries/fintech-banking",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Recommendation engines, demand forecasting, dynamic pricing, and personalization.",
    icon: ShoppingCartIcon,
    href: "/industries/retail-ecommerce",
  },
  {
    title: "Manufacturing",
    description:
      "Predictive maintenance, quality inspection, and supply chain optimization.",
    icon: Cog6ToothIcon,
    href: "/industries/manufacturing",
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Route optimization, inventory forecasting, and smart warehousing.",
    icon: TruckIcon,
    href: "/industries/logistics-supply-chain",
  },
  {
    title: "Real Estate",
    description:
      "Property valuation models, smart building analytics, and automated lead generation.",
    icon: BuildingOfficeIcon,
    href: "/industries/real-estate",
  },
];

const secondaryIndustries = [
  { name: "Education & EdTech", href: "/industries/education-edtech", icon: AcademicCapIcon },
  { name: "Marketing & Media", href: "/industries/marketing-media", icon: MegaphoneIcon },
  { name: "Travel & Tourism", href: "/industries/travel-tourism", icon: GlobeAmericasIcon },
  { name: "HR & Recruitment", href: "/industries/hr-recruitment", icon: BriefcaseIcon },
  { name: "Insurance", href: "/industries/insurance", icon: ShieldCheckIcon },
  { name: "Food & Restaurant", href: "/industries/food-restaurant", icon: BuildingStorefrontIcon },
];

export default function IndustriesSection() {
  return (
    <Section className="relative bg-transparent pb-12 sm:pb-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[0.68rem] font-semibold tracking-wider text-[#818cf8] bg-[#6366f1]/10 border border-[#6366f1]/25 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
            DOMAINS & EXPERTISE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            Industries We <em className="italic text-[#6366f1]">Transform</em>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm">
            Tailored AI and custom software solutions designed for your specific industry domain.
          </p>
        </div>

        {/* 6 Primary Featured Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredIndustries.map((ind, index) => (
            <Card key={index} {...ind} />
          ))}
        </div>

        {/* Additional Industry Pills for Clean Breathing Room */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-white/10">
          <span className="text-xs font-medium text-gray-500 mr-2">Also serving:</span>
          {secondaryIndustries.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111624] border border-[#6366f1]/20 text-xs font-medium text-gray-300 hover:text-white hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 hover:shadow-[0_0_12px_rgba(99,102,241,0.2)] transition-all duration-200"
            >
              <item.icon className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

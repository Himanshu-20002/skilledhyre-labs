import React from "react";
import Section from "@/components/common/Section";
import Link from "next/link";
import { SparklesIcon, CpuChipIcon, CubeTransparentIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Products & Platforms | SkilledHyre Labs",
  description:
    "Explore enterprise products, AI solutions, and engineering platforms developed by SkilledHyre Labs.",
};

export default function ProductsPage() {
  const products = [
    {
      id: "ai-enterprise-copilots",
      name: "Enterprise Copilots",
      description: "Custom internal knowledge copilots and LLM workflows designed for enterprise operations.",
      icon: CpuChipIcon,
      status: "Available on Demand",
    },
    {
      id: "workflow-automation-suites",
      name: "Workflow Automation Suite",
      description: "Autonomous task orchestrators and system synchronizers connecting ERPs and CRMs.",
      icon: SparklesIcon,
      status: "Production Ready",
    },
    {
      id: "custom-erp-framework",
      name: "Modular ERP Extension Kits",
      description: "Lightweight, cloud-native ERP modules tailored for regional and international enterprise scaling.",
      icon: CubeTransparentIcon,
      status: "Enterprise Tier",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07040d] text-white pt-24 pb-16">
      <Section className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#a5b4fc] text-xs font-semibold uppercase tracking-wider mb-4">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>SkilledHyre Labs Platforms</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Intelligent Products &amp; Platforms
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Purpose-built engineering frameworks, AI systems, and enterprise accelerators engineered for modern organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#6366f1]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-[#a5b4fc] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold">
                    {product.status}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs font-semibold text-[#38bdf8] hover:text-white transition-colors"
                  >
                    Inquire for Demo &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}

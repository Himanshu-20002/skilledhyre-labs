"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import SkilledHyreLogo from "@/components/common/SkilledHyreLogo";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Innovation",
    href: "/innovation",
    children: [
      {
        name: "Digital Transformation",
        href: "/innovation/digital-transformation",
      },
      {
        name: "AI-First Product Design",
        href: "/innovation/ai-product-design",
      },
      {
        name: "Cloud-Native Architecture",
        href: "/innovation/cloud-architecture",
      },
      {
        name: "Automation Systems",
        href: "/innovation/automation-intelligent-systems",
      },
      {
        name: "Emerging Technologies",
        href: "/innovation/emerging-technologies",
      },
    ],
  },
  {
    name: "AI Engineering",
    href: "/ai-engineering",
    children: [
      {
        name: "Generative AI Solutions",
        href: "/ai-engineering/generative-ai",
      },
      {
        name: "Predictive Analytics",
        href: "/ai-engineering/predictive-analytics",
      },
      { name: "Machine Learning", href: "/ai-engineering/machine-learning" },
      {
        name: "Intelligent Automation",
        href: "/ai-engineering/intelligent-automation",
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Website Development", href: "/services/website-development" },
      { name: "Custom Software", href: "/services/custom-software" },
      {
        name: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      { name: "Cloud & DevOps", href: "/services/cloud-devops" },
      { name: "Product Engineering", href: "/services/product-engineering" },
      { name: "ERP", href: "/services/erp" },
      {
        name: "SAP Consulting",
        href: "/services/sap-consulting",
        children: [
          {
            name: "SAP Strategy & Consulting",
            href: "/services/sap-consulting#consulting",
          },
          {
            name: "SAP Implementation",
            href: "/services/sap-consulting#implementation",
          },
          { name: "SAP Migration", href: "/services/sap-consulting#migration" },
          {
            name: "SAP Custom Development",
            href: "/services/sap-consulting#custom-development",
          },
          {
            name: "SAP Integration",
            href: "/services/sap-consulting#integration",
          },
          {
            name: "SAP Cloud Solutions",
            href: "/services/sap-consulting#cloud-solutions",
          },
          {
            name: "SAP Support & Maintenance",
            href: "/services/sap-consulting#support-maintenance",
          },
        ],
      },
    ],
  },
  { name: "Tech Talent", href: "/tech-talent" },
  {
    name: "Industries",
    href: "/industries",
    children: [
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "FinTech & Banking", href: "/industries/fintech-banking" },
      { name: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Education & EdTech", href: "/industries/education-edtech" },
      {
        name: "Logistics & Supply Chain",
        href: "/industries/logistics-supply-chain",
      },
      { name: "Marketing & Media", href: "/industries/marketing-media" },
      { name: "Travel and Tourism", href: "/industries/travel-tourism" },
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "HR and Recruitment", href: "/industries/hr-recruitment" },
      { name: "Insurance", href: "/industries/insurance" },
      {
        name: "Food & Restaurant Industry",
        href: "/industries/food-restaurant",
      },
    ],
  },
  { name: "Blogs", href: "/blogs" },
  { name: "News", href: "/news" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null); // For mobile
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null); // For mobile nested

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
    setActiveNestedSubmenu(null);
  };

  const toggleNestedSubmenu = (name) => {
    setActiveNestedSubmenu(activeNestedSubmenu === name ? null : name);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
        ? "py-3 bg-[#0A0F19]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/20"
        : "py-5 bg-[#0A0F19]/60 backdrop-blur-md border-b border-white/5"
        }`}
    >
      <nav
        className="container mx-auto px-4 sm:px-6 flex items-center justify-between max-w-[1240px]"
        aria-label="Global"
      >
        {/* Brand / Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center group">
            <img
              src="/logo_new (2).png"
              alt="SkilledHyre Labs Logo"
              className="h-14 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2.5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation Items (Desktop) */}
        <div className="hidden lg:flex lg:gap-x-1 items-center bg-white/[0.03] p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md shadow-inner">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 text-xs font-medium leading-5 text-gray-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                <span>{item.name}</span>
                {item.children && (
                  <ChevronDownIcon className="w-3 h-3 text-gray-400 group-hover:text-cyan-400 transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>

              {/* Level 1 Submenu */}
              {item.children && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-64 z-50">
                  <div className="bg-[#0D1322]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-2 ring-1 ring-black/50">
                    {item.children.map((child) => (
                      <div key={child.name} className="relative group/sub">
                        <Link
                          href={child.href}
                          className="flex items-center justify-between px-3.5 py-2.5 text-xs font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-indigo-500/10 rounded-xl transition-all duration-150"
                        >
                          <span className="truncate">{child.name}</span>
                          {child.children && (
                            <ChevronDownIcon className="w-3.5 h-3.5 -rotate-90 text-gray-400 group-hover/sub:text-cyan-400" />
                          )}
                        </Link>

                        {/* Level 2 Submenu (Flyout) */}
                        {child.children && (
                          <div className="absolute left-full top-0 ml-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 transform translate-x-2 group-hover/sub:translate-x-0 w-64 z-50">
                            <div className="bg-[#0D1322]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl p-2 ring-1 ring-black/50">
                              {child.children.map((subChild) => (
                                <Link
                                  key={subChild.name}
                                  href={subChild.href}
                                  className="block px-3.5 py-2 text-xs font-medium text-gray-400 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subChild.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-full group bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-600 group-hover:from-cyan-500 group-hover:to-purple-600 hover:text-white text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0A0F19] rounded-full group-hover:bg-opacity-0 flex items-center gap-1.5">
              <SparklesIcon className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white transition-colors" />
              <span>Get Started</span>
              <ArrowRightIcon className="w-3 h-3 text-cyan-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0A0F19]/95 backdrop-blur-2xl px-6 py-6 sm:max-w-sm border-l border-white/10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-xl bg-cyan-500/20 p-1 border border-cyan-500/30">
                  <Image
                    src="/logo_new.png"
                    alt="SkilledHyre Labs Logo"
                    width={32}
                    height={32}
                    className="rounded-md"
                  />
                </div>
                <span className="text-base font-bold text-white">
                  Skilled<span className="text-cyan-400">Hyre</span> Labs
                </span>
              </Link>
              <button
                type="button"
                className="rounded-lg p-2 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="divide-y divide-white/10">
                <div className="space-y-1 py-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className="block rounded-xl px-3 py-2.5 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 flex-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.children && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleSubmenu(item.name);
                            }}
                            className="p-2 text-gray-400 hover:text-white"
                          >
                            <ChevronDownIcon
                              className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === item.name ? "rotate-180 text-cyan-400" : ""
                                }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Mobile Level 1 */}
                      {item.children && activeSubmenu === item.name && (
                        <div className="pl-3 border-l border-cyan-500/30 ml-3 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <div key={child.name}>
                              <div className="flex items-center justify-between">
                                <Link
                                  href={child.href}
                                  className="block px-3 py-2 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg flex-1"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {child.name}
                                </Link>
                                {child.children && (
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      toggleNestedSubmenu(child.name);
                                    }}
                                    className="p-1.5 text-gray-400 hover:text-white"
                                  >
                                    <ChevronDownIcon
                                      className={`w-3.5 h-3.5 transition-transform duration-200 ${activeNestedSubmenu === child.name
                                        ? "rotate-180 text-cyan-400"
                                        : ""
                                        }`}
                                    />
                                  </button>
                                )}
                              </div>

                              {/* Mobile Level 2 */}
                              {child.children &&
                                activeNestedSubmenu === child.name && (
                                  <div className="pl-3 border-l border-white/10 ml-3 mt-1 space-y-1">
                                    {child.children.map((subChild) => (
                                      <Link
                                        key={subChild.name}
                                        href={subChild.href}
                                        className="block px-3 py-1.5 text-[11px] text-gray-400 hover:text-white hover:bg-white/5 rounded-md"
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {subChild.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:brightness-110 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <SparklesIcon className="w-4 h-4 text-white" />
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


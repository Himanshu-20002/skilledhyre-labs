"use client";
import Link from "next/link";
import {
  RocketLaunchIcon,
  CpuChipIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  UsersIcon,
  BeakerIcon,
  ArrowPathIcon,
  HeartIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  Cog6ToothIcon,
  AcademicCapIcon,
  TruckIcon,
  MegaphoneIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  BuildingStorefrontIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import Section from "../components/common/Section";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import HeroVideoScreen from "@/components/home/HeroVideoScreen";
import HeroTechBackground from "@/components/home/HeroTechBackground";
// import CounterItem from "@/components/common/CounterItem";
import TestimonialCard from "@/components/home/TestimonialCard";
import BlogCard from "@/components/home/BlogCard";
import CounterItem from "@/components/common/CounterItem";
import { useEffect, useState } from "react";

import { ServicesScroll } from '@/components/services-storytelling'
import ReviewsSection from '@/components/ReviewsSection';
import MatrixTextRotator from "@/components/common/MatrixTextRotator";
import ScrollExpand from "@/components/ScrollExpand";


export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch Blogs
    fetch("/api/blogs")
      .then((res) => {
        if (res.ok) return res.json();
        return [];
      })
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));

    // Fetch News
    fetch("/api/news")
      .then((res) => {
        if (res.ok) return res.json();
        return [];
      })
      .then((data) => setNews(data))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  const cards = [
    {
      title: "AI Engineering & Solutions",
      description:
        "Design, build, and deploy AI systems that drive automation, intelligence, and business growth.",
      icon: CpuChipIcon,
      href: "/ai-engineering",
    },
    {
      title: "Custom Software Development",
      description:
        "Tailor-made software built for performance, scalability, and long-term success.",
      icon: CodeBracketIcon,
      href: "/services",
    },
    {
      title: "Web & App Development",
      description:
        "Modern, fast, and secure web & mobile applications using cutting-edge frameworks.",
      icon: GlobeAltIcon,
      href: "/services",
    },
    {
      title: "Tech Talent On Demand",
      description:
        "Hire skilled developers and AI engineers instantly for your projects.",
      icon: UsersIcon,
      href: "/tech-talent",
    },
    {
      title: "Product Engineering & MVPs",
      description: "From idea to MVP to enterprise-grade product.",
      icon: BeakerIcon,
      href: "/services",
    },
    {
      title: "End-to-End Delivery",
      description: "Complete lifecycle support from strategy to scale.",
      icon: ArrowPathIcon,
      href: "/end-to-end",
    },
    {
      title: "ERP Solutions",
      description:
        "Build scalable ERP systems to streamline enterprise operations.",
      icon: Cog6ToothIcon,
      href: "/services/erp",
    },
    {
      title: "SAP Consulting",
      description:
        "Connect your enterprise systems with intelligent SAP solutions.",
      icon: UsersIcon,
      href: "/services/sap-consulting",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black/10">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-4 overflow-hidden bg-[#060814]">
        {/* Animated 3D Atmospheric Background */}
        <HeroTechBackground />

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 w-full flex flex-col items-center">
          {/* Centered Hero Typography & CTA Stack */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6">

            {/* 1. Eyebrow */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[0.68rem] sm:text-[0.72rem] font-mono font-semibold tracking-widest text-indigo-300 bg-indigo-950/40 border border-indigo-500/25 uppercase mb-8 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
              SKILLEDHYRE LABS
            </span>

            {/* 2. Main Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] mb-6 text-center">
              <span className="block text-white">Engineering Digital</span>
              <span className="block text-[#818cf8]">Intelligence.</span>
            </h1>

            {/* 3. Supporting Copy */}
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl text-center">
              SkilledHyre Labs engineers AI-powered products, scalable software, and intelligent digital systems for startups and enterprises.
            </p>

            {/* 4. CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all duration-300 hover:border-white/30"
              >
                Talk to Our Experts
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* GSAP Pinned ScrollExpand Media Showcase */}
      <ScrollExpand
        src="/home_page_hero_section_1.jpeg"
        alt="Product platform hero"
        title="Built to Scale"
        scrollHint="Scroll to expand"
        startWidth={82}
        startHeight={65}
        startRadius={24}
        endRadius={0}
        mediaZoom={1.2}
        scrollDistance={1.2}
        smoothing={0.5}
        overlayScrim={0.5}
      >
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Engineering Every Detail
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Scalable cloud systems, AI architectures, and enterprise products designed for high performance.
          </p>
        </div>
      </ScrollExpand>



      <Section>
        <ServicesScroll />
      </Section>

      {/* Industries Section */}
      <Section className="relative bg-transparent py-12">
        <div className="max-w-[1240px] mx-auto px-6">
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
            {[
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
            ].map((ind, index) => (
              <Card key={index} {...ind} />
            ))}
          </div>

          {/* Additional Industry Pills for Clean Breathing Room */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-white/10">
            <span className="text-xs font-medium text-gray-500 mr-2">Also serving:</span>
            {[
              { name: "Education & EdTech", href: "/industries/education-edtech", icon: AcademicCapIcon },
              { name: "Marketing & Media", href: "/industries/marketing-media", icon: MegaphoneIcon },
              { name: "Travel & Tourism", href: "/industries/travel-tourism", icon: GlobeAmericasIcon },
              { name: "HR & Recruitment", href: "/industries/hr-recruitment", icon: BriefcaseIcon },
              { name: "Insurance", href: "/industries/insurance", icon: ShieldCheckIcon },
              { name: "Food & Restaurant", href: "/industries/food-restaurant", icon: BuildingStorefrontIcon },
            ].map((item, idx) => (
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

      {/* Stats Section */}
      <Section className="bg-indigo-500/10">
        <div className="max-w-[1170px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: 98, label: "Projects Delivered", suffix: "+" },
              { value: 50, label: "Expert Engineers", suffix: "+" },
              { value: 12, label: "Countries Served", suffix: "" },
              { value: 5, label: "Years Experience", suffix: "+" },
            ].map((stat, i) => (
              <CounterItem key={i} {...stat} />
            ))}
          </div>
        </div>
      </Section>


      <Section>
        <ReviewsSection />
      </Section>

      {/* Latest Insights / Blogs Section */}
      <Section className="relative bg-transparent">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[0.68rem] font-semibold tracking-wider text-[#818cf8] bg-[#6366f1]/10 border border-[#6366f1]/25 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
              LATEST INSIGHTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Trends & <em className="italic text-[#6366f1]">Engineering Insights</em>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm">
              Explore technology trends, AI architectures, and strategies for digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.slice(0, 3).map((blog) => (
              <div key={blog._id} className="h-full">
                <BlogCard
                  title={blog.title}
                  date={new Date(blog.createdAt).toLocaleDateString()}
                  excerpt={blog.shortDescription}
                  image={blog.cardImage || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"}
                  slug={`/blogs/${blog._id}`}
                />
              </div>
            ))}
            {blogs.length === 0 && (
              <div className="col-span-full py-8 text-center text-xs text-gray-500 bg-[#0d101d] rounded-xl border border-white/10">
                No recent blogs available
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Company News Section */}
      <Section className="relative bg-transparent py-10">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[0.68rem] font-semibold tracking-wider text-[#818cf8] bg-[#6366f1]/10 border border-[#6366f1]/25 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
              NEWS & ANNOUNCEMENTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Company <em className="italic text-[#6366f1]">News</em>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm">
              Announcements, press releases, and latest updates from SkilledHyre Labs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.slice(0, 3).map((item) => (
              <div key={item._id} className="h-full">
                <BlogCard
                  title={item.title}
                  date={new Date(item.createdAt).toLocaleDateString()}
                  excerpt={item.shortDescription}
                  image={item.cardImage || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"}
                  slug={`/news/${item._id}`}
                />
              </div>
            ))}
            {news.length === 0 && (
              <div className="col-span-full py-8 text-center text-xs text-gray-500 bg-[#0d101d] rounded-xl border border-white/10">
                No recent news available
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}

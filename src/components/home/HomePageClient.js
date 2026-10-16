"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Section from "@/components/common/Section";
import HeroSection from "@/components/landing-page/HeroSection";
import IndustriesSection from "@/components/landing-page/IndustriesSection";
import StatsSection from "@/components/landing-page/StatsSection";
import InsightsSection from "@/components/landing-page/InsightsSection";
import NewsSection from "@/components/landing-page/NewsSection";
import FloatingSpheresBackground from "@/components/common/FloatingSpheresBackground";

// Dynamically load heavy below-the-fold storytelling & review sections with zero CLS layout reservation
const ServicesScroll = dynamic(
  () =>
    import("@/components/services-storytelling").then(
      (mod) => mod.ServicesScroll
    ),
  {
    ssr: false,
    loading: () => <div className="min-h-[650px] w-full bg-transparent" />,
  }
);

const ReviewsSection = dynamic(
  () => import("@/components/ReviewsSection"),
  {
    ssr: false,
    loading: () => <div className="min-h-[450px] w-full bg-transparent" />,
  }
);

export default function HomePageClient() {
  const [blogs, setBlogs] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    let isMounted = true;

    // Concurrently fetch blogs & news in parallel to eliminate waterfall delay
    Promise.all([
      fetch("/api/blogs").then((res) => (res.ok ? res.json() : [])),
      fetch("/api/news").then((res) => (res.ok ? res.json() : [])),
    ])
      .then(([blogsData, newsData]) => {
        if (!isMounted) return;
        setBlogs(blogsData);
        setNews(newsData);
      })
      .catch((err) => {
        if (isMounted) console.error("Error loading home insights:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black/10">
      {/* 1. Hero Section (Eagerly rendered for maximum FCP & LCP) */}
      <HeroSection />

      {/* 2. Services Storytelling Scroll Section (Dynamically loaded) */}
      <Section id="services">
        <ServicesScroll />
      </Section>

      {/* 3. Industries Section */}
      <IndustriesSection />

      {/* 4. Stats Section */}
      <StatsSection />

      {/* 5. Client Reviews Section */}
      <ReviewsSection />

      {/* 6. Latest Insights & News */}
      <div className="relative">
        <FloatingSpheresBackground variant="insights" />
        <InsightsSection blogs={blogs} />
        <NewsSection news={news} />
      </div>
    </div>
  );
}

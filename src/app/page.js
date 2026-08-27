"use client";
import { useEffect, useState } from "react";
import Section from "@/components/common/Section";
import { ServicesScroll } from "@/components/services-storytelling";
import ReviewsSection from "@/components/ReviewsSection";
import FloatingSpheresBackground from "@/components/common/FloatingSpheresBackground";
import {
  HeroSection,

  IndustriesSection,
  StatsSection,
  InsightsSection,
  NewsSection,
} from "@/components/landing-page";



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

  return (
    <div className="flex flex-col min-h-screen bg-black/10">
      {/* Hero Section */}
      <HeroSection />


      {/* Services Storytelling Scroll Section */}
      <Section id="services">
        <ServicesScroll />
      </Section>

      {/* Industries Section */}
      <IndustriesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Client Reviews Section */}
      <Section>
        <ReviewsSection />
      </Section>

      {/* Latest Insights & News — shared seamless ambient background */}
      <div className="relative">
        <FloatingSpheresBackground variant="insights" />
        <InsightsSection blogs={blogs} />
        <NewsSection news={news} />
      </div>
    </div>
  );
}

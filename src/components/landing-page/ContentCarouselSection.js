"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import BlogCard from "@/components/home/BlogCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function ContentCarouselSection({
  badgeText = "LATEST INSIGHTS",
  titlePrefix = "Trends &",
  titleHighlight = "Engineering Insights",
  description = "Explore technology trends, AI architectures, and strategies for digital transformation.",
  items = [],
  itemSlugPrefix = "/blogs",
  emptyText = "No recent items available",
}) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Fast & optimized scroll boundary check without layout thrashing
  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();

    // 120 FPS passive scroll listener with requestAnimationFrame throttling
    let rafId = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        updateScrollState();
        rafId = null;
      });
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [items, updateScrollState]);

  // Smooth scroll by visible container width with native GPU acceleration
  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-transparent py-16 sm:py-20">
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header with Title & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[0.68rem] font-semibold tracking-wider text-[#818cf8] bg-[#6366f1]/10 border border-[#6366f1]/25 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
              {badgeText}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              {titlePrefix}{" "}
              <em className="italic text-[#6366f1]">{titleHighlight}</em>
            </h2>
            <p className="text-gray-400 max-w-xl text-xs sm:text-sm">
              {description}
            </p>
          </div>

          {/* Navigation Controls */}
          {items.length > 3 && (
            <div className="flex items-center gap-2 self-end md:self-auto flex-shrink-0">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous items"
                className={`p-2.5 rounded-full border backdrop-blur-md transition-all duration-200 transform-gpu ${
                  canScrollLeft
                    ? "bg-[#121624]/80 text-white border-white/15 hover:bg-[#6366f1] hover:border-[#6366f1] hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(99,102,241,0.2)] cursor-pointer"
                    : "bg-white/[0.02] text-gray-600 border-white/5 cursor-not-allowed opacity-30"
                }`}
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next items"
                className={`p-2.5 rounded-full border backdrop-blur-md transition-all duration-200 transform-gpu ${
                  canScrollRight
                    ? "bg-[#121624]/80 text-white border-white/15 hover:bg-[#6366f1] hover:border-[#6366f1] hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(99,102,241,0.2)] cursor-pointer"
                    : "bg-white/[0.02] text-gray-600 border-white/5 cursor-not-allowed opacity-30"
                }`}
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* 120 FPS GPU-Accelerated Scroll Track (Exactly 3 cards visible on desktop) */}
        {items.length > 0 ? (
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 px-1 -mx-1 scrollbar-none [will-change:scroll-position] [-webkit-overflow-scrolling:touch]"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {items.map((item) => (
              <div
                key={item._id}
                className="w-[85vw] max-w-[340px] xs:w-[320px] sm:max-w-none sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start h-auto flex flex-col"
              >
                <BlogCard
                  title={item.title}
                  date={new Date(item.createdAt).toLocaleDateString()}
                  excerpt={item.shortDescription}
                  image={
                    item.cardImage ||
                    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800"
                  }
                  slug={`${itemSlugPrefix}/${item._id}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center text-xs text-gray-500 bg-[#0d101d]/60 backdrop-blur-md rounded-xl border border-white/10">
            {emptyText}
          </div>
        )}
      </div>
    </section>
  );
}

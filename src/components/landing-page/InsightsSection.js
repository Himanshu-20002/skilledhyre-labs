"use client";
import ContentCarouselSection from "./ContentCarouselSection";

export default function InsightsSection({ blogs = [] }) {
  return (
    <ContentCarouselSection
      badgeText="LATEST INSIGHTS"
      titlePrefix="Trends &"
      titleHighlight="Engineering Insights"
      description="Explore technology trends, AI architectures, and strategies for digital transformation."
      items={blogs}
      itemSlugPrefix="/blogs"
      emptyText="No recent blogs available"
    />
  );
}

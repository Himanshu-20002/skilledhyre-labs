"use client";
import ContentCarouselSection from "./ContentCarouselSection";

export default function NewsSection({ news = [] }) {
  return (
    <ContentCarouselSection
      badgeText="NEWS & ANNOUNCEMENTS"
      titlePrefix="Company"
      titleHighlight="News"
      description="Announcements, press releases, and latest updates from SkilledHyre Labs."
      items={news}
      itemSlugPrefix="/news"
      emptyText="No recent news available"
    />
  );
}

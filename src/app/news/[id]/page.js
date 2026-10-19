import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connectToDatabase } from "@/utils/db";
import { buildIdQuery } from "@/utils/idQuery";
import News from "@/models/News";
import Section from "@/components/common/Section";
import JsonLd from "@/components/common/JsonLd";
import { getOptimizedImageUrl } from "@/utils/imageOptimizer";
import {
  ReadingProgressBar,
  ArticleShareBar,
} from "@/components/blog/ArticleInteractions";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skilledhyrelabs.com";

function getReadingTime(sections, content) {
  const combinedText = [
    ...(Array.isArray(sections) ? sections.map((s) => s.html || "") : []),
    content || "",
  ].join(" ");
  const wordCount = combinedText
    .replace(/<[^>]*>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(2, Math.ceil(wordCount / 220));
}

// Server-side dynamic metadata for Google and social media preview cards
export async function generateMetadata({ params }) {
  const { id } = await params;
  if (!id) return {};

  try {
    await connectToDatabase();
    const news = await News.findOne(buildIdQuery(id)).lean();
    if (!news) return {};

    const title = news.title;
    const description =
      news.shortDescription ||
      news.heading ||
      "Company updates, press releases, and industry announcements from SkilledHyre Labs.";
    const imageUrl = news.cardImage || `${siteUrl}/logo_neww.png`;

    return {
      title: `${title} | Company News | SkilledHyre Labs`,
      description,
      alternates: {
        canonical: `/news/${id}`,
      },
      openGraph: {
        title,
        description,
        url: `${siteUrl}/news/${id}`,
        siteName: "SkilledHyre Labs",
        type: "article",
        publishedTime: news.createdAt,
        modifiedTime: news.updatedAt || news.createdAt,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: news.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [imageUrl],
        creator: "@SkilledHyreLabs",
      },
    };
  } catch (error) {
    console.error("[generateMetadata] Error fetching news item:", error);
    return {};
  }
}

export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  if (!id) notFound();

  await connectToDatabase();
  let news = null;
  try {
    news = await News.findOne(buildIdQuery(id)).lean();
  } catch (error) {
    console.error("Error fetching news item:", error);
  }

  if (!news) {
    notFound();
  }

  const readingTime = getReadingTime(news.sections, news.content);
  const formattedDate = news.createdAt
    ? new Date(news.createdAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    : "Recently Updated";

  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: news.title,
    description: news.shortDescription || news.heading || news.title,
    image: news.cardImage || `${siteUrl}/logo_neww.png`,
    datePublished: news.createdAt,
    dateModified: news.updatedAt || news.createdAt,
    author: {
      "@type": "Organization",
      name: "SkilledHyre Labs",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "SkilledHyre Labs",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo_neww.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/news/${id}`,
    },
  };

  return (
    <>
      <ReadingProgressBar />
      <article className="relative pt-12 sm:pt-16 pb-20 overflow-hidden">
        {/* Ambient Top Glow Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#38bdf8]/15 via-[#6366f1]/10 to-transparent blur-3xl pointer-events-none -z-10" />

        <JsonLd data={newsArticleSchema} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Navigation & Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 mb-8 border-b border-white/10">
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-200"
            >
              <span className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-[#38bdf8] group-hover:bg-[#38bdf8]/20 transition-all duration-200">
                <ArrowLeftIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              </span>
              <span>Back to all news</span>
            </Link>

            <ArticleShareBar title={news.title} url={`${siteUrl}/news/${id}`} />
          </div>

          {/* Article Header */}
          <header className="mb-10 text-left">
            {/* Meta Pill Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/25 tracking-wider uppercase text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                Company News & Updates
              </span>
              <span className="text-gray-600 hidden xs:inline">•</span>
              <span
                className="text-gray-400 flex items-center gap-1.5 text-xs"
                suppressHydrationWarning
              >
                <CalendarIcon className="w-3.5 h-3.5 text-[#38bdf8]" />
                {formattedDate}
              </span>
              <span className="text-gray-600 hidden xs:inline">•</span>
              <span className="text-gray-400 flex items-center gap-1.5 text-xs">
                <ClockIcon className="w-3.5 h-3.5 text-[#38bdf8]" />
                {readingTime} min read
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.18] mb-6">
              {news.title}
            </h1>

            {/* Editorial Subtitle / Lead Paragraph */}
            {news.heading && (
              <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed border-l-2 border-[#38bdf8] pl-4 sm:pl-5 py-1 bg-white/[0.02] rounded-r-xl">
                {news.heading}
              </p>
            )}
          </header>

          {/* Featured Hero Banner Image */}
          {news.cardImage && (
            <div className="relative w-full h-[260px] sm:h-[420px] md:h-[480px] mb-12 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(56,189,248,0.2)] bg-[#0d101d] group">
              <Image
                src={getOptimizedImageUrl(news.cardImage, 1200)}
                alt={news.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 950px"
                quality={85}
                className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Content / Rich Prose Typography Section */}
          <div className="article-prose bg-[#0d101d]/30 border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-sm shadow-xl">
            {news?.sections && Array.isArray(news.sections) && news.sections.length > 0 ? (
              news.sections.map((section, index) => (
                <div
                  key={section.id || index}
                  dangerouslySetInnerHTML={{ __html: section.html }}
                />
              ))
            ) : news?.content ? (
              <div dangerouslySetInnerHTML={{ __html: news.content }} />
            ) : (
              <p className="text-gray-400 italic">No content available for this news item.</p>
            )}
          </div>

          {/* Bottom Share & Navigation Row */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <span>Back to all news</span>
            </Link>

            <ArticleShareBar title={news.title} url={`${siteUrl}/news/${id}`} />
          </div>
        </div>
      </article>
    </>
  );
}

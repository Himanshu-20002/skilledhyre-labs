import { notFound } from "next/navigation";
import { connectToDatabase } from "@/utils/db";
import News from "@/models/News";
import Section from "@/components/common/Section";
import JsonLd from "@/components/common/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skilledhyrelabs.com";

// Server-side dynamic metadata for Google and social media preview cards
export async function generateMetadata({ params }) {
  const { id } = await params;
  if (!id) return {};

  try {
    await connectToDatabase();
    const news = await News.findById(id).lean();
    if (!news) return {};

    const title = news.title;
    const description =
      news.shortDescription ||
      news.heading ||
      "Company updates, press releases, and industry announcements from SkilledHyre Labs.";
    const imageUrl = news.cardImage || `${siteUrl}/logo_clean.png`;

    return {
      title,
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
    news = await News.findById(id).lean();
  } catch (error) {
    console.error("Error fetching news item:", error);
  }

  if (!news) {
    notFound();
  }

  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: news.title,
    description: news.shortDescription || news.heading || news.title,
    image: news.cardImage || `${siteUrl}/logo_clean.png`,
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
        url: `${siteUrl}/logo_clean.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/news/${id}`,
    },
  };

  return (
    <article className="pt-32 pb-20">
      <JsonLd data={newsArticleSchema} />
      <Section>
        <div className="max-w-[800px] mx-auto px-6">
          {/* Header */}
          <div className="mb-10 text-center">
            <div
              className="text-sm text-indigo-400 font-medium mb-3 uppercase tracking-wider"
              suppressHydrationWarning
            >
              {new Date(news.createdAt).toLocaleDateString()}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {news.title}
            </h1>
            {news.heading && (
              <p className="text-xl text-gray-300 italic mb-6">
                {news.heading}
              </p>
            )}
          </div>

          {/* Featured Image */}
          {news.cardImage && (
            <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10">
              <img
                src={news.cardImage}
                alt={news.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}

          {/* Content / Rich Sections */}
          <div className="space-y-10">
            {news?.sections &&
              Array.isArray(news.sections) &&
              news.sections.map((section, index) => (
                <div
                  key={index}
                  className="relative backdrop-blur-sm"
                  style={{
                    padding: "0 0 0 5%",
                    margin: 0,
                  }}
                >
                  <div
                    className="max-w-none"
                    dangerouslySetInnerHTML={{ __html: section.html }}
                  />
                </div>
              ))}
          </div>
        </div>
      </Section>
    </article>
  );
}

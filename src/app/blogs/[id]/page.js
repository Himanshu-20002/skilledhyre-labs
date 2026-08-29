import { notFound } from "next/navigation";
import { connectToDatabase } from "@/utils/db";
import Blog from "@/models/Blog";
import Section from "@/components/common/Section";
import JsonLd from "@/components/common/JsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skilledhyrelabs.com";

// Server-side dynamic metadata for Google and social media preview cards
export async function generateMetadata({ params }) {
  const { id } = await params;
  if (!id) return {};

  try {
    await connectToDatabase();
    const blog = await Blog.findById(id).lean();
    if (!blog) return {};

    const title = blog.title;
    const description =
      blog.shortDescription ||
      blog.heading ||
      "Explore engineering insights, digital architectures, and AI technology trends from SkilledHyre Labs.";
    const imageUrl = blog.cardImage || `${siteUrl}/logo_clean.png`;

    return {
      title,
      description,
      alternates: {
        canonical: `/blogs/${id}`,
      },
      openGraph: {
        title,
        description,
        url: `${siteUrl}/blogs/${id}`,
        siteName: "SkilledHyre Labs",
        type: "article",
        publishedTime: blog.createdAt,
        modifiedTime: blog.updatedAt || blog.createdAt,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: blog.title,
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
    console.error("[generateMetadata] Error fetching blog:", error);
    return {};
  }
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  if (!id) notFound();

  await connectToDatabase();
  let blog = null;
  try {
    blog = await Blog.findById(id).lean();
  } catch (error) {
    console.error("Error fetching blog:", error);
  }

  if (!blog) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.shortDescription || blog.heading || blog.title,
    image: blog.cardImage || `${siteUrl}/logo_clean.png`,
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
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
      "@id": `${siteUrl}/blogs/${id}`,
    },
  };

  return (
    <article className="pt-12 pb-10">
      <JsonLd data={articleSchema} />
      <Section>
        <div className="max-w-[800px] mx-auto px-6">
          {/* Header */}
          <div className="mb-10 text-center">
            <div
              className="text-sm text-indigo-400 font-medium mb-3 uppercase tracking-wider"
              suppressHydrationWarning
            >
              {new Date(blog.createdAt).toLocaleDateString()}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {blog.title}
            </h1>
            {blog.heading && (
              <p className="text-xl text-gray-300 italic mb-6">
                {blog.heading}
              </p>
            )}
          </div>

          {/* Featured Image */}
          {blog.cardImage && (
            <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10">
              <img
                src={blog.cardImage}
                alt={blog.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}

          {/* Content / Rich Sections */}
          <div className="space-y-10">
            {blog?.sections &&
              Array.isArray(blog.sections) &&
              blog.sections.map((section, index) => (
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

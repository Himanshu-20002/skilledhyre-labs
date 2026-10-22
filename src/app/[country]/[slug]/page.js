import { notFound } from "next/navigation";
import {
  getInternationalPage,
  getAllActivePageParams,
} from "@/data/international/registry";
import { getHreflangAlternates } from "@/data/international/hreflang";
import InternationalPageTemplate from "@/components/international/InternationalPageTemplate";

// Strict quality gate: return 404 on unapproved/unverified routes
export const dynamicParams = false;

// Pre-render all active landing pages at build time
export async function generateStaticParams() {
  return getAllActivePageParams();
}

// Generate dynamic SEO metadata with reciprocal hreflang links
export async function generateMetadata({ params }) {
  const { country, slug } = await params;
  const page = getInternationalPage(country, slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  const alternates = getHreflangAlternates(page.seo.hreflangGroup);

  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
    alternates: {
      canonical: page.seo.canonicalUrl,
      languages: alternates,
    },
    openGraph: {
      title: page.seo.title,
      description: page.seo.description,
      url: page.seo.canonicalUrl,
      type: "website",
      siteName: "SkilledHyre Labs",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.seo.title,
      description: page.seo.description,
      creator: "@SkilledHyreLabs",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
  };
}

export default async function InternationalLandingRoute({ params }) {
  const { country, slug } = await params;
  const page = getInternationalPage(country, slug);

  if (!page) {
    notFound();
  }

  return <InternationalPageTemplate pageData={page} />;
}

import ClientHeaderWrapper from "@/components/ClientHeaderWrapper";
import JsonLd from "@/components/common/JsonLd";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skilledhyrelabs.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SkilledHyre Labs | Enterprise AI & Software Engineering",
    template: "%s | SkilledHyre Labs",
  },
  description:
    "SkilledHyre Labs architects high-performance AI engines, scalable cloud platforms, and intelligent digital systems for high-growth enterprises.",
  keywords: [
    "AI Engineering",
    "Enterprise Software",
    "Cloud Systems",
    "Digital Transformation",
    "Generative AI",
    "Machine Learning",
    "SAP Consulting",
    "ERP Solutions",
    "SkilledHyre Labs",
    "On-Demand Tech Talent",
  ],
  authors: [{ name: "SkilledHyre Labs", url: siteUrl }],
  creator: "SkilledHyre Labs",
  publisher: "SkilledHyre Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "SkilledHyre Labs",
    title: "SkilledHyre Labs | Enterprise AI & Software Engineering",
    description:
      "Architecting high-performance AI engines, scalable cloud software, and intelligent digital systems for high-growth enterprises.",
    images: [
      {
        url: "/logo_clean.png",
        width: 1200,
        height: 630,
        alt: "SkilledHyre Labs - Enterprise AI Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkilledHyre Labs | Enterprise AI & Software Engineering",
    description:
      "Architecting high-performance AI engines, scalable cloud software, and intelligent digital systems for high-growth enterprises.",
    images: ["/logo_clean.png"],
    creator: "@SkilledHyreLabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SkilledHyre Labs",
  url: siteUrl,
  logo: `${siteUrl}/logo_clean.png`,
  description:
    "Full-lifecycle AI and software engineering laboratory delivering scalable cloud platforms, intelligent automated systems, and enterprise tech solutions.",
  sameAs: [
    "https://www.linkedin.com/company/skilledhyre",
    "https://twitter.com/skilledhyre",
    "https://github.com/skilledhyre",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support & Sales",
    url: `${siteUrl}/contact`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SkilledHyre Labs",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/blogs?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col font-sans"
        suppressHydrationWarning={true}
      >
        {/* Client component handles admin detection */}
        <ClientHeaderWrapper>{children}</ClientHeaderWrapper>
      </body>
    </html>
  );
}

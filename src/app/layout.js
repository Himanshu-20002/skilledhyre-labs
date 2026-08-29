import ClientHeaderWrapper from "@/components/ClientHeaderWrapper";
import JsonLd from "@/components/common/JsonLd";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://skilledhyrelabs.com";

export const viewport = {
  themeColor: "#07040d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SkilledHyre Labs | AI & Software Engineering",
    template: "%s | SkilledHyre Labs",
  },
  description:
    "SkilledHyre Labs builds high-performance AI systems, scalable software products, SaaS platforms, and intelligent digital architectures for modern enterprises.",
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
      "SkilledHyre Labs builds high-performance AI systems, scalable software products, SaaS platforms, and intelligent digital architectures for modern enterprises.",
    images: [
      {
        url: `${siteUrl}/logo_clean.png`,
        width: 1200,
        height: 630,
        alt: "SkilledHyre Labs — AI & Software Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkilledHyre Labs | AI & Software Engineering",
    description:
      "SkilledHyre Labs builds high-performance AI systems, scalable software products, SaaS platforms, and intelligent digital architectures for modern enterprises.",
    images: [`${siteUrl}/logo_clean.png`],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-token",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "bing-site-verification-token",
    },
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
        <meta
          name="description"
          content="SkilledHyre Labs builds high-performance AI systems, scalable software products, SaaS platforms, and intelligent digital architectures for modern enterprises."
        />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col font-sans"
        suppressHydrationWarning={true}
      >
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {/* Client component handles admin detection */}
        <ClientHeaderWrapper>{children}</ClientHeaderWrapper>
      </body>
    </html>
  );
}


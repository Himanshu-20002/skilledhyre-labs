import HomePageClient from "@/components/home/HomePageClient";

export const metadata = {
  title: "SkilledHyre Labs | AI & Software Engineering",
  description:
    "SkilledHyre Labs builds high-performance AI systems, scalable software products, SaaS platforms, and intelligent digital architectures for modern enterprises.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SkilledHyre Labs | AI & Software Engineering",
    description:
      "SkilledHyre Labs builds high-performance AI systems, scalable software products, SaaS platforms, and intelligent digital architectures for modern enterprises.",
    url: "https://skilledhyrelabs.com",
    images: [
      {
        url: "https://skilledhyrelabs.com/logo_clean.png",
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
    images: ["https://skilledhyrelabs.com/logo_clean.png"],
  },
};

export default function Home() {
  return <HomePageClient />;
}

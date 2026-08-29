export const metadata = {
  title: "Engineering Blogs & Insights",
  description:
    "Explore technical articles, AI architectures, full-stack software development patterns, and cloud systems engineering from SkilledHyre Labs.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Engineering Blogs & Insights | SkilledHyre Labs",
    description:
      "Explore technical articles, AI architectures, full-stack software development patterns, and cloud systems engineering from SkilledHyre Labs.",
    url: "/blogs",
  },
};

export default function BlogsLayout({ children }) {
  return <>{children}</>;
}

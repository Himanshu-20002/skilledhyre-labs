export const metadata = {
  title: "Company News & Updates",
  description:
    "Official announcements, engineering updates, product launches, and company news from SkilledHyre Labs.",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "Company News & Updates | SkilledHyre Labs",
    description:
      "Official announcements, engineering updates, product launches, and company news from SkilledHyre Labs.",
    url: "/news",
  },
};

export default function NewsLayout({ children }) {
  return <>{children}</>;
}

import Hero from "../../../components/website-development/Hero";
import WhyMatter from "../../../components/website-development/WhyMatter";
import Approach from "../../../components/website-development/Approach";
import Types from "../../../components/website-development/Types";
import Security from "../../../components/website-development/Security";
import Benefits from "../../../components/website-development/Benefits";
import Industries from "../../../components/website-development/Industries";
import CTA from "../../../components/website-development/CTA";

export const metadata = {
  title: "Web Application Development",
  description:
    "High-speed, responsive web applications and enterprise platforms built with Next.js, React, and modern full-stack architectures by SkilledHyre Labs.",
  alternates: {
    canonical: "/services/website-development",
  },
  openGraph: {
    title: "Web Application Development | SkilledHyre Labs",
    description:
      "High-speed, responsive web applications and enterprise platforms built with Next.js, React, and modern full-stack architectures.",
    url: "/services/website-development",
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <Hero />
      <WhyMatter />
      <Approach />
      <Types />
      <Security />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}

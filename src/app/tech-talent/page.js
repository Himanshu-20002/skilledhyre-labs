import Hero from "../../components/tech-talent/Hero";
import WhyMatter from "../../components/tech-talent/WhyMatter";
import EngagementModels from "../../components/tech-talent/EngagementModels";
import Expertise from "../../components/tech-talent/Expertise";
import Security from "../../components/tech-talent/Security";
import Benefits from "../../components/tech-talent/Benefits";
import Industries from "../../components/tech-talent/Industries";
import CTA from "../../components/tech-talent/CTA";

export const metadata = {
  title: "Tech Talent & Dedicated Engineering Pods",
  description:
    "Hire pre-vetted senior software engineers, AI developers, and cloud architects to accelerate your product roadmap with SkilledHyre Labs.",
  alternates: {
    canonical: "/tech-talent",
  },
  openGraph: {
    title: "Tech Talent & Dedicated Engineering Pods | SkilledHyre Labs",
    description:
      "Hire pre-vetted senior software engineers, AI developers, and cloud architects to accelerate your product roadmap with SkilledHyre Labs.",
    url: "/tech-talent",
  },
};

export default function TechTalentPage() {
  return (
    <>
      <Hero />
      <WhyMatter />
      <EngagementModels />
      <Expertise />
      <Security />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}

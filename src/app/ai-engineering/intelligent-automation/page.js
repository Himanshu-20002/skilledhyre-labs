import Hero from "../../../components/intelligent-automation/Hero";
import WhatIsIA from "../../../components/intelligent-automation/WhatIsIA";
import WhyMatter from "../../../components/intelligent-automation/WhyMatter";
import Framework from "../../../components/intelligent-automation/Framework";
import Applications from "../../../components/intelligent-automation/Applications";
import Security from "../../../components/intelligent-automation/Security";
import Benefits from "../../../components/intelligent-automation/Benefits";
import Industries from "../../../components/intelligent-automation/Industries";
import CTA from "../../../components/intelligent-automation/CTA";

export const metadata = {
  title: "Intelligent Automation & AI Agents",
  description:
    "Autonomous AI agents, robotic process automation (RPA), and self-optimizing workflow engines designed for high-efficiency enterprise operations by SkilledHyre Labs.",
  alternates: {
    canonical: "/ai-engineering/intelligent-automation",
  },
  openGraph: {
    title: "Intelligent Automation & AI Agents | SkilledHyre Labs",
    description:
      "Autonomous AI agents, RPA, and self-optimizing workflow engines designed for high-efficiency enterprise operations.",
    url: "/ai-engineering/intelligent-automation",
  },
};

export default function IntelligentAutomationPage() {
  return (
    <>
      <Hero />
      <WhatIsIA />
      <WhyMatter />
      <Framework />
      <Applications />
      <Security />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}

import Hero from "../../../components/generative-ai/Hero";
import WhatIsGenerativeAI from "../../../components/generative-ai/WhatIsGenerativeAI";
import WhyItMatters from "../../../components/generative-ai/WhyItMatters";
import Approach from "../../../components/generative-ai/Approach";
import Applications from "../../../components/generative-ai/Applications";
import Security from "../../../components/generative-ai/Security";
import Advantages from "../../../components/generative-ai/Advantages";
import Industries from "../../../components/generative-ai/Industries";
import CTA from "../../../components/generative-ai/CTA";

export const metadata = {
  title: "Generative AI Development",
  description:
    "Custom LLM applications, retrieval-augmented generation (RAG), and generative AI systems engineered for enterprise automation by SkilledHyre Labs.",
  alternates: {
    canonical: "/ai-engineering/generative-ai",
  },
  openGraph: {
    title: "Generative AI Development | SkilledHyre Labs",
    description:
      "Custom LLM applications, retrieval-augmented generation (RAG), and generative AI systems engineered for enterprise automation.",
    url: "/ai-engineering/generative-ai",
  },
};

export default function GenerativeAIPage() {
  return (
    <>
      <Hero />
      <WhatIsGenerativeAI />
      <WhyItMatters />
      <Approach />
      <Applications />
      <Security />
      <Advantages />
      <Industries />
      <CTA />
    </>
  );
}

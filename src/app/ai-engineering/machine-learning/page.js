import Hero from "../../../components/machine-learning/Hero";
import WhatIsML from "../../../components/machine-learning/WhatIsML";
import WhyMatter from "../../../components/machine-learning/WhyMatter";
import Approach from "../../../components/machine-learning/Approach";
import Applications from "../../../components/machine-learning/Applications";
import MLInfrastructure from "../../../components/machine-learning/MLInfrastructure";
import Benefits from "../../../components/machine-learning/Benefits";
import Industries from "../../../components/machine-learning/Industries";
import CTA from "../../../components/machine-learning/CTA";

export const metadata = {
  title: "Machine Learning Engineering",
  description:
    "Production-grade Machine Learning models, MLOps pipelines, computer vision, and predictive systems engineered for enterprise scale by SkilledHyre Labs.",
  alternates: {
    canonical: "/ai-engineering/machine-learning",
  },
  openGraph: {
    title: "Machine Learning Engineering | SkilledHyre Labs",
    description:
      "Production-grade Machine Learning models, MLOps pipelines, computer vision, and predictive systems engineered for enterprise scale.",
    url: "/ai-engineering/machine-learning",
  },
};

export default function MachineLearningPage() {
  return (
    <>
      <Hero />
      <WhatIsML />
      <WhyMatter />
      <Approach />
      <Applications />
      <MLInfrastructure />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}

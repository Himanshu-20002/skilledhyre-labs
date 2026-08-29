import Hero from "../../../components/cloud-devops/Hero";
import WhyCloud from "../../../components/cloud-devops/WhyCloud";
import Approach from "../../../components/cloud-devops/Approach";
import Capabilities from "../../../components/cloud-devops/Capabilities";
import Security from "../../../components/cloud-devops/Security";
import Benefits from "../../../components/cloud-devops/Benefits";
import Industries from "../../../components/cloud-devops/Industries";
import CTA from "../../../components/cloud-devops/CTA";

export const metadata = {
  title: "Cloud & DevOps Engineering",
  description:
    "Scale cloud infrastructure with confidence. Automated CI/CD pipelines, Kubernetes orchestration, and resilient cloud architectures by SkilledHyre Labs.",
  alternates: {
    canonical: "/services/cloud-devops",
  },
  openGraph: {
    title: "Cloud & DevOps Engineering | SkilledHyre Labs",
    description:
      "Automated CI/CD pipelines, Kubernetes orchestration, and resilient cloud architectures by SkilledHyre Labs.",
    url: "/services/cloud-devops",
  },
};

export default function CloudDevOpsPage() {
  return (
    <>
      <Hero />
      <WhyCloud />
      <Approach />
      <Capabilities />
      <Security />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}

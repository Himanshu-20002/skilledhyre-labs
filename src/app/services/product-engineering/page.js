import Hero from "../../../components/product-engineering/Hero";
import WhyProduct from "../../../components/product-engineering/WhyProduct";
import Approach from "../../../components/product-engineering/Approach";
import Capabilities from "../../../components/product-engineering/Capabilities";
import Security from "../../../components/product-engineering/Security";
import Benefits from "../../../components/product-engineering/Benefits";
import Industries from "../../../components/product-engineering/Industries";
import CTA from "../../../components/product-engineering/CTA";

export const metadata = {
  title: "Product Engineering",
  description:
    "End-to-end digital product engineering from architecture and UI/UX design to full-stack implementation and market scaling by SkilledHyre Labs.",
  alternates: {
    canonical: "/services/product-engineering",
  },
  openGraph: {
    title: "Product Engineering | SkilledHyre Labs",
    description:
      "End-to-end digital product engineering from architecture and UI/UX design to full-stack implementation and market scaling by SkilledHyre Labs.",
    url: "/services/product-engineering",
  },
};

export default function ProductEngineeringPage() {
  return (
    <>
      <Hero />
      <WhyProduct />
      <Approach />
      <Capabilities />
      <Security />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}

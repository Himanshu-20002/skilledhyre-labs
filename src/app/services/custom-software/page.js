import Hero from "../../../components/custom-software/Hero";
import WhyCustom from "../../../components/custom-software/WhyCustom";
import Approach from "../../../components/custom-software/Approach";
import ProductTypes from "../../../components/custom-software/ProductTypes";
import Security from "../../../components/custom-software/Security";
import Benefits from "../../../components/custom-software/Benefits";
import Industries from "../../../components/custom-software/Industries";
import CTA from "../../../components/custom-software/CTA";

export const metadata = {
  title: "Custom Software Development",
  description:
    "Tailored, scalable, and high-performance software applications designed specifically for your enterprise workflows by SkilledHyre Labs.",
  alternates: {
    canonical: "/services/custom-software",
  },
  openGraph: {
    title: "Custom Software Development | SkilledHyre Labs",
    description:
      "Tailored, scalable, and high-performance software applications designed specifically for your enterprise workflows by SkilledHyre Labs.",
    url: "/services/custom-software",
  },
};

export default function CustomSoftwarePage() {
  return (
    <>
      <Hero />
      <WhyCustom />
      <Approach />
      <ProductTypes />
      <Security />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}

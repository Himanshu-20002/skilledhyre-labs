import Hero from "../../../components/mobile-app-development/Hero";
import WhyMobile from "../../../components/mobile-app-development/WhyMobile";
import Approach from "../../../components/mobile-app-development/Approach";
import AppTypes from "../../../components/mobile-app-development/AppTypes";
import Security from "../../../components/mobile-app-development/Security";
import Benefits from "../../../components/mobile-app-development/Benefits";
import Industries from "../../../components/mobile-app-development/Industries";
import CTA from "../../../components/mobile-app-development/CTA";

export const metadata = {
  title: "Mobile App Development",
  description:
    "Native iOS, Android, and cross-platform Flutter/React Native mobile applications engineered for high performance, smooth UX, and enterprise scale.",
  alternates: {
    canonical: "/services/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development | SkilledHyre Labs",
    description:
      "Native iOS, Android, and cross-platform Flutter/React Native mobile applications engineered for high performance and enterprise scale.",
    url: "/services/mobile-app-development",
  },
};

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <Hero />
      <WhyMobile />
      <Approach />
      <AppTypes />
      <Security />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}

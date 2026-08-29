import Link from "next/link";
import Section from "@/components/common/Section";
import About from "@/components/landing-page/reusable-about-component/About";
import JsonLd from "@/components/common/JsonLd";
import {
  SparklesIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "About Us",
  description:
    "Learn about SkilledHyre Labs — an AI and software engineering laboratory building scalable cloud architectures, intelligent platforms, and dedicated tech pods.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | SkilledHyre Labs",
    description:
      "Learn about SkilledHyre Labs — an AI and software engineering laboratory building scalable cloud architectures, intelligent platforms, and dedicated tech pods.",
    url: "/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About SkilledHyre Labs",
  url: "https://skilledhyrelabs.com/about",
  description:
    "SkilledHyre Labs is an enterprise software and AI laboratory building intelligent, scalable digital futures.",
  mainEntity: {
    "@type": "Organization",
    name: "SkilledHyre Labs",
    url: "https://skilledhyrelabs.com",
    foundingDate: "2024",
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Architecture",
      "Enterprise Software Engineering",
      "Digital Transformation",
    ],
  },
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Engineering Excellence",
      desc: "We write clean, resilient, and enterprise-grade code that scales effortlessly to millions of transactions.",
      icon: CpuChipIcon,
    },
    {
      title: "AI-First Innovation",
      desc: "Harnessing state-of-the-art LLMs, predictive neural networks, and autonomous automation pipelines.",
      icon: SparklesIcon,
    },
    {
      title: "Client-Centric Agility",
      desc: "Fast iteration cycles, transparent communication, and rapid turnaround with zero technical debt.",
      icon: RocketLaunchIcon,
    },
    {
      title: "Enterprise Trust & Security",
      desc: "SOC2-compliant architectures, zero-trust data access, and military-grade encryption protocols.",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#07040d] text-white min-h-screen">
      <JsonLd data={aboutSchema} />

      {/* Hero Section */}
      <div className="max-w-[1240px] mx-auto px-6 text-center mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider text-purple-300 bg-purple-950/70 border border-purple-500/30 uppercase mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
          <SparklesIcon className="w-3.5 h-3.5 text-purple-400" />
          <span>About SkilledHyre Labs</span>
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Architecting The Next Era of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-purple-400">
            Intelligent Systems
          </span>
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-10">
          SkilledHyre Labs is a specialized technology laboratory partner for
          ambitious enterprises, venture-backed scale-ups, and global brands. We
          bridge deep AI intelligence with battle-tested cloud engineering.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all"
          >
            Partner With Us
          </Link>
          <Link
            href="/services/custom-software"
            className="px-8 py-3.5 rounded-full text-sm font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Interactive Story Section */}
      <About />

      {/* Core Values Section */}
      <div className="max-w-[1240px] mx-auto px-6 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Our Core Principles
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            The foundational standards guiding every line of code, architecture decision, and client relationship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val) => (
            <div
              key={val.title}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
                <val.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

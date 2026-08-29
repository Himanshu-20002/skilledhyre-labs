import {
  ArrowTrendingUpIcon,
  MapIcon,
  PaintBrushIcon,
  CogIcon,
  CheckBadgeIcon,
  RocketLaunchIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";
import Section from "../../components/common/Section";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

export const metadata = {
  title: "End-to-End Software Engineering & Delivery",
  description:
    "Full-lifecycle software engineering from discovery and UI/UX design to cloud backend architectures and DevOps scaling by SkilledHyre Labs.",
  alternates: {
    canonical: "/end-to-end",
  },
  openGraph: {
    title: "End-to-End Software Engineering & Delivery | SkilledHyre Labs",
    description:
      "Full-lifecycle software engineering from discovery and UI/UX design to cloud backend architectures and DevOps scaling.",
    url: "/end-to-end",
  },
};

export default function EndToEnd() {
  const steps = [
    {
      title: "Discovery & Planning",
      description: "We define the roadmap, scope, and technical architecture.",
      icon: MapIcon,
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces.",
      icon: PaintBrushIcon,
    },
    {
      title: "Development & Integration",
      description: "Writing clean, scalable code and connecting systems.",
      icon: CogIcon,
    },
    {
      title: "Testing & QA",
      description: "Ensuring bug-free and performant delivery.",
      icon: CheckBadgeIcon,
    },
    {
      title: "Deployment & Scaling",
      description: "Launching to production and managing infrastructure.",
      icon: RocketLaunchIcon,
    },
    {
      title: "Maintenance & Support",
      description: "Continuous improvement and reliability.",
      icon: WrenchIcon,
    },
  ];

  return (
    <>
      <Section className="text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm mb-8">
          <ArrowTrendingUpIcon className="w-4 h-4" />
          <span>Process</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Complete Software <br />{" "}
          <span className="text-gradient-primary">Lifecycle Management</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
          From idea to deployment and beyond, we manage everything.
        </p>
      </Section>

      <Section className="bg-white/5 relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />

        <div className="space-y-12 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center justify-between ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-full lg:w-5/12">
                <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-indigo-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
              <div className="hidden lg:flex w-2/12 justify-center">
                <div className="w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-900/50" />
              </div>
              <div className="w-full lg:w-5/12" />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button href="/contact">Start Your Journey</Button>
        </div>
      </Section>
    </>
  );
}

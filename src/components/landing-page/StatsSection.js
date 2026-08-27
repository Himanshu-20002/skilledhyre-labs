"use client";
import Section from "@/components/common/Section";
import CounterItem from "@/components/common/CounterItem";

const stats = [
  { value: 98, label: "Projects Delivered", suffix: "+" },
  { value: 50, label: "Expert Engineers", suffix: "+" },
  { value: 12, label: "Countries Served", suffix: "" },
  { value: 5, label: "Years Experience", suffix: "+" },
];

export default function StatsSection() {
  return (
    <Section className="bg-indigo-500/10">
      <div className="max-w-[1170px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <CounterItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </Section>
  );
}

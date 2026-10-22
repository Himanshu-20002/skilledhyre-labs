import React from "react";
import Link from "next/link";
import Section from "./Section";
import * as Icons from "@heroicons/react/24/outline";
import Card from "./Card";

export default function GenericServicePage({ content }) {
  const { category, title, descriptions, sections, cta } = content;

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="text-center pt-20 pb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8">
          <span className="animate-pulse">●</span>
          <span>{category}</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white max-w-5xl mx-auto leading-tight">
          {title.split(" ").map((word, i) =>
            i >= title.split(" ").length - 3 ? (
              <span
                key={i}
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
              >
                {word}{" "}
              </span>
            ) : (
              <span key={i}>{word} </span>
            ),
          )}
        </h1>
        <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-gray-400 mb-10">
          {descriptions.map((desc, index) => (
            <p key={index} className="leading-relaxed">
              {desc}
            </p>
          ))}
        </div>
      </Section>

      {/* Sections */}
      {sections?.map((section, idx) => (
        <Section
          key={idx}
          id={section.id}
          className={idx % 2 === 0 ? "bg-[#0B0F19]" : "bg-transparent"}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              {section.title}
            </h2>
            {section.description && (
              <p className="text-gray-400 mb-12 text-center max-w-3xl mx-auto text-lg">
                {section.description}
              </p>
            )}

            <div
              className={`grid grid-cols-1 ${section.items.length === 1 ? "md:grid-cols-1 max-w-2xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"} gap-6 mt-8`}
            >
              {section.items.map((item, itemIdx) => {
                const IconComponent =
                  typeof item.icon === "string" ? Icons[item.icon] : item.icon;

                if (!item.description)
                  return (
                    // <div className="grid md:grid-cols-3 gap-8">
                    // {integrations.map((item, index) => (
                    <div
                      key={itemIdx}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all"
                    >
                      <div className="mb-4 inline-block p-3 rounded-xl bg-indigo-500/10">
                        {/* <item.icon className="w-8 h-8 text-indigo-400" /> */}
                        <IconComponent className="w-8 h-8 text-indigo-500 shrink-0" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                    // ))}
                    // </div>
                  );

                if (item.description)
                  return (
                    <Card
                      key={itemIdx}
                      title={item.title}
                      description={item.description}
                      icon={item.icon_2}
                      // icon={
                      //   <IconComponent className="w-8 h-8 text-indigo-500 shrink-0" />
                      // }
                      className="bg-white/5 border-white/10"
                    />
                  );
                return (
                  <div
                    key={itemIdx}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                      {IconComponent ? (
                        <IconComponent className="w-6 h-6 text-indigo-500 shrink-0" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0"></span>
                      )}
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-gray-400 text-sm leading-relaxed pl-5">
                        {item.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section className="text-center pb-24 border-t border-white/5 pt-24">
        <div className="p-12 rounded-3xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {cta.title}
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            {cta.buttonText}
          </Link>
        </div>
      </Section>
    </div>
  );
}

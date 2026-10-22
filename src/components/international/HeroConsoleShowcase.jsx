"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CpuChipIcon,
  CloudIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const SHOWCASES = [
  {
    id: "ai-ops",
    title: "AI & Neural Ops",
    label: "Neural Architecture",
    icon: CpuChipIcon,
    image: "/images/international/ai-dashboard-preview.jpg",
    metric: "45ms P99 Latency",
    tag: "Autonomous Workflows",
  },
  {
    id: "cloud-arch",
    title: "Cloud & Microservices",
    label: "Distributed Pipelines",
    icon: CloudIcon,
    image: "/images/international/cloud-architecture-preview.jpg",
    metric: "Kubernetes + Serverless",
    tag: "High Availability",
  },
  {
    id: "delivery-gov",
    title: "Delivery Console",
    label: "Sprint Velocity",
    icon: ChartBarIcon,
    image: "/images/international/engineering-delivery-preview.jpg",
    metric: "98% CI Pass Rate",
    tag: "Zero-Downtime Deploy",
  },
];

export default function HeroConsoleShowcase({ countryName = "Global" }) {
  const [activeTab, setActiveTab] = useState(0);
  const current = SHOWCASES[activeTab];

  return (
    <div className="relative max-w-5xl mx-auto mt-10 sm:mt-14 select-none">
      {/* Ambient background glow halo */}
      <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-purple-600/20 via-indigo-500/25 to-cyan-400/20 rounded-3xl blur-2xl pointer-events-none transform-gpu" />

      {/* Main Console Chassis */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-[#090d18]/95 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Top Window Bar */}
        <div className="px-4 py-3 sm:px-6 bg-[#070a13] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          {/* Mac-style Window Controls */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-[11px] font-mono text-gray-400 ml-2 hidden sm:inline">
              skilledhyre-production-hub // {countryName.toLowerCase()}
            </span>
          </div>

          {/* Interactive Showcase Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10">
            {SHOWCASES.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#6366f1] to-[#38bdf8] text-white shadow-md shadow-indigo-500/30"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{tab.title}</span>
                  <span className="sm:hidden">{tab.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Live Pulse Status */}
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>Active Telemetry</span>
          </div>
        </div>

        {/* Viewport Frame */}
        <div className="relative aspect-[16/9] w-full bg-[#05070e] overflow-hidden group">
          <Image
            src={current.image}
            alt={`${current.title} interface preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />

          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d18]/80 via-transparent to-transparent pointer-events-none" />

          {/* Left Floating Micro Telemetry Card */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3.5 py-2 rounded-xl bg-[#090d18]/90 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <BoltIcon className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase text-gray-400 leading-none">
                {current.tag}
              </div>
              <div className="text-xs font-bold text-white font-mono mt-0.5">
                {current.metric}
              </div>
            </div>
          </div>

          {/* Right Floating Security Badge */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3.5 py-2 rounded-xl bg-[#090d18]/90 backdrop-blur-md border border-white/15 shadow-xl hidden sm:flex items-center gap-2">
            <ShieldCheckIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold text-gray-200">
              Dedicated {countryName} Delivery Squad
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

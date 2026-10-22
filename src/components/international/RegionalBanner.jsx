"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GlobeAltIcon,
  XMarkIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function RegionalBanner() {
  const pathname = usePathname();
  const [geoData, setGeoData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Avoid running on admin or backend pages
    if (pathname.startsWith("/admin")) return;

    // Check if dismissed previously in localStorage
    const checkGeo = async () => {
      try {
        const cacheKey = "skilledhyre_geo_dismissed";
        const dismissedUntil = localStorage.getItem(cacheKey);
        if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
          return;
        }

        const res = await fetch("/api/geo");
        if (!res.ok) return;
        const data = await res.json();

        if (data?.matchedHub) {
          const hubPrefix = `/${data.matchedHub.code}`;
          // If the user is already on this country's hub or landing page, don't show banner
          if (pathname.startsWith(hubPrefix)) {
            return;
          }

          setGeoData(data);
          // Smooth delay so it doesn't jarringly pop up immediately upon render
          const timer = setTimeout(() => setIsVisible(true), 1200);
          return () => clearTimeout(timer);
        }
      } catch (err) {
        // Silently catch to keep the experience completely frictionless
      }
    };

    checkGeo();
  }, [pathname]);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      // Dismiss for 7 days
      const expire = Date.now() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem("skilledhyre_geo_dismissed", expire.toString());
    } catch (e) {}
  };

  if (!isVisible || !geoData?.matchedHub) {
    return null;
  }

  const { matchedHub, city, region } = geoData;
  const locationDescriptor = city || region ? `${city || region}, ` : "";

  return (
    <div
      role="region"
      aria-label="Regional Hub Recommendation"
      className="fixed bottom-5 right-4 sm:right-6 z-50 max-w-[calc(100vw-2rem)] sm:max-w-md w-full animate-in fade-in slide-in-from-bottom-5 duration-500"
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#0b0c16]/95 backdrop-blur-xl border border-white/15 p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-white">
        {/* Subtle radial glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#38bdf8]/15 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          aria-label="Dismiss recommendation"
          className="absolute top-3 right-3 p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <XMarkIcon className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3.5 pr-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38bdf8]/20 to-[#6366f1]/20 border border-white/15 flex items-center justify-center text-xl shrink-0">
            {matchedHub.flag}
          </div>

          <div className="flex-1">
            <div className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-400 mb-1">
              <SparklesIcon className="w-3 h-3" />
              <span>Detected Market</span>
            </div>
            <h4 className="text-sm font-bold text-white leading-tight">
              Visiting from {locationDescriptor}{matchedHub.name}?
            </h4>
            <p className="text-xs text-gray-300 mt-1 leading-relaxed">
              Explore localized SLA guarantees, time-zone overlap, and regional delivery models.
            </p>

            <div className="mt-3 flex items-center gap-2">
              <Link
                href={matchedHub.hubUrl}
                onClick={() => setIsVisible(false)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#6366f1] text-xs font-semibold text-white hover:brightness-110 transition shadow-[0_0_15px_rgba(99,102,241,0.4)]"
              >
                <span>View {matchedHub.name} Hub</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={handleDismiss}
                className="px-3 py-1.5 text-xs text-gray-400 hover:text-white transition"
              >
                Continue here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

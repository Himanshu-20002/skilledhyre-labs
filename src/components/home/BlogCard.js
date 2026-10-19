"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CalendarIcon } from "@heroicons/react/24/outline";

import { getOptimizedImageUrl } from "@/utils/imageOptimizer";
export { getOptimizedImageUrl };

export default function BlogCard({ title, date, excerpt, image, slug }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(() => getOptimizedImageUrl(image, 640));

  return (
    <div className="flex-shrink-0 w-full h-full flex flex-col group rounded-xl bg-gradient-to-br from-[#121624] via-[#0d101d] to-[#0a0c16] border border-[#6366f1]/20 overflow-hidden hover:border-[#6366f1]/50 hover:shadow-[0_8px_25px_rgba(99,102,241,0.22)] transition-all duration-300 transform hover:-translate-y-1">
      {/* Compact Image container with subtle shimmer skeleton and vignette blend gradient */}
      <div className="relative h-36 w-full overflow-hidden flex-shrink-0 bg-[#080a10]">
        {/* Shimmer skeleton placeholder */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-[#121624] via-[#1a2035] to-[#121624] transition-opacity duration-500 ${
            isLoaded ? "opacity-0 pointer-events-none" : "opacity-100 animate-pulse"
          }`}
        />

        <Image
          src={imgSrc}
          alt={title || "Blog cover"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          quality={75}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setImgSrc(FALLBACK_IMAGE);
            setIsLoaded(true);
          }}
          className={`object-cover group-hover:scale-105 transition-all duration-500 ${
            isLoaded ? "opacity-90 group-hover:opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d101d] via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>

      {/* Content body */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1.5 text-[#38bdf8] text-[0.68rem] font-semibold uppercase tracking-wider mb-2" suppressHydrationWarning>
          <CalendarIcon className="w-3 h-3 text-[#6366f1]" />
          <span>{date}</span>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#818cf8] transition-colors duration-200 mb-2 line-clamp-2 leading-snug">
          {title}
        </h3>

        <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2 flex-grow">
          {excerpt}
        </p>

        <Link
          href={slug}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#818cf8] group-hover:text-[#38bdf8] transition-all duration-200 mt-auto"
        >
          <span>Read Article</span>
          <ArrowRightIcon className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

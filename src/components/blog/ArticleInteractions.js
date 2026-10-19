"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ShareIcon,
  CheckIcon,
  LinkIcon,
  ClockIcon,
  CalendarIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

export function ReadingProgressBar() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const percent = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        setCompletion(percent);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#a855f7] z-50 transition-all duration-75"
      style={{ width: `${completion}%` }}
    />
  );
}

export function ArticleHeaderNav({ backHref = "/blogs", backText = "All Insights" }) {
  return (
    <div className="flex items-center justify-between py-4 mb-6 border-b border-white/10">
      <Link
        href={backHref}
        className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-200"
      >
        <span className="p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-[#6366f1] group-hover:bg-[#6366f1]/20 transition-all duration-200">
          <ArrowLeftIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
        </span>
        <span>{backText}</span>
      </Link>
    </div>
  );
}

export function ArticleShareBar({ title, url }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const shareUrl = url || window.location.href;
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      // Fallback
    }
  };

  const handleShareTwitter = () => {
    const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
    const text = encodeURIComponent(title || "Check out this article from SkilledHyre Labs");
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareLinkedIn = () => {
    const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500 font-medium hidden sm:inline">Share:</span>
      <button
        onClick={handleCopy}
        type="button"
        title="Copy article link"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs text-gray-300 hover:text-white transition-all duration-200 cursor-pointer"
      >
        {copied ? (
          <>
            <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400 font-medium">Copied!</span>
          </>
        ) : (
          <>
            <LinkIcon className="w-3.5 h-3.5 text-gray-400" />
            <span>Copy Link</span>
          </>
        )}
      </button>

      <button
        onClick={handleShareTwitter}
        type="button"
        title="Share on X"
        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all duration-200 cursor-pointer"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </button>

      <button
        onClick={handleShareLinkedIn}
        type="button"
        title="Share on LinkedIn"
        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white transition-all duration-200 cursor-pointer"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </button>
    </div>
  );
}

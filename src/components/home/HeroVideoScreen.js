"use client";
import React, { useState, useRef } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

export default function HeroVideoScreen({ 
  videoSrc = "/demo-video.mp4", 
  poster = "/home_page_hero_section.jpeg" 
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full max-w-[1000px] mx-auto mt-4 mb-2 select-none">
      {/* Soft Ambient Radial Blue/Indigo Glow behind Video Screen */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(79,70,229,0.35)_0%,_rgba(56,189,248,0.2)_40%,_transparent_75%)] blur-3xl pointer-events-none scale-105" />

      {/* Video Screen Frame Container */}
      <div className="relative z-10 rounded-2xl sm:rounded-3xl bg-[#0b0e1b]/90 border border-white/15 p-2 sm:p-3 backdrop-blur-2xl shadow-[0_25px_90px_rgba(0,0,0,0.8)] overflow-hidden group">
        
        {/* Top Mac-Style Window Header Bar */}
        <div className="flex items-center justify-between px-4 py-2 sm:py-2.5 border-b border-white/10 bg-white/5 rounded-t-xl sm:rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-[0.68rem] font-mono text-gray-400 tracking-wide flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            SkilledHyre Labs Platform Demo
          </div>
          <div className="w-12" /> {/* Spacer for balance */}
        </div>

        {/* Video / Screen Display Box */}
        <div className="relative w-full aspect-video rounded-b-xl sm:rounded-b-2xl bg-black overflow-hidden flex items-center justify-center">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            playsInline
            loop
            muted
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover"
          />

          {/* Video Overlay / Play Button Trigger */}
          <div 
            onClick={togglePlay}
            className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
              isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
            }`}
          >
            <button 
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-indigo-600/90 hover:bg-indigo-500 border border-white/30 text-white flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.7)] transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? (
                <PauseIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              ) : (
                <PlayIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
              )}
            </button>
            
            {!isPlaying && (
              <span className="mt-4 text-xs font-semibold tracking-wider text-white uppercase bg-black/60 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                Click to Watch Platform Overview
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

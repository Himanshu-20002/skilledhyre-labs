"use client";
import React from "react";

// Scattered organic star coordinates with varied timing & colors
const SCATTERED_STARS = [
  // Far Left
  { top: "14%", left: "7%", size: 9, color: "#c084fc", anim: "starPulseA", duration: "7s", delay: "0s" },
  { top: "32%", left: "15%", size: 6, color: "#818cf8", anim: "starPulseB", duration: "9s", delay: "2.4s" },
  { top: "54%", left: "6%", size: 10, color: "#38bdf8", anim: "starPulseC", duration: "8s", delay: "1.1s" },
  { top: "72%", left: "18%", size: 7, color: "#d8b4fe", anim: "starPulseA", duration: "10s", delay: "4.2s" },

  // Mid Left & Upper Center
  { top: "10%", left: "28%", size: 6, color: "#e9d5ff", anim: "starPulseB", duration: "8.5s", delay: "3.1s" },
  { top: "24%", left: "22%", size: 8, color: "#c084fc", anim: "starPulseC", duration: "6.5s", delay: "0.5s" },

  // Upper Right & Mid Right
  { top: "12%", right: "26%", size: 7, color: "#818cf8", anim: "starPulseA", duration: "9.5s", delay: "1.8s" },
  { top: "26%", right: "20%", size: 9, color: "#c084fc", anim: "starPulseB", duration: "7.2s", delay: "4.8s" },

  // Far Right
  { top: "16%", right: "8%", size: 10, color: "#38bdf8", anim: "starPulseC", duration: "8.2s", delay: "2.9s" },
  { top: "36%", right: "13%", size: 6, color: "#d8b4fe", anim: "starPulseA", duration: "11s", delay: "0.8s" },
  { top: "56%", right: "6%", size: 8, color: "#c084fc", anim: "starPulseB", duration: "7.8s", delay: "3.6s" },
  { top: "75%", right: "16%", size: 7, color: "#818cf8", anim: "starPulseC", duration: "9.8s", delay: "1.5s" },
];

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <style>{`
        @keyframes spotlightBreath {
          0%, 100% {
            opacity: 0.85;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.06);
          }
        }
        @keyframes starPulseA {
          0%, 100% {
            opacity: 0;
            transform: scale(0.35) translateY(0);
          }
          30%, 65% {
            opacity: 0.85;
            transform: scale(1.1) translateY(-6px);
          }
          85% {
            opacity: 0;
            transform: scale(0.4) translateY(-10px);
          }
        }
        @keyframes starPulseB {
          0%, 100% {
            opacity: 0;
            transform: scale(0.3) translateY(0);
          }
          20%, 55% {
            opacity: 0.75;
            transform: scale(1.15) translateY(-8px);
          }
          75% {
            opacity: 0;
            transform: scale(0.35) translateY(-12px);
          }
        }
        @keyframes starPulseC {
          0%, 100% {
            opacity: 0;
            transform: scale(0.35) translateY(0);
          }
          40%, 75% {
            opacity: 0.9;
            transform: scale(1.2) translateY(-7px);
          }
          90% {
            opacity: 0;
            transform: scale(0.3) translateY(-11px);
          }
        }
        .animate-spotlight {
          animation: spotlightBreath 8s ease-in-out infinite;
        }
      `}</style>

      {/* 1. Deep Core Dark Background & Radial Glow Halo */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 75% 55% at 50% 40%, rgba(168, 85, 247, 0.34) 0%, rgba(139, 92, 246, 0.18) 35%, rgba(79, 70, 229, 0.06) 70%, transparent 100%),
            #07040d
          `,
        }}
      />

      {/* 2. Top-Center Radiant Spotlight Beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] pointer-events-none transform-gpu animate-spotlight"
        style={{
          background: `radial-gradient(ellipse 65% 85% at 50% 0%, rgba(192, 132, 252, 0.32) 0%, rgba(168, 85, 247, 0.16) 40%, rgba(99, 102, 241, 0.04) 70%, transparent 100%)`,
          filter: "blur(20px)",
        }}
      />

      {/* 3. Scattered Minimalist Star-Nodes (✦) with Random Fade & Twinkle */}
      {SCATTERED_STARS.map((star, idx) => {
        const { top, left, right, size, color, anim, duration, delay } = star;
        const posStyle = {
          top,
          ...(left ? { left } : {}),
          ...(right ? { right } : {}),
          color,
          animation: `${anim} ${duration} ease-in-out infinite ${delay}`,
        };

        return (
          <div
            key={idx}
            className="absolute pointer-events-none transform-gpu will-change-transform"
            style={posStyle}
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_6px_currentColor]"
            >
              <path
                d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z"
                fill="currentColor"
              />
            </svg>
          </div>
        );
      })}

      {/* 4. Fine Technical Blueprint Dot Matrix */}
      <div
        className="absolute inset-0 opacity-45 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(216, 180, 254, 0.6) 1px, transparent 1px)`,
          backgroundSize: "29px 29px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 30%, transparent 85%)",
        }}
      />

      {/* 5. Smooth Bottom Section Transition Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07040d] to-transparent pointer-events-none" />
    </div>
  );
}

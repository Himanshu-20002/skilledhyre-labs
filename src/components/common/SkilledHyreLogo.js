import React from "react";

export default function SkilledHyreLogo({ className = "h-14 w-auto" }) {
  return (
    <svg
      viewBox="0 0 420 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Abstract Geometric "S" Circuit Emblem */}
      <g transform="translate(10, 10)">
        {/* Hexagon Outer Frame */}
        <polygon
          points="40,5 75,25 75,65 40,85 5,65 5,25"
          stroke="url(#emblemGrad)"
          strokeWidth="2.5"
          fill="none"
          className="opacity-70"
        />

        {/* Inner Circuit "S" Signal Path */}
        <path
          d="M 65 25 L 25 25 L 15 45 L 65 45 L 55 65 L 15 65"
          stroke="url(#emblemGrad)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Glowing Node Dots */}
        <circle cx="65" cy="25" r="4" fill="#38bdf8" />
        <circle cx="25" cy="25" r="4" fill="#38bdf8" />
        <circle cx="15" cy="45" r="4" fill="#6366f1" />
        <circle cx="65" cy="45" r="4" fill="#818cf8" />
        <circle cx="55" cy="65" r="4" fill="#a855f7" />
        <circle cx="15" cy="65" r="4" fill="#a855f7" />
        <circle cx="40" cy="5" r="3.5" fill="#38bdf8" />
        <circle cx="40" cy="85" r="3.5" fill="#a855f7" />
      </g>

      {/* Brand Text: SkilledHyre */}
      <text
        x="100"
        y="50"
        fill="#ffffff"
        fontSize="34"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-0.5"
      >
        Skilled
        <tspan fill="#38bdf8">Hyre</tspan>
      </text>

      {/* Brand Subtitle: LABS */}
      <text
        x="102"
        y="78"
        fill="#818cf8"
        fontSize="17"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="7"
      >
        LABS
      </text>

      <defs>
        <linearGradient id="emblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

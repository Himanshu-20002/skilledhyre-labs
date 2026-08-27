"use client";

export default function FloatingSpheresBackground({ variant = "default" }) {
  const isVariantB = variant === "news" || variant === "reverse";

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0">
      <style>{`
        @keyframes floatSvgOrbA {
          0%, 100% { transform: translate3d(90px, 90px, 0) scale(1); }
          50% { transform: translate3d(20px, 55px, 0) scale(2.1); }
        }
        @keyframes floatSvgOrbB {
          0%, 100% { transform: translate3d(0, 0px, 0) scale(1); }
          50% { transform: translate3d( 90px, -160px, 0) scale(1.06); }
        }
        .animate-svg-orb-a {
          animation: floatSvgOrbA 14s ease-in-out infinite;
        }
        .animate-svg-orb-b {
          animation: floatSvgOrbB 16s ease-in-out infinite;
        }
      `}</style>

      {/* Single Full-Section Responsive SVG Canvas — Zero Vertical/Horizontal Cutoff Lines & 120 FPS */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id={`orbGradA_${variant}`}
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor={isVariantB ? "#6366f1" : "#a855f7"} stopOpacity="0.45" />
            <stop offset="35%" stopColor={isVariantB ? "#2c26efff" : "#6366f1"} stopOpacity="0.2" />
            <stop offset="65%" stopColor="#6366f1" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <radialGradient
            id={`orbGradB_${variant}`}
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
            <stop offset="35%" stopColor={isVariantB ? "#6366f1" : "#6366f1"} stopOpacity="0.18" />
            <stop offset="65%" stopColor="#7355f7ff" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Primary Vector Orb (Top Left or Right) */}
        <g className="animate-svg-orb-a transform-gpu will-change-transform">
          <circle
            cx={isVariantB ? "85%" : "15%"}
            cy="15%"
            r="380"
            fill={`url(#orbGradA_${variant})`}
          />
        </g>

        {/* Secondary Vector Orb (Bottom Right or Left) */}
        <g className="animate-svg-orb-b transform-gpu will-change-transform">
          <circle
            cx={isVariantB ? "15%" : "85%"}
            cy="85%"
            r="420"
            fill={`url(#orbGradB_${variant})`}
          />
        </g>
      </svg>
    </div>
  );
}

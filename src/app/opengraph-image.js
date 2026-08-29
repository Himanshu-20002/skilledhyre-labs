import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SkilledHyre Labs - Enterprise AI & Software Engineering";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #07040d 0%, #120924 50%, #07040d 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
          border: "8px solid rgba(168, 85, 247, 0.2)",
        }}
      >
        {/* Glow Spheres */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "450px",
            height: "450px",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Content Box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "960px",
            padding: "40px",
            zIndex: 10,
          }}
        >
          {/* Eyebrow Tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 24px",
              borderRadius: "50px",
              background: "rgba(168, 85, 247, 0.15)",
              border: "1px solid rgba(168, 85, 247, 0.4)",
              color: "#d8b4fe",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            SKILLEDHYRE LABS • ENTERPRISE AI LAB
          </div>

          {/* Main Title */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 900,
              letterSpacing: "-1px",
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            Engineering Digital Futures For High-Growth Enterprises
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "24px",
              color: "#9ca3af",
              lineHeight: 1.4,
              maxWidth: "800px",
            }}
          >
            High-Performance AI Engines • Scalable Cloud Systems • Dedicated Engineering Pods
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

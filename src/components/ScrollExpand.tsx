"use client";
import React, { useLayoutEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollExpand.css";

// Register ScrollTrigger plugin safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollExpandProps {
  src?: string;
  mediaType?: "image" | "video";
  poster?: string;
  alt?: string;
  title?: string;
  scrollHint?: string;
  startWidth?: number;
  startHeight?: number;
  startRadius?: number;
  endRadius?: number;
  mediaZoom?: number;
  scrollDistance?: number;
  smoothing?: number;
  overlayScrim?: number;
  enabled?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
}

const ScrollExpand: React.FC<ScrollExpandProps> = ({
  src = "",
  mediaType = "image",
  poster = "",
  alt = "",
  title = "",
  scrollHint = "",
  startWidth = 70,
  startHeight = 55,
  startRadius = 24,
  endRadius = 0,
  mediaZoom = 1.25,
  scrollDistance = 1.2,
  smoothing = 0.5,
  overlayScrim = 0.5,
  enabled = true,
  children,
  className = "",
  style,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLImageElement & HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const scrimRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!enabled || typeof window === "undefined" || !stageRef.current || !frameRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top 80px",
          end: `+=${scrollDistance * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub: smoothing > 0 ? smoothing : true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Expand frame width, height, and animate border-radius from startRadius to endRadius
      tl.fromTo(
        frameRef.current,
        {
          width: `${startWidth}%`,
          height: `${startHeight}%`,
          borderRadius: `${startRadius}px`,
        },
        {
          width: "100%",
          height: "100%",
          borderRadius: `${endRadius}px`,
          ease: "none",
        },
        0
      );

      // Media zoom out / scale adjustment
      if (mediaRef.current) {
        tl.fromTo(
          mediaRef.current,
          { scale: mediaZoom },
          { scale: 1, ease: "none" },
          0
        );
      }

      // Dark overlay scrim fade in
      if (scrimRef.current) {
        tl.fromTo(
          scrimRef.current,
          { opacity: 0 },
          { opacity: overlayScrim, ease: "none" },
          0
        );
      }

      // Initial title float up & fade out
      if (titleRef.current) {
        tl.to(
          titleRef.current,
          { opacity: 0, y: -45, scale: 1.05, ease: "power1.out" },
          0
        );
      }

      // Scroll hint fade out
      if (hintRef.current) {
        tl.to(
          hintRef.current,
          { opacity: 0, y: 15, ease: "power1.out" },
          0
        );
      }

      // Overlay text content reveal as frame reaches full expansion
      if (overlayRef.current) {
        tl.fromTo(
          overlayRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, ease: "power1.inOut" },
          0.6
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [enabled, startWidth, startHeight, startRadius, endRadius, mediaZoom, scrollDistance, smoothing, overlayScrim]);

  const media =
    mediaType === "video" ? (
      <video
        ref={mediaRef}
        className="scroll-expand-media"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    ) : (
      <img ref={mediaRef} className="scroll-expand-media" src={src} alt={alt} draggable={false} />
    );

  return (
    <div ref={containerRef} className={`scroll-expand-section ${className}`.trim()} style={style}>
      <div ref={stageRef} className="scroll-expand-stage">
        <div ref={frameRef} className="scroll-expand-frame">
          <div className="scroll-expand-inner">
            {media}
            <div ref={scrimRef} className="scroll-expand-scrim" />
            {children ? (
              <div ref={overlayRef} className="scroll-expand-overlay">
                {children}
              </div>
            ) : null}
          </div>
        </div>

        {title ? (
          <div ref={titleRef} className="scroll-expand-title">
            {title}
          </div>
        ) : null}

        {scrollHint ? (
          <div ref={hintRef} className="scroll-expand-hint">
            {scrollHint}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ScrollExpand;

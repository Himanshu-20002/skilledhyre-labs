'use client';

import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './about.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // 1. Pause video explicitly on initial page load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  // 2. Control playback via GSAP ScrollTrigger optimized for 120 FPS
  useGSAP(
    () => {
      // Global ScrollTrigger optimization
      ScrollTrigger.config({
        limitCallbacks: true,
        syncInterval: 40,
      });

      const mm = gsap.matchMedia();

      // Desktop: Ultra-smooth 120 FPS GPU composite animation
      mm.add("(min-width: 769px)", () => {
        const clipAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: '#clip',
            start: 'top 10%',
            end: '+=800',
            scrub: 0.6, // Smooth 120 FPS lerp interpolation (eliminates raw scroll wheel/touch jitter)
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
            invalidateOnRefresh: true,
            onEnter: () => {
              videoRef.current?.play().catch(() => { });
            },
            onEnterBack: () => {
              videoRef.current?.play().catch(() => { });
            },
            onLeaveBack: () => {
              videoRef.current?.pause();
            },
          },
        });

        // Pure GPU Transform (Scale 0.7 -> 1.0 with 3D matrix compositing)
        clipAnimation.fromTo(
          '.about-image',
          {
            scale: 0.7,
            borderRadius: '2rem',
            transformOrigin: 'top center',
            force3D: true,
          },
          {
            scale: 1,
            borderRadius: '0rem',
            ease: 'none',
            force3D: true,
            overwrite: 'auto',
          }
        );
      });

      // Mobile: Optimized aesthetic height, scaling, and 120 FPS smooth scrub
      mm.add("(max-width: 768px)", () => {
        const clipAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: '#clip',
            start: 'top 29%',
            end: '+=450',
            scrub: 0.6, // Smooth 120 FPS lerp on touch scroll
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
            invalidateOnRefresh: true,
            onEnter: () => {
              videoRef.current?.play().catch(() => { });
            },
            onEnterBack: () => {
              videoRef.current?.play().catch(() => { });
            },
            onLeaveBack: () => {
              videoRef.current?.pause();
            },
          },
        });

        clipAnimation.fromTo(
          '.about-image',
          {
            scale: 0.88,
            borderRadius: '1.25rem',
            transformOrigin: 'center center',
            force3D: true,
          },
          {
            scale: 1,
            borderRadius: '0.35rem',
            ease: 'none',
            force3D: true,
            overwrite: 'auto',
          }
        );
      });

      // Target Services section DOM element directly
      const servicesEl = document.getElementById('services') || document.querySelector('.services-section');

      if (servicesEl) {
        ScrollTrigger.create({
          trigger: servicesEl,
          start: 'top 10%',
          onEnter: () => {
            videoRef.current?.pause();
          },
          onLeaveBack: () => {
            videoRef.current?.play().catch(() => { });
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div id="about" ref={containerRef} className="about-section-container">
      {/* Video Section */}
      <div className="about-clip-wrapper" id="clip">
        <div className="about-image">
          <video
            ref={videoRef}
            src="/video/quality_broll.mp4"
            loop
            muted
            playsInline
            preload="auto"
            className="about-img-bg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

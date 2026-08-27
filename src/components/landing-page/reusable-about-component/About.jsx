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

  // 2. Control playback via GSAP ScrollTrigger
  useGSAP(
    () => {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: '#clip',
          start: 'top 9%',
          end: '+=800',
          scrub: true,
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

      // Target Services section DOM element directly (bypassing scoped container lookup)
      const servicesEl = document.getElementById('services') || document.querySelector('.services-section');

      if (servicesEl) {
        ScrollTrigger.create({
          trigger: servicesEl,
          start: 'top 10%',
          onEnter: () => {
            console.log('[Video Status] Paused - Services section entered viewport');
            videoRef.current?.pause();
          },
          onLeaveBack: () => {
            console.log('[Video Status] Resumed Playing - Scrolled back above Services section');
            videoRef.current?.play().catch(() => { });
          },
        });
      }

      // 100% GPU-accelerated scale & border radius animation (Zero layout reflow = 60-120 FPS!)
      clipAnimation.fromTo(
        '.about-image',
        {
          scale: 0.7,
          borderRadius: '2rem',
        },
        {
          scale: 1,
          borderRadius: '0rem',
          ease: 'power1.inOut',
          force3D: true,
          overwrite: 'auto',
        }
      );
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
            src="/video/sSmooth%20Camera%20Movement%20in%20After%20Effects%20(Tutorial)%20-%20Bricks%20(1080p,%20h264)_1.mp4"
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

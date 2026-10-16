'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Volume2, VolumeX, Volume1, ArrowRight } from 'lucide-react';
import './about.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(0.1);
  const [isMuted, setIsMuted] = useState(true);
  const [showSlider, setShowSlider] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);

  // Keep latest mutable state in refs
  const isMutedRef = useRef(true);
  const volumeRef = useRef(volume);
  isMutedRef.current = isMuted;
  volumeRef.current = volume;

  // Playback trigger: withAudio=true un-mutes and plays at 10% volume
  const playVideoSafely = useCallback((withAudio = false) => {
    const video = videoRef.current;
    if (!video) return;

    if (withAudio) {
      video.muted = false;
      video.volume = volumeRef.current || 0.1;
      setIsMuted(false);
      isMutedRef.current = false;
    } else {
      video.muted = isMutedRef.current;
      video.volume = volumeRef.current;
    }

    const promise = video.play();
    if (promise !== undefined) {
      promise.catch((err) => {
        if (err.name === 'NotAllowedError') {
          video.muted = true;
          video.play().catch(() => {});
        }
      });
    }
  }, []);

  // Monitor playback time to reveal Get Started button at least 3s before the video ends
  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const remainingTime = video.duration - video.currentTime;

    const shouldShow = remainingTime <= 3 && remainingTime >= 0;
    setShowGetStarted((prev) => (prev !== shouldShow ? shouldShow : prev));
  }, []);

  // Initial video setup: Starts playing muted on site load & pauses when scrolled completely offscreen
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 0.1;
    video.muted = true;
    setIsMuted(true);
    isMutedRef.current = true;

    const promise = video.play();
    if (promise !== undefined) {
      promise.catch(() => {});
    }

    // Hardware/CPU Optimization: Guarantee video pauses when scrolled offscreen anywhere on page
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const handleVolumeChange = (e) => {
    const rawVal = parseFloat(e.target.value);
    const newVol = isNaN(rawVal) ? 0 : Math.max(0, Math.min(1, rawVal));
    
    if (newVol <= 0.01) {
      setVolume(0);
      setIsMuted(true);
      volumeRef.current = 0;
      isMutedRef.current = true;
      if (videoRef.current) {
        videoRef.current.volume = 0;
        videoRef.current.muted = true;
      }
    } else {
      setVolume(newVol);
      setIsMuted(false);
      volumeRef.current = newVol;
      isMutedRef.current = false;
      if (videoRef.current) {
        videoRef.current.volume = newVol;
        videoRef.current.muted = false;
      }
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    if (isMuted || volumeRef.current === 0) {
      const targetVol = volumeRef.current === 0 ? 0.1 : volumeRef.current;
      videoRef.current.muted = false;
      videoRef.current.volume = targetVol;
      volumeRef.current = targetVol;
      isMutedRef.current = false;
      setVolume(targetVol);
      setIsMuted(false);
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
      isMutedRef.current = true;
      setIsMuted(true);
    }
  };

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
            scrub: 0.6,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
            invalidateOnRefresh: true,
            onEnter: () => {
              playVideoSafely(true); // User scrolled into view -> play with 10% volume
            },
            onEnterBack: () => {
              playVideoSafely(true);
            },
            onLeave: () => {
              videoRef.current?.pause(); // Scrolled down past video -> pause immediately to save CPU/battery
            },
            onLeaveBack: () => {
              // Scrolled back up to Hero -> keep video playing muted
              if (videoRef.current) {
                videoRef.current.muted = true;
                setIsMuted(true);
                isMutedRef.current = true;
                videoRef.current.play().catch(() => {});
              }
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
            scrub: 0.6,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
            invalidateOnRefresh: true,
            onEnter: () => {
              playVideoSafely(true); // Mobile: user scrolled into view -> play with 10% volume
            },
            onEnterBack: () => {
              playVideoSafely(true);
            },
            onLeave: () => {
              videoRef.current?.pause(); // Mobile: Scrolled down past video -> pause immediately
            },
            onLeaveBack: () => {
              if (videoRef.current) {
                videoRef.current.muted = true;
                setIsMuted(true);
                isMutedRef.current = true;
                videoRef.current.play().catch(() => {});
              }
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
            playVideoSafely();
          },
        });
      }
    },
    { scope: containerRef, dependencies: [playVideoSafely] }
  );

  return (
    <div id="about" ref={containerRef} className="about-section-container">
      {/* Video Section */}
      <div className="about-clip-wrapper" id="clip">
        <div className="about-image">
          <video
            ref={videoRef}
            src="/video/quality_broll_new.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            className="about-img-bg"
          />

          {/* "Get Started" CTA Button appearing 2s before video ends */}
          <div
            className={`about-video-cta-container ${
              showGetStarted ? 'about-video-cta-visible' : ''
            }`}
          >
            <Link href="/contact" className="about-video-cta-btn">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right-side Floating Volume Control Widget */}
          <div
            className="about-volume-widget"
            onMouseEnter={() => setShowSlider(true)}
            onMouseLeave={() => setShowSlider(false)}
            aria-label="Video volume controls"
          >
            <div
              className={`about-volume-slider-wrapper ${
                showSlider ? 'about-volume-slider-open' : ''
              }`}
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="about-volume-slider"
                aria-label="Volume slider"
              />
              <span className="about-volume-percent">
                {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
              </span>
            </div>

            <button
              type="button"
              onClick={toggleMute}
              className="about-volume-btn"
              title={isMuted ? 'Unmute video' : `Mute video (${Math.round(volume * 100)}%)`}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-purple-300" />
              ) : volume < 0.5 ? (
                <Volume1 className="w-4 h-4 text-purple-200" />
              ) : (
                <Volume2 className="w-4 h-4 text-purple-200" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

"use client";
import React, { useState, useEffect, useRef } from "react";

// Sleek Matrix Cyber Digits & Hex Symbols
const MATRIX_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function MatrixTextRotator({
  words = ["Intelligence.", "Architectures.", "Cloud Systems.", "AI Platforms.", "Automations."],
  interval = 5900,
  scrambleSpeed = 60,
  className = "",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0] || "");
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Pause execution when scrolled off-screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Word cycling timer - only runs when visible
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval, isVisible]);

  // Scramble animation effect - only runs when visible
  useEffect(() => {
    if (!isVisible) return;
    const targetWord = words[wordIndex];
    if (!targetWord) return;

    let step = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      step++;
      const resolvedLength = Math.floor(step / 2);

      const currentScramble = targetWord
        .split("")
        .map((char, index) => {
          if (index < resolvedLength) {
            return targetWord[index];
          }
          return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        })
        .join("");

      setDisplayText(currentScramble);

      if (resolvedLength >= targetWord.length) {
        setDisplayText(targetWord);
        clearInterval(intervalRef.current);
      }
    }, scrambleSpeed);

    return () => clearInterval(intervalRef.current);
  }, [wordIndex, words, scrambleSpeed, isVisible]);

  return (
    <span
      ref={containerRef}
      className={`inline-block whitespace-nowrap font-mono tracking-tight font-bold not-italic drop-shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-100 ${className}`}
    >
      {displayText}
    </span>
  );
}

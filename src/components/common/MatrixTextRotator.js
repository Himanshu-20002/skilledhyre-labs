import React, { useState, useEffect, useRef } from "react";

// Sleek Matrix Cyber Digits & Hex Symbols
const MATRIX_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function MatrixTextRotator({
  words = ["Intelligence.", "Architectures.", "Cloud Systems.", "AI Platforms.", "Automations."],
  interval = 2600,
  scrambleSpeed = 35,
  className = "",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0] || "");
  const intervalRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  useEffect(() => {
    const targetWord = words[wordIndex];
    if (!targetWord) return;

    let step = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      step++;
      const resolvedLength = Math.floor(step / 2.5);

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
  }, [wordIndex, words, scrambleSpeed]);

  return (
    <span
      className={`inline-block whitespace-nowrap font-mono tracking-tight font-bold not-italic drop-shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-100 ${className}`}
    >
      {displayText}
    </span>
  );
}

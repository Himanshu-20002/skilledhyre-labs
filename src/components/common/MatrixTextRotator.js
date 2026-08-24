import React, { useState, useEffect, useRef } from "react";

// Sleek Matrix Cyber Digits & Hex Symbols
const MATRIX_CHARS = "0123456789ABCDEF0123456789XYZ";

export default function MatrixTextRotator({
  words = ["Intelligence.", "Innovation.", "Architectures.", "Platforms.", "Solutions."],
  interval = 2000,
  scrambleSpeed = 20,
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
      className={`inline-block font-mono tracking-tight font-bold not-italic text-[#818cf8] drop-shadow-[0_0_25px_rgba(99,102,241,0.7)] transition-all duration-100 ${className}`}
    >
      {displayText}
    </span>
  );
}

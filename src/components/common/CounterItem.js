"use client";
import { useEffect, useRef, useState } from "react";

export default function CounterItem({ value, label, suffix = "" }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);
  const animatedRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const duration = 1800; // ms
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic curve
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOutProgress * value);

            setDisplayValue(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { rootMargin: "-30px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {displayValue}
        <span className="text-indigo-500">{suffix}</span>
      </div>
      <p className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}

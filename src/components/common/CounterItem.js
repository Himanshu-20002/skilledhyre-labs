"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useSpring } from "framer-motion";

export default function CounterItem({ value, label, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2000,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

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

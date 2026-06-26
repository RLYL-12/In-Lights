"use client";

import { animate, useInView, useMotionValue, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Counter({
  to,
  from = 0,
  duration = 2.5,
  suffix = "",
  prefix = "",
  className,
}: {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // Triggers when element is at least 100px into the viewport
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(from);

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplay(latest);
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, to, duration, count]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

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
  // Trigger when element enters viewport. once: false means it can trigger again.
  const inView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });
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
    } else {
      // Reset to zero when out of view
      count.set(from);
    }
  }, [inView, to, duration, count, from]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

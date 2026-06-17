"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ============ Brand Logo (arch + star) ============ */
export function Logo({
  className,
  size = 56,
  animated = false,
}: {
  className?: string;
  size?: number;
  animated?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block", className)}
    >
      <defs>
        <linearGradient id="logoNavy" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a1f8f" />
          <stop offset="100%" stopColor="#140e6a" />
        </linearGradient>
        <linearGradient id="logoGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0c478" />
          <stop offset="100%" stopColor="#c9a24a" />
        </linearGradient>
        <radialGradient id="logoStarGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fff8e0" stopOpacity="1" />
          <stop offset="60%" stopColor="#e0c478" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#c9a24a" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Left half of arch (navy) */}
      <path
        d="M30 220 L30 100 A70 70 0 0 1 100 30 L100 220 Z"
        fill="url(#logoNavy)"
      />
      {/* Right half of arch (cream) */}
      <path
        d="M100 220 L100 30 A70 70 0 0 1 170 100 L170 220 Z"
        fill="#f3e9d2"
      />
      {/* Arch outline */}
      <path
        d="M30 220 L30 100 A70 70 0 0 1 170 100 L170 220"
        stroke="#0a0840"
        strokeWidth="2"
        fill="none"
      />
      {/* Star glow */}
      {animated && (
        <motion.circle
          cx="100"
          cy="95"
          r="42"
          fill="url(#logoStarGlow)"
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.1, 0.95] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 95px" }}
        />
      )}
      {!animated && (
        <circle cx="100" cy="95" r="42" fill="url(#logoStarGlow)" />
      )}
      {/* Star (8-point) */}
      <motion.g
        transform="translate(100,95)"
        animate={animated ? { rotate: [0, 90] } : undefined}
        transition={animated ? { duration: 20, repeat: Infinity, ease: "linear" } : undefined}
        style={{ transformOrigin: "100px 95px" }}
      >
        <path
          d="M0 -28 L7 -7 L28 0 L7 7 L0 28 L-7 7 L-28 0 L-7 -7 Z"
          fill="url(#logoGold)"
        />
        <path
          d="M0 -18 L4 -4 L18 0 L4 4 L0 18 L-4 4 L-18 0 L-4 -4 Z"
          fill="#fff8e0"
          opacity="0.9"
        />
        <circle cx="0" cy="0" r="3" fill="#fff" />
      </motion.g>
      {/* Light rays */}
      <g opacity="0.5" stroke="#e0c478" strokeWidth="1.5" strokeLinecap="round">
        <line x1="100" y1="40" x2="100" y2="25" />
        <line x1="135" y1="55" x2="145" y2="45" />
        <line x1="65" y1="55" x2="55" y2="45" />
        <line x1="150" y1="90" x2="165" y2="88" />
        <line x1="50" y1="90" x2="35" y2="88" />
      </g>
      {/* Base line */}
      <rect x="20" y="218" width="160" height="6" rx="3" fill="#0a0840" />
    </svg>
  );
}

/* ============ Brand lockup (logo + wordmark) ============ */
export function BrandLockup({
  className,
  variant = "dark",
  size = 44,
}: {
  className?: string;
  variant?: "dark" | "light";
  size?: number;
}) {
  const textColor = variant === "dark" ? "text-navy" : "text-cream";
  const subColor = variant === "dark" ? "text-gold" : "text-gold-light";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Logo size={size} />
      <div className="flex flex-col leading-tight">
        <span className={cn("font-display text-xl font-bold tracking-tight", textColor)}>
          In Lights
        </span>
        <span className={cn("font-arabic text-xs", subColor)}>
          إن لايتس
        </span>
      </div>
    </div>
  );
}

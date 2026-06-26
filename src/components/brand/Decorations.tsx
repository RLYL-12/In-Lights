"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ============ Star (8-point light star) ============ */
export function Star({
  className,
  size = 24,
  glow = true,
  animate = false,
  delay = 0,
}: {
  className?: string;
  size?: number;
  glow?: boolean;
  animate?: boolean;
  delay?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      className={cn("inline-block", className)}
      animate={animate ? { scale: [0.85, 1.15, 0.85], opacity: [0.4, 1, 0.4] } : undefined}
      transition={animate ? { duration: 3, repeat: Infinity, delay, ease: "easeInOut" } : undefined}
    >
      {glow && (
        <circle cx="28" cy="28" r="26" fill="url(#starGlowBg)" opacity="0.6" />
      )}
      <defs>
        <radialGradient id="starGlowBg" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fff8e0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c9a24a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="starFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0c478" />
          <stop offset="100%" stopColor="#c9a24a" />
        </linearGradient>
      </defs>
      <path
        d="M28 4 L34 22 L52 28 L34 34 L28 52 L22 34 L4 28 L22 22 Z"
        fill="url(#starFill)"
      />
      <path
        d="M28 14 L31 25 L42 28 L31 31 L28 42 L25 31 L14 28 L25 25 Z"
        fill="#fff8e0"
        opacity="0.85"
      />
      <circle cx="28" cy="28" r="3" fill="#fff" />
    </motion.svg>
  );
}

/* ============ Arch frame — brand motif ============ */
export function ArchFrame({
  className,
  children,
  variant = "navy",
}: {
  className?: string;
  children?: React.ReactNode;
  variant?: "navy" | "cream" | "outline";
}) {
  const styles = {
    navy: "bg-gradient-to-b from-[#2a1f8f] to-[#140e6a] text-cream",
    cream: "bg-cream text-navy",
    outline: "border-2 border-gold/40 text-navy",
  };
  return (
    <div
      className={cn(
        "relative arch-shape overflow-hidden",
        styles[variant],
        className
      )}
    >
      {children}
    </div>
  );
}

/* ============ Light rays emanating ============ */
export function LightRays({
  className,
  rays = 8,
}: {
  className?: string;
  rays?: number;
}) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {Array.from({ length: rays }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 origin-top h-[60%] w-px bg-gradient-to-b from-gold/60 to-transparent"
          style={{
            rotate: `${(360 / rays) * i}deg`,
            translateY: "-50%",
          }}
          animate={{ opacity: [0.15, 0.5, 0.15] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ============ Floating particles (dust motes in light) ============ */
export function FloatingParticles({
  count = 20,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const particles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 2 + Math.random() * 4,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 5,
  }));
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gold/60"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ============ Wave pattern divider ============ */
export function WaveDivider({
  className,
  color = "#f3e9d2",
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <div className={cn("w-full overflow-hidden leading-none", className)}>
      <svg
        className={cn("w-full h-16", flip && "rotate-180")}
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40 C 200 80, 400 0, 600 40 S 1000 80, 1200 40 L1200 80 L0 80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/* ============ Section Divider ============ */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent", className)} />
  );
}

/* ============ Scroll Arrow ============ */
import { ChevronsDown } from "lucide-react";

export function ScrollArrow({
  href,
  className,
}: {
  href: string;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className={cn(
        "absolute bottom-6 left-1/2 z-30 -translate-x-1/2 flex items-center justify-center text-gold transition-all hover:text-gold-light opacity-90 hover:opacity-100 drop-shadow-md",
        className
      )}
    >
      <ChevronsDown className="h-10 w-10 animate-pulse" strokeWidth={1.5} />
    </motion.a>
  );
}

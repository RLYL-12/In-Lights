"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

/* ============ Brand Logo (from image) ============ */
export function Logo({
  className,
  size = 56,
  animated = false,
  variant = "dark", // "dark" uses navy logo (for light bgs), "light" uses gold logo (for dark bgs)
}: {
  className?: string;
  size?: number;
  animated?: boolean;
  variant?: "dark" | "light";
}) {
  const src = variant === "dark" ? "/logo-navy.png" : "/logo-gold.png";
  
  return (
    <div 
      className={cn(
        "relative inline-flex items-center justify-center", 
        animated && "animate-pulse-slow", // Simple pulse animation as fallback
        className
      )}
      style={{ width: size * 1.5, height: size }} // Adjust aspect ratio for the full logo
    >
      <Image
        src={src}
        alt="Enlights Logo"
        fill
        className="object-contain"
        unoptimized
      />
    </div>
  );
}

/* ============ Brand lockup (logo + wordmark) ============ */
// The image already contains the wordmark, so we just use the Logo component directly
// and adjust size to fit where BrandLockup was used
export function BrandLockup({
  className,
  variant = "dark",
  size = 60,
}: {
  className?: string;
  variant?: "dark" | "light";
  size?: number;
}) {
  return (
    <div className={cn("flex items-center", className)}>
      <Logo size={size} variant={variant} />
    </div>
  );
}

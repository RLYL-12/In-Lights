"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Star } from "@/components/brand/Decorations";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  variant?: "dark" | "light";
  className?: string;
}) {
  const titleColor = variant === "dark" ? "text-navy" : "text-cream";
  const subColor = variant === "dark" ? "text-muted-foreground" : "text-cream/70";
  const eyebrowColor = variant === "dark" ? "text-gold" : "text-gold-light";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-start",
        className
      )}
    >
      {eyebrow && (
        <Reveal direction="up">
          <span
            className={cn(
              "inline-flex items-center gap-2 font-arabic text-sm font-medium tracking-wide uppercase",
              eyebrowColor
            )}
          >
            <Star size={14} glow={false} />
            {eyebrow}
            <Star size={14} glow={false} />
          </span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.1}>
        <h2
          className={cn(
            "font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl",
            titleColor
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal direction="up" delay={0.2}>
          <p
            className={cn(
              "font-arabic text-base sm:text-lg max-w-2xl leading-relaxed",
              subColor,
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

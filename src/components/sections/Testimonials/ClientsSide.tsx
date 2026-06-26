"use client";

import { Star } from "@/components/brand/Decorations";
import { CalendarCheck, Users, Award, Smile, ArrowLeft, ArrowRight } from "lucide-react";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";

const PARTNERS = [
  "أرامكو",
  "سابك",
  "جامعة الملك سعود",
  "وزارة الاتصالات",
  "الإعمار",
  "روشن",
  "نيوم",
  "الهيئة العامة للترفيه",
];

const STATS = [
  { value: 300, prefix: "+", suffix: "", label: "فعالية ناجحة", icon: CalendarCheck },
  { value: 150, prefix: "+", suffix: "", label: "عميل وشريك", icon: Users },
  { value: 12, prefix: "+", suffix: "", label: "سنوات خبرة", icon: Award },
  { value: 93, prefix: "", suffix: "%", label: "رضا العملاء", icon: Smile },
];

export function ClientsSide() {
  return (
    <div className="flex h-full w-full flex-col bg-cream p-8 sm:p-12 lg:p-16">
      
      {/* Header */}
      <Reveal direction="down" className="mb-10 text-center">
        <h2 className="inline-flex items-center gap-4 font-display text-3xl font-bold text-navy">
          <Star size={16} className="text-gold" glow={false} />
          عملاؤنا
          <Star size={16} className="text-gold" glow={false} />
        </h2>
      </Reveal>

      <div className="flex flex-1 flex-col justify-center">
        {/* Helper Text RTL */}
        <div className="mb-4 flex items-center justify-end gap-2 pr-8 text-gold-light opacity-80">
          <span className="font-arabic text-sm">يتحرك تلقائياً</span>
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
        </div>

        {/* Marquee Row 1 (Right to Left) */}
        <div className="group relative mb-6 flex overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent" />
          
          <div className="flex w-max animate-[marquee-rtl_40s_linear_infinite] gap-4 group-hover:[animation-play-state:paused]">
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((p, i) => (
              <div
                key={i}
                className="flex h-[80px] min-w-[180px] items-center justify-center rounded-[20px] border border-navy/5 bg-white shadow-[0_4px_20px_-10px_rgba(20,14,106,0.05)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_-10px_rgba(20,14,106,0.1)] sm:min-w-[200px]"
              >
                <span className="font-display text-xl font-bold text-navy/70 transition-colors group-hover:text-navy">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Left to Right - simulated by reversing order and standard rtl animation or running reverse) */}
        <div className="group relative mb-4 flex overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent" />
          
          <div className="flex w-max animate-[marquee-rtl_45s_linear_infinite_reverse] gap-4 group-hover:[animation-play-state:paused]">
            {[...PARTNERS].reverse().concat([...PARTNERS].reverse(), [...PARTNERS].reverse()).map((p, i) => (
              <div
                key={`r2-${i}`}
                className="flex h-[80px] min-w-[180px] items-center justify-center rounded-[20px] border border-navy/5 bg-white shadow-[0_4px_20px_-10px_rgba(20,14,106,0.05)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_-10px_rgba(20,14,106,0.1)] sm:min-w-[200px]"
              >
                <span className="font-display text-xl font-bold text-navy/70 transition-colors group-hover:text-navy">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Helper Text LTR */}
        <div className="mt-4 flex items-center justify-start gap-2 pl-8 text-gold-light opacity-80">
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          <span className="font-arabic text-sm">يتحرك تلقائياً</span>
        </div>
      </div>

      {/* Statistics Row */}
      <Reveal direction="up" delay={0.2} className="mt-12">
        <div className="grid grid-cols-2 gap-6 border-t border-navy/5 pt-8 sm:grid-cols-4 sm:gap-4">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <s.icon className="mb-3 h-6 w-6 text-gold" strokeWidth={1.5} />
              <div className="font-display text-2xl font-bold text-navy">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} duration={2.5} />
              </div>
              <div className="mt-1 font-arabic text-xs font-bold text-navy/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

    </div>
  );
}

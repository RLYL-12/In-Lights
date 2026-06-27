"use client";

import { ArrowUpLeft } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { STYLES } from "@/lib/constants";

export function PremiumCTA() {
  return (
    <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8">
      <Reveal direction="up">
        <div 
          className="group relative overflow-hidden rounded-[32px] bg-white p-8 text-center sm:p-16 lg:p-20"
          style={{ boxShadow: STYLES.SHADOW_GLOW_NAVY }}
        >
          {/* Subtle gradient background for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-cream/30 to-transparent" />
          
          <div className="relative z-10 mx-auto max-w-2xl">
            {/* Elegant Arch Illustration Context */}
            <div className="mx-auto mb-8 grid h-32 w-24 place-items-center arch-shape bg-gradient-to-b from-navy to-navy-light text-cream shadow-glow-navy transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-glow-gold">
              <div className="h-4 w-4 rounded-full bg-gold shadow-[0_0_15px_rgba(216,179,93,0.8)]" />
            </div>

            <h2 className="mb-4 font-display text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
              جاهزون لصناعة فعالية استثنائية؟
            </h2>
            <p className="mb-10 font-arabic text-lg text-muted-foreground">
              تواصلوا معنا الآن ودعونا نحول فكرتكم إلى تجربة لا تُنسى.
            </p>

            <a
              href="https://wa.me/966552792254"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-10 py-4 font-arabic text-lg font-semibold text-cream shadow-md transition-all duration-300 hover:bg-navy-light hover:shadow-glow-gold"
            >
              ابدأ مشروعك الآن
              <ArrowUpLeft className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

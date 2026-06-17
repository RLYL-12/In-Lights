"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Counter } from "@/components/motion/Counter";
import { Star } from "@/components/brand/Decorations";
import { Reveal } from "@/components/motion/Reveal";

const STATS = [
  { value: 300, suffix: "+", label: "فعالية منجزة", desc: "بنجاح وإتقان" },
  { value: 150, suffix: "+", label: "عميل سعيد", desc: "حول المملكة" },
  { value: 98, suffix: "%", label: "رضا العملاء", desc: "تقييم مثبت" },
  { value: 12, suffix: "+", label: "مدينة", desc: "تغطية جغرافية" },
];

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-navy py-20 sm:py-28"
    >
      {/* Parallax background pattern */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-grid-cream opacity-40" />

      {/* Decorative glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 font-arabic text-sm font-medium text-gold-light">
            <Star size={16} glow={false} />
            لماذا Enlights؟
            <Star size={16} glow={false} />
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">
            أرقامٌ تتحدّث عن إنجازاتنا
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-arabic text-base text-cream/70 sm:text-lg">
            أكثر من عقدٍ من الخبرة في تنظيم الفعاليات وتجهيزها بأعلى المعايير.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} direction="up" delay={i * 0.12}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-cream/15 bg-white/5 p-6 text-center backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-white/10">
                {/* Corner star */}
                <Star
                  size={18}
                  className="absolute right-4 top-4 opacity-30 transition-opacity group-hover:opacity-100"
                />
                <div className="font-display text-4xl font-bold text-gradient-gold sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} duration={2.4} />
                </div>
                <div className="mt-2 font-arabic text-lg font-semibold text-cream">
                  {s.label}
                </div>
                <div className="mt-1 font-arabic text-sm text-cream/60">
                  {s.desc}
                </div>
                {/* Bottom progress line */}
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-cream/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, delay: i * 0.12, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-l from-gold to-gold-light"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tagline */}
        <Reveal direction="up" delay={0.4} className="mt-12 text-center">
          <p className="font-arabic text-lg text-cream/80 sm:text-xl">
            نُحوّل كل فعالية إلى تجربة استثنائية تضيء علامتك التجارية وتُبقي حضوراً لا يُنسى.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

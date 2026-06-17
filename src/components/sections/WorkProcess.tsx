"use client";

import { motion } from "framer-motion";
import { Inbox, PenTool, Settings, Activity, ArrowUpLeft } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/motion/Reveal";
import { Star } from "@/components/brand/Decorations";

const STEPS = [
  {
    icon: Inbox,
    step: "01",
    title: "استلام الطلب",
    desc: "نتلقى طلبكم ونجلس معكم لفهم رؤيتكم وأهداف الفعالية بمختلف تفاصيلها.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "تصميم التجربة",
    desc: "نُصمّم تجربة فريدة مخصصة لفعاليتكم، من السيناريو إلى التجهيزات التقنية.",
  },
  {
    icon: Settings,
    step: "03",
    title: "التنفيذ والتجهيز",
    desc: "نُجهّز الموقع ونثبّت كل المعدات بدقة واحترافية قبل بدء الفعالية.",
  },
  {
    icon: Activity,
    step: "04",
    title: "التشغيل والمتابعة",
    desc: "نُشغّل ونُتابع كل تفصيلة خلال الفعالية لضمان تجربة سلسة ومُبهرة.",
  },
];

export function WorkProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-cream py-20 sm:py-28"
    >
      {/* Decorative arches */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 arch-shape bg-navy/[0.04]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 arch-shape bg-gold/[0.06]" />

      {/* Decorative stars */}
      <Star
        size={26}
        className="absolute left-[8%] top-24 opacity-50"
        animate
      />
      <Star
        size={18}
        className="absolute right-[10%] top-1/3 opacity-40"
        animate
        delay={1.2}
      />
      <Star
        size={22}
        className="absolute left-[15%] bottom-20 opacity-30"
        animate
        delay={2}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="آلية العمل"
          title="كيف نعمل؟"
          subtitle="أربع خطوات بسيطة تفصلك عن فعالية استثنائية — من أول تواصل حتى آخر لحظة."
        />

        {/* Steps timeline */}
        <div className="relative mt-16">
          {/* Desktop horizontal connecting line */}
          <div className="pointer-events-none absolute right-0 left-0 top-[4.5rem] hidden lg:block">
            <div className="relative mx-auto h-px max-w-6xl bg-gradient-to-l from-gold/10 via-gold/50 to-gold/10">
              {/* Dots on the line */}
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-gold shadow-glow-gold"
                  style={{
                    left: `${12.5 + i * 25}%`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Mobile vertical connecting line */}
          <div className="pointer-events-none absolute bottom-0 top-12 right-1/2 w-px translate-x-1/2 bg-gradient-to-b from-gold/10 via-gold/40 to-gold/10 lg:hidden" />

          <StaggerGroup className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((s, i) => (
              <StaggerChild key={s.step}>
                <div className="group relative flex flex-col items-center text-center">
                  {/* Icon in arch frame */}
                  <div className="relative z-10 mb-6">
                    <div className="relative grid h-20 w-20 place-items-center arch-shape bg-gradient-to-b from-navy to-navy-light text-cream shadow-glow-navy transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-glow-gold">
                      <s.icon className="h-8 w-8" />
                      {/* Step number badge */}
                      <span className="absolute -bottom-2 -left-2 grid h-9 w-9 place-items-center rounded-full border-2 border-cream bg-gold font-display text-sm font-bold text-navy shadow-md">
                        {s.step}
                      </span>
                    </div>
                    <Star
                      size={18}
                      className="absolute -right-1 -top-1 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45"
                      animate
                    />
                  </div>

                  {/* Card */}
                  <div className="relative w-full overflow-hidden rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:border-gold/40 group-hover:shadow-glow-navy">
                    {/* Arch top accent */}
                    <div className="absolute inset-x-0 top-0 h-16 arch-shape bg-gradient-to-b from-gold/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      <h3 className="mb-2 font-display text-lg font-bold text-navy">
                        {s.title}
                      </h3>
                      <p className="font-arabic text-sm leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>

                    {/* Step counter footer */}
                    <div className="relative mt-4 flex items-center justify-center gap-1.5 font-arabic text-xs text-gold">
                      <span className="font-display text-base font-bold">
                        {s.step}
                      </span>
                      <span className="opacity-70">/ 04</span>
                    </div>
                  </div>

                  {/* Mobile arrow connector */}
                  {i < STEPS.length - 1 && (
                    <div className="mt-6 lg:hidden">
                      <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="grid h-8 w-8 place-items-center rounded-full bg-navy/5 text-navy"
                      >
                        <ArrowUpLeft className="h-4 w-4 rotate-[-45deg]" />
                      </motion.div>
                    </div>
                  )}
                </div>
              </StaggerChild>
            ))}
          </StaggerGroup>
        </div>

        {/* CTA */}
        <Reveal direction="up" delay={0.3} className="mt-16 text-center">
          <a
            href="#booking"
            className="group inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 font-arabic text-base font-semibold text-cream shadow-glow-navy transition-all hover:bg-navy-light hover:shadow-glow-gold"
          >
            ابدأ خطوتك الأولى
            <ArrowUpLeft className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award, Users, ArrowUpLeft } from "lucide-react";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/motion/Reveal";
import { Star, ArchFrame, FloatingParticles, ScrollArrow } from "@/components/brand/Decorations";
import { Logo } from "@/components/brand/Logo";
import { Counter } from "@/components/motion/Counter";

const VALUES = [
  {
    icon: Target,
    title: "رسالتنا",
    desc: "خلق تجارب استثنائية تتجاوز توقعات عملائنا وتُضيء فعالياتهم بإبداع.",
  },
  {
    icon: Eye,
    title: "رؤيتنا",
    desc: "أن نكون الشريك الأول للفعاليات في المنطقة، نُلهم ونُبتكر في كل تفصيلة.",
  },
  {
    icon: Award,
    title: "قيمنا",
    desc: "الاحترافية، الابتكار، والالتزام — مبادئ نُبنى عليها كل فعالية.",
  },
  {
    icon: Users,
    title: "فريقنا",
    desc: "نخبة من منظمي الفعاليات والمصممين والمهندسين شغوفين بإطلاق تجارب لا تُنسى.",
  },
];

const STATS = [
  { value: 300, prefix: "+", suffix: "", label: "فعالية", position: "-top-6 -right-6 lg:-top-6 lg:-right-6", delay: 0, scale: 1 },
  { value: 150, prefix: "+", suffix: "", label: "عميل سعيد", position: "top-[30%] -left-6 lg:-left-12", delay: 0.2, scale: 0.9 },
  { value: 98, prefix: "", suffix: "%", label: "رضا العملاء", position: "bottom-[25%] -right-8 lg:-right-14", delay: 0.4, scale: 1.05 },
  { value: 12, prefix: "+", suffix: "", label: "مدينة مغطاة", position: "-bottom-6 -left-2 lg:-bottom-6 lg:-left-4", delay: 0.6, scale: 0.85 },
];

export function AboutOverview() {
  const ref = useRef<HTMLElement>(null);
  
  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-cream py-24 sm:py-32">
      {/* Background Orbs & Particles */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[800px] w-[800px] rounded-full bg-navy/5 blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[600px] w-[600px] rounded-full bg-gold/5 blur-[120px]" />
      <FloatingParticles count={15} className="opacity-40" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-12">
          
          {/* CONTENT (55%) - Right on mobile, Left on desktop (RTL) */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <Reveal direction="up">
              <span className="inline-block rounded-full bg-navy/[0.04] px-4 py-1.5 font-arabic text-sm font-semibold text-navy/80">
                من نحن
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold text-navy sm:text-5xl lg:text-[54px] lg:leading-[1.15]">
                نُحوّل رؤيتك إلى <br className="hidden sm:block" />
                <span className="text-gradient-gold">فعالية استثنائية</span>
              </h2>
              <p className="mt-6 max-w-xl font-arabic text-lg leading-relaxed text-navy/70">
                إن لايتس (Enlights) شركة متخصصة في إدارة وتجهيز الفعاليات والمعارض والمؤتمرات. نجمع بين الإبداع والخبرة لنقدّم تجارب استثنائية تضيء علامتك التجارية وتُبقي حضوراً لا يُنسى.
              </p>
            </Reveal>

            {/* Feature Cards Grid (2x2) */}
            <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2">
              {VALUES.map((v) => (
                <StaggerChild key={v.title}>
                  <div className="group relative overflow-hidden rounded-[24px] border border-navy/5 bg-white p-6 shadow-[0_8px_30px_-12px_rgba(20,14,106,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-gold/20 hover:shadow-[0_20px_40px_-12px_rgba(20,14,106,0.12)]">
                    {/* Purple Icon Container */}
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-[16px] bg-navy/5 text-navy transition-all duration-500 group-hover:bg-navy group-hover:text-cream">
                      <v.icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="font-display text-lg font-bold text-navy">
                      {v.title}
                    </h3>
                    <p className="mt-2 font-arabic text-sm leading-relaxed text-navy/60">
                      {v.desc}
                    </p>
                    
                    {/* Gold Accent Line */}
                    <div className="absolute bottom-0 left-6 right-6 h-[2px] scale-x-0 bg-gradient-to-r from-gold/0 via-gold to-gold/0 opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100" />
                  </div>
                </StaggerChild>
              ))}
            </StaggerGroup>

            {/* CTA */}
            <Reveal direction="up" delay={0.4} className="mt-10">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 font-arabic text-base font-bold text-cream shadow-[0_8px_30px_-8px_rgba(20,14,106,0.4)] transition-all duration-300 hover:bg-navy-light hover:shadow-[0_8px_30px_-8px_rgba(216,179,93,0.4)]"
              >
                تواصل معنا الآن
                <ArrowUpLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
              </a>
            </Reveal>
          </div>

          {/* VISUAL (45%) - Left on mobile, Right on desktop (RTL) */}
          <div className="relative mt-16 order-2 lg:order-1 lg:col-span-5 lg:mt-0">
            <div className="relative mx-auto flex max-w-[340px] items-center justify-center sm:max-w-md lg:max-w-none">
              
              {/* Premium Center Arch */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
              >
                <ArchFrame
                  variant="navy"
                  className="h-[460px] w-[340px] shadow-[0_20px_80px_-20px_rgba(20,14,106,0.3)] sm:h-[560px] sm:w-[420px] lg:h-[640px] lg:w-[460px]"
                >
                  <div className="relative grid h-full place-items-center overflow-hidden">
                    {/* Inner styling */}
                    <div className="absolute inset-0 bg-grid-cream opacity-[0.06]" />
                    <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[80px]" />
                    
                    <div className="relative z-10 text-center">
                      <Logo size={120} animated className="sm:h-[140px] sm:w-[140px]" />
                      <div className="mt-8 font-display text-2xl font-bold text-cream sm:text-3xl">
                        In Lights
                      </div>
                      <div className="mt-2 font-arabic text-xs text-gold-light opacity-80 sm:text-sm">
                        للفعاليات والتجهيزات التقنية
                      </div>
                      <div className="mt-6 flex items-center justify-center gap-2">
                        {[0, 1, 2].map((i) => (
                          <Star key={i} size={14} className="text-gold" animate delay={i * 0.3} />
                        ))}
                      </div>
                    </div>
                  </div>
                </ArchFrame>
              </motion.div>

              {/* Floating Statistics Cards */}
              <div className="absolute inset-0 z-20 hidden md:block">
                {STATS.map((s) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + s.delay, duration: 0.6 }}
                    className={`absolute ${s.position}`}
                    style={{ scale: s.scale }}
                  >
                    <motion.div
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
                      className="flex min-w-[150px] flex-col items-center justify-center rounded-[20px] border border-white/40 bg-white/60 p-4 shadow-[0_12px_40px_-12px_rgba(20,14,106,0.15)] backdrop-blur-xl"
                    >
                      <div className="font-display text-3xl font-bold text-navy">
                        <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} duration={3} />
                      </div>
                      <div className="mt-1 font-arabic text-xs font-bold text-navy/70">
                        {s.label}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              
              {/* Thin decorative circles around the arch */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy/[0.04] lg:block" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy/[0.03] lg:block" />

            </div>

            {/* Mobile Statistics Grid */}
            <div className="mt-12 grid grid-cols-2 gap-4 md:hidden">
              {STATS.map((s, i) => (
                <Reveal key={s.label} direction="up" delay={i * 0.1}>
                  <div className="flex flex-col items-center justify-center rounded-[20px] border border-navy/5 bg-white p-5 shadow-sm">
                    <div className="font-display text-3xl font-bold text-gradient-gold">
                      <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} duration={3} />
                    </div>
                    <div className="mt-1.5 font-arabic text-xs font-bold text-navy/80">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ScrollArrow href="#features" />
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, CalendarDays, MonitorSpeaker, Cpu, FileText, ChevronsDown } from "lucide-react";
import { Star, FloatingParticles, LightRays } from "@/components/brand/Decorations";
import { Magnetic } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";

const BULLETS = [
  { icon: CalendarDays, text: "إدارة الفعاليات والمؤتمرات" },
  { icon: MonitorSpeaker, text: "شاشات LED وأنظمة صوت احترافية" },
  { icon: Cpu, text: "حلول رقمية وتجهيزات تقنية" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yArch = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream pt-24 pb-12 sm:pt-32"
    >
      {/* Soft Background Gradients */}
      <div className="absolute -top-40 -right-40 h-[800px] w-[800px] rounded-full bg-navy/[0.03] blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-gold/[0.04] blur-[100px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col-reverse items-center justify-between gap-16 px-6 sm:px-8 lg:flex-row lg:items-center lg:gap-12">
        
        {/* LEFT SIDE: Content (RTL -> Right visually) */}
        <motion.div
          style={{ y: yContent, opacity }}
          className="flex w-full flex-1 flex-col items-start text-right lg:max-w-[640px]"
        >


          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2.5rem] font-bold leading-[1.15] tracking-tight text-navy sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            نصنع فعاليات وتجارب
            <br />
            <span className="text-gold">استثنائية تضيء</span> علامتك التجارية
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-lg font-arabic text-lg leading-relaxed text-navy/70 sm:text-xl"
          >
            حلول متكاملة للفعاليات والمعارض والمؤتمرات والتجهيزات التقنية بأعلى معايير الجودة وأحدث التقنيات.
          </motion.p>

          {/* Service Cards (Horizontal) */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
            }}
            className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {BULLETS.map((b) => (
              <motion.div
                key={b.text}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="group flex flex-col items-start gap-4 rounded-[20px] border border-white/80 bg-white/60 p-5 shadow-[0_8px_30px_-12px_rgba(20,14,106,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_40px_-12px_rgba(20,14,106,0.1)]"
              >
                <div className="rounded-full bg-navy/5 p-2.5 transition-colors group-hover:bg-navy/10">
                  <b.icon className="h-5 w-5 text-navy" />
                </div>
                <span className="font-arabic text-sm font-semibold leading-snug text-navy">
                  {b.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
            className="mt-10 flex flex-col w-full sm:w-auto sm:flex-row items-center gap-4"
          >
            <Magnetic strength={0.2}>
              <a
                href="#contact"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-navy px-8 py-4 font-arabic text-base font-semibold text-white shadow-[0_8px_20px_-8px_rgba(20,14,106,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-light hover:shadow-[0_12px_25px_-8px_rgba(20,14,106,0.6)]"
              >
                احجز استشارة مجانية
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </a>
            </Magnetic>

          </motion.div>

          {/* Footer of Content Column: Scroll Indicator & Small Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-12 flex w-full flex-col items-start gap-8 border-t border-navy/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3 opacity-60">
              <div className="flex h-[34px] w-[22px] items-start justify-center rounded-full border-2 border-navy/30 p-1">
                <motion.span
                  animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1.5 w-1.5 rounded-full bg-navy/60"
                />
              </div>
              <span className="font-arabic text-xs font-medium text-navy/60">اكتشف المزيد</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              {[
                { value: 450, suffix: "+", label: "فعالية ناجحة" },
                { value: 150, suffix: "+", label: "عميل وشريك" },
                { value: 12, suffix: "+", label: "سنوات خبرة" },
                { value: 93, suffix: "%", label: "رضا العملاء" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-start text-right">
                  <div className="flex items-center justify-end font-display text-2xl font-bold text-navy">
                    {s.suffix === "+" && <span className="mr-0.5 text-lg text-gold">+</span>}
                    <Counter to={s.value} duration={2.5} />
                    {s.suffix === "%" && <span className="ml-0.5 text-lg text-gold">%</span>}
                  </div>
                  <span className="font-arabic text-[11px] font-medium text-muted-foreground sm:text-xs">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: Visual (Left visually in RTL) */}
        <motion.div
          style={{ y: yArch }}
          className="relative flex w-full flex-1 items-center justify-center lg:h-[650px]"
        >
          {/* Decorative Circular Lines */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute h-[350px] w-[350px] rounded-full border border-navy/5 sm:h-[450px] sm:w-[450px]" 
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="absolute h-[250px] w-[250px] rounded-full border border-navy/10 sm:h-[350px] sm:w-[350px]" 
          />

          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="relative flex h-[400px] w-[260px] items-center justify-center sm:h-[480px] sm:w-[320px]">
              <img 
                src="/images/logo.png" 
                alt="In Lights Logo" 
                className="h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(20,14,106,0.2)]"
              />
            </div>
          </motion.div>

          {/* Floating Leaves (Simplified SVG Abstract shapes) */}
          <motion.svg
            initial={{ opacity: 0, rotate: -20, x: -20 }}
            animate={{ opacity: 0.6, rotate: 0, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -right-4 bottom-24 h-32 w-32 text-navy/20 sm:-right-8"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M50 100 Q 10 90 10 50 Q 10 10 50 10 Q 90 10 90 50 Q 90 90 50 100" opacity="0.5" />
            <path d="M50 90 Q 20 80 20 50 Q 20 20 50 20 Q 80 20 80 50 Q 80 80 50 90" />
          </motion.svg>

          {/* Floating Particles & Stars */}
          <FloatingParticles count={15} className="z-20" />
          <div className="absolute top-10 right-10 sm:right-20"><Star size={24} animate delay={0} glow /></div>
          <div className="absolute bottom-20 left-4 sm:left-10"><Star size={18} animate delay={1} glow /></div>
          <div className="absolute top-1/2 -right-4 sm:-right-8"><Star size={14} animate delay={2} glow /></div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2 flex items-center justify-center text-gold transition-all hover:text-gold-light opacity-90 hover:opacity-100 drop-shadow-md"
      >
        <ChevronsDown className="h-10 w-10 animate-pulse" strokeWidth={1.5} />
      </motion.a>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Sparkles, Lightbulb, Zap, ShieldCheck } from "lucide-react";
import { Star, LightRays, FloatingParticles } from "@/components/brand/Decorations";
import { Logo } from "@/components/brand/Logo";
import { Magnetic } from "@/components/motion/Reveal";

const BULLETS = [
  { icon: Lightbulb, text: "أضواء LED عالية الجودة" },
  { icon: Sparkles, text: "تصاميم حديثة ومبتكرة" },
  { icon: Zap, text: "تقنية متقدمة وموثوقة" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yArch = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.92]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen overflow-hidden bg-cream pt-24"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Decorative arches in background */}
      <motion.div
        style={{ y: yArch }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        {/* Giant arch silhouette behind */}
        <div className="relative h-[120%] w-[90%] max-w-3xl">
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 arch-shape bg-gradient-to-b from-white/0 via-navy/[0.04] to-navy/[0.08]" />
          <div className="absolute left-1/2 top-1/2 h-[85%] w-[75%] -translate-x-1/2 -translate-y-1/2 arch-shape border-2 border-navy/10" />
        </div>
      </motion.div>

      {/* Floating particles */}
      <FloatingParticles count={18} />

      {/* Scattered twinkling stars */}
      {[
        { top: "18%", left: "12%", size: 22, delay: 0 },
        { top: "30%", left: "85%", size: 16, delay: 0.6 },
        { top: "65%", left: "8%", size: 14, delay: 1.2 },
        { top: "75%", left: "88%", size: 20, delay: 1.8 },
        { top: "22%", left: "70%", size: 12, delay: 0.9 },
        { top: "55%", left: "92%", size: 18, delay: 1.5 },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute"
          style={{ top: s.top, left: s.left }}
        >
          <Star size={s.size} animate delay={s.delay} />
        </div>
      ))}

      {/* Content */}
      <motion.div
        style={{ y: yContent, opacity, scale }}
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pb-20 pt-10 text-center sm:px-6 lg:px-8"
      >
        {/* Animated logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-6"
        >
          <div className="absolute inset-0 -z-10">
            <LightRays rays={12} />
          </div>
          <Logo size={90} animated />
        </motion.div>

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-5 py-2 font-arabic text-sm text-navy shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          شركة الإضاءة المتكاملة
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-bold leading-[1.15] text-navy sm:text-6xl md:text-7xl"
        >
          أهلاً بك في
          <br />
          <span className="shimmer-text">عالم الإضاءة</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 max-w-2xl font-arabic text-lg text-muted-foreground sm:text-xl"
        >
          نقدّم لكم أحدث وأجمل حلول الإضاءة بأ تقنياتٍ متقدمة وتصاميمَ عصرية
          تُضيء مساحاتكم بأناقة وتوفيرٍ في الطاقة.
        </motion.p>

        {/* Bullet points */}
        <motion.ul
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.8 } },
          }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {BULLETS.map((b) => (
            <motion.li
              key={b.text}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white/80 px-4 py-2 font-arabic text-sm font-medium text-navy shadow-sm"
            >
              <b.icon className="h-4 w-4 text-gold" />
              {b.text}
            </motion.li>
          ))}
        </motion.ul>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Magnetic strength={0.4}>
            <a
              href="#products"
              className="group inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 font-arabic text-base font-semibold text-cream shadow-glow-navy transition-all hover:bg-navy-light hover:shadow-glow-gold"
            >
              اكتشف الآن
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy/20 bg-white/60 px-8 py-4 font-arabic text-base font-semibold text-navy backdrop-blur transition-all hover:border-navy hover:bg-white"
            >
              <ShieldCheck className="h-5 w-5 text-gold" />
              معرض الأعمال
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-arabic text-xs text-navy/50">اكتشف المزيد</span>
          <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-navy/30 p-1.5">
            <motion.span
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-gold"
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

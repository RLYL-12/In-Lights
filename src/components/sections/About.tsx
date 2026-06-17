"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award, Users } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/motion/Reveal";
import { Star, ArchFrame, FloatingParticles } from "@/components/brand/Decorations";
import { Logo } from "@/components/brand/Logo";

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

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const logoY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const logoRotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* Decorative arch */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] arch-shape bg-navy/[0.04]" />
      <FloatingParticles count={12} className="opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: visual */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              style={{ y: logoY, rotate: logoRotate }}
              className="relative mx-auto flex max-w-md items-center justify-center"
            >
              {/* Big arch frame with logo */}
              <ArchFrame
                variant="navy"
                className="h-[460px] w-[360px] animate-arch-glow"
              >
                <div className="relative grid h-full place-items-center">
                  <FloatingParticles count={10} />
                  <div className="absolute inset-0 bg-grid-cream opacity-20" />
                  {/* Glow */}
                  <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
                  <div className="relative z-10 text-center">
                    <Logo size={110} animated />
                    <div className="mt-6 font-display text-2xl font-bold text-cream">
                      In Lights
                    </div>
                    <div className="font-arabic text-sm text-gold-light">
                      الفعاليات والتجهيزات التقنية
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} size={14} animate delay={i * 0.2} />
                      ))}
                    </div>
                  </div>
                </div>
              </ArchFrame>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute -left-4 top-12 rounded-2xl bg-white p-3 shadow-glow-navy"
              >
                <div className="font-display text-2xl font-bold text-navy">+300</div>
                <div className="font-arabic text-xs text-muted-foreground">فعالية</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -right-4 bottom-16 rounded-2xl bg-gold p-3 shadow-glow-gold"
              >
                <div className="font-display text-2xl font-bold text-navy">+150</div>
                <div className="font-arabic text-xs text-navy">عميل</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="من نحن"
              align="start"
              title="نُحوّل رؤيتك إلى فعالية استثنائية"
              subtitle="إن لايتس (Enlights) شركة متخصصة في إدارة وتجهيز الفعاليات والمعارض والمؤتمرات. نجمع بين الإبداع والخبرة لنقدّم تجارب استثنائية تضيء علامتك التجارية وتُبقي حضوراً لا يُنسى."
            />

            <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2">
              {VALUES.map((v) => (
                <StaggerChild key={v.title}>
                  <div className="group flex h-full gap-3 rounded-2xl border border-navy/10 bg-white/70 p-4 transition-all hover:border-gold/40 hover:bg-white hover:shadow-glow-navy">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-cream transition-transform group-hover:scale-110 group-hover:rotate-3">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-navy">
                        {v.title}
                      </h4>
                      <p className="mt-0.5 font-arabic text-xs leading-relaxed text-muted-foreground">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </StaggerChild>
              ))}
            </StaggerGroup>

            <Reveal direction="up" delay={0.3} className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 font-arabic text-base font-semibold text-cream shadow-glow-navy transition-all hover:bg-navy-light hover:shadow-glow-gold"
              >
                تعرّف على خدماتنا
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

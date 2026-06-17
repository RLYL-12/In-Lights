"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Phone } from "lucide-react";
import { Star, LightRays, FloatingParticles } from "@/components/brand/Decorations";
import { Logo } from "@/components/brand/Logo";
import { Magnetic } from "@/components/motion/Reveal";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy via-navy to-navy-light px-6 py-16 text-center shadow-glow-navy sm:px-12 sm:py-20">
          {/* Decorations */}
          <div className="absolute inset-0 bg-grid-cream opacity-20" />
          <FloatingParticles count={20} />
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />

          {/* Light rays from center */}
          <div className="absolute left-1/2 top-1/2 -z-0">
            <LightRays rays={16} />
          </div>

          {/* Floating logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10 mx-auto mb-6 w-fit"
          >
            <Logo size={70} animated />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-10"
          >
            {/* Stars row */}
            <div className="mb-5 flex items-center justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <Star key={i} size={18} animate delay={i * 0.2} />
              ))}
            </div>

            <h2 className="font-display text-3xl font-bold leading-tight text-cream sm:text-5xl">
              جاهزون لإضاءة مشروعكم؟
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-arabic text-base text-cream/70 sm:text-lg">
              ابدأ رحلتك مع إن لايتس اليوم. استشارة مجانية، تصاميم مبتكرة، وتنفيذ
              احترافي يُضيء مساحتك بأناقة.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Magnetic strength={0.4}>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 font-arabic text-base font-bold text-navy shadow-glow-gold transition-all hover:bg-gold-light"
                >
                  ابدأ الآن
                  <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a
                  href="tel:+966112345678"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-cream/30 px-8 py-4 font-arabic text-base font-semibold text-cream transition-all hover:border-cream hover:bg-cream/10"
                >
                  <Phone className="h-5 w-5" />
                  اتصل بنا مباشرة
                </a>
              </Magnetic>
            </div>

            <p className="mt-6 font-arabic text-sm text-cream/50">
              استشارة أولى مجانية بالكامل • ردّ خلال ٢٤ ساعة
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

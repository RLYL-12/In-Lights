"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star as StarIcon, ChevronRight, ChevronLeft } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Star } from "@/components/brand/Decorations";
import { cn } from "@/lib/utils";

const PARTNERS = [
  "أرامكو",
  "سابك",
  "سيمبول",
  "ساب",
  "الديار",
  "نخبة",
  "روشن",
  "الإعمار",
];

const TESTIMONIALS = [
  {
    name: "فهد العنزي",
    role: "مدير فعاليات",
    company: "شركة سابك",
    text: "تعامل احترافي وتنفيذ فاق التوقعات. فريق إن لايتس مرن ومتعاون وسريع الاستجابة. مؤتمرنا كان نجاحاً كبيراً بفضلهم.",
    rating: 5,
  },
  {
    name: "ريم الشهري",
    role: "رئيسة قسم التسويق",
    company: "أرامكو",
    text: "نظّموا معرضنا السنوي بإتقان مذهل — من شاشات LED إلى إدارة الحضور، كل تفصيلة كانت مدروسة بعناية.",
    rating: 5,
  },
  {
    name: "ماجد القحطاني",
    role: "منسق عام",
    company: "وزارة الاتصالات",
    text: "فعالية حكومية بمستوى عالمي. الاحترافية والالتزام بالمواعيد جعلهم خيارنا الأول لكل فعالياتنا الرسمية.",
    rating: 5,
  },
  {
    name: "نوال الحربي",
    role: "مديرة مشاريع",
    company: "جامعة الملك سعود",
    text: "مؤتمرنا الأكاديمي كان تجربة استثنائية. التجهيزات التقنية والبث المباشر عملت بسلاسة تامة. شكراً إن لايتس.",
    rating: 5,
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);

  function go(d: number) {
    setDir(d);
    setIndex((prev) => (prev + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  const t = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-navy py-20 sm:py-28">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-cream opacity-30" />
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

      {/* Partners marquee */}
      <div className="relative z-10 mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="mb-6 text-center">
          <span className="font-arabic text-sm font-medium text-gold-light">
            موثوق به من جهات حكومية وشركات وجامعات
          </span>
        </Reveal>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy to-transparent" />
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy to-transparent" />
          <div className="flex w-max animate-[marquee-rtl_30s_linear_infinite] gap-4">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <div
                key={i}
                className="flex h-16 min-w-36 items-center justify-center rounded-2xl border border-cream/15 bg-white/5 px-8 backdrop-blur-sm"
              >
                <span className="font-display text-xl font-bold text-cream/70">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="آراء العملاء"
          variant="light"
          title="ماذا قال عملاؤنا عنّا"
          subtitle="ثقة جهات حكومية وشركات وجامعات — هذه بعض كلماتهم التي تُشرفنا."
        />

        <div className="relative mt-12">
          <div className="relative mx-auto max-w-3xl">
            {/* Big quote mark */}
            <Quote className="absolute -top-6 right-0 h-20 w-20 text-gold/15" />

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir > 0 ? 60 : -60, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: dir > 0 ? -60 : 60, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-cream/15 bg-white/5 p-8 backdrop-blur-sm sm:p-12"
              >
                {/* Stars */}
                <div className="mb-5 flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="font-arabic text-lg leading-relaxed text-cream sm:text-2xl">
                  «{t.text}»
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-light font-display text-lg font-bold text-navy">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-cream">
                      {t.name}
                    </div>
                    <div className="font-arabic text-sm text-gold-light">
                      {t.role} — {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => go(-1)}
                className="grid h-12 w-12 place-items-center rounded-full border border-cream/20 text-cream transition-all hover:bg-cream hover:text-navy"
                aria-label="السابق"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDir(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      i === index ? "w-8 bg-gold" : "w-2 bg-cream/30 hover:bg-cream/50"
                    )}
                    aria-label={`الشهادة ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => go(1)}
                className="grid h-12 w-12 place-items-center rounded-full border border-cream/20 text-cream transition-all hover:bg-cream hover:text-navy"
                aria-label="التالي"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

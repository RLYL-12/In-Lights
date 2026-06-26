"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Star as StarIcon, ChevronRight, ChevronLeft } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Star } from "@/components/brand/Decorations";
import { cn } from "@/lib/utils";
import { ANIMATION, STYLES } from "@/lib/constants";

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

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [isHovered, paginate]);

  // Swipe handling
  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -10000) paginate(1);
    else if (swipe > 10000) paginate(-1);
  };

  const t = TESTIMONIALS[index];

  return (
    <div 
      className="relative h-full w-full overflow-hidden bg-navy p-8 sm:p-12 lg:p-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-grid-cream opacity-[0.03]" />
      <div className="absolute left-1/4 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] translate-x-1/2 translate-y-1/2 rounded-full bg-gold/10 blur-[100px]" />
      
      {/* Floating Stars inside container */}
      <Star size={16} className="absolute left-[10%] top-[20%] text-gold opacity-60" animate delay={0} />
      <Star size={24} className="absolute right-[15%] top-[15%] text-gold opacity-40" animate delay={1} />
      <Star size={18} className="absolute bottom-[20%] right-[25%] text-gold opacity-50" animate delay={2} />

      <div className="relative z-10 mx-auto flex h-full flex-col">
        <SectionHeading
          eyebrow="آراء العملاء"
          variant="light"
          title="ماذا قال عملاؤنا عنّا"
          subtitle="ثقة جهات حكومية وشركات وجامعات — هذه بعض كلماتهم التي تُشرفنا."
          align="center"
        />

        <div className="relative mt-auto flex flex-1 items-center justify-center py-8">
          {/* Previous Button */}
          <button
            onClick={() => paginate(-1)}
            className="absolute -right-2 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy hover:shadow-lg lg:flex"
            aria-label="السابق"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>

          {/* Main Card */}
          <div className="w-full max-w-xl overflow-hidden px-2 lg:px-14">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="relative cursor-grab rounded-[24px] border border-white/10 bg-white/5 p-8 backdrop-blur-md active:cursor-grabbing sm:p-10"
              >
                <div className="mb-6 flex items-center justify-center gap-1.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-gold text-gold drop-shadow-md" />
                  ))}
                </div>

                <p className="text-center font-arabic text-lg leading-relaxed text-cream sm:text-xl">
                  «{t.text}»
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-light font-display text-lg font-bold text-navy shadow-[0_0_20px_rgba(216,179,93,0.3)]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display text-base font-bold text-cream">
                      {t.name}
                    </div>
                    <div className="mt-1 font-arabic text-xs text-gold-light opacity-90">
                      {t.role} — {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={() => paginate(1)}
            className="absolute -left-2 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy hover:shadow-lg lg:flex"
            aria-label="التالي"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                i === index ? "w-8 bg-gold shadow-[0_0_10px_rgba(216,179,93,0.5)]" : "w-2 bg-white/20 hover:bg-white/40"
              )}
              aria-label={`الشهادة ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

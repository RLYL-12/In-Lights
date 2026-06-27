"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Volume2,
  Languages,
  ClipboardCheck,
  Presentation,
  Armchair,
  Lightbulb,
  Heart,
  ArrowUpLeft,
  Check,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal, Magnetic } from "@/components/motion/Reveal";
import { Star, ArchFrame, FloatingParticles, ScrollArrow } from "@/components/brand/Decorations";
import { cn } from "@/lib/utils";

const PRODUCTS = [
  {
    icon: Monitor,
    name: "شاشات LED",
    tag: "الأكثر طلباً",
    desc: "شاشات LED عالية الدقة بأحجام متنوعة",
    points: ["دقة 4K", "أحجام قابلة للتخصيص", "تركيب احترافي"],
    color: "from-[#140e6a] to-[#2a1f8f]",
    badge: "عرض",
  },
  {
    icon: Volume2,
    name: "أنظمة صوت",
    tag: "احترافية",
    desc: "أنظمة صوت احترافية للفعاليات الكبرى",
    points: ["صوت نقي عالي القوة", "ميكروفونات لاسلكية", "مهندس صوت مختص"],
    color: "from-[#c9a24a] to-[#e0c478]",
    badge: "صوت",
  },
  {
    icon: Languages,
    name: "أجهزة ترجمة",
    tag: "متعددة اللغات",
    desc: "أجهزة ترجمة فورية لجميع اللغات",
    points: ["دعم 32 لغة", "سماعات لاسلكية", "كابينة عازلة للصوت"],
    color: "from-[#2a1f8f] to-[#140e6a]",
    badge: "ترجمة",
  },
  {
    icon: ClipboardCheck,
    name: "تنظيم الحضور",
    tag: "استقبال",
    desc: "أكشاك تسجيل إلكتروني ذكية لاستقبال الضيوف",
    points: ["تسجيل ذاتي سريع", "طباعة بطاقات الحضور", "تتبع الحضور"],
    color: "from-[#a87d2e] to-[#c9a24a]",
    badge: "تسجيل",
  },
  {
    icon: Presentation,
    name: "منصات عرض",
    tag: "منصة",
    desc: "منصات عرض احترافية للفعاليات",
    points: ["تصاميم مخصصة", "ارتفاعات متعددة", "إضاءة مدمجة"],
    color: "from-[#2a1f8f] to-[#3d2fb0]",
    badge: "عرض",
  },
  {
    icon: Armchair,
    name: "أثاث فعاليات",
    tag: "تأجير",
    desc: "أثاث راقٍ للفعاليات والمؤتمرات",
    points: ["كراسي Congress", "طاولات استقبال", "تنجيد فاخر"],
    color: "from-[#140e6a] to-[#0a0840]",
    badge: "أثاث",
  },
  {
    icon: Lightbulb,
    name: "إضاءة مسرح",
    tag: "إضاءة",
    desc: "أنظمة إضاءة احترافية للمسرح والفعاليات",
    points: ["إضاءة Moving Head", "تحكم DMX", "مؤثرات بصرية"],
    color: "from-[#c9a24a] to-[#a87d2e]",
    badge: "إضاءة",
  },
];

const FILTERS = [
  { id: "all", label: "الكل" },
  { id: "عرض", label: "عرض" },
  { id: "صوت", label: "صوت" },
  { id: "ترجمة", label: "ترجمة" },
  { id: "تسجيل", label: "تسجيل" },
  { id: "أثاث", label: "أثاث" },
  { id: "إضاءة", label: "إضاءة" },
];

export function Products() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [filter, setFilter] = useState("all");
  
  // Carousel States
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.badge === filter);
  const maxIndex = Math.max(0, filtered.length - cardsToShow);

  // Responsive Cards to Show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset index when filter changes to prevent out-of-bounds
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // Autoplay Logic
  useEffect(() => {
    if (isHovered || maxIndex === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  const handleNext = () => setCurrentIndex((p) => (p >= maxIndex ? 0 : p + 1));
  const handlePrev = () => setCurrentIndex((p) => (p <= 0 ? maxIndex : p - 1));

  function toggleFav(productName: string) {
    const idx = PRODUCTS.findIndex(p => p.name === productName);
    setFavorites((prev) =>
      prev.includes(idx) ? prev.filter((x) => x !== idx) : [...prev, idx]
    );
  }

  // Calculate active center card for the premium scale effect
  const isCenterCard = (idx: number) => {
    if (cardsToShow === 3) return idx === currentIndex + 1;
    if (cardsToShow === 1) return idx === currentIndex;
    return false;
  };

  return (
    <section id="products" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      {/* Premium Background Elements & Decoration */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-cream opacity-90" />
      
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-navy/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[100px]" />
      <FloatingParticles count={15} className="opacity-40" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Heading & Favorites */}
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionHeading
            eyebrow="المتجر"
            title="متجر استئجار المعدات والتجهيزات"
            subtitle="تأجير وبيع المعدات التقنية للفعاليات — استكشف مجموعتنا الفاخرة من التجهيزات الاحترافية."
          />
          <AnimatePresence>
            {favorites.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 px-5 py-2 font-arabic text-sm font-medium text-navy shadow-sm backdrop-blur-md"
              >
                <Heart className="h-4 w-4 fill-gold text-gold" />
                لديك {favorites.length} منتج في المفضلة
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Filter Tabs */}
        <Reveal direction="up" delay={0.2} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "rounded-full border px-6 py-2.5 font-arabic text-sm font-semibold transition-all duration-300",
                  filter === f.id
                    ? "border-navy bg-navy text-white shadow-[0_4px_14px_rgba(20,14,106,0.3)]"
                    : "border-navy/10 bg-white/60 text-navy/70 backdrop-blur-sm hover:border-navy/30 hover:bg-white hover:text-navy hover:shadow-sm"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Carousel Container */}
        <div 
          className="relative mt-16 w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={handleNext}
                aria-label="التالي"
                className="absolute -right-4 sm:-right-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-navy/5 bg-white text-navy shadow-[0_8px_30px_-10px_rgba(20,14,106,0.2)] transition-all duration-300 hover:scale-110 hover:border-gold/40 hover:text-gold lg:-right-8"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <button
                onClick={handlePrev}
                aria-label="السابق"
                className="absolute -left-4 sm:-left-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-navy/5 bg-white text-navy shadow-[0_8px_30px_-10px_rgba(20,14,106,0.2)] transition-all duration-300 hover:scale-110 hover:border-gold/40 hover:text-gold lg:-left-8"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Draggable Track */}
          <div className="overflow-hidden py-12 px-2" dir="rtl">
            <motion.div
              className="flex w-full cursor-grab active:cursor-grabbing"
              animate={{ x: `${currentIndex * (100 / cardsToShow)}%` }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipeThreshold = 50;
                if (offset.x > swipeThreshold) handleNext(); // Swiped Right in RTL -> Next
                else if (offset.x < -swipeThreshold) handlePrev(); // Swiped Left in RTL -> Prev
              }}
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((p, idx) => {
                  const globalIdx = PRODUCTS.findIndex(prod => prod.name === p.name);
                  const isFav = favorites.includes(globalIdx);
                  const activeCenter = isCenterCard(idx);

                  return (
                    <motion.div
                      key={p.name}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: activeCenter ? 1 : 0.85, 
                        scale: activeCenter ? 1.05 : 1 
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="flex-none px-3 sm:px-4"
                      style={{ width: `${100 / cardsToShow}%` }}
                    >
                      <div className={cn(
                        "group relative flex h-full flex-col overflow-hidden rounded-[24px] border bg-white transition-all duration-500",
                        activeCenter 
                          ? "border-gold/30 shadow-[0_20px_50px_-12px_rgba(20,14,106,0.15)]" 
                          : "border-navy/5 shadow-[0_8px_30px_-12px_rgba(20,14,106,0.08)] hover:-translate-y-2 hover:border-gold/20 hover:shadow-[0_16px_40px_-12px_rgba(20,14,106,0.12)]"
                      )}>
                        
                        {/* Card Image / Visual Header */}
                        <div className={`relative h-[200px] overflow-hidden bg-gradient-to-b ${p.color}`}>
                          <ArchFrame variant="cream" className="absolute -bottom-10 left-1/2 h-48 w-40 -translate-x-1/2 opacity-20">
                            <div className="grid h-full place-items-center">
                              <p.icon className="h-16 w-16 text-navy/30" />
                            </div>
                          </ArchFrame>
                          
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 group-hover:scale-110">
                            <div className="grid h-[88px] w-[88px] place-items-center rounded-full bg-white/10 backdrop-blur-sm">
                              <p.icon className="h-10 w-10 text-cream" strokeWidth={1.5} />
                            </div>
                          </div>
                          
                          <span className="absolute right-4 top-4 rounded-full bg-[#EAE5D9] px-4 py-1.5 font-arabic text-xs font-semibold text-navy">
                            {p.tag}
                          </span>
                          
                          {/* Favorite Button */}
                          <button
                            onClick={(e) => { e.stopPropagation(); toggleFav(p.name); }}
                            aria-label="أضف إلى المفضلة"
                            className={cn(
                              "absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110",
                              isFav ? "bg-white text-gold shadow-md" : "bg-white/15 text-cream hover:bg-white/25"
                            )}
                          >
                            <Heart className={cn("h-5 w-5 transition-colors", isFav ? "fill-gold text-gold" : "stroke-[1.5]")} />
                          </button>

                          {/* Decorative Star */}
                          <Star size={18} className="absolute bottom-4 left-4 text-gold opacity-90 drop-shadow-[0_0_8px_rgba(216,179,93,0.8)]" animate />
                        </div>

                        {/* Card Content */}
                        <div className="flex flex-1 flex-col px-6 py-7 sm:px-7">
                          <div className="mb-2 flex items-center justify-between gap-2">
                            <h3 className="font-display text-2xl font-bold text-navy">
                              {p.name}
                            </h3>
                            <span className="rounded-full bg-navy/[0.04] px-3 py-1 font-arabic text-[11px] font-semibold text-navy/60">
                              {p.badge}
                            </span>
                          </div>
                          
                          <p className="mb-7 font-arabic text-sm leading-relaxed text-navy/60">
                            {p.desc}
                          </p>
                          
                          <ul className="mb-8 flex-1 space-y-3.5">
                            {p.points.map((pt) => (
                              <li key={pt} className="flex items-center gap-3 font-arabic text-sm font-medium text-navy/70">
                                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                                  <Check className="h-3 w-3" strokeWidth={2.5} />
                                </span>
                                {pt}
                              </li>
                            ))}
                          </ul>

                          {/* CTA Button */}
                          <a 
                            href="https://salla.sa/inlights/pAwKrYX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex w-full items-center justify-center gap-2 rounded-full bg-navy/[0.03] px-5 py-4 font-arabic text-sm font-bold text-navy transition-all duration-300 hover:bg-navy hover:text-white hover:shadow-[0_8px_20px_-8px_rgba(20,14,106,0.4)]"
                          >
                            احجز الآن
                            <ArrowUpLeft className="h-[18px] w-[18px] transition-transform group-hover/btn:-translate-x-1" strokeWidth={2} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Pagination Dots */}
        {maxIndex > 0 && (
          <div className="mt-2 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`انتقل إلى الشريحة ${i + 1}`}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-500",
                  currentIndex === i ? "w-8 bg-navy shadow-glow-navy" : "w-2.5 bg-navy/15 hover:bg-navy/30"
                )}
              />
            ))}
          </div>
        )}
      </div>
      <ScrollArrow href="#portfolio" />
    </section>
  );
}

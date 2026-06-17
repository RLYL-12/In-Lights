"use client";

import { useState } from "react";
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
} from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal, StaggerGroup, StaggerChild, Magnetic } from "@/components/motion/Reveal";
import { Star, ArchFrame } from "@/components/brand/Decorations";
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
    name: "أجهزة ترجمة فورية",
    tag: "متعددة اللغات",
    desc: "أجهزة ترجمة فورية لجميع اللغات",
    points: ["دعم 32 لغة", "سماعات لاسلكية", "كابينة عازلة للصوت"],
    color: "from-[#2a1f8f] to-[#140e6a]",
    badge: "ترجمة",
  },
  {
    icon: ClipboardCheck,
    name: "أكشاك تسجيل",
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
    name: "إضاءة احترافية",
    tag: "إضاءة مسرح",
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

  const filtered = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.badge === filter);

  function toggleFav(i: number) {
    setFavorites((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  }

  return (
    <section id="products" className="relative overflow-hidden bg-muted/40 py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + favorites counter */}
        <div className="flex flex-col items-center gap-4">
          <SectionHeading
            eyebrow="المتجر"
            title="متجر المعدات والتجهيزات"
            subtitle="تأجير وبيع المعدات التقنية للفعاليات — من شاشات LED إلى أنظمة الصوت والإضاءة الاحترافية."
          />
          {/* Favorites badge */}
          {favorites.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-arabic text-sm font-medium text-navy"
            >
              <Heart className="h-4 w-4 fill-gold text-gold" />
              لديك {favorites.length} منتج في المفضلة
            </motion.div>
          )}
        </div>

        {/* Filter tabs */}
        <Reveal direction="up" delay={0.2} className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "rounded-full border px-5 py-2 font-arabic text-sm font-medium transition-all",
                  filter === f.id
                    ? "border-navy bg-navy text-cream shadow-glow-navy"
                    : "border-navy/15 bg-white text-navy/70 hover:border-navy/40 hover:text-navy"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => {
              const idx = PRODUCTS.indexOf(p);
              const isFav = favorites.includes(idx);
              return (
                <motion.div
                  key={p.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-navy"
                >
                  {/* Arch visual top */}
                  <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.color}`}>
                    <div className="absolute inset-0 bg-grid-cream opacity-20" />
                    <ArchFrame
                      variant="cream"
                      className="absolute -bottom-8 left-1/2 h-40 w-32 -translate-x-1/2 opacity-20"
                    >
                      <div className="grid h-full place-items-center">
                        <p.icon className="h-12 w-12 text-navy/40" />
                      </div>
                    </ArchFrame>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-[55%]">
                      <div className="grid h-20 w-20 place-items-center rounded-full bg-white/15 backdrop-blur-sm">
                        <p.icon className="h-10 w-10 text-cream" />
                      </div>
                    </div>
                    <span className="absolute right-3 top-3 rounded-full bg-cream/90 px-3 py-1 font-arabic text-xs font-semibold text-navy">
                      {p.tag}
                    </span>
                    {/* Favorite button */}
                    <button
                      onClick={() => toggleFav(idx)}
                      aria-label="أضف إلى المفضلة"
                      className={cn(
                        "absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-full backdrop-blur transition-all hover:scale-110",
                        isFav
                          ? "bg-gold text-navy"
                          : "bg-white/20 text-cream hover:bg-white/30"
                      )}
                    >
                      <motion.span
                        key={isFav ? "fav" : "not"}
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <Heart className={cn("h-4 w-4", isFav && "fill-navy")} />
                      </motion.span>
                    </button>
                    <Star size={16} className="absolute left-4 bottom-3" animate />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <h3 className="font-display text-xl font-bold text-navy">
                        {p.name}
                      </h3>
                      <span className="rounded-full bg-navy/5 px-2 py-0.5 font-arabic text-[10px] font-medium text-navy/60">
                        {p.badge}
                      </span>
                    </div>
                    <p className="mb-4 font-arabic text-sm text-muted-foreground">
                      {p.desc}
                    </p>
                    <ul className="space-y-2">
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-center gap-2 font-arabic text-xs text-navy/80"
                        >
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                            <Check className="h-3 w-3" />
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <Magnetic strength={0.3} className="mt-5">
                      <button className="group/btn flex w-full items-center justify-center gap-2 rounded-full bg-navy/5 px-4 py-3 font-arabic text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-cream">
                        احجز الآن
                        <ArrowUpLeft className="h-4 w-4 transition-transform group-hover/btn:-translate-x-1" />
                      </button>
                    </Magnetic>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

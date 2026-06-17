"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpLeft, BookOpen, Newspaper } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal, StaggerGroup, StaggerChild, Magnetic } from "@/components/motion/Reveal";
import { Star, ArchFrame } from "@/components/brand/Decorations";
import { cn } from "@/lib/utils";

const POSTS = [
  {
    title: "كيف تختار الإضاءة المثالية لمنزلك؟",
    excerpt:
      "دليل شامل لاختيار أنواع الإضاءة المناسبة لكل غرفة، من الإضاءة العامة إلى الإضاءة الموجّهة، مع نصائح عملية لتحقيق أجواء مثالية.",
    category: "نصائح",
    date: "١٥ يونيو ٢٠٢٤",
    readTime: "٦ دقائق",
    color: "from-[#140e6a] to-[#2a1f8f]",
    featured: true,
  },
  {
    title: "تقنيات LED: ثورة في عالم الإضاءة",
    excerpt:
      "تعرّف على أحدث تقنيات LED وكيف غيّرت صناعة الإضاءة، من توفير الطاقة إلى التحكّم الذكي بالألوان والشدّة.",
    category: "تقنية",
    date: "٨ يونيو ٢٠٢٤",
    readTime: "٤ دقائق",
    color: "from-[#c9a24a] to-[#a87d2e]",
  },
  {
    title: "إضاءة المساحات التجارية: أفضل الممارسات",
    excerpt:
      "كيف تُصمّم إضاءة تجارية تُبرز منتجاتك وتجذب العملاء؟ نصائح من خبرائنا في إن لايتس.",
    category: "أعمال",
    date: "١ يونيو ٢٠٢٤",
    readTime: "٥ دقائق",
    color: "from-[#2a1f8f] to-[#140e6a]",
  },
  {
    title: "توفير الطاقة عبر الإضاءة الذكية",
    excerpt:
      "أنظمة الإضاءة الذكية لا تُضيء منزلك فحسب، بل تُوفّر فواتير الكهرباء. تعرّف على كيفية تطبيقها.",
    category: "استدامة",
    date: "٢٥ مايو ٢٠٢٤",
    readTime: "٧ دقائق",
    color: "from-[#a87d2e] to-[#c9a24a]",
  },
];

const CATEGORIES = ["الكل", "نصائح", "تقنية", "أعمال", "استدامة"];

export function Blog() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <section id="blog" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 arch-shape bg-gold/[0.05]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="المدونة"
          title="أحدث مقالاتنا ونصائحنا"
          subtitle="مقالات ودروس حول عالم الإضاءة، أحدث التقنيات، ونصائح لاختيار أفضل الحلول لمساحاتكم."
        />

        {/* Category pills */}
        <Reveal direction="up" delay={0.2} className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((c, i) => (
              <button
                key={c}
                className={cn(
                  "rounded-full border px-4 py-1.5 font-arabic text-xs font-medium transition-all",
                  i === 0
                    ? "border-navy bg-navy text-cream"
                    : "border-navy/15 bg-white text-navy/70 hover:border-navy/40 hover:text-navy"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Featured post */}
          <Reveal direction="up" delay={0.3} className="lg:row-span-2">
            <article className="group relative h-full overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-navy">
              {/* Visual */}
              <div className={`relative h-72 overflow-hidden bg-gradient-to-br ${featured.color}`}>
                <div className="absolute inset-0 bg-grid-cream opacity-20" />
                <ArchFrame
                  variant="cream"
                  className="absolute -bottom-12 left-1/2 h-56 w-44 -translate-x-1/2 opacity-20"
                >
                  <div className="grid h-full place-items-center">
                    <Newspaper className="h-20 w-20 text-navy/40" />
                  </div>
                </ArchFrame>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110">
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-white/15 backdrop-blur-sm">
                    <BookOpen className="h-12 w-12 text-cream" />
                  </div>
                </div>
                <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 font-arabic text-xs font-bold text-navy">
                  مقال مميّز
                </span>
                <Star size={18} className="absolute left-4 top-4" animate />
              </div>
              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="mb-3 flex items-center gap-3 font-arabic text-xs text-muted-foreground">
                  <span className="rounded-full bg-navy/5 px-3 py-1 font-semibold text-navy">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold leading-snug text-navy sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mb-5 font-arabic text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {featured.excerpt}
                </p>
                <Magnetic strength={0.3}>
                  <a
                    href="#blog"
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-arabic text-sm font-semibold text-cream transition-all hover:bg-navy-light"
                  >
                    اقرأ المقال كاملاً
                    <ArrowUpLeft className="h-4 w-4 transition-transform group-hover/btn:-translate-x-1" />
                  </a>
                </Magnetic>
              </div>
            </article>
          </Reveal>

          {/* Smaller posts */}
          <StaggerGroup className="flex flex-col gap-6">
            {rest.map((p) => (
              <StaggerChild key={p.title}>
                <article className="group relative flex h-full gap-4 overflow-hidden rounded-3xl border border-navy/10 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-navy sm:p-5">
                  {/* Visual */}
                  <div className={`relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br ${p.color} sm:h-36 sm:w-40`}>
                    <div className="absolute inset-0 bg-grid-cream opacity-20" />
                    <div className="grid h-full place-items-center">
                      <BookOpen className="h-10 w-10 text-cream/80" />
                    </div>
                    <Star size={12} className="absolute left-2 top-2" animate />
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col">
                    <div className="mb-1.5 flex flex-wrap items-center gap-2 font-arabic text-[10px] text-muted-foreground">
                      <span className="rounded-full bg-navy/5 px-2 py-0.5 font-semibold text-navy">
                        {p.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {p.readTime}
                      </span>
                    </div>
                    <h4 className="mb-1 font-display text-base font-bold leading-snug text-navy sm:text-lg">
                      {p.title}
                    </h4>
                    <p className="mb-2 line-clamp-2 font-arabic text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {p.excerpt}
                    </p>
                    <a
                      href="#blog"
                      className="mt-auto inline-flex items-center gap-1 font-arabic text-xs font-semibold text-gold"
                    >
                      اقرأ المزيد
                      <ArrowUpLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                    </a>
                  </div>
                </article>
              </StaggerChild>
            ))}
          </StaggerGroup>
        </div>

        {/* View all */}
        <Reveal direction="up" delay={0.3} className="mt-10 text-center">
          <a
            href="#blog"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy/20 px-8 py-3.5 font-arabic text-base font-semibold text-navy transition-all hover:border-navy hover:bg-navy hover:text-cream"
          >
            تصفّح كل المقالات
            <ArrowUpLeft className="h-5 w-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

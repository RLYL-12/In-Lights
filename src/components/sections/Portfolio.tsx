"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpLeft, Building2, Home, Store } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "الكل", icon: Building2 },
  { id: "residential", label: "سكني", icon: Home },
  { id: "commercial", label: "تجاري", icon: Store },
  { id: "outdoor", label: "خارجي", icon: MapPin },
];

const PROJECTS = [
  {
    id: 1,
    title: "إضاءة صالة معيشة فاخرة",
    category: "residential",
    location: "الرياض",
    image: "/images/portfolio/project-1.png",
    year: "2024",
  },
  {
    id: 2,
    title: "إضاءة حدائق ومسارات",
    category: "outdoor",
    location: "جدة",
    image: "/images/portfolio/project-2.png",
    year: "2024",
  },
  {
    id: 3,
    title: "إضاءة بهو مكتبي",
    category: "commercial",
    location: "الرياض",
    image: "/images/portfolio/project-3.png",
    year: "2023",
  },
  {
    id: 4,
    title: "إضاءة ممرات جدارية",
    category: "residential",
    location: "الدمام",
    image: "/images/portfolio/project-4.png",
    year: "2024",
  },
  {
    id: 5,
    title: "إضاءة مطعم راقٍ",
    category: "commercial",
    location: "مكة",
    image: "/images/portfolio/project-5.png",
    year: "2023",
  },
  {
    id: 6,
    title: "إضاءة واجهة فندق",
    category: "outdoor",
    location: "الرياض",
    image: "/images/portfolio/project-6.png",
    year: "2024",
  },
];

export function Portfolio() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="معرض الأعمال"
          title="مشاريع أضاءت مساحاتنا"
          subtitle="نظرة على بعض المشاريع التي نفّذناها بشغفٍ وإتقان، من المنازل الفاخرة إلى المرافق التجارية والخارجية."
        />

        {/* Filter tabs */}
        <Reveal direction="up" delay={0.2} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-arabic text-sm font-medium transition-all",
                  active === c.id
                    ? "border-navy bg-navy text-cream shadow-glow-navy"
                    : "border-navy/15 bg-white text-navy/70 hover:border-navy/40 hover:text-navy"
                )}
              >
                <c.icon className="h-4 w-4" />
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects grid */}
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-navy/10 bg-navy shadow-sm"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />

                  {/* Year badge */}
                  <span className="absolute right-4 top-4 rounded-full bg-gold/90 px-3 py-1 font-arabic text-xs font-bold text-navy backdrop-blur">
                    {p.year}
                  </span>

                  {/* Hover icon */}
                  <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-cream/20 text-cream opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                    <ArrowUpLeft className="h-5 w-5" />
                  </div>

                  {/* Bottom content */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-center gap-1.5 font-arabic text-xs text-gold-light">
                      <MapPin className="h-3.5 w-3.5" />
                      {p.location}
                    </div>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-cream transition-transform duration-500 group-hover:-translate-y-1">
                      {p.title}
                    </h3>
                    {/* Hidden desc on hover */}
                    <motion.p
                      initial={false}
                      className="mt-1 font-arabic text-sm text-cream/0 transition-all duration-500 group-hover:text-cream/80"
                    >
                      اكتشف تفاصيل المشروع ←
                    </motion.p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <Reveal direction="up" delay={0.3} className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy/20 px-8 py-3.5 font-arabic text-base font-semibold text-navy transition-all hover:border-navy hover:bg-navy hover:text-cream"
          >
            هل لديك مشروع؟ تواصل معنا
            <ArrowUpLeft className="h-5 w-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

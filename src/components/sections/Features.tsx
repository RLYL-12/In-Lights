"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  MonitorPlay,
  Laptop,
  ArrowUpLeft,
  Check,
} from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/motion/Reveal";
import { Star } from "@/components/brand/Decorations";

const SERVICES = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "إدارة الفعاليات",
    desc: "إدارة وتنظيم فعاليات متكاملة بأعلى معايير الاحترافية",
    items: ["مؤتمرات", "معارض", "حفلات إطلاق المنتجات", "فعاليات الشركات"],
  },
  {
    icon: MonitorPlay,
    step: "02",
    title: "الإنتاج والتجهيز",
    desc: "تجهيزات تقنية متكاملة لإضاءة فعالياتكم بأبهى صورة",
    items: ["شاشات LED", "أنظمة الصوت", "الإضاءة الاحترافية", "المسرح"],
  },
  {
    icon: Laptop,
    step: "03",
    title: "الحلول الرقمية",
    desc: "حلول رقمية مبتكرة لإدارة فعالياتكم بكفاءة",
    items: ["التسجيل الإلكتروني", "إدارة الحضور", "تطبيقات الفعاليات", "البث المباشر"],
  },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-background py-20 sm:py-28">
      {/* Decorative arches */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 arch-shape bg-navy/[0.03]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 arch-shape bg-gold/[0.05]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="خدماتنا"
          title="حلول متكاملة لفعالياتكم"
          subtitle="من إدارة الفعاليات إلى التجهيزات التقنية والحلول الرقمية — نقدّم كل ما تحتاجونه لفعالية ناجحة."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <StaggerChild key={s.step}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-glow-navy">
                {/* Arch top accent */}
                <div className="absolute inset-x-0 top-0 h-24 arch-shape bg-gradient-to-b from-gold/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Step number */}
                <span className="absolute left-6 top-5 font-display text-5xl font-bold text-navy/[0.06] transition-colors group-hover:text-gold/20">
                  {s.step}
                </span>

                <div className="relative flex flex-1 flex-col">
                  {/* Icon in arch frame */}
                  <div className="relative mb-6 inline-flex">
                    <div className="grid h-16 w-16 place-items-center arch-shape bg-gradient-to-b from-navy to-navy-light text-cream shadow-glow-navy transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <s.icon className="h-7 w-7" />
                    </div>
                    <Star
                      size={20}
                      className="absolute -right-2 -top-2 opacity-0 transition-all duration-500 group-hover:opacity-100"
                      animate
                    />
                  </div>

                  <h3 className="mb-2 font-display text-2xl font-bold text-navy">
                    {s.title}
                  </h3>
                  <p className="mb-5 font-arabic text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>

                  {/* Sub-services list */}
                  <ul className="mb-6 mt-auto space-y-2.5">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 font-arabic text-sm text-navy/80"
                      >
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                          <Check className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Learn more link */}
                  <a
                    href="#products"
                    className="inline-flex items-center gap-1 font-arabic text-sm font-medium text-gold opacity-0 transition-all duration-300 group-hover:opacity-100"
                  >
                    اعرف المزيد
                    <ArrowUpLeft className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

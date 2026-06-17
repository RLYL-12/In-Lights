"use client";

import { motion } from "framer-motion";
import {
  PencilRuler,
  Code2,
  Lightbulb,
  Megaphone,
  ArrowUpLeft,
} from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/motion/Reveal";
import { Star } from "@/components/brand/Decorations";

const FEATURES = [
  {
    icon: PencilRuler,
    step: "01",
    title: "التخطيط",
    desc: "ندرس مساحاتكم بعناية ونضع خطط إضاءة دقيقة تلبي احتياجاتكم العملية والجمالية.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "التطوير",
    desc: "نطوّر حلول إضاءة ذكية بأحدث تقنيات LED وكفاءة عالية في استهلاك الطاقة.",
  },
  {
    icon: Code2,
    step: "03",
    title: "التصميم والبرمجة",
    desc: "نصمّم تصاميم عصرية ونبرمج أنظمة تحكّم ذكية تمنحكم تجربة إضاءة فريدة.",
  },
  {
    icon: Megaphone,
    step: "04",
    title: "التسويق والإدارة",
    desc: "نقدّم استشارات متكاملة لإدارة أنظمة الإضاءة وتسويق حلولكم بأعلى المعايير.",
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
          eyebrow="الميزات"
          title="لماذا تختار إن لايتس؟"
          subtitle="نقدّم مساراً متكاملاً من الفكرة إلى التنفيذ، بأربع مراحل تضمن لكم جودةً لا تُضاهى وتصاميمَ تُلهم."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <StaggerChild key={f.step}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-navy/10 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-glow-navy">
                {/* Arch top accent */}
                <div className="absolute inset-x-0 top-0 h-24 arch-shape bg-gradient-to-b from-gold/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Step number */}
                <span className="absolute left-5 top-5 font-display text-5xl font-bold text-navy/[0.06] transition-colors group-hover:text-gold/20">
                  {f.step}
                </span>

                <div className="relative">
                  {/* Icon in arch frame */}
                  <div className="relative mb-6 inline-flex">
                    <div className="grid h-16 w-16 place-items-center arch-shape bg-gradient-to-b from-navy to-navy-light text-cream shadow-glow-navy transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <f.icon className="h-7 w-7" />
                    </div>
                    <Star
                      size={20}
                      className="absolute -right-2 -top-2 opacity-0 transition-all duration-500 group-hover:opacity-100"
                      animate
                    />
                  </div>

                  <h3 className="mb-2 font-display text-xl font-bold text-navy">
                    {f.title}
                  </h3>
                  <p className="font-arabic text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>

                  {/* Learn more link */}
                  <a
                    href="#products"
                    className="mt-4 inline-flex items-center gap-1 font-arabic text-sm font-medium text-gold opacity-0 transition-all duration-300 group-hover:opacity-100"
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

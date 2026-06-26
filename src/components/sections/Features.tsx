"use client";

import { motion } from "framer-motion";
import { Check, MonitorPlay, Laptop, CalendarCheck, Inbox, PenTool, Settings, Activity } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/motion/Reveal";
import { Star, ScrollArrow } from "@/components/brand/Decorations";

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

const WORKFLOW = [
  {
    step: "01",
    icon: Inbox,
    title: "استلام الطلب",
    desc: "نتلقى طلبكم ونفهم هدفكم لنقوم بتبني وأهداف الفعالية بمختلف تفاصيلها.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "تصميم التجربة",
    desc: "نصمم تجربة فريدة مخصصة لفعاليتكم من السيناريو إلى التجهيزات التقنية.",
  },
  {
    step: "03",
    icon: Settings,
    title: "التنفيذ والتجهيز",
    desc: "نجهز الموقع ونثبت كل المعدات بدقة واحترافية قبل بدء الفعالية.",
  },
  {
    step: "04",
    icon: Activity,
    title: "التشغيل والمتابعة",
    desc: "تشغيل ومتابعة كل تفصيلة لضمان تجربة سلسة ومتميزة.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-navy/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="خدماتنا"
          title="حلول متكاملة لفعالياتكم"
          subtitle="من إدارة الفعاليات إلى التجهيزات التقنية والحلول الرقمية — نقدّم كل ما تحتاجونه لفعالية ناجحة."
        />

        {/* --- MAIN SERVICES CARDS --- */}
        <StaggerGroup className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <StaggerChild key={s.step}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-navy/5 bg-white p-8 shadow-[0_8px_30px_-12px_rgba(20,14,106,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-gold/20 hover:shadow-[0_20px_40px_-12px_rgba(20,14,106,0.12)]">
                
                {/* Huge Transparent Number */}
                <div className="pointer-events-none absolute left-6 top-4 select-none font-display text-[80px] font-bold leading-none text-navy/[0.04] transition-colors duration-500 group-hover:text-navy/[0.08]">
                  {s.step}
                </div>

                {/* Arch Icon on the Top Right */}
                <div className="relative mb-10 flex justify-end">
                  <div className="relative">
                    <div className="grid h-[72px] w-[60px] place-items-center rounded-t-full rounded-b-xl bg-navy text-cream shadow-md transition-transform duration-500 group-hover:-translate-y-1">
                      <s.icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <Star
                      size={20}
                      className="absolute -right-3 top-2 text-gold opacity-100 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                      animate
                    />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="relative z-10 flex flex-1 flex-col text-right">
                  <h3 className="mb-3 font-display text-2xl font-bold text-navy">
                    {s.title}
                  </h3>
                  <p className="mb-8 font-arabic text-sm leading-relaxed text-navy/60">
                    {s.desc}
                  </p>

                  {/* Checklist */}
                  <ul className="mt-auto space-y-3">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center justify-start gap-3 font-arabic text-sm text-navy/80">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerGroup>

        {/* --- HORIZONTAL WORKFLOW --- */}
        <div className="mt-32">
          <StaggerGroup className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Desktop Connecting Line */}
            <div className="absolute left-[10%] right-[10%] top-16 z-0 hidden h-[2px] bg-navy lg:block" />

            {WORKFLOW.map((w, idx) => (
              <StaggerChild key={w.step} className="relative z-10">
                <div className="group flex h-full flex-col items-center justify-start rounded-[24px] border border-navy/5 bg-white p-6 text-center shadow-[0_8px_30px_-12px_rgba(20,14,106,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/20 hover:shadow-[0_12px_30px_-12px_rgba(20,14,106,0.12)]">
                  
                  {/* Purple Square Icon with overlapping Gold Number */}
                  <div className="relative mb-6 mt-2">
                    <div className="grid h-16 w-16 place-items-center rounded-[16px] bg-navy text-cream shadow-md transition-transform duration-500 group-hover:scale-105">
                      <w.icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    {/* Gold Circular Number */}
                    <div className="absolute -bottom-3 -left-3 grid h-8 w-8 place-items-center rounded-full border-[3px] border-white bg-gold font-display text-[13px] font-bold text-navy shadow-sm transition-transform duration-500 group-hover:scale-110">
                      {w.step}
                    </div>
                  </div>

                  <h4 className="mb-2 font-display text-lg font-bold text-navy">
                    {w.title}
                  </h4>
                  <p className="font-arabic text-xs leading-relaxed text-navy/60">
                    {w.desc}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerGroup>
        </div>

      </div>
      <ScrollArrow href="#products" />
    </section>
  );
}

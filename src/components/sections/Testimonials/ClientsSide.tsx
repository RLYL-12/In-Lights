"use client";

import Image from "next/image";
import { Star } from "@/components/brand/Decorations";
import { CalendarCheck, Users, Award, Smile, ArrowLeft, ArrowRight } from "lucide-react";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";

// شعارات العملاء من مجلد /public/clients/
const PARTNERS = [
  { name: "CEER",                   src: "/clients/CEER.png" },
  { name: "Renéd",                  src: "/clients/Renǝd.png" },
  { name: "TI'ME",                  src: "/clients/TI'ME.png" },
  { name: "Mazda",                  src: "/clients/mazda.png" },
  { name: "Salam",                  src: "/clients/salam.png" },
  { name: "أشرقت",                  src: "/clients/أشرقت.png" },
  { name: "أمانة العاصمة المقدسة", src: "/clients/أمانة العاصمة المقدسة.png" },
  { name: "الحاج حسين علي رضا",    src: "/clients/الحاج حسين علي رضا.png" },
  { name: "الحجاز مول",            src: "/clients/الحجاز مول.png" },
  { name: "الراجحي للاستثمار",     src: "/clients/الراجحي للإستثمار.png" },
  { name: "الضيافة",               src: "/clients/الضيافة.png" },
  { name: "الهيئة الملكية للجبيل وينبع", src: "/clients/الهيئة الملكية للجبيل وينبع.png" },
  { name: "شركة رحلات ومنافع",     src: "/clients/شركة رحلات ومنافع للسياحة.png" },
  { name: "فن لاند",               src: "/clients/فن لاند.png" },
  { name: "فندق إلاء البيت",       src: "/clients/فندق إلاء البيت.png" },
  { name: "كلنا الخفجي",           src: "/clients/كلنا الخفجي.png" },
  { name: "مهرجان",                src: "/clients/مهرجان.png" },
  { name: "ميلينيوم",              src: "/clients/ميلينيوم.png" },
  { name: "ورقان",                 src: "/clients/ورقان.png" },
  { name: "وزارة الإعلام",         src: "/clients/وزارة الإعلام.png" },
];

// نقسم الشعارات لصفين
const ROW_1 = PARTNERS.slice(0, 10);
const ROW_2 = PARTNERS.slice(10);

const STATS = [
  { value: 300, prefix: "+", suffix: "", label: "فعالية ناجحة", icon: CalendarCheck },
  { value: 150, prefix: "+", suffix: "", label: "عميل وشريك",   icon: Users },
  { value: 12,  prefix: "+", suffix: "", label: "سنوات خبرة",   icon: Award },
  { value: 93,  prefix: "",  suffix: "%", label: "رضا العملاء", icon: Smile },
];

function LogoCard({ partner }: { partner: (typeof PARTNERS)[0] }) {
  return (
    <div className="flex h-[110px] min-w-[180px] items-center justify-center rounded-[20px] border border-navy/8 bg-white px-8 shadow-[0_6px_24px_-8px_rgba(20,14,106,0.12)] sm:min-w-[200px]">
      <Image
        src={partner.src}
        alt={partner.name}
        width={160}
        height={80}
        className="h-[72px] w-auto object-contain"
        unoptimized
      />
    </div>
  );
}

export function ClientsSide() {
  return (
    <div className="flex h-full w-full flex-col bg-cream p-8 sm:p-12 lg:p-16">

      {/* Header */}
      <Reveal direction="down" className="mb-10 text-center">
        <h2 className="inline-flex items-center gap-4 font-display text-3xl font-bold text-navy">
          <Star size={16} className="text-gold" glow={false} />
          عملاؤنا
          <Star size={16} className="text-gold" glow={false} />
        </h2>
      </Reveal>

      <div className="flex flex-1 flex-col justify-center">


        {/* Marquee Row 1 — right-to-left */}
        <div className="relative mb-6 flex overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent" />
          <div className="flex w-max animate-[marquee-rtl_40s_linear_infinite] gap-4">
            {[...ROW_1, ...ROW_1, ...ROW_1].map((p, i) => (
              <LogoCard key={i} partner={p} />
            ))}
          </div>
        </div>

        {/* Marquee Row 2 — left-to-right (reverse) */}
        <div className="relative mb-4 flex overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent" />
          <div className="flex w-max animate-[marquee-rtl_45s_linear_infinite_reverse] gap-4">
            {[...ROW_2, ...ROW_2, ...ROW_2].map((p, i) => (
              <LogoCard key={`r2-${i}`} partner={p} />
            ))}
          </div>
        </div>


      </div>

      {/* Statistics Row */}
      <Reveal direction="up" delay={0.2} className="mt-12">
        <div className="grid grid-cols-2 gap-6 border-t border-navy/5 pt-8 sm:grid-cols-4 sm:gap-4">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <s.icon className="mb-3 h-6 w-6 text-gold" strokeWidth={1.5} />
              <div className="font-display text-2xl font-bold text-navy">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} duration={2.5} />
              </div>
              <div className="mt-1 font-arabic text-xs font-bold text-navy/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Check, Heart, Gift, Baby, Store, Award, BookOpen, Flag, Inbox, PenTool, Settings, Activity } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/motion/Reveal";
import { Star, ScrollArrow } from "@/components/brand/Decorations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SERVICES = [
  {
    icon: Heart,
    step: "01",
    title: "صالة أفراح النساء",
    desc: "خدمات متكاملة لتجهيز صالات الأفراح النسائية بأعلى المعايير.",
    items: ["القاعة", "التقديمات", "الضيافة", "التوزيعات", "البوفيه", "تنسيق الكوشة", "الشاشة", "التصوير", "ركن القهوة", "مفتشات الجوال"],
  },
  {
    icon: Gift,
    step: "02",
    title: "أعياد الميلاد",
    desc: "تجهيز وتنظيم حفلات أعياد الميلاد بكل تفاصيلها لإسعادكم.",
    items: ["القاعة", "التقديمات", "التوزيعات", "البوفيه", "الضيافة", "العروض والفرق", "التصوير", "الصوتيات", "ركن القهوة"],
  },
  {
    icon: Baby,
    step: "03",
    title: "تحديد جنس الجنين والسابع",
    desc: "تنظيم حفلات السابع وتحديد جنس الجنين بلمسات إبداعية ومبتكرة.",
    items: ["القاعة", "التصوير", "الضيافة", "التقديمات", "التوزيعات", "فرقة ترفيهية للأطفال", "الصوتيات"],
  },
  {
    icon: Store,
    step: "04",
    title: "افتتاح المعارض",
    desc: "تجهيزات احترافية لافتتاح المعارض تبرز علامتكم التجارية بأفضل صورة.",
    items: ["سجاد الخزامى", "الدي جي والفرق الشعبية", "التصوير", "المايكات", "الضيافة", "مدخل الاستيج", "الشخصيات الهوائية العملاقة", "الإضاءات"],
  },
  {
    icon: Award,
    step: "05",
    title: "حفلات التكريم والترقية",
    desc: "إدارة وتجهيز حفلات التكريم والترقيات بمستوى عالٍ من الرقي والفخامة.",
    items: ["القاعة", "الضيافة", "البوفيه", "المايكات والصوتيات", "الفرق الشعبية", "التصوير", "الاستيج"],
  },
  {
    icon: BookOpen,
    step: "06",
    title: "عودة الطلاب للمدارس",
    desc: "فعاليات ترفيهية مميزة لاستقبال الطلاب في بداية العام الدراسي.",
    items: ["مدخل بالونات", "فرقة ترفيهية للأطفال", "ركن تصوير", "شخصيات كرتونية", "سجاد خزامى"],
  },
  {
    icon: Flag,
    step: "07",
    title: "اليوم الوطني ويوم التأسيس",
    desc: "تنظيم فعاليات وطنية تعكس الهوية السعودية الأصيلة والتراث.",
    items: ["الفرق الشعبية", "التوزيعات الوطنية", "الضيافة التراثية", "التصوير", "تنسيق الديكورات الوطنية", "الصوتيات"],
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
          subtitle="نقدم مجموعة واسعة ومتكاملة من الخدمات لتنظيم وتجهيز كافة المناسبات والفعاليات بأعلى معايير الاحترافية."
        />

        {/* --- MAIN SERVICES CARDS (CAROUSEL) --- */}
        <div className="mt-16 w-full px-4 sm:px-12 lg:px-16">
          <Carousel
            opts={{
              align: "start",
              direction: "rtl",
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4 py-8">
              {SERVICES.map((s, idx) => (
                <CarouselItem key={s.step} className="pl-4 md:basis-1/2 lg:basis-1/3 h-auto">
                  <Reveal delay={idx * 0.1} className="h-full">
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
                        <p className="mb-4 font-arabic text-sm leading-relaxed text-navy/60">
                          {s.desc}
                        </p>

                        {/* Checklist */}
                        <ul className="mt-2 space-y-3">
                          {s.items.map((item) => (
                            <li key={item} className="flex items-center justify-start gap-3 font-arabic text-sm text-navy/80">
                              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                                <Check className="h-3 w-3" strokeWidth={3} />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        {/* Book Now Button */}
                        <div className="mt-auto border-t border-navy/8 pt-5">
                          <a
                            href="https://wa.me/966552792254"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 font-arabic text-sm font-semibold text-cream shadow-sm transition-all duration-300 hover:bg-gold hover:shadow-md hover:-translate-y-0.5 group/btn"
                          >
                            <span>احجز الآن</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover/btn:-translate-x-1">
                              <path d="m15 18-6-6 6-6"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Carousel Navigation (Sides) */}
            <CarouselPrevious 
              className="absolute left-auto -right-4 sm:-right-10 lg:-right-14 top-1/2 -translate-y-1/2 size-12 bg-white hover:bg-gold hover:text-white border-navy/10 hover:border-gold transition-colors shadow-md z-10" 
              style={{ transform: "translateY(-50%) scaleX(-1)" }}
            />
            <CarouselNext 
              className="absolute right-auto -left-4 sm:-left-10 lg:-left-14 top-1/2 -translate-y-1/2 size-12 bg-white hover:bg-gold hover:text-white border-navy/10 hover:border-gold transition-colors shadow-md z-10" 
              style={{ transform: "translateY(-50%) scaleX(-1)" }}
            />
          </Carousel>
        </div>

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

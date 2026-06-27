"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircleQuestion } from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Star, ScrollArrow } from "@/components/brand/Decorations";

const FAQS = [
  {
    q: "كم مدة تجهيز الفعالية؟",
    a: "تختلف المدة حسب حجم الفعالية ونوعها. الفعاليات الصغيرة قد تستغرق يوماً أو يومين، بينما الفعاليات الكبرى قد تحتاج من 3 إلى 7 أيام. نحدد الجدول الزمني بدقة منذ البداية.",
  },
  {
    q: "هل توفرون خدمات خارج المدينة؟",
    a: "نعم، نُغطي فعاليات في جميع مدن المملكة. ننتقل بفريقنا ومعداتنا أينما كنتم، مع التزام تام بجودة الخدمة في أي موقع.",
  },
  {
    q: "هل يمكن استئجار المعدات فقط؟",
    a: "بالتأكيد! نوفّر خدمة تأجير المعدات (شاشات LED، أنظمة صوت، إضاءة) مع فني تركيب. كما نوفّر خدمة التشغيل الكامل عند الحاجة.",
  },
  {
    q: "كيف يتم التسعير؟",
    a: "التسعير يعتمد على نوع الفعالية، عدد الحضور، المعدات المطلوبة، والمدة. نقدّم عرض سعر مخصصاً ومفصلاً بعد فهم احتياجاتكم. املأ نموذج الحجز للحصول على عرض سريع.",
  },
  {
    q: "هل تقدمون خدمات البث المباشر؟",
    a: "نعم، نوفّر حلول بث مباشر احترافية بجودة عالية على منصات متعددة، مع إمكانية الترجمة الفورية والتفاعل مع الجمهور.",
  },
  {
    q: "ما هي المدن التي تعملون فيها؟",
    a: "نعمل في جميع أنحاء المملكة العربية السعودية — الرياض، جدة، الدمام، مكة، المدينة، وأبها. تواصل معنا لمعرفة التغطية في مدينتك.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-muted/40 py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 arch-shape bg-navy/[0.04]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="الأسئلة الشائعة"
          title="إجاباتٌ لأسئلتكم"
          subtitle="جمعنا لكم أكثر الأسئلة تكراراً. لم تجد إجابتك؟ تواصل معنا مباشرة وسنردّ عليك بسرور."
        />

        <Reveal direction="up" delay={0.2} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-navy/10 bg-white px-5 shadow-sm transition-all data-[state=open]:border-gold/40 data-[state=open]:shadow-glow-navy"
              >
                <AccordionTrigger className="flex items-center gap-3 py-5 text-right hover:no-underline">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-navy/5 text-gold">
                    <HelpCircle className="h-4 w-4" />
                  </span>
                  <span className="flex-1 font-display text-base font-bold text-navy sm:text-lg">
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-11 font-arabic text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        {/* Help card */}
        <Reveal direction="up" delay={0.3} className="mt-8">
          <div className="flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-br from-navy to-navy-light p-8 text-center shadow-glow-navy">
            <Star size={32} animate />
            <div>
              <h3 className="font-display text-xl font-bold text-cream">
                لديك سؤال آخر؟
              </h3>
              <p className="mt-1 font-arabic text-sm text-cream/70">
                فريقنا جاهز للإجابة على جميع استفساراتكم
              </p>
            </div>
            <a
              href="https://wa.me/966552792254"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-arabic text-sm font-semibold text-navy transition-all hover:bg-gold-light"
            >
              <MessageCircleQuestion className="h-4 w-4" />
              تواصل معنا
            </a>
          </div>
        </Reveal>
      </div>
      <ScrollArrow href="#contact" />
    </section>
  );
}

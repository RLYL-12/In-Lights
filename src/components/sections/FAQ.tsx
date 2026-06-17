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
import { Star } from "@/components/brand/Decorations";

const FAQS = [
  {
    q: "ما هي شركة إن لايتس؟",
    a: "إن لايتس (In Lights) شركة متخصصة في حلول الإضاءة المتكاملة، نقدّم تصاميم ومنتجات إضاءة عصرية بأحدث تقنيات LED للقطاعات السكنية والتجارية والخارجية، مع خدمات استشارية وتركيب احترافي.",
  },
  {
    q: "هل يمكنني طلب خدمة معيّنة؟",
    a: "بالتأكيد! نقدّم خدمات مخصّصة بالكامل. سواء كنتم تبحثون عن تصميم إضاءة لمنزل جديد، أو تطوير نظام إضاءة لمكتب، أو إضاءة خارجية لحدائقكم — فريقنا جاهز لتلبية احتياجاتكم بدقة واحترافية.",
  },
  {
    q: "كيف يمكنني طلب خدمة أو منتج؟",
    a: "ببساطة تواصلوا معنا عبر نموذج التواصل في هذه الصفحة، أو اتصلوا بنا مباشرة. سيتواصل معكم مستشارنا لفهم احتياجاتكم وتقديم عرض سعر مخصّص وخطة تنفيذ واضحة.",
  },
  {
    q: "ما هي مدة تنفيذ المشاريع؟",
    a: "تختلف المدة حسب حجم المشروع وتعقيده. المشاريع السكنية الصغيرة قد تستغرق أياماً معدودة، بينما المشاريع التجارية الكبيرة قد تمتد لأسابيع. نلتزم دائماً بمواعيد واضحة منذ البداية.",
  },
  {
    q: "هل تقدّمون ضماناً على المنتجات والتركيب؟",
    a: "نعم، جميع منتجاتنا تأتي بضمان يصل إلى ٥ سنوات، ونقدّم ضماناً على أعمال التركيب لمدة عامين. رضاكم وراحتكم أولويتنا القصوى.",
  },
  {
    q: "ما هي طرق الدفع المتاحة؟",
    a: "نوفّر طرق دفع مرنة تشمل التحويل البنكي، البطاقات الائتمانية، والدفع الإلكتروني. كما نقدّم خطط دفع بالتقسيط للمشاريع الكبيرة لراحتكم.",
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
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-arabic text-sm font-semibold text-navy transition-all hover:bg-gold-light"
            >
              <MessageCircleQuestion className="h-4 w-4" />
              تواصل معنا
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

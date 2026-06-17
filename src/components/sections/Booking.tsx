"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle2,
  CalendarDays,
  Users,
  Wallet,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/motion/Reveal";
import {
  Star,
  FloatingParticles,
} from "@/components/brand/Decorations";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const EVENT_TYPES = [
  "مؤتمر",
  "معرض",
  "حفلة إطلاق منتج",
  "فعالية شركة",
  "فعالية حكومية",
  "أخرى",
];

const CITIES = ["الرياض", "جدة", "الدمام", "مكة", "المدينة", "أخرى"];

const AUDIENCES = [
  "أقل من 50",
  "50-200",
  "200-500",
  "500-1000",
  "أكثر من 1000",
];

const BUDGETS = [
  "أقل من 50 ألف",
  "50-100 ألف",
  "100-250 ألف",
  "250-500 ألف",
  "أكثر من 500 ألف",
];

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "اتصل بنا",
    value: "+966 11 234 5678",
    sub: "السبت - الخميس، ٩ص - ٦م",
    href: "tel:+966112345678",
  },
  {
    icon: Mail,
    label: "راسلنا",
    value: "booking@enlights.sa",
    sub: "نردّ خلال ٢٤ ساعة",
    href: "mailto:booking@enlights.sa",
  },
  {
    icon: MessageCircle,
    label: "واتساب",
    value: "+966 55 123 4567",
    sub: "تواصل فوري عبر واتساب",
    href: "https://wa.me/966551234567",
  },
];

export function Booking() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    toast({
      title: "تم استلام طلبك! ✨",
      description: "سيتواصل معك فريقنا بعرض سعر خلال 24 ساعة.",
    });
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-navy py-20 sm:py-28"
    >
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-grid-cream opacity-60" />

      {/* Floating particles */}
      <FloatingParticles count={24} className="opacity-70" />

      {/* Decorative arches */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 arch-shape bg-gold/[0.07]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 arch-shape bg-cream/[0.04]" />

      {/* Decorative stars */}
      <Star
        size={28}
        className="absolute left-[6%] top-24 opacity-70"
        animate
      />
      <Star
        size={18}
        className="absolute right-[8%] top-1/3 opacity-50"
        animate
        delay={1.5}
      />
      <Star
        size={22}
        className="absolute left-[18%] bottom-24 opacity-40"
        animate
        delay={0.8}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          variant="light"
          eyebrow="احجز فعاليتك"
          title="جاهز لإطلاق فعاليتك القادمة؟"
          subtitle="املأ النموذج التالي وسيتواصل معك فريقنا بعرض سعر مخصص خلال 24 ساعة."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal direction="up" delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-dark relative overflow-hidden rounded-3xl border border-cream/15 p-6 shadow-glow-navy sm:p-8"
            >
              {/* Decorative star */}
              <Star
                size={20}
                className="absolute left-6 top-6 opacity-60"
                animate
              />

              <div className="mb-6 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-gold" />
                <h3 className="font-display text-xl font-bold text-cream">
                  نموذج طلب عرض سعر
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Event type */}
                <div className="sm:col-span-2">
                  <label className="mb-1.5 flex items-center gap-1.5 font-arabic text-sm font-medium text-cream">
                    <Sparkles className="h-4 w-4 text-gold" />
                    نوع الفعالية
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 font-arabic text-sm text-cream outline-none transition-all focus:border-gold focus:bg-cream/10 focus:ring-2 focus:ring-gold/20"
                  >
                    <option value="" disabled className="bg-navy text-cream/60">
                      اختر نوع الفعالية
                    </option>
                    {EVENT_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-navy text-cream">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 font-arabic text-sm font-medium text-cream">
                    <MapPin className="h-4 w-4 text-gold" />
                    المدينة
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 font-arabic text-sm text-cream outline-none transition-all focus:border-gold focus:bg-cream/10 focus:ring-2 focus:ring-gold/20"
                  >
                    <option value="" disabled className="bg-navy text-cream/60">
                      اختر المدينة
                    </option>
                    {CITIES.map((c) => (
                      <option key={c} value={c} className="bg-navy text-cream">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 font-arabic text-sm font-medium text-cream">
                    <CalendarDays className="h-4 w-4 text-gold" />
                    التاريخ
                  </label>
                  <input
                    required
                    type="date"
                    dir="ltr"
                    className="w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 text-right font-arabic text-sm text-cream outline-none transition-all placeholder:text-cream/40 focus:border-gold focus:bg-cream/10 focus:ring-2 focus:ring-gold/20 [color-scheme:dark]"
                  />
                </div>

                {/* Audience */}
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 font-arabic text-sm font-medium text-cream">
                    <Users className="h-4 w-4 text-gold" />
                    عدد الحضور
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 font-arabic text-sm text-cream outline-none transition-all focus:border-gold focus:bg-cream/10 focus:ring-2 focus:ring-gold/20"
                  >
                    <option value="" disabled className="bg-navy text-cream/60">
                      اختر عدد الحضور
                    </option>
                    {AUDIENCES.map((a) => (
                      <option key={a} value={a} className="bg-navy text-cream">
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="mb-1.5 flex items-center gap-1.5 font-arabic text-sm font-medium text-cream">
                    <Wallet className="h-4 w-4 text-gold" />
                    الميزانية التقديرية
                  </label>
                  <select
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-cream/15 bg-cream/5 px-4 py-3 font-arabic text-sm text-cream outline-none transition-all focus:border-gold focus:bg-cream/10 focus:ring-2 focus:ring-gold/20"
                  >
                    <option value="" disabled className="bg-navy text-cream/60">
                      اختر الميزانية
                    </option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b} className="bg-navy text-cream">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading || sent}
                className="mt-6 w-full gap-2 rounded-full bg-gold py-6 font-arabic text-base font-semibold text-navy shadow-glow-gold transition-all hover:bg-gold-light disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-5 w-5 rounded-full border-2 border-navy/30 border-t-navy"
                    />
                    جارٍ الإرسال...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    تم استلام طلبك!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    احصل على عرض سعر
                  </>
                )}
              </Button>

              <p className="mt-3 text-center font-arabic text-xs text-cream/50">
                بياناتك آمنة ولن تُشارك مع أي طرف ثالث.
              </p>
            </form>
          </Reveal>

          {/* Contact info side panel */}
          <Reveal direction="up" delay={0.3} className="lg:col-span-2">
            <div className="relative flex h-full flex-col rounded-3xl border border-cream/15 bg-cream/[0.04] p-6 sm:p-8">
              {/* Decorative star */}
              <Star
                size={22}
                className="absolute left-6 top-6 opacity-50"
                animate
              />

              <h3 className="mb-2 font-display text-xl font-bold text-cream">
                أو تواصل مباشرة
              </h3>
              <p className="mb-6 font-arabic text-sm text-cream/70">
                فريقنا جاهز للإجابة على استفساراتكم وتقديم الاستشارات اللازمة لإنجاح فعاليتكم.
              </p>

              <StaggerGroup className="flex flex-col gap-4">
                {CONTACT_INFO.map((c) => (
                  <StaggerChild key={c.label}>
                    <a
                      href={c.href}
                      className="group flex items-center gap-4 rounded-2xl border border-cream/10 bg-cream/[0.03] p-4 transition-all hover:border-gold/40 hover:bg-cream/[0.07] hover:shadow-glow-gold"
                    >
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-b from-navy-light to-navy text-cream transition-transform group-hover:scale-110 group-hover:rotate-3">
                        <c.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display text-sm font-bold text-gold-light">
                          {c.label}
                        </h4>
                        <p
                          className="mt-0.5 font-arabic text-sm font-medium text-cream"
                          dir="ltr"
                        >
                          {c.value}
                        </p>
                        <p className="font-arabic text-xs text-cream/60">
                          {c.sub}
                        </p>
                      </div>
                    </a>
                  </StaggerChild>
                ))}
              </StaggerGroup>

              {/* Bottom highlight */}
              <div className="mt-auto pt-6">
                <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-l from-gold/10 to-transparent p-4">
                  <div className="flex items-start gap-3">
                    <Star size={20} className="mt-0.5 shrink-0" animate />
                    <div>
                      <p className="font-display text-sm font-bold text-cream">
                        أكثر من 500 فعالية ناجحة
                      </p>
                      <p className="mt-1 font-arabic text-xs text-cream/70">
                        خبرة تتجاوز 10 سنوات في تنظيم وإنتاج الفعاليات في المملكة.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

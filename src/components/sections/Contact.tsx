"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Clock,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Facebook,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/motion/Reveal";
import { Star } from "@/components/brand/Decorations";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "عنوان المكتب",
    value: "طريق الملك فهد، الرياض، المملكة العربية السعودية",
    sub: "مبنى رقم ١٢٣، الدور الرابع",
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "info@inlights.sa",
    sub: "نردّ خلال ٢٤ ساعة",
  },
  {
    icon: Phone,
    label: "الهاتف",
    value: "+966 11 234 5678",
    sub: "السبت - الخميس، ٩ص - ٦م",
  },
  {
    icon: Clock,
    label: "ساعات العمل",
    value: "٩:٠٠ ص - ٦:٠٠ م",
    sub: "السبت إلى الخميس",
  },
];

const SOCIAL = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "X", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    toast({
      title: "تم إرسال رسالتك بنجاح! ✨",
      description: "سيتواصل معك فريقنا في أقرب وقت ممكن.",
    });
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 arch-shape bg-gold/[0.07]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 arch-shape bg-navy/[0.05]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="تواصل معنا"
          title="لنُضيء مشروعك معاً"
          subtitle="هل لديكم فكرة أو مشروع؟ نحن هنا للاستماع. تواصلوا معنا وسنحوّل رؤيتكم إلى واقعٍ مُضيء."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {CONTACT_INFO.map((c) => (
                <StaggerChild key={c.label}>
                  <div className="group flex gap-4 rounded-2xl border border-navy/10 bg-white/70 p-5 transition-all hover:border-gold/40 hover:bg-white hover:shadow-glow-navy">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-cream transition-transform group-hover:scale-110 group-hover:rotate-3">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-navy">
                        {c.label}
                      </h4>
                      <p className="mt-1 font-arabic text-sm font-medium text-navy/80">
                        {c.value}
                      </p>
                      <p className="font-arabic text-xs text-muted-foreground">
                        {c.sub}
                      </p>
                    </div>
                  </div>
                </StaggerChild>
              ))}
            </StaggerGroup>

            {/* Social */}
            <Reveal direction="up" delay={0.3} className="mt-6">
              <div className="rounded-2xl border border-navy/10 bg-white/70 p-5">
                <h4 className="mb-3 font-display text-sm font-bold text-navy">
                  تابعنا على
                </h4>
                <div className="flex flex-wrap gap-2">
                  {SOCIAL.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="grid h-10 w-10 place-items-center rounded-full bg-navy/5 text-navy transition-all hover:bg-navy hover:text-cream hover:scale-110"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="up" delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-6 shadow-glow-navy sm:p-8"
            >
              {/* Decorative star */}
              <Star
                size={20}
                className="absolute left-6 top-6 opacity-30"
                animate
              />

              <h3 className="mb-6 font-display text-xl font-bold text-navy">
                أرسل لنا رسالة
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-arabic text-sm font-medium text-navy">
                    الاسم الكامل
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="اكتب اسمك"
                    className="w-full rounded-xl border border-navy/15 bg-cream/40 px-4 py-3 font-arabic text-sm text-navy outline-none transition-all placeholder:text-navy/40 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-arabic text-sm font-medium text-navy">
                    رقم الجوال
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="05x xxx xxxx"
                    className="w-full rounded-xl border border-navy/15 bg-cream/40 px-4 py-3 font-arabic text-sm text-navy outline-none transition-all placeholder:text-navy/40 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-arabic text-sm font-medium text-navy">
                    البريد الإلكتروني
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="email@example.com"
                    dir="ltr"
                    className="w-full rounded-xl border border-navy/15 bg-cream/40 px-4 py-3 text-right font-arabic text-sm text-navy outline-none transition-all placeholder:text-navy/40 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block font-arabic text-sm font-medium text-navy">
                    نوع المشروع
                  </label>
                  <select
                    className="w-full rounded-xl border border-navy/15 bg-cream/40 px-4 py-3 font-arabic text-sm text-navy outline-none transition-all focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
                  >
                    <option>سكني</option>
                    <option>تجاري</option>
                    <option>خارجي</option>
                    <option>أخرى</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block font-arabic text-sm font-medium text-navy">
                  تفاصيل المشروع
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="أخبرنا عن مشروعك..."
                  className="w-full resize-none rounded-xl border border-navy/15 bg-cream/40 px-4 py-3 font-arabic text-sm text-navy outline-none transition-all placeholder:text-navy/40 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
                />
              </div>

              <Button
                type="submit"
                disabled={loading || sent}
                className="mt-6 w-full gap-2 rounded-full bg-navy py-6 font-arabic text-base font-semibold text-cream shadow-glow-navy transition-all hover:bg-navy-light hover:shadow-glow-gold disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="h-5 w-5 rounded-full border-2 border-cream/30 border-t-cream"
                    />
                    جارٍ الإرسال...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    تم الإرسال بنجاح!
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    أرسل الرسالة
                  </>
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

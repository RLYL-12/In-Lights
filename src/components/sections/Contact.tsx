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
import { Star, ScrollArrow } from "@/components/brand/Decorations";
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // We do NOT preventDefault here. We let the browser submit the form natively to the hidden iframe!
    setLoading(true);

    const form = e.currentTarget;
    
    // Simulate the time it takes to submit
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast({
        title: "تم إرسال رسالتك بنجاح! ✨",
        description: "سيتواصل معك فريقنا في أقرب وقت ممكن.",
      });
      form.reset();
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 arch-shape bg-gold/[0.07]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 arch-shape bg-navy/[0.05]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="تواصل معنا"
          title="لنُحوّل فعاليتك إلى واقع"
          subtitle="هل لديكم فكرة لفعالية؟ نحن هنا للاستماع. تواصلوا معنا وسنُحوّل رؤيتكم إلى تجربة استثنائية لا تُنسى."
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
            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }}></iframe>
            <form
              action="https://formsubmit.co/info@inlights-sa.com"
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-6 shadow-glow-navy sm:p-8 min-h-[400px] flex flex-col justify-center"
            >
              {/* FormSubmit Hidden Fields */}
              <input type="hidden" name="_subject" value="New Project Inquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              {/* Decorative star */}
              <Star
                size={20}
                className="absolute left-6 top-6 opacity-30"
                animate
              />

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 text-gold shadow-glow-gold">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy">تم إرسال رسالتك بنجاح! ✨</h3>
                  <p className="mt-3 font-arabic text-navy/70 text-lg">سيتواصل معك فريقنا في أقرب وقت ممكن.</p>
                </motion.div>
              ) : (
                <>
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
                        name="Full Name"
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
                        name="Phone"
                        placeholder="05x xxx xxxx"
                        pattern="05[0-9]{8}"
                        maxLength={10}
                        minLength={10}
                        dir="ltr"
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                        }}
                        className="w-full rounded-xl border border-navy/15 bg-cream/40 px-4 py-3 text-right font-arabic text-sm text-navy outline-none transition-all placeholder:text-navy/40 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-arabic text-sm font-medium text-navy">
                        البريد الإلكتروني
                      </label>
                      <input
                        required
                        type="email"
                        name="Email"
                        placeholder="email@example.com"
                        dir="ltr"
                        className="w-full rounded-xl border border-navy/15 bg-cream/40 px-4 py-3 text-right font-arabic text-sm text-navy outline-none transition-all placeholder:text-navy/40 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-arabic text-sm font-medium text-navy">
                        نوع المشروع / الفعالية
                      </label>
                      <select
                        name="Project Type"
                        required
                        className="w-full rounded-xl border border-navy/15 bg-cream/40 px-4 py-3 font-arabic text-sm text-navy outline-none transition-all focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20 custom-select"
                      >
                        <option value="" disabled selected>اختر النوع...</option>
                        <option value="المعارض">المعارض (Exhibitions)</option>
                        <option value="المؤتمرات والندوات">المؤتمرات والندوات (Conferences)</option>
                        <option value="حفلات وإطلاقات">حفلات وإطلاقات (Launches)</option>
                        <option value="فعاليات حكومية">فعاليات حكومية (Government)</option>
                        <option value="فعاليات شركات ومؤسسات">فعاليات شركات ومؤسسات (Corporate)</option>
                        <option value="مهرجانات واحتفالات">مهرجانات واحتفالات (Festivals)</option>
                        <option value="أخرى">أخرى (Other)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="mb-1.5 block font-arabic text-sm font-medium text-navy">
                      تفاصيل الفعالية وموعدها
                    </label>
                    <textarea
                      required
                      name="Project Details"
                      rows={4}
                      placeholder="أخبرنا عن تفاصيل الفعالية، موعدها المتوقع، وحجم الحضور..."
                      className="w-full resize-none rounded-xl border border-navy/15 bg-cream/40 px-4 py-3 font-arabic text-sm text-navy outline-none transition-all placeholder:text-navy/40 focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
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
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        أرسل الرسالة
                      </>
                    )}
                  </Button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
      <ScrollArrow href="#footer" />
    </section>
  );
}

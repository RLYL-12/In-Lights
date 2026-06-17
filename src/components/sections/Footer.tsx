"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Facebook,
  ArrowUp,
} from "lucide-react";
import { BrandLockup, Logo } from "@/components/brand/Logo";
import { Star } from "@/components/brand/Decorations";

const FOOTER_LINKS = [
  {
    title: "الشركة",
    links: [
      { label: "من نحن", href: "#about" },
      { label: "خدماتنا", href: "#features" },
      { label: "أعمالنا", href: "#portfolio" },
      { label: "آراء العملاء", href: "#testimonials" },
    ],
  },
  {
    title: "المتجر",
    links: [
      { label: "شاشات LED", href: "#products" },
      { label: "أنظمة صوت", href: "#products" },
      { label: "أجهزة ترجمة", href: "#products" },
      { label: "إضاءة احترافية", href: "#products" },
    ],
  },
  {
    title: "المزيد",
    links: [
      { label: "المدونة", href: "#blog" },
      { label: "احجز فعاليتك", href: "#booking" },
      { label: "الأسئلة الشائعة", href: "#faq" },
      { label: "تواصل معنا", href: "#contact" },
    ],
  },
];

const SOCIAL = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "X", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-cream">
      {/* Top wave */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <BrandLockup variant="light" size={48} />
            <p className="mt-5 max-w-sm font-arabic text-sm leading-relaxed text-cream/60">
              إن لايتس (Enlights) — شركة متخصصة في إدارة وتجهيز الفعاليات
              والمعارض والمؤتمرات. نُحوّل رؤيتكم إلى تجارب استثنائية تُضيء
              علامتكم التجارية.
            </p>

            {/* Contact bits */}
            <ul className="mt-6 space-y-2.5">
              <li className="flex items-center gap-3 font-arabic text-sm text-cream/70">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                طريق الملك فهد، الرياض، السعودية
              </li>
              <li className="flex items-center gap-3 font-arabic text-sm text-cream/70">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                info@enlights.sa
              </li>
              <li className="flex items-center gap-3 font-arabic text-sm text-cream/70">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span dir="ltr">+966 11 234 5678</span>
              </li>
              <li className="flex items-center gap-3 font-arabic text-sm text-cream/70">
                <MessageCircle className="h-4 w-4 shrink-0 text-gold" />
                واتساب: <span dir="ltr">+966 55 123 4567</span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6 flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 text-cream transition-all hover:bg-gold hover:text-navy hover:scale-110"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-cream">
                <Star size={12} glow={false} />
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 font-arabic text-sm text-cream/60 transition-colors hover:text-gold-light"
                    >
                      <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / mini CTA */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 flex items-center gap-2 font-display text-base font-bold text-cream">
              <Star size={12} glow={false} />
              ابقَ على اطلاع
            </h4>
            <p className="mb-3 font-arabic text-sm text-cream/60">
              نشرة شهرية، أحدث الفعاليات والعروض.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                dir="ltr"
                className="w-full rounded-full border border-cream/20 bg-cream/5 px-4 py-2.5 text-right font-arabic text-sm text-cream outline-none transition-all placeholder:text-cream/40 focus:border-gold focus:bg-cream/10"
              />
              <button
                type="submit"
                className="rounded-full bg-gold px-4 py-2.5 font-arabic text-sm font-bold text-navy transition-all hover:bg-gold-light"
              >
                اشترك الآن
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-arabic text-xs text-cream/50">
            © {new Date().getFullYear()} إن لايتس (Enlights) — جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="font-arabic text-xs text-cream/50 transition-colors hover:text-gold-light">
              سياسة الخصوصية
            </a>
            <span className="text-cream/20">|</span>
            <a href="#" className="font-arabic text-xs text-cream/50 transition-colors hover:text-gold-light">
              الشروط والأحكام
            </a>
          </div>
          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 font-arabic text-xs text-cream/70 transition-all hover:border-gold hover:text-gold-light"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            للأعلى
          </motion.a>
        </div>
      </div>

      {/* Bottom strip with logo watermark */}
      <div className="relative overflow-hidden border-t border-cream/10 py-4">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
          <Logo size={120} />
        </div>
        <p className="relative z-10 text-center font-arabic text-xs text-cream/40">
          صُنع بشغفٍ وإتقان • Enlights ✦
        </p>
      </div>
    </footer>
  );
}

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
  ChevronLeft,
  ChevronsUp,
} from "lucide-react";
import { BrandLockup } from "@/components/brand/Logo";
import { Star } from "@/components/brand/Decorations";

const FOOTER_LINKS = [
  {
    title: "الشركة",
    links: [
      { label: "من نحن", href: "#about" },
      { label: "خدماتنا", href: "#services" },
      { label: "أعمالنا", href: "#portfolio" },
      { label: "آراء العملاء", href: "#testimonials" },
      { label: "المدونة", href: "#blog" },
      { label: "الأسئلة الشائعة", href: "#faq" },
    ],
  },
  {
    title: "المنتج",
    links: [
      { label: "شاشات LED", href: "#products" },
      { label: "أنظمة صوت", href: "#products" },
      { label: "أجهزة ترجمة", href: "#products" },
      { label: "إضاءة احترافية", href: "#products" },
    ],
  },
];

const SOCIAL = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "X", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-navy text-cream">
      {/* Top wave / Border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute -left-[200px] bottom-0 h-[400px] w-[400px] rounded-full bg-gold/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand & Socials (Right) */}
          <div className="lg:col-span-3 flex flex-col items-start text-right">
            <BrandLockup variant="light" size={130} />
            <p className="mt-4 max-w-sm font-arabic text-sm leading-relaxed text-cream/70 text-right">
              إن لايتس (Enlights) — شركة متخصصة في إدارة وتجهيز الفعاليات
              والمعارض والمؤتمرات. نُحوّل رؤيتكم إلى تجارب استثنائية تُضيء
              علامتكم التجارية.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3 justify-start w-full max-w-sm">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-cream transition-all duration-300 hover:bg-gold hover:text-navy hover:scale-110 border border-white/10 hover:border-gold"
                >
                  <s.icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact (Middle Right) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="mb-6 flex items-center justify-start gap-2 font-display text-base font-bold text-cream w-full">
              <Star size={12} glow={false} className="ml-2" />
              تواصل معنا
            </h4>
            <ul className="space-y-4 w-full flex flex-col items-start">
              <li className="flex items-start justify-start gap-3 font-arabic text-sm text-cream/80">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span>طريق الملك فهد، الرياض، السعودية</span>
              </li>
              <li className="flex items-center justify-start gap-3 font-arabic text-sm text-cream/80">
                <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span dir="ltr" className="text-left">info@enlights.sa</span>
              </li>
              <li className="flex items-center justify-start gap-3 font-arabic text-sm text-cream/80">
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span dir="ltr" className="text-left">+966 11 234 5678</span>
              </li>
              <li className="flex items-center justify-start gap-3 font-arabic text-sm text-cream/80">
                <MessageCircle className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                <span dir="ltr" className="text-left">+966 55 123 4567</span>
              </li>
            </ul>
          </div>

          {/* Link columns (Middle) */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title} className="lg:col-span-2 flex flex-col items-start">
              <h4 className="mb-6 flex items-center justify-start gap-2 font-display text-base font-bold text-cream w-full">
                <Star size={12} glow={false} className="ml-2" />
                {col.title}
              </h4>
              <ul className="space-y-4 w-full flex flex-col items-start">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group flex items-center justify-start gap-2 font-arabic text-sm text-cream/60 transition-colors hover:text-gold-light"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold/80" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / mini CTA (Left) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="mb-6 flex items-center justify-start gap-2 font-display text-base font-bold text-cream w-full">
              <Star size={12} glow={false} className="ml-2" />
              ابقَ على اطلاع
            </h4>
            <p className="mb-6 font-arabic text-sm text-cream/60 text-right w-full">
              نشرة شهرية، أحدث الفعاليات والعروض.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4 w-full max-w-xs"
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  dir="ltr"
                  className="w-full rounded-full border border-cream/10 bg-white/5 py-3 pl-4 pr-10 text-right font-arabic text-sm text-cream outline-none transition-all placeholder:text-cream/40 hover:border-cream/20 focus:border-gold focus:bg-white/10"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-cream/40" strokeWidth={1.5} />
              </div>
              <button
                type="submit"
                className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light to-gold px-4 py-3 font-arabic text-sm font-bold text-navy transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/20"
              >
                اشترك الآن
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-cream/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Copyright (Right) */}
          <div className="flex items-center gap-2 font-arabic text-sm text-cream/50 order-3 md:order-1">
            © {new Date().getFullYear()} إن لايتس (Enlights) — جميع الحقوق محفوظة.
            <Star size={10} glow={false} className="text-gold" />
          </div>

          {/* Links (Center) */}
          <div className="flex items-center gap-6 order-2">
            <a href="#" className="font-arabic text-sm text-cream/50 transition-colors hover:text-gold-light">
              سياسة الخصوصية
            </a>
            <span className="text-cream/20">|</span>
            <a href="#" className="font-arabic text-sm text-cream/50 transition-colors hover:text-gold-light">
              الشروط والأحكام
            </a>
          </div>

          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            className="inline-flex items-center gap-2 rounded-full border border-cream/10 bg-white/5 px-6 py-2.5 font-arabic text-sm font-medium text-cream transition-all hover:border-gold hover:bg-gold/5 hover:text-gold-light order-1 md:order-3"
          >
            الأعلى
            <ChevronsUp className="h-4 w-4" strokeWidth={1.5} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

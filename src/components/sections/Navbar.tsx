"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandLockup } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#features", label: "الميزات" },
  { href: "#products", label: "المتجر" },
  { href: "#portfolio", label: "أعمالنا" },
  { href: "#testimonials", label: "آراء العملاء" },
  { href: "#blog", label: "المدونة" },
  { href: "#faq", label: "الأسئلة" },
  { href: "#contact", label: "تواصل" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "glass shadow-[0_8px_30px_-12px_rgba(20,14,106,0.25)] border-b border-navy/10"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <BrandLockup variant="dark" size={40} />

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative px-4 py-2 font-arabic text-sm font-medium text-navy/80 transition-colors hover:text-navy"
                >
                  {link.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-right scale-x-0 rounded-full bg-gradient-to-l from-gold to-gold-light transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-navy px-5 py-2.5 font-arabic text-sm font-semibold text-cream shadow-glow-navy transition-all hover:bg-navy-light hover:shadow-glow-gold"
            >
              ابدأ الآن
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-navy/10 text-navy"
              aria-label="القائمة"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="absolute inset-y-0 right-0 w-[78%] max-w-sm bg-cream shadow-2xl"
            >
              <div className="flex flex-col gap-2 p-6 pt-24">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                    className="flex items-center justify-between rounded-2xl border border-navy/10 bg-white px-5 py-4 font-arabic text-lg font-medium text-navy transition-colors hover:bg-navy hover:text-cream"
                  >
                    {link.label}
                    <span className="text-gold">←</span>
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-full bg-navy px-5 py-3.5 text-center font-arabic text-base font-semibold text-cream"
                >
                  ابدأ الآن
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

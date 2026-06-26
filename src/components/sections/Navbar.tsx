"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandLockup } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#features", label: "خدماتنا" },
  { href: "#products", label: "المتجر" },
  { href: "#portfolio", label: "أعمالنا" },

  { href: "#testimonials", label: "آراء العملاء" },
  { href: "#blog", label: "المدونة" },
  { href: "#contact", label: "تواصل" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = "#" + section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            ? "bg-white/80 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(20,14,106,0.15)] border-b border-navy/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 sm:px-8 lg:px-12">
          <BrandLockup variant="dark" size={42} />

          <ul className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "group relative px-2 py-2 font-arabic text-sm font-medium transition-colors",
                      isActive ? "text-navy" : "text-navy/60 hover:text-navy"
                    )}
                  >
                    {link.label}
                    <span 
                      className={cn(
                        "absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-navy transition-transform duration-300",
                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      )} 
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-navy px-7 py-3 font-arabic text-sm font-semibold text-cream shadow-glow-navy transition-all hover:bg-navy-light hover:shadow-lg hover:-translate-y-0.5"
            >
              ابدأ الآن
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-12 w-12 place-items-center rounded-full bg-navy/5 text-navy hover:bg-navy/10 transition-colors"
              aria-label="القائمة"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
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
              className="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-cream shadow-2xl"
            >
              <div className="flex flex-col gap-2 p-8 pt-28">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.href;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.06 }}
                      className={cn(
                        "flex items-center justify-between rounded-2xl px-6 py-4 font-arabic text-lg font-medium transition-colors",
                        isActive 
                          ? "bg-navy text-cream" 
                          : "border border-navy/10 bg-white text-navy hover:bg-navy/5"
                      )}
                    >
                      {link.label}
                      <span className={cn("transition-transform", isActive ? "text-gold" : "text-navy/30")}>←</span>
                    </motion.a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-full bg-navy px-6 py-4 text-center font-arabic text-lg font-semibold text-cream shadow-glow-navy"
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

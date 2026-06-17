# Task 3-c — Section Builder Agent (WorkProcess + Booking + Portfolio update)

## Task
إنشاء قسمي "آلية العمل" (WorkProcess) و"احجز فعاليتك" (Booking) جديدين، وتحديث قسم Portfolio ليتناسب مع محتوى شركة تنظيم الفعاليات (Enlights) بدلاً من شركة الإضاءة.

## Files Touched
- `src/components/sections/WorkProcess.tsx` (NEW) — 4-step horizontal timeline (desktop) / vertical (mobile), arch-shaped icons, stagger animations, hover lift + glow, decorative stars, CTA → #booking
- `src/components/sections/Booking.tsx` (NEW) — glass-dark form on navy bg with bg-grid-cream overlay; 5 fields (event type / city / date / audience / budget), submit button with loading+success states, success toast; side panel with phone/email/WhatsApp contact links and "500 فعالية ناجحة" highlight card; FloatingParticles + animated stars
- `src/components/sections/Portfolio.tsx` (EDIT) — replaced CATEGORIES (exhibition/conference/government/corporate/launch) and PROJECTS (8 events with year/location). Updated SectionHeading copy ("أعمالنا السابقة" / "فعاليات أضاءت مسارهم") and final CTA ("هل لديك فعالية قادمة؟ احجز الآن" → #booking). Kept all existing functionality (filter, AnimatePresence, hover).
- `src/app/page.tsx` (EDIT) — imported and inserted `<WorkProcess />` after `<Features />` and `<Booking />` after `<CTA />`.

## Verification
- `bun run lint` → clean (no errors/warnings)
- dev.log → 200 OK responses after changes
- All existing components (Reveal, StaggerGroup/Child, Star, FloatingParticles, SectionHeading, Button) reused
- Design language consistent: navy/cream/gold palette, arch-shape, stars, RTL, glass-dark, framer-motion stagger/reveal/hover

## Notes for next agent
- Booking form uses `bg-navy` + `glass-dark` + `bg-grid-cream` overlay — verify contrast on light-mode previews
- Date input uses `[color-scheme:dark]` so the native calendar picker shows cream text on navy
- WorkProcess mobile view has a vertical line + animated arrow connectors between steps (only between non-last steps)
- The Portfolio CTA now points to #booking (the new Booking section) rather than #contact

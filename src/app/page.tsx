import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Products } from "@/components/sections/Products";
import { Booking } from "@/components/sections/Booking";
import { Portfolio } from "@/components/sections/Portfolio";
import { Stats } from "@/components/sections/Stats";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Products />
        <Booking />
        <Portfolio />
        <Stats />
        <WorkProcess />
        <Testimonials />
        <FAQ />
        <Blog />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

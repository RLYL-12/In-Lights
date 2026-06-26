import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutOverview } from "@/components/sections/AboutOverview";
import { Features } from "@/components/sections/Features";
import { Products } from "@/components/sections/Products";
import { Portfolio } from "@/components/sections/Portfolio";

import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";

import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { SectionDivider } from "@/components/brand/Decorations";


export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        <SectionDivider className="my-8" />
        <AboutOverview />
        
        <SectionDivider className="my-8" />
        <Features />
        
        <SectionDivider className="my-8" />
        <Products />
        
        <SectionDivider className="my-8" />
        <Portfolio />

        <SectionDivider className="my-8" />
        <Testimonials />
        
        <SectionDivider className="my-8" />
        <FAQ />
        
        {/* <SectionDivider className="my-8" />
        <Blog /> */}

        <SectionDivider className="my-8" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

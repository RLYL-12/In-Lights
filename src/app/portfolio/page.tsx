import { Navbar } from "@/components/sections/Navbar";
import { Portfolio } from "@/components/sections/Portfolio";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "مركز الأعمال | إن لايتس In Lights",
  description: "استكشف أعمالنا السابقة في تنظيم الفعاليات والمؤتمرات.",
};

export default function PortfolioPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-24">
        <Portfolio hideCTA={true} />
      </main>
      <Footer />
    </div>
  );
}

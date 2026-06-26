import { ClientsSide } from "./Testimonials/ClientsSide";
import { TestimonialsSlider } from "./Testimonials/TestimonialsSlider";
import { ScrollArrow } from "@/components/brand/Decorations";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Container */}
        <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_-15px_rgba(20,14,106,0.1)]">
          <div className="flex flex-col md:flex-row">
            
            {/* Right Side: Testimonials Slider (55%) */}
            <div className="w-full md:w-[55%]">
              <TestimonialsSlider />
            </div>

            {/* Left Side: Clients & Statistics (45%) */}
            <div className="w-full md:w-[45%]">
              <ClientsSide />
            </div>

          </div>
        </div>

      </div>
      <ScrollArrow href="#faq" />
    </section>
  );
}

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { FeaturedBooks } from "@/components/home/featured-books";
import { SustainabilityImpact } from "@/components/home/sustainability-impact";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <FeaturedBooks />
        <SustainabilityImpact />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

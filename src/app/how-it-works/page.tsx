import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HowItWorks } from "@/components/home/how-it-works";
import { CTA } from "@/components/home/cta";

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-parchment dark:bg-background py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-5xl font-bold text-secondary dark:text-parchment mb-6">How It Works</h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              A transparent, secure, and easy way to exchange academic books within your campus community.
            </p>
          </div>
        </section>

        <HowItWorks />

        <section className="py-24 bg-parchment dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                  <div className="text-6xl font-serif font-bold text-primary/20 mb-4">01</div>
                  <h3 className="text-2xl font-bold mb-4">List Your Book in Seconds</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Simply scan the ISBN of your textbook. Our system automatically fetches the title, author, and original price. 
                    Upload a few photos of the actual condition and set your price.
                  </p>
                </div>
                <div className="w-full md:w-1/2 bg-white dark:bg-card p-4 rounded-3xl shadow-xl">
                   <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400" alt="Listing" className="rounded-2xl" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                <div className="w-full md:w-1/2">
                  <div className="text-6xl font-serif font-bold text-primary/20 mb-4">02</div>
                  <h3 className="text-2xl font-bold mb-4">Quality Verification</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Once listed, our automated system and manual checkers verify the condition of the book. 
                    This ensures that buyers always get what they expect, maintaining trust in the ecosystem.
                  </p>
                </div>
                <div className="w-full md:w-1/2 bg-white dark:bg-card p-4 rounded-3xl shadow-xl">
                   <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=400" alt="Quality" className="rounded-2xl" />
                </div>
              </div>

               <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                  <div className="text-6xl font-serif font-bold text-primary/20 mb-4">03</div>
                  <h3 className="text-2xl font-bold mb-4">Safe Exchange</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Buyers and sellers can coordinate through our secure chat. 
                    Exchanges typically happen at pre-verified "Pusthaka Hubs" on campus, ensuring safety and convenience for everyone.
                  </p>
                </div>
                <div className="w-full md:w-1/2 bg-white dark:bg-card p-4 rounded-3xl shadow-xl">
                   <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" alt="Exchange" className="rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

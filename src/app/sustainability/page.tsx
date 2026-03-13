'use client';

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Leaf, Recycle, Heart, Globe, TreePine } from "lucide-react";
import { motion } from "framer-motion";

export default function SustainabilityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-primary text-white py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
             <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-8 text-sm font-semibold">
                  <Leaf size={16} />
                  <span>Caring for our planet</span>
                </div>
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">Saving the Planet, One Book at a Time.</h1>
                <p className="text-primary-foreground/80 text-xl leading-relaxed">
                  The textbook industry consumes millions of trees annually. Pusthaka's circular economy model reduces waste, promotes reuse, and makes education sustainable.
                </p>
             </div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
             <Recycle size={600} className="translate-x-1/4 translate-y-1/4" />
          </div>
        </section>

        <section className="py-24 bg-white dark:bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="rounded-[3rem] overflow-hidden shadow-3xl"
               >
                 <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" alt="Environmental impact" />
               </motion.div>
               <div>
                 <h2 className="font-serif text-4xl font-bold mb-8">The Circular Economy of Books</h2>
                 <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                    Traditionally, books follow a linear "take-make-waste" model. Buy new, use once, and throw away or let it rot. 
                    Pusthaka closes the loop.
                 </p>
                 <div className="space-y-8">
                    <div className="flex gap-6">
                       <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 flex-shrink-0">
                          <TreePine size={32} />
                       </div>
                       <div>
                          <h3 className="font-bold text-xl mb-2">Reduced Paper Waste</h3>
                          <p className="text-muted-foreground text-sm">Every second-hand book sold prevents the demand for a new one, saving approximately 4kg of CO2.</p>
                       </div>
                    </div>
                     <div className="flex gap-6">
                       <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 flex-shrink-0">
                          <Globe size={32} />
                       </div>
                       <div>
                          <h3 className="font-bold text-xl mb-2">Affordable Education for All</h3>
                          <p className="text-muted-foreground text-sm">Sustainability isn't just about trees; it's about sustaining student livelihoods by making resources affordable.</p>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-parchment dark:bg-background">
          <div className="container mx-auto px-4 text-center">
             <h2 className="font-serif text-4xl font-bold mb-16">Our Cumulative Impact</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: "Trees Saved", val: "12,450", color: "text-green-600" },
                  { label: "Paper Recycled", val: "450 Tons", color: "text-emerald-600" },
                  { label: "Water Saved", val: "8.2M Liters", color: "text-blue-600" },
                  { label: "Lower Cost of Ed", val: "60%", color: "text-orange-600" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white dark:bg-card p-10 rounded-3xl border border-border shadow-xl">
                     <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.val}</div>
                     <div className="text-muted-foreground font-medium uppercase tracking-widest text-xs">{stat.label}</div>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui-primitives';
import { ArrowRight, BookOpen } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[40px] border-primary-foreground/10 rounded-full" />
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 border-[60px] border-primary-foreground/10 rounded-full" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 text-sm font-semibold">
              <BookOpen size={16} />
              <span>Ready to start?</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Join the Knowledge Loop Today
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-12">
              Start buying, selling or renting academic books at prices that make sense. 
              Be part of the revolution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="bg-white text-primary dark:bg-foreground dark:text-primary hover:bg-white/90 w-full sm:w-auto px-10 shadow-xl py-8">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 w-full sm:w-auto px-10 py-8">
                Explore Marketplace
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

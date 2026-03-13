'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui-primitives';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl dark:opacity-20" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl dark:opacity-20" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
              <Sparkles size={16} />
              <span>India's Largest Academic Exchange</span>
            </div>
            <h1 className="font-serif text-5xl font-bold leading-tight text-secondary dark:text-parchment sm:text-6xl lg:text-7xl">
              Read, Resell, <br />
              <span className="text-primary italic">Repeat.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground dark:text-muted-foreground/90 max-w-lg leading-relaxed">
              Affordable books for every student. Join thousands of students buying, selling, and renting textbooks at 60% lower costs.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="px-8 shadow-xl">
                Browse Books
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Sell Your Book
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-accent flex items-center justify-center text-[10px] font-bold text-accent-foreground">
                    S{i}
                  </div>
                ))}
              </div>
              <p>Trusted by <span className="font-bold text-foreground">10,000+</span> students</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl bg-card p-4 shadow-2xl border border-border dark:border-white/5">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800"
                alt="Stack of books"
                className="rounded-xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-secondary dark:bg-primary p-6 text-white shadow-xl max-w-[200px]">
                <BookOpen size={24} className="mb-2" />
                <p className="font-serif text-lg font-bold">Save up to 60%</p>
                <p className="text-xs text-secondary-foreground/80 dark:text-white/80">On all university textbooks and reference materials.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

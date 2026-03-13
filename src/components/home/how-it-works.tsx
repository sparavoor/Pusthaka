'use client';

import { motion } from 'framer-motion';
import { Search, ShieldCheck, ShoppingCart, RefreshCw } from 'lucide-react';

const steps = [
  {
    title: 'List Book',
    description: 'Scan ISBN, upload photos, and set your price in minutes.',
    icon: Search,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Quality Verification',
    description: 'Our team ensures books are in good condition for the next reader.',
    icon: ShieldCheck,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Buy or Rent',
    description: 'Choose to buy permanently or rent for a semester at low rates.',
    icon: ShoppingCart,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Exchange',
    description: 'Meet at a campus hub or get it delivered to your doorstep.',
    icon: RefreshCw,
    color: 'bg-purple-100 text-purple-600',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white dark:bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl font-bold text-secondary dark:text-parchment mb-4">
            How Pusthaka Works
          </h2>
          <p className="text-muted-foreground text-lg">
            A simple, secure process designed for students to exchange knowledge effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all group"
            >
              <div className={`${step.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <step.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-muted-foreground/30">
                  <span className="text-2xl">→</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

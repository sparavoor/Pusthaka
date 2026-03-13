'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Engineering Student',
    text: 'Pusthaka saved me ₹4000 on my first semester books alone. The condition was amazing!',
    avatar: 'A',
  },
  {
    name: 'Rahul Varma',
    role: 'Medical Intern',
    text: 'Selling my old medical guides was so easy. The hub-pickup feature is a lifesaver.',
    avatar: 'R',
  },
  {
    name: 'Sarah Khan',
    role: 'Literature Major',
    text: 'Love the rental model! I can read reference books for a week without buying them.',
    avatar: 'S',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl font-bold text-secondary dark:text-parchment mb-4">
            Why Students Love Pusthaka
          </h2>
          <p className="text-muted-foreground">
            Join thousands of students who are making smart choices for their wallets and the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-parchment dark:bg-background border border-border relative overflow-hidden group"
            >
              <Quote size={40} className="absolute -top-2 -right-2 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <p className="text-lg leading-relaxed mb-8 italic relative z-10 text-muted-foreground">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-secondary dark:text-parchment">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

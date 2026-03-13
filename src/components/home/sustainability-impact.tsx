'use client';

import { motion } from 'framer-motion';
import { Leaf, Droplet, TreePine, Globe } from 'lucide-react';

const stats = [
  { label: 'Trees Saved', value: '1,200+', icon: TreePine, color: 'text-green-600' },
  { label: 'Paper Recycled', value: '45 Tons', icon: Leaf, color: 'text-emerald-600' },
  { label: 'Water Saved', value: '850k L', icon: Droplet, color: 'text-blue-600' },
  { label: 'Active Students', value: '10,000+', icon: Globe, color: 'text-indigo-600' },
];

export function SustainabilityImpact() {
  return (
    <section className="py-24 bg-secondary dark:bg-card text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold mb-6 text-white">Our Sustainability Mission</h2>
            <p className="text-secondary-foreground/80 dark:text-white/80 text-lg leading-relaxed mb-8">
              Pusthaka isn't just a marketplace; it's a movement towards a circular economy in education. 
              By reusing textbooks, we reduce paper demand, save trees, and make education affordable for everyone.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-6 border border-white/10"
                >
                  <stat.icon size={32} className={`${stat.color} mb-4`} />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-secondary-foreground/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
                alt="Enviromental impact"
                className="w-full h-full object-cover aspect-video lg:aspect-square"
              />
            </div>
            <div className="absolute -top-10 -right-10 bg-primary p-8 rounded-full shadow-2xl animate-bounce">
               <Leaf size={48} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

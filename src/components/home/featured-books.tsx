'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui-primitives';
import { Heart, ShoppingCart, Star } from 'lucide-react';

const books = [
  {
    id: 1,
    title: 'Advanced Engineering Mathematics',
    author: 'Erwin Kreyszig',
    condition: 'Excellent',
    price: 450,
    originalPrice: 1200,
    image: 'https://images.unsplash.com/photo-1543004218-283029ee9b07?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Concepts of Physics',
    author: 'H.C. Verma',
    condition: 'Good',
    price: 280,
    originalPrice: 600,
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
  },
  {
    id: 3,
    title: 'Introduction to Algorithms',
    author: 'CLRS',
    condition: 'Nearly New',
    price: 850,
    originalPrice: 2500,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400',
    rating: 4.7,
  },
];

export function FeaturedBooks() {
  return (
    <section id="featured" className="py-24 bg-parchment dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl font-bold text-secondary dark:text-parchment mb-4">
              Featured Books
            </h2>
            <p className="text-muted-foreground">
              Handpicked quality textbooks at unbeatable prices. Updated daily from verified student sellers.
            </p>
          </div>
          <Button variant="outline">View All Marketplace</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-md text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart size={20} />
                </button>
                <div className="absolute bottom-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {Math.round((1 - book.price / book.originalPrice) * 100)}% OFF
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2 text-xs font-medium text-muted-foreground">
                  <span className="flex items-center gap-1 text-yellow-600 dark:text-yellow-500">
                    <Star size={14} fill="currentColor" />
                    {book.rating}
                  </span>
                  <span className="bg-accent/20 text-accent-foreground px-2 py-0.5 rounded uppercase tracking-wider">
                    {book.condition}
                  </span>
                </div>
                <h3 className="text-lg font-bold line-clamp-1 mb-1 group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 italic">by {book.author}</p>
                
                <div className="flex items-center justify-between mt-auto">
                   <div>
                     <span className="text-2xl font-bold text-primary">₹{book.price}</span>
                     <span className="ml-2 text-sm text-muted-foreground line-through">₹{book.originalPrice}</span>
                   </div>
                   <Button size="sm" className="rounded-xl shadow-md">
                     <ShoppingCart size={16} className="mr-2" />
                     Buy
                   </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

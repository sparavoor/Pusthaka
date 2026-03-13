'use client';

import * as React from 'react';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input, Button } from "@/components/ui-primitives";
import { Search, Filter, SlidersHorizontal, ShoppingCart, Heart, MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Engineering", "Medical", "Arts", "Commerce", "Law", "Management", "Literature"];
const conditions = ["Nearly New", "Excellent", "Good", "Acceptable"];

const mockBooks = [
  { id: 1, title: 'Gray\'s Anatomy', author: 'Henry Gray', price: 1200, originalPrice: 3500, condition: 'Excellent', category: 'Medical', image: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&q=80&w=400', location: 'Delhi' },
  { id: 2, title: 'The Algorithm Design Manual', author: 'Steven Skiena', price: 950, originalPrice: 2200, condition: 'Nearly New', category: 'Engineering', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400', location: 'Bangalore' },
  { id: 3, title: 'Psychology of Money', author: 'Morgan Housel', price: 150, originalPrice: 399, condition: 'Good', category: 'Management', image: 'https://images.unsplash.com/photo-1551029506-0807d46298a0?auto=format&fit=crop&q=80&w=400', location: 'Mumbai' },
  { id: 4, title: 'Introduction to Constitutional Law', author: 'D.D. Basu', price: 450, originalPrice: 900, condition: 'Acceptable', category: 'Law', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400', location: 'Pune' },
  // More mock books
];

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-parchment dark:bg-background pb-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 space-y-8 sticky top-24 hidden lg:block">
              <div>
                <h3 className="font-serif text-lg font-bold mb-4">Subject</h3>
                <div className="space-y-2">
                  {["All", ...categories].map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeCategory === category 
                        ? 'bg-primary text-white font-bold' 
                        : 'hover:bg-primary/10 text-muted-foreground'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold mb-4">Condition</h3>
                <div className="space-y-2">
                  {conditions.map((cond) => (
                    <label key={cond} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer hover:text-primary transition-colors">
                      <input type="checkbox" className="rounded-sm border-input text-primary focus:ring-primary" />
                      {cond}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg font-bold mb-4">Price Range</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Min" className="h-9 text-xs" />
                  <Input placeholder="Max" className="h-9 text-xs" />
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-grow">
              {/* Search and Mobile Filters */}
              <div className="mb-8 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input placeholder="Search by title, author, or ISBN..." className="pl-10 h-12 rounded-full" />
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="lg:hidden rounded-full h-12 w-12 p-0"
                    onClick={() => setIsMobileFilterOpen(true)}
                  >
                    <Filter size={20} />
                  </Button>
                  <Button variant="primary" className="rounded-full h-12 px-6">
                    <Search className="mr-2" size={18} />
                    Search
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                 <p className="text-muted-foreground text-sm">Showing <span className="font-bold text-foreground">124</span> books found</p>
                 <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground hidden sm:block">Sort by:</span>
                    <select className="bg-transparent border border-input rounded-full px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all">
                      <option>Latest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Relevance</option>
                    </select>
                 </div>
              </div>

              {/* Book Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockBooks.map((book) => (
                  <motion.div
                    key={book.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white dark:bg-card border border-border rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                       <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                       <div className="absolute top-3 left-3 bg-secondary/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                         {book.category}
                       </div>
                       <button className="absolute top-3 right-3 p-2 rounded-full bg-white/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                         <Heart size={18} className="text-primary" />
                       </button>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">{book.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{book.author}</p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-accent/20 text-accent-foreground px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-colors group-hover:bg-primary/20 group-hover:text-primary">
                          {book.condition}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <MapPin size={12} />
                          {book.location}
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-t border-border pt-4">
                        <div>
                          <div className="text-xl font-bold text-primary">₹{book.price}</div>
                          <div className="text-[10px] text-muted-foreground line-through">₹{book.originalPrice}</div>
                        </div>
                        <Button size="sm" className="rounded-xl">
                          <ShoppingCart size={14} className="mr-2" />
                          Chat
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Mobile Filter Overlay */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[300px] bg-white dark:bg-card z-[70] shadow-2xl p-6 lg:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-serif text-2xl font-bold">Filters</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="rounded-full"
                >
                  <X size={20} />
                </Button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">Subject</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["All", ...categories].map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`text-left px-3 py-2 rounded-xl text-xs transition-all ${
                          activeCategory === category 
                          ? 'bg-primary text-white shadow-md' 
                          : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">Condition</h3>
                  <div className="space-y-3">
                    {conditions.map((cond) => (
                      <label key={cond} className="flex items-center gap-3 text-sm cursor-pointer group">
                        <input type="checkbox" className="w-5 h-5 rounded-lg border-muted bg-muted text-primary focus:ring-primary/20 transition-all" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{cond}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">Price Range</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <span className="text-[10px] text-muted-foreground ml-1">Min</span>
                      <Input placeholder="₹0" className="rounded-xl" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-muted-foreground ml-1">Max</span>
                      <Input placeholder="₹5000" className="rounded-xl" />
                    </div>
                  </div>
                </div>

                <Button className="w-full h-12 rounded-2xl shadow-lg mt-4" onClick={() => setIsMobileFilterOpen(false)}>
                  Show Results
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

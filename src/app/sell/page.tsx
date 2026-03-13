'use client';

import * as React from 'react';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input, Button } from "@/components/ui-primitives";
import { Camera, Upload, BookOpen, User, MapPin, Tag, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function SellPage() {
  const [step, setStep] = React.useState(1);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-parchment dark:bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="font-serif text-4xl font-bold text-secondary dark:text-parchment mb-4">Sell Your Book</h1>
              <p className="text-muted-foreground italic">Give your books a second life and earn some cash.</p>
            </div>

            {/* Stepper */}
            <div className="flex items-center justify-between mb-12 relative">
               <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
               <div className={`absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 z-0 transition-all duration-500`} style={{ width: `${(step - 1) * 50}%` }} />
               
               {[1, 2, 3].map((s) => (
                 <div key={s} className="relative z-10 flex flex-col items-center">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                     step >= s ? 'bg-primary text-white shadow-lg scale-110' : 'bg-white text-muted-foreground border'
                   }`}>
                     {s}
                   </div>
                   <span className={`text-xs mt-2 font-medium ${step >= s ? 'text-primary' : 'text-muted-foreground'}`}>
                     {s === 1 ? 'Details' : s === 2 ? 'Photos' : 'Price'}
                   </span>
                 </div>
               ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-card rounded-3xl p-8 lg:p-12 shadow-xl border border-border"
            >
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-bold flex items-center gap-2">
                         <BookOpen size={16} className="text-primary" />
                         Book Title
                       </label>
                       <Input placeholder="e.g. Fundamentals of Physics" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold flex items-center gap-2">
                         <User size={16} className="text-primary" />
                         Author
                       </label>
                       <Input placeholder="e.g. David Halliday" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-bold flex items-center gap-2">
                         <Tag size={16} className="text-primary" />
                         ISBN (Optional)
                       </label>
                       <Input placeholder="13-digit ISBN number" />
                       <p className="text-[10px] text-muted-foreground">Scanning ISBN helps us verify book details faster.</p>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold flex items-center gap-2">
                         <Info size={16} className="text-primary" />
                         Condition
                       </label>
                       <select className="flex h-11 w-full rounded-2xl border border-input bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
                         <option>Nearly New</option>
                         <option>Excellent</option>
                         <option>Good</option>
                         <option>Acceptable</option>
                       </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold flex items-center gap-2">
                       <MapPin size={16} className="text-primary" />
                       Location / Campus
                     </label>
                     <Input placeholder="e.g. IIT Delhi Hub, South Campus..." />
                  </div>

                  <Button onClick={() => setStep(2)} className="w-full rounded-2xl py-6 text-lg mt-8">
                    Next: Upload Photos
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 text-center">
                  <div className="border-2 border-dashed border-border rounded-3xl py-12 px-6 flex flex-col items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer group">
                     <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                       <Camera size={40} />
                     </div>
                     <div>
                       <h3 className="font-bold text-xl">Upload Book Photos</h3>
                       <p className="text-muted-foreground text-sm mt-2">Upload cover, back, and any pages with markings.</p>
                     </div>
                     <Button variant="outline" className="rounded-full">
                       <Upload size={18} className="mr-2" />
                       Choose Files
                     </Button>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="ghost" onClick={() => setStep(1)} className="flex-grow rounded-2xl py-6">
                      Back
                    </Button>
                    <Button onClick={() => setStep(3)} className="w-[70%] rounded-2xl py-6 text-lg">
                      Next: Set Price
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                   <div className="text-center p-8 bg-primary/5 rounded-3xl border border-primary/20">
                      <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">You'll Earn</h3>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-4xl font-serif font-bold text-primary">₹</span>
                        <input 
                          type="number" 
                          placeholder="0.00" 
                          className="bg-transparent text-5xl font-serif font-bold text-primary w-40 text-center focus:outline-none placeholder:text-primary/20"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-6">
                        Pro-tip: Books priced 50% below original sell 3x faster!
                      </p>
                   </div>

                   <div className="space-y-4">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input type="checkbox" className="mt-1 rounded text-primary focus:ring-primary" />
                        <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                          I agree to the Pusthaka Quality Policy. I confirm the book matches the description and photos provided.
                        </span>
                      </label>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input type="checkbox" className="mt-1 rounded text-primary focus:ring-primary" />
                        <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                          Allow potential buyers to chat with me directly about this listing.
                        </span>
                      </label>
                   </div>

                   <div className="flex gap-4">
                    <Button variant="ghost" onClick={() => setStep(2)} className="flex-grow rounded-2xl py-6">
                      Back
                    </Button>
                    <Button className="w-[70%] rounded-2xl py-6 text-xl shadow-2xl">
                       List My Book Now
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

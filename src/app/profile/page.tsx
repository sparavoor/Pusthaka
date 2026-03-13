'use client';

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui-primitives";
import { User, Book, Clock, Settings, LogOut, ChevronRight, Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const myBooks = [
  { id: 1, title: "Engineering Mechanics", status: "Active", price: "₹450", views: 24 },
  { id: 2, title: "Discrete Mathematics", status: "Sold", price: "₹300", views: 56 },
];

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-parchment dark:bg-background pb-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Profile Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
               <div className="bg-white dark:bg-card rounded-[2.5rem] p-8 shadow-xl border border-border text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-bold border-4 border-parchment shadow-lg mx-auto">
                      AS
                    </div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 border-4 border-white dark:border-card rounded-full" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold">Ananya Sharma</h2>
                  <p className="text-muted-foreground text-sm mb-6 italic">Engineering @ IIT Delhi</p>
                  
                  <div className="flex justify-center gap-2 mb-8">
                     <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-[10px] font-bold">
                        <Star size={12} fill="currentColor" /> 4.9
                     </span>
                     <span className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-[10px] font-bold uppercase">
                        Verified
                     </span>
                  </div>

                  <nav className="space-y-2 text-left">
                     {[
                       { name: 'My Listings', icon: Book, active: true },
                       { name: 'My Rentals', icon: Clock, active: false },
                       { name: 'Settings', icon: Settings, active: false },
                     ].map((item) => (
                       <button
                         key={item.name}
                         className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                           item.active ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
                         }`}
                       >
                         <div className="flex items-center gap-3">
                           <item.icon size={18} />
                           {item.name}
                         </div>
                         <ChevronRight size={16} />
                       </button>
                     ))}
                     <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors mt-4">
                        <LogOut size={18} />
                        Logout
                     </button>
                  </nav>
               </div>
            </aside>

            {/* Profile Content */}
            <div className="lg:col-span-3 space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: "Books Sold", val: "12", color: "text-blue-600" },
                    { label: "Money Saved", val: "₹5,400", color: "text-green-600" },
                    { label: "Trust Score", val: "98%", color: "text-primary" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white dark:bg-card p-6 rounded-3xl border border-border shadow-sm">
                       <div className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest mb-1">{stat.label}</div>
                       <div className={`text-3xl font-serif font-bold ${stat.color}`}>{stat.val}</div>
                    </div>
                  ))}
               </div>

               <div className="bg-white dark:bg-card rounded-[2.5rem] p-8 lg:p-10 shadow-xl border border-border">
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="font-serif text-2xl font-bold">Manage Listings</h3>
                    <Button size="sm" className="rounded-xl">Add New Book</Button>
                  </div>

                  <div className="space-y-4">
                     {myBooks.map((book) => (
                       <div key={book.id} className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-3xl bg-parchment dark:bg-background border border-border hover:shadow-md transition-all gap-6">
                          <div className="flex items-center gap-6">
                             <div className="w-16 h-20 bg-accent/20 rounded-xl flex items-center justify-center text-primary/30">
                                <Book size={32} />
                             </div>
                             <div>
                                <h4 className="font-bold text-lg">{book.title}</h4>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                                   <span className={`px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                                     book.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-secondary/10 text-secondary'
                                   }`}>
                                      {book.status}
                                   </span>
                                   <span>• {book.views} views</span>
                                   <span>• {book.price}</span>
                                </div>
                             </div>
                          </div>
                          <div className="flex items-center gap-3 w-full sm:w-auto">
                             <Button variant="outline" className="flex-grow sm:flex-grow-0 rounded-xl">Edit</Button>
                             <Button variant="ghost" className="flex-grow sm:flex-grow-0 rounded-xl text-red-500">Delete</Button>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

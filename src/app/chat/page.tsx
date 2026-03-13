'use client';

import * as React from 'react';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input, Button } from "@/components/ui-primitives";
import { Send, Image, MoreVertical, ShieldCheck, MapPin, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const messages = [
  { id: 1, sender: 'Seller', text: 'Hi! Yes, the book is available. There are some pencil marks on page 42 though.', time: '10:30 AM' },
  { id: 2, sender: 'Me', text: 'That is fine. Are you open to meeting at the Central Library hub tomorrow?', time: '10:32 AM' },
  { id: 3, sender: 'Seller', text: 'Tomorrow 2 PM works for me. I will bring the book there.', time: '10:35 AM' },
];

export default function ChatPage() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div className="flex min-h-screen flex-col h-screen max-h-screen overflow-hidden">
      <Navbar />
      <main className="flex-grow bg-parchment dark:bg-background overflow-hidden relative">
        <div className="container mx-auto px-0 sm:px-4 h-full py-0 sm:py-8 flex flex-col">
           <div className="bg-white dark:bg-card flex-grow sm:h-[calc(100vh-200px)] sm:rounded-[3rem] shadow-2xl border-none sm:border border-border overflow-hidden flex flex-col md:flex-row relative">
              
              {/* Contacts Sidebar */}
              <aside className={cn(
                "w-full md:w-80 border-r border-border flex flex-col bg-card transition-all duration-300 absolute md:relative inset-0 z-20 md:z-10",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
              )}>
                 <div className="p-6 border-b border-border bg-card">
                    <h2 className="font-bold text-xl text-foreground">Messages</h2>
                 </div>
                 <div className="flex-grow overflow-y-auto">
                    {[
                      { name: 'Rahul V.', book: 'HC Verma Vol 1', active: true, online: true },
                      { name: 'Sarah K.', book: 'Pride & Prejudice', active: false, online: false },
                      { name: 'Admin Help', book: 'Support Request', active: false, online: true },
                    ].map((contact, i) => (
                      <div 
                        key={i} 
                        onClick={() => setIsSidebarOpen(false)}
                        className={`p-4 flex items-center gap-4 cursor-pointer hover:bg-primary/5 transition-all ${contact.active ? 'bg-primary/10 border-r-4 border-primary' : ''}`}
                      >
                         <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-bold text-accent-foreground text-sm shadow-sm">
                               {contact.name[0]}
                            </div>
                            {contact.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-card rounded-full" />}
                         </div>
                         <div className="flex-grow min-w-0">
                            <div className="flex justify-between items-center mb-1">
                               <h4 className="font-bold text-sm truncate">{contact.name}</h4>
                               <span className="text-[10px] text-muted-foreground">10:35 AM</span>
                            </div>
                            <p className="text-xs text-muted-foreground truncate">{contact.book}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </aside>

              {/* Chat View */}
              <div className="flex-grow flex flex-col bg-white dark:bg-card">
                 {/* Chat Header */}
                 <header className="p-4 sm:p-6 border-b border-border flex justify-between items-center shadow-sm relative z-10 bg-card">
                    <div className="flex items-center gap-3 sm:gap-4">
                       <button 
                         onClick={() => setIsSidebarOpen(true)}
                         className="md:hidden p-2 -ml-2 rounded-full hover:bg-muted transition-colors"
                       >
                          <ChevronLeft size={20} />
                       </button>
                       <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs shadow-md">RV</div>
                       <div>
                          <h3 className="font-bold text-sm dark:text-parchment">Rahul Varma</h3>
                          <div className="flex items-center gap-1 text-[10px] text-green-600 dark:text-green-400 font-bold uppercase tracking-widest">
                             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                             Online
                          </div>
                       </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-4 bg-muted/50 px-4 py-2 rounded-2xl border">
                       <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                          <MapPin size={14} className="text-primary" />
                          IIT Delhi Hub
                       </div>
                       <div className="w-px h-4 bg-border" />
                       <div className="flex items-center gap-1 text-xs font-bold text-green-600">
                          <ShieldCheck size={14} />
                          Secure Hub
                       </div>
                    </div>
                    <button className="p-2 rounded-full hover:bg-muted transition-colors">
                       <MoreVertical size={20} />
                    </button>
                 </header>

                 {/* Message Area */}
                 <div className="flex-grow overflow-y-auto p-4 sm:p-8 space-y-6 bg-parchment/30 dark:bg-background/30">
                    <div className="flex justify-center mb-8">
                       <span className="bg-card px-4 py-1.5 rounded-full text-[10px] font-bold text-muted-foreground uppercase tracking-widest border border-border shadow-sm">Today</span>
                    </div>

                    {messages.map((m) => (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        key={m.id} 
                        className={`flex ${m.sender === 'Me' ? 'justify-end' : 'justify-start'}`}
                      >
                         <div className={`max-w-[85%] sm:max-w-[70%] p-3 sm:p-4 rounded-3xl shadow-sm relative ${
                           m.sender === 'Me' 
                           ? 'bg-primary text-white rounded-tr-none' 
                           : 'bg-muted border border-border dark:border-white/5 rounded-tl-none text-foreground'
                         }`}>
                            <p className="text-sm leading-relaxed">{m.text}</p>
                            <span className={`text-[8px] mt-2 block opacity-70 ${m.sender === 'Me' ? 'text-right' : 'text-left'}`}>
                               {m.time}
                            </span>
                         </div>
                      </motion.div>
                    ))}
                 </div>

                 {/* Input Area */}
                 <footer className="p-6 border-t border-border flex items-center gap-4 bg-card shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
                    <button className="p-3 text-muted-foreground hover:text-primary transition-colors bg-muted/50 rounded-2xl">
                       <Image size={20} />
                    </button>
                    <div className="flex-grow relative">
                       <Input placeholder="Type your message..." className="pr-12 h-14 rounded-[1.25rem] bg-muted/30 dark:bg-white/5 border-none shadow-none focus-visible:ring-primary/20" />
                       <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl">
                          <Send size={18} />
                       </Button>
                    </div>
                 </footer>
              </div>

           </div>
        </div>
      </main>
    </div>
  );
}

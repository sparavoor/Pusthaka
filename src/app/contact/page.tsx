'use client';

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input, Button } from "@/components/ui-primitives";
import { Mail, Phone, MapPin, Send, HelpCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-parchment dark:bg-background pb-20">
        <div className="container mx-auto px-4 py-16">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-12">
                 <div>
                    <h1 className="font-serif text-5xl font-bold text-secondary dark:text-parchment mb-6">Get in Touch</h1>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Have questions about your order? Want to set up a Pusthaka Hub on your campus? We're here to help.
                    </p>
                 </div>

                 <div className="space-y-6">
                    <div className="flex items-center gap-6 p-6 bg-white dark:bg-card rounded-2xl border border-border">
                       <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Mail size={24} />
                       </div>
                       <div>
                          <h3 className="font-bold">Email Us</h3>
                          <p className="text-muted-foreground text-sm">support@pusthaka.com</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 bg-white dark:bg-card rounded-2xl border border-border">
                       <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Phone size={24} />
                       </div>
                       <div>
                          <h3 className="font-bold">Call Us</h3>
                          <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 bg-white dark:bg-card rounded-2xl border border-border">
                       <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <h3 className="font-bold">Our Office</h3>
                          <p className="text-muted-foreground text-sm">123 Education Hub, MG Road, Bangalore</p>
                       </div>
                    </div>
                 </div>

                 <div className="p-8 bg-secondary rounded-3xl text-white">
                    <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                       <HelpCircle size={20} />
                       Quick FAQ
                    </h3>
                    <div className="space-y-4 text-sm text-secondary-foreground">
                       <p><strong>How do I get my money?</strong> Payments are released 24h after the buyer confirms the exchange.</p>
                       <p><strong>Is delivery available?</strong> Yes, we offer hub-to-hub and doorstep delivery in select cities.</p>
                    </div>
                 </div>
              </div>

              <div className="bg-white dark:bg-card p-10 lg:p-12 rounded-[3rem] shadow-2xl border border-border">
                 <h2 className="font-serif text-3xl font-bold mb-8">Send us a Message</h2>
                 <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-sm font-bold">Your Name</label>
                          <Input placeholder="John Doe" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-bold">Email Address</label>
                          <Input type="email" placeholder="john@university.edu" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold">Subject</label>
                       <select className="flex h-11 w-full rounded-2xl border border-input bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
                          <option>General Inquiry</option>
                          <option>Order Support</option>
                          <option>Selling Books</option>
                          <option>Partnership</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold">Message</label>
                       <textarea className="flex min-h-[150px] w-full rounded-2xl border border-input bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50" placeholder="How can we help you today?" />
                    </div>
                    <Button className="w-full rounded-2xl py-6 text-lg shadow-xl uppercase tracking-widest font-bold">
                       <Send size={18} className="mr-2" />
                       Send Message
                    </Button>
                 </form>
              </div>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

'use client';

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui-primitives";
import { Clock, ShieldCheck, CreditCard, RefreshCw, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Standard",
    price: "₹20",
    period: "per week",
    features: ["1 Book at a time", "7-day rental period", "Standard Security Deposit", "Renewable once"],
    recommended: false,
  },
  {
    name: "Scholar",
    price: "₹50",
    period: "per week",
    features: ["3 Books at a time", "14-day rental period", "Lower Security Deposit", "Instant Renewal"],
    recommended: true,
  },
  {
    name: "Semester",
    price: "₹1500",
    period: "per semester",
    features: ["Unlimited Books", "Full Semester access", "No Security Deposit", "Priority Hub Support"],
    recommended: false,
  }
];

export default function RentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-secondary dark:bg-card text-white py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-3xl -mr-48 -mt-48 rounded-full" />
          <div className="container mx-auto px-4 relative z-10 text-center">
             <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Rent a Read</h1>
             <p className="text-secondary-foreground/80 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
               Why buy when you can borrow? Rent textbooks for as low as ₹20/week and keep your education costs at an all-time low.
             </p>
             <div className="flex justify-center gap-4">
               <Button size="lg" className="bg-white text-secondary hover:bg-white/90">Browse Rental Catalog</Button>
               <Button size="lg" variant="outline" className="border-white text-white">How it Works</Button>
             </div>
          </div>
        </section>

        <section className="py-24 bg-parchment dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Weekly Rentals", desc: "Pay only for what you need.", icon: Clock },
                { title: "Try Before You Buy", desc: "Rent first, buy if it stands out.", icon: RefreshCw },
                { title: "No Large Deposits", desc: "Student-friendly security model.", icon: ShieldCheck },
                { title: "Subscription Model", desc: "Rent unlimited books for sem.", icon: CreditCard },
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-card p-8 rounded-3xl border border-border shadow-sm text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                    <item.icon size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white dark:bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl font-bold mb-16">Choose Your Rental Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-8 rounded-3xl border flex flex-col ${
                    plan.recommended 
                    ? 'border-primary shadow-2xl scale-105 z-10 bg-white dark:bg-background' 
                    : 'border-border shadow-md bg-parchment dark:bg-card'
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold py-1 px-4 rounded-full uppercase tracking-widest shadow-lg">
                      Recommended
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-8">
                     <span className="text-4xl font-serif font-bold text-primary">{plan.price}</span>
                     <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-10 text-left flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.recommended ? 'primary' : 'outline'} className="w-full rounded-2xl py-6">
                    Choose {plan.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

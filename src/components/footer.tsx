'use client';

import { Logo } from './logo';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = [
  {
    title: 'Marketplace',
    links: [
      { name: 'Browse Books', href: '/marketplace' },
      { name: 'Sell Your Book', href: '/sell' },
      { name: 'Rent a Read', href: '/rent' },
      { name: 'Featured Books', href: '/#featured' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Pusthaka', href: '/about' },
      { name: 'How it Works', href: '/how-it-works' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Success Stories', href: '/about#stories' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/contact#faq' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-muted border-t mt-auto">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Logo />
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Pusthaka is India's largest academic book exchange platform. 
              Recycling knowledge, one book at a time. Read. Resell. Repeat.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-instagram transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-serif text-lg font-semibold mb-6 text-secondary dark:text-parchment">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pusthaka. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
             <div className="flex items-center gap-2">
               <Mail size={16} />
               <span>hi@pusthaka.com</span>
             </div>
             <div className="flex items-center gap-2">
               <Phone size={16} />
               <span>+91 98765 43210</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { ModeToggle } from './mode-toggle';
import { Menu, X, User, ShoppingBag, PlusCircle, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthModal } from './auth-modal';

const navigation = [
  { name: 'Marketplace', href: '/marketplace', icon: ShoppingBag },
  { name: 'Sell Book', href: '/sell', icon: PlusCircle },
  { name: 'Rent a Read', href: '/rent', icon: BookOpen },
  { name: 'How it Works', href: '/how-it-works' },
  { name: 'Sustainability', href: '/sustainability' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isAuthOpen, setIsAuthOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      pathname === item.href
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <button 
              onClick={() => setIsAuthOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-all shadow-md"
            >
              <User size={18} />
              Login
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b bg-background"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium',
                    pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  )}
                >
                  {item.icon && <item.icon size={20} />}
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t">
                 <button 
                  onClick={() => { setIsAuthOpen(true); setIsOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-medium text-white bg-primary rounded-lg"
                 >
                  <User size={20} />
                  Login / Signup
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}

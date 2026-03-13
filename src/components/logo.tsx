'use client';

import { BookOpen, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-1 text-primary/20"
        >
          <RefreshCw size={32} />
        </motion.div>
        <div className="relative bg-primary text-primary-foreground p-1.5 rounded-lg shadow-lg">
          <BookOpen size={20} />
        </div>
      </div>
      <span className="font-serif text-2xl font-bold tracking-tight text-secondary dark:text-parchment transition-colors">
        Pusthaka
      </span>
    </Link>
  );
}

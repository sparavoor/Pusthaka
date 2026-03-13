'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Github, Chrome } from 'lucide-react';
import { Button, Input } from '@/components/ui-primitives';

export function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-background rounded-[2.5rem] shadow-2xl overflow-hidden border border-border dark:border-white/5"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-10">
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl font-bold text-secondary dark:text-parchment mb-2">
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {isLogin ? 'Login to your student account' : 'Join the Pusthaka community'}
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Button variant="outline" className="rounded-xl h-12 bg-card border-border dark:border-white/10 hover:bg-muted dark:hover:bg-white/5 transition-colors">
                    <Chrome size={20} className="mr-2" />
                    Google
                  </Button>
                  <Button variant="outline" className="rounded-xl h-12 bg-card border-border dark:border-white/10 hover:bg-muted dark:hover:bg-white/5 transition-colors">
                    <Github size={20} className="mr-2" />
                    Github
                  </Button>
                </div>
                
                <div className="relative flex items-center justify-center mb-6">
                   <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
                   <span className="relative bg-background px-4 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">or continue with email</span>
                </div>

                {!isLogin && (
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase ml-2 text-muted-foreground">Full Name</label>
                    <Input placeholder="Ananya Sharma" className="bg-card" />
                  </div>
                )}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase ml-2 text-muted-foreground">Email Address</label>
                  <Input type="email" placeholder="student@university.edu" className="bg-card" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase ml-2 text-muted-foreground">Password</label>
                  <Input type="password" placeholder="••••••••" className="bg-card" />
                </div>

                {isLogin && (
                  <div className="text-right">
                    <button className="text-[10px] font-bold text-primary hover:underline">Forgot Password?</button>
                  </div>
                )}

                <Button className="w-full rounded-2xl py-7 text-lg mt-4 shadow-xl">
                  {isLogin ? 'Login' : 'Sign Up'}
                </Button>

                <div className="text-center mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="ml-2 font-bold text-primary hover:underline"
                    >
                      {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

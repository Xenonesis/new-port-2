'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          id="mobile-menu"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.3, delay: 0.2 } }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-white/95 dark:bg-neutral-950/95 text-neutral-900 dark:text-white z-50 flex flex-col justify-center items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 1 }}
              className="absolute top-1/4 -right-20 w-80 h-80 bg-rose-500 rounded-full blur-[100px]"
            />
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute bottom-1/4 -left-20 w-80 h-80 bg-orange-500 rounded-full blur-[100px]"
            />
          </div>

          <button 
            className="absolute top-6 right-6 p-4 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors z-50 group"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <nav className="flex flex-col items-center justify-center gap-6 text-center w-full px-6">
            {navLinks.map((link, i) => (
              <div key={link.href} className="overflow-hidden py-2 w-full">
                <motion.a 
                  href={link.href}
                  initial={{ y: 60, opacity: 0, rotateZ: 5 }}
                  animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                  exit={{ y: 40, opacity: 0, transition: { duration: 0.2, delay: (navLinks.length - 1 - i) * 0.05 } }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1 + (i * 0.1),
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative group inline-block text-4xl sm:text-5xl font-semibold tracking-tight mx-auto"
                  onClick={handleLinkClick}
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-orange-400">
                    {link.label}
                  </span>
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-rose-500 to-orange-400 transform origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </div>
            ))}
          </nav>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="absolute bottom-12 text-sm text-neutral-500 dark:text-neutral-400 tracking-widest uppercase font-medium"
          >
            prachi.dev
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

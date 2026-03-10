'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  onMenuToggle: () => void;
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Selected Work' },
  { href: '#skills', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation({ onMenuToggle }: NavigationProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style jsx global>{`
        .logo-mark {
          position: relative;
        }
        
        .logo-mark::before {
          content: '';
          position: absolute;
          left: -14px;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          background: #e11d48;
          border-radius: 50%;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease;
        }
        
        .group:hover .logo-mark::before {
          transform: translateY(-50%) scale(1.5);
          box-shadow: 0 0 10px rgba(225, 29, 72, 0.5);
        }
        
        .dark .logo-mark::before {
          background: #f43f5e;
        }
        
        .dark .group:hover .logo-mark::before {
          box-shadow: 0 0 10px rgba(244, 63, 94, 0.5);
        }
      `}</style>
      
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed w-full z-50 top-0 transition-all duration-500 flex justify-center ${
          isScrolled ? 'pt-4 px-4 sm:px-6' : 'pt-6 px-6 md:px-12'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 mx-auto w-full ${
            isScrolled 
              ? 'max-w-4xl bg-white/75 dark:bg-neutral-900/75 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] rounded-full px-6 py-3' 
              : 'max-w-[1400px] bg-transparent py-2'
          }`}
        >
          {/* Logo */}
          <motion.a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="relative flex items-center group ml-3"
            aria-label="Home - Prachi Portfolio"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="logo-mark text-lg md:text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent">
              prachi.dev
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 mr-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredPath(link.href)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className="relative px-4 py-2 text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors z-10"
                >
                  {link.label}
                  {hoveredPath === link.href && (
                    <motion.div
                      className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-full -z-10"
                      layoutId="navbar-hover"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6
                      }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <div className="flex items-center pl-2 border-l border-neutral-300 dark:border-neutral-700">
              <AnimatePresence mode="wait">
                {mounted && (
                  <motion.button
                    key={theme || 'system'}
                    initial={{ y: -10, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 10, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                      if (theme === 'light') setTheme('dark');
                      else if (theme === 'dark') setTheme('system');
                      else setTheme('light');
                    }}
                    className="p-2.5 rounded-full text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors relative overflow-hidden group"
                    aria-label={`Toggle theme (Current: ${theme || 'system'})`}
                    title={`Theme: ${theme || 'system'}`}
                  >
                    <div className="relative z-10 transition-transform duration-300">
                      {theme === 'dark' ? (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="w-4 h-4 transition-transform group-hover:-rotate-12 group-hover:scale-110" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                      ) : theme === 'light' ? (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="w-4 h-4 transition-transform group-hover:rotate-45" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="4"></circle>
                          <path d="M12 2v2"></path>
                          <path d="M12 20v2"></path>
                          <path d="m4.93 4.93 1.41 1.41"></path>
                          <path d="m17.66 17.66 1.41 1.41"></path>
                          <path d="M2 12h2"></path>
                          <path d="M20 12h2"></path>
                          <path d="m6.34 17.66-1.41 1.41"></path>
                          <path d="m19.07 4.93-1.41 1.41"></path>
                        </svg>
                      ) : (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="w-4 h-4 transition-transform group-hover:scale-110" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      )}
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden relative p-2 group bg-neutral-100 dark:bg-neutral-800 rounded-full w-10 h-10 flex items-center justify-center transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700"
            onClick={onMenuToggle}
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
            whileTap={{ scale: 0.9 }}
          >
            <div className="flex flex-col items-center justify-center gap-[4px]">
              <span className="block w-5 h-[2px] bg-neutral-900 dark:bg-neutral-100 rounded-full transition-all duration-300 group-hover:-translate-y-[1px] group-hover:w-6"></span>
              <span className="block w-4 h-[2px] bg-neutral-900 dark:bg-neutral-100 rounded-full transition-all duration-300 group-hover:translate-y-[1px] group-hover:w-6"></span>
            </div>
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
}

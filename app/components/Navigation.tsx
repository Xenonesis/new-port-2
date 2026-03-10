'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface NavigationProps {
  onMenuToggle: () => void;
}

export default function Navigation({ onMenuToggle }: NavigationProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <nav 
      className="fixed w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200/50 dark:border-neutral-800/50 text-neutral-900 dark:text-neutral-100 transition-all duration-300 top-0 pointer-events-auto"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <a 
            href="#" 
            className="text-xl font-medium tracking-tighter hover:opacity-70 transition-opacity"
            aria-label="Home"
          >
            prachi.dev
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <a 
              href="#about" 
              className="text-sm font-medium hover:text-gray-300 transition-colors tracking-wide"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-sm font-medium hover:text-gray-300 transition-colors tracking-wide"
            >
              Selected Work
            </a>
            <a 
              href="#skills" 
              className="text-sm font-medium hover:text-gray-300 transition-colors tracking-wide"
            >
              Stack
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium hover:text-gray-300 transition-colors tracking-wide"
            >
              Contact
            </a>
            {/* Theme Toggle Links */}
            <div className="flex items-center gap-4 ml-4 border-l border-neutral-300 dark:border-neutral-700 pl-8">
              <button 
                className={`hover:opacity-70 transition-opacity text-xs font-semibold uppercase tracking-wider ${mounted && theme === 'light' ? 'text-black dark:text-white underline underline-offset-4' : 'text-neutral-500'}`}
                onClick={() => setTheme('light')}
                suppressHydrationWarning
              >
                Light
              </button>
              <button 
                className={`hover:opacity-70 transition-opacity text-xs font-semibold uppercase tracking-wider ${mounted && theme === 'dark' ? 'text-black dark:text-white underline underline-offset-4' : 'text-neutral-500'}`}
                onClick={() => setTheme('dark')}
                suppressHydrationWarning
              >
                Dark
              </button>
              <button 
                className={`hover:opacity-70 transition-opacity text-xs font-semibold uppercase tracking-wider ${mounted && theme === 'system' ? 'text-black dark:text-white underline underline-offset-4' : 'text-neutral-500'}`}
                onClick={() => setTheme('system')}
                suppressHydrationWarning
              >
                System
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="p-2 -mr-2"
              onClick={onMenuToggle}
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

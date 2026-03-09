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
    setMounted(true);
  }, []);

  return (
    <nav 
      className="fixed w-full z-50 mix-blend-difference text-white transition-all duration-300 top-0 pointer-events-auto"
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
            <button 
              className="hover:opacity-70 transition-opacity min-w-[60px] text-right"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={mounted ? (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode') : 'Toggle theme'}
              suppressHydrationWarning
            >
              <span className="text-sm font-medium uppercase tracking-wide">
                {mounted ? (theme === 'dark' ? 'Light' : 'Dark') : 'Theme'}
              </span>
            </button>
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

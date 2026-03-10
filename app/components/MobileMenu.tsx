'use client';

import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

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
    <div 
      id="mobile-menu"
      className={`fixed inset-0 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white z-50 flex flex-col justify-center items-center transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      aria-hidden={!isOpen}
    >
      <button 
        className="absolute top-8 right-8 p-4 hover:opacity-70 transition-opacity"
        onClick={onClose}
        aria-label="Close menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <nav className="space-y-8 text-center">
        <a 
          href="#about" 
          className="block text-4xl font-light tracking-tight hover:italic transition-all"
          onClick={handleLinkClick}
        >
          About
        </a>
        <a 
          href="#projects" 
          className="block text-4xl font-light tracking-tight hover:italic transition-all"
          onClick={handleLinkClick}
        >
          Work
        </a>
        <a 
          href="#skills" 
          className="block text-4xl font-light tracking-tight hover:italic transition-all"
          onClick={handleLinkClick}
        >
          Stack
        </a>
        <a 
          href="#contact" 
          className="block text-4xl font-light tracking-tight hover:italic transition-all"
          onClick={handleLinkClick}
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

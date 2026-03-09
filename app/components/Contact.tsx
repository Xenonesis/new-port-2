'use client';

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Contact() {
  const contentObserver = useIntersectionObserver();

  return (
    <section id="contact" className="py-32 md:py-48 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <div 
          ref={contentObserver.ref as React.RefObject<HTMLDivElement>}
          className={`fade-up ${contentObserver.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out`}
        >
          <h2 className="text-[8vw] md:text-[6vw] font-medium tracking-tight leading-none mb-12 hover:text-neutral-500 transition-colors duration-500 cursor-default">
            <a href="mailto:hello@alex.dev">Let's Talk</a>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-sm font-medium uppercase tracking-widest text-neutral-500">
            <a href="mailto:hello@alex.dev" className="hover:text-black dark:hover:text-white transition-colors">hello@alex.dev</a>
            <span className="hidden md:block w-1 h-1 bg-neutral-300 rounded-full"></span>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
            <span className="hidden md:block w-1 h-1 bg-neutral-300 rounded-full"></span>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}

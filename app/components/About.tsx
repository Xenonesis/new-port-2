'use client';

import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const labelRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  
  const labelObserver = useIntersectionObserver();
  const contentObserver = useIntersectionObserver();

  return (
    <section id="about" className="py-32 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-20">
          <div 
            ref={labelObserver.ref as React.RefObject<HTMLDivElement>}
            className={`md:w-1/3 fade-up ${labelObserver.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out`}
          >
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">About Me</h2>
          </div>
          <div 
            ref={contentObserver.ref as React.RefObject<HTMLDivElement>}
            className={`md:w-2/3 fade-up ${contentObserver.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out delay-150`}
          >
            <p className="text-3xl md:text-5xl font-light leading-tight mb-12 text-neutral-900 dark:text-white">
              Passionate about <span className="serif italic text-neutral-500 dark:text-neutral-400">intelligence</span> and <span className="serif italic text-neutral-500 dark:text-neutral-400">security</span>.
            </p>
            <div className="grid md:grid-cols-2 gap-12 text-lg font-light text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                I am a CSAIML student at GL Bajaj, driven by a passion for solving complex problems through Machine Learning and crafting intuitive frontend interfaces.
              </p>
              <p>
                My expertise spans predictive modeling, regression, and classification, complemented by a strong foundation in cybersecurity, networking, and web pentesting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

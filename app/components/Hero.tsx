'use client';

import { useTypingEffect } from '../hooks/useTypingEffect';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const phrases = ['model', 'secure', 'develop', 'analyze'];

export default function Hero() {
  const displayText = useTypingEffect({
    phrases,
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2500,
    initialDelay: 1000,
  });

  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="min-h-screen flex items-end pb-32 md:pb-40 pt-40 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`max-w-6xl fade-up ${isVisible ? 'visible' : ''}`}
        >
          <h1 className="text-[13vw] md:text-[9vw] font-medium leading-[0.85] tracking-tighter mb-12 text-neutral-900 dark:text-white">
            Prachi <br />
            <span className="serif italic font-light ml-[10vw]">Upadhyay</span> <br />
            & <span className="text-neutral-400 dark:text-neutral-600">{displayText}</span>
            <span className="typing-cursor"></span>
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-end border-t border-neutral-200 dark:border-neutral-800 pt-8 mt-24">
              <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 max-w-sm font-light leading-relaxed mb-8 md:mb-0">
              CSAIML student at GL Bajaj. Focused on Machine Learning, Frontend Development, and Cybersecurity.
            </p>
            <div className="flex gap-8">
              <a href="#projects" className="group relative text-sm font-medium overflow-hidden">
                <span className="relative z-10 block px-6 py-3 border border-neutral-900 dark:border-neutral-100 rounded-full transition-colors duration-300 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                  View Projects
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

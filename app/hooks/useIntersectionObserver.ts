/* eslint-disable react-hooks/exhaustive-deps, react-hooks/rules-of-hooks, @typescript-eslint/no-unused-expressions, react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fail-safe: if intersection observer is not supported, just make it visible
    if (typeof window !== 'undefined' && !window.IntersectionObserver) {
      // eslint-disable-next-line
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // More lenient visibility check
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.01, rootMargin: '50px', ...options }
    );

    observer.observe(element);
    
    // Fail-safe timeout to ensure content eventually shows up if observe fails
    const timeout = setTimeout(() => {
        setIsVisible(true);
    }, 1500);

    return () => {
        observer.disconnect();
        clearTimeout(timeout);
    };
  }, [options]);

  return { ref, isVisible };
}

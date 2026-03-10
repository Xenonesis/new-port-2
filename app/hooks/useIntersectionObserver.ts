import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options: IntersectionObserverInit = {}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Stringify options to prevent infinite useEffect loops if an object literal is passed inline
  const optionsString = JSON.stringify(options);

  useEffect(() => {
    // Fail-safe: if intersection observer is not supported, just make it visible
    if (typeof window !== 'undefined' && !window.IntersectionObserver) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const parsedOptions = JSON.parse(optionsString);
    const observer = new IntersectionObserver(
      ([entry]) => {
        // More lenient visibility check
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.01, rootMargin: '50px', ...parsedOptions }
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
  }, [optionsString]);

  return { ref, isVisible };
}

import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options: IntersectionObserverInit = {}) {
  const ref = useRef<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  const optionsString = JSON.stringify(options);

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const parsedOptions = JSON.parse(optionsString);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.01, rootMargin: '50px', ...parsedOptions }
    );

    observer.observe(element);
    
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

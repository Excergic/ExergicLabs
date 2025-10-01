// hooks/useScrollTo.ts
'use client';
import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollTo = useCallback((elementId: string, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollTo;
};

// Usage in Hero component:
const scrollTo = useScrollTo();
const scrollToServices = () => scrollTo('services-section', 80); // 80px offset

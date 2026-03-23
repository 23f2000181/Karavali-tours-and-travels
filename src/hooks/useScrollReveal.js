import { useEffect } from 'react';

/**
 * Adds IntersectionObserver scroll-reveal behaviour to a ref element.
 * Once visible, adds the 'visible' class to the element and any
 * children that carry the 'reveal' class.
 */
export function useScrollReveal(ref, threshold = 0.15) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reveal the container's own reveal children
          const revealEls = el.querySelectorAll('.reveal');
          revealEls.forEach((r) => r.classList.add('visible'));
          // If the element itself has the reveal class
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);
}

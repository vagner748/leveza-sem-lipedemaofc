import { useEffect, useRef } from 'react';

const useFadeInOnScroll = () => {
  const domRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentDomRef = domRef.current; // Capture the current value

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    if (currentDomRef) {
      currentDomRef.classList.add('fade-in-section'); // Add initial hidden class
      observer.observe(currentDomRef);
    }

    return () => {
      if (currentDomRef) { // Use the captured value here
        observer.unobserve(currentDomRef);
      }
    };
  }, []);

  return domRef;
};

export default useFadeInOnScroll;
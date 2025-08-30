import { useState, useEffect } from 'react';

const useParallaxScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageOpacity = Math.max(0, 1 - scrollY / 500);
  const textTransform = `translateY(-${scrollY / 4}px)`;

  return { imageOpacity, textTransform };
};

export default useParallaxScroll;
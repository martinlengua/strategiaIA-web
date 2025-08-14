import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId;
    let animationFrameId;

    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
      }

      // Clear existing timeout
      clearTimeout(timeoutId);

      // Use requestAnimationFrame for smooth updates
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });

      // Debounce the scrolling state
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    // Initial scroll position
    setScrollY(window.scrollY);

    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isScrolling]);

  // Memoized value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    scrollY,
    isScrolling,
    // Common scroll calculations
    isScrolledPast: (threshold) => scrollY > threshold,
    scrollProgress: Math.min(scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1), 1),
    isDarkMode: scrollY > 50, // Common dark mode trigger
  }), [scrollY, isScrolling]);

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};
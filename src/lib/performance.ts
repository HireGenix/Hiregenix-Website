/**
 * Performance optimization utilities for preventing flickering and improving perceived performance
 */

// Debounce function to limit how often functions can be called
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Throttle function to limit function execution
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Safe animation wrapper that respects user preferences
export const safeAnimate = (animation: () => void): void => {
  if (!prefersReducedMotion()) {
    animation();
  }
};

// Preload critical resources
export const preloadResource = (url: string, type: 'image' | 'script' | 'style' = 'image'): void => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = url;
  
  switch (type) {
    case 'image':
      link.as = 'image';
      break;
    case 'script':
      link.as = 'script';
      break;
    case 'style':
      link.as = 'style';
      break;
  }
  
  document.head.appendChild(link);
};

// Critical images to preload
export const CRITICAL_IMAGES = [
  '/hero-image.png',
  '/HireGenix-logo-black.png',
  '/hiregenix-logo.svg',
  '/HireGenix-Symbol.jpg'
];

// Preload critical images on app start
export const preloadCriticalImages = (): void => {
  if (typeof window === 'undefined') return;
  
  CRITICAL_IMAGES.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

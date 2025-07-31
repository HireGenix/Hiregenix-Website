'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Wrapper component that smoothly fades in content when it becomes visible
 * Helps prevent jarring animations on initial page load
 */
export const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth rendering
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration,
            ease: [0.4, 0, 0.2, 1],
            delay: delay / 1000
          }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

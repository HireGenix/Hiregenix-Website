'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { useDemoStore } from '@/stores/demoStore';

interface DemoContextType {
  // This context can be extended later if needed for additional demo-specific functionality
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const useDemoContext = () => {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error('useDemoContext must be used within a DemoProvider');
  }
  return context;
};

interface DemoProviderProps {
  children: React.ReactNode;
}

export const DemoProvider: React.FC<DemoProviderProps> = ({ children }) => {
  const resetDemo = useDemoStore(state => state.resetDemo);

  // Initialize demo on mount
  useEffect(() => {
    // Optional: Reset demo when component mounts
    // resetDemo();
  }, []);

  // Handle URL step synchronization
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const stepParam = params.get('step');
      
      if (stepParam) {
        const step = parseInt(stepParam, 10);
        if (step >= 1 && step <= 6) {
          useDemoStore.getState().goToStep(step);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Handle initial URL on mount
    handlePopState();

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const contextValue: DemoContextType = {
    // Add any demo-specific context values here
  };

  return (
    <DemoContext.Provider value={contextValue}>
      {children}
    </DemoContext.Provider>
  );
};
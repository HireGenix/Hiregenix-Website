'use client';

import React, { Suspense } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemoStore } from '@/stores/demoStore';

// Lazy load step components for better performance
const JobCreationStep = React.lazy(() => import('./steps/JobCreationStep'));
const CandidateMatchingStep = React.lazy(() => import('./steps/CandidateMatchingStep'));
const SkillsAssessmentStep = React.lazy(() => import('./steps/SkillsAssessmentStep'));
const VideoInterviewStep = React.lazy(() => import('./steps/VideoInterviewStep'));
const WorkforceAnalyticsStep = React.lazy(() => import('./steps/WorkforceAnalyticsStep'));
const ResultsSummaryStep = React.lazy(() => import('./steps/ResultsSummaryStep'));

const LoadingSpinner: React.FC = () => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    py={8}
    gap={2}
    sx={{
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(20px)',
      borderRadius: 4,
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Box
      sx={{
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        borderRadius: '50%',
        p: 2,
        animation: 'pulse 2s infinite',
        '@keyframes pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      }}
    >
      <CircularProgress size={40} thickness={4} sx={{ color: 'white' }} />
    </Box>
    <Typography variant="body1" color="text.secondary" fontWeight={500}>
      Loading step...
    </Typography>
  </Box>
);

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const DemoSteps: React.FC = () => {
  const { currentStep, steps } = useDemoStore();
  const [direction, setDirection] = React.useState(0);
  const [prevStep, setPrevStep] = React.useState(currentStep);

  React.useEffect(() => {
    if (currentStep !== prevStep) {
      setDirection(currentStep > prevStep ? 1 : -1);
      setPrevStep(currentStep);
    }
  }, [currentStep, prevStep]);

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <JobCreationStep />;
      case 2:
        return <CandidateMatchingStep />;
      case 3:
        return <SkillsAssessmentStep />;
      case 4:
        return <VideoInterviewStep />;
      case 5:
        return <WorkforceAnalyticsStep />;
      case 6:
        return <ResultsSummaryStep />;
      default:
        return <JobCreationStep />;
    }
  };

  const currentStepData = steps.find(step => step.id === currentStep);

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        minHeight: '600px', 
        overflow: 'hidden',
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(20px)',
        borderRadius: 4,
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        p: 3,
      }}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentStep}
          custom={direction}
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold && currentStep < steps.length) {
              useDemoStore.getState().nextStep();
            } else if (swipe > swipeConfidenceThreshold && currentStep > 1) {
              useDemoStore.getState().prevStep();
            }
          }}
          style={{
            position: 'absolute',
            width: '100%',
          }}
        >
          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: 4,
              p: { xs: 2, md: 4 },
              minHeight: '500px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Step Header */}
            <Box mb={3}>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  background: 'linear-gradient(135deg, #f05126 0%, #ff7f4d 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {currentStepData?.title}
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: 600 }}
              >
                {currentStepData?.description}
              </Typography>
            </Box>

            {/* Step Content */}
            <Suspense fallback={<LoadingSpinner />}>
              {renderStepComponent()}
            </Suspense>
          </Box>
        </motion.div>
      </AnimatePresence>

      {/* Swipe hint for mobile */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'block', md: 'none' },
          opacity: 0.7,
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontSize: '0.7rem',
          }}
        >
          ← Swipe to navigate →
        </Typography>
      </Box>
    </Box>
  );
};
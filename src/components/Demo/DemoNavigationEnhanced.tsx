'use client';

import React from 'react';
import {
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  Chip,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  CheckCircle,
  RadioButtonUnchecked,
  PlayArrow,
  SkipNext,
  SkipPrevious,
  Refresh,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useDemoStore } from '@/stores/demoStore';

export const DemoNavigation: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const {
    currentStep,
    steps,
    goToStep,
    nextStep,
    prevStep,
    resetDemo,
  } = useDemoStore();

  const handleStepClick = (stepNumber: number) => {
    goToStep(stepNumber);
  };

  const getStepIcon = (stepIndex: number, completed: boolean) => {
    if (completed) {
      return <CheckCircle color="success" />;
    }
    if (stepIndex + 1 === currentStep) {
      return <PlayArrow color="primary" />;
    }
    return <RadioButtonUnchecked color="disabled" />;
  };

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 4,
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            borderRadius: 4,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #f59e0b)',
            },
          }}
        >
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h6" color="primary" fontWeight={600}>
              Demo Progress
            </Typography>
            <Tooltip title="Reset Demo">
              <IconButton 
                onClick={resetDemo} 
                size="small"
                sx={{
                  background: 'rgba(99, 102, 241, 0.1)',
                  '&:hover': {
                    background: 'rgba(99, 102, 241, 0.2)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                <Refresh />
              </IconButton>
            </Tooltip>
          </Box>

          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <Chip
              label={`Step ${currentStep} of ${steps.length}`}
              sx={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
                fontWeight: 600,
              }}
              size="small"
            />
            <Typography variant="body2" color="text.secondary">
              {steps[currentStep - 1]?.title}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Button
              variant="outlined"
              size="small"
              startIcon={<SkipPrevious />}
              onClick={prevStep}
              disabled={currentStep === 1}
              sx={{
                borderColor: 'rgba(99, 102, 241, 0.3)',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.main',
                  background: 'rgba(99, 102, 241, 0.1)',
                },
              }}
            >
              Previous
            </Button>
            
            <Box display="flex" gap={1}>
              {steps.map((step, index) => (
                <Box
                  key={step.id}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: 
                      index + 1 === currentStep 
                        ? theme.palette.primary.main
                        : step.completed
                        ? theme.palette.success.main
                        : theme.palette.grey[300],
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.2)',
                    },
                  }}
                  onClick={() => handleStepClick(index + 1)}
                />
              ))}
            </Box>

            <Button
              variant="outlined"
              size="small"
              endIcon={<SkipNext />}
              onClick={nextStep}
              disabled={currentStep === steps.length}
              sx={{
                borderColor: 'rgba(99, 102, 241, 0.3)',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.main',
                  background: 'rgba(99, 102, 241, 0.1)',
                },
              }}
            >
              Next
            </Button>
          </Box>
        </Paper>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          borderRadius: 4,
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #f59e0b, #06b6d4)',
          },
        }}
      >
        {/* Enhanced background decorations */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
            filter: 'blur(60px)',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)',
            filter: 'blur(40px)',
            zIndex: 0,
          }}
        />

        <Box position="relative" zIndex={1}>
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
            <Box>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography 
                  variant="h3" 
                  sx={{
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #f59e0b)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  HireGenix Interactive Demo
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
                  Experience the power of AI-driven recruitment through our guided demonstration
                </Typography>
              </motion.div>
            </Box>
            
            <Box display="flex" alignItems="center" gap={2}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Chip
                  label={`${steps.filter(s => s.completed).length}/${steps.length} Completed`}
                  sx={{
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: 'white',
                    fontWeight: 600,
                    px: 1,
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                  }}
                />
              </motion.div>
              <Tooltip title="Reset Demo">
                <IconButton 
                  onClick={resetDemo} 
                  sx={{
                    background: 'rgba(99, 102, 241, 0.1)',
                    color: 'primary.main',
                    '&:hover': {
                      background: 'rgba(99, 102, 241, 0.2)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Refresh />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Stepper 
              activeStep={currentStep - 1} 
              orientation="horizontal"
              sx={{
                '& .MuiStepLabel-root': {
                  cursor: 'pointer',
                },
                '& .MuiStepLabel-label': {
                  fontSize: '0.875rem',
                  fontWeight: 500,
                },
                '& .MuiStepLabel-label.Mui-active': {
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                },
                '& .MuiStepLabel-label.Mui-completed': {
                  color: theme.palette.success.main,
                },
                '& .MuiStepConnector-line': {
                  background: 'linear-gradient(90deg, #e2e8f0, #cbd5e1)',
                  height: 3,
                  border: 0,
                  borderRadius: 1,
                },
                '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
                  background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                },
                '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
                  background: 'linear-gradient(90deg, #10b981, #059669)',
                },
              }}
            >
              {steps.map((step, index) => (
                <Step key={step.id} completed={step.completed}>
                  <StepLabel
                    StepIconComponent={() => getStepIcon(index, step.completed)}
                    onClick={() => handleStepClick(step.id)}
                  >
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: 
                            index + 1 === currentStep
                              ? theme.palette.primary.main
                              : step.completed
                              ? theme.palette.success.main
                              : theme.palette.text.secondary,
                          fontWeight: index + 1 === currentStep ? 600 : 500,
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.text.secondary,
                          display: 'block',
                          maxWidth: 120,
                          lineHeight: 1.2,
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </motion.div>

          <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
            <Button
              variant="outlined"
              size="large"
              startIcon={<SkipPrevious />}
              onClick={prevStep}
              disabled={currentStep === 1}
              sx={{ 
                minWidth: 120,
                borderColor: 'rgba(99, 102, 241, 0.3)',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.main',
                  background: 'rgba(99, 102, 241, 0.1)',
                },
              }}
            >
              Previous
            </Button>

            <Box display="flex" alignItems="center" gap={2}>
              <Typography variant="body2" color="text.secondary">
                Step {currentStep} of {steps.length}
              </Typography>
              <Box
                sx={{
                  width: 200,
                  height: 6,
                  backgroundColor: theme.palette.grey[200],
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    width: `${(currentStep / steps.length) * 100}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                    borderRadius: 3,
                    transition: 'width 0.3s ease',
                  }}
                />
              </Box>
            </Box>

            <Button
              variant="contained"
              size="large"
              endIcon={<SkipNext />}
              onClick={nextStep}
              disabled={currentStep === steps.length}
              sx={{ 
                minWidth: 120,
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5b21b6, #7c3aed)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              {currentStep === steps.length ? 'Complete' : 'Next'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

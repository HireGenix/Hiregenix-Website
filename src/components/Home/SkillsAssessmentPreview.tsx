'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Stepper,
  Step,
  StepLabel,
  Button,
  Chip,
  LinearProgress,
  Divider,
  useTheme,
  alpha,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField
} from '@mui/material';
import {
  Code as CodeIcon,
  CheckCircle as CheckCircleIcon,
  Timer as TimerIcon,
  Psychology as PsychologyIcon,
  Assignment as AssignmentIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
  Help as HelpIcon,
  Lightbulb as LightbulbIcon,
  Computer as ComputerIcon,
  Settings as SettingsIcon,
  Equalizer as EqualizerIcon
} from '@mui/icons-material';

// Assessment data
const assessmentData = {
  title: 'Frontend Developer Assessment',
  description: 'This assessment evaluates your skills in React, JavaScript, and frontend development concepts.',
  duration: '45 minutes',
  sections: [
    {
      title: 'Technical Knowledge',
      description: 'Multiple choice questions to test your understanding of key concepts.',
      questions: 15,
      timeEstimate: '15 minutes'
    },
    {
      title: 'Coding Challenge',
      description: 'Practical coding tasks to demonstrate your implementation skills.',
      questions: 3,
      timeEstimate: '20 minutes'
    },
    {
      title: 'Problem Solving',
      description: 'Scenarios to evaluate your approach to real-world problems.',
      questions: 5,
      timeEstimate: '10 minutes'
    }
  ],
  currentQuestion: {
    section: 'Technical Knowledge',
    number: 3,
    text: 'Which of the following is true about React hooks?',
    options: [
      'Hooks can only be called at the top level of components',
      'Hooks can be called conditionally inside loops',
      'Class components are required to use hooks',
      'Hooks were introduced in React version 18'
    ],
    correctAnswer: 0
  },
  progress: {
    completed: 2,
    total: 23,
    currentSection: 0
  }
};

// Coding challenge data
const codingChallenge = {
  title: 'Create a Counter Component',
  description: 'Implement a React counter component with increment and decrement functionality.',
  requirements: [
    'Use React hooks for state management',
    'Include buttons for increment and decrement',
    'Display the current count',
    'Add a reset button to set the count back to zero'
  ],
  starterCode: `import React from 'react';

function Counter() {
  // Implement your counter here
  
  return (
    <div>
      {/* Your UI here */}
    </div>
  );
}

export default Counter;`
};

export const SkillsAssessmentPreview: React.FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    setSelectedOption(null);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    setSelectedOption(null);
  };

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 3,
          background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
          color: 'white',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            {assessmentData.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TimerIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              {assessmentData.duration} remaining
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ opacity: 0.9, mb: 3 }}>
          {assessmentData.description}
        </Typography>
        
        <Stepper activeStep={assessmentData.progress.currentSection} alternativeLabel>
          {assessmentData.sections.map((section, index) => (
            <Step key={index}>
              <StepLabel>{section.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Progress Bar */}
      <Box sx={{ px: 3, pt: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Question {assessmentData.progress.completed + 1} of {assessmentData.progress.total}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Math.round((assessmentData.progress.completed / assessmentData.progress.total) * 100)}% Complete
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={(assessmentData.progress.completed / assessmentData.progress.total) * 100}
          sx={{ height: 8, borderRadius: 4, mb: 3 }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
        {activeStep === 0 && (
          <Box>
            {/* Multiple Choice Question */}
            <Paper
              sx={{
                p: 3,
                borderRadius: 2,
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                mb: 3,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <AssignmentIcon sx={{ mr: 2, color: theme.palette.secondary.main, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Question {assessmentData.currentQuestion.number}: {assessmentData.currentQuestion.section}
                  </Typography>
                  <Typography variant="body1">
                    {assessmentData.currentQuestion.text}
                  </Typography>
                </Box>
              </Box>

              <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup>
                  {assessmentData.currentQuestion.options.map((option, index) => (
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        p: 2,
                        mb: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: selectedOption === index ? theme.palette.secondary.main : 'divider',
                        backgroundColor: selectedOption === index ? alpha(theme.palette.secondary.main, 0.05) : 'transparent',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          borderColor: selectedOption === index ? theme.palette.secondary.main : theme.palette.primary.main,
                          backgroundColor: selectedOption === index ? alpha(theme.palette.secondary.main, 0.05) : alpha(theme.palette.primary.main, 0.02),
                        },
                      }}
                      onClick={() => handleOptionSelect(index)}
                    >
                      <FormControlLabel
                        value={index.toString()}
                        control={
                          <Radio
                            checked={selectedOption === index}
                            color="secondary"
                            sx={{ mr: 1 }}
                          />
                        }
                        label={option}
                        sx={{ width: '100%', m: 0 }}
                      />
                    </Paper>
                  ))}
                </RadioGroup>
              </FormControl>
            </Paper>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                disabled
              >
                Previous
              </Button>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardIcon />}
                onClick={handleNext}
                disabled={selectedOption === null}
              >
                Next Question
              </Button>
            </Box>
          </Box>
        )}

        {activeStep === 1 && (
          <Box>
            {/* Coding Challenge */}
            <Paper
              sx={{
                p: 3,
                borderRadius: 2,
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                mb: 3,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <CodeIcon sx={{ mr: 2, color: theme.palette.secondary.main, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Coding Challenge: {codingChallenge.title}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {codingChallenge.description}
                  </Typography>
                  <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                    Requirements:
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {codingChallenge.requirements.map((req, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                        <CheckCircleIcon sx={{ mr: 1, fontSize: 18, color: theme.palette.success.main, mt: 0.3 }} />
                        <Typography variant="body2">{req}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: '#1e1e1e',
                  color: '#d4d4d4',
                  fontFamily: 'monospace',
                  fontSize: '0.9rem',
                  mb: 3,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    p: 1,
                    backgroundColor: '#2d2d2d',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="caption" sx={{ color: '#d4d4d4' }}>
                    Counter.jsx
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <SettingsIcon sx={{ fontSize: 16, color: '#d4d4d4' }} />
                    <ComputerIcon sx={{ fontSize: 16, color: '#d4d4d4' }} />
                  </Box>
                </Box>
                <Box sx={{ pt: 4, whiteSpace: 'pre-wrap' }}>
                  {codingChallenge.starterCode}
                </Box>
              </Box>

              <TextField
                fullWidth
                multiline
                rows={10}
                placeholder="Write your solution here..."
                variant="outlined"
                sx={{
                  mb: 3,
                  fontFamily: 'monospace',
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: alpha(theme.palette.background.default, 0.5),
                  },
                }}
              />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<HelpIcon />}
                >
                  Get Hint
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<ComputerIcon />}
                >
                  Test Code
                </Button>
              </Box>
            </Paper>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                onClick={handleBack}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardIcon />}
                onClick={handleNext}
              >
                Next Challenge
              </Button>
            </Box>
          </Box>
        )}

        {activeStep === 2 && (
          <Box>
            {/* Problem Solving */}
            <Paper
              sx={{
                p: 3,
                borderRadius: 2,
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                mb: 3,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <PsychologyIcon sx={{ mr: 2, color: theme.palette.secondary.main, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Problem Solving Scenario
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Your team is developing a web application that experiences performance issues when displaying large datasets. Users report slow rendering and unresponsive UI when viewing tables with more than 1,000 records.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    As the frontend developer, describe your approach to diagnosing and solving this performance issue. Include specific techniques, tools, and React patterns you would use.
                  </Typography>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.info.main, 0.1),
                      mb: 2,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LightbulbIcon sx={{ mr: 1, color: theme.palette.info.main, fontSize: 20 }} />
                      <Typography variant="subtitle2" fontWeight={600} color={theme.palette.info.main}>
                        Evaluation Criteria
                      </Typography>
                    </Box>
                    <Typography variant="body2">
                      Your response will be evaluated on technical accuracy, problem-solving approach, consideration of tradeoffs, and clarity of explanation.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <TextField
                fullWidth
                multiline
                rows={10}
                placeholder="Write your solution here..."
                variant="outlined"
                sx={{ mb: 3 }}
              />

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Chip
                  icon={<EqualizerIcon />}
                  label="AI Analysis Enabled"
                  color="primary"
                  variant="outlined"
                  sx={{ mr: 2 }}
                />
                <Typography variant="caption" color="text.secondary">
                  Your response will be analyzed by our AI for technical accuracy and approach
                </Typography>
              </Box>
            </Paper>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                onClick={handleBack}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                color="primary"
                endIcon={<CheckCircleIcon />}
              >
                Submit Assessment
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SkillsAssessmentPreview;

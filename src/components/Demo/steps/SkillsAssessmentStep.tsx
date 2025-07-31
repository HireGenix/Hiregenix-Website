'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  Chip,
  Alert,
  IconButton,
  Tooltip,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  PlayArrow,
  CheckCircle,
  Timer,
  Code,
  Quiz,
  Psychology,
  Lightbulb,
  ExpandMore,
  ExpandLess,
  BugReport,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemoStore } from '@/stores/demoStore';
import { AssessmentQuestion } from '@/types/demo';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`assessment-tabpanel-${index}`}
      aria-labelledby={`assessment-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const CodeEditor: React.FC<{
  language: string;
  code: string;
  onChange: (code: string) => void;
  readOnly?: boolean;
}> = ({ language, code, onChange, readOnly = false }) => {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: 'grey.300',
        borderRadius: 2,
        overflow: 'hidden',
        background: '#1e1e1e',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          p: 1,
          backgroundColor: 'grey.100',
          borderBottom: 1,
          borderColor: 'grey.300',
          color: 'text.primary',
        }}
      >
        <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Code fontSize="small" />
          {language}
        </Typography>
      </Box>
      <TextField
        multiline
        fullWidth
        minRows={8}
        maxRows={12}
        value={code}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          readOnly,
          style: {
            fontFamily: 'Monaco, "Lucida Console", monospace',
            fontSize: '14px',
            backgroundColor: '#1e1e1e',
            color: '#fff',
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { border: 'none' },
          },
        }}
      />
    </Box>
  );
};

const SkillsAssessmentStep: React.FC = () => {
  const {
    selectedCandidate,
    skillsAssessment,
    setSkillsAssessment,
    nextStep,
  } = useDemoStore();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeRemaining, setTimeRemaining] = useState(45 * 60); // 45 minutes
  const [isStarted, setIsStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [codeResults, setCodeResults] = useState<Record<string, any>>({});
  const [isRunningCode, setIsRunningCode] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isStarted && timeRemaining > 0 && !showResults) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleSubmitAssessment();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStarted, timeRemaining, showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const runCodeTest = async (question: AssessmentQuestion) => {
    if (!question.code) return;
    
    setIsRunningCode(true);
    const userCode = answers[question.id] || question.code.template;
    
    // Simulate code execution with test cases
    setTimeout(() => {
      const results = question.code!.testCases.map((testCase, index) => {
        // Simulate random pass/fail for demo
        const passed = Math.random() > 0.3; // 70% pass rate for demo
        return {
          ...testCase,
          passed,
          actualOutput: passed ? testCase.expectedOutput : 'Error: Expected behavior not met',
          executionTime: Math.floor(Math.random() * 100) + 10,
        };
      });
      
      setCodeResults(prev => ({
        ...prev,
        [question.id]: {
          results,
          passed: results.filter(r => r.passed).length,
          total: results.length,
        }
      }));
      setIsRunningCode(false);
    }, 2000);
  };

  const handleSubmitAssessment = () => {
    if (!skillsAssessment) return;

    // Calculate score based on answers
    let score = 0;
    const totalPoints = skillsAssessment.questions.reduce((sum, q) => sum + q.points, 0);
    
    skillsAssessment.questions.forEach(question => {
      const userAnswer = answers[question.id];
      if (question.type === 'multiple-choice' && userAnswer === question.correctAnswer) {
        score += question.points;
      } else if (question.type === 'coding') {
        const results = codeResults[question.id];
        if (results) {
          const passRate = results.passed / results.total;
          score += Math.floor(question.points * passRate);
        }
      } else if (question.type === 'short-answer' && userAnswer?.length > 20) {
        // Simple length-based scoring for demo
        score += Math.floor(question.points * 0.8);
      }
    });

    const finalScore = Math.floor((score / totalPoints) * 100);
    
    setSkillsAssessment({
      ...skillsAssessment,
      endTime: new Date().toISOString(),
      score: finalScore,
      completed: true,
      questions: skillsAssessment.questions.map(q => ({
        ...q,
        answer: answers[q.id],
        isCorrect: q.type === 'multiple-choice' ? answers[q.id] === q.correctAnswer : undefined,
      })),
    });

    setShowResults(true);
  };

  const handleContinue = () => {
    nextStep();
  };

  if (!selectedCandidate || !skillsAssessment) {
    return (
      <Alert severity="warning">
        Please select a candidate first to begin the skills assessment.
      </Alert>
    );
  }

  if (!isStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card elevation={3} sx={{ maxWidth: 800, mx: 'auto' }}>
          <CardContent sx={{ p: 4 }}>
            <Box textAlign="center" mb={4}>
              <Psychology sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" gutterBottom>
                Skills Assessment
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                {selectedCandidate.name}
              </Typography>
            </Box>

            <Grid container spacing={3} mb={4}>
              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <Typography variant="h5" color="primary">
                    {skillsAssessment.questions.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Questions
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <Typography variant="h5" color="primary">
                    45
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Minutes
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <Typography variant="h5" color="primary">
                    {skillsAssessment.questions.reduce((sum, q) => sum + q.points, 0)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Points
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Alert severity="info" sx={{ mb: 3 }}>
              This assessment includes multiple choice questions, coding challenges, and short answers. 
              You can run test cases for coding questions to verify your solutions.
            </Alert>

            <Box display="flex" gap={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                startIcon={<PlayArrow />}
                onClick={() => setIsStarted(true)}
                sx={{ px: 4, py: 1.5 }}
              >
                Start Assessment
              </Button>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  if (showResults) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card elevation={3} sx={{ maxWidth: 800, mx: 'auto' }}>
          <CardContent sx={{ p: 4 }}>
            <Box textAlign="center" mb={4}>
              <CheckCircle sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
              <Typography variant="h4" gutterBottom>
                Assessment Completed!
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                {selectedCandidate.name}
              </Typography>
            </Box>

            <Grid container spacing={3} mb={4}>
              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <Typography variant="h3" color="success.main" fontWeight={700}>
                    {skillsAssessment.score}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Final Score
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <Typography variant="h3" color="primary" fontWeight={700}>
                    {Math.floor((45 * 60 - timeRemaining) / 60)}m
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Time Taken
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box textAlign="center">
                  <Typography variant="h3" color="warning.main" fontWeight={700}>
                    {skillsAssessment.questions.filter(q => 
                      q.type === 'multiple-choice' ? q.answer === q.correctAnswer : 
                      q.type === 'coding' ? codeResults[q.id]?.passed > 0 :
                      (q.answer?.length || 0) > 20
                    ).length}/{skillsAssessment.questions.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Correct
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box mb={3}>
              <Typography variant="h6" gutterBottom>
                Performance Breakdown
              </Typography>
              {skillsAssessment.questions.map((question, index) => (
                <Box key={question.id} mb={2}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="body2">
                      Question {index + 1}: {question.type}
                    </Typography>
                    <Chip
                      label={
                        question.type === 'multiple-choice' 
                          ? (question.answer === question.correctAnswer ? 'Correct' : 'Incorrect')
                          : question.type === 'coding'
                          ? `${codeResults[question.id]?.passed || 0}/${codeResults[question.id]?.total || 0} tests passed`
                          : 'Reviewed'
                      }
                      color={
                        question.type === 'multiple-choice' 
                          ? (question.answer === question.correctAnswer ? 'success' : 'error')
                          : 'info'
                      }
                      size="small"
                    />
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={
                      question.type === 'multiple-choice' 
                        ? (question.answer === question.correctAnswer ? 100 : 0)
                        : question.type === 'coding'
                        ? ((codeResults[question.id]?.passed || 0) / (codeResults[question.id]?.total || 1)) * 100
                        : 80
                    }
                    color={
                      question.type === 'multiple-choice' 
                        ? (question.answer === question.correctAnswer ? 'success' : 'error')
                        : 'primary'
                    }
                    sx={{ height: 6, borderRadius: 3 }}
                  />
                </Box>
              ))}
            </Box>

            <Alert severity="success" sx={{ mb: 3 }}>
              Excellent performance! {selectedCandidate.name} demonstrates strong technical skills 
              and problem-solving abilities. Ready to proceed to the interview stage.
            </Alert>

            <Box textAlign="center">
              <Button
                variant="contained"
                size="large"
                onClick={handleContinue}
                sx={{ px: 4, py: 1.5 }}
              >
                Continue to Video Interview
              </Button>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  const currentQuestion = skillsAssessment.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / skillsAssessment.questions.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box>
        {/* Header */}
        <Card elevation={2} sx={{ mb: 3 }}>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center" gap={2}>
                  <Timer color="primary" />
                  <Box>
                    <Typography variant="h6" color="primary">
                      {formatTime(timeRemaining)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Time remaining
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box textAlign="right">
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Question {currentQuestionIndex + 1} of {skillsAssessment.questions.length}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={progress}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Question */}
        <Card elevation={3}>
          <CardContent sx={{ p: 4 }}>
            <Box mb={3}>
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                {currentQuestion.type === 'multiple-choice' && <Quiz color="primary" />}
                {currentQuestion.type === 'coding' && <Code color="primary" />}
                {currentQuestion.type === 'short-answer' && <Lightbulb color="primary" />}
                <Chip
                  label={`${currentQuestion.points} points`}
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Typography variant="h6" gutterBottom>
                {currentQuestion.question}
              </Typography>
            </Box>

            {/* Multiple Choice */}
            {currentQuestion.type === 'multiple-choice' && (
              <FormControl component="fieldset">
                <RadioGroup
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                >
                  {currentQuestion.options?.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={option}
                      control={<Radio />}
                      label={option}
                      sx={{ mb: 1 }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            )}

            {/* Coding Question */}
            {currentQuestion.type === 'coding' && currentQuestion.code && (
              <Box>
                <Tabs value={tabValue} onChange={(_, newValue) => setTabValue(newValue)} sx={{ mb: 2 }}>
                  <Tab label="Code Editor" />
                  <Tab label="Test Cases" />
                  <Tab label="Results" disabled={!codeResults[currentQuestion.id]} />
                </Tabs>

                <TabPanel value={tabValue} index={0}>
                  <CodeEditor
                    language={currentQuestion.code.language}
                    code={answers[currentQuestion.id] || currentQuestion.code.template}
                    onChange={(code) => handleAnswerChange(currentQuestion.id, code)}
                  />
                  <Box mt={2}>
                    <Button
                      variant="outlined"
                      startIcon={isRunningCode ? <BugReport /> : <PlayArrow />}
                      onClick={() => runCodeTest(currentQuestion)}
                      disabled={isRunningCode}
                    >
                      {isRunningCode ? 'Running Tests...' : 'Run Tests'}
                    </Button>
                  </Box>
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                  {currentQuestion.code.testCases.map((testCase, index) => (
                    <Card key={index} variant="outlined" sx={{ mb: 2 }}>
                      <CardContent>
                        <Typography variant="subtitle2" gutterBottom>
                          Test Case {index + 1}: {testCase.description}
                        </Typography>
                        <Typography variant="body2" component="pre" sx={{ fontFamily: 'monospace' }}>
                          Input: {testCase.input}{'\n'}
                          Expected: {testCase.expectedOutput}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </TabPanel>

                <TabPanel value={tabValue} index={2}>
                  {codeResults[currentQuestion.id] && (
                    <Box>
                      <Alert 
                        severity={codeResults[currentQuestion.id].passed === codeResults[currentQuestion.id].total ? 'success' : 'warning'}
                        sx={{ mb: 2 }}
                      >
                        {codeResults[currentQuestion.id].passed} of {codeResults[currentQuestion.id].total} test cases passed
                      </Alert>
                      {codeResults[currentQuestion.id].results.map((result: any, index: number) => (
                        <Card key={index} variant="outlined" sx={{ mb: 1 }}>
                          <CardContent sx={{ py: 2 }}>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                              <Typography variant="subtitle2">
                                Test Case {index + 1}
                              </Typography>
                              <Chip
                                label={result.passed ? 'PASSED' : 'FAILED'}
                                color={result.passed ? 'success' : 'error'}
                                size="small"
                              />
                            </Box>
                            <Typography variant="body2" component="pre" sx={{ fontFamily: 'monospace', mt: 1 }}>
                              Output: {result.actualOutput}
                            </Typography>
                          </CardContent>
                        </Card>
                      ))}
                    </Box>
                  )}
                </TabPanel>
              </Box>
            )}

            {/* Short Answer */}
            {currentQuestion.type === 'short-answer' && (
              <TextField
                fullWidth
                multiline
                rows={4}
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                placeholder="Enter your answer here..."
                variant="outlined"
              />
            )}

            {/* Navigation */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
              <Button
                variant="outlined"
                disabled={currentQuestionIndex === 0}
                onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
              >
                Previous
              </Button>

              <Box display="flex" gap={1}>
                {skillsAssessment.questions.map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: 
                        index === currentQuestionIndex ? 'primary.main' :
                        answers[skillsAssessment.questions[index].id] ? 'success.main' :
                        'grey.300',
                      cursor: 'pointer',
                    }}
                    onClick={() => setCurrentQuestionIndex(index)}
                  />
                ))}
              </Box>

              {currentQuestionIndex === skillsAssessment.questions.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={handleSubmitAssessment}
                  disabled={Object.keys(answers).length === 0}
                >
                  Submit Assessment
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
                >
                  Next
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
};

export default SkillsAssessmentStep;
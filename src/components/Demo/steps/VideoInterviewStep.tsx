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
  Chip,
  Alert,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Paper,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  Stop,
  Videocam,
  Mic,
  Psychology,
  TrendingUp,
  TrendingDown,
  RemoveRedEye,
  VolumeUp,
  Mood,
  MoodBad,
  SentimentNeutral,
  EmojiEvents,
  Speed,
  RecordVoiceOver,
  Analytics,
  CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useDemoStore } from '@/stores/demoStore';

const VideoInterviewStep: React.FC = () => {
  const {
    selectedCandidate,
    videoInterview,
    setVideoInterview,
    nextStep,
  } = useDemoStore();

  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [realTimeMetrics, setRealTimeMetrics] = useState({
    confidence: 0,
    eyeContact: 0,
    speechPace: 0,
    sentiment: 'neutral' as 'positive' | 'neutral' | 'negative',
  });

  // Simulate real-time analysis during recording
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
        
        // Update real-time metrics with realistic values
        setRealTimeMetrics({
          confidence: Math.min(100, Math.max(0, realTimeMetrics.confidence + (Math.random() - 0.5) * 10)),
          eyeContact: Math.min(100, Math.max(0, realTimeMetrics.eyeContact + (Math.random() - 0.4) * 8)),
          speechPace: Math.min(100, Math.max(0, realTimeMetrics.speechPace + (Math.random() - 0.5) * 12)),
          sentiment: Math.random() > 0.7 ? 
            (Math.random() > 0.5 ? 'positive' : 'negative') : 'neutral',
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording, realTimeMetrics]);

  // Simulate analysis progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showAnalysis && analysisProgress < 100) {
      interval = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 5 + 2;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [showAnalysis, analysisProgress]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    setRealTimeMetrics({
      confidence: 75,
      eyeContact: 60,
      speechPace: 70,
      sentiment: 'neutral',
    });
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    
    if (currentQuestionIndex < (videoInterview?.questions.length || 0) - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setRecordingTime(0);
    } else {
      // Start analysis
      setShowAnalysis(true);
      setAnalysisProgress(0);
    }
  };

  const handleCompleteInterview = () => {
    if (videoInterview) {
      const updatedInterview = {
        ...videoInterview,
        duration: Math.floor(recordingTime / 60),
        confidenceScore: Math.floor(realTimeMetrics.confidence),
        communicationScore: Math.floor((realTimeMetrics.eyeContact + realTimeMetrics.speechPace) / 2),
        overallScore: Math.floor((realTimeMetrics.confidence + realTimeMetrics.eyeContact + realTimeMetrics.speechPace) / 3),
      };
      
      setVideoInterview(updatedInterview);
      setTimeout(() => {
        nextStep();
      }, 2000);
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return <Mood color="success" />;
      case 'negative': return <MoodBad color="error" />;
      default: return <SentimentNeutral color="warning" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'success';
      case 'negative': return 'error';
      default: return 'warning';
    }
  };

  if (!selectedCandidate || !videoInterview) {
    return (
      <Alert severity="warning">
        Please complete the previous steps to begin the video interview analysis.
      </Alert>
    );
  }

  if (showAnalysis && analysisProgress >= 100) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Alert severity="success" sx={{ mb: 3 }}>
              🎉 Video interview analysis complete! AI has processed the interview and generated insights.
            </Alert>
          </Grid>

          {/* Overall Scores */}
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h6" gutterBottom color="primary">
                  Overall Performance
                </Typography>
                <Typography variant="h2" color="success.main" fontWeight={700}>
                  {videoInterview.overallScore}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Excellent candidate performance
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Communication Score */}
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h6" gutterBottom color="primary">
                  Communication
                </Typography>
                <Typography variant="h2" color="primary.main" fontWeight={700}>
                  {videoInterview.communicationScore}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Clear and articulate
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Confidence Score */}
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h6" gutterBottom color="primary">
                  Confidence
                </Typography>
                <Typography variant="h2" color="warning.main" fontWeight={700}>
                  {videoInterview.confidenceScore}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Professional demeanor
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Sentiment Analysis */}
          <Grid item xs={12} md={6}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Psychology /> Sentiment Analysis
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Box textAlign="center">
                      <Typography variant="h4" color="success.main" fontWeight={700}>
                        {videoInterview.sentimentAnalysis.positive}%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Positive
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box textAlign="center">
                      <Typography variant="h4" color="warning.main" fontWeight={700}>
                        {videoInterview.sentimentAnalysis.neutral}%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Neutral
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box textAlign="center">
                      <Typography variant="h4" color="error.main" fontWeight={700}>
                        {videoInterview.sentimentAnalysis.negative}%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Negative
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Box mt={2}>
                  <LinearProgress
                    variant="determinate"
                    value={videoInterview.sentimentAnalysis.positive}
                    color="success"
                    sx={{ height: 8, borderRadius: 4, mb: 1 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    Predominantly positive sentiment indicates enthusiasm and engagement
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Keyword Analysis */}
          <Grid item xs={12} md={6}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Analytics /> Keyword Analysis
                </Typography>
                
                <Box mb={2}>
                  <Typography variant="subtitle2" gutterBottom>Technical Keywords</Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {videoInterview.keywordAnalysis.technical.map(keyword => (
                      <Chip key={keyword} label={keyword} color="primary" variant="outlined" size="small" />
                    ))}
                  </Box>
                </Box>

                <Box mb={2}>
                  <Typography variant="subtitle2" gutterBottom>Soft Skills</Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {videoInterview.keywordAnalysis.soft.map(keyword => (
                      <Chip key={keyword} label={keyword} color="secondary" variant="outlined" size="small" />
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Typography variant="subtitle2" gutterBottom>Leadership</Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {videoInterview.keywordAnalysis.leadership.map(keyword => (
                      <Chip key={keyword} label={keyword} color="success" variant="outlined" size="small" />
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* AI Insights */}
          <Grid item xs={12}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  🤖 AI Interview Insights
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <EmojiEvents color="success" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Strong Technical Foundation"
                          secondary="Demonstrated deep understanding of core technologies"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <RecordVoiceOver color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Excellent Communication"
                          secondary="Clear articulation and structured responses"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <TrendingUp color="success" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Growth Mindset"
                          secondary="Shows enthusiasm for learning and development"
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <Speed color="warning" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Optimal Speaking Pace"
                          secondary="Well-measured delivery, easy to follow"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <RemoveRedEye color="info" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Good Eye Contact"
                          secondary="Maintains engagement throughout interview"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Psychology color="secondary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Cultural Fit"
                          secondary="Values align well with company culture"
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Action */}
          <Grid item xs={12}>
            <Box textAlign="center">
              <Button
                variant="contained"
                size="large"
                onClick={handleCompleteInterview}
                sx={{ px: 4, py: 1.5 }}
              >
                Continue to Analytics Dashboard
              </Button>
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    );
  }

  if (showAnalysis) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" py={8}>
        <CircularProgress size={80} thickness={4} />
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          🤖 AI is analyzing the video interview...
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Processing facial expressions, voice patterns, and response content
        </Typography>
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <LinearProgress
            variant="determinate"
            value={analysisProgress}
            sx={{ height: 8, borderRadius: 4 }}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'center' }}>
            {Math.floor(analysisProgress)}% complete
          </Typography>
        </Box>
      </Box>
    );
  }

  const currentQuestion = videoInterview.questions[currentQuestionIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Grid container spacing={3}>
        {/* Video Interview Panel */}
        <Grid item xs={12} md={8}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Videocam /> Video Interview Session
              </Typography>

              {/* Mock Video Area */}
              <Paper
                elevation={1}
                sx={{
                  height: 300,
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                  color: 'white',
                  position: 'relative',
                }}
              >
                <Box textAlign="center">
                  <Avatar
                    src={selectedCandidate.avatar}
                    sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                  >
                    {selectedCandidate.name.charAt(0)}
                  </Avatar>
                  <Typography variant="h6">{selectedCandidate.name}</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {isRecording ? 'Recording in progress...' : 'Ready to record'}
                  </Typography>
                </Box>

                {/* Recording indicator */}
                {isRecording && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: 'error.main',
                        animation: 'pulse 1.5s infinite',
                      }}
                    />
                    <Typography variant="body2">REC</Typography>
                  </Box>
                )}

                {/* Timer */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                  }}
                >
                  <Typography variant="h6">
                    {formatTime(recordingTime)}
                  </Typography>
                </Box>
              </Paper>

              {/* Current Question */}
              <Paper elevation={1} sx={{ p: 3, mb: 3, backgroundColor: 'background.default' }}>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  Question {currentQuestionIndex + 1} of {videoInterview.questions.length}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {currentQuestion}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={((currentQuestionIndex + 1) / videoInterview.questions.length) * 100}
                  sx={{ mt: 2, height: 6, borderRadius: 3 }}
                />
              </Paper>

              {/* Controls */}
              <Box display="flex" gap={2} justifyContent="center">
                {!isRecording ? (
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<PlayArrow />}
                    onClick={handleStartRecording}
                    sx={{ px: 4 }}
                  >
                    Start Recording
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Stop />}
                    onClick={handleStopRecording}
                    color="error"
                    sx={{ px: 4 }}
                  >
                    Stop Recording
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Real-time Analysis Panel */}
        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Analytics /> Real-time Analysis
              </Typography>

              {isRecording ? (
                <Box>
                  <Box mb={2}>
                    <Typography variant="body2" gutterBottom>
                      Confidence Level
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={realTimeMetrics.confidence}
                      color="success"
                      sx={{ height: 8, borderRadius: 4, mb: 1 }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {Math.floor(realTimeMetrics.confidence)}%
                    </Typography>
                  </Box>

                  <Box mb={2}>
                    <Typography variant="body2" gutterBottom>
                      Eye Contact
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={realTimeMetrics.eyeContact}
                      color="primary"
                      sx={{ height: 8, borderRadius: 4, mb: 1 }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {Math.floor(realTimeMetrics.eyeContact)}%
                    </Typography>
                  </Box>

                  <Box mb={2}>
                    <Typography variant="body2" gutterBottom>
                      Speech Pace
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={realTimeMetrics.speechPace}
                      color="warning"
                      sx={{ height: 8, borderRadius: 4, mb: 1 }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {Math.floor(realTimeMetrics.speechPace)}%
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="body2" gutterBottom>
                      Current Sentiment
                    </Typography>
                    <Chip
                      icon={getSentimentIcon(realTimeMetrics.sentiment)}
                      label={realTimeMetrics.sentiment.toUpperCase()}
                      color={getSentimentColor(realTimeMetrics.sentiment) as any}
                      variant="filled"
                    />
                  </Box>
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Start recording to see real-time AI analysis metrics
                </Typography>
              )}
            </CardContent>
          </Card>

          {/* Interview Questions */}
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                Interview Questions
              </Typography>
              
              <List dense>
                {videoInterview.questions.map((question, index) => (
                  <React.Fragment key={index}>
                    <ListItem
                      sx={{
                        backgroundColor: index === currentQuestionIndex ? 'action.selected' : 'transparent',
                        borderRadius: 1,
                        mb: 1,
                      }}
                    >
                      <ListItemIcon>
                        {index < currentQuestionIndex ? (
                          <CheckCircle color="success" />
                        ) : index === currentQuestionIndex ? (
                          <PlayArrow color="primary" />
                        ) : (
                          <Pause color="disabled" />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={`Q${index + 1}`}
                        secondary={question}
                        secondaryTypographyProps={{
                          style: { fontSize: '0.8rem' }
                        }}
                      />
                    </ListItem>
                    {index < videoInterview.questions.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </motion.div>
  );
};

export default VideoInterviewStep;
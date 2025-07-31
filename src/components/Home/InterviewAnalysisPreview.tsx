'use client';

import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Chip, 
  LinearProgress,
  Divider,
  useTheme,
  alpha
} from '@mui/material';
import {
  SentimentSatisfied as SentimentSatisfiedIcon,
  SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon,
  SentimentNeutral as SentimentNeutralIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Warning as WarningIcon,
  Psychology as PsychologyIcon,
  Speed as SpeedIcon,
  Lightbulb as LightbulbIcon,
  RecordVoiceOver as RecordVoiceOverIcon,
  Face as FaceIcon,
  Visibility as VisibilityIcon
} from '@mui/icons-material';

// Interview analysis data
const interviewData = {
  candidateName: 'Emily Johnson',
  position: 'Senior Frontend Developer',
  duration: '42 minutes',
  overallScore: 87,
  technicalScore: 92,
  communicationScore: 85,
  problemSolvingScore: 88,
  culturalFitScore: 83,
  sentimentAnalysis: {
    positive: 68,
    neutral: 27,
    negative: 5
  },
  keyInsights: [
    'Strong understanding of React ecosystem and state management',
    'Excellent problem-solving approach with clear communication',
    'Could improve knowledge of performance optimization techniques',
    'Shows enthusiasm and alignment with company values'
  ],
  skillAssessment: [
    { skill: 'React', score: 95, benchmark: 80 },
    { skill: 'TypeScript', score: 90, benchmark: 75 },
    { skill: 'Performance Optimization', score: 78, benchmark: 80 },
    { skill: 'Testing', score: 85, benchmark: 70 },
    { skill: 'System Design', score: 82, benchmark: 75 }
  ],
  behavioralTraits: [
    { trait: 'Communication', score: 85, benchmark: 75 },
    { trait: 'Teamwork', score: 88, benchmark: 80 },
    { trait: 'Leadership', score: 80, benchmark: 70 },
    { trait: 'Adaptability', score: 92, benchmark: 75 },
    { trait: 'Problem Solving', score: 88, benchmark: 80 }
  ],
  speechAnalysis: {
    clarity: 90,
    pace: 85,
    fillerWords: 12,
    technicalTerms: 28
  },
  facialAnalysis: {
    engagement: 92,
    confidence: 88,
    nervousness: 15
  }
};

export const InterviewAnalysisPreview: React.FC = () => {
  const theme = useTheme();

  const getScoreColor = (score: number) => {
    if (score >= 85) return theme.palette.success.main;
    if (score >= 70) return theme.palette.warning.main;
    return theme.palette.error.main;
  };

  const getSentimentIcon = (type: string) => {
    switch (type) {
      case 'positive':
        return <SentimentSatisfiedIcon sx={{ color: theme.palette.success.main }} />;
      case 'negative':
        return <SentimentVeryDissatisfiedIcon sx={{ color: theme.palette.error.main }} />;
      default:
        return <SentimentNeutralIcon sx={{ color: theme.palette.warning.main }} />;
    }
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
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          color: 'white',
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          AI Interview Analysis
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h6">{interviewData.candidateName}</Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {interviewData.position} • {interviewData.duration}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '3px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <Typography variant="h4" fontWeight={700}>
              {interviewData.overallScore}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              Overall Score
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
        <Grid container spacing={3}>
          {/* Score Breakdown */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
              }}
            >
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Score Breakdown
              </Typography>
              <Grid container spacing={2}>
                {[
                  { label: 'Technical', score: interviewData.technicalScore, icon: <CheckCircleIcon /> },
                  { label: 'Communication', score: interviewData.communicationScore, icon: <RecordVoiceOverIcon /> },
                  { label: 'Problem Solving', score: interviewData.problemSolvingScore, icon: <PsychologyIcon /> },
                  { label: 'Cultural Fit', score: interviewData.culturalFitScore, icon: <FaceIcon /> },
                ].map((item, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          mx: 'auto',
                          mb: 1,
                          background: alpha(getScoreColor(item.score), 0.1),
                          color: getScoreColor(item.score),
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {item.label}
                      </Typography>
                      <Typography variant="h6" fontWeight={600} sx={{ color: getScoreColor(item.score) }}>
                        {item.score}%
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Sentiment Analysis */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <VisibilityIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                <Typography variant="h6" fontWeight={600}>
                  Sentiment Analysis
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                {Object.entries(interviewData.sentimentAnalysis).map(([key, value], index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {getSentimentIcon(key)}
                        <Typography variant="body2" sx={{ ml: 1, textTransform: 'capitalize' }}>
                          {key}
                        </Typography>
                      </Box>
                      <Typography variant="body2" fontWeight={600}>
                        {value}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={value}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: alpha(theme.palette.grey[500], 0.1),
                        '& .MuiLinearProgress-bar': {
                          backgroundColor:
                            key === 'positive'
                              ? theme.palette.success.main
                              : key === 'negative'
                              ? theme.palette.error.main
                              : theme.palette.warning.main,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LightbulbIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                <Typography variant="h6" fontWeight={600}>
                  Key Insights
                </Typography>
              </Box>
              <Box>
                {interviewData.keyInsights.map((insight, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      mb: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: 24,
                        mt: 0.25,
                        mr: 1,
                        color:
                          insight.includes('Strong') || insight.includes('Excellent')
                            ? theme.palette.success.main
                            : insight.includes('improve') || insight.includes('Could')
                            ? theme.palette.warning.main
                            : theme.palette.info.main,
                      }}
                    >
                      {insight.includes('Strong') || insight.includes('Excellent') ? (
                        <CheckCircleIcon fontSize="small" />
                      ) : insight.includes('improve') || insight.includes('Could') ? (
                        <WarningIcon fontSize="small" />
                      ) : (
                        <LightbulbIcon fontSize="small" />
                      )}
                    </Box>
                    <Typography variant="body2">{insight}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Skill Assessment */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircleIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                <Typography variant="h6" fontWeight={600}>
                  Technical Skills Assessment
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                {interviewData.skillAssessment.map((skill, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2">{skill.skill}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                          variant="body2"
                          fontWeight={600}
                          sx={{
                            color:
                              skill.score >= skill.benchmark
                                ? theme.palette.success.main
                                : theme.palette.error.main,
                          }}
                        >
                          {skill.score}%
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                          (Benchmark: {skill.benchmark}%)
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ position: 'relative' }}>
                      <LinearProgress
                        variant="determinate"
                        value={skill.score}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: alpha(theme.palette.grey[500], 0.1),
                          '& .MuiLinearProgress-bar': {
                            backgroundColor:
                              skill.score >= skill.benchmark
                                ? theme.palette.success.main
                                : theme.palette.error.main,
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: `${skill.benchmark}%`,
                          height: 8,
                          width: 2,
                          backgroundColor: theme.palette.warning.main,
                          zIndex: 1,
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PsychologyIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                <Typography variant="h6" fontWeight={600}>
                  Behavioral Assessment
                </Typography>
              </Box>
              <Box>
                {interviewData.behavioralTraits.map((trait, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2">{trait.trait}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                          variant="body2"
                          fontWeight={600}
                          sx={{
                            color:
                              trait.score >= trait.benchmark
                                ? theme.palette.success.main
                                : theme.palette.error.main,
                          }}
                        >
                          {trait.score}%
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                          (Benchmark: {trait.benchmark}%)
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ position: 'relative' }}>
                      <LinearProgress
                        variant="determinate"
                        value={trait.score}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: alpha(theme.palette.grey[500], 0.1),
                          '& .MuiLinearProgress-bar': {
                            backgroundColor:
                              trait.score >= trait.benchmark
                                ? theme.palette.success.main
                                : theme.palette.error.main,
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: `${trait.benchmark}%`,
                          height: 8,
                          width: 2,
                          backgroundColor: theme.palette.warning.main,
                          zIndex: 1,
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Additional Analysis */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
              }}
            >
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Advanced Analysis
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <RecordVoiceOverIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                    <Typography variant="subtitle1" fontWeight={600}>
                      Speech Analysis
                    </Typography>
                  </Box>
                  <Grid container spacing={1}>
                    {Object.entries(interviewData.speechAnalysis).map(([key, value], index) => (
                      <Grid item xs={6} key={index}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            background: alpha(theme.palette.primary.main, 0.05),
                            height: '100%',
                          }}
                        >
                          <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </Typography>
                          <Typography variant="h6" fontWeight={600}>
                            {key === 'fillerWords' || key === 'technicalTerms' ? value : `${value}%`}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FaceIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                    <Typography variant="subtitle1" fontWeight={600}>
                      Facial Expression Analysis
                    </Typography>
                  </Box>
                  <Grid container spacing={1}>
                    {Object.entries(interviewData.facialAnalysis).map(([key, value], index) => (
                      <Grid item xs={4} key={index}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            background: alpha(theme.palette.primary.main, 0.05),
                            height: '100%',
                          }}
                        >
                          <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
                            {key}
                          </Typography>
                          <Typography variant="h6" fontWeight={600}>
                            {`${value}%`}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InterviewAnalysisPreview;

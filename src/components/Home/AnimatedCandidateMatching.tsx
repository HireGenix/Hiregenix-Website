'use client';

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  LinearProgress, 
  Avatar,
  Chip,
  useTheme, 
  alpha 
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface Candidate {
  id: number;
  name: string;
  position: string;
  avatar: string;
  skills: string[];
  matchScore: number;
  color: string;
}

interface AnimatedCandidateMatchingProps {
  delay?: number;
}

export const AnimatedCandidateMatching: React.FC<AnimatedCandidateMatchingProps> = ({ 
  delay = 1000 
}) => {
  const theme = useTheme();
  const [step, setStep] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [matchedCandidates, setMatchedCandidates] = useState<Candidate[]>([]);
  
  // Sample job description
  const jobDescription = {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    requirements: [
      "5+ years of experience with React",
      "Strong TypeScript skills",
      "Experience with state management",
      "Knowledge of modern CSS and responsive design",
      "Experience with testing frameworks"
    ]
  };
  
  // Sample candidates
  const candidates: Candidate[] = [
    {
      id: 1,
      name: "Emily Johnson",
      position: "Frontend Developer",
      avatar: "/avatars/avatar1.jpg",
      skills: ["React", "TypeScript", "Redux", "CSS", "Jest"],
      matchScore: 92,
      color: theme.palette.success.main
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "UI Developer",
      avatar: "/avatars/avatar2.jpg",
      skills: ["React", "JavaScript", "CSS", "Figma"],
      matchScore: 78,
      color: theme.palette.warning.main
    },
    {
      id: 3,
      name: "Sarah Williams",
      position: "Full Stack Developer",
      avatar: "/avatars/avatar3.jpg",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      matchScore: 85,
      color: theme.palette.info.main
    }
  ];
  
  // Animation sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === 0) {
        setStep(1);
        setAnalyzing(true);
        
        // Progress animation
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              setTimeout(() => {
                setAnalyzing(false);
                setStep(2);
              }, 500);
              return 100;
            }
            return prev + 5;
          });
        }, 150);
        
        return () => clearInterval(interval);
      }
      
      if (step === 2) {
        // Reveal candidates one by one
        candidates.forEach((candidate, index) => {
          setTimeout(() => {
            setMatchedCandidates(prev => [...prev, candidate]);
          }, index * 800);
        });
        
        setTimeout(() => {
          setStep(3);
        }, candidates.length * 800 + 500);
      }
      
      if (step === 3) {
        // Reset the animation after some time
        setTimeout(() => {
          setStep(0);
          setProgress(0);
          setMatchedCandidates([]);
        }, 5000);
      }
    }, step === 0 ? delay : 1000);
    
    return () => clearTimeout(timer);
  }, [step, delay]);
  
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        background: '#fff',
        p: 3,
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          AI Candidate Matching
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Watch our AI analyze and match candidates to your job in real-time
        </Typography>
      </Box>
      
      {/* Job Description */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 2,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          background: alpha(theme.palette.primary.main, 0.03),
        }}
      >
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          {jobDescription.title} at {jobDescription.company}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Requirements:
        </Typography>
        <Box component="ul" sx={{ m: 0, pl: 2 }}>
          {jobDescription.requirements.map((req, index) => (
            <Typography key={index} component="li" variant="body2" color="text.secondary">
              {req}
            </Typography>
          ))}
        </Box>
      </Paper>
      
      {/* Analysis Animation */}
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                height: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Ready to find your perfect match
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Click to start the AI matching process
              </Typography>
            </Box>
          </motion.div>
        )}
        
        {step === 1 && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                height: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ width: '100%', maxWidth: 400, mb: 3 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom align="center">
                  {analyzing ? 'AI analyzing candidates...' : 'Analysis complete!'}
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={progress} 
                  sx={{ 
                    height: 10, 
                    borderRadius: 5,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  }} 
                />
              </Box>
              
              <Box sx={{ textAlign: 'center' }}>
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                >
                  <Box
                    component="img"
                    src="/hero-pattern.svg"
                    alt="AI Processing"
                    sx={{ 
                      width: 120,
                      height: 120,
                      opacity: 0.7,
                      filter: 'hue-rotate(45deg)'
                    }}
                  />
                </motion.div>
                
                <Box sx={{ mt: 2 }}>
                  {analyzing ? (
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Evaluating skills and experience...
                      </Typography>
                    </motion.div>
                  ) : (
                    <Typography variant="body2" color={theme.palette.success.main} fontWeight={600}>
                      Found {candidates.length} matching candidates!
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </motion.div>
        )}
        
        {(step === 2 || step === 3) && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ minHeight: 300 }}>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                Top Matching Candidates:
              </Typography>
              
              <Grid container spacing={2}>
                {matchedCandidates.map((candidate, index) => (
                  <Grid item xs={12} key={candidate.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          border: '1px solid',
                          borderColor: alpha(candidate.color, 0.3),
                          background: alpha(candidate.color, 0.05),
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                        }}
                      >
                        <Avatar 
                          src={candidate.avatar} 
                          alt={candidate.name}
                          sx={{ width: 50, height: 50 }}
                        />
                        
                        <Box sx={{ flexGrow: 1 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography variant="subtitle1" fontWeight={600}>
                              {candidate.name}
                            </Typography>
                            <Chip 
                              label={`${candidate.matchScore}% Match`}
                              size="small"
                              sx={{ 
                                backgroundColor: alpha(candidate.color, 0.1),
                                color: candidate.color,
                                fontWeight: 600,
                                border: `1px solid ${alpha(candidate.color, 0.3)}`
                              }}
                            />
                          </Box>
                          
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            {candidate.position}
                          </Typography>
                          
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                            {candidate.skills.map((skill, idx) => (
                              <Chip
                                key={idx}
                                label={skill}
                                size="small"
                                sx={{ 
                                  height: 24,
                                  fontSize: '0.7rem',
                                  backgroundColor: alpha(theme.palette.grey[500], 0.1),
                                }}
                              />
                            ))}
                          </Box>
                        </Box>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default AnimatedCandidateMatching;

'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Button,
  LinearProgress,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Alert,
  CircularProgress,
  Rating,
  Badge,
} from '@mui/material';
import {
  Person,
  Psychology,
  Work,
  LocationOn,
  Email,
  Phone,
  Visibility,
  FilterList,
  Sort,
  Star,
  TrendingUp,
  CheckCircle,
  Schedule,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useDemoStore } from '@/stores/demoStore';
import { Candidate } from '@/types/demo';

const CandidateMatchingStep: React.FC = () => {
  const {
    candidates,
    selectedCandidate,
    selectCandidate,
    jobCreation,
    isLoading,
    nextStep,
  } = useDemoStore();

  const [sortBy, setSortBy] = useState<'matchScore' | 'experience' | 'appliedDate'>('matchScore');
  const [filterBySkills, setFilterBySkills] = useState<string[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [viewingCandidate, setViewingCandidate] = useState<Candidate | null>(null);
  const [realTimeScoring, setRealTimeScoring] = useState(false);

  // Simulate real-time AI scoring updates
  useEffect(() => {
    if (candidates.length > 0 && !selectedCandidate) {
      setRealTimeScoring(true);
      const timer = setTimeout(() => {
        setRealTimeScoring(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [candidates, selectedCandidate]);

  const sortedCandidates = [...candidates].sort((a, b) => {
    switch (sortBy) {
      case 'matchScore':
        return b.matchScore - a.matchScore;
      case 'experience':
        return b.experience - a.experience;
      case 'appliedDate':
        return new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime();
      default:
        return 0;
    }
  });

  const filteredCandidates = filterBySkills.length > 0
    ? sortedCandidates.filter(candidate =>
        filterBySkills.every(skill => candidate.skills.includes(skill))
      )
    : sortedCandidates;

  const handleCandidateSelect = (candidate: Candidate) => {
    selectCandidate(candidate);
    // Auto advance after selection with a delay
    setTimeout(() => {
      nextStep();
    }, 2000);
  };

  const handleViewDetails = (candidate: Candidate) => {
    setViewingCandidate(candidate);
    setShowDetails(true);
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'success';
    if (score >= 75) return 'warning';
    return 'error';
  };

  const getStatusColor = (status: Candidate['status']) => {
    const colors = {
      applied: 'info',
      screening: 'warning',
      assessment: 'secondary',
      interview: 'primary',
      hired: 'success',
      rejected: 'error',
    };
    return colors[status] as any;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (!jobCreation) {
    return (
      <Alert severity="warning">
        Please complete the job creation step first to see candidate matches.
      </Alert>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Box>
        {/* Real-time AI scoring indicator */}
        {realTimeScoring && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Alert
              severity="info"
              sx={{ mb: 3 }}
              icon={<TrendingUp />}
            >
              🤖 AI is analyzing candidates in real-time and updating match scores...
            </Alert>
          </motion.div>
        )}

        {isLoading ? (
          <Box display="flex" flexDirection="column" alignItems="center" py={8}>
            <CircularProgress size={60} thickness={4} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Generating AI-powered candidate matches...
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Analyzing {jobCreation.skills.length} skills across our candidate database
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {/* Summary Panel */}
            <Grid item xs={12}>
              <motion.div variants={itemVariants}>
                <Card elevation={3} sx={{ mb: 3, background: 'linear-gradient(135deg, #f8faff 0%, #e8f3ff 100%)' }}>
                  <CardContent>
                    <Grid container spacing={3} alignItems="center">
                      <Grid item xs={12} sm={3}>
                        <Box textAlign="center">
                          <Typography variant="h3" color="primary" fontWeight={700}>
                            {candidates.length}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Candidates Found
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Box textAlign="center">
                          <Typography variant="h3" color="success.main" fontWeight={700}>
                            {candidates.filter(c => c.matchScore >= 80).length}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            High Match (80%+)
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Box textAlign="center">
                          <Typography variant="h3" color="warning.main" fontWeight={700}>
                            {Math.round(candidates.reduce((sum, c) => sum + c.matchScore, 0) / candidates.length)}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Average Match
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <Box textAlign="center">
                          <Chip
                            label={selectedCandidate ? 'Candidate Selected' : 'Select Candidate'}
                            color={selectedCandidate ? 'success' : 'primary'}
                            icon={selectedCandidate ? <CheckCircle /> : <Person />}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Controls */}
            <Grid item xs={12}>
              <motion.div variants={itemVariants}>
                <Box display="flex" gap={2} mb={3} flexWrap="wrap">
                  <Button
                    variant={sortBy === 'matchScore' ? 'contained' : 'outlined'}
                    startIcon={<Sort />}
                    onClick={() => setSortBy('matchScore')}
                  >
                    Best Match
                  </Button>
                  <Button
                    variant={sortBy === 'experience' ? 'contained' : 'outlined'}
                    startIcon={<Work />}
                    onClick={() => setSortBy('experience')}
                  >
                    Experience
                  </Button>
                  <Button
                    variant={sortBy === 'appliedDate' ? 'contained' : 'outlined'}
                    startIcon={<Schedule />}
                    onClick={() => setSortBy('appliedDate')}
                  >
                    Recent
                  </Button>
                  <Divider orientation="vertical" flexItem />
                  <Box display="flex" gap={1} flexWrap="wrap">
                    {jobCreation.skills.slice(0, 3).map(skill => (
                      <Chip
                        key={skill}
                        label={skill}
                        variant={filterBySkills.includes(skill) ? 'filled' : 'outlined'}
                        onClick={() => {
                          setFilterBySkills(prev =>
                            prev.includes(skill)
                              ? prev.filter(s => s !== skill)
                              : [...prev, skill]
                          );
                        }}
                        size="small"
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Candidate Cards */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <AnimatePresence>
                  {filteredCandidates.slice(0, 8).map((candidate, index) => (
                    <Grid item xs={12} sm={6} lg={4} key={candidate.id}>
                      <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card
                          elevation={selectedCandidate?.id === candidate.id ? 4 : 2}
                          sx={{
                            cursor: 'pointer',
                            height: '100%',
                            border: selectedCandidate?.id === candidate.id ? 2 : 0,
                            borderColor: 'primary.main',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: (theme) => theme.shadows[8],
                            },
                          }}
                          onClick={() => handleCandidateSelect(candidate)}
                        >
                          <CardContent sx={{ pb: 2 }}>
                            {/* Header */}
                            <Box display="flex" alignItems="flex-start" justifyContent="space-between" mb={2}>
                              <Box display="flex" alignItems="center" gap={2}>
                                <Badge
                                  badgeContent={
                                    selectedCandidate?.id === candidate.id ? (
                                      <CheckCircle color="success" sx={{ fontSize: 16 }} />
                                    ) : null
                                  }
                                >
                                  <Avatar
                                    src={candidate.avatar}
                                    sx={{ width: 50, height: 50 }}
                                  >
                                    {candidate.name.charAt(0)}
                                  </Avatar>
                                </Badge>
                                <Box flex={1}>
                                  <Typography variant="h6" noWrap>
                                    {candidate.name}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary" noWrap>
                                    {candidate.experience} years exp.
                                  </Typography>
                                </Box>
                              </Box>
                              <IconButton
                                size="small"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleViewDetails(candidate);
                                }}
                              >
                                <Visibility />
                              </IconButton>
                            </Box>

                            {/* Match Score */}
                            <Box mb={2}>
                              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                <Typography variant="body2" fontWeight={600}>
                                  AI Match Score
                                </Typography>
                                <Typography
                                  variant="h6"
                                  color={`${getMatchScoreColor(candidate.matchScore)}.main`}
                                  fontWeight={700}
                                >
                                  {realTimeScoring ? (
                                    <CircularProgress size={20} />
                                  ) : (
                                    `${candidate.matchScore}%`
                                  )}
                                </Typography>
                              </Box>
                              <LinearProgress
                                variant="determinate"
                                value={candidate.matchScore}
                                color={getMatchScoreColor(candidate.matchScore)}
                                sx={{ height: 6, borderRadius: 3 }}
                              />
                            </Box>

                            {/* Skills Match */}
                            <Box mb={2}>
                              <Typography variant="body2" color="text.secondary" gutterBottom>
                                Skills Match: {candidate.skillsMatch}%
                              </Typography>
                              <Box display="flex" flexWrap="wrap" gap={0.5}>
                                {candidate.skills
                                  .filter(skill => jobCreation.skills.includes(skill))
                                  .slice(0, 3)
                                  .map(skill => (
                                    <Chip
                                      key={skill}
                                      label={skill}
                                      size="small"
                                      color="primary"
                                      variant="outlined"
                                    />
                                  ))}
                                {candidate.skills.filter(skill => jobCreation.skills.includes(skill)).length > 3 && (
                                  <Chip
                                    label={`+${candidate.skills.filter(skill => jobCreation.skills.includes(skill)).length - 3}`}
                                    size="small"
                                    variant="outlined"
                                  />
                                )}
                              </Box>
                            </Box>

                            {/* Status & Location */}
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                              <Chip
                                label={candidate.status}
                                size="small"
                                color={getStatusColor(candidate.status)}
                                variant="filled"
                              />
                              <Typography variant="caption" color="text.secondary">
                                <LocationOn sx={{ fontSize: 12, mr: 0.5 }} />
                                {candidate.location}
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </AnimatePresence>
              </Grid>
            </Grid>

            {/* Selected Candidate */}
            {selectedCandidate && (
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Alert
                    severity="success"
                    sx={{ mt: 2 }}
                    action={
                      <Button color="inherit" onClick={nextStep}>
                        Continue to Assessment
                      </Button>
                    }
                  >
                    <Typography fontWeight={600}>
                      🎉 Great choice! {selectedCandidate.name} has been selected for the next step.
                    </Typography>
                    <Typography variant="body2">
                      Moving to skills assessment and interview preparation...
                    </Typography>
                  </Alert>
                </motion.div>
              </Grid>
            )}
          </Grid>
        )}

        {/* Candidate Details Modal */}
        <Dialog
          open={showDetails}
          onClose={() => setShowDetails(false)}
          maxWidth="md"
          fullWidth
        >
          {viewingCandidate && (
            <>
              <DialogTitle>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar src={viewingCandidate.avatar} sx={{ width: 60, height: 60 }}>
                    {viewingCandidate.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h5">{viewingCandidate.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {viewingCandidate.experience} years experience
                    </Typography>
                  </Box>
                </Box>
              </DialogTitle>
              <DialogContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Contact Information</Typography>
                    <List dense>
                      <ListItem>
                        <ListItemAvatar>
                          <Email />
                        </ListItemAvatar>
                        <ListItemText primary={viewingCandidate.email} secondary="Email" />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <Phone />
                        </ListItemAvatar>
                        <ListItemText primary={viewingCandidate.phone} secondary="Phone" />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <LocationOn />
                        </ListItemAvatar>
                        <ListItemText primary={viewingCandidate.location} secondary="Location" />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Match Analysis</Typography>
                    <Box mb={2}>
                      <Typography variant="body2">Overall Match: {viewingCandidate.matchScore}%</Typography>
                      <LinearProgress
                        variant="determinate"
                        value={viewingCandidate.matchScore}
                        sx={{ mt: 1, mb: 2 }}
                      />
                    </Box>
                    <Box mb={2}>
                      <Typography variant="body2">Skills Match: {viewingCandidate.skillsMatch}%</Typography>
                      <LinearProgress
                        variant="determinate"
                        value={viewingCandidate.skillsMatch}
                        sx={{ mt: 1, mb: 2 }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="body2">Experience Match: {viewingCandidate.experienceMatch}%</Typography>
                      <LinearProgress
                        variant="determinate"
                        value={viewingCandidate.experienceMatch}
                        sx={{ mt: 1 }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>Skills</Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {viewingCandidate.skills.map(skill => (
                        <Chip
                          key={skill}
                          label={skill}
                          color={jobCreation.skills.includes(skill) ? 'primary' : 'default'}
                          variant={jobCreation.skills.includes(skill) ? 'filled' : 'outlined'}
                        />
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setShowDetails(false)}>Close</Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleCandidateSelect(viewingCandidate);
                    setShowDetails(false);
                  }}
                >
                  Select Candidate
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Box>
    </motion.div>
  );
};

export default CandidateMatchingStep;
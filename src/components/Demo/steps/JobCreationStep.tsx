'use client';

import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Autocomplete,
  Chip,
  Button,
  Typography,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Alert,
  LinearProgress,
} from '@mui/material';
import {
  Work,
  LocationOn,
  AttachMoney,
  Psychology,
  Send,
  Add,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useDemoStore } from '@/stores/demoStore';
import { JobCreation } from '@/types/demo';

const predefinedSkills = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'C#',
  'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis',
  'Git', 'CI/CD', 'Agile', 'Scrum', 'Leadership', 'Communication',
  'Problem Solving', 'Team Management', 'Project Management',
  'Machine Learning', 'Data Science', 'UI/UX Design', 'DevOps'
];

const departments = [
  'Engineering', 'Product', 'Design', 'Marketing', 'Sales', 'HR',
  'Operations', 'Finance', 'Customer Success', 'Data Science'
];

const locations = [
  'Remote', 'San Francisco, CA', 'New York, NY', 'Seattle, WA',
  'Austin, TX', 'Chicago, IL', 'Boston, MA', 'Los Angeles, CA'
];

const experienceLevels = [
  'Entry Level (0-2 years)',
  'Mid Level (3-5 years)',
  'Senior Level (6-8 years)',
  'Lead Level (9+ years)'
];

const jobTypes = [
  'Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance'
];

const JobCreationStep: React.FC = () => {
  const { setJobCreation, isLoading } = useDemoStore();
  
  const [formData, setFormData] = useState<Partial<JobCreation>>({
    title: '',
    department: '',
    location: '',
    experience: '',
    jobType: 'Full-time',
    salary: { min: 80000, max: 120000 },
    skills: [],
    description: '',
    requirements: [],
  });

  const [newRequirement, setNewRequirement] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof JobCreation, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSalaryChange = (type: 'min' | 'max', value: number) => {
    setFormData(prev => ({
      ...prev,
      salary: { ...prev.salary!, [type]: value }
    }));
  };

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setFormData(prev => ({
        ...prev,
        requirements: [...(prev.requirements || []), newRequirement.trim()]
      }));
      setNewRequirement('');
    }
  };

  const removeRequirement = (index: number) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements?.filter((_, i) => i !== index) || []
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title?.trim()) newErrors.title = 'Job title is required';
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.experience) newErrors.experience = 'Experience level is required';
    if (!formData.skills?.length) newErrors.skills = 'At least one skill is required';
    if (!formData.description?.trim()) newErrors.description = 'Job description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setJobCreation(formData as JobCreation);
    }
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Box>
        {/* Progress indicator */}
        {isLoading && (
          <Box mb={3}>
            <Alert severity="info" sx={{ mb: 2 }}>
              🤖 AI is analyzing your job requirements and generating candidate matches...
            </Alert>
            <LinearProgress sx={{ borderRadius: 1 }} />
          </Box>
        )}

        <Grid container spacing={3}>
          {/* Basic Information */}
          <Grid item xs={12} md={8}>
            <motion.div variants={itemVariants}>
              <Card 
                elevation={0} 
                sx={{ 
                  mb: 3,
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 3,
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
                    height: '3px',
                    background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                  },
                }}
              >
                <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 600,
                    }}
                  >
                    <Work sx={{ color: '#6366f1' }} /> Basic Information
                  </Typography>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Job Title"
                        value={formData.title || ''}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        error={!!errors.title}
                        helperText={errors.title}
                        placeholder="e.g., Senior Full Stack Developer"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            background: 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: 2,
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#6366f1',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                              borderColor: '#6366f1',
                              borderWidth: 2,
                            },
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#6366f1',
                          },
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth error={!!errors.department}>
                        <InputLabel>Department</InputLabel>
                        <Select
                          value={formData.department || ''}
                          label="Department"
                          onChange={(e) => handleInputChange('department', e.target.value)}
                        >
                          {departments.map(dept => (
                            <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Autocomplete
                        options={locations}
                        value={formData.location || ''}
                        onChange={(_, value) => handleInputChange('location', value)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Location"
                            error={!!errors.location}
                            helperText={errors.location}
                            InputProps={{
                              ...params.InputProps,
                              startAdornment: (
                                <InputAdornment position="start">
                                  <LocationOn />
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth error={!!errors.experience}>
                        <InputLabel>Experience Level</InputLabel>
                        <Select
                          value={formData.experience || ''}
                          label="Experience Level"
                          onChange={(e) => handleInputChange('experience', e.target.value)}
                        >
                          {experienceLevels.map(level => (
                            <MenuItem key={level} value={level}>{level}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Job Type</InputLabel>
                        <Select
                          value={formData.jobType || 'Full-time'}
                          label="Job Type"
                          onChange={(e) => handleInputChange('jobType', e.target.value)}
                        >
                          {jobTypes.map(type => (
                            <MenuItem key={type} value={type}>{type}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>

            {/* Salary Range */}
            <motion.div variants={itemVariants}>
              <Card elevation={2} sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AttachMoney /> Salary Range
                  </Typography>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Minimum Salary"
                        type="number"
                        value={formData.salary?.min || 80000}
                        onChange={(e) => handleSalaryChange('min', Number(e.target.value))}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Maximum Salary"
                        type="number"
                        value={formData.salary?.max || 120000}
                        onChange={(e) => handleSalaryChange('max', Number(e.target.value))}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills & Requirements */}
            <motion.div variants={itemVariants}>
              <Card elevation={2} sx={{ mb: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Psychology /> Skills & Requirements
                  </Typography>
                  
                  <Box mb={3}>
                    <Autocomplete
                      multiple
                      options={predefinedSkills}
                      value={formData.skills || []}
                      onChange={(_, value) => handleInputChange('skills', value)}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip
                            variant="outlined"
                            label={option}
                            {...getTagProps({ index })}
                            key={option}
                          />
                        ))
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Required Skills"
                          placeholder="Select skills..."
                          error={!!errors.skills}
                          helperText={errors.skills || 'Select the key skills required for this position'}
                        />
                      )}
                    />
                  </Box>

                  <Box mb={2}>
                    <Box display="flex" gap={1} mb={2}>
                      <TextField
                        fullWidth
                        label="Add Job Requirement"
                        value={newRequirement}
                        onChange={(e) => setNewRequirement(e.target.value)}
                        placeholder="e.g., Bachelor's degree in Computer Science"
                        onKeyPress={(e) => e.key === 'Enter' && addRequirement()}
                      />
                      <Button
                        variant="outlined"
                        onClick={addRequirement}
                        disabled={!newRequirement.trim()}
                        sx={{ minWidth: 'auto', px: 2 }}
                      >
                        <Add />
                      </Button>
                    </Box>
                    
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {formData.requirements?.map((req, index) => (
                        <Chip
                          key={index}
                          label={req}
                          onDelete={() => removeRequirement(index)}
                          color="secondary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>

            {/* Job Description */}
            <motion.div variants={itemVariants}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Job Description
                  </Typography>
                  
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="Job Description"
                    value={formData.description || ''}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    error={!!errors.description}
                    helperText={errors.description || 'Provide a detailed description of the role, responsibilities, and what makes this position exciting'}
                    placeholder="We are looking for a passionate developer to join our team..."
                  />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Action Panel */}
          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Card elevation={3} sx={{ position: 'sticky', top: 20 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    Ready to Find Candidates?
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Once you submit this job, our AI will instantly analyze your requirements and match you with the best candidates from our database.
                  </Typography>

                  <Box mb={2}>
                    <Typography variant="subtitle2" gutterBottom>
                      What happens next:
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ fontSize: '0.875rem' }}>
                      • AI analyzes job requirements<br />
                      • Matches candidates by skills & experience<br />
                      • Provides real-time scoring<br />
                      • Generates assessment recommendations
                    </Typography>
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    startIcon={<Send />}
                    sx={{
                      py: 1.5,
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      borderRadius: 3,
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #5b21b6, #7c3aed)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 35px rgba(99, 102, 241, 0.4)',
                      },
                      '&:disabled': {
                        background: 'linear-gradient(135deg, #9ca3af, #d1d5db)',
                        transform: 'none',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {isLoading ? 'Processing...' : 'Generate Candidate Matches'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default JobCreationStep;
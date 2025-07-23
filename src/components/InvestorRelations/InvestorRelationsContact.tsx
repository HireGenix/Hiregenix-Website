"use client";

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Paper, 
  Link, 
  Divider, 
  useTheme, 
  IconButton, 
  Chip,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Tooltip,
  Alert,
  Collapse,
  Snackbar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  Send as SendIcon,
  CalendarMonth as CalendarIcon,
  AccessTime as AccessTimeIcon,
  VideoCall as VideoCallIcon,
  Download as DownloadIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  ArrowForward as ArrowForwardIcon,
  Check as CheckIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../../components/Common/GlassCard';

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(6),
  paddingBottom: theme.spacing(2),
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 80,
    height: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ContactCard = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius * 2,
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
  },
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(3),
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'translateX(5px)',
  }
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  flexShrink: 0,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius * 1.5,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.light,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: '1px',
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  '& .MuiInputBase-input': {
    color: theme.palette.text.primary,
  },
}));

const StyledSelect = styled(FormControl)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius * 1.5,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.light,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: '1px',
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  '& .MuiSelect-select': {
    color: theme.palette.text.primary,
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 1.5,
  padding: theme.spacing(1.5, 4),
  fontWeight: 600,
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  transition: 'transform 0.2s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 6px 20px ${theme.palette.primary.main}50`,
  },
}));

const FinalCTABox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadius * 2.5,
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  color: theme.palette.common.white,
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  position: 'relative',
  overflow: 'hidden',
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: theme.palette.common.white,
  margin: theme.spacing(0, 0.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-3px)',
  },
}));

const MeetingOption = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    transform: 'translateY(-3px)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  },
}));

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const InvestorRelationsContact: React.FC = () => {
  const theme = useTheme();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showMeetingOptions, setShowMeetingOptions] = useState(false);
  const [selectedMeetingType, setSelectedMeetingType] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setSnackbarOpen(true);
    // In a real app, you would send the form data to your backend here
  };

  const handleMeetingSelect = (type: string) => {
    setSelectedMeetingType(type);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box 
      component="section" 
      sx={{ 
        py: 10,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="contact"
    >
      {/* Background animated elements */}
      <Box
        component={motion.div}
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}30 0%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(40px)',
          zIndex: 0
        }}
      />
      
      <Box
        component={motion.div}
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1
        }}
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main}30 0%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(40px)',
          zIndex: 0
        }}
      />
      
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <SectionTitle variant="h3">
            Contact Investor Relations
          </SectionTitle>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4, 
              fontWeight: 500,
              maxWidth: 900,
              lineHeight: 1.5
            }}
          >
            Interested in learning more about investing in HireGenix?
          </Typography>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Box 
            sx={{ 
              p: 4, 
              mb: 6, 
              borderRadius: 3,
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated background gradient */}
            <Box
              component={motion.div}
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.05,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}40 0%, ${theme.palette.secondary.main}40 100%)`,
                backgroundSize: '400% 400%',
                zIndex: 0
              }}
            />
            
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={8}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      component={motion.div}
                      animate={{ 
                        rotate: [0, 5, 0, -5, 0],
                        scale: [1, 1.05, 1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'loop'
                      }}
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 8px 20px ${theme.palette.primary.main}50`,
                        flexShrink: 0
                      }}
                    >
                      <EmailIcon sx={{ color: 'white', fontSize: 30 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        Investment Opportunity
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        We're seeking a <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>$500,000 investment for a 5% stake</Box> in our company. Our team is available to discuss this opportunity in detail and answer any questions you may have.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, mt: { xs: 2, md: 0 } }}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outlined" 
                        color="primary"
                        size="large"
                        startIcon={<DownloadIcon />}
                        sx={{ 
                          borderRadius: 2, 
                          borderWidth: 2,
                          px: 3,
                          py: 1,
                          fontWeight: 600,
                          '&:hover': {
                            borderWidth: 2
                          }
                        }}
                      >
                        Download Executive Summary
                      </Button>
                    </motion.div>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </motion.div>
        
        <Grid container spacing={5}>
          <Grid item xs={12} md={5}>
            <ContactCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Animated glow effect */}
              <Box
                component={motion.div}
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                sx={{
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${theme.palette.primary.main}30 0%, rgba(0,0,0,0) 70%)`,
                  filter: 'blur(20px)',
                  zIndex: 0
                }}
              />
              
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography variant="h6" sx={{ mb: 4, fontWeight: 600 }}>
                  Investor Relations Contact
                </Typography>
                
                <ContactInfoItem>
                  <IconBox>
                    <EmailIcon sx={{ color: 'white' }} />
                  </IconBox>
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>Email</Typography>
                    <Link href="mailto:investors@myhiregenix.com" underline="hover" sx={{ color: 'primary.light', '&:hover': { color: 'primary.main' } }}>
                      investors@myhiregenix.com
                    </Link>
                  </Box>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <IconBox>
                    <PhoneIcon sx={{ color: 'white' }} />
                  </IconBox>
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>Phone</Typography>
                    <Typography>
                      +1 (971) 512-1701 (US)
                    </Typography>
                    <Typography>
                      +91-8954333390 (India)
                    </Typography>
                  </Box>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <IconBox>
                    <LocationOnIcon sx={{ color: 'white' }} />
                  </IconBox>
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>Headquarters</Typography>
                    <Typography>
                      Laramie, Wyoming, USA
                    </Typography>
                  </Box>
                </ContactInfoItem>
                
                <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                  Schedule a Meeting
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<CalendarIcon />}
                    fullWidth
                    onClick={() => setShowMeetingOptions(!showMeetingOptions)}
                    sx={{ 
                      borderRadius: 2,
                      mb: 2,
                      justifyContent: 'flex-start',
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)'
                      }
                    }}
                  >
                    Select Meeting Type
                  </Button>
                  
                  <AnimatePresence>
                    {showMeetingOptions && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <MeetingOption 
                          onClick={() => handleMeetingSelect('video')}
                          sx={{ 
                            borderColor: selectedMeetingType === 'video' ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.1)',
                            backgroundColor: selectedMeetingType === 'video' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.03)'
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <VideoCallIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                            <Box>
                              <Typography variant="body2" fontWeight={600}>Video Conference</Typography>
                              <Typography variant="caption" color="text.secondary">30-minute presentation with Q&A</Typography>
                            </Box>
                            {selectedMeetingType === 'video' && (
                              <CheckIcon sx={{ ml: 'auto', color: theme.palette.primary.main }} />
                            )}
                          </Box>
                        </MeetingOption>
                        
                        <MeetingOption 
                          onClick={() => handleMeetingSelect('call')}
                          sx={{ 
                            borderColor: selectedMeetingType === 'call' ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.1)',
                            backgroundColor: selectedMeetingType === 'call' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.03)'
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <PhoneIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                            <Box>
                              <Typography variant="body2" fontWeight={600}>Phone Call</Typography>
                              <Typography variant="caption" color="text.secondary">15-minute introduction call</Typography>
                            </Box>
                            {selectedMeetingType === 'call' && (
                              <CheckIcon sx={{ ml: 'auto', color: theme.palette.primary.main }} />
                            )}
                          </Box>
                        </MeetingOption>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    Connect with us:
                  </Typography>
                  <SocialIconButton size="small">
                    <LinkedInIcon fontSize="small" />
                  </SocialIconButton>
                  <SocialIconButton size="small">
                    <TwitterIcon fontSize="small" />
                  </SocialIconButton>
                </Box>
              </Box>
            </ContactCard>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <ContactCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Animated glow effect */}
              <Box
                component={motion.div}
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: 0.5
                }}
                sx={{
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 150,
                  height: 150,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${theme.palette.secondary.main}30 0%, rgba(0,0,0,0) 70%)`,
                  filter: 'blur(20px)',
                  zIndex: 0
                }}
              />
              
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                        Send an Inquiry
                      </Typography>
                      
                      <Box component="form" noValidate autoComplete="off" onSubmit={handleFormSubmit}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <StyledTextField
                              fullWidth
                              label="Full Name"
                              variant="outlined"
                              margin="normal"
                              required
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <StyledTextField
                              fullWidth
                              label="Email Address"
                              variant="outlined"
                              margin="normal"
                              required
                              type="email"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <StyledTextField
                              fullWidth
                              label="Company / Fund"
                              variant="outlined"
                              margin="normal"
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <StyledSelect fullWidth margin="normal">
                              <InputLabel>Investment Range</InputLabel>
                              <Select
                                label="Investment Range"
                                defaultValue=""
                              >
                                <MenuItem value="">Select Range</MenuItem>
                                <MenuItem value="50k-100k">$50K - $100K</MenuItem>
                                <MenuItem value="100k-250k">$100K - $250K</MenuItem>
                                <MenuItem value="250k-500k">$250K - $500K</MenuItem>
                                <MenuItem value="500k+">$500K+</MenuItem>
                              </Select>
                            </StyledSelect>
                          </Grid>
                          <Grid item xs={12}>
                            <StyledTextField
                              fullWidth
                              label="Message"
                              variant="outlined"
                              margin="normal"
                              required
                              multiline
                              rows={4}
                              placeholder="Please tell us about your interest in investing with HireGenix..."
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox 
                                  sx={{ 
                                    color: 'rgba(255, 255, 255, 0.3)',
                                    '&.Mui-checked': {
                                      color: theme.palette.primary.main,
                                    },
                                  }} 
                                />
                              }
                              label={
                                <Typography variant="body2" color="text.secondary">
                                  I'd like to receive the investor newsletter with updates on company progress
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <SubmitButton 
                                type="submit"
                                variant="contained" 
                                endIcon={<SendIcon />}
                              >
                                Submit Inquiry
                              </SubmitButton>
                            </motion.div>
                          </Grid>
                        </Grid>
                      </Box>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Box sx={{ textAlign: 'center', py: 4 }}>
                        <Box
                          component={motion.div}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            type: "spring",
                            stiffness: 260,
                            damping: 20 
                          }}
                          sx={{ 
                            width: 80,
                            height: 80,
                            borderRadius: '50%',
                            bgcolor: 'rgba(76, 175, 80, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 3
                          }}
                        >
                          <CheckIcon sx={{ fontSize: 40, color: theme.palette.success.main }} />
                        </Box>
                        
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                          Thank You!
                        </Typography>
                        <Typography variant="body1" paragraph>
                          Your inquiry has been submitted successfully. Our investor relations team will contact you within 24 hours.
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          In the meantime, you can download our executive summary for more details about our investment opportunity.
                        </Typography>
                        
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<DownloadIcon />}
                          sx={{ 
                            mt: 2,
                            borderRadius: 2,
                            borderWidth: 2,
                            '&:hover': {
                              borderWidth: 2
                            }
                          }}
                        >
                          Download Executive Summary
                        </Button>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </ContactCard>
          </Grid>
        </Grid>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <FinalCTABox>
            {/* Animated background gradient */}
            <Box
              component={motion.div}
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.1,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}40 0%, ${theme.palette.primary.dark}40 100%)`,
                backgroundSize: '200% 200%',
                zIndex: 0
              }}
            />
            
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h4" gutterBottom fontWeight={700}>
                Join Us in Revolutionizing Recruitment
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
                HireGenix is making hiring faster, smarter, and fairer. Together, we can capture this market opportunity and create the next HR tech success story. We welcome your collaboration in disrupting the recruitment industry.
              </Typography>
              
              <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
                <Grid item>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      size="large"
                      startIcon={<DownloadIcon />}
                      sx={{ 
                        borderRadius: 2, 
                        px: 4, 
                        py: 1.5, 
                        fontWeight: 600,
                        background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                        boxShadow: `0 6px 20px ${theme.palette.secondary.main}50`,
                      }}
                    >
                      Request Investment Deck
                    </Button>
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outlined" 
                      color="inherit"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ 
                        borderRadius: 2, 
                        px: 4, 
                        py: 1.5, 
                        fontWeight: 600,
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        borderWidth: 2,
                        color: 'white',
                        '&:hover': {
                          borderColor: 'white',
                          borderWidth: 2,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                      }}
                      onClick={() => setShowMeetingOptions(true)}
                    >
                      Schedule a Meeting
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          </FinalCTABox>
        </motion.div>
      </Box>
      
      {/* Success notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity="success" 
          variant="filled"
          sx={{ width: '100%' }}
        >
          Your inquiry has been submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default InvestorRelationsContact;

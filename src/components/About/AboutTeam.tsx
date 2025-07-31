'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  alpha,
  Chip,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import {
  LocationOn as LocationOnIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Team data
const teamMembers = [
  {
    name: 'Suumit Sharmaa',
    role: 'Founder',
    bio: 'Suumit brings 9+ years of experience in Team Leadership and Marketing Management. Having worked across multiple companies and industries, he has developed a 360-degree knowledge of the latest trends and technologies, particularly how AI can streamline work processes. He founded HireGenix with the vision to revolutionize recruitment through innovative technology solutions.',
    location: 'Noida, India',
    skills: ['Leadership', 'Marketing Management', 'HR Tech', 'AI Innovation'],
    social: {
      linkedin: 'https://www.linkedin.com/in/sumitshrm12/',
    },
    achievements: [
      'MBA in Marketing & HR',
      'Pioneered AI-driven recruitment solutions',
      'Cross-industry expertise in talent acquisition'
    ]
  },
  {
    name: 'Rahul Gill',
    role: 'Co-Founder',
    bio: 'Rahul brings extensive experience in Business Development and Team Leading to HireGenix as Co-Founder. With his international business background and knowledge of the latest AI trends, he has been instrumental in shaping the company\'s strategic direction and market approach. His global perspective and business acumen have been key to HireGenix\'s growth and success.',
    location: 'Manitoba, Canada',
    skills: ['Business Development', 'Team Leadership', 'International Business', 'AI Trends'],
    social: {
      linkedin: 'https://www.linkedin.com/in/rgill4197/',
    },
    achievements: [
      'Diploma in International Business Management from Red River College, Manitoba',
      'Spearheaded HireGenix\'s international market expansion',
      'Developed strategic partnerships with global enterprises'
    ]
  },
  {
    name: 'Sangeeta Sharma',
    role: 'Managing Director',
    bio: 'Sangeeta brings her expertise as a professional Social Worker and financial strategist to HireGenix. With a Masters in Sociology, she combines her understanding of human behavior with strong financial acumen to guide the company\'s growth. As a prime investor and financial manager, she ensures the company maintains a solid foundation while pursuing innovative solutions in the recruitment space.',
    location: 'Saharanpur, India',
    skills: ['Financial Management', 'Social Work', 'Investment Strategy', 'Organizational Leadership'],
    social: {},
    achievements: [
      'Masters in Sociology',
      'Prime investor in HireGenix',
      'Established financial framework for sustainable growth'
    ]
  },
  {
    name: 'Mahesh Chand',
    role: 'Technology Advisor',
    bio: 'Mahesh brings over 15 years of telecommunications and technology expertise to HireGenix. Currently working as a Wireless System Designer at Rogers Communications, he has extensive experience with 5G, IoT devices, smartphones, and cellular communications. His deep technical knowledge across multiple industries enables him to provide strategic guidance on emerging technologies and their applications in recruitment solutions.',
    location: 'Brampton, Ontario, Canada',
    skills: ['5G Technology', 'IoT Devices', 'Telecommunications', 'Product Development'],
    social: {
      linkedin: 'https://www.linkedin.com/in/maheshchand/',
    },
    achievements: [
      'MBA in Marketing from Guru Jambheshwar University',
      'Certified 5G enabled devices for major telecom carriers',
      'Launched 200+ devices across 50+ telecom operators globally'
    ]
  },
];

const AboutTeam: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="overline"
              component="p"
              sx={{ 
                mb: 1, 
                fontWeight: 600, 
                letterSpacing: 1.5,
                color: theme.palette.primary.main
              }}
            >
              OUR EXPERTS
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2rem', md: '2.75rem' }
              }}
            >
              Meet Our Leadership Team
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="h5"
              component="p"
              color="text.secondary"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 400
              }}
            >
              The brilliant minds behind our innovative recruitment platform
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid 
              item 
              xs={12} 
              md={6} 
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                component={motion.div}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3 }
                }}
                sx={{ 
                  height: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                }}
              >
                <Grid container>
                  <Grid item xs={12}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <LocationOnIcon sx={{ fontSize: '0.9rem', color: 'text.secondary', mr: 0.5 }} />
                        <Typography variant="caption" color="text.secondary">
                          {member.location}
                        </Typography>
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle1" color="primary" sx={{ mb: 2, fontWeight: 600 }}>
                        {member.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {member.bio}
                      </Typography>
                      
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                        Key Achievements:
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        {member.achievements.map((achievement, idx) => (
                          <Typography 
                            key={idx} 
                            variant="body2" 
                            color="text.secondary" 
                            sx={{ 
                              display: 'flex', 
                              alignItems: 'center',
                              mb: 0.5,
                              '&:before': {
                                content: '""',
                                display: 'inline-block',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: theme.palette.primary.main,
                                mr: 1
                              }
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {member.skills.map((skill, idx) => (
                          <Chip 
                            key={idx} 
                            label={skill} 
                            size="small" 
                            sx={{ 
                              background: alpha(theme.palette.primary.main, 0.1),
                              color: theme.palette.primary.main,
                              fontWeight: 500,
                            }} 
                          />
                        ))}
                      </Box>
                      <Divider sx={{ mb: 2 }} />
                      {member.social.linkedin && (
                        <Stack direction="row" spacing={1}>
                          <IconButton 
                            size="small"
                            component="a" 
                            href={member.social.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            sx={{ 
                              color: '#0077B5',
                              '&:hover': {
                                backgroundColor: alpha('#0077B5', 0.1),
                              }
                            }}
                          >
                            <LinkedInIcon />
                          </IconButton>
                        </Stack>
                      )}
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutTeam;

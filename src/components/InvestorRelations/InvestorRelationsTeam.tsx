"use client";

import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  useTheme, 
  Avatar,
  Chip,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  LinkedIn as LinkedInIcon,
  Email as EmailIcon
} from '@mui/icons-material';

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

const TeamMemberCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  borderRadius: theme.shape.borderRadius * 2,
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
  },
  '&:hover .team-member-social': {
    opacity: 1,
    transform: 'translateY(0)',
  }
}));

const TeamMemberAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  border: `4px solid ${theme.palette.primary.main}`,
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
  margin: '0 auto 20px',
}));

const TeamMemberSocial = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2),
  background: `linear-gradient(0deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.paper}99 70%, ${theme.palette.background.paper}00 100%)`,
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'all 0.3s ease',
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.primary.main,
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    background: theme.palette.primary.dark,
    transform: 'scale(1.1)',
  }
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  }
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

const InvestorRelationsTeam: React.FC = () => {
  const theme = useTheme();

  // Team members data
  const teamMembers = [
    {
      name: "Suumit Sharmaa",
      role: "Founder & CEO",
      avatar: "/team/sarah-johnson.jpg", // Using placeholder image
      bio: "9+ years in team leadership and marketing management. Suumit spearheaded HR technology projects in prior roles and founded HireGenix to revolutionize recruitment through AI.",
      education: "MBA in Marketing & HR",
      experience: "Led cross-industry hiring initiatives",
      skills: ["Leadership", "Product Vision", "HR Tech", "AI Strategy"]
    },
    {
      name: "Rahul Gill",
      role: "Co-Founder & COO",
      avatar: "/team/michael-chen.jpg", // Using placeholder image
      bio: "Extensive background in business development and international team leadership. Rahul guides HireGenix's strategic direction and go-to-market approach.",
      education: "Diploma in International Business Management",
      experience: "Global partnerships and business development",
      skills: ["Operations", "Business Strategy", "Global Markets", "Partnerships"]
    },
    {
      name: "Sangeeta Sharma",
      role: "Managing Director (Finance & Strategy)",
      avatar: "/team/jessica-williams.jpg", // Using placeholder image
      bio: "Sangeeta brings financial oversight and operations expertise. She ensures we maintain a solid foundation and inclusive mission.",
      education: "Masters in Sociology",
      experience: "Social worker and investor",
      skills: ["Finance", "Strategy", "Investment", "Operations"]
    },
    {
      name: "Mahesh Chand",
      role: "Technology Advisor",
      avatar: "/team/david-rodriguez.jpg", // Using placeholder image
      bio: "15+ years in telecommunications and emerging tech. Mahesh advises HireGenix on technology strategy and scalable systems architecture.",
      education: "MS in Computer Science",
      experience: "Wireless Systems Designer at major telecom",
      skills: ["AI", "IoT", "Product Development", "Scalable Systems"]
    }
  ];

  // Team stats
  const teamStats = [
    { label: "Team Members", value: "50+" },
    { label: "PhDs in AI", value: "5" },
    { label: "Global Offices", value: "4" },
    { label: "Years Combined Experience", value: "75+" }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: 10,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
        borderRadius: 4
      }}
      id="team"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <SectionTitle variant="h3">
          Our Team
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
          Our leadership team blends HR industry experience, AI technology expertise, and business acumen.
        </Typography>
      </motion.div>
      
      {/* Team Stats */}
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={3}>
          {teamStats.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 2,
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <Typography 
                    variant="h3" 
                    fontWeight={700} 
                    color="primary" 
                    gutterBottom
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Leadership Team */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Leadership Team
        </Typography>
        
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard elevation={0}>
                  <TeamMemberAvatar src={member.avatar} alt={member.name} />
                  <Typography variant="h6" fontWeight={700} textAlign="center" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    color="primary" 
                    textAlign="center" 
                    gutterBottom
                    sx={{ mb: 2 }}
                  >
                    {member.role}
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Typography variant="body2" paragraph>
                    {member.bio}
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary">
                      Education:
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {member.education}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="caption" color="text.secondary">
                      Experience:
                    </Typography>
                    <Typography variant="body2" fontWeight={500}>
                      {member.experience}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 6 }}>
                    {member.skills.map((skill, skillIndex) => (
                      <SkillChip 
                        key={skillIndex} 
                        label={skill} 
                        size="small" 
                      />
                    ))}
                  </Box>
                  
                  <TeamMemberSocial className="team-member-social">
                    <SocialIcon>
                      <LinkedInIcon />
                    </SocialIcon>
                    <SocialIcon>
                      <EmailIcon />
                    </SocialIcon>
                  </TeamMemberSocial>
                </TeamMemberCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Team Culture */}
      <Box>
        <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
          Our Team Culture
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Paper 
                sx={{ 
                  p: 4, 
                  borderRadius: 3,
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%'
                }}
                elevation={0}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Global & Distributed
                </Typography>
                <Typography variant="body1" paragraph>
                  Our team spans across offices in Laramie, WY (USA) and Noida, India, enabling 24/7 progress and support. This global presence allows us to understand diverse hiring needs and build a truly international product.
                </Typography>
                <Typography variant="body1">
                  The distributed nature of our team reflects our product's aim to support global, remote-friendly hiring practices. We live the values we build into our platform.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Paper 
                sx={{ 
                  p: 4, 
                  borderRadius: 3,
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%'
                }}
                elevation={0}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Innovation & Execution
                </Typography>
                <Typography variant="body1" paragraph>
                  Our culture of innovation (e.g., weekly hack sessions to iterate on AI models) ensures we stay ahead of competitors. We've proven we can deliver (product built and launched quickly) and adapt to market needs.
                </Typography>
                <Typography variant="body1">
                  The team includes machine learning engineers with PhDs in AI, full-stack developers, UX/UI designers specialized in HR interfaces, and experienced HR consultants helping model the recruitment workflows.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InvestorRelationsTeam;

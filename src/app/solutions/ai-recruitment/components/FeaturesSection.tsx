import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Chip,
  useTheme,
  alpha
} from '@mui/material';
import { CheckCircle as CheckCircleIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { features, fadeInUpVariant } from './constants';

const FeaturesSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: alpha(theme.palette.primary.main, 0.03)
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="KEY FEATURES"
            color="primary"
            size="small"
            sx={{
              mb: 2,
              fontWeight: 600,
              background: alpha(theme.palette.primary.main, 0.1),
              border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
              color: theme.palette.primary.main
            }}
          />
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.75rem' }
            }}
          >
            Advanced AI Matching Technology
          </Typography>
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
            Our AI goes beyond simple keyword matching to understand the true meaning behind skills and experience
          </Typography>
        </Box>

        {features.map((feature, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            sx={{ mb: 6 }}
          >
            <Grid
              container
              spacing={4}
              alignItems="center"
              direction={index % 2 === 0 ? 'row' : 'row-reverse'}
            >
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    mb: 3
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                      mr: 2,
                      flexShrink: 0
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Box>
                    <Typography variant="h4" component="h3" fontWeight={600} gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
                <List>
                  {feature.details.map((detail, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckCircleIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={detail} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 4,
                    overflow: 'hidden',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    height: 300,
                    position: 'relative',
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.1)} 0%, ${alpha(theme.palette.primary.main, 0.2)} 100%)`,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {index === 0 && (
                    // Semantic Skills Matching Visualization
                    <Box sx={{ height: '100%', position: 'relative' }}>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                        Semantic Skills Analysis
                      </Typography>
                      
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          height: 'calc(100% - 60px)',
                        }}
                      >
                        {/* Skills Web Visualization */}
                        <Box
                          sx={{
                            position: 'relative',
                            height: '100%',
                            width: '100%',
                          }}
                        >
                          {/* Central Skill */}
                          <Box
                            component={motion.div}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: 90,
                              height: 90,
                              borderRadius: '50%',
                              background: alpha(theme.palette.primary.main, 0.2),
                              border: `2px solid ${alpha(theme.palette.primary.main, 0.5)}`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              zIndex: 2,
                            }}
                          >
                            <Typography variant="subtitle2" align="center" fontWeight={600} color={theme.palette.primary.main}>
                              Machine<br/>Learning
                            </Typography>
                          </Box>
                          
                          {/* Related Skills */}
                          {[
                            { name: 'Python', top: '20%', left: '25%', delay: 0.2 },
                            { name: 'Data Science', top: '15%', left: '70%', delay: 0.3 },
                            { name: 'Neural Networks', top: '70%', left: '20%', delay: 0.4 },
                            { name: 'TensorFlow', top: '75%', left: '75%', delay: 0.5 },
                            { name: 'AI', top: '40%', left: '85%', delay: 0.6 },
                            { name: 'Statistics', top: '60%', left: '50%', delay: 0.7 },
                          ].map((skill, idx) => (
                            <React.Fragment key={idx}>
                              <Box
                                component={motion.div}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: skill.delay }}
                                sx={{
                                  position: 'absolute',
                                  top: skill.top,
                                  left: skill.left,
                                  transform: 'translate(-50%, -50%)',
                                  padding: '6px 12px',
                                  borderRadius: 20,
                                  background: alpha(theme.palette.primary.main, 0.1),
                                  border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                                  zIndex: 2,
                                }}
                              >
                                <Typography variant="caption" fontWeight={600} color={theme.palette.primary.main}>
                                  {skill.name}
                                </Typography>
                              </Box>
                              
                              {/* Connection Line */}
                              <Box
                                component={motion.div}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                transition={{ delay: skill.delay + 0.1 }}
                                sx={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  zIndex: 1,
                                  pointerEvents: 'none',
                                }}
                              >
                                <svg width="100%" height="100%" style={{ position: 'absolute' }}>
                                  <line
                                    x1="50%"
                                    y1="50%"
                                    x2={skill.left}
                                    y2={skill.top}
                                    stroke={alpha(theme.palette.primary.main, 0.3)}
                                    strokeWidth="1"
                                    strokeDasharray="3,3"
                                  />
                                </svg>
                              </Box>
                            </React.Fragment>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  )}
                  
                  {index === 1 && (
                    // Career Trajectory Prediction
                    <Box sx={{ height: '100%', position: 'relative' }}>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                        Career Growth Prediction
                      </Typography>
                      
                      <Box
                        sx={{
                          height: 'calc(100% - 60px)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        {/* Career Path Visualization */}
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          sx={{ 
                            position: 'relative',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                          }}
                        >
                          <Box sx={{ position: 'relative', height: '70%', mb: 1 }}>
                            {/* Career Path Line */}
                            <Box
                              component={motion.div}
                              initial={{ height: 0 }}
                              animate={{ height: '100%' }}
                              transition={{ duration: 1 }}
                              sx={{
                                position: 'absolute',
                                left: '50%',
                                bottom: 0,
                                width: 3,
                                background: `linear-gradient(to top, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.main, 0.3)})`,
                                zIndex: 1,
                              }}
                            />
                            
                            {/* Career Milestones */}
                            {[
                              { label: 'Director', top: '0%', delay: 1.2 },
                              { label: 'Senior Manager', top: '25%', delay: 1.0 },
                              { label: 'Manager', top: '50%', delay: 0.8 },
                              { label: 'Senior Role', top: '75%', delay: 0.6 },
                              { label: 'Entry Level', top: '100%', delay: 0.4 },
                            ].map((milestone, idx) => (
                              <Box
                                key={idx}
                                component={motion.div}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: milestone.delay }}
                                sx={{
                                  position: 'absolute',
                                  top: milestone.top,
                                  left: '50%',
                                  transform: 'translate(-50%, -50%)',
                                  zIndex: 2,
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    background: theme.palette.primary.main,
                                    mr: 1,
                                  }}
                                />
                                <Typography variant="caption" fontWeight={600} sx={{ whiteSpace: 'nowrap' }}>
                                  {milestone.label}
                                </Typography>
                              </Box>
                            ))}
                            
                            {/* Prediction Arrow */}
                            <Box
                              component={motion.div}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.4 }}
                              sx={{
                                position: 'absolute',
                                top: '-5%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                color: theme.palette.primary.main,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                              }}
                            >
                              <TrendingUpIcon />
                              <Typography variant="caption" fontWeight={600} sx={{ mt: 0.5 }}>
                                Predicted Path
                              </Typography>
                            </Box>
                          </Box>
                          
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            sx={{ 
                              display: 'flex', 
                              justifyContent: 'center',
                              mt: 1,
                            }}
                          >
                            <Chip 
                              label="High Growth Potential" 
                              size="small" 
                              sx={{ 
                                background: alpha(theme.palette.success.main, 0.1),
                                color: theme.palette.success.main,
                                fontWeight: 600,
                                fontSize: '0.7rem'
                              }} 
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  )}
                  
                  {index === 2 && (
                    // Cultural Fit Assessment
                    <Box sx={{ height: '100%', position: 'relative' }}>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                        Cultural Fit Analysis
                      </Typography>
                      
                      <Box
                        sx={{
                          height: 'calc(100% - 60px)',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        {/* Radar Chart Visualization */}
                        <Box
                          sx={{
                            position: 'relative',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {/* Radar Background */}
                          {[1, 2, 3].map((level) => (
                            <Box
                              key={level}
                              component={motion.div}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.2 * level }}
                              sx={{
                                position: 'absolute',
                                width: `${level * 25}%`,
                                height: `${level * 25}%`,
                                borderRadius: '50%',
                                border: `1px dashed ${alpha(theme.palette.primary.main, 0.3)}`,
                              }}
                            />
                          ))}
                          
                          {/* Radar Points */}
                          {[
                            { label: 'Teamwork', angle: 0, value: 0.9 },
                            { label: 'Innovation', angle: 60, value: 0.75 },
                            { label: 'Communication', angle: 120, value: 0.85 },
                            { label: 'Adaptability', angle: 180, value: 0.8 },
                            { label: 'Leadership', angle: 240, value: 0.7 },
                            { label: 'Work Ethic', angle: 300, value: 0.95 },
                          ].map((trait, idx) => {
                            const radian = (trait.angle * Math.PI) / 180;
                            const x = Math.cos(radian) * 45 * trait.value;
                            const y = Math.sin(radian) * 45 * trait.value;
                            
                            return (
                              <React.Fragment key={idx}>
                                {/* Axis Line */}
                                <Box
                                  component={motion.div}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 0.3 }}
                                  transition={{ delay: 0.1 * idx }}
                                  sx={{
                                    position: 'absolute',
                                    width: '50%',
                                    height: 1,
                                    background: theme.palette.primary.main,
                                    transform: `rotate(${trait.angle}deg)`,
                                    transformOrigin: 'left center',
                                  }}
                                />
                                
                                {/* Trait Label */}
                                <Box
                                  component={motion.div}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.8 + 0.1 * idx }}
                                  sx={{
                                    position: 'absolute',
                                    transform: `translate(${Math.cos(radian) * 55}px, ${Math.sin(radian) * 55}px)`,
                                  }}
                                >
                                  <Typography 
                                    variant="caption" 
                                    fontWeight={600} 
                                    sx={{ 
                                      fontSize: '0.65rem',
                                      textAlign: 'center',
                                      display: 'block',
                                    }}
                                  >
                                    {trait.label}
                                  </Typography>
                                </Box>
                                
                                {/* Data Point */}
                                <Box
                                  component={motion.div}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 1.5 + 0.1 * idx }}
                                  sx={{
                                    position: 'absolute',
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    background: theme.palette.primary.main,
                                    transform: `translate(${x}px, ${y}px)`,
                                  }}
                                />
                              </React.Fragment>
                            );
                          })}
                          
                          {/* Radar Area */}
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.2 }}
                            transition={{ delay: 2 }}
                            sx={{
                              position: 'absolute',
                              width: '100%',
                              height: '100%',
                              clipPath: 'polygon(50% 5%, 35% 40%, 10% 50%, 30% 75%, 50% 90%, 70% 75%, 90% 50%, 65% 40%)',
                              background: theme.palette.primary.main,
                            }}
                          />
                        </Box>
                        
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.2 }}
                          sx={{ 
                            display: 'flex', 
                            justifyContent: 'center',
                            mt: 'auto',
                          }}
                        >
                          <Chip 
                            label="Strong Culture Match" 
                            size="small" 
                            sx={{ 
                              background: alpha(theme.palette.success.main, 0.1),
                              color: theme.palette.success.main,
                              fontWeight: 600,
                              fontSize: '0.7rem'
                            }} 
                          />
                        </Box>
                      </Box>
                    </Box>
                  )}
                  
                  {index === 3 && (
                    // Multilingual Resume Analysis
                    <Box sx={{ height: '100%', position: 'relative' }}>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                        Multilingual Analysis
                      </Typography>
                      
                      <Box
                        sx={{
                          height: 'calc(100% - 60px)',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        {/* Language Visualization */}
                        <Box
                          sx={{
                            flex: 1,
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                            alignContent: 'flex-start',
                          }}
                        >
                          {[
                            { lang: 'English', text: 'Software Engineer', delay: 0.2 },
                            { lang: 'Spanish', text: 'Ingeniero de Software', delay: 0.3 },
                            { lang: 'French', text: 'Ingénieur Logiciel', delay: 0.4 },
                            { lang: 'German', text: 'Softwareingenieur', delay: 0.5 },
                            { lang: 'Chinese', text: '软件工程师', delay: 0.6 },
                            { lang: 'Japanese', text: 'ソフトウェアエンジニア', delay: 0.7 },
                            { lang: 'Russian', text: 'Инженер-программист', delay: 0.8 },
                            { lang: 'Arabic', text: 'مهندس برمجيات', delay: 0.9 },
                            { lang: 'Hindi', text: 'सॉफ्टवेयर इंजीनियर', delay: 1.0 },
                          ].map((item, idx) => (
                            <Box
                              key={idx}
                              component={motion.div}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: item.delay }}
                              sx={{
                                p: 1,
                                borderRadius: 2,
                                background: alpha(theme.palette.primary.main, 0.1),
                                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                                width: 'calc(50% - 4px)',
                              }}
                            >
                              <Typography variant="caption" fontWeight={600} color={theme.palette.primary.main}>
                                {item.lang}
                              </Typography>
                              <Typography variant="caption" display="block" sx={{ opacity: 0.8 }}>
                                {item.text}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                        
                        {/* Normalized Skills */}
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 }}
                          sx={{ 
                            mt: 2,
                            p: 1,
                            borderRadius: 2,
                            background: alpha(theme.palette.success.main, 0.1),
                            border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
                          }}
                        >
                          <Typography variant="caption" fontWeight={600} color={theme.palette.success.main}>
                            Normalized Skills:
                          </Typography>
                          <Typography variant="caption" display="block" sx={{ opacity: 0.9 }}>
                            Software Development, Programming, System Design
                          </Typography>
                        </Box>
                        
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5 }}
                          sx={{ 
                            display: 'flex', 
                            justifyContent: 'center',
                            mt: 2,
                          }}
                        >
                          <Chip 
                            label="30+ Languages Supported" 
                            size="small" 
                            sx={{ 
                              background: alpha(theme.palette.primary.main, 0.1),
                              color: theme.palette.primary.main,
                              fontWeight: 600,
                              fontSize: '0.7rem'
                            }} 
                          />
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Paper>
              </Grid>
            </Grid>
            {index < features.length - 1 && (
              <Divider sx={{ my: 6 }} />
            )}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default FeaturesSection;

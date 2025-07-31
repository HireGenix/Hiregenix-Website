import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  useTheme,
  alpha
} from '@mui/material';
import { motion } from 'framer-motion';
import { technicalDetails } from './constants';

const TechnicalDetailsSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.background.default
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="TECHNOLOGY"
            color="secondary"
            size="small"
            sx={{
              mb: 2,
              fontWeight: 600,
              background: alpha(theme.palette.secondary.main, 0.1),
              border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
              color: theme.palette.secondary.main
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
            The Technology Behind Our AI
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
            Powered by cutting-edge artificial intelligence and machine learning
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {technicalDetails.map((detail, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: alpha(theme.palette.secondary.main, 0.1),
                    color: theme.palette.secondary.main,
                    mb: 3
                  }}
                >
                  {detail.icon}
                </Box>
                <Typography variant="h6" component="h3" fontWeight={600} gutterBottom>
                  {detail.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {detail.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechnicalDetailsSection;

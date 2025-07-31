import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme
} from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: 'url(/hero-pattern.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Box 
          sx={{ textAlign: 'center' }}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2
            }}
          >
            Ready to Transform Your Recruitment Process?
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              fontWeight: 400,
              mb: 4,
              opacity: 0.9
            }}
          >
            Schedule a demo to see how our AI-powered candidate matching can help you find the best talent
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 3, 
              flexWrap: { xs: 'wrap', sm: 'nowrap' } 
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Button
              component={Link}
              href="/demo"
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '50px',
                boxShadow: '0 4px 14px 0 rgba(245, 0, 87, 0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 20px 0 rgba(245, 0, 87, 0.6)'
                }
              }}
            >
              Try AI Recruitment Demo
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '50px',
                borderColor: 'white',
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-3px)'
                }
              }}
            >
              Contact Sales
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;

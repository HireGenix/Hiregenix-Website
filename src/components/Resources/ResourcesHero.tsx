'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
  Chip,
  TextField,
  InputAdornment,
} from '@mui/material';
import { 
  Search as SearchIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

export const ResourcesHero: React.FC<{
  onSearch?: (query: string) => void;
  searchQuery?: string;
}> = ({ onSearch, searchQuery = '' }) => {
  const theme = useTheme();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: `linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)`,
        color: 'white',
        pt: { xs: 12, md: 0 },
        pb: { xs: 10, md: 0 }
      }}
    >
      {/* Geometric pattern overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: 'url(/hero-pattern.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}
      />

      {/* Animated gradient orbs */}
      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}80 0%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(80px)',
          zIndex: 1,
          animation: 'pulse 8s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.2 },
            '50%': { transform: 'scale(1.1)', opacity: 0.3 }
          }
        }}
      />

      <Box
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: { xs: 150, md: 300 },
          height: { xs: 150, md: 300 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main}80 0%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(80px)',
          zIndex: 1,
          animation: 'pulse2 10s ease-in-out infinite',
          '@keyframes pulse2': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.15 },
            '50%': { transform: 'scale(1.15)', opacity: 0.25 }
          }
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Chip 
              label="FREE RESOURCES" 
              sx={{ 
                mb: 3, 
                py: 2,
                px: 2,
                borderRadius: '50px',
                background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                color: 'white',
                fontWeight: 700,
                fontSize: '0.75rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
              }} 
            />
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(90deg, #FFFFFF 0%, ${theme.palette.primary.light} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              Free Resources
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Typography 
              variant="h2" 
              component="p"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 400,
                mb: 4,
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Download free guides, templates, checklists, and whitepapers to improve your recruitment process
            </Typography>

            {/* Search Box */}
            <Box 
              sx={{ 
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                p: 1,
                px: 2,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                maxWidth: '600px',
                width: '100%',
              }}
            >
              <SearchIcon sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.7)' }} />
              <TextField
                variant="standard"
                placeholder="Search resources..."
                fullWidth
                value={searchQuery}
                onChange={handleSearchChange}
                InputProps={{
                  disableUnderline: true,
                  style: { color: 'white' }
                }}
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    opacity: 1,
                  },
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

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
        py: { xs: 6, md: 10 },
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
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
          zIndex: 1,
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
              color="secondary" 
              size="small"
              sx={{ 
                mb: 3, 
                fontWeight: 600,
                background: 'rgba(33, 150, 243, 0.2)',
                border: '1px solid rgba(33, 150, 243, 0.3)',
                color: 'white',
                px: 2,
                py: 2.5,
                '& .MuiChip-label': {
                  px: 1,
                }
              }} 
            />
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              fontWeight={800}
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(90deg, #ffffff 0%, #f0f0ff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                lineHeight: 1.2,
                mb: 2,
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
                opacity: 0.9,
                maxWidth: 600,
                mx: 'auto'
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

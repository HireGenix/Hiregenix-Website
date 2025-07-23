'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  alpha,
} from '@mui/material';

export const CaseStudyDetail: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
          Individual Case Study Detail
        </Typography>
        <Typography variant="body1">
          This component will be used to display detailed information about individual case studies.
          It will be implemented when creating the individual case study pages.
        </Typography>
      </Container>
    </Box>
  );
};

import React from 'react';
import { Paper, PaperProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const GlassCardWrapper = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  },
}));

const GlassCard: React.FC<PaperProps> = (props) => {
  return <GlassCardWrapper elevation={0} {...props} />;
};

export default GlassCard;

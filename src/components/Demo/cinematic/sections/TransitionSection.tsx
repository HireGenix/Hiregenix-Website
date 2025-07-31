import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface TransitionSectionProps {
  content: any;
  progress: number;
}

export const TransitionSection: React.FC<TransitionSectionProps> = ({ content, progress }) => {
  const getAnimationVariants = () => {
    switch (content.animation) {
      case 'slideUp':
        return {
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -100 }
        };
      case 'morphing':
        return {
          initial: { opacity: 0, scale: 0.5, rotateY: 180 },
          animate: { opacity: 1, scale: 1, rotateY: 0 },
          exit: { opacity: 0, scale: 1.5, rotateY: -180 }
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <motion.div
      initial={variants.initial}
      animate={variants.animate}
      exit={variants.exit}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Particle effects */}
        {content.particles && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 154, 158, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(79, 172, 254, 0.3) 0%, transparent 50%)
              `,
              animation: 'float 6s ease-in-out infinite',
            }}
          />
        )}

        {/* Title with enhanced effects */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              fontWeight: 900,
              background: content.effects?.includes('holographic') 
                ? 'linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)'
                : 'linear-gradient(45deg, #fff, #e0e0e0)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '300% 300%',
              animation: content.effects?.includes('holographic') 
                ? 'gradient-shift 3s ease infinite' 
                : 'none',
              mb: 2,
              textShadow: content.effects?.includes('lightSpeed')
                ? '0 0 20px rgba(255, 255, 255, 0.5)'
                : 'none',
            }}
          >
            {content.title}
          </Typography>
        </motion.div>

        {/* Subtitle */}
        {content.subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 300,
                fontSize: { xs: '1.5rem', md: '2rem' },
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              {content.subtitle}
            </Typography>
          </motion.div>
        )}

        {/* Animated decorative elements */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Box
            sx={{
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #667eea, transparent)',
              mt: 4,
              mx: 'auto',
            }}
          />
        </motion.div>

        {/* CSS Animations */}
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </Box>
    </motion.div>
  );
};

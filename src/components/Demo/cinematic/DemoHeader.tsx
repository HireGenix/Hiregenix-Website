import React from 'react';
import { Box, Typography, LinearProgress, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

interface DemoHeaderProps {
  currentScene: number;
  totalScenes: number;
  sceneTitle: string;
  sceneSubtitle: string;
  isPlaying: boolean;
  progress: number;
  onPlayPause: () => void;
  onRestart: () => void;
}

export const DemoHeader: React.FC<DemoHeaderProps> = ({
  currentScene,
  totalScenes,
  sceneTitle,
  sceneSubtitle,
  isPlaying,
  progress,
  onPlayPause,
  onRestart
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          p: 3,
          mb: 4,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Scene Progress */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Chip
            label={`Scene ${currentScene} of ${totalScenes}`}
            sx={{
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              color: 'white',
              fontWeight: 600,
              mr: 2
            }}
          />
          <Box sx={{ flexGrow: 1, mx: 2 }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '& .MuiLinearProgress-bar': {
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  borderRadius: 4,
                },
              }}
            />
          </Box>
          <Typography variant="body2" sx={{ color: 'white', minWidth: 40 }}>
            {Math.round(progress)}%
          </Typography>
        </Box>

        {/* Scene Title */}
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <motion.div
            key={sceneTitle}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h3"
              sx={{
                background: 'linear-gradient(45deg, #fff, #e0e0e0)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
                mb: 1,
                fontSize: { xs: '1.8rem', md: '2.5rem' }
              }}
            >
              {sceneTitle}
            </Typography>
          </motion.div>
          
          <motion.div
            key={sceneSubtitle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.2rem' }
              }}
            >
              {sceneSubtitle}
            </Typography>
          </motion.div>
        </Box>

        {/* Control Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onPlayPause}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              padding: '10px 20px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: 600,
              backdropFilter: 'blur(10px)',
            }}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            {isPlaying ? 'Pause' : 'Play'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '12px',
              padding: '10px 20px',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: 600,
              backdropFilter: 'blur(10px)',
            }}
          >
            <RestartAltIcon />
            Restart
          </motion.button>
        </Box>
      </Box>
    </motion.div>
  );
};

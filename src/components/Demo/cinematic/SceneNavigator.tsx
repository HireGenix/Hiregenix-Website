import React, { useState } from 'react';
import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { demoScenes } from './demoScenes';

interface SceneNavigatorProps {
  currentScene: number;
  onSceneSelect: (sceneId: number) => void;
  isPlaying: boolean;
}

export const SceneNavigator: React.FC<SceneNavigatorProps> = ({
  currentScene,
  onSceneSelect,
  isPlaying
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSceneClick = (sceneId: number) => {
    onSceneSelect(sceneId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Navigator Toggle Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1001,
        }}
      >
        <IconButton
          onClick={() => setIsOpen(true)}
          sx={{
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            '&:hover': {
              background: 'rgba(0, 0, 0, 0.8)',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </motion.div>

      {/* Scene Navigation Drawer */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            width: { xs: 300, sm: 400 },
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
              Scene Navigator
            </Typography>
            <IconButton onClick={() => setIsOpen(false)} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Scene List */}
          <List sx={{ p: 0 }}>
            {demoScenes.map((scene, index) => (
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ListItem disablePadding sx={{ mb: 2 }}>
                  <ListItemButton
                    onClick={() => handleSceneClick(scene.id)}
                    sx={{
                      background: currentScene === scene.id 
                        ? 'rgba(102, 126, 234, 0.2)' 
                        : 'rgba(255, 255, 255, 0.05)',
                      border: currentScene === scene.id 
                        ? '2px solid rgba(102, 126, 234, 0.5)' 
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 3,
                      p: 2,
                      '&:hover': {
                        background: currentScene === scene.id 
                          ? 'rgba(102, 126, 234, 0.3)' 
                          : 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    <Box sx={{ width: '100%' }}>
                      {/* Scene number and status */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                          Scene {scene.id}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          {currentScene === scene.id && isPlaying && (
                            <Chip
                              icon={<PlayArrowIcon sx={{ fontSize: '16px !important' }} />}
                              label="Playing"
                              size="small"
                              sx={{
                                background: '#4caf50',
                                color: 'white',
                                fontSize: '0.7rem',
                                height: 24,
                              }}
                            />
                          )}
                          {currentScene === scene.id && (
                            <Chip
                              label="Current"
                              size="small"
                              sx={{
                                background: '#667eea',
                                color: 'white',
                                fontSize: '0.7rem',
                                height: 24,
                              }}
                            />
                          )}
                        </Box>
                      </Box>

                      {/* Scene title */}
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: currentScene === scene.id ? 'white' : 'rgba(255, 255, 255, 0.9)',
                          fontWeight: 500,
                          mb: 0.5
                        }}
                      >
                        {scene.title}
                      </Typography>

                      {/* Scene subtitle */}
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '0.85rem',
                          mb: 1
                        }}
                      >
                        {scene.subtitle}
                      </Typography>

                      {/* Duration and sections info */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                          {(scene.duration / 1000).toFixed(1)}s duration
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                          {scene.sections.length} section{scene.sections.length !== 1 ? 's' : ''}
                        </Typography>
                      </Box>

                      {/* Section types preview */}
                      <Box sx={{ display: 'flex', gap: 0.5, mt: 1, flexWrap: 'wrap' }}>
                        {scene.sections.map((section, sectionIndex) => (
                          <Chip
                            key={sectionIndex}
                            label={section.type}
                            size="small"
                            sx={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              color: 'rgba(255, 255, 255, 0.8)',
                              fontSize: '0.65rem',
                              height: 20,
                              '& .MuiChip-label': {
                                px: 1,
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </ListItemButton>
                </ListItem>
              </motion.div>
            ))}
          </List>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Box
              sx={{
                mt: 3,
                p: 2,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
              }}
            >
              <Typography variant="body2" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
                Demo Overview
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)', display: 'block' }}>
                Total Scenes: {demoScenes.length}
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)', display: 'block' }}>
                Total Duration: {(demoScenes.reduce((sum, scene) => sum + scene.duration, 0) / 1000 / 60).toFixed(1)} minutes
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)', display: 'block' }}>
                Total Sections: {demoScenes.reduce((sum, scene) => sum + scene.sections.length, 0)}
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Drawer>
    </>
  );
};

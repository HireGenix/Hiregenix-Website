import React from 'react';
import { Box, Typography, Card, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { TypewriterText } from '../utils/TypewriterText';

interface DashboardSectionProps {
  content: any;
  progress: number;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({ content, progress }) => (
  <Card
    sx={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '20px',
      p: 4,
      maxWidth: 800,
      mx: 'auto',
    }}
  >
    <Typography variant="h4" sx={{ color: 'white', mb: 3, textAlign: 'center' }}>
      {content.formFields ? 'Job Creation Dashboard' : 'Skills Assessment Platform'}
    </Typography>
    
    {/* Form Fields for Job Creation */}
    {content.formFields && (
      <Grid container spacing={3}>
        {content.formFields.map((field: any, index: number) => (
          <Grid item xs={12} md={6} key={field.label}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              <Paper
                sx={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  p: 2,
                  borderRadius: 2,
                }}
              >
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
                  {field.label}
                </Typography>
                <Typography variant="h6" sx={{ color: 'white' }}>
                  {field.type === 'typewriter' ? (
                    <TypewriterText text={field.value} speed={50} />
                  ) : (
                    field.value
                  )}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    )}

    {/* Code Editor for Assessment */}
    {content.codeEditor && (
      <Box sx={{ mt: 3 }}>
        <Paper
          sx={{
            background: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 2,
            p: 3,
          }}
        >
          <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
            {content.codeEditor.challenge}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Chip label={`Language: ${content.codeEditor.language}`} size="small" sx={{ color: 'white' }} />
            <Chip label={`Difficulty: ${content.codeEditor.difficulty}`} size="small" sx={{ color: 'white' }} />
            <Chip label={`Time: ${content.codeEditor.timeLimit}`} size="small" sx={{ color: 'white' }} />
          </Box>
          <Box
            sx={{
              background: '#1e1e1e',
              borderRadius: 1,
              p: 2,
              fontFamily: 'monospace',
              color: '#d4d4d4',
              fontSize: '14px',
              minHeight: 200,
            }}
          >
            <TypewriterText
              text={`// React Authentication Component
import React, { useState } from 'react';

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication logic here...
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form implementation */}
    </form>
  );
};`}
              speed={30}
            />
          </Box>
        </Paper>
      </Box>
    )}

    {/* Video Interview Dashboard */}
    {content.videoInterview && (
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 2,
              p: 3,
              textAlign: 'center',
              minHeight: 300,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" sx={{ color: 'white', mb: 2 }}>
              🎥 Live Video Interview
            </Typography>
            <Typography variant="h6" sx={{ color: '#4caf50', mb: 1 }}>
              {content.videoInterview.candidate}
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2 }}>
              with {content.videoInterview.interviewer}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              Duration: {content.videoInterview.duration}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              p: 2,
              borderRadius: 2,
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
              Interview Questions
            </Typography>
            {content.videoInterview.questions.map((question: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 1 }}>
                  {index + 1}. {question}
                </Typography>
              </motion.div>
            ))}
          </Paper>
        </Grid>
      </Grid>
    )}
  </Card>
);

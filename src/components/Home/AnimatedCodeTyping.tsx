'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';

interface AnimatedCodeTypingProps {
  code: string;
  fileName?: string;
  typingSpeed?: number;
  highlightColor?: string;
}

export const AnimatedCodeTyping: React.FC<AnimatedCodeTypingProps> = ({
  code,
  fileName = 'example.tsx',
  typingSpeed = 30,
  highlightColor,
}) => {
  const theme = useTheme();
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  const primaryColor = highlightColor || theme.palette.primary.main;
  
  // Typing animation effect
  useEffect(() => {
    if (currentIndex < code.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayedCode(prev => prev + code[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else if (currentIndex >= code.length) {
      setIsTyping(false);
    }
  }, [code, currentIndex, isTyping, typingSpeed]);
  
  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Syntax highlighting (simplified)
  const highlightSyntax = (text: string) => {
    // Keywords
    let highlighted = text.replace(
      /(const|let|var|function|return|import|export|from|async|await|if|else|for|while|class|interface|type|extends|implements)/g,
      `<span style="color: #C586C0;">$1</span>`
    );
    
    // Comments
    highlighted = highlighted.replace(
      /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
      `<span style="color: #6A9955;">$1</span>`
    );
    
    // Strings
    highlighted = highlighted.replace(
      /(['"`])(.*?)\1/g,
      `<span style="color: #CE9178;">$1$2$1</span>`
    );
    
    // Types
    highlighted = highlighted.replace(
      /(\w+)(?=\s*[:<])/g,
      `<span style="color: #4EC9B0;">$1</span>`
    );
    
    // Function names
    highlighted = highlighted.replace(
      /(\w+)(?=\s*\()/g,
      `<span style="color: #DCDCAA;">$1</span>`
    );
    
    return highlighted;
  };

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        background: '#1E1E1E',
        fontFamily: 'monospace',
        width: '100%',
      }}
    >
      {/* Code editor header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 1.5,
          borderBottom: '1px solid #333',
          background: '#252526',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component={motion.div}
            animate={{ 
              backgroundColor: [
                alpha(primaryColor, 0.7),
                alpha(primaryColor, 1),
                alpha(primaryColor, 0.7),
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              mr: 1,
            }}
          />
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#E0E0E0',
              fontWeight: 500,
            }}
          >
            {fileName}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {['#FC625D', '#FDBC40', '#35C749'].map((color, i) => (
            <Box
              key={i}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: color,
              }}
            />
          ))}
        </Box>
      </Box>
      
      {/* Code content */}
      <Box
        sx={{
          p: 2,
          color: '#D4D4D4',
          fontSize: '0.9rem',
          lineHeight: 1.5,
          overflowX: 'auto',
          position: 'relative',
        }}
      >
        <Box 
          dangerouslySetInnerHTML={{ 
            __html: highlightSyntax(displayedCode) + (cursorVisible && isTyping ? '<span style="color: white;">|</span>' : '') 
          }}
          sx={{ whiteSpace: 'pre-wrap' }}
        />
      </Box>
      
      {/* Line numbers */}
      <Box
        sx={{
          position: 'absolute',
          top: 45, // Height of the header
          left: 0,
          bottom: 0,
          width: 30,
          backgroundColor: '#1E1E1E',
          borderRight: '1px solid #333',
          color: '#858585',
          fontSize: '0.8rem',
          textAlign: 'right',
          pt: 2,
          pb: 2,
          pr: 0.5,
          userSelect: 'none',
        }}
      >
        {displayedCode.split('\n').map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </Box>
    </Box>
  );
};

export default AnimatedCodeTyping;

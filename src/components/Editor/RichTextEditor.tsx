'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Box, alpha, useTheme, styled } from '@mui/material';

// Import MD Editor dynamically to avoid SSR issues
const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>
});

// Styled components
const EditorContainer = styled(Box)(({ theme }) => ({
  '.w-md-editor': {
    borderRadius: 12,
    backgroundColor: alpha(theme.palette.background.paper, 0.5),
    boxShadow: `0 0 0 1px ${alpha(theme.palette.divider, 0.7)}`,
    fontFamily: theme.typography.fontFamily,
    overflow: 'hidden',
  },
  '.w-md-editor-toolbar': {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: alpha(theme.palette.background.paper, 0.7),
    borderColor: alpha(theme.palette.divider, 0.7),
  },
  '.w-md-editor-text': {
    minHeight: '300px',
    maxHeight: '600px',
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: alpha(theme.palette.common.black, 0.05),
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: alpha(theme.palette.primary.main, 0.2),
      borderRadius: '4px',
      '&:hover': {
        background: alpha(theme.palette.primary.main, 0.3),
      },
    },
  },
  '.w-md-editor-toolbar-divider': {
    backgroundColor: alpha(theme.palette.divider, 0.7),
  },
  '.w-md-editor-toolbar > ul > li > button': {
    color: theme.palette.text.primary,
  },
  '.w-md-editor-toolbar > ul > li > button:hover': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
  '.w-md-editor-toolbar > ul > li > button.active': {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
  '.w-md-editor-text-pre > textarea': {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
  },
  '.w-md-editor-preview': {
    backgroundColor: alpha(theme.palette.background.paper, 0.3),
    color: theme.palette.text.primary,
  },
  '.wmde-markdown': {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
  },
  '.wmde-markdown h1, .wmde-markdown h2, .wmde-markdown h3, .wmde-markdown h4, .wmde-markdown h5, .wmde-markdown h6': {
    color: theme.palette.text.primary,
  },
  '.wmde-markdown a': {
    color: theme.palette.primary.main,
  },
  '.wmde-markdown-color code[class*="language-"], .wmde-markdown-color pre[class*="language-"]': {
    backgroundColor: alpha(theme.palette.background.paper, 0.7),
    color: theme.palette.text.primary,
  },
  '.wmde-markdown hr': {
    backgroundColor: alpha(theme.palette.divider, 0.7),
  },
  '.wmde-markdown blockquote': {
    borderLeftColor: alpha(theme.palette.primary.main, 0.5),
    backgroundColor: alpha(theme.palette.background.paper, 0.3),
  },
  '.wmde-markdown table': {
    borderColor: alpha(theme.palette.divider, 0.7),
  },
  '.wmde-markdown th, .wmde-markdown td': {
    borderColor: alpha(theme.palette.divider, 0.7),
  },
}));

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  minHeight?: number;
  maxHeight?: number;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = 'Write something...',
  readOnly = false,
  minHeight,
  maxHeight,
}) => {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <EditorContainer
      sx={{
        '.w-md-editor-text': {
          ...(minHeight && { minHeight: `${minHeight}px` }),
          ...(maxHeight && { maxHeight: `${maxHeight}px` }),
        },
      }}
      data-color-mode={theme.palette.mode}
    >
      <MDEditor
        value={value}
        onChange={(val) => onChange(val || '')}
        preview="edit"
        height={minHeight || 400}
        visibleDragbar={false}
        hideToolbar={readOnly}
        textareaProps={{
          placeholder: placeholder,
        }}
      />
    </EditorContainer>
  );
};

export default RichTextEditor;

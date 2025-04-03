'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  FormHelperText, 
  Snackbar, 
  Alert, 
  alpha, 
  useTheme, 
  styled, 
  Grid, 
  Paper, 
  Divider,
  Tabs,
  Tab,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { 
  Save as SaveIcon, 
  ArrowBack as ArrowBackIcon, 
  Code as CodeIcon,
  Settings as SettingsIcon,
  Preview as PreviewIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Styled components
const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    borderRadius: 12,
    backgroundColor: alpha(theme.palette.background.paper, 0.5),
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: alpha(theme.palette.primary.main, 0.5),
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    borderRadius: 12,
    backgroundColor: alpha(theme.palette.background.paper, 0.5),
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: alpha(theme.palette.primary.main, 0.5),
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const CodeEditor = styled(Box)(({ theme }) => ({
  fontFamily: 'monospace',
  fontSize: '14px',
  lineHeight: 1.5,
  padding: theme.spacing(2),
  borderRadius: 12,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  height: 500,
  overflowY: 'auto',
  '&:focus': {
    outline: 'none',
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const PreviewContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 12,
  backgroundColor: alpha(theme.palette.background.paper, 0.7),
  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  minHeight: 500,
}));

const TabPanel = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 0),
}));

// Component categories
const categories = [
  { id: 'home', label: 'Home Page' },
  { id: 'about', label: 'About Us' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'careers', label: 'Careers' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
  { id: 'blog', label: 'Blog' },
];

// Component create page
export default function CreateComponentPage() {
  const theme = useTheme();
  const router = useRouter();
  
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [filePath, setFilePath] = useState('');
  const [code, setCode] = useState('');
  const [isActive, setIsActive] = useState(true);
  
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');

  // Handle tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setSaving(true);
      
      // Validate form
      if (!name.trim()) {
        setSnackbarMessage('Component name is required');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
        setSaving(false);
        return;
      }
      
      if (!category) {
        setSnackbarMessage('Category is required');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
        setSaving(false);
        return;
      }
      
      if (!filePath.trim()) {
        setSnackbarMessage('File path is required');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
        setSaving(false);
        return;
      }
      
      // Prepare data for API
      const newComponent = {
        name,
        category,
        description: description || null,
        filePath,
        code: code || null,
        isActive,
      };
      
      // Create component via API
      const response = await fetch('/api/components', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComponent),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create component');
      }
      
      // Show success message
      setSnackbarMessage('Component created successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      
      // Redirect to components list after a short delay
      setTimeout(() => {
        router.push('/admin/components');
      }, 1500);
    } catch (error) {
      console.error('Error creating component:', error);
      setSnackbarMessage('Failed to create component. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box component={motion.div} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            component={Link}
            href="/admin/components"
            sx={{ 
              borderRadius: 2,
              borderColor: alpha(theme.palette.primary.main, 0.3),
              '&:hover': {
                borderColor: theme.palette.primary.main,
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
              }
            }}
          >
            Back
          </Button>
          <Typography variant="h4" component="h1" fontWeight={600}>
            Create Component
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<SaveIcon />}
          onClick={handleSubmit}
          disabled={saving}
          sx={{ 
            borderRadius: 2,
            px: 3,
            bgcolor: theme.palette.primary.main,
            boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.3)}`,
            '&:hover': {
              bgcolor: theme.palette.primary.dark,
            }
          }}
        >
          {saving ? 'Creating...' : 'Create Component'}
        </Button>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Component Details */}
          <Grid item xs={12} md={4}>
            <Paper 
              sx={{ 
                p: 3, 
                borderRadius: 3,
                boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
              }}
            >
              <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
                Component Details
              </Typography>
              
              <StyledTextField
                label="Component Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                helperText="Enter a descriptive name for your component"
              />
              
              <StyledFormControl fullWidth>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat.id} value={cat.id}>
                      {cat.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Select the page where this component will be used</FormHelperText>
              </StyledFormControl>
              
              <StyledTextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                helperText="Brief description of the component's purpose and usage"
              />
              
              <StyledTextField
                label="File Path"
                variant="outlined"
                fullWidth
                value={filePath}
                onChange={(e) => setFilePath(e.target.value)}
                required
                helperText="Path to the component file (e.g., src/components/Home/HeroSection.tsx)"
              />
              
              <FormControlLabel
                control={
                  <Switch 
                    checked={isActive} 
                    onChange={(e) => setIsActive(e.target.checked)}
                    color="primary"
                  />
                }
                label="Active"
                sx={{ mt: 2 }}
              />
              <FormHelperText>Enable or disable this component</FormHelperText>
            </Paper>
          </Grid>
          
          {/* Component Editor */}
          <Grid item xs={12} md={8}>
            <Paper 
              sx={{ 
                p: 3, 
                borderRadius: 3,
                boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
              }}
            >
              <Tabs 
                value={activeTab} 
                onChange={handleTabChange}
                sx={{ 
                  mb: 3,
                  '& .MuiTabs-indicator': {
                    backgroundColor: theme.palette.primary.main,
                  }
                }}
              >
                <Tab 
                  label="Code" 
                  icon={<CodeIcon />} 
                  iconPosition="start"
                  sx={{ 
                    textTransform: 'none',
                    fontWeight: 500,
                    '&.Mui-selected': {
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                    },
                  }}
                />
                <Tab 
                  label="Preview" 
                  icon={<PreviewIcon />} 
                  iconPosition="start"
                  sx={{ 
                    textTransform: 'none',
                    fontWeight: 500,
                    '&.Mui-selected': {
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                    },
                  }}
                />
                <Tab 
                  label="Settings" 
                  icon={<SettingsIcon />} 
                  iconPosition="start"
                  sx={{ 
                    textTransform: 'none',
                    fontWeight: 500,
                    '&.Mui-selected': {
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                    },
                  }}
                />
              </Tabs>
              
              {/* Code Editor Tab */}
              <TabPanel role="tabpanel" hidden={activeTab !== 0}>
                <CodeEditor 
                  contentEditable 
                  suppressContentEditableWarning
                  onBlur={(e) => setCode(e.currentTarget.textContent || '')}
                  dangerouslySetInnerHTML={{ __html: code }}
                />
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                  Enter the component code here. This should be the full React component code including imports.
                </Typography>
              </TabPanel>
              
              {/* Preview Tab */}
              <TabPanel role="tabpanel" hidden={activeTab !== 1}>
                <PreviewContainer>
                  <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
                    Component Preview
                  </Typography>
                  <Box sx={{ mt: 3, p: 3, border: `1px dashed ${alpha(theme.palette.primary.main, 0.3)}`, borderRadius: 2 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                      In a real implementation, this would render a live preview of the component.
                    </Typography>
                  </Box>
                </PreviewContainer>
              </TabPanel>
              
              {/* Settings Tab */}
              <TabPanel role="tabpanel" hidden={activeTab !== 2}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Component Settings
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Configure additional settings for this component.
                  </Typography>
                  
                  <StyledFormControl fullWidth>
                    <InputLabel id="visibility-label">Visibility</InputLabel>
                    <Select
                      labelId="visibility-label"
                      value="public"
                      label="Visibility"
                    >
                      <MenuItem value="public">Public</MenuItem>
                      <MenuItem value="admin">Admin Only</MenuItem>
                      <MenuItem value="authenticated">Authenticated Users</MenuItem>
                    </Select>
                    <FormHelperText>Control who can see this component</FormHelperText>
                  </StyledFormControl>
                  
                  <StyledTextField
                    label="Custom CSS Class"
                    variant="outlined"
                    fullWidth
                    placeholder="e.g., featured-component"
                  />
                  
                  <StyledTextField
                    label="Animation"
                    variant="outlined"
                    fullWidth
                    select
                    value="fade"
                  >
                    <MenuItem value="none">None</MenuItem>
                    <MenuItem value="fade">Fade</MenuItem>
                    <MenuItem value="slide">Slide</MenuItem>
                    <MenuItem value="zoom">Zoom</MenuItem>
                  </StyledTextField>
                </Box>
              </TabPanel>
            </Paper>
          </Grid>
        </Grid>
      </form>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={() => setSnackbarOpen(false)} 
          severity={snackbarSeverity}
          variant="filled"
          sx={{ borderRadius: 2 }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

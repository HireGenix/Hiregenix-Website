'use client';

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Paper, 
  Divider, 
  Chip,
  alpha, 
  useTheme, 
  styled, 
  Grid,
  CircularProgress,
  Tabs,
  Tab,
} from '@mui/material';
import { 
  ArrowBack as ArrowBackIcon, 
  Edit as EditIcon,
  Code as CodeIcon,
  Info as InfoIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

// Styled components
const CodeViewer = styled(Box)(({ theme }) => ({
  fontFamily: 'monospace',
  fontSize: '14px',
  lineHeight: 1.5,
  padding: theme.spacing(2),
  borderRadius: 12,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  height: 500,
  overflowY: 'auto',
  whiteSpace: 'pre-wrap',
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

// Component interface
interface Component {
  id: string;
  name: string;
  description: string | null;
  category: string;
  filePath: string;
  code: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Component preview page
export default function ComponentPreviewPage() {
  const theme = useTheme();
  const params = useParams();
  const componentId = params.id as string;
  
  const [loading, setLoading] = useState(true);
  const [component, setComponent] = useState<Component | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  
  // Fetch component data
  useEffect(() => {
    const fetchComponent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/components/${componentId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch component');
        }
        
        const data = await response.json();
        setComponent(data);
      } catch (error) {
        console.error('Error fetching component:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (componentId) {
      fetchComponent();
    }
  }, [componentId]);

  // Handle tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  
  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'home':
        return theme.palette.primary.main;
      case 'about':
        return theme.palette.secondary.main;
      case 'solutions':
        return theme.palette.info.main;
      case 'contact':
        return theme.palette.success.main;
      default:
        return theme.palette.grey[500];
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!component) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Component not found
        </Typography>
        <Button 
          variant="contained" 
          component={Link} 
          href="/admin/components"
          sx={{ mt: 2 }}
        >
          Back to Components
        </Button>
      </Box>
    );
  }

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
            Component Preview
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<EditIcon />}
          component={Link}
          href={`/admin/components/edit/${component.id}`}
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
          Edit Component
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Component Details */}
        <Grid item xs={12} md={4}>
          <Paper 
            sx={{ 
              p: 3, 
              borderRadius: 3,
              boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
              height: '100%',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Chip 
                label={component.category} 
                size="small"
                sx={{ 
                  bgcolor: alpha(getCategoryColor(component.category), 0.1),
                  color: getCategoryColor(component.category),
                  fontWeight: 600,
                  textTransform: 'capitalize',
                }}
              />
              <Chip 
                label={component.isActive ? 'Active' : 'Inactive'} 
                size="small"
                color={component.isActive ? 'success' : 'default'}
                variant="outlined"
              />
            </Box>
            
            <Typography variant="h5" fontWeight={600} gutterBottom>
              {component.name}
            </Typography>
            
            {component.description && (
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {component.description}
              </Typography>
            )}
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              File Path
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, wordBreak: 'break-all' }}>
              {component.filePath}
            </Typography>
            
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Created
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {new Date(component.createdAt).toLocaleDateString()} at {new Date(component.createdAt).toLocaleTimeString()}
            </Typography>
            
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>
              Last Updated
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(component.updatedAt).toLocaleDateString()} at {new Date(component.updatedAt).toLocaleTimeString()}
            </Typography>
          </Paper>
        </Grid>
        
        {/* Component Preview */}
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
                label="Preview" 
                icon={<VisibilityIcon />} 
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
                label="Details" 
                icon={<InfoIcon />} 
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
            
            {/* Preview Tab */}
            <TabPanel role="tabpanel" hidden={activeTab !== 0}>
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
            
            {/* Code Tab */}
            <TabPanel role="tabpanel" hidden={activeTab !== 1}>
              <CodeViewer>
                {component.code || 'No code available for this component.'}
              </CodeViewer>
            </TabPanel>
            
            {/* Details Tab */}
            <TabPanel role="tabpanel" hidden={activeTab !== 2}>
              <Box sx={{ p: 2 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      Component Information
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                        ID
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ wordBreak: 'break-all' }}>
                        {component.id}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                        Category
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'capitalize' }}>
                        {component.category}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                        Status
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {component.isActive ? 'Active' : 'Inactive'}
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      Usage Information
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                        Import Statement
                      </Typography>
                      <Box sx={{ 
                        p: 2, 
                        bgcolor: alpha(theme.palette.common.black, 0.05), 
                        borderRadius: 2,
                        fontFamily: 'monospace',
                      }}>
                        {`import { ${component.name.replace(/\s+/g, '')} } from '${component.filePath.replace(/\.tsx?$/, '')}';`}
                      </Box>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                        Usage Example
                      </Typography>
                      <Box sx={{ 
                        p: 2, 
                        bgcolor: alpha(theme.palette.common.black, 0.05), 
                        borderRadius: 2,
                        fontFamily: 'monospace',
                      }}>
                        {`<${component.name.replace(/\s+/g, '')} />`}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

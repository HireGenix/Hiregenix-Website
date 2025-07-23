'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Tabs,
  Tab,
  Divider,
  useTheme,
  alpha,
  CircularProgress,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Visibility as VisibilityIcon,
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
  FilterList as FilterListIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Component type
interface Component {
  id: string;
  name: string;
  description: string | null;
  category: string;
  filePath: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Component categories
const categories = ['all', 'home', 'about', 'solutions', 'contact'];

export default function ComponentsPage() {
  const theme = useTheme();
  
  // State
  const [components, setComponents] = useState<Component[]>([]);
  const [filteredComponents, setFilteredComponents] = useState<Component[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  
  // Fetch components
  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await fetch('/api/components');
        if (!response.ok) throw new Error('Failed to fetch components');
        
        const data = await response.json();
        setComponents(data);
        setFilteredComponents(data);
      } catch (error) {
        console.error('Error fetching components:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchComponents();
  }, []);
  
  // Filter components based on search query and active category
  useEffect(() => {
    let filtered = components;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(component => component.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(component => 
        component.name.toLowerCase().includes(query) || 
        (component.description && component.description.toLowerCase().includes(query))
      );
    }
    
    setFilteredComponents(filtered);
  }, [components, searchQuery, activeCategory]);
  
  // Handle category change
  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveCategory(newValue);
  };
  
  // Handle search
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  
  // Handle menu open
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, component: Component) => {
    setAnchorEl(event.currentTarget);
    setSelectedComponent(component);
  };
  
  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedComponent(null);
  };
  
  // Handle delete
  const handleDelete = async () => {
    if (!selectedComponent) return;
    
    if (window.confirm(`Are you sure you want to delete "${selectedComponent.name}"?`)) {
      try {
        const response = await fetch(`/api/components/${selectedComponent.id}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) throw new Error('Failed to delete component');
        
        // Remove component from state
        setComponents(components.filter(c => c.id !== selectedComponent.id));
        handleMenuClose();
      } catch (error) {
        console.error('Error deleting component:', error);
      }
    }
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
  
  return (
    <Box component={motion.div} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" component="h1" fontWeight={600}>
          Components
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          component={Link}
          href="/admin/components/create"
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
          Create Component
        </Button>
      </Box>
      
      {/* Filters and Search */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <Tabs 
              value={activeCategory} 
              onChange={handleCategoryChange}
              sx={{ 
                mb: 2,
                '& .MuiTabs-indicator': {
                  backgroundColor: theme.palette.primary.main,
                },
                '& .MuiTab-root': {
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  '&.Mui-selected': {
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                  },
                },
              }}
            >
              {categories.map((category) => (
                <Tab 
                  key={category} 
                  label={category === 'all' ? 'All Components' : `${category.charAt(0).toUpperCase() + category.slice(1)}`} 
                  value={category} 
                />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              placeholder="Search components..."
              value={searchQuery}
              onChange={handleSearch}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
                sx: { 
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.background.paper, 0.5),
                }
              }}
            />
          </Grid>
        </Grid>
      </Box>
      
      {/* Components Grid */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
          <CircularProgress />
        </Box>
      ) : filteredComponents.length === 0 ? (
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: 300,
          bgcolor: alpha(theme.palette.background.paper, 0.5),
          borderRadius: 3,
          p: 4,
        }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No components found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {searchQuery ? 'Try a different search query' : 'Create a new component to get started'}
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filteredComponents.map((component) => (
            <Grid item xs={12} md={6} lg={4} key={component.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  },
                  position: 'relative',
                }}
                component={motion.div}
                whileHover={{ y: -5 }}
              >
                <CardContent sx={{ p: 3 }}>
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
                    <IconButton 
                      size="small"
                      onClick={(e) => handleMenuOpen(e, component)}
                      sx={{ 
                        color: theme.palette.text.secondary,
                        '&:hover': {
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                        }
                      }}
                    >
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  </Box>
                  
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {component.name}
                  </Typography>
                  
                  {component.description && (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, height: 40, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {component.description}
                    </Typography>
                  )}
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                      Last updated: {new Date(component.updatedAt).toLocaleDateString()}
                    </Typography>
                    
                    <Box>
                      <IconButton 
                        size="small" 
                        component={Link}
                        href={`/admin/components/preview/${component.id}`}
                        sx={{ 
                          color: theme.palette.info.main,
                          mr: 1,
                          '&:hover': {
                            bgcolor: alpha(theme.palette.info.main, 0.1),
                          }
                        }}
                      >
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                      <IconButton 
                        size="small" 
                        component={Link}
                        href={`/admin/components/edit/${component.id}`}
                        sx={{ 
                          color: theme.palette.primary.main,
                          '&:hover': {
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                          }
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      
      {/* Component Actions Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: { 
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }
        }}
      >
        <MenuItem 
          component={Link}
          href={selectedComponent ? `/admin/components/preview/${selectedComponent.id}` : '#'}
          onClick={handleMenuClose}
        >
          <ListItemIcon>
            <VisibilityIcon fontSize="small" sx={{ color: theme.palette.info.main }} />
          </ListItemIcon>
          <ListItemText>Preview</ListItemText>
        </MenuItem>
        <MenuItem 
          component={Link}
          href={selectedComponent ? `/admin/components/edit/${selectedComponent.id}` : '#'}
          onClick={handleMenuClose}
        >
          <ListItemIcon>
            <EditIcon fontSize="small" sx={{ color: theme.palette.primary.main }} />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" sx={{ color: theme.palette.error.main }} />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}

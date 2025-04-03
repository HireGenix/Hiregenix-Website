'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
  alpha,
  CircularProgress,
  Divider,
  SelectChangeEvent,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Download as DownloadIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface Resource {
  id: string;
  title: string;
  type: string;
  image: string;
  description: string;
  downloadLink: string;
  featured?: boolean;
  category?: string;
  dateAdded?: string;
}

interface ResourcesListProps {
  resources: Resource[];
  loading?: boolean;
  searchQuery?: string;
}

export const ResourcesList: React.FC<ResourcesListProps> = ({
  resources: initialResources,
  loading = false,
  searchQuery = '',
}) => {
  const theme = useTheme();
  const [resources, setResources] = useState<Resource[]>(initialResources);
  const [filteredResources, setFilteredResources] = useState<Resource[]>(initialResources);
  const [search, setSearch] = useState(searchQuery);
  const [typeFilter, setTypeFilter] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [savedResources, setSavedResources] = useState<string[]>([]);

  // Get unique resource types and categories for filters
  const resourceTypes = Array.from(new Set(resources.map(resource => resource.type)));
  const resourceCategories = Array.from(
    new Set(resources.filter(r => r.category).map(resource => resource.category as string))
  );

  useEffect(() => {
    // Filter resources based on search query and filters
    let filtered = [...resources];

    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        resource =>
          resource.title.toLowerCase().includes(searchLower) ||
          resource.description.toLowerCase().includes(searchLower) ||
          (resource.category && resource.category.toLowerCase().includes(searchLower))
      );
    }

    if (typeFilter) {
      filtered = filtered.filter(resource => resource.type === typeFilter);
    }

    if (categoryFilter) {
      filtered = filtered.filter(resource => resource.category === categoryFilter);
    }

    setFilteredResources(filtered);
  }, [resources, search, typeFilter, categoryFilter]);

  useEffect(() => {
    // Update search when searchQuery prop changes
    setSearch(searchQuery);
  }, [searchQuery]);

  const toggleSaveResource = (id: string) => {
    setSavedResources(prev => {
      if (prev.includes(id)) {
        return prev.filter(resourceId => resourceId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleTypeFilterChange = (event: SelectChangeEvent) => {
    setTypeFilter(event.target.value);
  };

  const handleCategoryFilterChange = (event: SelectChangeEvent) => {
    setCategoryFilter(event.target.value);
  };

  const clearFilters = () => {
    setSearch('');
    setTypeFilter('');
    setCategoryFilter('');
  };

  // Get color for resource type chip
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'E-Book':
        return theme.palette.primary.main;
      case 'Template':
        return theme.palette.secondary.main;
      case 'Whitepaper':
        return theme.palette.info.main;
      case 'Checklist':
        return theme.palette.success.main;
      case 'Guide':
        return theme.palette.warning.main;
      case 'Toolkit':
        return theme.palette.error.main;
      default:
        return theme.palette.primary.main;
    }
  };

  // Format date for display
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Recently Added';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            mb: 6,
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: { xs: 3, md: 0 },
            }}
          >
            Free Resources
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              width: { xs: '100%', md: 'auto' },
            }}
          >
            <TextField
              placeholder="Search resources..."
              value={search}
              onChange={handleSearchChange}
              variant="outlined"
              size="small"
              sx={{ width: { xs: '100%', sm: 220 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <FormControl variant="outlined" size="small" sx={{ width: { xs: '100%', sm: 150 } }}>
              <InputLabel>Resource Type</InputLabel>
              <Select
                value={typeFilter}
                onChange={handleTypeFilterChange}
                label="Resource Type"
              >
                <MenuItem value="">All Types</MenuItem>
                {resourceTypes.map(type => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="outlined" size="small" sx={{ width: { xs: '100%', sm: 150 } }}>
              <InputLabel>Category</InputLabel>
              <Select
                value={categoryFilter}
                onChange={handleCategoryFilterChange}
                label="Category"
              >
                <MenuItem value="">All Categories</MenuItem>
                {resourceCategories.map(category => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Featured Resources */}
        {filteredResources.some(r => r.featured) && (
          <Box sx={{ mb: 8 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 3,
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  fontWeight: 700,
                }}
              >
                Featured Resources
              </Typography>
              <Divider sx={{ flex: 1, ml: 2 }} />
            </Box>

            <Grid container spacing={4}>
              {filteredResources
                .filter(resource => resource.featured)
                .map(resource => (
                  <Grid item xs={12} md={6} key={resource.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card
                        sx={{
                          display: 'flex',
                          flexDirection: { xs: 'column', sm: 'row' },
                          height: '100%',
                          overflow: 'hidden',
                          borderRadius: '16px',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            width: { xs: '100%', sm: 200 },
                            height: { xs: 200, sm: 'auto' },
                            objectFit: 'cover',
                          }}
                          image={resource.image}
                          alt={resource.title}
                        />
                        <CardContent
                          sx={{
                            flex: '1 0 auto',
                            display: 'flex',
                            flexDirection: 'column',
                            p: 3,
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              mb: 1,
                            }}
                          >
                            <Chip
                              label={resource.type}
                              size="small"
                              sx={{
                                fontWeight: 600,
                                background: alpha(getTypeColor(resource.type), 0.1),
                                border: `1px solid ${alpha(getTypeColor(resource.type), 0.3)}`,
                                color: getTypeColor(resource.type),
                              }}
                            />
                            <Button
                              onClick={() => toggleSaveResource(resource.id)}
                              sx={{ minWidth: 'auto', p: 0.5 }}
                            >
                              {savedResources.includes(resource.id) ? (
                                <BookmarkIcon color="primary" />
                              ) : (
                                <BookmarkBorderIcon />
                              )}
                            </Button>
                          </Box>

                          <Typography
                            variant="h5"
                            component={Link}
                            href={`/resources/${resource.id}`}
                            sx={{
                              fontWeight: 700,
                              mb: 1,
                              color: 'inherit',
                              textDecoration: 'none',
                              '&:hover': {
                                color: theme.palette.primary.main,
                              },
                            }}
                          >
                            {resource.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 2, flex: 1 }}
                          >
                            {resource.description}
                          </Typography>

                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              mt: 'auto',
                            }}
                          >
                            <Button
                              variant="contained"
                              color="primary"
                              startIcon={<DownloadIcon />}
                              component={Link}
                              href={resource.downloadLink}
                              sx={{
                                borderRadius: '50px',
                                px: 2,
                              }}
                            >
                              Download
                            </Button>
                            <Typography variant="caption" color="text.secondary">
                              {formatDate(resource.dateAdded)}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
            </Grid>
          </Box>
        )}

        {/* All Resources */}
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3,
            }}
          >
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 700,
              }}
            >
              All Resources
            </Typography>
            <Divider sx={{ flex: 1, ml: 2 }} />
          </Box>

          {loading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 8,
              }}
            >
              <CircularProgress />
            </Box>
          ) : filteredResources.length === 0 ? (
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
                px: 2,
                background: alpha(theme.palette.primary.light, 0.05),
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                No resources found
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                We couldn't find any resources matching your search criteria.
              </Typography>
              <Button variant="outlined" onClick={clearFilters}>
                Clear Filters
              </Button>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {filteredResources
                .filter(resource => !resource.featured)
                .map((resource, index) => (
                  <Grid item xs={12} sm={6} md={4} key={resource.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="180"
                          image={resource.image}
                          alt={resource.title}
                        />
                        <CardContent
                          sx={{
                            p: 3,
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              mb: 1,
                            }}
                          >
                            <Chip
                              label={resource.type}
                              size="small"
                              sx={{
                                fontWeight: 600,
                                background: alpha(getTypeColor(resource.type), 0.1),
                                border: `1px solid ${alpha(getTypeColor(resource.type), 0.3)}`,
                                color: getTypeColor(resource.type),
                              }}
                            />
                            <Button
                              onClick={() => toggleSaveResource(resource.id)}
                              sx={{ minWidth: 'auto', p: 0.5 }}
                            >
                              {savedResources.includes(resource.id) ? (
                                <BookmarkIcon color="primary" />
                              ) : (
                                <BookmarkBorderIcon />
                              )}
                            </Button>
                          </Box>

                          <Typography
                            variant="h6"
                            component={Link}
                            href={`/resources/${resource.id}`}
                            sx={{
                              fontWeight: 700,
                              mb: 1,
                              color: 'inherit',
                              textDecoration: 'none',
                              '&:hover': {
                                color: theme.palette.primary.main,
                              },
                            }}
                          >
                            {resource.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 2, flex: 1 }}
                          >
                            {resource.description}
                          </Typography>

                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              mt: 'auto',
                            }}
                          >
                            <Button
                              variant="outlined"
                              color="primary"
                              startIcon={<DownloadIcon />}
                              component={Link}
                              href={resource.downloadLink}
                              size="small"
                              sx={{
                                borderRadius: '50px',
                              }}
                            >
                              Download
                            </Button>
                            <Typography variant="caption" color="text.secondary">
                              {formatDate(resource.dateAdded)}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
            </Grid>
          )}
        </Box>
      </Container>
    </Box>
  );
};

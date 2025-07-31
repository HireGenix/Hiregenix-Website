'use client';

import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Box, 
  Chip,
  Pagination,
  CircularProgress,
  TextField,
  InputAdornment,
  alpha,
  useTheme,
  styled
} from '@mui/material';
import { 
  Search as SearchIcon,
  Category as CategoryIcon,
  CalendarMonth as CalendarIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SEOMetadata } from '@/components/SEO';
import { Layout } from '@/components/Layout';

// Styled components
const BlogCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 16,
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 12px 40px ${alpha(theme.palette.common.black, 0.1)}`,
  },
}));

const BlogCardMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%', // 16:9 aspect ratio
  position: 'relative',
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: 16,
  left: 16,
  borderRadius: 8,
  fontWeight: 500,
  fontSize: '0.75rem',
  height: 24,
  background: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  '& .MuiChip-icon': {
    fontSize: '0.875rem',
  },
}));

const SearchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: alpha(theme.palette.background.paper, 0.6),
  borderRadius: 12,
  padding: theme.spacing(0.5, 2),
  border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
  marginBottom: theme.spacing(4),
  boxShadow: `0 2px 8px ${alpha(theme.palette.common.black, 0.04)}`,
}));

const MetaItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '50vh',
}));

// Category colors
const categoryColors: Record<string, string> = {
  'Tutorials': '#4caf50',
  'AI & Technology': '#2196f3',
  'Interviews': '#9c27b0',
  'Remote Work': '#ff9800',
  'Diversity & Inclusion': '#e91e63',
};

  // Post interface
interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    name: string;
    email: string;
    image?: string;
  };
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  tags: {
    id: string;
    name: string;
    slug: string;
  }[];
  featuredImage?: string;
}

// Blog page component
export default function BlogPage() {
  const theme = useTheme();
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 9;

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/posts');
        
        if (!response.ok) {
          throw new Error(`Error fetching posts: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (data.items && Array.isArray(data.items)) {
          setPosts(data.items);
          setFilteredPosts(data.items);
          setTotalPages(Math.ceil(data.items.length / postsPerPage));
        } else {
          setPosts([]);
          setFilteredPosts([]);
          setTotalPages(1);
          console.warn('Unexpected API response format:', data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to load posts. Please try again.');
        setPosts([]);
        setFilteredPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredPosts(posts);
      setTotalPages(Math.ceil(posts.length / postsPerPage));
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = posts.filter(
        post => 
          post.title.toLowerCase().includes(query) || 
          post.excerpt.toLowerCase().includes(query) ||
          (post.category?.name && post.category.name.toLowerCase().includes(query)) ||
          post.tags.some(tag => tag.name.toLowerCase().includes(query)) ||
          (post.author?.name && post.author.name.toLowerCase().includes(query))
      );
      setFilteredPosts(filtered);
      setTotalPages(Math.ceil(filtered.length / postsPerPage));
    }
    setPage(1); // Reset to first page when search changes
  }, [searchQuery, posts]);

  // Get current posts for pagination
  const getCurrentPosts = () => {
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return filteredPosts.slice(startIndex, endIndex);
  };

  // Handle page change
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Get category color
  const getCategoryColor = (categoryName: string) => {
    return categoryColors[categoryName] || theme.palette.primary.main;
  };

  // Get placeholder image if no featured image
  const getPlaceholderImage = (index: number) => {
    const placeholders = [
      '/hero-pattern.svg',
      '/globe.svg',
      '/window.svg',
    ];
    return placeholders[index % placeholders.length];
  };

  const seoData = {
    title: "Blog | HireGenix",
    description: "Latest articles, insights and updates from HireGenix on recruitment, hiring and HR technology.",
    keywords: "HireGenix blog, recruitment insights, hiring tips, HR technology articles",
    canonicalUrl: "/blog"
  };

  return (
    <Layout>
      <SEOMetadata seoData={seoData} />
      
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            minHeight: { xs: 'auto', md: '100vh' },
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: `linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)`,
            color: 'white',
            pt: { xs: 12, md: 0 },
            pb: { xs: 10, md: 0 }
          }}
        >
          {/* Geometric pattern overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.05,
              backgroundImage: 'url(/hero-pattern.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1
            }}
          />

          {/* Animated gradient orbs */}
          <Box
            component={motion.div}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            sx={{
              position: 'absolute',
              top: '10%',
              right: '5%',
              width: { xs: 200, md: 400 },
              height: { xs: 200, md: 400 },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.primary.main}80 0%, rgba(0,0,0,0) 70%)`,
              filter: 'blur(80px)',
              zIndex: 1,
              animation: 'pulse 8s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { transform: 'scale(1)', opacity: 0.2 },
                '50%': { transform: 'scale(1.1)', opacity: 0.3 }
              }
            }}
          />

          <Box
            component={motion.div}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            sx={{
              position: 'absolute',
              bottom: '10%',
              left: '5%',
              width: { xs: 150, md: 300 },
              height: { xs: 150, md: 300 },
              borderRadius: '50%',
              background: `radial-gradient(circle, ${theme.palette.secondary.main}80 0%, rgba(0,0,0,0) 70%)`,
              filter: 'blur(80px)',
              zIndex: 1,
              animation: 'pulse2 10s ease-in-out infinite',
              '@keyframes pulse2': {
                '0%, 100%': { transform: 'scale(1)', opacity: 0.15 },
                '50%': { transform: 'scale(1.15)', opacity: 0.25 }
              }
            }}
          />
          
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Chip 
                  label="BLOG" 
                  sx={{ 
                    mb: 3, 
                    py: 2,
                    px: 2,
                    borderRadius: '50px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                  }} 
                />
                <Typography 
                  variant="h1" 
                  component="h1" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    fontWeight: 800,
                    mb: 2,
                    background: `linear-gradient(90deg, #FFFFFF 0%, ${theme.palette.primary.light} 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em'
                  }}
                >
                  Our Blog
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Typography 
                  variant="h2" 
                  component="p"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 400,
                    mb: 4,
                    color: 'rgba(255, 255, 255, 0.8)',
                    maxWidth: 600,
                    mx: 'auto',
                    lineHeight: 1.6
                  }}
                >
                  Insights, strategies, and expert advice on recruitment and HR technology
                </Typography>

                {/* Search Box */}
                <Box 
                  sx={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50px',
                    p: 1,
                    px: 2,
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    maxWidth: '600px',
                    width: '100%',
                  }}
                >
                  <SearchIcon sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.7)' }} />
                  <TextField
                    variant="standard"
                    placeholder="Search articles..."
                    fullWidth
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                      disableUnderline: true,
                      style: { color: 'white' }
                    }}
                    sx={{
                      '& .MuiInputBase-input::placeholder': {
                        color: 'rgba(255, 255, 255, 0.7)',
                        opacity: 1,
                      },
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
          </Container>
        </Box>

        {/* Blog Posts */}
        <Container 
          maxWidth="lg" 
          sx={{ 
            py: { xs: 8, md: 12 }, 
            mt: -4,
            position: 'relative',
            zIndex: 10,
          }}
        >
          {loading ? (
            <LoadingContainer>
              <CircularProgress size={60} />
            </LoadingContainer>
          ) : error ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" color="error" gutterBottom>
                {error}
              </Typography>
              <Typography variant="body1">
                Please try refreshing the page or check back later.
              </Typography>
            </Box>
          ) : filteredPosts.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h5" gutterBottom>
                No posts found
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {searchQuery ? 'Try a different search term' : 'Check back soon for new content'}
              </Typography>
            </Box>
          ) : (
            <>
              <Grid container spacing={4}>
                {getCurrentPosts().map((post, index) => (
                  <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    md={4} 
                    key={post.id}
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <BlogCard>
                      <BlogCardMedia
                        image={post.featuredImage || getPlaceholderImage(index)}
                        title={post.title}
                      >
                        {post.category && (
                          <CategoryChip 
                            icon={<CategoryIcon />} 
                            label={post.category.name} 
                            size="small"
                            sx={{ 
                              bgcolor: alpha(getCategoryColor(post.category.name), 0.1),
                              color: getCategoryColor(post.category.name),
                              border: `1px solid ${alpha(getCategoryColor(post.category.name), 0.2)}`
                            }}
                          />
                        )}
                      </BlogCardMedia>
                      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography 
                          variant="h5" 
                          component="h2" 
                          gutterBottom
                          fontWeight={600}
                          sx={{ 
                            mb: 2,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          <Link 
                            href={`/blog/${post.slug}`} 
                            style={{ 
                              textDecoration: 'none', 
                              color: 'inherit',
                              transition: 'color 0.2s ease'
                            }}
                          >
                            {post.title}
                          </Link>
                        </Typography>
                        
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          paragraph
                          sx={{ 
                            mb: 3,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {post.excerpt}
                        </Typography>
                        
                        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                          <MetaItem>
                            <CalendarIcon fontSize="small" />
                            <Typography variant="body2">
                              {formatDate(post.createdAt)}
                            </Typography>
                          </MetaItem>
                          
                          <MetaItem>
                            <PersonIcon fontSize="small" />
                            <Typography variant="body2">
                              {post.author?.name || 'Unknown'}
                            </Typography>
                          </MetaItem>
                        </Box>
                      </CardContent>
                    </BlogCard>
                  </Grid>
                ))}
              </Grid>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                  <Pagination 
                    count={totalPages} 
                    page={page} 
                    onChange={handlePageChange} 
                    color="primary"
                    size="large"
                    sx={{
                      '& .MuiPaginationItem-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Box>
              )}
            </>
          )}
        </Container>
      </Box>
    </Layout>
  );
}

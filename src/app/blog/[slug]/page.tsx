'use client';

import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Chip,
  Button,
  alpha,
  useTheme,
  styled,
  Avatar,
  Grid,
  Divider,
  Paper,
  CircularProgress
} from '@mui/material';
import { 
  Category as CategoryIcon,
  CalendarMonth as CalendarIcon,
  Person as PersonIcon,
  ArrowBack as ArrowBackIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  ThumbUp as ThumbUpIcon
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

// Styled components
const PostContainer = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: '0 auto',
  padding: theme.spacing(4),
  background: alpha(theme.palette.background.paper, 0.7),
  backdropFilter: 'blur(10px)',
  borderRadius: 16,
  boxShadow: `0 4px 30px ${alpha(theme.palette.common.black, 0.05)}`,
}));

const FeaturedImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '400px',
  borderRadius: 16,
  overflow: 'hidden',
  marginBottom: theme.spacing(4),
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  borderRadius: 8,
  fontWeight: 600,
  fontSize: '0.75rem',
  height: 28,
  background: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
  '& .MuiChip-icon': {
    fontSize: '0.875rem',
  },
}));

const MetaItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  '& p': {
    marginBottom: theme.spacing(2),
    lineHeight: 1.7,
    fontSize: '1.1rem',
  },
  '& h1': {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    fontWeight: 800,
    fontSize: '2rem',
    color: theme.palette.primary.main,
  },
  '& h2': {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    fontWeight: 700,
    fontSize: '1.75rem',
    color: theme.palette.primary.main,
  },
  '& h3': {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1.5),
    fontWeight: 600,
    fontSize: '1.5rem',
  },
  '& ul, & ol': {
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
  },
  '& li': {
    marginBottom: theme.spacing(1),
    fontSize: '1.1rem',
  },
  '& img': {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: 8,
    marginBottom: theme.spacing(2),
  },
  '& blockquote': {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    paddingLeft: theme.spacing(2),
    fontStyle: 'italic',
    margin: theme.spacing(2, 0),
    color: theme.palette.text.secondary,
    fontSize: '1.2rem',
  },
  '& code': {
    fontFamily: 'monospace',
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    padding: theme.spacing(0.5, 1),
    borderRadius: 4,
  },
  '& pre': {
    backgroundColor: alpha(theme.palette.common.black, 0.05),
    padding: theme.spacing(2),
    borderRadius: 8,
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
    '& code': {
      backgroundColor: 'transparent',
      padding: 0,
    },
  },
}));

const SocialButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(1),
  minWidth: 'unset',
  width: 40,
  height: 40,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
}));

const RelatedPostCard = styled(Paper)(({ theme }) => ({
  borderRadius: 12,
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 12px 20px ${alpha(theme.palette.common.black, 0.1)}`,
  },
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '50vh',
}));

export default function BlogPostPage() {
  const theme = useTheme();
  const params = useParams();
  const slug = params.slug as string;
  
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch post data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch all posts to find the one with matching slug
        const response = await fetch('/api/posts');
        
        if (!response.ok) {
          throw new Error(`Error fetching posts: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (data.items && Array.isArray(data.items)) {
          const currentPost = data.items.find((p: any) => p.slug === slug);
          
          if (currentPost) {
            setPost(currentPost);
            
            // Get related posts (excluding current post)
            const related = data.items
              .filter((p: any) => p.id !== currentPost.id)
              .slice(0, 2);
            
            setRelatedPosts(related);
          } else {
            setError('Post not found');
          }
        } else {
          setError('Unexpected API response format');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Failed to load post. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Calculate read time (rough estimate based on word count)
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
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

  if (loading) {
    return (
      <LoadingContainer>
        <CircularProgress size={60} />
      </LoadingContainer>
    );
  }

  if (error || !post) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h4" color="error" gutterBottom>
            {error || 'Post not found'}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            The post you're looking for could not be found.
          </Typography>
          <Button 
            component={Link}
            href="/blog"
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
          >
            Back to Blog
          </Button>
        </Box>
      </Container>
    );
  }

  const readTime = calculateReadTime(post.content);
  const seoData = {
    title: `${post.title} | HireGenix Blog`,
    description: post.excerpt,
    ogImage: post.featuredImage,
    canonicalUrl: `/blog/${post.slug}`,
    keywords: post.category?.name || 'blog, recruitment, hiring, HR technology',
  };

  return (
      
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{ 
          py: { xs: 6, md: 10 },
          background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, rgba(255,255,255,0) 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Button 
            component={Link}
            href="/blog"
            startIcon={<ArrowBackIcon />}
            sx={{ 
              mb: 4, 
              borderRadius: 8,
              color: theme.palette.text.secondary,
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
              }
            }}
          >
            Back to Blog
          </Button>
          
          <PostContainer>
            <FeaturedImage>
              <img 
                src={post.featuredImage || getPlaceholderImage(0)} 
                alt={post.title} 
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)',
                  zIndex: 1
                }}
              />
              {post.category && (
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    zIndex: 2
                  }}
                >
                  <CategoryChip 
                    icon={<CategoryIcon />} 
                    label={post.category.name} 
                    size="medium"
                    sx={{ 
                      bgcolor: alpha(theme.palette.primary.main, 0.8),
                      color: 'white',
                      border: 'none',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                    }}
                  />
                </Box>
              )}
            </FeaturedImage>
            
            {/* Post Header */}
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h3" 
                component="h1" 
                gutterBottom
                fontWeight={700}
                sx={{ 
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  background: `linear-gradient(90deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {post.title}
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar 
                    src={post.author?.image || '/avatars/avatar1.jpg'} 
                    alt={post.author?.name || 'Author'}
                    sx={{ width: 48, height: 48 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {post.author?.name || 'Unknown Author'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.author?.role || 'Contributor'}
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <SocialButton color="primary">
                    <ShareIcon fontSize="small" />
                  </SocialButton>
                  <SocialButton color="primary">
                    <BookmarkIcon fontSize="small" />
                  </SocialButton>
                  <SocialButton color="primary">
                    <ThumbUpIcon fontSize="small" />
                  </SocialButton>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
                <MetaItem>
                  <CalendarIcon fontSize="small" />
                  <Typography variant="body2">
                    {formatDate(post.createdAt)}
                  </Typography>
                </MetaItem>
                
                <MetaItem>
                  <PersonIcon fontSize="small" />
                  <Typography variant="body2">
                    {readTime}
                  </Typography>
                </MetaItem>
              </Box>
              
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontStyle: 'italic',
                  color: theme.palette.text.secondary,
                  mb: 3,
                  fontSize: '1.2rem',
                  lineHeight: 1.6
                }}
              >
                {post.excerpt}
              </Typography>
              
              <Divider sx={{ mb: 4 }} />
            </Box>
            
            {/* Post Content */}
            <ContentContainer
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <Box 
              sx={{ 
                mt: 6, 
                p: 3, 
                borderRadius: 4, 
                bgcolor: alpha(theme.palette.primary.light, 0.05),
                border: `1px solid ${alpha(theme.palette.primary.light, 0.1)}`,
                display: 'flex',
                gap: 3,
                alignItems: 'center'
              }}
            >
              <Avatar 
                src={post.author?.image || '/avatars/avatar1.jpg'} 
                alt={post.author?.name || 'Author'}
                sx={{ width: 80, height: 80 }}
              />
              <Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  About {post.author?.name || 'the Author'}
                </Typography>
                <Typography variant="body2">
                  {post.author?.bio || `${post.author?.name || 'This author'} is a contributor at HireGenix, sharing insights on recruitment technology and best practices.`}
                </Typography>
              </Box>
            </Box>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <Box sx={{ mt: 8 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Related Articles
                </Typography>
                <Grid container spacing={3} sx={{ mt: 2 }}>
                  {relatedPosts.map((relatedPost, index) => (
                    <Grid item xs={12} sm={6} key={relatedPost.id}>
                      <RelatedPostCard elevation={1}>
                        <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
                          <Box
                            component="img"
                            src={relatedPost.featuredImage || getPlaceholderImage(index)}
                            alt={relatedPost.title}
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                          {relatedPost.category && (
                            <Chip
                              label={relatedPost.category.name}
                              size="small"
                              sx={{
                                position: 'absolute',
                                top: 12,
                                left: 12,
                                fontWeight: 600,
                                background: alpha(theme.palette.primary.main, 0.9),
                                color: 'white',
                                backdropFilter: 'blur(4px)',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                              }}
                            />
                          )}
                        </Box>
                        <Box sx={{ p: 2 }}>
                          <Link href={`/blog/${relatedPost.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="h6" fontWeight={600} gutterBottom>
                              {relatedPost.title}
                            </Typography>
                          </Link>
                          <Typography variant="body2" color="text.secondary">
                            {relatedPost.excerpt}
                          </Typography>
                        </Box>
                      </RelatedPostCard>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </PostContainer>
        </Container>
      </Box>
  );
}

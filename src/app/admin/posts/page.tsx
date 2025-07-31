'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  IconButton,
  Chip,
  TextField,
  CircularProgress,
  Snackbar,
  Alert,
  alpha,
  Divider,
  useTheme,
  styled,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { 
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Article as ArticleIcon,
  Search as SearchIcon,
  MoreVert as MoreVertIcon,
  Category as CategoryIcon,
  Comment as CommentIcon,
  Share as ShareIcon,
  ContentCopy as ContentCopyIcon,
  Upload as UploadIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { WidgetCard, containerVariants, itemVariants } from '@/components/Dashboard/DashboardComponents';

// Styled components
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: 16,
  overflow: 'hidden',
  border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
  background: alpha(theme.palette.background.paper, 0.4),
  backdropFilter: 'blur(10px)',
  boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  background: alpha(theme.palette.secondary.main, 0.05),
  '& .MuiTableCell-head': {
    color: theme.palette.secondary.main,
    fontWeight: 600,
    borderBottom: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  transition: 'all 0.2s ease',
  '&:hover': {
    background: alpha(theme.palette.secondary.main, 0.03),
  },
  '&:last-child td, &:last-child th': {
    borderBottom: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
  padding: theme.spacing(1.5, 2),
}));

const SearchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: alpha(theme.palette.background.paper, 0.6),
  borderRadius: 12,
  padding: theme.spacing(0.5, 2),
  border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
  marginBottom: theme.spacing(3),
  boxShadow: `0 2px 8px ${alpha(theme.palette.common.black, 0.04)}`,
}));

const LoadingOverlay = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  borderRadius: 16,
  background: alpha(theme.palette.background.paper, 0.7),
  backdropFilter: 'blur(10px)',
}));

const EmptyState = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6),
  gap: theme.spacing(2),
  borderRadius: 16,
  background: alpha(theme.palette.background.paper, 0.4),
  backdropFilter: 'blur(10px)',
  border: `1px dashed ${alpha(theme.palette.secondary.main, 0.2)}`,
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  borderRadius: 8,
  fontWeight: 500,
  fontSize: '0.75rem',
  height: 24,
  '& .MuiChip-icon': {
    fontSize: '0.875rem',
  },
}));

// Post interface
interface Post {
  id: string;
  title: string;
  slug: string;
  status: string;
  excerpt: string;
  content?: string;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
    email: string;
  };
  category?: {
    id: string;
    name: string;
  };
  tags: {
    id: string;
    name: string;
  }[];
  comments?: number;
  views?: number;
}

// Category colors
const categoryColors: Record<string, string> = {
  'Tutorials': '#4caf50',
  'AI & Technology': '#2196f3',
  'Interviews': '#9c27b0',
  'Remote Work': '#ff9800',
  'Diversity & Inclusion': '#e91e63',
};

// Page component
export default function PostsPage() {
  const router = useRouter();
  const theme = useTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/posts?admin=true');
        
        if (!response.ok) {
          throw new Error(`Error fetching posts: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (data.items && Array.isArray(data.items)) {
          // Add default values for comments and views if not provided by API
          const formattedPosts = data.items.map((post: Post) => ({
            ...post,
            comments: post.comments || 0,
            views: post.views || 0
          }));
          
          setPosts(formattedPosts);
          setFilteredPosts(formattedPosts);
        } else {
          setPosts([]);
          setFilteredPosts([]);
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
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = posts.filter(
        post => 
          post.title.toLowerCase().includes(query) || 
          post.slug.toLowerCase().includes(query) ||
          (post.category?.name && post.category.name.toLowerCase().includes(query)) ||
          post.tags.some((tag: { id: string; name: string }) => tag.name.toLowerCase().includes(query)) ||
          (post.author?.name && post.author.name.toLowerCase().includes(query)) ||
          post.excerpt.toLowerCase().includes(query)
      );
      setFilteredPosts(filtered);
    }
  }, [searchQuery, posts]);

  // Handle post status toggle
  const handleToggleStatus = async (id: string) => {
    try {
      setIsUpdating(true);
      
      // Find the post to update
      const postToUpdate = posts.find(post => post.id === id);
      if (!postToUpdate) return;
      
      // Determine new status
      const newStatus = postToUpdate.status.toLowerCase() === 'published' ? 'DRAFT' : 'PUBLISHED';
      
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...postToUpdate,
          status: newStatus,
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Error updating post status: ${response.status} ${response.statusText}`);
      }
      
      const updatedPost = await response.json();
      
      // Update posts state
      const updatedPosts = posts.map(post => 
        post.id === id ? updatedPost : post
      );
      
      setPosts(updatedPosts);
      setFilteredPosts(updatedPosts.filter(post => 
        searchQuery.trim() === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.category?.name && post.category.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.tags.some((tag: { id: string; name: string }) => tag.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (post.author?.name && post.author.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      ));

      // Show success message
      setSnackbarMessage('Post status updated successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error updating post status:', error);
      setSnackbarMessage('Failed to update post status. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setIsUpdating(false);
    }
  };

  // Handle post deletion
  const handleDeletePost = async (id: string) => {
    try {
      setIsDeleting(true);
      
      console.log('Deleting post with ID:', id);
      
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        let errorMessage = `Error deleting post: ${response.status} ${response.statusText}`;
        try {
          const errorText = await response.text();
          console.error('Error response from delete API:', errorText);
          if (errorText) {
            try {
              const parsedError = JSON.parse(errorText);
              if (parsedError.error) {
                errorMessage = parsedError.error;
              }
            } catch (e) {
              // If we can't parse the error as JSON, use the raw text
              errorMessage = errorText;
            }
          }
        } catch (e) {
          console.error('Error reading delete error response:', e);
        }
        throw new Error(errorMessage);
      }
      
      const result = await response.json();
      console.log('Delete response:', result);
      
      // Filter out the deleted post
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
      setFilteredPosts(updatedPosts.filter(post => 
        searchQuery.trim() === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.category?.name && post.category.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.tags.some((tag: { id: string; name: string }) => tag.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (post.author?.name && post.author.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      ));

      // Show success message
      setSnackbarMessage('Post deleted successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      
      // Close menu
      handleMenuClose();
    } catch (error) {
      console.error('Error deleting post:', error);
      setSnackbarMessage(error instanceof Error ? error.message : 'Failed to delete post. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setIsDeleting(false);
    }
  };

  // Handle menu open
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, postId: string) => {
    setMenuAnchorEl(event.currentTarget);
    setSelectedPostId(postId);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setSelectedPostId(null);
  };

  // Handle file upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    console.log('File selected:', file.name, 'Type:', file.type, 'Size:', file.size);
    
    try {
      setUploading(true);
      
      // Create form data
      const formData = new FormData();
      formData.append('file', file);
      
      console.log('Sending file to API...');
      
      // First, check if the file type is supported
      const fileType = file.type;
      const isDocx = fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      const isDoc = fileType === 'application/msword';
      const isPdf = fileType === 'application/pdf';
      
      if (!isDocx && !isDoc && !isPdf) {
        throw new Error('Unsupported file type. Only .docx, .doc, and .pdf files are supported');
      }
      
      // Send file to API with explicit content type header
      const response = await fetch('/api/documents', {
        method: 'POST',
        body: formData,
      });
      
      console.log('API response status:', response.status);
      
      // Handle non-OK responses
      if (!response.ok) {
        let errorMessage = `Failed to process document: ${response.status} ${response.statusText}`;
        try {
          const errorData = await response.text();
          console.error('Error response from documents API:', errorData);
          if (errorData) {
            try {
              const parsedError = JSON.parse(errorData);
              if (parsedError.error) {
                errorMessage = parsedError.error;
              }
            } catch (e) {
              // If we can't parse the error as JSON, use the raw text
              errorMessage = errorData;
            }
          }
        } catch (e) {
          console.error('Error reading error response:', e);
        }
        throw new Error(errorMessage);
      }
      
      // Get response as text first
      const responseText = await response.text();
      console.log('API response text length:', responseText.length);
      
      // Try to parse as JSON
      let data;
      try {
        data = JSON.parse(responseText);
        console.log('Parsed data successfully');
      } catch (parseError) {
        console.error('Error parsing JSON response:', parseError);
        console.error('Response text preview:', responseText.substring(0, 200));
        throw new Error('Invalid response format from document API');
      }
      
      // Check if the response has the expected structure
      if (!data || typeof data !== 'object') {
        console.error('Unexpected response format:', data);
        throw new Error('Invalid response format from document API');
      }
      
      if (data.success) {
        console.log('Document processed successfully, creating post...');
        
        // Create a new post with the document content
        const postData = {
          title: data.title || 'Untitled Document',
          content: data.content,
          excerpt: data.excerpt || '',
          slug: data.title ? data.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-') : 'untitled-document',
          status: 'DRAFT',
          // For mock data, we don't need to provide authorId
          // The API will use a default author
          seo: {
            title: `${data.title || 'Untitled Document'} | HireGenix Blog`,
            description: data.excerpt || '',
            keywords: '',
            ogImage: '',
            noIndex: false,
          },
        };
        
        console.log('Post data prepared');
        
        try {
          // Send POST request to create post
          const postResponse = await fetch('/api/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
          });
          
          console.log('Post API response status:', postResponse.status);
          
          if (postResponse.ok) {
            // Show success message
            setSnackbarMessage('Document uploaded and post created successfully');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            
            // Refresh posts list
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          } else {
            let errorMessage = `Failed to create post: ${postResponse.status} ${postResponse.statusText}`;
            try {
              const errorText = await postResponse.text();
              console.error('Error response from posts API:', errorText);
              if (errorText) {
                try {
                  const parsedError = JSON.parse(errorText);
                  if (parsedError.error) {
                    errorMessage = parsedError.error;
                  }
                } catch (e) {
                  // If we can't parse the error as JSON, use the raw text
                  errorMessage = errorText;
                }
              }
            } catch (e) {
              console.error('Error reading post error response:', e);
            }
            throw new Error(errorMessage);
          }
        } catch (postError) {
          console.error('Error creating post:', postError);
          throw new Error(postError instanceof Error ? postError.message : 'Failed to create post from document');
        }
      } else {
        console.error('Document processing failed, data:', data);
        throw new Error(data.error || 'Document processing failed');
      }
    } catch (error) {
      console.error('Error uploading document:', error);
      setSnackbarMessage(error instanceof Error ? error.message : 'Failed to upload document');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setUploading(false);
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
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

  return (
    <Box component={motion.div} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <ArticleIcon color="secondary" fontSize="large" />
          <Box>
            <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
              Posts
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Manage your blog posts and articles
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="outlined" 
            startIcon={<UploadIcon />}
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            sx={{ 
              borderRadius: 2,
              px: 3,
              py: 1,
            }}
          >
            {uploading ? 'Uploading...' : 'Upload Document'}
          </Button>
          <Button 
            variant="contained" 
            startIcon={<AddIcon />}
            component={Link}
            href="/admin/posts/create"
            sx={{ 
              borderRadius: 2,
              px: 3,
              py: 1,
              bgcolor: theme.palette.secondary.main,
              boxShadow: `0 4px 14px ${alpha(theme.palette.secondary.main, 0.3)}`,
              '&:hover': {
                bgcolor: theme.palette.secondary.dark,
              }
            }}
          >
            New Post
          </Button>
          <input
            type="file"
            accept=".doc,.docx,.pdf"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileUpload}
          />
        </Box>
      </Box>

      <WidgetCard>
        {/* Search Box */}
        <SearchBox>
          <SearchIcon sx={{ mr: 1, color: theme.palette.text.secondary }} />
          <TextField
            variant="standard"
            placeholder="Search posts..."
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </SearchBox>

        <Divider sx={{ mb: 3 }} />

        {loading ? (
          <LoadingOverlay>
            <CircularProgress size={40} color="secondary" />
            <Typography variant="body1">Loading posts...</Typography>
          </LoadingOverlay>
        ) : filteredPosts.length === 0 ? (
          <EmptyState>
            <ArticleIcon sx={{ fontSize: 60, color: alpha(theme.palette.secondary.main, 0.3) }} />
            <Typography variant="h6" color="text.secondary" align="center">
              No posts found
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2 }}>
              {searchQuery ? 'Try a different search term or' : 'Get started by'} creating your first post
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              component={Link}
              href="/admin/posts/create"
              color="secondary"
              sx={{ borderRadius: 2 }}
            >
              Create New Post
            </Button>
          </EmptyState>
        ) : (
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <StyledTableContainer>
              <Table>
                <StyledTableHead>
                  <TableRow>
                    <StyledTableCell>Title</StyledTableCell>
                    <StyledTableCell>Category</StyledTableCell>
                    <StyledTableCell>Status</StyledTableCell>
                    <StyledTableCell>Author</StyledTableCell>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell align="center">Comments</StyledTableCell>
                    <StyledTableCell align="center">Views</StyledTableCell>
                    <StyledTableCell align="right">Actions</StyledTableCell>
                  </TableRow>
                </StyledTableHead>
                <TableBody>
                  {filteredPosts.map((post) => (
                    <StyledTableRow key={post.id}>
                      <StyledTableCell>
                        <Box>
                          <Typography variant="body1" fontWeight={500}>
                            {post.title}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                            {post.excerpt.length > 60 ? `${post.excerpt.substring(0, 60)}...` : post.excerpt}
                          </Typography>
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell>
                        {post.category ? (
                          <CategoryChip 
                            icon={<CategoryIcon />} 
                            label={post.category.name} 
                            size="small"
                            sx={{ 
                              bgcolor: alpha(categoryColors[post.category.name] || theme.palette.grey[500], 0.1),
                              color: categoryColors[post.category.name] || theme.palette.grey[700],
                              border: `1px solid ${alpha(categoryColors[post.category.name] || theme.palette.grey[500], 0.2)}`
                            }}
                          />
                        ) : (
                          <CategoryChip 
                            icon={<CategoryIcon />} 
                            label="Uncategorized" 
                            size="small"
                            sx={{ 
                              bgcolor: alpha(theme.palette.grey[500], 0.1),
                              color: theme.palette.grey[700],
                              border: `1px solid ${alpha(theme.palette.grey[500], 0.2)}`
                            }}
                          />
                        )}
                      </StyledTableCell>
                      <StyledTableCell>
                        <Chip 
                          label={post.status} 
                          color={post.status === 'published' ? 'success' : 'default'}
                          size="small"
                          sx={{ 
                            borderRadius: 1,
                            textTransform: 'capitalize',
                            fontWeight: 500,
                            background: post.status === 'published' 
                              ? alpha(theme.palette.success.main, 0.1)
                              : alpha(theme.palette.grey[500], 0.1),
                            color: post.status === 'published' 
                              ? theme.palette.success.main
                              : theme.palette.text.secondary,
                            border: `1px solid ${post.status === 'published' 
                              ? alpha(theme.palette.success.main, 0.2)
                              : alpha(theme.palette.grey[500], 0.2)}`
                          }}
                        />
                      </StyledTableCell>
                      <StyledTableCell>{post.author?.name || 'Unknown'}</StyledTableCell>
                      <StyledTableCell>{formatDate(post.createdAt)}</StyledTableCell>
                      <StyledTableCell align="center">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                          <CommentIcon fontSize="small" sx={{ color: theme.palette.text.secondary, fontSize: '1rem' }} />
                          <Typography variant="body2">{post.comments}</Typography>
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                          <VisibilityIcon fontSize="small" sx={{ color: theme.palette.text.secondary, fontSize: '1rem' }} />
                          <Typography variant="body2">{post.views}</Typography>
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <IconButton 
                          size="small" 
                          onClick={() => handleToggleStatus(post.id)}
                          title={post.status === 'published' ? 'Unpublish' : 'Publish'}
                          sx={{ 
                            color: post.status === 'published' 
                              ? theme.palette.success.main
                              : theme.palette.text.secondary,
                            '&:hover': {
                              background: alpha(
                                post.status === 'published' 
                                  ? theme.palette.success.main
                                  : theme.palette.secondary.main, 
                                0.1
                              ),
                            }
                          }}
                        >
                          {post.status === 'published' ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                        <IconButton 
                          size="small" 
                          component={Link}
                          href={`/admin/posts/edit?id=${post.id}`}
                          title="Edit"
                          sx={{ 
                            color: theme.palette.secondary.main,
                            '&:hover': {
                              background: alpha(theme.palette.secondary.main, 0.1),
                            }
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={(e) => handleMenuOpen(e, post.id)}
                          title="More options"
                          sx={{ 
                            color: theme.palette.text.secondary,
                            '&:hover': {
                              background: alpha(theme.palette.text.secondary, 0.1),
                            }
                          }}
                        >
                          <MoreVertIcon />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </StyledTableContainer>
          </motion.div>
        )}
      </WidgetCard>

      {/* Action Menu */}
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.1)}`,
            borderRadius: 2,
            minWidth: 180,
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleMenuClose} component={Link} href={`/admin/posts/${selectedPostId}`} target="_blank">
          <ListItemIcon>
            <VisibilityIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>View Post</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <ShareIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Share</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <ContentCopyIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Duplicate</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => selectedPostId && handleDeletePost(selectedPostId)} sx={{ color: theme.palette.error.main }}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" color="error" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>

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

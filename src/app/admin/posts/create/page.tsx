'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Paper, 
  Divider, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Chip,
  OutlinedInput,
  Tabs,
  Tab,
  CircularProgress,
  Snackbar,
  Alert,
  alpha,
  useTheme,
  styled,
  IconButton,
} from '@mui/material';
import { 
  Save as SaveIcon,
  Publish as PublishIcon,
  ArrowBack as ArrowBackIcon,
  Image as ImageIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Upload as UploadIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Import the RichTextEditor with dynamic loading to avoid SSR issues
const RichTextEditor = dynamic(() => import('@/components/Editor/RichTextEditor'), { 
  ssr: false,
  loading: () => <Box sx={{ p: 3, textAlign: 'center' }}><CircularProgress size={40} /></Box>
});

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 16,
  boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
  background: alpha(theme.palette.background.paper, 0.8),
  backdropFilter: 'blur(10px)',
}));

const StyledTabPanel = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 0),
}));

const ImagePreview = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 200,
  borderRadius: 8,
  overflow: 'hidden',
  marginBottom: theme.spacing(2),
  position: 'relative',
  backgroundColor: alpha(theme.palette.common.black, 0.04),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

// Interface for post data
interface PostData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  status: string;
  categoryId: string | null;
  tags: string[];
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogImage: string;
    noIndex: boolean;
  };
}

// Interface for category and tag data
interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Tag {
  id: string;
  name: string;
  slug: string;
}

// Create Post Page component
export default function CreatePostPage() {
  const router = useRouter();
  const theme = useTheme();
  
  // State for post data
  const [postData, setPostData] = useState<PostData>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    featuredImage: '',
    status: 'DRAFT',
    categoryId: null,
    tags: [],
    seo: {
      title: '',
      description: '',
      keywords: '',
      ogImage: '',
      noIndex: false,
    },
  });
  
  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // State for UI
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');
  
  // Fetch categories and tags
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch categories
        const categoriesResponse = await fetch('/api/categories');
        if (categoriesResponse.ok) {
          const categoriesData = await categoriesResponse.json();
          setCategories(categoriesData.items || []);
        }
        
        // Fetch tags
        const tagsResponse = await fetch('/api/tags');
        if (tagsResponse.ok) {
          const tagsData = await tagsResponse.json();
          setTags(tagsData.items || []);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        showSnackbar('Failed to load categories and tags', 'error');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  // Handle tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Auto-generate slug from title if slug is empty
    if (name === 'title' && !postData.slug) {
      const slug = value.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
      setPostData(prev => ({ ...prev, title: value, slug }));
    } else {
      setPostData(prev => ({ ...prev, [name]: value }));
    }
    
    // Auto-update SEO title if empty
    if (name === 'title' && !postData.seo.title) {
      setPostData(prev => ({
        ...prev,
        seo: {
          ...prev.seo,
          title: `${value} | HireGenix Blog`
        }
      }));
    }
    
    // Auto-update SEO description if empty
    if (name === 'excerpt' && !postData.seo.description) {
      setPostData(prev => ({
        ...prev,
        seo: {
          ...prev.seo,
          description: value
        }
      }));
    }
  };
  
  // Handle select change
  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setPostData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle rich text editor change
  const handleEditorChange = (content: string) => {
    setPostData(prev => ({ ...prev, content }));
    
    // Auto-generate excerpt if empty
    if (!postData.excerpt) {
      // Strip HTML tags and get first 150 characters
      const textContent = content.replace(/<[^>]*>/g, '');
      const excerpt = textContent.substring(0, 150) + (textContent.length > 150 ? '...' : '');
      setPostData(prev => ({ ...prev, excerpt }));
    }
  };
  
  // Handle SEO input change
  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPostData(prev => ({
      ...prev,
      seo: {
        ...prev.seo,
        [name]: value
      }
    }));
  };
  
  // Handle SEO checkbox change
  const handleSeoCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setPostData(prev => ({
      ...prev,
      seo: {
        ...prev.seo,
        [name]: checked
      }
    }));
  };
  
  // Handle tags change
  const handleTagsChange = (event: any) => {
    setPostData(prev => ({
      ...prev,
      tags: event.target.value as string[]
    }));
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
      
      // Send file to API
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
      
      // Update post data with parsed content
      if (data.success) {
        console.log('Document processed successfully, updating form...');
        
        setPostData(prev => ({
          ...prev,
          title: prev.title || data.title,
          content: data.content,
          excerpt: prev.excerpt || data.excerpt,
        }));
        
        // Auto-generate slug if empty
        if (!postData.slug && data.title) {
          const slug = data.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
          setPostData(prev => ({ ...prev, slug }));
        }
        
        // Auto-update SEO title if empty
        if (!postData.seo.title && data.title) {
          setPostData(prev => ({
            ...prev,
            seo: {
              ...prev.seo,
              title: `${data.title} | HireGenix Blog`
            }
          }));
        }
        
        // Auto-update SEO description if empty
        if (!postData.seo.description && data.excerpt) {
          setPostData(prev => ({
            ...prev,
            seo: {
              ...prev.seo,
              description: data.excerpt
            }
          }));
        }
        
        showSnackbar('Document uploaded and parsed successfully', 'success');
      } else {
        console.error('Document processing failed, data:', data);
        throw new Error(data.error || 'Document processing failed');
      }
    } catch (error) {
      console.error('Error uploading document:', error);
      showSnackbar(error instanceof Error ? error.message : 'Failed to upload document', 'error');
    } finally {
      setUploading(false);
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };
  
  // Show snackbar message
  const showSnackbar = (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };
  
  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  
  // Save post as draft
  const saveAsDraft = async () => {
    await savePost('DRAFT');
  };
  
  // Publish post
  const publishPost = async () => {
    await savePost('PUBLISHED');
  };
  
  // Save post with given status
  const savePost = async (status: string) => {
    try {
      setSaving(true);
      
      // Validate required fields
      if (!postData.title) {
        showSnackbar('Title is required', 'error');
        setSaving(false);
        return;
      }
      
      if (!postData.content) {
        showSnackbar('Content is required', 'error');
        setSaving(false);
        return;
      }
      
      // Prepare post data
      const postToSave = {
        ...postData,
        status
      };
      
      // Send POST request to create post
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postToSave),
      });
      
      if (response.ok) {
        const savedPost = await response.json();
        showSnackbar(status === 'PUBLISHED' ? 'Post published successfully' : 'Post saved as draft', 'success');
        
        // Redirect to posts list after a short delay
        setTimeout(() => {
          router.push('/admin/posts');
        }, 1500);
      } else {
        const errorData = await response.json();
        showSnackbar(errorData.error || 'Failed to save post', 'error');
      }
    } catch (error) {
      console.error('Error saving post:', error);
      showSnackbar('An error occurred while saving the post', 'error');
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
            component={Link}
            href="/admin/posts"
            startIcon={<ArrowBackIcon />}
            sx={{ 
              borderRadius: 2,
              color: theme.palette.text.secondary,
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
              }
            }}
          >
            Back to Posts
          </Button>
          <Typography variant="h4" component="h1" fontWeight={600}>
            Create New Post
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="outlined" 
            startIcon={<SaveIcon />}
            onClick={saveAsDraft}
            disabled={saving}
            sx={{ 
              borderRadius: 2,
              px: 3,
              py: 1,
            }}
          >
            Save Draft
          </Button>
          <Button 
            variant="contained" 
            startIcon={<PublishIcon />}
            onClick={publishPost}
            disabled={saving}
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
            Publish
          </Button>
        </Box>
      </Box>
      
      {/* Tabs */}
      <Tabs 
        value={tabValue} 
        onChange={handleTabChange}
        sx={{ 
          mb: 3,
          '& .MuiTab-root': {
            minWidth: 100,
            fontWeight: 600,
            borderRadius: '8px 8px 0 0',
          },
          '& .Mui-selected': {
            color: theme.palette.primary.main,
          },
          '& .MuiTabs-indicator': {
            height: 3,
            borderRadius: '3px 3px 0 0',
          }
        }}
      >
        <Tab label="Content" />
        <Tab label="SEO" />
      </Tabs>
      
      {/* Content Tab */}
      <StyledTabPanel role="tabpanel" hidden={tabValue !== 0}>
        {tabValue === 0 && (
          <Grid container spacing={3}>
            {/* Main Content */}
            <Grid item xs={12} md={8}>
              <StyledPaper>
                <TextField
                  label="Title"
                  name="title"
                  value={postData.title}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ mb: 3 }}
                />
                
                <TextField
                  label="Slug"
                  name="slug"
                  value={postData.slug}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  helperText="URL-friendly version of the title"
                  sx={{ mb: 3 }}
                />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 1 }}>
                  <Typography variant="h6">
                    Content
                  </Typography>
                  
                  <Box>
                    <input
                      type="file"
                      accept=".doc,.docx,.pdf"
                      style={{ display: 'none' }}
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                    />
                    <Button
                      variant="outlined"
                      startIcon={<UploadIcon />}
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      sx={{ 
                        borderRadius: 2,
                        mr: 1,
                      }}
                    >
                      {uploading ? 'Uploading...' : 'Upload Document'}
                    </Button>
                    <Typography variant="caption" color="text.secondary" display="block">
                      Supported formats: .docx, .doc, .pdf
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ mb: 3, border: `1px solid ${alpha(theme.palette.divider, 0.5)}`, borderRadius: 1 }}>
                  <RichTextEditor
                    value={postData.content}
                    onChange={handleEditorChange}
                    placeholder="Write your post content here or upload a document..."
                  />
                </Box>
                
                <TextField
                  label="Excerpt"
                  name="excerpt"
                  value={postData.excerpt}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={3}
                  helperText="A short summary of the post (will be auto-generated if left empty)"
                />
              </StyledPaper>
            </Grid>
            
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <StyledPaper sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Featured Image
                </Typography>
                
                <ImagePreview>
                  {postData.featuredImage ? (
                    <>
                      <img src={postData.featuredImage} alt="Featured" />
                      <IconButton 
                        sx={{ 
                          position: 'absolute', 
                          top: 8, 
                          right: 8, 
                          bgcolor: 'rgba(0,0,0,0.5)',
                          color: 'white',
                          '&:hover': {
                            bgcolor: 'rgba(0,0,0,0.7)',
                          }
                        }}
                        onClick={() => setPostData(prev => ({ ...prev, featuredImage: '' }))}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </>
                  ) : (
                    <ImageIcon sx={{ fontSize: 60, color: alpha(theme.palette.text.secondary, 0.3) }} />
                  )}
                </ImagePreview>
                
                <TextField
                  label="Image URL"
                  name="featuredImage"
                  value={postData.featuredImage}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  placeholder="Enter image URL or upload"
                  sx={{ mb: 2 }}
                />
                
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  fullWidth
                  sx={{ borderRadius: 2 }}
                  onClick={() => {
                    // In a real implementation, this would open a media library
                    showSnackbar('Media library functionality would be implemented here', 'info');
                  }}
                >
                  Select from Media Library
                </Button>
              </StyledPaper>
              
              <StyledPaper>
                <Typography variant="h6" gutterBottom>
                  Publishing Options
                </Typography>
                
                <FormControl fullWidth margin="normal">
                  <InputLabel id="status-label">Status</InputLabel>
                  <Select
                    labelId="status-label"
                    name="status"
                    value={postData.status}
                    onChange={handleSelectChange}
                    label="Status"
                  >
                    <MenuItem value="DRAFT">Draft</MenuItem>
                    <MenuItem value="PUBLISHED">Published</MenuItem>
                  </Select>
                </FormControl>
                
                <Divider sx={{ my: 3 }} />
                
                <Typography variant="h6" gutterBottom>
                  Categories & Tags
                </Typography>
                
                <FormControl fullWidth margin="normal">
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    name="categoryId"
                    value={postData.categoryId || ''}
                    onChange={handleSelectChange}
                    label="Category"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {categories.map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                
                <FormControl fullWidth margin="normal">
                  <InputLabel id="tags-label">Tags</InputLabel>
                  <Select
                    labelId="tags-label"
                    multiple
                    value={postData.tags}
                    onChange={handleTagsChange}
                    input={<OutlinedInput id="select-multiple-tags" label="Tags" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {(selected as string[]).map((tagId) => {
                          const tag = tags.find(t => t.id === tagId);
                          return (
                            <Chip 
                              key={tagId} 
                              label={tag?.name || tagId} 
                              size="small"
                              sx={{ borderRadius: 1 }}
                            />
                          );
                        })}
                      </Box>
                    )}
                  >
                    {tags.map((tag) => (
                      <MenuItem key={tag.id} value={tag.id}>
                        {tag.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </StyledPaper>
            </Grid>
          </Grid>
        )}
      </StyledTabPanel>
      
      {/* SEO Tab */}
      <StyledTabPanel role="tabpanel" hidden={tabValue !== 1}>
        {tabValue === 1 && (
          <StyledPaper>
            <Typography variant="h6" gutterBottom>
              SEO Settings
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Optimize your post for search engines to improve visibility and ranking.
            </Typography>
            
            <TextField
              label="SEO Title"
              name="title"
              value={postData.seo.title}
              onChange={handleSeoChange}
              fullWidth
              variant="outlined"
              margin="normal"
              helperText={`${postData.seo.title.length}/60 characters (recommended)`}
              sx={{ mb: 3 }}
            />
            
            <TextField
              label="Meta Description"
              name="description"
              value={postData.seo.description}
              onChange={handleSeoChange}
              fullWidth
              variant="outlined"
              margin="normal"
              multiline
              rows={3}
              helperText={`${postData.seo.description.length}/160 characters (recommended)`}
              sx={{ mb: 3 }}
            />
            
            <TextField
              label="Keywords"
              name="keywords"
              value={postData.seo.keywords}
              onChange={handleSeoChange}
              fullWidth
              variant="outlined"
              margin="normal"
              helperText="Comma-separated keywords related to your post"
              sx={{ mb: 3 }}
            />
            
            <TextField
              label="Open Graph Image"
              name="ogImage"
              value={postData.seo.ogImage}
              onChange={handleSeoChange}
              fullWidth
              variant="outlined"
              margin="normal"
              helperText="Image URL for social media sharing (leave empty to use featured image)"
              sx={{ mb: 3 }}
            />
            
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <Grid container alignItems="center">
                <Grid item>
                  <input
                    type="checkbox"
                    name="noIndex"
                    checked={postData.seo.noIndex}
                    onChange={handleSeoCheckboxChange}
                    id="noIndex"
                  />
                </Grid>
                <Grid item>
                  <InputLabel htmlFor="noIndex" sx={{ ml: 1 }}>
                    No Index (prevent search engines from indexing this post)
                  </InputLabel>
                </Grid>
              </Grid>
            </FormControl>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="h6" gutterBottom>
              Preview
            </Typography>
            
            <Box sx={{ p: 2, border: `1px solid ${alpha(theme.palette.divider, 0.5)}`, borderRadius: 1, mb: 3 }}>
              <Typography variant="subtitle1" sx={{ color: '#1a0dab', mb: 0.5, fontWeight: 500 }}>
                {postData.seo.title || `${postData.title} | HireGenix Blog`}
              </Typography>
              <Typography variant="body2" sx={{ color: '#006621', mb: 1 }}>
                www.myhiregenix.com/blog/{postData.slug || 'post-slug'}
              </Typography>
              <Typography variant="body2" sx={{ color: '#545454' }}>
                {postData.seo.description || postData.excerpt || 'No description provided.'}
              </Typography>
            </Box>
          </StyledPaper>
        )}
      </StyledTabPanel>
      
      {/* Loading Overlay */}
      {loading && (
        <Box sx={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999
        }}>
          <CircularProgress size={60} />
        </Box>
      )}
      
      {/* Saving Indicator */}
      {saving && (
        <Box sx={{ 
          position: 'fixed', 
          bottom: 20, 
          right: 20, 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          bgcolor: alpha(theme.palette.background.paper, 0.9),
          p: 2,
          borderRadius: 2,
          boxShadow: 3,
          zIndex: 9999
        }}>
          <CircularProgress size={24} />
          <Typography>Saving post...</Typography>
        </Box>
      )}
      
      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
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

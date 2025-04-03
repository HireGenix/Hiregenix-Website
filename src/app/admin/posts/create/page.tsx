'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  OutlinedInput,
  Divider,
  FormHelperText,
  Card,
  CardContent,
  IconButton,
  SelectChangeEvent,
} from '@mui/material';
import {
  Save as SaveIcon,
  ArrowBack as ArrowBackIcon,
  Add as AddIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Mock categories and tags
const categories = [
  'Announcements',
  'Tutorials',
  'Updates',
  'Case Studies',
  'News',
  'SEO',
];

const availableTags = [
  'CMS',
  'Launch',
  'Best Practices',
  'Content',
  'Features',
  'Roadmap',
  'Customization',
  'Themes',
  'SEO',
  'Optimization',
  'Performance',
  'Security',
];

export default function CreatePostPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    tags: [] as string[],
    status: 'Draft',
  });
  const [errors, setErrors] = useState({
    title: '',
    content: '',
    category: '',
  });
  const [newTag, setNewTag] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is edited
    if (name && errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is edited
    if (name && errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleTagChange = (event: SelectChangeEvent<string[]>) => {
    setFormData({
      ...formData,
      tags: event.target.value as string[],
    });
  };

  const handleAddNewTag = () => {
    if (newTag && !formData.tags.includes(newTag)) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag],
      });
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const validateForm = () => {
    const newErrors = {
      title: '',
      content: '',
      category: '',
    };
    let isValid = true;

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
      isValid = false;
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent, saveAsDraft = false) => {
    e.preventDefault();

    if (saveAsDraft) {
      // Save as draft without validation
      console.log('Saving as draft:', formData);
      router.push('/admin/posts');
      return;
    }

    if (validateForm()) {
      // Submit the form
      console.log('Form submitted:', formData);
      router.push('/admin/posts');
    }
  };

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
            Create New Post
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Create and publish a new blog post
          </Typography>
        </Box>
        <Box>
          <Button
            component={Link}
            href="/admin/posts"
            startIcon={<ArrowBackIcon />}
            sx={{ mr: 2 }}
          >
            Back to Posts
          </Button>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={(e) => handleSubmit(e, false)}
          >
            Publish
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Paper elevation={1} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
            <TextField
              fullWidth
              label="Post Title"
              name="title"
              value={formData.title}
              onChange={handleTextChange}
              error={!!errors.title}
              helperText={errors.title}
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleTextChange}
              multiline
              rows={2}
              sx={{ mb: 3 }}
              helperText="A short summary of your post (optional)"
            />
            <TextField
              fullWidth
              label="Content"
              name="content"
              value={formData.content}
              onChange={handleTextChange}
              multiline
              rows={15}
              error={!!errors.content}
              helperText={errors.content || 'Write your post content here'}
            />
          </Paper>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          {/* Post Settings */}
          <Card elevation={1} sx={{ borderRadius: 2, mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Post Settings
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <FormControl fullWidth sx={{ mb: 3 }} error={!!errors.category}>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  name="category"
                  value={formData.category}
                  onChange={handleSelectChange}
                  label="Category"
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
                {errors.category && <FormHelperText>{errors.category}</FormHelperText>}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="tags-label">Tags</InputLabel>
                <Select
                  labelId="tags-label"
                  multiple
                  value={formData.tags}
                  onChange={handleTagChange}
                  input={<OutlinedInput label="Tags" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {(selected as string[]).map((value) => (
                        <Chip
                          key={value}
                          label={value}
                          onDelete={() => handleRemoveTag(value)}
                          deleteIcon={
                            <CloseIcon
                              onMouseDown={(event) => event.stopPropagation()}
                            />
                          }
                        />
                      ))}
                    </Box>
                  )}
                >
                  {availableTags.map((tag) => (
                    <MenuItem key={tag} value={tag}>
                      {tag}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Select tags for your post</FormHelperText>
              </FormControl>

              <Box sx={{ display: 'flex', mb: 3 }}>
                <TextField
                  label="Add Custom Tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  size="small"
                  sx={{ flexGrow: 1, mr: 1 }}
                />
                <IconButton
                  color="primary"
                  onClick={handleAddNewTag}
                  disabled={!newTag}
                >
                  <AddIcon />
                </IconButton>
              </Box>

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  labelId="status-label"
                  name="status"
                  value={formData.status}
                  onChange={handleSelectChange}
                  label="Status"
                >
                  <MenuItem value="Draft">Draft</MenuItem>
                  <MenuItem value="Published">Published</MenuItem>
                </Select>
                <FormHelperText>
                  Draft posts are not visible to the public
                </FormHelperText>
              </FormControl>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              onClick={(e) => handleSubmit(e, true)}
              sx={{ flexGrow: 1, mr: 1 }}
            >
              Save as Draft
            </Button>
            <Button
              variant="contained"
              onClick={(e) => handleSubmit(e, false)}
              startIcon={<SaveIcon />}
              sx={{ flexGrow: 1 }}
            >
              Publish
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

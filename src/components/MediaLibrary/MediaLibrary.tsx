'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tabs,
  Tab,
  CircularProgress,
  Chip,
  Divider,
  Paper,
  InputAdornment
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  CloudUpload as UploadIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  FileCopy as CopyIcon,
  Image as ImageIcon,
  Movie as VideoIcon,
  Description as DocumentIcon,
  AudioFile as AudioIcon,
  Code as CodeIcon,
  Archive as ArchiveIcon,
  MoreVert as MoreVertIcon
} from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';
import { MediaItem } from './types';

interface MediaLibraryProps {
  onSelect?: (media: MediaItem) => void;
  selectionMode?: boolean;
  maxSelection?: number;
}

const MediaLibrary: React.FC<MediaLibraryProps> = ({
  onSelect,
  selectionMode = false,
  maxSelection = 1
}) => {
  // State
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [selectedItems, setSelectedItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTab, setCurrentTab] = useState(0);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentEditItem, setCurrentEditItem] = useState<MediaItem | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // File type icons mapping
  const fileTypeIcons: Record<string, React.ReactNode> = {
    image: <ImageIcon />,
    video: <VideoIcon />,
    audio: <AudioIcon />,
    document: <DocumentIcon />,
    code: <CodeIcon />,
    archive: <ArchiveIcon />
  };

  // State for error handling
  const [error, setError] = useState<string | null>(null);

  // Fetch media items
  useEffect(() => {
    const fetchMediaItems = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch('/api/media');
        
        if (!response.ok) {
          throw new Error(`Error fetching media: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Handle both response formats - either data.items or direct array
        if (data.items && Array.isArray(data.items)) {
          setMediaItems(data.items);
        } else if (Array.isArray(data)) {
          setMediaItems(data);
        } else {
          setMediaItems([]);
          console.warn('Unexpected API response format:', data);
        }
      } catch (error) {
        console.error('Error fetching media items:', error);
        setError('Failed to load media items. Please try again later.');
        setMediaItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMediaItems();
  }, []);

  // Dropzone setup
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
      'video/*': [],
      'audio/*': [],
      'application/pdf': [],
      'application/msword': [],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
      'text/plain': [],
      'text/html': [],
      'text/css': [],
      'text/javascript': [],
      'application/json': []
    },
    onDrop: (acceptedFiles) => {
      handleFilesUpload(acceptedFiles);
    }
  });

  // State for upload error
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Handle file upload
  const handleFilesUpload = async (files: File[]) => {
    setIsUploading(true);
    setUploadProgress(0);
    setUploadError(null);

    try {
      const uploadedItems: MediaItem[] = [];
      
      // Set up progress tracking
      const totalFiles = files.length;
      let completedFiles = 0;
      
      // Process each file
      for (const file of files) {
        try {
          // Create form data for the file
          const formData = new FormData();
          formData.append('file', file);
          formData.append('name', file.name.split('.')[0]);
          formData.append('alt', file.name);
          
          // Upload the file
          const response = await fetch('/api/media', {
            method: 'POST',
            body: formData,
          });
          
          if (!response.ok) {
            throw new Error(`Error uploading ${file.name}: ${response.status} ${response.statusText}`);
          }
          
          const data = await response.json();
          
          if (data.media) {
            uploadedItems.push(data.media);
          }
          
          // Update progress
          completedFiles++;
          setUploadProgress(Math.round((completedFiles / totalFiles) * 100));
          
        } catch (fileError) {
          console.error(`Error uploading file ${file.name}:`, fileError);
          // Continue with other files even if one fails
        }
      }
      
      // Add the successfully uploaded items to the media list
      if (uploadedItems.length > 0) {
        setMediaItems(prev => [...uploadedItems, ...prev]);
        setUploadDialogOpen(false);
      } else {
        setUploadError('Failed to upload files. Please try again.');
      }
      
    } catch (error) {
      console.error('Error in file upload process:', error);
      setUploadError('An error occurred during upload. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  // Handle item selection
  const handleItemSelect = (item: MediaItem) => {
    if (selectionMode) {
      if (selectedItems.some(selected => selected.id === item.id)) {
        setSelectedItems(selectedItems.filter(selected => selected.id !== item.id));
      } else {
        if (selectedItems.length < maxSelection) {
          setSelectedItems([...selectedItems, item]);
        }
      }
    } else if (onSelect) {
      onSelect(item);
    }
  };

  // Handle item edit
  const handleEditItem = (item: MediaItem) => {
    setCurrentEditItem(item);
    setEditDialogOpen(true);
  };

  // State for edit error
  const [editError, setEditError] = useState<string | null>(null);
  // State for delete confirmation
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  // Handle item delete
  const handleDeleteItem = async (itemId: string) => {
    setItemToDelete(itemId);
    setDeleteConfirmOpen(true);
    setDeleteError(null);
  };

  // Confirm and execute delete
  const confirmDelete = async () => {
    if (!itemToDelete) return;
    
    setIsDeleting(true);
    setDeleteError(null);
    
    try {
      const response = await fetch(`/api/media/${itemToDelete}`, { 
        method: 'DELETE' 
      });
      
      if (!response.ok) {
        throw new Error(`Error deleting media: ${response.status} ${response.statusText}`);
      }
      
      // Update state
      setMediaItems(mediaItems.filter(item => item.id !== itemToDelete));
      setSelectedItems(selectedItems.filter(item => item.id !== itemToDelete));
      setDeleteConfirmOpen(false);
      setItemToDelete(null);
    } catch (error) {
      console.error('Error deleting media item:', error);
      setDeleteError('Failed to delete the media item. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  // Handle save edited item
  const handleSaveEdit = async () => {
    if (!currentEditItem) return;
    
    setEditError(null);
    
    try {
      const response = await fetch(`/api/media/${currentEditItem.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: currentEditItem.name,
          alt: currentEditItem.alt
        })
      });
      
      if (!response.ok) {
        throw new Error(`Error updating media: ${response.status} ${response.statusText}`);
      }
      
      const updatedMedia = await response.json();
      
      // Update state with the response from the server
      setMediaItems(mediaItems.map(item => 
        item.id === currentEditItem.id ? updatedMedia : item
      ));
      setEditDialogOpen(false);
      setCurrentEditItem(null);
    } catch (error) {
      console.error('Error updating media item:', error);
      setEditError('Failed to update the media item. Please try again.');
    }
  };

  // Filter media items based on search query and current tab
  const filteredMediaItems = mediaItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.fileName.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (currentTab === 0) return matchesSearch; // All
    if (currentTab === 1) return matchesSearch && item.fileType.startsWith('image/');
    if (currentTab === 2) return matchesSearch && item.fileType.startsWith('video/');
    if (currentTab === 3) return matchesSearch && item.fileType.startsWith('audio/');
    if (currentTab === 4) return matchesSearch && (
      item.fileType.includes('pdf') || 
      item.fileType.includes('word') || 
      item.fileType.includes('text/plain')
    );
    
    return matchesSearch;
  });

  // Get file type category
  const getFileTypeCategory = (fileType: string): string => {
    if (fileType.startsWith('image/')) return 'image';
    if (fileType.startsWith('video/')) return 'video';
    if (fileType.startsWith('audio/')) return 'audio';
    if (fileType.includes('pdf') || fileType.includes('word') || fileType.includes('text/plain')) return 'document';
    if (fileType.includes('html') || fileType.includes('css') || fileType.includes('javascript') || fileType.includes('json')) return 'code';
    if (fileType.includes('zip') || fileType.includes('rar') || fileType.includes('tar')) return 'archive';
    return 'document';
  };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Header */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" component="h2">
          Media Library
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          onClick={() => setUploadDialogOpen(true)}
        >
          Upload Media
        </Button>
      </Box>

      {/* Search and filters */}
      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <TextField
          fullWidth
          placeholder="Search media..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          size="small"
        />
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={currentTab} 
          onChange={(_, newValue) => setCurrentTab(newValue)}
          aria-label="media library tabs"
        >
          <Tab label="All" />
          <Tab label="Images" />
          <Tab label="Videos" />
          <Tab label="Audio" />
          <Tab label="Documents" />
        </Tabs>
      </Box>

      {/* Selected items */}
      {selectionMode && selectedItems.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" gutterBottom>
            Selected Items ({selectedItems.length}/{maxSelection})
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {selectedItems.map(item => (
              <Chip 
                key={item.id}
                label={item.name}
                onDelete={() => setSelectedItems(selectedItems.filter(i => i.id !== item.id))}
                sx={{ mb: 1 }}
              />
            ))}
          </Box>
          <Divider sx={{ my: 2 }} />
        </Box>
      )}

      {/* Media grid */}
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      ) : filteredMediaItems.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary">
            No media items found. Upload some files to get started.
          </Typography>
          <Button 
            variant="outlined" 
            startIcon={<UploadIcon />}
            onClick={() => setUploadDialogOpen(true)}
            sx={{ mt: 2 }}
          >
            Upload Media
          </Button>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {filteredMediaItems.map(item => {
            const fileTypeCategory = getFileTypeCategory(item.fileType);
            const isSelected = selectedItems.some(selected => selected.id === item.id);
            
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    border: isSelected ? '2px solid' : 'none',
                    borderColor: 'primary.main',
                    '&:hover': {
                      boxShadow: 3
                    }
                  }}
                  onClick={() => handleItemSelect(item)}
                >
                  {fileTypeCategory === 'image' ? (
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.url}
                      alt={item.alt || item.name}
                    />
                  ) : (
                    <Box 
                      sx={{ 
                        height: 140, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        bgcolor: 'action.hover'
                      }}
                    >
                      {fileTypeIcons[fileTypeCategory]}
                    </Box>
                  )}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" noWrap>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {item.fileName}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      {formatFileSize(item.fileSize)}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'space-between' }}>
                    <Box>
                      <IconButton 
                        size="small" 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditItem(item);
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(item.url);
                        }}
                      >
                        <CopyIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <IconButton 
                      size="small" 
                      color="error"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteItem(item.id);
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}

      {/* Upload Dialog */}
      <Dialog 
        open={uploadDialogOpen} 
        onClose={() => !isUploading && setUploadDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Upload Media</DialogTitle>
        <DialogContent>
          <Box 
            {...getRootProps()} 
            sx={{ 
              border: '2px dashed',
              borderColor: isDragActive ? 'primary.main' : 'divider',
              borderRadius: 1,
              p: 4,
              mb: 2,
              textAlign: 'center',
              cursor: 'pointer',
              bgcolor: isDragActive ? 'action.hover' : 'background.paper'
            }}
          >
            <input {...getInputProps()} />
            <UploadIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Drag & Drop Files Here
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              or click to select files
            </Typography>
            <Button variant="outlined">Select Files</Button>
          </Box>
          
          {isUploading && (
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <CircularProgress variant="determinate" value={uploadProgress} sx={{ mb: 2 }} />
              <Typography variant="body2" color="text.secondary">
                Uploading... {uploadProgress}%
              </Typography>
            </Box>
          )}
          
          {uploadError && (
            <Box sx={{ mt: 2, p: 2, bgcolor: 'error.light', borderRadius: 1 }}>
              <Typography color="error.contrastText">
                {uploadError}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setUploadDialogOpen(false)} 
            disabled={isUploading}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog 
        open={editDialogOpen} 
        onClose={() => setEditDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Edit Media</DialogTitle>
        <DialogContent>
          {currentEditItem && (
            <Box sx={{ pt: 1 }}>
              {getFileTypeCategory(currentEditItem.fileType) === 'image' && (
                <Box sx={{ mb: 2, textAlign: 'center' }}>
                  <img 
                    src={currentEditItem.url} 
                    alt={currentEditItem.alt || currentEditItem.name}
                    style={{ maxWidth: '100%', maxHeight: 200 }}
                  />
                </Box>
              )}
              
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                value={currentEditItem.name}
                onChange={(e) => setCurrentEditItem({
                  ...currentEditItem,
                  name: e.target.value
                })}
              />
              
              <TextField
                fullWidth
                margin="normal"
                label="Alt Text"
                value={currentEditItem.alt || ''}
                onChange={(e) => setCurrentEditItem({
                  ...currentEditItem,
                  alt: e.target.value
                })}
                helperText="Alternative text for accessibility"
              />
              
              <TextField
                fullWidth
                margin="normal"
                label="URL"
                value={currentEditItem.url}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => navigator.clipboard.writeText(currentEditItem.url)}
                        edge="end"
                      >
                        <CopyIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              
              {editError && (
                <Box sx={{ mt: 2, p: 2, bgcolor: 'error.light', borderRadius: 1 }}>
                  <Typography color="error.contrastText">
                    {editError}
                  </Typography>
                </Box>
              )}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>
            Cancel
          </Button>
          <Button 
            variant="contained" 
            onClick={handleSaveEdit}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteConfirmOpen}
        onClose={() => !isDeleting && setDeleteConfirmOpen(false)}
      >
        <DialogTitle>Delete Media Item</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this media item? This action cannot be undone.
          </Typography>
          {deleteError && (
            <Typography color="error" sx={{ mt: 2 }}>
              {deleteError}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setDeleteConfirmOpen(false)} 
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button 
            variant="contained" 
            color="error" 
            onClick={confirmDelete}
            disabled={isDeleting}
          >
            {isDeleting ? <CircularProgress size={24} /> : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Selection confirmation */}
      {selectionMode && (
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            variant="outlined" 
            onClick={() => setSelectedItems([])}
            sx={{ mr: 1 }}
          >
            Clear Selection
          </Button>
          <Button 
            variant="contained" 
            disabled={selectedItems.length === 0}
            onClick={() => onSelect && onSelect(selectedItems[0])}
          >
            {maxSelection > 1 ? 'Use Selected Items' : 'Use Selected Item'}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default MediaLibrary;

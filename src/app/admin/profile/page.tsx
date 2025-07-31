'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Grid,
  Divider,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import { AccountCircle as AccountCircleIcon } from '@mui/icons-material';

export default function ProfilePage() {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [success, setSuccess] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (session?.user) {
      setName(session.user.name || '');
      setEmail(session.user.email || '');
    }
  }, [session]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form values
    if (session?.user) {
      setName(session.user.name || '');
      setEmail(session.user.email || '');
    }
  };

  const handleSave = () => {
    // In a real implementation, you would save the changes to the database
    // For now, we'll just show a success message
    setIsEditing(false);
    setSuccess('Profile updated successfully');
    setTimeout(() => setSuccess(null), 3000);
  };

  if (!session) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
          Profile
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Manage your account information and settings.
        </Typography>

        {success && (
          <Alert severity="success" sx={{ mb: 3 }} onClose={() => setSuccess(null)}>
            {success}
          </Alert>
        )}

        <Paper sx={{ p: 4, mb: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  mb: 2,
                  bgcolor: 'primary.main',
                  fontSize: '3rem',
                }}
              >
                {session.user?.name?.charAt(0) || <AccountCircleIcon fontSize="inherit" />}
              </Avatar>
              <Typography variant="h6" align="center" gutterBottom>
                {session.user?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Administrator
              </Typography>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                Account Information
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!isEditing}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!isEditing}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    {isEditing ? (
                      <>
                        <Button
                          variant="outlined"
                          onClick={handleCancel}
                          sx={{ mr: 2 }}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="contained"
                          onClick={handleSave}
                        >
                          Save Changes
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={handleEdit}
                      >
                        Edit Profile
                      </Button>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Security
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="primary"
                // In a real implementation, this would open a dialog to change the password
                onClick={() => alert('This feature is not implemented yet')}
              >
                Change Password
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}

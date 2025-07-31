'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Divider,
  Alert,
  Snackbar,
  CircularProgress,
  Chip,
  alpha,
  useTheme,
} from '@mui/material';
import {
  CloudSync as CloudSyncIcon,
  Check as CheckIcon,
  Settings as SettingsIcon,
  Add as AddIcon,
} from '@mui/icons-material';

// Integration type
interface Integration {
  id: number;
  name: string;
  provider: string;
  description: string;
  enabled: boolean;
  lastSync: string | null;
  icon: React.ReactNode;
}

// Integration card component
const IntegrationCard = ({ 
  integration, 
  onToggle, 
  onConfigure 
}: { 
  integration: Integration; 
  onToggle: (id: number) => void; 
  onConfigure: (id: number) => void; 
}) => {
  const theme = useTheme();
  
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 2,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box 
            sx={{ 
              width: 48, 
              height: 48, 
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
              mr: 2,
            }}
          >
            {integration.icon}
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              {integration.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {integration.provider}
            </Typography>
          </Box>
          <Box sx={{ ml: 'auto' }}>
            <FormControlLabel
              control={
                <Switch 
                  checked={integration.enabled} 
                  onChange={() => onToggle(integration.id)}
                  color="primary"
                />
              }
              label=""
            />
          </Box>
        </Box>
        
        <Typography variant="body2" color="text.secondary" paragraph>
          {integration.description}
        </Typography>
        
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
          <Chip 
            label={integration.enabled ? 'Active' : 'Inactive'} 
            size="small"
            color={integration.enabled ? 'success' : 'default'}
            sx={{ mr: 1 }}
          />
          {integration.lastSync && (
            <Typography variant="caption" color="text.secondary">
              Last synced: {integration.lastSync}
            </Typography>
          )}
        </Box>
      </CardContent>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Button 
          variant="outlined" 
          size="small" 
          startIcon={<SettingsIcon />}
          onClick={() => onConfigure(integration.id)}
          fullWidth
        >
          Configure
        </Button>
      </Box>
    </Card>
  );
};

// Main page component
export default function IntegrationsPage() {
  const theme = useTheme();
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [loading, setLoading] = useState(true);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'info' | 'warning' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  // Mock data for integrations
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setIntegrations([
        {
          id: 1,
          name: 'Google Calendar',
          provider: 'Google',
          description: 'Sync interview schedules with Google Calendar and send automatic invites to candidates and interviewers.',
          enabled: true,
          lastSync: '2 hours ago',
          icon: <CloudSyncIcon color="primary" />,
        },
        {
          id: 2,
          name: 'Slack',
          provider: 'Slack',
          description: 'Get notifications about new applications, interview schedules, and hiring decisions directly in your Slack channels.',
          enabled: false,
          lastSync: null,
          icon: <CloudSyncIcon color="primary" />,
        },
        {
          id: 3,
          name: 'Microsoft Teams',
          provider: 'Microsoft',
          description: 'Integrate with Microsoft Teams for video interviews and team collaboration on candidate evaluations.',
          enabled: false,
          lastSync: null,
          icon: <CloudSyncIcon color="primary" />,
        },
        {
          id: 4,
          name: 'LinkedIn',
          provider: 'LinkedIn',
          description: 'Import candidate profiles from LinkedIn and post job listings directly to your company page.',
          enabled: true,
          lastSync: '1 day ago',
          icon: <CloudSyncIcon color="primary" />,
        },
        {
          id: 5,
          name: 'Zoom',
          provider: 'Zoom',
          description: 'Schedule and conduct video interviews through Zoom with automatic recording and transcription.',
          enabled: true,
          lastSync: '3 hours ago',
          icon: <CloudSyncIcon color="primary" />,
        },
        {
          id: 6,
          name: 'Workday',
          provider: 'Workday',
          description: 'Sync candidate data with Workday for seamless onboarding after hiring decisions.',
          enabled: false,
          lastSync: null,
          icon: <CloudSyncIcon color="primary" />,
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Toggle integration status
  const handleToggleIntegration = (id: number) => {
    setIntegrations(integrations.map(integration => 
      integration.id === id 
        ? { ...integration, enabled: !integration.enabled } 
        : integration
    ));
    
    const integration = integrations.find(i => i.id === id);
    if (integration) {
      setSnackbar({
        open: true,
        message: `${integration.name} ${!integration.enabled ? 'enabled' : 'disabled'} successfully`,
        severity: !integration.enabled ? 'success' : 'info',
      });
    }
  };

  // Configure integration
  const handleConfigureIntegration = (id: number) => {
    // This would open a configuration modal in a real application
    const integration = integrations.find(i => i.id === id);
    if (integration) {
      alert(`Configure ${integration.name} integration`);
    }
  };

  // Close snackbar
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Integrations
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Connect HireGenix with your favorite tools and services
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          sx={{ 
            borderRadius: '50px',
            px: 3,
          }}
        >
          Add New Integration
        </Button>
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {integrations.map((integration) => (
            <Grid item xs={12} md={6} lg={4} key={integration.id}>
              <IntegrationCard 
                integration={integration} 
                onToggle={handleToggleIntegration}
                onConfigure={handleConfigureIntegration}
              />
            </Grid>
          ))}
        </Grid>
      )}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

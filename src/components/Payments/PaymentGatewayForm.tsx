import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Divider,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  CircularProgress,
  Chip,
  Stack,
  IconButton,
} from '@mui/material';
import {
  Info as InfoIcon,
  ContentCopy as ContentCopyIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Check as CheckIcon,
} from '@mui/icons-material';
import { PaymentGatewayFormProps, StripeConfig, PayPalConfig, RazorpayConfig } from './types';

const PaymentGatewayForm: React.FC<PaymentGatewayFormProps> = ({
  gateway,
  onToggleEnabled,
  onToggleTestMode,
  onUpdateConfig,
  onSave,
  loading,
  showSecrets,
  onToggleShowSecrets,
  copiedField,
  onCopy,
  onOpenWebhookDialog,
}) => {
  // Helper function to get config value safely
  const getConfigValue = (field: string): string => {
    if (gateway.id === 'stripe') {
      const config = gateway.config as StripeConfig;
      return (config as any)[field] || '';
    } else if (gateway.id === 'paypal') {
      const config = gateway.config as PayPalConfig;
      return (config as any)[field] || '';
    } else if (gateway.id === 'razorpay') {
      const config = gateway.config as RazorpayConfig;
      return (config as any)[field] || '';
    }
    return '';
  };

  // Render config fields based on gateway
  const renderConfigFields = () => {
    switch (gateway.id) {
      case 'stripe':
        return (
          <>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Publishable Key"
                value={getConfigValue('publishableKey')}
                onChange={(e) => onUpdateConfig('publishableKey', e.target.value)}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => onCopy(getConfigValue('publishableKey'), 'publishableKey')}
                      edge="end"
                    >
                      {copiedField === 'publishableKey' ? <CheckIcon color="success" /> : <ContentCopyIcon />}
                    </IconButton>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Secret Key"
                type={showSecrets ? 'text' : 'password'}
                value={getConfigValue('secretKey')}
                onChange={(e) => onUpdateConfig('secretKey', e.target.value)}
                InputProps={{
                  endAdornment: (
                    <>
                      <IconButton
                        onClick={onToggleShowSecrets}
                        edge="end"
                      >
                        {showSecrets ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                      <IconButton
                        onClick={() => onCopy(getConfigValue('secretKey'), 'secretKey')}
                        edge="end"
                      >
                        {copiedField === 'secretKey' ? <CheckIcon color="success" /> : <ContentCopyIcon />}
                      </IconButton>
                    </>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Webhook Secret"
                type={showSecrets ? 'text' : 'password'}
                value={getConfigValue('webhookSecret')}
                onChange={(e) => onUpdateConfig('webhookSecret', e.target.value)}
                InputProps={{
                  endAdornment: (
                    <>
                      <IconButton
                        onClick={onToggleShowSecrets}
                        edge="end"
                      >
                        {showSecrets ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                      <IconButton
                        onClick={() => onCopy(getConfigValue('webhookSecret'), 'webhookSecret')}
                        edge="end"
                      >
                        {copiedField === 'webhookSecret' ? <CheckIcon color="success" /> : <ContentCopyIcon />}
                      </IconButton>
                    </>
                  ),
                }}
              />
            </Grid>
          </>
        );
      case 'paypal':
        return (
          <>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Client ID"
                value={getConfigValue('clientId')}
                onChange={(e) => onUpdateConfig('clientId', e.target.value)}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => onCopy(getConfigValue('clientId'), 'clientId')}
                      edge="end"
                    >
                      {copiedField === 'clientId' ? <CheckIcon color="success" /> : <ContentCopyIcon />}
                    </IconButton>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Client Secret"
                type={showSecrets ? 'text' : 'password'}
                value={getConfigValue('clientSecret')}
                onChange={(e) => onUpdateConfig('clientSecret', e.target.value)}
                InputProps={{
                  endAdornment: (
                    <>
                      <IconButton
                        onClick={onToggleShowSecrets}
                        edge="end"
                      >
                        {showSecrets ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                      <IconButton
                        onClick={() => onCopy(getConfigValue('clientSecret'), 'clientSecret')}
                        edge="end"
                      >
                        {copiedField === 'clientSecret' ? <CheckIcon color="success" /> : <ContentCopyIcon />}
                      </IconButton>
                    </>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Webhook ID"
                value={getConfigValue('webhookId')}
                onChange={(e) => onUpdateConfig('webhookId', e.target.value)}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => onCopy(getConfigValue('webhookId'), 'webhookId')}
                      edge="end"
                    >
                      {copiedField === 'webhookId' ? <CheckIcon color="success" /> : <ContentCopyIcon />}
                    </IconButton>
                  ),
                }}
              />
            </Grid>
          </>
        );
      case 'razorpay':
        return (
          <>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Key ID"
                value={getConfigValue('keyId')}
                onChange={(e) => onUpdateConfig('keyId', e.target.value)}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => onCopy(getConfigValue('keyId'), 'keyId')}
                      edge="end"
                    >
                      {copiedField === 'keyId' ? <CheckIcon color="success" /> : <ContentCopyIcon />}
                    </IconButton>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Key Secret"
                type={showSecrets ? 'text' : 'password'}
                value={getConfigValue('keySecret')}
                onChange={(e) => onUpdateConfig('keySecret', e.target.value)}
                InputProps={{
                  endAdornment: (
                    <>
                      <IconButton
                        onClick={onToggleShowSecrets}
                        edge="end"
                      >
                        {showSecrets ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                      <IconButton
                        onClick={() => onCopy(getConfigValue('keySecret'), 'keySecret')}
                        edge="end"
                      >
                        {copiedField === 'keySecret' ? <CheckIcon color="success" /> : <ContentCopyIcon />}
                      </IconButton>
                    </>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Webhook Secret"
                type={showSecrets ? 'text' : 'password'}
                value={getConfigValue('webhookSecret')}
                onChange={(e) => onUpdateConfig('webhookSecret', e.target.value)}
                InputProps={{
                  endAdornment: (
                    <>
                      <IconButton
                        onClick={onToggleShowSecrets}
                        edge="end"
                      >
                        {showSecrets ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                      <IconButton
                        onClick={() => onCopy(getConfigValue('webhookSecret'), 'webhookSecret')}
                        edge="end"
                      >
                        {copiedField === 'webhookSecret' ? <CheckIcon color="success" /> : <ContentCopyIcon />}
                      </IconButton>
                    </>
                  ),
                }}
              />
            </Grid>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Grid container spacing={3}>
      {/* Gateway Header */}
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: 'rgba(0, 0, 0, 0.04)',
                color: gateway.color,
                mr: 2,
              }}
            >
              {gateway.icon}
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={600}>
                {gateway.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {gateway.description}
              </Typography>
            </Box>
          </Box>
          <FormControlLabel
            control={
              <Switch
                checked={gateway.enabled}
                onChange={(e) => onToggleEnabled(e.target.checked)}
                color="primary"
              />
            }
            label={gateway.enabled ? 'Enabled' : 'Disabled'}
          />
        </Box>
      </Grid>
      
      <Grid item xs={12}>
        <Divider />
      </Grid>
      
      {/* Test Mode Toggle */}
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              Test Mode
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Enable test mode to test payments without charging real money.
            </Typography>
          </Box>
          <FormControlLabel
            control={
              <Switch
                checked={gateway.testMode}
                onChange={(e) => onToggleTestMode(e.target.checked)}
                color="primary"
              />
            }
            label={gateway.testMode ? 'Test Mode' : 'Live Mode'}
          />
        </Box>
      </Grid>
      
      <Grid item xs={12}>
        <Divider />
      </Grid>
      
      {/* API Credentials */}
      <Grid item xs={12}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          API Credentials
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {gateway.testMode
            ? 'These are your test API credentials. Use them for testing purposes only.'
            : 'These are your live API credentials. Be careful with these credentials as they can be used to process real payments.'}
        </Typography>
        
        <Grid container spacing={2}>
          {renderConfigFields()}
        </Grid>
      </Grid>
      
      <Grid item xs={12}>
        <Divider />
      </Grid>
      
      {/* Webhook Configuration */}
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Webhook Configuration
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Configure your {gateway.name} webhook to send events to this URL.
            </Typography>
          </Box>
          <Button
            variant="outlined"
            onClick={onOpenWebhookDialog}
            startIcon={<InfoIcon />}
          >
            Webhook Info
          </Button>
        </Box>
        
        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Webhook URL"
            value={`${typeof window === 'undefined' ? '' : window.location.origin}${gateway.webhookUrl}`}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <IconButton
                  onClick={() => onCopy(`${typeof window === 'undefined' ? '' : window.location.origin}${gateway.webhookUrl}`, 'webhookUrl')}
                  edge="end"
                >
                  {copiedField === 'webhookUrl' ? <CheckIcon color="success" /> : <ContentCopyIcon />}
                </IconButton>
              ),
            }}
          />
        </Box>
      </Grid>
      
      <Grid item xs={12}>
        <Divider />
      </Grid>
      
      {/* Supported Features */}
      <Grid item xs={12}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Supported Features
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Supported Currencies
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {gateway.supportedCurrencies.map((currency) => (
                <Chip
                  key={currency}
                  label={currency}
                  size="small"
                  sx={{ mb: 1 }}
                />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Supported Payment Methods
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {gateway.supportedPaymentMethods.map((method) => (
                <Chip
                  key={method}
                  label={method.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  size="small"
                  sx={{ mb: 1 }}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      
      {/* Save Button */}
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button
            variant="contained"
            onClick={onSave}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Save Changes'}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PaymentGatewayForm;

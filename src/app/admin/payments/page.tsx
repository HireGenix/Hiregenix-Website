'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Alert,
  CircularProgress,
  Chip,
  alpha,
  useTheme,
  styled,
  Snackbar,
} from '@mui/material';
import {
  Payment as PaymentIcon,
  CreditCard as CreditCardIcon,
  AccountBalance as AccountBalanceIcon,
  Payments as PaymentsIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { PaymentGatewayForm, StripeWebhookDialog, PayPalWebhookDialog, RazorpayWebhookDialog } from '@/components/Payments';
import { PaymentGateway } from '@/components/Payments/types';
import { WidgetCard, containerVariants, itemVariants } from '@/components/Dashboard/DashboardComponents';

// Styled components
const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
    height: 3,
    borderRadius: '3px 3px 0 0',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.875rem',
  padding: theme.spacing(1.5, 2),
  transition: 'all 0.2s',
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
  },
}));

const GatewayIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  borderRadius: 8,
  marginRight: theme.spacing(1),
}));

// Initial payment gateway configurations
const initialPaymentGateways: PaymentGateway[] = [
  {
    id: 'stripe',
    name: 'Stripe',
    enabled: false,
    testMode: true,
    config: {
      publishableKey: '',
      secretKey: '',
      webhookSecret: '',
    },
    supportedCurrencies: ['USD', 'EUR', 'GBP', 'INR', 'AUD', 'CAD'],
    supportedPaymentMethods: ['card', 'apple_pay', 'google_pay', 'sepa_debit'],
    icon: <CreditCardIcon />,
    color: '#635BFF',
    description: 'Accept payments via credit card, Apple Pay, Google Pay, and more.',
    webhookUrl: '/api/payments/webhook?gateway=stripe',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    enabled: false,
    testMode: true,
    config: {
      clientId: '',
      clientSecret: '',
      webhookId: '',
    },
    supportedCurrencies: ['USD', 'EUR', 'GBP', 'AUD', 'CAD'],
    supportedPaymentMethods: ['paypal', 'card', 'venmo'],
    icon: <AccountBalanceIcon />,
    color: '#003087',
    description: 'Accept payments via PayPal, credit cards, and Venmo.',
    webhookUrl: '/api/payments/webhook?gateway=paypal',
  },
  {
    id: 'razorpay',
    name: 'Razorpay',
    enabled: false,
    testMode: true,
    config: {
      keyId: '',
      keySecret: '',
      webhookSecret: '',
    },
    supportedCurrencies: ['INR'],
    supportedPaymentMethods: ['card', 'netbanking', 'wallet', 'upi'],
    icon: <PaymentIcon />,
    color: '#2D88FF',
    description: 'Accept payments via credit card, net banking, UPI, and wallets in India.',
    webhookUrl: '/api/payments/webhook?gateway=razorpay',
  },
];

export default function PaymentsPage() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [paymentGateways, setPaymentGateways] = useState<PaymentGateway[]>(initialPaymentGateways);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info' | 'warning';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });
  const [selectedGateway, setSelectedGateway] = useState<PaymentGateway>(initialPaymentGateways[0]);
  const [showSecrets, setShowSecrets] = useState(false);
  const [webhookDialogOpen, setWebhookDialogOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Show snackbar
  const showSnackbar = (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  // Fetch payment gateways
  useEffect(() => {
    const fetchPaymentGateways = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/payments');
        if (!response.ok) {
          throw new Error('Failed to fetch payment gateways');
        }
        const data = await response.json();
        
        // Merge with UI data to ensure we have all the necessary properties
        const mergedData = data.map((gateway: any) => {
          const uiData = initialPaymentGateways.find(g => g.id === gateway.id);
          if (!uiData) return null;
          return { 
            ...uiData, 
            ...gateway,
            icon: uiData.icon, // Keep the icon from UI data
          };
        }).filter(Boolean);
        
        if (mergedData.length > 0) {
          setPaymentGateways(mergedData);
          setSelectedGateway(mergedData[0]);
        }
      } catch (err) {
        console.error('Error fetching payment gateways:', err);
        showSnackbar('Failed to fetch payment gateways. Using default configurations.', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentGateways();
  }, []);

  // Handle tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    setSelectedGateway(paymentGateways[newValue]);
    setShowSecrets(false);
  };

  // Handle gateway toggle
  const handleGatewayToggle = async (enabled: boolean) => {
    try {
      setLoading(true);
      
      // Update the gateway in the API
      const updatedGateway = { ...selectedGateway, enabled };
      
      const response = await fetch('/api/payments', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedGateway),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update payment gateway');
      }
      
      const data = await response.json();
      
      // Update the gateway in the local state
      setPaymentGateways(paymentGateways.map(g => 
        g.id === selectedGateway.id ? { ...g, enabled } : g
      ));
      
      setSelectedGateway({ ...selectedGateway, enabled });
      
      showSnackbar(`${updatedGateway.name} has been ${enabled ? 'enabled' : 'disabled'}.`, 'success');
    } catch (err) {
      console.error('Error updating payment gateway:', err);
      showSnackbar('Failed to update payment gateway. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Handle test mode toggle
  const handleTestModeToggle = async (testMode: boolean) => {
    try {
      setLoading(true);
      
      // Update the gateway in the API
      const updatedGateway = { ...selectedGateway, testMode };
      
      const response = await fetch('/api/payments', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedGateway),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update payment gateway');
      }
      
      const data = await response.json();
      
      // Update the gateway in the local state
      setPaymentGateways(paymentGateways.map(g => 
        g.id === selectedGateway.id ? { ...g, testMode } : g
      ));
      
      setSelectedGateway({ ...selectedGateway, testMode });
      
      showSnackbar(`${updatedGateway.name} is now in ${testMode ? 'test' : 'live'} mode.`, 'success');
    } catch (err) {
      console.error('Error updating payment gateway:', err);
      showSnackbar('Failed to update payment gateway. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Handle config update
  const handleConfigUpdate = (field: string, value: string) => {
    // Update the gateway config in the local state
    const updatedConfig = { ...selectedGateway.config, [field]: value };
    const updatedGateway = { ...selectedGateway, config: updatedConfig };
    
    setSelectedGateway(updatedGateway);
  };

  // Handle save config
  const handleSaveConfig = async () => {
    try {
      setLoading(true);
      
      const response = await fetch('/api/payments', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedGateway),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update payment gateway');
      }
      
      const data = await response.json();
      
      // Update the gateway in the local state
      setPaymentGateways(paymentGateways.map(g => 
        g.id === selectedGateway.id ? selectedGateway : g
      ));
      
      showSnackbar(`${selectedGateway.name} configuration has been saved.`, 'success');
    } catch (err) {
      console.error('Error saving config:', err);
      showSnackbar('Failed to save configuration. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Handle copy to clipboard
  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Handle webhook dialog open
  const handleOpenWebhookDialog = () => {
    setWebhookDialogOpen(true);
  };

  // Handle webhook dialog close
  const handleCloseWebhookDialog = () => {
    setWebhookDialogOpen(false);
  };

  // Render webhook dialog based on gateway
  const renderWebhookDialog = () => {
    // Use an empty string as fallback for server-side rendering
    // The actual origin will be set on the client side
    const origin = typeof window === 'undefined' ? '' : window.location.origin;
    const webhookUrl = `${origin}${selectedGateway.webhookUrl}`;
    
    switch (selectedGateway.id) {
      case 'stripe':
        return (
          <StripeWebhookDialog
            open={webhookDialogOpen}
            onClose={handleCloseWebhookDialog}
            gatewayName={selectedGateway.name}
            webhookUrl={webhookUrl}
          />
        );
      case 'paypal':
        return (
          <PayPalWebhookDialog
            open={webhookDialogOpen}
            onClose={handleCloseWebhookDialog}
            gatewayName={selectedGateway.name}
            webhookUrl={webhookUrl}
          />
        );
      case 'razorpay':
        return (
          <RazorpayWebhookDialog
            open={webhookDialogOpen}
            onClose={handleCloseWebhookDialog}
            gatewayName={selectedGateway.name}
            webhookUrl={webhookUrl}
          />
        );
      default:
        return null;
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
          <PaymentsIcon 
            sx={{ 
              fontSize: 40, 
              color: theme.palette.primary.main,
              filter: `drop-shadow(0 2px 4px ${alpha(theme.palette.primary.main, 0.4)})`
            }} 
          />
          <Box>
            <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
              Payment Gateways
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Configure payment gateways to accept payments on your website
            </Typography>
          </Box>
        </Box>
      </Box>

      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <WidgetCard>
          {/* Payment Gateway Tabs */}
          <StyledTabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ mb: 3 }}
          >
            {paymentGateways.map((gateway) => (
              <StyledTab
                key={gateway.id}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <GatewayIcon
                      sx={{
                        color: gateway.color,
                        bgcolor: alpha(gateway.color, 0.1),
                      }}
                    >
                      {gateway.icon}
                    </GatewayIcon>
                    {gateway.name}
                    {gateway.enabled ? (
                      <Chip
                        label="Enabled"
                        size="small"
                        color="success"
                        sx={{ ml: 1, height: 20, fontSize: '0.7rem' }}
                      />
                    ) : (
                      <Chip
                        label="Disabled"
                        size="small"
                        color="default"
                        sx={{ ml: 1, height: 20, fontSize: '0.7rem' }}
                      />
                    )}
                  </Box>
                }
              />
            ))}
          </StyledTabs>
          
          {/* Gateway Configuration */}
          <Box>
            {loading && !selectedGateway ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
              </Box>
            ) : (
              <PaymentGatewayForm
                gateway={selectedGateway}
                onToggleEnabled={handleGatewayToggle}
                onToggleTestMode={handleTestModeToggle}
                onUpdateConfig={handleConfigUpdate}
                onSave={handleSaveConfig}
                loading={loading}
                showSecrets={showSecrets}
                onToggleShowSecrets={() => setShowSecrets(!showSecrets)}
                copiedField={copiedField}
                onCopy={handleCopy}
                onOpenWebhookDialog={handleOpenWebhookDialog}
              />
            )}
          </Box>
        </WidgetCard>
      </motion.div>
      
      {/* Webhook Dialog */}
      {renderWebhookDialog()}

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity}
          variant="filled"
          sx={{ borderRadius: 2 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

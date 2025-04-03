import { ReactNode } from 'react';

// Define types for payment gateway config
export interface StripeConfig {
  publishableKey: string;
  secretKey: string;
  webhookSecret: string;
}

export interface PayPalConfig {
  clientId: string;
  clientSecret: string;
  webhookId: string;
}

export interface RazorpayConfig {
  keyId: string;
  keySecret: string;
  webhookSecret: string;
}

export type PaymentGatewayConfig = StripeConfig | PayPalConfig | RazorpayConfig;

// Define type for payment gateway
export interface PaymentGateway {
  id: string;
  name: string;
  enabled: boolean;
  testMode: boolean;
  config: PaymentGatewayConfig;
  supportedCurrencies: string[];
  supportedPaymentMethods: string[];
  icon: JSX.Element;
  color: string;
  description: string;
  webhookUrl: string;
}

// Define props for webhook dialogs
export interface WebhookDialogProps {
  open: boolean;
  onClose: () => void;
  gatewayName: string;
  webhookUrl: string;
}

// Define props for payment gateway form
export interface PaymentGatewayFormProps {
  gateway: PaymentGateway;
  onToggleEnabled: (enabled: boolean) => Promise<void>;
  onToggleTestMode: (testMode: boolean) => Promise<void>;
  onUpdateConfig: (field: string, value: string) => void;
  onSave: () => Promise<void>;
  loading: boolean;
  showSecrets: boolean;
  onToggleShowSecrets: () => void;
  copiedField: string | null;
  onCopy: (text: string, field: string) => void;
  onOpenWebhookDialog: () => void;
}

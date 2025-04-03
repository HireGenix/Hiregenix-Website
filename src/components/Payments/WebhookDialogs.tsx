import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { WebhookDialogProps } from './types';

export const StripeWebhookDialog: React.FC<WebhookDialogProps> = ({
  open,
  onClose,
  gatewayName,
  webhookUrl,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>Webhook Configuration for {gatewayName}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" paragraph>
          Webhooks allow {gatewayName} to send notifications to your application when events occur, such as successful payments or refunds.
        </Typography>
        
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          How to set up webhooks:
        </Typography>
        
        <Box component="ol" sx={{ pl: 2 }}>
          <li>
            <Typography variant="body2" paragraph>
              Go to the Stripe Dashboard and navigate to Developers &gt; Webhooks.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              Click "Add endpoint" and enter the webhook URL shown above.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              Select the events you want to receive, such as <code>payment_intent.succeeded</code> and <code>payment_intent.payment_failed</code>.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              Click "Add endpoint" to create the webhook.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              Copy the "Signing secret" and paste it into the "Webhook Secret" field in the API Credentials section.
            </Typography>
          </li>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export const PayPalWebhookDialog: React.FC<WebhookDialogProps> = ({
  open,
  onClose,
  gatewayName,
  webhookUrl,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>Webhook Configuration for {gatewayName}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" paragraph>
          Webhooks allow {gatewayName} to send notifications to your application when events occur, such as successful payments or refunds.
        </Typography>
        
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          How to set up webhooks:
        </Typography>
        
        <Box component="ol" sx={{ pl: 2 }}>
          <li>
            <Typography variant="body2" paragraph>
              Go to the PayPal Developer Dashboard and navigate to My Apps &gt; [Your App] &gt; Webhooks.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              Click "Add Webhook" and enter the webhook URL shown above.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              Select the events you want to receive, such as <code>PAYMENT.CAPTURE.COMPLETED</code> and <code>PAYMENT.CAPTURE.DENIED</code>.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              Click "Save" to create the webhook.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              Copy the "Webhook ID" and paste it into the "Webhook ID" field in the API Credentials section.
            </Typography>
          </li>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export const RazorpayWebhookDialog: React.FC<WebhookDialogProps> = ({
  open,
  onClose,
  gatewayName,
  webhookUrl,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>Webhook Configuration for {gatewayName}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" paragraph>
          Webhooks allow {gatewayName} to send notifications to your application when events occur, such as successful payments or refunds.
        </Typography>
        
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          How to set up webhooks:
        </Typography>
        
        <Box component="ol" sx={{ pl: 2 }}>
          <li>
            <Typography variant="body2" paragraph>
              Go to the Razorpay Dashboard and navigate to Settings &gt; Webhooks.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              Click "Add New Webhook" and enter the webhook URL shown above.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              Select the events you want to receive, such as <code>payment.authorized</code> and <code>payment.failed</code>.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              Set the "Active" toggle to "Yes".
            </Typography>
          </li>
          <li>
            <Typography variant="body2" paragraph>
              Create a secret and paste it into the "Webhook Secret" field in the API Credentials section.
            </Typography>
          </li>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

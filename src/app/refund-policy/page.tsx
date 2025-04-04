'use client';

import React from 'react';
import { Layout } from '@/components/Layout';
import {
  Box,
  Container,
  Typography,
  Paper,
  alpha,
  useTheme,
  Breadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SEOMetadata } from '@/components/SEO';

export default function RefundPolicyPage() {
  const theme = useTheme();

  return (
    <Layout>
      <SEOMetadata 
        seoData={{
          title: "Returns and Refund Policy | HireGenix",
          description: "HireGenix returns and refund policy for our AI-powered recruitment platform services. Learn about our refund terms and conditions.",
          keywords: "HireGenix refund, recruitment platform refund policy, AI recruitment returns",
          canonicalUrl: "/refund-policy"
        }} 
      />
      
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Section */}
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: 'url(/hero-pattern.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 1,
            }}
          />
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Breadcrumbs 
              aria-label="breadcrumb" 
              sx={{ 
                mb: 3,
                '& .MuiBreadcrumbs-ol': {
                  color: 'white',
                },
                '& .MuiBreadcrumbs-li a': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&:hover': {
                    color: 'white',
                  },
                },
                '& .MuiBreadcrumbs-separator': {
                  color: 'rgba(255, 255, 255, 0.5)',
                }
              }}
            >
              <MuiLink component={Link} href="/" color="inherit">
                Home
              </MuiLink>
              <Typography color="white">Returns and Refund Policy</Typography>
            </Breadcrumbs>
            
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Returns and Refund Policy
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 400,
                opacity: 0.9,
                maxWidth: 800,
              }}
            >
              Our policy regarding refunds and cancellations for HireGenix services
            </Typography>
          </Container>
        </Box>

        {/* Content Section */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Paper
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.8)}, ${alpha(theme.palette.background.default, 0.9)})`,
              backdropFilter: 'blur(20px) saturate(180%)',
              border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
              boxShadow: `
                0 4px 8px ${alpha(theme.palette.primary.main, 0.05)},
                0 12px 24px ${alpha(theme.palette.common.black, 0.05)}
              `,
            }}
            component={motion.div}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography variant="body1" paragraph>
              Last Updated: August 3, 2025
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              1. Introduction
            </Typography>
            <Typography variant="body1" paragraph>
              This Returns and Refund Policy ("Policy") outlines the terms and conditions regarding refunds, returns, and cancellations for services provided by HireGenix, a brand of Trayarunya Ventures Private Limited/LLC ("we," "our," or "us"). By subscribing to or using our services, you agree to be bound by this Policy.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              2. Subscription Services
            </Typography>
            <Typography variant="body1" paragraph>
              2.1. HireGenix primarily offers subscription-based services for our AI-powered recruitment platform. These subscriptions may be billed monthly, quarterly, or annually, as selected by you during the sign-up process.
            </Typography>
            <Typography variant="body1" paragraph>
              2.2. Due to the digital nature of our services, we do not offer traditional "returns" as might be applicable to physical products.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              3. Free Trial Period
            </Typography>
            <Typography variant="body1" paragraph>
              3.1. We may offer a free trial period for new users to evaluate our services. The duration of the free trial period will be specified at the time of sign-up.
            </Typography>
            <Typography variant="body1" paragraph>
              3.2. You will not be charged during the free trial period. However, we may require payment information to be provided at the time of sign-up.
            </Typography>
            <Typography variant="body1" paragraph>
              3.3. If you do not cancel your subscription before the end of the free trial period, you will be automatically charged for the subscription plan you selected during sign-up.
            </Typography>
            <Typography variant="body1" paragraph>
              3.4. You may cancel your subscription at any time during the free trial period without incurring any charges.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              4. Refund Policy
            </Typography>
            <Typography variant="body1" paragraph>
              4.1. <strong>Monthly Subscriptions:</strong> For monthly subscription plans, we do not offer prorated refunds for partial months. If you cancel your subscription, you will continue to have access to the services until the end of your current billing cycle, after which your subscription will not renew.
            </Typography>
            <Typography variant="body1" paragraph>
              4.2. <strong>Annual Subscriptions:</strong> For annual subscription plans, we offer a 30-day money-back guarantee from the date of purchase or renewal. If you are not satisfied with our services, you may request a full refund within 30 days of your purchase or renewal date. After the 30-day period, we do not offer refunds for the unused portion of your annual subscription.
            </Typography>
            <Typography variant="body1" paragraph>
              4.3. <strong>Enterprise Plans:</strong> Refund policies for enterprise or custom plans are governed by the specific terms outlined in the service agreement signed between HireGenix and the client.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              5. Eligibility for Refunds
            </Typography>
            <Typography variant="body1" paragraph>
              5.1. To be eligible for a refund, you must submit your refund request within the applicable refund period as specified in Section 4.
            </Typography>
            <Typography variant="body1" paragraph>
              5.2. Refund requests must be submitted in writing to our customer support team at billing@hiregenix.com, including your account information and the reason for your refund request.
            </Typography>
            <Typography variant="body1" paragraph>
              5.3. We reserve the right to deny refund requests that do not comply with this Policy or that we determine, in our sole discretion, are fraudulent or abusive.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              6. Exceptions to Refund Policy
            </Typography>
            <Typography variant="body1" paragraph>
              6.1. <strong>Service Disruptions:</strong> In the event of significant service disruptions or outages that materially affect your ability to use our services, we may, at our discretion, offer partial or full refunds or service credits, even outside the standard refund periods.
            </Typography>
            <Typography variant="body1" paragraph>
              6.2. <strong>Special Promotions:</strong> Special promotions, discounts, or limited-time offers may have different refund terms, which will be specified at the time of the offer.
            </Typography>
            <Typography variant="body1" paragraph>
              6.3. <strong>Pay-Per-Use Features:</strong> For any pay-per-use features or one-time purchases within our platform, refunds are generally not available once the feature has been used or the service has been delivered.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              7. Cancellation Policy
            </Typography>
            <Typography variant="body1" paragraph>
              7.1. You may cancel your subscription at any time through your account settings on our website or by contacting our customer support team.
            </Typography>
            <Typography variant="body1" paragraph>
              7.2. For monthly subscriptions, cancellation will take effect at the end of your current billing cycle.
            </Typography>
            <Typography variant="body1" paragraph>
              7.3. For annual subscriptions, cancellation will take effect at the end of your current annual subscription period, unless you are eligible for a refund as specified in Section 4.2.
            </Typography>
            <Typography variant="body1" paragraph>
              7.4. If you cancel your subscription, you will lose access to our services at the end of your current billing period. We do not provide partial refunds for unused periods of your subscription.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              8. Refund Processing
            </Typography>
            <Typography variant="body1" paragraph>
              8.1. Approved refunds will be processed within 10 business days from the date of approval.
            </Typography>
            <Typography variant="body1" paragraph>
              8.2. Refunds will be issued using the same payment method used for the original purchase. If this is not possible, we will work with you to determine an alternative refund method.
            </Typography>
            <Typography variant="body1" paragraph>
              8.3. Depending on your payment provider, it may take additional time for the refund to appear in your account.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              9. Account Termination
            </Typography>
            <Typography variant="body1" paragraph>
              9.1. We reserve the right to terminate or suspend your account and access to our services for violations of our Terms of Service or other applicable policies.
            </Typography>
            <Typography variant="body1" paragraph>
              9.2. In the event of account termination due to policy violations, we may, at our sole discretion, deny refund requests, even if they would otherwise be eligible under this Policy.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              10. Changes to This Policy
            </Typography>
            <Typography variant="body1" paragraph>
              10.1. We reserve the right to modify this Policy at any time. We will provide notice of significant changes by posting the updated Policy on our website and updating the "Last Updated" date.
            </Typography>
            <Typography variant="body1" paragraph>
              10.2. Your continued use of our services after such modifications constitutes your acceptance of the revised Policy.
            </Typography>
            <Typography variant="body1" paragraph>
              10.3. The Policy in effect at the time of your purchase will apply to that purchase, regardless of future changes to the Policy.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              11. Contact Information
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions about this Returns and Refund Policy, please contact us at:
            </Typography>
            <Typography variant="body1" paragraph>
              HireGenix - A brand of Trayarunya Ventures Private Limited/LLC<br />
              Email: billing@hiregenix.com<br />
              Address: [Company Address]
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Layout>
  );
}

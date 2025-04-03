'use client';

import React from 'react';
import { Layout } from '@/components/Layout';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  alpha,
  useTheme,
  Breadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SEOMetadata } from '@/components/SEO';

export default function TermsPage() {
  const theme = useTheme();

  return (
    <Layout>
      <SEOMetadata 
        seoData={{
          title: "Terms and Conditions | HireGenix",
          description: "Terms and conditions for using HireGenix recruitment platform services. Read our legal terms before using our AI-powered recruitment solutions.",
          keywords: "HireGenix terms, recruitment platform terms, AI recruitment legal terms",
          ogUrl: "/terms"
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
              <Typography color="white">Terms and Conditions</Typography>
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
              Terms and Conditions
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
              Please read these terms and conditions carefully before using HireGenix services
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
              Welcome to HireGenix ("we," "our," or "us"), a brand of Trayarunya Ventures Private Limited/LLC. These Terms and Conditions ("Terms") govern your access to and use of the HireGenix platform, website, and services (collectively, the "Services").
            </Typography>
            <Typography variant="body1" paragraph>
              By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Services.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              2. Definitions
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>"Account"</strong> means a unique account created for you to access our Services.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>"Platform"</strong> refers to the HireGenix website and recruitment platform.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>"User"</strong> refers to individuals who register on our platform to use our Services.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>"Client"</strong> refers to businesses or organizations that use our Services for recruitment purposes.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>"Candidate"</strong> refers to individuals who are evaluated through our platform for potential employment.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              3. Account Registration
            </Typography>
            <Typography variant="body1" paragraph>
              3.1. You must be at least 18 years old to create an account and use our Services.
            </Typography>
            <Typography variant="body1" paragraph>
              3.2. You must provide accurate, current, and complete information during the registration process.
            </Typography>
            <Typography variant="body1" paragraph>
              3.3. You are responsible for safeguarding your account credentials and for all activities that occur under your account.
            </Typography>
            <Typography variant="body1" paragraph>
              3.4. You must notify us immediately of any breach of security or unauthorized use of your account.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              4. Services Description
            </Typography>
            <Typography variant="body1" paragraph>
              4.1. HireGenix provides AI-powered recruitment solutions, including candidate sourcing, assessment, video interviews, and analytics.
            </Typography>
            <Typography variant="body1" paragraph>
              4.2. We reserve the right to modify, suspend, or discontinue any part of our Services at any time without prior notice.
            </Typography>
            <Typography variant="body1" paragraph>
              4.3. The quality and availability of certain features may depend on various factors, including your internet connection and device compatibility.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              5. Subscription and Payments
            </Typography>
            <Typography variant="body1" paragraph>
              5.1. Access to certain features of our Services may require payment of subscription fees.
            </Typography>
            <Typography variant="body1" paragraph>
              5.2. Subscription fees are billed in advance on a recurring basis according to the billing cycle you select.
            </Typography>
            <Typography variant="body1" paragraph>
              5.3. You authorize us to charge the applicable fees to your designated payment method.
            </Typography>
            <Typography variant="body1" paragraph>
              5.4. All fees are exclusive of taxes unless stated otherwise. You are responsible for paying all taxes associated with your use of our Services.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              6. User Conduct
            </Typography>
            <Typography variant="body1" paragraph>
              6.1. You agree not to use our Services to:
            </Typography>
            <Typography variant="body1" component="div" sx={{ pl: 3 }}>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Distribute malware or other harmful code</li>
                <li>Interfere with or disrupt the Services</li>
                <li>Engage in discriminatory hiring practices</li>
                <li>Collect or harvest data from our Services without authorization</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph>
              6.2. We reserve the right to terminate or suspend your account for violations of these Terms.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              7. Intellectual Property
            </Typography>
            <Typography variant="body1" paragraph>
              7.1. The Services and all content, features, and functionality thereof, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, and the design, selection, and arrangement thereof, are owned by HireGenix, its licensors, or other providers and are protected by copyright, trademark, and other intellectual property laws.
            </Typography>
            <Typography variant="body1" paragraph>
              7.2. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without our prior written consent.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              8. Data Privacy
            </Typography>
            <Typography variant="body1" paragraph>
              8.1. Our Privacy Policy governs the collection, use, and disclosure of personal information provided by users of our Services.
            </Typography>
            <Typography variant="body1" paragraph>
              8.2. By using our Services, you consent to the collection and use of your information as described in our Privacy Policy.
            </Typography>
            <Typography variant="body1" paragraph>
              8.3. Clients are responsible for ensuring they have the necessary rights and consents to share candidate data with our platform.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              9. Limitation of Liability
            </Typography>
            <Typography variant="body1" paragraph>
              9.1. To the maximum extent permitted by law, HireGenix and its affiliates, officers, employees, agents, partners, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </Typography>
            <Typography variant="body1" component="div" sx={{ pl: 3 }}>
              <ul>
                <li>Your access to or use of or inability to access or use the Services</li>
                <li>Any conduct or content of any third party on the Services</li>
                <li>Any content obtained from the Services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph>
              9.2. Our total liability for any claim arising out of or relating to these Terms or our Services shall not exceed the amount paid by you to HireGenix during the 12 months preceding the claim.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              10. Disclaimer of Warranties
            </Typography>
            <Typography variant="body1" paragraph>
              10.1. The Services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied.
            </Typography>
            <Typography variant="body1" paragraph>
              10.2. HireGenix does not warrant that the Services will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected.
            </Typography>
            <Typography variant="body1" paragraph>
              10.3. HireGenix does not guarantee specific employment outcomes or the quality of candidates identified through our platform.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              11. Indemnification
            </Typography>
            <Typography variant="body1" paragraph>
              You agree to indemnify, defend, and hold harmless HireGenix and its affiliates, officers, directors, employees, agents, and licensors from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms or any activity related to your account.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              12. Governing Law
            </Typography>
            <Typography variant="body1" paragraph>
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              13. Changes to Terms
            </Typography>
            <Typography variant="body1" paragraph>
              13.1. We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website and updating the "Last Updated" date.
            </Typography>
            <Typography variant="body1" paragraph>
              13.2. Your continued use of the Services after such modifications constitutes your acceptance of the revised Terms.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              14. Contact Information
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions about these Terms, please contact us at:
            </Typography>
            <Typography variant="body1" paragraph>
              HireGenix - A brand of Trayarunya Ventures Private Limited/LLC<br />
              Email: legal@hiregenix.com<br />
              Address: [Company Address]
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Layout>
  );
}

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

export default function DisclaimerPage() {
  const theme = useTheme();

  return (
    <Layout>
      <SEOMetadata 
        seoData={{
          title: "Disclaimer | HireGenix",
          description: "HireGenix disclaimer regarding the use of our AI-powered recruitment platform and services. Read our legal disclaimers before using our services.",
          keywords: "HireGenix disclaimer, recruitment platform disclaimer, AI recruitment legal disclaimer",
          ogUrl: "/disclaimer"
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
              <Typography color="white">Disclaimer</Typography>
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
              Disclaimer
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
              Important information about the use of HireGenix services
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
              This disclaimer ("Disclaimer") applies to the HireGenix platform, website, and services (collectively, the "Services") operated by Trayarunya Ventures Private Limited/LLC ("we," "our," or "us"). By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              2. No Professional Advice
            </Typography>
            <Typography variant="body1" paragraph>
              2.1. The information provided through our Services is for general informational purposes only and should not be construed as professional advice, including but not limited to legal, financial, tax, or human resources advice.
            </Typography>
            <Typography variant="body1" paragraph>
              2.2. You should consult with qualified professionals before making any decisions based on information obtained through our Services.
            </Typography>
            <Typography variant="body1" paragraph>
              2.3. We do not guarantee that the information provided through our Services is accurate, complete, or up-to-date, and we are not responsible for any errors or omissions, or for the results obtained from the use of such information.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              3. AI and Automated Systems
            </Typography>
            <Typography variant="body1" paragraph>
              3.1. Our Services utilize artificial intelligence and automated systems to analyze data, match candidates with job opportunities, and provide insights to employers.
            </Typography>
            <Typography variant="body1" paragraph>
              3.2. While we strive to ensure the accuracy and fairness of our AI systems, they have inherent limitations and may not be perfect. The results and recommendations provided by our AI systems should be considered as suggestions rather than definitive assessments.
            </Typography>
            <Typography variant="body1" paragraph>
              3.3. Users should apply their own judgment and expertise when making decisions based on information or recommendations provided by our AI systems.
            </Typography>
            <Typography variant="body1" paragraph>
              3.4. We do not guarantee that our AI systems will identify the best candidates for every position or that candidates identified through our platform will be suitable for your specific needs.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              4. No Guarantees
            </Typography>
            <Typography variant="body1" paragraph>
              4.1. We do not guarantee any specific outcomes or results from using our Services, including but not limited to:
            </Typography>
            <Typography variant="body1" component="div" sx={{ pl: 3 }}>
              <ul>
                <li>Successfully hiring qualified candidates</li>
                <li>Reducing time-to-hire or recruitment costs</li>
                <li>Improving the quality of hires</li>
                <li>Eliminating bias in the recruitment process</li>
                <li>Securing employment for candidates</li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph>
              4.2. The success of your recruitment efforts depends on various factors beyond our control, including but not limited to your specific requirements, the available talent pool, market conditions, and how you use our Services.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              5. Third-Party Content and Links
            </Typography>
            <Typography variant="body1" paragraph>
              5.1. Our Services may contain content provided by third parties or links to third-party websites or resources. We do not control, endorse, or assume responsibility for any third-party content or websites.
            </Typography>
            <Typography variant="body1" paragraph>
              5.2. Your use of any third-party content or websites is at your own risk and subject to the terms and conditions of such third parties.
            </Typography>
            <Typography variant="body1" paragraph>
              5.3. We are not responsible for any loss or damage that may arise from your use of third-party content or websites.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              6. Compliance with Laws
            </Typography>
            <Typography variant="body1" paragraph>
              6.1. You are responsible for ensuring that your use of our Services complies with all applicable laws, regulations, and industry standards, including but not limited to:
            </Typography>
            <Typography variant="body1" component="div" sx={{ pl: 3 }}>
              <ul>
                <li>Employment and labor laws</li>
                <li>Anti-discrimination laws</li>
                <li>Data protection and privacy laws</li>
                <li>Intellectual property laws</li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph>
              6.2. We do not guarantee that our Services comply with all laws and regulations in all jurisdictions. You should seek legal advice to ensure your use of our Services complies with applicable laws in your jurisdiction.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              7. Limitation of Liability
            </Typography>
            <Typography variant="body1" paragraph>
              7.1. To the maximum extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, resulting from:
            </Typography>
            <Typography variant="body1" component="div" sx={{ pl: 3 }}>
              <ul>
                <li>Your use of or inability to use our Services</li>
                <li>Any decisions made based on information or recommendations provided through our Services</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Statements or conduct of any third party on our Services</li>
                <li>Any other matter relating to our Services</li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph>
              7.2. This limitation of liability applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damages.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              8. Indemnification
            </Typography>
            <Typography variant="body1" paragraph>
              You agree to indemnify, defend, and hold harmless HireGenix, its affiliates, officers, directors, employees, agents, and licensors from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of this Disclaimer or any activity related to your use of our Services.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              9. Changes to this Disclaimer
            </Typography>
            <Typography variant="body1" paragraph>
              9.1. We reserve the right to modify this Disclaimer at any time. We will provide notice of significant changes by posting the updated Disclaimer on our website and updating the "Last Updated" date.
            </Typography>
            <Typography variant="body1" paragraph>
              9.2. Your continued use of the Services after such modifications constitutes your acceptance of the revised Disclaimer.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              10. Governing Law
            </Typography>
            <Typography variant="body1" paragraph>
              This Disclaimer shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              11. Contact Information
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions about this Disclaimer, please contact us at:
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

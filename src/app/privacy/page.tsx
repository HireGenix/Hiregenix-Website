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

export default function PrivacyPolicyPage() {
  const theme = useTheme();

  return (
    <Layout>
      <SEOMetadata 
        seoData={{
          title: "Privacy Policy | HireGenix",
          description: "HireGenix privacy policy explains how we collect, use, and protect your personal information when using our AI-powered recruitment platform.",
          keywords: "HireGenix privacy, recruitment data privacy, AI recruitment privacy policy",
          ogUrl: "/privacy"
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
              <Typography color="white">Privacy Policy</Typography>
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
              Privacy Policy
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
              How we collect, use, and protect your personal information
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
              HireGenix ("we," "our," or "us"), a brand of Trayarunya Ventures Private Limited/LLC, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our recruitment platform, website, and services (collectively, the "Services").
            </Typography>
            <Typography variant="body1" paragraph>
              Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              2. Information We Collect
            </Typography>
            <Typography variant="body1" paragraph>
              We collect several types of information from and about users of our Services:
            </Typography>
            
            <Typography variant="h5" component="h4" fontWeight={600} sx={{ mt: 3, mb: 1 }}>
              2.1 Personal Information
            </Typography>
            <Typography variant="body1" paragraph>
              Depending on how you interact with our Services, we may collect:
            </Typography>
            <Typography variant="body1" component="div" sx={{ pl: 3 }}>
              <ul>
                <li>Contact information (such as name, email address, phone number, and postal address)</li>
                <li>Account credentials (such as username and password)</li>
                <li>Professional information (such as employment history, education, skills, certifications, and references)</li>
                <li>Demographic information (such as age, gender, and location)</li>
                <li>Payment information (such as credit card details and billing address)</li>
                <li>Profile pictures and other media you upload</li>
                <li>Video interview recordings and assessments</li>
              </ul>
            </Typography>
            
            <Typography variant="h5" component="h4" fontWeight={600} sx={{ mt: 3, mb: 1 }}>
              2.2 Usage Information
            </Typography>
            <Typography variant="body1" paragraph>
              We automatically collect certain information about your device and how you interact with our Services, including:
            </Typography>
            <Typography variant="body1" component="div" sx={{ pl: 3 }}>
              <ul>
                <li>Device information (such as IP address, browser type, operating system, and device identifiers)</li>
                <li>Usage data (such as pages visited, features used, time spent on the platform, and referring websites)</li>
                <li>Location data (such as general geographic location based on IP address)</li>
                <li>Log data (such as error reports, activity logs, and performance data)</li>
              </ul>
            </Typography>
            
            <Typography variant="h5" component="h4" fontWeight={600} sx={{ mt: 3, mb: 1 }}>
              2.3 Cookies and Similar Technologies
            </Typography>
            <Typography variant="body1" paragraph>
              We use cookies, web beacons, and similar technologies to collect information about your browsing activities and to distinguish you from other users of our Services. These technologies help us analyze trends, administer the website, track users' movements around the website, and gather demographic information about our user base as a whole.
            </Typography>
            <Typography variant="body1" paragraph>
              You can control cookies through your browser settings and other tools. However, if you block certain cookies, you may not be able to register, login, or access certain parts or make full use of the Services.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              3. How We Use Your Information
            </Typography>
            <Typography variant="body1" paragraph>
              We use the information we collect for various purposes, including to:
            </Typography>
            <Typography variant="body1" component="div" sx={{ pl: 3 }}>
              <ul>
                <li>Provide, maintain, and improve our Services</li>
                <li>Process and complete transactions</li>
                <li>Facilitate recruitment processes and candidate evaluations</li>
                <li>Personalize your experience and deliver content relevant to your interests</li>
                <li>Respond to your requests, comments, and questions</li>
                <li>Send administrative information, such as updates, security alerts, and support messages</li>
                <li>Conduct research and analysis to improve our Services</li>
                <li>Protect against, identify, and prevent fraud and other illegal activity</li>
                <li>Comply with our legal obligations</li>
                <li>Enforce our terms, conditions, and policies</li>
              </ul>
            </Typography>
            
            <Typography variant="h5" component="h4" fontWeight={600} sx={{ mt: 3, mb: 1 }}>
              3.1 AI and Automated Processing
            </Typography>
            <Typography variant="body1" paragraph>
              Our Services use artificial intelligence and automated processing to analyze candidate data, match candidates with job opportunities, and provide insights to employers. This may include:
            </Typography>
            <Typography variant="body1" component="div" sx={{ pl: 3 }}>
              <ul>
                <li>Analyzing resumes and professional profiles to identify skills and experience</li>
                <li>Evaluating video interviews to assess communication skills and other relevant attributes</li>
                <li>Generating candidate scores and rankings based on job requirements</li>
                <li>Providing recommendations to improve candidate profiles or job descriptions</li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph>
              We implement appropriate safeguards for such processing and are committed to using these technologies in a fair and transparent manner.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              4. How We Share Your Information
            </Typography>
            <Typography variant="body1" paragraph>
              We may share your information in the following circumstances:
            </Typography>
            
            <Typography variant="h5" component="h4" fontWeight={600} sx={{ mt: 3, mb: 1 }}>
              4.1 With Employers and Recruiters
            </Typography>
            <Typography variant="body1" paragraph>
              If you are a candidate, we may share your profile information, application materials, assessment results, and interview recordings with employers and recruiters who use our platform, in accordance with your privacy settings and preferences.
            </Typography>
            
            <Typography variant="h5" component="h4" fontWeight={600} sx={{ mt: 3, mb: 1 }}>
              4.2 With Service Providers
            </Typography>
            <Typography variant="body1" paragraph>
              We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf, such as hosting providers, payment processors, analytics providers, and customer support services.
            </Typography>
            
            <Typography variant="h5" component="h4" fontWeight={600} sx={{ mt: 3, mb: 1 }}>
              4.3 For Legal Reasons
            </Typography>
            <Typography variant="body1" paragraph>
              We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency). We may also disclose your information to:
            </Typography>
            <Typography variant="body1" component="div" sx={{ pl: 3 }}>
              <ul>
                <li>Enforce our rights arising from any contracts entered into between you and us</li>
                <li>Protect the rights, property, or safety of HireGenix, our customers, or others</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Services</li>
              </ul>
            </Typography>
            
            <Typography variant="h5" component="h4" fontWeight={600} sx={{ mt: 3, mb: 1 }}>
              4.4 Business Transfers
            </Typography>
            <Typography variant="body1" paragraph>
              If HireGenix is involved in a merger, acquisition, or sale of all or a portion of its assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your information, as well as any choices you may have regarding your information.
            </Typography>
            
            <Typography variant="h5" component="h4" fontWeight={600} sx={{ mt: 3, mb: 1 }}>
              4.5 With Your Consent
            </Typography>
            <Typography variant="body1" paragraph>
              We may share your information with third parties when you have given us your consent to do so.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              5. Data Retention
            </Typography>
            <Typography variant="body1" paragraph>
              We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. The criteria used to determine our retention periods include:
            </Typography>
            <Typography variant="body1" component="div" sx={{ pl: 3 }}>
              <ul>
                <li>The length of time we have an ongoing relationship with you</li>
                <li>Whether there is a legal obligation to which we are subject</li>
                <li>Whether retention is advisable in light of our legal position (such as in regard to applicable statutes of limitations, litigation, or regulatory investigations)</li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph>
              When we no longer need to use your information, we will take steps to securely delete or anonymize it.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              6. Data Security
            </Typography>
            <Typography variant="body1" paragraph>
              We have implemented appropriate technical and organizational measures to protect the security of your information. However, please understand that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
            </Typography>
            <Typography variant="body1" paragraph>
              We regularly review our security procedures and consider appropriate new security technology and methods. We also maintain physical, electronic, and procedural safeguards to protect your information. Our employees are trained on the importance of maintaining the confidentiality and security of your information.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              7. Your Rights and Choices
            </Typography>
            <Typography variant="body1" paragraph>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </Typography>
            <Typography variant="body1" component="div" sx={{ pl: 3 }}>
              <ul>
                <li>Access: You can request a copy of the personal information we hold about you.</li>
                <li>Correction: You can request that we correct inaccurate or incomplete information about you.</li>
                <li>Deletion: You can request that we delete your personal information in certain circumstances.</li>
                <li>Restriction: You can request that we restrict the processing of your information in certain circumstances.</li>
                <li>Data Portability: You can request a copy of the information you provided to us in a structured, commonly used, and machine-readable format.</li>
                <li>Objection: You can object to our processing of your personal information in certain circumstances.</li>
                <li>Withdrawal of Consent: You can withdraw your consent at any time where we rely on consent to process your personal information.</li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below. We may need to verify your identity before responding to your request.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              8. International Data Transfers
            </Typography>
            <Typography variant="body1" paragraph>
              Your information may be transferred to, and processed in, countries other than the country in which you are resident. These countries may have data protection laws that are different from the laws of your country.
            </Typography>
            <Typography variant="body1" paragraph>
              We have taken appropriate safeguards to ensure that your personal information remains protected in accordance with this Privacy Policy. These safeguards include implementing standard contractual clauses for transfers of personal information between our group companies and with our third-party service providers and partners.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              9. Children's Privacy
            </Typography>
            <Typography variant="body1" paragraph>
              Our Services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              10. Third-Party Links and Services
            </Typography>
            <Typography variant="body1" paragraph>
              Our Services may contain links to third-party websites, services, and applications that are not operated by us. When you click on a link to any other website or location, you will leave our Services and go to another site, and another entity may collect personal information from you. We have no control over, do not review, and cannot be responsible for these third-party websites or their content. Please be aware that the terms of this Privacy Policy do not apply to these third-party websites or their content, or to any collection of your personal information after you click on links to such third-party websites.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              11. Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date at the top of this Privacy Policy. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
            </Typography>
            <Typography variant="body1" paragraph>
              If we make material changes to this Privacy Policy, we will notify you either through the email address you have provided us or by placing a prominent notice on our website.
            </Typography>

            <Typography variant="h4" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
              12. Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </Typography>
            <Typography variant="body1" paragraph>
              HireGenix - A brand of Trayarunya Ventures Private Limited/LLC<br />
              Email: privacy@hiregenix.com<br />
              Address: [Company Address]
            </Typography>
            <Typography variant="body1" paragraph>
              We will respond to your request within a reasonable timeframe.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Layout>
  );
}

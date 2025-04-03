'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  alpha,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Support as SupportIcon,
  Schedule as ScheduleIcon,
  Security as SecurityIcon,
  Payments as PaymentsIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// FAQ data
const faqs = [
  {
    question: 'How can I schedule a demo of the HireGenix platform?',
    answer: 'You can schedule a demo by filling out the contact form above and selecting "Product Demo" as your inquiry type. Our team will reach out to you to arrange a convenient time for a personalized demonstration. We offer demos in multiple time zones to accommodate global clients.',
    icon: <ScheduleIcon />,
    category: 'Sales',
  },
  {
    question: 'What support options are available for HireGenix customers?',
    answer: 'HireGenix offers 24/7 technical support for all customers. We provide email support, phone support during business hours, and an extensive knowledge base with tutorials and guides. Enterprise customers also receive a dedicated account manager for personalized assistance.',
    icon: <SupportIcon />,
    category: 'Support',
  },
  {
    question: 'How long does implementation typically take?',
    answer: 'Implementation time varies depending on the size of your organization and specific requirements. Typically, basic implementation takes 2-4 weeks, while more complex integrations may take 4-8 weeks. Our implementation team works closely with you to ensure a smooth transition and proper configuration of the platform.',
    icon: <ScheduleIcon />,
    category: 'Implementation',
  },
  {
    question: 'Do you offer custom integrations with other HR systems?',
    answer: 'Yes, HireGenix can integrate with most popular HRIS, ATS, and other HR systems. We offer both standard integrations and custom integration services to ensure seamless data flow between systems. Our API is well-documented and our integration team can work with your IT department to create custom solutions.',
    icon: <CodeIcon />,
    category: 'Technical',
  },
  {
    question: 'How does HireGenix ensure data security and compliance?',
    answer: 'HireGenix takes data security very seriously. We are SOC 2 Type II certified and GDPR compliant. All data is encrypted both in transit and at rest, and we perform regular security audits. We also provide data processing agreements and can accommodate specific compliance requirements for different industries and regions.',
    icon: <SecurityIcon />,
    category: 'Security',
  },
  {
    question: 'What pricing plans are available for HireGenix?',
    answer: 'HireGenix offers flexible pricing plans to accommodate businesses of all sizes. We have subscription-based pricing with different tiers based on the number of users and features required. For detailed pricing information, please contact our sales team through the form above or visit our pricing page.',
    icon: <PaymentsIcon />,
    category: 'Pricing',
  },
];

const ContactFAQ: React.FC = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${alpha(theme.palette.background.paper, 0.5)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0)} 70%)`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.primary.main, 0)} 70%)`,
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Chip 
              label="FAQ" 
              color="secondary" 
              size="small"
              icon={<QuestionAnswerIcon />}
              sx={{ 
                mb: 2, 
                fontWeight: 600,
                background: alpha(theme.palette.secondary.main, 0.1),
                border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
                color: theme.palette.secondary.main,
              }} 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2rem', md: '2.75rem' },
                background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Frequently Asked Questions
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography
              variant="h5"
              component="p"
              color="text.secondary"
              sx={{ 
                maxWidth: '800px', 
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 400,
              }}
            >
              Quick answers to common questions about our platform and services
            </Typography>
          </motion.div>
        </Box>

        {/* FAQ Accordions */}
        <Box sx={{ mb: 6 }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Accordion
                sx={{
                  mb: 2,
                  borderRadius: '10px !important',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                    borderColor: alpha(theme.palette.primary.main, 0.2),
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  sx={{
                    backgroundColor: alpha(theme.palette.background.paper, 0.6),
                    '&.Mui-expanded': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.05),
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        flexShrink: 0,
                      }}
                    >
                      {faq.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {faq.question}
                      </Typography>
                      <Chip
                        label={faq.category}
                        size="small"
                        sx={{
                          mt: 0.5,
                          height: 20,
                          fontSize: '0.7rem',
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                    borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    px: 4,
                    py: 3,
                  }}
                >
                  <Typography variant="body1" color="text.secondary" sx={{ pl: 7, lineHeight: 1.7 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>

        {/* Additional help section */}
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          sx={{ 
            mt: 6, 
            p: 4,
            borderRadius: 4,
            background: `linear-gradient(135deg, ${alpha(theme.palette.info.light, 0.1)} 0%, ${alpha(theme.palette.info.main, 0.05)} 100%)`,
            border: `1px solid ${alpha(theme.palette.info.main, 0.2)}`,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              width: 70,
              height: 70,
              borderRadius: '50%',
              background: alpha(theme.palette.info.main, 0.1),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 3,
            }}
          >
            <QuestionAnswerIcon sx={{ fontSize: 35, color: theme.palette.info.main }} />
          </Box>
          <Typography variant="h4" component="h3" fontWeight={700} gutterBottom>
            Still Have Questions?
          </Typography>
          <Typography variant="body1" sx={{ mb: 0, fontSize: '1.1rem', color: 'text.secondary', maxWidth: 700, mx: 'auto' }}>
            If you couldn't find the answer to your question, please don't hesitate to contact us using the form above. Our team is always ready to help you with any inquiries you may have.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactFAQ;

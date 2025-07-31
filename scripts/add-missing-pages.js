#!/usr/bin/env node

/**
 * This script adds missing pages to the PostgreSQL database and updates the "Career" page to "Careers".
 * 
 * Usage:
 * node scripts/add-missing-pages.js
 */

const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

async function main() {
  console.log('Adding Missing Pages to PostgreSQL Database');
  console.log('==========================================');
  
  const prisma = new PrismaClient();
  
  try {
    // Get admin user
    const adminUser = await prisma.user.findFirst({ where: { role: 'ADMIN' } });
    
    if (!adminUser) {
      console.error('No admin user found. Please run the seed script first.');
      process.exit(1);
    }
    
    console.log(`Using admin user: ${adminUser.email}`);
    
    // Update "Career" to "Careers"
    const careerPage = await prisma.page.findUnique({
      where: { slug: 'career' },
    });
    
    if (careerPage) {
      console.log('Updating "Career" page to "Careers"...');
      await prisma.page.update({
        where: { id: careerPage.id },
        data: {
          title: 'Careers',
          slug: 'careers',
        },
      });
      console.log('Page updated successfully.');
    } else {
      console.log('Career page not found, creating a new Careers page...');
      await prisma.page.create({
        data: {
          title: 'Careers',
          slug: 'careers',
          status: 'PUBLISHED',
          seo: {
            title: 'Careers at HireGenix - Join Our Team',
            description: 'Explore exciting career opportunities at HireGenix. Find your dream job and join our innovative team.',
            keywords: 'careers, jobs, hiring, employment, opportunities, HireGenix',
          },
          sections: {
            create: [
              {
                name: 'Careers Hero',
                type: 'HERO',
                order: 0,
                content: {
                  heading: 'Join Our Team',
                  subheading: 'Explore exciting career opportunities at HireGenix and be part of our mission to transform recruitment with AI.',
                  backgroundImage: '/hero-pattern.svg',
                  backgroundOverlay: true,
                  textAlignment: 'center'
                }
              }
            ]
          }
        },
      });
      console.log('Careers page created successfully.');
    }
    
    // Define the missing pages to create
    const missingPages = [
      {
        title: 'Disclaimer',
        slug: 'disclaimer',
        status: 'PUBLISHED',
        sections: [
          {
            name: 'Disclaimer Hero',
            type: 'HERO',
            order: 0,
            content: {
              heading: 'Disclaimer',
              subheading: 'Important information about the use of HireGenix services',
              backgroundImage: '/hero-pattern.svg',
              backgroundOverlay: true,
              textAlignment: 'center'
            }
          },
          {
            name: 'Disclaimer Content',
            type: 'TEXT',
            order: 1,
            content: {
              heading: 'Disclaimer',
              content: `
                <p>Last Updated: August 3, 2025</p>
                
                <h3>1. Introduction</h3>
                <p>This disclaimer ("Disclaimer") applies to the HireGenix platform, website, and services (collectively, the "Services") operated by Trayarunya Ventures Private Limited/LLC ("we," "our," or "us"). By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer.</p>
                
                <h3>2. No Professional Advice</h3>
                <p>2.1. The information provided through our Services is for general informational purposes only and should not be construed as professional advice, including but not limited to legal, financial, tax, or human resources advice.</p>
                <p>2.2. You should consult with qualified professionals before making any decisions based on information obtained through our Services.</p>
                <p>2.3. We do not guarantee that the information provided through our Services is accurate, complete, or up-to-date, and we are not responsible for any errors or omissions, or for the results obtained from the use of such information.</p>
                
                <h3>3. AI and Automated Systems</h3>
                <p>3.1. Our Services utilize artificial intelligence and automated systems to analyze data, match candidates with job opportunities, and provide insights to employers.</p>
                <p>3.2. While we strive to ensure the accuracy and fairness of our AI systems, they have inherent limitations and may not be perfect. The results and recommendations provided by our AI systems should be considered as suggestions rather than definitive assessments.</p>
                <p>3.3. Users should apply their own judgment and expertise when making decisions based on information or recommendations provided by our AI systems.</p>
                <p>3.4. We do not guarantee that our AI systems will identify the best candidates for every position or that candidates identified through our platform will be suitable for your specific needs.</p>
              `
            }
          }
        ],
        seo: {
          title: 'Disclaimer | HireGenix',
          description: 'HireGenix disclaimer regarding the use of our AI-powered recruitment platform and services. Read our legal disclaimers before using our services.',
          keywords: 'HireGenix disclaimer, recruitment platform disclaimer, AI recruitment legal disclaimer'
        }
      },
      {
        title: 'Privacy Policy',
        slug: 'privacy',
        status: 'PUBLISHED',
        sections: [
          {
            name: 'Privacy Hero',
            type: 'HERO',
            order: 0,
            content: {
              heading: 'Privacy Policy',
              subheading: 'How we collect, use, and protect your personal information',
              backgroundImage: '/hero-pattern.svg',
              backgroundOverlay: true,
              textAlignment: 'center'
            }
          },
          {
            name: 'Privacy Content',
            type: 'TEXT',
            order: 1,
            content: {
              heading: 'Privacy Policy',
              content: `
                <p>Last Updated: August 3, 2025</p>
                
                <h3>1. Introduction</h3>
                <p>This Privacy Policy explains how HireGenix ("we," "our," or "us") collects, uses, and protects your personal information when you use our platform, website, and services (collectively, the "Services").</p>
                
                <h3>2. Information We Collect</h3>
                <p>2.1. Personal Information: We collect personal information that you provide directly to us, such as your name, email address, phone number, resume, job history, and other information you provide when using our Services.</p>
                <p>2.2. Usage Information: We automatically collect information about your use of our Services, including your IP address, browser type, device information, and pages visited.</p>
                <p>2.3. Cookies and Similar Technologies: We use cookies and similar technologies to collect information about your browsing activities and preferences.</p>
                
                <h3>3. How We Use Your Information</h3>
                <p>3.1. To provide and improve our Services.</p>
                <p>3.2. To personalize your experience and provide content and features that match your profile and interests.</p>
                <p>3.3. To communicate with you about our Services, updates, and promotional offers.</p>
                <p>3.4. To analyze usage patterns and improve our website and Services.</p>
                <p>3.5. To protect our legal rights and comply with applicable laws and regulations.</p>
              `
            }
          }
        ],
        seo: {
          title: 'Privacy Policy | HireGenix',
          description: 'Learn how HireGenix collects, uses, and protects your personal information. Read our privacy policy to understand your rights and our practices.',
          keywords: 'privacy policy, data protection, personal information, HireGenix privacy'
        }
      },
      {
        title: 'Terms of Service',
        slug: 'terms',
        status: 'PUBLISHED',
        sections: [
          {
            name: 'Terms Hero',
            type: 'HERO',
            order: 0,
            content: {
              heading: 'Terms of Service',
              subheading: 'The rules and guidelines for using HireGenix services',
              backgroundImage: '/hero-pattern.svg',
              backgroundOverlay: true,
              textAlignment: 'center'
            }
          },
          {
            name: 'Terms Content',
            type: 'TEXT',
            order: 1,
            content: {
              heading: 'Terms of Service',
              content: `
                <p>Last Updated: August 3, 2025</p>
                
                <h3>1. Acceptance of Terms</h3>
                <p>By accessing or using the HireGenix platform, website, and services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Services.</p>
                
                <h3>2. Description of Services</h3>
                <p>2.1. HireGenix provides an AI-powered recruitment platform that helps employers find, assess, and hire candidates.</p>
                <p>2.2. We reserve the right to modify, suspend, or discontinue any part of the Services at any time without notice.</p>
                
                <h3>3. User Accounts</h3>
                <p>3.1. You may need to create an account to access certain features of the Services.</p>
                <p>3.2. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                <p>3.3. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
                
                <h3>4. User Conduct</h3>
                <p>4.1. You agree not to use the Services for any illegal or unauthorized purpose.</p>
                <p>4.2. You agree not to attempt to gain unauthorized access to any portion of the Services or any other systems or networks connected to the Services.</p>
                <p>4.3. You agree not to interfere with or disrupt the Services or servers or networks connected to the Services.</p>
              `
            }
          }
        ],
        seo: {
          title: 'Terms of Service | HireGenix',
          description: 'Read the HireGenix Terms of Service to understand the rules and guidelines for using our AI-powered recruitment platform.',
          keywords: 'terms of service, user agreement, legal terms, HireGenix terms'
        }
      },
      {
        title: 'Refund Policy',
        slug: 'refund-policy',
        status: 'PUBLISHED',
        sections: [
          {
            name: 'Refund Hero',
            type: 'HERO',
            order: 0,
            content: {
              heading: 'Refund Policy',
              subheading: 'Our policies regarding refunds and cancellations',
              backgroundImage: '/hero-pattern.svg',
              backgroundOverlay: true,
              textAlignment: 'center'
            }
          },
          {
            name: 'Refund Content',
            type: 'TEXT',
            order: 1,
            content: {
              heading: 'Refund Policy',
              content: `
                <p>Last Updated: August 3, 2025</p>
                
                <h3>1. Subscription Cancellations</h3>
                <p>1.1. You may cancel your subscription at any time through your account settings or by contacting our customer support team.</p>
                <p>1.2. When you cancel your subscription, you will continue to have access to the Services until the end of your current billing period.</p>
                <p>1.3. We do not provide refunds for partial subscription periods.</p>
                
                <h3>2. Refund Eligibility</h3>
                <p>2.1. We may issue refunds at our discretion in the following circumstances:</p>
                <ul>
                  <li>Technical issues that prevent you from accessing or using the Services for an extended period.</li>
                  <li>Billing errors or duplicate charges.</li>
                  <li>Other exceptional circumstances as determined by our customer support team.</li>
                </ul>
                
                <h3>3. Refund Process</h3>
                <p>3.1. To request a refund, please contact our customer support team at support@hiregenix.com.</p>
                <p>3.2. Please include your account information, the reason for your refund request, and any relevant details or documentation.</p>
                <p>3.3. We will review your request and respond within 5 business days.</p>
                <p>3.4. Approved refunds will be processed using the original payment method and may take 5-10 business days to appear on your statement, depending on your financial institution.</p>
              `
            }
          }
        ],
        seo: {
          title: 'Refund Policy | HireGenix',
          description: 'Learn about HireGenix\'s refund policy, including subscription cancellations and refund eligibility.',
          keywords: 'refund policy, cancellation policy, subscription refunds, HireGenix refunds'
        }
      }
    ];
    
    // Create missing pages
    for (const pageData of missingPages) {
      const existingPage = await prisma.page.findUnique({
        where: { slug: pageData.slug },
      });
      
      if (existingPage) {
        console.log(`Page '${pageData.title}' already exists, skipping...`);
        continue;
      }
      
      console.log(`Creating page: ${pageData.title}`);
      
      // Create the page
      const page = await prisma.page.create({
        data: {
          title: pageData.title,
          slug: pageData.slug,
          status: pageData.status,
          seo: pageData.seo,
        },
      });
      
      // Create sections for the page
      if (pageData.sections && pageData.sections.length > 0) {
        for (const sectionData of pageData.sections) {
          await prisma.section.create({
            data: {
              name: sectionData.name,
              type: sectionData.type,
              order: sectionData.order,
              content: sectionData.content,
              pageId: page.id,
            },
          });
        }
      }
      
      console.log(`Page '${pageData.title}' created successfully with ${pageData.sections?.length || 0} sections`);
    }
    
    console.log('\nMissing pages added successfully.');
    
  } catch (error) {
    console.error('Error adding missing pages:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

#!/usr/bin/env node

/**
 * This script initializes the PostgreSQL database with pages based on the existing pages in the src/app directory.
 * 
 * Usage:
 * node scripts/init-pages-postgres.js
 */

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function main() {
  console.log('Initializing Pages in PostgreSQL Database');
  console.log('========================================');
  
  const prisma = new PrismaClient();
  
  try {
    // Get admin user
    const adminUser = await prisma.user.findFirst({ where: { role: 'ADMIN' } });
    
    if (!adminUser) {
      console.error('No admin user found. Please run the seed script first.');
      process.exit(1);
    }
    
    console.log(`Using admin user: ${adminUser.email}`);
    
    // Check if pages already exist
    const existingPages = await prisma.page.count();
    
    if (existingPages > 0) {
      console.log(`\nPages already exist (${existingPages}). Do you want to continue and add missing pages? (y/n)`);
      const answer = await new Promise(resolve => {
        process.stdin.once('data', data => {
          resolve(data.toString().trim().toLowerCase());
        });
      });
      
      if (answer !== 'y') {
        console.log('Operation cancelled.');
        process.exit(0);
      }
    }
    
    console.log('\nCreating pages based on src/app directory...');
    
    // Define the pages to create based on the src/app directory
    const pages = [
      {
        title: 'Home',
        slug: 'home',
        status: 'PUBLISHED',
        sections: [
          {
            name: 'Hero Section',
            type: 'HERO',
            order: 0,
            content: {
              heading: 'Hire Smarter with AI',
              subheading: 'HireGenix is an AI-powered recruitment platform that helps you find, assess, and hire the best talent faster and more accurately than ever before.',
              ctaText: 'Start Free Trial',
              ctaLink: '/auth/signup',
              secondaryCtaText: 'Watch Demo',
              secondaryCtaLink: '/about',
              backgroundImage: '/hero-pattern.svg',
              backgroundOverlay: true,
              textAlignment: 'left',
              fullHeight: true
            }
          },
          {
            name: 'Features Section',
            type: 'FEATURES',
            order: 1,
            content: {
              heading: 'Powerful AI-Driven Features',
              subheading: 'Everything you need to streamline your recruitment process and find the best talent',
              features: [
                {
                  title: 'AI-Powered Matching',
                  description: 'Semantic skills matching, career trajectory prediction, and bias detection to find the perfect candidates.',
                  icon: 'analytics'
                },
                {
                  title: 'Candidate Assessment',
                  description: 'Adaptive testing, AI-reviewed coding challenges, and soft skills simulations to evaluate candidates comprehensively.',
                  icon: 'assessment'
                },
                {
                  title: 'Video Interviews',
                  description: 'Real-time sentiment analysis, speech pattern analysis, and behavioral assessment for better hiring decisions.',
                  icon: 'videocam'
                },
                {
                  title: 'Talent Analytics',
                  description: 'Attrition prediction, performance forecasting, and team composition optimization for strategic workforce planning.',
                  icon: 'insights'
                }
              ],
              columns: 4,
              showIcons: true,
              layout: 'grid'
            }
          },
          {
            name: 'CTA Section',
            type: 'CTA',
            order: 2,
            content: {
              heading: 'Ready to Transform Your Recruitment Process?',
              subheading: 'Join thousands of companies that are using HireGenix',
              ctaText: 'Get Started',
              ctaLink: '/auth/signup',
              secondaryCtaText: 'Contact Sales',
              secondaryCtaLink: '/contact',
              backgroundImage: '/hero-pattern.svg',
              backgroundOverlay: true,
              textAlignment: 'center'
            }
          }
        ],
        seo: {
          title: 'HireGenix - AI-Powered Recruitment Platform',
          description: 'HireGenix is an AI-powered recruitment platform that helps you find, assess, and hire the best talent faster and more accurately than ever before.',
          keywords: 'recruitment, hiring, AI, platform, talent acquisition'
        }
      },
      {
        title: 'About Us',
        slug: 'about',
        status: 'PUBLISHED',
        sections: [
          {
            name: 'Hero Section',
            type: 'HERO',
            order: 0,
            content: {
              heading: 'About HireGenix',
              subheading: 'We are on a mission to transform recruitment with cutting-edge AI technology, making hiring faster, more accurate, and more inclusive.',
              backgroundImage: '/about/about-hero.svg',
              backgroundOverlay: true,
              textAlignment: 'left'
            }
          },
          {
            name: 'Our Story Section',
            type: 'TEXT_WITH_IMAGE',
            order: 1,
            content: {
              heading: 'Our Story',
              content: 'HireGenix was founded in 2020 with a clear mission: to transform the recruitment industry using artificial intelligence. Our founder, Sarah Johnson, experienced firsthand the inefficiencies and biases in traditional hiring processes during her 15 years in HR technology. She assembled a team of experts in AI, recruitment, and product development to build a platform that would make hiring faster, more accurate, and more inclusive. What started as a small startup has grown into a global company serving clients in over 20 countries.',
              image: '/about/our-story.jpg',
              imagePosition: 'left',
              textAlignment: 'left'
            }
          },
          {
            name: 'Our Values Section',
            type: 'GRID',
            order: 2,
            content: {
              heading: 'Our Values',
              subheading: 'The core principles that guide everything we do',
              items: [
                {
                  title: 'Innovation',
                  description: 'We constantly push the boundaries of what is possible in recruitment technology.',
                  icon: 'lightbulb'
                },
                {
                  title: 'Diversity & Inclusion',
                  description: 'We believe diverse teams perform better and build our technology to promote inclusive hiring.',
                  icon: 'people'
                },
                {
                  title: 'Data Privacy',
                  description: 'We maintain the highest standards of data security and privacy in all our operations.',
                  icon: 'business'
                },
                {
                  title: 'Global Perspective',
                  description: 'We design our solutions for the global workforce, supporting multiple languages and cultures.',
                  icon: 'public'
                }
              ],
              columns: 4,
              showIcons: true,
              layout: 'grid'
            }
          }
        ],
        seo: {
          title: 'About HireGenix - Our Story, Team & Mission',
          description: 'Learn about HireGenix, our mission to transform recruitment with AI technology, our team of experts, and our company values.',
          keywords: 'about HireGenix, recruitment platform, AI recruitment, HireGenix team, recruitment technology'
        }
      },
      {
        title: 'Contact',
        slug: 'contact',
        status: 'PUBLISHED',
        sections: [
          {
            name: 'Contact Hero',
            type: 'HERO',
            order: 0,
            content: {
              heading: 'Contact Us',
              subheading: 'Get in touch with our team to learn more about HireGenix and how we can help you transform your recruitment process.',
              backgroundImage: '/hero-pattern.svg',
              backgroundOverlay: true,
              textAlignment: 'center'
            }
          },
          {
            name: 'Contact Form',
            type: 'CONTACT_FORM',
            order: 1,
            content: {
              heading: 'Send Us a Message',
              subheading: 'Fill out the form below and we\'ll get back to you as soon as possible.',
              formFields: [
                {
                  name: 'name',
                  label: 'Full Name',
                  type: 'text',
                  required: true
                },
                {
                  name: 'email',
                  label: 'Email Address',
                  type: 'email',
                  required: true
                },
                {
                  name: 'company',
                  label: 'Company Name',
                  type: 'text',
                  required: false
                },
                {
                  name: 'message',
                  label: 'Message',
                  type: 'textarea',
                  required: true
                }
              ],
              submitButtonText: 'Send Message',
              showContactInfo: true,
              contactInfo: {
                email: 'contact@hiregenix.com',
                phone: '+1 (555) 123-4567',
                address: '123 Tech Street, San Francisco, CA 94107'
              }
            }
          }
        ],
        seo: {
          title: 'Contact HireGenix - Get in Touch With Our Team',
          description: 'Contact the HireGenix team to learn more about our AI-powered recruitment platform and how we can help you find the best talent.',
          keywords: 'contact HireGenix, recruitment platform support, AI recruitment contact'
        }
      },
      {
        title: 'Solutions',
        slug: 'solutions',
        status: 'PUBLISHED',
        sections: [
          {
            name: 'Solutions Hero',
            type: 'HERO',
            order: 0,
            content: {
              heading: 'Our Solutions',
              subheading: 'Comprehensive AI-powered tools to transform your recruitment process',
              backgroundImage: '/solutions/solutions-hero.svg',
              backgroundOverlay: true,
              textAlignment: 'center'
            }
          },
          {
            name: 'Solutions Grid',
            type: 'GRID',
            order: 1,
            content: {
              heading: 'Recruitment Solutions',
              subheading: 'Explore our suite of AI-powered recruitment tools',
              items: [
                {
                  title: 'AI-Powered Matching',
                  description: 'Our advanced AI algorithms match candidates to jobs based on skills, experience, and potential, not just keywords.',
                  image: '/solutions/ai-recruitment.jpg',
                  link: '/solutions/ai-matching'
                },
                {
                  title: 'Video Interviews',
                  description: 'Conduct and analyze video interviews with AI-powered insights to make better hiring decisions.',
                  image: '/solutions/video-interviews.jpg',
                  link: '/solutions/video-interviews'
                },
                {
                  title: 'Candidate Assessment',
                  description: 'Comprehensive assessment tools to evaluate technical skills, soft skills, and cultural fit.',
                  image: '/solutions/candidate-assessment.jpg',
                  link: '/solutions/candidate-assessment'
                },
                {
                  title: 'Talent Analytics',
                  description: 'Data-driven insights to optimize your recruitment process and workforce planning.',
                  image: '/solutions/talent-analytics.jpg',
                  link: '/solutions/talent-analytics'
                }
              ],
              columns: 2,
              showImages: true,
              layout: 'cards'
            }
          }
        ],
        seo: {
          title: 'HireGenix Solutions - AI-Powered Recruitment Tools',
          description: 'Explore HireGenix\'s suite of AI-powered recruitment solutions including candidate matching, video interviews, assessments, and analytics.',
          keywords: 'recruitment solutions, AI recruitment, video interviews, candidate assessment, talent analytics'
        }
      },
      {
        title: 'Pricing',
        slug: 'pricing',
        status: 'PUBLISHED',
        sections: [
          {
            name: 'Pricing Hero',
            type: 'HERO',
            order: 0,
            content: {
              heading: 'Transparent Pricing',
              subheading: 'Choose the plan that fits your recruitment needs',
              backgroundImage: '/hero-pattern.svg',
              backgroundOverlay: true,
              textAlignment: 'center'
            }
          },
          {
            name: 'Pricing Plans',
            type: 'PRICING',
            order: 1,
            content: {
              heading: 'Our Pricing Plans',
              subheading: 'Flexible options for businesses of all sizes',
              plans: [
                {
                  name: 'Starter',
                  price: '$99',
                  period: 'per month',
                  description: 'Perfect for small businesses just getting started with AI recruitment.',
                  features: [
                    'Up to 5 active job postings',
                    'Basic AI candidate matching',
                    'Video interview capabilities',
                    'Email support'
                  ],
                  ctaText: 'Get Started',
                  ctaLink: '/signup?plan=starter',
                  highlighted: false
                },
                {
                  name: 'Professional',
                  price: '$299',
                  period: 'per month',
                  description: 'Ideal for growing companies with regular hiring needs.',
                  features: [
                    'Up to 15 active job postings',
                    'Advanced AI candidate matching',
                    'Video interviews with basic AI analysis',
                    'Candidate assessments',
                    'Priority email & chat support'
                  ],
                  ctaText: 'Get Started',
                  ctaLink: '/signup?plan=professional',
                  highlighted: true
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  period: 'pricing',
                  description: 'For organizations with high-volume or specialized recruitment needs.',
                  features: [
                    'Unlimited job postings',
                    'Premium AI candidate matching',
                    'Advanced video interview analysis',
                    'Custom assessment creation',
                    'Talent analytics dashboard',
                    'API access',
                    'Dedicated account manager'
                  ],
                  ctaText: 'Contact Sales',
                  ctaLink: '/contact?enterprise=true',
                  highlighted: false
                }
              ],
              showComparison: true
            }
          },
          {
            name: 'FAQ Section',
            type: 'FAQ',
            order: 2,
            content: {
              heading: 'Frequently Asked Questions',
              subheading: 'Find answers to common questions about our pricing and plans',
              items: [
                {
                  question: 'Can I switch plans later?',
                  answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
                },
                {
                  question: 'Is there a free trial?',
                  answer: 'Yes, we offer a 14-day free trial on all plans so you can test our platform before committing.'
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept all major credit cards, as well as PayPal and bank transfers for Enterprise plans.'
                },
                {
                  question: 'Are there any long-term contracts?',
                  answer: 'No, all our plans are month-to-month with no long-term commitment required. Enterprise plans can be customized with annual options for additional savings.'
                }
              ]
            }
          }
        ],
        seo: {
          title: 'HireGenix Pricing - Flexible Plans for AI-Powered Recruitment',
          description: 'Explore HireGenix\'s transparent pricing plans for our AI-powered recruitment platform. Options available for businesses of all sizes.',
          keywords: 'recruitment pricing, AI recruitment cost, hiring platform pricing, recruitment software plans'
        }
      },
      {
        title: 'Blog',
        slug: 'blog',
        status: 'PUBLISHED',
        sections: [
          {
            name: 'Blog Hero',
            type: 'HERO',
            order: 0,
            content: {
              heading: 'Recruitment Insights',
              subheading: 'Latest articles, guides, and resources on AI-powered recruitment',
              backgroundImage: '/hero-pattern.svg',
              backgroundOverlay: true,
              textAlignment: 'center'
            }
          }
        ],
        seo: {
          title: 'HireGenix Blog - Recruitment Insights and Resources',
          description: 'Explore the latest articles, guides, and resources on AI-powered recruitment from the HireGenix team.',
          keywords: 'recruitment blog, hiring insights, AI recruitment resources, talent acquisition guides'
        }
      }
    ];
    
    // Create pages
    for (const pageData of pages) {
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
    
    console.log('\nPages initialization completed successfully.');
    
  } catch (error) {
    console.error('Error initializing pages:', error);
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

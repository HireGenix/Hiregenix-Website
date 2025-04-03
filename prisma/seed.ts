import { PrismaClient, Status } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// Component descriptions
const componentDescriptions = {
  // Home components
  HeroSection: 'Main hero section for the home page with headline, subheadline, and call-to-action buttons.',
  ClientLogosSection: 'Displays logos of client companies that use the platform.',
  KeyBenefitsSection: 'Highlights the key benefits of using the HireGenix platform.',
  ProductShowcaseSection: 'Showcases the main features and products of HireGenix.',
  DashboardPreviewSection: 'Provides a preview of the HireGenix dashboard interface.',
  StatsSection: 'Displays key statistics and metrics about the platform.',
  FeaturesSection: 'Detailed breakdown of platform features with icons and descriptions.',
  AITechnologyExplainerSection: 'Explains the AI technology behind the HireGenix platform.',
  SuccessStoriesSection: 'Showcases success stories and case studies from clients.',
  ROICalculatorSection: 'Interactive calculator to estimate return on investment.',
  IndustrySolutionsSection: 'Solutions tailored for different industries and sectors.',
  IntegrationSection: 'Information about integrations with other platforms and tools.',
  SecurityComplianceSection: 'Details about security features and compliance certifications.',
  PricingComparisonSection: 'Comparison of different pricing plans and features.',
  TestimonialsSection: 'Customer testimonials and reviews.',
  AwardsRecognitionSection: 'Awards and recognition received by HireGenix.',
  BlogResourcesSection: 'Latest blog posts and resources.',
  CTASection: 'Call-to-action section encouraging visitors to sign up or contact sales.',
  
  // About components
  AboutHero: 'Hero section for the about page with company mission statement.',
  AboutStory: 'The story of how HireGenix was founded and its journey.',
  AboutMission: 'The mission and vision of HireGenix.',
  AboutTimeline: 'Timeline of key milestones in the company\'s history.',
  AboutGlobalPresence: 'Map and information about HireGenix\'s global presence.',
  AboutValues: 'Core values and principles that guide the company.',
  AboutTeam: 'Profiles of key team members and leadership.',
  AboutStats: 'Key statistics about the company\'s growth and impact.',
  AboutTechnology: 'Information about the technology stack and innovations.',
  
  // Solutions components
  SolutionsHero: 'Hero section for the solutions page.',
  SolutionsStats: 'Statistics highlighting the effectiveness of HireGenix solutions.',
  SolutionsFeatures: 'Detailed features of different solutions offered.',
  SolutionsTestimonials: 'Testimonials specific to different solutions.',
  SolutionsCTA: 'Call-to-action for solutions page.',
  
  // Contact components
  ContactHero: 'Hero section for the contact page.',
  ContactInfo: 'Contact information including address, phone, and email.',
  ContactForm: 'Form for visitors to send inquiries.',
  ContactFAQ: 'Frequently asked questions about contacting HireGenix.'
};

async function main() {
  console.log('Seeding database...');

  // Create admin user
  const adminEmail = 'admin@hiregenix.com';
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    console.log('Creating admin user...');
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Admin User',
        password: await bcrypt.hash('admin123', 10),
        role: 'ADMIN',
      },
    });
    console.log('Admin user created successfully');
  } else {
    console.log('Admin user already exists, skipping...');
  }

  // Create site settings if the model exists
  try {
    // @ts-ignore - Ignore TypeScript error for dynamic model access
    const existingSettings = await prisma.SiteSettings.findFirst();
    
    if (!existingSettings) {
      console.log('Creating site settings...');
      // @ts-ignore - Ignore TypeScript error for dynamic model access
      await prisma.SiteSettings.create({
        data: {
          siteName: 'HireGenix',
          siteDescription: 'Modern Recruitment Platform',
          contactEmail: 'contact@hiregenix.com',
          contactPhone: '+1 (555) 123-4567',
          contactAddress: '123 Main St, San Francisco, CA 94105',
          socialLinks: {
            facebook: 'https://facebook.com/hiregenix',
            twitter: 'https://twitter.com/hiregenix',
            linkedin: 'https://linkedin.com/company/hiregenix',
            instagram: 'https://instagram.com/hiregenix',
          },
          logoUrl: '/logo.png',
          faviconUrl: '/favicon.ico',
          primaryColor: '#3f51b5',
          secondaryColor: '#f50057',
          footerText: '© 2025 HireGenix. All rights reserved.',
        },
      });
      console.log('Site settings created successfully');
    } else {
      console.log('Site settings already exist, skipping...');
    }
  } catch (error) {
    console.log('Error creating site settings:', error);
  }

  // Create blog categories
  try {
    const categories = [
      { name: 'AI Recruitment', slug: 'ai-recruitment' },
      { name: 'Skills Assessment', slug: 'skills-assessment' },
      { name: 'Diversity & Inclusion', slug: 'diversity-inclusion' },
      { name: 'HR Technology', slug: 'hr-technology' },
      { name: 'Talent Acquisition', slug: 'talent-acquisition' }
    ];

    for (const category of categories) {
      const existingCategory = await prisma.category.findUnique({
        where: { slug: category.slug },
      });

      if (!existingCategory) {
        await prisma.category.create({
          data: category,
        });
        console.log(`Created category: ${category.name}`);
      } else {
        console.log(`Category ${category.name} already exists, skipping...`);
      }
    }
  } catch (error) {
    console.log('Error creating categories:', error);
  }

  // Create blog posts
  try {
    const aiRecruitmentCategory = await prisma.category.findUnique({
      where: { slug: 'ai-recruitment' },
    });
    
    const skillsAssessmentCategory = await prisma.category.findUnique({
      where: { slug: 'skills-assessment' },
    });
    
    const diversityCategory = await prisma.category.findUnique({
      where: { slug: 'diversity-inclusion' },
    });

    const adminUser = await prisma.user.findUnique({
      where: { email: adminEmail },
    });

    if (adminUser && aiRecruitmentCategory && skillsAssessmentCategory && diversityCategory) {
      const posts = [
        {
          title: '5 Ways AI is Transforming the Recruitment Process',
          slug: 'ai-transforming-recruitment',
          excerpt: 'Discover how artificial intelligence is revolutionizing how companies find and hire top talent, from automated screening to predictive analytics.',
          content: `# 5 Ways AI is Transforming the Recruitment Process

The recruitment landscape is undergoing a profound transformation, driven by advances in artificial intelligence. Companies that leverage AI in their hiring processes are gaining significant advantages in efficiency, quality of hire, and candidate experience. In this article, we'll explore five key ways AI is revolutionizing recruitment.

## 1. Automated Candidate Screening

One of the most time-consuming aspects of recruitment is screening resumes and applications. AI-powered tools can now analyze thousands of resumes in seconds, identifying candidates who best match the job requirements based on skills, experience, and other relevant factors.

These systems go beyond simple keyword matching. Advanced natural language processing allows AI to understand context, recognize synonyms, and evaluate the relevance of a candidate's experience. This means recruiters spend less time on initial screening and more time engaging with qualified candidates.

> "Our AI screening tool reduced our time-to-shortlist by 75% while improving the quality of candidates reaching the interview stage." - Enterprise HR Director

## 2. Predictive Analytics for Better Hiring Decisions

AI systems can analyze historical hiring data to identify patterns that correlate with successful employees. By examining factors such as past performance, tenure, and cultural fit, predictive analytics can help recruiters make more informed decisions about which candidates are likely to succeed.

These insights can significantly reduce hiring mistakes, which are costly in terms of both time and resources. Companies using predictive analytics report higher retention rates and better performance among new hires.

## 3. Enhanced Candidate Experience

AI-powered chatbots and virtual assistants are transforming the candidate experience. These tools can:

* Answer common questions about the job and company instantly
* Guide candidates through the application process
* Provide timely updates on application status
* Schedule interviews without the back-and-forth emails
* Collect feedback after interviews or assessments

By providing immediate responses and personalized interactions, AI tools help create a positive impression of the company and keep candidates engaged throughout the hiring process.

## 4. Unbiased Recruitment Processes

Human recruiters, despite best intentions, can be influenced by unconscious biases. AI systems can be designed to ignore demographic information such as age, gender, race, and educational institutions, focusing solely on skills and qualifications.

This blind screening approach helps create a more diverse workforce by ensuring all candidates are evaluated on merit alone. However, it's important to note that AI systems must be carefully designed and regularly audited to ensure they don't perpetuate existing biases in historical hiring data.

## 5. Skills-Based Assessment and Matching

Traditional recruitment often relies heavily on resumes, which may not accurately reflect a candidate's actual abilities. AI-powered skills assessments provide a more objective evaluation of candidates' capabilities.

These assessments can range from coding challenges for technical roles to situational judgment tests for soft skills. AI can then analyze performance data to identify candidates whose skills best match the job requirements, regardless of their formal qualifications or work history.

This approach is particularly valuable in today's rapidly changing job market, where skills often matter more than degrees or previous job titles.

### The Future of AI in Recruitment

As AI technology continues to evolve, we can expect even more sophisticated applications in recruitment. Emerging trends include:

* Video interview analysis that can assess candidate sentiment and engagement
* Voice analysis tools that provide insights into communication style and soft skills
* Advanced matching algorithms that consider team dynamics and company culture
* Personalized career development recommendations based on skills and interests

While AI will never completely replace human judgment in hiring decisions, it is becoming an indispensable tool for recruiters who want to work more efficiently and make better-informed choices.

### Conclusion

AI is transforming recruitment from a largely intuitive process to a data-driven one. By automating routine tasks, providing deeper insights, and reducing bias, AI tools are helping companies build stronger, more diverse teams while improving the candidate experience.

Organizations that embrace these technologies now will gain a significant competitive advantage in attracting and retaining top talent. As the technology continues to mature, AI will become not just a nice-to-have but an essential component of effective recruitment strategies.`,
          featuredImage: '/blog/5 Ways AI is Transforming the Recruitment Process.png',
          status: 'PUBLISHED' as Status,
          authorId: adminUser.id,
          categoryId: aiRecruitmentCategory.id,
          createdAt: new Date('2025-03-15T10:00:00Z'),
          updatedAt: new Date('2025-03-15T10:00:00Z'),
        },
        {
          title: 'The Future of Skills Assessment: Beyond Traditional Testing',
          slug: 'future-skills-assessment',
          excerpt: 'Learn how modern skills assessment techniques are providing deeper insights into candidate capabilities than ever before.',
          content: `# The Future of Skills Assessment: Beyond Traditional Testing

In today's rapidly evolving job market, traditional methods of evaluating candidates are increasingly insufficient. Modern skills assessment is moving beyond standardized tests and basic technical evaluations to provide a more holistic view of candidates' capabilities. This article explores the innovative approaches that are reshaping how organizations assess talent.

## The Limitations of Traditional Assessment

For decades, organizations have relied on a combination of resumes, interviews, and basic skills tests to evaluate candidates. While these methods provide some insights, they have significant limitations:

* Resumes often fail to capture practical skills and adaptability
* Traditional interviews can be heavily influenced by unconscious bias
* Standard technical tests may not reflect real-world problem-solving abilities
* Cultural fit and soft skills are difficult to assess objectively

As work becomes more complex and collaborative, these limitations have become more pronounced, driving the need for more sophisticated assessment approaches.

## AI-Powered Comprehensive Skill Mapping

Artificial intelligence is enabling a more nuanced understanding of candidates' capabilities. Modern assessment platforms can now:

* Analyze work samples to identify demonstrated skills
* Map skills across different domains and identify transferable capabilities
* Compare candidate skill profiles against successful employees in similar roles
* Identify skill gaps and learning potential

> "Our AI assessment platform identified several candidates with non-traditional backgrounds who had exactly the problem-solving capabilities we needed. These individuals would have been overlooked in our previous process." - Tech Hiring Manager

## Simulation-Based Assessments

Rather than testing isolated skills, simulation-based assessments place candidates in realistic scenarios that mirror actual job responsibilities. These might include:

* Virtual work environments that simulate day-to-day tasks
* Collaborative problem-solving exercises with AI teammates
* Crisis management scenarios that test decision-making under pressure
* Long-term projects that assess planning and execution capabilities

These simulations provide insights into how candidates apply their skills in context, revealing capabilities that might not be apparent in traditional assessments.

## Behavioral Science and Psychometric Innovations

Advances in behavioral science are improving our ability to assess cognitive abilities, emotional intelligence, and work preferences:

* Adaptive testing that adjusts difficulty based on performance
* Game-based assessments that measure cognitive traits while reducing test anxiety
* Situational judgment tests that evaluate decision-making in workplace scenarios
* Personality assessments designed specifically for workplace contexts

These tools help organizations understand not just what candidates can do, but how they approach challenges and collaborate with others.

## Continuous Assessment and Development

The future of skills assessment doesn't end with hiring. Progressive organizations are implementing continuous assessment approaches that:

* Track skill development over time
* Identify emerging strengths and areas for growth
* Inform personalized learning recommendations
* Guide career pathing and internal mobility

This shift from point-in-time evaluation to ongoing assessment creates a more dynamic understanding of talent within the organization.

## Ethical Considerations and Best Practices

As assessment technologies become more sophisticated, ethical considerations become increasingly important:

* Transparency about what is being measured and how data will be used
* Validation studies to ensure assessments are fair across different demographic groups
* Privacy protections for candidate data
* Human oversight of AI-driven assessment systems

Organizations that implement these best practices not only create fairer assessment processes but also build trust with candidates.

## Conclusion

The future of skills assessment is multidimensional, continuous, and increasingly personalized. By moving beyond traditional testing to embrace innovative assessment approaches, organizations can gain deeper insights into candidates' capabilities, make better hiring decisions, and support ongoing development.

As these technologies continue to evolve, they promise to create more meritocratic hiring processes that identify the best talent regardless of background, while providing candidates with valuable insights about their own strengths and growth opportunities.`,
          featuredImage: '/blog/The Future of Skills Assessment: Beyond Traditional Testing.png',
          status: 'PUBLISHED' as Status,
          authorId: adminUser.id,
          categoryId: skillsAssessmentCategory.id,
          createdAt: new Date('2025-03-10T14:30:00Z'),
          updatedAt: new Date('2025-03-10T14:30:00Z'),
        },
        {
          title: 'Building Diverse Teams: How Technology Can Help',
          slug: 'building-diverse-teams',
          excerpt: 'Explore how recruitment technology can be leveraged to create more diverse and inclusive workplaces.',
          content: `# Building Diverse Teams: How Technology Can Help

Creating diverse and inclusive workplaces isn't just the right thing to do—it's a business imperative. Research consistently shows that diverse teams drive innovation, improve decision-making, and deliver stronger financial results. However, despite good intentions, many organizations struggle to build truly diverse teams. This article explores how technology can help overcome common barriers and accelerate progress toward more inclusive workplaces.

## Understanding the Challenges

Before examining technological solutions, it's important to understand the challenges organizations face in building diverse teams:

* Unconscious bias in recruitment and promotion processes
* Limited talent pools due to traditional sourcing methods
* Exclusive workplace cultures that affect retention
* Difficulty measuring progress and identifying effective interventions
* Inconsistent commitment across the organization

Technology alone cannot solve these complex challenges, but when implemented thoughtfully, it can be a powerful enabler of more inclusive practices.

## Reducing Bias in Recruitment

Recruitment technologies are increasingly incorporating features designed to reduce bias:

* Blind resume screening that removes demographic information
* AI-powered job description analysis to identify and remove biased language
* Structured interview platforms that ensure consistent candidate evaluation
* Skills-based assessment tools that focus on capabilities rather than backgrounds

> "After implementing blind screening and structured digital interviews, we saw a 35% increase in gender diversity and a 28% increase in ethnic diversity in our technical roles." - Global Technology Company

## Expanding Talent Pools

Technology is helping organizations reach beyond traditional talent sources:

* Targeted job advertising platforms that reach underrepresented communities
* AI matching systems that identify candidates with transferable skills from adjacent industries
* Virtual recruiting events that remove geographical barriers
* Partnerships with online learning platforms to create alternative talent pipelines

These approaches help organizations connect with qualified candidates they might otherwise miss.

## Creating Inclusive Candidate Experiences

The recruitment process itself can either reinforce or challenge perceptions of inclusivity:

* Chatbots that provide consistent information to all candidates
* Accessible application processes designed for candidates with disabilities
* Virtual reality workplace tours that showcase diversity and inclusion initiatives
* Candidate feedback platforms that identify potential barriers in the recruitment process

By creating more inclusive candidate experiences, organizations signal their commitment to diversity from the first interaction.

## Supporting Inclusive Decision-Making

Technology can help ensure that hiring and promotion decisions align with diversity goals:

* Analytics dashboards that highlight potential bias in decision patterns
* Collaborative hiring platforms that incorporate diverse perspectives
* Decision support tools that prompt consideration of objective criteria
* Goal-tracking systems that maintain focus on diversity metrics

These tools help translate good intentions into consistent practices across the organization.

## Measuring Progress and Impact

Data-driven approaches enable organizations to track progress and refine their strategies:

* Diversity analytics that provide insights at each stage of the employee lifecycle
* Sentiment analysis tools that assess inclusion across different demographic groups
* Benchmarking platforms that compare performance against industry standards
* Predictive analytics that identify potential retention risks among underrepresented groups

With better measurement, organizations can focus their efforts on interventions that deliver real results.

## Ethical Considerations

As with any technology implementation, ethical considerations are paramount:

* Ensuring that AI systems don't perpetuate existing biases
* Maintaining appropriate data privacy and security
* Being transparent with candidates and employees about how technology is used
* Recognizing the limitations of technology and the continued importance of human judgment

Organizations that address these considerations thoughtfully will be better positioned to use technology effectively.

## Conclusion

Technology is not a silver bullet for building diverse teams, but it can be a powerful enabler when implemented as part of a comprehensive strategy. By reducing bias, expanding talent pools, creating inclusive experiences, supporting better decisions, and measuring progress, technology helps organizations translate their commitment to diversity into tangible results.

As these technologies continue to evolve, they promise to make diversity and inclusion efforts more data-driven, consistent, and effective—helping organizations build teams that reflect the full spectrum of talent available and create workplaces where everyone can thrive.`,
          featuredImage: '/blog/Building Diverse Teams: How Technology Can Help.png',
          status: 'PUBLISHED' as Status,
          authorId: adminUser.id,
          categoryId: diversityCategory.id,
          createdAt: new Date('2025-03-05T09:15:00Z'),
          updatedAt: new Date('2025-03-05T09:15:00Z'),
        }
      ];

      for (const post of posts) {
        const existingPost = await prisma.post.findUnique({
          where: { slug: post.slug },
        });

        if (!existingPost) {
          await prisma.post.create({
            data: post,
          });
          console.log(`Created blog post: ${post.title}`);
        } else {
          console.log(`Blog post ${post.title} already exists, skipping...`);
        }
      }
    }
  } catch (error) {
    console.log('Error creating blog posts:', error);
  }

  // Seed components
  try {
    console.log('Seeding components...');
    
    // Home components
    const homeComponents = [
      { name: 'Hero Section', category: 'home', filePath: 'src/components/Home/HeroSection.tsx', description: componentDescriptions.HeroSection },
      { name: 'Client Logos Section', category: 'home', filePath: 'src/components/Home/ClientLogosSection.tsx', description: componentDescriptions.ClientLogosSection },
      { name: 'Key Benefits Section', category: 'home', filePath: 'src/components/Home/KeyBenefitsSection.tsx', description: componentDescriptions.KeyBenefitsSection },
      { name: 'Product Showcase Section', category: 'home', filePath: 'src/components/Home/ProductShowcaseSection.tsx', description: componentDescriptions.ProductShowcaseSection },
      { name: 'Dashboard Preview Section', category: 'home', filePath: 'src/components/Home/DashboardPreviewSection.tsx', description: componentDescriptions.DashboardPreviewSection },
      { name: 'Stats Section', category: 'home', filePath: 'src/components/Home/StatsSection.tsx', description: componentDescriptions.StatsSection },
      { name: 'Features Section', category: 'home', filePath: 'src/components/Home/FeaturesSection.tsx', description: componentDescriptions.FeaturesSection },
      { name: 'AI Technology Explainer Section', category: 'home', filePath: 'src/components/Home/AITechnologyExplainerSection.tsx', description: componentDescriptions.AITechnologyExplainerSection },
      { name: 'Success Stories Section', category: 'home', filePath: 'src/components/Home/SuccessStoriesSection.tsx', description: componentDescriptions.SuccessStoriesSection },
      { name: 'ROI Calculator Section', category: 'home', filePath: 'src/components/Home/ROICalculatorSection.tsx', description: componentDescriptions.ROICalculatorSection },
      { name: 'Industry Solutions Section', category: 'home', filePath: 'src/components/Home/IndustrySolutionsSection.tsx', description: componentDescriptions.IndustrySolutionsSection },
      { name: 'Integration Section', category: 'home', filePath: 'src/components/Home/IntegrationSection.tsx', description: componentDescriptions.IntegrationSection },
      { name: 'Security Compliance Section', category: 'home', filePath: 'src/components/Home/SecurityComplianceSection.tsx', description: componentDescriptions.SecurityComplianceSection },
      { name: 'Pricing Comparison Section', category: 'home', filePath: 'src/components/Home/PricingComparisonSection.tsx', description: componentDescriptions.PricingComparisonSection },
      { name: 'Testimonials Section', category: 'home', filePath: 'src/components/Home/TestimonialsSection.tsx', description: componentDescriptions.TestimonialsSection },
      { name: 'Awards Recognition Section', category: 'home', filePath: 'src/components/Home/AwardsRecognitionSection.tsx', description: componentDescriptions.AwardsRecognitionSection },
      { name: 'Blog Resources Section', category: 'home', filePath: 'src/components/Home/BlogResourcesSection.tsx', description: componentDescriptions.BlogResourcesSection },
      { name: 'CTA Section', category: 'home', filePath: 'src/components/Home/CTASection.tsx', description: componentDescriptions.CTASection },
    ];
    
    // About components
    const aboutComponents = [
      { name: 'About Hero', category: 'about', filePath: 'src/components/About/AboutHero.tsx', description: componentDescriptions.AboutHero },
      { name: 'About Story', category: 'about', filePath: 'src/components/About/AboutStory.tsx', description: componentDescriptions.AboutStory },
      { name: 'About Mission', category: 'about', filePath: 'src/components/About/AboutMission.tsx', description: componentDescriptions.AboutMission },
      { name: 'About Timeline', category: 'about', filePath: 'src/components/About/AboutTimeline.tsx', description: componentDescriptions.AboutTimeline },
      { name: 'About Global Presence', category: 'about', filePath: 'src/components/About/AboutGlobalPresence.tsx', description: componentDescriptions.AboutGlobalPresence },
      { name: 'About Values', category: 'about', filePath: 'src/components/About/AboutValues.tsx', description: componentDescriptions.AboutValues },
      { name: 'About Team', category: 'about', filePath: 'src/components/About/AboutTeam.tsx', description: componentDescriptions.AboutTeam },
      { name: 'About Stats', category: 'about', filePath: 'src/components/About/AboutStats.tsx', description: componentDescriptions.AboutStats },
      { name: 'About Technology', category: 'about', filePath: 'src/components/About/AboutTechnology.tsx', description: componentDescriptions.AboutTechnology },
    ];
    
    // Solutions components
    const solutionsComponents = [
      { name: 'Solutions Hero', category: 'solutions', filePath: 'src/components/Solutions/SolutionsHero.tsx', description: componentDescriptions.SolutionsHero },
      { name: 'Solutions Stats', category: 'solutions', filePath: 'src/components/Solutions/SolutionsStats.tsx', description: componentDescriptions.SolutionsStats },
      { name: 'Solutions Features', category: 'solutions', filePath: 'src/components/Solutions/SolutionsFeatures.tsx', description: componentDescriptions.SolutionsFeatures },
      { name: 'Solutions Testimonials', category: 'solutions', filePath: 'src/components/Solutions/SolutionsTestimonials.tsx', description: componentDescriptions.SolutionsTestimonials },
      { name: 'Solutions CTA', category: 'solutions', filePath: 'src/components/Solutions/SolutionsCTA.tsx', description: componentDescriptions.SolutionsCTA },
    ];
    
    // Contact components
    const contactComponents = [
      { name: 'Contact Hero', category: 'contact', filePath: 'src/components/Contact/ContactHero.tsx', description: componentDescriptions.ContactHero },
      { name: 'Contact Info', category: 'contact', filePath: 'src/components/Contact/ContactInfo.tsx', description: componentDescriptions.ContactInfo },
      { name: 'Contact Form', category: 'contact', filePath: 'src/components/Contact/ContactForm.tsx', description: componentDescriptions.ContactForm },
      { name: 'Contact FAQ', category: 'contact', filePath: 'src/components/Contact/ContactFAQ.tsx', description: componentDescriptions.ContactFAQ },
    ];
    
    // Combine all components
    const allComponents = [
      ...homeComponents,
      ...aboutComponents,
      ...solutionsComponents,
      ...contactComponents,
    ];
    
    // Create components in database
    for (const component of allComponents) {
      // @ts-ignore - Ignore TypeScript error for dynamic model access
      const existingComponent = await prisma.component.findFirst({
        where: { filePath: component.filePath },
      });
      
      if (!existingComponent) {
        // @ts-ignore - Ignore TypeScript error for dynamic model access
        await prisma.component.create({
          data: component,
        });
        console.log(`Created component: ${component.name}`);
      } else {
        console.log(`Component ${component.name} already exists, skipping...`);
      }
    }
    
    console.log('Components seeded successfully');
  } catch (error) {
    console.log('Error seeding components:', error);
  }

  console.log('Database seeding completed.');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

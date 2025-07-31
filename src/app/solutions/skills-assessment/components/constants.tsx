import React, { ReactNode } from 'react';
import {
  Quiz as QuizIcon,
  Psychology as PsychologyIcon,
  Assessment as AssessmentIcon,
  Code as CodeIcon,
  Speed as SpeedIcon,
  Equalizer as EqualizerIcon,
  DataUsage as DataUsageIcon,
  Security as SecurityIcon,
  Devices as DevicesIcon,
  Diversity3 as DiversityIcon,
  Insights as InsightsIcon,
  AutoGraph as AutoGraphIcon
} from '@mui/icons-material';

// Animation variants
export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const fadeInLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const fadeInRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Type definitions
export interface BenefitItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
  details: string[];
}

export interface TechnicalDetailItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  position: string;
  avatar: string;
}

export interface SEODataType {
  title: string;
  description: string;
  keywords: string;
}

// Benefits data
export const benefits: BenefitItem[] = [
  {
    title: 'Comprehensive Skill Evaluation',
    description: 'Evaluate technical, soft, and cognitive skills with customizable assessments tailored to your specific requirements.',
    icon: <AssessmentIcon fontSize="large" />
  },
  {
    title: 'Reduce Hiring Time',
    description: 'Quickly identify qualified candidates with automated assessments that provide instant results and insights.',
    icon: <SpeedIcon fontSize="large" />
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Make objective hiring decisions based on quantifiable skill metrics rather than subjective impressions.',
    icon: <DataUsageIcon fontSize="large" />
  },
  {
    title: 'Improved Candidate Experience',
    description: 'Provide a seamless, engaging assessment experience that showcases your company\'s innovative approach.',
    icon: <DiversityIcon fontSize="large" />
  }
];

// Features data
export const features: FeatureItem[] = [
  {
    title: 'Adaptive Technical Assessments',
    description: 'Our AI-powered assessments adapt in real-time to candidate performance, providing a more accurate evaluation of skill levels.',
    icon: <CodeIcon />,
    details: [
      'Language-specific coding challenges for over 30 programming languages',
      'Automated code quality and efficiency analysis',
      'Problem-solving approach evaluation',
      'Plagiarism detection to ensure authentic responses'
    ]
  },
  {
    title: 'Cognitive Ability Testing',
    description: 'Comprehensive cognitive assessments that measure critical thinking, problem-solving, and learning ability.',
    icon: <PsychologyIcon />,
    details: [
      'Logical reasoning and critical thinking evaluation',
      'Numerical and verbal reasoning assessments',
      'Pattern recognition and abstract thinking tests',
      'Memory and attention to detail measurement'
    ]
  },
  {
    title: 'Soft Skills Assessment',
    description: 'Innovative assessments that effectively measure communication, teamwork, and other essential soft skills.',
    icon: <DiversityIcon />,
    details: [
      'Situational judgment tests for workplace scenarios',
      'Communication style and effectiveness evaluation',
      'Team collaboration and conflict resolution assessment',
      'Leadership potential identification'
    ]
  },
  {
    title: 'Customizable Assessment Workflows',
    description: 'Create tailored assessment journeys for different roles and departments with our flexible assessment platform.',
    icon: <EqualizerIcon />,
    details: [
      'Role-specific assessment templates',
      'Custom scoring algorithms and weightings',
      'Multi-stage assessment processes',
      'Department-specific skill benchmarks'
    ]
  }
];

// Technical details
export const technicalDetails: TechnicalDetailItem[] = [
  {
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms that provide deeper insights into candidate capabilities.',
    icon: <InsightsIcon />
  },
  {
    title: 'Multi-Platform Support',
    description: 'Assessments that work seamlessly across desktop, tablet, and mobile devices.',
    icon: <DevicesIcon />
  },
  {
    title: 'Anti-Cheating Measures',
    description: 'Sophisticated proctoring and verification systems to ensure assessment integrity.',
    icon: <SecurityIcon />
  },
  {
    title: 'Comprehensive Analytics',
    description: 'Detailed performance metrics and comparative analysis against industry benchmarks.',
    icon: <AutoGraphIcon />
  }
];

// Testimonials
export const testimonials: TestimonialItem[] = [
  {
    quote: "HireGenix's skills assessment platform has transformed our technical hiring process. We're now able to objectively evaluate candidates and make data-driven decisions.",
    name: "David Rodriguez",
    position: "CTO, TechInnovate",
    avatar: "/team/david-rodriguez.jpg"
  },
  {
    quote: "The customizable assessment workflows have allowed us to create role-specific evaluations that accurately predict on-the-job performance.",
    name: "Jessica Williams",
    position: "Head of Talent Acquisition, GlobalTech",
    avatar: "/team/jessica-williams.jpg"
  }
];

export const seoData: SEODataType = {
  title: 'Comprehensive Skills Assessment Platform | HireGenix',
  description: 'HireGenix\'s advanced skills assessment platform helps you evaluate technical, cognitive, and soft skills with customizable, AI-powered assessments.',
  keywords: 'skills assessment, technical evaluation, cognitive testing, soft skills assessment, hiring platform'
};

import React, { ReactNode } from 'react';
import {
  Analytics as AnalyticsIcon,
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
  Search as SearchIcon,
  Psychology as PsychologyIcon,
  Diversity3 as DiversityIcon,
  Language as LanguageIcon,
  Speed as SpeedIcon,
  Code as CodeIcon,
  DataObject as DataObjectIcon,
  Bolt as BoltIcon,
  Lightbulb as LightbulbIcon
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

export interface SEODataType {
  title: string;
  description: string;
  keywords: string;
}

// Benefits data
export const benefits: BenefitItem[] = [
  {
    title: '50% Faster Hiring Process',
    description: 'Reduce time-to-hire by automatically identifying the most qualified candidates from your talent pool.',
    icon: <SpeedIcon fontSize="large" />
  },
  {
    title: 'Improved Candidate Quality',
    description: 'Find candidates who are not just qualified on paper but are also great cultural fits for your organization.',
    icon: <CheckCircleIcon fontSize="large" />
  },
  {
    title: 'Reduced Hiring Bias',
    description: 'Our AI algorithms are designed to minimize unconscious bias in the recruitment process.',
    icon: <DiversityIcon fontSize="large" />
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Make hiring decisions based on objective data rather than gut feelings or subjective impressions.',
    icon: <AnalyticsIcon fontSize="large" />
  }
];

// Features data
export const features: FeatureItem[] = [
  {
    title: 'Semantic Skills Matching',
    description: 'Our AI understands the meaning behind skills and experience, not just keyword matching. It can identify candidates with transferable skills and potential, even if they don\'t use the exact terminology in their resumes.',
    icon: <SearchIcon />,
    details: [
      'Contextual understanding of skills and experience',
      'Recognition of transferable skills across industries',
      'Identification of skill synonyms and related competencies',
      'Semantic understanding of job requirements'
    ]
  },
  {
    title: 'Career Trajectory Prediction',
    description: 'Predict a candidate\'s potential for growth and success in your organization based on their career path, learning velocity, and adaptability to new challenges.',
    icon: <TrendingUpIcon />,
    details: [
      'Analysis of career progression patterns',
      'Identification of high-potential candidates',
      'Prediction of long-term performance and retention',
      'Assessment of learning agility and adaptability'
    ]
  },
  {
    title: 'Cultural Fit Assessment',
    description: 'Evaluate how well a candidate\'s values, work style, and personality align with your organization\'s culture and the specific team they would join.',
    icon: <PsychologyIcon />,
    details: [
      'Analysis of communication style and values',
      'Team dynamics compatibility assessment',
      'Work environment preferences matching',
      'Organizational values alignment'
    ]
  },
  {
    title: 'Multilingual Resume Analysis',
    description: 'Our AI can analyze resumes in multiple languages, making it easier to recruit globally and tap into diverse talent pools around the world.',
    icon: <LanguageIcon />,
    details: [
      'Support for 30+ languages',
      'Cross-language skill normalization',
      'Cultural context awareness',
      'International qualification recognition'
    ]
  }
];

// Technical details
export const technicalDetails: TechnicalDetailItem[] = [
  {
    title: 'Natural Language Processing',
    description: 'Advanced NLP models understand the semantic meaning behind resume content and job descriptions.',
    icon: <DataObjectIcon />
  },
  {
    title: 'Machine Learning Algorithms',
    description: 'Continuously improving algorithms learn from hiring outcomes to refine matching accuracy.',
    icon: <CodeIcon />
  },
  {
    title: 'Neural Networks',
    description: 'Deep learning networks identify complex patterns in candidate data that humans might miss.',
    icon: <BoltIcon />
  },
  {
    title: 'Explainable AI',
    description: 'Transparent AI that provides clear reasoning for candidate recommendations.',
    icon: <LightbulbIcon />
  }
];

export const seoData: SEODataType = {
  title: 'AI-Powered Candidate Matching | HireGenix',
  description: 'HireGenix\'s advanced AI-powered candidate matching uses semantic understanding to find the perfect candidates for your open positions.',
  keywords: 'AI recruitment, candidate matching, semantic skills matching, career trajectory prediction, cultural fit assessment'
};

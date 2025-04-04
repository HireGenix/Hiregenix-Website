import React, { ReactNode } from 'react';
import {
  VideoCall as VideoCallIcon,
  CheckCircle as CheckCircleIcon,
  Psychology as PsychologyIcon,
  RecordVoiceOver as RecordVoiceOverIcon,
  Face as FaceIcon,
  Speed as SpeedIcon,
  Visibility as VisibilityIcon,
  Mic as MicIcon,
  Videocam as VideocamIcon,
  Translate as TranslateIcon,
  CloudUpload as CloudUploadIcon,
  Schedule as ScheduleIcon,
  Devices as DevicesIcon,
  Security as SecurityIcon,
  Equalizer as EqualizerIcon
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
    title: 'Eliminate Geographical Barriers',
    description: 'Interview candidates from anywhere in the world without the need for travel or physical presence.',
    icon: <DevicesIcon fontSize="large" />
  },
  {
    title: 'Reduce Time-to-Hire',
    description: 'Schedule and conduct interviews faster with automated coordination and flexible timing options.',
    icon: <SpeedIcon fontSize="large" />
  },
  {
    title: 'Objective Candidate Evaluation',
    description: 'Use AI analysis to ensure consistent, bias-free assessment of all candidates.',
    icon: <EqualizerIcon fontSize="large" />
  },
  {
    title: 'Enhanced Collaboration',
    description: 'Allow multiple team members to participate in and review interviews asynchronously.',
    icon: <ScheduleIcon fontSize="large" />
  }
];

// Features data
export const features: FeatureItem[] = [
  {
    title: 'Real-time Sentiment Analysis',
    description: 'Our AI analyzes candidate responses in real-time, detecting emotional cues, engagement levels, and confidence to provide deeper insights into candidate suitability.',
    icon: <VisibilityIcon />,
    details: [
      'Emotional response tracking during technical questions',
      'Engagement level monitoring throughout the interview',
      'Confidence assessment during challenging scenarios',
      'Stress response analysis for high-pressure roles'
    ]
  },
  {
    title: 'Speech Pattern Analysis',
    description: 'Advanced voice analysis examines speech patterns, clarity, pace, and vocabulary usage to evaluate communication skills and language proficiency.',
    icon: <MicIcon />,
    details: [
      'Communication clarity and articulation assessment',
      'Speaking pace and rhythm analysis',
      'Filler word detection and quantification',
      'Technical vocabulary usage evaluation'
    ]
  },
  {
    title: 'Behavioral Assessment',
    description: 'Comprehensive analysis of facial expressions, body language, and response patterns to evaluate soft skills and cultural fit.',
    icon: <FaceIcon />,
    details: [
      'Facial expression analysis during different question types',
      'Eye contact and engagement tracking',
      'Response consistency evaluation across similar questions',
      'Non-verbal communication assessment'
    ]
  },
  {
    title: 'Technical Skills Verification',
    description: 'Integrated coding challenges and technical assessments with AI-powered analysis to verify claimed skills and problem-solving abilities.',
    icon: <PsychologyIcon />,
    details: [
      'Live coding challenge integration',
      'Problem-solving approach analysis',
      'Technical accuracy verification',
      'Coding style and best practices assessment'
    ]
  }
];

// Technical details
export const technicalDetails: TechnicalDetailItem[] = [
  {
    title: 'WebRTC Technology',
    description: 'Enterprise-grade video conferencing with low latency and high-quality audio/video.',
    icon: <VideocamIcon />
  },
  {
    title: 'Cloud Recording',
    description: 'Secure cloud storage of interview recordings with easy sharing and review capabilities.',
    icon: <CloudUploadIcon />
  },
  {
    title: 'AI-Powered Translation',
    description: 'Real-time translation and transcription in 30+ languages for global recruitment.',
    icon: <TranslateIcon />
  },
  {
    title: 'Enterprise Security',
    description: 'End-to-end encryption and compliance with global data protection regulations.',
    icon: <SecurityIcon />
  }
];

// Testimonials
export const testimonials: TestimonialItem[] = [
  {
    quote: "HireGenix's video interview platform has completely transformed our technical hiring process. The AI analysis helps us identify top candidates more accurately than traditional interviews.",
    name: "Sarah Johnson",
    position: "CTO, TechCorp",
    avatar: "/avatars/avatar1.jpg"
  },
  {
    quote: "The sentiment analysis feature has been a game-changer for our sales team recruitment. We can now objectively assess communication skills and emotional intelligence.",
    name: "Michael Chen",
    position: "VP of Sales, InnovateSoft",
    avatar: "/avatars/avatar2.jpg"
  }
];

export const seoData: SEODataType = {
  title: 'AI-Powered Video Interview Platform | HireGenix',
  description: 'HireGenix\'s comprehensive video interview platform with AI-powered analysis helps you make better hiring decisions through advanced candidate assessment.',
  keywords: 'video interviews, AI interview analysis, remote interviewing, sentiment analysis, speech pattern analysis'
};

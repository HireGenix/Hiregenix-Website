import React, { ReactNode } from 'react';
import {
  Analytics as AnalyticsIcon,
  TrendingUp as TrendingUpIcon,
  Timeline as TimelineIcon,
  Insights as InsightsIcon,
  DataUsage as DataUsageIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  BubbleChart as BubbleChartIcon,
  ShowChart as ShowChartIcon,
  Diversity3 as DiversityIcon,
  Security as SecurityIcon,
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
    title: 'Data-Driven Workforce Planning',
    description: 'Make strategic workforce decisions based on comprehensive data analysis and predictive insights.',
    icon: <DataUsageIcon fontSize="large" />
  },
  {
    title: 'Identify Performance Trends',
    description: 'Spot patterns and trends in employee performance to optimize team productivity and engagement.',
    icon: <TrendingUpIcon fontSize="large" />
  },
  {
    title: 'Reduce Turnover',
    description: 'Predict and prevent employee turnover by identifying risk factors and implementing targeted retention strategies.',
    icon: <TimelineIcon fontSize="large" />
  },
  {
    title: 'Optimize Talent Allocation',
    description: 'Place the right people in the right roles based on skills, performance data, and team dynamics.',
    icon: <DiversityIcon fontSize="large" />
  }
];

// Features data
export const features: FeatureItem[] = [
  {
    title: 'Predictive Workforce Analytics',
    description: 'Our AI-powered analytics engine forecasts future workforce trends, helping you make proactive decisions about hiring, training, and resource allocation.',
    icon: <InsightsIcon />,
    details: [
      'Turnover prediction with 85%+ accuracy',
      'Skill gap forecasting for future business needs',
      'Hiring demand projections based on growth patterns',
      'Performance trajectory modeling'
    ]
  },
  {
    title: 'Comprehensive Talent Dashboards',
    description: 'Interactive dashboards that visualize key workforce metrics and KPIs for easy monitoring and analysis.',
    icon: <BarChartIcon />,
    details: [
      'Customizable executive dashboards',
      'Department-specific performance metrics',
      'Real-time workforce analytics',
      'Comparative benchmarking against industry standards'
    ]
  },
  {
    title: 'Advanced Team Analytics',
    description: 'Deep insights into team dynamics, collaboration patterns, and performance factors to optimize group effectiveness.',
    icon: <BubbleChartIcon />,
    details: [
      'Team composition analysis',
      'Collaboration network mapping',
      'Skills distribution visualization',
      'Team performance correlation analysis'
    ]
  },
  {
    title: 'Strategic Workforce Planning',
    description: 'Data-driven tools for long-term workforce planning, succession management, and organizational design.',
    icon: <AutoGraphIcon />,
    details: [
      'Scenario modeling for organizational changes',
      'Succession planning analytics',
      'Workforce cost optimization',
      'Capacity planning and resource allocation'
    ]
  }
];

// Technical details
export const technicalDetails: TechnicalDetailItem[] = [
  {
    title: 'AI-Powered Predictions',
    description: 'Machine learning algorithms that continuously improve prediction accuracy with new data.',
    icon: <ShowChartIcon />
  },
  {
    title: 'Data Integration',
    description: 'Seamless integration with HRIS, ATS, performance management, and other HR systems.',
    icon: <PieChartIcon />
  },
  {
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with end-to-end encryption and robust data protection measures.',
    icon: <SecurityIcon />
  },
  {
    title: 'Customizable Analytics',
    description: 'Flexible reporting engine that adapts to your organization\'s specific metrics and KPIs.',
    icon: <AnalyticsIcon />
  }
];

// Testimonials
export const testimonials: TestimonialItem[] = [
  {
    quote: "HireGenix's workforce analytics platform has transformed how we approach talent management. The predictive insights have helped us reduce turnover by 23% in just six months.",
    name: "Michael Chen",
    position: "CHRO, Enterprise Solutions",
    avatar: "/team/michael-chen.jpg"
  },
  {
    quote: "The strategic workforce planning tools have been invaluable for our company's growth. We can now confidently make decisions about hiring and team structure based on data rather than intuition.",
    name: "Sarah Johnson",
    position: "VP of People Operations, TechGrowth",
    avatar: "/team/sarah-johnson.jpg"
  }
];

export const seoData: SEODataType = {
  title: 'Workforce Analytics & Predictive HR Analytics | HireGenix',
  description: 'HireGenix\'s workforce analytics platform provides predictive insights and data visualization to optimize talent management and strategic workforce planning.',
  keywords: 'workforce analytics, predictive HR analytics, talent management, employee turnover prediction, strategic workforce planning'
};

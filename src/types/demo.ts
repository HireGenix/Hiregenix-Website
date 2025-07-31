export interface DemoStep {
  id: number;
  title: string;
  description: string;
  component: string;
  completed: boolean;
}

export interface JobCreation {
  title: string;
  department: string;
  location: string;
  experience: string;
  jobType: string;
  salary: {
    min: number;
    max: number;
  };
  skills: string[];
  description: string;
  requirements: string[];
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  experience: number;
  skills: string[];
  avatar: string;
  resume: string;
  matchScore: number;
  skillsMatch: number;
  experienceMatch: number;
  locationMatch: number;
  assessmentScore?: number;
  interviewScore?: number;
  overallRating: number;
  appliedDate: string;
  status: 'applied' | 'screening' | 'assessment' | 'interview' | 'hired' | 'rejected';
}

export interface SkillsAssessment {
  id: string;
  candidateId: string;
  questions: AssessmentQuestion[];
  startTime: string;
  endTime?: string;
  score: number;
  completed: boolean;
}

export interface AssessmentQuestion {
  id: string;
  type: 'multiple-choice' | 'coding' | 'short-answer';
  question: string;
  options?: string[];
  correctAnswer?: string;
  code?: {
    language: string;
    template: string;
    testCases: TestCase[];
  };
  answer?: string;
  isCorrect?: boolean;
  points: number;
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  description: string;
}

export interface VideoInterview {
  id: string;
  candidateId: string;
  duration: number;
  questions: string[];
  sentimentAnalysis: {
    positive: number;
    neutral: number;
    negative: number;
  };
  keywordAnalysis: {
    technical: string[];
    soft: string[];
    leadership: string[];
  };
  confidenceScore: number;
  communicationScore: number;
  overallScore: number;
}

export interface WorkforceAnalytics {
  totalApplications: number;
  averageTimeToHire: number;
  topSkills: { skill: string; demand: number }[];
  departmentStats: { department: string; openings: number; filled: number }[];
  diversityMetrics: {
    gender: { male: number; female: number; other: number };
    experience: { junior: number; mid: number; senior: number };
  };
  predictedHires: number;
  costPerHire: number;
  qualityOfHire: number;
}

export interface ROIMetrics {
  timeToHireReduction: number;
  costSavings: number;
  qualityImprovement: number;
  efficiencyGain: number;
  annualSavings: number;
}

export interface DemoState {
  currentStep: number;
  steps: DemoStep[];
  jobCreation: JobCreation | null;
  candidates: Candidate[];
  selectedCandidate: Candidate | null;
  skillsAssessment: SkillsAssessment | null;
  videoInterview: VideoInterview | null;
  workforceAnalytics: WorkforceAnalytics | null;
  roiMetrics: ROIMetrics | null;
  isLoading: boolean;
  error: string | null;
}

export interface DemoActions {
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  setJobCreation: (job: JobCreation) => void;
  selectCandidate: (candidate: Candidate) => void;
  updateCandidateScore: (candidateId: string, scores: Partial<Candidate>) => void;
  setSkillsAssessment: (assessment: SkillsAssessment) => void;
  setVideoInterview: (interview: VideoInterview) => void;
  generateAnalytics: () => void;
  calculateROI: () => void;
  resetDemo: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export type DemoStore = DemoState & DemoActions;

// Mock data types
export interface MockDataService {
  generateCandidates: (jobRequirements: JobCreation) => Candidate[];
  generateAssessment: (candidateId: string) => SkillsAssessment;
  generateVideoInterview: (candidateId: string) => VideoInterview;
  generateAnalytics: (candidates: Candidate[]) => WorkforceAnalytics;
  calculateROI: (analytics: WorkforceAnalytics) => ROIMetrics;
}
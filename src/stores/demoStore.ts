import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { useEffect } from 'react';
import { DemoStore, DemoStep, JobCreation, Candidate, SkillsAssessment, VideoInterview, WorkforceAnalytics, ROIMetrics } from '@/types/demo';
import { mockDataService } from '@/lib/mockData';

const initialSteps: DemoStep[] = [
  {
    id: 1,
    title: 'Job Creation',
    description: 'Create a detailed job posting with requirements',
    component: 'JobCreationStep',
    completed: false,
  },
  {
    id: 2,
    title: 'AI Candidate Matching',
    description: 'See AI-powered candidate matching in action',
    component: 'CandidateMatchingStep',
    completed: false,
  },
  {
    id: 3,
    title: 'Skills Assessment',
    description: 'Interactive coding and technical assessments',
    component: 'SkillsAssessmentStep',
    completed: false,
  },
  {
    id: 4,
    title: 'Video Interview Analysis',
    description: 'AI-powered video interview insights',
    component: 'VideoInterviewStep',
    completed: false,
  },
  {
    id: 5,
    title: 'Workforce Analytics',
    description: 'Comprehensive hiring analytics and insights',
    component: 'WorkforceAnalyticsStep',
    completed: false,
  },
  {
    id: 6,
    title: 'Results & ROI',
    description: 'View outcomes and calculate ROI',
    component: 'ResultsSummaryStep',
    completed: false,
  },
];

export const useDemoStore = create<DemoStore>()(
  devtools(
    (set, get) => ({
      // State
      currentStep: 1,
      steps: initialSteps,
      jobCreation: null,
      candidates: [],
      selectedCandidate: null,
      skillsAssessment: null,
      videoInterview: null,
      workforceAnalytics: null,
      roiMetrics: null,
      isLoading: false,
      error: null,

      // Actions
      nextStep: () => {
        const { currentStep, steps } = get();
        if (currentStep < steps.length) {
          set((state) => ({
            currentStep: currentStep + 1,
            steps: state.steps.map((step) =>
              step.id === currentStep ? { ...step, completed: true } : step
            ),
          }));
        }
      },

      prevStep: () => {
        const { currentStep } = get();
        if (currentStep > 1) {
          set({ currentStep: currentStep - 1 });
        }
      },

      goToStep: (step: number) => {
        const { steps } = get();
        if (step >= 1 && step <= steps.length) {
          set({ currentStep: step });
        }
      },

      setJobCreation: (job: JobCreation) => {
        set({ jobCreation: job, isLoading: true });
        
        // Generate candidates based on job requirements
        setTimeout(() => {
          const candidates = mockDataService.generateCandidates(job);
          set({ 
            candidates, 
            isLoading: false,
            steps: get().steps.map((step) =>
              step.id === 1 ? { ...step, completed: true } : step
            ),
          });
        }, 2000); // Simulate API call delay
      },

      selectCandidate: (candidate: Candidate) => {
        set({ selectedCandidate: candidate });
        
        // Generate assessment and interview data for selected candidate
        const assessment = mockDataService.generateAssessment(candidate.id);
        const interview = mockDataService.generateVideoInterview(candidate.id);
        
        set({ 
          skillsAssessment: assessment,
          videoInterview: interview,
        });
      },

      updateCandidateScore: (candidateId: string, scores: Partial<Candidate>) => {
        set((state) => ({
          candidates: state.candidates.map((candidate) =>
            candidate.id === candidateId ? { ...candidate, ...scores } : candidate
          ),
          selectedCandidate: state.selectedCandidate?.id === candidateId 
            ? { ...state.selectedCandidate, ...scores }
            : state.selectedCandidate,
        }));
      },

      setSkillsAssessment: (assessment: SkillsAssessment) => {
        set({ skillsAssessment: assessment });
        
        // Update candidate's assessment score
        if (get().selectedCandidate) {
          get().updateCandidateScore(assessment.candidateId, {
            assessmentScore: assessment.score,
          });
        }
      },

      setVideoInterview: (interview: VideoInterview) => {
        set({ videoInterview: interview });
        
        // Update candidate's interview score
        if (get().selectedCandidate) {
          get().updateCandidateScore(interview.candidateId, {
            interviewScore: interview.overallScore,
          });
        }
      },

      generateAnalytics: () => {
        const { candidates } = get();
        set({ isLoading: true });
        
        setTimeout(() => {
          const analytics = mockDataService.generateAnalytics(candidates);
          set({ 
            workforceAnalytics: analytics,
            isLoading: false,
            steps: get().steps.map((step) =>
              step.id === 5 ? { ...step, completed: true } : step
            ),
          });
        }, 1500);
      },

      calculateROI: () => {
        const { workforceAnalytics } = get();
        if (workforceAnalytics) {
          const roi = mockDataService.calculateROI(workforceAnalytics);
          set({ 
            roiMetrics: roi,
            steps: get().steps.map((step) =>
              step.id === 6 ? { ...step, completed: true } : step
            ),
          });
        }
      },

      resetDemo: () => {
        set({
          currentStep: 1,
          steps: initialSteps,
          jobCreation: null,
          candidates: [],
          selectedCandidate: null,
          skillsAssessment: null,
          videoInterview: null,
          workforceAnalytics: null,
          roiMetrics: null,
          isLoading: false,
          error: null,
        });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      setError: (error: string | null) => {
        set({ error });
      },
    }),
    {
      name: 'demo-store',
    }
  )
);

// URL synchronization hook
export const useDemoStepSync = () => {
  const { currentStep, goToStep } = useDemoStore();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const stepParam = params.get('step');
    
    if (stepParam) {
      const step = parseInt(stepParam, 10);
      if (step >= 1 && step <= 6 && step !== currentStep) {
        goToStep(step);
      }
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('step', currentStep.toString());
    window.history.replaceState({}, '', url.toString());
  }, [currentStep]);

  return { currentStep, goToStep };
};
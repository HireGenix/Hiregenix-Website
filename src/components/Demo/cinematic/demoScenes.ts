export interface DemoScene {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: number;
  background: string;
  sections: DemoSection[];
}

export interface DemoSection {
  type: 'intro' | 'dashboard' | 'process' | 'results' | 'analytics' | 'transition' | 'interactive' | 'comparison' | 'showcase';
  delay: number;
  duration: number;
  content: any;
}

export const demoScenes: DemoScene[] = [
  {
    id: 1,
    title: "Welcome to HireGenix",
    subtitle: "The Future of AI-Powered Recruitment",
    description: "Discover how artificial intelligence is revolutionizing talent acquisition and streamlining the hiring process for modern businesses.",
    duration: 5000,
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    sections: [
      {
        type: 'intro',
        delay: 0,
        duration: 2000,
        content: {
          title: "HireGenix Platform",
          features: ["AI-Powered Matching", "Smart Assessments", "Predictive Analytics"],
          stats: { companies: "500+", candidates: "100K+", success: "95%" }
        }
      }
    ]
  },
  {
    id: 2,
    title: "Intelligent Job Creation",
    subtitle: "AI-Assisted Job Posting & Requirements Analysis",
    description: "Watch as our AI analyzes job requirements, suggests optimal salary ranges, and predicts candidate availability in real-time.",
    duration: 8000,
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    sections: [
      {
        type: 'dashboard',
        delay: 500,
        duration: 3000,
        content: {
          formFields: [
            { label: "Job Title", value: "Senior Full Stack Developer", type: "typewriter" },
            { label: "Department", value: "Engineering", type: "select" },
            { label: "Location", value: "San Francisco, CA / Remote", type: "autocomplete" },
            { label: "Experience", value: "5-7 years", type: "range" }
          ]
        }
      },
      {
        type: 'process',
        delay: 3500,
        duration: 2500,
        content: {
          steps: [
            { name: "Market Analysis", progress: 100, status: "complete", time: "2.3s" },
            { name: "Salary Benchmarking", progress: 100, status: "complete", time: "1.8s" },
            { name: "Skills Mapping", progress: 100, status: "complete", time: "3.1s" },
            { name: "Candidate Pool Analysis", progress: 85, status: "processing", time: "4.2s" }
          ]
        }
      },
      {
        type: 'results',
        delay: 6000,
        duration: 2000,
        content: {
          insights: {
            salary: { min: 120000, max: 150000, median: 135000 },
            candidatePool: 187,
            competitiveness: "High",
            timeToFill: "14-21 days",
            recommendations: [
              "Consider remote work options to expand candidate pool",
              "Highlight growth opportunities and tech stack",
              "Competitive salary range for current market"
            ]
          }
        }
      }
    ]
  },
  {
    id: 3,
    title: "AI Candidate Matching Engine",
    subtitle: "Intelligent Talent Discovery & Scoring",
    description: "Experience our proprietary AI engine as it analyzes resumes, scores candidates, and identifies the perfect matches for your role.",
    duration: 10000,
    background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    sections: [
      {
        type: 'process',
        delay: 0,
        duration: 4000,
        content: {
          aiSteps: [
            { name: "Resume Parsing", description: "Extracting key information from 187 resumes", progress: 100, duration: 1500 },
            { name: "Skills Analysis", description: "Matching technical and soft skills", progress: 100, duration: 2000 },
            { name: "Experience Evaluation", description: "Analyzing career progression and relevance", progress: 100, duration: 1800 },
            { name: "Cultural Fit Assessment", description: "Evaluating company culture alignment", progress: 100, duration: 2200 },
            { name: "Predictive Scoring", description: "Calculating success probability", progress: 100, duration: 1000 }
          ]
        }
      },
      {
        type: 'results',
        delay: 4000,
        duration: 6000,
        content: {
          topCandidates: [
            {
              name: "Sarah Chen",
              avatar: "👩‍💻",
              score: 96,
              experience: "6 years",
              location: "San Francisco, CA",
              skills: ["React", "Node.js", "TypeScript", "AWS", "Python"],
              highlights: ["Led team of 8 developers", "Built scalable microservices", "Open source contributor"],
              availability: "2 weeks notice",
              salaryExpectation: "$140k-160k",
              matchReasons: [
                "Perfect technical skill match",
                "Strong leadership experience",
                "Located in preferred geography"
              ]
            },
            {
              name: "Michael Rodriguez",
              avatar: "👨‍💻",
              score: 93,
              experience: "5 years",
              location: "New York, NY",
              skills: ["Vue.js", "Python", "Docker", "GCP", "JavaScript"],
              highlights: ["Startup experience", "Full-stack expertise", "DevOps knowledge"],
              availability: "Immediate",
              salaryExpectation: "$125k-145k",
              matchReasons: [
                "Strong full-stack background",
                "Startup agility",
                "Below salary range"
              ]
            },
            {
              name: "Emily Johnson",
              avatar: "👩‍💻", 
              score: 90,
              experience: "7 years",
              location: "Austin, TX",
              skills: ["Angular", "Java", "Kubernetes", "Azure", "GraphQL"],
              highlights: ["Enterprise architecture", "Team mentoring", "Agile methodology"],
              availability: "1 month notice",
              salaryExpectation: "$135k-155k",
              matchReasons: [
                "Senior level experience",
                "Enterprise background",
                "Mentoring capabilities"
              ]
            },
            {
              name: "David Kim",
              avatar: "👨‍💻",
              score: 87,
              experience: "4 years",
              location: "Seattle, WA",
              skills: ["React", "GraphQL", "MongoDB", "Redis", "Elasticsearch"],
              highlights: ["E-commerce platform", "High-performance systems", "Data optimization"],
              availability: "3 weeks notice",
              salaryExpectation: "$115k-135k",
              matchReasons: [
                "Modern tech stack",
                "Performance optimization",
                "Cost-effective option"
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: 4,
    title: "Dynamic Skills Assessment",
    subtitle: "Interactive Coding Challenges & Real-time Evaluation",
    description: "See how our adaptive assessment platform evaluates candidates with personalized coding challenges and instant feedback.",
    duration: 9000,
    background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    sections: [
      {
        type: 'dashboard',
        delay: 0,
        duration: 3000,
        content: {
          codeEditor: {
            challenge: "Build a React component for user authentication",
            language: "javascript",
            difficulty: "Medium",
            timeLimit: "45 minutes",
            testCases: 8
          }
        }
      },
      {
        type: 'process',
        delay: 3000,
        duration: 4000,
        content: {
          liveAssessment: {
            candidateName: "Sarah Chen",
            progress: [
              { step: "Reading requirements", completed: true, time: "2:15" },
              { step: "Setting up component structure", completed: true, time: "5:30" },
              { step: "Implementing authentication logic", completed: true, time: "18:45" },
              { step: "Adding form validation", completed: true, time: "28:20" },
              { step: "Writing unit tests", completed: false, time: "35:10" },
              { step: "Optimization & cleanup", completed: false, time: "40:00" }
            ],
            metrics: {
              codeQuality: 92,
              problemSolving: 88,
              testCoverage: 85,
              timeEfficiency: 90
            }
          }
        }
      },
      {
        type: 'results',
        delay: 7000,
        duration: 2000,
        content: {
          assessmentResults: {
            overallScore: 89,
            breakdown: {
              "Technical Skills": 92,
              "Problem Solving": 88,
              "Code Quality": 90,
              "Time Management": 85,
              "Testing": 87
            },
            feedback: "Excellent technical implementation with clean, readable code. Strong understanding of React patterns and authentication best practices.",
            recommendation: "Proceed to technical interview"
          }
        }
      }
    ]
  },
  {
    id: 5,
    title: "AI Video Interview Analysis", 
    subtitle: "Emotion Recognition & Communication Assessment",
    description: "Advanced AI analyzes video interviews in real-time, evaluating communication skills, confidence levels, and personality traits.",
    duration: 8000,
    background: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
    sections: [
      {
        type: 'dashboard',
        delay: 0,
        duration: 3000,
        content: {
          videoInterview: {
            candidate: "Sarah Chen",
            interviewer: "Alex Thompson - Engineering Manager",
            duration: "45 minutes",
            questions: [
              "Tell me about your experience with React and Node.js",
              "How do you approach debugging complex issues?",
              "Describe a challenging project you've worked on"
            ]
          }
        }
      },
      {
        type: 'process',
        delay: 3000,
        duration: 3500,
        content: {
          realTimeAnalysis: {
            emotions: ["Confident", "Engaged", "Thoughtful", "Enthusiastic"],
            communicationMetrics: {
              clarity: 91,
              confidence: 88,
              engagement: 94,
              technicalAccuracy: 90
            },
            behavioralInsights: [
              "Maintains strong eye contact",
              "Clear and structured responses", 
              "Demonstrates active listening",
              "Shows genuine enthusiasm for role"
            ]
          }
        }
      },
      {
        type: 'results',
        delay: 6500,
        duration: 1500,
        content: {
          interviewResults: {
            overallRating: 91,
            communicationScore: 89,
            technicalKnowledge: 92,
            culturalFit: 90,
            recommendation: "Strong hire - proceed to final round",
            keyStrengths: [
              "Excellent technical communication",
              "Strong problem-solving approach",
              "Great cultural fit indicators"
            ]
          }
        }
      }
    ]
  },
  {
    id: 6,
    title: "Workforce Analytics & Insights",
    subtitle: "Predictive Hiring Intelligence & ROI Analysis",
    description: "Comprehensive analytics dashboard showing hiring trends, success predictions, and ROI calculations for data-driven decisions.",
    duration: 7000,
    background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    sections: [
      {
        type: 'analytics',
        delay: 0,
        duration: 4000,
        content: {
          dashboardMetrics: {
            timeToHire: { current: 14, previous: 28, improvement: "50%" },
            qualityOfHire: { score: 4.6, scale: 5, trend: "up" },
            costPerHire: { current: 3200, previous: 5800, savings: "$2,600" },
            candidateSatisfaction: { score: 4.4, scale: 5, trend: "stable" }
          },
          predictions: {
            successProbability: 89,
            retentionForecast: "24+ months",
            performanceProjection: "Top 20%",
            promotionLikelihood: "High"
          }
        }
      },
      {
        type: 'results',
        delay: 4000,
        duration: 3000,
        content: {
          roiCalculation: {
            traditional: {
              timeToHire: 28,
              costPerHire: 5800,
              qualityScore: 3.2,
              annualCost: 290000
            },
            withHireGenix: {
              timeToHire: 14,
              costPerHire: 3200,
              qualityScore: 4.6,
              annualCost: 160000
            },
            savings: {
              time: "50% faster hiring",
              cost: "$130,000 annual savings",
              quality: "44% improvement in hire quality"
            }
          }
        }
      }
    ]
  },
  {
    id: 7,
    title: "Automated Onboarding Journey",
    subtitle: "Seamless Integration from Hire to Productivity",
    description: "Experience our automated onboarding platform that transforms new hires into productive team members with personalized learning paths and AI-driven support.",
    duration: 9000,
    background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    sections: [
      {
        type: 'transition',
        delay: 0,
        duration: 2000,
        content: {
          title: "From Candidate to Team Member",
          animation: "slideUp",
          particles: true
        }
      },
      {
        type: 'interactive',
        delay: 2000,
        duration: 4000,
        content: {
          onboardingSteps: [
            {
              step: "Welcome Package",
              description: "Automated welcome email with company handbook, team introductions, and first-day schedule",
              icon: "📧",
              progress: 100,
              duration: 1000
            },
            {
              step: "Digital Workspace Setup",
              description: "Automatic account creation, access provisioning, and tool configuration",
              icon: "💻",
              progress: 100,
              duration: 1200
            },
            {
              step: "Personalized Learning Path",
              description: "AI-curated training modules based on role, experience, and team needs",
              icon: "🎓",
              progress: 100,
              duration: 1500
            },
            {
              step: "Mentor Assignment",
              description: "Smart matching with experienced team members for guidance and support",
              icon: "🤝",
              progress: 85,
              duration: 1800
            }
          ]
        }
      },
      {
        type: 'showcase',
        delay: 6000,
        duration: 3000,
        content: {
          metrics: {
            timeToProductivity: "40% faster",
            employeeSatisfaction: "4.8/5",
            retentionRate: "95%",
            completionRate: "98%"
          },
          testimonial: {
            text: "The onboarding experience was incredible. I felt prepared and supported from day one!",
            author: "Sarah Chen",
            role: "Senior Developer",
            avatar: "👩‍💻"
          }
        }
      }
    ]
  },
  {
    id: 8,
    title: "Global Talent Marketplace",
    subtitle: "Connect with Top Talent Worldwide",
    description: "Explore our global talent network with real-time availability, skills verification, and instant collaboration tools.",
    duration: 10000,
    background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    sections: [
      {
        type: 'interactive',
        delay: 0,
        duration: 5000,
        content: {
          worldMap: {
            regions: [
              { name: "North America", candidates: 25000, topSkills: ["React", "Python", "AWS"], timezone: "EST" },
              { name: "Europe", candidates: 30000, topSkills: ["Vue.js", "Go", "Azure"], timezone: "CET" },
              { name: "Asia Pacific", candidates: 45000, topSkills: ["Angular", "Java", "GCP"], timezone: "JST" },
              { name: "Latin America", candidates: 15000, topSkills: ["Node.js", "PHP", "Docker"], timezone: "BRT" }
            ],
            realTimeUpdates: true,
            animatedConnections: true
          }
        }
      },
      {
        type: 'comparison',
        delay: 5000,
        duration: 3000,
        content: {
          traditional: {
            reach: "Local market only",
            timeToFind: "4-8 weeks",
            vetting: "Manual resume review",
            cost: "High agency fees"
          },
          hiregenix: {
            reach: "Global talent pool",
            timeToFind: "1-2 weeks",
            vetting: "AI-powered verification",
            cost: "Transparent pricing"
          }
        }
      },
      {
        type: 'showcase',
        delay: 8000,
        duration: 2000,
        content: {
          liveDemo: {
            candidatePool: 115000,
            activeApplications: 1247,
            interviewsScheduled: 89,
            offersExtended: 23,
            realTimeMatching: true
          }
        }
      }
    ]
  },
  {
    id: 9,
    title: "AI Ethics & Bias Prevention",
    subtitle: "Fair and Transparent Hiring Decisions",
    description: "Discover how our AI systems ensure ethical hiring practices with bias detection, fairness metrics, and transparent decision-making processes.",
    duration: 8000,
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    sections: [
      {
        type: 'process',
        delay: 0,
        duration: 4000,
        content: {
          ethicsSteps: [
            {
              name: "Bias Detection",
              description: "Continuous monitoring for unconscious bias in job descriptions and selection criteria",
              progress: 100,
              status: "active",
              metrics: { biasScore: 0.02, benchmark: 0.05 }
            },
            {
              name: "Fairness Validation",
              description: "Ensuring equal opportunities across demographics with statistical parity checks",
              progress: 100,
              status: "active",
              metrics: { fairnessIndex: 0.97, target: 0.95 }
            },
            {
              name: "Transparency Reports",
              description: "Automated generation of decision explanations and audit trails",
              progress: 100,
              status: "active",
              metrics: { transparencyScore: 0.94, compliance: 0.99 }
            },
            {
              name: "Human Oversight",
              description: "Required human review for final hiring decisions with AI recommendations",
              progress: 100,
              status: "active",
              metrics: { humanReviewRate: 1.0, overrideRate: 0.03 }
            }
          ]
        }
      },
      {
        type: 'results',
        delay: 4000,
        duration: 4000,
        content: {
          ethicsMetrics: {
            diversityImprovement: "35% increase in diverse hires",
            biasReduction: "87% reduction in unconscious bias",
            complianceScore: "99.7% regulatory compliance",
            candidateTrust: "4.9/5 fairness rating",
            auditResults: {
              lastAudit: "December 2024",
              score: "A+",
              recommendations: "0 critical issues found",
              certification: "ISO 27001 Compliant"
            }
          }
        }
      }
    ]
  },
  {
    id: 10,
    title: "Future of Work Showcase",
    subtitle: "Next-Generation Hiring Solutions",
    description: "A glimpse into the future of recruitment with emerging technologies, predictive analytics, and revolutionary hiring methodologies.",
    duration: 12000,
    background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
    sections: [
      {
        type: 'transition',
        delay: 0,
        duration: 2000,
        content: {
          title: "The Future is Now",
          subtitle: "Revolutionary Hiring Technologies",
          animation: "morphing",
          effects: ["holographic", "particles", "lightSpeed"]
        }
      },
      {
        type: 'showcase',
        delay: 2000,
        duration: 5000,
        content: {
          futureTechnologies: [
            {
              name: "Neural Network Matching",
              description: "Advanced AI that understands context, potential, and cultural fit beyond traditional metrics",
              impact: "40% improvement in long-term success",
              status: "beta",
              visual: "neuralNetwork"
            },
            {
              name: "Virtual Reality Assessments",
              description: "Immersive job simulations for realistic skill evaluation and team dynamics testing",
              impact: "90% accuracy in performance prediction",
              status: "development",
              visual: "vrHeadset"
            },
            {
              name: "Blockchain Credentials",
              description: "Tamper-proof verification of skills, education, and work history on distributed ledger",
              impact: "99.9% fraud reduction",
              status: "pilot",
              visual: "blockchain"
            },
            {
              name: "Quantum Computing Analytics",
              description: "Unprecedented processing power for complex talent matching across millions of variables",
              impact: "1000x faster processing",
              status: "research",
              visual: "quantum"
            }
          ]
        }
      },
      {
        type: 'interactive',
        delay: 7000,
        duration: 3000,
        content: {
          timeline: {
            "2025": ["AI Ethics Standards", "Global Talent Pool", "Real-time Matching"],
            "2026": ["VR Assessments", "Blockchain Verification", "Predictive Analytics"],
            "2027": ["Neural Networks", "Quantum Processing", "Autonomous Hiring"],
            "2028": ["Consciousness Mapping", "Holographic Interviews", "Time-space Recruitment"]
          }
        }
      },
      {
        type: 'results',
        delay: 10000,
        duration: 2000,
        content: {
          futureImpact: {
            timeReduction: "95% faster hiring process",
            accuracyImprovement: "99.5% match accuracy",
            costSavings: "$2M+ annual savings per 1000 hires",
            candidateExperience: "Perfect 5.0 satisfaction rating",
            globalReach: "Access to 10M+ verified professionals worldwide"
          }
        }
      }
    ]
  }
];

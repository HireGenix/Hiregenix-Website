import { JobCreation, Candidate, SkillsAssessment, VideoInterview, WorkforceAnalytics, ROIMetrics, AssessmentQuestion, MockDataService } from '@/types/demo';

class MockDataServiceImpl implements MockDataService {
  private skillsDatabase = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'C#', 'C++',
    'Go', 'Rust', 'PHP', 'Ruby', 'Swift', 'Kotlin', 'Dart', 'SQL', 'MongoDB',
    'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure',
    'GCP', 'Git', 'CI/CD', 'DevOps', 'Agile', 'Scrum', 'Leadership', 'Communication',
    'Problem Solving', 'Team Management', 'Project Management', 'Data Science',
    'Machine Learning', 'AI', 'Deep Learning', 'Analytics', 'UI/UX Design',
    'Figma', 'Adobe Creative Suite', 'Marketing', 'Sales', 'Customer Service'
  ];

  private locations = [
    'San Francisco, CA', 'New York, NY', 'Seattle, WA', 'Austin, TX', 'Chicago, IL',
    'Boston, MA', 'Denver, CO', 'Remote', 'Los Angeles, CA', 'Atlanta, GA'
  ];

  private firstNames = [
    'Alex', 'Sarah', 'Michael', 'Emily', 'David', 'Jessica', 'James', 'Lisa',
    'Robert', 'Amanda', 'Christopher', 'Michelle', 'Daniel', 'Ashley', 'Matthew',
    'Jennifer', 'Andrew', 'Nicole', 'Joshua', 'Elizabeth', 'Ryan', 'Samantha',
    'Brandon', 'Rachel', 'Tyler', 'Stephanie', 'Kevin', 'Lauren', 'Justin', 'Megan'
  ];

  private lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
    'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
    'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson',
    'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson'
  ];

  generateCandidates(jobRequirements: JobCreation): Candidate[] {
    const candidates: Candidate[] = [];
    const numCandidates = Math.floor(Math.random() * 15) + 20; // 20-35 candidates

    for (let i = 0; i < numCandidates; i++) {
      const firstName = this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
      const lastName = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
      const name = `${firstName} ${lastName}`;
      
      // Generate skills that partially match job requirements
      const candidateSkills = this.generateCandidateSkills(jobRequirements.skills);
      const matchScore = this.calculateMatchScore(candidateSkills, jobRequirements);

      candidates.push({
        id: `candidate-${i + 1}`,
        name,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@email.com`,
        phone: `+1 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
        location: this.locations[Math.floor(Math.random() * this.locations.length)],
        experience: Math.floor(Math.random() * 15) + 1,
        skills: candidateSkills,
        avatar: `/avatars/avatar${(i % 3) + 1}.jpg`,
        resume: `resume-${name.replace(' ', '-').toLowerCase()}.pdf`,
        matchScore: matchScore.overall,
        skillsMatch: matchScore.skills,
        experienceMatch: matchScore.experience,
        locationMatch: matchScore.location,
        overallRating: Math.floor(Math.random() * 5) + 1,
        appliedDate: this.generateRandomDate(),
        status: this.getRandomStatus(),
      });
    }

    // Sort by match score descending
    return candidates.sort((a, b) => b.matchScore - a.matchScore);
  }

  generateAssessment(candidateId: string): SkillsAssessment {
    const questions: AssessmentQuestion[] = [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Which of the following is a JavaScript framework?',
        options: ['React', 'Laravel', 'Django', 'Rails'],
        correctAnswer: 'React',
        points: 10,
      },
      {
        id: 'q2',
        type: 'coding',
        question: 'Write a function that returns the sum of two numbers.',
        code: {
          language: 'javascript',
          template: 'function sum(a, b) {\n  // Your code here\n}',
          testCases: [
            { input: 'sum(2, 3)', expectedOutput: '5', description: 'Basic addition' },
            { input: 'sum(-1, 1)', expectedOutput: '0', description: 'Negative numbers' },
            { input: 'sum(0, 0)', expectedOutput: '0', description: 'Zero values' },
          ],
        },
        points: 20,
      },
      {
        id: 'q3',
        type: 'short-answer',
        question: 'Explain the difference between let, const, and var in JavaScript.',
        points: 15,
      },
      {
        id: 'q4',
        type: 'coding',
        question: 'Implement a function to check if a string is a palindrome.',
        code: {
          language: 'javascript',
          template: 'function isPalindrome(str) {\n  // Your code here\n}',
          testCases: [
            { input: 'isPalindrome("racecar")', expectedOutput: 'true', description: 'Simple palindrome' },
            { input: 'isPalindrome("hello")', expectedOutput: 'false', description: 'Not a palindrome' },
            { input: 'isPalindrome("A man a plan a canal Panama")', expectedOutput: 'true', description: 'Complex palindrome' },
          ],
        },
        points: 25,
      },
      {
        id: 'q5',
        type: 'multiple-choice',
        question: 'What is the time complexity of searching in a balanced binary search tree?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correctAnswer: 'O(log n)',
        points: 10,
      },
    ];

    return {
      id: `assessment-${candidateId}`,
      candidateId,
      questions,
      startTime: new Date().toISOString(),
      score: Math.floor(Math.random() * 40) + 60, // 60-100 score
      completed: false,
    };
  }

  generateVideoInterview(candidateId: string): VideoInterview {
    return {
      id: `interview-${candidateId}`,
      candidateId,
      duration: Math.floor(Math.random() * 30) + 15, // 15-45 minutes
      questions: [
        'Tell me about yourself and your background.',
        'What interests you about this position?',
        'Describe a challenging project you worked on.',
        'How do you handle working under pressure?',
        'Where do you see yourself in 5 years?',
      ],
      sentimentAnalysis: {
        positive: Math.floor(Math.random() * 30) + 60,
        neutral: Math.floor(Math.random() * 20) + 10,
        negative: Math.floor(Math.random() * 15) + 5,
      },
      keywordAnalysis: {
        technical: ['programming', 'development', 'coding', 'algorithms', 'frameworks'],
        soft: ['teamwork', 'communication', 'leadership', 'problem-solving'],
        leadership: ['management', 'mentoring', 'delegation', 'strategy'],
      },
      confidenceScore: Math.floor(Math.random() * 30) + 70,
      communicationScore: Math.floor(Math.random() * 25) + 75,
      overallScore: Math.floor(Math.random() * 20) + 80,
    };
  }

  generateAnalytics(candidates: Candidate[]): WorkforceAnalytics {
    const departments = ['Engineering', 'Product', 'Design', 'Marketing', 'Sales', 'HR'];
    
    return {
      totalApplications: candidates.length,
      averageTimeToHire: Math.floor(Math.random() * 10) + 15, // 15-25 days
      topSkills: this.skillsDatabase
        .slice(0, 10)
        .map(skill => ({
          skill,
          demand: Math.floor(Math.random() * 50) + 20,
        })),
      departmentStats: departments.map(dept => ({
        department: dept,
        openings: Math.floor(Math.random() * 8) + 2,
        filled: Math.floor(Math.random() * 5) + 1,
      })),
      diversityMetrics: {
        gender: {
          male: Math.floor(Math.random() * 20) + 40,
          female: Math.floor(Math.random() * 20) + 35,
          other: Math.floor(Math.random() * 5) + 2,
        },
        experience: {
          junior: Math.floor(Math.random() * 15) + 25,
          mid: Math.floor(Math.random() * 15) + 35,
          senior: Math.floor(Math.random() * 10) + 15,
        },
      },
      predictedHires: Math.floor(Math.random() * 5) + 3,
      costPerHire: Math.floor(Math.random() * 2000) + 3000,
      qualityOfHire: Math.floor(Math.random() * 20) + 80,
    };
  }

  calculateROI(analytics: WorkforceAnalytics): ROIMetrics {
    const baseTimeToHire = 45; // days
    const baseCostPerHire = 5000; // dollars
    
    return {
      timeToHireReduction: Math.floor(((baseTimeToHire - analytics.averageTimeToHire) / baseTimeToHire) * 100),
      costSavings: baseCostPerHire - analytics.costPerHire,
      qualityImprovement: analytics.qualityOfHire - 70, // baseline quality
      efficiencyGain: Math.floor(Math.random() * 30) + 40,
      annualSavings: (baseCostPerHire - analytics.costPerHire) * analytics.totalApplications * 4,
    };
  }

  private generateCandidateSkills(jobSkills: string[]): string[] {
    const candidateSkills: string[] = [];
    const numJobSkills = Math.floor(Math.random() * jobSkills.length) + 1;
    const numAdditionalSkills = Math.floor(Math.random() * 8) + 2;

    // Add some job-relevant skills
    const shuffledJobSkills = [...jobSkills].sort(() => 0.5 - Math.random());
    candidateSkills.push(...shuffledJobSkills.slice(0, numJobSkills));

    // Add additional random skills
    const remainingSkills = this.skillsDatabase.filter(skill => !candidateSkills.includes(skill));
    const shuffledAdditional = remainingSkills.sort(() => 0.5 - Math.random());
    candidateSkills.push(...shuffledAdditional.slice(0, numAdditionalSkills));

    return candidateSkills;
  }

  private calculateMatchScore(candidateSkills: string[], jobRequirements: JobCreation): {
    overall: number;
    skills: number;
    experience: number;
    location: number;
  } {
    // Skills match
    const matchingSkills = candidateSkills.filter(skill => 
      jobRequirements.skills.includes(skill)
    );
    const skillsMatch = Math.floor((matchingSkills.length / jobRequirements.skills.length) * 100);

    // Experience match (simplified)
    const experienceMatch = Math.floor(Math.random() * 30) + 70;

    // Location match (simplified)
    const locationMatch = Math.floor(Math.random() * 40) + 60;

    // Overall weighted score
    const overall = Math.floor(
      (skillsMatch * 0.5) + (experienceMatch * 0.3) + (locationMatch * 0.2)
    );

    return { overall, skills: skillsMatch, experience: experienceMatch, location: locationMatch };
  }

  private generateRandomDate(): string {
    const start = new Date();
    start.setDate(start.getDate() - 30); // 30 days ago
    const end = new Date();
    
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime).toISOString();
  }

  private getRandomStatus(): 'applied' | 'screening' | 'assessment' | 'interview' | 'hired' | 'rejected' {
    const statuses: ('applied' | 'screening' | 'assessment' | 'interview' | 'hired' | 'rejected')[] = [
      'applied', 'applied', 'applied', 'screening', 'screening', 'assessment', 'interview', 'hired', 'rejected'
    ];
    return statuses[Math.floor(Math.random() * statuses.length)];
  }
}

export const mockDataService = new MockDataServiceImpl();
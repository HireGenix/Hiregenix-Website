/**
 * Platform Service
 * 
 * This service handles communication with the main HireGenix platform API.
 * It provides methods to fetch data from the platform, such as job listings,
 * company profiles, and candidate data.
 */

import axios from 'axios';

// Get the platform API URL from environment variables - default to the local next-hiregenix API
const PLATFORM_API_URL = process.env.PLATFORM_API_URL || 'http://localhost:3001/api';
const PLATFORM_API_KEY = process.env.PLATFORM_API_KEY;

// Create an axios instance for the platform API
const platformApi = axios.create({
  baseURL: PLATFORM_API_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(PLATFORM_API_KEY && { 'Authorization': `Bearer ${PLATFORM_API_KEY}` })
  }
});

// Interface for job filters
export interface JobFilters {
  search?: string;
  location?: string;
  status?: string;
  industry?: string;
  companyId?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Interface for job data from the platform
export interface PlatformJob {
  id: string;
  title: string;
  description: string;
  location?: string;
  status: string;
  uniqueLink?: string;
  userId: string;
  companyId: string;
  Company?: {
    id: string;
    name: string;
    logo?: string;
    industry?: string;
    size?: string;
    location?: string;
  };
  Salary?: {
    min: number;
    max: number;
    currency: string;
    period: string;
    isNegotiable: boolean;
  };
  Skill?: Array<{
    id: string;
    name: string;
    level: string;
    yearsOfExperience?: number;
  }>;
  User?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  timeline?: {
    currentStage: string;
    stages: {
      screening: { status: string; completedAt: string | null };
      assessment: { status: string; completedAt: string | null };
      interview: { status: string; completedAt: string | null };
      offer: { status: string; completedAt: string | null };
      hired: { status: string; completedAt: string | null };
    };
  };
  createdAt: string;
  updatedAt: string;
}

// Interface for company data from the platform
export interface PlatformCompany {
  id: string;
  name: string;
  description?: string;
  logo?: string;
  website?: string;
  industry?: string;
  size?: string;
  location?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Fetch jobs from the platform
 * @param filters Optional filters to apply to the job search
 * @returns Array of jobs matching the filters
 */
export async function fetchJobs(filters: JobFilters = {}): Promise<PlatformJob[]> {
  try {
    // Build query parameters from filters
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, value.toString());
      }
    });

    // Make the API request
    const response = await platformApi.get(`/jobs?${params.toString()}`);
    
    // Return the jobs data
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching jobs from platform:', error);
    
    // If the API request fails, return an empty array
    return [];
  }
}

/**
 * Fetch a single job by ID
 * @param jobId The ID of the job to fetch
 * @returns The job data or null if not found
 */
export async function fetchJobById(jobId: string): Promise<PlatformJob | null> {
  try {
    const response = await platformApi.get(`/jobs/${jobId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching job ${jobId} from platform:`, error);
    return null;
  }
}

/**
 * Fetch companies from the platform
 * @param filters Optional filters to apply to the company search
 * @returns Array of companies matching the filters
 */
export async function fetchCompanies(filters: Record<string, any> = {}): Promise<PlatformCompany[]> {
  try {
    // Build query parameters from filters
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, value.toString());
      }
    });

    // Make the API request
    const response = await platformApi.get(`/companies?${params.toString()}`);
    
    // Return the companies data
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching companies from platform:', error);
    return [];
  }
}

/**
 * Fetch a single company by ID
 * @param companyId The ID of the company to fetch
 * @returns The company data or null if not found
 */
export async function fetchCompanyById(companyId: string): Promise<PlatformCompany | null> {
  try {
    const response = await platformApi.get(`/companies/${companyId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching company ${companyId} from platform:`, error);
    return null;
  }
}

/**
 * Apply for a job on the platform
 * @param jobId The ID of the job to apply for
 * @param applicationData The application data
 * @returns The application result
 */
export async function applyForJob(jobId: string, applicationData: any): Promise<any> {
  try {
    const response = await platformApi.post(`/jobs/${jobId}/apply`, applicationData);
    return response.data;
  } catch (error) {
    console.error(`Error applying for job ${jobId}:`, error);
    throw error;
  }
}

const platformService = {
  fetchJobs,
  fetchJobById,
  fetchCompanies,
  fetchCompanyById,
  applyForJob
};

export default platformService;

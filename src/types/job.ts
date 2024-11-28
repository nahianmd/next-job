// Enums for fixed values
export enum JobType {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT',
  INTERNSHIP = 'INTERNSHIP',
  FREELANCE = 'FREELANCE'
}

export enum ExperienceLevel {
  ENTRY = 'ENTRY',
  JUNIOR = 'JUNIOR',
  MID = 'MID',
  SENIOR = 'SENIOR',
  LEAD = 'LEAD',
  EXECUTIVE = 'EXECUTIVE'
}

export enum WorkLocation {
  ONSITE = 'ONSITE',
  REMOTE = 'REMOTE',
  HYBRID = 'HYBRID'
}

// Interface for salary range
export interface SalaryRange {
  min: number;
  max: number;
  currency: string;
  period: 'HOURLY' | 'MONTHLY' | 'YEARLY';
}

// Interface for company information
export interface Company {
  id: string;
  name: string;
  logo?: string;
  website?: string;
  location: string;
}

// Main Job interface
export interface Job {
  id: string;
  title: string;
  company: Company;
  description: string;
  requirements: string[];
  responsibilities: string[];
  qualifications: string[];
  skills: string[];
  jobType: JobType;
  experienceLevel: ExperienceLevel;
  workLocation: WorkLocation;
  location: string;
  salary?: SalaryRange;
  benefits?: string[];
  applicationDeadline?: Date;
  postedDate: Date;
  updatedDate: Date;
  isActive: boolean;
  numberOfVacancies: number;
  applicationUrl?: string;
  department?: string;
  contactEmail?: string;
  tags?: string[];
}

// Type for creating a new job (omitting auto-generated fields)
export type CreateJobInput = Omit<Job, 'id' | 'postedDate' | 'updatedDate'>;

// Type for updating an existing job
export type UpdateJobInput = Partial<CreateJobInput>;

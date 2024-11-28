import { NextRequest, NextResponse } from 'next/server';
import { ExperienceLevel, JobType, WorkLocation } from '@/types/job';
import { mockJobs } from '@/_mockApis/job';

interface FilterParams {
  jobType?: JobType;
  experienceLevel?: ExperienceLevel;
  workLocation?: WorkLocation;
  skills?: string[];
  department?: string;
  salaryMin?: number;
  salaryMax?: number;
  limit?: number;
  pageNo?: number;
}

// Jobs By Filter
export async function POST(request: NextRequest) {
  try {
    const filters: FilterParams = await request.json();

    const limit = filters.limit || 10;
    const pageNo = filters.pageNo || 1;

    const filteredJobs = mockJobs.filter((job) => {
      let matches = true;

      if (filters.jobType && job.jobType !== filters.jobType) {
        matches = false;
      }

      if (filters.experienceLevel && job.experienceLevel !== filters.experienceLevel) {
        matches = false;
      }

      if (filters.workLocation && job.workLocation !== filters.workLocation) {
        matches = false;
      }

      if (filters.department && job.department !== filters.department) {
        matches = false;
      }

      if (filters.salaryMin && job.salary?.min && job.salary?.min < filters.salaryMin) {
        matches = false;
      }

      if (filters.salaryMax && job.salary?.max && job.salary?.max > filters.salaryMax) {
        matches = false;
      }

      if (filters.skills?.length) {
        const hasRequiredSkill = job.skills.some((skill) => filters.skills?.includes(skill));
        if (!hasRequiredSkill) {
          matches = false;
        }
      }

      return matches;
    });

    const totalJobs = filteredJobs.length;
    const totalPages = Math.ceil(totalJobs / limit);
    const startIndex = (pageNo - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

    return NextResponse.json({
      jobs: paginatedJobs,
      metadata: {
        totalJobs,
        totalPages,
        currentPage: pageNo,
        jobsPerPage: limit,
        hasNextPage: pageNo < totalPages,
        hasPreviousPage: pageNo > 1
      }
    });
  } catch (error) {
    console.error('Error in jobs API route:', error);

    return NextResponse.json({ error: 'Failed to process job search request' }, { status: 500 });
  }
}

// GET method for simple job listing without filters
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = Number(searchParams.get('limit')) || 10;
    const pageNo = Number(searchParams.get('page')) || 1;

    const startIndex = (pageNo - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedJobs = mockJobs.slice(startIndex, endIndex);

    return NextResponse.json({
      jobs: paginatedJobs,
      metadata: {
        totalJobs: mockJobs.length,
        totalPages: Math.ceil(mockJobs.length / limit),
        currentPage: pageNo,
        jobsPerPage: limit
      }
    });
  } catch (error) {
    console.error('Error in GET jobs:', error);
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}

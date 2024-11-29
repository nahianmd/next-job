// app/api/jobs/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { mockJobs } from '@/_mockApis/job';

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const jobId = params.id;

    const job = mockJobs.find((job) => job.id === jobId);

    if (!job) {
      return NextResponse.json(
        {
          error: 'Job not found',
          message: 'The requested job posting could not be found. It may have been removed or the URL might be incorrect.'
        },
        { status: 404 }
      );
    }

    // Add some additional metadata that might be useful for the details page
    const enrichedJobData = {
      ...job,
      metadata: {
        postedDate: new Date(job.postedDate).toISOString(),
        updatedDate: new Date(job.updatedDate).toISOString(),
        daysPosted: Math.floor((new Date().getTime() - new Date(job.postedDate).getTime()) / (1000 * 60 * 60 * 24)),
        // Format salary range for display
        salaryRange: {
          formatted: `${job.salary ? job.salary.currency : 'N/A'} ${job.salary ? job.salary.min.toLocaleString() : '0.00'} - ${job.salary ? job.salary.max.toLocaleString() : '0.00'} ${job.salary ? job.salary.period : 'N/A'}`,
          ...job.salary
        },
        isRecent: new Date(job.postedDate).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000,
        applicationUrl: `/jobs/${job.id}/apply`,
        shareUrl: `${request.nextUrl.origin}/jobs/${job.id}`
      },
      details: {
        requirements: {
          essential: job.requirements,
          qualifications: job.qualifications
        },
        responsibilities: job.responsibilities,
        benefits: job.benefits
      },
      // Similar jobs (you could implement actual logic here)
      similarJobs: mockJobs
        .filter((j) => j.id !== job.id && (j.department === job.department || j.skills.some((skill) => job.skills.includes(skill))))
        .slice(0, 3) // Get up to 3 similar jobs
        .map((j) => ({
          id: j.id,
          title: j.title,
          company: j.company,
          location: j.location,
          salary: j.salary
        }))
    };

    return NextResponse.json(enrichedJobData);
  } catch (error) {
    // Log the error server-side for debugging
    console.error('Error fetching job details:', error);

    // Return a user-friendly error message
    return NextResponse.json(
      {
        error: 'Failed to fetch job details',
        message: 'An error occurred while retrieving the job details. Please try again later.'
      },
      { status: 500 }
    );
  }
}

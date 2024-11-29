import { Job } from '@/types/job';
import JobCard from '@/components/JobCard';
import Pagination from '@/components/Pagination';

interface JobListPageProps {
  jobs: Job[];
  metadata: {
    totalJobs: number;
    totalPages: number;
    currentPage: number;
    jobsPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export default async function JobList({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...searchParams })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }

    const { jobs, metadata }: { jobs: Job[]; metadata: JobListPageProps['metadata'] } = await response.json();

    return (
      <div className="space-y-6">
        <div className={'ml-4'}>We found {metadata.totalJobs} jobs</div>
        {jobs.map((job) => (
          <div key={job.id}>
            <JobCard job={job} size={'long'} />
          </div>
        ))}
        <Pagination totalPages={metadata.totalPages} totalItems={metadata.totalJobs} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching job listings:', error);
    return <div>Error loading jobs</div>;
  }
}

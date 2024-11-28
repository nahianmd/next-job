import { Job } from '@/types/job';

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
        {jobs.map((job: Job) => (
          <div key={job.id} className="p-4 border rounded-lg shadow">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600">{job.company.name}</p>
                <p className="text-gray-500">{job.location}</p>
              </div>
              <div className="text-right">
                <p className="text-green-600">
                  ${job.salary ? job.salary.min.toLocaleString() : '0.00'} - ${job.salary ? job.salary.max.toLocaleString() : '0.00'}
                </p>
                <p className="text-gray-500">{job.jobType}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-700">{job.description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Pagination component would go here */}
      </div>
    );
  } catch (error) {
    console.error('Error fetching job listings:', error);
    return <div>Error loading jobs</div>;
  }
}

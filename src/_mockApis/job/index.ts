// Mock data for jobs
import { Job } from '@/types/job';
import services from '@/utils/mockAdapter';
import { jobs } from '@/_mockApis/job/data';

export const mockJobs: Job[] = jobs;

// Jobs
services.onGet('/api/getJobs').reply(200, { mockJobs });

// Job details
services.onGet('/api/job/:id').reply((config) => {
  try {
    const { id } = config.params;
    const job = mockJobs.find((job) => job.id === id);
    if (!job) {
      return [404, { message: 'Job not found' }];
    }
    return [200, job];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

// Jobs by filter
services.onPost('/api/getJobs/filter').reply((config) => {
  try {
    const { jobType, experienceLevel, skills, workLocation, department, salaryMin, salaryMax, deadline, limit, pageNo } = JSON.parse(
      config.data
    );

    const results = mockJobs.filter((job) => {
      let matches = true;

      if (jobType && job.jobType !== jobType) matches = false;

      if (experienceLevel && job.experienceLevel !== experienceLevel) matches = false;

      if (skills && !job.skills.some((skill) => skills.includes(skill))) matches = false;

      if (workLocation && job.workLocation !== workLocation) matches = false;

      if (department && job.department !== department) matches = false;

      if ((salaryMin && job.salary?.min && job.salary?.min < salaryMin) || (salaryMax && job.salary?.max && job.salary?.max > salaryMax))
        matches = false;

      if (deadline && job.applicationDeadline && new Date(job.applicationDeadline) > new Date(deadline)) matches = false;

      return matches;
    });

    const totalData = results.length;
    const totalPages = Math.ceil(totalData / limit);
    const startIndex = (pageNo - 1) * limit;
    const paginatedResults = results.slice(startIndex, startIndex + limit);

    return [200, { results: paginatedResults, totalData, totalPages, currentPage: pageNo }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

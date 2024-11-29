import { useQuery } from '@tanstack/react-query';
import { ExperienceLevel, Job, JobType, WorkLocation } from '@/types/job';
import { jobKeys } from '@/react_query/query-keys';
import { getJobsByFilter } from '@/services/job';

export interface JobFilterPayload {
  jobType?: JobType;
  experienceLevel?: ExperienceLevel;
  skills?: string[];
  workLocation?: WorkLocation;
  department?: string;
  salaryMin?: number;
  salaryMax?: number;
  deadline?: string;
  limit: number;
  pageNo: number;
}

export interface JobsWithPagination {
  data: Job[];
  totalPages: number;
  pageNo: number;
  totalData: number;
}

const UseGetJobsByFilter = (data: JobFilterPayload, dependencies: boolean = true) => {
  const result = useQuery<JobsWithPagination, Error>({
    queryKey: jobKeys.list(data),
    queryFn: () => getJobsByFilter(data),
    enabled: dependencies
  });

  return {
    totalDays: result.data && result.data.totalData ? result.data.totalData : 0,
    jobList: result.data && result.data.data ? result.data.data : [],
    isJobListFetching: result.isFetching,
    isJobListError: result.isError,
    jobListError: result.error,
    isJobListSuccess: result.isSuccess,
    ...result
  };
};

export default UseGetJobsByFilter;

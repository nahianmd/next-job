import axios from '@/utils/axios';
import { JobFilterPayload } from '@/hooks/consume_api/query/useGetJobsByFilter';

export const getJobsByFilter = async (data: JobFilterPayload) => {
  const response = await axios({
    url: `/api/jobs`,
    method: 'post',
    data
  });
  return response?.data;
};

export const getJobDetails = async (jobId: string) => {
  const response = await axios({
    url: `/api/job/${jobId}`,
    method: 'get'
  });
  return response.data;
};

// export const createMenu = async (data: any) => {
//   return axiosServices({
//     url: `/api/v1/administration/addMenu`,
//     method: 'post',
//     data
//   });
// };

import { KeyedObject } from '@/types';

export const jobCategoryKeys = {
  all: ['jobCategories'] as const,
  lists: () => [...jobCategoryKeys.all, 'list'] as const,
  list: (filters: string | KeyedObject) => [...jobCategoryKeys.lists(), filters] as const,
  details: () => [...jobCategoryKeys.all, 'detail'] as const,
  detail: (id: string) => [...jobCategoryKeys.details(), id] as const
};

export const jobKeys = {
  all: ['jobs'] as const,
  lists: () => [...jobKeys.all, 'list'] as const,
  list: (filters: string | KeyedObject) => [...jobKeys.lists(), filters] as const,
  details: () => [...jobKeys.all, 'detail'] as const,
  detail: (id: string) => [...jobKeys.details(), id] as const
};

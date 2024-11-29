// hooks/useJobFilters.ts
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useTransition } from 'react';
import { JobFilterPayload } from '@/types/job';

export const PAGE_SIZE_OPTIONS = [10, 15, 25, 50];
export const DEFAULT_PAGE_SIZE = 15;

export function useJobFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const updateFilter = useCallback(
    (key: keyof JobFilterPayload, value: string, shouldResetPage: boolean = true) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set(key.toString(), value);
      } else {
        params.delete(key.toString());
      }

      if (shouldResetPage && key !== 'page') {
        params.set('page', '1');
      }

      startTransition(() => {
        router.push(`/jobs?${params.toString()}`);
      });
    },
    [router, searchParams]
  );

  const updatePageSize = useCallback(
    (newLimit: number) => {
      updateFilter('limit', newLimit.toString());
    },
    [updateFilter]
  );

  const currentFilters = {
    jobType: searchParams.get('jobType') || '',
    workLocation: searchParams.get('workLocation') || '',
    experienceLevel: searchParams.get('experienceLevel') || '',
    page: searchParams.get('page') || '1',
    limit: searchParams.get('limit') || DEFAULT_PAGE_SIZE.toString()
  };

  return {
    filters: currentFilters,
    updateFilter,
    updatePageSize,
    isPending,
    PAGE_SIZE_OPTIONS
  };
}

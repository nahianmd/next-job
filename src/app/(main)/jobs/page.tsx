import { Suspense } from 'react';
import JobList from '@/app/(main)/jobs/JobList';
import JobFilters from '@/app/(main)/jobs/JobFilters';

// This is a Server Component
export default function JobsPage({ searchParams = {} }: { searchParams: { [key: string]: string | undefined } }) {
  return (
    <main className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Job Listings</h1>

      <JobFilters />

      <Suspense fallback={<div>Loading jobs...</div>}>
        <JobList searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

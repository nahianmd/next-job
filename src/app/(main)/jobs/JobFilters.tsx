'use client';

import { useJobFilters } from '@/hooks/useJobFilters';
import { ExperienceLevel, JobType, WorkLocation } from '@/types/job';

// We create a component for each filter to keep our code organized and maintainable
function FilterSelect({
  label,
  value,
  options,
  onChange,
  disabled
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  disabled: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="p-2 border rounded-lg min-w-[200px] bg-white disabled:bg-gray-50
                 disabled:cursor-not-allowed focus:outline-none focus:ring-2
                 focus:ring-blue-500"
      >
        <option value="">All {label}s</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function JobFilters() {
  // Use our custom hook for filter management
  const { filters, updateFilter, isPending } = useJobFilters();

  // Convert our enum values to options for the select components
  const jobTypeOptions = Object.values(JobType).map((type) => ({
    value: type,
    label: type.replace(/_/g, ' ').charAt(0) + type.slice(1).toLowerCase().replace(/_/g, ' ')
  }));

  const locationOptions = Object.values(WorkLocation).map((location) => ({
    value: location,
    label: location.charAt(0) + location.slice(1).toLowerCase()
  }));

  const experienceOptions = Object.values(ExperienceLevel).map((level) => ({
    value: level,
    label: level.replace(/_/g, ' ').charAt(0) + level.slice(1).toLowerCase().replace(/_/g, ' ')
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FilterSelect
          label="Job Type"
          value={filters.jobType}
          options={jobTypeOptions}
          onChange={(value) => updateFilter('jobType', value)}
          disabled={isPending}
        />

        <FilterSelect
          label="Location"
          value={filters.workLocation}
          options={locationOptions}
          onChange={(value) => updateFilter('workLocation', value)}
          disabled={isPending}
        />

        <FilterSelect
          label="Experience Level"
          value={filters.experienceLevel}
          options={experienceOptions}
          onChange={(value) => updateFilter('experienceLevel', value)}
          disabled={isPending}
        />
      </div>

      {/* Loading indicator */}
      {isPending && <div className="mt-4 text-sm text-blue-600">Updating results...</div>}

      {/* Active filters display */}
      <div className="mt-4 flex flex-wrap gap-2">
        {Object.entries(filters).map(([key, value]) => {
          if (!value || key === 'page' || key === 'limit') return null;

          return (
            <span
              key={key}
              className="inline-flex items-center px-3 py-1 rounded-full
                       bg-blue-50 text-blue-700 text-sm"
            >
              {value.replace(/_/g, ' ')}
              <button onClick={() => updateFilter(key, '')} disabled={isPending} className="ml-2 focus:outline-none disabled:opacity-50">
                ×
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}

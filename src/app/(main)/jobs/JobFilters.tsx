'use client';

import { useJobFilters } from '@/hooks/useJobFilters';
import { ExperienceLevel, JobType, WorkLocation } from '@/types/job';
import { FilterCarousel } from '@/components/FilterCarousel';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { formatEnumToOptions } from '@/utils/helper';

interface FilterSelectProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  disabled: boolean;
  placeholder: string;
}

function FilterSelect({ label, value, options, onChange, disabled, placeholder }: FilterSelectProps) {
  const selectValue = value || 'all';

  const handleChange = (newValue: string) => {
    onChange(newValue === 'all' ? '' : newValue);
  };

  return (
    <Select value={selectValue} onValueChange={handleChange} disabled={disabled}>
      <SelectTrigger className={cn('w-full h-12 text-base', disabled && 'opacity-50 cursor-not-allowed')}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">{placeholder}</SelectItem>
          {options.map(({ value, label }) => (
            <SelectItem key={value} value={value} className="text-base">
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default function JobFilters() {
  const { filters, updateFilter, isPending } = useJobFilters();

  const jobTypeOptions = formatEnumToOptions(JobType);
  const locationOptions = formatEnumToOptions(WorkLocation);
  const experienceOptions = formatEnumToOptions(ExperienceLevel);

  return (
    <div className="pt-0 mb-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FilterSelect
          placeholder={'Select Job Type'}
          label="Job Type"
          value={filters.jobType}
          options={jobTypeOptions}
          onChange={(value) => updateFilter('jobType', value)}
          disabled={isPending}
        />

        <FilterSelect
          placeholder={'Select Location'}
          label="Location"
          value={filters.workLocation}
          options={locationOptions}
          onChange={(value) => updateFilter('workLocation', value)}
          disabled={isPending}
        />

        <FilterSelect
          placeholder={'Select Experience Level'}
          label="Experience Level"
          value={filters.experienceLevel}
          options={experienceOptions}
          onChange={(value) => updateFilter('experienceLevel', value)}
          disabled={isPending}
        />
      </div>

      {isPending && (
        <div className="mt-4 flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <span className="text-sm text-muted-foreground">Updating results...</span>
        </div>
      )}

      <div className="mt-4">{Object.entries(filters).length > 0 && <FilterCarousel filters={filters} action={updateFilter} />}</div>
    </div>
  );
}

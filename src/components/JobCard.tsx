'use client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LocateIcon } from 'lucide-react';
import { Job } from '@/types/job';
import { formatSalary, toTitleCase } from '@/utils/helper';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface Props {
  job: Job;
  size?: 'square' | 'long';
}

export default function JobCard({ job, size = 'square' }: Props) {
  const { id, title, company, description, jobType, location, salary } = job;
  const router = useRouter();

  const handleViewJob = () => {
    router.push(`/jobs/${id}`);
  };

  return (
    <Card className={cn('w-full p-6 grid gap-4', size === 'square' && 'max-w-md')}>
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="bg-primary px-3 py-1 rounded-full text-primary-foreground text-sm font-medium">
            {toTitleCase(jobType.replace(/_/g, ' '))}
          </div>
        </div>
        <div className="text-muted-foreground">{company.name}</div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <LocateIcon className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>

      <p className="text-muted-foreground">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>{formatSalary(salary)}</span>
        </div>
        <Button variant="outline" size="sm" onClick={handleViewJob}>
          View Job
        </Button>
      </div>
    </Card>
  );
}

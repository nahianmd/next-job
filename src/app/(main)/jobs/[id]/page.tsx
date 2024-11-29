// app/jobs/[id]/page.tsx
import { notFound } from 'next/navigation';
import { BriefcaseIcon, BuildingIcon, CalendarIcon, DollarSignIcon, MapPinIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatDate, formatSalary, toTitleCase } from '@/utils/helper';
import { Job } from '@/types/job';

// Server-side data fetching function
async function getJobById(id: string): Promise<Job> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`, {
      // Adding next cache configuration
      next: {
        revalidate: 3600 // Revalidate every hour
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch job');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching job:', error);
    throw error;
  }
}

// The main page component
export default async function JobDetailsPage({ params }: { params: { id: string } }) {
  let job: Job;

  try {
    job = await getJobById(params.id);
  } catch (error) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">{job.title}</h1>
          {job.applicationUrl && (
            <Button asChild>
              <a href={job.applicationUrl} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          )}
        </div>

        {/* Job Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <BuildingIcon className="w-5 h-5" />
            <span>{job.company.name}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPinIcon className="w-5 h-5" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <BriefcaseIcon className="w-5 h-5" />
            <span>
              {toTitleCase(job.workLocation)} · {toTitleCase(job.jobType.replace(/_/g, ' '))}
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <DollarSignIcon className="w-5 h-5" />
            <span>{formatSalary(job.salary)}</span>
          </div>
        </div>

        {/* Tags */}
        {job.tags && job.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{job.description}</p>
            </CardContent>
          </Card>

          {/* Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle>Key Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Benefits if available */}
          {job.benefits && job.benefits.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Company Info */}
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {job.company.website && (
                <a href={job.company.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block">
                  Visit Company Website
                </a>
              )}
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPinIcon className="w-4 h-4" />
                <span>{job.company.location}</span>
              </div>
            </CardContent>
          </Card>

          {/* Posted Date */}
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarIcon className="w-4 h-4" />
                <span>Posted: {formatDate(job.postedDate)}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

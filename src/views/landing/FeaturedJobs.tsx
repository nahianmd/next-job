'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, DollarSign, MapPin } from 'lucide-react';

interface FeaturedJob {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  logo: string;
}

const featuredJobs: FeaturedJob[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120k - $150k',
    type: 'Full-time',
    logo: '/api/placeholder/100/100'
  },
  {
    id: '2',
    title: 'Product Designer',
    company: 'DesignHub',
    location: 'Remote',
    salary: '$90k - $120k',
    type: 'Full-time',
    logo: '/api/placeholder/100/100'
  }
  // Add more featured jobs...
];

export function FeaturedJobs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((current) => (current === featuredJobs.length - 1 ? 0 : current + 1));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="py-12 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Opportunities</h2>

        <div className="relative overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {featuredJobs.map((job) => (
              <div key={job.id} className="w-full flex-shrink-0 px-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <img src={job.logo} alt={`${job.company} logo`} className="h-12 w-12 rounded-md object-contain" />
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        {job.company}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                        {job.salary}
                      </div>
                      <div className="mt-2">
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {featuredJobs.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${index === activeIndex ? 'bg-primary w-4' : 'bg-primary/30'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

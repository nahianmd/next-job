import { useEffect, useState } from 'react';
import { jobs } from '@/_mockApis/job/data';
import JobCard from '@/components/JobCard';

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
  },
  {
    id: '3',
    title: 'Product Designer',
    company: 'DesignHub',
    location: 'Remote',
    salary: '$90k - $120k',
    type: 'Full-time',
    logo: '/api/placeholder/100/100'
  }
];

export function FeaturedJobs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((current) => (current === featuredJobs.length - 1 ? 0 : current + 1));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        {/* Carousel content */}
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {featuredJobs.map((job) => (
            <div key={job.id} className="w-full flex-shrink-0 px-4">
              <div className="flex justify-center">
                <JobCard job={jobs[0]} />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-4 gap-2">
          {featuredJobs.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${index === activeIndex ? 'bg-primary w-4' : 'bg-primary/30 w-2'}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedJobs;

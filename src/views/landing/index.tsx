import { HeroSection } from '@/views/landing/Hero';
import { JobCategories } from '@/views/landing/JobCategories';
import { FeaturedJobs } from '@/views/landing/FeaturedJobs';

export default function Landing() {
  return (
    <div>
      <HeroSection />
      <FeaturedJobs />
      <JobCategories />
    </div>
  );
}

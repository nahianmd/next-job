'use client';

import SearchBar from '@/components/SearchBar';

export function HeroSection() {
  return (
    <div className="relative">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Find Your Next <span className="text-primary">Dream Job</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Discover thousands of job opportunities from top companies around the world
          </p>

          {/* Search Bar */}
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

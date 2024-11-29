'use client';

import SearchBar from '@/components/SearchBar';
import { FeaturedJobs } from '@/views/landing/FeaturedJobs';

export function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
      <div className="w-full max-w-2xl py-12 md:py-20 lg:py-28">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center lg:justify-start">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-muted-foreground ring-1 ring-foreground/10 hover:ring-foreground-900/20">
            Announcing our next round of funding.{' '}
            <a href="#" className="font-semibold text-primary">
              <span aria-hidden="true" className="absolute inset-0" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="text-center lg:text-start">
          <h1 className="text-balance text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-foreground/85">
            Data to enrich your online business
          </h1>
          <p className="mt-6 md:mt-8 text-pretty text-base md:text-lg lg:text-xl font-medium text-muted-foreground">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>

          <div className="mt-8 md:mt-10 flex justify-center lg:justify-start">
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="w-full">
        <FeaturedJobs />
      </div>
    </div>
  );
}

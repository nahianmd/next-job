import React from 'react';
import { FilterCarousel } from '@/components/FilterCarousel';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';

const Page = () => {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex w-full items-center gap-4 pr-4">
        <div className="relative flex-1 min-w-0">
          {/* min-w-0 prevents flex child from overflowing */}
          <FilterCarousel />
        </div>
        <Button variant="outline" className="flex items-center gap-2 whitespace-nowrap shrink-0">
          <SlidersHorizontal className="h-4 w-4" />
          Filter
        </Button>
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
};

export default Page;

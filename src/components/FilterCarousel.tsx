'use client';

import * as React from 'react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RoundChip from '@/components/RoundChip';
import { toTitleCase } from '@/utils/helper';

interface Props {
  filters: Record<string, string>;
  action: (key: string, value: string) => void;
}

export function FilterCarousel({ filters, action }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const removeFilter = (key: string) => {
    action(key, '');
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10  shadow-md rounded-full h-8 w-8 hidden md:flex"
        onClick={scrollLeft}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10  shadow-md rounded-full h-8 w-8 hidden md:flex"
        onClick={scrollRight}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div
        className="overflow-x-auto px-0 md:px-10 scrollbar-hide max-w-full"
        ref={scrollContainerRef}
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div className="flex space-x-4 py-4 min-w-0">
          {Object.entries(filters).map(([key, value]) => {
            if (!value || key === 'page' || key === 'limit') return null;

            return <RoundChip key={key} label={toTitleCase(value.replace(/_/g, ' '))} onRemove={() => removeFilter(key)} />;
          })}
          <Button
            onClick={() => {
              Object.entries(filters).forEach(([key, value]) => action(key, ''));
            }}
            variant={'link'}
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
}

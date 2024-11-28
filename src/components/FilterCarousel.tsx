'use client';

import * as React from 'react';
import { useRef, useState } from 'react';
import Chips from '@/components/Chips';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function FilterCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [items, setItems] = useState([
    { id: 1, label: 'React' },
    { id: 2, label: 'TypeScript' },
    { id: 3, label: 'Tailwind' },
    { id: 4, label: 'Next.js' },
    { id: 5, label: 'Node.js' },
    { id: 6, label: 'GraphQL' },
    { id: 7, label: 'PostgreSQL' },
    { id: 8, label: 'MongoDB' },
    { id: 9, label: 'Redis' },
    { id: 10, label: 'Docker' },
    { id: 10, label: 'Docker' },
    { id: 10, label: 'Docker' },
    { id: 10, label: 'Docker' },
    { id: 10, label: 'Docker' }
  ]);

  const removeFilter = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
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
          {items.map((item, index) => (
            <Chips key={index} label={item.label} onRemove={() => removeFilter(item.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}

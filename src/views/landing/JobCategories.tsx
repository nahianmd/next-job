'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Code, Globe, LineChart, Megaphone, Paintbrush } from 'lucide-react';

const categories = [
  { id: 1, name: 'Technology', icon: Code, count: 1234 },
  { id: 2, name: 'Design', icon: Paintbrush, count: 856 },
  { id: 3, name: 'Marketing', icon: Megaphone, count: 643 },
  { id: 4, name: 'Business', icon: Briefcase, count: 957 },
  { id: 5, name: 'Analytics', icon: LineChart, count: 432 },
  { id: 6, name: 'Remote', icon: Globe, count: 1543 }
];

export function JobCategories() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">Popular Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all hover:shadow-md ${selectedCategory === category.id ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Icon className="h-8 w-8 mb-4 text-primary" />
                  <h3 className="font-medium text-center">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{category.count.toLocaleString()} jobs</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

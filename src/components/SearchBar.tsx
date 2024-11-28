import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchBar = () => {
  return (
    <div className="mx-auto mt-8 max-w-xl">
      <div className="flex gap-2">
        <div className="relative flex-grow">
          <Input type="text" placeholder="Job title, keyword, or company" className="pl-10 h-12" />
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
        </div>
        <Button size="lg" className="px-8">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;

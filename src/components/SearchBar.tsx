import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (searchKeyword.trim()) {
      params.set('keyword', searchKeyword.trim());
    } else {
      params.delete('keyword');
    }
    params.set('page', '1');

    router.push(`/jobs?${params.toString()}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="max-w-xl">
      <div className="flex gap-2 ">
        <div className="relative flex-grow">
          <Input
            onChange={(e) => setSearchKeyword(e.target.value)}
            value={searchKeyword}
            type="text"
            placeholder="Job title, keyword, or company"
            className="pl-10 h-12 ring-1 ring-foreground"
          />
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
        </div>
        <Button size={'xl'} className="px-8" onClick={handleSubmit}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;

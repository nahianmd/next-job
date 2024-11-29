'use client';

import React from 'react';
import { useJobFilters } from '@/hooks/useJobFilters';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface PaginationProps {
  totalPages: number;
  totalItems: number;
}

const Pagination = ({ totalPages, totalItems }: PaginationProps) => {
  // Get current filters and update function from our hook
  const { filters, updateFilter, isPending } = useJobFilters();

  // Get current page from filters, defaulting to 1 if not set
  const currentPage = parseInt(filters.page || '1');

  // Calculate the range of items being displayed
  const itemsPerPage = parseInt(filters.limit || '10');
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5; // Number of page buttons to show

    let start = Math.max(1, currentPage - Math.floor(showPages / 2));
    const end = Math.min(totalPages, start + showPages - 1);

    // Adjust start if we're near the end
    if (end === totalPages) {
      start = Math.max(1, end - showPages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  // Handle page changes
  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    updateFilter('page', newPage.toString(), false);
  };

  return (
    <div className="flex flex-col items-end gap-4 mt-8">
      {/* Items display info */}
      <p className="text-sm text-muted-foreground">
        Showing {startItem} to {endItem} of {totalItems} items
      </p>

      {/* Pagination controls */}
      <div className="flex items-center gap-2">
        {/* First page button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => changePage(1)}
          disabled={currentPage === 1 || isPending}
          aria-label="First page"
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>

        {/* Previous page button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1 || isPending}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Page number buttons */}
        <div className="flex gap-1">
          {getPageNumbers().map((pageNum) => (
            <Button
              key={pageNum}
              variant={pageNum === currentPage ? 'default' : 'outline'}
              size="icon"
              onClick={() => changePage(pageNum)}
              disabled={isPending}
              aria-label={`Page ${pageNum}`}
              aria-current={pageNum === currentPage ? 'page' : undefined}
            >
              {pageNum}
            </Button>
          ))}
        </div>

        {/* Next page button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages || isPending}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Last page button */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => changePage(totalPages)}
          disabled={currentPage === totalPages || isPending}
          aria-label="Last page"
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;

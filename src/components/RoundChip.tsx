import React from 'react';
import { X } from 'lucide-react';

interface Props {
  onRemove: () => void;
  label: string;
}

const RoundChip = ({ onRemove, label }: Props) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border rounded-full hover:border-gray-400 transition-colors cursor-pointer">
      <span className="text-sm font-medium">{label}</span>
      <button
        onClick={() => onRemove()}
        className="rounded-full p-0.5 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-foreground"
      >
        <X className="h-3 w-3" />
      </button>
    </div>
  );
};

export default RoundChip;

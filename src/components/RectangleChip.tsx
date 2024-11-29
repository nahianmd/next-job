import React from 'react';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

interface Props {
  onRemove: () => void;
  label: string;
}

const RectangleChip = ({ onRemove, label }: Props) => {
  return (
    <Badge variant="secondary" className="px-3 py-1 rounded text-sm font-medium flex items-center gap-1 hover:bg-secondary/80">
      {label}
      <button onClick={() => onRemove()} className="rounded-full hover:bg-secondary-foreground/10 p-0.5 text-foreground  ml-2">
        <X className="h-3 w-3" />
      </button>
    </Badge>
  );
};

export default RectangleChip;

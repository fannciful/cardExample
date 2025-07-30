import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { ArrowUpDown } from 'lucide-react';

type SortOption = 'brand' | 'last4' | 'default';

interface CardSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const CardSort: React.FC<CardSortProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2 w-full sm:w-auto">
      <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full sm:w-[140px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="brand">Brand</SelectItem>
          <SelectItem value="last4">Last 4</SelectItem>
          <SelectItem value="default">Default</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
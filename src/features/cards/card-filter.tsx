import React from 'react';
import { Input } from '../../components/ui/input';
import { Search } from 'lucide-react';

interface CardFilterProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const CardFilter: React.FC<CardFilterProps> = ({ 
  value, 
  onChange,
  placeholder = "Search by brand or last 4 digits..."
}) => {
  return (
    <div className="relative max-w-sm w-full sm:w-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};
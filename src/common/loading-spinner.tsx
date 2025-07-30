import React from 'react';
import { cn } from '../lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
  fullHeight?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className,
  text = 'Loading...',
  fullHeight = true
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const containerClass = fullHeight 
    ? "container mx-auto p-4 sm:p-6" 
    : "flex items-center justify-center p-4";

  const heightClass = fullHeight 
    ? "h-64" 
    : "h-auto";

  return (
    <div className={containerClass}>
      <div className={cn("flex items-center justify-center", heightClass)}>
        <div className="text-center">
          <div 
            className={cn(
              "animate-spin rounded-full border-b-2 border-primary mx-auto mb-4",
              sizeClasses[size],
              className
            )}
          />
          <p className="text-muted-foreground animate-pulse">{text}</p>
        </div>
      </div>
    </div>
  );
};
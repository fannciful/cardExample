import React from 'react';
import { Button } from '../components/ui/button';

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'outline' | 'secondary';
  };
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className = ""
}) => {
  return (
    <div className={`text-center py-12 ${className}`}>
      <div className="flex justify-center mb-4 opacity-60">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4 max-w-md mx-auto text-sm sm:text-base">
        {description}
      </p>
      {action && (
        <Button 
          onClick={action.onClick}
          variant={action.variant || 'default'}
          className="mt-2"
        >
          {action.label}
        </Button>
      )}
    </div>
  );
};
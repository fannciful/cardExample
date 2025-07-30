import React from 'react';
import { CreditCard } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

interface PageHeaderProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  icon = <CreditCard className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
  actions
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          {icon}
          <h1 className="text-2xl sm:text-3xl font-bold text-responsive-lg">{title}</h1>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-2">
        {actions}
        <ThemeToggle />
      </div>
    </div>
  );
};
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8'
};

export const LoadingSpinner = ({ className, size = 'md' }: LoadingSpinnerProps) => (
  <div
    className={cn(
      'animate-spin border-2 border-brand-blue border-t-transparent rounded-full',
      sizeClasses[size],
      className
    )}
    role="status"
    aria-label="Loading"
  >
    <span className="sr-only">Loading...</span>
  </div>
); 
import { memo } from 'react';
import { Button } from '@/components/ui/button';

interface LoadingButtonProps {
  isLoading: boolean;
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export const LoadingButton = memo<LoadingButtonProps>(({
  isLoading,
  onClick,
  children,
  variant = 'primary',
  className = '',
  disabled = false
}) => {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <Button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`
        ${baseClasses}
        px-8 py-4 text-lg font-semibold rounded-xl
        min-w-[200px] relative overflow-hidden
        ${className}
      `}
    >
      {isLoading ? (
        <div className="flex items-center space-x-3">
          <div className="loading-spinner w-5 h-5" />
          <span>Processando...</span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
});

LoadingButton.displayName = 'LoadingButton';
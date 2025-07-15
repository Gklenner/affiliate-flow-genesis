import { memo } from 'react';
import { FlowStep } from '@/types/landing';

interface ProgressBarProps {
  currentStep: FlowStep;
  isVisible: boolean;
}

const STEPS = [
  { id: 0, label: 'Início' },
  { id: 1, label: 'Link' },
  { id: 2, label: 'App' },
  { id: 3, label: 'Verif' },
  { id: 4, label: 'Completo' }
];

export const ProgressBar = memo<ProgressBarProps>(({ currentStep, isVisible }) => {
  const progressPercentage = (currentStep / 4) * 100;

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        {/* Progress Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-lp-light/80">
            <span className="font-medium">Progresso:</span>
            <span className="ml-2">{currentStep} de 4</span>
          </div>
          <div className="text-sm text-lp-light/60">
            {STEPS[currentStep]?.label}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full progress-fill rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          
          {/* Step Indicators */}
          <div className="flex justify-between mt-2">
            {STEPS.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col items-center text-xs ${
                  index <= currentStep 
                    ? 'text-primary' 
                    : 'text-lp-light/40'
                }`}
              >
                <div className={`w-3 h-3 rounded-full mb-1 transition-colors ${
                  index <= currentStep 
                    ? 'bg-primary' 
                    : 'bg-white/20'
                }`} />
                <span className="hidden sm:block">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';
import { memo } from 'react';
import { useFlowState } from '@/hooks/useFlowState';
import { useExitIntent } from '@/hooks/useExitIntent';
import { FloatingOrbs } from './FloatingOrbs';
import { Header } from './Header';
import { ProgressBar } from './ProgressBar';
import { HeroSection } from './steps/HeroSection';
import { WelcomeStep } from './steps/WelcomeStep';
import { VerificationStep } from './steps/VerificationStep';
import { CompletionStep } from './steps/CompletionStep';
import { ExitIntentPopup } from '../forms/ExitIntentPopup';

export const AffiliateFlowLanding = memo(() => {
  const { state, actions } = useFlowState();
  const { isTriggered: showExitIntent, reset: resetExitIntent } = useExitIntent({
    enabled: state.currentStep === 0, // Só mostrar na hero section
    delay: 10, // 10 segundos mínimo na página
    maxDisplays: 2 // máximo 2 vezes
  });

  const renderCurrentStep = () => {
    switch (state.currentStep) {
      case 0:
        return (
          <HeroSection
            onGetLink={actions.generateLink}
            isLoading={state.isLoading}
          />
        );
      
      case 1:
        return (
          <WelcomeStep
            onAppDownload={actions.markAppDownloaded}
            onVerify={actions.verifyAccess}
            isLoading={state.isLoading}
          />
        );
      
      case 2:
        return (
          <CompletionStep
            onSendMaterial={actions.sendMaterial}
            onCopyLink={actions.copyLink}
            materialSent={state.materialSent}
            linkCopied={state.linkCopied}
            isLoading={state.isLoading}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-lp-navy relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-pattern opacity-30" />
      <FloatingOrbs />
      
      {/* Header */}
      <Header />
      
      {/* Progress Bar (visible after step 0) */}
      <ProgressBar 
        currentStep={state.currentStep} 
        isVisible={state.currentStep > 0} 
      />
      
      {/* Main Content */}
      <main className="relative z-10">
        {renderCurrentStep()}
      </main>

      {/* Exit Intent Popup */}
      <ExitIntentPopup 
        isVisible={showExitIntent}
        onClose={resetExitIntent}
      />
    </div>
  );
});

AffiliateFlowLanding.displayName = 'AffiliateFlowLanding';
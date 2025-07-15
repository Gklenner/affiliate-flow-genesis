import { memo } from 'react';
import { LoadingButton } from '../LoadingButton';

interface VerificationStepProps {
  onVerify: () => void;
  isLoading: boolean;
}

export const VerificationStep = memo<VerificationStepProps>(({ onVerify, isLoading }) => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Status Success */}
          <div className="inline-flex items-center space-x-2 glass-strong px-6 py-3 rounded-full mb-8 animate-fade-in">
            <span className="text-2xl">📱</span>
            <span className="text-lg font-medium text-lp-light">App Instalado com Sucesso</span>
          </div>

          {/* Title */}
          <h2 className="text-display font-bold text-lp-light mb-6 animate-slide-up">
            🔐 Verificar Acesso ao Sistema
          </h2>

          {/* Description */}
          <p className="text-body-lg text-lp-light/80 mb-8">
            Agora vamos validar suas credenciais e configurar seu acesso
            ao sistema de afiliados premium.
          </p>

          {/* Verification Process */}
          <div className="glass-strong p-8 rounded-3xl mb-12 animate-fade-in">
            <h3 className="text-xl font-semibold text-lp-light mb-6">
              🔍 Processo de Verificação:
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-lp-green text-xl">✓</span>
                <span className="text-lp-light">Validação do link de afiliado</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lp-green text-xl">✓</span>
                <span className="text-lp-light">Configuração da conta premium</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lp-green text-xl">✓</span>
                <span className="text-lp-light">Ativação do sistema de pagamentos</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lp-green text-xl">✓</span>
                <span className="text-lp-light">Liberação do material exclusivo</span>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="glass p-6 rounded-2xl mb-8 border border-lp-green/20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-2xl">🛡️</span>
              <h4 className="text-lg font-semibold text-lp-light">Verificação Segura</h4>
            </div>
            <p className="text-sm text-lp-light/70">
              Utilizamos criptografia de nível bancário para proteger seus dados.
              O processo leva apenas alguns segundos.
            </p>
          </div>

          {/* Verify Button */}
          <LoadingButton
            isLoading={isLoading}
            onClick={onVerify}
            className="animate-pulse-glow mb-8"
          >
            {isLoading ? '🔍 Verificando...' : '🔐 Verificar Meu Acesso'}
          </LoadingButton>

          {/* Progress Indicators */}
          {isLoading && (
            <div className="glass p-6 rounded-2xl animate-fade-in">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-lp-light/80">Validando credenciais...</span>
                  <span className="text-lp-green">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-lp-light/80">Configurando conta...</span>
                  <div className="loading-spinner w-4 h-4" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-lp-light/60">Liberando material...</span>
                  <span className="text-lp-light/40">⏳</span>
                </div>
              </div>
            </div>
          )}

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="glass p-4 rounded-xl">
              <div className="text-2xl mb-2">🔒</div>
              <div className="text-sm text-lp-light/70">SSL Seguro</div>
            </div>
            <div className="glass p-4 rounded-xl">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm text-lp-light/70">Verificação Rápida</div>
            </div>
            <div className="glass p-4 rounded-xl">
              <div className="text-2xl mb-2">🛡️</div>
              <div className="text-sm text-lp-light/70">Dados Protegidos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

VerificationStep.displayName = 'VerificationStep';
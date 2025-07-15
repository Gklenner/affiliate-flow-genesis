import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { APP_LINKS } from '@/types/landing';

interface WelcomeStepProps {
  onAppDownload: (platform: 'android' | 'ios') => void;
}

export const WelcomeStep = memo<WelcomeStepProps>(({ onAppDownload }) => {
  const handleAppDownload = (platform: 'android' | 'ios', url: string) => {
    // Abre loja em nova aba
    window.open(url, '_blank');
    
    // Marca como baixado e avança para próxima etapa
    setTimeout(() => {
      onAppDownload(platform);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Status Success */}
          <div className="inline-flex items-center space-x-2 glass-strong px-6 py-3 rounded-full mb-8 animate-fade-in">
            <span className="text-2xl">✅</span>
            <span className="text-lg font-medium text-lp-light">Link enviado! Verifique seu inbox</span>
          </div>

          {/* Title */}
          <h2 className="text-display font-bold text-lp-light mb-6 animate-slide-up">
            Agora baixe o aplicativo para continuar
          </h2>

          {/* Benefits */}
          <div className="glass-strong p-8 rounded-3xl mb-12 animate-fade-in">
            <h3 className="text-xl font-semibold text-lp-light mb-6">
              🎯 O que você vai conseguir:
            </h3>
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-lp-green text-xl">✓</span>
                <span className="text-lp-light">Renda recorrente de R$ 15.000 a R$ 55.000 mensais</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lp-green text-xl">✓</span>
                <span className="text-lp-light">Sistema 100% automatizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lp-green text-xl">✓</span>
                <span className="text-lp-light">Suporte completo e material exclusivo</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lp-green text-xl">✓</span>
                <span className="text-lp-light">Pagamentos semanais garantidos</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="glass p-6 rounded-2xl mb-8">
            <h4 className="text-lg font-semibold text-lp-light mb-4">
              📱 Próximos passos obrigatórios:
            </h4>
            <div className="text-sm text-lp-light/80 space-y-2">
              <p>1. Baixe o aplicativo oficial GRIP</p>
              <p>2. Faça seu cadastro usando seu link exclusivo</p>
              <p>3. Conclua a verificação de acesso</p>
              <p>4. Receba seu material de trabalho</p>
            </div>
          </div>

          {/* App Download Buttons */}
          <div className="space-y-4">
            <p className="text-lp-light/80 mb-6">Escolha sua plataforma:</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {APP_LINKS.map((app) => (
                <Button
                  key={app.platform}
                  onClick={() => handleAppDownload(app.platform, app.url)}
                  className="btn-primary px-8 py-4 text-lg flex items-center space-x-3 min-w-[200px]"
                >
                  <span className="text-2xl">{app.icon}</span>
                  <span>
                    Baixar para {app.platform === 'android' ? 'Android' : 'iOS'}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="glass p-4 rounded-xl">
              <div className="text-2xl mb-2">🔒</div>
              <div className="text-sm text-lp-light/70">100% Seguro</div>
            </div>
            <div className="glass p-4 rounded-xl">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm text-lp-light/70">Instalação Rápida</div>
            </div>
            <div className="glass p-4 rounded-xl">
              <div className="text-2xl mb-2">✅</div>
              <div className="text-sm text-lp-light/70">Verificado</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

WelcomeStep.displayName = 'WelcomeStep';
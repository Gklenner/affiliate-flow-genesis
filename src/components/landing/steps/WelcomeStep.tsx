import { memo, useState } from 'react';
import { LoadingButton } from '../LoadingButton';
import { LeadCaptureForm } from '../../forms/LeadCaptureForm';
import { APP_LINKS, AFFILIATE_LINK } from '@/types/landing';

interface WelcomeStepProps {
  onAppDownload: (platform: 'android' | 'ios') => void;
  onVerify: () => void;
  isLoading: boolean;
}

export const WelcomeStep = memo<WelcomeStepProps>(({ onAppDownload, onVerify, isLoading }) => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [downloadConfirmed, setDownloadConfirmed] = useState(false);

  const handleAppDownload = (platform: 'android' | 'ios', url: string) => {
    window.open(url, '_blank');
    onAppDownload(platform);
    setDownloadConfirmed(true);
    
    // Mostrar form de email após 2 segundos
    setTimeout(() => {
      setShowEmailForm(true);
    }, 2000);
  };

  const handleEmailSuccess = () => {
    setEmailCaptured(true);
    setShowEmailForm(false);
    
    // Iniciar verificação após 1 segundo
    setTimeout(() => {
      onVerify();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Link de Afiliado */}
          <div className="glass-strong p-8 rounded-3xl mb-8 animate-fade-in">
            <div className="text-6xl mb-6">🔗</div>
            <h2 className="text-2xl font-bold text-lp-light mb-4">
              ✅ Seu Link de Afiliado Está Pronto!
            </h2>
            <div className="glass p-4 rounded-2xl mb-6">
              <p className="text-sm text-lp-light/70 mb-2">Seu link exclusivo:</p>
              <div className="flex items-center justify-center space-x-2">
                <code className="text-primary font-mono text-sm bg-lp-light/10 px-3 py-1 rounded">
                  {AFFILIATE_LINK}
                </code>
                <button
                  onClick={() => navigator.clipboard.writeText(AFFILIATE_LINK)}
                  className="text-primary hover:text-primary/80 text-sm"
                >
                  📋 Copiar
                </button>
              </div>
            </div>
            <p className="text-sm text-lp-light/60">
              Link copiado com sucesso! Agora continue o processo.
            </p>
          </div>

          {/* Instruções para Download */}
          <div className="glass-strong p-8 rounded-3xl mb-8 animate-fade-in">
            <div className="text-6xl mb-6">📱</div>
            <h3 className="text-xl font-bold text-lp-light mb-4">
              Baixe o App GRIP para Continuar
            </h3>
            <p className="text-lp-light/70 mb-8">
              Para acessar o sistema e começar a ganhar, você precisa baixar o app oficial.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {APP_LINKS.map((link) => (
                <button
                  key={link.platform}
                  onClick={() => handleAppDownload(link.platform, link.url)}
                  className="glass p-6 rounded-2xl hover-lift transition-all duration-300 hover:bg-primary/10"
                  disabled={downloadConfirmed}
                >
                  <div className="text-4xl mb-3">{link.icon}</div>
                  <div className="font-semibold text-lp-light capitalize">
                    {link.platform === 'android' ? 'Android' : 'iOS'}
                  </div>
                  <div className="text-sm text-lp-light/70 mt-1">
                    {downloadConfirmed ? '✅ Download Iniciado' : 'Baixar Agora'}
                  </div>
                </button>
              ))}
            </div>

            {downloadConfirmed && (
              <div className="glass p-4 rounded-2xl animate-fade-in">
                <div className="text-lp-green text-sm">
                  ✅ Download iniciado! Instale o app e continue.
                </div>
              </div>
            )}
          </div>

          {/* Formulário de Email */}
          {showEmailForm && (
            <div className="glass-strong p-8 rounded-3xl mb-8 animate-fade-in">
              <div className="text-6xl mb-6">📧</div>
              <h3 className="text-xl font-bold text-lp-light mb-4">
                Verificação de Acesso
              </h3>
              <p className="text-lp-light/70 mb-6">
                Para validar seu acesso ao sistema, precisamos do seu email.
              </p>
              
              <LeadCaptureForm 
                source="welcome_step"
                onSuccess={handleEmailSuccess}
                showNameField={false}
                buttonText="Verificar Meu Acesso"
              />
            </div>
          )}

          {/* Verificação em Andamento */}
          {emailCaptured && (
            <div className="glass-strong p-8 rounded-3xl animate-fade-in">
              <div className="text-6xl mb-6">🔐</div>
              <h3 className="text-xl font-bold text-lp-light mb-4">
                Verificando Acesso ao Sistema
              </h3>
              <p className="text-lp-light/70 mb-6">
                Validando suas credenciais e configurações...
              </p>
              
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
              
              <LoadingButton
                isLoading={isLoading}
                onClick={() => {}}
                disabled={true}
                className="pointer-events-none"
              >
                Verificando...
              </LoadingButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

WelcomeStep.displayName = 'WelcomeStep';
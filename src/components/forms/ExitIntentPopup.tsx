import { useState, useEffect } from 'react';
import { LeadCaptureForm } from './LeadCaptureForm';
import { X, AlertTriangle } from 'lucide-react';

interface ExitIntentPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export const ExitIntentPopup = ({ isVisible, onClose }: ExitIntentPopupProps) => {
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(180); // 3 minutos

  useEffect(() => {
    if (isVisible) {
      setShowCountdown(true);
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            onClose();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative max-w-md w-full mx-4 animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-8 h-8 bg-lp-light/10 hover:bg-lp-light/20 rounded-full flex items-center justify-center z-10 transition-colors"
        >
          <X className="w-4 h-4 text-lp-light" />
        </button>

        {/* Header de urgência */}
        <div className="text-center mb-6 p-4 bg-lp-orange/20 rounded-t-3xl border border-lp-orange/30">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-lp-orange animate-pulse" />
            <span className="text-lp-orange font-bold">ESPERE!</span>
          </div>
          
          <h2 className="text-xl font-bold text-lp-light mb-1">
            Não Perca Esta Oportunidade!
          </h2>
          
          <p className="text-sm text-lp-light/80">
            Antes de sair, pegue seu material gratuito
          </p>

          {/* Countdown */}
          {showCountdown && (
            <div className="mt-3 inline-flex items-center space-x-2 bg-lp-orange/30 px-4 py-2 rounded-full">
              <span className="text-sm text-lp-light/90">Esta oferta expira em:</span>
              <span className="text-lg font-bold text-lp-orange font-mono">
                {formatTime(countdown)}
              </span>
            </div>
          )}
        </div>

        {/* Oferta especial */}
        <div className="px-4 pb-4">
          <div className="glass-strong p-6 rounded-b-3xl">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🎁</div>
              <h3 className="text-lg font-bold text-lp-light mb-2">
                OFERTA ESPECIAL PARA QUEM ESTAVA SAINDO
              </h3>
              <p className="text-sm text-lp-light/80 mb-4">
                Material exclusivo + Acesso ao grupo VIP + Bônus surpresa
              </p>
              
              {/* Bônus exclusivos */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-lp-light/80">📚 Ebook Completo</span>
                  <span className="text-lp-green font-semibold">R$ 97</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-lp-light/80">📊 Planilhas de Controle</span>
                  <span className="text-lp-green font-semibold">R$ 47</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-lp-light/80">👥 Grupo VIP Telegram</span>
                  <span className="text-lp-green font-semibold">R$ 197</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-lp-light/80">🎯 Bônus: Mini-curso</span>
                  <span className="text-lp-green font-semibold">R$ 297</span>
                </div>
                
                <div className="border-t border-lp-light/20 pt-2 mt-3">
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-lp-light">Total:</span>
                    <div className="text-right">
                      <div className="text-lp-light/60 line-through text-sm">R$ 638</div>
                      <div className="text-lp-green text-xl">GRÁTIS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <LeadCaptureForm 
              source="exit_intent_popup" 
              variant="popup"
              showBenefits={false}
              onSuccess={() => {
                onClose();
                // Mostrar toast de sucesso especial
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
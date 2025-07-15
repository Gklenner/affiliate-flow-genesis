import { memo } from 'react';
import { LoadingButton } from '../LoadingButton';

interface CompletionStepProps {
  onSendMaterial: () => void;
  onCopyLink: () => void;
  materialSent: boolean;
  linkCopied: boolean;
  isLoading: boolean;
}

export const CompletionStep = memo<CompletionStepProps>(({
  onSendMaterial,
  onCopyLink,
  materialSent,
  linkCopied,
  isLoading
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="mb-8 animate-fade-in">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-display font-bold text-lp-light mb-4">
              Parabéns! Processo Completo
            </h2>
            <p className="text-body-lg text-lp-light/80">
              Seu acesso foi validado com sucesso! Agora você faz parte do 
              grupo exclusivo de afiliados premium.
            </p>
          </div>

          {/* Congratulations Card */}
          <div className="glass-strong p-8 rounded-3xl mb-12 animate-slide-up">
            <h3 className="text-xl font-semibold text-lp-light mb-6">
              ✅ Você agora tem acesso a:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-lp-green text-xl">💰</span>
                <span className="text-lp-light text-sm">Sistema de renda recorrente</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lp-green text-xl">📊</span>
                <span className="text-lp-light text-sm">Dashboard exclusivo</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lp-green text-xl">🎯</span>
                <span className="text-lp-light text-sm">Material de vendas</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lp-green text-xl">🤝</span>
                <span className="text-lp-light text-sm">Suporte prioritário</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lp-green text-xl">📚</span>
                <span className="text-lp-light text-sm">Treinamentos avançados</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lp-green text-xl">💳</span>
                <span className="text-lp-light text-sm">Pagamentos semanais</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-12">
            <h4 className="text-lg font-semibold text-lp-light mb-6">
              📩 Receba seu material exclusivo:
            </h4>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LoadingButton
                isLoading={isLoading}
                onClick={onSendMaterial}
                className={materialSent ? 'bg-lp-green hover:bg-lp-green/90' : ''}
              >
                {materialSent ? (
                  <>✅ Material Enviado!</>
                ) : (
                  <>📧 Enviar Material por Email</>
                )}
              </LoadingButton>

              <LoadingButton
                isLoading={false}
                onClick={onCopyLink}
                variant="secondary"
                className={linkCopied ? 'bg-lp-green/20 border-lp-green' : ''}
              >
                {linkCopied ? (
                  <>✅ Link Copiado!</>
                ) : (
                  <>🔗 Copiar Link de Afiliado</>
                )}
              </LoadingButton>
            </div>
          </div>

          {/* Next Steps */}
          <div className="glass p-6 rounded-2xl mb-8">
            <h4 className="text-lg font-semibold text-lp-light mb-4">
              🚀 Próximos passos para maximizar seus ganhos:
            </h4>
            <div className="text-sm text-lp-light/80 space-y-2 text-left">
              <p>1. ✅ Verifique seu email para o material completo</p>
              <p>2. 📱 Acesse o app GRIP com suas credenciais</p>
              <p>3. 📊 Configure seu dashboard de afiliado</p>
              <p>4. 🎯 Comece a compartilhar seu link exclusivo</p>
              <p>5. 💰 Acompanhe seus ganhos em tempo real</p>
            </div>
          </div>

          {/* Success Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="glass p-6 rounded-xl">
              <div className="text-2xl mb-2">⏰</div>
              <div className="text-lg font-bold text-primary">24-48h</div>
              <div className="text-xs text-lp-light/70">Primeira comissão</div>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-2xl mb-2">💰</div>
              <div className="text-lg font-bold text-primary">R$ 15k+</div>
              <div className="text-xs text-lp-light/70">Potencial mensal</div>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-2xl mb-2">🤝</div>
              <div className="text-lg font-bold text-primary">24/7</div>
              <div className="text-xs text-lp-light/70">Suporte ativo</div>
            </div>
          </div>

          {/* Final Message */}
          <div className="glass-strong p-6 rounded-2xl border border-lp-green/20">
            <p className="text-lp-light/90 mb-4">
              🎉 <strong>Bem-vindo ao AffiliateFlow Premium!</strong>
            </p>
            <p className="text-sm text-lp-light/70">
              Você agora faz parte de um grupo seleto de afiliados de alta performance. 
              Nosso time de suporte entrará em contato nas próximas horas para orientá-lo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

CompletionStep.displayName = 'CompletionStep';
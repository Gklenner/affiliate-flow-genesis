import { memo } from 'react';
import { LoadingButton } from '../LoadingButton';
import { STATS_CARDS, FEATURES, AFFILIATE_LINK } from '@/types/landing';

interface HeroSectionProps {
  onGetLink: () => void;
  isLoading: boolean;
}

export const HeroSection = memo<HeroSectionProps>(({ onGetLink, isLoading }) => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge Principal */}
          <div className="inline-flex items-center space-x-2 glass-strong px-4 py-2 rounded-full mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-lp-green rounded-full animate-pulse" />
            <span className="text-sm text-lp-light/80">+2.847 afiliados ativos</span>
          </div>

          {/* Headline Principal */}
          <h1 className="text-hero font-bold text-lp-light mb-6 animate-slide-up text-glow">
            Renda recorrente de{' '}
            <span className="text-gradient">R$ 15.000</span>
            {' '}a{' '}
            <span className="text-gradient">R$ 55.000</span>
            {' '}mensais
          </h1>

          {/* Subtitle */}
          <p className="text-display text-lp-light/80 mb-12 animate-slide-up max-w-2xl mx-auto">
            Sistema automatizado que gera renda passiva para afiliados. 
            Junte-se a mais de 2.847 pessoas que já transformaram suas vidas.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {STATS_CARDS.map((stat, index) => (
              <div 
                key={stat.label}
                className="glass-strong p-6 rounded-2xl hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-lp-light/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Live Activity */}
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 bg-gradient-primary rounded-full border-2 border-lp-navy" />
              ))}
            </div>
            <span className="text-sm text-lp-light/80">1.247 pessoas online agora</span>
          </div>

          {/* CTA Principal */}
          <div className="mb-12">
            <LoadingButton
              isLoading={isLoading}
              onClick={onGetLink}
              className="animate-pulse-glow"
            >
              🚀 Quero Meu Link de Afiliado
            </LoadingButton>
            
            <p className="text-xs text-lp-light/60 mt-3">
              Acesso 100% gratuito • Link liberado instantaneamente
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {FEATURES.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-lp-light mb-2">{feature.title}</h3>
                <p className="text-sm text-lp-light/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

HeroSection.displayName = 'HeroSection';
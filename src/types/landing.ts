// AffiliateFlow Landing Page Types

export type FlowStep = 0 | 1 | 2;

export interface FlowState {
  currentStep: FlowStep;
  isLoading: boolean;
  affiliateLink: string;
  hasDownloadedApp: boolean;
  isVerified: boolean;
  materialSent: boolean;
  linkCopied: boolean;
}

export interface StepConfig {
  id: FlowStep;
  title: string;
  description: string;
  buttonText?: string;
  nextStep?: FlowStep;
}

export interface StatsCard {
  value: string;
  label: string;
  icon: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

export interface AppLink {
  platform: 'android' | 'ios';
  url: string;
  icon: string;
}

// Landing Page Configuration
export const AFFILIATE_LINK = 'https://grip.gaiodataos.com/?si=f722bc5f-c550-4368-a50f-d727e7abc368';

export const APP_LINKS: AppLink[] = [
  {
    platform: 'android',
    url: 'https://play.google.com/store/apps/details?id=com.gaiodataos.grip&pcampaignid=web_share',
    icon: '🤖'
  },
  {
    platform: 'ios',
    url: 'https://apps.apple.com/us/app/grip-gaiodataos/id6743857628',
    icon: '🍎'
  }
];

export const STATS_CARDS: StatsCard[] = [
  {
    value: '+2.847',
    label: 'Afiliados Ativos',
    icon: '👥'
  },
  {
    value: 'R$ 15.000',
    label: 'Renda Mínima',
    icon: '💰'
  },
  {
    value: '1.247',
    label: 'Online Agora',
    icon: '🟢'
  }
];

export const FEATURES: FeatureCard[] = [
  {
    title: 'Renda Recorrente',
    description: 'Ganhe de R$15.000 a R$55.000 mensais',
    icon: '💰'
  },
  {
    title: 'Suporte 24/7',
    description: 'Acompanhamento completo para seu sucesso',
    icon: '🚀'
  },
  {
    title: 'Sistema Automatizado',
    description: 'Plataforma que trabalha para você',
    icon: '⚡'
  }
];

export const STEP_CONFIGS: Record<FlowStep, StepConfig> = {
  0: {
    id: 0,
    title: 'AffiliateFlow Premium',
    description: 'Renda recorrente de R$ 15.000 a R$ 55.000 mensais',
    buttonText: 'Quero Meu Link de Afiliado',
    nextStep: 1
  },
  1: {
    id: 1,
    title: '📱 Baixe o App + Verificação',
    description: 'Download do app e captura de email para verificação',
    nextStep: 2
  },
  2: {
    id: 2,
    title: '🎉 Material Exclusivo Enviado',
    description: 'Seu material foi enviado para o email fornecido'
  }
};
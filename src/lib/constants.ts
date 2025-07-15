// AffiliateFlow Premium - Constants and Configuration

export const AFFILIATE_CONFIG = {
  LINK: 'https://grip.gaiodataos.com/?si=f722bc5f-c550-4368-a50f-d727e7abc368',
  APP_ANDROID: 'https://play.google.com/store/apps/details?id=com.gaiodataos.grip&pcampaignid=web_share',
  APP_IOS: 'https://apps.apple.com/us/app/grip-gaiodataos/id6743857628',
} as const;

export const TIMING = {
  LINK_GENERATION: 2000,
  VERIFICATION: 3000,
  MATERIAL_SEND: 1500,
  APP_DOWNLOAD_DELAY: 2000,
  SUCCESS_MESSAGE_DURATION: 3000,
} as const;

export const ANALYTICS = {
  ACTIVE_AFFILIATES: '+2.847',
  ONLINE_NOW: '1.247',
  MIN_INCOME: 'R$ 15.000',
  MAX_INCOME: 'R$ 55.000',
} as const;

export const MESSAGES = {
  LOADING: {
    GENERATING: 'Gerando link...',
    VERIFYING: 'Verificando...',
    SENDING: 'Enviando...',
    PROCESSING: 'Processando...',
  },
  SUCCESS: {
    LINK_SENT: '✅ Link enviado! Verifique seu inbox',
    DOWNLOAD_STARTED: '✅ Download iniciado!',
    ACCESS_VERIFIED: '✅ Acesso validado com sucesso!',
    MATERIAL_SENT: '✅ Material enviado!',
    LINK_COPIED: '🔗 Link copiado!',
  },
  ERRORS: {
    LINK_GENERATION: 'Erro ao gerar link. Tente novamente.',
    VERIFICATION: 'Erro na verificação. Tente novamente.',
    MATERIAL_SEND: 'Erro ao enviar material. Tente novamente.',
    COPY_FAILED: 'Erro ao copiar link. Tente novamente.',
  },
} as const;
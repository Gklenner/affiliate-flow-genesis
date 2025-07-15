import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { LeadFormData, EmailTemplate, AutomationSequence } from '@/types/email';

// Configuração EmailJS (gratuito até 200 emails/mês)
const EMAIL_CONFIG = {
  SERVICE_ID: 'service_affiliateflow',
  TEMPLATE_ID: 'template_lead_capture',
  PUBLIC_KEY: 'your_public_key_here' // Usuário precisa configurar
};

export const useEmailMarketing = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribers, setSubscribers] = useState<LeadFormData[]>([]);

  // Captura de lead com automação
  const captureLead = useCallback(async (leadData: LeadFormData) => {
    setIsSubmitting(true);
    
    try {
      // Envia email de boas-vindas automaticamente
      const emailParams = {
        to_name: leadData.name,
        to_email: leadData.email,
        from_name: 'AffiliateFlow Premium',
        phone: leadData.phone || 'Não informado',
        source: leadData.source,
        timestamp: new Date().toLocaleString('pt-BR')
      };

      // Envio via EmailJS
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        emailParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      // Salva no localStorage para segmentação
      const storedLeads = JSON.parse(localStorage.getItem('affiliateflow_leads') || '[]');
      const newLead = { ...leadData, capturedAt: new Date().toISOString() };
      localStorage.setItem('affiliateflow_leads', JSON.stringify([...storedLeads, newLead]));
      
      setSubscribers(prev => [...prev, newLead]);

      // Inicia sequência de automação
      await startAutomationSequence(leadData);
      
      return { success: true, message: 'Lead capturado com sucesso!' };
    } catch (error) {
      console.error('Erro ao capturar lead:', error);
      return { success: false, message: 'Erro ao processar. Tente novamente.' };
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  // Inicia sequência de automação personalizada
  const startAutomationSequence = useCallback(async (leadData: LeadFormData) => {
    const sequences: AutomationSequence[] = [
      {
        id: 'welcome_sequence',
        name: 'Sequência de Boas-vindas',
        conversionGoal: 'download_app',
        totalEmails: 5,
        emails: [
          {
            id: 'welcome_1',
            name: 'Boas-vindas + Material Gratuito',
            subject: '🎉 Bem-vindo ao AffiliateFlow! Seu material está aqui',
            content: 'welcome_template',
            trigger: { type: 'signup' },
            delay: 0
          },
          {
            id: 'value_2',
            name: 'Prova Social + Cases de Sucesso',
            subject: '💰 Como Maria ganhou R$ 25.000 em 30 dias',
            content: 'social_proof_template',
            trigger: { type: 'signup' },
            delay: 24
          },
          {
            id: 'urgency_3',
            name: 'Urgência + Escassez',
            subject: '⏰ Últimas vagas para o programa VIP',
            content: 'urgency_template',
            trigger: { type: 'signup' },
            delay: 48
          },
          {
            id: 'objection_4',
            name: 'Quebra de Objeções',
            subject: '❓ "Funciona mesmo?" - Veja as provas',
            content: 'objection_template',
            trigger: { type: 'signup' },
            delay: 72
          },
          {
            id: 'final_5',
            name: 'Última Chamada',
            subject: '🚨 ÚLTIMA CHANCE - Programa encerra hoje',
            content: 'final_call_template',
            trigger: { type: 'signup' },
            delay: 96
          }
        ]
      }
    ];

    // Agenda envios futuros (simulado - em produção usar serviço de agendamento)
    sequences[0].emails.forEach(email => {
      if (email.delay && email.delay > 0) {
        setTimeout(() => {
          sendSequenceEmail(leadData, email);
        }, email.delay * 60 * 60 * 1000); // converte horas para ms
      }
    });
  }, []);

  // Envia email da sequência
  const sendSequenceEmail = useCallback(async (leadData: LeadFormData, template: EmailTemplate) => {
    const emailParams = {
      to_name: leadData.name,
      to_email: leadData.email,
      from_name: 'AffiliateFlow Premium',
      template_name: template.name,
      email_content: getEmailContent(template.content, leadData)
    };

    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        template.id,
        emailParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );
      console.log(`Email ${template.name} enviado para ${leadData.email}`);
    } catch (error) {
      console.error(`Erro ao enviar ${template.name}:`, error);
    }
  }, []);

  // Segmentação inteligente de leads
  const segmentLeads = useCallback((leads: LeadFormData[]) => {
    return {
      new_users: leads.filter(lead => {
        const capturedAt = new Date(lead.capturedAt || Date.now());
        const daysSinceCaptured = (Date.now() - capturedAt.getTime()) / (1000 * 60 * 60 * 24);
        return daysSinceCaptured <= 1;
      }),
      engaged: leads.filter(lead => lead.phone), // leads que forneceram telefone
      high_intent: leads.filter(lead => lead.source === 'cta_button'),
      vip: leads.filter(lead => lead.utm_campaign === 'vip')
    };
  }, []);

  // Analytics de conversão
  const getAnalytics = useCallback(() => {
    const storedLeads = JSON.parse(localStorage.getItem('affiliateflow_leads') || '[]');
    const today = new Date().toDateString();
    
    return {
      totalLeads: storedLeads.length,
      todayLeads: storedLeads.filter((lead: any) => 
        new Date(lead.capturedAt).toDateString() === today
      ).length,
      conversionRate: storedLeads.length > 0 ? 
        (storedLeads.filter((lead: any) => lead.converted).length / storedLeads.length * 100).toFixed(1) : 0,
      segments: segmentLeads(storedLeads)
    };
  }, [segmentLeads]);

  return {
    captureLead,
    startAutomationSequence,
    segmentLeads,
    getAnalytics,
    isSubmitting,
    subscribers
  };
};

// Templates de email com neuromarketing
const getEmailContent = (templateType: string, leadData: LeadFormData): string => {
  const templates = {
    welcome_template: `
      Olá ${leadData.name}! 🎉
      
      Bem-vindo à comunidade AffiliateFlow Premium!
      
      Você acaba de dar o primeiro passo para transformar sua vida financeira.
      
      🎁 MATERIAL EXCLUSIVO LIBERADO:
      ✓ Ebook: "7 Estratégias Para R$ 10k+ em 30 Dias"
      ✓ Planilha de Controle de Ganhos
      ✓ Acesso ao Grupo VIP no Telegram
      
      👆 Clique aqui para baixar tudo: [LINK]
      
      Nos próximos dias você receberá:
      📈 Cases reais de afiliados que faturam 6 dígitos
      🎯 Estratégias avançadas de conversão
      🚀 Oportunidades exclusivas
      
      Um abraço,
      Equipe AffiliateFlow
    `,
    
    social_proof_template: `
      ${leadData.name}, você precisa ver isso! 👀
      
      Enquanto você lê este email, Maria Santos está comemorando...
      
      💰 R$ 25.847 em apenas 30 dias!
      
      "Nunca pensei que seria possível. Em 4 semanas já paguei todas as minhas dívidas e ainda sobrou para investir." - Maria, 34 anos, São Paulo
      
      🏆 RESULTADOS REAIS DE OUTROS AFILIADOS:
      • João Pedro: R$ 15.230/mês (início em fevereiro)
      • Ana Clara: R$ 31.500/mês (início em janeiro)  
      • Ricardo Mendes: R$ 18.750/mês (início em março)
      
      O que eles fizeram de diferente?
      
      👉 Usaram o MESMO sistema que está disponível para você
      👉 Seguiram o passo-a-passo exato (sem inventar)
      👉 Aplicaram as estratégias por 30 dias
      
      Você está a 1 clique de começar: [BAIXAR APP]
      
      Não deixe para depois,
      Equipe AffiliateFlow
    `,
    
    urgency_template: `
      ⏰ ATENÇÃO ${leadData.name}!
      
      Restam apenas 48 horas para garantir sua vaga no Programa VIP.
      
      🚨 ÚLTIMAS 127 VAGAS DISPONÍVEIS
      
      Por que a pressa?
      
      O programa VIP tem acompanhamento personalizado e por isso limitamos a 500 pessoas por turma.
      
      🎯 NO PROGRAMA VIP VOCÊ TEM:
      ✓ Mentoria individual comigo
      ✓ Grupo exclusivo com os TOP afiliados
      ✓ Material avançado (não disponível na versão gratuita)
      ✓ Suporte prioritário 24/7
      ✓ Garantia de resultados em 60 dias
      
      💡 A turma anterior (fevereiro) teve:
      - 94% de taxa de sucesso
      - Ganho médio de R$ 22.340/mês
      - ROI de 850% em 90 dias
      
      ⚡ OFERTA ESPECIAL (próximas 48h):
      De R$ 1.997 por apenas 12x de R$ 97
      
      [GARANTIR MINHA VAGA AGORA]
      
      Não perca esta oportunidade,
      Equipe AffiliateFlow
    `
  };
  
  return templates[templateType as keyof typeof templates] || templates.welcome_template;
};
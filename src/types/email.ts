// Types para sistema de email marketing
export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  content: string;
  delay?: number; // delay em horas
  trigger: EmailTrigger;
  segment?: UserSegment;
}

export interface EmailTrigger {
  type: 'signup' | 'download' | 'verification' | 'completion' | 'abandoned';
  condition?: string;
}

export interface UserSegment {
  type: 'new_user' | 'engaged' | 'high_intent' | 'vip';
  criteria: string[];
}

export interface LeadFormData {
  name: string;
  email: string;
  phone?: string;
  source: string;
  utm_campaign?: string;
  utm_medium?: string;
  utm_source?: string;
  capturedAt?: string;
  converted?: boolean;
}

export interface EmailCampaign {
  id: string;
  name: string;
  templates: EmailTemplate[];
  isActive: boolean;
  triggers: EmailTrigger[];
}

export interface AutomationSequence {
  id: string;
  name: string;
  emails: EmailTemplate[];
  totalEmails: number;
  conversionGoal: string;
}
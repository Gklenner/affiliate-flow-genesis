import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEmailMarketing } from '@/hooks/useEmailMarketing';
import { LeadFormData } from '@/types/email';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Gift, Users, TrendingUp } from 'lucide-react';

// Schema de validação com foco em conversão
const leadSchema = z.object({
  name: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(50, 'Nome muito longo'),
  email: z.string()
    .email('Email inválido')
    .min(1, 'Email é obrigatório'),
  phone: z.string()
    .optional()
    .refine((val) => !val || /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(val), {
      message: 'Formato: (11) 99999-9999'
    })
});

type LeadFormValues = z.infer<typeof leadSchema>;

interface LeadCaptureFormProps {
  source?: string;
  variant?: 'popup' | 'inline' | 'sidebar';
  showBenefits?: boolean;
  onSuccess?: (data: LeadFormData) => void;
}

export const LeadCaptureForm = ({ 
  source = 'hero_form', 
  variant = 'inline',
  showBenefits = true,
  onSuccess 
}: LeadCaptureFormProps) => {
  const [showPhone, setShowPhone] = useState(false);
  const { captureLead, isSubmitting } = useEmailMarketing();
  const { toast } = useToast();

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const onSubmit = async (values: LeadFormValues) => {
    const leadData: LeadFormData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      source,
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || undefined,
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || undefined,
      utm_source: new URLSearchParams(window.location.search).get('utm_source') || undefined,
      capturedAt: new Date().toISOString()
    };

    const result = await captureLead(leadData);
    
    if (result.success) {
      toast({
        title: "🎉 Cadastro realizado!",
        description: "Material enviado para seu email. Verifique sua caixa de entrada.",
        duration: 5000
      });
      
      form.reset();
      onSuccess?.(leadData);
      
      // Analytics tracking
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'lead_capture', {
          event_category: 'engagement',
          event_label: source,
          value: 1
        });
      }
    } else {
      toast({
        title: "Erro no cadastro",
        description: result.message,
        variant: "destructive"
      });
    }
  };

  const benefits = [
    {
      icon: <Gift className="w-5 h-5 text-lp-green" />,
      text: "Material exclusivo gratuito"
    },
    {
      icon: <Users className="w-5 h-5 text-lp-green" />,
      text: "Acesso ao grupo VIP"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-lp-green" />,
      text: "Estratégias de alta conversão"
    }
  ];

  const getVariantStyles = () => {
    switch (variant) {
      case 'popup':
        return 'glass-strong p-8 rounded-3xl max-w-md mx-auto animate-scale-in';
      case 'sidebar':
        return 'glass p-6 rounded-2xl';
      default:
        return 'glass-strong p-8 rounded-3xl max-w-lg mx-auto';
    }
  };

  return (
    <div className={getVariantStyles()}>
      {/* Header com urgência/escassez */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center space-x-2 bg-lp-orange/20 px-4 py-2 rounded-full mb-4">
          <div className="w-2 h-2 bg-lp-orange rounded-full animate-pulse" />
          <span className="text-sm text-lp-orange font-medium">
            🔥 Últimas 73 vagas disponíveis
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-lp-light mb-2">
          Receba o Material <span className="text-gradient">GRATUITO</span>
        </h3>
        
        <p className="text-lp-light/80 text-sm">
          Sistema completo que já transformou a vida de +2.847 pessoas
        </p>
      </div>

      {/* Benefícios */}
      {showBenefits && (
        <div className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              {benefit.icon}
              <span className="text-sm text-lp-light/90">{benefit.text}</span>
            </div>
          ))}
        </div>
      )}

      {/* Formulário */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lp-light text-sm">Nome completo</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Digite seu nome completo"
                    className="bg-background/10 border-lp-light/20 text-lp-light placeholder:text-lp-light/50 focus:border-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lp-light text-sm">Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-background/10 border-lp-light/20 text-lp-light placeholder:text-lp-light/50 focus:border-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo telefone condicional para maior conversão */}
          {!showPhone ? (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-lp-light/60 hover:text-lp-light p-0 h-auto"
              onClick={() => setShowPhone(true)}
            >
              + Adicionar WhatsApp (receber avisos prioritários)
            </Button>
          ) : (
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lp-light text-sm">
                    WhatsApp <span className="text-lp-light/60">(opcional)</span>
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="(11) 99999-9999"
                      className="bg-background/10 border-lp-light/20 text-lp-light placeholder:text-lp-light/50 focus:border-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-primary hover:scale-[1.02] transition-transform font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Enviando material...
              </>
            ) : (
              <>
                🚀 Quero Receber GRÁTIS
              </>
            )}
          </Button>
        </form>
      </Form>

      {/* Prova social + garantia */}
      <div className="mt-6 text-center">
        <div className="flex justify-center items-center space-x-2 mb-2">
          <div className="flex -space-x-1">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="w-6 h-6 bg-gradient-secondary rounded-full border-2 border-lp-navy" />
            ))}
          </div>
          <span className="text-xs text-lp-light/70">+2.847 pessoas já receberam</span>
        </div>
        
        <p className="text-xs text-lp-light/60">
          🔒 Seus dados estão 100% seguros. Zero spam.
        </p>
      </div>
    </div>
  );
};
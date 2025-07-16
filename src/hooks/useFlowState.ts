import { useState, useCallback } from 'react';
import { FlowState, FlowStep, AFFILIATE_LINK } from '@/types/landing';
import { TIMING } from '@/lib/constants';

// Hook para gerenciar o estado do fluxo da landing page
export const useFlowState = () => {
  const [state, setState] = useState<FlowState>({
    currentStep: 0,
    isLoading: false,
    affiliateLink: AFFILIATE_LINK,
    hasDownloadedApp: false,
    isVerified: false,
    materialSent: false,
    linkCopied: false
  });

  // Função para avançar para próxima etapa
  const nextStep = useCallback((targetStep?: FlowStep) => {
    setState(prev => ({
      ...prev,
      currentStep: targetStep || (Math.min(prev.currentStep + 1, 2) as FlowStep)
    }));
  }, []);

  // Função para mostrar loading
  const setLoading = useCallback((isLoading: boolean) => {
    setState(prev => ({ ...prev, isLoading }));
  }, []);

  // Função para simular geração de link
  const generateLink = useCallback(async () => {
    setLoading(true);
    
    // Simula API call
    await new Promise(resolve => setTimeout(resolve, TIMING.LINK_GENERATION));
    
    setState(prev => ({
      ...prev,
      isLoading: false,
      currentStep: 1
    }));
    
    return AFFILIATE_LINK;
  }, [setLoading]);

  // Função para marcar app como baixado
  const markAppDownloaded = useCallback((platform: 'android' | 'ios') => {
    setState(prev => ({
      ...prev,
      hasDownloadedApp: true
    }));
  }, []);

  // Função para verificar acesso
  const verifyAccess = useCallback(async () => {
    setLoading(true);
    
    // Simula verificação
    await new Promise(resolve => setTimeout(resolve, TIMING.VERIFICATION));
    
    setState(prev => ({
      ...prev,
      isLoading: false,
      isVerified: true,
      currentStep: 2
    }));
    
    return true;
  }, [setLoading]);

  // Função para enviar material
  const sendMaterial = useCallback(async () => {
    setLoading(true);
    
    // Simula envio
    await new Promise(resolve => setTimeout(resolve, TIMING.MATERIAL_SEND));
    
    setState(prev => ({
      ...prev,
      isLoading: false,
      materialSent: true
    }));
    
    return true;
  }, [setLoading]);

  // Função para copiar link
  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(AFFILIATE_LINK);
      setState(prev => ({ ...prev, linkCopied: true }));
      
      // Reset status após 3 segundos
      setTimeout(() => {
        setState(prev => ({ ...prev, linkCopied: false }));
      }, TIMING.SUCCESS_MESSAGE_DURATION);
      
      return true;
    } catch (error) {
      console.error('Erro ao copiar link:', error);
      return false;
    }
  }, []);

  // Função para resetar fluxo
  const resetFlow = useCallback(() => {
    setState({
      currentStep: 0,
      isLoading: false,
      affiliateLink: AFFILIATE_LINK,
      hasDownloadedApp: false,
      isVerified: false,
      materialSent: false,
      linkCopied: false
    });
  }, []);

  return {
    state,
    actions: {
      nextStep,
      setLoading,
      generateLink,
      markAppDownloaded,
      verifyAccess,
      sendMaterial,
      copyLink,
      resetFlow
    }
  };
};
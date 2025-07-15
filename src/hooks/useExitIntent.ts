import { useState, useEffect, useCallback } from 'react';

interface ExitIntentOptions {
  enabled?: boolean;
  delay?: number; // delay mínimo antes de mostrar (em segundos)
  sensitivity?: number; // sensibilidade do movimento do mouse
  showOnMobile?: boolean;
  maxDisplays?: number; // máximo de vezes para mostrar
}

export const useExitIntent = (options: ExitIntentOptions = {}) => {
  const {
    enabled = true,
    delay = 5, // 5 segundos mínimo na página
    sensitivity = 20,
    showOnMobile = false,
    maxDisplays = 1
  } = options;

  const [isTriggered, setIsTriggered] = useState(false);
  const [canShow, setCanShow] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);

  // Verifica se já mostrou muitas vezes
  useEffect(() => {
    const stored = localStorage.getItem('exitIntentDisplayCount');
    const count = stored ? parseInt(stored, 10) : 0;
    setDisplayCount(count);
  }, []);

  // Delay inicial
  useEffect(() => {
    if (!enabled) return;

    const timer = setTimeout(() => {
      setCanShow(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [enabled, delay]);

  // Detecta movimento do mouse para exit intent
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (!canShow || displayCount >= maxDisplays || isTriggered) return;

    // Detecta movimento para fora da janela (top)
    if (e.clientY <= sensitivity) {
      setIsTriggered(true);
      
      // Incrementa contador
      const newCount = displayCount + 1;
      setDisplayCount(newCount);
      localStorage.setItem('exitIntentDisplayCount', newCount.toString());
    }
  }, [canShow, displayCount, maxDisplays, isTriggered, sensitivity]);

  // Detecta tentativa de fechar tab/navegador
  const handleBeforeUnload = useCallback((e: BeforeUnloadEvent) => {
    if (!canShow || displayCount >= maxDisplays || isTriggered) return;
    
    // Apenas no desktop - mobile já tem exit intent via mouse
    if (!showOnMobile && window.innerWidth <= 768) return;

    setIsTriggered(true);
    
    const newCount = displayCount + 1;
    setDisplayCount(newCount);
    localStorage.setItem('exitIntentDisplayCount', newCount.toString());

    // Alguns navegadores mostram confirmação
    e.preventDefault();
    e.returnValue = 'Você tem certeza que quer sair? Você pode estar perdendo uma oferta especial!';
  }, [canShow, displayCount, maxDisplays, isTriggered, showOnMobile]);

  // Detecta visibilidade da página (mobile)
  const handleVisibilityChange = useCallback(() => {
    if (!showOnMobile || !canShow || displayCount >= maxDisplays || isTriggered) return;
    
    if (document.hidden) {
      setIsTriggered(true);
      
      const newCount = displayCount + 1;
      setDisplayCount(newCount);
      localStorage.setItem('exitIntentDisplayCount', newCount.toString());
    }
  }, [showOnMobile, canShow, displayCount, maxDisplays, isTriggered]);

  useEffect(() => {
    if (!enabled) return;

    // Mouse leave (desktop)
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Before unload (desktop/mobile)
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Visibility change (mobile)
    if (showOnMobile) {
      document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (showOnMobile) {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }
    };
  }, [enabled, handleMouseLeave, handleBeforeUnload, handleVisibilityChange, showOnMobile]);

  const reset = useCallback(() => {
    setIsTriggered(false);
  }, []);

  const disable = useCallback(() => {
    localStorage.setItem('exitIntentDisplayCount', maxDisplays.toString());
    setDisplayCount(maxDisplays);
  }, [maxDisplays]);

  return {
    isTriggered,
    canShow,
    displayCount,
    maxDisplaysReached: displayCount >= maxDisplays,
    reset,
    disable
  };
};
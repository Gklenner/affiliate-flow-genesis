import { memo } from 'react';

// Componente para os orbs animados de fundo
export const FloatingOrbs = memo(() => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Orb Principal */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-float" />
      
      {/* Orb Secundário */}
      <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-secondary rounded-full opacity-15 blur-2xl animate-float-delayed" />
      
      {/* Orb Menor */}
      <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-gradient-radial rounded-full opacity-10 blur-xl animate-orb" />
      
      {/* Orbs Pequenos */}
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-secondary/15 rounded-full blur-lg animate-float-delayed" />
    </div>
  );
});

FloatingOrbs.displayName = 'FloatingOrbs';
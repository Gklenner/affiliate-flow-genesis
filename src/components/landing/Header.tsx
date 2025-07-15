import { memo } from 'react';

export const Header = memo(() => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <h1 className="text-xl font-bold text-lp-light">
              AffiliateFlow Premium
            </h1>
          </div>

          {/* Badge */}
          <div className="hidden sm:flex items-center space-x-2">
            <div className="flex items-center space-x-2 glass-strong px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-lp-green rounded-full animate-pulse" />
              <span className="text-xs text-lp-light/80">+2.847 afiliados ativos</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
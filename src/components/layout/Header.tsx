import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-bg-primary/95 backdrop-blur-xl border-b border-gray-200 shadow-sm' : 'bg-bg-primary/80 backdrop-blur-xl'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-50 border-2 border-orange-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="9" strokeWidth="1.8"/>
                <circle cx="12" cy="12" r="3.5" strokeWidth="1.6"/>
                <line x1="12" y1="3" x2="12" y2="5" strokeWidth="1.6"/>
                <line x1="12" y1="19" x2="12" y2="21" strokeWidth="1.6"/>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <strong className="font-serif text-xl font-semibold">Linha & Ponto</strong>
              <span className="text-xs tracking-widest uppercase text-gray-500">Oficina de Costura</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-[-2px] left-0 w-0 h-px bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button href="#contato" className="ml-4">
              Solicitar Orçamento
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Button>
          </nav>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-serif text-2xl py-2 border-b border-gray-100 hover:text-orange-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contato" className="w-full justify-center mt-4">
              Solicitar Orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

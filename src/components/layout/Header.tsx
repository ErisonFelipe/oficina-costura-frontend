import React, { useState, useEffect } from 'react';
import { FiUser, FiArrowRight } from 'react-icons/fi';
import { Button } from '../ui/Button';

const ADMIN_URL = import.meta.env.VITE_ADMIN_URL || 'http://localhost:5174';

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-[#E8E0D8] shadow-sm'
          : 'bg-[#FAF7F2]/80 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FDF8F5] border-2 border-[#E8D5CB] flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[#C67B5C]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="3.5" strokeWidth="1.6" />
                <line x1="12" y1="3" x2="12" y2="5" strokeWidth="1.6" />
                <line x1="12" y1="19" x2="12" y2="21" strokeWidth="1.6" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <strong className="font-serif text-xl font-semibold">Linha &amp; Ponto</strong>
              <span className="text-xs tracking-widest uppercase text-[#8A837D]">
                Oficina de Costura
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#6B6560] hover:text-[#C67B5C] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-[-2px] left-0 w-0 h-px bg-[#C67B5C] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Divider */}
            <div className="w-px h-6 bg-[#E8E0D8]" />

            {/* Login link (discreto) */}
            <a
              href={`${ADMIN_URL}/login`}
              className="flex items-center gap-2 text-sm font-medium text-[#8A837D] hover:text-[#C67B5C] transition-colors"
              title="Acesso administrativo"
            >
              <FiUser className="w-4 h-4" />
              Entrar
            </a>

            <Button href="#contato" className="ml-2">
              Solicitar Orçamento
              <FiArrowRight className="w-4 h-4" />
            </Button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[#2C2825] transition-all ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#2C2825] transition-all ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#2C2825] transition-all ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-t border-[#E8E0D8]">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-serif text-2xl py-2 border-b border-[#F5EDE6] hover:text-[#C67B5C] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Login mobile */}
            <a
              href={`${ADMIN_URL}/login`}
              className="flex items-center gap-3 py-2 text-[#8A837D] hover:text-[#C67B5C] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiUser className="w-5 h-5" />
              <span className="font-medium">Acesso administrativo</span>
            </a>

            <Button
              href="#contato"
              className="w-full justify-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solicitar Orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

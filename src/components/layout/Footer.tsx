import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C2825] text-[#C8C0B8] pt-16 pb-8 relative">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-serif text-xl font-semibold text-white mb-3">Linha & Ponto</h3>
            <p className="text-sm leading-relaxed text-[#A09890] max-w-xs">
              Costura artesanal com acabamento premium.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#inicio" className="text-[#A09890] hover:text-orange-500 transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-[#A09890] hover:text-orange-500 transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="text-[#A09890] hover:text-orange-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#galeria" className="text-[#A09890] hover:text-orange-500 transition-colors">Galeria</a></li>
              <li><a href="#contato" className="text-[#A09890] hover:text-orange-500 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">Serviços</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#servicos" className="text-[#A09890] hover:text-orange-500 transition-colors">Consertos e Ajustes</a></li>
              <li><a href="#servicos" className="text-[#A09890] hover:text-orange-500 transition-colors">Reformas</a></li>
              <li><a href="#servicos" className="text-[#A09890] hover:text-orange-500 transition-colors">Costura Personalizada</a></li>
              <li><a href="#servicos" className="text-[#A09890] hover:text-orange-500 transition-colors">Bainhas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">Contato</h4>
            <ul className="space-y-3 text-sm text-[#A09890]">
              <li>Rua das Flores, 123 — SP</li>
              <li>(11) 3456-7890</li>
              <li>Seg-Sex: 9h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#7A746E]">
          <span>&copy; 2025 Linha & Ponto — Oficina de Costura.</span>
          <span>Desenvolvido com carinho e precisão</span>
        </div>
      </div>
    </footer>
  );
};

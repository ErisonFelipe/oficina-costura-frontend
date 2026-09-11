import React from 'react';
import { Button } from '../components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FAF7F2]">
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-60">
        <svg viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.35">
          <path d="M50 100 Q150 50 200 150 T350 200" stroke="#C67B5C" strokeWidth="1.5" fill="none" strokeDasharray="8 8"/>
          <path d="M100 700 Q250 650 300 750 T500 700" stroke="#C67B5C" strokeWidth="1.5" fill="none" strokeDasharray="8 8"/>
          <circle cx="480" cy="180" r="4" stroke="#C67B5C" strokeWidth="1.2" fill="none"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-orange-600 bg-orange-50 px-4 py-2 rounded-full border border-orange-100 mb-6">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              Costura Artesanal Premium
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight mb-6 text-gray-900">
              Costura que <em className="italic text-orange-600 font-medium">veste</em> sua história com perfeição
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Da bainha mais simples ao vestido sob medida, nossa oficina une tradição artesanal, 
              precisão técnica e um olhar criativo para transformar cada peça em algo único.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="#servicos" variant="primary">
                Conheça nossos serviços
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Button>
              <Button href="#contato" variant="outline">
                Fale Conosco
              </Button>
            </div>

            <div className="flex gap-8 mt-12 pt-8 border-t border-gray-200 justify-center lg:justify-start">
              <div className="flex flex-col">
                <strong className="font-serif text-2xl font-semibold text-gray-900">+15 anos</strong>
                <span className="text-sm text-gray-500">de experiência</span>
              </div>
              <div className="flex flex-col">
                <strong className="font-serif text-2xl font-semibold text-gray-900">+5.000</strong>
                <span className="text-sm text-gray-500">peças ajustadas</span>
              </div>
              <div className="flex flex-col">
                <strong className="font-serif text-2xl font-semibold text-gray-900">100%</strong>
                <span className="text-sm text-gray-500">atenção aos detalhes</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative max-w-md mx-auto">
              <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <rect x="30" y="30" width="440" height="440" rx="24" stroke="#C67B5C" strokeWidth="1.2" strokeDasharray="10 8" fill="#FDF8F5" opacity="0.7"/>
                <ellipse cx="250" cy="75" rx="40" ry="12" fill="#E8D5CB" stroke="#C67B5C" strokeWidth="1.5"/>
                <rect x="210" y="75" width="80" height="28" rx="4" fill="#F5EDE6" stroke="#C67B5C" strokeWidth="1.2"/>
                <ellipse cx="250" cy="103" rx="40" ry="12" fill="#E8D5CB" stroke="#C67B5C" strokeWidth="1.5"/>
                <path d="M250 103 Q255 130 260 155 Q265 180 240 210" stroke="#C67B5C" strokeWidth="1.8" fill="none"/>
                <path d="M150 200 L150 320 Q150 340 170 340 L330 340 Q350 340 350 320 L350 200" stroke="#C67B5C" strokeWidth="2.2" fill="#FDF8F5"/>
                <line x1="235" y1="165" x2="235" y2="225" stroke="#A85E42" strokeWidth="2.2" strokeLinecap="round"/>
                <circle cx="235" cy="230" r="2.5" fill="#A85E42"/>
                <rect x="130" y="340" width="240" height="14" rx="6" fill="#E8D5CB" stroke="#C67B5C" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

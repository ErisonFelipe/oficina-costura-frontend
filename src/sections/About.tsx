import React from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';

export const About: React.FC = () => {
  const features = [
    'Acabamento premium',
    'Materiais selecionados',
    'Atendimento personalizado',
  ];

  return (
    <section id="sobre" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex items-center justify-center min-h-[400px] order-last lg:order-first">
            <div className="w-full max-w-md aspect-square relative">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect x="40" y="40" width="320" height="320" rx="20" stroke="#C67B5C" strokeWidth="1.3" strokeDasharray="12 10" fill="#FDF8F5" opacity="0.8"/>
                <ellipse cx="200" cy="130" rx="70" ry="20" fill="#E8D5CB" stroke="#C67B5C" strokeWidth="1.8"/>
                <rect x="130" y="130" width="140" height="45" rx="6" fill="#F5EDE6" stroke="#C67B5C" strokeWidth="1.5"/>
                <ellipse cx="200" cy="175" rx="70" ry="20" fill="#E8D5CB" stroke="#C67B5C" strokeWidth="1.8"/>
                <line x1="270" y1="200" x2="270" y2="300" stroke="#A85E42" strokeWidth="2.8" strokeLinecap="round"/>
                <circle cx="270" cy="310" r="3.5" fill="#A85E42"/>
                <circle cx="120" cy="300" r="10" fill="#FDF8F5" stroke="#C67B5C" strokeWidth="1.5"/>
                <circle cx="120" cy="300" r="2.5" fill="#C67B5C"/>
              </svg>
            </div>
          </div>

          <div>
            <SectionLabel>Sobre a Oficina</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight mb-6 text-gray-900">
              Uma paixão pelo detalhe que transforma tecidos em histórias
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Na <strong className="text-gray-900">Linha & Ponto</strong>, acreditamos que cada peça 
                de roupa carrega histórias — e nossa missão é preservá-las com o máximo de cuidado. 
                Com mais de 15 anos de experiência em costura profissional, unimos técnica apurada, 
                sensibilidade estética e um compromisso inabalável com a qualidade.
              </p>
              <p>
                Cada ajuste, cada bainha e cada criação é executada com atenção milimétrica aos detalhes, 
                utilizando materiais de alta qualidade e acabamentos que honram a tradição artesanal — 
                sem abrir mão de um olhar contemporâneo.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-2 text-sm font-medium bg-[#F5EDE6] px-5 py-2.5 rounded-full border border-gray-200 text-gray-800"
                >
                  <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

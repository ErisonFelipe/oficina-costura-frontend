import React from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';

const galleryItems = [
  { id: 1, title: 'Vestido de festa sob medida', category: 'Ajuste de vestido', gradient: 'linear-gradient(135deg, #D4A08C, #C67B5C, #B5654A)' },
  { id: 2, title: 'Terno reestruturado', category: 'Reforma', gradient: 'linear-gradient(135deg, #A8B8A0, #8BA888, #6F8F6C)' },
  { id: 3, title: 'Blusa exclusiva', category: 'Costura personalizada', gradient: 'linear-gradient(135deg, #C4B8AC, #A89888, #8C7B6B)' },
  { id: 4, title: 'Calça social ajustada', category: 'Bainha', gradient: 'linear-gradient(135deg, #B8C4C8, #8FA8B0, #6C8A92)' },
  { id: 5, title: 'Jaqueta com bordado', category: 'Customização', gradient: 'linear-gradient(135deg, #D8C4B0, #C4A88F, #A89078)' },
  { id: 6, title: 'Saia reestilizada', category: 'Ajuste', gradient: 'linear-gradient(135deg, #C0A8A0, #A88C80, #8C7064)' },
];

export const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-[#F5EDE6] relative">
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-300/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <SectionLabel>Galeria</SectionLabel>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight text-gray-900 mb-5">
            Trabalhos que falam por si
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-xl mx-auto">
            Uma seleção de peças que passaram por nossas mãos — cada uma com sua história, 
            seu caimento e seu toque de perfeição.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer border border-gray-200 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ background: item.gradient }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                <span className="text-xs font-semibold tracking-widest uppercase text-white/80 mb-2">
                  {item.category}
                </span>
                <span className="font-serif text-lg font-medium text-white drop-shadow-lg">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

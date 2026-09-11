import React from 'react';
import { services } from '../data/services';
import { SectionLabel } from '../components/ui/SectionLabel';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-[#F5EDE6] relative">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-300/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <SectionLabel>Nossos Serviços</SectionLabel>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight text-gray-900 mb-5">
            Cuidado artesanal em cada detalhe
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-xl mx-auto">
            Da bainha simples à peça sob medida, oferecemos um atendimento personalizado 
            para atender todas as suas necessidades de costura com precisão e carinho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 border border-gray-200 transition-all duration-300 hover:shadow-md hover:transform hover:-translate-y-1.5 cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              
              <div className="w-12 h-12 rounded-full bg-orange-50 border-2 border-orange-100 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-orange-500 group-hover:border-orange-500">
                <svg className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M19 4l-2 2-3-3 2-2 3 3z" />
                  <path d="M17 6l-10 10-2 2M5 19l-1-1M17 6l3 3" />
                </svg>
              </div>
              
              <h3 className="font-serif text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
              
              <div className="inline-block text-xs font-semibold tracking-wider uppercase text-gray-500 border-t border-dashed border-gray-300 pt-3 w-full">
                {service.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

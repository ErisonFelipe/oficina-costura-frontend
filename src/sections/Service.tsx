import React from 'react';
import { services } from '../data/services';
import { SectionLabel } from '../components/ui/SectionLabel';

const ServiceIcon: React.FC<{ type: string }> = ({ type }) => {
  const icons: Record<string, JSX.Element> = {
    scissors: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M19 4l-2 2-3-3 2-2 3 3z" />
        <path d="M17 6l-10 10-2 2M5 19l-1-1M17 6l3 3" />
        <line x1="4" y1="20" x2="8" y2="16" />
      </svg>
    ),
    refresh: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="8.5" y1="7" x2="20" y2="12" />
        <line x1="8.5" y1="17" x2="20" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" strokeLinecap="round" />
      </svg>
    ),
    machine: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M7 16v3a1 1 0 001 1h8a1 1 0 001-1v-3" />
        <line x1="9" y1="20" x2="15" y2="20" />
        <circle cx="17" cy="10" r="1.5" />
      </svg>
    ),
    ruler: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 7h18v10H3z" />
        <path d="M3 7h18v10H3z" strokeDasharray="3 3" opacity="0.5" />
        <line x1="7" y1="7" x2="7" y2="17" />
        <line x1="11" y1="7" x2="11" y2="17" />
        <line x1="15" y1="7" x2="15" y2="17" />
        <line x1="19" y1="7" x2="19" y2="17" />
      </svg>
    ),
    tuxedo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3c-2.5 0-4.5 1.5-4.5 4v1c-1.5 0.5-2.5 2-2.5 3.5V17c0 1.5 1 2.5 2.5 2.5h9c1.5 0 2.5-1 2.5-2.5v-5.5c0-1.5-1-3-2.5-3.5V7c0-2.5-2-4-4.5-4z" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="13" y2="13" />
      </svg>
    ),
    sparkles: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="6" cy="8" r="2.5" />
        <circle cx="18" cy="8" r="2.5" />
        <circle cx="6" cy="16" r="2.5" />
        <circle cx="18" cy="16" r="2.5" />
        <circle cx="12" cy="8" r="1.5" />
        <circle cx="12" cy="16" r="1.5" />
      </svg>
    ),
  };

  return icons[type] || icons.scissors;
};

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="services section-padding bg-bg-secondary relative">
      {/* Stitch line decoration */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      
      <div className="container">
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <SectionLabel>Nossos Serviços</SectionLabel>
          </div>
          <h2 className="section-title text-center">Cuidado artesanal em cada detalhe</h2>
          <p className="section-subtitle text-center mx-auto">
            Da bainha simples à peça sob medida, oferecemos um atendimento personalizado 
            para atender todas as suas necessidades de costura com precisão e carinho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 border border-border-light transition-all duration-300 hover:shadow-md hover:transform hover:-translate-y-1.5 cursor-default relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              
              <div className="w-13 h-13 rounded-full bg-accent-bg border-2 border-accent-light flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-accent group-hover:border-accent">
                <div className="text-accent group-hover:text-white transition-colors duration-300">
                  <ServiceIcon type={service.icon} />
                </div>
              </div>
              
              <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{service.description}</p>
              
              <div className="inline-block text-xs font-semibold tracking-wider uppercase text-text-light border-t border-dashed border-border-medium pt-3 w-full">
                {service.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
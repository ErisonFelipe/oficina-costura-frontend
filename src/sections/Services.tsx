import React from 'react';
import { motion } from 'framer-motion';
import {
  FiScissors,
  FiRefreshCw,
  FiTarget,
  FiRuler,
  FiUser,
  FiStar,
} from 'react-icons/fi';
import { services } from '../data/services';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Reveal } from '../components/ui/Reveal';
import { StitchDivider } from '../components/ui/StitchDivider';

const iconMap: Record<string, React.ReactNode> = {
  scissors: <FiScissors />,
  refresh: <FiRefreshCw />,
  machine: <FiTarget />,
  ruler: <FiRuler />,
  tuxedo: <FiUser />,
  sparkles: <FiStar />,
};

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-[#F5EDE6] relative overflow-hidden">
      {/* Linha costurada no topo */}
      <div className="absolute top-0 left-0 right-0 stitch-horizontal" />

      {/* Decoração de fundo */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#C67B5C]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#8BA888]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabeçalho */}
        <Reveal className="text-center mb-16">
          <div className="flex justify-center">
            <SectionLabel>Nossos Serviços</SectionLabel>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight text-[#2C2825] mb-5">
            Cuidado artesanal em cada detalhe
          </h2>
          <p className="text-base text-[#6B6560] leading-relaxed max-w-xl mx-auto">
            Da bainha simples à peça sob medida, oferecemos atendimento personalizado para
            atender todas as suas necessidades com precisão e carinho.
          </p>
        </Reveal>

        {/* Grid de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.08}>
              <motion.div
                className="group bg-white rounded-2xl p-8 border border-[#E8E0D8] transition-all duration-300 cursor-default relative overflow-hidden h-full card-stitch"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {/* Barra superior com gradiente */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C67B5C] to-[#E8D5CB] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Ícone */}
                <div className="relative w-14 h-14 rounded-2xl bg-[#FDF8F5] border-2 border-[#E8D5CB] flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#C67B5C] group-hover:border-[#C67B5C] group-hover:rotate-6">
                  <div className="text-[#C67B5C] group-hover:text-white transition-colors duration-300 text-xl">
                    {iconMap[service.icon]}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold mb-3 text-[#2C2825]">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B6560] leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="text-xs font-semibold tracking-wider uppercase text-[#8A837D] border-t border-dashed border-[#D5CBC2] pt-3">
                  {service.tag}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Divisor decorativo */}
        <StitchDivider variant="zigzag" />
      </div>
    </section>
  );
};

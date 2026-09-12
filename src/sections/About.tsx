import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Reveal } from '../components/ui/Reveal';

export const About: React.FC = () => {
  const features = ['Acabamento premium', 'Materiais selecionados', 'Atendimento personalizado'];

  return (
    <section id="sobre" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Linhas costuradas decorativas de fundo */}
      <svg
        className="absolute top-20 right-0 w-1/2 h-40 opacity-20 pointer-events-none"
        viewBox="0 0 600 200"
        fill="none"
      >
        <path
          d="M0 100 Q150 50 300 100 T600 100"
          stroke="#C67B5C"
          strokeWidth="2"
          strokeDasharray="8 8"
          fill="none"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <Reveal direction="right" className="relative flex items-center justify-center min-h-[400px] order-last lg:order-first">
            <div className="w-full max-w-md aspect-square relative">
              {/* Moldura decorativa dupla */}
              <div className="absolute -inset-4 border border-dashed border-[#C67B5C]/20 rounded-3xl" />
              <div className="absolute -inset-8 border border-dashed border-[#C67B5C]/10 rounded-3xl" />

              <motion.svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full relative"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              >
                <rect
                  x="40"
                  y="40"
                  width="320"
                  height="320"
                  rx="20"
                  stroke="#C67B5C"
                  strokeWidth="1.3"
                  strokeDasharray="12 10"
                  fill="#FDF8F5"
                  opacity="0.8"
                />
                {/* Carretel grande */}
                <ellipse cx="200" cy="130" rx="70" ry="20" fill="#E8D5CB" stroke="#C67B5C" strokeWidth="1.8" />
                <rect x="130" y="130" width="140" height="45" rx="6" fill="#F5EDE6" stroke="#C67B5C" strokeWidth="1.5" />
                <ellipse cx="200" cy="175" rx="70" ry="20" fill="#E8D5CB" stroke="#C67B5C" strokeWidth="1.8" />
                {/* Linha saindo do carretel */}
                <path
                  d="M135 145 Q150 140 165 148 Q180 156 195 145 Q210 134 225 146 Q240 158 255 145 Q268 134 265 150"
                  stroke="#C67B5C"
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.6"
                />
                {/* Agulha */}
                <line x1="270" y1="200" x2="270" y2="300" stroke="#A85E42" strokeWidth="2.8" strokeLinecap="round" />
                <circle cx="270" cy="310" r="3.5" fill="#A85E42" />
                {/* Tesoura */}
                <g transform="translate(70, 240) rotate(15)">
                  <ellipse cx="0" cy="0" rx="12" ry="7" stroke="#C67B5C" strokeWidth="1.8" fill="none" />
                  <ellipse cx="0" cy="18" rx="12" ry="7" stroke="#C67B5C" strokeWidth="1.8" fill="none" />
                  <line x1="8" y1="3" x2="40" y2="28" stroke="#C67B5C" strokeWidth="2" strokeLinecap="round" />
                  <line x1="8" y1="15" x2="40" y2="14" stroke="#C67B5C" strokeWidth="2" strokeLinecap="round" />
                </g>
                {/* Botões */}
                <circle cx="120" cy="300" r="10" fill="#FDF8F5" stroke="#C67B5C" strokeWidth="1.5" />
                <circle cx="120" cy="300" r="2.5" fill="#C67B5C" />
                <circle cx="330" cy="270" r="8" fill="#FDF8F5" stroke="#8BA888" strokeWidth="1.5" />
                <circle cx="330" cy="270" r="2" fill="#8BA888" />
              </motion.svg>

              {/* Badge flutuante */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-[#E8D5CB]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="font-serif text-3xl font-bold text-[#C67B5C]">+15</div>
                <div className="text-xs text-[#8A837D] uppercase tracking-wider">anos de ofício</div>
              </motion.div>
            </div>
          </Reveal>

          {/* Conteúdo */}
          <Reveal direction="left">
            <SectionLabel>Sobre a Oficina</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight mb-6 text-[#2C2825]">
              Uma paixão pelo detalhe que transforma tecidos em histórias
            </h2>

            <div className="space-y-4 text-[#6B6560] leading-relaxed">
              <p>
                Na <strong className="text-[#2C2825]">Linha & Ponto</strong>, acreditamos que cada peça
                de roupa carrega histórias — e nossa missão é preservá-las com o máximo de cuidado.
                Com mais de 15 anos de experiência, unimos técnica apurada, sensibilidade estética e
                compromisso inabalável com a qualidade.
              </p>
              <p>
                Cada ajuste, cada bainha e cada criação é executada com atenção milimétrica aos
                detalhes, utilizando materiais de alta qualidade e acabamentos que honram a tradição
                artesanal — sem abrir mão de um olhar contemporâneo.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-2 text-sm font-medium bg-white px-5 py-2.5 rounded-full border border-[#E8E0D8] text-[#2C2825] shadow-sm"
                >
                  <FiCheck className="w-4 h-4 text-[#C67B5C]" strokeWidth={3} />
                  {feature}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

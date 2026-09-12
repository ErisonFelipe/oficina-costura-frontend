import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiScissors, FiStar } from 'react-icons/fi';
import { Button } from '../components/ui/Button';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FAF7F2]"
    >
      {/* Decoração de fundo — linhas costuradas */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-1/4 left-0 w-1/3 h-1/2 opacity-30" viewBox="0 0 400 400" fill="none">
          <path
            d="M0 100 Q100 50 200 100 T400 100"
            stroke="#C67B5C"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            fill="none"
          />
          <path
            d="M0 200 Q100 150 200 200 T400 200"
            stroke="#C67B5C"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C67B5C] bg-[#FDF8F5] px-4 py-2 rounded-full border border-[#E8D5CB] mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <FiScissors className="w-3.5 h-3.5" />
              Costura Artesanal Premium
            </motion.div>

            {/* Título com animação palavra a palavra */}
            <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight mb-6 text-[#2C2825]">
              Costura que{' '}
              <span className="relative inline-block">
                <em className="italic text-[#C67B5C] font-medium">veste</em>
                {/* Sublinhado costurado */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0 4 Q25 0 50 4 T100 4"
                    stroke="#C67B5C"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1.2 }}
                  />
                </svg>
              </span>{' '}
              sua história com perfeição
            </h1>

            <motion.p
              className="text-base md:text-lg text-[#6B6560] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Da bainha mais simples ao vestido sob medida, nossa oficina une tradição artesanal,
              precisão técnica e um olhar criativo para transformar cada peça em algo único.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button href="#servicos" variant="primary" className="btn-stitch">
                Conheça nossos serviços
                <FiArrowRight className="w-4 h-4" />
              </Button>
              <Button href="#contato" variant="outline">
                Fale Conosco
              </Button>
            </motion.div>

            {/* Stats com separadores costurados */}
            <motion.div
              className="flex gap-8 mt-12 pt-8 border-t border-[#E8E0D8] justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              {[
                { value: '+15 anos', label: 'de experiência' },
                { value: '+5.000', label: 'peças ajustadas' },
                { value: '100%', label: 'atenção ao detalhe' },
              ].map((stat, i) => (
                <React.Fragment key={stat.label}>
                  <div className="flex flex-col">
                    <strong className="font-serif text-2xl font-semibold text-[#2C2825]">
                      {stat.value}
                    </strong>
                    <span className="text-sm text-[#8A837D]">{stat.label}</span>
                  </div>
                  {i < 2 && (
                    <div className="hidden sm:block w-px bg-[#E8E0D8] my-1" />
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual com ilustração + detalhes */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Moldura decorativa externa */}
              <div className="absolute -inset-6 border border-dashed border-[#C67B5C]/30 rounded-3xl" />

              {/* Ilustração principal */}
              <motion.div
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg
                  viewBox="0 0 500 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto drop-shadow-xl"
                >
                  <rect
                    x="30"
                    y="30"
                    width="440"
                    height="440"
                    rx="24"
                    stroke="#C67B5C"
                    strokeWidth="1.2"
                    strokeDasharray="10 8"
                    fill="#FDF8F5"
                    opacity="0.7"
                  />
                  {/* Carretel */}
                  <ellipse cx="250" cy="75" rx="40" ry="12" fill="#E8D5CB" stroke="#C67B5C" strokeWidth="1.5" />
                  <rect x="210" y="75" width="80" height="28" rx="4" fill="#F5EDE6" stroke="#C67B5C" strokeWidth="1.2" />
                  <ellipse cx="250" cy="103" rx="40" ry="12" fill="#E8D5CB" stroke="#C67B5C" strokeWidth="1.5" />
                  {/* Linha saindo do carretel */}
                  <path
                    d="M250 103 Q255 130 260 155 Q265 180 240 210"
                    stroke="#C67B5C"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Máquina */}
                  <path
                    d="M150 200 L150 320 Q150 340 170 340 L330 340 Q350 340 350 320 L350 200"
                    stroke="#C67B5C"
                    strokeWidth="2.2"
                    fill="#FDF8F5"
                  />
                  <line x1="235" y1="165" x2="235" y2="225" stroke="#A85E42" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="235" cy="230" r="2.5" fill="#A85E42" />
                  <rect x="130" y="340" width="240" height="14" rx="6" fill="#E8D5CB" stroke="#C67B5C" strokeWidth="1.5" />
                </svg>
              </motion.div>

              {/* Ícone flutuante — tesoura */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-[#E8D5CB]"
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <FiScissors className="w-6 h-6 text-[#C67B5C]" />
              </motion.div>

              {/* Ícone flutuante — estrela */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg border border-[#E8D5CB]"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <FiStar className="w-6 h-6 text-[#C67B5C]" fill="#E8D5CB" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

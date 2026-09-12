import React from 'react';
import { motion } from 'framer-motion';
import { FiAnchor } from 'react-icons/fi';

export const Highlight: React.FC = () => {
  return (
    <section className="py-32 bg-[#FAF7F2] relative overflow-hidden">
      {/* Linha de costura que atravessa a seção */}
      <svg
        className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 pointer-events-none"
        viewBox="0 0 1200 80"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 40 Q300 10 600 40 T1200 40"
          stroke="#C67B5C"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="8 8"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Ícone decorativo */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-dashed border-[#C67B5C]/40 mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <FiAnchor className="w-6 h-6 text-[#C67B5C]" />
          </motion.div>

          <div className="font-serif text-8xl text-[#E8D5CB] leading-none mb-4 italic">"</div>

          <blockquote className="font-serif text-3xl md:text-5xl font-medium italic leading-snug text-[#2C2825] mb-6">
            Cada ponto conta.
          </blockquote>

          {/* Linha com nós nas pontas */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-[#C67B5C]" />
            <span className="w-2 h-2 rounded-full bg-[#C67B5C]" />
            <span className="w-12 h-px bg-[#C67B5C]" />
          </div>

          <p className="text-sm tracking-widest uppercase text-[#8A837D] font-medium">
            Nossa filosofia de trabalho
          </p>
        </motion.div>
      </div>
    </section>
  );
};

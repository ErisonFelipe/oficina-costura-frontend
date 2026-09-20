import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiImage } from 'react-icons/fi';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Reveal } from '../components/ui/Reveal';
import { api, getImageUrl, type GalleryImage } from '../lib/api';

// Placeholders enquanto não há imagens reais
const placeholders = [
  { id: '1', title: 'Vestido de festa sob medida', category: 'Ajuste de vestido', gradient: 'linear-gradient(135deg, #D4A08C, #C67B5C, #B5654A)' },
  { id: '2', title: 'Terno reestruturado', category: 'Reforma', gradient: 'linear-gradient(135deg, #A8B8A0, #8BA888, #6F8F6C)' },
  { id: '3', title: 'Blusa exclusiva', category: 'Costura personalizada', gradient: 'linear-gradient(135deg, #C4B8AC, #A89888, #8C7B6B)' },
  { id: '4', title: 'Calça social ajustada', category: 'Bainha', gradient: 'linear-gradient(135deg, #B8C4C8, #8FA8B0, #6C8A92)' },
  { id: '5', title: 'Jaqueta com bordado', category: 'Customização', gradient: 'linear-gradient(135deg, #D8C4B0, #C4A88F, #A89078)' },
  { id: '6', title: 'Saia reestilizada', category: 'Ajuste', gradient: 'linear-gradient(135deg, #C0A8A0, #A88C80, #8C7064)' },
];

export const Gallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasRealImages, setHasRealImages] = useState(false);

  useEffect(() => {
    let mounted = true;

    api
      .listGallery({ active: true })
      .then((response) => {
        if (!mounted) return;
        if (response.data.length > 0) {
          setImages(response.data);
          setHasRealImages(true);
        }
      })
      .catch((err) => {
        console.warn('Não foi possível carregar a galeria da API:', err.message);
      })
      .finally(() => {
        if (mounted) setIsLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="galeria" className="py-24 bg-[#F5EDE6] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 stitch-horizontal" />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <div className="flex justify-center">
            <SectionLabel>Galeria</SectionLabel>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight text-[#2C2825] mb-5">
            Trabalhos que falam por si
          </h2>
          <p className="text-base text-[#6B6560] leading-relaxed max-w-xl mx-auto">
            Uma seleção de peças que passaram por nossas mãos — cada uma com sua história,
            seu caimento e seu toque de perfeição.
          </p>
        </Reveal>

        {/* Loading state */}
        {isLoading && (
          <div className="text-center py-16">
            <div className="inline-block w-8 h-8 border-2 border-[#C67B5C] border-t-transparent rounded-full animate-spin" />
            <p className="mt-4 text-sm text-[#8A837D]">Carregando galeria...</p>
          </div>
        )}

        {/* Real images grid */}
        {!isLoading && hasRealImages && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {images.map((image, index) => (
              <Reveal key={image.id} delay={index * 0.08}>
                <motion.div
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer border border-[#E8E0D8]"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={getImageUrl(image.filename)}
                    alt={image.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <FiArrowUpRight className="w-5 h-5 text-[#2C2825]" />
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                    <span className="text-xs font-semibold tracking-widest uppercase text-white/80 mb-2">
                      {image.category}
                    </span>
                    <span className="font-serif text-lg font-medium text-white drop-shadow-lg">
                      {image.title}
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        )}

        {/* Placeholder grid (quando não há imagens reais) */}
        {!isLoading && !hasRealImages && (
          <>
            <div className="flex items-center justify-center gap-2 mb-6 text-xs text-[#8A837D] uppercase tracking-wider">
              <FiImage className="w-4 h-4" />
              Prévia — imagens reais em breve
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {placeholders.map((item, index) => (
                <Reveal key={item.id} delay={index * 0.08}>
                  <motion.div
                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer border border-[#E8E0D8]"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                      style={{ background: item.gradient }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                      <span className="text-xs font-semibold tracking-widest uppercase text-white/80 mb-2">
                        {item.category}
                      </span>
                      <span className="font-serif text-lg font-medium text-white drop-shadow-lg">
                        {item.title}
                      </span>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

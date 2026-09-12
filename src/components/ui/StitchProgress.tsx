import React, { useEffect, useState } from 'react';

export const StitchProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[9999] pointer-events-none">
      {/* Fundo da linha (pontilhado faint) */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #C67B5C 0, #C67B5C 6px, transparent 6px, transparent 12px)',
        }}
      />
      {/* Progresso (linha sólida) */}
      <div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#C67B5C] to-[#A85E42] transition-all duration-150"
        style={{ width: `${progress}%` }}
      >
        {/* Ícone de agulha na ponta */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <div className="w-3 h-3 rounded-full bg-[#C67B5C] shadow-lg shadow-[#C67B5C]/50 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

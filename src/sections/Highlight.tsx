import React from 'react';

export const Highlight: React.FC = () => {
  return (
    <section className="py-32 bg-[#FAF7F2] relative overflow-hidden">
      <div className="absolute top-1/2 left-[-5%] right-[-5%] h-0.5 bg-orange-500/25 transform -translate-y-1/2 pointer-events-none">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-orange-500/50"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-orange-500/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="font-serif text-8xl text-orange-200 leading-none mb-4 italic">"</div>
          <blockquote className="font-serif text-3xl md:text-5xl font-medium italic leading-snug text-gray-900">
            Cada ponto conta.
          </blockquote>
          <p className="mt-6 text-sm tracking-widest uppercase text-gray-500 font-medium">
            — Nossa filosofia de trabalho
          </p>
        </div>
      </div>
    </section>
  );
};

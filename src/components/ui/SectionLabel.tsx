import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ children }) => {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-accent mb-4">
      <span className="w-6 h-px bg-accent inline-block"></span>
      {children}
      <span className="w-6 h-px bg-accent inline-block"></span>
    </span>
  );
};

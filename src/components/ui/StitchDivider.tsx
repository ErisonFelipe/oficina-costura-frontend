import React from 'react';

interface StitchDividerProps {
  variant?: 'dots' | 'zigzag' | 'thread';
  className?: string;
}

export const StitchDivider: React.FC<StitchDividerProps> = ({
  variant = 'dots',
  className = '',
}) => {
  if (variant === 'zigzag') {
    return (
      <div className={`w-full flex justify-center py-12 ${className}`}>
        <svg width="200" height="20" viewBox="0 0 200 20" fill="none">
          <path
            d="M0 10 L20 2 L40 18 L60 2 L80 18 L100 2 L120 18 L140 2 L160 18 L180 2 L200 10"
            stroke="#C67B5C"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'thread') {
    return (
      <div className={`w-full flex justify-center py-12 ${className}`}>
        <svg width="300" height="30" viewBox="0 0 300 30" fill="none">
          <path
            d="M0 15 Q25 5 50 15 T100 15 T150 15 T200 15 T250 15 T300 15"
            stroke="#C67B5C"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="2 6"
            opacity="0.5"
            strokeLinecap="round"
          />
          <circle cx="150" cy="15" r="3" fill="#C67B5C" opacity="0.6" />
        </svg>
      </div>
    );
  }

  // default: dots
  return (
    <div className={`w-full flex justify-center py-12 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[#C67B5C]/40" />
        <span className="w-2 h-2 rounded-full bg-[#C67B5C]/60" />
        <span className="w-2 h-2 rounded-full bg-[#C67B5C]" />
        <span className="w-2 h-2 rounded-full bg-[#C67B5C]/60" />
        <span className="w-2 h-2 rounded-full bg-[#C67B5C]/40" />
      </div>
    </div>
  );
};

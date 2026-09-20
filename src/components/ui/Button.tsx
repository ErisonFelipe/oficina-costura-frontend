import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer border-none whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    // Terracota mais escuro → contraste aprovado (WCAG AA)
    primary:
      'bg-[#A85E42] text-white shadow-lg hover:bg-[#8E4C34] hover:translate-y-[-2px]',
    outline:
      'bg-transparent text-[#2C2825] border-2 border-[#D5CBC2] hover:border-[#C67B5C] hover:text-[#A85E42] hover:translate-y-[-2px]',
    secondary:
      'bg-white text-[#2C2825] border border-[#E8E0D8] shadow-sm hover:shadow-md hover:translate-y-[-2px]',
  }[variant];

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

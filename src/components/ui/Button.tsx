import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button'
}) => {
  const baseClasses = 'inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer border-none whitespace-nowrap';
  const variantClasses = {
    primary: 'bg-accent text-white shadow-lg hover:bg-accent-dark hover:translate-y-[-2px]',
    outline: 'bg-transparent text-text-primary border-2 border-gray-300 hover:border-accent hover:text-accent hover:translate-y-[-2px]',
    secondary: 'bg-white text-text-primary border border-gray-200 shadow-sm hover:shadow-md hover:translate-y-[-2px]'
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
    <button type={type} className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

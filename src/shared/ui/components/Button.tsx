import type { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-linear-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 active:from-purple-700 active:to-violet-700 text-white shadow-lg shadow-purple-600/40 hover:shadow-xl hover:scale-105',
  secondary:
    'bg-slate-900/50 backdrop-blur-sm border-2 border-purple-600/40 text-purple-400 hover:border-purple-500 hover:text-purple-300 hover:bg-purple-600/20 active:bg-purple-600/30',
  danger:
    'bg-red-600 hover:bg-red-500 active:bg-red-700 text-white shadow-lg shadow-red-600/40 hover:shadow-xl hover:scale-105',
  ghost: 'bg-transparent hover:bg-purple-600/10 text-purple-400 hover:text-purple-300',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'py-1.5 px-2.5 text-xs',
  md: 'py-2 px-3 text-xs',
  lg: 'py-3 px-4 text-sm',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'rounded-lg font-bold transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed';
  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

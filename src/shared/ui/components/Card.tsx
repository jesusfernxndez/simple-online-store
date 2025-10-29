import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-slate-800/90 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl hover:shadow-purple-600/20 transition-all duration-300 overflow-hidden flex flex-col h-full border border-purple-600/30 hover:border-purple-500/60 group ${className}`}
    >
      {children}
    </div>
  );
}

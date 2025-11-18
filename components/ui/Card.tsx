import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm ${
        hover ? 'transition-all duration-200 hover:shadow-lg hover:border-primary-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

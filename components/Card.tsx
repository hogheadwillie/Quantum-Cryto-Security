
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg p-6 h-full transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10 ${className}`}>
      {children}
    </div>
  );
};

export default Card;

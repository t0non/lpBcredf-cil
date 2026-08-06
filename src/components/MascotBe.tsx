import React from 'react';
import Image from 'next/image';

interface MascotProps {
  pose: 'reception' | 'guide' | 'shield' | 'pointer' | 'default';
  className?: string;
}

export const MascotBe: React.FC<MascotProps> = ({ pose, className = "w-48 h-48" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} aria-label="Mascote Bê - Guia do Crédito da BCred Fácil">
      <img
        src="/mascotebcredfacil.png?v=2"
        alt="Mascote Bê"
        className="w-full h-full object-contain filter drop-shadow-lg"
      />
      
    </div>
  );
};


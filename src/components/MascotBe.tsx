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
      
      {/* Visual badges for specific poses to keep context relevant */}
      {pose === 'shield' && (
        <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-full shadow-lg flex items-center justify-center animate-pulse border-2 border-white">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      )}

      {pose === 'pointer' && (
        <div className="absolute -top-2 -right-2 bg-primary-orange text-white p-2 rounded-full shadow-lg flex items-center justify-center animate-bounce border-2 border-white">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
        </div>
      )}
    </div>
  );
};


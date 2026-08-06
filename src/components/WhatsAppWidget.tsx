'use client';

import React, { useState, useEffect } from 'react';
import { companyConfig } from '@/config/company';

export function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show widget after scrolling 300px (when the user passes the first section)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case they reload and are already scrolled down
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  const message = encodeURIComponent("Olá! Gostaria de fazer uma simulação de crédito.");
  const whatsappUrl = `https://wa.me/${companyConfig.whatsapp}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110 group cursor-pointer"
      aria-label="Fale conosco no WhatsApp"
      id="whatsapp-floating-widget"
    >
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-primary-navy text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gray-100">
        Fale Conosco
      </span>
      
      {/* WhatsApp Image */}
      <img
        src="/widget_whatsapp.png"
        alt="WhatsApp"
        className="w-16 h-16 object-contain drop-shadow-lg"
      />
    </a>
  );
}

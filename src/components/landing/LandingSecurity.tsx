import React from 'react';
import { MascotBe } from '../MascotBe';

interface LandingSecurityProps {
  title?: string;
  items: string[];
}

export const LandingSecurity: React.FC<LandingSecurityProps> = ({
  title = "Rapidez no atendimento, cuidado em cada etapa.",
  items
}) => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-navy rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center gap-8 border border-primary-navy/80">
          
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary-blue/30 blur-3xl opacity-50"></div>
          
          <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 relative z-10 hidden sm:block">
            <MascotBe pose="shield" className="w-full h-full drop-shadow-2xl" />
          </div>

          <div className="relative z-10 flex-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
              {title}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <span className="text-sm text-gray-200 font-medium font-sans">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl inline-block mt-2">
              <p className="text-xs text-white font-sans font-medium flex items-center">
                <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                A BCred Fácil orienta você sem cobrança antecipada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

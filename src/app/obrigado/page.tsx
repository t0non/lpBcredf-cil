'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { companyConfig } from '@/config/company';
import { MascotBe } from '@/components/MascotBe';

function ObrigadoContent() {
  const searchParams = useSearchParams();
  const nome = searchParams.get('nome') || '';
  const cidade = searchParams.get('cidade') || '';
  const perfilRaw = searchParams.get('perfil') || '';
  
  let perfil = perfilRaw;
  if (perfilRaw === 'aposentado') perfil = 'Aposentado do INSS';
  if (perfilRaw === 'pensionista') perfil = 'Pensionista do INSS';
  if (perfilRaw === 'clt') perfil = 'Trabalhador CLT';

  // Build the pre-filled WhatsApp message
  const baseMessage = `Olá, vim pelo site da BCred Fácil.\nMeu nome é: ${nome || '[Nome]'}\nMinha cidade é: ${cidade || '[Cidade]'}\nMeu perfil é: ${perfil || '[Perfil]'}\nGostaria de entender as opções disponíveis.`;
  const whatsappUrl = `https://wa.me/${companyConfig.whatsapp}?text=${encodeURIComponent(baseMessage)}`;

  return (
    <div className="py-16 sm:py-24 bg-gray-50 font-sans text-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex flex-col items-center">
        
        {/* Success mascot icon */}
        <MascotBe pose="pointer" className="w-48 h-48" />

        <div className="space-y-3">
          <span className="inline-block px-3 py-1 rounded bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider">
            Simulação Recebida com Sucesso
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-primary-navy">
            Obrigado pelo contato{nome ? `, ${nome.split(' ')[0]}` : ''}!
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
            Nossos consultores já receberam suas informações de simulação e entrarão em contato no melhor horário.
          </p>
        </div>

        {/* Action WhatsApp card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md w-full space-y-4">
          <h3 className="font-display font-bold text-sm text-primary-navy">
            Quer agilizar seu atendimento?
          </h3>
          <p className="text-xs text-gray-500">
            Clique no botão abaixo para enviar os dados da sua simulação diretamente para um consultor pelo nosso WhatsApp oficial.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-6 py-4 text-white bg-primary-orange hover:bg-secondary-orange font-display font-bold text-base rounded-xl transition-colors shadow-md"
          >
            Acelerar Simulação no WhatsApp
          </a>
        </div>

        <p className="text-xs text-gray-400">
          Você receberá uma mensagem apenas de nossos canais oficiais devidamente identificados.
        </p>

      </div>
    </div>
  );
}

export default function Obrigado() {
  return (
    <Suspense fallback={
      <div className="py-24 text-center text-sm text-gray-500 font-sans">
        Carregando informações da simulação...
      </div>
    }>
      <ObrigadoContent />
    </Suspense>
  );
}

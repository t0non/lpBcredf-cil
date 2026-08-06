'use client';

import React, { useState } from 'react';
import { companyConfig } from '@/config/company';
import { MascotBe } from '@/components/MascotBe';
import { LeadForm } from '@/components/LeadForm';
import { FinancialConditions } from '@/components/FinancialConditions';

export default function SimuleClt() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqLP = [
    {
      q: "Preciso de autorização da minha empresa?",
      a: "Para a antecipação do Saque-Aniversário do FGTS, não é necessária nenhuma autorização ou convênio da sua empresa. O processo é 100% pessoal e digital."
    },
    {
      q: "Posso fazer mesmo estando negativado?",
      a: "Sim. Como a garantia do empréstimo é o próprio saldo do FGTS já existente, a aprovação é facilitada mesmo para trabalhadores com restrições de crédito (SPC/Serasa)."
    },
    {
      q: "Como é feito o desconto da antecipação?",
      a: "O débito é realizado anualmente, uma vez por ano, direto do saldo do seu fundo de garantia. Você não recebe boletos mensais e não tem descontos em sua conta corrente."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-12">
      {/* Standalone Simple Header */}
      <header className="bg-primary-navy py-4 border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-8 h-8 rounded bg-primary-orange flex items-center justify-center text-white font-black text-xl mr-2">
              B
            </span>
            <span className="font-display font-extrabold text-lg sm:text-xl text-white">
              BCred<span className="text-primary-orange">Fácil</span>
            </span>
          </div>
          <span className="text-xs text-gray-300 bg-white/10 px-3 py-1 rounded">
            🔒 Canal Oficial de Atendimento
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Copywriting */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-orange/10 text-primary-orange border border-primary-orange/20">
              💼 Para Trabalhadores com Carteira Assinada (CLT)
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-primary-navy leading-tight">
              Crédito do Trabalhador para quem tem carteira assinada.
            </h1>
            <p className="text-base text-gray-600">
              Entenda as opções disponíveis e fale com um consultor da BCred Fácil em <span className="font-semibold text-primary-orange">{companyConfig.city}/{companyConfig.state}</span>. Realize sua simulação sem compromisso.
            </p>
            
            {/* Value bullets */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <span className="text-primary-orange font-bold text-lg">✓</span>
                <div>
                  <strong className="text-primary-navy text-sm block">Sem Desconto Mensal de Salário</strong>
                  <span className="text-xs text-gray-500">Na modalidade FGTS, o desconto ocorre anualmente direto do saldo acumulado do fundo.</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary-orange font-bold text-lg">✓</span>
                <div>
                  <strong className="text-primary-navy text-sm block">Aprovação Facilitada</strong>
                  <span className="text-xs text-gray-500">Possibilidade de liberação rápida mesmo para negativados sob análise de garantia.</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary-orange font-bold text-lg">✓</span>
                <div>
                  <strong className="text-primary-navy text-sm block">Orientação Humanizada</strong>
                  <span className="text-xs text-gray-500">Nossos analistas explicam taxas e condições para você decidir com segurança.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6">
            <LeadForm defaultProfile="clt" sourcePage="lp-clt" ctaText="Consultar Possibilidades" />
          </div>

        </div>

        {/* How it works section */}
        <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-12">
          <h2 className="text-xl font-display font-extrabold text-primary-navy text-center mb-8">
            Como funciona a simulação?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-8 h-8 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold font-display mx-auto sm:mx-0">1</div>
              <h4 className="font-display font-bold text-primary-navy">Preencha seus Dados</h4>
              <p className="text-xs">Insira seu contato e confirme se trabalha sob regime CLT.</p>
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-8 h-8 rounded-full bg-primary-orange text-white flex items-center justify-center font-bold font-display mx-auto sm:mx-0">2</div>
              <h4 className="font-display font-bold text-primary-navy">Análise do Saldo</h4>
              <p className="text-xs">Orientamos você a autorizar a consulta do saldo FGTS diretamente no aplicativo oficial.</p>
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-8 h-8 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold font-display mx-auto sm:mx-0">3</div>
              <h4 className="font-display font-bold text-primary-navy">Proposta de Crédito</h4>
              <p className="text-xs">Apresentamos taxas e valores para você aprovar e receber o dinheiro de forma rápida.</p>
            </div>
          </div>
        </section>

        {/* Security Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12 flex flex-col md:flex-row items-center gap-6">
          <MascotBe pose="shield" className="w-36 h-36 flex-shrink-0" />
          <div className="space-y-3">
            <h3 className="font-display font-extrabold text-lg text-primary-navy">
              Compromisso com a sua Segurança
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed font-sans">
              Segurança é fundamental. A BCred Fácil <strong>NUNCA</strong> solicita suas senhas do aplicativo do FGTS, Gov.br ou cartões bancários. A liberação de crédito é feita por canais autorizados sem nenhuma cobrança antecipada.
            </p>
          </div>
        </div>

        {/* Financial Rules */}
        <div className="mb-12">
          <FinancialConditions />
        </div>

        {/* Simplified FAQ section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-xl font-display font-extrabold text-primary-navy text-center mb-6">Dúvidas Comuns</h3>
          <div className="space-y-4">
            {faqLP.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-150 overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 text-left font-display font-bold text-sm text-primary-navy flex justify-between items-center focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-primary-orange">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <p className="px-5 pb-4 text-xs text-gray-600 border-t border-gray-100 pt-2">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Standalone Legal Footer */}
      <footer className="bg-primary-navy text-white pt-10 pb-6 border-t-2 border-primary-orange text-[11px] leading-relaxed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="font-semibold text-gray-300">Aviso Legal e Regulatório:</p>
          <p>
            A {companyConfig.name} (Razão Social: {companyConfig.razaoSocial}, CNPJ: {companyConfig.cnpj}, endereço: {companyConfig.address}) atua como {companyConfig.model} de correspondente bancário no país nos termos da Resolução CMN nº 4.935.
          </p>
          <p>
            As operações de crédito simuladas estão sujeitas a análise cadastral, saldo disponível e aprovação por parte da instituição financeira parceira responsável. Consulte sempre o Custo Efetivo Total (CET) antes de contratar.
          </p>
          <div className="border-t border-white/10 pt-4 flex flex-wrap justify-between text-gray-400">
            <span>© {new Date().getFullYear()} {companyConfig.name}. Todos os direitos reservados.</span>
            <div className="space-x-3">
              <a href="/politica-de-privacidade" target="_blank" className="hover:text-white underline">Privacidade</a>
              <a href="/politica-de-cookies" target="_blank" className="hover:text-white underline">Cookies</a>
              <a href="/termos-de-uso" target="_blank" className="hover:text-white underline">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

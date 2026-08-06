'use client';

import React, { useState } from 'react';
import { companyConfig } from '@/config/company';
import { MascotBe } from '@/components/MascotBe';
import { LeadForm } from '@/components/LeadForm';
import { FinancialConditions } from '@/components/FinancialConditions';

export default function CreditoDoTrabalhadorClt() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqCLT = [
    {
      q: "O que é o Crédito do Trabalhador?",
      a: "É a modalidade de crédito destinada a profissionais que trabalham sob o regime CLT (carteira assinada). Ela engloba tanto o empréstimo consignado privado (com desconto em folha, dependendo de convênio da empresa) quanto as opções de antecipação do Saque-Aniversário do FGTS."
    },
    {
      q: "Como funciona a antecipação do Saque-Aniversário do FGTS?",
      a: "Caso você tenha saldo na sua conta do FGTS (ativa ou inativa) e tenha optado pela modalidade de Saque-Aniversário no aplicativo do FGTS, você pode antecipar os valores das parcelas anuais de direito. O pagamento é feito anualmente por desconto direto do saldo do seu FGTS, sem comprometer a sua renda mensal."
    },
    {
      q: "A empresa onde trabalho precisa ter convênio com a BCred Fácil?",
      a: "Se a opção escolhida for a antecipação do Saque-Aniversário do FGTS, NÃO é necessário nenhum tipo de convênio ou autorização da empresa onde você trabalha. O processo é independente e 100% digital."
    },
    {
      q: "Quem está negativado pode solicitar o crédito?",
      a: "Sim, dependendo da modalidade. Na antecipação do FGTS, como a garantia é o próprio saldo do Fundo de Garantia, os bancos parceiros costumam aprovar a operação mesmo que o trabalhador tenha restrições nos órgãos de proteção ao crédito (SPC/Serasa). A operação está sujeita à análise do parceiro."
    },
    {
      q: "O que acontece se eu for demitido da empresa?",
      a: "Na modalidade de antecipação do FGTS, as parcelas já ficam bloqueadas e são pagas anualmente à instituição financeira direto pelo saldo do fundo, sem gerar parcelas mensais para você pagar após o desligamento."
    }
  ];

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 font-sans">
          <a href="/" className="hover:text-primary-orange">Início</a> &gt; <span className="text-primary-navy font-semibold">Crédito do Trabalhador CLT</span>
        </nav>

        {/* Hero Section Page */}
        <div className="bg-primary-navy rounded-3xl text-white p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-blue/30 rounded-full filter blur-2xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded bg-white/10 text-primary-orange text-xs font-bold uppercase tracking-wider">
                Profissionais CLT / Carteira Assinada
              </span>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight tp1-desk--headline1">
                Crédito do Trabalhador CLT
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-xl font-sans tp1--display">
                Possibilidades de crédito estruturado para quem trabalha com registro em carteira e deseja taxas competitivas em <span className="text-primary-orange font-semibold">{companyConfig.city}/{companyConfig.state}</span>.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-300 font-sans">
                <span>✔ Independência de convênio</span>
                <span>✔ Opções com FGTS</span>
                <span>✔ Sem burocracia</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <MascotBe pose="reception" className="w-48 h-48" />
            </div>

          </div>
        </div>

        {/* Informative Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 font-sans">
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150 space-y-3">
            <div className="w-10 h-10 rounded bg-primary-blue/10 flex items-center justify-center text-primary-blue font-bold">1</div>
            <h3 className="font-display font-bold text-lg text-primary-navy">Como Funciona</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Consulte se há saldo em suas contas ativas ou inativas do FGTS e utilize essa garantia para simular taxas de juros reduzidas e prazos sob medida.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150 space-y-3">
            <div className="w-10 h-10 rounded bg-primary-orange/10 flex items-center justify-center text-primary-orange font-bold">2</div>
            <h3 className="font-display font-bold text-lg text-primary-navy">Análise Descomplicada</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A garantia do saldo do FGTS diminui o risco de crédito, o que facilita a liberação cadastral mesmo para quem está negativado nos órgãos de proteção.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150 space-y-3">
            <div className="w-10 h-10 rounded bg-primary-blue/10 flex items-center justify-center text-primary-blue font-bold">3</div>
            <h3 className="font-display font-bold text-lg text-primary-navy">Sem Impacto Mensal</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Na antecipação do saque-aniversário, as parcelas são pagas anualmente pelo próprio fundo, ou seja, seu orçamento mensal não sofre descontos.
            </p>
          </div>

        </div>

        {/* Security Warning Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <MascotBe pose="shield" className="w-40 h-40" />
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-extrabold text-xl text-primary-navy">
              Seus Dados e Saldo em Segurança
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              Para consultar e formalizar sua simulação do FGTS, a BCred Fácil <strong>NUNCA</strong> solicitará suas senhas de acesso aos aplicativos bancários ou da Caixa. Você apenas autoriza as consultas oficiais pelo aplicativo oficial do FGTS de forma autônoma. Nunca transfira valores antecipadamente!
            </p>
          </div>
        </div>

        {/* Lead Form simulator block */}
        <div id="simulador" className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-primary-navy">
              Simulação de Crédito do Trabalhador
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Verifique as opções disponíveis para o seu perfil e saldo do FGTS sem burocracia.
            </p>
          </div>
          <LeadForm defaultProfile="clt" sourcePage="credito-do-trabalhador-clt" />
        </div>

        {/* Financial Rules */}
        <div className="mb-12">
          <FinancialConditions />
        </div>

        {/* FAQ CLT Accordion */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-display font-extrabold text-primary-navy text-center mb-8">
            Dúvidas Frequentes - Crédito CLT
          </h2>
          <div className="space-y-4">
            {faqCLT.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-150 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left font-display font-bold text-base text-primary-navy flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.q}</span>
                  <span className="text-primary-orange text-xl font-bold ml-2">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3 leading-relaxed font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { companyConfig } from '@/config/company';
import { MascotBe } from '@/components/MascotBe';
import { LeadForm } from '@/components/LeadForm';
import { FinancialConditions } from '@/components/FinancialConditions';

export default function SimuleInss() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqLP = [
    {
      q: "Como sei que este é um canal oficial da BCred Fácil?",
      a: `Nosso site é seguro (HTTPS) e nosso número oficial cadastrado é o ${companyConfig.whatsappFormatted}. Nós nunca pedimos pagamentos prévios.`
    },
    {
      q: "Quais os prazos para liberação do consignado?",
      a: "Após a formalização digital e o reconhecimento facial, a aprovação do INSS costuma ocorrer em poucos dias úteis, dependendo do sistema do banco parceiro e do INSS."
    },
    {
      q: "O que acontece se eu não tiver margem disponível?",
      a: "Nossos consultores analisarão a possibilidade de realizar a portabilidade de contratos antigos ou refinanciamento para tentar liberar margem ou reduzir parcelas atuais."
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
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-blue/10 text-primary-blue border border-primary-blue/20">
              👴 Exclusivo para Aposentados e Pensionistas
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-primary-navy leading-tight">
              Crédito consignado INSS com orientação clara do início ao fim.
            </h1>
            <p className="text-base text-gray-600">
              Seja atendido por especialistas humanos em <span className="font-semibold text-primary-orange">{companyConfig.city}/{companyConfig.state}</span>. Realize sua simulação sem compromisso de maneira totalmente segura e transparente.
            </p>
            
            {/* Value bullets */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <span className="text-primary-orange font-bold text-lg">✓</span>
                <div>
                  <strong className="text-primary-navy text-sm block">Orientação Sem Linguagem Difícil</strong>
                  <span className="text-xs text-gray-500">Explicamos todas as regras e o custo total da operação de forma compreensível.</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary-orange font-bold text-lg">✓</span>
                <div>
                  <strong className="text-primary-navy text-sm block">Segurança Total contra Fraudes</strong>
                  <span className="text-xs text-gray-500">Formalização digital por canais bancários oficiais com biometria no celular.</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary-orange font-bold text-lg">✓</span>
                <div>
                  <strong className="text-primary-navy text-sm block">Respeito e Ritmo Próprio</strong>
                  <span className="text-xs text-gray-500">Não fazemos pressão emocional. Você decide com calma no seu tempo.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6">
            <LeadForm defaultProfile="aposentado" sourcePage="lp-inss" ctaText="Consultar Minhas Condições" />
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
              <h4 className="font-display font-bold text-primary-navy">Preencha o Formulário</h4>
              <p className="text-xs">Insira seus dados básicos de perfil para iniciarmos a análise preliminar da margem.</p>
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-8 h-8 rounded-full bg-primary-orange text-white flex items-center justify-center font-bold font-display mx-auto sm:mx-0">2</div>
              <h4 className="font-display font-bold text-primary-navy">Contato por WhatsApp</h4>
              <p className="text-xs">Nossa equipe de consultoria entrará em contato para te orientar sobre as opções disponíveis.</p>
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-8 h-8 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold font-display mx-auto sm:mx-0">3</div>
              <h4 className="font-display font-bold text-primary-navy">Formalização Digital</h4>
              <p className="text-xs">Caso escolha seguir, os bancos parceiros geram links oficiais para formalização e biometria.</p>
            </div>
          </div>
        </section>

        {/* Guia de Desbloqueio e Anuência do Meu INSS (Banco BMG Reference) */}
        <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-12 space-y-8 font-sans">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display font-extrabold text-xl text-primary-navy">
              Como liberar e autorizar seu crédito no Meu INSS
            </h3>
            <p className="text-[11px] text-gray-500 mt-1">
              Siga as etapas oficiais exigidas pelo INSS para garantir uma contratação rápida e segura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* Box 1: Desbloqueio */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm text-primary-orange flex items-center">
                <span className="w-5 h-5 rounded-full bg-primary-orange/10 flex items-center justify-center text-[10px] mr-2">1</span>
                Desbloqueio do Benefício
              </h4>
              <ol className="list-decimal pl-5 space-y-1.5 text-[11px] text-gray-600">
                <li>Abra o aplicativo <strong>Meu INSS</strong> e faça login com seu CPF e senha <strong>Gov.br</strong>.</li>
                <li>Na barra de pesquisa, digite a palavra <strong>&quot;Desbloquear&quot;</strong>.</li>
                <li>Selecione <strong>&quot;Bloqueio/Desbloqueio de Benefício para Empréstimo&quot;</strong>.</li>
                <li>Siga os passos de segurança e realize a <strong>biometria facial</strong> para confirmar.</li>
              </ol>
            </div>

            {/* Box 2: Anuência */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm text-primary-blue flex items-center">
                <span className="w-5 h-5 rounded-full bg-primary-blue/10 flex items-center justify-center text-[10px] mr-2">2</span>
                Anuência (Confirmação)
              </h4>
              <ol className="list-decimal pl-5 space-y-1.5 text-[11px] text-gray-600">
                <li>No menu do <strong>Meu INSS</strong>, clique em <strong>&quot;Confirmar Empréstimo Consignado&quot;</strong>.</li>
                <li>Escolha o contrato simulado com o consultor.</li>
                <li><strong>Revise as condições</strong> (taxas, parcelas e prazos) com atenção.</li>
                <li>Valide sua biometria facial e finalize a liberação.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Security Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12 flex flex-col md:flex-row items-center gap-6">
          <MascotBe pose="shield" className="w-36 h-36 flex-shrink-0" />
          <div className="space-y-3">
            <h3 className="font-display font-extrabold text-lg text-primary-navy">
              Informações Importantes de Segurança
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed font-sans">
              Para a sua proteção jurídica e financeira: A BCred Fácil <strong>NUNCA</strong> solicita senhas da conta bancária, senha do Gov.br ou códigos enviados por SMS. Nós também nunca realizamos cobranças de qualquer tipo para liberar empréstimos.
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
            As operações de crédito simuladas estão sujeitas a análise cadastral, margem disponível e aprovação por parte da instituição financeira parceira responsável. Consulte sempre o Custo Efetivo Total (CET) antes de contratar.
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

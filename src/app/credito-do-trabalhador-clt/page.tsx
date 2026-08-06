import React from 'react';
import type { Metadata } from 'next';
import { companyConfig } from '@/config/company';
import { MascotBe } from '@/components/MascotBe';
import { LeadForm } from '@/components/LeadForm';
import { FinancialConditions } from '@/components/FinancialConditions';
import { FaqCLT } from '@/components/FaqCLT';

// NOTE: A separate page /antecipacao-saque-aniversario-fgts is planned for
// the Saque-Aniversario FGTS product. Do NOT publish until confirmed by client.
// This CLT page must NOT describe FGTS advance payment.

export const metadata: Metadata = {
  title: `Credito do Trabalhador CLT em ${companyConfig.city} | ${companyConfig.name}`,
  description: `Entenda o Credito do Trabalhador para carteira assinada e consulte possibilidades com atendimento rapido e orientacao clara em ${companyConfig.city}/${companyConfig.state}.`,
  alternates: { canonical: '/credito-do-trabalhador-clt' },
};

export default function CreditoDoTrabalhadorClt() {
  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <nav className="text-sm text-gray-500 mb-6 font-sans">
          <a href="/" className="hover:text-primary-orange">Inicio</a> &gt; <span className="text-primary-navy font-semibold">Credito do Trabalhador CLT</span>
        </nav>

        <div className="bg-primary-navy rounded-3xl text-white p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-blue/30 rounded-full filter blur-2xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded bg-white/10 text-primary-orange text-xs font-bold uppercase tracking-wider">
                Profissionais CLT / Carteira Assinada
              </span>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight tp1-desk--headline1">
                Credito do Trabalhador CLT
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-xl font-sans tp1--display">
                Uma modalidade de credito destinada a trabalhadores com carteira assinada, com parcelas descontadas diretamente em folha de pagamento, em <span className="text-primary-orange font-semibold">{companyConfig.city}/{companyConfig.state}</span>.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-300 font-sans">
                <span>Desconto em folha</span>
                <span>Sujeito a analise</span>
                <span>Orientacao clara</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <MascotBe pose="reception" className="w-48 h-48" />
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800 font-sans">
          <strong>Importante:</strong> O Credito do Trabalhador e uma modalidade destinada a trabalhadores elegiveis, com parcelas descontadas em folha. A disponibilidade, as condicoes e a aprovacao dependem das regras vigentes e da instituicao financeira responsavel.
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 font-sans">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <div className="w-10 h-10 rounded bg-primary-blue/10 flex items-center justify-center text-primary-blue font-bold">1</div>
            <h3 className="font-display font-bold text-lg text-primary-navy">Para Quem e Destinado</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Trabalhadores com carteira assinada (regime CLT) que sejam elegiveis conforme as regras vigentes e as politicas de aceitacao da instituicao financeira responsavel.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <div className="w-10 h-10 rounded bg-primary-orange/10 flex items-center justify-center text-primary-orange font-bold">2</div>
            <h3 className="font-display font-bold text-lg text-primary-navy">Como Funciona o Desconto</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              As parcelas sao descontadas diretamente na folha de pagamento. Condicoes, prazos e taxas variam conforme perfil, margem disponivel e instituicao financeira responsavel.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <div className="w-10 h-10 rounded bg-primary-blue/10 flex items-center justify-center text-primary-blue font-bold">3</div>
            <h3 className="font-display font-bold text-lg text-primary-navy">O Papel da BCred Facil</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              A BCred Facil atua no atendimento, orientacao e encaminhamento da proposta. A analise, aprovacao e contratacao sao realizadas pela instituicao financeira responsavel.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <MascotBe pose="shield" className="w-40 h-40" />
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-extrabold text-xl text-primary-navy">Seus Dados com Seguranca</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              Para orientar sua solicitacao, a BCred Facil <strong>NUNCA</strong> solicitara suas senhas de acesso a aplicativos bancarios ou do Gov.br. Desconfie de solicitacoes de pagamento antecipado para liberacao de credito e confirme sempre os canais oficiais.
            </p>
          </div>
        </div>

        <div id="simulador" className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-primary-navy">
              Consulte suas Possibilidades
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Preencha o formulario e nossa equipe entrara em contato para orientar voce sobre as opcoes disponiveis para o seu perfil.
            </p>
          </div>
          <LeadForm defaultProfile="clt" sourcePage="credito-do-trabalhador-clt" ctaText="Consultar possibilidades para CLT" />
        </div>

        <div className="mb-12">
          <FinancialConditions />
        </div>

        <FaqCLT />

      </div>
    </div>
  );
}

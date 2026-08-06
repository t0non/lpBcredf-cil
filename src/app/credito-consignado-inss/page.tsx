import React from 'react';
import type { Metadata } from 'next';
import { companyConfig } from '@/config/company';
import { MascotBe } from '@/components/MascotBe';
import { LeadForm } from '@/components/LeadForm';
import { FinancialConditions } from '@/components/FinancialConditions';
import { FaqINSS } from '@/components/FaqINSS';

export const metadata: Metadata = {
  title: `Credito Consignado INSS em ${companyConfig.city} | ${companyConfig.name}`,
  description: `Consulte possibilidades de credito consignado para aposentados e pensionistas do INSS com orientacao clara e atendimento pelo WhatsApp em ${companyConfig.city}/${companyConfig.state}.`,
  alternates: { canonical: '/credito-consignado-inss' },
};

export default function CreditoConsignadoInss() {
  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <nav className="text-sm text-gray-500 mb-6 font-sans">
          <a href="/" className="hover:text-primary-orange">Inicio</a> &gt; <span className="text-primary-navy font-semibold">Credito Consignado INSS</span>
        </nav>

        <div className="bg-primary-navy rounded-3xl text-white p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-blue/30 rounded-full filter blur-2xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded bg-white/10 text-primary-orange text-xs font-bold uppercase tracking-wider">
                Aposentados e Pensionistas
              </span>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight tp1-desk--headline1">
                Credito Consignado INSS
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-xl font-sans tp1--display">
                Uma opcao de credito com parcelas descontadas diretamente do beneficio, sujeita a analise e condicoes da instituicao financeira responsavel, em <span className="text-primary-orange font-semibold">{companyConfig.city}/{companyConfig.state}</span>.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-300 font-sans">
                <span>Desconto direto no beneficio</span>
                <span>Sujeito a margem disponivel</span>
                <span>Orientacao clara</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <MascotBe pose="reception" className="w-48 h-48" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 font-sans">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <div className="w-10 h-10 rounded bg-primary-blue/10 flex items-center justify-center text-primary-blue font-bold">1</div>
            <h3 className="font-display font-bold text-lg text-primary-navy">Quem Pode Solicitar</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Aposentados e pensionistas do INSS com margem consignavel disponivel. A elegibilidade e as condicoes variam conforme o tipo de beneficio e a politica da instituicao financeira.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <div className="w-10 h-10 rounded bg-primary-orange/10 flex items-center justify-center text-primary-orange font-bold">2</div>
            <h3 className="font-display font-bold text-lg text-primary-navy">Como Funciona</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              As parcelas sao descontadas diretamente do beneficio mensal, respeitando a margem consignavel regulamentada. As taxas variam conforme a instituicao e o perfil do beneficiario.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-3">
            <div className="w-10 h-10 rounded bg-primary-blue/10 flex items-center justify-center text-primary-blue font-bold">3</div>
            <h3 className="font-display font-bold text-lg text-primary-navy">Uso Responsavel</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nossa equipe orienta voce a entender as condicoes antes de contratar, garantindo que o desconto mensal nao comprometa sua renda essencial.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-12 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <MascotBe pose="shield" className="w-40 h-40" />
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-extrabold text-xl text-primary-navy">
              Seguranca em Primeiro Lugar
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              Para a sua total seguranca: a BCred Facil <strong>NUNCA</strong> solicita senhas do Meu INSS, Gov.br ou cartoes bancarios. Todas as formalizacoes sao realizadas por links oficiais das proprias instituicoes financeiras. Desconfie de solicitacoes de pagamento antecipado e confirme sempre os canais oficiais.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-12 space-y-8 font-sans">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display font-extrabold text-2xl text-primary-navy">
              Passo a Passo: Como Autorizar seu Credito no Meu INSS
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              De acordo com as regras da Previdencia Social, voce mesmo realiza a liberacao de forma segura no aplicativo oficial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-4">
              <h4 className="font-display font-bold text-lg text-primary-orange flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary-orange/10 flex items-center justify-center text-xs mr-2">1</span>
                Como Desbloquear o Beneficio
              </h4>
              <ol className="list-decimal pl-5 space-y-2 text-xs text-gray-600">
                <li>Baixe o aplicativo oficial <strong>Meu INSS</strong> no celular ou acesse o site.</li>
                <li>Entre com seu CPF e senha da conta <strong>Gov.br</strong>.</li>
                <li>No campo de pesquisa, digite <strong>&quot;Desbloquear&quot;</strong>.</li>
                <li>Selecione <strong>&quot;Bloqueio/Desbloqueio de Beneficio para Emprestimo&quot;</strong>.</li>
                <li>Siga as instrucoes e conclua com a <strong>biometria facial</strong>.</li>
              </ol>
            </div>
            <div className="space-y-4">
              <h4 className="font-display font-bold text-lg text-primary-blue flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center text-xs mr-2">2</span>
                Como Confirmar o Emprestimo (Anuencia)
              </h4>
              <ol className="list-decimal pl-5 space-y-2 text-xs text-gray-600">
                <li>Apos falar com o consultor, acesse o <strong>Meu INSS</strong> com sua conta Gov.br.</li>
                <li>Procure a opcao <strong>&quot;Confirmar Emprestimo Consignado&quot;</strong>.</li>
                <li>Selecione o contrato da simulacao que deseja confirmar.</li>
                <li><strong>Revise todos os valores</strong>, taxas e prazos com atencao.</li>
                <li>Siga as orientacoes para validar sua identidade.</li>
              </ol>
            </div>
          </div>
        </div>

        <div id="simulador" className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-primary-navy">
              Consulte suas Possibilidades
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Preencha o formulario e nossa equipe entrara em contato para orientar voce sobre as opcoes disponiveis para o seu perfil e margem.
            </p>
          </div>
          <LeadForm defaultProfile="aposentado" sourcePage="credito-consignado-inss" />
        </div>

        <div className="mb-12">
          <FinancialConditions />
        </div>

        <FaqINSS />

      </div>
    </div>
  );
}

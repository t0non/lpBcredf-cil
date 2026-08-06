'use client';

import React, { useState } from 'react';
import { companyConfig } from '@/config/company';
import { MascotBe } from '@/components/MascotBe';
import { LeadForm } from '@/components/LeadForm';
import { FinancialConditions } from '@/components/FinancialConditions';

export default function CreditoConsignadoInss() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqINSS = [
    {
      q: "Quem pode solicitar o crédito consignado INSS?",
      a: "Aposentados e pensionistas permanentes do INSS que possuam margem consignável disponível no benefício. Benefícios temporários ou assistenciais (como LOAS/BPC) podem ter regras de restrição ou autorização dependendo da legislação vigente e da política de aceitação dos bancos parceiros."
    },
    {
      q: "O que é a margem consignável?",
      a: "É a porcentagem máxima do seu benefício mensal que pode ser comprometida com o pagamento das parcelas de empréstimo. Por padrão regulatório, essa margem costuma ser dividida entre empréstimos convencionais e cartões consignados de benefício."
    },
    {
      q: "Como posso consultar a minha margem disponível?",
      a: "A consulta pode ser feita diretamente pelo aplicativo ou site oficial do Meu INSS, emitindo o Extrato de Empréstimos Consignados. Esse documento ajuda nossos especialistas a simularem o valor exato disponível."
    },
    {
      q: "A contratação exige reconhecimento facial?",
      a: "Sim. A maioria dos bancos parceiros exige a validação por biometria facial através do celular do próprio cliente ou em sistema seguro. Essa é uma medida de proteção essencial para comprovar a identidade e evitar fraudes."
    },
    {
      q: "Posso solicitar portabilidade do meu consignado?",
      a: "Sim. Se você já tem empréstimos em outros bancos, a portabilidade permite transferir o contrato para outro parceiro com taxas mais favoráveis ou redução no valor das parcelas, gerando saldo de troco. A operação requer análise cadastral."
    }
  ];

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 font-sans">
          <a href="/" className="hover:text-primary-orange">Início</a> &gt; <span className="text-primary-navy font-semibold">Crédito Consignado INSS</span>
        </nav>

        {/* Hero Section Page */}
        <div className="bg-primary-navy rounded-3xl text-white p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-blue/30 rounded-full filter blur-2xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded bg-white/10 text-primary-orange text-xs font-bold uppercase tracking-wider">
                Aposentados e Pensionistas
              </span>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight tp1-desk--headline1">
                Crédito Consignado INSS
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-xl font-sans tp1--display">
                Uma solução financeira segura com parcelas descontadas diretamente do benefício e taxas regulamentadas em <span className="text-primary-orange font-semibold">{companyConfig.city}/{companyConfig.state}</span>.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-300 font-sans">
                <span>✔ Taxas reduzidas</span>
                <span>✔ Desconto em folha</span>
                <span>✔ Prazos flexíveis</span>
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
            <h3 className="font-display font-bold text-lg text-primary-navy">Quem Pode Solicitar</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Exclusivo para aposentados e pensionistas do INSS com margem disponível. Ideal para reorganizar despesas sem burocracia desnecessária.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150 space-y-3">
            <div className="w-10 h-10 rounded bg-primary-orange/10 flex items-center justify-center text-primary-orange font-bold">2</div>
            <h3 className="font-display font-bold text-lg text-primary-navy">Vantagens Principais</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Taxa de juros significativamente menor que cartões de crédito convencionais ou empréstimos pessoais sem garantia.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-150 space-y-3">
            <div className="w-10 h-10 rounded bg-primary-blue/10 flex items-center justify-center text-primary-blue font-bold">3</div>
            <h3 className="font-display font-bold text-lg text-primary-navy">Uso Responsável</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nossa equipe ajuda você a planejar a contratação para garantir que o desconto mensal não prejudique sua renda essencial.
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
              Segurança em Primeiro Lugar para sua Família
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-sans">
              Para a sua total segurança: a BCred Fácil <strong>NUNCA</strong> solicita senhas do Meu INSS, Gov.br ou cartões bancários. Todas as assinaturas são realizadas por meio de links de formalização digital providos diretamente pelos bancos parceiros autorizados. Desconfie de qualquer solicitação de pagamento antecipado!
            </p>
          </div>
        </div>

        {/* Guia de Desbloqueio e Anuência do Meu INSS (Banco BMG Reference) */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-12 space-y-8 font-sans">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display font-extrabold text-2xl text-primary-navy">
              Passo a Passo: Como Autorizar seu Crédito no Meu INSS
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              De acordo com as regras da Previdência Social, você mesmo realiza a liberação de forma segura no aplicativo oficial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Box 1: Desbloqueio */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-lg text-primary-orange flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary-orange/10 flex items-center justify-center text-xs mr-2">1</span>
                Como Desbloquear o Benefício
              </h4>
              <ol className="list-decimal pl-5 space-y-2 text-xs text-gray-600">
                <li>Baixe o aplicativo oficial <strong>Meu INSS</strong> no celular ou acesse o site.</li>
                <li>Entre com seu CPF e senha da conta <strong>Gov.br</strong>.</li>
                <li>No campo de pesquisa principal, digite a palavra <strong>&quot;Desbloquear&quot;</strong>.</li>
                <li>Selecione a opção <strong>&quot;Bloqueio/Desbloqueio de Benefício para Empréstimo&quot;</strong>.</li>
                <li>Siga as instruções indicadas na tela e conclua o processo com a <strong>biometria facial</strong>.</li>
              </ol>
            </div>

            {/* Box 2: Anuência */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-lg text-primary-blue flex items-center">
                <span className="w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center text-xs mr-2">2</span>
                Como Confirmar o Empréstimo (Anuência)
              </h4>
              <ol className="list-decimal pl-5 space-y-2 text-xs text-gray-600">
                <li>Após falar com o consultor, acesse o <strong>Meu INSS</strong> com sua conta Gov.br.</li>
                <li>Procure no menu a opção <strong>&quot;Confirmar Empréstimo Consignado&quot;</strong>.</li>
                <li>Selecione o contrato da simulação que você deseja confirmar.</li>
                <li><strong>Revise todos os valores</strong>, taxas e prazos propostos com total atenção.</li>
                <li>Siga as orientações para tirar a foto do seu rosto e validar sua identidade.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Lead Form simulator block */}
        <div id="simulador" className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-primary-navy">
              Simulação de Consignado INSS
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Consulte seu limite de margem e receba uma simulação personalizada sem custo.
            </p>
          </div>
          <LeadForm defaultProfile="aposentado" sourcePage="credito-consignado-inss" />
        </div>

        {/* Financial Rules */}
        <div className="mb-12">
          <FinancialConditions />
        </div>

        {/* FAQ INSS Accordion */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-display font-extrabold text-primary-navy text-center mb-8">
            Dúvidas Frequentes - Consignado INSS
          </h2>
          <div className="space-y-4">
            {faqINSS.map((faq, index) => (
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

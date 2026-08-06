'use client';

import React, { useState } from 'react';
import { companyConfig } from '@/config/company';

export default function Duvidas() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const sections = [
    {
      title: "Perguntas Gerais",
      items: [
        {
          id: "g1",
          q: "A BCred Fácil é um banco?",
          a: `Não, a ${companyConfig.name} não é uma instituição financeira. Atuamos como ${companyConfig.model} de crédito consignado e outras soluções de financiamento, intermediando o contato entre você e os bancos parceiros oficiais de forma transparente.`
        },
        {
          id: "g2",
          q: "A simulação garante a aprovação?",
          a: "Não. A simulação apresenta condições estimadas com base nas informações iniciais. A contratação efetiva e a liberação do crédito estão sujeitas à análise da instituição financeira parceira, margem disponível e verificação de documentos."
        },
        {
          id: "g3",
          q: "Existe algum pagamento antecipado?",
          a: "Absolutamente NÃO! Nós nunca solicitamos depósitos, transferências, taxas de aval ou pagamentos antecipados para liberação de empréstimos. Qualquer cobrança desse tipo é golpe. Nosso serviço de assessoria e simulação é 100% gratuito."
        },
        {
          id: "g4",
          q: "Como confirmo que estou falando com o canal oficial?",
          a: `Nosso WhatsApp oficial de atendimento é o ${companyConfig.whatsappFormatted} e o nosso site oficial é o único endereço autorizado para simulações online. Desconfie de contatos por números diferentes.`
        },
        {
          id: "g5",
          q: "Meus dados ficam protegidos?",
          a: "Sim. Seus dados são coletados exclusivamente para a análise de crédito junto aos parceiros autorizados e tratados com total confidencialidade, seguindo rigorosamente a Lei Geral de Proteção de Dados (LGPD)."
        },
        {
          id: "g6",
          q: "Quais documentos podem ser necessários?",
          a: "Geralmente, são exigidos: documento de identidade oficial com foto (RG ou CNH), comprovante de residência atualizado e comprovante de rendimentos (extrato do benefício INSS ou holerite)."
        },
        {
          id: "g7",
          q: "Como são definidas as taxas e parcelas?",
          a: "Elas são definidas de acordo com as regras estabelecidas pelos bancos parceiros, baseando-se no valor solicitado, margem livre, prazo contratual escolhido e teto regulatório das modalidades."
        },
        {
          id: "g8",
          q: "Posso desistir depois de receber a proposta?",
          a: "Sim. A simulação e a análise de crédito não criam nenhuma obrigação contratual. Você tem total autonomia para aceitar ou recusar as condições antes da formalização e assinatura digital do contrato."
        }
      ]
    },
    {
      title: "Perguntas INSS",
      items: [
        {
          id: "i1",
          q: "Quem pode solicitar crédito consignado INSS?",
          a: "Aposentados e pensionistas permanentes do INSS que possuam margem consignável disponível no benefício. Benefícios temporários ou assistenciais (como LOAS/BPC) podem ter regras de restrição ou autorização dependendo da legislação vigente e da política de aceitação dos bancos parceiros."
        },
        {
          id: "i2",
          q: "O que é margem consignável?",
          a: "É a porcentagem máxima do seu benefício mensal que pode ser comprometida com o pagamento das parcelas de empréstimo. Por padrão regulatório, essa margem costuma ser dividida entre empréstimos convencionais e cartões consignados de benefício."
        },
        {
          id: "i3",
          q: "Como consultar contratos no Meu INSS?",
          a: "Você pode acessar o Meu INSS e emitir o Extrato de Empréstimos Consignados para conferir os contratos ativos, parcelas e a margem disponível."
        },
        {
          id: "i4",
          q: "A solicitação precisa de reconhecimento facial?",
          a: "Sim. A maioria dos bancos parceiros exige a validação por biometria facial através do celular do próprio cliente ou em sistema seguro. Essa é uma medida de proteção essencial para comprovar a identidade e evitar fraudes."
        },
        {
          id: "i5",
          q: "Posso solicitar portabilidade?",
          a: "Sim. Se você já tem empréstimos em outros bancos, a portabilidade permite transferir o contrato para outro parceiro com taxas mais favoráveis ou redução no valor das parcelas, gerando saldo de troco."
        }
      ]
    },
    {
      title: "Perguntas CLT",
      items: [
        {
          id: "c1",
          q: "O que é o Crédito do Trabalhador?",
          a: "É a modalidade de crédito destinada a profissionais que trabalham sob o regime CLT (carteira assinada). Ela engloba tanto o empréstimo consignado privado (com desconto em folha, dependendo de convênio da empresa) quanto as opções de antecipação do Saque-Aniversário do FGTS."
        },
        {
          id: "c2",
          q: "Como funciona a antecipação do Saque-Aniversário do FGTS?",
          a: "Caso você tenha saldo na sua conta do FGTS (ativa ou inativa) e tenha optado pela modalidade de Saque-Aniversário no aplicativo do FGTS, você pode antecipar os valores das parcelas anuais de direito. O pagamento é feito anualmente por desconto direto do saldo do seu FGTS."
        },
        {
          id: "c3",
          q: "A empresa onde trabalho precisa autorizar?",
          a: "Se a opção escolhida for a antecipação do Saque-Aniversário do FGTS, NÃO é necessário nenhum tipo de convênio ou autorização da empresa onde você trabalha."
        },
        {
          id: "c4",
          q: "O que acontece se houver desligamento?",
          a: "Na modalidade de antecipação do FGTS, as parcelas já ficam bloqueadas e são pagas anualmente à instituição financeira direto pelo saldo do fundo, sem gerar parcelas mensais para você pagar após o desligamento."
        },
        {
          id: "c5",
          q: "Quem está negativado pode solicitar?",
          a: "Sim, dependendo da modalidade. Na antecipação do FGTS, como a garantia é o próprio saldo do Fundo de Garantia, os bancos parceiros costumam aprovar a operação mesmo que o trabalhador tenha restrições nos órgãos de proteção ao crédito."
        }
      ]
    }
  ];

  return (
    <div className="py-10 bg-gray-50 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-primary-orange">Início</a> &gt; <span className="text-primary-navy font-semibold">Dúvidas Frequentes</span>
        </nav>

        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-primary-navy">
            Central de Dúvidas
          </h1>
          <p className="text-gray-600 mt-2 text-base">
            Esclarecemos suas dúvidas sobre crédito e segurança.
          </p>
        </div>

        {/* Grouped Accordions */}
        <div className="space-y-12">
          {sections.map((section, sIndex) => (
            <div key={sIndex} className="space-y-4">
              <h2 className="text-xl font-display font-extrabold text-primary-navy border-b pb-2">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-white rounded-xl border border-gray-150 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggle(item.id)}
                      className="w-full px-6 py-4 text-left font-display font-bold text-base text-primary-navy flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                      aria-expanded={openIndex === item.id}
                    >
                      <span>{item.q}</span>
                      <span className="text-primary-orange text-xl font-bold ml-2">
                        {openIndex === item.id ? '−' : '+'}
                      </span>
                    </button>
                    
                    {openIndex === item.id && (
                      <div className="px-6 pb-4 text-sm text-gray-600 border-t border-gray-100 pt-3 leading-relaxed font-sans">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

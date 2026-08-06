import React from 'react';
import { companyConfig } from '@/config/company';

export const FinancialConditions: React.FC = () => {
  const { financialConditions } = companyConfig;

  if (!financialConditions.hasValidatedData) {
    return (
      <div className="bg-gray-50 border-l-4 border-primary-orange p-5 rounded-r-xl max-w-3xl mx-auto shadow-sm">
        <h4 className="font-display font-bold text-base text-primary-navy mb-2 flex items-center">
          <svg className="h-5 w-5 text-primary-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Condições da Operação
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed font-sans">
          {financialConditions.disclaimer}
        </p>
        {/* Technical compliance notice visible in development mode */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
            ⚠️ <strong>AVISO TÉCNICO DE COMPLIANCE:</strong> As condições financeiras reais não foram configuradas. O site está exibindo a mensagem padrão regulatória para evitar multas. Para ativar a exibição de taxas e simulador real, atualize os dados em <code>src/config/company.ts</code> definindo <code>hasValidatedData: true</code> com valores comprovados pelo departamento de conformidade jurídica.
          </div>
        )}
      </div>
    );
  }

  // Render when real verified details are available
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-2xl max-w-3xl mx-auto shadow-md">
      <h4 className="font-display font-extrabold text-lg text-primary-navy mb-4 border-b pb-2">
        Condições Gerais da Operação
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-700 font-sans">
        <div>
          <span className="block font-semibold text-primary-navy">Prazos de Pagamento:</span>
          <span>De {financialConditions.minMonths} a {financialConditions.maxMonths} meses</span>
        </div>
        <div>
          <span className="block font-semibold text-primary-navy">Taxa de Juros:</span>
          <span>A partir de {financialConditions.minInterestRate} a {financialConditions.maxInterestRate}</span>
        </div>
        <div>
          <span className="block font-semibold text-primary-navy">CET (Custo Efetivo Total):</span>
          <span>A partir de {financialConditions.cetMin} a {financialConditions.cetMax}</span>
        </div>
        <div>
          <span className="block font-semibold text-primary-navy">Impostos (IOF):</span>
          <span>{financialConditions.iof}</span>
        </div>
        <div>
          <span className="block font-semibold text-primary-navy">Tarifas Adicionais:</span>
          <span>{financialConditions.tarifas}</span>
        </div>
      </div>

      {financialConditions.representativeExample && (
        <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <h5 className="font-semibold text-sm text-primary-navy mb-2">Exemplo Representativo do Custo Total:</h5>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-gray-600">
            <div>
              <span className="block font-semibold">Valor Solicitado:</span>
              <span>R$ {financialConditions.representativeExample.valorSolicitado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            <div>
              <span className="block font-semibold">Número de Parcelas:</span>
              <span>{financialConditions.representativeExample.parcelas}x</span>
            </div>
            <div>
              <span className="block font-semibold">Parcela Estimada:</span>
              <span>R$ {financialConditions.representativeExample.valorParcela.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            <div>
              <span className="block font-semibold">Valor Total Pago:</span>
              <span>R$ {financialConditions.representativeExample.valorTotalPago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 mt-3">
            *Exemplo representativo fornecido pela instituição {financialConditions.representativeExample.instituicaoResponsavel}. As condições reais variam segundo a análise cadastral e a margem disponível.
          </p>
        </div>
      )}
    </div>
  );
};

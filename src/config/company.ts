// Central configuration file for BCred Fácil
// Edit this file to update company data across all pages and components.

export interface CompanyConfig {
  name: string;
  razaoSocial: string;
  cnpj: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  whatsapp: string; // Used for API links (e.g. 5531999999999)
  whatsappFormatted: string; // Used for display
  email: string;
  workingHours: string;
  serviceArea: string;
  instagram: string;
  model: 'Correspondente Bancário' | 'Promotora' | 'Intermediadora' | 'Geradora de Leads';
  instituicaoContratante?: string;
  registroRegulatorio?: string;
  partners: string[];
  tracking: {
    gtmId: string;
    gaId: string;
    pixelId: string;
  };
  financialConditions: {
    hasValidatedData: boolean; // Must remain false until official rates are verified
    minMonths?: number;
    maxMonths?: number;
    minInterestRate?: string;
    maxInterestRate?: string;
    cetMin?: string;
    cetMax?: string;
    iof?: string;
    tarifas?: string;
    representativeExample?: {
      valorSolicitado: number;
      parcelas: number;
      valorParcela: number;
      valorTotalPago: number;
      instituicaoResponsavel: string;
    };
    disclaimer: string;
  };
}

export const companyConfig: CompanyConfig = {
  name: "BCred Fácil",
  razaoSocial: "BCred Financeiro Ltda", // Updated based on Gmail address
  cnpj: "[CNPJ PENDENTE]", 
  address: "R. Gov. Portela, 1200 - Centro, Nova Iguaçu - RJ, 26221-030", 
  city: "Nova Iguaçu", 
  state: "RJ", 
  zipCode: "26221-030",
  phone: "[TELEFONE PENDENTE]",
  whatsapp: "5500999999999", 
  whatsappFormatted: "[WHATSAPP PENDENTE]",
  email: "bcred@bcred.net",
  workingHours: "Segunda a Sexta, das 8h às 18h",
  serviceArea: "Nova Iguaçu e região",
  instagram: "https://instagram.com/bcredfacil",
  model: "Promotora", // Choose: 'Correspondente Bancário' | 'Promotora' | 'Intermediadora' | 'Geradora de Leads'
  instituicaoContratante: "[INSTITUIÇÃO RESPONSÁVEL PENDENTE]",
  registroRegulatorio: "[REGISTRO OU IDENTIFICAÇÃO PENDENTE]",
  partners: [
    "Instituições Financeiras Parceiras Autorizadas"
  ],
  tracking: {
    gtmId: "", // Fill with GTM-XXXXXXX
    gaId: "",  // Fill with G-XXXXXXXXXX
    pixelId: "" // Fill with Meta Pixel ID
  },
  financialConditions: {
    hasValidatedData: false, // Standard safety flag
    disclaimer: "Consulte as condições disponíveis para o seu perfil. Valores, taxas, prazos e parcelas variam conforme análise, margem e instituição responsável."
  }
};

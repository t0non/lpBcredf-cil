import type { Metadata } from 'next';
import { DuvidasContent } from '@/components/DuvidasContent';

export const metadata: Metadata = {
  title: 'Dúvidas sobre Crédito Consignado',
  description: 'Encontre respostas sobre crédito consignado INSS, Crédito do Trabalhador, portabilidade, segurança e atendimento.',
  alternates: { canonical: '/duvidas' },
  openGraph: {
    title: 'Dúvidas sobre Crédito Consignado | BCred Fácil',
    description: 'Encontre respostas sobre crédito consignado INSS, Crédito do Trabalhador, portabilidade, segurança e atendimento.',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function DuvidasPage() {
  return <DuvidasContent />;
}

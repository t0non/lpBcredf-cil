'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { companyConfig } from '@/config/company';

interface LeadFormProps {
  defaultProfile?: 'aposentado' | 'pensionista' | 'clt' | 'portabilidade' | 'fgts';
  ctaText?: string;
  sourcePage?: string;
}

// Subcomponent wrapped in Suspense to prevent build/prerender bailout errors
const UtmTracker: React.FC<{
  sourcePage: string;
  onTrack: (data: Record<string, string>) => void;
}> = ({ sourcePage, onTrack }) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'];
    const captured: Record<string, string> = {};
    
    keys.forEach(key => {
      const val = searchParams.get(key);
      if (val) {
        captured[key] = val;
        sessionStorage.setItem(key, val);
      } else {
        const stored = sessionStorage.getItem(key);
        if (stored) {
          captured[key] = stored;
        }
      }
    });

    if (typeof document !== 'undefined' && document.referrer) {
      captured['referrer'] = document.referrer;
    }
    captured['origin_page'] = sourcePage;
    onTrack(captured);
  }, [searchParams, sourcePage, onTrack]);

  return null;
};

export const LeadForm: React.FC<LeadFormProps> = ({ 
  defaultProfile, 
  ctaText = "Receber orientação pelo WhatsApp",
  sourcePage = "home"
}) => {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    cidade: '',
    perfil: defaultProfile || '',
    horario: 'qualquer',
    lgpdConsent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [utmData, setUtmData] = useState<Record<string, string>>({});

  // Memoize tracker callback to prevent infinite re-renders
  const handleTrack = React.useCallback((data: Record<string, string>) => {
    setUtmData(data);
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 11) value = value.slice(0, 11);
    
    let formatted = value;
    if (value.length > 2) {
      formatted = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 7) {
      formatted = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    }
    
    setFormData(prev => ({ ...prev, whatsapp: formatted }));
    if (errors.whatsapp) {
      setErrors(prev => ({ ...prev, whatsapp: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = "Por favor, insira seu nome completo.";
    
    const rawPhone = formData.whatsapp.replace(/\D/g, '');
    if (rawPhone.length < 10 || rawPhone.length > 11) {
      newErrors.whatsapp = "Por favor, insira um WhatsApp válido com DDD.";
    }
    
    if (!formData.cidade.trim()) newErrors.cidade = "Por favor, insira sua cidade.";
    if (!formData.perfil) newErrors.perfil = "Selecione o seu perfil de crédito.";
    if (!formData.lgpdConsent) newErrors.lgpdConsent = "Você precisa aceitar a Política de Privacidade para continuar.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);

    try {
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'submit_lead_form',
          profile: formData.perfil,
          cidade: formData.cidade,
          source_page: sourcePage,
          utm_source: utmData.utm_source || 'organic',
          utm_medium: utmData.utm_medium || 'none',
          utm_campaign: utmData.utm_campaign || 'none'
        });
        (window as any).dataLayer.push({
          event: 'generate_lead',
          lead_type: formData.perfil
        });
      }

      await new Promise(resolve => setTimeout(resolve, 800));

      const cleanPhone = formData.whatsapp.replace(/\D/g, '');
      const query = new URLSearchParams({
        nome: formData.nome,
        whatsapp: cleanPhone,
        cidade: formData.cidade,
        perfil: formData.perfil,
        horario: formData.horario,
        ...utmData
      });

      router.push(`/obrigado?${query.toString()}`);
    } catch (err) {
      console.error(err);
      setErrors({ form: "Ocorreu um erro ao processar sua solicitação. Tente novamente." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <Suspense fallback={null}>
        <UtmTracker sourcePage={sourcePage} onTrack={handleTrack} />
      </Suspense>

      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xl mx-auto space-y-6">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-primary-navy">
            Faça uma Simulação Segura
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Preencha e entraremos em contato sem compromisso.
          </p>
        </div>

        {errors.form && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {errors.form}
          </div>
        )}

        {/* Nome */}
        <div>
          <label htmlFor="nome" className="block text-sm font-semibold text-primary-navy mb-1">
            Nome Completo
          </label>
          <input
            type="text"
            id="nome"
            value={formData.nome}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, nome: e.target.value }));
              if (errors.nome) setErrors(prev => ({ ...prev, nome: '' }));
            }}
            placeholder="Ex: Maria da Silva"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-gray-900 bg-white placeholder-gray-400 text-base"
          />
          {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
        </div>

        {/* WhatsApp & Cidade */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-semibold text-primary-navy mb-1">
              WhatsApp (com DDD)
            </label>
            <input
              type="text"
              id="whatsapp"
              value={formData.whatsapp}
              onChange={handlePhoneChange}
              placeholder="Ex: (11) 99999-9999"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-gray-900 bg-white placeholder-gray-400 text-base"
            />
            {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
          </div>

          <div>
            <label htmlFor="cidade" className="block text-sm font-semibold text-primary-navy mb-1">
              Cidade
            </label>
            <input
              type="text"
              id="cidade"
              value={formData.cidade}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, cidade: e.target.value }));
                if (errors.cidade) setErrors(prev => ({ ...prev, cidade: '' }));
              }}
              placeholder="Ex: Belo Horizonte"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-gray-900 bg-white placeholder-gray-400 text-base"
            />
            {errors.cidade && <p className="text-red-500 text-xs mt-1">{errors.cidade}</p>}
          </div>
        </div>

        {/* Perfil & Horário */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="perfil" className="block text-sm font-semibold text-primary-navy mb-1">
              Seu Perfil
            </label>
            <select
              id="perfil"
              value={formData.perfil}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, perfil: e.target.value }));
                if (errors.perfil) setErrors(prev => ({ ...prev, perfil: '' }));
              }}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-gray-900 bg-white text-base"
            >
              <option value="">Selecione...</option>
              <option value="aposentado">Aposentado do INSS</option>
              <option value="pensionista">Pensionista do INSS</option>
              <option value="clt">Trabalhador com Carteira Assinada (CLT)</option>
              <option value="portabilidade">Portabilidade de Consignado</option>
              <option value="fgts">Antecipação do Saque-Aniversário FGTS</option>
            </select>
            {errors.perfil && <p className="text-red-500 text-xs mt-1">{errors.perfil}</p>}
          </div>

          <div>
            <label htmlFor="horario" className="block text-sm font-semibold text-primary-navy mb-1">
              Melhor Horário Para Contato
            </label>
            <select
              id="horario"
              value={formData.horario}
              onChange={(e) => setFormData(prev => ({ ...prev, horario: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-gray-900 bg-white text-base"
            >
              <option value="qualquer">Qualquer horário</option>
              <option value="manha">Manhã (08h às 12h)</option>
              <option value="tarde">Tarde (12h às 18h)</option>
            </select>
          </div>
        </div>

        {/* LGPD Consent Checkbox */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="lgpdConsent"
            checked={formData.lgpdConsent}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, lgpdConsent: e.target.checked }));
              if (errors.lgpdConsent) setErrors(prev => ({ ...prev, lgpdConsent: '' }));
            }}
            className="h-4 w-4 rounded border-gray-300 text-primary-orange focus:ring-primary-orange mt-1 mr-3 flex-shrink-0"
          />
          <label htmlFor="lgpdConsent" className="text-xs text-gray-500 leading-tight">
            Estou ciente de que meus dados serão tratados para fins de simulação e concordo com os termos descritos na <a href="/politica-de-privacidade" target="_blank" className="underline text-primary-blue hover:text-primary-orange font-semibold">Política de Privacidade</a>.
          </label>
        </div>
        {errors.lgpdConsent && <p className="text-red-500 text-xs mt-0">{errors.lgpdConsent}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 text-white font-display font-bold text-lg rounded-xl bg-primary-orange hover:bg-secondary-orange transition-all duration-200 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Verificando...</span>
            </>
          ) : (
            <span>{ctaText}</span>
          )}
        </button>

        <p className="text-center text-[10px] text-gray-400">
          Simulação sem compromisso. A solicitação está sujeita à análise.
        </p>
      </form>
    </div>
  );
};

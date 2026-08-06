import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bcredfacil.com.br';
  const routes = [
    '',
    '/credito-consignado-inss',
    '/credito-do-trabalhador-clt',
    '/portabilidade-consignado',
    '/sobre',
    '/seguranca',
    '/duvidas',
    '/contato',
    '/politica-de-privacidade',
    '/politica-de-cookies',
    '/termos-de-uso',
    '/simule/inss',
    '/simule/clt',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}

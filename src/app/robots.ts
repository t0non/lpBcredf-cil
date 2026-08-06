import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/obrigado'], // Hide thank you page from search index
    },
    sitemap: 'https://www.bcredfacil.com.br/sitemap.xml',
  };
}

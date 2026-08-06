import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { companyConfig } from "@/config/company";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${companyConfig.name} | Crédito Consignado INSS e Crédito CLT`,
    template: `%s | ${companyConfig.name}`
  },
  description: `Orientação transparente em crédito consignado para aposentados e pensionistas do INSS e Crédito do Trabalhador CLT em ${companyConfig.city}/${companyConfig.state}.`,
  metadataBase: new URL('https://www.bcredfacil.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${companyConfig.name} | Crédito Consignado e CLT`,
    description: `Orientação transparente em crédito consignado para aposentados e pensionistas do INSS e Crédito do Trabalhador CLT em ${companyConfig.city}/${companyConfig.state}.`,
    url: 'https://www.bcredfacil.com.br',
    siteName: companyConfig.name,
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": companyConfig.name,
    "legalName": companyConfig.razaoSocial,
    "taxID": companyConfig.cnpj,
    "url": "https://www.bcredfacil.com.br",
    "telephone": companyConfig.phone,
    "email": companyConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyConfig.address,
      "addressLocality": companyConfig.city,
      "addressRegion": companyConfig.state,
      "postalCode": companyConfig.zipCode,
      "addressCountry": "BR"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="pt-BR" className={`${poppins.variable} h-full scroll-smooth antialiased`}>
      <head>
        {/* Tracking Scripts placeholders */}
        {companyConfig.tracking.gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${companyConfig.tracking.gtmId}');`
            }}
          />
        )}
        {/* Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900 font-sans">
        {companyConfig.tracking.gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${companyConfig.tracking.gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Header />
        <main className="flex-grow pt-[64px] lg:pt-[76px]">
          {children}
        </main>
        <CookieBanner />
      </body>
    </html>
  );
}

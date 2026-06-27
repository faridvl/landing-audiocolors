import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://audiocolors.com";
const SITE_NAME = "AudioColors — Especialidades Audiológicas";
const DESCRIPTION =
  "Clínica de audiología en Costa Rica. Audiometría, impedanciometría, prótesis auditivas y tramitamos recetas de audífonos de la CCSS. Sedes en Pérez Zeledón, Río Claro, Ciudad Neily y Quepos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | AudioColors",
  },
  description: DESCRIPTION,
  keywords: [
    "audiología Costa Rica",
    "audiólogo Costa Rica",
    "clínica de audiología",
    "audiometría Costa Rica",
    "impedanciometría",
    "prótesis auditivas Costa Rica",
    "audífonos CCSS",
    "recetas audífonos CCSS",
    "pérdida auditiva",
    "salud auditiva",
    "audiólogo Pérez Zeledón",
    "audiólogo Río Claro",
    "audiólogo Ciudad Neily",
    "audiólogo Quepos",
    "audiólogo Uvita",
    "AudioColors",
    "especialidades audiológicas",
  ],
  authors: [{ name: "AudioColors Especialidades Audiológicas" }],
  creator: "AudioColors",
  publisher: "AudioColors",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: SITE_URL,
    siteName: "AudioColors",
    title: SITE_NAME,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AudioColors — Especialidades Audiológicas en Costa Rica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": SITE_URL,
  name: "AudioColors Especialidades Audiológicas",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: "+50688479893",
  email: "audiocolors@gmail.com",
  medicalSpecialty: "Audiology",
  openingHours: "Mo-Fr 08:00-16:00",
  areaServed: "Costa Rica",
  location: [
    {
      "@type": "MedicalClinic",
      name: "AudioColors Pérez Zeledón",
      address: {
        "@type": "PostalAddress",
        streetAddress: "San Isidro de El General",
        addressLocality: "Pérez Zeledón",
        addressRegion: "San José",
        addressCountry: "CR",
      },
      telephone: "+50688479893",
    },
    {
      "@type": "MedicalClinic",
      name: "AudioColors Río Claro — Centro Médico Yireh",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Detrás de la Ferretería Impala",
        addressLocality: "Río Claro",
        addressRegion: "Puntarenas",
        addressCountry: "CR",
      },
      telephone: "+50688479893",
    },
    {
      "@type": "MedicalClinic",
      name: "AudioColors Ciudad Neily",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ciudad Neily",
        addressRegion: "Puntarenas",
        addressCountry: "CR",
      },
      telephone: "+50688479893",
    },
    {
      "@type": "MedicalClinic",
      name: "AudioColors Quepos",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Quepos",
        addressRegion: "Puntarenas",
        addressCountry: "CR",
      },
      telephone: "+50688479893",
    },
    {
      "@type": "MedicalClinic",
      name: "AudioColors Uvita",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Uvita",
        addressRegion: "Puntarenas",
        addressCountry: "CR",
      },
      telephone: "+50688479893",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Audiológicos",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Audiometría Clínica" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Audiometría de Rastreo" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Impedanciometría" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Salud Auditiva Ocupacional" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Prótesis Auditivas" } },
      { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Servicio de Mantenimiento de Audífonos" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AudioColors — Especialidades Audiológicas",
  description:
    "Expertos en soluciones auditivas personalizadas. Tramitamos recetas de audífonos de la CCSS. Servicios de audiometría, impedanciometría, prótesis auditivas y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

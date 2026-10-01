import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemePlayground } from "@/components/site/theme-playground";
import { siteConfig } from "@/lib/site-config";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = DM_Sans({
  variable: "--font-sans-brand",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const SITE_URL = siteConfig.siteUrl;
const TITLE = "Mariana Marcato | Psicóloga em Araxá — Terapia Cognitivo-Comportamental";
const DESCRIPTION =
  "Psicóloga clínica em Araxá-MG, especialista em Terapia Cognitivo-Comportamental (TCC). Atendimento online e presencial para ansiedade, depressão, procrastinação e relacionamentos. Agende sua primeira consulta.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Mariana Marcato",
  },
  description: DESCRIPTION,
  keywords: [
    "psicóloga em Araxá",
    "psicóloga Araxá MG",
    "terapia cognitivo-comportamental",
    "TCC Araxá",
    "terapia online",
    "psicólogo ansiedade",
    "psicólogo depressão",
    "terapia para procrastinação",
    "Mariana Marcato psicóloga",
  ],
  authors: [{ name: "Mariana Marcato" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Mariana Marcato Psicóloga",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/foto_principal.jpg", width: 1200, height: 1600, alt: "Mariana Marcato, psicóloga" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/foto_principal.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--brand-warm-white)] text-[var(--brand-text-dark)] font-[family-name:var(--font-sans-brand)]">
        {children}
        <ThemePlayground />
      </body>
    </html>
  );
}

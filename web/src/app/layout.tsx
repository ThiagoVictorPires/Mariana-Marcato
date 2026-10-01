import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const sans = DM_Sans({
  variable: "--font-sans-brand",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Mariana Marcato | Psicóloga em Araxá",
  description:
    "Tratamentos fundamentados na ciência para ajudar você a compreender suas dificuldades, desenvolver novas habilidades e construir uma vida com mais equilíbrio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--brand-warm-white)] text-[var(--brand-text-dark)] font-[family-name:var(--font-sans-brand)]">
        {children}
      </body>
    </html>
  );
}

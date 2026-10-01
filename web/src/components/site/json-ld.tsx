import { siteConfig } from "@/lib/site-config"

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: siteConfig.name,
    description:
      "Psicóloga clínica especialista em Terapia Cognitivo-Comportamental (TCC), atendimento online e presencial em Araxá-MG.",
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/foto_principal.jpg`,
    logo: `${siteConfig.siteUrl}/logo-mm.png`,
    telephone: `+${siteConfig.whatsappNumber}`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: "BR",
    },
    areaServed: [siteConfig.city, "Minas Gerais", "Brasil"],
    sameAs: [siteConfig.instagramUrl],
    medicalSpecialty: "Psychiatric",
    availableService: {
      "@type": "MedicalTherapy",
      name: "Terapia Cognitivo-Comportamental",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

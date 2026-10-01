export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: "Mariana Marcato",
    description:
      "Psicóloga clínica especialista em Terapia Cognitivo-Comportamental (TCC), atendimento online e presencial em Araxá-MG.",
    url: "https://www.marianamarcato.com.br",
    image: "https://www.marianamarcato.com.br/foto_principal.jpg",
    telephone: "+5534984397438",
    email: "mariana.marcato@outlook.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Araxá",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    areaServed: ["Araxá", "Minas Gerais", "Brasil"],
    sameAs: ["https://www.instagram.com/psi.marianamarcato"],
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

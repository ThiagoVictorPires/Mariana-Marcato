import type { Metadata } from "next"
import Link from "next/link"

import { Footer } from "@/components/site/footer"
import { Navbar } from "@/components/site/navbar"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como Mariana Marcato Psicóloga coleta, usa e protege os dados enviados pelo site, em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
}

const SECTIONS = [
  {
    title: "1. Quem é o controlador dos dados",
    body: (
      <>
        Este site pertence a <strong>{siteConfig.name}</strong>, psicóloga
        clínica inscrita no CRP 04/65485, atendimento em{" "}
        {siteConfig.city}-{siteConfig.state}. Para qualquer assunto
        relacionado a esta política ou aos seus dados pessoais, entre em
        contato pelo e-mail{" "}
        <a className="underline" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        .
      </>
    ),
  },
  {
    title: "2. Quais dados são coletados",
    body: (
      <>
        O formulário de contato deste site coleta apenas o que você
        preenche voluntariamente: <strong>nome, e-mail, telefone e a
        mensagem</strong>. Ao enviar o formulário, esses dados são
        formatados em uma mensagem e abertos diretamente no WhatsApp —{" "}
        <strong>
          o site não armazena essas informações em nenhum banco de dados
        </strong>
        , elas vão diretamente para a conversa entre você e a Mariana.
      </>
    ),
  },
  {
    title: "3. Para que os dados são usados",
    body: "Exclusivamente para responder ao seu contato e, quando solicitado, agendar e conduzir o atendimento psicológico. Nenhum dado é usado para fins de marketing sem o seu consentimento explícito.",
  },
  {
    title: "4. Compartilhamento com terceiros",
    body: "Seus dados não são vendidos, alugados ou compartilhados com terceiros para fins comerciais. Informações só são divulgadas quando exigido por lei ou ordem judicial.",
  },
  {
    title: "5. Sigilo profissional",
    body: "Como psicóloga, Mariana Marcato está sujeita ao sigilo profissional previsto no Código de Ética Profissional do Psicólogo (Resolução CFP). O conteúdo de sessões e atendimentos é confidencial, com as exceções previstas em lei (como risco iminente à vida).",
  },
  {
    title: "6. Cookies",
    body: "No momento, este site não utiliza cookies de rastreamento, análise de audiência ou publicidade. Caso isso mude no futuro (por exemplo, com a adição de ferramentas de analytics), esta política será atualizada para refletir essa mudança antes da coleta começar.",
  },
  {
    title: "7. Seus direitos (LGPD)",
    body: (
      <>
        Conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018), você
        pode a qualquer momento solicitar: confirmação da existência de
        tratamento, acesso aos seus dados, correção de dados incompletos
        ou desatualizados, exclusão dos dados, e informações sobre com
        quem seus dados foram compartilhados. Para exercer qualquer um
        desses direitos, escreva para{" "}
        <a className="underline" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        .
      </>
    ),
  },
  {
    title: "8. Alterações nesta política",
    body: "Esta política pode ser atualizada periodicamente para refletir mudanças no site ou na legislação. A data da última atualização está sempre indicada no topo desta página.",
  },
]

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-36 md:px-14 lg:px-0">
        <Link
          href="/"
          className="mb-10 inline-block text-[0.78rem] uppercase tracking-[0.12em] text-[var(--brand-sage-dark)] hover:underline"
        >
          ← Voltar para o site
        </Link>

        <p className="mb-2 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--brand-terracotta)]">
          Legal
        </p>
        <h1 className="mb-3 font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,2.8rem)] font-light leading-tight text-[var(--brand-text-dark)]">
          Política de Privacidade
        </h1>
        <p className="mb-14 text-[0.85rem] text-[var(--brand-text-light)]">
          Última atualização: 30 de setembro de 2026
        </p>

        <div className="flex flex-col gap-10">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="mb-3 font-[family-name:var(--font-serif)] text-xl font-normal text-[var(--brand-text-dark)]">
                {section.title}
              </h2>
              <p className="text-[0.92rem] leading-[1.85] text-[var(--brand-text-mid)]">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

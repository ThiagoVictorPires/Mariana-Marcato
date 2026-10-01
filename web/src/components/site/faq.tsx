"use client"

import * as React from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"

import { Cta } from "@/components/site/cta"
import { Reveal } from "@/components/site/reveal"
import { SectionBlobs } from "@/components/site/section-blobs"

const FAQS = [
  {
    q: "O que conversamos em sessão — e meus dados — ficam realmente em sigilo?",
    a: "Sim. Como psicóloga, estou sujeita ao sigilo profissional previsto no Código de Ética do CFP: tudo o que é discutido em sessão é confidencial, com raríssimas exceções previstas em lei (risco iminente à vida). E os dados que você envia pelo formulário deste site — nome, e-mail, telefone — não ficam armazenados em nenhum banco de dados: a mensagem vai direto para o WhatsApp, só entre você e eu.",
    link: { href: "/politica-de-privacidade", label: "Ver política de privacidade completa" },
  },
  {
    q: "Quanto tempo dura cada sessão?",
    a: "As sessões duram 50 minutos.",
  },
  {
    q: "Os atendimentos são online ou presenciais?",
    a: "Acontecem na modalidade online, sem restrição geográfica, e presencial na cidade de Araxá — MG.",
  },
  {
    q: "Com que frequência acontecem?",
    a: "Acontecem, em geral, semanalmente, com duração média de 50 a 60 minutos.",
  },
  {
    q: "Aceita plano de saúde?",
    a: "Não atendo por plano de saúde, porém realizo a emissão dos recibos necessários para que você solicite o reembolso junto ao seu plano, caso tenha esse benefício.",
  },
  {
    q: "Em quanto tempo vou perceber resultados?",
    a: "Embora não exista um prazo único, muitas pessoas relatam que, já nas primeiras sessões, passam a compreender melhor suas dificuldades e se sentem mais preparadas para lidar com elas. Cada processo é único e depende dos objetivos terapêuticos, da complexidade da situação e do momento de vida de cada pessoa — mais do que mudanças rápidas, o compromisso é construir transformações sólidas e duradouras.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden bg-[var(--brand-warm-white)] px-6 py-24 md:px-14 lg:px-20">
      <SectionBlobs />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal className="mb-5 flex items-center justify-center gap-3 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--brand-terracotta)]">
          <span className="h-px w-8 bg-[var(--brand-terracotta-light)]" />
          Perguntas Frequentes
          <span className="h-px w-8 bg-[var(--brand-terracotta-light)]" />
        </Reveal>
        <Reveal
          delay={0.05}
          className="mb-16 font-[family-name:var(--font-serif)] text-[clamp(1.9rem,3vw,2.8rem)] font-light leading-tight text-[var(--brand-text-dark)]"
        >
          Tirando suas <em className="italic text-[var(--brand-sage-dark)]">dúvidas</em>
        </Reveal>
      </div>

      <div className="mx-auto max-w-2xl divide-y divide-[var(--brand-border)] overflow-hidden rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-warm-white)] shadow-[0_20px_50px_-30px_rgba(42,31,26,0.3)]">
        {FAQS.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <Reveal key={item.q} delay={index * 0.04}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-[var(--brand-cream)]/60"
                aria-expanded={isOpen}
              >
                <span className="text-[0.95rem] text-[var(--brand-text-dark)]">
                  {item.q}
                </span>
                <span
                  className={`flex size-6 shrink-0 items-center justify-center rounded-full border border-[var(--brand-border)] text-sm transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 border-[var(--brand-sage-dark)] bg-[var(--brand-sage-dark)] text-white"
                      : "text-[var(--brand-sage-dark)]"
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-[0.88rem] leading-[1.8] text-[var(--brand-text-mid)]">
                        {item.a}
                      </p>
                      {item.link && (
                        <Link
                          href={item.link.href}
                          className="mt-3 inline-block text-[0.8rem] font-medium text-[var(--brand-sage-dark)] underline underline-offset-2"
                        >
                          {item.link.label} →
                        </Link>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          )
        })}
      </div>

      <div className="relative z-10 mt-16">
        <Cta />
      </div>
    </section>
  )
}

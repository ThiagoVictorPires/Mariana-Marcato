import Link from "next/link"

import { Reveal } from "@/components/site/reveal"
import { siteConfig } from "@/lib/site-config"

const WHATSAPP_URL = siteConfig.whatsappUrl

export function ContatoFinal() {
  return (
    <section id="contato" className="bg-[var(--brand-text-dark)] px-6 py-28 text-center md:px-14 lg:px-20">
      <div className="mx-auto max-w-xl">
        <Reveal className="mb-6 font-[family-name:var(--font-serif)] text-[clamp(1.9rem,3.2vw,2.9rem)] font-light leading-tight text-[var(--brand-cream)]">
          Vamos <em className="italic text-[var(--brand-sage-light)]">conversar</em>?
        </Reveal>
        <Reveal delay={0.08} className="mb-10 text-[0.95rem] leading-[1.9] text-[var(--brand-cream)]/70">
          Se você acredita que este pode ser o momento de cuidar da sua
          saúde mental, será um prazer acompanhar você nesse processo.
        </Reveal>
        <Reveal delay={0.16}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-[var(--brand-sage-dark)] px-9 py-4 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-white transition-all hover:bg-[var(--brand-terracotta)] hover:-translate-y-0.5"
          >
            Agendar primeira consulta
          </a>
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-5 flex items-center justify-center gap-2 text-[0.75rem] text-[var(--brand-cream)]/45"
        >
          <span aria-hidden>🔒</span>
          Conversa 100% confidencial ·{" "}
          <Link href="/politica-de-privacidade" className="underline underline-offset-2 hover:text-[var(--brand-cream)]/70">
            saiba como cuidamos dos seus dados
          </Link>
        </Reveal>

        <Reveal
          delay={0.24}
          className="mx-auto mt-20 max-w-md text-[0.9rem] leading-[1.9] text-[var(--brand-cream)]/60"
        >
          Você não precisa ter todas as respostas antes de procurar ajuda.
          Às vezes, o primeiro passo é apenas encontrar um espaço onde você
          possa compreender o que está vivendo.
        </Reveal>
        <Reveal delay={0.3} className="mt-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full border border-[var(--brand-sage-light)]/40 px-8 py-3 text-[0.72rem] uppercase tracking-[0.12em] text-[var(--brand-sage-light)] transition-colors hover:bg-[var(--brand-sage-light)]/10"
          >
            Dar o primeiro passo
          </a>
        </Reveal>
      </div>
    </section>
  )
}

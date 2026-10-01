import { Cta } from "@/components/site/cta"
import { Reveal } from "@/components/site/reveal"

const INDICACOES = [
  "Sentem que perderam a qualidade de vida",
  "Desejam compreender melhor suas emoções",
  "Vivem altos níveis de ansiedade",
  "Estão passando por mudanças importantes",
  "Querem desenvolver hábitos mais saudáveis",
  "Desejam melhorar seus relacionamentos",
]

const EXPECTATIVAS = [
  "Um espaço seguro e livre de julgamentos",
  "Objetivos construídos em conjunto",
  "Estratégias baseadas em evidências",
  "Desenvolvimento de habilidades práticas",
  "Acompanhamento respeitando seu ritmo",
]

export function Indicado() {
  return (
    <section className="bg-[var(--brand-cream)] px-6 py-24 md:px-14 lg:px-20">
      <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 md:gap-12">
        <div>
          <Reveal className="mb-5 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--brand-terracotta)]">
            <span className="h-px w-8 bg-[var(--brand-terracotta-light)]" />
            Para quem é indicado
          </Reveal>
          <Reveal
            delay={0.05}
            className="mb-8 font-[family-name:var(--font-serif)] text-[clamp(1.7rem,2.6vw,2.3rem)] font-light leading-tight text-[var(--brand-text-dark)]"
          >
            A terapia pode ser indicada para pessoas que:
          </Reveal>
          <ul className="space-y-4">
            {INDICACOES.map((item, index) => (
              <Reveal
                key={item}
                delay={0.1 + index * 0.04}
                className="flex items-start gap-3 text-[0.92rem] text-[var(--brand-text-mid)]"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-sage-dark)] text-[0.65rem] text-white">
                  &#10003;
                </span>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <Reveal className="mb-5 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--brand-terracotta)]">
            <span className="h-px w-8 bg-[var(--brand-terracotta-light)]" />
            Na prática
          </Reveal>
          <Reveal
            delay={0.05}
            className="mb-8 font-[family-name:var(--font-serif)] text-[clamp(1.7rem,2.6vw,2.3rem)] font-light leading-tight text-[var(--brand-text-dark)]"
          >
            O que você pode esperar da terapia
          </Reveal>
          <div className="space-y-3">
            {EXPECTATIVAS.map((item, index) => (
              <Reveal
                key={item}
                delay={0.1 + index * 0.05}
                className="rounded-xl border border-[var(--brand-border)] bg-[var(--brand-warm-white)] px-5 py-4 text-[0.9rem] text-[var(--brand-text-mid)] transition-colors hover:border-[var(--brand-sage-dark)]/40"
              >
                {item}
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Cta />
      </div>
    </section>
  )
}

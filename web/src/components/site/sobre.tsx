import Image from "next/image"

import { Reveal } from "@/components/site/reveal"

const FORMACAO = [
  "Psicóloga clínica desde 2020",
  "Especialista em Terapia Cognitivo Comportamental — TCC",
  "Formada em Obesidade e Emagrecimento e Psicopatologia pelo grupo PBE",
  "Formanda em Terapia Comportamental Dialética — DBT",
]

export function Sobre() {
  return (
    <section
      id="sobre"
      className="grid grid-cols-1 overflow-hidden md:grid-cols-2"
    >
      <Reveal className="relative h-[90vw] max-h-[420px] overflow-hidden bg-[var(--brand-cream)] md:order-2 md:h-auto md:max-h-none">
        <Image
          src="/foto_secundaria.jpg"
          alt="Mariana Marcato em seu consultório"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top [filter:sepia(10%)_contrast(1.03)]"
        />
      </Reveal>

      <div className="flex flex-col justify-center bg-[var(--brand-warm-white)] px-6 py-16 md:order-1 md:px-14 md:py-24 lg:px-20">
        <Reveal className="mb-5 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--brand-terracotta)]">
          Sobre mim
          <span className="h-px flex-1 max-w-8 bg-[var(--brand-terracotta-light)]" />
        </Reveal>

        <Reveal
          delay={0.05}
          className="mb-7 font-[family-name:var(--font-serif)] text-[clamp(2.1rem,3.4vw,3.2rem)] font-light leading-tight text-[var(--brand-text-dark)]"
        >
          Olá, sou{" "}
          <em className="italic text-[var(--brand-sage-dark)]">
            Mariana Marcato
          </em>
          , psicóloga clínica
        </Reveal>

        <Reveal delay={0.1} className="mb-5 text-[0.95rem] leading-[1.85] text-[var(--brand-text-mid)]">
          Especialista em Terapia Cognitivo-Comportamental, ajudo pessoas que
          se sentem presas em padrões de ansiedade, desânimo, autocrítica,
          procrastinação, dificuldades nos relacionamentos ou na construção
          de hábitos mais saudáveis.
        </Reveal>

        <Reveal delay={0.15} className="mb-5 text-[0.95rem] leading-[1.85] text-[var(--brand-text-mid)]">
          Acredito que compreender o funcionamento de cada pessoa é essencial
          para construir intervenções realmente eficazes. Por isso, cada
          tratamento é planejado de forma individualizada, com estratégias
          baseadas em evidências científicas e adaptadas à realidade de quem
          está diante de mim.
        </Reveal>

        <Reveal delay={0.2} className="mb-10 text-[0.95rem] leading-[1.85] text-[var(--brand-text-mid)]">
          Meu objetivo é que a terapia seja um espaço acolhedor, mas também
          um lugar de aprendizado e desenvolvimento de habilidades que façam
          diferença fora do consultório.
        </Reveal>

        <Reveal delay={0.25} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FORMACAO.map((item) => (
            <div
              key={item}
              className="border-l-2 border-[var(--brand-sage-light)] py-1.5 pl-4"
            >
              <p className="text-[0.8rem] leading-snug text-[var(--brand-text-mid)]">
                {item}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

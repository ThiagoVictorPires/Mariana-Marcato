import { Annotate } from "@/components/site/annotate"
import { Cta } from "@/components/site/cta"
import { Reveal } from "@/components/site/reveal"

export function Tratamento() {
  return (
    <section id="tratamento" className="bg-[var(--brand-cream)] px-6 py-24 md:px-14 lg:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal className="mb-5 flex items-center justify-center gap-3 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--brand-terracotta)]">
          <span className="h-px w-8 bg-[var(--brand-terracotta-light)]" />
          Terapia Cognitivo-Comportamental
          <span className="h-px w-8 bg-[var(--brand-terracotta-light)]" />
        </Reveal>

        <Reveal
          delay={0.05}
          className="mb-8 font-[family-name:var(--font-serif)] text-[clamp(1.9rem,3vw,2.8rem)] font-light leading-tight text-[var(--brand-text-dark)]"
        >
          O tratamento certo pode{" "}
          <Annotate type="box" color="var(--brand-sage-dark)" strokeWidth={1.5} padding={5}>
            <em className="italic text-[var(--brand-sage-dark)]">
              transformar
            </em>
          </Annotate>{" "}
          a forma como você vive
        </Reveal>

        <Reveal delay={0.1} className="mb-5 text-[0.95rem] leading-[1.9] text-[var(--brand-text-mid)]">
          A TCC é uma abordagem respaldada por um amplo conjunto de pesquisas
          científicas e recomendada internacionalmente para o tratamento de
          diversos transtornos mentais e dificuldades emocionais.
        </Reveal>

        <Reveal delay={0.15} className="mb-5 text-[0.95rem] leading-[1.9] text-[var(--brand-text-mid)]">
          É focada na resolução de problemas, em encontrar meios tangíveis
          para aproximá-lo de suas metas terapêuticas. Seu objetivo principal
          é identificar padrões de comportamento, pensamentos, crenças e
          hábitos que estão na origem dos problemas, indicando técnicas para
          alterar essas percepções de forma efetiva.
        </Reveal>

        <Reveal delay={0.2} className="mb-12 text-[0.95rem] leading-[1.9] text-[var(--brand-text-mid)]">
          A psicoterapia ajuda o paciente a desenvolver habilidades de
          enfrentamento saudáveis e a adotar estratégias mais adaptativas
          para lidar com os desafios da vida.
        </Reveal>
      </div>

      <Cta />
    </section>
  )
}

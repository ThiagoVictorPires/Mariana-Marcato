import { Cta } from "@/components/site/cta"
import { Reveal } from "@/components/site/reveal"

const ETAPAS = [
  {
    n: "01",
    title: "Compreensão da sua história",
    text: "O primeiro passo é entender quem você é além da queixa que o trouxe até aqui. Vamos explorar sua história, seus objetivos, os desafios que enfrenta atualmente e os fatores que podem estar contribuindo para o sofrimento. A partir dessa compreensão, construiremos um plano terapêutico individualizado para lhe aproximar dos seus alvos.",
  },
  {
    n: "02",
    title: "Construindo mudanças consistentes",
    text: "Trabalharemos habilidades práticas para enfrentar as dificuldades do dia a dia. Cada intervenção é escolhida de acordo com as suas necessidades, buscando compreender padrões de pensamento, emoções e comportamentos que mantêm o problema. O objetivo não é apenas aliviar sintomas, mas promover mudanças duradouras que façam sentido para a sua realidade.",
  },
  {
    n: "03",
    title: "Mais autonomia para seguir em frente",
    text: "Com a evolução do tratamento, o foco passa a ser fortalecer sua autonomia e consolidar as estratégias aprendidas durante a terapia. Quando apropriado, a frequência das sessões pode ser reduzida gradualmente até o encerramento do processo terapêutico.",
  },
  {
    n: "04",
    title: "Autonomia e manutenção",
    text: "Consolidação dos avanços, prevenção de recaídas e fortalecimento da autonomia para enfrentar novos desafios.",
  },
]

export function Processo() {
  return (
    <section id="processo" className="bg-[var(--brand-warm-white)] px-6 py-24 md:px-14 lg:px-20">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal className="mb-5 flex items-center justify-center gap-3 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--brand-terracotta)]">
          <span className="h-px w-8 bg-[var(--brand-terracotta-light)]" />
          Como funciona o atendimento
        </Reveal>
        <Reveal
          delay={0.05}
          className="mb-6 font-[family-name:var(--font-serif)] text-[clamp(1.9rem,3vw,2.8rem)] font-light leading-tight text-[var(--brand-text-dark)]"
        >
          Cada processo terapêutico é{" "}
          <em className="italic text-[var(--brand-sage-dark)]">único</em>
        </Reveal>
        <Reveal delay={0.1} className="mb-16 text-[0.95rem] leading-[1.9] text-[var(--brand-text-mid)]">
          Embora cada pessoa tenha sua própria história, o acompanhamento
          costuma seguir uma estrutura que permite compreender a origem das
          dificuldades, promover mudanças consistentes e desenvolver
          autonomia ao longo do tratamento.
        </Reveal>
      </div>

      <div className="mx-auto max-w-3xl">
        {ETAPAS.map((etapa, index) => (
          <Reveal
            key={etapa.n}
            delay={index * 0.05}
            className="relative flex gap-6 border-[var(--brand-border)] py-8 first:pt-0 last:pb-0 md:gap-10"
            style={{
              borderTopWidth: index === 0 ? 0 : 1,
            }}
          >
            <span className="font-[family-name:var(--font-serif)] shrink-0 text-4xl font-light text-[var(--brand-sage-light)] md:text-5xl">
              {etapa.n}
            </span>
            <div>
              <h3 className="mb-2 font-[family-name:var(--font-serif)] text-xl font-normal text-[var(--brand-text-dark)] md:text-2xl">
                {etapa.title}
              </h3>
              <p className="text-[0.9rem] leading-[1.8] text-[var(--brand-text-mid)]">
                {etapa.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <Cta />
      </div>
    </section>
  )
}

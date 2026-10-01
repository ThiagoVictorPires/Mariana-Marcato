"use client"

import { motion } from "motion/react"

import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
} from "@/components/blocks/animated-cards-stack"
import { Reveal } from "@/components/site/reveal"
import { SectionBlobs } from "@/components/site/section-blobs"
import { SketchIcon } from "@/components/site/sketch-icon"

const DIFICULDADES = [
  {
    id: "tristeza",
    icon: "tristeza",
    title: "Tristeza que parece não passar",
    text: "Há momentos em que levantar da cama exige esforço, as coisas que antes faziam sentido perdem a graça e a sensação é de apenas sobreviver aos dias. Juntos, podemos compreender o que mantém esse ciclo e construir caminhos para recuperar o prazer e o sentido da vida.",
  },
  {
    id: "preocupacoes",
    icon: "preocupacoes",
    title: "Preocupações que nunca descansam",
    text: "A mente não desliga. Mesmo quando tudo parece bem, surgem pensamentos sobre o que pode dar errado, acompanhados de tensão, medo e dificuldade para relaxar. É possível aprender novas formas de lidar com essas preocupações e recuperar uma sensação de segurança.",
  },
  {
    id: "procrastinacao",
    icon: "procrastinacao",
    title: "Você sabe o que precisa fazer, mas não consegue começar",
    text: "As tarefas se acumulam, os prazos apertam e a culpa aumenta. Quanto mais você adia, mais difícil parece agir. Vamos entender o que está por trás desse ciclo e desenvolver estratégias para retomar sua produtividade sem depender apenas da motivação.",
  },
  {
    id: "autocritica",
    icon: "autocritica",
    title: "A sensação de nunca ser suficiente",
    text: "Mesmo quando conquista algo importante, parece que sempre falta alguma coisa. Comparações constantes, autocrítica intensa e dificuldade em reconhecer suas próprias qualidades podem tornar a vida muito mais pesada do que ela precisa ser.",
  },
  {
    id: "alimentacao",
    icon: "alimentacao",
    title: "A relação com a comida vai além da fome",
    text: "Muitas vezes comer serve para aliviar emoções, lidar com o estresse ou preencher um vazio momentâneo. O objetivo não é seguir dietas rígidas, mas compreender os comportamentos envolvidos na alimentação e construir mudanças sustentáveis.",
  },
  {
    id: "foco",
    icon: "foco",
    title: "Uma mente acelerada em várias direções",
    text: "Manter o foco, organizar tarefas, lembrar compromissos ou concluir projetos pode parecer uma batalha diária. Existem maneiras de desenvolver estratégias que favoreçam uma rotina mais organizada e funcional, respeitando suas características.",
  },
  {
    id: "relacionamentos",
    icon: "relacionamentos",
    title: "Relacionamentos que machucam mais do que aproximam",
    text: "Conflitos repetitivos, dificuldade para colocar limites, medo de decepcionar ou de ser abandonado podem transformar vínculos importantes em fontes constantes de sofrimento. Trabalhar essas habilidades permite construir relações mais saudáveis e equilibradas.",
  },
] as const

function CardBody({ item }: { item: (typeof DIFICULDADES)[number] }) {
  return (
    <>
      <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--brand-sage-light)]/10">
        <SketchIcon name={item.icon} className="size-8 text-[var(--brand-sage-light)]" />
      </div>
      <h3 className="font-[family-name:var(--font-serif)] text-xl font-normal leading-snug text-[var(--brand-cream)]">
        {item.title}
      </h3>
      <p className="text-[0.85rem] leading-relaxed text-[var(--brand-cream)]/65">
        {item.text}
      </p>
    </>
  )
}

export function Dificuldades() {
  return (
    <section id="dificuldades" className="bg-[var(--brand-text-dark)] px-6 pt-24 md:px-14 lg:px-20">
      <div className="relative mx-auto max-w-2xl overflow-hidden text-center">
        <SectionBlobs variant="dark" />
        <div className="relative z-10">
          <Reveal className="mb-5 flex items-center justify-center gap-3 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--brand-sage-light)]">
            <span className="h-px w-8 bg-[var(--brand-sage)]" />
            Dificuldades
            <span className="h-px w-8 bg-[var(--brand-sage)]" />
          </Reveal>
          <Reveal
            delay={0.05}
            className="mb-6 font-[family-name:var(--font-serif)] text-[clamp(1.9rem,3vw,2.8rem)] font-light leading-tight text-[var(--brand-cream)]"
          >
            As dificuldades emocionais nem sempre aparecem{" "}
            <em className="italic text-[var(--brand-sage-light)]">
              da mesma forma
            </em>
          </Reveal>
          <Reveal delay={0.1} className="mb-4 text-[0.95rem] leading-[1.9] text-[var(--brand-cream)]/70">
            Conheça algumas situações frequentemente trabalhadas durante o
            processo terapêutico.
          </Reveal>
        </div>
      </div>

      {/* Desktop: scroll-driven stack */}
      <div className="hidden md:block">
        <ContainerScroll className="container h-[420vh]">
          <div className="sticky left-0 top-0 h-svh w-full py-12">
            <CardsContainer className="mx-auto size-full h-[420px] w-[380px]">
              {DIFICULDADES.map((item, index) => (
                <CardTransformed
                  arrayLength={DIFICULDADES.length}
                  key={item.id}
                  variant="dark"
                  index={index + 2}
                  className="!items-start !justify-start gap-4 text-left transition-[border-color,box-shadow] duration-300 hover:border-[var(--brand-sage-light)]/70 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.65)]"
                >
                  <CardBody item={item} />
                </CardTransformed>
              ))}
            </CardsContainer>
          </div>
        </ContainerScroll>
      </div>

      {/* Mobile: drag/swipe horizontal carousel */}
      <div className="md:hidden">
        <Reveal
          delay={0.15}
          className="mb-4 flex items-center justify-center gap-2 text-[0.72rem] text-[var(--brand-cream)]/50"
        >
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            ←
          </motion.span>
          arraste para o lado
          <motion.span
            animate={{ x: [0, -6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </Reveal>
        <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {DIFICULDADES.map((item) => (
            <div
              key={item.id}
              className="flex w-[82vw] shrink-0 snap-center flex-col gap-4 rounded-2xl border border-stone-700/50 bg-[var(--brand-text-dark)] p-6 shadow-2xl shadow-black/50 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-sage-light)]/70"
            >
              <CardBody item={item} />
            </div>
          ))}
        </div>
      </div>

      <Reveal className="mx-auto max-w-2xl pb-20 text-center text-[0.95rem] leading-[1.9] text-[var(--brand-cream)]/70">
        Cada experiência é analisada considerando o seu contexto de vida,
        buscando compreender os processos que sustentam o sofrimento e
        definir estratégias de intervenção individualizadas.
      </Reveal>
    </section>
  )
}

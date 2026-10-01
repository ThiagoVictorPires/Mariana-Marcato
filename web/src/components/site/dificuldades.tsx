"use client"

import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
} from "@/components/blocks/animated-cards-stack"
import { Reveal } from "@/components/site/reveal"

const DIFICULDADES = [
  {
    id: "tristeza",
    title: "Tristeza que parece não passar",
    text: "Há momentos em que levantar da cama exige esforço, as coisas que antes faziam sentido perdem a graça e a sensação é de apenas sobreviver aos dias. Juntos, podemos compreender o que mantém esse ciclo e construir caminhos para recuperar o prazer e o sentido da vida.",
  },
  {
    id: "preocupacoes",
    title: "Preocupações que nunca descansam",
    text: "A mente não desliga. Mesmo quando tudo parece bem, surgem pensamentos sobre o que pode dar errado, acompanhados de tensão, medo e dificuldade para relaxar. É possível aprender novas formas de lidar com essas preocupações e recuperar uma sensação de segurança.",
  },
  {
    id: "procrastinacao",
    title: "Você sabe o que precisa fazer, mas não consegue começar",
    text: "As tarefas se acumulam, os prazos apertam e a culpa aumenta. Quanto mais você adia, mais difícil parece agir. Vamos entender o que está por trás desse ciclo e desenvolver estratégias para retomar sua produtividade sem depender apenas da motivação.",
  },
  {
    id: "autocritica",
    title: "A sensação de nunca ser suficiente",
    text: "Mesmo quando conquista algo importante, parece que sempre falta alguma coisa. Comparações constantes, autocrítica intensa e dificuldade em reconhecer suas próprias qualidades podem tornar a vida muito mais pesada do que ela precisa ser.",
  },
  {
    id: "alimentacao",
    title: "A relação com a comida vai além da fome",
    text: "Muitas vezes comer serve para aliviar emoções, lidar com o estresse ou preencher um vazio momentâneo. O objetivo não é seguir dietas rígidas, mas compreender os comportamentos envolvidos na alimentação e construir mudanças sustentáveis.",
  },
  {
    id: "foco",
    title: "Uma mente acelerada em várias direções",
    text: "Manter o foco, organizar tarefas, lembrar compromissos ou concluir projetos pode parecer uma batalha diária. Existem maneiras de desenvolver estratégias que favoreçam uma rotina mais organizada e funcional, respeitando suas características.",
  },
  {
    id: "relacionamentos",
    title: "Relacionamentos que machucam mais do que aproximam",
    text: "Conflitos repetitivos, dificuldade para colocar limites, medo de decepcionar ou de ser abandonado podem transformar vínculos importantes em fontes constantes de sofrimento. Trabalhar essas habilidades permite construir relações mais saudáveis e equilibradas.",
  },
]

export function Dificuldades() {
  return (
    <section id="dificuldades" className="bg-[var(--brand-text-dark)] px-6 pt-24 md:px-14 lg:px-20">
      <div className="mx-auto max-w-2xl text-center">
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

      <ContainerScroll className="container h-[420vh]">
        <div className="sticky left-0 top-0 h-svh w-full py-12">
          <CardsContainer className="mx-auto size-full h-[400px] w-[320px] sm:h-[420px] sm:w-[380px]">
            {DIFICULDADES.map((item, index) => (
              <CardTransformed
                arrayLength={DIFICULDADES.length}
                key={item.id}
                variant="dark"
                index={index + 2}
                className="!items-start !justify-start text-left"
              >
                <span className="font-[family-name:var(--font-serif)] text-3xl font-light text-[var(--brand-sage-light)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-serif)] text-xl font-normal leading-snug text-[var(--brand-cream)]">
                  {item.title}
                </h3>
                <p className="text-[0.85rem] leading-relaxed text-[var(--brand-cream)]/65">
                  {item.text}
                </p>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>

      <Reveal className="mx-auto max-w-2xl pb-20 text-center text-[0.95rem] leading-[1.9] text-[var(--brand-cream)]/70">
        Cada experiência é analisada considerando o seu contexto de vida,
        buscando compreender os processos que sustentam o sofrimento e
        definir estratégias de intervenção individualizadas.
      </Reveal>
    </section>
  )
}

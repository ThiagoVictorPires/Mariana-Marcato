export interface BlogBlock {
  type: "p" | "h2"
  text: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  blocks: BlogBlock[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ansiedade-sinais-quando-buscar-ajuda",
    title: "Ansiedade: sinais, causas e quando buscar ajuda psicológica",
    description:
      "Como reconhecer quando a ansiedade deixou de ser passageira e passou a atrapalhar sua vida — e o que a psicologia pode fazer a respeito.",
    date: "2026-09-10",
    readingTime: "6 min de leitura",
    blocks: [
      {
        type: "p",
        text: "Sentir ansiedade de vez em quando é parte da experiência humana — ela nos prepara para desafios, prazos e situações novas. O problema começa quando essa ansiedade deixa de ser pontual e passa a ocupar espaço demais na rotina: o corpo tenso o dia inteiro, pensamentos que não param de girar em torno do que pode dar errado, dificuldade para dormir ou para simplesmente relaxar num domingo à tarde.",
      },
      {
        type: "h2",
        text: "Sinais de que vale a pena prestar atenção",
      },
      {
        type: "p",
        text: "Alguns sinais frequentes incluem preocupação excessiva e difícil de controlar, irritabilidade, tensão muscular, fadiga constante, dificuldade de concentração e alterações no sono ou no apetite. Isoladamente, cada um desses sintomas pode ter várias explicações — o que costuma indicar que é hora de buscar ajuda é a combinação deles persistindo por semanas e interferindo no trabalho, nos relacionamentos ou no bem-estar geral.",
      },
      {
        type: "h2",
        text: "Por que a ansiedade aparece",
      },
      {
        type: "p",
        text: "Não existe uma causa única. Fatores biológicos, histórico de vida, padrões de pensamento aprendidos ao longo dos anos e o contexto atual (sobrecarga de trabalho, mudanças importantes, incertezas) costumam se combinar. Por isso, tratar ansiedade raramente é sobre eliminar uma única causa — é sobre entender o conjunto de fatores que a mantêm ativa no seu dia a dia.",
      },
      {
        type: "h2",
        text: "Como a Terapia Cognitivo-Comportamental ajuda",
      },
      {
        type: "p",
        text: "A TCC trabalha diretamente com os pensamentos automáticos que alimentam a ansiedade — aquelas previsões catastróficas que surgem antes mesmo de você perceber — e com os comportamentos de evitação que, a curto prazo, aliviam o desconforto, mas a longo prazo mantêm o ciclo ansioso funcionando. O processo é estruturado: identificar os padrões, testar sua validade e, aos poucos, construir novas formas de reagir às situações que antes geravam tanta tensão.",
      },
      {
        type: "h2",
        text: "Quando procurar uma psicóloga",
      },
      {
        type: "p",
        text: "Se a ansiedade já está interferindo na sua qualidade de vida — seja no sono, no trabalho, nos relacionamentos ou na simples capacidade de aproveitar momentos bons — esse já é motivo suficiente para buscar apoio profissional. Não é preciso esperar uma crise para começar a cuidar disso.",
      },
    ],
  },
  {
    slug: "terapia-cognitivo-comportamental-como-funciona",
    title: "Terapia Cognitivo-Comportamental (TCC): como funciona e para quem é indicada",
    description:
      "Um guia direto sobre o que é a TCC, como são as sessões na prática e por que essa abordagem é uma das mais recomendadas cientificamente.",
    date: "2026-09-18",
    readingTime: "5 min de leitura",
    blocks: [
      {
        type: "p",
        text: "A Terapia Cognitivo-Comportamental (TCC) é uma das abordagens psicológicas mais estudadas e recomendadas internacionalmente, com décadas de pesquisa comprovando sua eficácia no tratamento de ansiedade, depressão, transtornos alimentares, procrastinação e dificuldades em relacionamentos, entre outros.",
      },
      {
        type: "h2",
        text: "A ideia central",
      },
      {
        type: "p",
        text: "A TCC parte de um princípio simples: pensamentos, emoções e comportamentos estão conectados e se influenciam mutuamente. Um pensamento automático negativo ('eu vou estragar tudo') gera uma emoção (ansiedade), que leva a um comportamento (evitar a situação), que por sua vez reforça o pensamento original. A terapia trabalha para identificar e interromper esse ciclo em pontos estratégicos.",
      },
      {
        type: "h2",
        text: "Como são as sessões, na prática",
      },
      {
        type: "p",
        text: "Diferente da imagem que muita gente tem de terapia como 'só conversar', a TCC é colaborativa e orientada a objetivos. Juntos, terapeuta e paciente definem metas claras, identificam padrões de pensamento específicos e desenvolvem estratégias práticas para lidar com eles. Muitas vezes há exercícios para serem praticados entre uma sessão e outra — não porque a terapia 'não seja suficiente' sozinha, mas porque mudanças reais acontecem quando novas formas de pensar e agir são testadas na vida real, não só dentro do consultório.",
      },
      {
        type: "h2",
        text: "Para quem é indicada",
      },
      {
        type: "p",
        text: "A TCC costuma ser especialmente eficaz para quem busca resultados tangíveis e está disposto a participar ativamente do processo — não é uma abordagem passiva. Funciona bem tanto para quadros específicos (como uma fobia ou transtorno de pânico) quanto para dificuldades mais amplas, como autoestima baixa, procrastinação crônica ou padrões repetitivos em relacionamentos.",
      },
      {
        type: "h2",
        text: "Quanto tempo leva",
      },
      {
        type: "p",
        text: "Não existe um número mágico de sessões — isso depende dos objetivos, da complexidade da situação e do ritmo de cada pessoa. O que costuma acontecer é que, já nas primeiras sessões, a pessoa passa a enxergar seus próprios padrões com mais clareza, o que por si só já traz alívio, mesmo antes das mudanças mais profundas se consolidarem.",
      },
    ],
  },
  {
    slug: "primeira-sessao-psicologa-araxa",
    title: "Primeira sessão de terapia: o que esperar (atendimento em Araxá e online)",
    description:
      "Tirando as dúvidas mais comuns de quem nunca fez terapia antes — como funciona a primeira consulta, sigilo e o que levar.",
    date: "2026-09-25",
    readingTime: "4 min de leitura",
    blocks: [
      {
        type: "p",
        text: "É normal sentir um misto de alívio e insegurança antes da primeira sessão de terapia — afinal, você está prestes a conversar abertamente com alguém que, até então, era um estranho. Entender como funciona esse primeiro encontro pode ajudar a reduzir essa ansiedade inicial.",
      },
      {
        type: "h2",
        text: "O que acontece na primeira sessão",
      },
      {
        type: "p",
        text: "A primeira sessão costuma ser dedicada a conhecer sua história: o que te trouxe até a terapia, como essas dificuldades têm afetado seu dia a dia, e o que você espera alcançar com o processo. Não é preciso chegar com um roteiro pronto ou saber explicar tudo com perfeição — o papel da psicóloga é justamente ajudar a organizar e compreender o que você está vivendo.",
      },
      {
        type: "h2",
        text: "Presencial em Araxá ou online",
      },
      {
        type: "p",
        text: "O atendimento acontece tanto presencialmente, no consultório em Araxá-MG, quanto online, por videochamada — sem restrição geográfica. Muitas pessoas preferem o formato online pela praticidade de encaixar na rotina sem deslocamento, e a eficácia da terapia online é respaldada pelas mesmas evidências científicas da modalidade presencial.",
      },
      {
        type: "h2",
        text: "Sigilo: um princípio inegociável",
      },
      {
        type: "p",
        text: "Tudo o que é conversado em sessão é confidencial, protegido pelo Código de Ética Profissional do Psicólogo. As únicas exceções previstas em lei envolvem situações de risco iminente à vida, e mesmo essas são discutidas abertamente com o paciente sempre que possível.",
      },
      {
        type: "h2",
        text: "Duração e frequência",
      },
      {
        type: "p",
        text: "As sessões duram cerca de 50 minutos, geralmente com frequência semanal — embora isso possa ser ajustado conforme a necessidade de cada pessoa ao longo do processo.",
      },
      {
        type: "p",
        text: "Se você está considerando dar esse primeiro passo, não precisa ter todas as respostas prontas. Às vezes, começar já é encontrar um espaço para compreender melhor o que você está vivendo.",
      },
    ],
  },
]

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

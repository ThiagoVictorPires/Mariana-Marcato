import { ContatoFinal } from "@/components/site/contato-final"
import { Dificuldades } from "@/components/site/dificuldades"
import { Faq } from "@/components/site/faq"
import { Footer } from "@/components/site/footer"
import { Hero } from "@/components/site/hero"
import { Indicado } from "@/components/site/indicado"
import { Navbar } from "@/components/site/navbar"
import { Processo } from "@/components/site/processo"
import { Sobre } from "@/components/site/sobre"
import { Tratamento } from "@/components/site/tratamento"
import { WhatsappFloat } from "@/components/site/whatsapp-float"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Tratamento />
        <Dificuldades />
        <Processo />
        <Indicado />
        <Faq />
        <ContatoFinal />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}

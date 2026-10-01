import { Reveal } from "@/components/site/reveal"

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5534984397438&text=Ol%C3%A1%20Mari%2C%20eu%20gostaria%20de%20agendar%20uma%20sess%C3%A3o."

export function Cta({ label = "Agendar primeira consulta" }: { label?: string }) {
  return (
    <Reveal className="flex justify-center py-4">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-full bg-[var(--brand-sage-dark)] px-8 py-3.5 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-white transition-all hover:bg-[var(--brand-terracotta)] hover:-translate-y-0.5"
      >
        {label}
      </a>
    </Reveal>
  )
}

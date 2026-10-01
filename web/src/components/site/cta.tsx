import { Reveal } from "@/components/site/reveal"
import { siteConfig } from "@/lib/site-config"

const WHATSAPP_URL = siteConfig.whatsappUrl

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

"use client"

import { motion } from "motion/react"

import { Reveal } from "@/components/site/reveal"
import { siteConfig } from "@/lib/site-config"

const WHATSAPP_URL = siteConfig.whatsappUrl

function WhatsappGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function ContatoFinal() {
  return (
    <section id="contato" className="bg-[var(--brand-text-dark)] px-4 py-20 text-center md:px-10">
      <Reveal className="mx-auto max-w-2xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#25D366] to-[#128C4A] px-6 py-16 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.55)] md:px-16 md:py-20">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mb-8 flex size-20 items-center justify-center rounded-full bg-white shadow-lg md:size-24"
        >
          <WhatsappGlyph className="size-10 text-[#128C4A] md:size-12" />
        </motion.div>

        <h2 className="mb-4 font-[family-name:var(--font-serif)] text-[clamp(1.9rem,3.2vw,2.9rem)] font-light leading-tight text-white">
          Vamos <em className="italic">conversar</em>?
        </h2>
        <p className="mx-auto mb-10 max-w-md text-[0.95rem] leading-[1.9] text-white/90">
          Se você acredita que este pode ser o momento de cuidar da sua
          saúde mental, será um prazer acompanhar você nesse processo.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#128C4A] shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          <WhatsappGlyph className="size-4" />
          Entre em contato
        </a>
      </Reveal>
    </section>
  )
}

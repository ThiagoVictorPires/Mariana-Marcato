"use client"

import Image from "next/image"
import { motion } from "motion/react"

import { Annotate } from "@/components/site/annotate"
import { siteConfig } from "@/lib/site-config"

const WHATSAPP_URL = siteConfig.whatsappUrl

export function Hero() {
  return (
    <section
      id="home"
      className="relative grid min-h-svh grid-cols-1 overflow-hidden md:grid-cols-2"
    >
      <div className="relative z-10 flex flex-col justify-center px-6 pb-16 pt-32 md:px-14 md:pb-20 md:pt-36 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-7 flex items-center gap-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--brand-sage-dark)]"
        >
          <span className="h-px w-8 bg-[var(--brand-sage-dark)]" />
          Psicóloga em Araxá
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-7 font-[family-name:var(--font-serif)] text-[clamp(2.4rem,5.2vw,4.4rem)] font-light leading-[1.12] text-[var(--brand-text-dark)]"
        >
          Entender o que está acontecendo é o{" "}
          <Annotate type="circle" color="var(--brand-terracotta)" strokeWidth={2} padding={6} delay={1000}>
            <em className="text-[var(--brand-terracotta)] not-italic font-light italic">
              primeiro passo
            </em>
          </Annotate>{" "}
          para mudar.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-10 max-w-md text-[1rem] leading-relaxed text-[var(--brand-text-mid)]"
        >
          Tratamentos fundamentados na ciência para ajudar você a compreender
          suas dificuldades, desenvolver novas habilidades e construir uma
          vida com mais equilíbrio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center gap-6"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-[var(--brand-sage-dark)] px-8 py-3.5 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-white transition-all hover:bg-[var(--brand-terracotta)] hover:-translate-y-0.5"
          >
            Agendar primeira consulta
          </a>
          <span className="text-[0.78rem] text-[var(--brand-text-light)]">
            <span className="text-[var(--brand-sage)]">&#10003;</span> Online
            &amp; Presencial
          </span>
        </motion.div>
      </div>

      <div className="relative h-[55vh] p-4 md:h-auto md:py-10 md:pr-10 lg:pr-16">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative size-full overflow-hidden rounded-[1.75rem] bg-[var(--brand-cream)] shadow-[0_30px_70px_-20px_rgba(42,31,26,0.35)]"
        >
          <Image
            src="/foto_principal.jpg"
            alt="Mariana Marcato, psicóloga"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top mix-blend-multiply [filter:sepia(8%)_contrast(1.04)]"
          />
          {/* Scrim so the fixed navbar stays legible over any part of the photo */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-black/50 via-black/15 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

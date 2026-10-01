"use client"

import * as React from "react"
import { motion, useMotionValueEvent, useScroll } from "motion/react"

import { siteConfig } from "@/lib/site-config"

const LINKS = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#tratamento", label: "Tratamento" },
  { href: "/#dificuldades", label: "Dificuldades" },
  { href: "/#processo", label: "Processo" },
  { href: "/#faq", label: "Dúvidas" },
  { href: "/blog", label: "Blog" },
]

const WHATSAPP_URL = siteConfig.whatsappUrl

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40)
  })

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--brand-warm-white)]/70 backdrop-blur-md shadow-[0_1px_0_0_var(--brand-border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="/"
          className="font-[family-name:var(--font-serif)] text-[1.05rem] font-light tracking-wide text-[var(--brand-text-dark)]/90"
        >
          Mariana <span className="text-[var(--brand-sage-dark)]/80">Marcato</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-[0.7rem] font-light uppercase tracking-[0.14em] text-[var(--brand-text-mid)]/70 transition-colors hover:text-[var(--brand-sage-dark)]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--brand-sage-dark)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--brand-sage-dark)]/30 px-4 py-1.5 text-[0.7rem] font-light uppercase tracking-[0.12em] text-[var(--brand-sage-dark)] transition-colors hover:border-[var(--brand-sage-dark)] hover:bg-[var(--brand-sage-dark)] hover:text-white"
            >
              Agendar
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((o) => !o)}
          className="flex size-11 -mr-2.5 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-[var(--brand-text-dark)]/70 transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-[var(--brand-text-dark)]/70 transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex flex-col gap-1 overflow-hidden rounded-b-2xl bg-[var(--brand-warm-white)]/95 px-6 pb-6 shadow-[0_20px_40px_-20px_rgba(42,31,26,0.25)] backdrop-blur-md md:hidden"
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-xs font-light uppercase tracking-[0.14em] text-[var(--brand-text-mid)]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full border border-[var(--brand-sage-dark)]/30 px-4 py-1.5 text-xs font-light uppercase tracking-[0.12em] text-[var(--brand-sage-dark)]"
            >
              Agendar
            </a>
          </li>
        </motion.ul>
      )}
    </motion.header>
  )
}

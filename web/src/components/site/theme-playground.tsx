"use client"

/**
 * TEMPORARY DEMO TOOL — not part of the final site.
 *
 * Lets the client preview different color palettes live, directly in the
 * browser, without touching code. To remove it once a palette is chosen:
 *   1. Delete this file.
 *   2. Delete src/lib/color-utils.ts (only used by this file).
 *   3. Remove <ThemePlayground /> from src/app/layout.tsx.
 *   4. Hardcode the chosen hex values into the --brand-* variables in
 *      src/app/globals.css (replacing the current defaults there).
 */

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"

import { deriveShades } from "@/lib/color-utils"

interface Palette {
  name: string
  primary: string // maps to --brand-sage family (buttons, accents)
  accent: string // maps to --brand-terracotta family (highlights, links)
  cream: string // maps to --brand-cream (section backgrounds)
}

const PRESETS: Palette[] = [
  { name: "Sálvia & Terracota (atual)", primary: "#5C7A5B", accent: "#C4896A", cream: "#F5F0E8" },
  { name: "Lavanda & Dourado", primary: "#7C6FA3", accent: "#C9A24B", cream: "#F3EFF8" },
  { name: "Azul Petróleo & Coral", primary: "#3E6E78", accent: "#E08E79", cream: "#EEF3F3" },
  { name: "Rosa Empoeirado & Oliva", primary: "#8B7355", accent: "#C98A96", cream: "#F7EFEC" },
  { name: "Terroso & Creme", primary: "#8A6F4E", accent: "#B86B4B", cream: "#F6F1E7" },
  { name: "Verde Floresta & Mostarda", primary: "#3F5A45", accent: "#C99A3E", cream: "#F2F0E4" },
]

const VARS = {
  sageLight: "--brand-sage-light",
  sage: "--brand-sage",
  sageDark: "--brand-sage-dark",
  terracottaLight: "--brand-terracotta-light",
  terracotta: "--brand-terracotta",
  cream: "--brand-cream",
  border: "--brand-border",
}

function applyPalette(p: Palette) {
  const root = document.documentElement
  const sage = deriveShades(p.primary)
  const terracotta = deriveShades(p.accent)

  root.style.setProperty(VARS.sageLight, sage.light)
  root.style.setProperty(VARS.sage, sage.base)
  root.style.setProperty(VARS.sageDark, sage.dark)
  root.style.setProperty(VARS.terracottaLight, terracotta.light)
  root.style.setProperty(VARS.terracotta, terracotta.base)
  root.style.setProperty(VARS.cream, p.cream)
  root.style.setProperty(VARS.border, `${sage.base}40`)
}

function resetPalette() {
  const root = document.documentElement
  Object.values(VARS).forEach((v) => root.style.removeProperty(v))
}

const STORAGE_KEY = "mm-theme-playground"

export function ThemePlayground() {
  const [open, setOpen] = React.useState(false)
  const [custom, setCustom] = React.useState<Palette>(PRESETS[0])
  const [activePreset, setActivePreset] = React.useState<string | null>(PRESETS[0].name)

  React.useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const p: Palette = JSON.parse(saved)
        setCustom(p)
        setActivePreset(PRESETS.find((pr) => pr.primary === p.primary && pr.accent === p.accent)?.name ?? null)
        applyPalette(p)
      } catch {
        // ignore malformed saved value
      }
    }
  }, [])

  function choosePreset(p: Palette) {
    setCustom(p)
    setActivePreset(p.name)
    applyPalette(p)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
  }

  function updateCustom(key: keyof Palette, value: string) {
    const next = { ...custom, [key]: value, name: "Personalizado" }
    setCustom(next)
    setActivePreset(null)
    applyPalette(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }

  function handleReset() {
    resetPalette()
    setCustom(PRESETS[0])
    setActivePreset(PRESETS[0].name)
    localStorage.removeItem(STORAGE_KEY)
  }

  const [copied, setCopied] = React.useState(false)
  function handleCopy() {
    const text = `Cor principal: ${custom.primary}\nCor de destaque: ${custom.accent}\nFundo: ${custom.cream}`
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <div className="fixed bottom-7 left-7 z-[60] print:hidden">
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 rounded-full bg-[var(--brand-text-dark)] px-4 py-3 text-xs font-medium uppercase tracking-wide text-white shadow-xl"
        aria-label="Testar paleta de cores"
      >
        🎨 {open ? "Fechar" : "Cores"}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 left-0 w-[300px] rounded-2xl border border-black/10 bg-white p-5 text-left shadow-2xl"
          >
            <p className="mb-1 text-sm font-semibold text-neutral-800">
              Testar paleta de cores
            </p>
            <p className="mb-4 text-xs leading-relaxed text-neutral-500">
              Clique num preset ou ajuste as cores. É só pra visualização —
              nada é salvo no site de verdade.
            </p>

            <div className="mb-4 grid grid-cols-2 gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => choosePreset(p)}
                  className={`flex flex-col items-start gap-1.5 rounded-lg border p-2 text-left transition-colors ${
                    activePreset === p.name
                      ? "border-neutral-800"
                      : "border-neutral-200 hover:border-neutral-400"
                  }`}
                >
                  <span className="flex gap-1">
                    <span
                      className="size-4 rounded-full border border-black/10"
                      style={{ background: p.primary }}
                    />
                    <span
                      className="size-4 rounded-full border border-black/10"
                      style={{ background: p.accent }}
                    />
                    <span
                      className="size-4 rounded-full border border-black/10"
                      style={{ background: p.cream }}
                    />
                  </span>
                  <span className="text-[0.68rem] leading-tight text-neutral-600">
                    {p.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="mb-4 flex flex-col gap-2.5 border-t border-neutral-100 pt-4">
              <p className="text-[0.7rem] font-medium uppercase tracking-wide text-neutral-400">
                Ou ajuste manualmente
              </p>
              <label className="flex items-center justify-between text-xs text-neutral-600">
                Cor principal
                <input
                  type="color"
                  value={custom.primary}
                  onChange={(e) => updateCustom("primary", e.target.value)}
                  className="size-7 cursor-pointer rounded border border-neutral-300"
                />
              </label>
              <label className="flex items-center justify-between text-xs text-neutral-600">
                Cor de destaque
                <input
                  type="color"
                  value={custom.accent}
                  onChange={(e) => updateCustom("accent", e.target.value)}
                  className="size-7 cursor-pointer rounded border border-neutral-300"
                />
              </label>
              <label className="flex items-center justify-between text-xs text-neutral-600">
                Fundo das seções
                <input
                  type="color"
                  value={custom.cream}
                  onChange={(e) => updateCustom("cream", e.target.value)}
                  className="size-7 cursor-pointer rounded border border-neutral-300"
                />
              </label>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 rounded-lg bg-neutral-800 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-700"
              >
                {copied ? "Copiado ✓" : "Copiar cores"}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg border border-neutral-200 px-3 py-2 text-xs text-neutral-500 transition-colors hover:border-neutral-400"
              >
                Original
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

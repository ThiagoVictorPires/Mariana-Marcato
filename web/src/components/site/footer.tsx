export function Footer() {
  return (
    <footer className="bg-[var(--brand-text-dark)] px-6 pb-10 pt-10 text-center md:px-14 lg:px-20">
      <div className="mx-auto max-w-5xl border-t border-white/10 pt-8">
        <p className="font-[family-name:var(--font-serif)] text-lg font-light text-[var(--brand-cream)]">
          Mariana Marcato
        </p>
        <p className="mt-1 text-[0.72rem] tracking-[0.08em] text-[var(--brand-sage-light)]">
          Psicóloga Clínica · CRP: 04/65485
        </p>
        <p className="mt-6 text-[0.75rem] text-[var(--brand-cream)]/35">
          &copy; {new Date().getFullYear()} Mariana Marcato — Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}

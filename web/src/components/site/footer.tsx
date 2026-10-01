import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[var(--brand-text-dark)] px-6 pb-10 pt-10 text-center md:px-14 lg:px-20">
      <div className="mx-auto max-w-5xl border-t border-white/10 pt-8">
        <Image
          src="/logo-completo.png"
          alt="Mariana Marcato Psicologia"
          width={1536}
          height={1024}
          className="mx-auto h-24 w-auto md:h-28"
        />
        <p className="mt-1 text-[0.72rem] tracking-[0.08em] text-[var(--brand-sage-light)]">
          Psicóloga Clínica · CRP: 04/65485
        </p>
        <nav className="mt-6 flex items-center justify-center gap-6 text-[0.75rem] text-[var(--brand-cream)]/50">
          <Link href="/blog" className="transition-colors hover:text-[var(--brand-cream)]">
            Blog
          </Link>
          <Link href="/politica-de-privacidade" className="transition-colors hover:text-[var(--brand-cream)]">
            Política de Privacidade
          </Link>
        </nav>
        <p className="mt-6 text-[0.75rem] text-[var(--brand-cream)]/35">
          &copy; {new Date().getFullYear()} Mariana Marcato — Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}

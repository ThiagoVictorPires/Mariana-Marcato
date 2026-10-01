import type { Metadata } from "next"
import Link from "next/link"

import { Footer } from "@/components/site/footer"
import { Navbar } from "@/components/site/navbar"
import { BLOG_POSTS } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Textos sobre ansiedade, terapia cognitivo-comportamental e saúde mental, escritos por Mariana Marcato, psicóloga em Araxá-MG.",
  alternates: { canonical: "/blog" },
}

function formatDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36 md:px-14 lg:px-0">
        <p className="mb-2 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--brand-terracotta)]">
          Blog
        </p>
        <h1 className="mb-4 font-[family-name:var(--font-serif)] text-[clamp(2.2rem,4.5vw,3.2rem)] font-light leading-tight text-[var(--brand-text-dark)]">
          Textos sobre <em className="italic text-[var(--brand-sage-dark)]">saúde mental</em>
        </h1>
        <p className="mb-16 max-w-xl text-[0.95rem] leading-[1.8] text-[var(--brand-text-mid)]">
          Reflexões e orientações práticas sobre ansiedade, terapia e
          autoconhecimento, escritas para ajudar você a entender melhor o
          que está vivendo.
        </p>

        <div className="flex flex-col divide-y divide-[var(--brand-border)] border-t border-[var(--brand-border)]">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group -mx-6 flex flex-col gap-2 rounded-2xl px-6 py-8 transition-colors hover:bg-[var(--brand-cream)]/70"
            >
              <span className="text-[0.75rem] uppercase tracking-[0.1em] text-[var(--brand-text-light)]">
                {formatDate(post.date)} · {post.readingTime}
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-xl font-normal text-[var(--brand-text-dark)] transition-colors group-hover:text-[var(--brand-sage-dark)] md:text-2xl">
                {post.title}
              </h2>
              <p className="text-[0.9rem] leading-relaxed text-[var(--brand-text-mid)]">
                {post.description}
              </p>
              <span className="mt-1 inline-flex items-center gap-1.5 text-[0.78rem] uppercase tracking-[0.1em] text-[var(--brand-sage-dark)]">
                Ler artigo
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

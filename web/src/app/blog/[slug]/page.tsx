import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Cta } from "@/components/site/cta"
import { Footer } from "@/components/site/footer"
import { Navbar } from "@/components/site/navbar"
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-posts"

function formatDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 pb-16 pt-36 md:px-14 lg:px-0">
        <Link
          href="/blog"
          className="mb-10 inline-block text-[0.78rem] uppercase tracking-[0.12em] text-[var(--brand-sage-dark)] hover:underline"
        >
          ← Voltar para o blog
        </Link>

        <span className="mb-4 block text-[0.75rem] uppercase tracking-[0.1em] text-[var(--brand-text-light)]">
          {formatDate(post.date)} · {post.readingTime}
        </span>
        <h1 className="mb-10 font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,2.8rem)] font-light leading-tight text-[var(--brand-text-dark)]">
          {post.title}
        </h1>

        <article className="flex flex-col gap-5">
          {post.blocks.map((block, index) =>
            block.type === "h2" ? (
              <h2
                key={index}
                className="mt-4 font-[family-name:var(--font-serif)] text-xl font-normal text-[var(--brand-text-dark)]"
              >
                {block.text}
              </h2>
            ) : (
              <p
                key={index}
                className="text-[0.95rem] leading-[1.9] text-[var(--brand-text-mid)]"
              >
                {block.text}
              </p>
            )
          )}
        </article>
      </main>

      <div className="mx-auto max-w-2xl px-6 pb-24 md:px-14 lg:px-0">
        <Cta />
      </div>

      <Footer />
    </>
  )
}

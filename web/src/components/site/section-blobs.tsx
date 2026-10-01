interface SectionBlobsProps {
  variant?: "light" | "dark"
}

/** Soft blurred color shapes placed behind a section's content for depth.
 * The parent section needs `relative overflow-hidden`. */
export function SectionBlobs({ variant = "light" }: SectionBlobsProps) {
  const a = variant === "light" ? "bg-[var(--brand-terracotta)]" : "bg-[var(--brand-sage)]"
  const b = variant === "light" ? "bg-[var(--brand-sage-dark)]" : "bg-[var(--brand-terracotta)]"

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className={`absolute -left-[10%] -top-[15%] size-[55vw] max-w-[560px] rounded-full ${a} opacity-40 blur-[90px]`}
      />
      <div
        className={`absolute -right-[12%] bottom-[-20%] size-[45vw] max-w-[480px] rounded-full ${b} opacity-35 blur-[90px]`}
      />
    </div>
  )
}

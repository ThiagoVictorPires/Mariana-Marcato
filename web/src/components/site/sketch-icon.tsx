import rough from "roughjs"
import type { Drawable } from "roughjs/bin/core"

// Pure computation (no canvas/DOM needed), so this renders fully on the
// server — zero client JS for these icons.
const generator = rough.generator()

const BASE_OPTIONS = {
  roughness: 1.6,
  bowing: 1,
  strokeWidth: 1.8,
  stroke: "currentColor",
  fill: "none",
  // Fixed seed: rough.js is randomized by default, which would make the
  // server-rendered markup differ from the client's re-render (hydration
  // mismatch). A constant seed makes the "hand-drawn" look deterministic.
  seed: 1,
} as const

function spiralPoints(cx: number, cy: number, turns: number, maxR: number): [number, number][] {
  const points: [number, number][] = []
  const steps = 60
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const angle = t * turns * Math.PI * 2
    const r = t * maxR
    points.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)])
  }
  return points
}

const ICONS: Record<string, () => Drawable[]> = {
  tristeza: () => [
    generator.circle(22, 24, 20, BASE_OPTIONS),
    generator.circle(34, 20, 22, BASE_OPTIONS),
    generator.circle(45, 25, 17, BASE_OPTIONS),
    generator.line(20, 40, 17, 50, BASE_OPTIONS),
    generator.line(32, 40, 29, 52, BASE_OPTIONS),
    generator.line(44, 40, 41, 50, BASE_OPTIONS),
  ],
  preocupacoes: () => [generator.curve(spiralPoints(32, 32, 2.6, 18), BASE_OPTIONS)],
  procrastinacao: () => [
    generator.circle(32, 32, 38, BASE_OPTIONS),
    generator.line(32, 32, 32, 16, BASE_OPTIONS),
    generator.line(32, 32, 43, 36, BASE_OPTIONS),
  ],
  autocritica: () => [
    generator.rectangle(14, 10, 36, 44, BASE_OPTIONS),
    generator.linearPath(
      [
        [26, 10],
        [22, 24],
        [30, 30],
        [24, 44],
        [24, 54],
      ],
      BASE_OPTIONS
    ),
  ],
  alimentacao: () => [
    generator.circle(32, 36, 34, BASE_OPTIONS),
    generator.line(16, 12, 24, 30, BASE_OPTIONS),
    generator.line(24, 12, 16, 30, BASE_OPTIONS),
    generator.line(48, 12, 40, 30, BASE_OPTIONS),
  ],
  foco: () => [
    generator.circle(32, 32, 14, BASE_OPTIONS),
    generator.line(32, 14, 32, 6, BASE_OPTIONS),
    generator.line(32, 50, 32, 58, BASE_OPTIONS),
    generator.line(14, 32, 6, 32, BASE_OPTIONS),
    generator.line(50, 32, 58, 32, BASE_OPTIONS),
    generator.line(19, 19, 13, 13, BASE_OPTIONS),
    generator.line(45, 45, 51, 51, BASE_OPTIONS),
    generator.line(45, 19, 51, 13, BASE_OPTIONS),
  ],
  relacionamentos: () => [
    generator.circle(26, 32, 28, BASE_OPTIONS),
    generator.circle(38, 32, 28, BASE_OPTIONS),
  ],
}

interface SketchIconProps {
  name: keyof typeof ICONS
  className?: string
}

// Collapses sub-ULP floating point differences between the server's and
// the browser's JS engine (trig functions aren't guaranteed bit-identical
// across environments) so the markup is byte-identical and never triggers
// a hydration mismatch.
function roundPath(d: string) {
  return d.replace(/-?\d+\.\d+/g, (n) => Number(n).toFixed(2))
}

export function SketchIcon({ name, className }: SketchIconProps) {
  const drawables = ICONS[name]()
  const paths = drawables.flatMap((d) => generator.toPaths(d))

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {paths.map((p, i) => (
        <path
          key={i}
          d={roundPath(p.d)}
          stroke={p.stroke}
          strokeWidth={p.strokeWidth}
          fill={p.fill ?? "none"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  )
}

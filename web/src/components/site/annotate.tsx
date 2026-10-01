"use client"

import * as React from "react"
import { RoughNotation } from "react-rough-notation"
import type { RoughNotationProps } from "react-rough-notation"
import { useInView } from "motion/react"

interface AnnotateProps extends Omit<RoughNotationProps, "show"> {
  children: React.ReactNode
  delay?: number
}

export function Annotate({ children, delay = 400, ...props }: AnnotateProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" })

  return (
    <span ref={ref} className="relative inline-block">
      <RoughNotation show={inView} animationDelay={delay} {...props}>
        {children}
      </RoughNotation>
    </span>
  )
}

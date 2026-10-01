"use client"

import * as React from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { getAnalytics, isSupported, logEvent, type Analytics } from "firebase/analytics"

import { firebaseApp } from "@/lib/firebase"

export function FirebaseAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const analyticsRef = React.useRef<Analytics | null>(null)

  React.useEffect(() => {
    isSupported().then((supported) => {
      if (supported) analyticsRef.current = getAnalytics(firebaseApp)
    })
  }, [])

  React.useEffect(() => {
    if (!analyticsRef.current) return
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "")
    logEvent(analyticsRef.current, "page_view", { page_path: url })
  }, [pathname, searchParams])

  return null
}

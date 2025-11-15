"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { DesignSystemShowcase } from "@/components/design-system-showcase"

export default function Page() {
  return (
    <ThemeProvider defaultTheme="dark">
      <DesignSystemShowcase />
    </ThemeProvider>
  )
}

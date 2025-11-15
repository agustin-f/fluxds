"use client"

import { Navigation } from "./navigation"
import { Footer } from "./footer"
import { ColorPalette } from "./color-palette"
import { TypographySection } from "./typography-section"
import { GridSpecifications } from "./grid-specifications"
import { SizesAndSpacings } from "./sizes-and-spacings"
import { ShadowsSection } from "./shadows-section"
import { ResponsiveTemplate } from "./responsive-template"
import { ComponentsSection } from "./components-section"
import { HeroSection } from "./hero-section"
import { ContactTemplate } from "./contact-template"
import { TokensExport } from "./tokens-export"

export function DesignSystemShowcase() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <HeroSection />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <div id="typography">
          <TypographySection />
        </div>

        <div id="colors">
          <ColorPalette />
        </div>

        <div id="tokens">
          <TokensExport />
        </div>

        <div id="grid">
          <GridSpecifications />
        </div>

        <div id="spacing">
          <SizesAndSpacings />
        </div>

        <div id="shadows">
          <ShadowsSection />
        </div>

        <div id="components">
          <ComponentsSection />
        </div>

        <div id="template">
          <ResponsiveTemplate />
        </div>

        <div id="contact-template">
          <ContactTemplate />
        </div>
      </div>

      <Footer />
    </div>
  )
}

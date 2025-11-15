"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Monitor, Smartphone } from "lucide-react"

export function ResponsiveTemplate() {
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop")

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
        <div>
          <h2 className="text-xl font-semibold">Responsive Template Example</h2>
          <p className="text-sm text-gray-400 mt-1">
            Example of a responsive layout using the FLUX design system with proper grid, spacing, and color tokens.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={viewport === "desktop" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewport("desktop")}
            className="gap-2"
          >
            <Monitor className="h-4 w-4" />
            Desktop
          </Button>
          <Button
            variant={viewport === "mobile" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewport("mobile")}
            className="gap-2"
          >
            <Smartphone className="h-4 w-4" />
            Mobile
          </Button>
        </div>
      </div>

      <div className={`mx-auto transition-all duration-300 ${viewport === "mobile" ? "max-w-sm" : "w-full"}`}>
        <div className="border border-gray-700 rounded-lg overflow-hidden bg-gray-900/50">
          <div className="p-4 space-y-6">
            {/* Hero Section */}
            <Card className="bg-gradient-to-br from-mono-600 to-mono-800 border-mono-700 p-8 md:p-12">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Build Better Products with FLUX</h1>
                <p className="text-lg md:text-xl text-mono-100 mb-8">
                  A comprehensive design system that helps you create consistent, accessible, and beautiful user
                  interfaces.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-mono-900 hover:bg-mono-50">
                    Get Started
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    View Documentation
                  </Button>
                </div>
              </div>
            </Card>

            {/* Feature Grid */}
            <div
              className={`grid gap-6 ${viewport === "mobile" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
            >
              {features.map((feature, index) => (
                <Card key={index} className="bg-card border-gray-800 p-6 hover:border-mono-600 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-mono-600/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-mono-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </Card>
              ))}
            </div>

            {/* Stats Section */}
            <div className={`grid gap-6 ${viewport === "mobile" ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4"}`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-mono-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Content Section */}
            <div className={`grid gap-8 items-center ${viewport === "mobile" ? "grid-cols-1" : "md:grid-cols-2"}`}>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Designed for Scale</h2>
                <p className="text-gray-400 leading-relaxed">
                  FLUX provides a complete set of design tokens, components, and guidelines to help your team build
                  consistent experiences across all platforms and devices.
                </p>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-mono-600/20 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-mono-400" />
                      </div>
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-gray-700">
                <div className="space-y-4">
                  <div className="h-4 bg-mono-600 rounded w-3/4" />
                  <div className="h-4 bg-gray-600 rounded w-full" />
                  <div className="h-4 bg-gray-600 rounded w-5/6" />
                  <div className="h-32 bg-gray-700 rounded mt-6" />
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="h-20 bg-mono-700 rounded" />
                    <div className="h-20 bg-mono-700 rounded" />
                    <div className="h-20 bg-mono-700 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    title: "Customizable",
    description: "Easily adapt colors, typography, and spacing to match your brand identity.",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Responsive",
    description: "Built with mobile-first approach ensuring perfect display on all devices.",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Accessible",
    description: "WCAG compliant with proper contrast ratios and semantic HTML structure.",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Performance",
    description: "Optimized for speed with minimal CSS and efficient component architecture.",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    title: "Component Library",
    description: "Pre-built components ready to use with consistent styling and behavior.",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: "Documentation",
    description: "Comprehensive guides and examples to help you get started quickly.",
  },
]

const stats = [
  { value: "50+", label: "Components" },
  { value: "100%", label: "Responsive" },
  { value: "WCAG AA", label: "Accessible" },
  { value: "12", label: "Grid Columns" },
]

const benefits = [
  "Consistent design language across all products",
  "Faster development with reusable components",
  "Improved collaboration between design and development",
  "Built-in accessibility and responsive behavior",
  "Easy to maintain and scale as your product grows",
]

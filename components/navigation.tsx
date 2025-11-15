"use client"

import { useState } from "react"
import { FluxLogo } from "./flux-logo"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X, Search } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const navItems = [
    { label: "Introduction", href: "#introduction" },
    { label: "Foundations", href: "#foundations", hasDropdown: true },
    { label: "Components", href: "#components" },
  ]

  const foundationItems = [
    { label: "Colors", href: "#colors" },
    { label: "Typography", href: "#typography" },
    { label: "Grid", href: "#grid" },
    { label: "Spacing", href: "#spacing" },
    { label: "Shadows", href: "#shadows" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <FluxLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-white flex items-center gap-1"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-2">
                    {foundationItems.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search sections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-mono-500 focus:border-transparent"
              />
            </div>

            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-800 md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <div key={item.href}>
                <a
                  href={item.href}
                  onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  {item.label}
                </a>
                {item.hasDropdown && (
                  <div className="ml-4 space-y-1">
                    {foundationItems.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-gray-400 hover:bg-gray-800 hover:text-white"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

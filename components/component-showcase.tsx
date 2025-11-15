"use client"

import type React from "react"

import { useState } from "react"
import { CopyButton } from "./copy-button"
import { Check } from "lucide-react"

interface ComponentExample {
  name: string
  description: string
  preview: React.ReactNode
  code: string
}

export function ComponentShowcase() {
  const components: ComponentExample[] = [
    {
      name: "Button Primary",
      description: "Primary action button with hover and active states",
      preview: (
        <button className="px-6 py-3 bg-mono-600 text-white rounded-lg font-medium hover:bg-mono-700 active:bg-mono-800 transition-colors">
          Primary Button
        </button>
      ),
      code: `<button className="px-6 py-3 bg-mono-600 text-white rounded-lg font-medium hover:bg-mono-700 active:bg-mono-800 transition-colors">
  Primary Button
</button>`,
    },
    {
      name: "Button Accent",
      description: "Accent button for secondary actions",
      preview: (
        <button className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 active:bg-red-700 transition-colors">
          Accent Button
        </button>
      ),
      code: `<button className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 active:bg-red-700 transition-colors">
  Accent Button
</button>`,
    },
    {
      name: "Button Muted",
      description: "Muted button for tertiary actions",
      preview: (
        <button className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600 hover:text-white transition-colors">
          Muted Button
        </button>
      ),
      code: `<button className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600 hover:text-white transition-colors">
  Muted Button
</button>`,
    },
    {
      name: "Card",
      description: "Basic card component with shadow and border",
      preview: (
        <div className="w-full max-w-sm p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-2">Card Title</h3>
          <p className="text-gray-400 text-sm">
            This is a card component with a title and description. Perfect for displaying content in a structured way.
          </p>
        </div>
      ),
      code: `<div className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
  <h3 className="text-xl font-semibold text-white mb-2">Card Title</h3>
  <p className="text-gray-400 text-sm">
    This is a card component with a title and description.
  </p>
</div>`,
    },
    {
      name: "Input Field",
      description: "Text input with focus states",
      preview: (
        <input
          type="text"
          placeholder="Enter your text..."
          className="w-full max-w-sm px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-mono-500 focus:border-transparent transition-all"
        />
      ),
      code: `<input
  type="text"
  placeholder="Enter your text..."
  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-mono-500 focus:border-transparent"
/>`,
    },
    {
      name: "Badge",
      description: "Status badge component",
      preview: (
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-mono-600 text-white text-xs font-medium rounded-full">Active</span>
          <span className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">Success</span>
          <span className="px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full">Error</span>
        </div>
      ),
      code: `<span className="px-3 py-1 bg-mono-600 text-white text-xs font-medium rounded-full">
  Active
</span>`,
    },
    {
      name: "Alert",
      description: "Alert message component",
      preview: (
        <div className="w-full max-w-sm p-4 bg-mono-900 border border-mono-700 rounded-lg flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-mono-600 flex items-center justify-center">
            <Check className="w-3 h-3 text-white" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1">Success!</h4>
            <p className="text-xs text-gray-400">Your changes have been saved successfully.</p>
          </div>
        </div>
      ),
      code: `<div className="p-4 bg-mono-900 border border-mono-700 rounded-lg flex items-start gap-3">
  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-mono-600 flex items-center justify-center">
    <CheckIcon />
  </div>
  <div>
    <h4 className="text-sm font-semibold text-white mb-1">Success!</h4>
    <p className="text-xs text-gray-400">Your changes have been saved.</p>
  </div>
</div>`,
    },
    {
      name: "Toggle Switch",
      description: "Toggle switch component",
      preview: <ToggleSwitch />,
      code: `const [enabled, setEnabled] = useState(false)

<button
  onClick={() => setEnabled(!enabled)}
  className={\`relative inline-flex h-6 w-11 items-center rounded-full transition-colors \${
    enabled ? 'bg-mono-600' : 'bg-gray-700'
  }\`}
>
  <span className={\`inline-block h-4 w-4 transform rounded-full bg-white transition-transform \${
    enabled ? 'translate-x-6' : 'translate-x-1'
  }\`} />
</button>`,
    },
  ]

  return (
    <section id="components" className="py-16">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Components</h2>
        <p className="text-gray-400 text-lg">
          Ready-to-use components built with the FLUX design system. Copy the code and use them in your projects.
        </p>
      </div>

      <div className="grid gap-8">
        {components.map((component) => (
          <div key={component.name} className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/50">
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{component.name}</h3>
                  <p className="text-sm text-gray-400">{component.description}</p>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="p-8 bg-gray-950 border-b border-gray-800 flex items-center justify-center min-h-[200px]">
              {component.preview}
            </div>

            {/* Code */}
            <div className="relative">
              <div className="absolute top-4 right-4 z-10">
                <CopyButton value={component.code} />
              </div>
              <pre className="p-6 overflow-x-auto">
                <code className="text-sm text-gray-300 font-mono">{component.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false)

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? "bg-mono-600" : "bg-gray-700"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  )
}

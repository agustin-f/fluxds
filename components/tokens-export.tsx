"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

// Helper function to convert hex to RGB
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return "rgb(0, 0, 0)"

  const r = Number.parseInt(result[1], 16)
  const g = Number.parseInt(result[2], 16)
  const b = Number.parseInt(result[3], 16)

  return `rgb(${r}, ${g}, ${b})`
}

// Generate tokens array in the requested format
const generateTokensArray = () => {
  const monoColors = [
    { token: "mono-50", hex: "#e9f0ff" },
    { token: "mono-100", hex: "#d4e0ff" },
    { token: "mono-200", hex: "#b0c7ff" },
    { token: "mono-300", hex: "#8aadff" },
    { token: "mono-400", hex: "#5e8eff" },
    { token: "mono-500", hex: "#3a7dff" },
    { token: "mono-600", hex: "#2e6ee6" },
    { token: "mono-700", hex: "#2559b3" },
    { token: "mono-800", hex: "#1d4580" },
    { token: "mono-900", hex: "#142e4d" },
  ]

  const grayColors = [
    { token: "gray-50", hex: "#ffffff" },
    { token: "gray-100", hex: "#f9fafb" },
    { token: "gray-200", hex: "#f3f4f6" },
    { token: "gray-300", hex: "#e5e7eb" },
    { token: "gray-400", hex: "#d1d5db" },
    { token: "gray-500", hex: "#9ca3af" },
    { token: "gray-600", hex: "#6b7280" },
    { token: "gray-700", hex: "#4b5563" },
    { token: "gray-800", hex: "#1f2937" },
    { token: "gray-900", hex: "#111827" },
    { token: "gray-1000", hex: "#000000" },
  ]

  const allColors = [...monoColors, ...grayColors]

  return allColors.map((color) => ({
    hex: color.hex,
    rgb: hexToRgb(color.hex),
    token: color.token,
  }))
}

export function TokensExport() {
  const [copied, setCopied] = useState(false)
  const tokens = generateTokensArray()
  const jsonString = JSON.stringify(tokens, null, 2)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(jsonString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Design Tokens (JSON)</h2>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 bg-mono-600 hover:bg-mono-700 text-white rounded-lg transition-colors text-sm font-medium"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy JSON
            </>
          )}
        </button>
      </div>

      <div className="relative">
        {/* Code block with CodePen-style black background */}
        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-gray-700">
          <div className="bg-[#2d2d2d] px-4 py-2 border-b border-gray-700 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-mono">tokens.json</span>
            <span className="text-xs text-gray-500">{tokens.length} tokens</span>
          </div>

          <div className="p-6 overflow-x-auto">
            <pre className="text-sm font-mono">
              <code className="text-gray-300">
                <span className="text-gray-500">[</span>
                {tokens.map((token, index) => (
                  <span key={token.token}>
                    {"\n"}
                    <span className="text-gray-500"> {"{"}</span>
                    {"\n"}
                    <span className="text-gray-500"> </span>
                    <span className="text-[#9cdcfe]">"hex"</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-[#ce9178]">"{token.hex}"</span>
                    <span className="text-gray-500">,</span>
                    {"\n"}
                    <span className="text-gray-500"> </span>
                    <span className="text-[#9cdcfe]">"rgb"</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-[#ce9178]">"{token.rgb}"</span>
                    <span className="text-gray-500">,</span>
                    {"\n"}
                    <span className="text-gray-500"> </span>
                    <span className="text-[#9cdcfe]">"token"</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-[#ce9178]">"{token.token}"</span>
                    {"\n"}
                    <span className="text-gray-500"> {"}"}</span>
                    {index < tokens.length - 1 && <span className="text-gray-500">,</span>}
                  </span>
                ))}
                {"\n"}
                <span className="text-gray-500">]</span>
              </code>
            </pre>
          </div>
        </div>

        {/* Preview of color swatches */}
        <div className="mt-6 p-4 bg-card rounded-lg border border-border">
          <h3 className="text-sm font-medium mb-3 text-muted-foreground">Color Preview</h3>
          <div className="flex flex-wrap gap-2">
            {tokens.map((token) => (
              <div key={token.token} className="group relative" title={`${token.token}: ${token.hex}`}>
                <div
                  className="w-10 h-10 rounded border border-gray-700 cursor-pointer hover:scale-110 transition-transform"
                  style={{ backgroundColor: token.hex }}
                />
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {token.token}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

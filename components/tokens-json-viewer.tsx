"use client"

import { useState } from "react"
import { CopyButton } from "./copy-button"

// Helper function to convert hex to rgb
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return "rgb(0, 0, 0)"

  const r = Number.parseInt(result[1], 16)
  const g = Number.parseInt(result[2], 16)
  const b = Number.parseInt(result[3], 16)

  return `rgb(${r}, ${g}, ${b})`
}

// Transform tokens to the desired format
const monoTokens = [
  { hex: "#e9f0ff", rgb: "rgb(233, 240, 255)", token: "mono-50" },
  { hex: "#d4e0ff", rgb: "rgb(212, 224, 255)", token: "mono-100" },
  { hex: "#b0c7ff", rgb: "rgb(176, 199, 255)", token: "mono-200" },
  { hex: "#8aadff", rgb: "rgb(138, 173, 255)", token: "mono-300" },
  { hex: "#5e8eff", rgb: "rgb(94, 142, 255)", token: "mono-400" },
  { hex: "#3a7dff", rgb: "rgb(58, 125, 255)", token: "mono-500" },
  { hex: "#2e6ee6", rgb: "rgb(46, 110, 230)", token: "mono-600" },
  { hex: "#2559b3", rgb: "rgb(37, 89, 179)", token: "mono-700" },
  { hex: "#1d4580", rgb: "rgb(29, 69, 128)", token: "mono-800" },
  { hex: "#142e4d", rgb: "rgb(20, 46, 77)", token: "mono-900" },
]

const grayTokens = [
  { hex: "#ffffff", rgb: "rgb(255, 255, 255)", token: "gray-50" },
  { hex: "#f9fafb", rgb: "rgb(249, 250, 251)", token: "gray-100" },
  { hex: "#f3f4f6", rgb: "rgb(243, 244, 246)", token: "gray-200" },
  { hex: "#e5e7eb", rgb: "rgb(229, 231, 235)", token: "gray-300" },
  { hex: "#d1d5db", rgb: "rgb(209, 213, 219)", token: "gray-400" },
  { hex: "#9ca3af", rgb: "rgb(156, 163, 175)", token: "gray-500" },
  { hex: "#6b7280", rgb: "rgb(107, 114, 128)", token: "gray-600" },
  { hex: "#4b5563", rgb: "rgb(75, 85, 99)", token: "gray-700" },
  { hex: "#1f2937", rgb: "rgb(31, 41, 55)", token: "gray-800" },
  { hex: "#111827", rgb: "rgb(17, 24, 39)", token: "gray-900" },
  { hex: "#000000", rgb: "rgb(0, 0, 0)", token: "gray-1000" },
]

export function TokensJsonViewer() {
  const [activeTab, setActiveTab] = useState<"mono" | "gray">("mono")

  const tokens = activeTab === "mono" ? monoTokens : grayTokens
  const jsonString = JSON.stringify(tokens, null, 2)

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <h2 className="text-xl font-semibold">Design Tokens (JSON)</h2>
      </div>

      {/* Tab selector */}
      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab("mono")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "mono"
              ? "border-b-2 border-mono-500 text-mono-500"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Mono Colors
        </button>
        <button
          onClick={() => setActiveTab("gray")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "gray"
              ? "border-b-2 border-mono-500 text-mono-500"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Gray Scale
        </button>
      </div>

      {/* Code block with CodePen style */}
      <div className="relative">
        <div className="absolute top-3 right-3 z-10">
          <CopyButton value={jsonString} label="Copy JSON" />
        </div>

        <div className="bg-[#1e1e1e] rounded-lg p-6 overflow-x-auto">
          <pre className="text-sm font-mono">
            <code className="text-[#d4d4d4]">
              <span className="text-[#ce9178]">[</span>
              {"\n"}
              {tokens.map((token, index) => (
                <span key={token.token}>
                  {"  "}
                  <span className="text-[#ce9178]">{"{"}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#9cdcfe]">"hex"</span>
                  <span className="text-[#d4d4d4]">: </span>
                  <span className="text-[#ce9178]">"{token.hex}"</span>
                  <span className="text-[#d4d4d4]">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#9cdcfe]">"rgb"</span>
                  <span className="text-[#d4d4d4]">: </span>
                  <span className="text-[#ce9178]">"{token.rgb}"</span>
                  <span className="text-[#d4d4d4]">,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#9cdcfe]">"token"</span>
                  <span className="text-[#d4d4d4]">: </span>
                  <span className="text-[#ce9178]">"{token.token}"</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#ce9178]">{"}"}</span>
                  {index < tokens.length - 1 && <span className="text-[#d4d4d4]">,</span>}
                  {"\n"}
                </span>
              ))}
              <span className="text-[#ce9178]">]</span>
            </code>
          </pre>
        </div>
      </div>

      {/* Color preview */}
      <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
        {tokens.map((token) => (
          <div key={token.token} className="space-y-1">
            <div
              className="h-12 rounded border border-border"
              style={{ backgroundColor: token.hex }}
              title={`${token.token}: ${token.hex}`}
            />
            <p className="text-xs text-center text-muted-foreground truncate">{token.token}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

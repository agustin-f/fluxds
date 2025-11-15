"use client"

import { CopyButton } from "./copy-button"

const monoColors = [
  { name: "mono-50", value: "#eff6ff", hex: "#eff6ff" },
  { name: "mono-100", value: "#dbeafe", hex: "#dbeafe" },
  { name: "mono-200", value: "#bfdbfe", hex: "#bfdbfe" },
  { name: "mono-300", value: "#93c5fd", hex: "#93c5fd" },
  { name: "mono-400", value: "#60a5fa", hex: "#60a5fa" },
  { name: "mono-500", value: "#3b82f6", hex: "#3b82f6" },
  { name: "mono-600", value: "#2563eb", hex: "#2563eb" },
  { name: "mono-700", value: "#1d4ed8", hex: "#1d4ed8" },
  { name: "mono-800", value: "#1e40af", hex: "#1e40af" },
  { name: "mono-900", value: "#1e3a8a", hex: "#1e3a8a" },
]

const grayColors = [
  { name: "gray-50", value: "#f9fafb", hex: "#f9fafb" },
  { name: "gray-100", value: "#f3f4f6", hex: "#f3f4f6" },
  { name: "gray-200", value: "#e5e7eb", hex: "#e5e7eb" },
  { name: "gray-300", value: "#d1d5db", hex: "#d1d5db" },
  { name: "gray-400", value: "#9ca3af", hex: "#9ca3af" },
  { name: "gray-500", value: "#6b7280", hex: "#6b7280" },
  { name: "gray-600", value: "#4b5563", hex: "#4b5563" },
  { name: "gray-700", value: "#374151", hex: "#374151" },
  { name: "gray-800", value: "#1f2937", hex: "#1f2937" },
  { name: "gray-900", value: "#111827", hex: "#111827" },
  { name: "gray-950", value: "#030712", hex: "#030712" },
]

const borderColors = [
  { name: "border-primary", value: "#374151", hex: "#374151" },
  { name: "border-accent", value: "#2563eb", hex: "#2563eb" },
  { name: "border-dark", value: "#1e3a8a", hex: "#1e3a8a" },
]

export function ColorPalette() {
  return (
    <section className="space-y-8">
      <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">Colours</h2>

      {/* Monocromos (Blues) */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Monocromos</h3>
        <div className="grid grid-cols-5 gap-4">
          {monoColors.slice(0, 5).map((color) => (
            <div key={color.name} className="space-y-2">
              <div className="h-20 rounded-lg border border-gray-700" style={{ backgroundColor: color.value }} />
              <div className="text-xs flex items-center justify-between">
                <div>
                  <p className="font-medium">{color.name}</p>
                  <p className="text-gray-400">{color.hex}</p>
                </div>
                <CopyButton value={color.hex} label={color.name} />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-4">
          {monoColors.slice(5).map((color) => (
            <div key={color.name} className="space-y-2">
              <div className="h-20 rounded-lg border border-gray-700" style={{ backgroundColor: color.value }} />
              <div className="text-xs flex items-center justify-between">
                <div>
                  <p className="font-medium">{color.name}</p>
                  <p className="text-gray-400">{color.hex}</p>
                </div>
                <CopyButton value={color.hex} label={color.name} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Gradient</h3>
        <div
          className="h-20 rounded-lg"
          style={{
            background: "linear-gradient(90deg, #60a5fa 0%, #a855f7 50%, #ec4899 100%)",
          }}
        />
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-400">gradient(90deg, mono-400, purple-500, pink-500)</p>
          <CopyButton value="linear-gradient(90deg, #60a5fa 0%, #a855f7 50%, #ec4899 100%)" label="gradient" />
        </div>
      </div>

      {/* Gray Scale */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Gray</h3>
        <div className="grid grid-cols-4 gap-4">
          {grayColors.slice(0, 4).map((color) => (
            <div key={color.name} className="space-y-2">
              <div className="h-20 rounded-lg border border-gray-700" style={{ backgroundColor: color.value }} />
              <div className="text-xs flex items-center justify-between">
                <div>
                  <p className="font-medium">{color.name}</p>
                  <p className="text-gray-400">{color.hex}</p>
                </div>
                <CopyButton value={color.hex} label={color.name} />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {grayColors.slice(4, 8).map((color) => (
            <div key={color.name} className="space-y-2">
              <div className="h-20 rounded-lg border border-gray-700" style={{ backgroundColor: color.value }} />
              <div className="text-xs flex items-center justify-between">
                <div>
                  <p className="font-medium">{color.name}</p>
                  <p className="text-gray-400">{color.hex}</p>
                </div>
                <CopyButton value={color.hex} label={color.name} />
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {grayColors.slice(8).map((color) => (
            <div key={color.name} className="space-y-2">
              <div className="h-20 rounded-lg border border-gray-700" style={{ backgroundColor: color.value }} />
              <div className="text-xs flex items-center justify-between">
                <div>
                  <p className="font-medium">{color.name}</p>
                  <p className="text-gray-400">{color.hex}</p>
                </div>
                <CopyButton value={color.hex} label={color.name} />
              </div>
            </div>
          ))}
          <div className="space-y-2">
            <div className="h-20 rounded-lg border border-gray-700 bg-white" />
            <div className="text-xs flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">white</p>
                <p className="text-gray-600">#ffffff</p>
              </div>
              <CopyButton value="#ffffff" label="white" />
            </div>
          </div>
        </div>
      </div>

      {/* Borders */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Borders</h3>
        <div className="grid grid-cols-3 gap-4">
          {borderColors.map((color) => (
            <div key={color.name} className="space-y-2">
              <div className="h-20 rounded-lg" style={{ backgroundColor: color.value }} />
              <div className="text-xs flex items-center justify-between">
                <div>
                  <p className="font-medium">{color.name}</p>
                  <p className="text-gray-400">{color.hex}</p>
                </div>
                <CopyButton value={color.hex} label={color.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

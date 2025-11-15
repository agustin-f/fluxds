"use client"

import { CopyButton } from "./copy-button"

const gridSpecs = [
  {
    name: "Desktop",
    columns: 12,
    gutter: "24px",
    margin: "80px",
    color: "#7c3aed",
    maxWidth: "full",
  },
  {
    name: "Tablet",
    columns: 8,
    gutter: "24px",
    margin: "40px",
    color: "#3b82f6",
    maxWidth: "2xl",
  },
  {
    name: "Mobile",
    columns: 4,
    gutter: "16px",
    margin: "16px",
    color: "#3b82f6",
    maxWidth: "md",
  },
]

export function GridSpecifications() {
  return (
    <section className="space-y-8">
      <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">Layout Grid</h2>

      {gridSpecs.map((spec) => (
        <div key={spec.name} className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">{spec.name}</h3>
              <p className="text-sm text-muted-foreground">
                {spec.columns} columns / Gutter: {spec.gutter} / Margin: {spec.margin}
              </p>
            </div>
            <CopyButton
              value={`${spec.columns} columns, gutter: ${spec.gutter}, margin: ${spec.margin}`}
              label={`${spec.name} grid`}
            />
          </div>
          <div
            className="bg-card border border-border p-6 rounded-lg"
            style={{ maxWidth: spec.maxWidth === "full" ? "100%" : undefined }}
          >
            <div
              className={`grid gap-${spec.gutter === "24px" ? "6" : "4"}`}
              style={{ gridTemplateColumns: `repeat(${spec.columns}, 1fr)` }}
            >
              {Array.from({ length: spec.columns }).map((_, i) => (
                <div key={i} className="h-32 rounded" style={{ backgroundColor: spec.color }} />
              ))}
            </div>
          </div>
          {spec.name === "Desktop" && (
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#7c3aed] rounded" />
                <span>Column</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-transparent border border-gray-600 rounded" />
                <span>Gutter ({spec.gutter})</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  )
}

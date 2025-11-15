"use client"

import { CopyButton } from "./copy-button"

const spacings = [
  { name: "4px", value: "4px", size: 4 },
  { name: "8px", value: "8px", size: 8 },
  { name: "12px", value: "12px", size: 12 },
  { name: "16px", value: "16px", size: 16 },
  { name: "24px", value: "24px", size: 24 },
  { name: "32px", value: "32px", size: 32 },
  { name: "40px", value: "40px", size: 40 },
  { name: "48px", value: "48px", size: 48 },
  { name: "64px", value: "64px", size: 64 },
  { name: "80px", value: "80px", size: 80 },
]

export function SizesAndSpacings() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">Sizes & spacings</h2>
      <p className="text-sm text-gray-400">
        Use consistent spacing based on an 8px grid. Apply to: margins, paddings, gaps, widths, heights, etc. A 4px
        increment is also available for fine-tuning.
      </p>

      <div className="space-y-3">
        {spacings.map((spacing) => (
          <div key={spacing.name} className="flex items-center gap-4">
            <div className="w-16 text-sm text-gray-400">{spacing.name}</div>
            <div
              className="flex-1 h-8 bg-[#93c5fd] rounded"
              style={{ width: `${spacing.size * 4}px`, maxWidth: "100%" }}
            />
            <CopyButton value={spacing.value} label={spacing.name} />
          </div>
        ))}
      </div>
    </section>
  )
}

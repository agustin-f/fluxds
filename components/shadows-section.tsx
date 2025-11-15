import { CopyButton } from "./copy-button"

const shadows = [
  {
    name: "shadow-sm",
    value: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    description: "Small shadow for subtle elevation",
  },
  {
    name: "shadow-md",
    value: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    description: "Medium shadow for cards",
  },
  {
    name: "shadow-lg",
    value: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    description: "Large shadow for modals",
  },
  {
    name: "shadow-xl",
    value: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    description: "Extra large shadow for popovers",
  },
]

export function ShadowsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">Shadows</h2>
      <p className="text-sm text-muted-foreground">
        Use shadows to create depth and hierarchy. Apply to: cards, buttons, modals, etc. A 4px increment is also
        available for fine-tuning.
      </p>

      <div className="grid grid-cols-2 gap-6">
        {shadows.map((shadow) => (
          <div key={shadow.name} className="space-y-3">
            <div
              className="h-32 bg-card border border-border rounded-lg flex items-center justify-center"
              style={{ boxShadow: shadow.value }}
            >
              <p className="text-sm font-medium">{shadow.name}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <p className="font-medium text-sm">{shadow.name}</p>
                <CopyButton value={shadow.value} label={shadow.name} />
              </div>
              <p className="text-xs text-muted-foreground">{shadow.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

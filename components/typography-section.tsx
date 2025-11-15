"use client"

import { CopyButton } from "./copy-button"

// Base: 16px, Scale: 1.25
const typographyScale = [
  {
    name: "Heading 1",
    size: "60px",
    rem: "3.815rem",
    weight: "Bold",
    className: "text-[60px] font-bold leading-tight",
  },
  { name: "Heading 1", size: "48px", rem: "3.052rem", weight: "Bold", className: "text-5xl font-bold leading-tight" },
  {
    name: "Heading 1",
    size: "39px",
    rem: "2.441rem",
    weight: "Bold",
    className: "text-[39px] font-bold leading-tight",
  },
  { name: "Subtitle 1", size: "31px", rem: "1.953rem", weight: "Semibold", className: "text-[31px] font-semibold" },
  { name: "Subtitle 2", size: "25px", rem: "1.563rem", weight: "Medium", className: "text-[25px] font-medium" },
  { name: "Body 1", size: "20px", rem: "1.25rem", weight: "Regular", className: "text-xl" },
  { name: "Body 2", size: "16px", rem: "1.000rem", weight: "Regular", className: "text-base" },
  { name: "Body 3", size: "13px", rem: "0.813rem", weight: "Regular", className: "text-[13px]" },
]

const fontWeights = [
  { name: "Light", weight: "300", sample: "AaBbCcDdEeGgNn 1234567890" },
  { name: "Regular", weight: "400", sample: "AaBbCcDdEeGgNn 1234567890" },
  { name: "Medium", weight: "500", sample: "AaBbCcDdEeGgNn 1234567890" },
  { name: "Semi Bold", weight: "600", sample: "AaBbCcDdEeGgNn 1234567890" },
  { name: "Bold", weight: "700", sample: "AaBbCcDdEeGgNn 1234567890" },
]

export function TypographySection() {
  return (
    <section className="space-y-8">
      <h2 className="text-xl font-semibold border-b border-border pb-2">Typography</h2>

      {/* UI Typeface */}
      <div className="space-y-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">UI Typeface</p>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 bg-mono-200 dark:bg-mono-800 rounded-lg flex items-center justify-center">
                <span className="text-5xl font-sans text-foreground">Aa</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-1">Fira Sans</h3>
                <p className="text-sm text-muted-foreground mb-2">9 font weights available</p>
                <a href="#" className="text-xs text-primary underline uppercase tracking-wide">
                  Download Link
                </a>
              </div>
            </div>
            <CopyButton value="Fira Sans" label="font family" />
          </div>

          {/* Font Weights */}
          <div className="space-y-3 border-t border-border pt-6">
            {fontWeights.map((font) => (
              <div key={font.name} className="flex items-center justify-between">
                <div className="flex items-center gap-8 flex-1">
                  <span className="text-sm text-muted-foreground w-24">{font.name}</span>
                  <span className={`font-sans text-lg`} style={{ fontWeight: font.weight }}>
                    {font.sample}
                  </span>
                </div>
                <CopyButton value={font.weight} label={font.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REM Base Size */}
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">REM Base Size</p>
        <p className="text-xs text-muted-foreground">Helps with accessibility</p>
        <div className="bg-card p-6 rounded-lg border border-border flex items-center justify-between">
          <p className="text-2xl font-mono">1 rem = 16px</p>
          <CopyButton value="16px" label="base size" />
        </div>
      </div>

      {/* Typography Scale */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Typography Scale</p>
          <p className="text-sm text-muted-foreground">
            Base Value: <span className="font-semibold">16</span> Scale: <span className="font-semibold">1.25</span>
          </p>
        </div>
        <div className="space-y-6">
          {typographyScale.map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-4 pb-4 border-b border-border last:border-0"
            >
              <div className="flex-1">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-xs text-muted-foreground w-16">{item.size}</span>
                  <span className="text-xs text-muted-foreground">{item.rem}</span>
                </div>
                <p className={item.className}>{item.name}</p>
              </div>
              <CopyButton value={`${item.size} / ${item.rem}`} label={item.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

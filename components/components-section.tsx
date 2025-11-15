"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CopyButton } from "./copy-button"
import { Upload } from "lucide-react"

const buttonCode = `import { Button } from "@/components/ui/button"

// Primary Button
<Button>Primary Button</Button>

// Secondary Button
<Button variant="secondary">Secondary Button</Button>

// Outline Button
<Button variant="outline">Outline Button</Button>

// Ghost Button
<Button variant="ghost">Ghost Button</Button>

// Destructive Button
<Button variant="destructive">Destructive Button</Button>

// Disabled Button
<Button disabled>Disabled Button</Button>`

const inputCode = `import { Input } from "@/components/ui/input"

// Email Input
<Input type="email" placeholder="Email" />

// Password Input
<Input type="password" placeholder="Password" />

// Text Input
<Input type="text" placeholder="Username" />

// Disabled Input
<Input disabled placeholder="Disabled Input" />`

const fileUploaderCode = `import { Upload } from 'lucide-react'

<div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
  <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
  <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (max. 800x400px)</p>
</div>`

const cardCode = `import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Simple Card
<Card>
  <CardHeader>
    <CardTitle>Simple Card</CardTitle>
    <CardDescription>A basic card component</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is a simple card with a header and content area.</p>
  </CardContent>
</Card>

// Card with Footer
<Card>
  <CardHeader>
    <CardTitle>Card with Footer</CardTitle>
    <CardDescription>Includes action buttons</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This card includes a footer section for actions.</p>
  </CardContent>
  <CardFooter className="gap-2">
    <Button>Accept</Button>
    <Button variant="outline">Decline</Button>
  </CardFooter>
</Card>`

export function ComponentsSection() {
  const [dragActive, setDragActive] = useState(false)

  return (
    <section className="space-y-12">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Components</h2>
        <p className="text-muted-foreground">Essential building blocks for creating consistent user interfaces</p>
      </div>

      {/* Buttons */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">Buttons</h3>
          <p className="text-sm text-muted-foreground">Different button styles for various use cases</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex flex-wrap gap-3 mb-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button disabled>Disabled Button</Button>
          </div>
        </div>

        <div className="bg-code-block border border-border rounded-lg p-4 relative">
          <div className="absolute top-3 right-3">
            <CopyButton value={buttonCode} label="button code" />
          </div>
          <pre className="text-xs overflow-x-auto">
            <code>{buttonCode}</code>
          </pre>
        </div>
      </div>

      {/* Inputs */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">Input Fields</h3>
          <p className="text-sm text-muted-foreground">Text input components with various states</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="grid grid-cols-2 gap-4 max-w-2xl">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input type="text" placeholder="Username" />
            <Input disabled placeholder="Disabled Input" />
          </div>
        </div>

        <div className="bg-code-block border border-border rounded-lg p-4 relative">
          <div className="absolute top-3 right-3">
            <CopyButton value={inputCode} label="input code" />
          </div>
          <pre className="text-xs overflow-x-auto">
            <code>{inputCode}</code>
          </pre>
        </div>
      </div>

      {/* File Uploader */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">File Upload</h3>
          <p className="text-sm text-muted-foreground">Drag and drop or click to upload files</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="max-w-md mx-auto">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
                dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary"
              }`}
              onDragEnter={() => setDragActive(true)}
              onDragLeave={() => setDragActive(false)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault()
                setDragActive(false)
              }}
            >
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
          </div>
        </div>

        <div className="bg-code-block border border-border rounded-lg p-4 relative">
          <div className="absolute top-3 right-3">
            <CopyButton value={fileUploaderCode} label="file uploader code" />
          </div>
          <pre className="text-xs overflow-x-auto">
            <code>{fileUploaderCode}</code>
          </pre>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">Cards</h3>
          <p className="text-sm text-muted-foreground">Flexible content containers with multiple variants</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Simple Card</CardTitle>
                <CardDescription>A basic card component</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">This is a simple card with a header and content area.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Card with Footer</CardTitle>
                <CardDescription>Includes action buttons</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">This card includes a footer section for actions.</p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm">Accept</Button>
                <Button size="sm" variant="outline">
                  Decline
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gradient-to-br from-mono-500 to-mono-700 text-white border-0">
              <CardHeader>
                <CardTitle>Gradient Card</CardTitle>
                <CardDescription className="text-mono-100">With custom styling</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Cards can be customized with gradients and colors.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-code-block border border-border rounded-lg p-4 relative">
          <div className="absolute top-3 right-3">
            <CopyButton value={cardCode} label="card code" />
          </div>
          <pre className="text-xs overflow-x-auto">
            <code>{cardCode}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}

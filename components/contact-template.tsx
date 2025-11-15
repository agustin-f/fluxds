"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Monitor, Smartphone } from "lucide-react"
import Image from "next/image"

export function ContactTemplate() {
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop")

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <h2 className="text-xl font-semibold">Contact Form Template</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Split-screen layout with hero section and contact form, adapting to light and dark modes.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={viewport === "desktop" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewport("desktop")}
            className="gap-2"
          >
            <Monitor className="h-4 w-4" />
            Desktop
          </Button>
          <Button
            variant={viewport === "mobile" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewport("mobile")}
            className="gap-2"
          >
            <Smartphone className="h-4 w-4" />
            Mobile
          </Button>
        </div>
      </div>

      <div className={`mx-auto transition-all duration-300 ${viewport === "mobile" ? "max-w-sm" : "w-full"}`}>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className={`grid ${viewport === "mobile" ? "grid-cols-1" : "md:grid-cols-2"} min-h-[600px]`}>
            {/* Left Side - Hero with Logo and Colors */}
            <div className="bg-gray-900 dark:bg-gray-950 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              {/* Background Icons */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-20 text-4xl">↗</div>
                <div className="absolute top-40 right-40 text-2xl">⟲</div>
                <div className="absolute bottom-40 right-32 text-3xl">◇</div>
                <div className="absolute top-32 right-60 text-2xl">⊕</div>
              </div>

              {/* Logo */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/images/bg-logo.png"
                      alt="FLUX Logo"
                      width={64}
                      height={64}
                      className="animate-spin-slow"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">FLUX</h1>
                    <p className="text-sm text-gray-300">Design System</p>
                  </div>
                </div>
              </div>

              {/* 3D Color Cards */}
              <div className="relative z-10 perspective-1000">
                <div
                  className="grid grid-cols-2 gap-4 transform-gpu"
                  style={{ transform: "rotateX(45deg) rotateZ(-25deg)" }}
                >
                  {/* Row 1 */}
                  <div className="space-y-2">
                    <div className="bg-mono-300 rounded-lg p-4 shadow-lg">
                      <p className="text-xs text-gray-800 font-medium">Highlight</p>
                      <p className="text-[10px] text-gray-600">
                        Mono-300
                        <br />
                        #93B1FF
                      </p>
                    </div>
                    <div className="bg-mono-700 rounded-lg p-4 shadow-lg">
                      <p className="text-xs text-white font-medium">Mono-700</p>
                      <p className="text-[10px] text-gray-300">#2E39DB</p>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="space-y-2 mt-8">
                    <div className="bg-white rounded-lg p-4 shadow-lg">
                      <p className="text-xs text-gray-800 font-medium">Text</p>
                      <p className="text-[10px] text-gray-600">
                        White
                        <br />
                        #FAFAFA
                      </p>
                    </div>
                    <div className="bg-gray-500 rounded-lg p-4 shadow-lg">
                      <p className="text-xs text-white font-medium">Gray</p>
                      <p className="text-[10px] text-gray-200">modular</p>
                    </div>
                  </div>

                  {/* Row 3 - Gradient */}
                  <div className="col-span-2 mt-4">
                    <div className="bg-gradient-to-r from-mono-500 via-purple-500 to-red-500 rounded-lg p-4 shadow-lg">
                      <p className="text-xs text-white font-medium">Gradient</p>
                      <p className="text-[10px] text-gray-100">
                        Mono-500
                        <br />
                        #8C8AF8
                      </p>
                    </div>
                  </div>

                  {/* Row 4 - Backgrounds */}
                  <div className="space-y-2">
                    <div className="bg-[#3D10FF] rounded-lg p-4 shadow-lg">
                      <p className="text-xs text-white font-medium">Backgrounds</p>
                      <p className="text-[10px] text-gray-200">
                        Bg-primary
                        <br />
                        #3D10FF
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mt-8">
                    <div className="bg-[#BD00FF] rounded-lg p-4 shadow-lg">
                      <p className="text-xs text-white font-medium">Bg-secondary</p>
                      <p className="text-[10px] text-gray-200">#BD00FF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-background p-8 md:p-12 flex flex-col justify-center">
              <div className="max-w-md mx-auto w-full space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-balance">Let's level up your brand, together</h2>
                  <p className="text-muted-foreground">
                    You can reach us anytime via{" "}
                    <a href="mailto:hi@untitledui.com" className="text-primary hover:underline">
                      hi@untitledui.com
                    </a>
                  </p>
                </div>

                <form className="space-y-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="you@company.com" />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone number
                    </label>
                    <div className="flex gap-2">
                      <select className="px-3 py-2 border border-input rounded-md bg-background text-sm">
                        <option>US</option>
                        <option>UK</option>
                        <option>CA</option>
                      </select>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="flex-1" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      How can we help?
                    </label>
                    <Textarea id="message" placeholder="Tell us a little about the project..." rows={4} />
                  </div>

                  {/* Services */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Services</label>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox id={service} />
                          <label htmlFor={service} className="text-sm cursor-pointer">
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Get started
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = ["Website design", "Content creation", "UX design", "Strategy & consulting", "User research", "Other"]

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Innovative</span> <span className="text-white">Software</span>
              <br />
              <span className="text-white">Solutions for the</span> <span className="gradient-text">Future</span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your business with cutting-edge technology. We create powerful, scalable software solutions that
              drive growth and innovation in the digital age.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 text-lg hover-lift"
              >
                <Link href="/contact" className="flex items-center">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 text-lg hover-lift"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>

          {/* Feature Icons */}
          <div
            className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center space-y-2 glass-effect p-6 rounded-lg hover-lift">
                <Code className="text-cyan-400 mb-2" size={32} />
                <h3 className="text-white font-semibold">Clean Code</h3>
                <p className="text-gray-400 text-sm text-center">Maintainable and scalable solutions</p>
              </div>
              <div className="flex flex-col items-center space-y-2 glass-effect p-6 rounded-lg hover-lift">
                <Zap className="text-cyan-400 mb-2" size={32} />
                <h3 className="text-white font-semibold">Fast Performance</h3>
                <p className="text-gray-400 text-sm text-center">Optimized for speed and efficiency</p>
              </div>
              <div className="flex flex-col items-center space-y-2 glass-effect p-6 rounded-lg hover-lift">
                <Shield className="text-cyan-400 mb-2" size={32} />
                <h3 className="text-white font-semibold">Secure & Reliable</h3>
                <p className="text-gray-400 text-sm text-center">Enterprise-grade security standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

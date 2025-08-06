"use client"

import { useState, useEffect } from "react"

const clients = [
  { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
  { name: "InnovateLab", logo: "/placeholder.svg?height=60&width=120" },
  { name: "DataFlow", logo: "/placeholder.svg?height=60&width=120" },
  { name: "CloudTech", logo: "/placeholder.svg?height=60&width=120" },
  { name: "StartupHub", logo: "/placeholder.svg?height=60&width=120" },
  { name: "FinanceApp", logo: "/placeholder.svg?height=60&width=120" },
  { name: "HealthTech", logo: "/placeholder.svg?height=60&width=120" },
  { name: "EduPlatform", logo: "/placeholder.svg?height=60&width=120" },
]

export default function ClientLogos() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("client-logos")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="client-logos" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            We're proud to work with innovative companies across various industries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`glass-effect p-4 rounded-lg hover-lift transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="w-full h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

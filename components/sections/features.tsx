"use client"

import { useEffect, useState } from "react"
import { Smartphone, Cloud, Brain, Database, Globe, Lock } from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive applications that work seamlessly across all devices and platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Scalable cloud solutions that grow with your business needs.",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Intelligent automation and machine learning capabilities.",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Robust database solutions for efficient data handling and analytics.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Applications designed for worldwide accessibility and performance.",
  },
  {
    icon: Lock,
    title: "Security First",
    description: "Advanced security measures to protect your data and users.",
  },
]

export default function Features() {
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

    const element = document.getElementById("features-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features-section" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Why Choose <span className="gradient-text">Prince Digital Hub</span>?
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            We combine cutting-edge technology with innovative thinking to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-effect p-6 rounded-lg hover-lift transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <feature.icon className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

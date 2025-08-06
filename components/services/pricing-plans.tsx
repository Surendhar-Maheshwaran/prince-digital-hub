"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "per project",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic web application",
      "Responsive design",
      "Database integration",
      "3 months support",
      "Basic SEO optimization",
      "Contact form integration",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$7,500",
    period: "per project",
    description: "Ideal for growing businesses",
    features: [
      "Advanced web application",
      "Custom design & branding",
      "API development",
      "6 months support",
      "Advanced SEO & analytics",
      "Payment gateway integration",
      "Admin dashboard",
      "Mobile optimization",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$15,000",
    period: "per project",
    description: "For large-scale applications",
    features: [
      "Complex web application",
      "Custom architecture",
      "Multiple integrations",
      "12 months support",
      "Performance optimization",
      "Security audit",
      "Load balancing",
      "24/7 monitoring",
      "Dedicated project manager",
    ],
    popular: false,
  },
]

export default function PricingPlans() {
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

    const element = document.getElementById("pricing-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing-section" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Choose the perfect plan for your project. All plans include our commitment to quality and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-effect p-8 rounded-lg hover-lift transition-all duration-1000 relative ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${plan.popular ? "ring-2 ring-cyan-400 scale-105" : ""}`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star size={16} className="mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-cyan-400 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 ${
                  plan.popular
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                    : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Need a custom solution? We offer flexible pricing for unique requirements.
          </p>
          <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
            <Link href="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

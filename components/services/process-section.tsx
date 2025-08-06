"use client"

import { useState, useEffect } from "react"
import { Search, Lightbulb, Code, Rocket, Cog, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description: "We analyze your requirements, goals, and technical needs to create a comprehensive project roadmap.",
    duration: "1-2 weeks",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description:
      "Our team develops a detailed strategy, architecture design, and project timeline tailored to your needs.",
    duration: "1 week",
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "We build your solution using agile methodology with regular updates and continuous testing.",
    duration: "4-12 weeks",
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    description: "We deploy your application to production with comprehensive testing and performance optimization.",
    duration: "1 week",
  },
  {
    icon: Cog,
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and maintenance to ensure your application runs smoothly.",
    duration: "Ongoing",
  },
]

export default function ProcessSection() {
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

    const element = document.getElementById("process-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="process-section" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Our <span className="gradient-text">Process</span>
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            A proven methodology that ensures successful project delivery from concept to completion.
          </p>
        </div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-500 opacity-30"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="glass-effect p-6 rounded-lg hover-lift">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                        <step.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                        <span className="text-cyan-400 text-sm">{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="glass-effect p-8 rounded-lg max-w-2xl mx-auto">
            <CheckCircle className="text-cyan-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Quality Guaranteed</h3>
            <p className="text-gray-300 mb-6">
              Every project goes through rigorous quality assurance, code reviews, and testing to ensure we deliver
              excellence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold gradient-text">100%</div>
                <div className="text-gray-400 text-sm">Code Coverage</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

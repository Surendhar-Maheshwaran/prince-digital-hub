"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Users, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    number: "300%",
    label: "Average Performance Improvement",
    description: "Our solutions deliver significant performance gains",
  },
  {
    icon: Users,
    number: "1M+",
    label: "Users Served",
    description: "Applications we've built serve millions of users",
  },
  {
    icon: Award,
    number: "98%",
    label: "Client Satisfaction",
    description: "Consistently high satisfaction ratings",
  },
  {
    icon: Clock,
    number: "45%",
    label: "Faster Delivery",
    description: "Agile methodology ensures faster project completion",
  },
]

export default function ProjectStats() {
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

    const element = document.getElementById("project-stats")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="project-stats" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Project <span className="gradient-text">Impact</span>
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Measurable results that demonstrate the value we bring to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`glass-effect p-6 rounded-lg text-center hover-lift transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              <stat.icon className="text-cyan-400 mx-auto mb-4" size={40} />
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

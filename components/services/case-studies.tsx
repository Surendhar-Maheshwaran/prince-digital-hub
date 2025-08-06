"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, TrendingUp, Users, Clock } from "lucide-react"

const caseStudies = [
  {
    title: "E-commerce Platform Transformation",
    client: "RetailTech Solutions",
    industry: "E-commerce",
    challenge: "Legacy system couldn't handle growing traffic and needed modern features",
    solution: "Built scalable microservices architecture with React frontend and Node.js backend",
    results: ["300% increase in page load speed", "500% growth in concurrent users", "40% increase in conversion rate"],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    duration: "4 months",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    client: "DataInsights Corp",
    industry: "Analytics",
    challenge: "Manual data processing was time-consuming and error-prone",
    solution: "Developed AI-powered dashboard with real-time analytics and predictive modeling",
    results: ["90% reduction in processing time", "95% accuracy in predictions", "60% cost savings in operations"],
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Apache Kafka"],
    duration: "6 months",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Mobile Banking Application",
    client: "SecureBank Financial",
    industry: "Banking",
    challenge: "Needed secure, user-friendly mobile banking solution",
    solution: "Built native mobile app with biometric authentication and real-time transactions",
    results: ["1M+ downloads in first year", "4.8/5 app store rating", "50% increase in mobile transactions"],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Blockchain"],
    duration: "8 months",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCase, setSelectedCase] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("case-studies")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="case-studies" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Real results from real clients. See how we've helped businesses transform and grow.
          </p>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedCase === index
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  : "glass-effect text-gray-300 hover:text-cyan-400"
              }`}
            >
              {study.client}
            </button>
          ))}
        </div>

        {/* Selected Case Study */}
        <div className="glass-effect p-8 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <span className="text-cyan-400 text-sm font-semibold">{caseStudies[selectedCase].industry}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{caseStudies[selectedCase].title}</h3>
                <p className="text-gray-400">Client: {caseStudies[selectedCase].client}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                <p className="text-gray-300">{caseStudies[selectedCase].challenge}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                <p className="text-gray-300">{caseStudies[selectedCase].solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudies[selectedCase].technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <img
                  src={caseStudies[selectedCase].image || "/placeholder.svg"}
                  alt={caseStudies[selectedCase].title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Results Achieved</h4>
                <div className="space-y-3">
                  {caseStudies[selectedCase].results.map((result, index) => (
                    <div key={index} className="flex items-center">
                      <TrendingUp className="text-cyan-400 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-lg border border-cyan-500/20">
                  <Clock className="text-cyan-400 mb-2" size={24} />
                  <p className="text-white font-semibold">Duration</p>
                  <p className="text-gray-300">{caseStudies[selectedCase].duration}</p>
                </div>
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-lg border border-cyan-500/20">
                  <Users className="text-cyan-400 mb-2" size={24} />
                  <p className="text-white font-semibold">Industry</p>
                  <p className="text-gray-300">{caseStudies[selectedCase].industry}</p>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                View Full Case Study <ExternalLink className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

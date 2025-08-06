"use client"

import Link from "next/link"

import React from "react"

import { useState, useEffect } from "react"
import { Monitor, Smartphone, Cloud, Cog, Brain, Shield, Database, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and cutting-edge technologies.",
    features: [
      "React/Next.js Development",
      "Node.js Backend",
      "Database Integration",
      "API Development",
      "E-commerce Solutions",
      "CMS Development",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
    startingPrice: "$5,000",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: [
      "React Native Apps",
      "Flutter Development",
      "Native iOS/Android",
      "App Store Deployment",
      "Push Notifications",
      "Offline Functionality",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
    startingPrice: "$8,000",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
    features: [
      "AWS/Azure/GCP Setup",
      "Microservices Architecture",
      "Container Orchestration",
      "Auto-scaling",
      "Load Balancing",
      "Disaster Recovery",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    startingPrice: "$3,000",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by artificial intelligence and machine learning algorithms.",
    features: [
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
      "Chatbots",
      "Recommendation Systems",
      "Data Analysis",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Scikit-learn"],
    startingPrice: "$10,000",
  },
  {
    icon: Cog,
    title: "DevOps & Automation",
    description: "Streamlined development workflows and automated deployment pipelines.",
    features: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Performance Optimization",
      "Security Automation",
      "Backup Solutions",
    ],
    technologies: ["Jenkins", "GitLab CI", "Ansible", "Prometheus", "Grafana", "ELK Stack"],
    startingPrice: "$2,500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Assessment",
      "Risk Management",
      "Security Training",
      "Incident Response",
    ],
    technologies: ["OWASP", "Nessus", "Metasploit", "Wireshark", "Burp Suite", "Splunk"],
    startingPrice: "$4,000",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Robust data pipelines and analytics solutions for data-driven decision making.",
    features: [
      "Data Pipeline Development",
      "ETL Processes",
      "Data Warehousing",
      "Real-time Analytics",
      "Data Visualization",
      "Big Data Solutions",
    ],
    technologies: ["Apache Spark", "Kafka", "Elasticsearch", "Tableau", "Power BI", "Snowflake"],
    startingPrice: "$6,000",
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description: "Complete digital transformation consulting and implementation services.",
    features: [
      "Strategy Consulting",
      "Process Automation",
      "Legacy System Migration",
      "Digital Workflows",
      "Change Management",
      "Training & Support",
    ],
    technologies: ["Various", "Custom", "Integration", "APIs", "Workflows", "Analytics"],
    startingPrice: "$15,000",
  },
]

export default function ServicesList() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedService, setSelectedService] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("services-list")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services-list" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Our <span className="gradient-text">Services</span>
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Comprehensive software development services tailored to your business needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass-effect p-6 rounded-lg hover-lift cursor-pointer transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${selectedService === index ? "ring-2 ring-cyan-400" : ""}`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
              onClick={() => setSelectedService(index)}
            >
              <service.icon className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
              <div className="mb-4">
                <p className="text-cyan-400 font-semibold text-sm mb-2">Key Features:</p>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                      <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-400 font-bold">From {service.startingPrice}</span>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service View */}
        <div className="mt-16 glass-effect p-8 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                {React.createElement(services[selectedService].icon, { className: "text-cyan-400 mr-3", size: 32 })}
                <h3 className="text-2xl font-bold text-white">{services[selectedService].title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{services[selectedService].description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Complete Feature Set:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services[selectedService].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Technologies We Use:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {services[selectedService].technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-lg border border-cyan-500/20 mb-6">
                <p className="text-cyan-400 font-semibold mb-2">
                  Starting Price: {services[selectedService].startingPrice}
                </p>
                <p className="text-gray-300 text-sm">Final pricing depends on project scope and requirements</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                <Link href="/contact">Get Quote for {services[selectedService].title}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

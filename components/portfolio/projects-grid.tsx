"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Monitor, Smartphone, Cloud, Brain } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce platform with advanced features and seamless user experience.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    icon: Monitor,
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Cloud Analytics Dashboard",
    category: "Cloud Solutions",
    description: "Real-time analytics dashboard with cloud infrastructure and data visualization.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Python", "AWS", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    icon: Cloud,
  },
  {
    id: 4,
    title: "AI Chatbot Platform",
    category: "AI & ML",
    description: "Intelligent chatbot platform with natural language processing and machine learning.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "TensorFlow", "React", "OpenAI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    icon: Brain,
  },
  {
    id: 5,
    title: "Healthcare Management System",
    category: "Web Development",
    description: "Comprehensive healthcare management system for hospitals and clinics.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Angular", "Java", "MySQL", "Spring Boot"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    icon: Monitor,
  },
  {
    id: 6,
    title: "Food Delivery App",
    category: "Mobile Development",
    description: "Full-featured food delivery application with real-time tracking and payments.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    icon: Smartphone,
  },
]

const categories = ["All", "Web Development", "Mobile Development", "Cloud Solutions", "AI & ML"]

export default function ProjectsGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects-grid")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <section id="projects-grid" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Explore our diverse portfolio of successful projects across different industries and technologies.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                    : "glass-effect text-gray-300 hover:text-cyan-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass-effect rounded-lg overflow-hidden hover-lift transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <div className="relative group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                      <ExternalLink size={16} className="mr-1" />
                      Live
                    </Button>
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                      <Github size={16} className="mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <project.icon className="text-cyan-400 mr-2" size={20} />
                  <span className="text-cyan-400 text-sm font-semibold">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                  >
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                  >
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3"
          >
            Load More Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

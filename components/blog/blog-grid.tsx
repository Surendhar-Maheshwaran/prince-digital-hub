"use client"

import { useState, useEffect } from "react"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
    content:
      "The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies. In this comprehensive guide, we'll explore the key trends that are shaping the future of web development...",
    author: "Alex Prince",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    tags: ["React", "Next.js", "AI", "PWA"],
  },
  {
    id: 2,
    title: "Building Scalable Mobile Apps with React Native",
    excerpt: "Learn best practices for creating mobile applications that can handle millions of users efficiently.",
    content:
      "React Native has revolutionized mobile app development by allowing developers to build cross-platform applications with a single codebase. However, building scalable mobile apps requires careful planning and implementation...",
    author: "Sarah Mitchell",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Mobile Development",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["React Native", "Mobile", "Performance", "Scalability"],
  },
  {
    id: 3,
    title: "AI Integration in Modern Software Development",
    excerpt: "Discover how artificial intelligence is transforming the way we build and deploy software applications.",
    content:
      "Artificial Intelligence is no longer a futuristic concept—it's a present reality that's transforming every aspect of software development. From code generation to automated testing, AI is revolutionizing how we build applications...",
    author: "David Chen",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "AI & Machine Learning",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    tags: ["AI", "Machine Learning", "Automation", "Development"],
  },
  {
    id: 4,
    title: "Cloud Security Best Practices for 2024",
    excerpt: "Essential security measures every business should implement when moving to the cloud.",
    content:
      "As more businesses migrate to cloud infrastructure, security becomes a paramount concern. This comprehensive guide covers the essential security practices that every organization should implement...",
    author: "Maria Rodriguez",
    date: "2024-01-08",
    readTime: "7 min read",
    category: "Cloud & Security",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["Cloud", "Security", "AWS", "Best Practices"],
  },
  {
    id: 5,
    title: "The Rise of Serverless Architecture",
    excerpt: "Understanding the benefits and challenges of serverless computing in modern application development.",
    content:
      "Serverless architecture has gained significant traction in recent years, offering developers a way to build and deploy applications without managing server infrastructure...",
    author: "Alex Prince",
    date: "2024-01-05",
    readTime: "9 min read",
    category: "Cloud Solutions",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["Serverless", "AWS Lambda", "Architecture", "Cloud"],
  },
  {
    id: 6,
    title: "DevOps Automation: Streamlining Your Development Pipeline",
    excerpt:
      "Learn how to implement effective DevOps practices to accelerate your development and deployment processes.",
    content:
      "DevOps automation is crucial for modern software development teams looking to increase efficiency and reduce deployment risks. This guide covers essential automation strategies...",
    author: "Sarah Mitchell",
    date: "2024-01-03",
    readTime: "8 min read",
    category: "DevOps",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["DevOps", "CI/CD", "Automation", "Docker"],
  },
]

export default function BlogGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "AI & Machine Learning",
    "Cloud & Security",
    "DevOps",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("blog-grid")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(blogPosts)
    } else {
      setFilteredPosts(blogPosts.filter((post) => post.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <div id="blog-grid">
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
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

      {/* Featured Post */}
      {filteredPosts.some((post) => post.featured) && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
          {filteredPosts
            .filter((post) => post.featured)
            .slice(0, 1)
            .map((post, index) => (
              <div
                key={post.id}
                className={`glass-effect rounded-lg overflow-hidden hover-lift transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-cyan-400 text-sm font-semibold">{post.category}</span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock size={16} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
                    <p className="text-gray-300 mb-6">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="text-gray-400 mr-2" size={16} />
                        <span className="text-gray-400 text-sm">{post.author}</span>
                      </div>
                      <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                        <Link href={`/blog/${post.id}`} className="flex items-center">
                          Read More <ArrowRight className="ml-2" size={16} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Regular Posts Grid */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <article
                key={post.id}
                className={`glass-effect rounded-lg overflow-hidden hover-lift transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="relative">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900/80 backdrop-blur-sm text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="text-gray-400 mr-2" size={14} />
                      <span className="text-gray-400 text-sm">{post.author}</span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
                    >
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <Button
          size="lg"
          variant="outline"
          className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3"
        >
          Load More Articles
        </Button>
      </div>
    </div>
  )
}

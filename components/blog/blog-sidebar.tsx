"use client"

import { useState } from "react"
import { Search, TrendingUp, Tag, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const popularPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    date: "2024-01-15",
    readTime: "8 min read",
  },
  {
    title: "Building Scalable Mobile Apps with React Native",
    date: "2024-01-12",
    readTime: "6 min read",
  },
  {
    title: "AI Integration in Modern Software Development",
    date: "2024-01-10",
    readTime: "10 min read",
  },
]

const categories = [
  { name: "Web Development", count: 12 },
  { name: "Mobile Development", count: 8 },
  { name: "AI & Machine Learning", count: 6 },
  { name: "Cloud & Security", count: 10 },
  { name: "DevOps", count: 7 },
  { name: "UI/UX Design", count: 5 },
]

const tags = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "AI",
  "Machine Learning",
  "Cloud",
  "AWS",
  "Docker",
  "Kubernetes",
  "DevOps",
  "Security",
  "Mobile",
  "React Native",
  "Flutter",
  "JavaScript",
  "Python",
]

export default function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="glass-effect p-6 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Search className="mr-2 text-cyan-400" size={20} />
          Search Articles
        </h3>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-slate-800 border-slate-700 text-white pr-12"
          />
          <Button
            size="sm"
            className="absolute right-1 top-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
          >
            <Search size={16} />
          </Button>
        </div>
      </div>

      {/* Popular Posts */}
      <div className="glass-effect p-6 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <TrendingUp className="mr-2 text-cyan-400" size={20} />
          Popular Posts
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={index} className="border-b border-slate-700 last:border-b-0 pb-4 last:pb-0">
              <h4 className="text-white font-semibold mb-2 line-clamp-2 hover:text-cyan-400 cursor-pointer transition-colors">
                {post.title}
              </h4>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="glass-effect p-6 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Tag className="mr-2 text-cyan-400" size={20} />
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 hover:text-cyan-400 cursor-pointer transition-colors"
            >
              <span className="text-gray-300">{category.name}</span>
              <span className="text-cyan-400 text-sm">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="glass-effect p-6 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm hover:bg-cyan-500/30 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="glass-effect p-6 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
        <p className="text-gray-300 mb-4 text-sm">
          Subscribe to our newsletter for the latest tech insights and updates.
        </p>
        <div className="space-y-3">
          <Input type="email" placeholder="Your email address" className="bg-slate-800 border-slate-700 text-white" />
          <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  )
}

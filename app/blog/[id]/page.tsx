import type { Metadata } from "next"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// This would typically come from a database or CMS
const getBlogPost = (id: string) => {
  const posts = [
    {
      id: "1",
      title: "The Future of Web Development: Trends to Watch in 2024",
      content: `
        <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies. In this comprehensive guide, we'll explore the key trends that are shaping the future of web development.</p>
        
        <h2>1. AI-Powered Development Tools</h2>
        <p>Artificial Intelligence is revolutionizing how we write code. From GitHub Copilot to ChatGPT, AI tools are becoming indispensable for developers, helping with code generation, debugging, and optimization.</p>
        
        <h2>2. Progressive Web Apps (PWAs)</h2>
        <p>PWAs continue to gain traction as they offer native app-like experiences through web browsers. With improved offline capabilities and push notifications, PWAs are bridging the gap between web and mobile applications.</p>
        
        <h2>3. Serverless Architecture</h2>
        <p>Serverless computing is becoming mainstream, allowing developers to focus on code rather than infrastructure management. This trend is particularly strong with platforms like Vercel, Netlify, and AWS Lambda.</p>
        
        <h2>4. WebAssembly (WASM)</h2>
        <p>WebAssembly is enabling high-performance applications in the browser, allowing languages like Rust, C++, and Go to run at near-native speeds in web environments.</p>
        
        <h2>Conclusion</h2>
        <p>The future of web development is bright, with these trends promising to make development more efficient, applications more powerful, and user experiences more engaging. Stay ahead by embracing these technologies and continuously learning.</p>
      `,
      author: "Alex Prince",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["React", "Next.js", "AI", "PWA"],
    },
  ]

  return posts.find((post) => post.id === id)
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = getBlogPost(params.id)

  if (!post) {
    return {
      title: "Post Not Found - Prince Digital Hub Blog",
    }
  }

  return {
    title: `${post.title} - Prince Digital Hub Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
    keywords: post.tags.join(", "),
  }
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 mb-8"
            >
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2" size={16} />
                Back to Blog
              </Link>
            </Button>

            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-semibold">{post.category}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-300">
              <div className="flex items-center">
                <User className="mr-2" size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2" size={16} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2" size={16} />
                <span>{post.readTime}</span>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
              >
                <Share2 className="mr-2" size={14} />
                Share
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-lg overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-64 sm:h-96 object-cover"
              />

              <div className="p-8 sm:p-12">
                <div
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    color: "#e2e8f0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

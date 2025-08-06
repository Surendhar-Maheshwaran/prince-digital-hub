import type { Metadata } from "next"
import BlogHero from "@/components/blog/blog-hero"
import BlogGrid from "@/components/blog/blog-grid"
import BlogSidebar from "@/components/blog/blog-sidebar"

export const metadata: Metadata = {
  title: "Blog - Prince Digital Hub | Tech Insights & Industry News",
  description:
    "Stay updated with the latest technology trends, software development insights, and industry news from Prince Digital Hub's expert team.",
  keywords: "technology blog, software development, tech trends, programming, web development, mobile apps",
}

export default function BlogPage() {
  return (
    <div className="pt-16">
      <BlogHero />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BlogGrid />
            </div>
            <div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

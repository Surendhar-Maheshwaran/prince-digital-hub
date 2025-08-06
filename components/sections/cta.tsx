import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
          Let's discuss your project and create something amazing together. Get in touch with our team today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg hover-lift">
            <Link href="/contact" className="flex items-center">
              Start Your Project <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 text-lg hover-lift"
          >
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

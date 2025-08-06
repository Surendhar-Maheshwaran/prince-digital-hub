import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Prince Digital Hub",
  description:
    "Get in touch with Prince Digital Hub for your software development needs. We're here to help transform your business.",
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@princedigitalhub.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 5pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Tech Street, Digital City, DC 12345",
    description: "Come say hello at our office",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon-Fri: 8am-5pm",
    description: "Weekend support available",
  },
]

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to start your next project? We'd love to hear from you. Let's discuss how we can help transform your
              business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg text-center hover-lift">
                <info.icon className="text-cyan-400 mx-auto mb-4" size={40} />
                <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-cyan-400 mb-2">{info.details}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Let's Start a <span className="gradient-text">Conversation</span>
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Free consultation and project assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Detailed project proposal and timeline</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Transparent pricing and no hidden costs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Ongoing support and maintenance</span>
                  </div>
                </div>
              </div>
              <div className="glass-effect p-8 rounded-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from "next"
import { Users, Target, Award, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Prince Digital Hub",
  description:
    "Learn about Prince Digital Hub's mission, vision, and the talented team behind our innovative software solutions.",
}

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We are committed to delivering exceptional software solutions that drive business growth and innovation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies and creative approaches to solve complex challenges.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Our clients' success is our success. We build lasting partnerships through trust and excellence.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in code quality, security, and performance in every project.",
  },
]

const team = [
  {
    name: "Alex Prince",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in software development and business strategy.",
  },
  {
    name: "Sarah Mitchell",
    role: "CTO",
    bio: "Technical expert specializing in cloud architecture and scalable systems.",
  },
  {
    name: "David Chen",
    role: "Lead Developer",
    bio: "Full-stack developer with expertise in modern web technologies and AI integration.",
  },
  {
    name: "Maria Rodriguez",
    role: "UX/UI Designer",
    bio: "Creative designer focused on user-centered design and digital experiences.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Prince Digital Hub</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a team of passionate developers, designers, and innovators dedicated to creating software solutions
              that transform businesses and drive digital excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2018, Prince Digital Hub began as a small team of developers with a big vision: to
                democratize access to cutting-edge technology solutions for businesses of all sizes.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Over the years, we've grown into a full-service software development company, but our core values remain
                the same - innovation, quality, and client success.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we're proud to have helped over 150 businesses transform their operations through custom software
                solutions, and we're just getting started.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                  <div className="text-gray-300">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">150+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-300">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">6</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg text-center hover-lift">
                <value.icon className="text-cyan-400 mx-auto mb-4" size={40} />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The talented individuals who make Prince Digital Hub a leader in software innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg text-center hover-lift">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

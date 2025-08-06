import type { Metadata } from "next"
import PortfolioHero from "@/components/portfolio/portfolio-hero"
import ProjectsGrid from "@/components/portfolio/projects-grid"
import ProjectStats from "@/components/portfolio/project-stats"
import ClientLogos from "@/components/portfolio/client-logos"

export const metadata: Metadata = {
  title: "Portfolio - Prince Digital Hub | Our Work & Projects",
  description:
    "Explore our portfolio of successful software development projects. See how we've helped businesses transform through innovative technology solutions.",
  keywords: "portfolio, projects, software development, web applications, mobile apps, case studies",
}

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      <PortfolioHero />
      <ProjectStats />
      <ProjectsGrid />
      <ClientLogos />
    </div>
  )
}

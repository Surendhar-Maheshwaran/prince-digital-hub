import type { Metadata } from "next"
import ServicesHero from "@/components/services/services-hero"
import ServicesList from "@/components/services/services-list"
import PricingPlans from "@/components/services/pricing-plans"
import ProcessSection from "@/components/services/process-section"
import CaseStudies from "@/components/services/case-studies"
import ServicesCTA from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Services - Prince Digital Hub | Software Development Solutions",
  description:
    "Comprehensive software development services including web development, mobile apps, cloud solutions, AI integration, and more. Transform your business with our expert team.",
  keywords: "software development services, web development, mobile apps, cloud solutions, AI integration, DevOps",
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <PricingPlans />
      <CaseStudies />
      <ServicesCTA />
    </div>
  )
}

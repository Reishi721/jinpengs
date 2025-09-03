"use client"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { PartnersCarousel } from "@/components/partners-carousel"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { FeaturedProducts } from "@/components/featured-products"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PartnersCarousel />
      <StatsSection />
      <CapabilitiesSection />
      <FeaturedProducts />
      <CTASection />
    </div>
  )
}

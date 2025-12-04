import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ProcessSection } from "@/components/process-section"
import { MastersSection } from "@/components/masters-section"
import { PricingSection } from "@/components/pricing-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  console.log("[v0] Home page rendering")

  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <MastersSection />
      <PricingSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <BookingSection />
      <Footer />
      <FloatingButtons />
      <BackToTop />
    </main>
  )
}

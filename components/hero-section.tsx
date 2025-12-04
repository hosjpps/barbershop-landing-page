"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Award, Users, Star } from "lucide-react"

const trustBadges = [
  { icon: Award, label: "10+ лет опыта" },
  { icon: Users, label: "5000+ клиентов" },
  { icon: Star, label: "Лучшие мастера" },
]

export function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log("[v0] HeroSection mounted")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/dark-luxury-barbershop-interior-with-leather-chair.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight text-balance">
          СТРИЖКА КАК <span className="text-accent">ИСКУССТВО</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
          Премиальный барбершоп в центре города
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg transition-transform hover:-translate-y-1"
            onClick={scrollToServices}
          >
            Записаться онлайн
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 py-6 text-lg bg-transparent"
            onClick={scrollToPricing}
          >
            Посмотреть цены
          </Button>
        </div>

        {/* Trust Badges */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-0 duration-700">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border/50"
            >
              <badge.icon className="h-5 w-5 text-accent" />
              <span className="text-foreground font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}

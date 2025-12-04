"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#services", label: "Услуги" },
  { href: "#pricing", label: "Цены" },
  { href: "#masters", label: "Мастера" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contact", label: "Контакты" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Scissors className="h-8 w-8 text-accent transition-transform group-hover:rotate-45" />
            <span className="font-serif text-2xl font-bold text-foreground tracking-wider">KING'S BARBER</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-accent transition-colors font-medium tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+79991234567"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+7 (999) 123-45-67</span>
            </a>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 transition-transform hover:-translate-y-0.5">
              Записаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-20 bg-background z-40 transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl text-foreground hover:text-accent transition-colors py-3 border-b border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:+79991234567" className="flex items-center gap-2 text-muted-foreground py-3">
            <Phone className="h-5 w-5" />
            <span>+7 (999) 123-45-67</span>
          </a>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mt-4 w-full">
            Записаться
          </Button>
        </nav>
      </div>
    </header>
  )
}

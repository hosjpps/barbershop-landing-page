"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Алексей К.",
    date: "15 ноября 2024",
    text: "Лучший барбершоп в городе! Хожу уже 3 года, всегда на высоте. Мастера знают своё дело.",
    rating: 5,
  },
  {
    name: "Михаил С.",
    date: "10 ноября 2024",
    text: "Отличная атмосфера, профессиональные мастера. Рекомендую всем, кто ценит качество!",
    rating: 5,
  },
  {
    name: "Дмитрий В.",
    date: "5 ноября 2024",
    text: "Записался онлайн, пришёл вовремя, ушёл довольный. Стрижка супер, буду возвращаться.",
    rating: 5,
  },
  {
    name: "Андрей П.",
    date: "1 ноября 2024",
    text: "Королевское бритье — это нечто! Никогда раньше такого не испытывал. Полный релакс.",
    rating: 5,
  },
  {
    name: "Сергей Н.",
    date: "28 октября 2024",
    text: "Привёл сына, оба остались довольны. Отличный сервис и приятные цены.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - visibleCount : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - visibleCount ? 0 : prev + 1))
  }

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Quote pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-8xl font-serif text-foreground">
              "
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-secondary-foreground mb-16 tracking-tight">
          ОТЗЫВЫ <span className="text-accent">КЛИЕНТОВ</span>
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 px-3" style={{ width: `${100 / visibleCount}%` }}>
                  <Card className="bg-card border-border h-full">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-accent/20 text-accent">
                            {testimonial.name.split(" ")[0][0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background hover:bg-accent text-foreground hover:text-accent-foreground rounded-full p-2 shadow-lg transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background hover:bg-accent text-foreground hover:text-accent-foreground rounded-full p-2 shadow-lg transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Scissors, Sparkles, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: "scissors",
    title: "Классическая стрижка",
    description: "Точная стрижка машинкой и ножницами от опытного мастера",
    price: "от 1500 ₽",
    duration: "40 минут",
  },
  {
    icon: "razor",
    title: "Королевское бритье",
    description: "Горячее бритье опасной бритвой с компрессами и массажем",
    price: "от 1200 ₽",
    duration: "45 минут",
  },
  {
    icon: "beard",
    title: "Моделирование бороды",
    description: "Стрижка, укладка и уход за бородой любой длины",
    price: "от 1000 ₽",
    duration: "30 минут",
  },
  {
    icon: "dryer",
    title: "Укладка волос",
    description: "Профессиональная укладка с использованием премиум-средств",
    price: "от 800 ₽",
    duration: "20 минут",
  },
  {
    icon: "bottle",
    title: "Камуфляж седины",
    description: "Естественное тонирование седых волос",
    price: "от 1500 ₽",
    duration: "50 минут",
  },
  {
    icon: "combo",
    title: "Комплекс 'Gentleman'",
    description: "Стрижка + борода + бритье + укладка",
    price: "от 3500 ₽",
    duration: "90 минут",
    popular: true,
  },
]

function ServiceIcon({ type, className }: { type: string; className?: string }) {
  return (
    <div className={cn("w-12 h-12 flex items-center justify-center", className)}>
      {type === "scissors" && <Scissors className="h-8 w-8" />}
      {type === "razor" && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
          <path d="M4 20L20 4M8 4H4v4M20 16v4h-4" />
        </svg>
      )}
      {type === "beard" && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
          <path d="M12 2C8 2 4 4 4 8v4c0 4 4 10 8 10s8-6 8-10V8c0-4-4-6-8-6z" />
          <path d="M8 12c0 2 1.5 4 4 4s4-2 4-4" />
        </svg>
      )}
      {type === "dryer" && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
          <circle cx="12" cy="10" r="6" />
          <path d="M12 16v6M8 22h8" />
          <path d="M10 7l4 6" />
        </svg>
      )}
      {type === "bottle" && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
          <path d="M10 2h4v4l2 2v14H8V8l2-2V2z" />
          <path d="M8 12h8" />
        </svg>
      )}
      {type === "combo" && <Sparkles className="h-8 w-8" />}
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-16 tracking-tight">
          НАШИ <span className="text-accent">УСЛУГИ</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative bg-card border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10 overflow-hidden"
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">ПОПУЛЯРНО</Badge>
              )}
              <CardContent className="p-6">
                <ServiceIcon type={service.icon} className="text-accent mb-4" />
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-accent">{service.price}</span>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                </div>
                <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80 font-medium">
                  Записаться →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

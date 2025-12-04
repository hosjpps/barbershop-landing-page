import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram } from "lucide-react"

const masters = [
  {
    name: "Дмитрий Иванов",
    position: "Топ-барбер",
    experience: "12 лет опыта",
    specialization: "Классика, fade, моделирование бороды",
    image: "/professional-male-barber-portrait-dark-background.jpg",
  },
  {
    name: "Александр Петров",
    position: "Старший барбер",
    experience: "10 лет опыта",
    specialization: "Креативные стрижки, тонирование",
    image: "/skilled-barber-man-portrait-studio-lighting.jpg",
  },
  {
    name: "Михаил Сидоров",
    position: "Барбер-стилист",
    experience: "8 лет опыта",
    specialization: "Бритье, уход за бородой",
    image: "/handsome-barber-professional-headshot.jpg",
  },
]

export function MastersSection() {
  return (
    <section id="masters" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-secondary-foreground mb-16 tracking-tight">
          НАШИ <span className="text-accent">МАСТЕРА</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {masters.map((master, index) => (
            <Card
              key={index}
              className="group bg-card border-border overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={master.image || "/placeholder.svg"}
                  alt={master.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-accent/50 transition-colors duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">{master.name}</h3>
                <p className="text-accent font-medium mb-2">{master.position}</p>
                <p className="text-muted-foreground text-sm mb-1">{master.experience}</p>
                <p className="text-muted-foreground text-sm mb-4">{master.specialization}</p>

                <div className="flex items-center justify-between">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm">
                    Записаться к мастеру
                  </Button>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Star, Droplets, Clock, Coffee } from "lucide-react"

const benefits = [
  {
    icon: Star,
    title: "Опытные мастера",
    description: "Более 10 лет стажа у каждого барбера",
  },
  {
    icon: Droplets,
    title: "Premium косметика",
    description: "Работаем только с брендами American Crew, Uppercut, Layrite",
  },
  {
    icon: Clock,
    title: "Удобная запись",
    description: "Онлайн-бронирование 24/7 или по телефону",
  },
  {
    icon: Coffee,
    title: "Комфорт и атмосфера",
    description: "Виски, кофе, PlayStation и спортивные трансляции",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              currentColor 10px,
              currentColor 11px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-secondary-foreground mb-16 tracking-tight">
          ПОЧЕМУ <span className="text-accent">ВЫБИРАЮТ НАС</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

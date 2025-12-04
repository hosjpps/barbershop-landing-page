const steps = [
  {
    number: "01",
    title: "Запись",
    description: "Выберите удобное время онлайн или по телефону",
  },
  {
    number: "02",
    title: "Консультация",
    description: "Обсудим желаемый результат и подберем стиль",
  },
  {
    number: "03",
    title: "Стрижка",
    description: "Выполним услугу с максимальным вниманием к деталям",
  },
  {
    number: "04",
    title: "Результат",
    description: "Получите идеальную стрижку и рекомендации по уходу",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-16 tracking-tight">
          КАК МЫ <span className="text-accent">РАБОТАЕМ</span>
        </h2>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step number circle */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground font-serif text-xl font-bold mb-6 z-10">
                  {step.number}
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

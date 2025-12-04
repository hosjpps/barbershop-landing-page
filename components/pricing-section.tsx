"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

const pricingCategories = {
  haircuts: [
    { name: "Классическая стрижка", description: "Машинка + ножницы", duration: "40 мин", price: "1500 ₽" },
    { name: "Стрижка Fade", description: "Плавный переход", duration: "50 мин", price: "1800 ₽" },
    { name: "Детская стрижка", description: "До 12 лет", duration: "30 мин", price: "1000 ₽" },
    { name: "Стрижка под машинку", description: "Одна насадка", duration: "20 мин", price: "800 ₽" },
  ],
  shaving: [
    { name: "Королевское бритье", description: "Опасная бритва + компрессы", duration: "45 мин", price: "1200 ₽" },
    { name: "Коррекция бороды", description: "Машинка + триммер", duration: "20 мин", price: "600 ₽" },
    { name: "Моделирование бороды", description: "Полный уход", duration: "30 мин", price: "1000 ₽" },
  ],
  care: [
    { name: "Камуфляж седины", description: "Тонирование волос", duration: "50 мин", price: "1500 ₽" },
    { name: "Укладка", description: "Premium средства", duration: "20 мин", price: "800 ₽" },
    { name: "Черная маска", description: "Очищение пор", duration: "15 мин", price: "500 ₽" },
  ],
  combos: [
    {
      name: "Gentleman",
      description: "Стрижка + борода + бритье + укладка",
      duration: "90 мин",
      price: "3500 ₽",
      popular: true,
    },
    { name: "Бизнес", description: "Стрижка + укладка", duration: "50 мин", price: "2000 ₽" },
    { name: "Отец и сын", description: "Две стрижки", duration: "70 мин", price: "2200 ₽" },
  ],
}

export function PricingSection() {
  const [activeTab, setActiveTab] = useState("haircuts")

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-4 tracking-tight">
          ПРАЙС-<span className="text-accent">ЛИСТ</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12">
          <Badge variant="outline" className="border-accent text-accent">
            Скидка 10% при первом посещении
          </Badge>
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-card">
            <TabsTrigger
              value="haircuts"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Стрижки
            </TabsTrigger>
            <TabsTrigger
              value="shaving"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Бритье
            </TabsTrigger>
            <TabsTrigger
              value="care"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Уход
            </TabsTrigger>
            <TabsTrigger
              value="combos"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              Комплексы
            </TabsTrigger>
          </TabsList>

          {Object.entries(pricingCategories).map(([key, items]) => (
            <TabsContent key={key} value={key} className="space-y-2">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                    index % 2 === 0 ? "bg-card" : "bg-muted/50"
                  } hover:bg-accent/10`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      {item.popular && <Badge className="bg-accent text-accent-foreground text-xs">ПОПУЛЯРНО</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{item.duration}</span>
                    </div>
                    <span className="text-xl font-bold text-accent min-w-[100px] text-right">{item.price}</span>
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <div className="inline-block bg-accent/10 border border-accent/30 rounded-lg p-4">
            <p className="text-accent font-medium">
              🎁 Каждая 10-я стрижка <span className="font-bold">БЕСПЛАТНО</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone } from "lucide-react"

const services = [
  "Классическая стрижка",
  "Королевское бритье",
  "Моделирование бороды",
  "Укладка волос",
  "Камуфляж седины",
  "Комплекс 'Gentleman'",
]

const timeSlots = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
]

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Введите ваше имя"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона"
    } else if (!/^\+?[0-9\s\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Введите корректный номер телефона"
    }

    if (!formData.service) {
      newErrors.service = "Выберите услугу"
    }

    if (!formData.date) {
      newErrors.date = "Выберите дату"
    }

    if (!formData.time) {
      newErrors.time = "Выберите время"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0]

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto bg-background rounded-lg p-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Спасибо за заявку!</h3>
            <p className="text-muted-foreground">Мы свяжемся с вами в течение 10 минут для подтверждения записи.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent-foreground mb-4 tracking-tight">
            ГОТОВЫ К ПРЕОБРАЖЕНИЮ?
          </h2>
          <p className="text-accent-foreground/80 mb-12 text-lg">Запишитесь прямо сейчас и получите скидку 10%</p>

          <form onSubmit={handleSubmit} className="bg-background rounded-lg p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="text-left">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="text-left">
                <Input
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="mb-4 text-left">
              <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.service && <p className="text-destructive text-sm mt-1">{errors.service}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="text-left">
                <Input
                  type="date"
                  min={today}
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className={errors.date ? "border-destructive" : ""}
                />
                {errors.date && <p className="text-destructive text-sm mt-1">{errors.date}</p>}
              </div>
              <div className="text-left">
                <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                  <SelectTrigger className={errors.time ? "border-destructive" : ""}>
                    <SelectValue placeholder="Выберите время" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.time && <p className="text-destructive text-sm mt-1">{errors.time}</p>}
              </div>
            </div>

            <div className="mb-6">
              <Textarea
                placeholder="Комментарий к записи (необязательно)"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={3}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-foreground hover:bg-foreground/90 text-background font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Записаться"}
            </Button>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground mb-2">Или позвоните нам:</p>
              <a
                href="tel:+79991234567"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
              >
                <Phone className="h-4 w-4" />
                +7 (999) 123-45-67
              </a>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="#" className="underline hover:text-accent">
                политикой конфиденциальности
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

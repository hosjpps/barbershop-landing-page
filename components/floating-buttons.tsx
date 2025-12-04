"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Send } from "lucide-react"

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://t.me/kingsbarber"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#0088cc] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Telegram"
      >
        <Send className="h-6 w-6" />
      </a>
      <a
        href="https://wa.me/79991234567"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}

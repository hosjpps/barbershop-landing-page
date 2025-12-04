import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Oswald } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _oswald = Oswald({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "King's Barber - Премиальный барбершоп в Москве",
  description: "Мужские стрижки, бритье, уход за бородой. Опытные мастера, премиум-косметика. Запись онлайн 24/7.",
  keywords: "барбершоп, мужские стрижки, бритье, борода, Москва, барбер",
  authors: [{ name: "King's Barber" }],
  openGraph: {
    title: "King's Barber - Премиальный барбершоп в Москве",
    description: "Мужские стрижки, бритье, уход за бородой. Опытные мастера, премиум-косметика.",
    type: "website",
    locale: "ru_RU",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

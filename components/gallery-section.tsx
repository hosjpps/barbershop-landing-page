"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, Instagram } from "lucide-react"

const galleryImages = [
  { src: "/mens-fade-haircut-before-after.jpg", alt: "Fade стрижка" },
  { src: "/beard-grooming-styling-result.jpg", alt: "Моделирование бороды" },
  { src: "/classic-mens-haircut-professional.jpg", alt: "Классическая стрижка" },
  { src: "/hot-towel-shave.png", alt: "Королевское бритье" },
  { src: "/modern-undercut-hairstyle-men.jpg", alt: "Undercut" },
  { src: "/pompadour-hairstyle-styling.jpg", alt: "Помпадур" },
  { src: "/textured-crop-haircut-men.jpg", alt: "Текстурный кроп" },
  { src: "/slick-back-hairstyle-professional.jpg", alt: "Slick back" },
  { src: "/buzz-cut-clean-shave.jpg", alt: "Buzz cut" },
  { src: "/taper-fade-haircut-style.jpg", alt: "Taper fade" },
  { src: "/caesar-haircut-modern.jpg", alt: "Цезарь" },
  { src: "/quiff-hairstyle-men-styling.jpg", alt: "Квифф" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-16 tracking-tight">
          НАШИ <span className="text-accent">РАБОТЫ</span>
        </h2>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={300}
                  height={400}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Больше работ в нашем Instagram
          </Button>
        </div>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-md border-border p-0">
            <div className="relative">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-foreground hover:text-accent transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>

              {selectedImage !== null && (
                <div className="relative aspect-[3/4] max-h-[80vh]">
                  <Image
                    src={galleryImages[selectedImage].src || "/placeholder.svg"}
                    alt={galleryImages[selectedImage].alt}
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 rounded-full p-2 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 rounded-full p-2 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

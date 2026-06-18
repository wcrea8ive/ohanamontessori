'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react'

export default function PhotoGalleryLightbox({ images, alt }: { images: string[]; alt: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const close = useCallback(() => {
    setActiveIndex(null)
    if (document.fullscreenElement) document.exitFullscreen()
  }, [])

  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length))
  }, [images.length])

  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length))
  }, [images.length])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }, [])

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement)

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('fullscreenchange', onFullscreenChange)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('fullscreenchange', onFullscreenChange)
      document.body.style.overflow = ''
    }
  }, [activeIndex, close, showPrev, showNext])

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="relative w-full aspect-[3/2] rounded-[8px] overflow-hidden cursor-pointer"
          >
            <Image src={src} alt={alt} fill className="object-cover" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/90"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 text-white">
            <span className="text-sm sm:text-base">
              {activeIndex + 1} / {images.length}
            </span>
            <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
              <button type="button" onClick={toggleFullscreen} aria-label="Toggle fullscreen">
                {isFullscreen ? <Minimize size={22} /> : <Maximize size={22} />}
              </button>
              <button type="button" onClick={close} aria-label="Close">
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="relative flex-1 flex items-center justify-center px-4 sm:px-16 pb-6">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                showPrev()
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white p-2"
            >
              <ChevronLeft size={32} />
            </button>

            <div
              className="relative w-full h-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt={alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white p-2"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

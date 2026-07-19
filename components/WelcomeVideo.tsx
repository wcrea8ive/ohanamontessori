'use client'

import { useRef, useState } from 'react'
import { Play } from 'lucide-react'
import Image from 'next/image'

export default function WelcomeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative w-full md:w-[51%]" style={{ minHeight: '250px' }}>
      {playing ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/ohana-reel.mp4"
          controls
          autoPlay
          playsInline
          onPause={() => setPlaying(false)}
        />
      ) : (
        <>
          <Image
            src="/ohana-reel-poster.jpg"
            alt="Ohana Montessori school"
            fill
            priority
            sizes="(min-width: 768px) 51vw, 100vw"
            className="object-cover"
          />
          <button
            type="button"
            aria-label="Play video"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center transition-colors hover:bg-black/10"
          >
            <span
              className="flex items-center justify-center rounded-full"
              style={{ width: '64px', height: '64px', border: '2px solid #fff', background: 'rgba(0,0,0,0.25)' }}
            >
              <Play size={24} color="#fff" fill="#fff" style={{ marginLeft: '3px' }} />
            </span>
          </button>
        </>
      )}
      <div
        className="absolute inset-x-0 bottom-0 px-6 py-6 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%)' }}
      >
        <p className="text-white" style={{ fontFamily: 'var(--font-nunito)', fontWeight: 400, fontSize: 'clamp(22px, 2.6vw, 32px)' }}>
          Welcome to Ohana Montessori
        </p>
      </div>
    </div>
  )
}

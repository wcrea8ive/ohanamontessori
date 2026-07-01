'use client'

import { useRef, useState } from 'react'
import { Play } from 'lucide-react'

export default function WelcomeVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <div className="relative w-full md:w-[51%]" style={{ minHeight: '250px' }}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="https://ik.imagekit.io/ka7399/ka-ohana-project-cut.mp4"
        controls
        preload="metadata"
        playsInline
        onPlay={() => setVideoPlaying(true)}
        onPause={() => setVideoPlaying(false)}
      />
      {!videoPlaying && (
        <button
          type="button"
          aria-label="Play video"
          onClick={() => videoRef.current?.play()}
          className="absolute inset-0 flex items-center justify-center transition-colors hover:bg-black/10"
        >
          <span
            className="flex items-center justify-center rounded-full"
            style={{ width: '64px', height: '64px', border: '2px solid #fff' }}
          >
            <Play size={24} color="#fff" fill="#fff" style={{ marginLeft: '3px' }} />
          </span>
        </button>
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

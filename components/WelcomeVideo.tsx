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
    </div>
  )
}

'use client'

import { useEffect, useRef } from 'react'

interface Props {
  formId: string
  title: string
}

export default function JotFormEmbed({ formId, title }: Props) {
  const iframeId = `JotFormIFrame-${formId}`
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Stub so JotForm's iframe JS doesn't throw when it calls window.parent.jotformEmbedHandler()
    // We intentionally do NOT load the real embed handler — it injects the form into the parent
    // DOM which causes Tailwind's CSS resets to break JotForm's custom dropdown styling.
    if (typeof (window as any).jotformEmbedHandler === 'undefined') {
      ;(window as any).jotformEmbedHandler = () => {}
    }

    function handleMessage(e: MessageEvent) {
      if (typeof e.data !== 'string') return
      const iframe = iframeRef.current
      if (!iframe || !e.data.includes(iframeId)) return
      try {
        const data = JSON.parse(e.data)
        if (data.action === 'setHeight' && data.value) {
          iframe.style.height = `${data.value}px`
        }
      } catch {
        // not JSON — ignore
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [iframeId])

  return (
    <iframe
      ref={iframeRef}
      id={iframeId}
      title={title}
      src={`https://form.jotform.com/${formId}`}
      allowTransparency={true}
      allow="geolocation; microphone; camera; fullscreen; payment"
      style={{ minWidth: '100%', maxWidth: '100%', height: '1000px', border: 'none' }}
    />
  )
}

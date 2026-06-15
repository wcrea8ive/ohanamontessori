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
    const iframe = iframeRef.current
    if (!iframe) return

    // Add isIframeEmbed=1 + parentURL to the src so JotForm renders in
    // iframe-compatible mode (proper dropdown, not expanded list).
    const parentURL = encodeURIComponent(window.location.href)
    const src = `https://form.jotform.com/${formId}?isIframeEmbed=1&parentURL=${parentURL}`
    if (iframe.src !== src) iframe.src = src

    // Stub so JotForm's postMessage to window.parent.jotformEmbedHandler doesn't throw
    if (typeof (window as any).jotformEmbedHandler === 'undefined') {
      ;(window as any).jotformEmbedHandler = () => {}
    }

    function handleMessage(e: MessageEvent) {
      if (typeof e.data !== 'string') return
      const parts = e.data.split(':')
      if (parts[0] === 'setHeight' && iframe) {
        const h = parseInt(parts[1], 10)
        if (!isNaN(h)) iframe.style.height = `${h}px`
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [formId])

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

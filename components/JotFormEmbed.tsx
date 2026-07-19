'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'

interface Props {
  formId: string
  title: string
}

export default function JotFormEmbed({ formId, title }: Props) {
  const router = useRouter()
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      // Submission redirect
      if (typeof e.data === 'string' && e.data.includes('submissionCompleted')) {
        router.push('/thank-you')
        return
      }
      if (e.data?.action === 'submission-completed') {
        router.push('/thank-you')
        return
      }

      // Auto-resize iframe height from JotForm postMessage
      if (e.data?.action === 'setHeight' && iframeRef.current) {
        const h = parseInt(e.data.value ?? e.data.height, 10)
        if (!isNaN(h) && h > 0) iframeRef.current.style.height = h + 'px'
        return
      }
      if (typeof e.data === 'string') {
        try {
          const parsed = JSON.parse(e.data)
          if (parsed.action === 'setHeight' && iframeRef.current) {
            const h = parseInt(parsed.value ?? parsed.height, 10)
            if (!isNaN(h) && h > 0) iframeRef.current.style.height = h + 'px'
          }
        } catch {}
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [router])

  return (
    <>
      <iframe
        ref={iframeRef}
        id={`JotFormIFrame-${formId}`}
        title={title}
        src={`https://form.jotform.com/${formId}?isIframeEmbed=1`}
        allowTransparency
        allow="geolocation; microphone; camera; fullscreen; payment"
        scrolling="no"
        style={{ minWidth: '100%', maxWidth: '100%', height: '800px', border: 'none', overflow: 'hidden' }}
      />
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="afterInteractive"
        onLoad={() => {
          ;(window as any).jotformEmbedHandler(
            `iframe[id='JotFormIFrame-${formId}']`,
            'https://form.jotform.com/'
          )
        }}
      />
    </>
  )
}

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

      // Auto-resize — parse both object and JSON-string formats
      const data =
        e.data && typeof e.data === 'object'
          ? e.data
          : (() => { try { return JSON.parse(e.data) } catch { return null } })()
      if (data?.action === 'setHeight' && iframeRef.current) {
        const h = parseInt(data.value ?? data.height, 10)
        if (!isNaN(h) && h > 0) iframeRef.current.style.height = h + 'px'
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [router])

  function initHandler() {
    if (typeof (window as any).jotformEmbedHandler === 'function') {
      ;(window as any).jotformEmbedHandler(
        `iframe[id='JotFormIFrame-${formId}']`,
        'https://form.jotform.com/'
      )
    }
  }

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
        onLoad={initHandler}
        style={{ minWidth: '100%', maxWidth: '100%', height: '1400px', border: 'none', overflow: 'hidden' }}
      />
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="afterInteractive"
        onLoad={initHandler}
      />
    </>
  )
}

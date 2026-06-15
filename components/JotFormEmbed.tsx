'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

interface Props {
  formId: string
  title: string
}

export default function JotFormEmbed({ formId, title }: Props) {
  const iframeId = `JotFormIFrame-${formId}`
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
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
    <>
      <iframe
        ref={iframeRef}
        id={iframeId}
        title={title}
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen; payment"
        src={`https://form.jotform.com/${formId}`}
        style={{ minWidth: '100%', maxWidth: '100%', height: '1000px', border: 'none', overflow: 'hidden' }}
      />
      <Script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" strategy="afterInteractive" />
      <Script id={`jotform-init-${formId}`} strategy="afterInteractive">
        {`window.jotformEmbedHandler("iframe[id='${iframeId}']", "https://form.jotform.com/")`}
      </Script>
    </>
  )
}

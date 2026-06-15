'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

export default function JotFormEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (typeof e.data !== 'string') return
      const iframe = iframeRef.current
      if (!iframe) return

      // JotForm sends "scrollIntoView" and height resize messages
      if (e.data.includes('JotFormIFrame-261624122302139')) {
        try {
          const data = JSON.parse(e.data)
          if (data.action === 'setHeight' && data.value) {
            iframe.style.height = `${data.value}px`
          }
        } catch {
          // not JSON — ignore
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <>
      <iframe
        ref={iframeRef}
        id="JotFormIFrame-261624122302139"
        title="Job Application / Contact Form"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/261624122302139"
        style={{ minWidth: '100%', maxWidth: '100%', height: '1000px', border: 'none', overflow: 'hidden' }}
      />
      <Script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" strategy="afterInteractive" />
      <Script id="jotform-init" strategy="afterInteractive">
        {`window.jotformEmbedHandler("iframe[id='JotFormIFrame-261624122302139']", "https://form.jotform.com/")`}
      </Script>
    </>
  )
}

'use client'

import Script from 'next/script'

declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, baseUrl: string) => void
  }
}

export default function JotFormEmbed() {
  return (
    <>
      <iframe
        id="JotFormIFrame-261624122302139"
        title="Job Application / Contact Form"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowtransparency="true"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/261624122302139"
        style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
      />
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.jotformEmbedHandler?.("iframe[id='JotFormIFrame-261624122302139']", "https://form.jotform.com/")
        }}
      />
    </>
  )
}

'use client'

import Script from 'next/script'

interface Props {
  formId: string
  title: string
}

export default function JotFormEmbed({ formId, title }: Props) {
  return (
    <>
      <iframe
        id={`JotFormIFrame-${formId}`}
        title={title}
        src={`https://form.jotform.com/${formId}?isIframeEmbed=1`}
        allowTransparency
        allow="geolocation; microphone; camera; fullscreen; payment"
        scrolling="no"
        style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
      />
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="afterInteractive"
        onLoad={() => {
          ;(window as any).jotformEmbedHandler(`iframeId=${formId}`, 'https://form.jotform.com/')
        }}
      />
    </>
  )
}

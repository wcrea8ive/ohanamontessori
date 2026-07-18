'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'

interface Props {
  formId: string
  title: string
}

export default function JotFormEmbed({ formId, title }: Props) {
  const router = useRouter()

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (typeof e.data === 'string' && e.data.includes('submissionCompleted')) {
        router.push('/thank-you')
        return
      }
      if (e.data?.action === 'submission-completed') {
        router.push('/thank-you')
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [router])

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
          ;(window as any).jotformEmbedHandler(`#JotFormIFrame-${formId}`, 'https://form.jotform.com/')
        }}
      />
    </>
  )
}

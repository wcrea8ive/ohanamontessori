'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  formId: string
  title?: string
}

export default function JotFormEmbed({ formId }: Props) {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const injected = useRef(false)

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (typeof e.data === 'string' && e.data.includes('submissionCompleted')) {
        router.push('/thank-you')
        return
      }
      if (e.data?.action === 'submission-completed') {
        router.push('/thank-you')
        return
      }
    }
    window.addEventListener('message', handleMessage)

    // Watch for the iframe JotForm creates and enforce a minimum height so
    // the submit button is never clipped if JotForm underestimates height
    const observer = new MutationObserver(() => {
      const iframe = containerRef.current?.querySelector('iframe')
      if (iframe) {
        iframe.style.minHeight = '900px'
      }
    })
    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true, subtree: true, attributes: true, attributeFilter: ['style'] })
    }

    // Inject once per mount — JotForm's jsform script renders the form
    // at the location of the script tag inside the container div
    if (containerRef.current && !injected.current) {
      injected.current = true
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://form.jotform.com/jsform/${formId}`
      containerRef.current.appendChild(script)
    }

    return () => {
      window.removeEventListener('message', handleMessage)
      observer.disconnect()
    }
  }, [formId, router])

  // min-height prevents the container from collapsing to 0 while the script loads,
  // and gives the iframe room if JotForm underestimates height after reCAPTCHA loads
  return <div ref={containerRef} style={{ minHeight: '900px' }} />
}

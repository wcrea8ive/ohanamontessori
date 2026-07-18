import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | Ohana Montessori',
  description: 'Thank you for reaching out to Ohana Montessori. We will be in touch soon.',
  robots: 'noindex',
}

export default function ThankYouPage() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-6"
      style={{ minHeight: '60vh', paddingTop: '80px', paddingBottom: '80px' }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-baskervville)',
          fontWeight: 400,
          fontSize: 'clamp(36px, 5vw, 56px)',
          color: 'var(--brown)',
          marginBottom: '20px',
        }}
      >
        Thank You!
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-work-sans)',
          fontSize: '18px',
          color: 'var(--text-muted)',
          maxWidth: '520px',
          lineHeight: 1.6,
          marginBottom: '36px',
        }}
      >
        We received your message and will be in touch with you shortly. We look forward to welcoming your family to Ohana Montessori.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-work-sans)',
          fontWeight: 600,
          textTransform: 'uppercase' as const,
          fontSize: '14px',
          color: '#fff',
          background: 'var(--brown)',
          border: '1px solid var(--brown)',
          borderRadius: '100px',
          padding: '15px 40px',
        }}
      >
        Back to Home
      </Link>
    </section>
  )
}

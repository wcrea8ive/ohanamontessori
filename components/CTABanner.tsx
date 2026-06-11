import Link from 'next/link'

interface CTABannerProps {
  heading?: string
  body?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTABanner({
  heading = 'Ready to Begin Your Ohana Journey?',
  body = 'We know how meaningful these first months are. Let us partner with your family to provide a gentle, joyful start for your child.',
  primaryLabel = 'Schedule a Personal Tour',
  primaryHref = '/schedule-a-tour',
  secondaryLabel = 'Contact Us',
  secondaryHref = '/contact',
}: CTABannerProps) {
  return (
    <section className="py-20" style={{ background: 'var(--forest)' }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-white font-bold mb-4" style={{ fontSize: 'clamp(26px, 4vw, 42px)', lineHeight: 1.2 }}>
          {heading}
        </h2>
        <p className="leading-relaxed mb-10" style={{ color: '#c8c2b8', fontSize: '1.05rem' }}>{body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="px-8 py-4 text-white font-semibold rounded-full text-sm transition-opacity hover:opacity-90"
            style={{ background: 'var(--sage)' }}
          >
            {primaryLabel} →
          </Link>
          <Link
            href={secondaryHref}
            className="px-8 py-4 font-semibold rounded-full text-sm transition-colors border"
            style={{ color: '#e2ddd5', borderColor: 'rgba(255,255,255,0.2)', background: 'transparent' }}
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Animate, AnimateStagger, AnimateItem } from '@/components/Animate'

export const metadata: Metadata = {
  title: 'Montessori Summer Camp 2026 – Tustin, Irvine & Santa Ana | Ohana Montessori',
  description: 'Summer Camp for children 3–6 years old. Summer camp in Santa Ana, Summer camp in Tustin, Summer camp in Irvine.',
  alternates: { canonical: 'https://ohanamontessori.com/montessori-tustin-irvine-summer-camp-2026' },
  openGraph: {
    title: 'Montessori Summer Camp 2026 – Ohana Montessori',
    description: 'Summer Camp for children 3–6 years old serving Santa Ana, Tustin, and Irvine families.',
    images: [{ url: 'https://ohanamontessori.com/summer-camp-2026.webp' }],
  },
}

const FEATURES = [
  {
    heading: 'Flexible Schedule Options',
    items: ['Full Day & Half Day Programs', 'Extended Care Available'],
  },
  {
    heading: 'All-Inclusive Experience',
    items: ['Crafts • Themed Snacks', 'Enrichment Activities'],
  },
  {
    heading: 'Special Bonus',
    items: ['Enroll for both months & receive a', 'FREE Ohana Shirt'],
  },
  {
    heading: 'Limited Spots Available',
    items: ['Contact us to learn more & reserve your spot'],
  },
]

export default function SummerCampPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#F0F5F4', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <Animate className="flex-1 text-center lg:text-left">
            <p
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--brown)',
                marginBottom: '16px',
              }}
            >
              Ohana Montessori
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-baskervville)',
                fontWeight: 400,
                fontSize: 'clamp(36px, 5vw, 56px)',
                lineHeight: 1.15,
                color: '#1C1C18',
                marginBottom: '20px',
              }}
            >
              Summer Camp 2026
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: '20px',
                fontWeight: 500,
                color: '#355E54',
                marginBottom: '16px',
              }}
            >
              A summer full of fun, creativity &amp; exploration
            </p>
            <p
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: '17px',
                lineHeight: '1.7em',
                color: 'var(--text-muted)',
                marginBottom: '32px',
              }}
            >
              From ocean adventures to space explorations, each week brings new themed fun filled with creativity and discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact-daycare-preschool-santa-ana-tustin"
                style={{
                  fontFamily: 'var(--font-work-sans)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  color: '#fff',
                  background: 'var(--brown)',
                  border: '1px solid var(--brown)',
                  borderRadius: '100px',
                  padding: '13px 40px',
                  display: 'inline-block',
                }}
                className="transition-colors hover:bg-transparent hover:text-[var(--brown)]"
              >
                Reserve Your Spot
              </Link>
              <a
                href="tel:+17149427135"
                style={{
                  fontFamily: 'var(--font-work-sans)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  color: 'var(--brown)',
                  background: 'transparent',
                  border: '1px solid var(--brown)',
                  borderRadius: '100px',
                  padding: '13px 40px',
                  display: 'inline-block',
                }}
                className="transition-colors hover:bg-[var(--brown)] hover:text-white"
              >
                (714) 942-7135
              </a>
            </div>
          </Animate>

          {/* Flyer image */}
          <Animate className="flex-shrink-0">
            <Image
              src="/summer-camp-2026.webp"
              alt="Ohana Montessori Summer Camp 2026 Flyer"
              width={400}
              height={430}
              style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '8px', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}
              priority
            />
          </Animate>
        </div>
      </section>

      {/* Feature cards */}
      <section style={{ background: '#fff', paddingTop: '70px', paddingBottom: '70px' }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <Animate className="text-center mb-12">
            <h2
              style={{
                fontFamily: 'var(--font-baskervville)',
                fontWeight: 400,
                fontSize: 'clamp(28px, 4vw, 40px)',
                color: '#1C1C18',
              }}
            >
              What's Included
            </h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <AnimateItem key={f.heading}>
                <div
                  style={{
                    background: '#F0F5F4',
                    borderRadius: '8px',
                    padding: '32px 24px',
                    height: '100%',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-baskervville)',
                      fontWeight: 400,
                      fontSize: '20px',
                      color: '#355E54',
                      marginBottom: '14px',
                    }}
                  >
                    {f.heading}
                  </h3>
                  {f.items.map((item) => (
                    <p
                      key={item}
                      style={{
                        fontFamily: 'var(--font-work-sans)',
                        fontSize: '16px',
                        color: 'var(--text-muted)',
                        lineHeight: '1.6em',
                        margin: '0 0 6px',
                      }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ background: '#355E54', padding: '70px 10px' }}>
        <div className="max-w-[700px] mx-auto text-center px-6">
          <Animate>
            <h2
              style={{
                fontFamily: 'var(--font-baskervville)',
                fontWeight: 400,
                fontSize: 'clamp(28px, 4vw, 40px)',
                color: '#fff',
                marginBottom: '16px',
              }}
            >
              Ready to Join Us This Summer?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontSize: '17px',
                lineHeight: '1.7em',
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '32px',
              }}
            >
              Spots are limited. Contact us today at{' '}
              <a href="tel:+17149427135" style={{ color: '#fff', textDecoration: 'underline' }}>(714) 942-7135</a>
              {' '}or{' '}
              <a href="mailto:info@ohanamontessori.com" style={{ color: '#fff', textDecoration: 'underline' }}>info@ohanamontessori.com</a>
            </p>
          </Animate>
          <Animate className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-daycare-preschool-santa-ana-tustin"
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                textTransform: 'uppercase',
                fontSize: '14px',
                color: '#355E54',
                background: '#fff',
                border: '1px solid #fff',
                borderRadius: '100px',
                padding: '13px 50px',
                display: 'inline-block',
              }}
              className="transition-colors hover:bg-transparent hover:text-white"
            >
              Contact Us
            </Link>
            <Link
              href="/schedule-a-tour-santa-ana-daycare-preschool"
              style={{
                fontFamily: 'var(--font-work-sans)',
                fontWeight: 500,
                textTransform: 'uppercase',
                fontSize: '14px',
                color: '#fff',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.6)',
                borderRadius: '100px',
                padding: '13px 50px',
                display: 'inline-block',
              }}
              className="transition-colors hover:border-white"
            >
              Schedule a Tour
            </Link>
          </Animate>
        </div>
      </section>
    </>
  )
}
